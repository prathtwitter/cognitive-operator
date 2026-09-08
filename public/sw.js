/*
 * Cognitive Operator service worker.
 *
 * Strategy, by request kind:
 *   navigations  -> network-first, cache fallback. A new deploy is picked up on the
 *                   next online launch; a cold offline launch still boots.
 *   /assets/*    -> cache-first. Vite content-hashes these filenames, so a cached
 *                   entry can never be stale for a given URL.
 *   other GETs   -> stale-while-revalidate (icons, manifest, svg).
 *
 * Bump CACHE_VERSION to evict everything on the next activation.
 */

const CACHE_VERSION = 'cogop-v1';
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((key) => !key.startsWith(CACHE_VERSION)).map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

/** Only cache real, complete, same-origin responses. */
function isCacheable(response) {
  return response && response.ok && response.type === 'basic';
}

async function networkFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  try {
    const fresh = await fetch(request);
    if (isCacheable(fresh)) cache.put(request, fresh.clone());
    return fresh;
  } catch {
    const cached =
      (await cache.match(request)) ||
      (await cache.match(self.registration.scope)) ||
      (await cache.match(new URL('index.html', self.registration.scope).href));
    if (cached) return cached;
    return new Response('Offline and no cached copy is available.', {
      status: 503,
      statusText: 'Offline',
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;

  const fresh = await fetch(request);
  if (isCacheable(fresh)) cache.put(request, fresh.clone());
  return fresh;
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);

  const network = fetch(request)
    .then((fresh) => {
      if (isCacheable(fresh)) cache.put(request, fresh.clone());
      return fresh;
    })
    .catch(() => undefined);

  return cached || (await network) || Response.error();
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  if (url.pathname.includes('/assets/')) {
    event.respondWith(cacheFirst(request));
    return;
  }

  event.respondWith(staleWhileRevalidate(request));
});
