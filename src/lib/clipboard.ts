/**
 * Copy text with a fallback for non-secure contexts.
 *
 * `navigator.clipboard` is undefined over plain http, which is exactly how the app is
 * opened for phone testing (http://<lan-ip>:5173). Without the fallback every copy
 * button throws an unhandled rejection and silently does nothing.
 */
export async function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Permission denied or transient failure — try the legacy path below.
    }
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

/** True when the platform can hand off to a native share sheet. */
export function canNativeShare(): boolean {
  return typeof navigator.share === 'function';
}

export async function shareUrl(title: string, url: string): Promise<'shared' | 'copied' | 'failed'> {
  if (canNativeShare()) {
    try {
      await navigator.share({ title, url });
      return 'shared';
    } catch (error) {
      // User dismissed the sheet — not a failure, and not something to fall back from.
      if (error instanceof DOMException && error.name === 'AbortError') return 'shared';
    }
  }
  return (await copyText(url)) ? 'copied' : 'failed';
}
