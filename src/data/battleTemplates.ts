export interface MeetingContextOption {
  id: string;
  name: string;
  category: 'Executive' | 'Commercial' | 'Interpersonal';
  description: string;
}

export interface InterlocutorArchetypeOption {
  id: string;
  name: string;
  dangerLevel: 'High' | 'Severe' | 'Lethal';
  coreTrait: string;
  typicalBehavior: string;
}

export interface PersonalVulnerabilityOption {
  id: string;
  label: string;
  riskDescription: string;
}

export interface GeneratedBattleCard {
  title: string;
  strategicObjective: string;
  openingMove: {
    rule: string;
    script: string;
  };
  predictableTraps: {
    trapName: string;
    conceptId: string;
    howItManifests: string;
  }[];
  primedWeapons: {
    weaponName: string;
    script: string;
    whyItWorks: string;
    conceptId: string;
  }[];
  redLineTripwire: {
    fatalPhrase: string;
    whyItFails: string;
    reframe: string;
  };
  personalShield: {
    vulnerabilityLabel: string;
    riskDescription: string;
    counterHabit: string;
  };
  closingLock: string;
}

export const MEETING_CONTEXTS: MeetingContextOption[] = [
  {
    id: 'comp-review',
    name: 'Executive Compensation & Promotion Review',
    category: 'Executive',
    description: 'Negotiating equity, base compensation, and executive title with superiors or board.',
  },
  {
    id: 'turf-war',
    name: 'Cross-Departmental Budget & Headcount Standoff',
    category: 'Executive',
    description: 'Protecting team resources, project scope, and autonomy against rival sibling divisions.',
  },
  {
    id: 'client-crisis',
    name: 'Hostile Client Outage / Escalation Call',
    category: 'Commercial',
    description: 'De-escalating an enraged enterprise stakeholder threatening immediate termination or litigation.',
  },
  {
    id: 'vendor-squeeze',
    name: 'Vendor Enterprise Contract Renewal / Squeeze',
    category: 'Commercial',
    description: 'Renegotiating pricing, SLAs, and commercial terms against a high-pressure sales team.',
  },
  {
    id: 'founder-deadlock',
    name: 'Co-Founder / Board Strategic Deadlock',
    category: 'Executive',
    description: 'Breaking high-stakes disagreement over product direction, company pivot, or leadership roles.',
  },
  {
    id: 'relationship-boundary',
    name: 'High-Stakes Personal / Relationship Conflict',
    category: 'Interpersonal',
    description: 'Setting firm boundaries with an emotional partner, friend, or family member.',
  },
];

export const ARCHETYPE_OPTIONS: InterlocutorArchetypeOption[] = [
  {
    id: 'volatile-dominator',
    name: 'The Volatile Dominator',
    dangerLevel: 'Severe',
    coreTrait: 'Leans on volume, intimidation, and manufactured urgency to force panic compliance.',
    typicalBehavior: 'Interrupts, stands up, threatens lawsuits or firing, demands immediate yes/no answer.',
  },
  {
    id: 'passive-bureaucrat',
    name: 'The Passive-Aggressive Consensus-Faker',
    dangerLevel: 'Lethal',
    coreTrait: 'Nods politely in public, hides behind corporate policy, and sabotages in hallway whispers.',
    typicalBehavior: 'Smiles in meetings, says "we will review," then delays decisions for 6 months.',
  },
  {
    id: 'charismatic-handwaver',
    name: 'The Charismatic Hand-Waver',
    dangerLevel: 'High',
    coreTrait: 'Substitutes dazzling aesthetics, stories, and optimism for rigorous financial math.',
    typicalBehavior: 'Dismisses edge cases as "small thinking," claims vision will solve plumbing problems.',
  },
  {
    id: 'sunk-cost-martyr',
    name: 'The Sunk-Cost Martyr',
    dangerLevel: 'Severe',
    coreTrait: 'Weaponizes past sacrifice and exhaustion to guilt the room into funding a failing asset.',
    typicalBehavior: 'Brings up 80-hour workweeks, acts wounded, claims quitting now disrespects the team.',
  },
  {
    id: 'metric-gamer',
    name: 'The Metric Gamer',
    dangerLevel: 'High',
    coreTrait: 'Ruthlessly optimizes for short-term scoreboard numbers while destroying the underlying system.',
    typicalBehavior: 'Cites green dashboards while churn explodes; hides defects to hit sprint targets.',
  },
];

