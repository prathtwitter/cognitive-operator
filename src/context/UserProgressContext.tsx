import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ALL_CONCEPTS } from '../data';

interface UserProgressContextType {
  completedConceptIds: string[];
  bookmarkedConceptIds: string[];
  scenarioScores: Record<string, boolean>;
  toggleComplete: (id: string) => void;
  toggleBookmark: (id: string) => void;
  isCompleted: (id: string) => boolean;
  isBookmarked: (id: string) => boolean;
  recordQuizResult: (scenarioId: string, passed: boolean) => void;
  resetProgress: () => void;
  stats: {
    total: number;
    completed: number;
    bookmarked: number;
    progressPercentage: number;
  };
}

const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

const STORAGE_KEYS = {
  COMPLETED: 'cog_operator_completed_v1',
  BOOKMARKED: 'cog_operator_bookmarked_v1',
  SCORES: 'cog_operator_scores_v1',
} as const;

function readStored<T>(key: string, fallback: T): T {
  try {
    const saved = localStorage.getItem(key);
    return saved ? (JSON.parse(saved) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeStored(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Private mode or quota exhausted — progress simply will not persist.
  }
}

export const UserProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedConceptIds, setCompletedConceptIds] = useState<string[]>(() =>
    readStored<string[]>(STORAGE_KEYS.COMPLETED, [])
  );

  const [bookmarkedConceptIds, setBookmarkedConceptIds] = useState<string[]>(() =>
    readStored<string[]>(STORAGE_KEYS.BOOKMARKED, [])
  );

  const [scenarioScores, setScenarioScores] = useState<Record<string, boolean>>(() =>
    readStored<Record<string, boolean>>(STORAGE_KEYS.SCORES, {})
  );

  useEffect(() => {
    writeStored(STORAGE_KEYS.COMPLETED, completedConceptIds);
  }, [completedConceptIds]);

  useEffect(() => {
    writeStored(STORAGE_KEYS.BOOKMARKED, bookmarkedConceptIds);
  }, [bookmarkedConceptIds]);

  useEffect(() => {
    writeStored(STORAGE_KEYS.SCORES, scenarioScores);
  }, [scenarioScores]);

  const completedSet = useMemo(() => new Set(completedConceptIds), [completedConceptIds]);
  const bookmarkedSet = useMemo(() => new Set(bookmarkedConceptIds), [bookmarkedConceptIds]);

  const toggleComplete = useCallback((id: string) => {
    setCompletedConceptIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const toggleBookmark = useCallback((id: string) => {
    setBookmarkedConceptIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const isCompleted = useCallback((id: string) => completedSet.has(id), [completedSet]);
  const isBookmarked = useCallback((id: string) => bookmarkedSet.has(id), [bookmarkedSet]);

  /**
   * Keep the best attempt. Re-opening a scenario you already passed and picking a
   * wrong option to read its explanation must not silently erase the pass.
   */
  const recordQuizResult = useCallback((scenarioId: string, passed: boolean) => {
    setScenarioScores((prev) =>
      prev[scenarioId] === true ? prev : { ...prev, [scenarioId]: passed }
    );
  }, []);

  /**
   * Clear only this app's keys. `localStorage.clear()` would wipe every other app
   * sharing the origin — which is the case on a shared github.io domain.
   */
  const resetProgress = useCallback(() => {
    for (const key of Object.values(STORAGE_KEYS)) {
      try {
        localStorage.removeItem(key);
      } catch {
        // Ignore — in-memory state below is still reset.
      }
    }
    setCompletedConceptIds([]);
    setBookmarkedConceptIds([]);
    setScenarioScores({});
  }, []);

  const value = useMemo<UserProgressContextType>(() => {
    const total = ALL_CONCEPTS.length;
    const completed = completedConceptIds.length;

    return {
      completedConceptIds,
      bookmarkedConceptIds,
      scenarioScores,
      toggleComplete,
      toggleBookmark,
      isCompleted,
      isBookmarked,
      recordQuizResult,
      resetProgress,
      stats: {
        total,
        completed,
        bookmarked: bookmarkedConceptIds.length,
        progressPercentage: total === 0 ? 0 : Math.round((completed / total) * 100),
      },
    };
  }, [
    completedConceptIds,
    bookmarkedConceptIds,
    scenarioScores,
    toggleComplete,
    toggleBookmark,
    isCompleted,
    isBookmarked,
    recordQuizResult,
    resetProgress,
  ]);

  return <UserProgressContext.Provider value={value}>{children}</UserProgressContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserProgress = () => {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
};
