import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  RotateCw, Sparkles, Brain, CheckCircle2, AlertCircle,
  HelpCircle, ChevronLeft, ChevronRight, Zap, Copy, Check
} from 'lucide-react';
import { ALL_CONCEPTS } from '../data';
import { useUserProgress } from '../context/UserProgressContext';
import type { Concept } from '../types/curriculum';
import { copyText } from '../lib/clipboard';

interface SpacedRepetitionViewProps {
  onSelectConcept?: (concept: Concept) => void;
}

type FilterBox = 'all' | 1 | 2 | 3;

export const SpacedRepetitionView: React.FC<SpacedRepetitionViewProps> = ({
  onSelectConcept,
}) => {
  const { srsBoxes, updateSrsBox, srsStats } = useUserProgress();
  const [activeFilter, setActiveFilter] = useState<FilterBox>('all');
  const [rawIndex, setRawIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Filter cards based on selected box
  const filteredCards = useMemo(() => {
    if (activeFilter === 'all') return ALL_CONCEPTS;
    return ALL_CONCEPTS.filter((c) => (srsBoxes[c.id] || 1) === activeFilter);
  }, [activeFilter, srsBoxes]);

  // Derived safe index without setting state during render
  const currentIndex = rawIndex >= filteredCards.length ? 0 : rawIndex;
  const currentConcept = filteredCards[currentIndex] || ALL_CONCEPTS[0];
  const currentBox = currentConcept ? (srsBoxes[currentConcept.id] || 1) : 1;

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setRawIndex((prev) => (prev + 1) % (filteredCards.length || 1));
  }, [filteredCards.length]);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setRawIndex((prev) => (prev - 1 + (filteredCards.length || 1)) % (filteredCards.length || 1));
  }, [filteredCards.length]);

  const handleRate = useCallback((box: 1 | 2 | 3) => {
    if (!currentConcept) return;
    updateSrsBox(currentConcept.id, box);
    handleNext();
  }, [currentConcept, updateSrsBox, handleNext]);

  // Keyboard controls: Space to flip, 1 for Hard, 2 for Good, 3 for Easy, Left/Right arrows
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea', 'select'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return;
      }
      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === '1') {
        e.preventDefault();
        handleRate(1);
      } else if (e.key === '2') {
        e.preventDefault();
        handleRate(2);
      } else if (e.key === '3') {
        e.preventDefault();
        handleRate(3);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleFlip, handleRate, handleNext, handlePrev]);

  const handleCopyScript = async (text: string) => {
    const ok = await copyText(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const primaryWeapon = currentConcept?.conversationalWeaponry?.[0];

  return (
    <div className="space-y-8 text-stone-200">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0f14] p-6 sm:p-10 shadow-2xl">
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#c48b76]/10 blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c48b76] mb-3">
            <Brain className="h-3.5 w-3.5" />
            <span>Spaced Repetition System • Leitner Flashcards</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-white tracking-tight">
            Daily Arena Recall Drills
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-400 leading-relaxed font-sans">
            Commit behavioral models and conversational scripts into autonomic fluency through adaptive Leitner memory intervals.
          </p>
        </div>
      </div>

      {/* Leitner Box Status & Filter Toolbar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <button
          type="button"
          onClick={() => { setActiveFilter('all'); setRawIndex(0); setIsFlipped(false); }}
          className={`rounded-2xl border p-4 sm:p-5 text-left transition-all cursor-pointer focus-visible:outline-none ${
            activeFilter === 'all'
              ? 'border-white bg-white text-black shadow-lg'
              : 'border-white/[0.08] bg-[#0e0f14] hover:border-white/20 text-stone-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-medium mb-1">
            <span className={activeFilter === 'all' ? 'text-black' : 'text-stone-400'}>All Models</span>
            <Sparkles className={`h-3.5 w-3.5 ${activeFilter === 'all' ? 'text-black' : 'text-[#c48b76]'}`} />
          </div>
          <div className="font-serif text-2xl font-light mt-1">{ALL_CONCEPTS.length}</div>
          <p className={`text-[10px] mt-0.5 ${activeFilter === 'all' ? 'text-stone-700' : 'text-stone-500'}`}>Complete deck</p>
        </button>

        <button
          type="button"
          onClick={() => { setActiveFilter(1); setRawIndex(0); setIsFlipped(false); }}
          className={`rounded-2xl border p-4 sm:p-5 text-left transition-all cursor-pointer focus-visible:outline-none ${
            activeFilter === 1
              ? 'border-[#c48b76] bg-[#c48b76]/15 text-white shadow-lg'
              : 'border-white/[0.08] bg-[#0e0f14] hover:border-white/20 text-stone-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-medium text-[#c48b76] mb-1">
            <span>Box 1: Daily</span>
            <AlertCircle className="h-3.5 w-3.5" />
          </div>
          <div className="font-serif text-2xl font-light text-white mt-1">{srsStats.box1}</div>
          <p className="text-[10px] text-stone-500 mt-0.5">Daily reinforcement</p>
        </button>

        <button
          type="button"
          onClick={() => { setActiveFilter(2); setRawIndex(0); setIsFlipped(false); }}
          className={`rounded-2xl border p-4 sm:p-5 text-left transition-all cursor-pointer focus-visible:outline-none ${
            activeFilter === 2
              ? 'border-[#c48b76] bg-[#c48b76]/15 text-white shadow-lg'
              : 'border-white/[0.08] bg-[#0e0f14] hover:border-white/20 text-stone-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-medium text-amber-400 mb-1">
            <span>Box 2: Proficient</span>
            <Zap className="h-3.5 w-3.5" />
          </div>
          <div className="font-serif text-2xl font-light text-white mt-1">{srsStats.box2}</div>
          <p className="text-[10px] text-stone-500 mt-0.5">3-day interval</p>
        </button>

        <button
          type="button"
          onClick={() => { setActiveFilter(3); setRawIndex(0); setIsFlipped(false); }}
          className={`rounded-2xl border p-4 sm:p-5 text-left transition-all cursor-pointer focus-visible:outline-none ${
            activeFilter === 3
              ? 'border-emerald-500 bg-emerald-950/25 text-white shadow-lg'
              : 'border-white/[0.08] bg-[#0e0f14] hover:border-white/20 text-stone-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-medium text-emerald-400 mb-1">
            <span>Box 3: Mastered</span>
            <CheckCircle2 className="h-3.5 w-3.5" />
          </div>
          <div className="font-serif text-2xl font-light text-white mt-1">{srsStats.box3}</div>
          <p className="text-[10px] text-stone-500 mt-0.5">Autonomic fluency</p>
        </button>
      </div>

      {/* FLASHCARD INTERFACE */}
      {filteredCards.length > 0 ? (
        <div className="space-y-4">
          {/* Card Top Pagination Counter */}
          <div className="flex items-center justify-between text-xs text-stone-400 px-2 font-mono">
            <span>
              Card {currentIndex + 1} of {filteredCards.length}
            </span>
            <span className="flex items-center gap-1.5 text-[11px]">
              Tier:
              <span className="px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.04] text-stone-300">
                Box {currentBox}
              </span>
            </span>
          </div>

          {/* Interactive 3D Flip Card */}
          <div
            onClick={handleFlip}
            className="group relative min-h-[360px] sm:min-h-[380px] w-full cursor-pointer rounded-3xl border border-white/10 bg-[#0e0f14] p-6 sm:p-8 shadow-2xl transition-all hover:border-white/25"
          >
            {/* FRONT OF CARD (Question & Real-Life Behavioral Scenario) */}
            {!isFlipped ? (
              <div className="flex flex-col justify-between h-full min-h-[320px] space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-0.5 text-[10px] font-medium tracking-wider uppercase text-[#c48b76]">
                      FRONT • BEHAVIORAL SCENARIO
                    </span>
                    <span className="text-xs text-stone-500 font-sans">
                      Click anywhere or press [Space] to flip
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-light text-white mb-3">
                    Recognize This Real-World Human Dynamic:
                  </h3>

                  <div className="rounded-2xl border border-white/[0.08] bg-[#08080a] p-5 sm:p-6 mb-4">
                    <p className="font-serif text-base sm:text-lg text-stone-200 font-normal leading-relaxed italic">
                      &ldquo;{currentConcept.plainEnglishAnalogy}&rdquo;
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-sans">
                    <strong className="text-stone-300">Everyday Pattern:</strong> {currentConcept.everydayHumanBehavior}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-stone-400 font-sans">
                    <HelpCircle className="h-4 w-4 text-[#c48b76]" />
                    <span>What model governs this? What is your counter-script?</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-black">
                    <RotateCw className="h-3.5 w-3.5" />
                    <span>Reveal Answer</span>
                  </div>
                </div>
              </div>
            ) : (
              /* BACK OF CARD (Model Solution, Scientific Mechanism & Script) */
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col justify-between h-full min-h-[320px] space-y-5"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full border border-emerald-900/50 bg-emerald-950/20 px-3 py-0.5 text-[10px] font-medium tracking-wider uppercase text-emerald-400">
                      BACK • MODEL &amp; COUNTER-SCRIPT
                    </span>
                    <button
                      type="button"
                      onClick={handleFlip}
                      className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-white cursor-pointer"
                    >
                      <RotateCw className="h-3.5 w-3.5" />
                      <span>Flip Back</span>
                    </button>
                  </div>

                  {/* Title & Index */}
                  <div className="flex flex-wrap items-baseline gap-2.5 mb-2">
                    <span className="text-xs font-mono text-[#c48b76]">
                      #{currentConcept.globalIndex}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-light text-white">
                      {currentConcept.title}
                    </h2>
                  </div>

                  {/* Scientific Mechanism */}
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4 font-sans">
                    {currentConcept.underlyingMechanism.summary}
                  </p>

                  {/* Verbatim Script */}
                  {primaryWeapon && (
                    <div className="rounded-2xl border border-white/[0.08] bg-[#08080a] p-4 sm:p-5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c48b76]">
                          Primed Weapon: {primaryWeapon.situation}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyScript(primaryWeapon.phrase)}
                          className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] text-stone-300 hover:bg-white/10 cursor-pointer"
                        >
                          {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                          <span>{copied ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                      <p className="font-serif text-xs sm:text-sm text-stone-200 italic leading-relaxed">
                        &ldquo;{primaryWeapon.phrase}&rdquo;
                      </p>
                      <p className="text-[11px] text-stone-400 font-sans">
                        <strong className="text-stone-300">Why it works:</strong> {primaryWeapon.rationale}
                      </p>
                    </div>
                  )}
                </div>

                {/* Rating Feedback Buttons (Leitner Scheduling) */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400 block mb-2.5 text-center">
                    Recall Confidence:
                  </span>
                  <div className="grid grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleRate(1)}
                      className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-xs font-medium text-stone-300 hover:border-white/30 transition-colors cursor-pointer"
                    >
                      <span>Hard [1]</span>
                      <span className="text-[9px] text-stone-500">Box 1 (Daily)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleRate(2)}
                      className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-xs font-medium text-stone-300 hover:border-white/30 transition-colors cursor-pointer"
                    >
                      <span>Good [2]</span>
                      <span className="text-[9px] text-stone-500">Box 2 (3 Days)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleRate(3)}
                      className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-xs font-medium text-stone-300 hover:border-white/30 transition-colors cursor-pointer"
                    >
                      <span>Mastered [3]</span>
                      <span className="text-[9px] text-stone-500">Box 3 (Permanent)</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls & Study Full Brief Link */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handlePrev}
              className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-stone-300 hover:border-white/20 transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            {onSelectConcept && (
              <button
                type="button"
                onClick={() => onSelectConcept(currentConcept)}
                className="text-xs font-medium text-[#c48b76] hover:text-white transition-colors cursor-pointer"
              >
                Inspect Full Analysis #{currentConcept.globalIndex}
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-stone-300 hover:border-white/20 transition-colors cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-white/10 p-12 text-center text-stone-400">
          <p className="text-sm font-serif text-white mb-2">
            No flashcards currently in this box.
          </p>
          <p className="text-xs text-stone-400 mb-4">
            Switch to &ldquo;All Cards&rdquo; to start your daily rotation.
          </p>
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black hover:bg-stone-200 cursor-pointer"
          >
            Review All 40 Models
          </button>
        </div>
      )}
    </div>
  );
};
