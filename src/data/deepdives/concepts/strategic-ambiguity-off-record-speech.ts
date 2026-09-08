import type { DeepDive } from '../../../types/curriculum';

/** #22 · Sphere 3 · Strategic Ambiguity & Off-Record Indirect Speech */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'A city inspector walks through a restaurant kitchen, taps his clipboard, and says, “Violations like this usually take a few weeks to schedule a re-inspection… unless something speeds things along.” Nobody has mentioned money. Nobody has said the word bribe. Play a recording of that sentence to a room full of lawyers and most will call it an observation about municipal scheduling. And yet the owner reaches for his wallet, because both men in that kitchen understood exactly what was being proposed, and exactly why neither of them was ever going to say it out loud. Nothing about this required cleverness. It required only a piece of social machinery you have been running your entire adult life without ever being taught its name.',
  sections: [
    {
      heading: 'What the sentence is actually doing',
      body: [
        'Start with what indirect speech is not: it is not just politeness, and it is not vagueness for its own sake. Paul Grice’s foundational insight was that conversation runs on a cooperative principle — listeners assume a speaker is being relevant, truthful and clear, so when a speaker appears to violate one of those rules on purpose, the listener automatically computes what they must have meant instead. That computed meaning is an implicature, and it is the engine underneath every veiled threat, bribe and proposition you will ever hear.',
        'Steven Pinker, Martin Nowak and James Lee added the strategic question Grice never asked: why choose implicature over a plain statement at all, when a plain statement is faster and less ambiguous? Their answer is that an explicit statement does something an implicature does not — it creates common knowledge. Once you say a thing and I acknowledge hearing it, I know that you know that I know it, all the way down, for both of us, permanently.',
        'An implicature skips that step. I can compute your meaning correctly and act on it without either of us ever admitting, out loud, that the meaning was there. The inference lives privately in each of our heads rather than jointly in the record between us. That gap, between what we both privately understood and what either of us could ever be held to, is the entire value of the indirect sentence.',
      ],
    },
    {
      heading: 'Why silence is cheaper than a formal proposal',
      body: [
        'The reason this is sensible rather than cowardly is structural. Alan Fiske’s relational models work identifies a handful of distinct templates people use to run relationships: sharing among family, ranked authority, market exchange among strangers. A bribe, a favor-for-favor, or a proposition is frequently an attempt to shift which template governs an existing relationship, and that shift is the risky part, independent of the content.',
        'Try to put a price on a favor between friends and you have not just asked for money, you have announced the friendship was secretly a market transaction all along. Saying that outright forces both people to confront the reclassification in real time, with no room to pretend otherwise. Vague language lets the relationship type stay technically unresolved even while both people quietly act on the new one.',
        'There is a repeated-interaction logic underneath this too. In any small, ongoing group, a village, an office, a supply chain, a flatly rejected explicit proposal does not just fail once. It recodes every future interaction between the two of you. Indirect language buys an exit a direct one does not: the whole exchange can be mutually re-filed as having never really happened.',
      ],
    },
    {
      heading: 'The move: manufacturing consent without asking',
      body: [
        'The exploit built on top of this machinery has a precise shape. A person with leverage constructs a sentence that is fully legible to the target as a conditional threat or a solicitation, contains no explicit if-then a recording could prove, and requires the target’s own inference to complete the ask — so if it ever surfaces, the powerful party can truthfully say nobody asked for anything.',
        'The asymmetry is what turns this into damage rather than ordinary tact. The powerful party can always retreat to the innocent reading if challenged. The target cannot safely act as though the innocent reading were the true one, because guessing wrong, assuming there was no threat and declining to comply, gets punished later under an unrelated pretext: invoices delayed, a contract quietly not renewed.',
        'The tell that separates this from harmless hedging is a real, asymmetric lever sitting behind the vague words. A polite request with nothing riding on refusal is just courtesy. A polite request backed by someone’s power to quietly harm you later, if you guess wrong, is coercion wearing the grammar of a suggestion.',
      ],
      example: {
        label: 'Nice store you have here',
        body: 'This is the canonical illustration in the literature for a reason: it compresses the whole mechanism into one sentence. Spoken as an explicit proposition, pay me monthly or I will damage your property, it is an unambiguous crime with a named offense and a named victim. Spoken as an observation about the neighborhood, nice store you have here, be a shame if something happened to it, it conveys the identical threat while giving a prosecutor nothing to charge. Nothing was demanded. Nothing was promised. The transaction happened entirely inside the listener’s own inference, exactly where the speaker wanted it.',
      },
    },
    {
      heading: 'Who the fog favors',
      body: [
        'The instinct is to assume the naive are most exposed to this. The opposite is closer to true. The more a person has to lose from an interaction becoming common knowledge, a regulator’s reputation, an executive’s standing with a board, a public figure’s marriage, the more valuable an off-record channel becomes to anyone who wants leverage over them. Power does not buy immunity from this dynamic. It buys a bigger target for it.',
        'The second group who are not protected are people who take pride in being blunt, direct communicators, especially across a hierarchy or a culture gap. That confidence produces two failures: walking past a genuine solicitation because it never used the words you were listening for, and making an explicit demand where indirection was expected, turning a survivable disagreement into a public confrontation neither side can cheaply back down from.',
        'Knowing the theory does not fully protect you either, because the mechanism runs on the same automatic inference machinery you use to understand any sentence at all. You cannot switch off the part of your mind that computes what a person probably meant. You can only get better, after the fact, at noticing that an inference happened and asking whether someone engineered it.',
      ],
      example: {
        label: 'The favor that was never asked for',
        body: 'A city councillor takes a call from a longtime donor a week before a zoning vote. The donor mentions, warmly, that his company has been thinking about relocating fifty jobs into the district, and how much that would mean heading into an election year, then wishes her luck with Thursday’s vote and hangs up. No ask was made. If the vote goes his way and anyone questions it later, it was a courtesy call from a supporter. The councillor is the one left to decide, alone, exactly how large a favor she just agreed to.',
      },
    },
    {
      heading: 'What turns the fog on and off',
      body: [
        'Indirection rises with power asymmetry in either direction, with genuine uncertainty about which relationship type is in force, and with the presence of an audience, because more witnesses means more people who could turn a private inference into public common knowledge if the wrong sentence gets spoken aloud.',
        'Indirection falls, and bluntness becomes normal, once the relationship type is already settled and stable, once speed matters more than the relationship, or once the interaction is genuinely one-shot with nothing left to protect. It also falls the moment one side decides to force common knowledge on purpose, a written warning, a formal complaint, because ending the other person’s ability to plead ignorance is now the entire goal.',
        'Culture and organizational norms move the baseline amount of indirection, not the underlying mechanism. Some settings run on a far higher default level of hedging as ordinary courtesy, which means the identical sentence reads as a genuine threat in one room and as standard manners in another. Misjudging the baseline is its own failure mode, separate from any real hidden agenda.',
        'The one lever fully inside your control is whether you make something common knowledge. You can leave an ambiguous statement exactly where you found it, preserving deniability for both sides, or restate it in flat, provable language and force it onto the record. Almost nothing else in this dynamic is as controllable as that single choice.',
      ],
      example: {
        label: 'Same message, two rooms',
        body: 'A manager needs to tell a direct report that a mistake nearly cost the account. One on one, door closed, she says it plainly: this cannot happen again, and here is exactly what you will do differently. In the following team meeting, five other people present, the identical point becomes we all need to tighten up how we double-check client numbers before they go out. Same fact, same manager, same target. The only thing that changed was who else was in the room to remember it.',
      },
    },
    {
      heading: 'Where the theory outruns the evidence',
      body: [
        'Be honest about what kind of claim this is. Pinker, Nowak and Lee built an elegant, internally consistent game-theoretic account, not a large-sample empirical science with settled effect sizes. It connects two separately well-established literatures, Grice’s pragmatics and Brown and Levinson’s politeness theory, in a genuinely useful way. But the parts built to test the model itself rest mainly on small, hypothetical-scenario studies, not recordings of real bribes or large samples.',
        'That matters practically. Treat the common-knowledge logic as a strong lens for interpreting what you are hearing, not as a scientific guarantee about exactly how deniable a phrase would hold up in court, or exactly how indirect a powerful person will be. Real legal and investigative standards for proving intent are far more demanding than this framework.',
        'Do not over-apply it either. Most hedged, polite language in daily life carries no strategic calculation behind it at all, it is ordinary courtesy, not a game. Reading a hidden power play into every gentle request imports paranoia into cooperative relationships. Save the suspicious reading for cases with real stakes attached, money, safety, sex, status, legal exposure, where a plausible asymmetric lever sits behind the vague words.',
        'And there are moments where bluntness simply beats indirection: emergencies, safety warnings, and any relationship you are actively trying to end rather than preserve. In those cases the entire value of strategic ambiguity, protecting an ongoing relationship, keeping options open, is not a benefit you want. Say the true thing plainly and let it become common knowledge on purpose.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'A request, threat or proposition arrives as a question, a hypothetical, or an observation about someone else entirely.',
      meaning: 'The speaker wants deniability preserved. Forcing a direct answer forces a commitment they are deliberately avoiding.',
    },
    {
      signal: 'Someone reacts to your plain restatement of their implication with “I never said that.”',
      meaning: 'You just tried to convert a private inference into common knowledge, and they are fighting to keep it off the record.',
    },
    {
      signal: 'The identical message gets noticeably blunter in private than it does with anyone else present.',
      meaning: 'Audience size raises the cost of common knowledge, so indirection increases with every extra witness.',
    },
    {
      signal: 'A compliment or a show of concern arrives paired with a vague, unstated future consequence.',
      meaning: 'The classic veiled-threat structure: favor plus contingency, deniable because no explicit if-then was ever spoken.',
    },
    {
      signal: 'You feel pressure to comply with something you would obviously refuse if it were ever said outright.',
      meaning: 'The ambiguity is doing coercive work an explicit ask could not survive. That is exploitation, not politeness.',
    },
    {
      signal: 'Someone with power over you turns unusually warm right before making a request.',
      meaning: 'They may be building a communal frame that is easier to exploit indirectly than an explicit transaction would be.',
    },
  ],
  playbook: [
    {
      move: 'Force ambiguity onto the record without accusing anyone of manipulation.',
      how: 'Say: “I want to make sure I am not putting words in your mouth. Are you telling me X happens if Y does not, or is that just one possibility?”',
      watchOut: 'Naming it explicitly can itself feel like an accusation. Reserve this for genuinely high-stakes asks, not routine hedging.',
    },
    {
      move: 'Decline a veiled proposition with an equally veiled refusal.',
      how: 'Say: “I think I am reading you right, and I appreciate it, but that is not something I can do.” Leave the specific content unstated on both sides.',
      watchOut: 'Only use this if you want the relationship to survive. If you want the exploitation to stop, ambiguity in your refusal can read as the door staying open.',
    },
    {
      move: 'Match your directness to the relationship type you actually want.',
      how: 'To keep something a market transaction, state the number: “my rate for this is X.” To keep it a favor, leave the exchange unstated. Invoicing a friend for a favor reads as a relationship downgrade, not efficiency.',
    },
    {
      move: 'Build the other person’s exit into your own phrasing before they need to invent one.',
      how: 'Say: “No pressure either way. If the timing is wrong, just say so, there is no story here.” You are deliberately supplying the excuse the theory says off-record language exists to provide.',
    },
    {
      move: 'When you want to end a game rather than keep playing it, force common knowledge on purpose.',
      how: 'Restate the offer or threat in flat language, in writing or in front of a witness: “To be clear, you are describing a request for payment in exchange for approving this permit. I am declining, and documenting this conversation.”',
      watchOut: 'This is irreversible. Only use it once you have decided confrontation, not preservation, is the correct outcome.',
    },
    {
      move: 'Do not read a hidden agenda into ordinary courtesy.',
      how: 'Reserve suspicion for cases with real stakes and a genuine lever behind them. Most hedged phrasing is just manners, not a maneuver.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Indirect speech is weakness, or an inability to be assertive.',
      correction: 'It is frequently the more sophisticated move. Every framework here reserves fully explicit speech for urgent moments or already-settled power, precisely because explicitness forecloses deniability for everyone involved.',
    },
    {
      misread: 'If you can decode someone’s implication, you can hold them to it as though they had said it outright.',
      correction: 'The strategic value of indirect phrasing is that the inference is yours, not theirs, on the record. Treating a hint as a confession usually escalates a private negotiation into a public dispute you may not be positioned to win.',
    },
    {
      misread: 'This is settled experimental science with known effect sizes, on par with anchoring or loss aversion.',
      correction: 'It is a compelling formal model from game theory and linguistics, tested mostly with small hypothetical-scenario studies rather than field data. Use it as a strategic lens, not a quantified finding.',
    },
    {
      misread: 'Every hedge or polite phrase is a manipulative power play.',
      correction: 'Most indirection is conventional courtesy with no calculation behind it at all. Reading intent into ordinary noise corrodes relationships that were never playing a game.',
    },
    {
      misread: 'Calling out the hidden meaning explicitly is always the powerful move.',
      correction: 'Forcing common knowledge is a one-way door. It is exactly right against a corrupt solicitation and exactly wrong against a boss or partner whose relationship, and your own deniability, still has value to you.',
    },
  ],
  evidence: [
    {
      source: 'Pinker, Nowak & Lee, “The Logic of Indirect Speech” (PNAS, 2008)',
      finding: 'Builds a formal game-theoretic account of why speakers veil bribes, threats and propositions: assertion creates common knowledge that forecloses relationship options an implicature leaves open.',
      caveat: 'Primarily a theoretical and modeling paper. Its predictions are illustrated with reasoning and classic examples more than measured behavioral data.',
    },
    {
      source: 'Lee & Pinker, “Rationales for Indirect Speech” (Psychological Review, 2010)',
      finding: 'Follow-up vignette studies found people judged indirect requests as more appropriate than direct ones specifically when power was asymmetric or the relationship type was ambiguous, matching the model’s predictions.',
      caveat: 'Hypothetical-scenario, self-report methodology, not real stakes or field behavior. Treat this as support for the logic, not proof it governs real high-stakes speech.',
    },
    {
      source: 'Grice, “Logic and Conversation” (1975)',
      finding: 'Establishes the cooperative principle and conversational maxims, the mechanism by which a listener computes an unstated meaning whenever a speaker appears to flout a maxim on purpose.',
    },
    {
      source: 'Brown & Levinson, Politeness: Some Universals in Language Usage (1987)',
      finding: 'Catalogues off-record hints, irony and rhetorical questions as the maximally deniable strategy in a hierarchy of ways speakers soften a face-threatening request.',
      caveat: 'Proposed as cross-linguistically universal. Later fieldwork found real cultural variation in which strategies dominate, so treat the hierarchy as a strong descriptive tool, not a fixed law.',
    },
    {
      source: 'Fiske, relational models theory (1992)',
      finding: 'People organize relationships into four elementary models — communal sharing, authority ranking, equality matching and market pricing — and naming an exchange inside a relationship coded as communal can feel damaging independent of the amount involved.',
    },
    {
      source: 'Schelling, The Strategy of Conflict (1960)',
      finding: 'Showed that deliberately preserved ambiguity and incomplete commitment can be a rational bargaining asset, establishing well before Pinker’s account that strategic actors can gain from not fully resolving what is known or intended.',
      caveat: 'Schelling’s argument concerns bargaining and deterrence generally, not conversational speech acts specifically. The connection to Pinker’s work is shared logic, not a joint research program.',
    },
  ],
  takeaways: [
    'Indirect speech is a hedge against two things a direct statement cannot undo: creating common knowledge and forcing a relationship-type decision.',
    'Grice’s implicature is the machinery. Pinker’s contribution is explaining why we keep choosing that machinery specifically for bribes, threats and propositions.',
    'Calling something out explicitly is a one-way door. It converts a repairable, ambiguous situation into a fixed, on-record one, so use it on purpose, not by reflex.',
    'Power and stakes predict indirection better than personality or culture: the more someone has to lose from a request becoming common knowledge, the more veiled the request will be.',
    'Treat the common-knowledge logic as a strategic lens, not settled science. The supporting studies are mostly small and hypothetical, not large field data.',
    'Most hedged language is ordinary politeness. Save your suspicion for cases with real money, safety, sex or power attached.',
  ],
};
