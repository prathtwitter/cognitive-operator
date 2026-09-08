import React from 'react';
import { BookOpen, Zap, Compass, Bookmark } from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';
import type { TabId } from '../lib/router';

interface MobileBottomNavProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

const TABS: Array<{
  id: TabId;
  label: string;
  activeColor: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { id: 'curriculum', label: 'Curriculum', activeColor: 'text-cyan-400', icon: BookOpen },
  { id: 'weaponry', label: 'Weaponry', activeColor: 'text-amber-400', icon: Zap },
  { id: 'scenarios', label: 'Scenario Lab', activeColor: 'text-emerald-400', icon: Compass },
  { id: 'vault', label: 'Vault', activeColor: 'text-purple-400', icon: Bookmark },
];

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, setActiveTab }) => {
  const { stats } = useUserProgress();

  return (
    <nav
      className="fixed bottom-0 left-0 z-40 w-full border-t border-zinc-800/80 bg-[#090a0f]/95 pb-safe backdrop-blur-lg md:hidden"
      aria-label="Primary"
    >
      <div className="grid h-16 grid-cols-4 items-center px-2">
        {TABS.map(({ id, label, activeColor, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              aria-current={isActive ? 'page' : undefined}
              className={`relative flex flex-col items-center justify-center gap-1 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg ${
                isActive ? activeColor : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[11px] font-medium tracking-tight">{label}</span>
              {id === 'vault' && stats.bookmarked > 0 && (
                <span
                  className="absolute top-1 right-5 flex h-4 w-4 items-center justify-center rounded-full bg-purple-500 text-[9px] font-bold text-white"
                  aria-label={`${stats.bookmarked} bookmarked`}
                >
                  {stats.bookmarked}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
