export type SphereId = 
  | 'internal-architecture'
  | 'social-dynamics'
  | 'strategic-interactions'
  | 'behavioral-economics';

export interface Sphere {
  id: SphereId;
  number: number;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  color: 'cyan' | 'purple' | 'amber' | 'emerald';
  badgeColor: string;
  accentColor: string;
  conceptsCount: number;
}

export interface ConversationalWeapon {
  situation: string;
  phrase: string;
  rationale: string;
  contextTag: 'Executive' | 'Debate' | 'Negotiation' | 'Interpersonal' | 'Crisis';
}

export interface HighSignalSource {
  title: string;
  creatorOrHost: string;
  platform: 'Podcast' | 'Lecture' | 'Paper' | 'Monograph';
  duration: string;
  whyItBeatsTheNoise: string;
  searchQuery: string;
  url?: string;
}

/** One narrative beat of a deep dive. Body entries are plain-text paragraphs. */
export interface DeepDiveSection {
  heading: string;
  body: string[];
  /** Optional pulled-out real case that anchors the section in something concrete. */
  example?: {
    label: string;
    body: string;
  };
}

/**
 * A ~15-minute long-form read for a single concept. Lives in `src/data/deepdives/`
 * and is code-split per sphere — never import these eagerly.
 */
export interface DeepDive {
  /** Author-stated reading time in minutes, sanity-checked against word count in tests. */
  readingTimeMinutes: number;
  /** Cold open: a concrete scene or puzzle, no theory yet. */
  hook: string;
  sections: DeepDiveSection[];
  /** Observable signals that the pattern is live in the room. */
  spotIt: { signal: string; meaning: string }[];
  /** What to actually do, in order. */
  playbook: { move: string; how: string; watchOut?: string }[];
  /** Where people misapply the idea. */
  commonMisreads: { misread: string; correction: string }[];
  /**
   * The landmark evidence in plain English. `caveat` is mandatory wherever a finding
   * is contested or failed replication — this app does not launder shaky science.
   */
  evidence: { source: string; finding: string; caveat?: string }[];
  takeaways: string[];
}

export interface Concept {
  id: string;
  sphereId: SphereId;
  numberInSphere: number;
  globalIndex: number;
  title: string;
  tagline: string;
  plainEnglishAnalogy: string;
  everydayHumanBehavior: string;
  formalTerminology: {
    primaryTerm: string;
    subConstructs?: string[];
    keyThinkers: string[];
    definition: string;
  };
  underlyingMechanism: {
    evolutionaryDriver: string;
    neurologicalBasis: string;
    summary: string;
  };
  realWorldRecognition: {
    personalLifeTrigger: {
      title: string;
      scenario: string;
      hiddenDynamic: string;
    };
    professionalLifeTrigger: {
      title: string;
      scenario: string;
      hiddenDynamic: string;
    };
  };
  conversationalWeaponry: ConversationalWeapon[];
  highSignalSource: HighSignalSource;
  tags: string[];
  difficulty: 'Foundational' | 'Advanced' | 'Lethal';
}

export interface ScenarioQuiz {
  id: string;
  title: string;
  context: 'Executive' | 'Negotiation' | 'Interpersonal' | 'Crisis' | 'Corporate' | 'Debate';
  scenarioText: string;
  dialogueSnippet?: string;
  question: string;
  options: {
    id: string;
    conceptId: string;
    conceptTitle: string;
    isCorrect: boolean;
    explanation: string;
    weaponRecommendation: string;
  }[];
}
