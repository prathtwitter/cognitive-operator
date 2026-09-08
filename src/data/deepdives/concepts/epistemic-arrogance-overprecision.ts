import type { DeepDive } from '../../../types/curriculum';

/** #07 · Sphere 1 · Epistemic Arrogance & Overprecision */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'Give a range wide enough that you are 90 percent sure it contains the answer. The wingspan of a Boeing 747 in metres. The year Genghis Khan died. Last year\'s revenue at Nestle. Three ranges, and if you are calibrated you should expect to miss about one. Almost nobody misses one. Across decades of studies using questions exactly like these, people asked for 90 percent intervals land inside them closer to half the time, and in one of the earliest demonstrations, people asked for 98 percent intervals were surprised roughly forty times in a hundred. Notice what did not happen. You were not wrong about the facts. You were wrong about the width, and you can get the width wrong on a subject you genuinely know.',
  sections: [
    {
      heading: 'Three different errors wearing one name',
      body: [
        'Don Moore and Paul Healy split what people lazily call overconfidence into three things that behave differently. Overestimation is thinking your absolute performance was better than it was. Overplacement is thinking you are better than other people. Overprecision is excessive certainty that your beliefs are accurate — too narrow an interval around what you know.',
        'They do not travel together. In the same person on the same task they can point opposite ways: on hard tasks people overestimate their own score while underplacing themselves against others, and on easy tasks it reverses. So "the room was overconfident" is not yet a claim. Until you name which of the three you mean, it predicts nothing.',
        'That matters for the story people carry into meetings. The popular Dunning-Kruger claim — the least competent are the most certain — is an overplacement claim, and the weakest leg of the three. Its signature graph plots self-assessment against bins of actual score, and binning by the same noisy variable you are plotting guarantees regression to the mean: the bottom bin holds people who were partly unlucky, whose true ability sits above their measured score, so any loosely accurate self-estimate looks inflated there. Krueger and Mueller showed noise plus a better-than-average tendency reproduces much of the pattern, Nuhfer and colleagues reproduced the shape from random numbers, and Gignac and Zajenkowski found little left under methods that avoid the artefact.',
        'Two corrections finish it. Burson, Larrick and Klayman showed the direction flips with task difficulty — on hard tasks it is the top performers who underplace — so what is tracked is perceived difficulty, not incompetence-blindness. And the popular inversion is absent from the original data: poor performers rated themselves lower than good performers did. They were never the most confident, only the least accurate about the gap. What survives is defensible but weaker: judging your own work draws on much the same skill as doing it.',
      ],
      example: {
        label: 'Why overprecision is the leg to stand on',
        body: 'Overprecision is the strongest member of the family for a structural reason. It needs no comparison to other people, so there is no better-than-average confound. It needs no binning by measured performance, so there is no regression artefact. You state an interval, the world produces an answer, you count hits, and you compare the hit rate against the confidence you declared yourself. If you said 90 percent and land inside 45 percent of the time, no interpretation is required and nobody else is involved. That is why it holds up across finance, medicine and forecasting while the relative-comparison findings keep getting reanalysed.',
      },
    },
    {
      heading: 'Confidence is a feeling, and it pays',
      body: [
        'The sense of certainty tracks how easily a conclusion arrived, not how well it is supported. A story that assembles quickly, with no friction and no visible gaps, produces the same feeling of knowing as a conclusion built from evidence. That is why a shallow model feels more certain than a deep one: the expert has more considerations in view, and each one is a place the answer could go wrong.',
        'Then the part that makes this organisational rather than personal. Anderson, Brion, Moore and Kennedy found that overconfident individuals attained higher status in groups and were rated more competent by peers, with the effect carried by behavioural cues — how they spoke, how quickly, how much. Confidence buys status whether or not accuracy comes with it.',
        'So overprecision is frequently not a private slip but a rational response to an incentive. A range reads as hedging; a date reads as ownership. The engineer who says the integration lands between early October and mid-November loses the room to the one who says October the twelfth, and both know it before either speaks. Which is why exhortation fails harder here than anywhere else — asking people to be humbler asks them to pay a status cost to give you a better number.',
      ],
    },
    {
      heading: 'The point estimate is where the money goes',
      body: [
        'The damaging move is collapsing a distribution into one number and then planning against the number. Everything downstream inherits the collapse. Budgets get sized to the point estimate, dependencies get scheduled against each other\'s point estimates, and slack that should have been allocated deliberately ends up hidden inside individual tasks where nobody can see or pool it.',
        'The best evidence comes from people paid to be numerate. Ben-David, Graham and Harvey collected thousands of CFO forecasts over roughly a decade, asking each for an 80 percent confidence interval on the following year\'s stock market return. Realised returns fell inside them only around a third of the time — and the CFOs with the narrowest intervals relative to their accuracy ran more aggressive investment and financing policies. Russo and Schoemaker found the same shape in managers: most landed only three to six of ten inside ranges they had declared should be right nine times in ten.',
        'This destroys plans rather than merely embarrassing forecasters because the errors are one-sided. Things do not finish early nearly as often as they finish late, so a point-estimate plan is wrong in the same direction on almost every line, and the misses compound. The tell is the absence of explicit slack: if you cannot find the buffer, there is no buffer — only twenty small hidden ones, each defended privately and none of them poolable.',
      ],
      example: {
        label: 'The arithmetic behind the launch date',
        body: 'Ten workstreams must complete before a launch. Each owner is genuinely confident and right to be: each has a 90 percent chance of hitting their date. Everyone reports 90 percent and it feels like a well-run programme. If the streams are independent, the chance all ten land is 0.9 to the tenth power — about 35 percent. Nobody was overconfident about their own piece. The overprecision was in treating ten separate 90 percents as though they aggregated to near certainty. Real dependencies are correlated, which usually makes it worse, because the problem that delays one stream tends to delay three.',
      },
    },
    {
      heading: 'Expertise fixes the wrong one',
      body: [
        'Expertise reliably reduces overestimation. Practice teaches you roughly how well you do at a task, and experienced people are decent at predicting their own hit rate. Expertise barely touches overprecision. That asymmetry is the entire executive problem, because the errors that cost real money are width errors, not score errors.',
        'Oskamp gave clinicians a case in four instalments, asking after each for a diagnosis and a confidence rating. Accuracy rose in the first block and then flattened. Confidence kept climbing throughout. More information reliably increases the feeling of understanding; it increases accuracy only when it is diagnostic, and most additional information is not. Tetlock\'s two-decade study of political and economic experts found forecasts that barely beat simple extrapolation rules, with the most confident and most publicly visible among the less accurate.',
        'There is a specific way that knowing this concept makes people worse at it. Dunning-Kruger has become a term of abuse, deployed outward at whoever is annoying in the meeting and almost never inward — because the claim itself says you would not be able to see it in yourself. That structure makes it useless as a tool and excellent as a weapon. Overprecision has the opposite structure: it is a measurement you can run on yourself this afternoon and get an answer you cannot argue with.',
      ],
    },
    {
      heading: 'What actually moves calibration',
      body: [
        'Elicitation format is the largest free lever. Soll and Klayman found that asking for the two bounds as separate judgements, rather than for a range, meaningfully reduces overprecision — generating a low value and a high value forces two searches instead of one. Haran, Moore and Morewedge went further, handing people a set of ranges, asking for a probability on each, and deriving the interval from those. Intervals built that way are substantially better calibrated.',
        'That is more interesting than a technique. If changing the question moves measured overprecision this much, part of the effect is a response artefact rather than a deep property of belief — and artefacts are cheap to fix. The missing operation is generating counter-scenarios: producing a range means searching once, finding a plausible answer and fencing it, never searching for the world where the answer sits outside the fence.',
        'The other structural lever is feedback design. Weather forecasters are famously well calibrated, and not because meteorologists are humble. They make the same class of judgement repeatedly, get an unambiguous answer within a day, and are scored on it. Almost no executive judgement has that structure, which is why calibration does not accumulate from experience alone and has to be manufactured. The training effect is real: the Good Judgment Project found a short probabilistic-reasoning module improved accuracy, with the gain persisting across the year.',
      ],
    },
    {
      heading: 'The honest limits',
      body: [
        'Calibration is a property of beliefs, not of communication. A leader can hold a distribution privately and commit to a single number publicly, and that is not miscalibration — teams cannot execute against a probability distribution. The failure begins when the public number replaces the private distribution and nobody is holding the range anymore.',
        'Underconfidence is real and less discussed. On easy and familiar tasks people underestimate their own performance. More importantly for anyone hiring or promoting, there are well-documented systematic differences in how confidently people describe equivalent work — so reading stated confidence as evidence of competence imports a measurement error, in a direction that is not random across groups.',
        'There is a class of problem where better intervals are the wrong ambition. Where the distribution is unstable or fat-tailed — the domain Taleb works in — an interval derived from history is false comfort however carefully elicited, because the observations that matter have not happened yet. There the useful move is a payoff structure that survives being wrong.',
        'The scepticism cuts at the critics too: Juslin, Winman and Olsson argued much of the hard-easy effect is itself a product of regression and item selection. What survives is narrow, and worth holding precisely because it is narrow. State a 90 percent interval, count the hits, and if you land inside far less than nine times in ten, that is a measurement rather than an interpretation. Run it on yourself. Do not run Dunning-Kruger on anyone.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'A complex multi-party delivery is quoted as a single date with no range and no stated buffer.',
      meaning: 'Overprecision in its purest form. The distribution was collapsed before anyone saw its shape, and the slack is now hidden inside individual tasks.',
    },
    {
      signal: 'Someone becomes more certain as information arrives, without the estimate itself moving much.',
      meaning: 'Confidence is tracking volume of information rather than diagnosticity. Accuracy plateaus early; the feeling of knowing does not.',
    },
    {
      signal: 'The person with the least exposure to the domain has the cleanest, simplest account of it.',
      meaning: 'Fluency. A shallow model has fewer moving parts and so fewer visible places to be wrong, which feels like clarity.',
    },
    {
      signal: 'Several owners each report high confidence in their own piece and nobody has multiplied the numbers.',
      meaning: 'Aggregation blindness. Ten independent 90 percents come to about 35 percent, and correlated dependencies make it worse.',
    },
    {
      signal: 'Ranges are treated as weak ownership, and whoever narrows theirs gets visible approval.',
      meaning: 'The overprecision is institutional, not personal. You are watching the incentive that produces it operate in real time.',
    },
    {
      signal: 'Someone accuses another person of Dunning-Kruger.',
      meaning: 'Almost always a status move rather than an observation. The claim is contested, unmeasurable in the moment, and impossible to apply to oneself.',
    },
  ],
  playbook: [
    {
      move: 'Ask for the two bounds separately, never for a range.',
      how: 'Say: "Give me a number you would be genuinely surprised to come in under. Now separately, a number you would be surprised to come in over." Two searches produce a better-calibrated interval than one search with a fence around it.',
      watchOut: 'Do not let them state a midpoint first. Once a central number exists both bounds anchor to it and you are back to one search.',
    },
    {
      move: 'Run the outside-the-range question.',
      how: '"What would have to be true for this to land outside your range?" If the answer comes quickly and is plausible, the range is too narrow. This supplies the counter-scenario search that natural estimation skips.',
    },
    {
      move: 'Multiply the confidences out loud.',
      how: 'When several owners report high confidence in a dependent chain, do the arithmetic in the room. "Six of you said 90 percent. That is a bit over half for all six landing, assuming independence — and they are not independent."',
      watchOut: 'Do it as shared discovery, not a gotcha, or everyone else quietly widens their private estimate and narrows their public one.',
    },
    {
      move: 'Change what a range costs before you ask for one.',
      how: 'Say it explicitly: "I am asking for a range and I will hold you to the range, not the midpoint. If the outcome lands inside it, you were right." Then honour that in the review, visibly, at least once.',
    },
    {
      move: 'Build a scoring loop for a judgement you make often.',
      how: 'Pick one repeated forecast — quarterly volume, deal close, hiring timeline. Record a probability and a date in writing every time, and review the set quarterly.',
      watchOut: 'Score the calibration, not the outcome. Punishing a well-calibrated forecast that lost teaches people to forecast what you want to hear.',
    },
    {
      move: 'Take the measurement on yourself, first and visibly.',
      how: 'Answer ten 90 percent interval questions where the truth is checkable, then report your hit rate to the team. Doing it yourself converts the topic from an accusation into a shared instrument.',
    },
  ],
  commonMisreads: [
    {
      misread: 'The least competent people are the most confident.',
      correction: 'Not in the original data. Poor performers rated themselves lower than strong performers did — they were simply far less accurate about the size of the gap. The popular inversion is a misreading of the graph, not a finding.',
    },
    {
      misread: 'The Dunning-Kruger effect is a solid, settled result.',
      correction: 'The signature graph is substantially reproducible from regression to the mean plus a better-than-average tendency, and has been generated from random numbers. The direction also reverses on hard tasks. A weaker version survives — self-assessment draws on the same skill as performance — but it will not carry the weight people put on it.',
    },
    {
      misread: 'Overconfidence is one thing that experience gradually cures.',
      correction: 'It is three dissociable things. Experience reliably reduces overestimation and leaves overprecision largely intact, which is why highly experienced professionals still produce intervals that are far too narrow.',
    },
    {
      misread: 'Expressing uncertainty is weak leadership.',
      correction: 'Calibration concerns your beliefs; commitment concerns your communication. You can run an internal plan against a distribution and still commit publicly to a date. The failure is when nobody anywhere is holding the range.',
    },
    {
      misread: 'Awareness of overconfidence reduces it.',
      correction: 'People who know the literature produce intervals barely wider than people who do not. What measurably moves calibration is changing the elicitation format, forcing counter-scenarios, and building a scored feedback loop.',
    },
  ],
  evidence: [
    {
      source: 'Moore & Healy (2008), "The Trouble with Overconfidence"',
      finding: 'Separates overestimation, overplacement and overprecision and shows they dissociate — on hard tasks people overestimate their own score while underplacing themselves against others, and the pattern reverses on easy tasks.',
    },
    {
      source: 'Alpert & Raiffa (1969, published 1982)',
      finding: 'People asked for 98 percent confidence intervals — implying a two-in-a-hundred surprise rate — were surprised roughly forty times in a hundred. The canonical demonstration that stated confidence and actual hit rate come apart.',
    },
    {
      source: 'Ben-David, Graham & Harvey (2013), "Managerial Miscalibration"',
      finding: 'Thousands of CFO forecasts of one-year market returns with 80 percent intervals. Realised returns fell inside them only around a third of the time, and greater miscalibration was associated with more aggressive corporate investment and financing policy.',
    },
    {
      source: 'Kruger & Dunning (1999), "Unskilled and Unaware of It"',
      finding: 'Bottom-quartile performers on grammar, logic and humour tasks placed themselves well above their actual percentile, and improved their self-assessment after training that improved the underlying skill.',
      caveat: 'Contested. The signature pattern is substantially reproducible from regression to the mean plus a better-than-average tendency (Krueger & Mueller, 2002), has been generated from random numbers (Nuhfer and colleagues), and largely disappears under methods built to avoid the artefact (Gignac & Zajenkowski, 2020). The popular claim that the least competent are the most confident is not in the original data. The weak version — self-assessment draws on the same skill as performance — is the most that survives.',
    },
    {
      source: 'Burson, Larrick & Klayman (2006), "Skilled or Unskilled, but Still Unaware of It"',
      finding: 'Miscalibration in relative comparisons is driven by perceived task difficulty rather than incompetence. On hard tasks it is the strong performers who underplace themselves — the opposite of what the popular account predicts.',
    },
    {
      source: 'Oskamp (1965), "Overconfidence in Case-Study Judgment"',
      finding: 'Clinicians received case material in stages. Accuracy rose early then flattened while stated confidence kept climbing with each instalment. More information reliably produces more certainty, not more accuracy.',
      caveat: 'A small sample by modern standards, though the pattern has been reproduced elsewhere — Hall, Ariss & Todorov (2007) with basketball predictions. Treat the shape as robust and the original numbers as illustrative.',
    },
    {
      source: 'Soll & Klayman (2004); Haran, Moore & Morewedge (2010)',
      finding: 'Overprecision falls substantially when the two bounds are elicited as separate judgements rather than as a range, and falls further when people assign probabilities across a set of ranges and the interval is derived from those.',
      caveat: 'That format moves the effect this much implies part of measured overprecision is an elicitation artefact rather than a deep property of belief. Operationally good news, but single-format estimates of how overconfident people are should not be taken literally.',
    },
    {
      source: 'Tetlock, Expert Political Judgment (2005); the Good Judgment Project',
      finding: 'Across roughly two decades of expert forecasts, accuracy barely beat simple extrapolation rules, and the most confident and most publicly visible experts were among the less accurate. The follow-on tournament work found a short probabilistic-reasoning module improved accuracy, with the gain persisting across the year.',
    },
  ],
  takeaways: [
    'Overconfidence is three separable errors. Name which one you mean — overestimation, overplacement or overprecision — or you have not made a claim.',
    'Overprecision is the leg to stand on: no comparison to others, no binning by performance, no artefact. You state 90 percent, you count hits, the number answers you.',
    'The popular Dunning-Kruger story is largely a statistical artefact of regression to the mean, and the least competent were never the most confident in the original data.',
    'Experience cures overestimation and leaves overprecision intact, which is why senior expert forecasts still arrive with intervals far too narrow.',
    'Ask for the two bounds as separate questions, then ask what would have to be true to land outside. Format does more for calibration than awareness ever will.',
    'Overprecision is usually an incentive, not a defect. Until a range is visibly rewarded over a date, you will keep being given dates.',
  ],
};
