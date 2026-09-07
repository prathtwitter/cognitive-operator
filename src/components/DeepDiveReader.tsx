import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowLeft, Share2, Check, X, Clock, Eye, Swords, AlertTriangle,
  BookOpen, Lightbulb, ExternalLink, Loader2,
} from 'lucide-react';
import type { Concept, DeepDive } from '../types/curriculum';
import { getSphereById } from '../data';
import { loadDeepDive, peekDeepDive } from '../data/deepdives';
import { shareUrl } from '../lib/clipboard';
import { conceptShareUrl } from '../lib/router';

interface DeepDiveReaderProps {
  concept: Concept;
  onClose: () => void;
}

type LoadState =
  | { status: 'loading' }
  | { status: 'ready'; deepDive: DeepDive }
  | { status: 'missing' }
  | { status: 'error' };

type ShareState = 'idle' | 'shared' | 'copied' | 'failed';

export const DeepDiveReader: React.FC<DeepDiveReaderProps> = ({ concept, onClose }) => {
  const initial = peekDeepDive(concept);
  const [state, setState] = useState<LoadState>(
    initial ? { status: 'ready', deepDive: initial } : { status: 'loading' }
  );
  const [shareState, setShareState] = useState<ShareState>('idle');
  const [progress, setProgress] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (initial) return;
    let cancelled = false;

    loadDeepDive(concept)
      .then((deepDive) => {
        if (cancelled) return;
        setState(deepDive ? { status: 'ready', deepDive } : { status: 'missing' });
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error' });
      });

    return () => {
      cancelled = true;
    };
  }, [concept, initial]);

  // Reading surface owns the viewport: lock the page behind it and take Escape.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
      }
    };
    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollable = el.scrollHeight - el.clientHeight;
    setProgress(scrollable <= 0 ? 100 : Math.min(100, (el.scrollTop / scrollable) * 100));
  }, []);

  const handleShare = useCallback(async () => {
    const result = await shareUrl(concept.title, conceptShareUrl(concept.globalIndex, true));
    setShareState(result === 'failed' ? 'failed' : result);
    setTimeout(() => setShareState('idle'), 2000);
  }, [concept]);

  const sphere = getSphereById(concept.sphereId);
  const deepDive = state.status === 'ready' ? state.deepDive : null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-[#0b0d13]"
      role="dialog"
      aria-modal="true"
      aria-label={`Deep dive: ${concept.title}`}
    >
      {/* Reading progress */}
      <div className="absolute top-0 left-0 right-0 z-20 h-0.5 bg-zinc-900">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between gap-3 border-b border-zinc-800/70 bg-[#0b0d13]/95 px-4 sm:px-6 py-3 pt-safe backdrop-blur-md">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Back to brief</span>
          <span className="sm:hidden">Back</span>
        </button>

        <div className="flex min-w-0 items-center gap-2 text-[11px] text-zinc-500">
          <span className="font-mono">#{String(concept.globalIndex).padStart(2, '0')}</span>
          <span className="hidden truncate sm:inline">{sphere?.shortTitle}</span>
          {deepDive && (
            <>
              <span aria-hidden="true">•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {deepDive.readingTimeMinutes} min
              </span>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={handleShare}
          className="rounded-lg p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          aria-label="Share this deep dive"
          title={shareState === 'failed' ? 'Could not copy link' : 'Share this deep dive'}
        >
          {shareState === 'idle' ? (
            <Share2 className="h-4 w-4" />
          ) : shareState === 'failed' ? (
            <X className="h-4 w-4 text-rose-400" />
          ) : (
            <Check className="h-4 w-4 text-emerald-400" />
          )}
        </button>
      </header>

      {/* Scrollable reading surface */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="h-full overflow-y-auto overscroll-contain pt-16 pb-24"
      >
        <article className="mx-auto w-full max-w-[46rem] px-5 sm:px-8">
          {/* Title block */}
          <header className="pt-8 pb-6">
            <div className={`inline-flex items-center gap-2 rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${sphere?.badgeColor}`}>
              Sphere {sphere?.number}: {sphere?.shortTitle}
            </div>
            <h1 className="mt-4 text-[1.75rem] sm:text-[2.4rem] font-extrabold leading-[1.15] tracking-tight text-white">
              {concept.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-cyan-300/85">
              {concept.tagline}
            </p>
          </header>

          {state.status === 'loading' && (
            <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-[#11131a] p-6 text-sm text-zinc-400">
              <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
              Loading the deep dive…
            </div>
          )}

          {state.status === 'missing' && (
            <div className="rounded-2xl border border-dashed border-zinc-800 bg-[#11131a] p-8 text-center">
              <BookOpen className="mx-auto h-6 w-6 text-zinc-600" />
              <p className="mt-3 text-sm font-semibold text-zinc-300">
                The deep dive for this concept is still being written.
              </p>
              <p className="mt-1.5 text-xs text-zinc-500">
                The full brief, weapons and curated source are all available on the concept page.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-5 rounded-xl bg-zinc-800 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-700 transition-colors"
              >
                Back to the brief
              </button>
            </div>
          )}

          {state.status === 'error' && (
            <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-6 text-sm text-rose-200">
              This deep dive could not be loaded. If you are offline, it may not have been
              cached yet — reconnect once and it will be available from then on.
            </div>
          )}

          {deepDive && (
            <>
              {/* Cold open */}
              <div className="rounded-2xl border-l-2 border-cyan-500/60 bg-gradient-to-r from-cyan-950/25 to-transparent py-4 pl-5 pr-4 sm:pl-6">
                <p className="text-[1.02rem] sm:text-[1.09rem] leading-[1.75] text-zinc-200">
                  {deepDive.hook}
                </p>
              </div>

              {/* Narrative */}
              {deepDive.sections.map((section, i) => (
                <section key={i} className="mt-11">
                  <h2 className="mb-4 text-xl sm:text-2xl font-bold tracking-tight text-white">
                    <span className="mr-2.5 font-mono text-sm text-cyan-500/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {section.heading}
                  </h2>

                  <div className="space-y-5">
                    {section.body.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-[1.02rem] sm:text-[1.07rem] leading-[1.78] text-zinc-300/95"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.example && (
                    <aside className="mt-6 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-950/15 to-[#11131a] p-5">
                      <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-amber-400">
                        {section.example.label}
                      </div>
                      <p className="text-[0.97rem] leading-[1.72] text-zinc-300">
                        {section.example.body}
                      </p>
                    </aside>
                  )}
                </section>
              ))}

              {/* Spot it */}
              <section className="mt-14">
                <h2 className="flex items-center gap-2.5 text-xl sm:text-2xl font-bold tracking-tight text-white">
                  <Eye className="h-5 w-5 text-cyan-400" />
                  How to spot it
                </h2>
                <p className="mt-2 text-sm text-zinc-500">
                  Observable signals, not inferences. If you notice one of these, the pattern is probably live.
                </p>
                <ul className="mt-5 space-y-3">
                  {deepDive.spotIt.map((item, i) => (
                    <li key={i} className="rounded-xl border border-zinc-800/80 bg-[#11131a] p-4">
                      <p className="text-[0.97rem] font-semibold leading-snug text-white">
                        {item.signal}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{item.meaning}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Playbook */}
              <section className="mt-14">
                <h2 className="flex items-center gap-2.5 text-xl sm:text-2xl font-bold tracking-tight text-white">
                  <Swords className="h-5 w-5 text-amber-400" />
                  How to work with it
                </h2>
                <ol className="mt-5 space-y-4">
                  {deepDive.playbook.map((step, i) => (
                    <li
                      key={i}
                      className="rounded-2xl border border-zinc-800/80 bg-[#11131a] p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-amber-950/60 text-xs font-bold text-amber-300 border border-amber-800/40">
                          {i + 1}
                        </span>
                        <div className="min-w-0">
                          <p className="text-[0.99rem] font-semibold leading-snug text-white">
                            {step.move}
                          </p>
                          <p className="mt-2 text-sm leading-[1.7] text-zinc-300">{step.how}</p>
                          {step.watchOut && (
                            <p className="mt-2.5 border-l-2 border-rose-500/40 pl-3 text-sm leading-relaxed text-rose-200/80">
                              <strong className="font-semibold text-rose-300">Watch out: </strong>
                              {step.watchOut}
                            </p>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Misreads */}
              <section className="mt-14">
                <h2 className="flex items-center gap-2.5 text-xl sm:text-2xl font-bold tracking-tight text-white">
                  <AlertTriangle className="h-5 w-5 text-rose-400" />
                  Where people get this wrong
                </h2>
                <div className="mt-5 space-y-3">
                  {deepDive.commonMisreads.map((item, i) => (
                    <div key={i} className="rounded-xl border border-zinc-800/80 bg-[#11131a] p-4">
                      <p className="text-sm font-semibold text-rose-300/90 line-through decoration-rose-500/40">
                        {item.misread}
                      </p>
                      <p className="mt-2 text-sm leading-[1.7] text-zinc-300">{item.correction}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Evidence */}
              <section className="mt-14">
                <h2 className="flex items-center gap-2.5 text-xl sm:text-2xl font-bold tracking-tight text-white">
                  <BookOpen className="h-5 w-5 text-sky-400" />
                  What the research actually says
                </h2>
                <div className="mt-5 space-y-3">
                  {deepDive.evidence.map((item, i) => (
                    <div key={i} className="rounded-xl border border-zinc-800/80 bg-[#11131a] p-4">
                      <p className="text-[13px] font-semibold text-sky-300">{item.source}</p>
                      <p className="mt-1.5 text-sm leading-[1.7] text-zinc-300">{item.finding}</p>
                      {item.caveat && (
                        <p className="mt-2.5 rounded-lg border border-amber-700/40 bg-amber-950/25 px-3 py-2 text-[13px] leading-relaxed text-amber-200/90">
                          <strong className="font-semibold text-amber-300">Caveat: </strong>
                          {item.caveat}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Primary source hand-off */}
                <a
                  href={
                    concept.highSignalSource.url ??
                    `https://www.google.com/search?q=${encodeURIComponent(concept.highSignalSource.searchQuery)}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-between gap-3 rounded-2xl border border-cyan-500/25 bg-cyan-950/15 p-4 transition-colors hover:bg-cyan-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                      Go to the primary source
                    </div>
                    <div className="mt-1 truncate text-sm font-semibold text-white">
                      {concept.highSignalSource.title}
                    </div>
                    <div className="mt-0.5 text-xs text-zinc-400">
                      {concept.highSignalSource.creatorOrHost} · {concept.highSignalSource.platform} · {concept.highSignalSource.duration}
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-cyan-400" />
                </a>
              </section>

              {/* Takeaways */}
              <section className="mt-14 mb-8 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 to-[#11131a] p-6 sm:p-7">
                <h2 className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white">
                  <Lightbulb className="h-5 w-5 text-emerald-400" />
                  If you remember nothing else
                </h2>
                <ul className="mt-4 space-y-3">
                  {deepDive.takeaways.map((takeaway, i) => (
                    <li key={i} className="flex gap-3 text-[0.97rem] leading-[1.7] text-zinc-200">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="pb-10 text-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-xs font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  ← Back to the concept brief
                </button>
              </div>
            </>
          )}
        </article>
      </div>
    </div>
  );
};
