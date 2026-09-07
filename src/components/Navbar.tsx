import React from 'react';
import { Search, ShieldAlert, Sparkles, Bookmark, CheckCircle2 } from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';

interface NavbarProps {
  activeTab: 'curriculum' | 'weaponry' | 'scenarios' | 'vault';
  setActiveTab: (tab: 'curriculum' | 'weaponry' | 'scenarios' | 'vault') => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenSearch }) => {
  const { stats } = useUserProgress();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-zinc-800/80 bg-[#090a0f]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Tag */}
        <div 
          onClick={() => setActiveTab('curriculum')}
          className="flex cursor-pointer items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-sky-600/10 to-transparent border border-cyan-500/30 text-cyan-400 shadow-lg shadow-cyan-950/40">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold tracking-tight text-white sm:text-lg">
                COGNITIVE OPERATOR
              </span>
              <span className="hidden rounded-md border border-cyan-500/30 bg-cyan-950/60 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-cyan-300 sm:inline-block">
                Field Guide
              </span>
            </div>
            <p className="hidden text-[11px] font-medium text-zinc-400 sm:block">
              Behavioral Science & Strategic Interactions
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-1">
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === 'curriculum'
                ? 'bg-zinc-800 text-cyan-400 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            40 Concepts
          </button>
          <button
            onClick={() => setActiveTab('weaponry')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === 'weaponry'
                ? 'bg-zinc-800 text-amber-400 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Field Weaponry
          </button>
          <button
            onClick={() => setActiveTab('scenarios')}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === 'scenarios'
                ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Scenario Lab
          </button>
          <button
            onClick={() => setActiveTab('vault')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === 'vault'
                ? 'bg-zinc-800 text-purple-400 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Bookmark className="h-3.5 w-3.5" />
            Vault ({stats.bookmarked})
          </button>
        </nav>

        {/* Search & Mobile Progress Indicator */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
            title="Search concepts and tactics"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 lg:inline-block">
              ⌘K
            </kbd>
          </button>

          {/* Progress Pill */}
          <div 
            onClick={() => setActiveTab('vault')}
            className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 px-2.5 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-700"
            title={`${stats.completed} of ${stats.total} concepts mastered`}
          >
            <CheckCircle2 className="h-4 w-4 text-cyan-400" />
            <span className="font-semibold text-white">{stats.completed}/{stats.total}</span>
            <div className="hidden h-1.5 w-12 overflow-hidden rounded-full bg-zinc-800 sm:block">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${stats.progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
