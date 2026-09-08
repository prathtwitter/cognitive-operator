import type { DeepDive } from '../../../types/curriculum';

/** #25 · Sphere 3 · Tit-for-Tat & Retaliatory Discipline in Iterated Games */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'Robert Axelrod invited game theorists — and, for the rematch, anyone who could code — to submit a computer program to a round-robin tournament with one rule: each round, cooperate or betray, and score points based on both players’ moves. Entrants included professors of mathematics, economics and psychology, submitting programs up to twenty times longer that modeled their opponent, bluffed, and planned several moves ahead. The winning submission, in both tournaments Axelrod ran, was four lines of logic: cooperate first, then do back to your opponent exactly what they just did to you. Every attempt at cleverness in the field lost to a rule simple enough to explain over lunch. That result is one of the most misquoted findings in game theory, and the misquoting starts with what people assume it proves.',
  sections: [
    {
      heading: 'What the rule actually says',
      body: [
        'Tit-for-tat is a strategy for one specific kind of game: a prisoner’s dilemma played repeatedly between the same two parties, with neither side certain when the interaction ends. Strip out the repetition and the uncertainty and the whole logic collapses, because in a single, one-shot prisoner’s dilemma, defecting is the dominant move no matter what the other side does.',
        'The popular version of the phrase, match whatever they do, drops the detail that made Axelrod’s entry win: it starts by cooperating. A version that opens with betrayal is a different, and in his tournaments a measurably worse, strategy, because it forfeits every relationship with a cooperative player before either side has a chance to establish trust.',
        'The mechanics are also narrower than people assume. Tit-for-tat carries exactly one round of memory: it reacts only to your opponent’s very last move and nothing further back. That is its entire strength, since nothing simpler is easier for another player to read and trust, and, as later sections cover, its entire weakness, since it has no way to tell a deliberate betrayal from an honest mistake.',
      ],
    },
    {
      heading: 'Why repetition turns a trap into a truce',
      body: [
        'In a single-shot prisoner’s dilemma, mutual cooperation beats mutual betrayal for both sides, yet betrayal dominates as the individually rational choice regardless of what the other player does, which is the entire puzzle. Repetition changes the arithmetic: if the same two parties expect to keep meeting, today’s betrayal can be punished tomorrow, and that credible threat of future retaliation is what makes cooperation rational rather than naive.',
        'This is also why a known, fixed final round breaks the logic entirely. In the last round there is no tomorrow to fear, so the rational move is to defect. Once that is true of the last round, the second-to-last round has no future consequence either, and the reasoning unravels backward to the very first move. Tit-for-tat’s cooperative case depends on the future staying open or uncertain, not on virtue.',
        'Axelrod later worked with the evolutionary biologist William Hamilton to show the same logic operates in nature: reciprocal cooperation can be an evolutionarily stable strategy, a term John Maynard Smith had coined a few years earlier, wherever the odds of meeting the same individual again are high enough, independent of kinship. The mechanism is not a human invention, it is a solution any sufficiently repeated interaction tends to discover on its own.',
      ],
      example: {
        label: 'The trenches that stopped shooting',
        body: 'Historian Tony Ashworth documented long stretches of the First World War where opposing units, dug into the same fixed positions for months, developed unspoken truces: no shelling during breakfast, warning shots before a real attack, retaliation only once the truce was broken first. No officer ordered this. It emerged because the same two units kept facing each other day after day, and Axelrod later cited it as a real-world case of reciprocal cooperation appearing wherever the future keeps arriving on schedule.',
      },
    },
    {
      heading: 'The move: winning without beating anyone',
      body: [
        'The counterintuitive fact about Axelrod’s tournament is this: tit-for-tat never beat a single opponent in a head-to-head match. It cannot, because it never defects first, which means the best it can ever do against any individual rival is tie. Every one of its wins in the final standings came from the aggregate across many pairings, not from dominating anyone.',
        'The programs built to be clever, defecting occasionally to steal extra points, did the opposite: they scored well against naive cooperators but triggered retaliation from every reciprocal strategy they met, including each other. Their cleverness was self-cannibalizing. Every attempt to exploit a rival capable of retaliating cost more in punishment than it gained in the theft.',
        'The lesson generalizes past the tournament: the objective in an indefinitely repeated relationship is not to win any single exchange, it is to sustain a stream of mutual cooperation that outperforms any run of individual victories. A negotiator who insists on winning every meeting is running exactly the losing strategy Axelrod’s tournament identified.',
      ],
      example: {
        label: 'A strategy that never won a match',
        body: 'Across both of Axelrod’s tournaments, tit-for-tat’s score in any single pairing was never higher than its opponent’s. It topped the final rankings anyway, because it consistently earned the second-best possible outcome, mutual cooperation, against the many reciprocal programs in the field, while more aggressive programs earned occasional high scores against pushovers and then paid for it in escalating punishment from everyone else. Coming in a close second over and over beat coming in first a few times and last the rest.',
      },
    },
    {
      heading: 'Sophistication was not the defense',
      body: [
        'The entrants were not amateurs. Axelrod’s invitation drew professors of game theory, economics, mathematics and computer science, several of whom had published on the prisoner’s dilemma for years before submitting a program built specifically to outsmart the field. Their strategies modeled opponents, tested for exploitability, and defected strategically whenever the odds favored it.',
        'They lost to a submission short enough to read in a minute, entered by Anatol Rapoport, a mathematician who had spent years studying cooperation rather than trying to engineer a way around it. His entry did not out-think anyone. It simply refused to be baited into the spirals the cleverer programs kept walking into with each other.',
        'The deeper point is not that simple beats complex in general. It is that in a field where most other players can also retaliate, sophistication spent on finding an edge is sophistication spent on triggering a fight you cannot win in aggregate. Being the smartest strategy in the room is not the same as being the strategy best suited to the room you are actually in.',
      ],
    },
    {
      heading: 'The dials that turn reciprocity on and off',
      body: [
        'The shadow of the future is the main dial: cooperation needs a high enough probability of meeting again. Extend or obscure a relationship’s horizon, an open-ended contract instead of a one-off purchase, and you strengthen the case for mutual cooperation. Fix a hard, known end date, and you should expect cooperation to erode as it approaches.',
        'Noise is the second dial, and it is one Axelrod’s original tournament did not have to face: any realistic channel occasionally garbles a signal, a message arrives late, an action gets misread as hostile when it was not. Even a small error rate is enough to start an echo, because strict tit-for-tat cannot tell a genuine betrayal from a delivery failure and retaliates identically either way.',
        'Population composition is the third dial. Tit-for-tat thrives once there is a critical mass of other reciprocal players to sustain mutual cooperation and jointly outlast exploitative ones. It struggles to gain any foothold as an isolated player inside a population of unconditional defectors, and Axelrod’s own analysis found it needs to arrive in a cluster, not as a lone convert, to survive at all.',
      ],
    },
    {
      heading: 'Why the tournament win is not the end of the story',
      body: [
        'Say plainly what a tournament victory does and does not prove: tit-for-tat won two specific computer tournaments, against a specific field of entrants, under noise-free conditions. That is a real result, not a proof that reciprocal retaliation is the mathematically optimal way to run every relationship, and later research complicates the story considerably.',
        'Introduce a realistic error rate and strict tit-for-tat turns fragile: a single misread signal between two otherwise cooperative players can trigger retaliation, counter-retaliation, and an alternating spiral neither side intended and neither has a built-in way to stop. Martin Nowak and Karl Sigmund, among others, showed that generous variants, which occasionally forgive an unprovoked defection, and win-stay-lose-shift, which repeats a move only if it just paid off, both recover from noise better than plain tit-for-tat and can outperform it once errors are part of the environment.',
        'William Press and Freeman Dyson went further in 2012, showing that a class of zero-determinant strategies, including extortionate ones, can unilaterally force a fixed, favorable relationship between two players’ scores against any opponent that simply tries to maximize its own payoff. A sufficiently sophisticated player can structurally extract more than a fair share from a naive reciprocator without ever technically breaking a rule.',
        'None of this crowns a permanent champion either: extortionate strategies tend to perform poorly against each other, and are not obviously stable once a population is allowed to evolve. The honest summary is that tit-for-tat is a strong, well-tested starting heuristic, not a proof of general optimality, and any real use of it needs built-in tolerance for noise and an eye open for a subtler counterpart.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'Someone treats a first-time honest mistake exactly the same as a deliberate betrayal.',
      meaning: 'Tit-for-tat with no error correction. This is precisely the failure mode that locks two willing parties into a retaliation spiral neither intended to start.',
    },
    {
      signal: 'A person or team keeps cooperating fully no matter how many times they get exploited.',
      meaning: 'That is unconditional cooperation, not tit-for-tat. Axelrod’s own data says this loses steadily to anyone willing to defect against it.',
    },
    {
      signal: 'A counterpart retaliates instantly and proportionally, then drops the issue completely the moment you correct course.',
      meaning: 'Textbook tit-for-tat: nice, retaliatory, forgiving and clear at once. Expect a stable, long-run working relationship if you hold up your end.',
    },
    {
      signal: 'Two normally reasonable parties are still punishing each other over who defected first, and neither can quite reconstruct how it started.',
      meaning: 'An echo effect: a single misread signal, amplified by strict reciprocity with no error correction, now running on its own momentum.',
    },
    {
      signal: 'A negotiating partner’s concessions leave you very slightly worse off, deal after deal, in a way that is hard to object to any single time.',
      meaning: 'Possible extortionate play: a sophisticated counterpart may be structurally shading every outcome in their favor rather than simply reciprocating.',
    },
    {
      signal: 'A relationship has a known, fixed, publicly agreed end date.',
      meaning: 'The shadow of the future is collapsing. Expect cooperation to erode as the endpoint approaches, especially on the very last exchange.',
    },
  ],
  playbook: [
    {
      move: 'Open every new relationship cooperatively, without exception.',
      how: 'Say, in substance: “Let’s start by each doing what we said we would, and take it from there.” Defecting first has no long-run advantage against a reciprocal field, and it forecloses cooperation with anyone who would have matched you.',
    },
    {
      move: 'Retaliate on the very next move, not the fifth.',
      how: 'The moment a clear, deliberate defection happens, respond in kind immediately and say so plainly: “That breaks what we agreed, so I am pulling back on X until it is corrected.”',
      watchOut: 'Retaliation has to stay proportional and bounded, or you have stopped running tit-for-tat and started running a grudge, which forfeits every advantage the strategy has.',
    },
    {
      move: 'Forgive completely and instantly the moment they revert to cooperating.',
      how: 'Say it once, and mean it: “That is resolved, we are back to normal.” Holding a penalty past the point of genuine reform turns a stable reciprocal relationship into an unwinnable arms race.',
    },
    {
      move: 'Build in deliberate generosity to survive noise.',
      how: 'Treat the first apparent defection from an otherwise reliable counterpart as a possible mistake, not an attack: “That looked like a defection on your end. Did something go wrong, or was that intentional?”',
      watchOut: 'One clarifying question is cheap insurance against a multi-week echo spiral. Skipping it to look tough is how a misunderstanding becomes a war.',
    },
    {
      move: 'Make your own rules legible on purpose.',
      how: 'State your reciprocity policy out loud in advance: “I will match whatever you do here. Full cooperation gets full cooperation, and any shortfall gets an equivalent one back, corrected the moment you correct.”',
    },
    {
      move: 'Watch for a counterpart whose concessions are structurally, not randomly, tilted against you.',
      how: 'Track outcomes across many rounds, not one negotiation at a time. If your share is consistently a little worse no matter what you do, plain reciprocity will not fix it, you need to change the game itself: a third party, a different format, or an exit.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Tit-for-tat means match their last move, so opening with a defection is just as valid a version.',
      correction: 'Axelrod’s tit-for-tat specifically opens with cooperation. A version that opens by defecting is a different, and in his tournaments a worse-performing, strategy. Nice is not decoration, it is load-bearing.',
    },
    {
      misread: 'The tournament win proves reciprocal retaliation is the mathematically optimal way to run any relationship.',
      correction: 'It won two specific tournaments against a specific field, with no noise. Under realistic error rates it can trap both sides in a retaliation spiral, and later work, generous and contrite variants, win-stay-lose-shift, and Press and Dyson’s extortionate strategies, shows approaches that beat plain tit-for-tat in more realistic or more adversarial settings.',
    },
    {
      misread: 'Winning by tit-for-tat means beating your counterpart in each exchange.',
      correction: 'It can never out-score an opponent in a single pairing, because it never defects first. It wins in aggregate, across many relationships, by avoiding the mutual-destruction spirals that exploitative strategies fall into with each other.',
    },
    {
      misread: 'If reciprocity worked once, you can run it unmodified in a relationship with a known ending.',
      correction: 'With a fixed, common-knowledge end point, the logic reverses through backward induction: the safest move in the very last round is to defect, which unravels cooperation back toward the start. The cooperative case depends on the future staying open or uncertain.',
    },
    {
      misread: 'Being forgiving means tolerating repeated bad behavior to preserve the relationship.',
      correction: 'Forgiveness in this sense is conditional and immediate. It activates the instant the other side stops defecting, not before, and it does not mean absorbing ongoing exploitation while waiting for a change that never comes.',
    },
  ],
  evidence: [
    {
      source: 'Axelrod, “Effective Choice in the Iterated Prisoner’s Dilemma” (1980) and The Evolution of Cooperation (1984)',
      finding: 'Describes the two round-robin computer tournaments in which submitted programs played iterated prisoner’s dilemma against each other. Tit-for-tat, one of the simplest entries, won both.',
      caveat: 'The ranking is specific to the entrants, payoff values, and noise-free rules of those two tournaments, not a general proof that reciprocity dominates every possible strategy or environment.',
    },
    {
      source: 'Axelrod & Hamilton, “The Evolution of Cooperation” (Science, 1981)',
      finding: 'Connected the tournament results to evolutionary biology, arguing reciprocal cooperation can be an evolutionarily stable strategy whenever the probability of future interaction between the same two parties is high enough.',
    },
    {
      source: 'Ashworth, Trench Warfare 1914-1918: The Live and Let Live System',
      finding: 'Historical research, later cited by Axelrod, documenting spontaneous, unspoken reciprocal restraint between opposing units on static World War One fronts, including retaliation when a truce was broken, as a real-world case of tit-for-tat-like norms emerging without formal agreement.',
    },
    {
      source: 'Wilkinson, vampire bat food-sharing research (Nature, 1984)',
      finding: 'Documented vampire bats regurgitating blood to roost-mates who had failed to feed, with sharing patterns tracking prior reciprocity rather than kinship alone, a biological example of conditional cooperation resembling tit-for-tat.',
    },
    {
      source: 'Nowak & Sigmund, work on Generous Tit-for-Tat and win-stay-lose-shift (early-to-mid 1990s)',
      finding: 'Found that once noise, a chance of a misimplemented move, enters the environment, strategies that occasionally forgive unprovoked defection, or that switch behavior based on their own last payoff rather than pure reciprocity, can outperform strict tit-for-tat in evolutionary simulations.',
      caveat: 'Which strategy wins is sensitive to the noise rate, payoff values, and the mix of competing strategies in the population. Treat this as evidence that plain tit-for-tat is beatable under realistic conditions, not as proof that any one replacement is universally optimal.',
    },
    {
      source: 'Sugden (1986), and Boerlijst, Nowak & Sigmund (1997), on Contrite Tit-for-Tat',
      finding: 'Describes a variant that tracks whether its own last defection was a justified retaliation or an unprovoked error, and stands down instead of retaliating against its own mistake, built specifically to stop the self-perpetuating echo effect strict tit-for-tat suffers under noise.',
    },
    {
      source: 'Press & Dyson, “Iterated Prisoner’s Dilemma Contains Strategies That Dominate Any Evolutionary Opponent” (PNAS, 2012)',
      finding: 'Identified zero-determinant strategies, including extortionate variants, that can unilaterally force a fixed, favorable linear relationship between two players’ scores against any opponent that adapts to maximize its own payoff.',
      caveat: 'A field-changing theoretical result, but follow-on work found extortionate zero-determinant strategies tend to perform poorly against each other and are not straightforwardly stable once the population itself can evolve. It complicates the story rather than crowning a new champion strategy.',
    },
    {
      source: 'Nowak, “Five Rules for the Evolution of Cooperation” (Science, 2006)',
      finding: 'Situates direct reciprocity, the family of strategies tit-for-tat belongs to, as one of five distinct mechanisms sustaining cooperation, alongside kin selection, indirect reciprocity, network reciprocity and group selection, a reminder that it explains one route to cooperation, not the only one.',
    },
  ],
  takeaways: [
    'Tit-for-tat is a strategy for indefinitely repeated games, not a life philosophy. It depends on the future staying open and uncertain, and unravels toward defection once an end date is fixed and known.',
    'It won Axelrod’s two tournaments in aggregate, not by beating any single opponent. It can never out-score a rival in one pairing, because it never defects first.',
    'It is not the last word. Under noise, plain tit-for-tat can trap both sides in a self-perpetuating retaliation spiral neither one intended to start.',
    'Generous and contrite variants, and win-stay-lose-shift, were built to fix that flaw, and Press and Dyson later showed a sophisticated player can even extort a naive reciprocator. Treat a tournament win as a strong heuristic, not proof of optimality.',
    'Sophistication is not a defense on its own: professional game theorists submitted deliberately complex, exploitative programs to Axelrod’s tournaments, and lost to the simplest reciprocal rule in the field.',
    'The four properties that made it work are separable and all necessary: nice, immediately retaliatory, quick to forgive, and easy for the other side to read. Drop any one and you get a materially worse strategy.',
  ],
};
