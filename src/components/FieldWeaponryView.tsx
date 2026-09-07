import React, { useState, useMemo } from 'react';
import { Search, Zap, Copy, Check, Filter, ArrowUpRight } from 'lucide-react';
import { getAllWeapons, getConceptById } from '../data';
import type { FlattenedWeapon } from '../data';
import type { Concept } from '../types/curriculum';

interface FieldWeaponryViewProps {
  onSelectConcept: (concept: Concept) => void;
}

export const FieldWeaponryView: React.FC<FieldWeaponryViewProps> = ({ onSelectConcept }) => {
  const [filterTag, setFilterTag] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const allWeapons = useMemo(() => getAllWeapons(), []);

  const tags = ['All', 'Executive', 'Debate', 'Negotiation', 'Crisis', 'Interpersonal'];

  const filteredWeapons = useMemo(() => {
    return allWeapons.filter((w: FlattenedWeapon) => {
      const matchesTag = filterTag === 'All' || w.contextTag === filterTag;
      const query = search.toLowerCase();
      const matchesSearch = 
        !search || 
        w.situation.toLowerCase().includes(query) ||
        w.phrase.toLowerCase().includes(query) ||
        w.conceptTitle.toLowerCase().includes(query) ||
        w.rationale.toLowerCase().includes(query);
      return matchesTag && matchesSearch;
    });
  }, [allWeapons, filterTag, search]);

  const handleCopy = (phrase: string, index: number) => {
    navigator.clipboard.writeText(phrase);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
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
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by situation (e.g. 'blame', 'deadlock', 'gut feel', 'quota')..."
              className="w-full rounded-xl border border-zinc-800 bg-[#090a0f] pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <Filter className="h-3.5 w-3.5 text-zinc-500 hidden sm:block" />
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`rounded-xl px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
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
      <div className="flex items-center justify-between px-1 text-xs text-zinc-400">
        <span>Showing <strong className="text-white">{filteredWeapons.length}</strong> tactical scripts</span>
        {filterTag !== 'All' && <span>Filtered by: <strong className="text-amber-400">{filterTag}</strong></span>}
      </div>

      {/* Weaponry Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredWeapons.map((weapon: FlattenedWeapon, index: number) => {
          const concept = getConceptById(weapon.conceptId);
          return (
            <div
              key={index}
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
                    onClick={() => handleCopy(weapon.phrase, index)}
                    className="flex items-center gap-1.5 shrink-0 rounded-lg border border-zinc-700 bg-zinc-800/80 px-2.5 py-1.5 text-xs font-semibold text-zinc-200 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
                    title="Copy phrase to clipboard"
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
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
                <div className="rounded-xl bg-[#090a0f] p-3.5 border border-zinc-800/80 font-mono text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                  "{weapon.phrase}"
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
                    onClick={() => onSelectConcept(concept)}
                    className="flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
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
    </div>
  );
};
