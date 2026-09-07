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
