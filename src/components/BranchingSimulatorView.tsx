import React, { useState } from 'react';
import {
  Swords, Sparkles, RefreshCw, Trophy,
  AlertOctagon, CheckCircle2, ChevronRight, User, Bot, BookOpen
} from 'lucide-react';
import {
  BRANCHING_SCENARIOS,
  type BranchingScenario,
  type BranchingChoice,
} from '../data/branchingScenarios';

interface BranchingSimulatorViewProps {
  onSelectConcept?: (conceptId: string) => void;
}

interface TurnHistoryItem {
  opponentStatement: string;
  opponentPosture: string;
  userChoice: BranchingChoice;
  turnNumber: number;
}

export const BranchingSimulatorView: React.FC<BranchingSimulatorViewProps> = ({
  onSelectConcept,
}) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(BRANCHING_SCENARIOS[0].id);
  const activeScenario: BranchingScenario =
    BRANCHING_SCENARIOS.find((s) => s.id === selectedScenarioId) || BRANCHING_SCENARIOS[0];

  const [currentTurnId, setCurrentTurnId] = useState<string>(activeScenario.rootTurnId);
  const [leverage, setLeverage] = useState<number>(activeScenario.startingLeverage);
  const [history, setHistory] = useState<TurnHistoryItem[]>([]);
  const [activeFeedback, setActiveFeedback] = useState<BranchingChoice['feedback'] | null>(null);
  const [nextPendingTurnId, setNextPendingTurnId] = useState<string | null>(null);

  const resetScenario = (scenario: BranchingScenario) => {
    setCurrentTurnId(scenario.rootTurnId);
    setLeverage(scenario.startingLeverage);
    setHistory([]);
    setActiveFeedback(null);
    setNextPendingTurnId(null);
  };

  const handleSelectScenario = (id: string) => {
    setSelectedScenarioId(id);
    const scen = BRANCHING_SCENARIOS.find((s) => s.id === id) || BRANCHING_SCENARIOS[0];
    resetScenario(scen);
  };

  const currentTurn = activeScenario.turns[currentTurnId];
  const isTerminal = ['VICTORY', 'DEFEAT', 'DRAW'].includes(currentTurnId);

  const handleChoose = (choice: BranchingChoice) => {
    if (!currentTurn) return;
    const newLeverage = Math.max(0, Math.min(100, leverage + choice.leverageDelta));
    setLeverage(newLeverage);

    setHistory((prev) => [
      ...prev,
      {
        opponentStatement: currentTurn.opponentState.statement,
        opponentPosture: currentTurn.opponentState.posture,
        userChoice: choice,
        turnNumber: currentTurn.turnNumber,
      },
    ]);

    setActiveFeedback(choice.feedback);
    setNextPendingTurnId(choice.nextTurnId);
  };

  const handleContinueAfterFeedback = () => {
    if (nextPendingTurnId) {
      setCurrentTurnId(nextPendingTurnId);
      setActiveFeedback(null);
      setNextPendingTurnId(null);
    }
  };

  const getPostureBadge = (posture: string) => {
    switch (posture) {
      case 'Aggressive / Dominant':
      case 'Contemptuous / Dismissive':
        return 'border-rose-800/40 bg-rose-950/20 text-rose-300';
      case 'Passive-Aggressive Compliance':
      case 'Guarded / Skeptical':
      case 'Intellectually Resistant':
        return 'border-[#c48b76]/40 bg-[#c48b76]/15 text-[#d4a38f]';
      case 'Receptive / Exploring':
      case 'Conciliatory / Negotiating':
        return 'border-emerald-800/40 bg-emerald-950/20 text-emerald-300';
      default:
        return 'border-white/10 bg-white/[0.04] text-stone-300';
    }
  };

  return (
    <div className="space-y-8 text-stone-200">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0f14] p-6 sm:p-10 shadow-2xl">
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#c48b76]/10 blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c48b76] mb-3">
            <Swords className="h-3.5 w-3.5" />
            <span>Combat Arena • Branching Debate Simulator</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Multi-Turn Debate Simulator
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Stress-test conversational framing against realistic counterparts. Choices dynamically alter the counterpart&apos;s cognitive posture and shift psychological leverage.
          </p>
        </div>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {BRANCHING_SCENARIOS.map((scen) => {
          const isSelected = scen.id === selectedScenarioId;
          return (
            <button
              key={scen.id}
              type="button"
              onClick={() => handleSelectScenario(scen.id)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-all cursor-pointer focus-visible:outline-none ${
                isSelected
                  ? 'border-white bg-white text-black font-semibold shadow-md'
                  : 'border-white/10 bg-white/[0.03] text-stone-300 hover:border-white/25 hover:text-white'
              }`}
            >
              [{scen.category}] {scen.title}
            </button>
          );
        })}
      </div>

      {/* Main Simulation Arena */}
      <div className="rounded-3xl border border-white/10 bg-[#0e0f14] p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Scenario Description & Leverage Meter */}
        <div className="border-b border-white/[0.08] pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#c48b76]">
                ACTIVE SCENARIO • {activeScenario.category}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-normal text-white">
                {activeScenario.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => resetScenario(activeScenario)}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-stone-300 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Restart Run</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm text-stone-400 mb-5 leading-relaxed font-sans">
            {activeScenario.contextDescription}
          </p>

          {/* Psychological Leverage Meter */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono font-medium mb-1.5">
              <span className="text-stone-400 uppercase tracking-wider">Psychological Leverage</span>
              <span className="text-white font-mono">{leverage}% LEVERAGE</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-[#08080a] border border-white/10 overflow-hidden p-0.5">
              <div
                className="h-full rounded-full bg-[#c48b76] transition-all duration-500"
                style={{ width: `${leverage}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-stone-500 mt-1">
              <span>0% Frame Surrender</span>
              <span>50% Neutral Contest</span>
              <span>100% Total Hegemony</span>
            </div>
          </div>
        </div>

        {/* Conversation History Thread */}
        {history.length > 0 && (
          <div className="space-y-4 pt-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400 block">
              Prior Dialogue Exchanges:
            </span>
            {history.map((turn, idx) => (
              <div key={idx} className="space-y-2 border-l-2 border-white/10 pl-4 py-1">
                {/* Opponent Speech */}
                <div className="flex items-start gap-2.5 text-xs">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-stone-400 mt-0.5">
                    <Bot className="h-3 w-3" />
                  </div>
                  <div className="rounded-xl border border-white/[0.08] bg-[#08080a] p-3 max-w-xl text-stone-300 font-serif italic">
                    <span className="text-[9px] font-mono uppercase text-stone-500 block mb-1 not-italic">
                      Counterpart (Turn {turn.turnNumber}):
                    </span>
                    &ldquo;{turn.opponentStatement}&rdquo;
                  </div>
                </div>

                {/* User Choice */}
                <div className="flex items-start gap-2.5 text-xs justify-end">
                  <div className="rounded-xl border border-[#c48b76]/30 bg-[#c48b76]/10 p-3 max-w-xl text-stone-200 text-right font-serif italic">
                    <span className="text-[9px] font-mono uppercase text-[#c48b76] block mb-1 not-italic">
                      You ({turn.userChoice.leverageDelta > 0 ? `+${turn.userChoice.leverageDelta}%` : `${turn.userChoice.leverageDelta}%`}):
                    </span>
                    &ldquo;{turn.userChoice.responseScript}&rdquo;
                  </div>
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c48b76]/20 border border-[#c48b76]/40 text-[#c48b76] mt-0.5">
                    <User className="h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ACTIVE TURN PROMPT */}
        {!isTerminal && currentTurn && !activeFeedback && (
          <div className="rounded-2xl border border-white/[0.08] bg-[#111218] p-5 sm:p-6 space-y-4">
            {/* Opponent State Header */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-stone-400">
                  TURN #{currentTurn.turnNumber}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] font-mono uppercase ${getPostureBadge(
                    currentTurn.opponentState.posture
                  )}`}
                >
                  POSTURE: {currentTurn.opponentState.posture}
                </span>
              </div>
              <span className="text-[11px] text-stone-500 font-mono">
                Observe physical and vocal cues
              </span>
            </div>

            {/* Visual Cue & Subtext */}
            <div className="rounded-xl border border-white/[0.06] bg-[#08080a] p-3.5 text-xs text-stone-400 space-y-1 font-sans">
              <p>
                <strong className="text-stone-300">Physical Cue:</strong> {currentTurn.opponentState.visualCue}
              </p>
              <p>
                <strong className="text-[#c48b76]">Psychological Subtext:</strong> {currentTurn.opponentState.subtext}
              </p>
            </div>

            {/* Opponent Dialogue Bubble */}
            <div className="rounded-2xl border border-white/10 bg-[#08080a] p-4 sm:p-5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#c48b76] block mb-1.5">
                Counterpart States:
              </span>
              <p className="font-serif text-base sm:text-lg font-normal text-white italic leading-relaxed">
                &ldquo;{currentTurn.opponentState.statement}&rdquo;
              </p>
            </div>

            {/* 3 Interactive Choices */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 block mb-3">
                Select Your Tactical Counter-Response:
              </span>
              <div className="space-y-3">
                {currentTurn.choices.map((choice) => (
                  <button
                    key={choice.id}
                    type="button"
                    onClick={() => handleChoose(choice)}
                    className="w-full text-left rounded-2xl border border-white/[0.08] bg-[#0e0f14] p-4 sm:p-5 transition-all hover:border-white/30 hover:bg-white/[0.03] cursor-pointer group focus-visible:outline-none"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-medium text-[#c48b76] group-hover:text-white transition-colors">
                        {choice.label}
                      </span>
                      <ChevronRight className="h-4 w-4 text-stone-500 group-hover:text-white transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="font-serif text-sm sm:text-base text-stone-100 italic leading-relaxed">
                      &ldquo;{choice.responseScript}&rdquo;
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CHOICE FEEDBACK MODAL / CALLOUT (Cognitive Debrief) */}
        {activeFeedback && (
          <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c48b76]">
              <Sparkles className="h-4 w-4" />
              <span>Tactical Feedback &amp; Behavioral Impact</span>
            </div>

            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
              {activeFeedback.critique}
            </p>

            <div className="rounded-xl border border-white/[0.08] bg-[#08080a] p-4 space-y-1.5 text-xs font-sans">
              <p className="text-stone-300">
                <strong className="text-[#c48b76]">Cognitive Impact:</strong> {activeFeedback.psychologicalImpact}
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-stone-400">
                  Model: <strong className="text-white font-serif">{activeFeedback.underlyingConceptTitle}</strong>
                </span>
                {onSelectConcept && (
                  <button
                    type="button"
                    onClick={() => onSelectConcept(activeFeedback.conceptId)}
                    className="flex items-center gap-1 text-[11px] font-medium text-[#c48b76] hover:text-white cursor-pointer"
                  >
                    <BookOpen className="h-3 w-3" />
                    <span>Inspect Model</span>
                  </button>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={handleContinueAfterFeedback}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-white py-3 text-xs font-semibold text-black hover:bg-stone-200 transition-all cursor-pointer shadow-lg"
            >
              <span>Advance to Next Exchange</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* TERMINAL OUTCOME SCREEN */}
        {isTerminal && (
          <div className="rounded-2xl border border-white/10 bg-[#111218] p-6 sm:p-10 text-center space-y-6">
            {currentTurnId === 'VICTORY' && (
              <>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950/40 border border-emerald-800/60 text-emerald-400">
                  <Trophy className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                    OUTCOME ACHIEVED • HIGH LEVERAGE
                  </span>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-normal text-white">
                    {activeScenario.outcomes.victory.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-stone-300 max-w-xl mx-auto leading-relaxed font-sans">
                    {activeScenario.outcomes.victory.summary}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#08080a] p-5 max-w-xl mx-auto text-left">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c48b76] block mb-1">
                    Executive Takeaway:
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans">
                    {activeScenario.outcomes.victory.tacticalTakeaway}
                  </p>
                </div>
              </>
            )}

            {currentTurnId === 'DEFEAT' && (
              <>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-950/40 border border-rose-800/60 text-rose-400">
                  <AlertOctagon className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400">
                    OUTCOME • FRAME CONCEDED
                  </span>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-normal text-white">
                    {activeScenario.outcomes.defeat.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-stone-300 max-w-xl mx-auto leading-relaxed font-sans">
                    {activeScenario.outcomes.defeat.summary}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#08080a] p-5 max-w-xl mx-auto text-left">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-300 block mb-1">
                    Post-Mortem Analysis:
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans">
                    {activeScenario.outcomes.defeat.tacticalTakeaway}
                  </p>
                </div>
              </>
            )}

            {currentTurnId === 'DRAW' && (
              <>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-stone-300">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                    OUTCOME • DEADLOCK / DRAW
                  </span>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-normal text-white">
                    {activeScenario.outcomes.draw.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-stone-300 max-w-xl mx-auto leading-relaxed font-sans">
                    {activeScenario.outcomes.draw.summary}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#08080a] p-5 max-w-xl mx-auto text-left">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c48b76] block mb-1">
                    Strategic Observation:
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans">
                    {activeScenario.outcomes.draw.tacticalTakeaway}
                  </p>
                </div>
              </>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => resetScenario(activeScenario)}
                className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-black hover:bg-stone-200 transition-colors cursor-pointer"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Replay Scenario</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
