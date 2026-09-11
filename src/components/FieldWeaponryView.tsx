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

  const [draft, setDraft] = useState(searchQuery);
  const [syncedQuery, setSyncedQuery] = useState(searchQuery);

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
    <div className="space-y-8 pb-12 text-stone-200">
      {/* Header Banner */}
      <div className="rounded-3xl border border-white/10 bg-[#0e0f14] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#c48b76]/10 blur-3xl" />

        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c48b76] mb-3">
          <Zap className="h-3.5 w-3.5" />
          <span>Strategic Communications Matrix</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-light text-white tracking-tight">
          In the Arena: Conversational Scripts &amp; Tactics
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-2xl leading-relaxed font-sans">
          Tested verbal scripts and behavioral framing designed to dismantle cognitive resistance, neutralize status traps, and align incentives in high-stakes negotiations.
        </p>

        {/* Search & Tag Filter Controls */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" aria-hidden="true" />
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Search situations (e.g. 'blame', 'deadlock', 'gut feel', 'quota')..."
              aria-label="Search tactical scripts by situation"
              className="w-full rounded-full border border-white/10 bg-[#08080a] pl-11 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-stone-500 focus:border-[#c48b76] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0" role="group" aria-label="Filter by context">
            <Filter className="h-3.5 w-3.5 text-stone-500 hidden sm:block" aria-hidden="true" />
            {CONTEXT_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onFilterTagChange(tag)}
                aria-pressed={filterTag === tag}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors focus-visible:outline-none cursor-pointer ${
                  filterTag === tag
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'border border-white/10 bg-white/[0.03] text-stone-400 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between px-1 text-xs text-stone-400 font-sans" aria-live="polite">
        <span>Showing <strong className="text-white font-medium">{filteredWeapons.length}</strong> conversational scripts</span>
        {filterTag !== 'All' && <span>Context: <strong className="text-[#c48b76]">{filterTag}</strong></span>}
      </div>

      {/* Weaponry Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredWeapons.map((weapon: FlattenedWeapon) => {
          const concept = getConceptById(weapon.conceptId);
          return (
            <div
              key={weapon.key}
              className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0e0f14] p-5 sm:p-6 hover:border-white/20 transition-all shadow-sm"
            >
              <div>
                {/* Situation & Origin Concept */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="inline-block rounded-full bg-white/[0.04] border border-white/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide uppercase text-[#c48b76] mb-2">
                      {weapon.contextTag}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-light text-white tracking-tight leading-snug">
                      {weapon.situation}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(weapon.phrase, weapon.key)}
                    className="flex items-center gap-1.5 shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-stone-300 hover:bg-white/10 transition-colors focus-visible:outline-none cursor-pointer"
                    aria-label={`Copy script: ${weapon.situation}`}
                    title="Copy phrase to clipboard"
                  >
                    {copiedKey === weapon.key ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
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
                <div className="rounded-xl bg-[#08080a] p-4 border border-white/[0.06] font-serif text-xs sm:text-sm text-stone-200 leading-relaxed italic select-all">
                  “{weapon.phrase}”
                </div>

                {/* Why it works */}
                <p className="mt-3 text-xs text-stone-400 leading-relaxed font-sans">
                  <strong className="text-stone-300 font-medium">Strategic Rationale: </strong>
                  {weapon.rationale}
                </p>
              </div>

              {/* Concept Origin Link */}
              {concept && (
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 font-mono">
                    Model: <span className="text-stone-400 font-medium">#{concept.globalIndex} {concept.title}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectConcept(concept)}
                    className="flex items-center gap-1 text-xs font-medium text-[#c48b76] hover:text-white transition-colors focus-visible:outline-none cursor-pointer"
                    aria-label={`Inspect theory behind ${concept.title}`}
                  >
                    <span>Inspect Model</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredWeapons.length === 0 && (
        <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center text-sm text-stone-400 font-sans">
          No scripts match that filter. Try a different context tag or a broader search query.
        </div>
      )}
    </div>
  );
};
