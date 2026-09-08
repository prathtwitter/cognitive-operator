import type { DeepDive } from '../../../types/curriculum';

/** #35 · Sphere 4 · Dopaminergic Prediction Error & Variable Ratio Schedules */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'In a primate lab in the 1990s, a thirsty monkey sits with a thin electrode recording from a single neuron deep in its midbrain, in a region called the ventral tegmental area. A light flashes. Half a second later, a drop of juice lands on the monkey’s tongue. The neuron fires a sharp burst of electrical spikes — not when the juice arrives, but when the light does. Weeks later, the researchers quietly withhold the juice on some trials, exactly when the monkey has learned to expect it. At the moment the juice should have arrived and doesn’t, that same neuron goes silent, dipping below its own resting rate for a fraction of a second, as if registering an absence. Nobody showed the neuron a ledger or explained a broken promise. It was doing arithmetic anyway.',
  sections: [
    {
      heading: 'The signal is a mismatch, not a reward',
      body: [
        'What that neuron computes is a reward prediction error: the gap between what was expected and what actually arrived, not the reward itself. The signature has three parts, all documented directly in single-neuron recordings. An unpredicted reward produces a sharp burst. A fully predicted reward produces no burst at all at the moment of delivery — the burst has already migrated backward onto the cue that reliably predicts it. And a predicted reward that fails to arrive produces a dip below the neuron’s ordinary resting rate, precisely when the reward was due.',
        'The popular version of this — “dopamine is released when something good happens” — flattens all three parts into one undifferentiated blob. What’s lost is the arithmetic: this is a subtraction, actual minus expected, not a magnitude readout. Structurally, it is the same operation computer scientists call a temporal-difference error in reinforcement-learning algorithms, which is precisely how Wolfram Schultz, Peter Dayan and Read Montague framed it when they connected the animal data to the mathematics.',
        'The correction that matters most is this: dopamine is not the pleasure chemical. Kent Berridge and Terry Robinson’s research draws a hard line between wanting and liking. Dopamine drives incentive salience — the pull toward a cue, the motivation to pursue — while hedonic pleasure, actual liking, runs through separate opioid and endocannabinoid circuits. Blocking dopamine in animals kills their willingness to work for a reward while their involuntary in-the-moment enjoyment of that same reward, measured by taste-reaction responses, stays largely intact.',
      ],
    },
    {
      heading: 'Why an error signal beats a reward signal',
      body: [
        'An error-based teaching signal only fires when there is new information to learn from, which is exactly when learning should update. If dopamine instead reported reward magnitude directly, regardless of whether it was expected, the brain could never distinguish “I already understand this” from “something has changed” — every routine meal would carry as much informational weight as the first one ever eaten.',
        'This is the same logic behind temporal-difference learning in artificial systems: an agent that updates its estimates only in proportion to how wrong its last prediction was converges efficiently, and keeps adapting the moment the environment changes. Schultz, Dayan and Montague’s contribution was showing that biological dopamine neurons implement almost exactly this computation, not a looser analogy to it.',
        'The evolutionary case sits one layer beneath the usual foraging story. Searching unpredictable terrain for food statistically means enduring long runs of empty patches before finding a rich one. An organism whose motivation collapsed after a string of failures would starve before reaching the next success. A dopamine system tuned to fire hardest on uncertain, intermittent payoff biases behavior toward exactly the persistence that a high-variance, positive-expected-value search requires.',
      ],
    },
    {
      heading: 'The move: engineering the schedule, not the reward',
      body: [
        'The specific, exploitable move is intermittent reinforcement engineering: deliberately making the timing or size of a payout unpredictable. B. F. Skinner’s operant research established this pattern decades before any of the neuroscience — across pigeons, rats and later species, variable-ratio schedules, where a reward follows an unpredictable number of responses, produce the highest and steadiest response rates and the greatest resistance to extinction of any reinforcement pattern tested.',
        'Modern slot machines are built on exactly this principle, refined further by a design detail called the near-miss: an outcome that lands one symbol away from a jackpot. Informationally, a near-miss is identical to any other loss — it pays nothing and predicts nothing about the next spin. Multi-line electronic machines compound this with celebratory lights and sound on spins that are net losses once every line is totalled, a pattern the gambling-research literature calls losses disguised as wins.',
        'None of this requires an unusually weak-willed player. It requires a nervous system doing exactly what Schultz’s monkeys did: tracking uncertainty and reward together, and firing hardest in the zone where the next outcome genuinely cannot be predicted from the last one.',
      ],
      example: {
        label: 'A near-miss that isn’t near anything',
        body: 'Neuroimaging research on gambling has found that near-miss outcomes activate reward-related brain circuitry in a way that resembles an actual win, and this response is especially pronounced in people who already struggle to control their gambling. The finding is uncomfortable precisely because it is not a story about poor judgment: a near-miss carries zero statistical information about the next spin, exactly as much as a total blank does, yet the anticipatory system built to track uncertainty responds to it as though something meaningful almost happened.',
      },
    },
    {
      heading: 'Knowing the odds does not turn off the wanting',
      body: [
        'Explicit knowledge and the dopaminergic wanting system run on largely separate tracks. Behavior analysts distinguish rule-governed behavior — acting on a verbal description of how something works — from contingency-shaped behavior, which is built directly by repeated exposure to a schedule regardless of what a person can say about it. Telling yourself, accurately, that a slot machine is random does not touch the second track at all.',
        'This is why the sharpest evidence against “just know the mechanism and you’re safe” comes from people who know the mechanism best. Near-miss and uncertainty effects show up strongly in experienced gamblers who can state the odds precisely, and problem gamblers are not, as a group, worse at understanding randomness than anyone else — their explicit knowledge and their compulsive behavior simply do not talk to each other.',
        'The same gap shows up in far less dramatic form in product designers and executives who understand variable-reward mechanics professionally and still check their own dashboards, inboxes and phones compulsively. Sophistication about how the loop works is not the same lever as the loop itself, and assuming it is happens to be exactly the mistake that leaves the most informed people in the room the most exposed.',
      ],
    },
    {
      heading: 'The conditions that turn the pull up or down',
      body: [
        'Schedule type sets the baseline. Decades of operant research rank them consistently: variable-ratio schedules produce the highest and steadiest response rates and the most resistance to extinction, ahead of fixed-ratio, variable-interval and fixed-interval schedules in that order. Unpredictable timing or count keeps the organism unable to safely conclude that stopping is free of cost.',
        'Within “unpredictable,” degree matters in a specific, counterintuitive way. Sustained anticipatory dopamine activity during the delay before a probabilistic reward does not simply rise with more randomness — it peaks when the odds sit near even, and is lower at both near-certain and near-impossible probabilities. Maximum uncertainty, not maximum unpredictability in some vaguer sense, is where the system fires hardest.',
        'Predictability itself is what shuts the signal off. Once a reward is fully expected, there is no error left to compute, so the phasic burst at delivery disappears entirely and the response sits on the predicting cue instead. That is also why a reward can feel dull once its timing and size become perfectly reliable, and why cancelling an expected reward produces a sharper, more distinct reaction than simply making it smaller.',
      ],
      example: {
        label: 'Loot boxes and the regulators who noticed',
        body: 'Paid, randomized in-game rewards drew regulatory scrutiny in several countries once officials recognized the mechanic as a variable-ratio schedule wrapped in entertainment software: a purchase of uncertain value, repeated because the next one might be the rare one. Belgium’s gaming regulator concluded in 2018 that certain loot-box implementations met its legal definition of gambling. The draw was never the guaranteed content, which is often ordinary. It was the uncertainty attached to each purchase — the same variable driving the slot machine, and the one Skinner had already described in pigeons decades earlier.',
      },
    },
    {
      heading: 'The honest limits: monkeys, not phones',
      body: [
        'What is rock solid is the electrophysiology. Direct single-neuron recordings, replicated across primate studies over decades, show the three-part prediction-error signature clearly enough to state without hedging: dopamine neurons compute a mismatch between expected and actual reward, and that computation matches temporal-difference learning formally, not loosely.',
        'What is an extrapolation is the leap from that data to specific claims about human phone or app behavior. Human evidence here relies on indirect proxies — blood-flow signals in brain-imaging studies, self-report, and behavioral persistence data — because the single-neuron recordings behind the strongest claims are done in animals, not people going about their day. The underlying logic transfers plausibly, since Skinner’s schedule research was never species-specific, but the vivid claim that a phone is “literally” wired like Schultz’s monkey rig overstates how directly that has been measured in humans.',
        'One more caveat deserves stating plainly: treating “phone addiction” or “social media addiction” as medically equivalent to a substance or gambling addiction is contested in clinical psychiatry, where Gambling Disorder is a recognized diagnosis but most digital-behavior framing is not established with the same weight. And the correction from section one bears repeating at the end, because it is the one most worth keeping: dopamine is not pleasure. It is the signal that makes you get up and look again.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'A boring or empty result doesn’t reduce how soon someone checks again.',
      meaning: 'The variable-ratio signature: persistence is governed by the schedule, not by the last outcome, so a miss barely dents the next attempt.',
    },
    {
      signal: 'A near-loss gets a visible reaction close to an actual win.',
      meaning: 'Near-miss engineering is exploiting the same uncertainty-tracking circuitry as a genuine win, despite carrying no more information than any other loss.',
    },
    {
      signal: 'Someone states the odds accurately and keeps engaging exactly as before.',
      meaning: 'Explicit, verbal knowledge and the wanting system run on separate tracks. Information about a schedule does not disable behavior shaped by it.',
    },
    {
      signal: 'Checking is most frequent right after a run of mixed, not uniform, outcomes.',
      meaning: 'Odds near even, not extreme odds in either direction, are where dopaminergic uncertainty signaling — and the pull it produces — peaks.',
    },
    {
      signal: 'A reward that used to feel exciting goes flat once its timing becomes fully predictable.',
      meaning: 'This is habituation by design: a fully expected reward leaves no prediction error to compute, so the signal at delivery disappears.',
    },
    {
      signal: 'Removing a reward outright provokes a sharper reaction than merely shrinking it.',
      meaning: 'Consistent with the below-baseline dip: an omitted, expected reward is a distinct negative signal, not just a smaller positive one.',
    },
  ],
  playbook: [
    {
      move: 'Separate “is this random” from “can I stop.”',
      how: 'Say to yourself or a struggling colleague: “I already know this is unpredictable — that knowledge was never going to be what makes me stop, so I need a structural block instead of another reminder of the odds.”',
      watchOut: 'Lecturing someone about odds when the problem was never a lack of information reads as condescension and changes nothing.',
    },
    {
      move: 'Convert a variable-ratio trigger into a fixed, scheduled one.',
      how: 'Check email, chat or a dashboard at three fixed times a day instead of continuously. A scheduled check has a known answer-time; an on-demand check reintroduces the uncertainty that drives compulsive checking.',
    },
    {
      move: 'Remove the cue, not just the reward.',
      how: 'Badge counts, red dots and preview snippets predict an uncertain reward and trigger the anticipatory ramp on their own. Turn off the visual cue specifically, not just the sound.',
      watchOut: 'People often disable the weaker layer and leave the stronger one — muting sound while leaving the badge visible fixes almost nothing.',
    },
    {
      move: 'Name the schedule type out loud when you design one for others.',
      how: 'In any incentive, loyalty, or engagement design, state plainly: “This is a variable-ratio schedule, built to maximize repeat engagement.” Owning the mechanism on paper makes its ethics a decision instead of an accident.',
    },
    {
      move: 'Extinguish a habit with a clean stop, not a taper.',
      how: 'A partial-reward regime you impose on yourself recreates a variable-ratio schedule, the single hardest pattern to extinguish. A complete, immediate stop removes the uncertainty a taper would preserve.',
      watchOut: 'An occasional “just this once” check is the most reinforcing thing you can do — it teaches the system that persistence still occasionally pays.',
    },
    {
      move: 'Map the schedule before judging the person.',
      how: 'Before calling compulsive checking a willpower failure, ask what schedule is actually operating on them — ratio or interval, fixed or variable. The schedule predicts the persistence far better than character does.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Dopamine is “the pleasure chemical,” and a dopamine hit means a pleasure spike.',
      correction: 'Berridge and Robinson’s wanting-versus-liking research shows dopamine drives incentive salience — wanting and pursuit — while hedonic pleasure runs through separate opioid circuits. Blocking dopamine stops an animal from working for a reward, not from enjoying it once received.',
    },
    {
      misread: 'Any unpredictability is equally powerful.',
      correction: 'Fiorillo, Tobler and Schultz found dopaminergic uncertainty signaling peaks near even odds. A schedule that is almost-always or almost-never rewarding is far weaker than one that is genuinely close to a coin flip.',
    },
    {
      misread: 'Because monkey dopamine neurons show this precisely, phone notifications trigger identical, equally precise effects in humans.',
      correction: 'The monkey findings come from direct single-neuron recordings. Human claims rest on indirect proxies — brain imaging, self-report, behavior — plus the separately robust Skinnerian schedule literature. The logic transfers; the precision of the evidence does not.',
    },
    {
      misread: 'Understanding the mechanism is itself protection.',
      correction: 'Explicit knowledge and the dopaminergic wanting system operate on separate tracks, which is why experienced gamblers and the designers of these very systems remain susceptible. The fix is structural — remove cues, change schedules — not educational.',
    },
    {
      misread: '“Behavioral addiction” to phones or apps is medically identical to substance addiction.',
      correction: 'Treat this as contested. Gambling Disorder is a recognized clinical diagnosis; most phone and social-media “addiction” framing remains debated in psychiatry and lacks the same diagnostic standing, even though the underlying reinforcement mechanics are real.',
    },
  ],
  evidence: [
    {
      source: 'Schultz, Dayan & Montague, “A Neural Substrate of Prediction and Reward” (Science, 1997)',
      finding: 'Formally links midbrain dopamine firing in monkeys to a reward-prediction-error term matching temporal-difference reinforcement-learning models, rather than to reward magnitude directly.',
    },
    {
      source: 'Schultz, single-unit recordings through the 1990s',
      finding: 'Established the three-part signature directly: a burst to unpredicted reward, transfer of that burst onto the predicting cue once learned, and a dip below baseline firing when a predicted reward is withheld.',
    },
    {
      source: 'Fiorillo, Tobler & Schultz, “Discrete Coding of Reward Probability and Uncertainty by Dopamine Neurons” (Science, 2003)',
      finding: 'Sustained anticipatory dopamine activity before a probabilistic reward peaks when the odds are roughly even, rather than scaling simply with how unpredictable the outcome is overall.',
    },
    {
      source: 'Berridge & Robinson, wanting-versus-liking research program (from the late 1990s onward)',
      finding: 'Dopamine depletion or blockade in animals eliminates willingness to work for a reward while leaving hedonic “liking” reactions to that same reward, measured by taste-reactivity responses, largely intact.',
    },
    {
      source: 'Ferster & Skinner, “Schedules of Reinforcement” (1957)',
      finding: 'Across pigeons and rats, variable-ratio schedules produce the highest and steadiest response rates and the greatest resistance to extinction of any reinforcement schedule tested, a result replicated widely since.',
    },
    {
      source: 'Clark, Lawrence, Astley-Jones & Gray, “Gambling Near-Misses Enhance Motivation to Gamble and Recruit Win-Related Brain Circuitry” (Neuron, 2009)',
      finding: 'Near-miss outcomes on slot-machine-style tasks activate reward-related brain circuitry similarly to actual wins, despite being informationally identical to any other loss, especially in people with gambling problems.',
    },
    {
      source: 'Schüll, “Addiction by Design: Machine Gambling in Las Vegas” (2012)',
      finding: 'An ethnographic study documenting how modern slot machines are deliberately engineered — payout schedules, near-miss frequency, losses displayed as wins — to sustain variable-ratio-style engagement.',
      caveat: 'A qualitative, design-history study of the gambling industry, not a controlled experiment, though it is the standard scholarly reference on the topic.',
    },
    {
      source: 'Popular technology-design commentary (e.g., Eyal, “Hooked,” 2014; former “Time Well Spent” critiques of app design)',
      finding: 'Widely cited claims that app features such as infinite scroll and pull-to-refresh deliberately borrow variable-ratio slot-machine mechanics.',
      caveat: 'Design critique and a product methodology book, not peer-reviewed measurement of human dopamine response to phones. Treat the schedule logic as well supported by animal and gambling research, and the specific phone-equals-slot-machine framing as analogy, not direct finding.',
    },
  ],
  takeaways: [
    'Dopamine tracks a prediction error — the gap between expected and received reward — not the reward itself, and not pleasure.',
    'Wanting and liking are separate systems: dopamine drives pursuit and craving; a distinct opioid-based system drives actual enjoyment.',
    'A fully predictable reward produces no dopamine burst at delivery at all — predictability is what kills the signal, which is why guaranteed rewards go flat over time.',
    'Variable-ratio schedules are the hardest reinforcement pattern to extinguish, and the underlying uncertainty signal peaks near even odds, not extreme ones.',
    'Explicit knowledge of the mechanism does not disable it — experienced gamblers and the designers of these systems remain susceptible, because wanting runs upstream of deliberate reasoning.',
    'The precise, robust science sits in animals with directly recorded neurons; the leap to human phone habits borrows the logic convincingly but is an inference, not one unified finding.',
  ],
};
