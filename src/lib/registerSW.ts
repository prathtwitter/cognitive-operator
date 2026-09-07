/**
 * Register the offline service worker.
 *
 * Resolved against the document URL so it works both at a root domain (Vercel) and
 * under a project subpath (GitHub Pages) without a build-time base being baked in.
 * Dev is deliberately excluded so hot reload is never served from cache.
 */
export function registerServiceWorker(): void {
  if (!import.meta.env.PROD) return;
  if (!('serviceWorker' in navigator)) return;

  const register = () => {
    const swUrl = new URL(`${import.meta.env.BASE_URL}sw.js`, window.location.href).href;
    navigator.serviceWorker.register(swUrl).catch(() => {
      // Offline support is an enhancement; a failed registration must never break
      // the app (unsupported browser, private mode, blocked scope, embedded webview).
    });
  };

  // Waiting on `load` keeps registration off the critical path — but if the document
  // has already finished loading, that event will never fire again.
  if (document.readyState === 'complete') {
    register();
  } else {
    window.addEventListener('load', register, { once: true });
  }
}
