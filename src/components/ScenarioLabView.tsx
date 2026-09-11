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
      <div className="rounded-3xl border border-[#c48b76]/20 bg-gradient-to-br from-[#12131a] via-[#0e0f14] to-[#08080a] p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#c48b76]">
            <Compass className="h-3.5 w-3.5" />
            Pattern Recognition Laboratory
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-[#c48b76]/30 bg-[#c48b76]/10 px-3 py-1 text-xs font-mono font-bold text-[#e5b8a6]">
            <Trophy className="h-3.5 w-3.5 text-[#c48b76]" />
            Mastery: {scoreCount}/{totalScenarios}
          </div>
        </div>
        <h1 className="text-2xl sm:text-4xl font-serif font-normal text-white tracking-tight">
          Live Arena Simulations
        </h1>
        <p className="mt-2 text-sm text-stone-300 font-normal leading-relaxed">
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
                className={`h-1.5 flex-1 rounded-full cursor-pointer transition-all ${
                  idx === currentScenarioIndex
                    ? 'bg-[#c48b76] ring-2 ring-[#c48b76]/40'
                    : hasPassed
                    ? 'bg-emerald-500/80'
                    : hasFailed
                    ? 'bg-rose-500/80'
                    : 'bg-white/10'
                }`}
                title={s.title}
              />
            );
          })}
        </div>
      </div>

      {/* Active Scenario Card */}
      <div className="rounded-3xl border border-white/10 bg-[#0e0f14] p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-white/10 pb-4">
          <span className="font-mono text-zinc-300 uppercase tracking-widest text-[11px]">
            Scenario {currentScenarioIndex + 1} of {totalScenarios}
          </span>
          <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-mono text-[#e5b8a6] border border-[#c48b76]/20">
            {scenario.context} Environment
          </span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-normal text-white tracking-tight">
            {scenario.title}
          </h2>
          <p className="mt-3 text-sm text-zinc-300 leading-relaxed font-light">
            {scenario.scenarioText}
          </p>

          {scenario.dialogueSnippet && (
            <div className="mt-4 rounded-2xl bg-[#08080a] p-4 border-l-2 border-[#c48b76] border-y border-r border-white/5 text-xs sm:text-sm text-zinc-200 italic font-mono">
              {scenario.dialogueSnippet}
            </div>
          )}
        </div>

        {/* Question Header */}
        <div className="pt-2">
          <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#c48b76]">
            Diagnostic Test:
          </h3>
          <p className="text-base font-serif text-white mt-1">
            {scenario.question}
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {scenario.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            let optionStyles = 'border-white/5 bg-[#08080a] hover:border-white/20 text-zinc-300';

            if (isSelected) {
              optionStyles = 'border-[#c48b76] bg-[#c48b76]/10 text-white ring-1 ring-[#c48b76]/50';
            }

            if (isAnswerSubmitted) {
              if (option.isCorrect) {
                optionStyles = 'border-emerald-500/60 bg-emerald-950/30 text-emerald-200 ring-1 ring-emerald-500/40';
              } else if (isSelected && !option.isCorrect) {
                optionStyles = 'border-rose-500/60 bg-rose-950/30 text-rose-200 ring-1 ring-rose-500/40';
              } else {
                optionStyles = 'border-white/5 bg-black/40 text-zinc-600 opacity-50';
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                disabled={isAnswerSubmitted}
                className={`w-full text-left rounded-2xl border p-4 transition-all flex items-start gap-3 cursor-pointer ${optionStyles}`}
              >
                <div className="mt-0.5">
                  {isAnswerSubmitted && option.isCorrect && (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  )}
                  {isAnswerSubmitted && isSelected && !option.isCorrect && (
                    <XCircle className="h-4 w-4 text-rose-400" />
                  )}
                  {!isAnswerSubmitted && (
                    <div className={`h-4 w-4 rounded-full border transition-colors ${isSelected ? 'border-[#c48b76] bg-[#c48b76]' : 'border-zinc-700'}`} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white mb-0.5">
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
            className={`w-full rounded-full py-3 text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-lg ${
              selectedOptionId
                ? 'bg-white text-black hover:bg-[#f4f4f6] shadow-white/10 cursor-pointer'
                : 'bg-white/5 text-zinc-600 cursor-not-allowed border border-white/5'
            }`}
          >
            Confirm Diagnostic
          </button>
        ) : (
          <div className="space-y-4 pt-2">
            {/* Feedback & Weaponry Reveal Box */}
            <div className={`rounded-2xl border p-5 ${
              chosenOption?.isCorrect 
                ? 'border-emerald-500/30 bg-emerald-950/20' 
                : 'border-rose-500/30 bg-rose-950/20'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {chosenOption?.isCorrect ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    <span className="text-sm font-serif font-bold text-emerald-300">Diagnostic Calibrated (Correct)</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-rose-400" />
                    <span className="text-sm font-serif font-bold text-rose-300">Diagnostic Error</span>
                  </>
                )}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {chosenOption?.explanation}
              </p>

              {/* Recommended Weapon */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#c48b76] mb-1.5">
                  <Zap className="h-3.5 w-3.5" />
                  Recommended Conversational Counter-Move:
                </div>
                <div className="rounded-xl bg-[#08080a] p-3 font-serif text-sm sm:text-base text-[#f4f4f6] border border-[#c48b76]/20 italic">
                  &ldquo;{chosenOption?.weaponRecommendation}&rdquo;
                </div>
              </div>
            </div>

            {/* Next or Reset Button */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-zinc-300 cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Restart Drills</span>
              </button>

              {currentScenarioIndex < totalScenarios - 1 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-widest text-black hover:bg-[#f4f4f6] transition-all shadow-md cursor-pointer"
                >
                  <span>Next Scenario</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              ) : (
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#c48b76]">
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
