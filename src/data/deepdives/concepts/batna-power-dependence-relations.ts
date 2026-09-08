import type { DeepDive } from '../../../types/curriculum';

/** #29 · Sphere 3 · BATNA & The Power-Dependence Relation */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'A homeowner lists a house at $650,000. One buyer shows interest, offers $580,000, and mentions, almost as an aside, that there is no rush on their end. The homeowner, who has already bought a new place across town and is carrying two mortgages, accepts within a week. Down the street, an identical house lists at the same price. Four buyers show up to the same open house on the same afternoon, and the seller — same agent, same listing, same price — walks away with an offer well above ask. Nobody in either transaction negotiated harder or spoke more persuasively than anyone else. The entire difference was how many other people wanted the thing being sold, and whether everyone in the room already knew it.',
  sections: [
    {
      heading: 'What the acronym is actually claiming',
      body: [
        'BATNA is not a synonym for options. It names one specific thing: the single best course of action you would actually take if this negotiation produced no deal at all. Not your second-favorite outcome, not a comforting general sense that other things exist — the one alternative you would really execute, priced out, and ready. Roger Fisher and William Ury coined the term in Getting to Yes as a deliberate replacement for the older idea of a fixed bottom line.',
        'Their argument against a bottom line was specific: a number decided in advance, before you know what is actually on offer, is both too rigid to adapt and too arbitrary to defend under pressure. A BATNA does the same protective job without the rigidity, because it is derived from something real outside the room rather than picked ahead of time, and it updates automatically as your actual alternatives change.',
        'This makes BATNA a coaching framework, not a finding. Fisher and Ury were negotiators and teachers building a better mental tool, not researchers reporting an experiment. That does not make the idea weak — the underlying logic is close to self-evidently correct — but it means the specific advice sits differently in the evidence hierarchy than a replicated result would.',
        'The number that matters day to day is your reservation value: the minimum deal you would accept, which should equal what your BATNA is worth to you. Everything above that point is negotiable. Nothing below it should be accepted, however good the room feels in the moment.',
      ],
    },
    {
      heading: 'Power as a property of the relationship, not the person',
      body: [
        'Richard Emerson’s 1962 paper made a claim that generalizes far past any negotiating table: power is not something a person possesses, it is a property of a relationship between two parties. Emerson’s formula states it plainly — the power of A over B equals the dependence of B on A. Nobody needs to be more charismatic, senior, or persuasive. They need the other party to need them more than the reverse.',
        'Dependence, in Emerson’s account, has two ingredients: how much B values whatever A provides, and how available that same thing is to B somewhere else. Change either one and the power balance shifts, even if nothing about either person’s personality, effort, or intent has changed at all. This is the sociological engine sitting underneath the negotiator’s tactical language of BATNA.',
        'It also explains why power in a relationship is rarely static. As a dependent party quietly develops other options — a second supplier, a second suitor, a second job lead — the more powerful party’s leverage erodes on its own, often before anyone involved consciously notices the shift has happened.',
      ],
      example: {
        label: 'Testing the theory in the lab',
        body: 'Karen Cook and Richard Emerson later built small laboratory exchange networks — structures where some positions could trade with two or three partners and others were boxed into just one — to see whether power actually followed the structural math. It generally did: participants whose position let them credibly exclude a partner extracted better terms than participants who could be excluded and had nowhere else to go, independent of anything about their individual bargaining skill — though follow-up work found that raw number of connections is a poor proxy for this, and it is exclusion, not connectedness, that does the work. The result mattered because it moved power-dependence from an armchair theory into something tested under controlled conditions, even though a stylized lab network simplifies how real organizations and relationships actually work.',
      },
    },
    {
      heading: 'The tell that invites extraction',
      body: [
        'The specific damage happens through a signal, not a sentence. Long before anyone says the word desperate, a weak or absent BATNA leaks out through behavior: filling silence instead of letting an offer sit, thanking the other side for the chance to negotiate at all, asking for more time instead of taking it, over-explaining why the deal matters so much. None of this is spoken as a confession. All of it is read as one.',
        'A sophisticated counterpart who detects this does not need to be told they hold the power. They adjust automatically, the way a rational bargainer adjusts to any credible constraint: anchoring more aggressively, adding terms late, or manufacturing urgency specifically to prevent you from ever pausing long enough to build or discover an alternative.',
        'The countermove is not to fake calm. It is to make the underlying fact true first — build the actual alternative before the negotiation starts — because a bluffed BATNA collapses the moment anyone asks a specific, informed question about it.',
      ],
      example: {
        label: 'Two candidates, one job',
        body: 'A hiring manager makes the same offer to two finalists for the same role. The first candidate says, quickly, that the number works and asks when they can start. The second says: “I have another offer at this level closing Friday, and I’d genuinely rather join you — can we get to a number that lets me say yes today instead of waiting them out?” The hiring manager finds more money for the second candidate within the hour and finds nothing for the first — not because the second candidate negotiated more aggressively, but because a specific, dated, named alternative changed what the hiring manager’s own best move was.',
      },
    },
    {
      heading: 'Knowing the theory does not verify your own alternative',
      body: [
        'The most common failure among people who understand this concept perfectly well is overestimating the quality of their own BATNA. I could always freelance, we could always switch vendors, and I would have no trouble finding another job are frequently untested claims, not verified alternatives — and the gap between the two stays invisible until the moment you actually try to exercise the option and discover it was weaker than you assumed.',
        'The opposite failure is just as common and gets far less attention: people with a genuinely strong, verifiable BATNA who never use it, because using it feels confrontational, or because loyalty, guilt, or years of sunk cost have quietly redefined how they see the relationship. Having leverage and being willing to act on it are two different skills, and only the second one changes outcomes.',
        'Experienced negotiators are not exempt from a third failure: misjudging the other side’s dependence on them. An incumbent vendor who assumes a client’s switching costs are permanent, or a senior employee who assumes their specific skills are irreplaceable, is making an empirical claim about someone else’s alternatives without checking it — and incumbents get replaced anyway more often than their pricing behavior suggests they expect.',
        'None of this is solved by knowing Emerson’s formula or the term BATNA. All three failures are about the accuracy of a factual estimate — how good is this alternative, really — and expertise in negotiation theory does not substitute for actually checking.',
      ],
    },
    {
      heading: 'What decides whether leverage is real',
      body: [
        'Four conditions determine whether a BATNA functions as power rather than as private comfort: how good the alternative genuinely is; how credible it is, meaning whether you would really take it or it would collapse under its own weight if called; whether the other side believes it exists; and how good their own alternative is, since Emerson’s model is a ratio between two parties, not a one-sided score.',
        'Time is a fifth condition people underrate. A BATNA has a clock attached — a competing offer expires, a backup vendor’s discount window closes, a second buyer loses patience — and an alternative verified today can be worthless in three weeks. Power calculated from a stale BATNA is not power. It is a memory of power.',
        'There is a genuine trade-off in how much of this to disclose. Stating a specific alternative clearly maximizes leverage in a one-off, transactional negotiation. In a relationship you intend to keep, the same disclosure can read as a threat and damage trust in a way that outlasts whatever you gained at the table.',
      ],
      example: {
        label: 'The renewal call that goes two ways',
        body: 'A single-source software vendor calls to announce a price increase on renewal. One customer says nothing about alternatives and simply asks for a smaller increase, which they get — and which quietly resets the baseline for an even larger increase next year. Another customer says: “We’ve already scoped a migration with your closest competitor. It costs us real time, but it’s fully budgeted for this quarter if we need it.” The second call ends with the increase withdrawn entirely, not because the second customer was ruder, but because they made their alternative specific and credible before the deadline arrived.',
      },
    },
    {
      heading: 'Where the framework stops being advice and starts being a wager',
      body: [
        'BATNA itself is prescriptive coaching, not a tested finding, and it is worth being honest about the difference. Fisher and Ury built a better mental tool for negotiators; they did not run an experiment showing it works. The negotiation research that does exist is narrower and more useful for exactly that reason: it tells you what actually happens, not just what should.',
        'Negotiators handed a more specific, more attractive alternative in laboratory bargaining exercises tend to set higher aspirations and end up with better outcomes than negotiators handed a vague or weak one — consistent with the theory, and worth trusting more than the theory alone, because it was measured rather than argued for.',
        'A separate strand of research on psychological power complicates the picture: feeling powerful, which a strong BATNA plausibly induces, is associated with more assertive bargaining but also with paying less attention to the other side’s actual interests — a real cost, and a reason a strong hand can still produce a worse long-run deal than a more attentive weaker one.',
        'The deepest limit is not empirical, it is a category error: treating a marriage, a friendship, or a long collaboration as a transaction with a calculable walkaway price. The power-dependence math is not wrong in those relationships. Applying it as a threat instead of as a diagnosis is usually where it stops helping and starts doing damage.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'Someone accepts unfavorable terms unusually fast, or apologizes while asking for anything.',
      meaning: 'Speed and apology are classic tells of a weak or absent BATNA — they are negotiating against themselves before an offer even lands.',
    },
    {
      signal: 'A counterpart names a specific competing option, calmly and once.',
      meaning: 'A credible BATNA is usually stated specifically and without heat. Vague, heated claims about “other options” often mean the alternative is weak or does not exist.',
    },
    {
      signal: 'A vendor or partner gets noticeably more accommodating right after you mention shopping around.',
      meaning: 'Their certainty about your dependence just dropped. Power runs on believed alternatives, not only real ones.',
    },
    {
      signal: 'Someone stays in a clearly one-sided arrangement despite having objectively good alternatives.',
      meaning: 'Having a BATNA and using it are different skills — loyalty, sunk cost, or fear can suppress leverage that already exists.',
    },
    {
      signal: 'A counterpart manufactures urgency right as you are about to compare options.',
      meaning: 'Time pressure is a direct attack on your ability to verify a BATNA, and it often reveals more about their position than yours.',
    },
    {
      signal: 'The other side’s confidence drops the moment you ask a specific, informed question about their alternative.',
      meaning: 'You just tested the claim. A real BATNA survives specifics; a bluff needs vagueness to stay alive.',
    },
  ],
  playbook: [
    {
      move: 'Build the real alternative before you negotiate.',
      how: 'Get an actual competing offer, a second vendor quote, or a real backup plan in hand, ideally in writing, before you sit down. An alternative you would not actually take under pressure is not a BATNA — it is a story.',
      watchOut: 'A real alternative takes real time to build. Starting the week of a renewal deadline is usually too late.',
    },
    {
      move: 'State the alternative specifically, calmly, once.',
      how: 'Say: “We have two vendors in technical review at our target price. We’d rather stay with you, but can’t justify a 25% premium for that preference.” Specificity and calm are what make it credible.',
      watchOut: 'Repeating it, or saying it with visible heat, reads as insecurity, not strength.',
    },
    {
      move: 'Fix your reservation value before the room fills up.',
      how: 'Decide, in private and in advance, the exact point where your BATNA beats any deal on the table. Everything above it is negotiable; nothing below it gets accepted no matter how the conversation feels.',
      watchOut: 'Recalculate if your BATNA changes mid-negotiation — a stale number is as dangerous as no number.',
    },
    {
      move: 'Diagnose their dependence on you, not just yours on them.',
      how: 'Before assuming you are the needier party, price out what it actually costs them to lose this deal — switching costs, replacement time, reputational exposure. Power is a ratio, and you may be underestimating your half.',
      watchOut: 'Keep this calculation internal. Announcing it directly reads as a threat and invites the defensiveness you are trying to avoid.',
    },
    {
      move: 'Check a claimed alternative before reacting to its deadline.',
      how: 'If a counterpart implies other options while pushing you to decide immediately, ask one specific, informed question about that alternative before responding to the clock.',
      watchOut: 'Ask to gather information, not to humiliate a bluff in front of others — cornering someone produces a worse relationship, rarely a better deal.',
    },
    {
      move: 'In relationships with real value, use this to see clearly, not to threaten.',
      how: 'Notice your own dependence in a friendship, marriage, or long collaboration, and address the imbalance directly — “I’ve stopped building anything outside this, and I want to change that” — instead of brandishing a walkaway you do not actually want.',
      watchOut: 'Announcing alternatives in a relationship you intend to keep tends to cost trust faster than it buys leverage.',
    },
  ],
  commonMisreads: [
    {
      misread: 'BATNA is just a fancy word for having options.',
      correction: 'Vague options are not a BATNA. A BATNA is the single specific alternative you would actually take, verified and ready — not a general sense that other things exist somewhere.',
    },
    {
      misread: 'The best negotiators are the ones who mention alternatives loudest and most often.',
      correction: 'Repetition and volume tend to signal the opposite of strength. A genuinely strong BATNA is usually stated once, specifically, without emotional charge, because the person holding it does not need to convince themselves.',
    },
    {
      misread: 'If you have a strong BATNA, you should always use it as a threat.',
      correction: 'In relationships with ongoing or intrinsic value, explicitly wielding a walkaway tends to damage trust faster than it extracts concessions. Use the framework to diagnose clearly first, and state it as leverage mainly in one-off, transactional contexts.',
    },
    {
      misread: 'BATNA and power-dependence theory are the same claim, tested the same way.',
      correction: 'BATNA is prescriptive negotiation coaching from Fisher and Ury’s Getting to Yes. Emerson’s power-dependence theory is an older, separate sociological account of power as a structural property, later tested in laboratory exchange networks. They rhyme; they are not the same evidence.',
    },
    {
      misread: 'Whoever seems more powerful in a relationship holds the stronger BATNA.',
      correction: 'Appearance and status are not dependence. A confident-seeming party with no real alternative and a quiet party with several can have exactly the opposite power balance from what the room assumes.',
    },
  ],
  evidence: [
    {
      source: 'Fisher & Ury, Getting to Yes (1981)',
      finding: 'Introduced BATNA as a deliberate replacement for a fixed bottom line, arguing that continuously assessing your actual best alternative produces better decisions than defending a number set in advance.',
      caveat: 'A prescriptive negotiation-coaching framework, not an experimental finding. Its case is conceptual and pedagogical, not a controlled study.',
    },
    {
      source: 'Emerson, “Power-Dependence Relations” (American Sociological Review, 1962)',
      finding: 'Formalized power as a property of a relationship rather than a personal trait: the power of A over B equals the dependence of B on A, and that dependence falls as B’s outside alternatives improve.',
    },
    {
      source: 'Cook & Emerson, laboratory exchange-network studies (1970s)',
      finding: 'Tested power-dependence predictions in structured lab exchange networks, generally finding that a position’s power tracked its structural alternatives within the network, independent of the individual’s bargaining skill.',
      caveat: 'A simplified, stylized version of real negotiations and relationships. Treat the structural logic as well supported and the specific lab payoffs as illustrative.',
    },
    {
      source: 'Pinkley, Neale & Bennett, research on alternatives in dyadic negotiation (1994)',
      finding: 'Negotiators given a more attractive or more specific alternative to a deal set higher aspirations and reservation points, and tended toward better outcomes, than negotiators given a vague or unattractive one.',
      caveat: 'One study within a broader literature, using negotiation simulations. Real-world BATNAs are harder to standardize and verify than an experimentally assigned one.',
    },
    {
      source: 'Galinsky and colleagues, psychological power and negotiation behavior',
      finding: 'People primed to feel powerful — a state a strong BATNA plausibly induces — tend to negotiate more assertively and anchor harder, but also attend less to the counterpart’s actual interests.',
      caveat: 'Draws on a broader social-psychology power literature, parts of which have faced replication challenges. Treat the direction as informative, not settled.',
    },
    {
      source: 'Switching-cost and vendor lock-in research (procurement and industrial-organization literature)',
      finding: 'Buyers with high switching costs — proprietary formats, deep integration, retraining — consistently face worse renewal terms than buyers who maintain credible multi-vendor options, matching power-dependence logic applied to commercial contracts.',
      caveat: 'A broad applied literature rather than a single study. Treat the direction as well established and specific pricing figures as context-dependent.',
    },
  ],
  takeaways: [
    'BATNA is prescriptive negotiation coaching, not an experimental finding — a tool for replacing a fixed bottom line with a living comparison point.',
    'Power is relational, not personal: your power over someone equals their dependence on you, and that can shift without anything else changing.',
    'A BATNA only functions if it is real enough that you would actually take it, and credible enough that the other side believes you would.',
    'Having an alternative and using it are different skills. Loyalty, sunk cost, and fear suppress leverage that may already exist.',
    'Diagnose the other side’s dependence on you, not only yours on them — power is a ratio, and you may be underestimating your half.',
    'Wielding a walkaway as a threat can win a transaction and damage a relationship worth keeping. Match the move to the actual stakes.',
  ],
};
