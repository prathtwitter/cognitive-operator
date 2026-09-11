import React from 'react';
import { Home, Sparkles, ShieldAlert, Swords, Bookmark } from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';
import type { TabId } from '../lib/router';

interface MobileBottomNavProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

const TABS: Array<{
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { id: 'curriculum', label: 'Home', icon: Home },
  { id: 'weaponry', label: 'Insights', icon: Sparkles },
  { id: 'scenarios', label: 'Cases', icon: Swords },
  { id: 'battlecards', label: 'Prep', icon: ShieldAlert },
  { id: 'vault', label: 'Vault', icon: Bookmark },
];

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, setActiveTab }) => {
  const { stats } = useUserProgress();

  return (
    <nav
      className="fixed bottom-0 left-0 z-40 w-full border-t border-white/[0.08] bg-[#08080a]/95 pb-safe backdrop-blur-xl md:hidden"
      aria-label="Primary"
    >
      <div className="grid h-16 grid-cols-5 items-center px-1">
        {TABS.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              aria-current={isActive ? 'page' : undefined}
              className={`relative flex flex-col items-center justify-center gap-1 py-1 transition-colors focus-visible:outline-none rounded-lg ${
                isActive ? 'text-white' : 'text-stone-500 hover:text-stone-300'
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? 'text-[#c48b76]' : ''}`} />
              <span className={`text-[10px] tracking-wide ${isActive ? 'font-medium text-white' : 'font-normal'}`}>
                {label}
              </span>
              {id === 'vault' && stats.bookmarked > 0 && (
                <span
                  className="absolute top-1.5 right-3 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#c48b76] text-[8px] font-bold text-black"
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
