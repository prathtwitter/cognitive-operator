export interface BranchingChoice {
  id: string;
  label: string;
  responseScript: string;
  leverageDelta: number; // e.g. +25, -20, 0
  feedback: {
    psychologicalImpact: string;
    underlyingConceptTitle: string;
    conceptId: string;
    critique: string;
  };
  nextTurnId: string | 'VICTORY' | 'DEFEAT' | 'DRAW';
}

export interface BranchingTurn {
  id: string;
  turnNumber: number;
  opponentState: {
    posture: 'Hostile' | 'Dominant' | 'Guarded' | 'Yielding' | 'Collaborative';
    statement: string;
    subtext: string;
    visualCue: string;
  };
  choices: BranchingChoice[];
}

export interface BranchingScenario {
  id: string;
  title: string;
  category: 'Executive' | 'Crisis' | 'Negotiation';
  contextDescription: string;
  startingLeverage: number; // e.g. 35
  turns: Record<string, BranchingTurn>;
  rootTurnId: string;
  outcomes: {
    victory: {
      title: string;
      summary: string;
      tacticalTakeaway: string;
    };
    defeat: {
      title: string;
      summary: string;
      tacticalTakeaway: string;
    };
    draw: {
      title: string;
      summary: string;
      tacticalTakeaway: string;
    };
  };
}

