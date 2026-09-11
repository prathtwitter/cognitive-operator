import React, { useState } from 'react';
import { Bookmark, CheckCircle2, Copy, Check, ChevronRight, Zap, Volume2, X } from 'lucide-react';
import type { Concept } from '../types/curriculum';
import { useUserProgress } from '../context/UserProgressContext';
import { getSphereById } from '../data';
import { copyText } from '../lib/clipboard';
import { audioEngine } from '../utils/audioSpeech';

interface ConceptCardProps {
  concept: Concept;
  onSelect: (concept: Concept) => void;
}

const DIFFICULTY_STYLES: Record<Concept['difficulty'], string> = {
  Foundational: 'border-white/10 bg-white/[0.03] text-stone-300',
  Advanced: 'border-[#c48b76]/30 bg-[#c48b76]/10 text-[#d4a38f]',
  Lethal: 'border-rose-900/40 bg-rose-950/20 text-rose-300',
};

export const ConceptCard: React.FC<ConceptCardProps> = ({ concept, onSelect }) => {
  const { isCompleted, isBookmarked, toggleComplete, toggleBookmark } = useUserProgress();
  const [copyResult, setCopyResult] = useState<'idle' | 'ok' | 'failed'>('idle');

  const completed = isCompleted(concept.id);
  const bookmarked = isBookmarked(concept.id);
  const sphere = getSphereById(concept.sphereId);

  const primaryWeapon = concept.conversationalWeaponry[0];

  const handleCopyWeapon = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!primaryWeapon) return;
    const ok = await copyText(primaryWeapon.phrase);
    setCopyResult(ok ? 'ok' : 'failed');
    setTimeout(() => setCopyResult('idle'), 2000);
  };

  return (
    <div
      onClick={() => onSelect(concept)}
      className={`group relative flex flex-col justify-between rounded-2xl border bg-[#0e0f14] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 hover:border-white/25 cursor-pointer focus-within:ring-1 focus-within:ring-white/30 ${
        completed ? 'border-white/5 opacity-85' : 'border-white/[0.08]'
      }`}
    >
      {/* Top Meta Bar */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2">
            <span className="flex h-6 px-1.5 items-center justify-center rounded-md bg-white/[0.05] border border-white/10 text-[11px] font-mono text-stone-300">
              #{String(concept.globalIndex).padStart(2, '0')}
            </span>
            <span className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[10px] font-medium tracking-wide text-stone-300">
              Sphere {sphere?.number}
            </span>
            <span className={`rounded-md border px-2 py-0.5 text-[10px] font-medium tracking-wide ${DIFFICULTY_STYLES[concept.difficulty]}`}>
              {concept.difficulty}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                audioEngine.playConcept(concept);
              }}
              aria-label={`Listen to 90s audio briefing on ${concept.title}`}
              className="rounded-lg p-1.5 text-stone-400 hover:text-white hover:bg-white/[0.06] transition-colors focus-visible:outline-none cursor-pointer"
              title="Listen 90s audio briefing"
            >
              <Volume2 className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmark(concept.id);
              }}
              aria-pressed={bookmarked}
              aria-label={`${bookmarked ? 'Remove bookmark on' : 'Bookmark'} ${concept.title}`}
              className={`rounded-lg p-1.5 transition-colors focus-visible:outline-none cursor-pointer ${
                bookmarked ? 'text-[#c48b76] bg-[#c48b76]/15' : 'text-stone-400 hover:text-stone-200 hover:bg-white/[0.06]'
              }`}
              title={bookmarked ? 'Bookmarked' : 'Bookmark model'}
            >
              <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-[#c48b76]' : ''}`} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleComplete(concept.id);
              }}
              aria-pressed={completed}
              aria-label={`${completed ? 'Unmark' : 'Mark'} ${concept.title} as mastered`}
              className={`rounded-lg p-1.5 transition-colors focus-visible:outline-none cursor-pointer ${
                completed ? 'text-emerald-400 bg-emerald-950/30' : 'text-stone-400 hover:text-stone-200 hover:bg-white/[0.06]'
              }`}
              title={completed ? 'Mastered' : 'Mark as mastered'}
            >
              <CheckCircle2 className={`h-4 w-4 ${completed ? 'fill-emerald-400/20' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title & Tagline in Editorial Styling */}
        <h3 className="font-serif text-xl sm:text-[1.35rem] font-normal text-white tracking-normal leading-snug group-hover:text-[#f4f4f6] transition-colors">
          {concept.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-stone-300 font-sans line-clamp-2 leading-relaxed">
          {concept.tagline}
        </p>

        {/* Plain-English Mental Model Analogy */}
        <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 text-xs font-normal text-stone-200">
          <span className="text-[#c48b76]" aria-hidden="true">💡</span>
          <span className="truncate">{concept.plainEnglishAnalogy}</span>
        </div>

        {/* Thinkers Pills */}
        <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
          {concept.formalTerminology.keyThinkers.slice(0, 3).map((thinker, i) => (
            <span
              key={i}
              className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-stone-300 border border-white/[0.08]"
            >
              {thinker}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Weapon Snippet Preview */}
      <div className="mt-5 pt-3.5 border-t border-white/[0.06]">
        {primaryWeapon && (
          <div className="rounded-xl bg-[#08080a] p-3 border border-white/[0.08]">
            <div className="flex items-center justify-between text-xs font-semibold text-[#c48b76] mb-1.5">
              <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase">
                <Zap className="h-3 w-3" />
                Conversational Weapon
              </span>
              <button
                type="button"
                onClick={handleCopyWeapon}
                className="flex items-center gap-1 text-[11px] font-medium text-stone-400 hover:text-white transition-colors focus-visible:outline-none rounded cursor-pointer"
                aria-label={`Copy weapon for ${concept.title}`}
                title="Copy conversational phrase"
              >
                {copyResult === 'ok' ? (
                  <><Check className="h-3 w-3 text-emerald-400" />Copied</>
                ) : copyResult === 'failed' ? (
                  <><X className="h-3 w-3 text-rose-400" />Failed</>
                ) : (
                  <><Copy className="h-3 w-3" />Copy</>
                )}
              </button>
            </div>
            <p className="text-xs sm:text-[13px] text-stone-200 italic line-clamp-2 leading-relaxed font-serif">
              “{primaryWeapon.phrase}”
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(concept);
          }}
          className="mt-3 flex w-full items-center justify-between text-xs text-stone-300 group-hover:text-white focus-visible:outline-none cursor-pointer"
          aria-label={`Read full breakdown of ${concept.title}`}
        >
          <span className="text-xs font-medium tracking-wide">Read Full Analysis</span>
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-[#c48b76]" />
        </button>
      </div>
    </div>
  );
};
