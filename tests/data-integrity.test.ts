import { describe, expect, it } from 'vitest';
import {
  ALL_CONCEPTS,
  ALL_WEAPONS,
  CONCEPTS_BY_SPHERE,
  SCENARIOS,
  SPHERES,
  getConceptById,
  getConceptByRef,
  getSphereById,
} from '../src/data';
import type { SphereId } from '../src/types/curriculum';

const VALID_CONTEXT_TAGS = new Set([
  'Executive',
  'Debate',
  'Negotiation',
  'Interpersonal',
  'Crisis',
]);

const VALID_DIFFICULTIES = new Set(['Foundational', 'Advanced', 'Lethal']);
const VALID_PLATFORMS = new Set(['Podcast', 'Lecture', 'Paper', 'Monograph']);

describe('curriculum shape', () => {
  it('holds exactly 40 concepts', () => {
    expect(ALL_CONCEPTS).toHaveLength(40);
  });

  it('has no duplicate concept ids', () => {
    const ids = ALL_CONCEPTS.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('numbers globalIndex contiguously from 1', () => {
    const indices = ALL_CONCEPTS.map((c) => c.globalIndex).sort((a, b) => a - b);
    expect(indices).toEqual(Array.from({ length: ALL_CONCEPTS.length }, (_, i) => i + 1));
  });

  it('keeps concepts in globalIndex order so prev/next paging is monotonic', () => {
    const indices = ALL_CONCEPTS.map((c) => c.globalIndex);
    expect(indices).toEqual([...indices].sort((a, b) => a - b));
  });

  it('numbers each sphere 1..n internally', () => {
    for (const sphere of SPHERES) {
      const numbers = CONCEPTS_BY_SPHERE[sphere.id].map((c) => c.numberInSphere).sort((a, b) => a - b);
      expect(numbers, sphere.id).toEqual(
        Array.from({ length: CONCEPTS_BY_SPHERE[sphere.id].length }, (_, i) => i + 1)
      );
    }
  });
});

describe('sphere wiring', () => {
  it('files every concept under the sphere it declares', () => {
    for (const [sphereId, concepts] of Object.entries(CONCEPTS_BY_SPHERE)) {
      for (const concept of concepts) {
        expect(concept.sphereId, concept.id).toBe(sphereId);
      }
    }
  });

  it('matches each sphere conceptsCount to reality (it drives the UI badge)', () => {
    for (const sphere of SPHERES) {
      expect(CONCEPTS_BY_SPHERE[sphere.id].length, sphere.id).toBe(sphere.conceptsCount);
    }
  });

  it('resolves every concept sphereId to a real sphere', () => {
    for (const concept of ALL_CONCEPTS) {
      expect(getSphereById(concept.sphereId), concept.id).toBeDefined();
    }
  });

  it('accounts for every concept across the sphere buckets', () => {
    const bucketed = Object.values(CONCEPTS_BY_SPHERE).flat().length;
    expect(bucketed).toBe(ALL_CONCEPTS.length);
  });
});

describe('concept content contract', () => {
  it.each(ALL_CONCEPTS.map((c) => [c.id, c] as const))('%s is complete', (_id, concept) => {
    expect(concept.title.trim()).not.toBe('');
    expect(concept.tagline.trim()).not.toBe('');
    expect(concept.plainEnglishAnalogy.trim()).not.toBe('');
    expect(concept.everydayHumanBehavior.trim()).not.toBe('');

    expect(concept.formalTerminology.keyThinkers.length).toBeGreaterThan(0);
    expect(concept.formalTerminology.definition.trim()).not.toBe('');

    expect(concept.underlyingMechanism.evolutionaryDriver.trim()).not.toBe('');
    expect(concept.underlyingMechanism.neurologicalBasis.trim()).not.toBe('');

    expect(concept.realWorldRecognition.personalLifeTrigger.scenario.trim()).not.toBe('');
    expect(concept.realWorldRecognition.professionalLifeTrigger.scenario.trim()).not.toBe('');

    expect(concept.tags.length).toBeGreaterThan(0);
    expect(VALID_DIFFICULTIES.has(concept.difficulty)).toBe(true);
  });

  it('gives every concept at least two conversational weapons', () => {
    for (const concept of ALL_CONCEPTS) {
      expect(concept.conversationalWeaponry.length, concept.id).toBeGreaterThanOrEqual(2);
    }
  });

  it('tags every weapon with a context the Arena filter can show', () => {
    for (const weapon of ALL_WEAPONS) {
      expect(VALID_CONTEXT_TAGS.has(weapon.contextTag), weapon.key).toBe(true);
      expect(weapon.phrase.trim()).not.toBe('');
      expect(weapon.rationale.trim()).not.toBe('');
    }
  });

  it('gives every weapon a stable unique key', () => {
    const keys = ALL_WEAPONS.map((w) => w.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('points every concept at a reachable high-signal source', () => {
    for (const concept of ALL_CONCEPTS) {
      const source = concept.highSignalSource;
      expect(VALID_PLATFORMS.has(source.platform), concept.id).toBe(true);
      expect(source.searchQuery.trim(), concept.id).not.toBe('');
      expect(source.url, concept.id).toBeDefined();
      expect(source.url, concept.id).toMatch(/^https:\/\//);
    }
  });
});

describe('scenario lab wiring', () => {
  it('resolves every option conceptId to a real concept', () => {
    for (const scenario of SCENARIOS) {
      for (const option of scenario.options) {
        expect(getConceptById(option.conceptId), `${scenario.id}/${option.id}`).toBeDefined();
      }
    }
  });

  it('marks exactly one correct option per scenario', () => {
    for (const scenario of SCENARIOS) {
      const correct = scenario.options.filter((o) => o.isCorrect);
      expect(correct.length, scenario.id).toBe(1);
    }
  });

  it('uses unique option ids within a scenario', () => {
    for (const scenario of SCENARIOS) {
      const ids = scenario.options.map((o) => o.id);
      expect(new Set(ids).size, scenario.id).toBe(ids.length);
    }
  });

  it('gives every option an explanation and a recommended counter-move', () => {
    for (const scenario of SCENARIOS) {
      for (const option of scenario.options) {
        expect(option.explanation.trim(), option.id).not.toBe('');
        expect(option.weaponRecommendation.trim(), option.id).not.toBe('');
      }
    }
  });

  it('uses unique scenario ids', () => {
    const ids = SCENARIOS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('concept lookup', () => {
  it('resolves a share link by global index', () => {
    const concept = getConceptByRef('23');
    expect(concept?.globalIndex).toBe(23);
  });

  it('resolves a link by slug id', () => {
    const first = ALL_CONCEPTS[0];
    expect(getConceptByRef(first.id)?.id).toBe(first.id);
  });

  it('returns undefined for an out-of-range or junk reference', () => {
    expect(getConceptByRef('999')).toBeUndefined();
    expect(getConceptByRef('not-a-real-concept')).toBeUndefined();
    expect(getConceptByRef('')).toBeUndefined();
  });

  it('resolves every concept by its own global index', () => {
    for (const concept of ALL_CONCEPTS) {
      expect(getConceptByRef(String(concept.globalIndex))?.id).toBe(concept.id);
    }
  });

  it('resolves every sphere id', () => {
    const ids: SphereId[] = [
      'internal-architecture',
      'social-dynamics',
      'strategic-interactions',
      'behavioral-economics',
    ];
    for (const id of ids) {
      expect(getSphereById(id)?.id).toBe(id);
    }
  });
});
