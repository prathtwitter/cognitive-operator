import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Brain, Users, Swords, Scale, ShieldAlert,
  LayoutGrid, Share2, Headphones, RotateCcw, Target
} from 'lucide-react';
import { UserProgressProvider } from './context/UserProgressContext';
import { SPHERES, ALL_CONCEPTS, CONCEPTS_BY_SPHERE, getConceptByRef } from './data';
import { prefetchDeepDives } from './data/deepdives';
import type { Concept, SphereId } from './types/curriculum';
import type { ContextTagFilter, DifficultyFilter, Route, TabId } from './lib/router';
import { closeOverlay, navigate, TAB_TITLES, useRoute } from './lib/router';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ConceptCard } from './components/ConceptCard';
import { ConceptDetailModal } from './components/ConceptDetailModal';
import { FieldWeaponryView } from './components/FieldWeaponryView';
import { ScenarioLabView } from './components/ScenarioLabView';
import { VaultView } from './components/VaultView';
import { SearchDialog } from './components/SearchDialog';
import { DeepDiveReader } from './components/DeepDiveReader';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { PreFlightBattleCardView } from './components/PreFlightBattleCardView';
import { ArchetypeProfilerView } from './components/ArchetypeProfilerView';
import { SpacedRepetitionView } from './components/SpacedRepetitionView';
import { BranchingSimulatorView } from './components/BranchingSimulatorView';
import { ConstellationGraphView } from './components/ConstellationGraphView';
import { HeroSection } from './components/HeroSection';
import { ContactModal } from './components/ContactModal';
import { audioEngine } from './utils/audioSpeech';

const SPHERE_ICONS: Record<SphereId, React.ComponentType<{ className?: string }>> = {
  'internal-architecture': Brain,
  'social-dynamics': Users,
  'strategic-interactions': Swords,
  'behavioral-economics': Scale,
};

