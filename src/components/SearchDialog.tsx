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
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Search concepts and tactics"
        tabIndex={-1}
        className="w-full max-w-xl rounded-2xl border border-zinc-800 bg-[#0c0e15] shadow-2xl overflow-hidden focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-zinc-800 px-4 py-3 bg-zinc-900/60">
          <Search className="h-5 w-5 text-zinc-400" aria-hidden="true" />
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
            placeholder="Search concepts, thinkers (Kahneman, Schelling), or tactics..."
            aria-label="Search concepts, thinkers, or tactics"
            className="flex-1 bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="rounded p-1 text-zinc-400 hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label="Close search"
          >
            ESC
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-zinc-800/40">
          {query && results.length === 0 && (
            <div className="p-8 text-center text-xs text-zinc-500">
              No matching concepts or tactics found for “{query}”. Try searching by thinker or situation.
            </div>
          )}

          {!query && (
            <div className="p-6 text-center text-xs text-zinc-500">
              Type to search across all 40 concepts, scientific mechanisms, and tactical conversational lines.
            </div>
          )}

          {results.map((concept) => (
            <button
              key={concept.id}
              type="button"
              onClick={() => select(concept)}
              className="w-full text-left flex items-center justify-between p-3 rounded-xl hover:bg-zinc-900/80 cursor-pointer transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <div className="flex-1 pr-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono font-bold text-zinc-400">
                    #{String(concept.globalIndex).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {concept.title}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 line-clamp-1">
                  {concept.tagline}
                </p>
                <div className="flex items-center gap-2 mt-1 text-[10px] text-zinc-500">
                  <span>{concept.formalTerminology.keyThinkers.slice(0, 2).join(', ')}</span>
                  {concept.conversationalWeaponry[0] && (
                    <span className="flex items-center gap-0.5 text-amber-400/90">
                      <Zap className="h-2.5 w-2.5" />
                      Weapon included
                    </span>
                  )}
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-300 transition-transform group-hover:translate-x-0.5" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
