import React, { useCallback, useState } from 'react';
import {
  X, Bookmark, CheckCircle2, Copy, Check, ExternalLink,
  Brain, Users, Briefcase, Zap, Headphones, ChevronLeft, ChevronRight, Share2,
  BookOpen, Clock, ArrowRight
} from 'lucide-react';
import type { Concept } from '../types/curriculum';
import { useUserProgress } from '../context/UserProgressContext';
import { getSphereById, ALL_CONCEPTS } from '../data';
import { hasDeepDive } from '../data/deepdives';
import { useDialog } from '../lib/useDialog';
import { copyText, shareUrl } from '../lib/clipboard';
import { conceptShareUrl } from '../lib/router';

interface ConceptDetailModalProps {
  concept: Concept;
  onClose: () => void;
  onSelectConcept: (concept: Concept) => void;
  onReadDeepDive: (concept: Concept) => void;
}

type CopyState = { index: number; ok: boolean } | null;
type ShareState = 'idle' | 'shared' | 'copied' | 'failed';

/** Rendered only while a concept is selected. */
export const ConceptDetailModal: React.FC<ConceptDetailModalProps> = ({
  concept,
  onClose,
  onSelectConcept,
  onReadDeepDive,
}) => {
  const { isCompleted, isBookmarked, toggleComplete, toggleBookmark } = useUserProgress();
  const [copyState, setCopyState] = useState<CopyState>(null);
  const [shareState, setShareState] = useState<ShareState>('idle');

  const panelRef = useDialog(true, onClose);

  const handleCopyPhrase = useCallback(async (phrase: string, index: number) => {
    const ok = await copyText(phrase);
    setCopyState({ index, ok });
    setTimeout(() => setCopyState(null), 2000);
  }, []);

  const handleShare = useCallback(async () => {
    const result = await shareUrl(concept.title, conceptShareUrl(concept.globalIndex));
    setShareState(result === 'failed' ? 'failed' : result);
    setTimeout(() => setShareState('idle'), 2000);
  }, [concept]);

  const sphere = getSphereById(concept.sphereId);
  const completed = isCompleted(concept.id);
  const bookmarked = isBookmarked(concept.id);

  const currentIndex = ALL_CONCEPTS.findIndex(c => c.id === concept.id);
  const prevConcept = currentIndex > 0 ? ALL_CONCEPTS[currentIndex - 1] : null;
  const nextConcept = currentIndex < ALL_CONCEPTS.length - 1 ? ALL_CONCEPTS[currentIndex + 1] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      {/* Container / Modal Box */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="concept-modal-title"
        tabIndex={-1}
        className="relative flex flex-col w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-3xl sm:rounded-3xl border-0 sm:border border-zinc-800 bg-[#0c0e15] shadow-2xl overflow-hidden focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-zinc-800/80 bg-[#0c0e15]/95 px-5 py-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800 text-xs font-mono font-bold text-zinc-300">
              #{String(concept.globalIndex).padStart(2, '0')}
            </span>
            <span className={`rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${sphere?.badgeColor}`}>
              Sphere {sphere?.number}: {sphere?.shortTitle}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleShare}
              className="rounded-lg p-2 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              title={shareState === 'failed' ? 'Could not copy link' : 'Share link to this concept'}
              aria-label="Share link to this concept"
            >
              {shareState === 'idle' ? (
                <Share2 className="h-4 w-4" />
              ) : shareState === 'failed' ? (
                <X className="h-4 w-4 text-rose-400" />
              ) : (
                <Check className="h-4 w-4 text-emerald-400" />
              )}
            </button>
            <button
              type="button"
              onClick={() => toggleBookmark(concept.id)}
              aria-pressed={bookmarked}
              className={`rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                bookmarked ? 'text-purple-400 bg-purple-950/50' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
              title={bookmarked ? 'Bookmarked' : 'Bookmark concept'}
              aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark concept'}
            >
              <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-purple-400' : ''}`} />
            </button>
            <button
              type="button"
              onClick={() => toggleComplete(concept.id)}
              aria-pressed={completed}
              className={`rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                completed ? 'text-cyan-400 bg-cyan-950/50' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
              title={completed ? 'Mastered' : 'Mark as mastered'}
              aria-label={completed ? 'Unmark as mastered' : 'Mark as mastered'}
            >
              <CheckCircle2 className={`h-4 w-4 ${completed ? 'fill-cyan-400/20' : ''}`} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              title="Close (Esc)"
              aria-label="Close concept detail"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-7 space-y-8 text-slate-200">
          {/* Main Title & Tagline Banner */}
          <div>
            <h1 id="concept-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {concept.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-cyan-300/90 font-medium leading-relaxed">
              {concept.tagline}
            </p>
          </div>

          {/* Plain English Mental Model Callout */}
          <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 via-[#111420] to-[#0d101a] p-5 sm:p-6 shadow-lg shadow-cyan-950/20">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              <span className="text-amber-400 text-sm" aria-hidden="true">💡</span>
              <span>Everyday Mental Model: <strong className="text-white">{concept.plainEnglishAnalogy}</strong></span>
            </div>
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
              {concept.everydayHumanBehavior}
            </p>
          </div>

          {/* Deep dive entry point */}
          {hasDeepDive(concept) && (
            <button
              type="button"
              onClick={() => onReadDeepDive(concept)}
              className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-sky-500/30 bg-gradient-to-r from-sky-950/40 via-[#101520] to-[#101520] p-5 text-left transition-all hover:border-sky-400/50 hover:from-sky-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <div className="flex min-w-0 items-start gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-950/60 text-sky-300">
                  <BookOpen className="h-4.5 w-4.5" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    Read the full deep dive
                    <span className="flex items-center gap-1 rounded-md border border-sky-800/50 bg-sky-950/60 px-1.5 py-0.5 text-[10px] font-semibold text-sky-300">
                      <Clock className="h-2.5 w-2.5" />
                      ~15 min
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                    The mechanism behind it, real cases, how to spot it live, the counter-playbook, and what the research does — and does not — actually support.
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-sky-400 transition-transform group-hover:translate-x-0.5" />
            </button>
          )}

          {/* Section 1: Formal Terminology */}
          <section className="rounded-2xl border border-zinc-800/80 bg-[#12151e] p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-zinc-800 text-[10px] text-zinc-300 font-mono">1</span>
              Formal Terminology & Definitions
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-semibold text-zinc-400">Primary Construct:</span>
                <p className="text-base font-bold text-white mt-0.5">{concept.formalTerminology.primaryTerm}</p>
              </div>

              {concept.formalTerminology.subConstructs && (
                <div>
                  <span className="text-xs font-semibold text-zinc-400">Sub-Constructs:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {concept.formalTerminology.subConstructs.map((sub, i) => (
                      <span key={i} className="rounded-md bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-xs text-zinc-300">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <span className="text-xs font-semibold text-zinc-400">Key Scientific Thinkers:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {concept.formalTerminology.keyThinkers.map((thinker, i) => (
                    <span key={i} className="rounded-md bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 text-xs font-medium text-cyan-300">
                      {thinker}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800/60">
                <span className="text-xs font-semibold text-zinc-400">Rigorous Definition:</span>
                <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
                  {concept.formalTerminology.definition}
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Underlying Mechanism */}
          <section className="rounded-2xl border border-zinc-800/80 bg-[#12151e] p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
              <Brain className="h-4 w-4" />
              <span>2. The Underlying Mechanism (Why the Brain Does This)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#0a0c12] p-4 border border-zinc-800/60">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Evolutionary Driver
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1.5 leading-relaxed">
                  {concept.underlyingMechanism.evolutionaryDriver}
                </p>
              </div>

              <div className="rounded-xl bg-[#0a0c12] p-4 border border-zinc-800/60">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Neurological Circuitry
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1.5 leading-relaxed">
                  {concept.underlyingMechanism.neurologicalBasis}
                </p>
              </div>
            </div>

            <div className="mt-3 rounded-xl bg-cyan-950/20 border border-cyan-800/30 p-3 text-xs sm:text-sm text-cyan-200">
              <strong className="font-semibold text-cyan-300">Core Takeaway: </strong>
              {concept.underlyingMechanism.summary}
            </div>
          </section>

          {/* Section 3: Real-World Recognition */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-zinc-800 text-[10px] text-zinc-300 font-mono">3</span>
              Real-World Recognition Triggers
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Personal Life Trigger */}
              <div className="rounded-2xl border border-zinc-800/80 bg-[#12151e] p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-purple-400 mb-2">
                  <Users className="h-4 w-4" />
                  Personal Life / Relationships
                </div>
                <h4 className="text-sm font-bold text-white mb-2">
                  {concept.realWorldRecognition.personalLifeTrigger.title}
                </h4>
                <div className="rounded-xl bg-[#0a0c12] p-3 text-xs text-zinc-300 border border-zinc-800/60 italic leading-relaxed">
                  “{concept.realWorldRecognition.personalLifeTrigger.scenario}”
                </div>
                <div className="mt-3 text-xs text-zinc-400">
                  <strong className="text-zinc-200">The Hidden Dynamic: </strong>
                  {concept.realWorldRecognition.personalLifeTrigger.hiddenDynamic}
                </div>
              </div>

              {/* Professional Life Trigger */}
              <div className="rounded-2xl border border-zinc-800/80 bg-[#12151e] p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-400 mb-2">
                  <Briefcase className="h-4 w-4" />
                  Executive / Strategy Arena
                </div>
                <h4 className="text-sm font-bold text-white mb-2">
                  {concept.realWorldRecognition.professionalLifeTrigger.title}
                </h4>
                <div className="rounded-xl bg-[#0a0c12] p-3 text-xs text-zinc-300 border border-zinc-800/60 italic leading-relaxed">
                  “{concept.realWorldRecognition.professionalLifeTrigger.scenario}”
                </div>
                <div className="mt-3 text-xs text-zinc-400">
                  <strong className="text-zinc-200">The Hidden Dynamic: </strong>
                  {concept.realWorldRecognition.professionalLifeTrigger.hiddenDynamic}
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Conversational Weaponry */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                <Zap className="h-4 w-4" />
                <span>4. Conversational Weaponry (Exact Lines)</span>
              </div>
              <span className="text-[11px] text-zinc-400">Click button to copy script</span>
            </div>

            <div className="space-y-3">
              {concept.conversationalWeaponry.map((weapon, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-950/10 via-[#12151e] to-[#12151e] p-4 sm:p-5"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                      <span className="rounded bg-amber-950/60 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-amber-400 border border-amber-800/40">
                        {weapon.contextTag}
                      </span>
                      {weapon.situation}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleCopyPhrase(weapon.phrase, idx)}
                      className="flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-950/30 px-2.5 py-1 text-xs font-medium text-amber-300 hover:bg-amber-900/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    >
                      {copyState?.index === idx ? (
                        copyState.ok ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <X className="h-3.5 w-3.5 text-rose-400" />
                            <span className="text-rose-400">Select &amp; copy</span>
                          </>
                        )
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy Script</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="rounded-xl bg-[#090a0f] p-3.5 border border-zinc-800/80 font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed select-all">
                    “{weapon.phrase}”
                  </div>

                  <p className="mt-2.5 text-xs text-zinc-400 leading-relaxed">
                    <strong className="text-zinc-300 font-semibold">Why it works: </strong>
                    {weapon.rationale}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: High-Signal Source */}
          <section className="rounded-2xl border border-zinc-800/80 bg-[#12151e] p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
              <Headphones className="h-4 w-4 text-cyan-400" />
              <span>5. Curated High-Signal Source (&lt;45 min deep dive)</span>
            </div>

            <div className="rounded-xl bg-[#0a0c12] p-4 border border-zinc-800/60">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h4 className="text-base font-bold text-white">
                    {concept.highSignalSource.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-zinc-400">
                    <span>{concept.highSignalSource.creatorOrHost}</span>
                    <span>•</span>
                    <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300 font-mono">
                      {concept.highSignalSource.platform}
                    </span>
                    <span>•</span>
                    <span className="text-cyan-400 font-medium">{concept.highSignalSource.duration}</span>
                  </div>
                </div>

                {concept.highSignalSource.url ? (
                  <a
                    href={concept.highSignalSource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-cyan-600/20 border border-cyan-500/40 px-3.5 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    <span>Open Resource</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(concept.highSignalSource.searchQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-zinc-800 px-3.5 py-2 text-xs font-semibold text-zinc-200 hover:bg-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    <span>Search Audio / Paper</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              <div className="mt-3 pt-3 border-t border-zinc-800/60 text-xs text-zinc-400">
                <strong className="text-zinc-300">Why it beats the noise: </strong>
                {concept.highSignalSource.whyItBeatsTheNoise}
              </div>
            </div>
          </section>
        </div>

        {/* Sticky Footer: Previous / Next Concept Navigator */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between border-t border-zinc-800/80 bg-[#0c0e15]/95 px-5 py-3 backdrop-blur-md">
          {prevConcept ? (
            <button
              type="button"
              onClick={() => onSelectConcept(prevConcept)}
              className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg px-1 py-1"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">#{prevConcept.globalIndex}: {prevConcept.title.slice(0, 20)}…</span>
              <span className="sm:hidden">Prev</span>
            </button>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={() => toggleComplete(concept.id)}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
              completed
                ? 'bg-cyan-950/60 border border-cyan-500/40 text-cyan-400'
                : 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white hover:opacity-90'
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>{completed ? 'Concept Mastered ✓' : 'Mark as Mastered'}</span>
          </button>

          {nextConcept ? (
            <button
              type="button"
              onClick={() => onSelectConcept(nextConcept)}
              className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg px-1 py-1"
            >
              <span className="hidden sm:inline">#{nextConcept.globalIndex}: {nextConcept.title.slice(0, 20)}…</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};
