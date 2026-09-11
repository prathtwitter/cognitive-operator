import React from 'react';
import { Search, CheckCircle2 } from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';
import type { TabId } from '../lib/router';

interface NavbarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  onOpenSearch: () => void;
  onOpenContact?: () => void;
}

interface NavItem {
  id: TabId;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'curriculum', label: 'Home' },
  { id: 'weaponry', label: 'Insights' },
  { id: 'scenarios', label: 'Case Studies' },
  { id: 'battlecards', label: 'Battle Prep' },
  { id: 'vault', label: 'Vault' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenContact,
}) => {
  const { stats } = useUserProgress();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/[0.07] bg-[#08080a]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo - PSYCHÉ in Luxury Serif */}
        <button
          type="button"
          onClick={() => setActiveTab('curriculum')}
          className="flex cursor-pointer items-baseline gap-2.5 text-left focus-visible:outline-none"
          aria-label="PSYCHÉ home"
        >
          <span className="font-serif text-2xl sm:text-3xl font-light tracking-[0.25em] text-white select-none">
            PSYCHÉ
          </span>
          <span className="hidden sm:inline-block text-[9px] uppercase tracking-[0.3em] text-[#c48b76] font-sans font-medium">
            Cognitive Operator
          </span>
        </button>

        {/* Center Desktop Navigation Links (Replicating exact theme) */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Primary"
        >
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative text-xs sm:text-[13px] tracking-wide font-normal transition-colors py-2 cursor-pointer focus-visible:outline-none ${
                  isActive ? 'text-white' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <span>{label}</span>
                {id === 'vault' && stats.bookmarked > 0 && (
                  <span className="ml-1 text-[10px] text-[#c48b76]">
                    ({stats.bookmarked})
                  </span>
                )}
                {/* Active Indicator Underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c48b76] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Utility: Search, Progress, & Contact Pill */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Quick Search Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-stone-400 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-none cursor-pointer"
            title="Search models, tactics, and weapons (⌘K)"
            aria-label="Search"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden lg:inline text-[11px]">Search</span>
            <kbd className="hidden lg:inline-block rounded bg-white/[0.06] px-1 py-0.2 text-[9px] font-mono text-stone-400">
              ⌘K
            </kbd>
          </button>

          {/* Mastery Progress Pill */}
          <button
            type="button"
            onClick={() => setActiveTab('vault')}
            className="hidden sm:flex cursor-pointer items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-stone-300 transition-colors hover:border-white/20"
            title={`${stats.completed} of ${stats.total} models mastered`}
            aria-label={`${stats.completed} of ${stats.total} models mastered.`}
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-[#c48b76]" />
            <span className="text-[11px] font-mono text-stone-300">
              {stats.completed}/{stats.total}
            </span>
          </button>

          {/* "Contact" Pill Button - Exact Match from Attached Design */}
          <button
            type="button"
            onClick={onOpenContact}
            className="rounded-full border border-white/20 bg-transparent px-5 py-1.5 sm:py-2 text-xs font-medium tracking-wide text-white transition-all hover:border-white hover:bg-white/5 active:scale-[0.98] cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};
