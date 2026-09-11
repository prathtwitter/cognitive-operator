import React, { useState } from 'react';
import {
  ShieldAlert, Sparkles, Copy, Check, Printer, AlertTriangle,
  ArrowRight, ShieldCheck, Zap, RefreshCw, BookmarkCheck
} from 'lucide-react';
import {
  MEETING_CONTEXTS,
  ARCHETYPE_OPTIONS,
  VULNERABILITY_OPTIONS,
  generateBattleCard,
  type GeneratedBattleCard,
} from '../data/battleTemplates';
import { copyText } from '../lib/clipboard';

interface PreFlightBattleCardViewProps {
  onSelectConcept?: (conceptId: string) => void;
  onLaunchSimulator?: () => void;
}

export const PreFlightBattleCardView: React.FC<PreFlightBattleCardViewProps> = ({
  onLaunchSimulator,
}) => {
  const [selectedMeeting, setSelectedMeeting] = useState<string>(MEETING_CONTEXTS[0].id);
  const [selectedArchetype, setSelectedArchetype] = useState<string>(ARCHETYPE_OPTIONS[0].id);
  const [selectedVulnerability, setSelectedVulnerability] = useState<string>(VULNERABILITY_OPTIONS[0].id);
  const [card, setCard] = useState<GeneratedBattleCard>(() =>
    generateBattleCard(MEETING_CONTEXTS[0].id, ARCHETYPE_OPTIONS[0].id, VULNERABILITY_OPTIONS[0].id)
  );
  const [cardRefId, setCardRefId] = useState('BC-8492');
  const [copiedWeaponIndex, setCopiedWeaponIndex] = useState<number | null>(null);
  const [copiedFullCard, setCopiedFullCard] = useState(false);
  const [savedToVault, setSavedToVault] = useState(false);

  const handleGenerate = () => {
    const newCard = generateBattleCard(selectedMeeting, selectedArchetype, selectedVulnerability);
    setCard(newCard);
    setCardRefId(`BC-${Math.floor(1000 + Math.random() * 9000)}`);
    setSavedToVault(false);
  };

  const handleCopyWeapon = async (script: string, index: number) => {
    const success = await copyText(script);
    if (success) {
      setCopiedWeaponIndex(index);
      setTimeout(() => setCopiedWeaponIndex(null), 2000);
    }
  };

  const handleCopyFullCard = async () => {
    const text = `
=== ${card.title} ===
STRATEGIC OBJECTIVE:
${card.strategicObjective}

OPENING MOVE (${card.openingMove.rule}):
"${card.openingMove.script}"

PREDICTABLE PSYCHOLOGICAL TRAPS:
${card.predictableTraps.map(t => `- ${t.trapName}: ${t.howItManifests}`).join('\n')}

PRIMED WEAPONS:
${card.primedWeapons.map(w => `- ${w.weaponName}\n  SCRIPT: "${w.script}"\n  WHY: ${w.whyItWorks}`).join('\n')}

RED-LINE TRIPWIRE:
NEVER SAY: ${card.redLineTripwire.fatalPhrase}
BECAUSE: ${card.redLineTripwire.whyItFails}
REFRAME AS: ${card.redLineTripwire.reframe}

PERSONAL SHIELD:
Vulnerability: ${card.personalShield.vulnerabilityLabel}
Counter-Habit: ${card.personalShield.counterHabit}

CLOSING LOCK:
${card.closingLock}
    `.trim();

    const success = await copyText(text);
    if (success) {
      setCopiedFullCard(true);
      setTimeout(() => setCopiedFullCard(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSaveToVault = () => {
    try {
      const savedCards = JSON.parse(localStorage.getItem('cog_saved_battlecards') || '[]');
      savedCards.unshift({
        ...card,
        date: new Date().toISOString(),
        id: `battlecard-${Date.now()}`,
      });
      localStorage.setItem('cog_saved_battlecards', JSON.stringify(savedCards.slice(0, 10)));
      setSavedToVault(true);
      setTimeout(() => setSavedToVault(false), 3000);
    } catch {
      // quota or private mode
    }
  };

  const currentArchetypeObj = ARCHETYPE_OPTIONS.find(a => a.id === selectedArchetype) || ARCHETYPE_OPTIONS[0];

  return (
    <div className="space-y-8 print:p-0 text-stone-200">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0f14] p-6 sm:p-10 shadow-2xl print:hidden">
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#c48b76]/10 blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c48b76] mb-3">
            <ShieldAlert className="h-3.5 w-3.5" />
            <span>Executive Encounter Preparation</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-white tracking-tight">
            Meeting Battle Card Generator
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-400 leading-relaxed font-sans">
            Synthesize encounter parameters in seconds. Generate a structured tactical dossier with psychological tripwires, limbic counters, and closing commitments.
          </p>
        </div>
      </div>

      {/* Configuration Wizard: 3 Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 print:hidden">
        {/* Step 1: Context */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0e0f14] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-stone-400">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-[#c48b76] font-mono text-[10px]">
                1
              </span>
              <span>Decision Arena</span>
            </div>
            <label htmlFor="meeting-context-select" className="sr-only">Meeting Context</label>
            <select
              id="meeting-context-select"
              aria-label="Meeting Context"
              value={selectedMeeting}
              onChange={(e) => setSelectedMeeting(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#08080a] p-3 text-xs font-medium text-white focus:border-[#c48b76] focus:outline-none"
            >
              {MEETING_CONTEXTS.map((m) => (
                <option key={m.id} value={m.id}>
                  [{m.category}] {m.name}
                </option>
              ))}
            </select>
            <p className="mt-2.5 text-xs text-stone-400 leading-relaxed font-sans">
              {MEETING_CONTEXTS.find(m => m.id === selectedMeeting)?.description}
            </p>
          </div>
        </div>

        {/* Step 2: Interlocutor Archetype */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0e0f14] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-stone-400">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-[#c48b76] font-mono text-[10px]">
                2
              </span>
              <span>Counterpart Archetype</span>
            </div>
            <label htmlFor="opponent-archetype-select" className="sr-only">Opponent Archetype</label>
            <select
              id="opponent-archetype-select"
              aria-label="Opponent Archetype"
              value={selectedArchetype}
              onChange={(e) => setSelectedArchetype(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#08080a] p-3 text-xs font-medium text-white focus:border-[#c48b76] focus:outline-none"
            >
              {ARCHETYPE_OPTIONS.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name} ({a.dangerLevel})
                </option>
              ))}
            </select>
            <p className="mt-2.5 text-xs text-stone-400 leading-relaxed font-sans">
              {currentArchetypeObj.coreTrait}
            </p>
          </div>
        </div>

        {/* Step 3: Personal Vulnerability */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0e0f14] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-stone-400">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-[#c48b76] font-mono text-[10px]">
                3
              </span>
              <span>Personal Bias Risk</span>
            </div>
            <label htmlFor="personal-vulnerability-select" className="sr-only">Personal Vulnerability</label>
            <select
              id="personal-vulnerability-select"
              aria-label="Personal Vulnerability"
              value={selectedVulnerability}
              onChange={(e) => setSelectedVulnerability(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#08080a] p-3 text-xs font-medium text-white focus:border-[#c48b76] focus:outline-none"
            >
              {VULNERABILITY_OPTIONS.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.label}
                </option>
              ))}
            </select>
            <p className="mt-2.5 text-xs text-stone-400 leading-relaxed font-sans">
              {VULNERABILITY_OPTIONS.find(v => v.id === selectedVulnerability)?.riskDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Action Trigger Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <button
          type="button"
          onClick={handleGenerate}
          className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-black hover:bg-stone-200 transition-all cursor-pointer shadow-lg"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          <span>Regenerate Tactical Card</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleSaveToVault}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-stone-300 hover:bg-white/10 transition-colors cursor-pointer"
          >
            {savedToVault ? (
              <>
                <BookmarkCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Saved to Vault</span>
              </>
            ) : (
              <>
                <ShieldCheck className="h-3.5 w-3.5 text-[#c48b76]" />
                <span>Save to Vault</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleCopyFullCard}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-stone-300 hover:bg-white/10 transition-colors cursor-pointer"
          >
            {copiedFullCard ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied Full Dossier</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy Full Card</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-stone-300 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Print Dossier</span>
          </button>

          {onLaunchSimulator && (
            <button
              type="button"
              onClick={onLaunchSimulator}
              className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white hover:bg-white/15 transition-colors cursor-pointer"
            >
              <span>Test in Arena</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#c48b76]" />
            </button>
          )}
        </div>
      </div>

      {/* The Tactical Battle Card */}
      <div className="rounded-3xl border border-white/10 bg-[#0e0f14] p-6 sm:p-8 space-y-6 print:border print:border-black print:bg-white print:p-4 print:text-black">
        {/* Card Header */}
        <div className="border-b border-white/[0.08] pb-5 print:border-zinc-300">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[#c48b76]">
                THREAT LEVEL: {currentArchetypeObj.dangerLevel}
              </span>
              <span className="text-xs text-stone-400 font-sans">
                TARGET: <strong className="text-white">{currentArchetypeObj.name}</strong>
              </span>
            </div>
            <span className="text-[11px] text-stone-500 font-mono">
              TACTICAL REF: {cardRefId}
            </span>
          </div>

          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-light text-white tracking-tight print:text-black">
            {card.title}
          </h2>

          <div className="mt-3 rounded-2xl bg-white/[0.02] border border-white/[0.08] p-4 print:bg-zinc-100 print:border-zinc-300">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c48b76] block mb-1">
              Strategic Objective
            </span>
            <p className="text-xs sm:text-sm font-sans text-stone-200 print:text-black leading-relaxed">
              {card.strategicObjective}
            </p>
          </div>
        </div>

        {/* 1. Opening Move */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#111218] p-5 print:border-zinc-300 print:bg-zinc-50">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c48b76]">
            <Sparkles className="h-4 w-4" />
            <span>Opening Move: {card.openingMove.rule}</span>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-[#08080a] p-4 print:bg-white print:border-zinc-300">
            <p className="font-serif text-xs sm:text-sm text-stone-200 italic leading-relaxed print:text-black">
              &ldquo;{card.openingMove.script}&rdquo;
            </p>
          </div>
        </div>

        {/* 2. Predictable Traps Grid */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-[#c48b76]" />
            <span>Anticipated Psychological Traps</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {card.predictableTraps.map((trap, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-[#111218] p-4 print:bg-white print:border-zinc-300"
              >
                <span className="text-[10px] font-mono text-[#c48b76] uppercase tracking-wider">
                  Trap #{idx + 1}
                </span>
                <h4 className="font-serif text-sm font-medium text-white mt-1 mb-1.5 print:text-black">
                  {trap.trapName}
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed print:text-zinc-700 font-sans">
                  {trap.howItManifests}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Primed Conversational Weapons */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 mb-3 flex items-center gap-2">
            <Zap className="h-4 w-4 text-[#c48b76]" />
            <span>Primed Conversational Counter-Scripts</span>
          </h3>
          <div className="space-y-3">
            {card.primedWeapons.map((weapon, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-[#111218] p-5 transition-all hover:border-white/20 print:bg-white print:border-zinc-300"
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-[#c48b76] font-mono text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="font-serif text-sm font-medium text-white print:text-black">
                      {weapon.weaponName}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyWeapon(weapon.script, idx)}
                    className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-stone-300 hover:bg-white/10 transition-colors cursor-pointer print:hidden"
                  >
                    {copiedWeaponIndex === idx ? (
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

                <div className="rounded-xl border border-white/[0.06] bg-[#08080a] p-3.5 mb-2.5 print:bg-zinc-50 print:border-zinc-200">
                  <p className="font-serif text-xs sm:text-sm text-stone-200 italic leading-relaxed print:text-black">
                    &ldquo;{weapon.script}&rdquo;
                  </p>
                </div>

                <p className="text-xs text-stone-400 print:text-zinc-600 font-sans">
                  <strong className="text-stone-300 font-medium">Cognitive Mechanic:</strong> {weapon.whyItWorks}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Red-Line Tripwire (Fatal Mistake vs Reframe) */}
        <div className="rounded-2xl border border-rose-900/40 bg-rose-950/15 p-5 print:border-red-600 print:bg-red-50">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-rose-300 print:text-red-800">
            <AlertTriangle className="h-4 w-4" />
            <span>Red-Line Tripwire: Fatal Linguistic Trap to Avoid</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-rose-900/40 bg-[#08080a] p-4 print:bg-white print:border-red-300">
              <span className="text-[10px] font-mono font-medium uppercase text-rose-400 block mb-1">
                Fatal Phrase (Do NOT Say)
              </span>
              <p className="font-serif text-xs sm:text-sm font-medium text-rose-300 print:text-red-900">
                {card.redLineTripwire.fatalPhrase}
              </p>
              <p className="mt-1.5 text-xs text-stone-400 print:text-zinc-600 font-sans">
                {card.redLineTripwire.whyItFails}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#08080a] p-4 print:bg-white print:border-emerald-300">
              <span className="text-[10px] font-mono font-medium uppercase text-[#c48b76] block mb-1">
                Strategic Counter-Reframe
              </span>
              <p className="font-serif text-xs sm:text-sm font-medium text-stone-200 print:text-emerald-900">
                {card.redLineTripwire.reframe}
              </p>
            </div>
          </div>
        </div>

        {/* 5. Personal Shield & Closing Lock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/[0.08] bg-[#111218] p-5 print:border-zinc-300 print:bg-zinc-50">
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c48b76]">
              <ShieldCheck className="h-4 w-4" />
              <span>Personal Shield ({card.personalShield.vulnerabilityLabel})</span>
            </div>
            <p className="text-xs text-stone-300 print:text-zinc-800 leading-relaxed mb-2.5 font-sans">
              <strong>Risk:</strong> {card.personalShield.riskDescription}
            </p>
            <div className="rounded-xl border border-white/[0.06] bg-[#08080a] p-3 print:bg-white">
              <span className="text-[10px] font-semibold text-[#c48b76] block uppercase tracking-wider mb-1">
                Prescribed Counter-Habit:
              </span>
              <p className="text-xs font-sans text-stone-300 print:text-black">
                {card.personalShield.counterHabit}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#111218] p-5 print:border-zinc-300 print:bg-zinc-50">
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c48b76]">
              <Sparkles className="h-4 w-4" />
              <span>Closing Lock (Commitment Binding)</span>
            </div>
            <p className="text-xs text-stone-300 print:text-zinc-800 leading-relaxed mb-2.5 font-sans">
              Before stepping out of the room or ending the session, bind them to an unalterable commitment:
            </p>
            <div className="rounded-xl border border-white/[0.06] bg-[#08080a] p-3 print:bg-white">
              <p className="font-serif text-xs sm:text-sm text-stone-200 italic print:text-black">
                {card.closingLock}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
