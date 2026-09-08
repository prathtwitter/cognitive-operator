import React, { useEffect, useMemo, useState } from 'react';
import { Search, Zap, Copy, Check, Filter, ArrowUpRight, X } from 'lucide-react';
import { ALL_WEAPONS, getConceptById } from '../data';
import type { FlattenedWeapon } from '../data';
import type { Concept } from '../types/curriculum';
import type { ContextTagFilter } from '../lib/router';
import { CONTEXT_TAGS } from '../lib/router';
import { copyText } from '../lib/clipboard';

interface FieldWeaponryViewProps {
  onSelectConcept: (concept: Concept) => void;
  filterTag: ContextTagFilter;
  searchQuery: string;
  onFilterTagChange: (tag: ContextTagFilter) => void;
  onSearchQueryChange: (query: string) => void;
}

/** Delay before a keystroke reaches the URL — keeps typing snappy and history quiet. */
const URL_SYNC_DELAY_MS = 250;

export const FieldWeaponryView: React.FC<FieldWeaponryViewProps> = ({
  onSelectConcept,
  filterTag,
  searchQuery,
  onFilterTagChange,
  onSearchQueryChange,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [copyFailedKey, setCopyFailedKey] = useState<string | null>(null);

  // The input stays local for responsiveness; the URL catches up on a debounce.
  const [draft, setDraft] = useState(searchQuery);
  const [syncedQuery, setSyncedQuery] = useState(searchQuery);

  // An external change (deep link, back button) always wins. Adjusting during render
  // is React's sanctioned prop-sync pattern — an effect here would cascade renders.
  if (searchQuery !== syncedQuery) {
    setSyncedQuery(searchQuery);
    setDraft(searchQuery);
  }

  useEffect(() => {
    if (draft === searchQuery) return;
    const timer = setTimeout(() => onSearchQueryChange(draft), URL_SYNC_DELAY_MS);
    return () => clearTimeout(timer);
  }, [draft, searchQuery, onSearchQueryChange]);

  const filteredWeapons = useMemo(() => {
    const query = draft.trim().toLowerCase();
    return ALL_WEAPONS.filter((w: FlattenedWeapon) => {
      const matchesTag = filterTag === 'All' || w.contextTag === filterTag;
      const matchesSearch =
        !query ||
        w.situation.toLowerCase().includes(query) ||
        w.phrase.toLowerCase().includes(query) ||
        w.conceptTitle.toLowerCase().includes(query) ||
        w.rationale.toLowerCase().includes(query);
      return matchesTag && matchesSearch;
    });
  }, [filterTag, draft]);

  const handleCopy = async (phrase: string, key: string) => {
    const ok = await copyText(phrase);
    if (ok) {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } else {
      setCopyFailedKey(key);
      setTimeout(() => setCopyFailedKey(null), 2000);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-950/20 via-[#11131a] to-[#11131a] p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
          <Zap className="h-4 w-4" />
          Field Weaponry Matrix
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          In the Arena: Rapid Conversational Ammo
        </h1>
        <p className="mt-2 text-sm text-zinc-300 max-w-2xl leading-relaxed">
          Tactical scripts and linguistic framing techniques designed to neutralize cognitive traps, de-escalate hostility, and dismantle bluster without sounding academic.
        </p>

        {/* Search & Tag Filter Controls */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" aria-hidden="true" />
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Search by situation (e.g. 'blame', 'deadlock', 'gut feel', 'quota')..."
              aria-label="Search tactical scripts by situation"
              className="w-full rounded-xl border border-zinc-800 bg-[#090a0f] pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0" role="group" aria-label="Filter by context">
            <Filter className="h-3.5 w-3.5 text-zinc-500 hidden sm:block" aria-hidden="true" />
            {CONTEXT_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onFilterTagChange(tag)}
                aria-pressed={filterTag === tag}
                className={`rounded-xl px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  filterTag === tag
                    ? 'bg-amber-500 text-black shadow-md shadow-amber-950/40'
                    : 'border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between px-1 text-xs text-zinc-400" aria-live="polite">
        <span>Showing <strong className="text-white">{filteredWeapons.length}</strong> tactical scripts</span>
        {filterTag !== 'All' && <span>Filtered by: <strong className="text-amber-400">{filterTag}</strong></span>}
      </div>

      {/* Weaponry Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredWeapons.map((weapon: FlattenedWeapon) => {
          const concept = getConceptById(weapon.conceptId);
          return (
            <div
              key={weapon.key}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-[#11131a] p-5 hover:border-amber-500/30 transition-all shadow-sm"
            >
              <div>
                {/* Situation & Origin Concept */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block rounded bg-amber-950/60 border border-amber-800/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300 mb-1.5">
                      {weapon.contextTag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                      {weapon.situation}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(weapon.phrase, weapon.key)}
                    className="flex items-center gap-1.5 shrink-0 rounded-lg border border-zinc-700 bg-zinc-800/80 px-2.5 py-1.5 text-xs font-semibold text-zinc-200 hover:border-amber-500/40 hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    aria-label={`Copy script: ${weapon.situation}`}
                    title="Copy phrase to clipboard"
                  >
                    {copiedKey === weapon.key ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : copyFailedKey === weapon.key ? (
                      <>
                        <X className="h-3.5 w-3.5 text-rose-400" />
                        <span className="text-rose-400">Select &amp; copy</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* The Verbatim Script */}
                <div className="rounded-xl bg-[#090a0f] p-3.5 border border-zinc-800/80 font-mono text-xs sm:text-sm text-amber-100/90 leading-relaxed select-all">
                  “{weapon.phrase}”
                </div>

                {/* Why it works */}
                <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-300 font-semibold">Strategic Rationale: </strong>
                  {weapon.rationale}
                </p>
              </div>

              {/* Concept Origin Link */}
              {concept && (
                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500">
                    Source: <span className="text-zinc-400 font-medium">#{concept.globalIndex} {concept.title}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectConcept(concept)}
                    className="flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                    aria-label={`Inspect theory behind ${concept.title}`}
                  >
                    <span>Inspect Theory</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredWeapons.length === 0 && (
        <div className="rounded-2xl border border-dashed border-zinc-800 p-8 text-center text-sm text-zinc-400">
          No scripts match that filter. Try a different context tag or a broader search term.
        </div>
      )}
    </div>
  );
};
