export interface ArchetypeProfile {
  id: string;
  name: string;
  category: 'Status & Dominance' | 'Bureaucratic & Defensive' | 'Cognitive & Narrative' | 'Systemic & Incentive';
  tagline: string;
  dangerLevel: 'Moderate' | 'High' | 'Severe' | 'Lethal';
  spottingCues: string[];
  psychologicalDriver: string;
  exploitativePlaybook: string;
  counterMoves: {
    title: string;
    script: string;
    cognitiveMechanic: string;
    conceptId: string;
  }[];
  fatalMistakes: string[];
  relatedConceptIds: string[];
}

export const ARCHETYPE_PROFILES: ArchetypeProfile[] = [
  {
    id: 'volatile-dominator',
    name: 'The Volatile Dominator',
    category: 'Status & Dominance',
    tagline: 'Uses volume, intimidation, and artificial crisis to force panic concessions.',
    dangerLevel: 'Severe',
    spottingCues: [
      'Speaks with rapid tempo, cuts off others mid-sentence within the first 15 seconds.',
      'Manufactures binary ultimatums: "Either you sign off on this by 5 PM or this deal dies."',
      'Stands up, leans forward invasively over tables, uses dramatic physical gesturing.',
      'Email style: all-caps subjects, short bullet points demanding answers in minutes.',
    ],
    psychologicalDriver: 'Compensatory dominance driven by fear of status erosion. Leans on raw sympathetic arousal to bypass the opponent\'s rational prefrontal analysis.',
    exploitativePlaybook: 'Forces the counterpart into autonomic mirroring and fight-or-flight response. When the counterpart either screams back or cowers into appeasement, the Dominator wins by attrition.',
    counterMoves: [
      {
        title: 'Affect Labeling (Limbic Discharge)',
        script: 'It sounds like you feel completely blindsided by this timeline, and it feels like our team jeopardized your standing with executive leadership.',
        cognitiveMechanic: 'Puts words to their raw emotional state. Activates the right ventrolateral prefrontal cortex and biologically down-regulates amygdala arousal.',
        conceptId: 'affect-labeling-de-escalation',
      },
      {
        title: 'The 3-Second Grounded Anchor',
        script: 'Take a slow, deliberate physical exhalation. Wait two full seconds of silence after they shout, then speak at 80% normal volume in a calm, descending cadence.',
        cognitiveMechanic: 'Signals unshakeable status autonomy. Prevents autonomic emotional contagion from infecting your autonomic nervous system.',
        conceptId: 'emotional-contagion-autonomic-mirroring',
      },
      {
        title: 'Labeling the Dominance Play Directly',
        script: 'You are leaning hard on volume and ultimatums right now. If we step past the threats for two minutes, what is the actual strategic outcome you need this room to underwrite?',
        cognitiveMechanic: 'Brings implicit dominance theater onto the explicit conversational record, neutralizing its subconscious leverage.',
        conceptId: 'costly-signaling-status-typologies',
      },
    ],
    fatalMistakes: [
      'Telling them "You need to calm down" (validates their suspicion that you don\'t take them seriously, triggering an immediate 2x rage spike).',
      'Making hurried immediate micro-concessions to stop the shouting (rewards and conditions future aggressive tantrums).',
      'Getting defensive and reciting a 10-point laundry list of factual rebuttals while they are still in limbic hijack.',
    ],
    relatedConceptIds: [
      'affect-labeling-de-escalation',
      'emotional-contagion-autonomic-mirroring',
      'costly-signaling-status-typologies',
      'tit-for-tat-retaliatory-forgiveness',
    ],
  },
  {
    id: 'passive-bureaucrat',
    name: 'The Passive-Aggressive Consensus-Faker',
    category: 'Bureaucratic & Defensive',
    tagline: 'Smiles in meetings, hides in the committee fog, and kills initiatives via silent delay.',
    dangerLevel: 'Lethal',
    spottingCues: [
      'Nods vigorously in live meetings, says "We will definitely evaluate this." Never voices direct opposition publicly.',
      'Suggests creating a "multi-stakeholder exploratory working group" whenever concrete execution is proposed.',
      'Cites vague institutional policy, legal requirements, or unwritten precedent as non-negotiable hurdles.',
      'Communication style: polite, verbose emails CCing 12 people without clear action owners.',
    ],
    psychologicalDriver: 'Extreme loss aversion and fear of personal blame. Believes taking no action carries zero reputational penalty, whereas taking action carries catastrophic downside.',
    exploitativePlaybook: 'Employs Pluralistic Ignorance and Diffusion of Responsibility. By deferring decisions across multiple committees, they run the clock out until projects expire naturally from inertia.',
    counterMoves: [
      {
        title: 'Puncturing the Phantom Consensus',
        script: 'Looking around this table, I suspect several of us have private reservations that aren’t being voiced. Can we take five minutes for an anonymous red-team critique right now before committing capital?',
        cognitiveMechanic: 'Removes the penalty of lone dissent and provides psychological cover for honest critique, piercing pluralistic ignorance.',
        conceptId: 'preference-falsification-pluralistic-ignorance',
      },
      {
        title: 'Pinning Single-Throat Accountability',
        script: 'When an initiative is owned by a committee, it is owned by nobody. Who is the single person whose reputation lives or dies by hitting this milestone by Friday?',
        cognitiveMechanic: 'Destroys the bystander effect by stripping away the protective fog of collective diffusion.',
        conceptId: 'diffusion-of-responsibility-bystander-paradigm',
      },
      {
        title: 'Re-Engineering the Default',
        script: 'Unless we receive a specific written veto with alternative specs by Thursday at 5 PM, our engineers will deploy Phase 2 under these exact specifications.',
        cognitiveMechanic: 'Flips the choice architecture default: inaction now produces progress instead of bureaucratic paralysis.',
        conceptId: 'choice-architecture-default-mechanics',
      },
    ],
    fatalMistakes: [
      'Assuming that silence, polite nods, or smiles equal executive agreement or authorization.',
      'Assigning deliverables to "the team" or "the department" rather than a single named individual.',
      'Leaving meetings without written timestamped defaults ("Unless X happens by Date Y, we execute Z").',
    ],
    relatedConceptIds: [
      'preference-falsification-pluralistic-ignorance',
      'diffusion-of-responsibility-bystander-paradigm',
      'choice-architecture-default-mechanics',
      'strategic-ambiguity-obfuscation',
    ],
  },
  {
    id: 'charismatic-handwaver',
    name: 'The Charismatic Hand-Waver',
    category: 'Cognitive & Narrative',
    tagline: 'Substitutes dazzling aesthetics, high-energy storytelling, and vision for mathematical plumbing.',
    dangerLevel: 'High',
    spottingCues: [
      'Shows polished vision slides, customer quotes, and sleek mockups without unit economics or margin tables.',
      'Dismisses technical edge cases and operational hurdles as "limiting beliefs" or "small thinking."',
      'Rallies the room emotionally with aspirational metaphors: "We aren\'t building a tool, we are revolutionizing the space."',
      'Gets noticeably irritated and defensive when pressed for precise timeline milestones or failure probability.',
    ],
    psychologicalDriver: 'Attribute substitution and high-valence optimism. Believes deeply that enthusiasm and narrative momentum can compensate for mechanical reality.',
    exploitativePlaybook: 'Floods the audience\'s cognitive bandwidth with compelling narrative fluency and social proof, inducing System 1 cognitive miserliness and blinding listeners to operational risks.',
    counterMoves: [
      {
        title: 'Calling Attribute Substitution with Respect',
        script: 'The vision is compelling and the deck is world-class. But right now we are answering an easier question because the slides look great. What does our unit economics look like if our conversion rate drops 40%?',
        cognitiveMechanic: 'Acknowledges aesthetic elegance while forcing the collective intellect out of System 1 ease into rigorous System 2 deliberation.',
        conceptId: 'dual-process-miserliness',
      },
      {
        title: 'The Mechanistic Plumbing Probe',
        script: 'I want to make sure I champion this proposal correctly. Walk me through the step-by-step causal mechanics of how a customer gets from Onboarding Step 1 to Data Sync Step 3 without an engineer touching it.',
        cognitiveMechanic: 'Breaks the Illusion of Explanatory Depth by exposing missing mechanical steps without insulting their intelligence.',
        conceptId: 'illusion-of-explanatory-depth',
      },
      {
        title: 'Reference Class Forecasting Benchmark',
        script: 'Across the last 15 enterprise integrations in our sector, the average timeline was 9 months with 22% rework. What specific structural advantage ensures our deployment takes only 6 weeks?',
        cognitiveMechanic: 'Shifts perspective from the narrow internal narrative (inside view) to outside statistical reference distributions.',
        conceptId: 'bayesian-updating-base-rate-neglect',
      },
    ],
    fatalMistakes: [
      'Agreeing to terms based on inspirational slides or promise-heavy verbal pitches.',
      'Attacking their vision directly as "unrealistic" (makes you look like a cynical obstructionist to the room).',
      'Failing to establish verified pre-mortem conditions before allocating resources.',
    ],
    relatedConceptIds: [
      'dual-process-miserliness',
      'illusion-of-explanatory-depth',
      'bayesian-updating-base-rate-neglect',
      'costly-signaling-status-typologies',
    ],
  },
  {
    id: 'sunk-cost-martyr',
    name: 'The Sunk-Cost Martyr',
    category: 'Cognitive & Narrative',
    tagline: 'Weaponizes past sweat, tears, and spent capital to guilt teams into funding doomed initiatives.',
    dangerLevel: 'Severe',
    spottingCues: [
      'Constantly references past sacrifice: "We worked through Thanksgiving on this architecture."',
      'Frames pivoting, killing, or rethinking the project as a personal betrayal of the team\'s dedication.',
      'Treats objective audit data as an offensive attack on their character and loyalty.',
      'Claims success is just "two more sprints" away, despite missing the last five deadlines.',
    ],
    psychologicalDriver: 'Severe cognitive dissonance and effort justification. Admitting failure would shatter their self-identity and invalidate their historical suffering.',
    exploitativePlaybook: 'Conflates effort with forward-looking enterprise value. Guilt-trips executives into perpetual escalation of commitment to avoid confronting the grief of wasted investment.',
    counterMoves: [
      {
        title: 'Severing Sunk Cost Anchors (The Clean Slate Question)',
        script: 'The $5M and 18 months we spent are gone forever whether we terminate this codebase today or fund it for two more years. If we walked in this morning with $1M cash in hand, is this project the highest-ROI investment in our company?',
        cognitiveMechanic: 'Strips away historical emotional debt and forces a cold opportunity cost calculation against available alternatives.',
        conceptId: 'sunk-cost-fallacy-escalation-of-commitment',
      },
      {
        title: 'Reframing Past Expenditure as Purchased Intelligence',
        script: 'We didn’t waste the last six months; we purchased critical empirical data about what this market will not tolerate. Honoring the team’s sacrifice means capitalizing on that data now, not ignoring it.',
        cognitiveMechanic: 'Alleviates effort-justification shame by validating their historical work while redirecting forward momentum.',
        conceptId: 'effort-justification-cognitive-dissonance',
      },
      {
        title: 'The Hard Stop-Loss Boundary',
        script: 'Let’s underwrite exactly one more sprint with a strict pre-committed stop-loss: if daily active engagement does not exceed 1,500 users by April 15, we shut down the server cluster without further debate.',
        cognitiveMechanic: 'Applies an explicit commitment device that binds future behavior before emotional escalation recurs.',
        conceptId: 'commitment-devices-strategic-inflexibility',
      },
    ],
    fatalMistakes: [
      'Belittling their hard work or dismissing their team\'s sacrifice as foolish.',
      'Approving "one small extension" without binding metric gates and explicit pre-committed offramps.',
      'Allowing emotional guilt to override forward-looking opportunity cost calculus.',
    ],
    relatedConceptIds: [
      'sunk-cost-fallacy-escalation-of-commitment',
      'effort-justification-cognitive-dissonance',
      'commitment-devices-strategic-inflexibility',
      'prospect-theory-framing-loss-aversion',
    ],
  },
  {
    id: 'metric-gamer',
    name: 'The Metric Gamer / Goodhart Exploiter',
    category: 'Systemic & Incentive',
    tagline: 'Ruthlessly optimizes the target indicator while quietly gutting the underlying health of the system.',
    dangerLevel: 'High',
    spottingCues: [
      'Hits every quarterly KPI dashboard with precision while user NPS, team retention, or product reliability collapses.',
      'Hides defects, defers maintenance, or dumps toxic technical debt into future quarters.',
      'Resists holistic quality evaluations, demanding to be judged exclusively on the specific letter of the rubric.',
      'Shifts problem definitions onto adjacent teams when downstream failures inevitably surface.',
    ],
    psychologicalDriver: 'Instrumental rationalism and extrinsic incentive crowding. Driven by bonus formulas, quarterly rankings, or promotion rubrics with zero intrinsic attachment to system health.',
    exploitativePlaybook: 'Applies Goodhart’s and Campbell’s Law against the organization: once a metric becomes the target, it ceases to be a good metric. They game the scorecard while extracting personal credit.',
    counterMoves: [
      {
        title: 'Deploying Paired Counter-Metrics',
        script: 'Meeting the throughput target is valuable, but speed without quality is bankruptcy. Starting this quarter, every throughput incentive is mathematically gated by a maximum 0.5% defect ceiling.',
        cognitiveMechanic: 'Neutralizes Goodhart manipulation by binding quantity directly to systemic durability constraints.',
        conceptId: 'goodharts-campbells-law-metric-gaming',
      },
      {
        title: 'The Cobra Effect Audit',
        script: 'What is the most cynical way someone in your seat could hit this target while creating an operational nightmare for us 12 months from now? Let’s close that loophole today.',
        cognitiveMechanic: 'Invites them to disclose the gaming vector by framing it as hypothetical system defense.',
        conceptId: 'cobra-effect-perverse-incentives',
      },
      {
        title: 'Long-Horizon Escrow / Clawback Alignment',
        script: 'To ensure our architectural shortcuts don’t blow up in production, 40% of the milestone bonus will be escrowed and distributed 180 days post-launch based on live stability telemetry.',
        cognitiveMechanic: 'Extends the time horizon of consequences, aligning their hyperbolic discounting with long-term reality.',
        conceptId: 'hyperbolic-discounting-present-bias',
      },
    ],
    fatalMistakes: [
      'Setting un-paired single-variable incentives (e.g. lines of code, tickets closed, raw lead counts).',
      'Rewarding short-term sprint accomplishments without trailing audit mechanisms.',
      'Assuming that a completely green KPI dashboard indicates a healthy system.',
    ],
    relatedConceptIds: [
      'goodharts-campbells-law-metric-gaming',
      'cobra-effect-perverse-incentives',
      'extrinsic-incentive-crowding-out',
      'hyperbolic-discounting-present-bias',
    ],
  },
  {
    id: 'counter-signaling-elite',
    name: 'The Counter-Signaling Elite',
    category: 'Status & Dominance',
    tagline: 'Feigns casual indifference, dresses down, and uses understated minimalism to broadcast supreme power.',
    dangerLevel: 'Moderate',
    spottingCues: [
      'Wears casual attire in high-formality executive meetings where everyone else is in bespoke suits.',
      'Speaks with minimal vocal inflection and rarely uses jargon, acronyms, or verbose explanations.',
      'Sends 3-word email replies ("Looks fine. -sent from my iPhone") to 15-page stakeholder proposals.',
      'Never brags about credentials, revenue, or connections; expects you to already know.',
    ],
    psychologicalDriver: 'High-order costly signaling equilibrium. Their status is so secure that conventional signaling (suits, titles, buzzwords) would actually diminish their perceived rank.',
    exploitativePlaybook: 'Uses strategic ambiguity and false modesty to bait insecure counterparts into over-explaining, over-justifying, and negotiating against themselves.',
    counterMoves: [
      {
        title: 'Matching the Minimalist Signal',
        script: 'State your proposition in two clear sentences. Do not offer unrequested defenses, apologies, or preamble. Mirror their brevity with comfortable, calm silence.',
        cognitiveMechanic: 'Avoids the common trap of nervous verbose over-explaining which signals subordinate insecurity.',
        conceptId: 'counter-signaling-the-stealth-wealth-paradox',
      },
      {
        title: 'Clarifying the Understated Cue',
        script: 'Your reply was concise. To ensure complete alignment before we allocate capital, does "looks fine" mean approved for Phase 1 spend, or that you want to see revised figures?',
        cognitiveMechanic: 'Penetrates strategic ambiguity without breaking conversational rapport.',
        conceptId: 'strategic-ambiguity-obfuscation',
      },
      {
        title: 'Anchor High Without Deference',
        script: 'Present your optimal terms directly without nervous disclaimers: "Here is the term sheet. This reflects our core pricing and implementation timeline."',
        cognitiveMechanic: 'Demonstrates peer-level status equality rather than supplicant pleading.',
        conceptId: 'focal-points-anchoring-gravitational-pull',
      },
    ],
    fatalMistakes: [
      'Over-explaining your qualifications, degrees, or awards when not asked.',
      'Misinterpreting their casual demeanor as agreement, weakness, or informality in contract terms.',
      'Filling pregnant pauses with panicked nervous chatter.',
    ],
    relatedConceptIds: [
      'counter-signaling-the-stealth-wealth-paradox',
      'costly-signaling-status-typologies',
      'strategic-ambiguity-obfuscation',
      'focal-points-anchoring-gravitational-pull',
    ],
  },
];
