import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Brain, Users, Swords, Scale, ShieldAlert, Sparkles,
  CheckCircle2
} from 'lucide-react';
import { UserProgressProvider, useUserProgress } from './context/UserProgressContext';
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

const SPHERE_ICONS: Record<SphereId, React.ComponentType<{ className?: string }>> = {
  'internal-architecture': Brain,
  'social-dynamics': Users,
  'strategic-interactions': Swords,
  'behavioral-economics': Scale,
};

const AppContent: React.FC = () => {
  const route = useRoute();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { stats } = useUserProgress();

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
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main App Container */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-24 md:pb-12">
        {/* VIEW 1: CURRICULUM EXPLORER */}
        {activeTab === 'curriculum' && (
          <div className="space-y-8">
            {/* Hero Banner */}
            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-[#111625] via-[#0d101a] to-[#090a0f] p-6 sm:p-10 shadow-2xl">
              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
                  <ShieldAlert className="h-4 w-4" />
                  Cognitive Operator • Master Curriculum
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Master Human Behavior & Strategic Communication
                </h1>
                <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  A 4-sphere, 40-phenomenon tactical framework engineered from empirical cognitive psychology, evolutionary neuroscience, and high-stakes game theory.
                </p>

                {/* Quick Metrics Bar */}
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>40 Core Phenomena</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                    <span>80 Conversational Weapons</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{stats.completed}/{stats.total} Mastered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sphere Navigator Tabs */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Select Architectural Sphere
                </h2>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-zinc-500 hidden sm:inline">Difficulty:</span>
                  {(['All', 'Foundational', 'Advanced', 'Lethal'] as const).map((diff: DifficultyFilter) => (
                    <button
                      key={diff}
                      type="button"
                      onClick={() => go({ difficulty: diff }, { replace: true })}
                      aria-pressed={difficultyFilter === diff}
                      className={`rounded-lg px-2 py-1 text-[11px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                        difficultyFilter === diff
                          ? 'bg-zinc-800 text-cyan-400 border border-zinc-700'
                          : 'text-zinc-500 hover:text-zinc-300'
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
                  return (
                    <button
                      key={sphere.id}
                      type="button"
                      onClick={() =>
                        go({ sphere: isSelected ? 'all' : sphere.id }, { replace: true })
                      }
                      aria-pressed={isSelected}
                      className={`w-full text-left rounded-2xl border p-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-950/20 shadow-lg shadow-cyan-950/30'
                          : 'border-zinc-800/80 bg-[#11131a] hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 ${sphere.accentColor}`}>
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="text-xs font-bold text-zinc-300">
                            Sphere {sphere.number}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-500">
                          {sphere.conceptsCount} Models
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-white tracking-tight line-clamp-1">
                        {sphere.shortTitle}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                        {sphere.tagline}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter Reset if filtered */}
            {selectedSphereId !== 'all' && (
              <div className="flex items-center justify-between rounded-xl bg-zinc-900/60 border border-zinc-800 px-4 py-2 text-xs">
                <span className="text-zinc-400">
                  Filtering by: <strong className="text-cyan-400">{SPHERES.find(s => s.id === selectedSphereId)?.title}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => go({ sphere: 'all' }, { replace: true })}
                  className="font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Show All 40 Concepts
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
              <div className="rounded-2xl border border-dashed border-zinc-800 p-8 text-center text-sm text-zinc-400">
                No concepts match this sphere and difficulty combination.
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

        {/* VIEW 3: SCENARIO LAB */}
        {activeTab === 'scenarios' && (
          <ScenarioLabView />
        )}

        {/* VIEW 4: VAULT / SAVED */}
        {activeTab === 'vault' && (
          <VaultView
            onSelectConcept={openConcept}
            onExploreCurriculum={() => setActiveTab('curriculum')}
          />
        )}
      </main>

      {/* Mobile Bottom Thumb Navigation */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Concept brief — keyed so per-concept UI state never leaks across concepts */}
      {selectedConcept && (
        <ConceptDetailModal
          key={selectedConcept.id}
          concept={selectedConcept}
          onClose={closeConcept}
          onSelectConcept={replaceConcept}
          onReadDeepDive={openReader}
        />
      )}

      {/* Long-form reading surface, layered above the brief */}
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
