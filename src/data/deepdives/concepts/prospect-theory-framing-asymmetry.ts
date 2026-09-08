import type { DeepDive } from '../../../types/curriculum';

/** #21 · Sphere 3 · Prospect Theory & Framing Asymmetry */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'An outbreak is expected to kill 600 people. You are choosing between two programmes. Programme A: 400 people will die. Programme B: a one-third chance nobody dies, a two-thirds chance all 600 die. Choose before you read on. Most people take the gamble. Now the same choice in different words. Programme A: 200 people are saved. Programme B: a one-third chance 600 are saved, a two-thirds chance none are. Most people now take the sure thing. Four hundred dying out of six hundred is two hundred saved. The arithmetic did not move. The wording did, and it moved the decision with it.',
  sections: [
    {
      heading: 'Four moving parts, and everyone remembers one',
      body: [
        'The popular version of prospect theory is a single sentence: losses hurt about twice as much as equivalent gains feel good. That sentence is one of four components in the 1979 model, and taken alone it predicts almost nothing you can act on.',
        'The first component is reference dependence. People do not evaluate final states of wealth, health or headcount. They evaluate movements away from a reference point — and the reference point is psychological, not accounting. The second is diminishing sensitivity: the difference between $100 and $200 feels larger than the difference between $1,100 and $1,200, in both directions. The third is loss aversion proper: the value curve is steeper below the reference point than above it. The fourth, and the one almost nobody carries, is probability weighting — small probabilities are overweighted, moderate and large ones underweighted.',
        'Put the third and fourth together and you get the fourfold pattern, which is where the real predictive power sits. People are risk-averse for likely gains and risk-seeking for unlikely ones — that is why the same person buys insurance and lottery tickets. And people are risk-seeking for likely losses but risk-averse for unlikely ones. The last two are the ones that decide business outcomes.',
        'This matters because the shorthand “put someone in the loss frame and they get reckless” is only true in one quadrant: when the loss is probable and large. When the loss is unlikely, a loss frame makes people cautious and insurance-buying, not desperate. Deploying the wrong quadrant is how a well-intentioned loss frame produces paralysis instead of movement.',
      ],
    },
    {
      heading: 'Why a change detector is the right instrument',
      body: [
        'Reference dependence looks like a bug until you notice that every sensory system you own works exactly this way. Put one hand in ice water and the other in hot water, then plunge both into a bucket of lukewarm water. The same water registers as hot to one hand and cold to the other. Your skin does not report temperature. It reports change from where it was adapted.',
        'There is a good engineering reason. A nervous system has limited dynamic range. Spending it on encoding absolute levels with fine resolution is wasteful, because absolute levels change slowly and rarely require action. Spending it on encoding deviations gives you high resolution exactly where the information is. Wealth, status, market share and headcount are all processed by the same architecture.',
        'The evolutionary story usually attached to this — that an organism near a subsistence threshold should treat losses as more urgent than equivalent gains — is plausible and internally consistent, but it is a rationalisation offered after the fact rather than a tested claim. Treat it as an explanation of why the asymmetry is not absurd, not as evidence that it exists.',
        'The operational consequence is the whole game. Your counterparty is not evaluating your offer. They are evaluating the gap between your offer and a reference point that lives in their head, that they did not choose deliberately, and that you frequently cannot see. Two people can receive the identical proposal and one experiences a windfall while the other experiences a robbery.',
      ],
      example: {
        label: 'The same forty cents, twice',
        body: 'When US retailers began charging more for credit than cash in the 1970s, the credit card industry fought hard over one thing: what the difference would be called. Not its size — its label. A “credit card surcharge” codes as a penalty against the posted price. A “cash discount” codes as a bonus against a higher posted price. The cash flow is identical to the cent. The industry understood that customers do not price-compare, they reference-compare, and that whoever writes the sign chooses the reference point.',
      },
    },
    {
      heading: 'The move is naming the baseline',
      body: [
        'The lever is not the number. Almost everyone negotiates the number, which is the visible part and the part where positions are already defended. The lever is the baseline the number is measured against, which is usually set casually, early, and by whoever spoke first.',
        'Watch it operate in a budget review. A team that spent $4M last year and requests $4.4M is asking for a 10% increase and will be interrogated. The identical team, if the conversation opens with a company-wide 15% cut mandate, is now proposing to absorb a smaller cut than its peers and reads as disciplined. Nothing about the plan changed. The baseline moved from “last year” to “the mandate,” and the request flipped from a gain to be justified into a loss to be minimised.',
        'The same move runs contract renewals, severance conversations, performance reviews and pricing. Is your renewal quote an increase on what they paid, or a discount on list? Is a restructuring a cut against headcount, or a saving against the do-nothing forecast? Both are true. Only one gets said first, and the one said first usually wins.',
        'The precise tell that a baseline is being installed rather than argued is that the reference point is asserted in passing, in a subordinate clause, before anyone has agreed to it. “Given that we are all working from a flat budget this year …” is not a premise anyone voted for. It is the entire negotiation, delivered as preamble.',
      ],
      example: {
        label: 'Status quo is not neutral',
        body: 'Executive committees consistently treat inaction as the safe option, because doing nothing feels like staying at the reference point rather than moving away from it. That is an accounting error. If a competitor is taking share every month, the status quo is not a flat line — it is a steady loss that has been miscoded as a baseline. The most valuable thing a person can do in a stalled room is re-anchor the reference point onto the trajectory rather than the present position: not “what do we risk by acting” but “what are we already losing every month we do not.”',
      },
    },
    {
      heading: 'Expertise sharpens the frame, it does not dissolve it',
      body: [
        'The most instructive evidence here is not from students. In 1982, McNeil, Pauker, Sox and Tversky described identical lung cancer treatment outcomes to patients, graduate students and experienced physicians, varying only whether the data were expressed as survival rates or mortality rates. Preference for surgery over radiation shifted substantially with the wording. The physicians were not less affected than the students. These were people who read this kind of data professionally.',
        'Terrence Odean\'s work on retail brokerage accounts shows the same asymmetry with real money. Investors sold their winners at a markedly higher rate than their losers, holding the losers to avoid crossing the line from a paper loss into a realised one — and the winners they sold subsequently outperformed the losers they kept. Every one of those people knew, in the abstract, that the purchase price is irrelevant to whether an asset is worth holding.',
        'The reason knowing does not protect you is structural, and it is the single most useful thing on this page. Framing effects survive because you almost never see both frames. The counterfactual wording is not withheld from you cleverly — it simply does not exist in the room. You cannot detect an asymmetry between two descriptions when you have only ever been shown one. Every experiment that demonstrates framing does so by comparing across people, precisely because no individual can run the comparison inside their own head.',
        'So the defence is not vigilance. Vigilance has nothing to inspect. The defence is procedural: manufacture the second frame yourself, deliberately, before deciding.',
      ],
    },
    {
      heading: 'The switches that turn it up and down',
      body: [
        'Separate versus joint evaluation is the biggest switch. Present two options one at a time and framing dominates; present them side by side and people compare on the attributes that actually differ, and the effect shrinks sharply. Christopher Hsee built a research programme on this. Almost every consequential decision in business arrives in separate evaluation — one vendor at a time, one candidate at a time, one budget cycle at a time — which is why the framing survives into rooms full of competent people.',
        'Bracketing is the second switch. Evaluate a risky bet in isolation and loss aversion bites hard; evaluate it as one draw from a portfolio you will repeat many times and it mostly disappears. Benartzi and Thaler used this to explain why long-horizon investors hold too few equities: the more often you check the balance, the more losses you experience, and the more conservatively you invest. Gneezy and Potters showed the same effect experimentally by varying how frequently participants saw their returns.',
        'Reference point ambiguity is the third, and it is where the leverage lives. When a liquid market price exists, there is little room to install a baseline — everyone knows what the thing costs. When the reference point is genuinely contestable, which is true of most internal budgets, salaries for uncommon roles, professional services and strategic bets, the first credible baseline usually stands.',
        'Finally, the probability region. A loss frame turns a room aggressive when the loss is probable and material. Apply the same frame to a remote tail risk and you get insurance-buying caution instead. Check which quadrant you are in before choosing your framing.',
      ],
    },
    {
      heading: 'What to trust, and what to quietly discount',
      body: [
        'Framing effects themselves are solid. The gain-versus-loss framing item was included in the Many Labs replication project and reproduced consistently across dozens of independent samples with a large effect. If someone tells you framing research collapsed in the replication crisis, they are conflating it with the priming literature. It did not.',
        'The 2:1 multiplier is a different matter. The figure most often quoted, around 2.25, is a median parameter fitted by Tversky and Kahneman in 1992 to a modest sample answering hypothetical monetary gambles. It is a summary statistic from one elicitation procedure, not a physical constant. Later estimates vary widely with domain, stake size and how the question is asked, and some conditions produce no asymmetry at all. Quote it as a rough central tendency or, better, do not quote a number.',
        'There is also a live challenge to the generality of loss aversion. Gal and Rucker argued in 2018 that much of the supporting evidence admits simpler explanations — inertia, attention, the order in which people query their own preferences — and that the principle has been treated as more established than the data warrant. The endowment effect, long cited as clean proof, turned out to be procedure-sensitive: Plott and Zeiler reported that the buying-selling gap shrank substantially under revised protocols with training and anonymity, though that interpretation is itself disputed.',
        'Hold the two apart and you lose nothing operationally. Reference points determine how an outcome is experienced, and whoever sets the baseline shapes the response — that survives every critique on the table. Whether the loss limb is exactly twice as steep as the gain limb is an academic question you do not need answered to run a negotiation.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'A baseline is asserted in a subordinate clause before anyone has agreed to it — “given that we are flat on budget …”',
      meaning: 'The reference point is being installed rather than negotiated. Everything argued afterwards happens inside a frame nobody voted for.',
    },
    {
      signal: 'The identical cash flow is described as a discount by one party and a penalty by the other.',
      meaning: 'Both parties have correctly identified that the label, not the amount, determines how the deal feels. Whoever gets their label into the document wins the framing.',
    },
    {
      signal: 'Someone defends holding a failing position by saying it is “not a real loss until we exit.”',
      meaning: 'Sunk entry price is being used as the reference point. The decision has moved into the loss domain, where appetite for further risk goes up rather than down.',
    },
    {
      signal: 'A stalled committee describes doing nothing as the cautious option.',
      meaning: 'The status quo has been miscoded as the reference point. If the trajectory is negative, inaction is an active loss wearing a baseline\'s clothes.',
    },
    {
      signal: 'A deadline is described in terms of what expires rather than what is offered.',
      meaning: 'Deliberate loss framing on a probable, near-term outcome — the quadrant where it works hardest. Notice it, then evaluate the offer on its merits.',
    },
    {
      signal: 'Options arrive strictly one at a time, never side by side.',
      meaning: 'Separate evaluation. It may be innocent scheduling, but it is also the condition under which framing has maximum grip.',
    },
  ],
  playbook: [
    {
      move: 'Say the offer back in the opposite frame before responding to it.',
      how: 'Out loud, and neutrally: “Let me restate that as a loss so I can see both versions — this is a 4% increase on what we paid last year, and it is also a 9% discount on your list. Which of those is the number you want in the contract?” Naming both descriptions is the only reliable way to manufacture joint evaluation for yourself.',
      watchOut: 'Do this as a request for clarity, not as an accusation of manipulation. The moment it sounds like you are catching someone out, they defend the frame instead of discussing it.',
    },
    {
      move: 'Set the baseline before you argue the number.',
      how: 'Open by establishing the comparison, not the price: “Before we get to figures, I want to agree what we are measuring against — the do-nothing forecast, or last year\'s actuals. Those give very different answers.” Get agreement on the reference point while it still looks like a procedural question.',
      watchOut: 'A baseline that is transparently self-serving gets rejected and burns credibility. Choose one you can defend with an external source.',
    },
    {
      move: 'Convert inaction from a baseline into a running loss.',
      how: 'Quantify the trajectory and attach a period to it: “Waiting a quarter is not holding position. On current share trend it is roughly [X] of revenue we do not get back, and the cost compounds because the accounts we lose renew on three-year terms.” Loss framing works on the status quo precisely because nobody has coded it as a loss yet.',
      watchOut: 'This only moves people when the loss is probable and material. Applied to a remote tail risk it produces caution and insurance-shopping, which is the opposite of what you wanted.',
    },
    {
      move: 'Force joint evaluation into the room by construction.',
      how: 'Never let options be reviewed sequentially when you can help it. Put all candidates, all vendors or all scenarios on one page with the same columns, and require the group to fill the comparison before anyone gives an opinion. Side-by-side comparison is the single most effective structural defence against framing.',
    },
    {
      move: 'Widen the bracket on repeated risks.',
      how: 'When someone rejects a favourable bet because a single bad outcome is intolerable, restate it as a portfolio: “We will run this decision about thirty times over the next two years. What is the expected result across thirty, not across this one?” The refusal usually softens once the draw is no longer being evaluated in isolation.',
      watchOut: 'Only legitimate when the decision genuinely repeats and no single outcome is ruinous. If one bad draw can end the company, narrow bracketing is correct and you should not talk anyone out of it.',
    },
    {
      move: 'Ask for the counterparty\'s reference point directly.',
      how: 'The question is: “What are you comparing this to?” It is disarming, it is not adversarial, and the answer tells you which baseline is doing the work in their head — which is the thing you actually need to move.',
      watchOut: 'They may not know. Reference points are frequently unexamined, and an unexamined one is easier to shift than a defended one, so treat vagueness as an opening rather than an obstacle.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Losses always make people take bigger risks.',
      correction: 'Only in one quadrant of the fourfold pattern — when the loss is probable and substantial. For unlikely losses, people become risk-averse and buy protection. A loss frame applied to a low-probability threat produces paralysis and hedging, not boldness.',
    },
    {
      misread: 'Losses hurt exactly twice as much as gains. That is the constant.',
      correction: 'The figure around 2.25 is a median coefficient fitted to hypothetical gambles in one 1992 study, not a universal parameter. Published estimates vary substantially by domain, stake size and elicitation method, and some conditions produce no asymmetry. Use it as a rough direction, never as a calculation input.',
    },
    {
      misread: 'Prospect theory failed to replicate along with the rest of behavioural science.',
      correction: 'Framing effects reproduced strongly in large multi-lab replication work. What is genuinely contested is the generality of loss aversion as a mechanism and the cleanliness of the endowment-effect evidence. Those are different claims and one does not take down the other.',
    },
    {
      misread: 'If I know about framing, I can spot it and correct for it.',
      correction: 'You can only detect an asymmetry by comparing two descriptions, and in real decisions you are shown one. Knowledge without a second frame has nothing to operate on. The defence is procedural — construct the opposite framing deliberately — not attentional.',
    },
    {
      misread: 'The reference point is the current state of affairs.',
      correction: 'It is whatever the person is comparing against, which may be an expectation, a peer, a forecast, a prior year, or a promise someone made them. Kőszegi and Rabin modelled reference points as expectations rather than status quo. In practice you have to ask, because you will guess wrong.',
    },
  ],
  evidence: [
    {
      source: 'Kahneman & Tversky, “Prospect Theory: An Analysis of Decision under Risk” (Econometrica, 1979)',
      finding: 'Outcomes are coded as gains and losses against a reference point rather than as final wealth states. The value function is concave for gains, convex for losses and steeper on the loss side, and stated probabilities are replaced by decision weights that overweight small probabilities.',
    },
    {
      source: 'Tversky & Kahneman, “The Framing of Decisions and the Psychology of Choice” (Science, 1981)',
      finding: 'The disease problem. Roughly three-quarters of respondents chose the certain option when outcomes were described as lives saved; a similar majority chose the gamble when the identical outcomes were described as deaths.',
    },
    {
      source: 'Klein and colleagues, Many Labs replication project (2014)',
      finding: 'The gain-versus-loss framing item was reproduced across dozens of independent samples with a large and consistent effect. Framing is one of the sturdier findings in the field, which is worth knowing given how much neighbouring work did not survive replication.',
    },
    {
      source: 'McNeil, Pauker, Sox & Tversky (New England Journal of Medicine, 1982)',
      finding: 'Identical lung cancer outcome data described as survival rates versus mortality rates shifted stated preference between surgery and radiation. The shift appeared in experienced physicians as well as in patients and students.',
    },
    {
      source: 'Tversky & Kahneman, Cumulative Prospect Theory (Journal of Risk and Uncertainty, 1992)',
      finding: 'Refined the model and documented the fourfold pattern of risk attitudes across the four combinations of gain/loss and high/low probability. Reported a median loss-aversion coefficient of about 2.25.',
      caveat: 'That coefficient is a median parameter fit from a small sample answering hypothetical monetary gambles. It is not a constant. Later estimates range widely by domain, stakes and elicitation method, and treating 2:1 as a fixed multiplier is a misuse of the finding.',
    },
    {
      source: 'Odean, “Are Investors Reluctant to Realize Their Losses?” (Journal of Finance, 1998)',
      finding: 'In a large set of discount brokerage accounts, investors realised gains at a substantially higher rate than losses, and the winners they sold went on to outperform the losers they held. Real money, real consequences, and the purchase price acting as an unwarranted reference point.',
    },
    {
      source: 'Gal & Rucker, “The Loss of Loss Aversion” (Journal of Consumer Psychology, 2018)',
      finding: 'Argues that loss aversion as a general principle is far less well supported than its textbook status implies, and that much of the supporting evidence is explained at least as well by inertia, attention and the order in which people query their own preferences.',
      caveat: 'This is a live dispute, not a settled overturning — the paper drew substantial rebuttal. The safe position is that reference dependence and framing are secure while any specific loss-aversion multiplier is not.',
    },
    {
      source: 'Plott & Zeiler (American Economic Review, 2005)',
      finding: 'The willingness-to-accept versus willingness-to-pay gap in the classic mug experiments shrank or disappeared under revised procedures that added training, practice rounds and anonymity, suggesting part of the endowment effect reflects subject misconception about the task.',
      caveat: 'Contested. Researchers in the Kahneman-Knetsch-Thaler tradition dispute the interpretation and the choice of controls. Take it as evidence that the endowment effect is procedure-sensitive rather than as proof it does not exist.',
    },
  ],
  takeaways: [
    'Whoever names the baseline has already won most of the negotiation, because the number is only ever evaluated against it.',
    'Reference dependence is not a quirk. Every sensory system you own encodes change rather than absolute level, for good engineering reasons.',
    'Loss frames drive risk-seeking only for probable, material losses. On remote risks the same frame produces caution and hedging.',
    'You cannot spot framing by being alert, because you are only ever shown one frame. Construct the opposite wording deliberately.',
    'Framing effects replicate robustly. The precise 2:1 loss-aversion multiplier does not — quote the mechanism, not the coefficient.',
    'Side-by-side comparison is the cheapest structural defence available. Separate evaluation is where framing does all of its work.',
  ],
};
