import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, Zap, ChevronRight } from 'lucide-react';
import { ALL_CONCEPTS } from '../data';
import type { Concept } from '../types/curriculum';
import { useDialog } from '../lib/useDialog';

interface SearchDialogProps {
  onClose: () => void;
  onSelectConcept: (concept: Concept) => void;
}

const MAX_RESULTS = 8;

/** Rendered only while open, so each launch starts from a clean, empty query. */
export const SearchDialog: React.FC<SearchDialogProps> = ({ onClose, onSelectConcept }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useDialog(true, onClose);

  useEffect(() => {
    // Defer so the panel focus applied by useDialog does not win the race.
    const timer = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(timer);
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    return ALL_CONCEPTS.filter(c => {
      const matchTitle = c.title.toLowerCase().includes(q);
      const matchTagline = c.tagline.toLowerCase().includes(q);
      const matchThinker = c.formalTerminology.keyThinkers.some(t => t.toLowerCase().includes(q));
      const matchDef = c.formalTerminology.definition.toLowerCase().includes(q);
      const matchWeapon = c.conversationalWeaponry.some(w =>
        w.phrase.toLowerCase().includes(q) || w.situation.toLowerCase().includes(q)
      );
      const matchTag = c.tags.some(t => t.toLowerCase().includes(q));

      return matchTitle || matchTagline || matchThinker || matchDef || matchWeapon || matchTag;
    }).slice(0, MAX_RESULTS);
  }, [query]);

  const select = (concept: Concept) => {
    onSelectConcept(concept);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Search models and tactics"
        tabIndex={-1}
        className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#0c0d12] shadow-2xl overflow-hidden focus:outline-none text-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 py-3.5 bg-white/[0.02]">
          <Search className="h-4 w-4 text-stone-400" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && results.length > 0) {
                e.preventDefault();
                select(results[0]);
              }
            }}
            placeholder="Search models, thinkers (Kahneman, Schelling), or tactics..."
            aria-label="Search models, thinkers, or tactics"
            className="flex-1 bg-transparent text-sm text-white placeholder-stone-500 focus:outline-none font-sans"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="rounded p-1 text-stone-400 hover:text-white focus-visible:outline-none cursor-pointer"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono text-stone-400 hover:text-white focus-visible:outline-none cursor-pointer"
            aria-label="Close search"
          >
            ESC
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-white/[0.04]">
          {query && results.length === 0 && (
            <div className="p-8 text-center text-xs text-stone-500 font-sans">
              No matching models or tactics found for “{query}”.
            </div>
          )}

          {!query && (
            <div className="p-6 text-center text-xs text-stone-500 font-sans">
              Type to search across all 40 models, scientific mechanisms, and tactical scripts.
            </div>
          )}

          {results.map((concept) => (
            <button
              key={concept.id}
              type="button"
              onClick={() => select(concept)}
              className="w-full text-left flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.04] cursor-pointer transition-colors group focus-visible:outline-none"
            >
              <div className="flex-1 pr-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono text-stone-400">
                    #{String(concept.globalIndex).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-sm font-normal text-white group-hover:text-[#f4f4f6] transition-colors">
                    {concept.title}
                  </span>
                </div>
                <p className="text-[11px] text-stone-400 line-clamp-1 font-sans">
                  {concept.tagline}
                </p>
                <div className="flex items-center gap-2 mt-1 text-[10px] text-stone-500 font-sans">
                  <span>{concept.formalTerminology.keyThinkers.slice(0, 2).join(', ')}</span>
                  {concept.conversationalWeaponry[0] && (
                    <span className="flex items-center gap-0.5 text-[#c48b76]">
                      <Zap className="h-2.5 w-2.5" />
                      Weapon included
                    </span>
                  )}
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-stone-600 group-hover:text-[#c48b76] transition-transform group-hover:translate-x-1" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