export const BRANCHING_SCENARIOS: BranchingScenario[] = [
  {
    id: 'hostile-client-outage',
    title: 'The Enterprise Outage Crisis Call',
    category: 'Crisis',
    contextDescription: 'Your enterprise SaaS platform experienced a 4-hour Sev-1 outage during Black Friday. You are on an emergency Zoom with their CTO, who is threatening immediate contract termination, clawbacks, and public litigation.',
    startingLeverage: 30,
    rootTurnId: 'turn-1',
    turns: {
      'turn-1': {
        id: 'turn-1',
        turnNumber: 1,
        opponentState: {
          posture: 'Hostile',
          statement: 'This is an utter catastrophe! We lost $800,000 in transaction volume today while your status page said "Investigating." I have my board on my back, and I want an immediate 100% refund for the quarter and an SLA penalty waiver, or our legal team files before the market closes!',
          subtext: 'High limbic threat. He is experiencing autonomic panic and needs to project total blame onto you to defend his job to his board.',
          visualCue: 'Leaning forward into the camera, elevated vocal pitch, flushed face, rapid speech rate.',
        },
        choices: [
          {
            id: 't1-defensive',
            label: 'Argue Technical Facts & SLA Terms',
            responseScript: 'Look, our engineers resolved it within the 4-hour window defined in Section 8.2 of our Master Services Agreement. Black Friday surges are unprecedented, and our uptime is still 99.4% for the year.',
            leverageDelta: -25,
            feedback: {
              psychologicalImpact: 'Triggers defensive threat response. He feels invalidation and doubles down on aggression to prove his authority.',
              underlyingConceptTitle: 'Affect Labeling & De-Escalation',
              conceptId: 'affect-labeling-de-escalation',
              critique: 'Fatal error: Citing legal contracts and technical SLAs to an enraged human is pouring kerosene on an open flame.',
            },
            nextTurnId: 'turn-2-escalated',
          },
          {
            id: 't1-affect-label',
            label: 'Deploy Affect Labeling & Grounded Vocal Anchor',
            responseScript: 'Mark, you feel completely blindsided by this downtime, and right now it feels like our infrastructure jeopardized your entire standing with your board during the most critical weekend of the year.',
            leverageDelta: +30,
            feedback: {
              psychologicalImpact: 'Limbic down-regulation. Ventrolateral prefrontal cortex takes over as his emotional alarm is acknowledged without argument.',
              underlyingConceptTitle: 'Affect Labeling & De-Escalation',
              conceptId: 'affect-labeling-de-escalation',
              critique: 'Flawless execution. He hears his private terror stated out loud, releases a sigh, and drops his voice pitch.',
            },
            nextTurnId: 'turn-2-de-escalated',
          },
          {
            id: 't1-premature-concession',
            label: 'Offer an Immediate Financial Discount to Placate Him',
            responseScript: 'We are so deeply sorry. We will immediately credit 50% of this month’s invoice and give you free professional services to make this right.',
            leverageDelta: -10,
            feedback: {
              psychologicalImpact: 'Confirms guilt and weakness without calming his anxiety. He senses blood in the water and pushes for 100%.',
              underlyingConceptTitle: 'Tit-for-Tat & Retaliatory Forgiveness',
              conceptId: 'tit-for-tat-retaliatory-forgiveness',
              critique: 'Premature concession signals that you know your product is defective and invites further extortion.',
            },
            nextTurnId: 'turn-2-escalated',
          },
        ],
      },
      'turn-2-escalated': {
        id: 'turn-2-escalated',
        turnNumber: 2,
        opponentState: {
          posture: 'Hostile',
          statement: 'Don’t quote the contract to me! Your contract doesn’t compensate my lost revenue! If you don’t put your VP of Engineering on this phone with a written guarantee of zero downtime and a full credit by noon, we are terminating under material breach!',
          subtext: 'Limbic hijack intensified. He has backed himself into an ultimatum corner and cannot retreat without losing face.',
          visualCue: 'Crossing arms tightly, looking away from camera, tapping pen aggressively.',
        },
        choices: [
          {
            id: 't2e-firm-boundary',
            label: 'Calmly Label the Ultimatum and Reframe Focus',
            responseScript: 'Mark, you are issuing ultimatums right now because you need certainty for your board meeting in two hours. Rushing an empty written promise solves nothing. I can spend the next 60 minutes preparing a forensic telemetry report for your board, or we can spend it arguing about legal termination. Which serves your board meeting better?',
            leverageDelta: +35,
            feedback: {
              psychologicalImpact: 'Forced choice reframes his self-interest around his immediate board threat, neutralizing his hostage-taking bluster.',
              underlyingConceptTitle: 'Strategic Reciprocity & Tit-for-Tat',
              conceptId: 'strategic-reciprocity-direct-indirect',
              critique: 'Brilliant pivot. You showed him that his fastest path to looking competent before his board is partnering with you.',
            },
            nextTurnId: 'turn-3-closing',
          },
          {
            id: 't2e-cave-in',
            label: 'Panic and Agree to His Demands',
            responseScript: 'Okay, okay, I will have the VP of Engineering sign the letter and we will issue the 100% refund credit right now.',
            leverageDelta: -30,
            feedback: {
              psychologicalImpact: 'Complete frame collapse. You took on unfulfillable operational liability and set a disastrous precedent.',
              underlyingConceptTitle: 'BATNA & Power Dependency Asymmetry',
              conceptId: 'batna-power-dependency-asymmetry',
              critique: 'You signed up for impossible legal warranties and gave away all company margin.',
            },
            nextTurnId: 'DEFEAT',
          },
        ],
      },
      'turn-2-de-escalated': {
        id: 'turn-2-de-escalated',
        turnNumber: 2,
        opponentState: {
          posture: 'Guarded',
          statement: '[Exhales heavily] Look... yes. That’s exactly the problem. The board is meeting at 2 PM and right now all they know is checkout failed for four hours. I look like an idiot who picked the wrong vendor.',
          subtext: 'Vulnerability revealed. He has shifted from offensive rage to operational anxiety about his board presentation.',
          visualCue: 'Shoulders drop, eye contact softens, voice drops in pitch and volume.',
        },
        choices: [
          {
            id: 't2d-board-weapon',
            label: 'Arm Him With an Executive Root-Cause Briefing',
            responseScript: 'Let’s make sure you walk into that 2 PM meeting with total control of the narrative. I will deliver a 1-page forensic slide for your deck by 1:15 PM showing: (1) root cause isolated in cloud DNS upstream, (2) permanent hotfix deployed, and (3) our executive commitment to fund dedicated private ingress for your account. You will have answers before they even ask.',
            leverageDelta: +30,
            feedback: {
              psychologicalImpact: 'Positions you as his indispensable ally and shield rather than his adversary.',
              underlyingConceptTitle: 'Costly Signaling & Status Typologies',
              conceptId: 'costly-signaling-status-typologies',
              critique: 'Masterstroke. You turned an existential crisis into an alliance that protects his status.',
            },
            nextTurnId: 'turn-3-closing',
          },
          {
            id: 't2d-defend-again',
            label: 'Remind Him That Upstream Cloud Providers Were at Fault',
            responseScript: 'Well, it really was AWS us-east-1 that broke, not our software code.',
            leverageDelta: -15,
            feedback: {
              psychologicalImpact: 'Re-ignites frustration. He doesn’t care whose cloud broke; he cares about his board.',
              underlyingConceptTitle: 'Fundamental Attribution Error',
              conceptId: 'fundamental-attribution-error-actor-observer',
              critique: 'Never deflect to a third party when a client is confiding their fear.',
            },
            nextTurnId: 'turn-2-escalated',
          },
        ],
      },
      'turn-3-closing': {
        id: 'turn-3-closing',
        turnNumber: 3,
        opponentState: {
          posture: 'Collaborative',
          statement: 'If you can get me that slide by 1:15 PM, that will save my bacon with the board. But what about our financial loss? I still need something concrete to show finance.',
          subtext: 'Bargaining mode. He is now negotiating on pragmatic commercial terms rather than emotional existential threats.',
          visualCue: 'Taking notes, nodding, relaxed facial muscles.',
        },
        choices: [
          {
            id: 't3-integrative-lock',
            label: 'Deploy Integrative Value Trade (Uptime Credit vs Renewal Extension)',
            responseScript: 'Under our contract, downtime triggers a 15% monthly service credit. Instead of simple cash back, I propose we apply that credit toward upgrading your architecture to our multi-region failover tier with dedicated VIP support for the next 12 months, locked into an early contract extension.',
            leverageDelta: +25,
            feedback: {
              psychologicalImpact: 'Transforms a loss-frame refund into a forward-looking value expansion (Integrative Bargaining).',
              underlyingConceptTitle: 'Fixed-Pie Perception & Integrative Bargaining',
              conceptId: 'fixed-pie-perception-integrative-bargaining',
              critique: 'Flawless closing lock. You preserved contract revenue, expanded product footprint, and solved his reliability risk.',
            },
            nextTurnId: 'VICTORY',
          },
          {
            id: 't3-flat-no',
            label: 'Flatly Refuse Any Credits',
            responseScript: 'We are already giving you the report and dedicated ingress. We cannot offer any financial credits on top of that.',
            leverageDelta: -20,
            feedback: {
              psychologicalImpact: 'Triggers psychological reactance right at the finish line.',
              underlyingConceptTitle: 'Psychological Reactance & Forbidden Fruit',
              conceptId: 'psychological-reactance-forbidden-fruit',
              critique: 'Rigid zero-sum stubbornness destroys all the goodwill generated in the previous turns.',
            },
            nextTurnId: 'DRAW',
          },
        ],
      },
    },
    outcomes: {
      victory: {
        title: 'Master Strategist: Frame Control Secured',
        summary: 'You successfully defused limbic panic via Affect Labeling, positioned yourself as the client’s indispensable executive ally, and closed the encounter by expanding the contract value rather than caving to punitive damages.',
        tacticalTakeaway: 'When encountering high-volume hostility, never mirror sympathetic arousal or cite contracts. Label the underlying fear, solve their immediate status crisis, and convert the negotiation from zero-sum blame to integrative forward value.',
      },
      defeat: {
        title: 'Tactical Frame Collapse: Limbic Victim',
        summary: 'You either allowed the counterpart to bully you into unfulfillable liabilities or ignited a recursive ego war that destroyed the client relationship.',
        tacticalTakeaway: 'Arguing legal fine print during emotional panic is conversational suicide. Conceding without resistance trains counterparts to escalate further in the future.',
      },
      draw: {
        title: 'Deadlock: Fragile Stalemate',
        summary: 'The immediate crisis was patched, but lingering distrust and unresolved financial resentment leave the account vulnerable to churn at the next renewal.',
        tacticalTakeaway: 'Always close with a binding integrative lock that aligns future incentives rather than walking away on unresolved tension.',
      },
    },
  },
  {
    id: 'executive-comp-review',
    title: 'The Executive Compensation & Equity Standoff',
    category: 'Executive',
    contextDescription: 'You are meeting with your CEO for your annual compensation review. You delivered 140% of target revenue, but the CEO opens by anchoring low and citing macroeconomic headwinds.',
    startingLeverage: 40,
    rootTurnId: 'c-turn-1',
    turns: {
      'c-turn-1': {
        id: 'c-turn-1',
        turnNumber: 1,
        opponentState: {
          posture: 'Dominant',
          statement: 'You had a great quarter, no question about it. But with interest rates where they are, the board has mandated an executive compensation freeze across the board. The best I can do is a 3% cost-of-living adjustment.',
          subtext: 'Anchor and blame-shifting. Using the board and macroeconomic climate as an impersonal external villain to preempt ambitious requests.',
          visualCue: 'Polite smile, open hands, leaning back comfortably in executive chair.',
        },
        choices: [
          {
            id: 'c1-counter-anchor',
            label: 'Acknowledge Macro Context & Anchor Concrete Performance Multiple',
            responseScript: 'I appreciate the board’s discipline in this macro climate, and protecting cash reserves is exactly what keeps our balance sheet fortress-grade. At the same time, my unit delivered $14M in net expansion—representing 42% of the company\'s total growth this year. If my compensation is tied to company-wide baselines, it severs my incentives from outsized value creation. Let’s look at structuring this through an equity performance ratchet or gross margin participation.',
            leverageDelta: +25,
            feedback: {
              psychologicalImpact: 'Aligns with his macro prudence while decoupling your exceptional contribution from generic baseline freezes.',
              underlyingConceptTitle: 'Focal Points & Anchoring Gravitational Pull',
              conceptId: 'focal-points-anchoring-gravitational-pull',
              critique: 'Masterful framing. You didn’t argue with his macro caution; you aligned with it, then shifted to non-cash equity performance ratchets.',
            },
            nextTurnId: 'c-turn-2-ratchet',
          },
          {
            id: 'c1-threaten-quit',
            label: 'Threaten to Interview Elsewhere',
            responseScript: '3% is insulting. Recruiters are messaging me weekly offering 40% more. If the company can’t recognize my performance, I have to consider my options.',
            leverageDelta: -25,
            feedback: {
              psychologicalImpact: 'Perceived as blackmail and status challenge. Triggers Winner\'s Curse ego defense; he prepares to replace you.',
              underlyingConceptTitle: 'Winner\'s Curse & Ego Escalation',
              conceptId: 'winners-curse-ego-escalation',
              critique: 'Prematurely playing your BATNA nuclear option turns a commercial negotiation into a hostile loyalty test.',
            },
            nextTurnId: 'c-turn-2-hostile',
          },
        ],
      },
      'c-turn-2-ratchet': {
        id: 'c-turn-2-ratchet',
        turnNumber: 2,
        opponentState: {
          posture: 'Guarded',
          statement: 'An equity ratchet is interesting, but the board is extremely stingy with cap table dilution right now. Every basis point of equity is scrutinized by our lead investors.',
          subtext: 'Testing your conviction. He is open to the mechanic but looking for an easy offramp if you hesitate.',
          visualCue: 'Frowning thoughtfully, squinting, looking down at cap table notes.',
        },
        choices: [
          {
            id: 'c2-contingent-ratchet',
            label: 'Propose Self-Funding Milestones (Zero Downside for Investors)',
            responseScript: 'Let’s structure the ratchet so it only vests if our unit achieves $22M in ARR next year—a number that increases the company’s enterprise valuation by $40M. The investors will gladly award 50 basis points of equity in exchange for $40M in equity value created. If I miss the target, the dilution is exactly zero.',
            leverageDelta: +35,
            feedback: {
              psychologicalImpact: 'Removes all risk for him and his board. Makes saying "no" look irrational and anti-growth.',
              underlyingConceptTitle: 'Prospect Theory & Framing Effect',
              conceptId: 'prospect-theory-framing-loss-aversion',
              critique: 'Brilliant structural move. You created a contingent contract where your upside is self-funded by excess growth.',
            },
            nextTurnId: 'VICTORY',
          },
          {
            id: 'c2-compromise-cash',
            label: 'Ask for a Slightly Higher Cash Bonus Instead',
            responseScript: 'Well, if equity is off the table, can we just do a 6% cash raise instead of 3%?',
            leverageDelta: -15,
            feedback: {
              psychologicalImpact: 'Negotiating against yourself. Caved on the high-upside asset in exchange for pocket change.',
              underlyingConceptTitle: 'Hyperbolic Discounting & Present Bias',
              conceptId: 'hyperbolic-discounting-present-bias',
              critique: 'Trading long-term asymmetric equity for a minor inflation adjustment is a tactical blunder.',
            },
            nextTurnId: 'DRAW',
          },
        ],
      },
      'c-turn-2-hostile': {
        id: 'c-turn-2-hostile',
        turnNumber: 2,
        opponentState: {
          posture: 'Hostile',
          statement: 'If you want to shop around, that’s your prerogative. Nobody here is irreplaceable. I won\'t be held hostage by anyone on my team.',
          subtext: 'Fight-or-flight triggered. The CEO has chosen status defense over talent retention.',
          visualCue: 'Hardened stare, closed posture, cold vocal tone.',
        },
        choices: [
          {
            id: 'c2h-de-escalate',
            label: 'Retract the Threat and Reframe Around Long-Term Commitment',
            responseScript: 'I apologize for phrasing it that way, that came out poorly. My passion comes from wanting to build this company long-term. Let’s set aside outside noise and focus on how we align my milestones with the company’s 3-year valuation target.',
            leverageDelta: +15,
            feedback: {
              psychologicalImpact: 'Alleviates the immediate crisis, but the loyalty damage is done.',
              underlyingConceptTitle: 'Affect Labeling & De-Escalation',
              conceptId: 'affect-labeling-de-escalation',
              critique: 'Repairs the room from total collapse, but leaves you in a weakened negotiating posture.',
            },
            nextTurnId: 'DRAW',
          },
          {
            id: 'c2h-double-down',
            label: 'Double Down on the Ultimatum',
            responseScript: 'Fine. Then consider this my two weeks notice.',
            leverageDelta: -40,
            feedback: {
              psychologicalImpact: 'Mutual scorched-earth destruction.',
              underlyingConceptTitle: 'Winner\'s Curse & Ego Escalation',
              conceptId: 'winners-curse-ego-escalation',
              critique: 'Complete tactical failure.',
            },
            nextTurnId: 'DEFEAT',
          },
        ],
      },
    },
    outcomes: {
      victory: {
        title: 'Executive Masterclass: Value Expansion',
        summary: 'You bypassed the lowball cash baseline, introduced asymmetric equity upside, and structured self-funding performance ratchets that align investor value with your personal wealth creation.',
        tacticalTakeaway: 'When an executive cites macro freezes, never debate the freeze directly. Pivot to non-cash equity or contingent ratchets where your upside is funded exclusively by the excess value you create.',
      },
      defeat: {
        title: 'Ego Burnout: Relationship Rupture',
        summary: 'Your encounter degenerated into ultimatums, leaving either your compensation capped or your career at the company terminated.',
        tacticalTakeaway: 'Never threaten a superior’s status with outside alternatives until you are ready to walk out the door that afternoon.',
      },
      draw: {
        title: 'Standard Increment: Left Chips on Table',
        summary: 'You accepted a minor cash compromise, missing the opportunity to capture asymmetric equity upside or executive performance incentives.',
        tacticalTakeaway: 'Avoid negotiating against yourself when faced with mild friction. Propose contingent structures rather than retreating to incremental cash.',
      },
    },
  },
];
