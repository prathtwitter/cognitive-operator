import { SPHERES } from './spheres';
import { SPHERE_1_CONCEPTS } from './sphere1';
import { SPHERE_2_CONCEPTS } from './sphere2';
import { SPHERE_3_CONCEPTS } from './sphere3';
import { SPHERE_4_CONCEPTS } from './sphere4';
import { SCENARIOS } from './scenarios';
import type { Concept, Sphere, SphereId, ConversationalWeapon } from '../types/curriculum';

export { SPHERES, SCENARIOS };

export const ALL_CONCEPTS: Concept[] = [
  ...SPHERE_1_CONCEPTS,
  ...SPHERE_2_CONCEPTS,
  ...SPHERE_3_CONCEPTS,
  ...SPHERE_4_CONCEPTS,
];

export const CONCEPTS_BY_SPHERE: Record<SphereId, Concept[]> = {
  'internal-architecture': SPHERE_1_CONCEPTS,
  'social-dynamics': SPHERE_2_CONCEPTS,
  'strategic-interactions': SPHERE_3_CONCEPTS,
  'behavioral-economics': SPHERE_4_CONCEPTS,
};

const CONCEPT_BY_ID = new Map(ALL_CONCEPTS.map((c) => [c.id, c]));
const CONCEPT_BY_GLOBAL_INDEX = new Map(ALL_CONCEPTS.map((c) => [c.globalIndex, c]));
const SPHERE_BY_ID = new Map(SPHERES.map((s) => [s.id, s]));

export function getConceptById(id: string): Concept | undefined {
  return CONCEPT_BY_ID.get(id);
}

/**
 * Resolve a URL concept reference: either the global index ("23", the number shown
 * in the UI and used in short share links) or the slug id.
 */
export function getConceptByRef(ref: string): Concept | undefined {
  const index = Number(ref);
  if (Number.isInteger(index) && index > 0) {
    const byIndex = CONCEPT_BY_GLOBAL_INDEX.get(index);
    if (byIndex) return byIndex;
  }
  return CONCEPT_BY_ID.get(ref);
}

export function getSphereById(id: SphereId): Sphere | undefined {
  return SPHERE_BY_ID.get(id);
}

export interface FlattenedWeapon extends ConversationalWeapon {
  /** Stable identity, so React keys survive filtering. */
  key: string;
  conceptId: string;
  conceptTitle: string;
  sphereId: SphereId;
}

export const ALL_WEAPONS: FlattenedWeapon[] = ALL_CONCEPTS.flatMap((c) =>
  c.conversationalWeaponry.map((w, i) => ({
    ...w,
    key: `${c.id}#${i}`,
    conceptId: c.id,
    conceptTitle: c.title,
    sphereId: c.sphereId,
  }))
);

export function getAllWeapons(): FlattenedWeapon[] {
  return ALL_WEAPONS;
}
