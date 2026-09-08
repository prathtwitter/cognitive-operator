import { describe, expect, it } from 'vitest';
import { ALL_CONCEPTS, getConceptById } from '../src/data';
import { CONCEPTS_WITH_DEEP_DIVE } from '../src/data/deepdives';
import { SPHERE_1_DEEP_DIVES } from '../src/data/deepdives/sphere1';
import { SPHERE_2_DEEP_DIVES } from '../src/data/deepdives/sphere2';
import { SPHERE_3_DEEP_DIVES } from '../src/data/deepdives/sphere3';
import { SPHERE_4_DEEP_DIVES } from '../src/data/deepdives/sphere4';
import type { DeepDive } from '../src/types/curriculum';

const CHUNKS = {
  'internal-architecture': SPHERE_1_DEEP_DIVES,
  'social-dynamics': SPHERE_2_DEEP_DIVES,
  'strategic-interactions': SPHERE_3_DEEP_DIVES,
  'behavioral-economics': SPHERE_4_DEEP_DIVES,
} as const;

const entries: Array<[string, DeepDive]> = Object.values(CHUNKS).flatMap((chunk) =>
  Object.entries(chunk)
);

const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

function totalWords(dive: DeepDive): number {
  let words = countWords(dive.hook);
  for (const section of dive.sections) {
    words += countWords(section.heading);
    words += section.body.reduce((sum, p) => sum + countWords(p), 0);
    if (section.example) words += countWords(section.example.body);
  }
  for (const item of dive.spotIt) words += countWords(item.signal) + countWords(item.meaning);
  for (const step of dive.playbook) {
    words += countWords(step.move) + countWords(step.how) + countWords(step.watchOut ?? '');
  }
  for (const item of dive.commonMisreads) {
    words += countWords(item.misread) + countWords(item.correction);
  }
  for (const item of dive.evidence) {
    words += countWords(item.finding) + countWords(item.caveat ?? '');
  }
  words += dive.takeaways.reduce((sum, t) => sum + countWords(t), 0);
  return words;
}

describe('deep dive registry', () => {
  it('stays in sync with the actual chunk contents', () => {
    const actual = new Set(entries.map(([id]) => id));
    expect([...actual].sort()).toEqual([...CONCEPTS_WITH_DEEP_DIVE].sort());
  });

  it('files every deep dive under the sphere chunk its concept belongs to', () => {
    for (const [sphereId, chunk] of Object.entries(CHUNKS)) {
      for (const conceptId of Object.keys(chunk)) {
        expect(getConceptById(conceptId)?.sphereId, conceptId).toBe(sphereId);
      }
    }
  });

  it('resolves every deep dive id to a real concept', () => {
    for (const [id] of entries) {
      expect(getConceptById(id), id).toBeDefined();
    }
  });

  it('never has a deep dive without a concept, or a duplicate across chunks', () => {
    const ids = entries.map(([id]) => id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.length).toBeLessThanOrEqual(ALL_CONCEPTS.length);
  });
});

describe.skipIf(entries.length === 0)('deep dive content contract', () => {
  it.each(entries)('%s has a complete structure', (_id, dive) => {
    expect(dive.hook.trim().length).toBeGreaterThan(200);
    expect(dive.sections.length).toBeGreaterThanOrEqual(4);
    expect(dive.spotIt.length).toBeGreaterThanOrEqual(4);
    expect(dive.playbook.length).toBeGreaterThanOrEqual(4);
    expect(dive.commonMisreads.length).toBeGreaterThanOrEqual(3);
    expect(dive.evidence.length).toBeGreaterThanOrEqual(3);
    expect(dive.takeaways.length).toBeGreaterThanOrEqual(4);
  });

  it.each(entries)('%s has no empty prose', (_id, dive) => {
    for (const section of dive.sections) {
      expect(section.heading.trim()).not.toBe('');
      expect(section.body.length).toBeGreaterThan(0);
      for (const paragraph of section.body) {
        expect(paragraph.trim().length).toBeGreaterThan(40);
      }
      if (section.example) {
        expect(section.example.label.trim()).not.toBe('');
        expect(section.example.body.trim().length).toBeGreaterThan(40);
      }
    }
    for (const item of dive.spotIt) {
      expect(item.signal.trim()).not.toBe('');
      expect(item.meaning.trim()).not.toBe('');
    }
    for (const step of dive.playbook) {
      expect(step.move.trim()).not.toBe('');
      expect(step.how.trim().length).toBeGreaterThan(40);
    }
    for (const item of dive.commonMisreads) {
      expect(item.misread.trim()).not.toBe('');
      expect(item.correction.trim().length).toBeGreaterThan(40);
    }
    for (const item of dive.evidence) {
      expect(item.source.trim()).not.toBe('');
      expect(item.finding.trim().length).toBeGreaterThan(40);
    }
    for (const takeaway of dive.takeaways) {
      expect(takeaway.trim().length).toBeGreaterThan(20);
    }
  });

  it.each(entries)('%s states a reading time its word count can support', (_id, dive) => {
    const words = totalWords(dive);
    const wpm = words / dive.readingTimeMinutes;

    // Dense material reads slower than casual prose. Anything outside this band means
    // the stated time is a guess rather than a measurement.
    expect(dive.readingTimeMinutes).toBeGreaterThanOrEqual(8);
    expect(wpm, `${words} words over ${dive.readingTimeMinutes} min`).toBeGreaterThan(110);
    expect(wpm, `${words} words over ${dive.readingTimeMinutes} min`).toBeLessThan(280);
  });
});
