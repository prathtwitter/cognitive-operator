import React from 'react';
import { BookOpen, Zap, Compass, Bookmark } from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';

interface MobileBottomNavProps {
  activeTab: 'curriculum' | 'weaponry' | 'scenarios' | 'vault';
  setActiveTab: (tab: 'curriculum' | 'weaponry' | 'scenarios' | 'vault') => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, setActiveTab }) => {
  const { stats } = useUserProgress();

  return (
    <nav className="fixed bottom-0 left-0 z-40 w-full border-t border-zinc-800/80 bg-[#090a0f]/95 pb-safe backdrop-blur-lg md:hidden">
      <div className="grid h-16 grid-cols-4 items-center px-2">
        {/* Curriculum / Feed */}
        <button
          onClick={() => setActiveTab('curriculum')}
          className={`flex flex-col items-center justify-center gap-1 py-1 transition-colors ${
            activeTab === 'curriculum' ? 'text-cyan-400' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <BookOpen className="h-5 w-5" />
          <span className="text-[11px] font-medium tracking-tight">Curriculum</span>
        </button>

        {/* Field Weaponry */}
        <button
          onClick={() => setActiveTab('weaponry')}
          className={`flex flex-col items-center justify-center gap-1 py-1 transition-colors ${
            activeTab === 'weaponry' ? 'text-amber-400' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Zap className="h-5 w-5" />
          <span className="text-[11px] font-medium tracking-tight">Weaponry</span>
        </button>

        {/* Scenarios Drill */}
        <button
          onClick={() => setActiveTab('scenarios')}
          className={`flex flex-col items-center justify-center gap-1 py-1 transition-colors ${
            activeTab === 'scenarios' ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Compass className="h-5 w-5" />
          <span className="text-[11px] font-medium tracking-tight">Scenario Lab</span>
        </button>

        {/* Vault / Saved */}
        <button
          onClick={() => setActiveTab('vault')}
          className={`relative flex flex-col items-center justify-center gap-1 py-1 transition-colors ${
            activeTab === 'vault' ? 'text-purple-400' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Bookmark className="h-5 w-5" />
          <span className="text-[11px] font-medium tracking-tight">Vault</span>
          {stats.bookmarked > 0 && (
            <span className="absolute top-1 right-5 flex h-4 w-4 items-center justify-center rounded-full bg-purple-500 text-[9px] font-bold text-white">
              {stats.bookmarked}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};
