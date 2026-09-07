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
  const { bookmarkedConceptIds, completedConceptIds, stats } = useUserProgress();

  const bookmarkedConcepts = bookmarkedConceptIds
    .map(id => getConceptById(id))
    .filter((c): c is Concept => c !== undefined);

  const completedConcepts = completedConceptIds
    .map(id => getConceptById(id))
    .filter((c): c is Concept => c !== undefined);

  const handleClearProgress = () => {
    if (window.confirm('Are you sure you want to reset all bookmarks and mastery progress?')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/20 via-[#11131a] to-[#11131a] p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
          <Bookmark className="h-4 w-4" />
          Personal Mastery Vault
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Executive Mastery & Bookmarks
        </h1>
        <p className="mt-2 text-sm text-zinc-300 leading-relaxed max-w-2xl">
          Quickly review high-priority bookmarked models before walking into meetings, and track your progress toward mastering all 40 cognitive and game-theoretic phenomena.
        </p>

        {/* Stats Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-2xl border border-zinc-800 bg-[#090a0f] p-4">
            <span className="text-[11px] font-semibold text-zinc-400">Total Curriculum</span>
            <div className="text-xl font-bold text-white mt-0.5">{stats.total} Concepts</div>
          </div>

          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-4">
            <span className="text-[11px] font-semibold text-cyan-400">Mastered</span>
            <div className="text-xl font-bold text-white mt-0.5">{stats.completed} <span className="text-xs font-normal text-zinc-400">({stats.progressPercentage}%)</span></div>
          </div>

          <div className="rounded-2xl border border-purple-500/30 bg-purple-950/20 p-4">
            <span className="text-[11px] font-semibold text-purple-400">Saved in Vault</span>
            <div className="text-xl font-bold text-white mt-0.5">{stats.bookmarked} Concepts</div>
          </div>

          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4">
            <span className="text-[11px] font-semibold text-emerald-400">Readiness</span>
            <div className="text-xl font-bold text-white mt-0.5">
              {stats.progressPercentage >= 80 ? 'Elite' : stats.progressPercentage >= 40 ? 'Operator' : 'Novice'}
            </div>
          </div>
        </div>
      </div>

      {/* Bookmarked Concepts Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Bookmark className="h-4 w-4 text-purple-400 fill-purple-400" />
            <span>Saved Bookmarks ({bookmarkedConcepts.length})</span>
          </h2>
        </div>

        {bookmarkedConcepts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-800 p-8 text-center bg-zinc-900/20">
            <p className="text-sm text-zinc-400">
              You haven’t bookmarked any concepts yet. Tap the bookmark icon on any concept card to pin it here for quick pre-meeting review.
            </p>
            <button
              onClick={onExploreCurriculum}
              className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-zinc-800 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-700 transition-colors"
            >
              <span>Explore Curriculum</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      <section className="space-y-4 pt-4 border-t border-zinc-800/80">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            <span>Mastered Concepts ({completedConcepts.length})</span>
          </h2>
        </div>

        {completedConcepts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-800 p-8 text-center bg-zinc-900/20">
            <p className="text-sm text-zinc-400">
              No concepts marked as mastered yet. Mark concepts as mastered as you study each module.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
        <span>Stored offline in local browser cache.</span>
        <button
          onClick={handleClearProgress}
          className="flex items-center gap-1 text-rose-400/80 hover:text-rose-300 transition-colors"
        >
          <Trash2 className="h-3.5 w-3.5" />
          <span>Reset Vault Data</span>
        </button>
      </div>
    </div>
  );
};
