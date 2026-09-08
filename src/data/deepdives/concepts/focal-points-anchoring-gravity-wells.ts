import type { DeepDive } from '../../../types/curriculum';

/** #23 · Sphere 3 · Focal Points & Anchoring Gravity Wells */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'Spin a wheel of fortune rigged to stop on either 10 or 65. Then answer a question that has nothing to do with wheels: what percentage of countries in the United Nations are African? You watched the wheel land on a number you know is meaningless. And yet, on average, people who saw it stop on 65 guessed a substantially higher percentage than people who saw it stop on 10. Amos Tversky and Daniel Kahneman ran exactly this study, and the participants were not fooled about the wheel being random. They knew it was arbitrary. Their estimate moved anyway. That is the part worth sitting with before any theory arrives: knowing a number is meaningless does not stop it from moving you.',
  sections: [
    {
      heading: 'Two mechanisms, one folk name',
      body: [
        'Popular usage flattens two entirely different phenomena into one phrase: whoever moves first wins. The first is anchoring and adjustment: exposed to a number, even an irrelevant one, a single person’s subsequent numeric estimate drags toward it, because judgment under uncertainty proceeds by adjusting away from a starting point rather than computing an answer from nothing.',
        'The second is a Schelling focal point, and it has nothing to do with bias at all. Thomas Schelling asked what happens when two people need to coordinate with no communication whatsoever: told to meet a stranger in New York City with no way to arrange where or when, most people independently named the same landmark, historically the information booth at Grand Central Terminal, at noon. Nobody was dragged toward that answer by exposure. Both sides reasoned their way to the option that was obviously, mutually salient.',
        'Keep the two apart. Anchoring is a within-person judgment error: your own estimate gets pulled off course by something you saw. A focal point is a between-person coordination solution: multiple independent parties converge on a salient option because it is the natural place for a coordination problem to resolve, not because either side was manipulated. A round number in a negotiation can function as both at once, which is exactly why the two get confused.',
      ],
    },
    {
      heading: 'Why a starting point is cheaper than a computation',
      body: [
        'Anchoring exists for the same reason most heuristics exist: building an estimate from raw first principles is expensive, and a plausible starting point is free the moment someone hands you one. Adjustment from a reference point is a shortcut through a calculation you would otherwise have to run unaided, and most of the time a rough adjustment gets you close enough to be useful.',
        'Focal points solve a completely different structural problem: how to coordinate when explicit communication is unavailable, unreliable, or too costly to use, and both sides need to land on the same guess to succeed. Schelling’s insight was that this is not a hard problem in practice, because human environments are full of asymmetries, precedents and salient landmarks that both reasoning parties can independently notice and exploit.',
        'Put together, both mechanisms are sensible engineering rather than stupidity. A mind that refused to use any available reference point would spend enormous effort rebuilding every estimate from scratch. A negotiation that refused to settle on any salient shared option, absent explicit agreement, would rarely close at all. The cost in both cases is that the reference point does not have to be correct to do its job.',
      ],
    },
    {
      heading: 'The move: opening a gap the other side must close',
      body: [
        'The specific damage anchoring does in a negotiation comes from a well-documented pattern: people rarely build an independent counter-estimate from scratch. They adjust from the number they were just given, and the adjustment is reliably insufficient, landing closer to the anchor than an unbiased recalculation would justify.',
        'Whoever speaks the first number is not just making an offer, they are assigning everyone else’s starting line for the rest of the conversation. The final settlement then correlates more strongly with who spoke first than with the underlying value of whatever is being negotiated, which is precisely backwards from what a rational process would produce.',
        'None of this requires deception about facts, only control of sequence. The anchor does not have to be a lie. It only has to arrive before the other side has built an independent number of their own, at which point every later offer, including the counter-offer that feels like a hard-won concession, is really an adjustment from a line someone else drew first.',
      ],
      example: {
        label: 'The gap that never closes',
        body: 'Two candidates negotiate the same role at the same company. The recruiter opens with $140,000 to the first candidate, who pushes hard and settles at $165,000, pleased with the fight. The recruiter opens with $190,000 to the second candidate, who barely pushes at all and settles at $205,000. Neither figure was arbitrary to the company, both were within budget, and both candidates were equally capable. The only variable that moved the outcome by $40,000 was which sentence was spoken first.',
      },
    },
    {
      heading: 'Expertise does not close the gap',
      body: [
        'Northcraft and Neale ran the cleanest demonstration available. Real-estate agents, not students, walked through the same house with only the printed listing price manipulated between groups, then gave a professional appraisal. Their valuations moved toward the manipulated price by a wide margin, tracking the untrained comparison group almost exactly.',
        'The more striking result was what the agents said afterward: asked which factors had shaped their number, they ranked the listing price near the bottom, well behind their own inspection of the property. Training did not shrink the anchor’s pull. It only made the agents more confident that it had not happened at all.',
        'The same pattern shows up in a profession built entirely around impartial judgment: experienced judges and prosecutors, given a number they knew to be random, still shifted sentencing recommendations toward it. Legal training was not a defense against a mechanism that operates below the level anyone is ever asked to justify.',
        'Self-report is the wrong tool for detecting this in yourself or anyone else. Denying influence is not evidence of immunity, it is simply what the mechanism feels like from the inside, whether the person denying it holds a real-estate license, a law degree, or neither.',
      ],
      example: {
        label: 'Loaded dice on the bench',
        body: 'In studies run by Birte Englich and colleagues, experienced judges and prosecutors first rolled a pair of dice they had been told, and could see, were rigged to land on either a low or a high number. They were then asked to recommend a sentence for a described offense. Recommendations skewed higher after a high roll and lower after a low one, despite the roll having no connection whatsoever to the case, and despite every participant being a trained legal professional aware that dice carry no evidentiary weight.',
      },
    },
    {
      heading: 'When the anchor breaks instead of bending',
      body: [
        'Anchoring is not a flat, unconditional force. Strack and Mussweiler’s selective accessibility model explains why: the first comparative question primes memory for anchor-consistent information, which then dominates the later estimate. That priming process needs the anchor to feel like a plausible candidate answer in the first place.',
        'Push the anchor outside the range of plausibility and the mechanism can reverse. An opening figure so extreme it gets rejected as absurd does not out-pull a moderate one, it can produce a contrast effect instead, pushing the final judgment further away, or simply ending the negotiation before adjustment ever has a chance to run.',
        'Cognitive load and time pressure make the ordinary version worse, not better. Adjustment away from an anchor is effortful, deliberate work, and anything that occupies working memory or shortens the clock reduces how far anyone travels from the number they started with. A rushed negotiation stays close to whoever spoke first.',
        'Nicholas Epley and Thomas Gilovich later distinguished self-generated anchors, numbers you produce yourself as a first guess, from externally provided ones, finding the self-generated kind respond better to being told to think harder about the true value. A number someone else hands you is stickier than the tentative guess you would have picked on your own.',
      ],
    },
    {
      heading: 'The honest limits, and where focal points earn their name',
      body: [
        'Grade your confidence by which claim you are making. Classic comparative anchoring, the kind Tversky and Kahneman demonstrated, is one of the more robustly replicated findings in the behavioral sciences: the Many Labs replication projects reproduced it across a large number of independent samples, in contrast to several other famous effects from the same era that did not survive the same scrutiny.',
        'Incidental and arbitrary anchors sit on a shakier tier of the same idea. Dan Ariely, George Loewenstein and Drazen Prelec found that people’s own social security digits, written down for an unrelated reason, correlated with how much they later bid for ordinary goods. The effect is real and has been replicated, but it is smaller and more variable than classic comparative anchoring, and the weakest versions, brief or subliminal numeric priming, sit inside the wider replication problems that have hit priming research generally.',
        'Schelling’s focal points rest on a different evidentiary foundation: demonstration and game-theoretic logic more than large controlled trials, though later experimental work, notably by Judith Mehta, Chris Starmer and Robert Sugden, found people really do converge on labeled, salient options in coordination games far more often than a symmetric guess would predict. Treat this as good support for the concept, not as evidence carrying the same statistical weight as the anchoring literature.',
        'Not every number spoken first is a focal point, and not every anchor is unbeatable. A focal point requires genuine, obvious mutual salience recognized by both sides without discussion. An anchor loses its grip the moment someone builds an independent estimate before hearing it. Mistaking either shortcut for magic is how two useful concepts turn into an excuse for skipping the calculation.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'Whoever names a number first sets the entire range the rest of the conversation orbits, however implausible that number looks on its face.',
      meaning: 'Informative anchoring at work. Counter-offers are computed as adjustments from that number, not built up independently.',
    },
    {
      signal: 'Someone asks whether a value is more or less than a specific figure before asking for your actual estimate.',
      meaning: 'The exact structure of the classic anchoring manipulation: the comparison question plants the anchor before an independent judgment gets a chance to run.',
    },
    {
      signal: 'Two parties who cannot communicate still land on the same landmark, round number, or split.',
      meaning: 'A Schelling focal point, not anchoring. Neither side was dragged by exposure, both recognized the same salient solution independently.',
    },
    {
      signal: 'An expert insists a number they were shown had no effect on their professional judgment.',
      meaning: 'Self-report is unreliable here. Trained appraisers and judges have made this exact claim while their numbers moved anyway.',
    },
    {
      signal: 'Negotiators keep re-anchoring to round figures, the nearest ten thousand, the nearest five percent, rather than a computed number.',
      meaning: 'Round numbers function as focal points because both sides find them equally easy to agree on, whether or not they are analytically justified.',
    },
    {
      signal: 'An extreme opening offer gets laughed off or ends the meeting instead of shifting the final number.',
      meaning: 'The anchor exceeded the listener’s latitude of acceptance and triggered rejection or contrast rather than assimilation.',
    },
  ],
  playbook: [
    {
      move: 'Build an independent number before you hear theirs.',
      how: 'Say: “Before I respond, let me work this out from our own figures rather than starting from the one you just mentioned,” then actually run the calculation on paper.',
    },
    {
      move: 'Refuse to counter-offer against an anchor you consider absurd.',
      how: 'Say: “That number is far enough from any reasonable basis that I do not think it is useful as a starting point. Let’s begin instead from X.”',
      watchOut: 'This only works if you can supply a credible alternative on the spot. Rejecting the anchor with nothing to replace it just looks evasive.',
    },
    {
      move: 'Open with a precise, non-round figure when you want to set the frame.',
      how: 'State a number that implies calculation: “based on 340 hours of integration work across two senior engineers, our fee is $87,500,” rather than a round figure that reads as an opening haggle position.',
      watchOut: 'If challenged to show the underlying math and you cannot, the false precision costs you more credibility than a round number ever would.',
    },
    {
      move: 'Use a focal point on purpose when you need coordination, not victory.',
      how: 'Name the option that is obviously mutually salient and say why: “Let’s use the same sixty-forty split as last year’s agreement, neither of us has to defend a new number.”',
    },
    {
      move: 'Separate what moved your estimate from what you can defend out loud.',
      how: 'After any negotiation, ask yourself privately what number you saw first and whether your final position is an independent calculation or an adjustment from it. If you cannot reconstruct the calculation, assume you anchored.',
    },
    {
      move: 'When someone denies an anchor affected them, change the format instead of arguing.',
      how: 'Say: “Let’s each write our number down before either of us says one out loud.” Removing sequential exposure removes the anchoring channel without needing anyone to admit anything.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Anchoring and Schelling focal points are the same phenomenon: the first number wins either way.',
      correction: 'Anchoring is one person’s judgment dragged by exposure to an often-irrelevant number. A focal point is multiple parties independently converging on a salient option with no communication at all. They can overlap on a round number, but they come from different mechanisms and different research traditions.',
    },
    {
      misread: 'Any number thrown out first automatically becomes a powerful anchor.',
      correction: 'Anchors that are wildly implausible can be rejected outright and even produce a contrast effect. Extremity has to stay inside a believable range to pull the target toward it rather than away from it.',
    },
    {
      misread: 'Anchoring is soft, hard-to-replicate psychology, like a lot of biases from the same era.',
      correction: 'It is one of the more robustly replicated findings in the field. The Many Labs projects reproduced classic comparative anchoring across the large majority of samples tested, unlike several other famous effects from the same period.',
    },
    {
      misread: 'Because classic anchoring is solid, every anchor claim, subliminal numbers, spun wheels, random digits, is equally well established.',
      correction: 'Incidental and arbitrary anchors show real but more variable effects, and the weakest versions sit inside the broader replication problems that have affected priming research generally. Grade your confidence by which category you are citing.',
    },
    {
      misread: 'Expertise, or simply being told to ignore the anchor, removes its influence.',
      correction: 'Trained real-estate appraisers and experienced judges have both anchored on numbers they explicitly denied were influencing them. Warning people about the bias is weak protection. Changing the procedure, independent estimates before disclosure, is strong protection.',
    },
  ],
  evidence: [
    {
      source: 'Tversky & Kahneman, “Judgment under Uncertainty: Heuristics and Biases” (Science, 1974)',
      finding: 'The wheel-of-fortune experiment: participants who watched a rigged wheel land on a higher number gave substantially higher estimates for an unrelated quantity than those who saw it land low, despite knowing the wheel was random. Foundational demonstration of anchoring and adjustment.',
    },
    {
      source: 'Jacowitz & Kahneman, “Measures of Anchoring in Estimation Tasks” (1995)',
      finding: 'Tested anchoring across many different quantity-estimation questions and found the effect pervasive and consistent across content domains, establishing the standard high-anchor and low-anchor paradigm used in most later research.',
    },
    {
      source: 'Klein et al., the Many Labs replication projects (2014, 2018)',
      finding: 'Replicated a battery of classic psychology findings across many independent laboratories and samples. Anchoring was among the most consistently reproduced effects tested, in contrast to several other classic findings from the same period that did not hold up.',
    },
    {
      source: 'Northcraft & Neale, “Experts, Amateurs, and Real Estate” (1987)',
      finding: 'Real-estate agents and students appraised the same house with a manipulated listing price. Both groups’ valuations shifted toward the anchor, and the professionals ranked the listing price near the bottom of what they believed had influenced them.',
    },
    {
      source: 'Englich, Mussweiler & Strack, courtroom anchoring studies (2006 and after)',
      finding: 'Experienced judges and prosecutors gave harsher or lighter sentencing recommendations depending on a number they knew to be random, including numbers generated by a roll of dice, despite legal training and explicit denial of influence.',
      caveat: 'These studies measure recommendations in controlled exercises, not real sentencing outcomes, and effect sizes vary across replications and legal contexts.',
    },
    {
      source: 'Ariely, Loewenstein & Prelec, “Coherent Arbitrariness” (Quarterly Journal of Economics, 2003)',
      finding: 'Participants wrote down the last digits of their own social security number before bidding on ordinary goods. Higher self-generated numbers were associated with higher willingness to pay, despite having no logical connection to value.',
      caveat: 'This is the incidental-anchor category. Evidence here is real but more variable across replications than the classic comparative-anchoring paradigm above, so hold it to a lower standard of certainty.',
    },
    {
      source: 'Schelling, The Strategy of Conflict (1960), and Mehta, Starmer & Sugden, “Focal Points in Pure Coordination Games” (1994)',
      finding: 'Schelling’s informal demonstrations showed strangers independently coordinating on salient meeting points without communication. Later controlled experiments confirmed people converge on labeled or salient options in coordination games far more often than a symmetric random-choice model predicts.',
      caveat: 'A separate research tradition from anchoring: this concerns multi-party tacit coordination on a salient option, not a single person’s judgment being pulled toward an arbitrary number. Do not treat the two mechanisms as interchangeable.',
    },
  ],
  takeaways: [
    'Anchoring is a within-person judgment bias: exposure to a number drags your own estimate toward it, even when you know the number is arbitrary.',
    'Schelling focal points are a between-person coordination solution: with no communication at all, people converge on whatever option is obviously, mutually salient. Do not confuse the two.',
    'Classic comparative anchoring is one of the best-replicated findings in the behavioral sciences. Incidental and subliminal anchors are shakier, so keep your confidence proportioned to which kind you are citing.',
    'Expertise does not immunize you. Real-estate professionals and experienced judges have anchored on numbers they insisted had no effect on their judgment.',
    'Extremity is not free. An anchor that leaves the range of plausibility can be rejected outright or trigger a contrast effect instead of pulling the target toward it.',
    'The strongest defense is procedural, not willpower: build your own independent estimate, in writing, before you hear anyone else’s number.',
  ],
};
