import React, { useState } from 'react';
import { Compass, CheckCircle2, XCircle, ArrowRight, RotateCcw, Zap, Sparkles, Trophy } from 'lucide-react';
import { SCENARIOS } from '../data';
import { useUserProgress } from '../context/UserProgressContext';

export const ScenarioLabView: React.FC = () => {
  const { scenarioScores, recordQuizResult } = useUserProgress();
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const scenario = SCENARIOS[currentScenarioIndex];
  const totalScenarios = SCENARIOS.length;

  const handleSelectOption = (optionId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    const chosenOption = scenario.options.find(o => o.id === selectedOptionId);
    if (chosenOption) {
      recordQuizResult(scenario.id, chosenOption.isCorrect);
    }
  };

  const handleNext = () => {
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    if (currentScenarioIndex < totalScenarios - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentScenarioIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
  };

  const chosenOption = scenario.options.find(o => o.id === selectedOptionId);
  const scoreCount = Object.values(scenarioScores).filter(Boolean).length;

  return (
    <div className="space-y-6 pb-12 max-w-3xl mx-auto">
      {/* Header Banner */}
      <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 via-[#11131a] to-[#11131a] p-6 sm:p-8">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
            <Compass className="h-4 w-4" />
            Pattern Recognition Laboratory
          </div>
          <div className="flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-bold text-emerald-300">
            <Trophy className="h-3.5 w-3.5" />
            Mastery: {scoreCount}/{totalScenarios}
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Live Arena Simulations
        </h1>
        <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
          Test your diagnostic speed. Read high-stakes executive and interpersonal scenarios, identify the active cognitive distortion, and deploy the optimal counter-maneuver.
        </p>

        {/* Progress Dots */}
        <div className="mt-6 flex items-center gap-1.5">
          {SCENARIOS.map((s, idx) => {
            const hasPassed = scenarioScores[s.id] === true;
            const hasFailed = scenarioScores[s.id] === false;
            return (
              <div
                key={s.id}
                onClick={() => {
                  setCurrentScenarioIndex(idx);
                  setSelectedOptionId(null);
                  setIsAnswerSubmitted(false);
                }}
                className={`h-2 flex-1 rounded-full cursor-pointer transition-all ${
                  idx === currentScenarioIndex
                    ? 'bg-emerald-400 ring-2 ring-emerald-500/40'
                    : hasPassed
                    ? 'bg-emerald-600'
                    : hasFailed
                    ? 'bg-rose-600'
                    : 'bg-zinc-800'
                }`}
                title={s.title}
              />
            );
          })}
        </div>
      </div>

      {/* Active Scenario Card */}
      <div className="rounded-3xl border border-zinc-800/80 bg-[#11131a] p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800/60 pb-3">
          <span className="font-semibold text-zinc-300">
            Scenario {currentScenarioIndex + 1} of {totalScenarios}
          </span>
          <span className="rounded bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-emerald-400 border border-zinc-700/60">
            {scenario.context} Environment
          </span>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {scenario.title}
          </h2>
          <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
            {scenario.scenarioText}
          </p>

          {scenario.dialogueSnippet && (
            <div className="mt-4 rounded-xl bg-[#090a0f] p-3.5 border-l-4 border-emerald-500 border-y border-r border-zinc-800 text-xs sm:text-sm text-zinc-200 italic font-mono">
              {scenario.dialogueSnippet}
            </div>
          )}
        </div>

        {/* Question Header */}
        <div className="pt-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Diagnostic Test:
          </h3>
          <p className="text-sm font-semibold text-white mt-1">
            {scenario.question}
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {scenario.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            let optionStyles = 'border-zinc-800 bg-[#090a0f] hover:border-zinc-700 text-zinc-300';

            if (isSelected) {
              optionStyles = 'border-emerald-500 bg-emerald-950/20 text-white ring-1 ring-emerald-500/50';
            }

            if (isAnswerSubmitted) {
              if (option.isCorrect) {
                optionStyles = 'border-emerald-500 bg-emerald-950/40 text-emerald-200 ring-2 ring-emerald-500';
              } else if (isSelected && !option.isCorrect) {
                optionStyles = 'border-rose-500 bg-rose-950/40 text-rose-200 ring-2 ring-rose-500';
              } else {
                optionStyles = 'border-zinc-850 bg-zinc-900/30 text-zinc-600 opacity-60';
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                disabled={isAnswerSubmitted}
                className={`w-full text-left rounded-2xl border p-4 transition-all flex items-start gap-3 ${optionStyles}`}
              >
                <div className="mt-0.5">
                  {isAnswerSubmitted && option.isCorrect && (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  )}
                  {isAnswerSubmitted && isSelected && !option.isCorrect && (
                    <XCircle className="h-4 w-4 text-rose-400" />
                  )}
                  {!isAnswerSubmitted && (
                    <div className={`h-4 w-4 rounded-full border ${isSelected ? 'border-emerald-400 bg-emerald-500' : 'border-zinc-600'}`} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white mb-0.5">
                    {option.conceptTitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Submit or Next Controls */}
        {!isAnswerSubmitted ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={!selectedOptionId}
            className={`w-full rounded-xl py-3 text-xs sm:text-sm font-bold transition-all shadow-md ${
              selectedOptionId
                ? 'bg-emerald-500 text-black hover:bg-emerald-400 shadow-emerald-950/40'
                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
            }`}
          >
            Confirm Diagnostic
          </button>
        ) : (
          <div className="space-y-4 pt-2">
            {/* Feedback & Weaponry Reveal Box */}
            <div className={`rounded-2xl border p-5 ${
              chosenOption?.isCorrect 
                ? 'border-emerald-500/40 bg-emerald-950/20' 
                : 'border-rose-500/40 bg-rose-950/20'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {chosenOption?.isCorrect ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    <span className="text-sm font-bold text-emerald-300">Diagnostic Calibrated (Correct)</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-rose-400" />
                    <span className="text-sm font-bold text-rose-300">Diagnostic Error</span>
                  </>
                )}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {chosenOption?.explanation}
              </p>

              {/* Recommended Weapon */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5">
                  <Zap className="h-3.5 w-3.5" />
                  Recommended Conversational Counter-Move:
                </div>
                <div className="rounded-xl bg-[#090a0f] p-3 font-mono text-xs sm:text-sm text-amber-200 border border-zinc-800">
                  "{chosenOption?.weaponRecommendation}"
                </div>
              </div>
            </div>

            {/* Next or Reset Button */}
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-zinc-200"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Restart Drills</span>
              </button>

              {currentScenarioIndex < totalScenarios - 1 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-black hover:bg-emerald-400 transition-colors shadow-md"
                >
                  <span>Next Scenario</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <Sparkles className="h-4 w-4" />
                  All simulations evaluated!
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