export const VULNERABILITY_OPTIONS: PersonalVulnerabilityOption[] = [
  {
    id: 'defensiveness',
    label: 'I get reactive and start arguing facts when attacked',
    riskDescription: 'Triggers their amygdala and escalates the interaction into a Winner\'s Curse ego war.',
  },
  {
    id: 'loss-aversion',
    label: 'I fear losing the deal and make premature concessions',
    riskDescription: 'Causes you to give away core leverage at the first sign of friction or pushback.',
  },
  {
    id: 'false-agreement',
    label: 'I accept polite verbal nods and leave without locked commitments',
    riskDescription: 'Leaves you vulnerable to Pluralistic Ignorance and post-meeting goalpost shifts.',
  },
  {
    id: 'impostor-hesitation',
    label: 'I hesitate to anchor high or name my real number',
    riskDescription: 'Allows their opening lowball anchor to dictate the entire gravitational center of the deal.',
  },
];

export function generateBattleCard(
  meetingId: string,
  archetypeId: string,
  vulnerabilityId: string
): GeneratedBattleCard {
  const meeting = MEETING_CONTEXTS.find(m => m.id === meetingId) || MEETING_CONTEXTS[0];
  const archetype = ARCHETYPE_OPTIONS.find(a => a.id === archetypeId) || ARCHETYPE_OPTIONS[0];
  const vuln = VULNERABILITY_OPTIONS.find(v => v.id === vulnerabilityId) || VULNERABILITY_OPTIONS[0];

  const counterHabits: Record<string, string> = {
    defensiveness: 'Take a deliberate 3-second exhalation before speaking. Respond with a clarifying diagnostic question rather than a defensive counter-argument.',
    'loss-aversion': 'Write down your firm reservation value (walkaway line) beforehand. Treat their threat of termination as a costly signaling bluff.',
    'false-agreement': 'Do not conclude the meeting on generic smiles. Require the next tactical step to have a specific owner, delivery date, and penalty.',
    'impostor-hesitation': 'Deliver your ambitious opening anchor cleanly without self-discounting preambles like "I know this might be high, but...".',
  };

  const personalShield = {
    vulnerabilityLabel: vuln.label,
    riskDescription: vuln.riskDescription,
    counterHabit: counterHabits[vuln.id] || counterHabits.defensiveness,
  };

  // Tailored dynamic combinations
  if (archetype.id === 'volatile-dominator') {
    return {
      title: `BATTLE CARD: ${meeting.name.toUpperCase()}`,
      strategicObjective: 'Neutralize sympathetic fight-or-flight arousal, strip away intimidation, and force dialogue onto objective criteria.',
      openingMove: {
        rule: 'The Grounded Vagal Anchor (First 60 Seconds)',
        script: 'Drop your vocal pitch 15%, slow your speaking cadence by 30%, and do not speak until 2 seconds after they finish. Own the silence in the room.',
      },
      predictableTraps: [
        {
          trapName: 'Manufactured Urgency & Dominance Bluster',
          conceptId: 'costly-signaling-status-typologies',
          howItManifests: 'They will demand an immediate answer on the spot ("I need a yes or no right now") to trigger your decision fatigue.',
        },
        {
          trapName: 'Limbic Hijack Baiting',
          conceptId: 'emotional-contagion-autonomic-mirroring',
          howItManifests: 'They will raise their voice and use dramatic words to force you to mirror their panic or get defensive.',
        },
        {
          trapName: 'The False Binary Choice',
          conceptId: 'fixed-pie-perception-integrative-bargaining',
          howItManifests: 'They will frame the problem as zero-sum: "Either you take this haircut, or this entire relationship is terminated."',
        },
      ],
      primedWeapons: [
        {
          weaponName: 'Affect Labeling (The Limbic Neutralizer)',
          conceptId: 'affect-labeling-de-escalation',
          script: 'It sounds like you feel completely blindsided by this timeline, and it feels like our team jeopardized your standing with your leadership.',
          whyItWorks: 'Biological down-regulation of their amygdala. They will exhale, say "Exactly," and their voice pitch will drop.',
        },
        {
          weaponName: 'Labeling the Dominance Play',
          conceptId: 'costly-signaling-status-typologies',
          script: 'You are leaning hard on volume and ultimatums right now. If we step past the threats for two minutes, what is the actual strategic outcome you need this room to underwrite?',
          whyItWorks: 'Labels the dominance tactic without yielding, shifting the interaction from fear to competence.',
        },
        {
          weaponName: 'The Non-Emotional Boundary Anchor',
          conceptId: 'commitment-devices-strategic-inflexibility',
          script: 'I want to help you solve this bottleneck, but rushing an unverified clause today guarantees an outage next month. Let’s look at the telemetry line by line.',
          whyItWorks: 'Refuses to accept their false urgency while affirming partnership.',
        },
      ],
      redLineTripwire: {
        fatalPhrase: '"You need to calm down, you\'re overreacting!"',
        whyItFails: 'Telling an angry person to calm down signals that their emotions are invalid, triggering a 2x surge of rage.',
        reframe: 'Use Affect Labeling instead: "It seems like you are furious about how this landed, and I don\'t blame you for being frustrated."',
      },
      personalShield,
      closingLock: 'Summarize agreed terms in writing immediately: "We agreed on Points A and B. We reconvene tomorrow at 10 AM on Point C. Sending confirmation now."',
    };
  }

  if (archetype.id === 'passive-bureaucrat') {
    return {
      title: `BATTLE CARD: ${meeting.name.toUpperCase()}`,
      strategicObjective: 'Pierce polite surface agreement, force private objections onto the record, and lock in non-overlapping individual accountability.',
      openingMove: {
        rule: 'The Pre-Emptive Candor Permission',
        script: 'Before we review slides, I want to invite total dissent today. If anyone thinks this roadmap is flawed, today is the day to poke every hole.',
      },
      predictableTraps: [
        {
          trapName: 'The Nodding Phantom Consensus',
          conceptId: 'preference-falsification-pluralistic-ignorance',
          howItManifests: 'They will smile, nod politely, and say "sounds great," only to send a 10-paragraph objection to your boss three days later.',
        },
        {
          trapName: 'Diffusion into the Committee Fog',
          conceptId: 'diffusion-of-responsibility-bystander-paradigm',
          howItManifests: 'They will suggest forming a "working group" or having "the team evaluate" to kill momentum without saying no.',
        },
        {
          trapName: 'Status Quo Inertia Defense',
          conceptId: 'choice-architecture-default-mechanics',
          howItManifests: 'They will find endless administrative policy reasons why changing the current baseline is "too risky right now."',
        },
      ],
      primedWeapons: [
        {
          weaponName: 'Puncturing False Consensus',
          conceptId: 'preference-falsification-pluralistic-ignorance',
          script: 'Looking around this table, I suspect several of us have private reservations that aren’t being voiced. Can we take five minutes for an anonymous red-team critique before committing capital?',
          whyItWorks: 'Removes the penalty of lone dissent and provides psychological cover for honest critique.',
        },
        {
          weaponName: 'Pinning Single-Throat Accountability',
          conceptId: 'diffusion-of-responsibility-bystander-paradigm',
          script: 'When an initiative is owned by a committee, it is owned by nobody. Who is the single person whose reputation lives or dies by hitting this milestone by Friday?',
          whyItWorks: 'Destroys the bystander effect by forcing a named individual to take ownership.',
        },
        {
          weaponName: 'Re-Engineering the Default',
          conceptId: 'choice-architecture-default-mechanics',
          script: 'Unless we receive a specific written blocker by Thursday at 5 PM, our engineers will proceed with Phase 2 under these exact specifications.',
          whyItWorks: 'Flips the choice architecture: doing nothing now causes progress instead of paralysis.',
        },
      ],
      redLineTripwire: {
        fatalPhrase: '"Does everyone agree with this plan? Great, moving on!"',
        whyItFails: 'Gives the passive-aggressive interlocutor permission to silently nod without genuine commitment.',
        reframe: 'Ask the disconfirming question: "What is the single biggest reason this initiative will fail six months from now?"',
      },
      personalShield,
      closingLock: 'Send recap with explicit default execution date: "Per our discussion, Phase 1 commences Monday unless explicit VP veto is filed."',
    };
  }

  // Default robust battle card for Charismatic / Sunk Cost / Metric Gamer
  return {
    title: `BATTLE CARD: ${meeting.name.toUpperCase()}`,
    strategicObjective: 'Sever narrative hype from mathematical reality, dismantle sunk cost guilt, and establish clear forward-looking criteria.',
    openingMove: {
      rule: 'The Reference Point Reset (First 60 Seconds)',
      script: 'State the single computational metric that defines success before any slides or storytelling can anchor the room.',
    },
    predictableTraps: [
      {
        trapName: 'Attribute Substitution (Aesthetic Charisma Proxy)',
        conceptId: 'dual-process-miserliness',
        howItManifests: 'They will dazzle the room with sleek visual mockups or dramatic stories to bypass technical due diligence.',
      },
      {
        trapName: 'The Sunk Cost Guilt Trip',
        conceptId: 'sunk-cost-fallacy-escalation-of-commitment',
        howItManifests: 'They will remind everyone how much money and health was already spent to make quitting feel like betrayal.',
      },
      {
        trapName: 'The Explanatory Depth Illusion',
        conceptId: 'illusion-of-explanatory-depth',
        howItManifests: 'They will recite high-level buzzwords and assume the technical integration is trivial.',
      },
    ],
    primedWeapons: [
      {
        weaponName: 'Calling the Attribute Substitution',
        conceptId: 'dual-process-miserliness',
        script: 'It feels like we are answering an easier question because it’s right in front of us. The pitch deck was sharp, but what does the 5-year failure risk actually force us to confront?',
        whyItWorks: 'Validates their positive feeling while forcing the room back into deliberate Type 2 mode.',
      },
      {
        weaponName: 'Severing Sunk Cost Anchors',
        conceptId: 'sunk-cost-fallacy-escalation-of-commitment',
        script: 'The $10M we spent is gone forever whether we kill this project today or fund it for two more years. If we had this $2M cash in hand this morning, is this project the highest-ROI investment in the company?',
        whyItWorks: 'Strips away historical emotional debt and forces a cold opportunity cost calculation.',
      },
      {
        weaponName: 'The Mechanistic Plumbing Probe',
        conceptId: 'illusion-of-explanatory-depth',
        script: 'I want to make sure I execute this with zero flaws. Could you walk me through the step-by-step causal mechanics of how this rolls out from step 1 to step 4 when the first bottleneck hits?',
        whyItWorks: 'Politely reveals the lack of operational plumbing without attacking their intelligence.',
      },
    ],
    redLineTripwire: {
      fatalPhrase: '"Well, we’ve already invested this much, we might as well see it through."',
      whyItFails: 'Locks you into the Concorde Effect, guaranteeing further capital destruction.',
      reframe: 'Reframe as purchased information: "We didn\'t fail last year; we bought market data. That data tells us to pivot now."',
    },
    personalShield,
    closingLock: 'Bind decisions to outside reference class data: "Let’s benchmark our timeline against the last 10 industry peer rollouts."',
  };
}
