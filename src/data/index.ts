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

export function getConceptById(id: string): Concept | undefined {
  return ALL_CONCEPTS.find(c => c.id === id);
}

export function getSphereById(id: SphereId): Sphere | undefined {
  return SPHERES.find(s => s.id === id);
}

export interface FlattenedWeapon extends ConversationalWeapon {
  conceptId: string;
  conceptTitle: string;
  sphereId: SphereId;
}

export function getAllWeapons(): FlattenedWeapon[] {
  return ALL_CONCEPTS.flatMap(c => 
    c.conversationalWeaponry.map(w => ({
      ...w,
      conceptId: c.id,
      conceptTitle: c.title,
      sphereId: c.sphereId,
    }))
  );
}
