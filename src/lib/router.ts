import { useMemo, useSyncExternalStore } from 'react';
import type { SphereId } from '../types/curriculum';

export type TabId = 'curriculum' | 'weaponry' | 'battlecards' | 'scenarios' | 'vault';
export type DifficultyFilter = 'All' | 'Foundational' | 'Advanced' | 'Lethal';
export type ContextTagFilter =
  | 'All'
  | 'Executive'
  | 'Debate'
  | 'Negotiation'
  | 'Crisis'
  | 'Interpersonal';

export interface Route {
  tab: TabId;
  /** Global index ("23") or slug id of the concept whose detail modal is open. */
  conceptRef: string | null;
  /** When true, show the long-form deep dive instead of the concept brief. */
  reading: boolean;
  sphere: SphereId | 'all';
  difficulty: DifficultyFilter;
  tag: ContextTagFilter;
  q: string;
}

export const DEFAULT_ROUTE: Route = {
  tab: 'curriculum',
  conceptRef: null,
  reading: false,
  sphere: 'all',
  difficulty: 'All',
  tag: 'All',
  q: '',
};

const TAB_BY_SLUG: Record<string, TabId> = {
  '': 'curriculum',
  curriculum: 'curriculum',
  arena: 'weaponry',
  weaponry: 'weaponry',
  prep: 'battlecards',
  battlecards: 'battlecards',
  preflight: 'battlecards',
  lab: 'scenarios',
  scenarios: 'scenarios',
  vault: 'vault',
};

const SLUG_BY_TAB: Record<TabId, string> = {
  curriculum: '',
  weaponry: 'arena',
  battlecards: 'prep',
  scenarios: 'lab',
  vault: 'vault',
};

export const TAB_TITLES: Record<TabId, string> = {
  curriculum: 'Curriculum',
  weaponry: 'Field Weaponry',
  battlecards: 'Battle Prep',
  scenarios: 'Combat Arena',
  vault: 'Mastery Vault',
};

const SPHERE_IDS: readonly SphereId[] = [
  'internal-architecture',
  'social-dynamics',
  'strategic-interactions',
  'behavioral-economics',
];

const DIFFICULTIES: readonly DifficultyFilter[] = ['All', 'Foundational', 'Advanced', 'Lethal'];

export const CONTEXT_TAGS: readonly ContextTagFilter[] = [
  'All',
  'Executive',
  'Debate',
  'Negotiation',
  'Crisis',
  'Interpersonal',
];

/** Parse `location.hash` into a fully-validated Route. Junk values fall back to defaults. */
export function parseHash(rawHash: string): Route {
  const hash = rawHash.replace(/^#/, '') || '/';
  const [path, search = ''] = hash.split('?');
  const params = new URLSearchParams(search);
  const segments = path.split('/').filter(Boolean);

  let tab: TabId = 'curriculum';
  let conceptRef = params.get('c');
  let reading = params.get('read') === '1';

  if (segments[0] === 'c') {
    // Short shareable forms: #/c/23 and #/c/23/read
    if (segments[1]) conceptRef = decodeURIComponent(segments[1]);
    if (segments[2] === 'read') reading = true;
  } else if (segments.length > 0) {
    tab = TAB_BY_SLUG[segments[0]] ?? 'curriculum';
  }

  const sphereParam = params.get('sphere');
  const difficultyParam = params.get('difficulty');
  const tagParam = params.get('tag');

  return {
    tab,
    conceptRef: conceptRef || null,
    // Reading mode is meaningless without a concept to read.
    reading: reading && Boolean(conceptRef),
    sphere: SPHERE_IDS.includes(sphereParam as SphereId) ? (sphereParam as SphereId) : 'all',
    difficulty: DIFFICULTIES.includes(difficultyParam as DifficultyFilter)
      ? (difficultyParam as DifficultyFilter)
      : 'All',
    tag: CONTEXT_TAGS.includes(tagParam as ContextTagFilter)
      ? (tagParam as ContextTagFilter)
      : 'All',
    q: params.get('q') ?? '',
  };
}

/** Serialise a Route back to a hash, omitting every default so URLs stay short. */
export function buildHash(route: Route): string {
  const params = new URLSearchParams();

  if (route.tab === 'curriculum') {
    if (route.sphere !== 'all') params.set('sphere', route.sphere);
    if (route.difficulty !== 'All') params.set('difficulty', route.difficulty);
  }
  if (route.tab === 'weaponry') {
    if (route.tag !== 'All') params.set('tag', route.tag);
    if (route.q.trim()) params.set('q', route.q.trim());
  }
  if (route.conceptRef) {
    params.set('c', route.conceptRef);
    if (route.reading) params.set('read', '1');
  }

  const qs = params.toString();
  return `#/${SLUG_BY_TAB[route.tab]}${qs ? `?${qs}` : ''}`;
}

/**
 * Canonical short link for a concept, e.g. `https://host/path#/c/23` — or
 * `#/c/23/read` for the deep dive. Prettier than the query form used internally,
 * and `parseHash` accepts both.
 */
export function conceptShareUrl(globalIndex: number, reading = false): string {
  const { origin, pathname, search } = window.location;
  return `${origin}${pathname}${search}#/c/${globalIndex}${reading ? '/read' : ''}`;
}

const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  window.addEventListener('hashchange', onStoreChange);
  window.addEventListener('popstate', onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener('hashchange', onStoreChange);
    window.removeEventListener('popstate', onStoreChange);
  };
}

const getSnapshot = () => window.location.hash || '#/';

/**
 * Entries this app pushed are tagged so `closeOverlay` knows whether going back
 * stays inside the app or would leave the site (e.g. a cold deep link).
 */
interface HistoryMarker {
  co?: true;
}

function currentUrlFor(hash: string): string {
  const { pathname, search } = window.location;
  return `${pathname}${search}${hash}`;
}

export function navigate(next: Route, options: { replace?: boolean } = {}): void {
  const hash = buildHash(next);
  if (hash === (window.location.hash || '#/')) return;

  if (options.replace) {
    // Preserve the marker: replacing must not change whether back() is safe.
    window.history.replaceState(window.history.state, '', currentUrlFor(hash));
  } else {
    window.history.pushState({ co: true } satisfies HistoryMarker, '', currentUrlFor(hash));
  }
  emit();
}

/**
 * Dismiss a routed overlay (the concept modal). Uses a real history step when this
 * app pushed the current entry, so Android's back gesture and the close button agree.
 */
export function closeOverlay(fallback: Route): void {
  const marker = window.history.state as HistoryMarker | null;
  if (marker?.co) {
    window.history.back();
  } else {
    navigate(fallback, { replace: true });
  }
}

export function useRoute(): Route {
  const hash = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  return useMemo(() => parseHash(hash), [hash]);
}