const AppContent: React.FC = () => {
  const route = useRoute();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [curriculumViewMode, setCurriculumViewMode] = useState<'grid' | 'constellations'>('grid');
  const [prepSubTab, setPrepSubTab] = useState<'battlecards' | 'archetypes'>('battlecards');
  const [arenaSubTab, setArenaSubTab] = useState<'simulator' | 'srs' | 'quizzes'>('simulator');

  const { tab: activeTab, sphere: selectedSphereId, difficulty: difficultyFilter } = route;
  const selectedConcept = route.conceptRef ? getConceptByRef(route.conceptRef) ?? null : null;

  const go = useCallback(
    (patch: Partial<Route>, options?: { replace?: boolean }) => {
      navigate({ ...route, ...patch }, options);
    },
    [route]
  );

  const setActiveTab = useCallback(
    (tab: TabId) => go({ tab, conceptRef: null }),
    [go]
  );

  /** Opening from a card/search pushes, so Back (and the close button) dismisses it. */
  const openConcept = useCallback(
    (concept: Concept) => go({ conceptRef: String(concept.globalIndex) }),
    [go]
  );

  /**
   * Paging prev/next *inside* the modal replaces instead, otherwise closing after
   * browsing ten concepts would walk back through all ten.
   */
  const replaceConcept = useCallback(
    (concept: Concept) => go({ conceptRef: String(concept.globalIndex) }, { replace: true }),
    [go]
  );

  const closeConcept = useCallback(
    () => closeOverlay({ ...route, conceptRef: null, reading: false }),
    [route]
  );

  const openReader = useCallback(
    (concept: Concept) => go({ conceptRef: String(concept.globalIndex), reading: true }),
    [go]
  );

  const closeReader = useCallback(
    () => closeOverlay({ ...route, reading: false }),
    [route]
  );

  // Warm the code-split deep-dive chunks once idle, so an installed PWA has the
  // whole library cached before it is ever opened offline.
  useEffect(() => {
    prefetchDeepDives();
  }, []);

  // Keyboard shortcut: Cmd+K / Ctrl+K opens the omnibar.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Keep the tab/document title in sync so shared links and bookmarks are legible.
  useEffect(() => {
    const base = 'Cognitive Operator';
    if (!selectedConcept) {
      document.title = `${TAB_TITLES[activeTab]} · ${base}`;
      return;
    }
    const prefix = route.reading ? 'Deep dive: ' : '';
    document.title = `${prefix}#${selectedConcept.globalIndex} ${selectedConcept.title} · ${base}`;
  }, [activeTab, selectedConcept, route.reading]);

  const filteredConcepts = useMemo(() => {
    const concepts =
      selectedSphereId === 'all' ? ALL_CONCEPTS : CONCEPTS_BY_SPHERE[selectedSphereId];

    return difficultyFilter === 'All'
      ? concepts
      : concepts.filter((c) => c.difficulty === difficultyFilter);
  }, [selectedSphereId, difficultyFilter]);

  return (
    <div className="min-h-screen bg-[#08080a] text-stone-200 flex flex-col selection:bg-stone-200 selection:text-black font-sans">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main App Container */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-28 md:pb-16">
        {/* VIEW 1: CURRICULUM EXPLORER & CONSTELLATION GRAPH */}
        {activeTab === 'curriculum' && (
          <div className="space-y-8">
            {/* PSYCHÉ Editorial Hero Section */}
            <HeroSection
              onExploreInsights={() => {
                document.getElementById('curriculum-explorer')?.scrollIntoView({ behavior: 'smooth' });
              }}
              onOurApproach={() => {
                setActiveTab('weaponry');
              }}
              onSelectSpherePillar={(sId) => {
                go({ sphere: sId }, { replace: true });
                document.getElementById('curriculum-explorer')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* View Mode Switcher: 40 Grid Cards vs Cognitive Constellations Network + Hands-Free Commute Mode */}
            <div
              id="curriculum-explorer"
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.08] bg-[#0e0f14] p-3 scroll-mt-24"
            >
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setCurriculumViewMode('grid')}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all cursor-pointer ${
                    curriculumViewMode === 'grid'
                      ? 'bg-white text-black shadow-md'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                  <span>Curriculum Grid</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCurriculumViewMode('constellations')}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all cursor-pointer ${
                    curriculumViewMode === 'constellations'
                      ? 'bg-white text-black shadow-md'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  <Share2 className="h-3.5 w-3.5" />
                  <span>Constellations Graph</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => audioEngine.playPlaylist(filteredConcepts)}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-4 py-2 text-xs font-medium text-stone-200 hover:border-white/50 hover:bg-white/5 transition-colors cursor-pointer"
                title="Listen to all models in this view continuously"
              >
                <Headphones className="h-3.5 w-3.5 text-[#c48b76]" />
                <span>Commute Mode: Play Audio Stream</span>
              </button>
            </div>

            {/* Conditional Rendering: Grid vs Constellations */}
            {curriculumViewMode === 'constellations' ? (
              <ConstellationGraphView onSelectConcept={openConcept} />
            ) : (
              <div className="space-y-6">
                {/* Sphere Navigator Tabs */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
                      Architectural Spheres
                    </h2>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-stone-500 hidden sm:inline">Difficulty:</span>
                      {(['All', 'Foundational', 'Advanced', 'Lethal'] as const).map((diff: DifficultyFilter) => (
                        <button
                          key={diff}
                          type="button"
                          onClick={() => go({ difficulty: diff }, { replace: true })}
                          aria-pressed={difficultyFilter === diff}
                          className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors focus-visible:outline-none ${
                            difficultyFilter === diff
                              ? 'bg-white text-black font-semibold'
                              : 'text-stone-400 hover:text-stone-200 hover:bg-white/[0.04]'
                          }`}
                        >
                          {diff}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sphere Selector Buttons Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {SPHERES.map((sphere) => {
                      const Icon = SPHERE_ICONS[sphere.id];
                      const isSelected = selectedSphereId === sphere.id;
                      const pillarName =
                        sphere.id === 'internal-architecture'
                          ? 'EMOTION'
                          : sphere.id === 'social-dynamics'
                          ? 'CONTEXT'
                          : sphere.id === 'strategic-interactions'
                          ? 'REASON'
                          : 'CHOICE';

                      return (
                        <button
                          key={sphere.id}
                          type="button"
                          onClick={() =>
                            go({ sphere: isSelected ? 'all' : sphere.id }, { replace: true })
                          }
                          aria-pressed={isSelected}
                          className={`w-full text-left rounded-2xl border p-5 transition-all focus-visible:outline-none cursor-pointer ${
                            isSelected
                              ? 'border-[#c48b76] bg-[#c48b76]/10 shadow-xl shadow-black/50'
                              : 'border-white/[0.08] bg-[#0e0f14] hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2.5">
                            <div className="flex items-center gap-2">
                              <span className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-stone-300">
                                <Icon className="h-4 w-4" />
                              </span>
                              <span className="text-[11px] font-mono tracking-wider text-stone-400">
                                Sphere {sphere.number}
                              </span>
                            </div>
                            <span className="text-[10px] font-semibold tracking-widest text-[#c48b76] uppercase">
                              {pillarName}
                            </span>
                          </div>
                          <h3 className="font-serif text-lg font-normal text-white tracking-tight line-clamp-1">
                            {sphere.shortTitle}
                          </h3>
                          <p className="mt-1 text-xs text-stone-300 line-clamp-2 leading-relaxed font-sans">
                            {sphere.tagline}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Filter Reset if filtered */}
                {selectedSphereId !== 'all' && (
                  <div className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/10 px-4 py-2.5 text-xs">
                    <span className="text-stone-300">
                      Filtering by: <strong className="text-white font-medium">{SPHERES.find(s => s.id === selectedSphereId)?.title}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => go({ sphere: 'all' }, { replace: true })}
                      className="font-medium text-[#c48b76] hover:text-white transition-colors cursor-pointer"
                    >
                      Show All 40 Models
                    </button>
                  </div>
                )}

                {/* Concepts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredConcepts.map((concept) => (
                    <ConceptCard
                      key={concept.id}
                      concept={concept}
                      onSelect={openConcept}
                    />
                  ))}
                </div>

                {filteredConcepts.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-white/10 p-12 text-center text-sm text-stone-400">
                    No models match this sphere and difficulty combination.
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: FIELD WEAPONRY ("In the Arena") */}
        {activeTab === 'weaponry' && (
          <FieldWeaponryView
            onSelectConcept={openConcept}
            filterTag={route.tag}
            searchQuery={route.q}
            onFilterTagChange={(tag: ContextTagFilter) => go({ tag }, { replace: true })}
            onSearchQueryChange={(q: string) => go({ q }, { replace: true })}
          />
        )}

        {/* VIEW 3: BATTLE PREP (Meeting Battle Card Generator & Opponent Profiler Lens) */}
        {activeTab === 'battlecards' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
              <button
                type="button"
                onClick={() => setPrepSubTab('battlecards')}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium transition-all cursor-pointer ${
                  prepSubTab === 'battlecards'
                    ? 'bg-white text-black shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <ShieldAlert className="h-4 w-4" />
                <span>Battle Card Generator</span>
              </button>
              <button
                type="button"
                onClick={() => setPrepSubTab('archetypes')}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium transition-all cursor-pointer ${
                  prepSubTab === 'archetypes'
                    ? 'bg-white text-black shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Users className="h-4 w-4" />
                <span>Opponent Profiler Lens</span>
              </button>
            </div>

            {prepSubTab === 'battlecards' ? (
              <PreFlightBattleCardView
                onSelectConcept={(cId) => {
                  const c = ALL_CONCEPTS.find(item => item.id === cId);
                  if (c) openConcept(c);
                }}
                onLaunchSimulator={() => {
                  setActiveTab('scenarios');
                  setArenaSubTab('simulator');
                }}
              />
            ) : (
              <ArchetypeProfilerView
                onSelectConcept={(cId) => {
                  const c = ALL_CONCEPTS.find(item => item.id === cId);
                  if (c) openConcept(c);
                }}
                onGenerateBattleCard={() => {
                  setPrepSubTab('battlecards');
                }}
              />
            )}
          </div>
        )}

        {/* VIEW 4: COMBAT ARENA (Debate Simulator, SRS Flashcards, Scenario Lab) */}
        {activeTab === 'scenarios' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-3">
              <button
                type="button"
                onClick={() => setArenaSubTab('simulator')}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium transition-all cursor-pointer ${
                  arenaSubTab === 'simulator'
                    ? 'bg-white text-black shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Swords className="h-4 w-4" />
                <span>Branching Debate Simulator</span>
              </button>
              <button
                type="button"
                onClick={() => setArenaSubTab('srs')}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium transition-all cursor-pointer ${
                  arenaSubTab === 'srs'
                    ? 'bg-white text-black shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <RotateCcw className="h-4 w-4" />
                <span>Daily Flashcard Drills (SRS)</span>
              </button>
              <button
                type="button"
                onClick={() => setArenaSubTab('quizzes')}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium transition-all cursor-pointer ${
                  arenaSubTab === 'quizzes'
                    ? 'bg-white text-black shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Target className="h-4 w-4" />
                <span>Scenario Lab Quizzes</span>
              </button>
            </div>

            {arenaSubTab === 'simulator' && (
              <BranchingSimulatorView
                onSelectConcept={(cId) => {
                  const c = ALL_CONCEPTS.find(item => item.id === cId);
                  if (c) openConcept(c);
                }}
              />
            )}

            {arenaSubTab === 'srs' && (
              <SpacedRepetitionView onSelectConcept={openConcept} />
            )}

            {arenaSubTab === 'quizzes' && (
              <ScenarioLabView />
            )}
          </div>
        )}

        {/* VIEW 5: VAULT / SAVED */}
        {activeTab === 'vault' && (
          <VaultView
            onSelectConcept={openConcept}
            onExploreCurriculum={() => setActiveTab('curriculum')}
          />
        )}
      </main>

      {/* Floating Hands-Free Commute Audio Controller */}
      <AudioPlayerBar onOpenConcept={openConcept} />

      {/* Mobile Bottom Thumb Navigation */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Concept brief modal */}
      {selectedConcept && (
        <ConceptDetailModal
          key={selectedConcept.id}
          concept={selectedConcept}
          onClose={closeConcept}
          onSelectConcept={replaceConcept}
          onReadDeepDive={openReader}
        />
      )}

      {/* Long-form reading surface */}
      {selectedConcept && route.reading && (
        <DeepDiveReader
          key={`read-${selectedConcept.id}`}
          concept={selectedConcept}
          onClose={closeReader}
        />
      )}

      {/* Global Search Omnibar */}
      {isSearchOpen && (
        <SearchDialog
          onClose={() => setIsSearchOpen(false)}
          onSelectConcept={openConcept}
        />
      )}

      {/* Strategic Executive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export function App() {
  return (
    <UserProgressProvider>
      <AppContent />
    </UserProgressProvider>
  );
}

export default App;
