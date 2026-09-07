import React, { createContext, useContext, useState, useEffect } from 'react';
import type { SphereId } from '../types/curriculum';
import { ALL_CONCEPTS } from '../data';

interface UserProgressContextType {
  completedConceptIds: string[];
  bookmarkedConceptIds: string[];
  scenarioScores: Record<string, boolean>;
  selectedSphereId: SphereId | 'all';
  searchQuery: string;
  setSelectedSphereId: (id: SphereId | 'all') => void;
  setSearchQuery: (query: string) => void;
  toggleComplete: (id: string) => void;
  toggleBookmark: (id: string) => void;
  isCompleted: (id: string) => boolean;
  isBookmarked: (id: string) => boolean;
  recordQuizResult: (scenarioId: string, passed: boolean) => void;
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
};

export const UserProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedConceptIds, setCompletedConceptIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarkedConceptIds, setBookmarkedConceptIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKED);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [scenarioScores, setScenarioScores] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SCORES);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [selectedSphereId, setSelectedSphereId] = useState<SphereId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(completedConceptIds));
    } catch (e) {
      console.error(e);
    }
  }, [completedConceptIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKED, JSON.stringify(bookmarkedConceptIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedConceptIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SCORES, JSON.stringify(scenarioScores));
    } catch (e) {
      console.error(e);
    }
  }, [scenarioScores]);

  const toggleComplete = (id: string) => {
    setCompletedConceptIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedConceptIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isCompleted = (id: string) => completedConceptIds.includes(id);
  const isBookmarked = (id: string) => bookmarkedConceptIds.includes(id);

  const recordQuizResult = (scenarioId: string, passed: boolean) => {
    setScenarioScores(prev => ({ ...prev, [scenarioId]: passed }));
  };

  const total = ALL_CONCEPTS.length;
  const completed = completedConceptIds.length;
  const bookmarked = bookmarkedConceptIds.length;
  const progressPercentage = Math.round((completed / total) * 100);

  return (
    <UserProgressContext.Provider
      value={{
        completedConceptIds,
        bookmarkedConceptIds,
        scenarioScores,
        selectedSphereId,
        searchQuery,
        setSelectedSphereId,
        setSearchQuery,
        toggleComplete,
        toggleBookmark,
        isCompleted,
        isBookmarked,
        recordQuizResult,
        stats: {
          total,
          completed,
          bookmarked,
          progressPercentage,
        },
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
};

export const useUserProgress = () => {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
};
