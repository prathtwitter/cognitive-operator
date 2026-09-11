import React from 'react';
import { Bookmark, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';
import { getConceptById } from '../data';
import type { Concept } from '../types/curriculum';
import { ConceptCard } from './ConceptCard';

interface VaultViewProps {
  onSelectConcept: (concept: Concept) => void;
  onExploreCurriculum: () => void;
}

export const VaultView: React.FC<VaultViewProps> = ({ onSelectConcept, onExploreCurriculum }) => {
  const { bookmarkedConceptIds, completedConceptIds, stats, resetProgress } = useUserProgress();

  const bookmarkedConcepts = bookmarkedConceptIds
    .map(id => getConceptById(id))
    .filter((c): c is Concept => c !== undefined);

  const completedConcepts = completedConceptIds
    .map(id => getConceptById(id))
    .filter((c): c is Concept => c !== undefined);

  const handleClearProgress = () => {
    if (
      window.confirm(
        'Reset all PSYCHÉ bookmarks, mastery flags, and drill scores? This cannot be undone.'
      )
    ) {
      resetProgress();
    }
  };

  return (
    <div className="space-y-10 pb-12 text-stone-200">
      {/* Header Banner */}
      <div className="rounded-3xl border border-white/10 bg-[#0e0f14] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#c48b76]/10 blur-3xl" />
        
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c48b76] mb-3">
          <Bookmark className="h-3.5 w-3.5" />
          <span>Executive Dossier &amp; Vault</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-light text-white tracking-tight">
          Executive Mastery &amp; Bookmarks
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-400 leading-relaxed max-w-2xl font-sans">
          Curated briefing cards for high-stakes meetings, negotiations, and strategic reviews. Track progress toward mastering all 40 cognitive architectures and choice mechanisms.
        </p>

        {/* Stats Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          <div className="rounded-2xl border border-white/[0.08] bg-[#08080a] p-4 sm:p-5">
            <span className="text-[11px] font-medium uppercase tracking-wider text-stone-400">Total Curriculum</span>
            <div className="font-serif text-2xl font-light text-white mt-1">{stats.total} Models</div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#08080a] p-4 sm:p-5">
            <span className="text-[11px] font-medium uppercase tracking-wider text-stone-400">Mastered</span>
            <div className="font-serif text-2xl font-light text-white mt-1">
              {stats.completed} <span className="font-sans text-xs text-stone-400">({stats.progressPercentage}%)</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#08080a] p-4 sm:p-5">
            <span className="text-[11px] font-medium uppercase tracking-wider text-stone-400">Saved in Vault</span>
            <div className="font-serif text-2xl font-light text-[#c48b76] mt-1">{stats.bookmarked} Models</div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#08080a] p-4 sm:p-5">
            <span className="text-[11px] font-medium uppercase tracking-wider text-stone-400">Tier Readiness</span>
            <div className="font-serif text-2xl font-light text-white mt-1">
              {stats.progressPercentage >= 80 ? 'Master' : stats.progressPercentage >= 40 ? 'Operator' : 'Initiate'}
            </div>
          </div>
        </div>
      </div>

      {/* Bookmarked Concepts Section */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-light text-white flex items-center gap-2.5">
            <Bookmark className="h-4 w-4 text-[#c48b76] fill-[#c48b76]" />
            <span>Saved Bookmarks ({bookmarkedConcepts.length})</span>
          </h2>
        </div>

        {bookmarkedConcepts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center bg-white/[0.01]">
            <p className="text-sm text-stone-400 font-sans">
              No models bookmarked yet. Select the bookmark icon on any card across the curriculum to pin high-priority models here.
            </p>
            <button
              onClick={onExploreCurriculum}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold text-black hover:bg-stone-200 transition-colors cursor-pointer"
            >
              <span>Explore Curriculum</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookmarkedConcepts.map((concept) => (
              <ConceptCard
                key={concept.id}
                concept={concept}
                onSelect={onSelectConcept}
              />
            ))}
          </div>
        )}
      </section>

      {/* Mastered Concepts Section */}
      <section className="space-y-5 pt-8 border-t border-white/[0.08]">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-light text-white flex items-center gap-2.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Mastered Models ({completedConcepts.length})</span>
          </h2>
        </div>

        {completedConcepts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center bg-white/[0.01]">
            <p className="text-sm text-stone-400 font-sans">
              No models marked as mastered yet. Mark models as mastered as you review and drill them.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedConcepts.map((concept) => (
              <ConceptCard
                key={concept.id}
                concept={concept}
                onSelect={onSelectConcept}
              />
            ))}
          </div>
        )}
      </section>

      {/* Reset Vault Settings */}
      <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between text-xs text-stone-500 font-sans">
        <span>Stored securely in local browser storage.</span>
        <button
          type="button"
          onClick={handleClearProgress}
          className="flex items-center gap-1.5 text-stone-500 hover:text-rose-400 transition-colors cursor-pointer"
        >
          <Trash2 className="h-3.5 w-3.5" />
          <span>Reset Vault Data</span>
        </button>
      </div>
    </div>
  );
};
