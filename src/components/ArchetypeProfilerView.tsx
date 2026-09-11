import React, { useState } from 'react';
import {
  Users, AlertTriangle, ShieldAlert, Copy, Check,
  ArrowRight, Brain, Eye, Zap, ShieldCheck
} from 'lucide-react';
import { ARCHETYPE_PROFILES, type ArchetypeProfile } from '../data/archetypes';
import { copyText } from '../lib/clipboard';

interface ArchetypeProfilerViewProps {
  onSelectConcept?: (conceptId: string) => void;
  onGenerateBattleCard?: (archetypeId: string) => void;
}

export const ArchetypeProfilerView: React.FC<ArchetypeProfilerViewProps> = ({
  onSelectConcept,
  onGenerateBattleCard,
}) => {
  const [selectedId, setSelectedId] = useState<string>(ARCHETYPE_PROFILES[0].id);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const activeArchetype = ARCHETYPE_PROFILES.find((a) => a.id === selectedId) || ARCHETYPE_PROFILES[0];

  const handleCopyScript = async (script: string, idx: number) => {
    const ok = await copyText(script);
    if (ok) {
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  const getDangerBadge = (danger: ArchetypeProfile['dangerLevel']) => {
    switch (danger) {
      case 'Lethal':
        return 'bg-purple-950/40 border-purple-800/50 text-purple-300';
      case 'Severe':
        return 'bg-rose-950/40 border-rose-800/50 text-rose-300';
      case 'High':
        return 'bg-[#c48b76]/15 border-[#c48b76]/40 text-[#d4a38f]';
      default:
        return 'bg-white/[0.04] border-white/10 text-stone-300';
    }
  };

  return (
    <div className="space-y-8 text-stone-200">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0f14] p-6 sm:p-10 shadow-2xl">
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#c48b76]/10 blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c48b76] mb-3">
            <Users className="h-3.5 w-3.5" />
            <span>Behavioral Profiling Engine • Opponent Lens</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Interlocutor Archetype Matrix
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Every difficult counter-party operates on predictable cognitive heuristics. Spot their telltale patterns, decode psychological drivers, and deploy surgical counter-moves.
          </p>
        </div>
      </div>

      {/* Archetype Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
        {ARCHETYPE_PROFILES.map((profile) => {
          const isSelected = profile.id === selectedId;
          return (
            <button
              key={profile.id}
              type="button"
              onClick={() => setSelectedId(profile.id)}
              className={`rounded-2xl border p-3.5 text-left transition-all cursor-pointer focus-visible:outline-none ${
                isSelected
                  ? 'border-white bg-white text-black shadow-xl'
                  : 'border-white/[0.08] bg-[#0e0f14] hover:border-white/20 text-stone-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`rounded-full border px-2 py-0.5 text-[9px] font-mono uppercase ${
                    isSelected
                      ? 'border-black/20 bg-black/5 text-black font-semibold'
                      : getDangerBadge(profile.dangerLevel)
                  }`}
                >
                  {profile.dangerLevel}
                </span>
              </div>
              <h3 className={`text-xs font-sans font-semibold line-clamp-1 ${isSelected ? 'text-black' : 'text-white'}`}>
                {profile.name}
              </h3>
              <p className={`mt-1 text-[10px] line-clamp-2 font-sans ${isSelected ? 'text-stone-700' : 'text-stone-400'}`}>
                {profile.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Archetype Detailed Teardown Card */}
      <div className="rounded-3xl border border-white/10 bg-[#0e0f14] p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Profile Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`rounded-full border px-2.5 py-0.5 text-xs font-mono uppercase ${getDangerBadge(
                  activeArchetype.dangerLevel
                )}`}
              >
                Threat: {activeArchetype.dangerLevel}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-xs font-sans text-stone-300">
                Category: {activeArchetype.category}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight">
              {activeArchetype.name}
            </h2>
            <p className="mt-1.5 font-serif text-sm sm:text-base text-[#c48b76] italic">
              &ldquo;{activeArchetype.tagline}&rdquo;
            </p>
          </div>

          {onGenerateBattleCard && (
            <button
              type="button"
              onClick={() => onGenerateBattleCard(activeArchetype.id)}
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black hover:bg-stone-200 transition-all cursor-pointer shadow-lg"
            >
              <ShieldAlert className="h-4 w-4" />
              <span>Generate Battle Card</span>
            </button>
          )}
        </div>

        {/* Spotting Cues & Psychological Driver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: 2-Minute Spotting Cues */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#111218] p-5">
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c48b76] mb-3">
              <Eye className="h-4 w-4" />
              <span>Observable Spotting Signals</span>
            </h3>
            <ul className="space-y-2.5">
              {activeArchetype.spottingCues.map((cue, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-300 leading-relaxed font-sans">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-[#c48b76] font-mono text-[9px] mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{cue}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Psychological Driver & Exploitative Playbook */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-[#111218] p-5">
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c48b76] mb-2">
                <Brain className="h-4 w-4" />
                <span>Underlying Cognitive Driver</span>
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed font-sans">
                {activeArchetype.psychologicalDriver}
              </p>
            </div>

            <div className="rounded-2xl border border-rose-900/40 bg-rose-950/15 p-5">
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-300 mb-2">
                <AlertTriangle className="h-4 w-4" />
                <span>Their Exploitative Maneuver</span>
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed font-sans">
                {activeArchetype.exploitativePlaybook}
              </p>
            </div>
          </div>
        </div>

        {/* Counter-Weapons & Verbatim Scripts */}
        <div>
          <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 mb-3">
            <Zap className="h-4 w-4 text-[#c48b76]" />
            <span>Counter-Weapons &amp; Verbatim Scripts</span>
          </h3>
          <div className="space-y-3">
            {activeArchetype.counterMoves.map((move, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-[#111218] p-5 transition-all hover:border-white/20"
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-[#c48b76] font-mono text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="font-serif text-sm font-medium text-white">
                      {move.title}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyScript(move.script, idx)}
                    className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-stone-300 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Script</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-[#08080a] p-3.5 mb-2.5">
                  <p className="font-serif text-xs sm:text-sm text-stone-200 italic leading-relaxed">
                    &ldquo;{move.script}&rdquo;
                  </p>
                </div>

                <p className="text-xs text-stone-400 font-sans">
                  <strong className="text-stone-300 font-medium">Why it works:</strong> {move.cognitiveMechanic}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fatal Mistakes Callout */}
        {activeArchetype.fatalMistakes && activeArchetype.fatalMistakes.length > 0 && (
          <div className="rounded-2xl border border-rose-500/20 bg-rose-950/10 p-5 flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-[#c48b76] shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c48b76] block mb-1">
                Fatal Mistakes to Avoid
              </span>
              <ul className="space-y-1.5 list-disc list-inside text-xs text-stone-300 font-light leading-relaxed">
                {activeArchetype.fatalMistakes.map((mistake, mIdx) => (
                  <li key={mIdx} className="font-serif italic text-stone-200">
                    &ldquo;{mistake}&rdquo;
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Linked Concept Theoretical Foundation */}
        {activeArchetype.relatedConceptIds && activeArchetype.relatedConceptIds.length > 0 && onSelectConcept && (
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-stone-500 font-sans">
              Theoretical Foundation Models:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeArchetype.relatedConceptIds.map((cId) => (
                <button
                  key={cId}
                  type="button"
                  onClick={() => onSelectConcept(cId)}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-mono text-[#c48b76] hover:text-white hover:border-[#c48b76]/40 transition-colors cursor-pointer"
                >
                  <span>{cId}</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
