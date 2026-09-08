import type { DeepDive } from '../../../types/curriculum';

/** #14 · Sphere 2 · Minimal Group Paradigm & In-Group Favoritism */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'You are fifteen, in a school hall in Bristol. A researcher flashes clusters of dots on a screen and asks you to guess how many. Afterwards he tells you, privately, that you are an overestimator. There is another group, the underestimators. You will never meet them, and you are not told who is in your own group either. Then you are handed a booklet of paired numbers and asked to hand out small sums of money between two other boys, identified only by a code and a group label. You cannot allocate anything to yourself. There is no prize, no contest, no history, nothing at stake for you. You will still give more to the overestimator. And on a meaningful share of the pages you will choose the option that leaves your own group with less money, because it widens the gap.',
  sections: [
    {
      heading: 'What Tajfel found, and what he did not',
      body: [
        'Henri Tajfel designed that study expecting nothing to happen. It was meant as a baseline: strip a group situation of contact, competition, history and personal stake, show that people simply split the money evenly, then add the ingredients back one at a time to find which one mattered. The baseline never held.',
        'He got consistent favouritism toward whichever label had been attached minutes earlier. Michael Billig and Tajfel later removed the last confound by telling boys outright their group came from a coin toss. The favouritism survived. And the sharpest result is the one worth memorising: offered a choice between maximum money for their own group, and less for their own group but even less for the other, a meaningful number took the second. They paid for a wider margin.',
        'Now the precision that popular retellings destroy. Tajfel found favouritism, not hatred. The boys allocated real money to the out-group, just less of it. They never tried to harm anyone and did not report disliking them. The distance between preferring to advantage your own side and wanting to damage the other is enormous, and almost every business-book version collapses it.',
        'Marilynn Brewer made the argument in 1999: in-group attachment and out-group hostility are separable systems, and the second needs ingredients the first does not — threat, real competition, moral cover, or a leader supplying one. A further result deserves to be better known. Run the same allocations with something unpleasant to distribute, and the discrimination shrinks sharply or vanishes. Giving your own side more of a good thing is easy. Imposing a cost on the other side is not.',
      ],
    },
    {
      heading: 'Why the coalition detector is cheap on purpose',
      body: [
        'A coin toss is enough because the machinery was never built to be careful. For an ancestor inside constant low-level intergroup conflict, the most decision-relevant fact about a stranger was whose side they were on. And the errors are not symmetric: treating an ally as an enemy costs a friendship, treating an enemy as an ally can cost everything. A detector facing that payoff gets tuned to fire early, on whatever cue is to hand.',
        'The critical word is available. The system is not looking for race or accent. It is looking for evidence of alliance, and it grabs whichever cue currently predicts alliance best. That sounds philosophical; it is experimental. Robert Kurzban, John Tooby and Leda Cosmides showed that automatic encoding of race in memory drops sharply once a crosscutting coalition structure becomes visible, with the new coalition rising to take its place. Race is a default proxy, not a primitive.',
        'The second half is why categories acquire emotional weight. Tajfel and John Turner built social identity theory on the observation that much of how people feel about themselves is borrowed from the groups they belong to. If your standing derives partly from your group, your group needs to compare favourably to something — not to be good, to be better. Maximising the gap becomes rational once you see that the quantity being maximised is not money but positive distinctiveness.',
      ],
      example: {
        label: 'Jerseys beat skin',
        body: 'Participants watched several people arguing, then were tested on who said what. Errors reveal what the mind is quietly sorting on: confuse two speakers and you were filing them together. By default, race showed up strongly in those confusion patterns. But when the same speakers were visibly organised into two mixed-race teams wearing different colours and disputing with each other, race encoding fell substantially within minutes while team encoding rose. Nobody was told to stop noticing race. A better predictor of alliance became available, and the machinery reallocated.',
      },
    },
    {
      heading: 'The move that does the damage: optimising the gap',
      body: [
        'One behaviour causes most of the organisational harm attributed to tribalism, and it has a name: maximum differentiation. It is accepting a worse absolute outcome for a better relative one. From the inside it does not feel like malice. It feels like competitiveness, or standards, or protecting your team.',
        'Watch how it appears. Information you would have forwarded as a matter of course does not get forwarded, because nobody decided to withhold it — sharing was simply never triggered. A fix your team already built is not offered to the other unit, because offering it costs a day and the day is not repaid. A joint proposal gets slow-walked because a shared win is worth less than a solo one. None of this requires anyone to dislike anyone.',
        'That is the real lever, and it is design rather than culture. Any structure that ranks internal units against each other — a fixed bonus pool, a forced distribution, headcount allocated comparatively, a promotion quota — converts a colleague from a resource into a competitor. Once the arithmetic is genuinely zero-sum, relative-gain behaviour is not a bias, it is correct play. So the diagnostic question is never why these teams are so tribal. It is what the scoreboard pays for: raising our number, or lowering theirs.',
      ],
      example: {
        label: 'When the curve is the problem',
        body: 'Microsoft ran a forced-distribution review system for years: every team had to sort its people onto a fixed curve, a set share rated top and a set share rated bottom, regardless of the team’s absolute performance. Former employees described the consequence in interviews afterwards. A peer’s strong quarter was not neutral to you, it was expensive, because the slots were finite. Helping became costly and the sharpest competition ran inside the building. Microsoft dropped the system in 2013. The point is not that people behaved badly. It is that they behaved correctly.',
      },
    },
    {
      heading: 'Who is not protected',
      body: [
        'Shanto Iyengar and Sean Westwood had participants award a scholarship between two résumés carrying partisan cues. Partisan discrimination was substantial, and in their data exceeded discrimination by race. More uncomfortably, political knowledge did not damp it: the people who followed politics most closely, who could give you the best account of why tribal reasoning is bad, discriminated more. Sophistication supplied better reasons for the choice, not better scrutiny of it.',
        'Hiring shows the same shape. Lauren Rivera’s fieldwork inside elite law, banking and consulting firms found evaluators weighting shared leisure activities, shared self-presentation and shared background heavily, and experiencing this as an assessment of quality. Nobody said they picked him because he was like them. They said he had presence, or judgement, or would be good with clients. The vocabulary of expertise is what lets an affinity judgement be reported as a competence judgement.',
        'This is also why the standard corporate remedy underperforms. Alexandra Kalev, Frank Dobbin and Erin Kelly found in decades of workforce data that mandatory diversity training was among the weakest interventions on managerial diversity, while accountability structures and mentoring did considerably better. Calvin Lai and colleagues found implicit-bias interventions could shift the measure immediately but not at a delayed retest. Categorisation runs before you get a vote, and your intelligence arrives downstream, writing the justification.',
      ],
    },
    {
      heading: 'The switches that turn it up and down',
      body: [
        'Categorisation is automatic. Escalation is not. That gap is where the useful work happens, and the conditions are reasonably well mapped.',
        'It escalates with real competition for something finite — Muzafer Sherif’s realistic conflict argument, sound as theory whatever you make of his camp studies. It escalates when membership is common knowledge on both sides: Toshio Yamagishi showed much of the measured favouritism collapses when the recipient cannot know the allocator’s group, and a large meta-analysis by Daniel Balliet, Junhui Wu and Carsten De Dreu found the same moderator across the cooperation literature. That points at a partly reputational engine, alongside identity. It also escalates with status threat, zero-sum framing, and leaders who keep the boundary salient because it is useful to them.',
        'It de-escalates through a short list, in rough order of power. Change the scoreboard so relative gain stops paying. Create genuine interdependence: a shared deadline, a shared budget, a target neither unit can hit alone. Recategorise upward, the mechanism behind Samuel Gaertner and John Dovidio’s common in-group identity model — the boundary is nested inside a larger one that matters more, not erased. Cross the categories so project membership cuts across office or function. And sustain contact under cooperation rather than proximity; Pettigrew and Tropp’s meta-analysis of several hundred studies found contact reliably reduces prejudice. Only one item on that list is a communication move. That ratio is the lesson.',
      ],
      example: {
        label: 'Robbers Cave, and why to stop citing it as proof',
        body: 'Sherif’s 1954 Oklahoma camp study is the origin of the superordinate-goal idea: twenty-two boys split into Rattlers and Eagles, a tournament that produced raids and flag-burning, reconciliation only once the groups faced problems neither could solve alone. Great story, poor experiment. No control group, heavily pre-screened boys, and researchers embedded as camp staff who, as Gina Perry’s archival work documents, actively provoked and steered the conflict. Most damningly, an earlier 1953 run at Middle Grove failed — the boys refused to turn on each other and blamed the adults — and went unpublished. Use it as illustration, not evidence.',
      },
    },
    {
      heading: 'The honest limits',
      body: [
        'Take the minimal-group result for what it is. It shows how astonishingly little is needed to draw a boundary: a coin toss, a shirt colour, a floor of a building. It does not show that groups naturally escalate to hostility, and the literature cuts against that reading. The discrimination is asymmetric between rewards and burdens, it weakens when membership is not mutually visible, and the participants were allocating trivial sums to strangers they would never meet.',
        'There is also a live interpretive dispute worth carrying. One reading is that favouritism flows from identity: the group is part of the self, so advantaging it advantages you. The other is that it flows from expected reciprocity: you favour in-group members because they are the people most likely to return it, and the effect largely disappears once that expectation is removed. Both do real work, and the mix probably varies with context. Anyone presenting either as settled is simplifying.',
        'The most common practical misapplication is not naivety, it is over-diagnosis. Once you have the concept, every disagreement between two units starts to look tribal. Usually it is not. Two divisions fighting over one headcount requisition are reading a genuinely zero-sum situation accurately. So the order of operations is fixed: look at the incentive map first. Only if the structure is genuinely non-rival and the conflict persists anyway have you found the psychology rather than a rational response to bad design.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'A team accepts a worse absolute outcome to stop a sister team from looking good.',
      meaning: 'Maximum differentiation. Somewhere in the system relative position pays better than absolute performance. Find that mechanism — it is doing the work, not the personalities.',
    },
    {
      signal: 'Information stops crossing a boundary without anyone ever deciding to withhold it.',
      meaning: 'Coalition sorting needs no decision. The default becomes share inside, forward outside — and forwarding is the step that quietly never happens.',
    },
    {
      signal: 'The word “we” narrows mid-meeting, from the company to the function to the team.',
      meaning: 'The salient category just moved. Whoever moved it has redefined who counts as a stakeholder and who counts as an obstacle.',
    },
    {
      signal: 'A candidate is rejected on fit, polish, or how they would land with the team.',
      meaning: 'Cultural matching. Fit is frequently a report of similarity to the evaluator, translated into the vocabulary of competence on the way out.',
    },
    {
      signal: 'Someone describes the other side’s motives in confident detail, having spoken to nobody on it.',
      meaning: 'Out-group homogeneity. The other side is modelled as a single agent with a single intention, which is never true and always convenient.',
    },
    {
      signal: 'A new badge appears — a team name, a channel, a nickname for the other lot, a hoodie.',
      meaning: 'Boundaries are being drawn before anyone decides to draw them. The badge is not decoration; it is the cue the detector will use from now on.',
    },
  ],
  playbook: [
    {
      move: 'Change the scoreboard before you make the speech.',
      how: 'Say it as arithmetic, not values: “Both teams are measured on the same number this quarter — total conversion, not our share of it. If one of us wins and the company loses, neither of us gets paid.”',
      watchOut: 'If the measurement does not actually change, this reads as theatre and costs you the credibility you need next time.',
    },
    {
      move: 'Manufacture genuine interdependence, not a shared slogan.',
      how: 'Name a target neither unit can hit alone: “Neither of us ships this alone. I need one person from each side accountable for the same date, with the same consequence.”',
      watchOut: 'A superordinate goal with no shared budget, deadline or blame is a poster. It has to be real enough that one side can be hurt by the other side’s failure.',
    },
    {
      move: 'Cross the categories in how you staff.',
      how: 'Build teams along a dimension that cuts the existing boundary: “This is organised by discipline, not by office. Two from each site on every workstream.” Everyone now holds a membership on both sides of the old line.',
    },
    {
      move: 'Convert “fit” into a written, testable claim.',
      how: '“Say the fit concern as a behaviour we could observe in the first ninety days. If we cannot write it that way, we score them on the competencies we agreed before we met anybody.”',
      watchOut: 'Never phrase it as an accusation of bias — that triggers defence and ends the conversation. The request for specificity does the work on its own.',
    },
    {
      move: 'Replace your model of the other side with testimony from it.',
      how: '“Before we act on what London wants, let us get somebody from London to say it in their own words.” You are refusing to let a caricature stand in as evidence.',
      watchOut: 'This backfires if the invited person is outnumbered and put on the spot. Get the position in writing first, or bring two of them.',
    },
    {
      move: 'Name the real constraint instead of the tribalism.',
      how: 'When the conflict is genuinely zero-sum, say so: “There is one requisition and two teams that need it. I will not pretend it is a communication issue. Here is how we decide it, and what the losing side gets instead.”',
      watchOut: 'Claiming there is no conflict when there is one loses everybody who can do arithmetic. They correctly conclude you are managing feelings rather than the situation.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Tajfel proved that arbitrary categories produce hostility within minutes.',
      correction: 'He proved they produce favouritism. The boys gave the out-group real money, just less of it, and made no attempt to harm anyone. Evidence for spontaneous out-group hostility from bare categorisation is much weaker, and it largely evaporates when the thing allocated is a burden rather than a reward. Hostility needs an added ingredient: competition, threat, or a leader supplying a grievance.',
    },
    {
      misread: 'Robbers Cave is the proof that competition breeds hostility and superordinate goals cure it.',
      correction: 'Treat it as illustration, not evidence. No control group, pre-screened boys, researchers embedded as staff who actively provoked the conflict, and an unpublished earlier run at Middle Grove where the boys refused to turn on each other and blamed the adults. The superordinate-goal principle has independent support from later work; the camp is not where it comes from.',
    },
    {
      misread: 'The fix is a values statement and a mandatory training day.',
      correction: 'Kalev, Dobbin and Kelly found mandatory diversity training among the weakest interventions in real workforce data, while accountability structures and mentoring performed considerably better. Lai and colleagues found implicit-bias interventions shift the measure briefly without surviving a delayed retest. Structure outperforms exhortation by a wide margin.',
    },
    {
      misread: 'Senior, well-educated, well-intentioned people have grown out of this.',
      correction: 'Iyengar and Westwood found partisan discrimination that rose rather than fell with political knowledge. Rivera found cultural matching at the top of the professional labour market. Sophistication mostly supplies better vocabulary — judgement, presence, commercial instinct — for a decision made on similarity.',
    },
    {
      misread: 'Friction between two units is tribalism and should be handled as a psychological problem.',
      correction: 'Most of it is an accurate reading of a rival incentive. Check what is finite and who is ranked against whom before reaching for the psychology. Diagnosing a real budget fight as tribalism tells people who are right that you have not understood them, and costs you the standing to fix the structure causing it.',
    },
  ],
  evidence: [
    {
      source: 'Tajfel, Billig, Bundy & Flament (1971); Tajfel, Scientific American (1970)',
      finding: 'The Bristol minimal-group experiments. Boys categorised on trivial grounds — dot-estimation, or a stated preference for Klee over Kandinsky — allocated more to anonymous in-group members, despite never being able to allocate to themselves. A notable share chose maximum difference over maximum in-group profit.',
      caveat: 'The allocation matrices have been criticised for demand characteristics: the response format makes favouritism an obvious available strategy, and even-splitting was also common. The effect replicates widely, but magnitude depends heavily on matrix design.',
    },
    {
      source: 'Billig & Tajfel (1973)',
      finding: 'Separated categorisation from similarity by telling participants explicitly that groups were assigned at random. Favouritism persisted, establishing that the act of categorising is sufficient and perceived similarity is not required.',
    },
    {
      source: 'Brewer, “Ingroup Love or Outgroup Hate?” (1999)',
      finding: 'Argues in-group attachment and out-group hostility are separable systems with different causes. In-group positivity arises readily from categorisation alone; hostility requires threat, competition over finite resources, moral justification or leadership framing.',
    },
    {
      source: 'Mummendey, Otten and colleagues on positive-negative asymmetry (1990s)',
      finding: 'Minimal-group discrimination is robust when participants distribute rewards, but shrinks sharply or disappears when they distribute aversive outcomes such as unpleasant noise or tedious work. Favouring your own side with a benefit is easy; imposing a cost on the other side is not.',
    },
    {
      source: 'Kurzban, Tooby & Cosmides, PNAS (2001)',
      finding: 'Using a memory-confusion paradigm, showed automatic encoding of race falls substantially once a crosscutting coalition structure is made visible, while encoding of the new coalition rises. Implies the machinery tracks alliance, with race a default proxy a better cue can displace.',
    },
    {
      source: 'Yamagishi and colleagues; Balliet, Wu & De Dreu meta-analysis (2014)',
      finding: 'In-group favouritism in cooperation is reliable but strongly moderated by whether membership is common knowledge. When the recipient cannot know the allocator’s group, much of the effect disappears — pointing at expected reciprocity and reputation as a large part of the engine, alongside identity.',
    },
    {
      source: 'Sherif, Robbers Cave (1954, published 1961)',
      finding: 'Competition over scarce resources between two boys’ camp groups produced hostility that mere contact did not resolve, while cooperation on goals neither group could achieve alone did resolve it.',
      caveat: 'Seriously compromised as evidence: no control group, twenty-two pre-screened boys, researchers embedded as camp staff who provoked and steered the conflict, and an unpublished earlier run at Middle Grove in 1953 where the boys refused to turn on each other (documented in Gina Perry, The Lost Boys, 2018). Cite later work for the superordinate-goal principle instead.',
    },
    {
      source: 'Iyengar & Westwood, American Journal of Political Science (2015)',
      finding: 'In a scholarship-allocation task using résumés carrying partisan cues, partisan discrimination was substantial and exceeded discrimination on race in their data. Political knowledge and engagement did not reduce it.',
    },
  ],
  takeaways: [
    'A coin toss is enough to produce favouritism. It is not enough to produce hostility — that needs competition, threat, or a leader supplying one.',
    'The damaging behaviour is maximum differentiation: accepting a worse absolute outcome for a better relative one. From the inside it feels like competitiveness.',
    'Look at the scoreboard before the culture. Most workplace tribalism is a ranking system doing exactly what it was built to do.',
    'The machinery tracks alliance, not identity. That is why jerseys can override race in minutes, and why staffing beats speeches as a lever.',
    'Expertise does not protect you; it supplies better vocabulary — fit, judgement, presence — for a decision made on similarity.',
    'Over-diagnosis is the common failure. Two teams fighting over one budget line are being accurate, not primitive. Fix the arithmetic.',
  ],
};
