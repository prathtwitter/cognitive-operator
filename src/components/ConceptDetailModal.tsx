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
import { audioEngine } from '../utils/audioSpeech';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Container / Modal Box */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="concept-modal-title"
        tabIndex={-1}
        className="relative flex flex-col w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-3xl sm:rounded-3xl border-0 sm:border border-white/10 bg-[#0c0d12] shadow-2xl overflow-hidden focus:outline-none text-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/[0.08] bg-[#0c0d12]/95 px-5 py-4 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 px-2 items-center justify-center rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono text-stone-300">
              #{String(concept.globalIndex).padStart(2, '0')}
            </span>
            <span className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-stone-300">
              Sphere {sphere?.number}: {sphere?.shortTitle}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleShare}
              className="rounded-full p-2 text-stone-400 hover:text-white hover:bg-white/[0.06] transition-colors focus-visible:outline-none cursor-pointer"
              title={shareState === 'failed' ? 'Could not copy link' : 'Share link to this model'}
              aria-label="Share link to this model"
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
              className={`rounded-full p-2 transition-colors focus-visible:outline-none cursor-pointer ${
                bookmarked ? 'text-[#c48b76] bg-[#c48b76]/15' : 'text-stone-400 hover:text-stone-200 hover:bg-white/[0.06]'
              }`}
              title={bookmarked ? 'Bookmarked' : 'Bookmark model'}
              aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark model'}
            >
              <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-[#c48b76]' : ''}`} />
            </button>
            <button
              type="button"
              onClick={() => toggleComplete(concept.id)}
              aria-pressed={completed}
              className={`rounded-full p-2 transition-colors focus-visible:outline-none cursor-pointer ${
                completed ? 'text-emerald-400 bg-emerald-950/30' : 'text-stone-400 hover:text-stone-200 hover:bg-white/[0.06]'
              }`}
              title={completed ? 'Mastered' : 'Mark as mastered'}
              aria-label={completed ? 'Unmark as mastered' : 'Mark as mastered'}
            >
              <CheckCircle2 className={`h-4 w-4 ${completed ? 'fill-emerald-400/20' : ''}`} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-stone-400 hover:text-white hover:bg-white/[0.06] transition-colors focus-visible:outline-none cursor-pointer"
              title="Close (Esc)"
              aria-label="Close model detail"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-7 space-y-8">
          {/* Main Title & Tagline */}
          <div>
            <h1 id="concept-modal-title" className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight leading-tight">
              {concept.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-stone-200 font-sans leading-relaxed">
              {concept.tagline}
            </p>
          </div>

          {/* Plain English Mental Model Callout */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c48b76] mb-2">
              <span aria-hidden="true">💡</span>
              <span>Everyday Mental Model: <strong className="text-white font-normal">{concept.plainEnglishAnalogy}</strong></span>
            </div>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
              {concept.everydayHumanBehavior}
            </p>
          </div>

          {/* Dual Action: Deep Dive Reader & 90s Audio Briefing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {hasDeepDive(concept) && (
              <button
                type="button"
                onClick={() => onReadDeepDive(concept)}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#12141c] p-4 text-left transition-all hover:border-white/25 hover:bg-white/[0.04] focus-visible:outline-none cursor-pointer"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#c48b76]">
                    <BookOpen className="h-4.5 w-4.5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-white">
                      <span>Read Deep Dive</span>
                      <span className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] font-mono text-stone-400">
                        <Clock className="h-2 w-2" />
                        ~15m
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] text-stone-400 truncate">
                      Mechanics, cases &amp; playbook
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-[#c48b76] transition-transform group-hover:translate-x-1" />
              </button>
            )}

            <button
              type="button"
              onClick={() => audioEngine.playConcept(concept)}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#12141c] p-4 text-left transition-all hover:border-white/25 hover:bg-white/[0.04] focus-visible:outline-none cursor-pointer"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#c48b76]">
                  <Headphones className="h-4.5 w-4.5" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-white">
                    <span>Listen 90s Briefing</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] font-mono text-stone-400">
                      Audio
                    </span>
                  </div>
                  <p className="mt-0.5 text-[11px] text-stone-400 truncate">
                    Hands-free voice briefing
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#c48b76] transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Section 1: Formal Terminology */}
          <section className="rounded-2xl border border-white/[0.08] bg-[#101117] p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c48b76] mb-3">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.05] text-[10px] text-stone-300 font-mono">1</span>
              <span>Formal Terminology &amp; Scientific Foundations</span>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-medium text-stone-400">Primary Construct:</span>
                <p className="text-base font-serif font-medium text-white mt-0.5">{concept.formalTerminology.primaryTerm}</p>
              </div>

              {concept.formalTerminology.subConstructs && (
                <div>
                  <span className="text-xs font-medium text-stone-400">Sub-Constructs:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {concept.formalTerminology.subConstructs.map((sub, i) => (
                      <span key={i} className="rounded-full bg-white/[0.03] border border-white/[0.06] px-2.5 py-0.5 text-xs text-stone-300">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <span className="text-xs font-medium text-stone-400">Key Scientific Thinkers:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {concept.formalTerminology.keyThinkers.map((thinker, i) => (
                    <span key={i} className="rounded-full bg-white/[0.04] border border-white/10 px-2.5 py-0.5 text-xs text-stone-300">
                      {thinker}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.06]">
                <span className="text-xs font-medium text-stone-400">Rigorous Definition:</span>
                <p className="text-sm text-stone-300 mt-1 leading-relaxed font-sans">
                  {concept.formalTerminology.definition}
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Underlying Mechanism */}
          <section className="rounded-2xl border border-white/[0.08] bg-[#101117] p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c48b76] mb-3">
              <Brain className="h-4 w-4" />
              <span>2. Underlying Mechanism (Cognitive &amp; Evolutionary Driver)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#08080a] p-4 border border-white/[0.06]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400">
                  Evolutionary Driver
                </span>
                <p className="text-xs sm:text-sm text-stone-300 mt-1.5 leading-relaxed font-sans">
                  {concept.underlyingMechanism.evolutionaryDriver}
                </p>
              </div>

              <div className="rounded-xl bg-[#08080a] p-4 border border-white/[0.06]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400">
                  Neurological Circuitry
                </span>
                <p className="text-xs sm:text-sm text-stone-300 mt-1.5 leading-relaxed font-sans">
                  {concept.underlyingMechanism.neurologicalBasis}
                </p>
              </div>
            </div>

            <div className="mt-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] p-3.5 text-xs sm:text-sm text-stone-300">
              <strong className="font-semibold text-white">Core Takeaway: </strong>
              {concept.underlyingMechanism.summary}
            </div>
          </section>

          {/* Section 3: Real-World Recognition */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c48b76]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.05] text-[10px] text-stone-300 font-mono">3</span>
              <span>Real-World Recognition Triggers</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Personal Life Trigger */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#101117] p-5">
                <div className="flex items-center gap-2 text-xs font-medium uppercase text-stone-400 mb-2">
                  <Users className="h-4 w-4 text-[#c48b76]" />
                  <span>Personal Life / Relationships</span>
                </div>
                <h4 className="text-sm font-semibold text-white mb-2 font-serif">
                  {concept.realWorldRecognition.personalLifeTrigger.title}
                </h4>
                <div className="rounded-xl bg-[#08080a] p-3 text-xs text-stone-300 border border-white/[0.06] italic leading-relaxed font-serif">
                  “{concept.realWorldRecognition.personalLifeTrigger.scenario}”
                </div>
                <div className="mt-3 text-xs text-stone-400">
                  <strong className="text-stone-200">The Hidden Dynamic: </strong>
                  {concept.realWorldRecognition.personalLifeTrigger.hiddenDynamic}
                </div>
              </div>

              {/* Professional Life Trigger */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#101117] p-5">
                <div className="flex items-center gap-2 text-xs font-medium uppercase text-stone-400 mb-2">
                  <Briefcase className="h-4 w-4 text-[#c48b76]" />
                  <span>Executive / Strategy Arena</span>
                </div>
                <h4 className="text-sm font-semibold text-white mb-2 font-serif">
                  {concept.realWorldRecognition.professionalLifeTrigger.title}
                </h4>
                <div className="rounded-xl bg-[#08080a] p-3 text-xs text-stone-300 border border-white/[0.06] italic leading-relaxed font-serif">
                  “{concept.realWorldRecognition.professionalLifeTrigger.scenario}”
                </div>
                <div className="mt-3 text-xs text-stone-400">
                  <strong className="text-stone-200">The Hidden Dynamic: </strong>
                  {concept.realWorldRecognition.professionalLifeTrigger.hiddenDynamic}
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Conversational Weaponry */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c48b76]">
                <Zap className="h-4 w-4" />
                <span>4. Conversational Weaponry (Exact Scripts)</span>
              </div>
              <span className="text-[11px] text-stone-500 font-mono">Click to copy script</span>
            </div>

            <div className="space-y-3">
              {concept.conversationalWeaponry.map((weapon, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-[#101117] p-4 sm:p-5"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-medium text-stone-300 flex items-center gap-2">
                      <span className="rounded-full bg-white/[0.04] border border-white/10 px-2 py-0.5 text-[9px] uppercase tracking-wider text-[#c48b76]">
                        {weapon.contextTag}
                      </span>
                      <span>{weapon.situation}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => handleCopyPhrase(weapon.phrase, idx)}
                      className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-stone-300 hover:bg-white/10 transition-colors focus-visible:outline-none cursor-pointer"
                    >
                      {copyState?.index === idx ? (
                        copyState.ok ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
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

                  <div className="rounded-xl bg-[#08080a] p-3.5 border border-white/[0.06] font-serif text-xs sm:text-sm text-stone-200 leading-relaxed select-all italic">
                    “{weapon.phrase}”
                  </div>

                  <p className="mt-2.5 text-xs text-stone-400 leading-relaxed font-sans">
                    <strong className="text-stone-200 font-medium">Why it works: </strong>
                    {weapon.rationale}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: High-Signal Source */}
          <section className="rounded-2xl border border-white/[0.08] bg-[#101117] p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c48b76] mb-3">
              <Headphones className="h-4 w-4" />
              <span>5. Curated High-Signal Source (&lt;45 min deep dive)</span>
            </div>

            <div className="rounded-xl bg-[#08080a] p-4 border border-white/[0.06]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h4 className="text-base font-serif font-medium text-white">
                    {concept.highSignalSource.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-stone-400">
                    <span>{concept.highSignalSource.creatorOrHost}</span>
                    <span>•</span>
                    <span className="rounded bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-stone-300 font-mono">
                      {concept.highSignalSource.platform}
                    </span>
                    <span>•</span>
                    <span className="text-[#c48b76] font-medium">{concept.highSignalSource.duration}</span>
                  </div>
                </div>

                {concept.highSignalSource.url ? (
                  <a
                    href={concept.highSignalSource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/10 transition-colors focus-visible:outline-none"
                  >
                    <span>Open Resource</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(concept.highSignalSource.searchQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/10 transition-colors focus-visible:outline-none"
                  >
                    <span>Search Audio / Paper</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              <div className="mt-3 pt-3 border-t border-white/[0.06] text-xs text-stone-400">
                <strong className="text-stone-200">Why it beats the noise: </strong>
                {concept.highSignalSource.whyItBeatsTheNoise}
              </div>
            </div>
          </section>
        </div>

        {/* Sticky Footer: Previous / Next Navigator & Mastery Button */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between border-t border-white/[0.08] bg-[#0c0d12]/95 px-5 py-3.5 backdrop-blur-md">
          {prevConcept ? (
            <button
              type="button"
              onClick={() => onSelectConcept(prevConcept)}
              className="flex items-center gap-1.5 text-xs font-medium text-stone-400 hover:text-white transition-colors focus-visible:outline-none cursor-pointer"
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
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium transition-all shadow-md focus-visible:outline-none cursor-pointer ${
              completed
                ? 'bg-white/[0.05] border border-white/20 text-stone-200'
                : 'bg-white text-black hover:bg-stone-200'
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>{completed ? 'Model Mastered ✓' : 'Mark as Mastered'}</span>
          </button>

          {nextConcept ? (
            <button
              type="button"
              onClick={() => onSelectConcept(nextConcept)}
              className="flex items-center gap-1.5 text-xs font-medium text-stone-400 hover:text-white transition-colors focus-visible:outline-none cursor-pointer"
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
