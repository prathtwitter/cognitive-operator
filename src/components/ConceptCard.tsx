import React, { useState } from 'react';
import { Bookmark, CheckCircle2, Copy, Check, ChevronRight, Zap, X } from 'lucide-react';
import type { Concept } from '../types/curriculum';
import { useUserProgress } from '../context/UserProgressContext';
import { getSphereById } from '../data';
import { copyText } from '../lib/clipboard';

interface ConceptCardProps {
  concept: Concept;
  onSelect: (concept: Concept) => void;
}

const DIFFICULTY_COLORS: Record<Concept['difficulty'], string> = {
  Foundational: 'border-blue-500/30 bg-blue-950/40 text-blue-400',
  Advanced: 'border-amber-500/30 bg-amber-950/40 text-amber-400',
  Lethal: 'border-rose-500/30 bg-rose-950/40 text-rose-400',
};

const SPHERE_ACCENTS: Record<Concept['sphereId'], string> = {
  'internal-architecture': 'border-cyan-500/20 hover:border-cyan-500/40',
  'social-dynamics': 'border-purple-500/20 hover:border-purple-500/40',
  'strategic-interactions': 'border-amber-500/20 hover:border-amber-500/40',
  'behavioral-economics': 'border-emerald-500/20 hover:border-emerald-500/40',
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
    /*
     * The card stays a plain container: clicking anywhere is a mouse convenience,
     * while keyboard users get the real "Read Full Breakdown" button below. Making
     * the whole card a button would illegally nest the bookmark/master controls.
     */
    <div
      onClick={() => onSelect(concept)}
      className={`group relative flex flex-col justify-between rounded-2xl border bg-[#11131a] p-4 sm:p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/50 cursor-pointer focus-within:ring-2 focus-within:ring-cyan-500/60 ${
        completed ? 'border-zinc-800/80 opacity-90' : SPHERE_ACCENTS[concept.sphereId]
      }`}
    >
      {/* Top Meta Bar */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-zinc-800/90 text-xs font-mono font-bold text-zinc-300">
              #{String(concept.globalIndex).padStart(2, '0')}
            </span>
            <span className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${sphere?.badgeColor}`}>
              Sphere {sphere?.number}
            </span>
            <span className={`rounded-md border px-1.5 py-0.5 text-[10px] font-medium ${DIFFICULTY_COLORS[concept.difficulty]}`}>
              {concept.difficulty}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmark(concept.id);
              }}
              aria-pressed={bookmarked}
              aria-label={`${bookmarked ? 'Remove bookmark on' : 'Bookmark'} ${concept.title}`}
              className={`rounded-lg p-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                bookmarked ? 'text-purple-400 bg-purple-950/50' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'
              }`}
              title={bookmarked ? 'Bookmarked' : 'Bookmark concept'}
            >
              <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-purple-400' : ''}`} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleComplete(concept.id);
              }}
              aria-pressed={completed}
              aria-label={`${completed ? 'Unmark' : 'Mark'} ${concept.title} as mastered`}
              className={`rounded-lg p-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                completed ? 'text-cyan-400 bg-cyan-950/50' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'
              }`}
              title={completed ? 'Mastered' : 'Mark as mastered'}
            >
              <CheckCircle2 className={`h-4 w-4 ${completed ? 'fill-cyan-400/20' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
          {concept.title}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
          {concept.tagline}
        </p>

        {/* Plain-English Mental Model Analogy */}
        <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg bg-cyan-950/30 border border-cyan-800/40 px-2 py-1 text-[11px] font-medium text-cyan-300">
          <span className="text-amber-400" aria-hidden="true">💡</span>
          <span className="truncate">{concept.plainEnglishAnalogy}</span>
        </div>

        {/* Thinkers Pills */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {concept.formalTerminology.keyThinkers.slice(0, 3).map((thinker, i) => (
            <span key={i} className="rounded bg-zinc-900/80 px-2 py-0.5 text-[10px] font-medium text-zinc-400 border border-zinc-800/60">
              {thinker}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Weapon Snippet Preview */}
      <div className="mt-4 pt-3 border-t border-zinc-800/60">
        {primaryWeapon && (
          <div className="rounded-xl bg-[#090a0f] p-2.5 border border-zinc-800/80">
            <div className="flex items-center justify-between text-[11px] font-semibold text-amber-400 mb-1">
              <span className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                Quick Weapon
              </span>
              <button
                type="button"
                onClick={handleCopyWeapon}
                className="flex items-center gap-1 text-[10px] font-medium text-zinc-400 hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                aria-label={`Copy quick weapon for ${concept.title}`}
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
            <p className="text-[11px] text-zinc-300 italic line-clamp-2 font-mono leading-relaxed">
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
          className="mt-2.5 flex w-full items-center justify-between rounded-lg text-xs text-zinc-500 group-hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          aria-label={`Read full breakdown of ${concept.title}`}
        >
          <span className="text-[11px] font-medium">Read Full Breakdown</span>
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
};
