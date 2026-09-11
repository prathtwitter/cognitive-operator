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

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
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
      className="fixed inset-0 z-[60] bg-[#08080a] text-stone-200"
      role="dialog"
      aria-modal="true"
      aria-label={`Deep dive: ${concept.title}`}
    >
      {/* Reading progress */}
      <div className="absolute top-0 left-0 right-0 z-20 h-0.5 bg-white/5">
        <div
          className="h-full bg-[#c48b76] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between gap-3 border-b border-white/[0.08] bg-[#08080a]/95 px-4 sm:px-6 py-3.5 pt-safe backdrop-blur-md">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-stone-300 hover:text-white hover:border-white/30 transition-colors focus-visible:outline-none cursor-pointer"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Back to brief</span>
          <span className="sm:hidden">Back</span>
        </button>

        <div className="flex min-w-0 items-center gap-2 text-[11px] text-stone-400">
          <span className="font-mono text-[#c48b76]">#{String(concept.globalIndex).padStart(2, '0')}</span>
          <span className="hidden truncate sm:inline">{sphere?.shortTitle}</span>
          {deepDive && (
            <>
              <span aria-hidden="true">•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {deepDive.readingTimeMinutes} min read
              </span>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={handleShare}
          className="rounded-full p-2 text-stone-400 hover:text-white hover:bg-white/[0.06] transition-colors focus-visible:outline-none cursor-pointer"
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
          <header className="pt-10 pb-8 border-b border-white/[0.08]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-0.5 text-[11px] font-medium tracking-wide text-stone-300">
              Sphere {sphere?.number}: {sphere?.shortTitle}
            </div>
            <h1 className="mt-5 font-serif text-3xl sm:text-5xl font-normal leading-[1.15] tracking-tight text-white">
              {concept.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-stone-200 font-sans">
              {concept.tagline}
            </p>
          </header>

          {state.status === 'loading' && (
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-stone-400">
              <Loader2 className="h-4 w-4 animate-spin text-[#c48b76]" />
              Loading the deep dive…
            </div>
          )}

          {state.status === 'missing' && (
            <div className="mt-8 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center">
              <BookOpen className="mx-auto h-6 w-6 text-stone-500" />
              <p className="mt-3 text-sm font-serif text-stone-200">
                The deep dive for this model is currently in editorial review.
              </p>
              <p className="mt-1.5 text-xs text-stone-400">
                The full analysis, conversational weapons, and curated source are available on the model brief.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-5 rounded-full bg-white px-5 py-2 text-xs font-semibold text-black hover:bg-stone-200 transition-colors cursor-pointer"
              >
                Back to the brief
              </button>
            </div>
          )}

          {state.status === 'error' && (
            <div className="mt-8 rounded-2xl border border-rose-900/40 bg-rose-950/20 p-6 text-sm text-rose-200">
              This deep dive could not be loaded. If you are offline, reconnect once and it will be cached for offline reading.
            </div>
          )}

          {deepDive && (
            <>
              {/* Cold open */}
              <div className="mt-8 rounded-2xl border-l-2 border-[#c48b76] bg-white/[0.02] py-5 pl-6 pr-5">
                <p className="font-serif text-lg sm:text-xl font-normal italic leading-relaxed text-stone-100">
                  {deepDive.hook}
                </p>
              </div>

              {/* Narrative */}
              {deepDive.sections.map((section, i) => (
                <section key={i} className="mt-12">
                  <h2 className="mb-4 font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
                    <span className="mr-3 font-mono text-xs text-[#c48b76]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {section.heading}
                  </h2>

                  <div className="space-y-5">
                    {section.body.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-[1.02rem] sm:text-[1.07rem] leading-[1.8] text-stone-300 font-sans"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.example && (
                    <aside className="mt-6 rounded-2xl border border-white/[0.08] bg-[#111218] p-5">
                      <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c48b76]">
                        {section.example.label}
                      </div>
                      <p className="text-[0.98rem] leading-[1.72] text-stone-300 font-serif italic">
                        {section.example.body}
                      </p>
                    </aside>
                  )}
                </section>
              ))}

              {/* Spot it */}
              <section className="mt-16 pt-8 border-t border-white/[0.08]">
                <h2 className="flex items-center gap-2.5 font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
                  <Eye className="h-5 w-5 text-[#c48b76]" />
                  <span>How to Spot the Dynamics</span>
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-stone-300">
                  Observable behavioral signals in the wild. If you observe these markers, the mechanism is active.
                </p>
                <ul className="mt-6 space-y-3">
                  {deepDive.spotIt.map((item, i) => (
                    <li key={i} className="rounded-xl border border-white/[0.08] bg-[#111218] p-4">
                      <p className="text-[0.98rem] font-serif font-medium text-white">
                        {item.signal}
                      </p>
                      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-stone-300 font-sans">{item.meaning}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Playbook */}
              <section className="mt-16 pt-8 border-t border-white/[0.08]">
                <h2 className="flex items-center gap-2.5 font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
                  <Swords className="h-5 w-5 text-[#c48b76]" />
                  <span>Strategic Playbook</span>
                </h2>
                <ol className="mt-6 space-y-4">
                  {deepDive.playbook.map((step, i) => (
                    <li
                      key={i}
                      className="rounded-2xl border border-white/[0.08] bg-[#111218] p-5"
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#c48b76]">
                          {i + 1}
                        </span>
                        <div className="min-w-0">
                          <p className="text-base font-serif font-medium text-white">
                            {step.move}
                          </p>
                          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-200 font-sans">{step.how}</p>
                          {step.watchOut && (
                            <p className="mt-3 border-l-2 border-rose-800/60 pl-3 text-xs sm:text-sm leading-relaxed text-rose-200/90 font-sans">
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
              <section className="mt-16 pt-8 border-t border-white/[0.08]">
                <h2 className="flex items-center gap-2.5 font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
                  <AlertTriangle className="h-5 w-5 text-rose-400" />
                  <span>Common Misconceptions</span>
                </h2>
                <div className="mt-6 space-y-3">
                  {deepDive.commonMisreads.map((item, i) => (
                    <div key={i} className="rounded-xl border border-white/[0.08] bg-[#111218] p-4">
                      <p className="text-xs sm:text-sm font-medium text-rose-300 line-through decoration-rose-500/50">
                        {item.misread}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-300 font-sans">{item.correction}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Evidence */}
              <section className="mt-16 pt-8 border-t border-white/[0.08]">
                <h2 className="flex items-center gap-2.5 font-serif text-2xl sm:text-3xl font-light tracking-tight text-white">
                  <BookOpen className="h-5 w-5 text-[#c48b76]" />
                  <span>Empirical Evidence</span>
                </h2>
                <div className="mt-6 space-y-3">
                  {deepDive.evidence.map((item, i) => (
                    <div key={i} className="rounded-xl border border-white/[0.08] bg-[#111218] p-4">
                      <p className="text-xs font-mono font-medium text-[#c48b76]">{item.source}</p>
                      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-stone-300 font-sans">{item.finding}</p>
                      {item.caveat && (
                        <p className="mt-2.5 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs leading-relaxed text-stone-400">
                          <strong className="text-stone-300 font-medium">Caveat: </strong>
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
                  className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/25 hover:bg-white/[0.06] focus-visible:outline-none"
                >
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c48b76]">
                      Primary Scientific Resource
                    </div>
                    <div className="mt-1 truncate font-serif text-base text-white">
                      {concept.highSignalSource.title}
                    </div>
                    <div className="mt-0.5 text-xs text-stone-400">
                      {concept.highSignalSource.creatorOrHost} · {concept.highSignalSource.platform} · {concept.highSignalSource.duration}
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-[#c48b76]" />
                </a>
              </section>

              {/* Takeaways */}
              <section className="mt-16 mb-10 rounded-3xl border border-white/10 bg-[#111218] p-6 sm:p-8">
                <h2 className="flex items-center gap-2.5 font-serif text-xl sm:text-2xl font-light tracking-tight text-white">
                  <Lightbulb className="h-5 w-5 text-[#c48b76]" />
                  <span>Executive Takeaway</span>
                </h2>
                <ul className="mt-5 space-y-3.5">
                  {deepDive.takeaways.map((takeaway, i) => (
                    <li key={i} className="flex gap-3 text-xs sm:text-sm leading-relaxed text-stone-300 font-sans">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c48b76]" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="pb-12 text-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/20 bg-transparent px-6 py-2.5 text-xs font-medium text-white hover:border-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  ← Return to Model Brief
                </button>
              </div>
            </>
          )}
        </article>
      </div>
    </div>
  );
};
