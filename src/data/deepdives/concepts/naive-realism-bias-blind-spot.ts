import type { DeepDive } from '../../../types/curriculum';

/** #03 · Sphere 1 · Naïve Realism & The Bias Blind Spot */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'In 1982, Stanford researchers sat pro-Israeli and pro-Arab students in front of the same television news coverage of the same events in Lebanon. Not similar coverage. The identical tapes, same segments, same order, same edit. Both groups came out convinced the coverage had been biased against their side. Both could point to specific passages as proof. And both predicted that a neutral viewer watching those exact tapes would come away more hostile to their side than before. Two groups, one videotape, two opposite and confidently detailed accounts of what was on it. Nobody was lying, and nobody was exaggerating for effect. Each group was reporting, honestly, what they had seen.',
  sections: [
    {
      heading: 'Three claims stacked on each other, and the third is expensive',
      body: [
        'The popular version of this idea is that everybody has biases, which is true, banal, and does no work. Lee Ross and Andrew Ward set out the precise structure in 1996, and it is a stack of three claims, each built on the last.',
        'First: I perceive events and people as they actually are. My take is not an interpretation, it is a reading. Second: other reasonable people given the same information will converge on roughly the same reading. Third — and this is the one that ends relationships — anyone with the same information who does not converge requires explaining, and since the reading is obvious, the explanation has to be located in them.',
        'That third claim resolves into a specific ladder, and people climb it in a specific order. First the other party is uninformed: they have not seen the numbers, send them the deck. Then they are irrational: they have seen it and cannot follow it, they are out of their depth. Then they are malicious: they have seen it, they can follow it, and they argue this way because it serves them. Each rung is harder to climb down from than the last, and the escalation is silent. The moment someone reaches the third rung, evidence stops functioning entirely — because from up there, more evidence from you is just more input from a bad-faith actor, and the better your argument, the more it confirms you are working an angle.',
      ],
    },
    {
      heading: 'Perception does not arrive with a label on it',
      body: [
        'Your visual system already does the harder version of this trick. What you experience as seeing a room is a heavily constructed, inference-laden rendering — edges filled in, colours corrected for lighting, a blind spot papered over, motion predicted forward to compensate for neural lag. You do not experience any of that as construction. You experience a room.',
        'Social perception works the same way. When you read an email that says “as discussed, per my last note,” a construal is performed for you — is this person covering themselves, chasing you, or simply organised? — and the output arrives as a fact about the sender rather than one reading among several. If it came flagged as an interpretation you could not act on it. The missing label is not a bug; it was never economical to produce.',
        'The same machinery generates the false consensus effect. Ross, Greene and House ran the classic demonstration in 1977: students were asked to walk around campus for half an hour wearing a large sandwich board advertising a restaurant. Some agreed, some refused. Whichever they chose, they estimated a clear majority of their peers would have chosen the same — and both groups made sharper inferences about the character of those who chose the other way.',
        'Look at the structure of that. Your own choice feels like a sensible response to the situation, so it needs no explanation from personality. Their choice cannot be a response to the situation, because you were in that situation and it obviously called for something else — so their choice must reveal what they are like.',
      ],
    },
    {
      heading: 'Two audits, two instruments, one guaranteed verdict',
      body: [
        'Emily Pronin, Thomas Gilovich and Lee Ross gave the mechanism its cleanest statement in 2004, and it matters because it explains why the bias blind spot is not arrogance. Honest, humble, self-critical people have it in full measure.',
        'You assess your own objectivity by looking inward — introspecting, examining your reasoning, checking your motives. This is a sincere audit, and it returns clean every time for a structural reason: bias operates outside awareness, so there is nothing there to find. An honest look inward at a biased judgement produces the same report as an honest look inward at an unbiased one.',
        'You assess everyone else by a different instrument, because you cannot introspect on their behalf. You look at their behaviour and their conclusions — and what you observe is a conclusion deviating from the correct one, which is exactly the footprint bias leaves. Both audits are honest, both use the best data available, and because the data differs they produce a guaranteed asymmetry: clean for me, contaminated for you, with no dishonesty anywhere. This is why telling someone to be more self-aware achieves nothing. They already looked, sincerely, and found nothing, because the instrument cannot detect what you are asking them to find.',
      ],
      example: {
        label: 'The gap is smaller than either side believes',
        body: 'Robinson, Keltner, Ward and Ross studied partisans of genuinely heated disputes in 1995, asking each side to state its own position and then estimate the other side’s. Both overestimated how extreme the opposition was. That much you would expect. The unexpected half is that both also overestimated how extreme their own side was. The real distance between the camps was substantially smaller than either assumed, and much of the argument was conducted against a caricature nobody held. Later survey work found the same shape nationally: Ahler and Sood documented that Americans wildly overestimate how many members of the other party belong to party-stereotypical groups, with the misperception largest among the most politically engaged.',
      },
    },
    {
      heading: 'Knowing about bias sharpens the instrument, and it points outward',
      body: [
        'Pronin, Lin and Ross measured this directly in 2002. Participants were given a list of documented biases and asked how susceptible they were compared with the average person. They rated themselves less susceptible on essentially the whole list. More tellingly: when shown that they had just exhibited one of those biases in the study they were taking part in, a substantial number maintained their own judgement had nonetheless been accurate. They accepted the mechanism, accepted the demonstration, and exempted the conclusion.',
        'Irene Scopelliti and colleagues went further in 2015, building a measure and treating the bias blind spot as an individual difference rather than a universal constant. Two results matter. It was essentially uncorrelated with intelligence, cognitive ability and measured decision-making competence — it is not a stupidity variable. And people scoring high on it were less likely to take advice and benefited less from training designed to improve their judgement.',
        'Then there is the recursive problem. Learning the vocabulary of cognitive bias hands you a diagnostic toolkit with a direction of use built in. You cannot see your own bias by introspection, so the vocabulary finds nothing pointed inward. You can see everyone else’s conclusions, so it finds something every time pointed outward. Anchoring. Sunk cost. Confirmation bias. Each is a legitimate concept, and each one, deployed in a meeting, functions as a way of not answering the point.',
        'The operational consequence is that having done the bias training is not a control and may be an anti-control. A room fluent in bias language and confident in its own objectivity is measurably harder to correct than a room that has never heard of any of it.',
      ],
    },
    {
      heading: 'What turns it up, and the few things that turn it down',
      body: [
        'It intensifies under structural conditions rather than emotional ones. Low-bandwidth channels are the worst offender: over email you receive the other person’s conclusion stripped of every constraint that produced it, and your mind fills the gap with inference about them. Functional separation does the same at organisational scale. Add a public position, a deadline, and a dispute already coded as a values conflict rather than a resource conflict, and the climb to rung three is close to automatic.',
        'The interventions that work do not run on goodwill. Trading constraints rather than conclusions is the most reliable: require each side to state the three pressures they are under that the other cannot see, before anyone argues for anything. That converts a fight about who is right into an exchange of what each side is missing. Rapoport’s old rule — state the other side’s position to their satisfaction before you are permitted to disagree — works for the same reason, and it fails usefully: if you cannot state their case in a way they endorse, you have discovered you were arguing with something you invented.',
        'The one intervention with direct experimental support is narrower and stranger. Pronin and Kugler found in 2007 that teaching people specifically that introspection is an unreliable guide to whether one is biased reduced the bias blind spot. Not teaching them that biases exist — teaching them that looking inward is the wrong instrument. That points at the actual lever: the blind spot is sustained by trust in the clean audit, so the way to loosen it is to discredit the audit rather than demand more of it.',
      ],
      example: {
        label: 'Why the same fight resolves in a room and worsens by email',
        body: 'A pricing dispute between sales and finance runs three weeks over email, getting steadily more personal, then collapses in twenty minutes in an actual meeting. Nothing was learned there about the numbers. What was transmitted was constraint: the sales lead hears finance say the CFO has told them to hold gross margin through the quarter, and the finance lead hears that two named accounts will churn in eight weeks without a concession. Neither fact was secret. Neither had ever fitted into an email, because email carries conclusions efficiently and pressures badly. Every extra round had supplied more evidence the other side was unreasonable, because a conclusion without its constraints is exactly what an unreasonable position looks like.',
      },
    },
    {
      heading: 'When the other person really is wrong',
      body: [
        'The framework describes an asymmetry in how you audit yourself versus others. It does not say the two sides are always equally right, and it is regularly misused to argue exactly that. Naïve realism explains why the perceived gap between positions exceeds the real one. It does not say the real gap is zero, and it certainly does not say that on questions with an answer, both readings are equally good.',
        'There is a second and more common limit. Some disagreements are not construal differences at all. They are conflicts of interest. Two people can perceive a situation identically, agree on every fact, and still want opposite outcomes, because the outcomes land differently on them. Running perspective-taking exercises on a conflict of interest wastes months, because every round of mutual understanding leaves the positions where they were. Understanding was never the constraint. And some people are, in fact, arguing in bad faith. The concept does not oblige you to assume good faith indefinitely; it obliges you to test for it first, because the untested conclusion is the machinery’s default output and arrives whether or not it is true.',
        'The workable rule is sequential rather than absolute. Assume a construal difference first, because it is cheap to test and the test is informative either way. Trade constraints. Ask them to correct your statement of their position. If two honest rounds leave the positions unmoved with the constraints fully visible, you are not in a misunderstanding — you are in a conflict of interest or a genuine disagreement about values, and both need negotiation, escalation or a decision, not more empathy.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'The word “obviously” appears in your own reasoning.',
      meaning: 'You are treating a construal as a perception. Obviousness reports how fluently you processed something, not a property of the thing.',
    },
    {
      signal: 'You can state your own position in one clean line and theirs only as a caricature.',
      meaning: 'You have modelled their conclusion and not their constraints. In practice you have their position wrong, usually more extreme than it is.',
    },
    {
      signal: 'Both sides accuse the same neutral source of being biased against them.',
      meaning: 'The hostile media signature. The source is probably close to even; each reader is measuring deviation from their own centre.',
    },
    {
      signal: 'The explanation for disagreement escalates from “they don’t have the numbers” to “they don’t care.”',
      meaning: 'Someone has climbed the naïve realism ladder. Once bad faith is assumed, more evidence from you confirms the assumption rather than testing it.',
    },
    {
      signal: 'Their behaviour is explained by character and yours by circumstance.',
      meaning: 'Asymmetric attribution. Your constraints are visible from the inside; theirs are not, so their behaviour gets explained by what they are like.',
    },
    {
      signal: 'A conflict that gets steadily worse over email and better in a room.',
      meaning: 'The channel is stripping constraints and delivering conclusions. Fewer signals means more inference, and that inference runs one way.',
    },
  ],
  playbook: [
    {
      move: 'Trade constraints before anyone argues a position.',
      how: 'Open with the exchange rather than the debate: “Before either of us argues for anything, let’s each name the three pressures we’re under that the other one probably can’t see from where they sit.”',
      watchOut: 'You have to go first, and include the constraint that makes you look bad. A sanitised list reads as a negotiating position and will be matched.',
    },
    {
      move: 'Pass their test before you take your turn.',
      how: 'Ask for the standard explicitly: “Let me say your position back to you. Correct me until you’d be happy for me to argue your case in a room you’re not in.”',
      watchOut: 'Doing this as a rhetorical warm-up before demolishing them is worse than skipping it. People can tell being understood from being scouted.',
    },
    {
      move: 'Settle the evidence standard while nobody knows which way it points.',
      how: 'Ask both halves at once: “What would we have to see for you to say I’m right, and what would I have to see to say you are?” A test agreed before the result exists cannot be relocated afterwards.',
    },
    {
      move: 'Write down what you think they believe, then have them mark it.',
      how: 'Put your model of their position in writing and ask them to score it out of ten and correct it. The gap between your version and their correction is usually the entire dispute, surfaced in five minutes instead of five weeks.',
      watchOut: 'Expect to be badly off, and expect that to be uncomfortable in front of an audience. Do it privately the first time.',
    },
    {
      move: 'Discount yourself out loud, once, then behave accordingly.',
      how: 'Name your own exposure before you present: “I should say up front that I’ve been arguing this position for six months, so apply whatever discount that deserves to my read of this data.”',
      watchOut: 'This buys credibility exactly once. Say it and then behave identically to how you would have anyway, and it reads as a technique — worse than saying nothing.',
    },
    {
      move: 'Move people’s seats rather than their attitudes.',
      how: 'Put the sales lead in the engineering standup for a month, or send the analyst to sit with the field team. Constraints that are described do not land; constraints that are experienced change the model without anyone being persuaded.',
    },
  ],
  commonMisreads: [
    {
      misread: 'It means everyone is equally biased, so no position is better than another.',
      correction: 'The claim concerns an asymmetry in how you audit yourself versus others, not the evidential quality of positions. Some readings really are better supported. Treating every disagreement as a symmetric perspective failure is false balance, a separate error with its own costs.',
    },
    {
      misread: 'The fix is to try to be humbler and more open-minded.',
      correction: 'Humility as an attitude does not survive contact with a disagreement you care about, because the blind spot comes from an honest audit rather than arrogance. The supported interventions are structural: discrediting introspection as an instrument, and stating the other position to its owner’s satisfaction before arguing.',
    },
    {
      misread: 'Intelligent, analytical people have less of a blind spot.',
      correction: 'Scopelliti and colleagues found it essentially uncorrelated with intelligence, cognitive ability and decision-making competence. It behaves as a stable individual difference of its own, and scoring high on it predicts taking less advice and gaining less from training.',
    },
    {
      misread: 'Learning the list of biases protects you from them.',
      correction: 'Bias vocabulary is deployed overwhelmingly outward, because introspection finds nothing pointed at yourself while other people’s conclusions are always visible. Someone who has read more behavioural science usually ends up with a sharper toolkit for explaining why everyone else is wrong.',
    },
    {
      misread: 'If we could just get everyone looking at the same data, we would agree.',
      correction: 'That is the second tenet of naïve realism restated as a plan. The hostile media and biased assimilation results show identical inputs producing divergent and confidently held readings. Shared data is necessary and nowhere close to sufficient, which is why resending the deck never works.',
    },
  ],
  evidence: [
    {
      source: 'Ross & Ward, “Naive Realism in Everyday Life” (1996)',
      finding: 'Set out the three-part structure: I see things as they are; reasonable people with the same information will agree with me; those who do not must be uninformed, irrational or self-interested. Applied it to negotiation deadlock, where each side reads the other’s proposals as bad faith rather than different constraints.',
    },
    {
      source: 'Vallone, Ross & Lepper, hostile media effect (1985)',
      finding: 'Pro-Israeli and pro-Arab partisans watched identical news coverage of events in Lebanon. Each group judged the coverage biased against their own side, cited specific segments as evidence, and expected neutral viewers to be turned against them by it.',
    },
    {
      source: 'Pronin, Lin & Ross, “The Bias Blind Spot” (2002)',
      finding: 'Participants rated themselves less susceptible than the average person across a broad list of documented biases. When shown evidence they had just exhibited a bias in the study itself, many maintained their own judgement had nonetheless been accurate.',
    },
    {
      source: 'Pronin, Gilovich & Ross, “Objectivity in the Eye of the Beholder” (2004)',
      finding: 'Supplied the mechanism: people assess their own bias by introspection, which cannot detect processes running outside awareness, and assess others by observing behaviour and conclusions, where bias shows plainly. Two honest audits using different instruments produce a guaranteed asymmetry.',
    },
    {
      source: 'Ross, Greene & House, false consensus effect (1977)',
      finding: 'Students asked to wear a sandwich board around campus split into those who agreed and those who refused. Each group estimated a clear majority of peers would have made the same choice, and each drew stronger character inferences about those who made the opposite one.',
    },
    {
      source: 'Robinson, Keltner, Ward & Ross, false polarisation (1995)',
      finding: 'Partisans on heated social issues overestimated the extremity of the opposing side and also of their own side. The genuine distance between positions was substantially smaller than either camp assumed, meaning much of the argument was aimed at a position nobody held.',
    },
    {
      source: 'Scopelliti et al., Management Science (2015)',
      finding: 'Built a measure treating the bias blind spot as a stable individual difference. It was essentially uncorrelated with intelligence, cognitive ability and decision-making competence, and higher scores predicted taking less advice and benefiting less from debiasing training.',
    },
    {
      source: 'Pronin & Kugler, introspection illusion intervention (2007)',
      finding: 'Teaching participants specifically that introspection is an unreliable guide to detecting one’s own bias reduced the bias blind spot — unlike simply teaching them that biases exist, which does not.',
      caveat: 'Modest laboratory studies. Durability outside the lab is not established and the intervention has not been tested at organisational scale, so treat it as the best-supported direction rather than a validated programme.',
    },
  ],
  takeaways: [
    'The claim is not that you have biases. It is that you audit yourself from the inside and everyone else from the outside, and the two audits cannot agree.',
    'Disagreement escalates on a ladder — uninformed, then irrational, then malicious. Notice which rung you are on before you send the message.',
    'Identical information reliably produces different conclusions. That is the finding itself, and it is why resending the deck has never once worked.',
    'The bias blind spot is uncorrelated with intelligence, and bias vocabulary sharpens it, because the vocabulary only ever points outward.',
    'Trade constraints before conclusions. The pressures the other side is under are the data you are missing, and they do not travel by email.',
    'Assume a construal difference first, but stop after two honest rounds. Some disputes are conflicts of interest and empathy will not touch them.',
  ],
};
