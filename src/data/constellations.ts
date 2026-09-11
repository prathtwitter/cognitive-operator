export interface ConstellationEdge {
  sourceId: string;
  targetId: string;
  relationship: 'Triggers' | 'Compounds' | 'Counteracts' | 'Reinforces';
  explanation: string;
}

export interface ConstellationCluster {
  id: string;
  name: string;
  tagline: string;
  description: string;
  conceptIds: string[];
  edges: ConstellationEdge[];
}

export const CONSTELLATION_CLUSTERS: ConstellationCluster[] = [
  {
    id: 'escalation-spiral',
    name: 'The Escalation Spiral (The Concorde Trap)',
    tagline: 'How ego, herding, and sunken effort lead to catastrophic capital destruction.',
    description: 'An initial intuitive error triggers competitive bidding, which leads to ego escalation, unrecoverable sunk costs, and psychological self-justification.',
    conceptIds: [
      'dual-process-miserliness',
      'informational-cascades-herding',
      'winners-curse-ego-escalation',
      'sunk-cost-fallacy-escalation-of-commitment',
      'effort-justification-cognitive-dissonance',
    ],
    edges: [
      {
        sourceId: 'dual-process-miserliness',
        targetId: 'informational-cascades-herding',
        relationship: 'Triggers',
        explanation: 'System 1 cognitive laziness causes actors to copy crowd sentiment rather than verifying unit economics.',
      },
      {
        sourceId: 'informational-cascades-herding',
        targetId: 'winners-curse-ego-escalation',
        relationship: 'Compounds',
        explanation: 'Crowd enthusiasm creates FOMO and triggers aggressive competitive bidding where the winner overpays.',
      },
      {
        sourceId: 'winners-curse-ego-escalation',
        targetId: 'sunk-cost-fallacy-escalation-of-commitment',
        relationship: 'Reinforces',
        explanation: 'Once capital and public reputation are committed to the deal, actors refuse to write off the loss.',
      },
      {
        sourceId: 'sunk-cost-fallacy-escalation-of-commitment',
        targetId: 'effort-justification-cognitive-dissonance',
        relationship: 'Compounds',
        explanation: 'To alleviate the pain of wasting capital, executives invent heroic narratives that their suffering had deeper purpose.',
      },
    ],
  },
  {
    id: 'bureaucratic-paralysis',
    name: 'The Bureaucratic Paralysis Web',
    tagline: 'How silent disagreement and shared responsibility create organizational gridlock.',
    description: 'When people privately disagree but fear speaking up, responsibility diffuses across committees, cementing the default status quo.',
    conceptIds: [
      'preference-falsification-pluralistic-ignorance',
      'diffusion-of-responsibility-bystander-paradigm',
      'choice-architecture-default-mechanics',
      'strategic-ambiguity-obfuscation',
    ],
    edges: [
      {
        sourceId: 'preference-falsification-pluralistic-ignorance',
        targetId: 'diffusion-of-responsibility-bystander-paradigm',
        relationship: 'Triggers',
        explanation: 'Everyone falsely assumes everyone else agrees with the broken initiative, so nobody intervenes.',
      },
      {
        sourceId: 'diffusion-of-responsibility-bystander-paradigm',
        targetId: 'choice-architecture-default-mechanics',
        relationship: 'Compounds',
        explanation: 'Because no single neck is on the line, the system defaults to the path of least resistance (doing nothing).',
      },
      {
        sourceId: 'choice-architecture-default-mechanics',
        targetId: 'strategic-ambiguity-obfuscation',
        relationship: 'Reinforces',
        explanation: 'To protect the inertia, leaders write ambiguous memos that sound productive without committing resources.',
      },
    ],
  },
  {
    id: 'dominance-deescalation',
    name: 'The Status & Dominance Circuit',
    tagline: 'How status games trigger autonomic threat, and how emotional labeling disarms them.',
    description: 'Aggressive status signaling triggers mirror neurons and sympathetic arousal, which can only be neutralized by verbalized affect labeling.',
    conceptIds: [
      'costly-signaling-status-typologies',
      'emotional-contagion-autonomic-mirroring',
      'affect-labeling-de-escalation',
      'counter-signaling-the-stealth-wealth-paradox',
    ],
    edges: [
      {
        sourceId: 'costly-signaling-status-typologies',
        targetId: 'emotional-contagion-autonomic-mirroring',
        relationship: 'Triggers',
        explanation: 'Loud aggressive posturing floods the counterpart with autonomic stress and fight-or-flight arousal.',
      },
      {
        sourceId: 'emotional-contagion-autonomic-mirroring',
        targetId: 'affect-labeling-de-escalation',
        relationship: 'Counteracts',
        explanation: 'Affect labeling directly activates the ventrolateral PFC, reversing limbic amygdala hijack.',
      },
      {
        sourceId: 'affect-labeling-de-escalation',
        targetId: 'counter-signaling-the-stealth-wealth-paradox',
        relationship: 'Reinforces',
        explanation: 'Calm verbal down-regulation establishes understated supreme status without shouting.',
      },
    ],
  },
  {
    id: 'perverse-incentives',
    name: 'The Systemic Perverse Incentive Loop',
    tagline: 'How short-term targets destroy long-term enterprise health.',
    description: 'Present-biased actors optimize single KPI targets, creating secondary effects that worsen the original problem.',
    conceptIds: [
      'hyperbolic-discounting-present-bias',
      'extrinsic-incentive-crowding-out',
      'goodharts-campbells-law-metric-gaming',
      'cobra-effect-perverse-incentives',
    ],
    edges: [
      {
        sourceId: 'hyperbolic-discounting-present-bias',
        targetId: 'extrinsic-incentive-crowding-out',
        relationship: 'Triggers',
        explanation: 'Prioritizing immediate quarterly bonuses over long-term mission destroys intrinsic pride and craft.',
      },
      {
        sourceId: 'extrinsic-incentive-crowding-out',
        targetId: 'goodharts-campbells-law-metric-gaming',
        relationship: 'Compounds',
        explanation: 'When people work only for numbers, they ruthlessly game the metric scorecard rather than delivering real value.',
      },
      {
        sourceId: 'goodharts-campbells-law-metric-gaming',
        targetId: 'cobra-effect-perverse-incentives',
        relationship: 'Compounds',
        explanation: 'The gamed incentive produces perverse downstream actions that actively exacerbate the systemic failure.',
      },
    ],
  },
  {
    id: 'ideological-polarization',
    name: 'The Tribal Certainty Fortress',
    tagline: 'How naive realism and tribal loyalty lock humans into cognitive blindness.',
    description: 'Believing one sees objective reality fuels identity defense and tribal moral outrage, blinding individuals to mechanical depth.',
    conceptIds: [
      'naive-realism-bias-blind-spot',
      'identity-protective-cognition-tribal-epistemology',
      'moral-foundations-sacred-values',
      'illusion-of-explanatory-depth',
    ],
    edges: [
      {
        sourceId: 'naive-realism-bias-blind-spot',
        targetId: 'identity-protective-cognition-tribal-epistemology',
        relationship: 'Triggers',
        explanation: 'Believing your view is unvarnished truth causes you to interpret dissent as malicious or stupid.',
      },
      {
        sourceId: 'identity-protective-cognition-tribal-epistemology',
        targetId: 'moral-foundations-sacred-values',
        relationship: 'Reinforces',
        explanation: 'Protecting the tribal in-group binds reasoning to sacred values that cannot be questioned.',
      },
      {
        sourceId: 'moral-foundations-sacred-values',
        targetId: 'illusion-of-explanatory-depth',
        relationship: 'Compounds',
        explanation: 'Moral zealotry masquerades as deep understanding, hiding the total lack of mechanistic policy knowledge.',
      },
    ],
  },
];
