import { describe, expect, it } from 'vitest';
import { buildHash, DEFAULT_ROUTE, parseHash } from '../src/lib/router';
import type { Route } from '../src/lib/router';

const route = (patch: Partial<Route> = {}): Route => ({ ...DEFAULT_ROUTE, ...patch });

describe('parseHash', () => {
  it('treats an empty hash as the curriculum default', () => {
    expect(parseHash('')).toEqual(DEFAULT_ROUTE);
    expect(parseHash('#')).toEqual(DEFAULT_ROUTE);
    expect(parseHash('#/')).toEqual(DEFAULT_ROUTE);
  });

  it('maps every tab slug', () => {
    expect(parseHash('#/').tab).toBe('curriculum');
    expect(parseHash('#/curriculum').tab).toBe('curriculum');
    expect(parseHash('#/arena').tab).toBe('weaponry');
    expect(parseHash('#/lab').tab).toBe('scenarios');
    expect(parseHash('#/vault').tab).toBe('vault');
  });

  it('reads the short concept link form', () => {
    expect(parseHash('#/c/23')).toEqual(route({ conceptRef: '23' }));
  });

  it('reads a concept opened over another tab', () => {
    expect(parseHash('#/arena?c=12')).toEqual(route({ tab: 'weaponry', conceptRef: '12' }));
  });

  it('reads curriculum filters', () => {
    expect(parseHash('#/?sphere=social-dynamics&difficulty=Lethal')).toEqual(
      route({ sphere: 'social-dynamics', difficulty: 'Lethal' })
    );
  });

  it('reads arena filters', () => {
    expect(parseHash('#/arena?tag=Negotiation&q=deadlock')).toEqual(
      route({ tab: 'weaponry', tag: 'Negotiation', q: 'deadlock' })
    );
  });

  it('falls back to defaults for junk values rather than rendering an empty list', () => {
    const parsed = parseHash('#/nonsense?sphere=made-up&difficulty=Impossible&tag=Nope');
    expect(parsed.tab).toBe('curriculum');
    expect(parsed.sphere).toBe('all');
    expect(parsed.difficulty).toBe('All');
    expect(parsed.tag).toBe('All');
  });

  it('decodes an encoded slug reference', () => {
    expect(parseHash('#/c/dual-process-miserliness').conceptRef).toBe('dual-process-miserliness');
  });

  it('reads the pretty deep-dive link form', () => {
    expect(parseHash('#/c/23/read')).toEqual(route({ conceptRef: '23', reading: true }));
  });

  it('reads the deep-dive query form over another tab', () => {
    expect(parseHash('#/arena?tag=Crisis&c=26&read=1')).toEqual(
      route({ tab: 'weaponry', tag: 'Crisis', conceptRef: '26', reading: true })
    );
  });

  it('ignores reading mode when no concept is referenced', () => {
    expect(parseHash('#/?read=1').reading).toBe(false);
    expect(parseHash('#/vault?read=1').reading).toBe(false);
  });
});

describe('buildHash', () => {
  it('omits every default', () => {
    expect(buildHash(DEFAULT_ROUTE)).toBe('#/');
  });

  it('writes the tab slug', () => {
    expect(buildHash(route({ tab: 'weaponry' }))).toBe('#/arena');
    expect(buildHash(route({ tab: 'scenarios' }))).toBe('#/lab');
    expect(buildHash(route({ tab: 'vault' }))).toBe('#/vault');
  });

  it('writes an open concept as a query param so the tab underneath is preserved', () => {
    expect(buildHash(route({ tab: 'weaponry', conceptRef: '7' }))).toBe('#/arena?c=7');
  });

  it('scopes filters to the tab that owns them', () => {
    // Arena filters must not leak into a curriculum URL, or vice versa.
    expect(buildHash(route({ tab: 'curriculum', tag: 'Crisis', q: 'panic' }))).toBe('#/');
    expect(buildHash(route({ tab: 'weaponry', sphere: 'social-dynamics' }))).toBe('#/arena');
  });

  it('trims whitespace-only searches out of the URL', () => {
    expect(buildHash(route({ tab: 'weaponry', q: '   ' }))).toBe('#/arena');
  });

  it('writes reading mode alongside the concept', () => {
    expect(buildHash(route({ conceptRef: '23', reading: true }))).toBe('#/?c=23&read=1');
  });

  it('drops reading mode when no concept is open', () => {
    expect(buildHash(route({ reading: true }))).toBe('#/');
  });
});

describe('round trip', () => {
  const cases: Route[] = [
    DEFAULT_ROUTE,
    route({ tab: 'vault' }),
    route({ tab: 'scenarios' }),
    route({ sphere: 'behavioral-economics', difficulty: 'Advanced' }),
    route({ tab: 'weaponry', tag: 'Negotiation', q: 'deadlock' }),
    route({ tab: 'weaponry', conceptRef: '31' }),
    route({ conceptRef: '5', sphere: 'internal-architecture' }),
    route({ conceptRef: '1', reading: true }),
    route({ tab: 'weaponry', tag: 'Crisis', conceptRef: '26', reading: true }),
  ];

  it.each(cases.map((c) => [buildHash(c), c] as const))(
    'survives %s',
    (hash, original) => {
      expect(parseHash(hash)).toEqual(original);
    }
  );
});
