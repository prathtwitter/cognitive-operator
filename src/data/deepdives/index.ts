import type { Concept, DeepDive, SphereId } from '../../types/curriculum';
import { CONCEPTS_WITH_DEEP_DIVE } from './registry';

type DeepDiveMap = Record<string, DeepDive>;

export { CONCEPTS_WITH_DEEP_DIVE };

/**
 * Deep dives are long-form prose — roughly an order of magnitude more text than the
 * concept briefs. They are code-split per sphere and pulled in on demand so the
 * initial bundle stays small, then background-prefetched so offline still works.
 */
const LOADERS: Record<SphereId, () => Promise<DeepDiveMap>> = {
  'internal-architecture': () => import('./sphere1').then((m) => m.SPHERE_1_DEEP_DIVES),
  'social-dynamics': () => import('./sphere2').then((m) => m.SPHERE_2_DEEP_DIVES),
  'strategic-interactions': () => import('./sphere3').then((m) => m.SPHERE_3_DEEP_DIVES),
  'behavioral-economics': () => import('./sphere4').then((m) => m.SPHERE_4_DEEP_DIVES),
};

export function hasDeepDive(concept: Concept): boolean {
  return CONCEPTS_WITH_DEEP_DIVE.has(concept.id);
}

const loaded = new Map<SphereId, DeepDiveMap>();
const inFlight = new Map<SphereId, Promise<DeepDiveMap>>();

function loadSphere(sphereId: SphereId): Promise<DeepDiveMap> {
  const cached = loaded.get(sphereId);
  if (cached) return Promise.resolve(cached);

  const existing = inFlight.get(sphereId);
  if (existing) return existing;

  const promise = LOADERS[sphereId]()
    .then((map) => {
      loaded.set(sphereId, map);
      inFlight.delete(sphereId);
      return map;
    })
    .catch((error) => {
      inFlight.delete(sphereId);
      throw error;
    });

  inFlight.set(sphereId, promise);
  return promise;
}

/** Synchronous peek — returns the deep dive only if its sphere chunk is already loaded. */
export function peekDeepDive(concept: Concept): DeepDive | undefined {
  return loaded.get(concept.sphereId)?.[concept.id];
}

export async function loadDeepDive(concept: Concept): Promise<DeepDive | undefined> {
  const map = await loadSphere(concept.sphereId);
  return map[concept.id];
}

/**
 * Warm every chunk once the app is idle, so an installed PWA has the full library
 * cached before it ever goes offline. Failures are silent by design.
 */
export function prefetchDeepDives(): void {
  const run = () => {
    for (const sphereId of Object.keys(LOADERS) as SphereId[]) {
      loadSphere(sphereId).catch(() => {});
    }
  };

  // `'x' in window` narrows `window` itself to never in the else branch, so probe
  // the property directly instead.
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(run, { timeout: 10_000 });
  } else {
    window.setTimeout(run, 3_000);
  }
}
