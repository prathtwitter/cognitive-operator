import type { DeepDive } from '../../../types/curriculum';

/** #38 · Sphere 4 · Extrinsic Incentive Crowding-Out ("A Fine is a Price") */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'For six years the engineers on a release team stayed late on ship nights. Nobody asked them to. There was no line item, no policy, no overtime code — it was simply what the team was. A new director, meaning nothing but well, introduces a two-hundred-dollar release-night stipend to recognise the effort. Two quarters later a cost review cuts it. Then something nobody predicted happens: people go home. Not in protest, not with a speech. They leave at six. What held for six years without a budget line did not come back when the budget line went away. Somewhere in those two quarters, staying late stopped being who the team was and became something the team got paid for — and once a price exists, zero is a price too, with an obvious answer.',
  sections: [
    {
      heading: 'What the claim actually is',
      body: [
        'The popular version is “money kills motivation,” which is easy to disprove — pay a warehouse picker more per unit and they pick more units, indefinitely. The real claim is narrower. For a specific class of acts, an explicit price does not add to an existing moral motive. It replaces it. The two are not forces summing to a total; they are mutually exclusive descriptions of the same act, and naming a price tells everyone which one now applies.',
        'The precision most people lose is the dependent measure. Edward Deci’s original puzzle studies did not find that paid subjects solved fewer puzzles while being paid. They solved them fine. What changed was measured afterwards, in a free-choice period when nobody was paying or watching — the paid group spent less of that unwatched time on the puzzles. The damage appears in discretionary behaviour after the incentive ends, which is precisely what no organisation instruments.',
        'That points at the part worth acting on. The headline result is not that a fine failed to deter. It is that withdrawing the fine did not restore what existed before it. That asymmetry — a one-way door between a social frame and a market frame — is the robust core, and it survives every methodological argument attached to the rest of the field.',
      ],
    },
    {
      heading: 'Why a price is a message, not just a payment',
      body: [
        'Roland Bénabou and Jean Tirole gave the cleanest account of why this happens: a reward carries information, and the person receiving it reads it. Two inferences arrive uninvited. One is about the task — if you have to pay me, it must be unpleasant, or harder than I assumed. The other is about the relationship — you are paying me because you do not trust me to do it otherwise. Neither is irrational, and both are usually correct.',
        'There is a second channel. Prosocial acts carry reputational value precisely because they are unpaid. If I stay late for nothing, that says something about me, to you and to myself. Attach money and the signal is contaminated at the source: no observer can separate generosity from compensation, and neither can I. The reputational return collapses at the moment the cash arrives, which is why small payments can be a net loss in total motivation.',
        'Seen this way it is sensible engineering, not a glitch. Humans run two exchange systems — a reciprocal one built on obligation and standing, and a market one built on price and settlement. But a single act can only be filed under one at a time, and the market system has the stronger claim, because it comes with a number and a clean point of settlement. Once the debt is settled in cash, nothing is outstanding — and nothing outstanding is what obligation is made of.',
      ],
      example: {
        label: 'Pay nothing, or pay properly',
        body: 'In a companion study to their day-care work, Gneezy and Rustichini asked students to collect charitable donations door to door. One group was told nothing about payment, a second was offered a small commission on what they raised, a third a substantially larger commission. The unpaid group collected the most. The small-commission group collected the least. The large-commission group beat the small one but still did not beat the volunteers. The small payment did the most damage of any option available: too small to work as honest compensation, more than large enough to end the charity frame.',
      },
    },
    {
      heading: 'The move: converting a norm into a line item',
      body: [
        'The nameable move is norm-to-price conversion. It is a category switch, not a dial adjustment, and it is almost always performed by someone trying to be reasonable — formalising an expectation, making an obligation explicit, replacing vague social pressure with a clear rule. Each is good management under normal conditions. Each also publishes a price.',
        'The vivid case is Uri Gneezy and Aldo Rustichini’s study of day-care centres in Haifa, Israel. Some centres introduced a small fine for parents who collected their children late. Deterrence logic predicts fewer late pickups. The opposite happened: late arrivals rose substantially, roughly doubling, and stayed high. Before the fine, lateness meant imposing on a staff member who had to stay behind for you, and that cost was guilt with no ceiling. Afterwards it cost a small published amount — a bargain against unbounded guilt.',
        'The commercially important part came at the end. When the fine was withdrawn, late pickups did not fall back. They stayed elevated, because information cannot be un-published. Parents now knew lateness had a price, roughly what it was, and that the centre was willing to charge it. Setting that price to zero does not restore guilt. It makes the transaction free.',
      ],
      example: {
        label: 'What the withdrawal phase does and does not prove',
        body: 'The removal result is the most useful thing in this literature, and it is worth being plain about how much weight it can carry. This is one field study, across a small number of centres in one city, over a matter of months, without a large-scale replication. Treat the direction and the asymmetry as the finding: a price displaced a moral frame, and removing the price did not bring it back. Do not quote the magnitude as a general effect size, or treat one natural experiment in childcare as a law of organisational behaviour.',
      },
    },
    {
      heading: 'The organisations most exposed are the best-run ones',
      body: [
        'The instinct is that this happens to crude managers who assume everyone is a mercenary. It is closer to the reverse. Designing explicit incentives is a mark of managerial seriousness — what you do when you stop relying on vague goodwill and make expectations legible. The more rigorously you engineer the incentive, the more precisely you have priced the behaviour, and pricing the behaviour is the entire mechanism.',
        'Formal economic training makes it worse. The standard model says incentives are additive and monotonic: more reward, more behaviour. Crowding-out violates exactly that, so the people with the strongest formal model are most likely to predict the opposite of what happens — and most likely to answer a disappointing result by raising the incentive, the one move that cannot recover the lost frame.',
        'There is also an asymmetry between the two sides. From the giving side, money reads as generosity; nobody offering a stipend experiences themselves as cheapening anything. The switch happens on the receiving side, silently, and is never reported upward, because “I felt diminished by the bonus” is not a sentence anyone says to whoever authorised it. Meanwhile the short-run numbers look fine. What erodes is the surrounding discretionary effort, which appears on no dashboard until someone notices years later that the culture is gone.',
      ],
    },
    {
      heading: 'The conditions that decide which way it goes',
      body: [
        'Crowding-out is not a general property of money. It switches on under identifiable conditions, which turns the idea from an anxiety into a design constraint. It requires, first, that a non-market motive is already doing real work — obligation, professional pride, reciprocity, identity. Where none exists, adding money simply works and adding more works better. Nobody stuffs envelopes for the love of it, and paying more per envelope has never destroyed anyone’s envelope-stuffing ethic.',
        'Given that precondition, the reward structure decides the rest. Deci, Koestner and Ryan’s meta-analytic finding is that expected, tangible rewards contingent on doing the task are the ones that undermine free-choice engagement, while verbal praise generally does not and unexpected rewards delivered afterwards are far safer than promised ones. Size runs in a non-obvious direction: small payments are the most dangerous, because they end the moral frame without replacing it.',
        'The switch-off conditions are equally concrete. Framing matters — “a fine,” “a fee,” “a rate” publish a price; standing and consequence do not. Money framed as removing an obstacle rather than pricing the act tends not to bite: covering a taxi, buying back time, paying an expense. What the payment means to the person receiving it, not the amount, is what moves the behaviour — which is why two identical sums, framed differently, can produce entirely different results.',
      ],
      example: {
        label: 'The blood-donation test',
        body: 'Richard Titmuss argued in 1970 that paying for blood would reduce both supply and quality — an argument built largely on comparing national systems rather than on experiment, and contested for decades on exactly that ground. A later Swedish field experiment tested a version of it and found something more specific: offering payment reduced donation rates among women but not men, and the reduction vanished when the payment could be redirected to charity. One study, one country, and a gender split that is not settled — but strong evidence that meaning, not cash, does the work.',
      },
    },
    {
      heading: 'The honest limits, and the way this gets abused',
      body: [
        'The undermining effect is not uncontested, and pretending otherwise would be dishonest in a piece about incentives. Deci, Koestner and Ryan’s meta-analysis of well over a hundred experiments concluded that tangible, expected, contingent rewards reliably reduce free-choice intrinsic motivation. Judy Cameron and David Pierce, over a largely overlapping literature, reached materially weaker conclusions — detrimental effects confined to a narrow band of conditions. The disagreement turns on inclusion criteria and on which outcome counts as motivation, and anyone citing one side as settled is citing selectively.',
        'Several field results carry their own limits. Bruno Frey and Felix Oberholzer-Gee’s well-known Swiss finding — that residents’ stated willingness to host a nuclear waste repository fell sharply once compensation was attached, and did not recover when the offer was raised — is a survey of stated preferences, not observed behaviour. What survives is the direction of the effect and the one-way-door asymmetry, which appear independently across quite different settings.',
        'The last thing to guard against is the self-serving misuse, now more common in business than the mistake the research describes. “We motivate with mission, not money” is the standard cover for underpaying people, and none of this supports it. The finding concerns small, contingent, act-specific payments layered on an existing non-market motive. Pay people properly and unconditionally so money stops being a live question — then be careful about pricing any individual act you would rather they performed out of pride.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'Someone proposes a small per-act bounty for behaviour that already happens voluntarily.',
      meaning: 'The most dangerous configuration available: large enough to publish a price, too small to work as compensation. Expect the voluntary version to stop.',
    },
    {
      signal: 'A fine or fee is introduced and the penalised behaviour goes up rather than down.',
      meaning: 'The charge was read as a price, not a punishment. Unbounded guilt has been swapped for a small, known, purchasable amount.',
    },
    {
      signal: 'The response to a disappointing incentive is to increase the incentive.',
      meaning: 'The moral frame is already gone and cannot be bought back. Raising the number only competes on price in a market you accidentally created.',
    },
    {
      signal: 'Discretionary extras disappear while the specifically measured behaviour holds steady.',
      meaning: 'The free-choice signature. Compliance on the paid task is intact; the unpaid surrounding effort nobody instruments is what eroded.',
    },
    {
      signal: 'A long-standing informal practice gets formalised “so it is fair and explicit.”',
      meaning: 'Formalisation publishes a price and a boundary. Once an obligation has an exact edge, everything just outside that edge becomes optional.',
    },
    {
      signal: 'A stipend is withdrawn and the original behaviour does not return.',
      meaning: 'The one-way door. Removing the payment resets the price to zero rather than restoring the norm that preceded it.',
    },
  ],
  playbook: [
    {
      move: 'Ask what motive is already doing the work before you price anything.',
      how: 'Say plainly: “Before we attach a number — is anyone doing this for reasons other than money?” If the honest answer is no, incentivise freely. If yes, you are trading an existing motive for a purchased one, and you should say so out loud.',
      watchOut: 'Do not turn this into a veto on all incentives. Most work has no intrinsic motive to protect, and blocking pay-for-performance on these grounds is its own expensive mistake.',
    },
    {
      move: 'Refuse the small bounty specifically.',
      how: '“If this is worth paying for, let’s pay properly and put it in the role. If it isn’t worth that, let’s not put a number on it at all. A hundred dollars a pop is the one option that gets us the worst of both.”',
    },
    {
      move: 'Pay for the obstacle, not for the act.',
      how: 'Fund the taxi, buy back the time, cover the expense, staff the gap — remove a cost of doing the thing without pricing the thing. The difference between “here is what your Saturday was worth” and “you should not be out of pocket for this.”',
      watchOut: 'The distinction collapses if reimbursement scales with output. The moment it is per-unit, it is a price again whatever you call it.',
    },
    {
      move: 'Make rewards retrospective and unexpected wherever you can.',
      how: 'Promised, tangible, task-contingent rewards are the corrosive ones; recognition after the fact is not. Say “this was outstanding and I want it marked” after the work, rather than “there is a bonus attached” before it.',
    },
    {
      move: 'Use consequence language instead of price language.',
      how: 'A published charge invites payment; a named consequence does not. “The team covers for you when you are late, and that is not something you can settle with us — so let’s work out why it keeps happening.” The obligation stays unbounded, which is the point.',
      watchOut: 'This reads as moralising on anything trivial. Reserve it for behaviour that genuinely imposes on identifiable colleagues.',
    },
    {
      move: 'Treat any incentive removal as a permanent decision.',
      how: 'Before launching a stipend, bonus or fee, ask: “If we cancel this in two years, are we comfortable with the behaviour never returning?” Assume the pre-incentive norm does not come back, because in the study that tested it directly, it did not.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Money demotivates people, so pay less and lead with purpose.',
      correction: 'The most self-serving misreading. The research concerns small, contingent payments attached to acts that already ran on a non-market motive. It says nothing in favour of low base pay. Pay well enough and unconditionally enough that compensation stops being a live question, then be careful about pricing individual acts.',
    },
    {
      misread: 'The day-care study proves fines generally backfire.',
      correction: 'It is one field study across a small number of centres in a single city, without large-scale replication. Fines demonstrably work where no moral frame was doing the work in the first place. What generalises is the mechanism and the asymmetry, not the magnitude or the universality.',
    },
    {
      misread: 'If crowding-out happened, you can undo it by removing the incentive.',
      correction: 'This is what most directly contradicts intuition. Withdrawing the payment sets the price to zero rather than restoring the obligation, and the one study that tested the withdrawal phase found the elevated behaviour persisted. Plan incentives as one-way doors.',
    },
    {
      misread: 'The undermining effect is settled science.',
      correction: 'It is not. Deci, Koestner and Ryan found reliable undermining from expected, tangible, contingent rewards; Cameron and Pierce, over largely overlapping studies, concluded the effect is narrow. The dispute turns on inclusion criteria and on whether free-choice behaviour or self-reported interest is the right measure, and it is open.',
    },
    {
      misread: 'It is the amount of money that matters, so a big enough number fixes it.',
      correction: 'What the money means matters more than how much there is. Payment framed as removing a cost, delivered unexpectedly, or redirectable to charity behaves differently from an identical sum framed as a rate for the act. Small payments do the most damage, because they end the moral frame without replacing it with a credible commercial one.',
    },
  ],
  evidence: [
    {
      source: 'Gneezy & Rustichini, “A Fine Is a Price” (Journal of Legal Studies, 2000)',
      finding: 'Day-care centres in Haifa that introduced a small fine for late pickup saw late arrivals rise substantially rather than fall, roughly doubling and staying high. When the fine was later withdrawn, lateness did not return to its pre-fine level.',
      caveat: 'A single field study across a small number of centres in one city, without large-scale replication. The direction and the non-reversal are durable; the magnitude is not a general effect size.',
    },
    {
      source: 'Gneezy & Rustichini, “Pay Enough or Don’t Pay at All” (Quarterly Journal of Economics, 2000)',
      finding: 'Students collecting charitable donations raised the most when offered no payment, the least when offered a small commission, and an intermediate amount when offered a substantially larger one — a non-monotonic pattern standard incentive theory does not predict.',
    },
    {
      source: 'Deci, Koestner & Ryan, meta-analysis of reward effects on intrinsic motivation (Psychological Bulletin, 1999)',
      finding: 'Across well over a hundred experiments, expected tangible rewards contingent on task engagement, completion or performance reliably reduced free-choice intrinsic motivation, while verbal praise generally enhanced it and unexpected rewards did not undermine it.',
    },
    {
      source: 'Cameron & Pierce (1994); Eisenberger & Cameron (1996) — the competing meta-analytic position',
      finding: 'Over a largely overlapping body of studies, these authors concluded that detrimental effects of reward are limited to a narrow set of conditions and that reward is broadly neutral or beneficial for later motivation.',
      caveat: 'A genuine unresolved dispute, not a fringe objection. It hinges on inclusion criteria and on whether unwatched free-choice behaviour or self-reported interest is the correct outcome measure.',
    },
    {
      source: 'Deci, Soma-puzzle experiments (1971); Lepper, Greene & Nisbett, overjustification study (1973)',
      finding: 'Paid subjects performed normally while being paid but spent less unwatched free-choice time on the task afterwards. Preschoolers promised an expected award for drawing later chose to draw less freely than those given an unexpected award or none.',
    },
    {
      source: 'Bénabou & Tirole, “Intrinsic and Extrinsic Motivation” (2003); “Incentives and Prosocial Behavior” (2006)',
      finding: 'A formal account of why rewards backfire: a reward carries information about the task and about the principal’s trust, and dilutes the reputational signal value of a prosocial act — making it a weak long-run reinforcer even where it works short-term.',
      caveat: 'Theoretical modelling that explains the observed pattern, not independent confirmation of it.',
    },
    {
      source: 'Titmuss, “The Gift Relationship” (1970); Mellström & Johannesson, Swedish blood-donation field experiment (2008)',
      finding: 'Titmuss argued paying for blood would reduce supply and quality. A later field experiment found offering payment reduced donation among women but not men, and that the reduction disappeared when the payment could be redirected to charity.',
      caveat: 'Titmuss’s original case was comparative and observational and was disputed for decades. The gender difference comes from one study in one country and is not an established pattern.',
    },
    {
      source: 'Frey & Oberholzer-Gee, compensation and NIMBY siting in Switzerland (American Economic Review, 1997)',
      finding: 'Residents’ stated willingness to accept a nuclear waste repository nearby fell sharply once financial compensation was attached, and raising the amount offered did not recover the lost support.',
      caveat: 'A stated-preference survey rather than observed behaviour, with no money changing hands. Suggestive of the mechanism, not a demonstration of it.',
    },
  ],
  takeaways: [
    'The claim is not that money demotivates. It is that an explicit price can replace a moral frame rather than adding to it — alternative descriptions of one act, not forces that sum.',
    'The asymmetry is the part to act on: removing the price does not restore the norm. Treat every incentive you launch as a one-way door.',
    'Small per-act payments are the worst configuration available — big enough to publish a price, too small to work as honest compensation.',
    'It only bites where a non-market motive is already doing real work. Where none exists, incentives are just incentives and more of them works fine.',
    'The dispute is real: Deci, Koestner and Ryan found reliable undermining; Cameron and Pierce, over overlapping evidence, found little. Do not rest an argument on one day-care study’s magnitude.',
    '“We motivate with mission, not money” is the most common abuse of this research. Pay properly and unconditionally, then be careful about pricing individual acts.',
  ],
};
