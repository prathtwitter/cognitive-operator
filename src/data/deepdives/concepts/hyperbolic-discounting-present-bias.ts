import type { DeepDive } from '../../../types/curriculum';

/** #31 · Sphere 4 · Hyperbolic Discounting & Present Bias */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'Ask someone whether they would rather have $100 today or $110 in a week, and a striking number choose the $100 right now. Ask the same person to choose between $100 in a year and $110 in a year and one week — the identical extra week of waiting, just moved twelve months down the calendar — and most switch straight to the $110. The arithmetic did not change. The length of the wait for the extra $10 did not change. The only thing that moved was whether “today” was one of the two options on the table, and that single fact is worth more to most people’s brains than an entire extra week of a guaranteed ten percent return.',
  sections: [
    {
      heading: 'A discount curve with a kink in it, not just a steep slope',
      body: [
        'The term gets used loosely to mean “people are impatient.” That’s not the precise claim, which is about the shape of the discounting function: preference reversals. An exponential discounter — the classic baseline — applies the same rate to every unit of delay, no matter when it starts, so their ranking of two future dates never flips; a plan liked in January is still liked in December. A present-biased discounter applies an extra penalty specifically to anything not happening right now, and ordinary discounting after that. The signature isn’t steepness — it’s the kink between now and not-now.',
        'The popular name overstates its own literalism. The truly hyperbolic functional form traces to animal-choice research and George Ainslie’s clinical theorizing on impulsiveness from the 1970s onward, and is mathematically awkward inside standard savings models. What David Laibson formalized in 1997, adapting a structure Phelps and Pollak had introduced decades earlier for an unrelated question, is the quasi-hyperbolic “beta-delta” model: one parameter for ordinary discounting, a second that knocks down anything not happening immediately.',
        'The two labels get used interchangeably, and for most purposes that costs nothing — both predict the same pattern: plans made in advance get abandoned once the tempting option becomes “now.” But if a claim about the exact shape of someone’s preferences ever rides on the word “hyperbolic,” it is worth asking which version is meant. The literal hyperbola and the two-parameter approximation are different objects that happen to agree on the cases most people care about.',
      ],
    },
    {
      heading: 'Why discounting the future hard was the right call, once',
      body: [
        'In an environment with real mortality risk and no institution able to enforce a future promise, a bird in hand was close to the whole of rational strategy. A promised reward next season carried a genuine chance of never arriving — you or the promiser could die, the food could spoil, a rival could take it first. Weighting the present heavily wasn’t a bug; it was close to the correct response to a world where “later” carried a real chance of resolving to “never.”',
        'The catch is what modern commitments look like. A vested pension, a compound-interest account, a court-enforceable contract — delayed payoffs with near-zero non-delivery risk, protected by institutions rather than a promiser’s goodwill — essentially never existed for most of human history. The ancestral shortcut, discount the future hard because it might not happen, keeps firing by default on rewards that carry almost none of that risk, which is exactly where it stops being adaptive.',
        'This is the seed of a complication this deep dive returns to at the end: some of what looks like present bias really is legacy machinery misfiring on a safe context. But some of it is still correctly tracking real uncertainty — an unfamiliar counterparty, an unstable employer, an untested contract — and there, preferring the safe, immediate option isn’t a bias in need of correction. It’s the model working as intended.',
      ],
    },
    {
      heading: 'The move: your plan was made by someone who won’t be there to keep it',
      body: [
        'The operational failure has a name: dynamic inconsistency. People plan constantly, often well — the failure is that the plan is authored by a version of them not present-biased about this decision, because the tempting option is still comfortably future for the planner. It then has to be executed by a later version of the same person, for whom the option has become “now” and just acquired the weighting the planner never had to fight. The executor holds the only vote that counts.',
        'The sharpest illustration of why this matters beyond diets and gym visits is a puzzle pure patience can’t explain: households that carry expensive, revolving credit-card debt while holding untouched, low-yield retirement savings. Ordinary exponential logic says this shouldn’t happen — it’s strictly better to draw down the savings and erase the high-interest debt. The quasi-hyperbolic model resolves the puzzle instead of denying it.',
        'O’Donoghue and Rabin’s sophisticated-versus-naive distinction explains why the resolution rarely happens on its own. A naive discounter plans assuming next month’s self will simply follow it, is surprised when that self doesn’t, and never builds a defense. A sophisticated discounter predicts the future self will also be present-biased and pre-commits now, while cold, in a way the future hot self can’t undo — an automatic transfer, a non-refundable deposit, a public commitment.',
      ],
      example: {
        label: 'Why the debt and the savings coexist',
        body: 'A household carries credit-card debt at a high rate while its retirement account sits untouched, earning far less than the card charges. A purely patient planner would draw down the account to erase the debt and come out ahead. The household doesn’t, and isn’t confused about the rates — it can state both correctly. The account is illiquid on purpose: a penalty and delay stand between the present-biased self and the money. The card has no such friction, which is why its balance keeps growing. The household is running two selves with two discount curves, and has guarded the one that’s actually vulnerable.',
      },
    },
    {
      heading: 'Sophistication buys you a partial, not a full, correction',
      body: [
        'Financially literate people aren’t protected. DellaVigna and Malmendier’s gym-contract research is the sharpest demonstration: people who chose a flat membership over pay-per-visit, predicting they’d attend enough to justify it, went on to attend at a rate that made pay-per-visit objectively cheaper — and many kept paying for months after their last visit rather than cancelling. This isn’t a sample that can’t do arithmetic; gym members skew toward the demographic that should be best at it.',
        'Awareness doesn’t fully fix this because most people are neither fully naive about their own future present bias nor fully sophisticated about defending against it — they’re partially naive. They know, abstractly, that they sometimes give in to temptation, but underestimate how often, which is exactly enough self-knowledge to justify signing up for the flat-fee plan “because this time will be different,” and not enough to build a real defense against the self that shows up on a rainy Tuesday.',
        'A counterintuitive result in the O’Donoghue and Rabin framework: partial self-awareness can produce more procrastination than full naivete or full sophistication, because it convinces you a future deadline will get handled — “I know how I am, I’ll plan for it” — without producing the commitment device that makes the plan real. Half-knowledge can be worse than none, when used to justify inaction instead of building a binding structure.',
        'The pattern is familiar from elsewhere in behavioral science: intelligence and financial literacy help you understand the mechanism intellectually, and do almost nothing to stop it operating on you the next time the tempting option sits in front of you rather than a month away. Only a structural commitment made while cold reliably works — not a resolution made while warm.',
      ],
    },
    {
      heading: 'What turns the present-bias dial up or down',
      body: [
        'Vividness and visceral state are the largest amplifiers. Loewenstein’s work on visceral influences shows hunger, craving, and pain don’t just pull toward the immediate — they distort the forecast of how you’ll feel later, a hot-cold empathy gap where the calm planning self can’t simulate what the aroused executing self will want. A decision made on a quiet morning and the same decision made during acute craving are, functionally, made by two different forecasting systems.',
        'Certainty of the near option versus uncertainty of the far one is a second amplifier, and it’s where the real scientific debate lives. Add a small doubt about whether a delayed reward will be paid, and a perfectly rational decision-maker will also prefer the sure thing now — for reasons that have nothing to do with impatience. Experiments that don’t strip out this uncertainty risk mistaking risk-aversion for present bias.',
        'How many times a decision has to be re-made is a third, underrated lever. A one-time choice between two amounts gets fought once; a recurring daily choice — skip the run or not, order the takeout or not — gets fought every day, and present bias only has to win once to become a habit, while the patient plan has to win every single time to hold. Converting a repeated willpower contest into a one-time structural decision beats repeating the same appeal to willpower daily.',
      ],
      example: {
        label: 'The uncertainty confound',
        body: 'Offer someone $50 today or $60 in three months from a stranger with no enforceable contract, and a preference for the $50 says nothing about patience — it says they doubt the stranger will pay. Offer the same $60 guaranteed by escrow and a signed contract, and many switch to waiting. The amounts and delay didn’t change. What changed was the probability the payment happens — the variable most casual observations of “impatience” fail to hold constant.',
      },
    },
    {
      heading: 'The honest limits: how much of this is bias, and how universal is it really',
      body: [
        'The central caveat: a meaningful share of reported present bias may not be a pure preference for now at all. Andreoni and Sprenger’s incentivized experiments matched the hassle of collecting a sooner payment against a later one, so “now” wasn’t secretly also “easier to receive.” Present bias shrank substantially versus classic hypothetical-survey studies once that confound was removed — consistent with a real share of the historical evidence reflecting transaction costs rather than time preference itself.',
        'A related complication: any real “later” option carries genuine delivery uncertainty, and a rational agent who correctly prices that will look identical, from outside, to a present-biased one devaluing the future irrationally. Separating “doubts it’ll arrive” from “doesn’t value the future” requires the guaranteed-payment design much of the older survey-based research lacked. How much of the historical literature survives this distinction is active and unsettled.',
        'A third complication: the phenomenon isn’t one clean, unified thing. Loewenstein and Prelec catalogued anomalies beyond the basic reversal — larger amounts discounted less steeply than small ones, losses treated differently than equivalent gains, and money versus consumable rewards like food showing different impulsiveness patterns in the same people. Present bias looks like a label covering several distinct mechanisms, not one dial turned equally in everyone.',
        'None of this collapses the core claim. Genuine dynamic inconsistency — a plan abandoned because the tempting option arrived at “now” — is robust across gym attendance, credit-card revolving, and ordinary procrastination, and the commitment-device response works regardless of the deepest mechanism. What should change is your confidence in any precise figure for “how much” someone discounts the future, and your willingness to assume every preference for sooner-and-smaller is irrational rather than checking whether the later option was as certain as claimed.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'Someone enthusiastically commits to a future obligation that requires no action today.',
      meaning: 'The commitment was priced by a patient planning self. It will be billed to a present-biased executing self later, who wasn’t in the room and may not honor it.',
    },
    {
      signal: 'A deadline keeps sliding by exactly one period, over and over.',
      meaning: 'Classic dynamic inconsistency — every future date gets discounted gently, but today gets discounted steeply, so the plan holds for every day except the one that matters.',
    },
    {
      signal: 'Someone picks a flat-fee, unlimited-use plan while predicting heavy future use.',
      meaning: 'A bet on future self-control, priced by a seller who is betting the opposite way and, on average, winning.',
    },
    {
      signal: 'A proposal pushes all the cost into the future and all the benefit into right now.',
      meaning: 'The structure is engineered to exploit present bias in whoever accepts it. Check who wrote the deferred-cost clause, and why it was shaped that way.',
    },
    {
      signal: 'A person’s stated patience changes sharply depending on whether the sooner option is guaranteed or merely promised.',
      meaning: 'This might not be present bias at all — it could be a rational reaction to genuine uncertainty about whether the later reward will actually arrive.',
    },
    {
      signal: 'Someone treats a distant deadline as “plenty of time away,” every time you check in, right up until it isn’t.',
      meaning: 'The deadline is being discounted hyperbolically. Without a real intermediate consequence, the work will compress into the one period that never gets discounted: the last one.',
    },
  ],
  playbook: [
    {
      move: 'Make the commitment now, while cold, and remove your future self’s vote.',
      how: 'Set up the transfer or standing order on the day you decide, not the day it executes: “Move this on payday, before I see the balance — I don’t get a say in the moment.”',
      watchOut: 'Zero flexibility invites people to break the system entirely rather than bend it. Build in one costly, deliberate escape hatch, or it gets abandoned the first time it’s inconvenient.',
    },
    {
      move: 'Replace one distant deadline with several real, spaced ones.',
      how: '“Instead of one deadline twelve weeks out, we check in with a real deliverable every two weeks, and slipping has an actual consequence.” Evenly spaced external deadlines change behavior; deadlines people quietly set for themselves usually don’t.',
      watchOut: 'A checkpoint with no real teeth gets discounted exactly like the distant deadline did. The consequence has to be genuine.',
    },
    {
      move: 'Ask the reversed-calendar question before signing anything long-term.',
      how: '“If this started today instead of three months from now, would I still say yes?” A changed answer means you’ve found a preference reversal, not a stable preference your future self will honor.',
    },
    {
      move: 'Separate real uncertainty from manufactured urgency before reacting to either.',
      how: '“Is the concern that the later option is delayed, or that it might not happen at all?” If genuinely uncertain, preferring the sure thing now is reasonable, not a bias to fix.',
      watchOut: 'Don’t use this to talk yourself out of legitimate caution about a counterparty who has, in fact, given you real reason to doubt them.',
    },
    {
      move: 'Name the exploit when a deal defers your pain to fund someone else’s gain.',
      how: '“This puts the benefit in month one and the cost from month four onward — walk me through why that split, specifically, rather than an even one.”',
      watchOut: 'This can land as an accusation. Frame it as a structural question about the proposal, not a claim about the other side’s honesty.',
    },
    {
      move: 'Turn a recurring willpower contest into a single decision.',
      how: 'Find the daily choice that keeps being lost to the present-biased self, and replace it with one structural decision made once — automate it, remove the option — rather than relitigating it under temptation every time.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Hyperbolic discounting just means someone has a high discount rate — they’re simply impatient.',
      correction: 'A high but constant discount rate is still exponential and time-consistent — that person’s future self would agree with today’s plan. The signature of hyperbolic discounting is a reversal: the plan changes because the near option became “now,” not because time preference is generally steep.',
    },
    {
      misread: 'Economists model this with a literal hyperbola.',
      correction: 'Most modern economic models use Laibson’s two-parameter quasi-hyperbolic, or beta-delta, approximation, not a fitted hyperbolic curve. It reproduces the same qualitative predictions with far more tractable math.',
    },
    {
      misread: 'Everyone discounts the future by roughly the same amount, so you can assume a fixed “present bias constant” in any model of behavior.',
      correction: 'Individual variation is large, and a meaningful share of what looks like present bias in older studies may reflect transaction costs or rational uncertainty rather than pure time preference. Treat the effect size as something to check case by case, not a fixed universal number.',
    },
    {
      misread: 'Knowing you have this bias is most of the fix.',
      correction: 'Awareness without a binding commitment device tends to produce partial naivete, which can generate more procrastination than either full ignorance or full sophistication, by justifying inaction with a plan you never actually structure to survive temptation.',
    },
    {
      misread: 'Any preference for a smaller reward now over a larger one later is evidence of irrational bias.',
      correction: 'If there is real uncertainty the later reward will be paid, or a real opportunity cost to waiting, preferring the sure thing now can be the mathematically correct choice. The bias label applies to the specific reversal pattern, not to impatience in general.',
    },
  ],
  evidence: [
    {
      source: 'Ainslie, “Specious Reward” (1975)',
      finding: 'Connected animal choice data showing preference reversals as delay shrinks to a theory of human impulsiveness, laying groundwork for hyperbolic discounting as an explanation for why advance resolutions collapse once temptation is actually present.',
    },
    {
      source: 'Thaler, “Some Empirical Evidence on Dynamic Inconsistency” (1981)',
      finding: 'One of the first human-subject demonstrations that people’s implied discount rate shrinks as the delay being asked about gets longer — the opposite of what a constant, exponential rate predicts.',
    },
    {
      source: 'Laibson, “Golden Eggs and Hyperbolic Discounting” (1997)',
      finding: 'Formalized the quasi-hyperbolic beta-delta model, explaining the otherwise puzzling coexistence of high-interest revolving debt with untouched, illiquid retirement savings in the same households.',
    },
    {
      source: 'Loewenstein & Prelec, “Anomalies in Intertemporal Choice” (1992)',
      finding: 'Catalogued discounting anomalies beyond the basic reversal — a magnitude effect where larger sums are discounted less steeply, and different treatment of gains versus losses — indicating present bias is a family of related effects, not one mechanism.',
    },
    {
      source: 'O’Donoghue & Rabin, “Doing It Now or Later” (1999)',
      finding: 'Modeled naive agents who don’t anticipate their own future present bias, sophisticated agents who do and pre-commit, and partially naive agents in between — showing partial self-awareness can produce more procrastination than either extreme.',
    },
    {
      source: 'DellaVigna & Malmendier, “Paying Not to Go to the Gym” (2006)',
      finding: 'Found people who chose flat-fee gym memberships over cheaper pay-per-visit pricing attended at rates making the flat fee the worse deal, and many kept paying for months after their last visit rather than cancelling — evidence of overly optimistic beliefs about future self-control.',
    },
    {
      source: 'Andreoni & Sprenger, “Estimating Time Preferences from Convex Time Budgets” (2012)',
      finding: 'Used incentivized choices with matched payment logistics for sooner and later rewards and found present bias shrank substantially compared with classic hypothetical-survey estimates.',
      caveat: 'This sits inside an active, unresolved debate about how much of the historical literature reflects genuine time preference versus transaction costs and rational uncertainty about delivery. Treat the universality and size of present bias as contested, not settled.',
    },
  ],
  takeaways: [
    '“Hyperbolic” describes a specific signature — a preference reversal tied to whether “now” is one of the options — not simply a high level of impatience.',
    'The model most economists actually use is Laibson’s two-parameter quasi-hyperbolic approximation, not a literal hyperbola.',
    'Knowing you discount the future steeply doesn’t fix it — only converting that knowledge into a binding commitment device, made while cold, does.',
    'Some apparent present bias is rational risk-adjustment for the chance a delayed reward never arrives — not every preference for “now” is a bias to correct.',
    'Distant deadlines and distant rewards get discounted almost to nothing; real, spaced, external consequences are what actually change behavior.',
    'How large and how universal present bias really is remains genuinely contested among researchers — treat it as a tendency to verify, not a fixed constant.',
  ],
};
