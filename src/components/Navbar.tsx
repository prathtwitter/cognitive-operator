import React from 'react';
import { Search, ShieldAlert, Sparkles, Bookmark, CheckCircle2 } from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';
import type { TabId } from '../lib/router';

interface NavbarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  onOpenSearch: () => void;
}

const TABS: Array<{ id: TabId; label: string; activeColor: string; icon?: React.ComponentType<{ className?: string }> }> = [
  { id: 'curriculum', label: '40 Concepts', activeColor: 'text-cyan-400' },
  { id: 'weaponry', label: 'Field Weaponry', activeColor: 'text-amber-400', icon: Sparkles },
  { id: 'scenarios', label: 'Scenario Lab', activeColor: 'text-emerald-400' },
  { id: 'vault', label: 'Vault', activeColor: 'text-purple-400', icon: Bookmark },
];

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenSearch }) => {
  const { stats } = useUserProgress();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-zinc-800/80 bg-[#090a0f]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Tag */}
        <button
          type="button"
          onClick={() => setActiveTab('curriculum')}
          className="flex cursor-pointer items-center gap-3 rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          aria-label="Cognitive Operator home"
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
              Behavioral Science &amp; Strategic Interactions
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-1"
          aria-label="Primary"
        >
          {TABS.map(({ id, label, activeColor, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                  isActive ? `bg-zinc-800 ${activeColor} shadow-sm` : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {Icon && <Icon className="h-3.5 w-3.5" />}
                {label}
                {id === 'vault' && ` (${stats.bookmarked})`}
              </button>
            );
          })}
        </nav>

        {/* Search & Mobile Progress Indicator */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            title="Search concepts and tactics"
            aria-label="Search concepts and tactics"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 lg:inline-block">
              ⌘K
            </kbd>
          </button>

          {/* Progress Pill */}
          <button
            type="button"
            onClick={() => setActiveTab('vault')}
            className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 px-2.5 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            title={`${stats.completed} of ${stats.total} concepts mastered`}
            aria-label={`${stats.completed} of ${stats.total} concepts mastered. Open vault.`}
          >
            <CheckCircle2 className="h-4 w-4 text-cyan-400" />
            <span className="font-semibold text-white">{stats.completed}/{stats.total}</span>
            <span className="hidden h-1.5 w-12 overflow-hidden rounded-full bg-zinc-800 sm:block">
              <span
                className="block h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${stats.progressPercentage}%` }}
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
