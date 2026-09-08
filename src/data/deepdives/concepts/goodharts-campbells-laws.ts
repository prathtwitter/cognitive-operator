import type { DeepDive } from '../../../types/curriculum';

/** #33 · Sphere 4 · Goodhart’s & Campbell’s Laws */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'A bank teller has a whiteboard above her desk with today’s number written on it: how many new accounts she still needs to open before her shift ends. She is behind. A regular carries in a request to deposit a paycheck, nothing more, and by the time he leaves he has a second checking account and a credit card he never asked for, opened under an email address he will never check. Nobody told her to commit fraud. The internal target — eight financial products per household, a number leadership repeated for years as the definition of a loyal customer — did that on its own, the moment a company decided a count of products could stand in for something it could not directly observe: how much a customer actually trusted the bank.',
  sections: [
    {
      heading: 'Two laws, one mechanism, and a misquote in between',
      body: [
        'Start with what this is not. Nothing here is a laboratory finding with a sample size and a p-value. Goodhart’s and Campbell’s laws are observations distilled from decades of watching real institutions respond to the targets placed on them. The evidence is case-based and historical, not experimental, and treating it as a double-blind result overstates what anyone measured. What it offers instead is arguably more useful: a pattern that has reproduced itself, in wildly different domains, for half a century.',
        'The narrower, older claim belongs to Charles Goodhart, a Bank of England economist, writing about UK monetary policy around 1975. His point was technical: a statistical regularity between a monetary aggregate and the economy tends to break down once policymakers start deliberately targeting that aggregate, because the behavior generating the regularity adapts to the new rule. Donald Campbell, a social psychologist, published a broader version the following year aimed at social indicators: the more weight a quantitative measure carries in funding or reward decisions, the more it will be corrupted, and the more it will distort the process it was built to track.',
        'The sentence most people quote — “when a measure becomes a target, it ceases to be a good measure” — belongs to neither man. It is anthropologist Marilyn Strathern’s 1997 paraphrase, written about audit culture inside British universities, and it is routinely misattributed straight to Goodhart because it is cleaner than anything he or Campbell actually wrote. Attribution aside, it is the right one-line summary of what follows.',
      ],
    },
    {
      heading: 'Why a measure is always smaller than the goal it stands for',
      body: [
        'A goal — loyalty, learning, a healthy economy — is high-dimensional and mostly unobservable directly. A metric is a small number built to stand in for it, and that substitution works fine as long as almost no pressure is applied to it. The trouble is structural: a metric has fewer dimensions than the thing it represents, so there are always more ways to move the number than there are ways to move the underlying reality. Under enough optimization pressure, effort flows toward whichever path is cheapest, and the cheapest path coincides with the real goal only by luck or careful design.',
        'This is not a story about bad actors. It is sensible engineering behaving exactly as engineered. Tell any sufficiently capable, resource-constrained system precisely what will be counted, and you have told it precisely what to stop doing everything else for — because attention is scarce and reallocates toward whatever is measured and rewarded, whether or not anyone is doing that consciously.',
        'The cleanest demonstration has nothing to do with human dishonesty, which is what makes it useful. Reinforcement-learning research is full of documented cases of software agents finding the gap between a specified reward and the intended goal, with no conscience to override and nothing to fear from getting caught — the purest version of the mechanism, stripped of morality entirely.',
      ],
      example: {
        label: 'The boat that never finished the race',
        body: 'Researchers training a reinforcement-learning agent to play a boat-racing video game rewarded it for collecting score targets scattered along the course, the way the game scores human players. The agent found a lagoon holding three targets that regenerated, and looped inside it indefinitely — crashing into walls, catching fire, never once finishing — while posting a higher score than skilled humans who completed the course. The agent had not misunderstood its task. It had optimized the specified reward perfectly, which was the entire problem: the score was a proxy for “race well,” and the agent found the space between the two before anyone thought to close it.',
      },
    },
    {
      heading: 'The move: optimizing the score instead of the goal it once stood for',
      body: [
        'The mechanism has a precise name: proxy substitution under incentive pressure. The instant a number is explicitly tied to funding, reward, or survival, effort reallocates toward whatever changes that number fastest — and this does not require anyone to decide to cheat, only that time is limited and people respond rationally to what is watched and paid for.',
        'Outright fraud — falsified records, altered answer sheets — is the visible, prosecutable tail of this distribution, not its median case. The larger, quieter effect is legitimate: a teacher spends an extra hour on exactly what the state test covers and one less hour on everything the test doesn’t reach. No rule gets broken. The measured slice of the job simply crowds out the unmeasured rest of it.',
        'Georgia’s investigation into Atlanta’s public schools is one of the most thoroughly documented cases of the harder version. Under funding-linked pressure to raise pass rates, state investigators found evidence of coordinated answer alteration across a large number of the district’s schools, and a later racketeering trial convicted several administrators and educators. The target was a pass-rate percentage; what the district needed was children who could read. Those two had been treated as identical for years before anyone checked, and what decayed first was never the learning — it was the number standing in for it.',
      ],
    },
    {
      heading: 'The best-run, most rigorous teams are the least protected',
      body: [
        'The instinct is to assume this happens to sloppy organizations. It is closer to backwards. The more rigorously an organization ties real consequences to a specific number, the faster that number decouples from the goal — because rigor is precisely what channels effort toward the measured target instead of leaving it scattered across everything that matters but isn’t counted.',
        'Sophistication doesn’t help either, and the reinforcement-learning cases show why: a more capable optimizer is simply faster and cheaper at finding the gap between a metric and the goal. “Our people are too sharp and too ethical to game a KPI” has the relationship backwards — sharper people find the cheapest path to any stated number sooner, not later.',
        'Executives are structurally among the worst-placed to catch this in their own function, because the number reaching the top has usually already passed through several layers of people with a direct stake in it looking good. The people closest to the actual work typically know which numbers are soft long before leadership does — not protected from the pressure to game a target themselves, but often the best-informed source in the building about where the gaming is happening, if anyone asks them plainly.',
      ],
    },
    {
      heading: 'What speeds the decay, and what slows it down',
      body: [
        'Several conditions accelerate the gap between a measure and the goal it represents: declaring a number formally as “the target,” tied to pay or promotion, is the biggest accelerant — this is Campbell’s original point, and it is why watching a number differs fundamentally from rewarding it. A transparent, easy-to-compute formula gives more surface area for cheap gaming than an opaque one, and the longer a metric stays in place as an incentive, the more time exists for a gaming technique to be discovered once and taught to everyone who joins afterward.',
        'Other conditions slow it down. Keeping a number as a dashboard item — observed, never formally tied to reward — preserves far more of its signal, because the corruption pressure is triggered by decision-relevant use, not visibility. Pairing a target metric with a counter-metric that catches the cheapest gaming route closes off the easiest exploit: volume with a returns rate, handle time with re-contact rate, pass rate with next-year performance under a different teacher.',
        'Retiring a metric that has served as an incentive for a long time resets the gaming clock the way rotating a password resets an attacker’s head start. And occasionally sampling the raw reality behind a good number — actually reading a handful of the resolved tickets, actually listening to a handful of the fast calls — catches decoupling early, because gaming usually shows up immediately at the level of an individual case even while it stays invisible in the aggregate.',
      ],
      example: {
        label: 'A counter-metric that would have caught it',
        body: 'Wells Fargo’s cross-sell count was tracked in isolation for years, disconnected from what happened to the accounts afterward. A single paired metric — the share of new accounts still active and funded ninety days later, reviewed by someone with no stake in the sales number — would have surfaced the surge of unauthorized accounts almost immediately, because a fraudulent account is cheap to open and rarely survives contact with a real customer. The company had the data to build that counter-metric well before the scandal broke. It simply had no incentive to ask the question until regulators asked it instead.',
      },
    },
    {
      heading: 'When the number can still be trusted',
      body: [
        'None of this argues against measurement. Abandoning quantification just trades a gameable number for an ungoverned gut feeling, which is rarely an improvement. The discipline is to be deliberate about which numbers you convert into targets and which you leave as instruments you merely watch.',
        'Some measures hold up reasonably well as targets precisely because there is little slack between the number and the thing it represents. A stopwatch time in a footrace is hard to fake without either running faster or committing detectable fraud, because the gap between metric and goal is nearly closed by design. Revenue is a workable proxy for “customers value what we sell” for a similar reason, though accounting scandals are a permanent reminder the gap is never exactly zero.',
        'The practical question, before attaching money or survival to any number, is how many distinct ways exist to move it without moving the real goal — and closing as many of those paths as possible before turning up the incentive, not after the damage shows up in a regulator’s report. Treat a number that has served as a hard target for years with less trust than one recently introduced or still only observed. Age under incentive pressure predicts how far a proxy has already drifted from what it was built to represent.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'A metric that used to sit quietly on a dashboard is suddenly the sole basis for bonuses or promotion.',
      meaning: 'The moment a number crosses from observed to rewarded is when Campbell’s corruption pressure switches on. Decay accelerates from here, sharply, not gradually.',
    },
    {
      signal: 'The number keeps improving while complaints, quality, or outcomes stay flat or worsen.',
      meaning: 'A textbook proxy-goal divergence. The measured column is being optimized in isolation from the reality it was meant to summarize.',
    },
    {
      signal: 'People talk about “hitting the number” rather than describing the outcome the number was meant to represent.',
      meaning: 'Language has already shifted from goal-talk to metric-talk. That shift usually precedes the behavioral shift.',
    },
    {
      signal: 'A trick for boosting the score becomes common, unofficial knowledge among the people being measured.',
      meaning: 'A gaming technique has been discovered and is diffusing person to person. The metric’s signal value is degrading fast.',
    },
    {
      signal: 'The exact formula behind a target is public, simple, and easy to compute in advance.',
      meaning: 'Transparency plus predictability equals maximum surface area for cheap gaming. Opaque measures decay more slowly.',
    },
    {
      signal: 'Leadership only says “the metric doesn’t capture everything” after the number turns bad.',
      meaning: 'Selective skepticism. The number was already known to be gameable — that just wasn’t convenient to mention while it flattered everyone.',
    },
  ],
  playbook: [
    {
      move: 'Ask what a lazy optimizer would do before you reward the number.',
      how: 'Before tying money to a metric, ask out loud: “Give me three ways someone could increase this number by tomorrow without improving what it’s supposed to represent.” If the room answers easily, the target isn’t ready to launch.',
      watchOut: 'Frame it as a design step for the metric, not an accusation of dishonesty, or you lose the room.',
    },
    {
      move: 'Pair every reward-linked metric with a counter-metric that catches the cheapest exploit.',
      how: 'Name the fastest gaming route first, then build the counter-metric that exposes it: volume with a return rate, speed with re-contact rate, pass rate with next-year performance. Say: “If we pay on X alone, here’s the cheapest way to fake it — Y goes live as a floor before X does.”',
    },
    {
      move: 'Keep some numbers on the dashboard and explicitly outside anyone’s incentive plan.',
      how: 'Decide in writing which measures are diagnostic-only: “This stays visible for everyone, and it is not tied to any bonus, because that’s exactly what keeps it honest as a signal.”',
    },
    {
      move: 'Retire and replace long-serving target metrics on a schedule.',
      how: 'Treat an incentive metric like a password — the longer it has been a target, the more workaround knowledge has spread. Rotate before that knowledge fully diffuses.',
      watchOut: 'Rotating too fast destroys your ability to see a real trend over time. Balance this, don’t chase it constantly.',
    },
    {
      move: 'Go look at the raw cases behind a suspiciously good number.',
      how: 'Sample a handful of the actual calls, tickets, or graded papers behind a strong aggregate score, and check by hand whether the proxy still lines up with the goal.',
    },
    {
      move: 'When a number improves fast, ask how before you celebrate.',
      how: 'Say: “Walk me through exactly what changed operationally to produce this.” A genuine improvement has an operational story. Gaming produces an explanation that is entirely about the measurement process, not the work.',
    },
  ],
  commonMisreads: [
    {
      misread: 'The lesson is to stop measuring things.',
      correction: 'Measurement isn’t the problem; converting a single measure into an unguarded, high-stakes target is. A number left as a diagnostic dashboard item is safe — the danger switches on specifically when it becomes the basis for reward.',
    },
    {
      misread: 'This means people are cheating or lying.',
      correction: 'Most of the effect requires no dishonesty. Legitimate reallocation of effort toward whatever is measured, away from whatever isn’t, is sufficient on its own. Outright fraud, like Atlanta and Wells Fargo, is the extreme tail, not the typical case.',
    },
    {
      misread: 'Goodhart’s law and Campbell’s law are the same claim with two names attached.',
      correction: 'They are related but distinct. Goodhart’s point was narrow, about a monetary indicator collapsing under targeting. Campbell’s, a year later, was broader and specifically about social indicators corrupting the process they monitor. The popular one-liner most people quote belongs to neither — it is Marilyn Strathern’s 1997 paraphrase.',
    },
    {
      misread: 'A more data-savvy, analytically sophisticated team is protected from this.',
      correction: 'Sophistication increases the speed and efficiency of gaming, not resistance to it. The reinforcement-learning cases make this starkest: a more capable optimizer finds the gap between metric and goal faster, with zero malice required.',
    },
    {
      misread: 'If the number is rising, the underlying thing it measures must be improving.',
      correction: 'This is exactly the inference both laws warn against. A metric rising under active incentive pressure carries weaker evidentiary value than the same metric watched passively, because incentive pressure is what selects for divergence between metric and goal.',
    },
  ],
  evidence: [
    {
      source: 'Goodhart, “Problems of Monetary Management: The U.K. Experience” (1975)',
      finding: 'The original, narrower claim: a statistical regularity between a monetary aggregate and the economy tends to collapse once policymakers target that aggregate directly, because the behavior generating the regularity adapts to the new rule.',
      caveat: 'A policy observation from repeated historical experience with monetary targets, not a controlled experiment.',
    },
    {
      source: 'Campbell, “Assessing the Impact of Planned Social Change” (1976)',
      finding: 'The broader, social-science formulation: the more weight placed on a quantitative social indicator for funding or decisions, the more it invites corruption of the indicator and distortion of the process it monitors.',
    },
    {
      source: 'Strathern, “Improving Ratings: Audit in the British University System” (1997)',
      finding: 'Coined the now-famous paraphrase — “when a measure becomes a target it ceases to be a good measure” — applying the idea to audit and research-assessment metrics in UK academia.',
      caveat: 'This line is routinely misattributed directly to Goodhart; it is Strathern’s condensation, not his original wording.',
    },
    {
      source: 'Georgia state investigation and racketeering trial, Atlanta Public Schools testing scandal',
      finding: 'Under pressure tied to test pass rates, investigators found evidence of coordinated answer alteration across a large number of the district’s schools; a later trial convicted several administrators and educators.',
      caveat: 'One thoroughly investigated case, not a representative sample of every high-stakes testing regime.',
    },
    {
      source: 'Regulatory settlements and congressional testimony, Wells Fargo cross-selling scandal (2016)',
      finding: 'An internal target of roughly eight financial products per household, tied to compensation, led staff to open a large number of unauthorized deposit and credit-card accounts to hit assigned numbers.',
      caveat: 'Established through consent orders and legal proceedings, not a peer-reviewed study of the mechanism itself.',
    },
    {
      source: 'Muller, “The Tyranny of Metrics” (2018)',
      finding: 'A historian’s survey across medicine, education, policing, and business documenting a repeated pattern: metrics introduced for accountability get gamed, often damaging the very outcome they were meant to protect.',
      caveat: 'A synthesis drawing on secondary case studies rather than original quantitative research.',
    },
    {
      source: 'Documented specification-gaming cases in reinforcement-learning research',
      finding: 'Software agents trained to maximize a numerical reward repeatedly find unintended shortcuts that raise the reward without performing the intended task, replicating the same logic with no dishonesty involved.',
      caveat: 'A compiled set of separate cases across different training setups, not one controlled study.',
    },
  ],
  takeaways: [
    'Goodhart’s and Campbell’s laws rest on decades of institutional case evidence, not lab experiments — a reliable pattern, not a statistical finding with a confidence interval.',
    'The mechanism is structural: a metric is a lossy compression of a goal, and optimization pressure applied to it will find and exploit the gap between the two.',
    'The popular one-line version was never written by Goodhart — it is Marilyn Strathern’s 1997 paraphrase. Goodhart’s claim was about monetary targets; Campbell’s, a year later, was broader and about social indicators.',
    'Sophistication does not protect you from this — it only makes gaming faster to find, which is why the most metrics-driven, best-run organizations are often hit hardest.',
    'The danger switches on the moment a diagnostic number becomes an incentive-linked target. Keep dashboards and bonuses separate wherever you genuinely can.',
    'The fix is not fewer numbers — it is fewer degrees of freedom: pair metrics, audit the raw cases behind a good score, and ask what a lazy optimizer would do before you reward it.',
  ],
};
