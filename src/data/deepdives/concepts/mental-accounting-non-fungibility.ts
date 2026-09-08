import type { DeepDive } from '../../../types/curriculum';

/** #39 · Sphere 4 · Mental Accounting & Non-Fungibility Traps */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'A finance director who builds discount-rate models for a living has fourteen thousand dollars sitting in a house-deposit account earning almost nothing, and six thousand on a credit card at twenty-two per cent. She can do the arithmetic faster than you can. She could clear the card tomorrow and be several hundred dollars a year better off, permanently, with no risk and no cleverness required. She will not do it. Ask her why and she gives an answer that is not stupid at all: if she raids the deposit account, she will not rebuild it. She is probably right about that — which is the part that makes this hard. The dollars in both accounts are legally and functionally identical. She is knowingly paying interest to buy something her spreadsheet has no column for.',
  sections: [
    {
      heading: 'What the system actually is, and the two-thirds people forget',
      body: [
        'The popular version of mental accounting is “people put money in irrational buckets.” That is a third of the idea, and the least interesting third. Richard Thaler described a full bookkeeping system with three components, and the buckets are only one of them.',
        'The first component is how outcomes get coded. Thaler split the value of a purchase into acquisition utility — what the thing is worth to you — and transaction utility, the pleasure or pain of the deal itself measured against a reference price. Transaction utility is why a bargain on something you do not need feels like a gain, and why an identical beer from a resort hotel is worth more to a thirsty sunbather than one from a shabby grocery, though both are drunk on the same beach.',
        'The second component is the buckets: money gets labelled at entry, by where it came from and what it is for, and budgets are set per category. The third, most neglected component is evaluation frequency — how often an account is opened, reviewed and closed. Change nothing but how often you look at a portfolio and you change how much risk you are willing to hold in it. The buckets get all the attention; how and when accounts get closed does much of the damage.',
      ],
    },
    {
      heading: 'Why the ledger exists at all',
      body: [
        'True fungibility is computationally brutal. Honouring it means evaluating every six-dollar coffee against every other possible use of six dollars across your remaining life, including retirement. Nobody runs that optimisation, and a mind that tried would never buy anything. Categories are the compression that makes ordinary decisions possible at all — a budget is a pre-computed answer to a question too expensive to ask fresh each time.',
        'The second reason is more important, and it is the one that makes naive advice dangerous. Thaler and Hersh Shefrin modelled a person as two agents sharing a wallet: a far-sighted planner and a myopic doer. The planner cannot directly control the doer. What the planner can do is make money hard to reach — put it behind a label, a separate account, a withdrawal penalty, a social meaning. Non-fungibility is not a bug in the planner’s system. It is the planner’s only real lever.',
        'That shows up in the data. Shefrin and Thaler’s behavioural life-cycle account predicts that the propensity to spend an extra dollar differs sharply depending on which account it lands in — highest out of current income, lower out of accumulated assets, lowest out of future income. Standard theory says these should all be roughly the same. They are not, and the gap is the fence doing exactly what a fence is for.',
      ],
      example: {
        label: 'Labels that make people richer',
        body: 'A field experiment with low-income workers in India found that cash physically partitioned and earmarked in sealed envelopes produced higher savings than the same cash handed over unpartitioned — and that the effect strengthened when the envelope carried a photograph of the saver’s children. A separate field experiment in Germany found that people did not treat category-labelled vouchers as interchangeable with cash, spending more in the labelled category than fungibility predicts, with the effect concentrated among the less numerate. In one setting the violation of fungibility raised people’s savings; in the other it pulled their spending away from what they would otherwise have chosen. Same mechanism, opposite verdicts.',
      },
    },
    {
      heading: 'The move: where a dollar gets filed decides how it is spent',
      body: [
        'The mechanism is source-and-use coding at the point of entry. Money is booked into an account the moment it arrives, quickly and without deliberation, and every later decision is made inside that booking rather than against it. Once filed, a dollar is not competing with all your other dollars. It is competing only with the other dollars in its own column.',
        'The cleanest demonstration is a pair of questions Kahneman and Tversky put to people. In one, you have already bought a ten-dollar theatre ticket and discover you have lost it at the door — would you buy another? In the other, you are about to buy a ten-dollar ticket and discover you have lost a ten-dollar bill on the way — would you still buy the ticket? Your wealth is down ten dollars in both. Under half said yes to the first; a large majority said yes to the second. The lost ticket was booked to the entertainment account, which now shows twenty dollars for one evening. The lost bill was booked to general funds, where it never touched the evening at all.',
        'The same logic produces the topical account, where a saving is judged against the price of the item it attaches to rather than against your finances. A five-dollar saving on a fifteen-dollar calculator is worth a twenty-minute drive to most people; the identical five dollars on a jacket costing eight times as much is not. And Thaler and Eric Johnson documented the house-money effect: after a gain, people take risks with the winnings they would refuse with money coded as their own stake.',
      ],
    },
    {
      heading: 'Finance training does not remove the ledger. It formalises it.',
      body: [
        'The reassuring assumption is that this is a consumer problem, cured by numeracy. It is not. Organisations run mental accounting with a policy manual and an approval workflow: capital versus operating expenditure, ring-fenced reserves, cost-centre codes, budgets that expire. Corporate accounts are harder to override than personal ones precisely because they are written down and someone’s job depends on defending them.',
        'The field evidence says the personal version survives sophistication too. Justine Hastings and Jesse Shapiro found that when petrol prices rise, households substitute toward cheaper grades far more sharply than an equivalent hit to income would justify — a violation of fungibility, with real money, in a routine purchase. The German voucher study found numeracy reduced the effect without removing it.',
        'And the person with the model is often the most committed of all, because they built the categories. The finance director in the hook is not failing to see the arithmetic. She is choosing to pay for a commitment device with money, having correctly judged that she is not the kind of agent her own model assumes. That is a more sophisticated position than the advice she would give a client, not a less sophisticated one.',
      ],
    },
    {
      heading: 'What makes a label stick, and what dissolves it',
      body: [
        'Labels harden under four conditions. Money arriving pre-labelled by source — a refund, a bonus, a windfall, an insurance payout — carries that label into the spending decision. An institutional or physical boundary hardens it further: a separate account, a sealed envelope, a cost-centre code. Unusual shape or timing helps, which is why an annual bonus behaves nothing like the same amount spread across twelve pay cheques. And a closing date hardens it most of all.',
        'Labels dissolve under the opposite conditions. Money that is pooled, liquid, and large relative to any single category loses its category. So does money with no deadline attached, and money where one person controls both the earning and the spending side with no boundary between them.',
        'The closing date is the one to watch, because an expiring account produces the most predictable waste in all of organisational finance. Any budget that resets creates a deadline at which unspent money becomes worth precisely nothing to the person holding it, and worse than nothing if next year’s allocation is set from this year’s spend. At that moment the rational local decision is to buy almost anything.',
      ],
      example: {
        label: 'The year-end spike',
        body: 'Jeffrey Liebman and Neale Mahoney examined United States federal procurement and found spending in the final week of the fiscal year running at several times the normal weekly rate — the signature of expiring budgets. The more damaging finding came next: information-technology projects awarded in that final week carried systematically lower quality ratings than those awarded during the rest of the year. This is not a story about anyone being careless. Every official was responding correctly to an account with a hard closing date, in a system where underspending is punished next year. The waste is designed into the fence, not into the people.',
      },
    },
    {
      heading: 'The honest limits: do not demolish the accounts',
      body: [
        'The standard advice that follows from all this — “money is fungible, so treat every dollar the same” — is correct as arithmetic and frequently destructive as behaviour. The reason many households simultaneously hold low-yield savings and high-rate credit card debt is not that they cannot subtract. It is that the label on the savings is the only thing keeping the savings intact. Tear down the fence to capture the interest spread and you may well capture it once, then find the fund never rebuilds. The fences are load-bearing.',
        'The evidence base is solid, but its field results have competing readings worth knowing. The finding that food-benefit recipients spend far more of a benefit dollar on food than of an equivalent cash dollar is strong, though for households already spending less on food than the benefit, the benefit is effectively in-kind and fungibility never applied. The petrol-grade result has been argued to reflect price attention rather than category budgeting. Neither dispute threatens the core phenomenon, which is about as well established as anything in behavioural economics; both should stop you quoting a single field estimate as a general parameter.',
        'What you are left with is a triage rule rather than a prohibition. Keep an account if it protects a commitment you would otherwise break — that account is buying you self-control, and the interest you forgo is its price. Demolish an account if it exists only because of how the money arrived, or only because of when it expires. Source labels and expiry dates are the two that carry no self-control benefit at all. They are pure accounting artefact, and they are where the money is.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'A windfall is discussed in a completely different register from an equivalent amount of salary.',
      meaning: 'Source labelling at work. The dollars are identical; the account they were booked into on arrival is not, and that booking is now setting the spending rule.',
    },
    {
      signal: 'A department spends hard in the final weeks of the budget year on things nobody wanted in month three.',
      meaning: 'An expiring account. Unspent money is worth zero at the deadline and negative if next year is set from this year, so buying almost anything is locally rational.',
    },
    {
      signal: 'Someone will drive across town to save five dollars on a cheap item but not on an expensive one.',
      meaning: 'A topical account. The saving is being judged as a percentage of the purchase rather than against what five dollars is actually worth to them.',
    },
    {
      signal: 'A proposal is refused from one budget and approved from another at the same company for the same money.',
      meaning: 'The purchase was recategorised, not revalued. Corporate accounts have different guards, different slack, and different political costs.',
    },
    {
      signal: 'Recent gains are being risked in a way the same person would never risk their original stake.',
      meaning: 'The house-money effect. Money coded as winnings sits in an account with a looser risk rule than money coded as capital.',
    },
    {
      signal: 'Someone carries expensive debt while protecting a low-yield savings balance and knows the arithmetic.',
      meaning: 'Not innumeracy. The label is functioning as a commitment device, and they are paying interest as its price — a real cost buying a real benefit.',
    },
  ],
  playbook: [
    {
      move: 'Ask which account a purchase is being charged to before you argue about whether it is worth it.',
      how: 'In a negotiation: “This may not fit your tooling budget, but it reduces audit exposure — is there room in risk or compliance?” The value never changed. Only the guard on the account did.',
      watchOut: 'Do this transparently. Coaching a buyer to hide a purchase in a loosely watched budget will surface at the next audit with your name on it.',
    },
    {
      move: 'Run the fungibility test on any account you are defending.',
      how: 'Ask: “If this money had arrived from a different source, would I spend it the same way?” If the answer is no, the label is doing the deciding. Then ask the follow-up that actually matters: is that label protecting a commitment, or is it just bookkeeping?',
    },
    {
      move: 'Keep the fences that buy self-control. Demolish the ones that only buy tidiness.',
      how: 'Separate accounts, automatic transfers and withdrawal friction earn their keep when they stop a specific behaviour you would otherwise repeat. Source labels — “this was a refund, this was a bonus” — and expiry dates buy nothing and cost a lot.',
      watchOut: 'Do not present this to someone as “you are being irrational.” They are usually buying something real. Ask what the fence is protecting before you propose removing it.',
    },
    {
      move: 'Kill use-it-or-lose-it budgeting wherever you have authority to.',
      how: 'Allow carry-forward, or set next year’s allocation from a documented plan rather than from this year’s spend. Say: “If we set budgets from prior-year spend, we are paying people to buy things in December that they told us in June they did not need.”',
    },
    {
      move: 'Pre-commit windfalls before they arrive.',
      how: 'Decide the split for a bonus, refund or one-off payment while it is still abstract — before it lands and gets booked as fun money. The label is assigned on arrival, so the only reliable moment to intervene is upstream of it.',
    },
    {
      move: 'Change the evaluation frequency deliberately, not by accident.',
      how: 'How often an account is opened and reviewed changes how much risk it can hold and how losses feel. Set a review cadence on purpose for long-horizon money, and stop checking it in between — that is a design decision, not neglect.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Mental accounting is simply a mistake, so the fix is to treat all money the same.',
      correction: 'Arithmetically correct and behaviourally naive. The accounts function as a self-control technology, and for many people the label is the only thing preventing a balance from being spent. Removing a fence captures the spread once and can cost more over time. The useful question is which fences to keep.',
    },
    {
      misread: 'It is a consumer failing that financial sophistication cures.',
      correction: 'Organisations run the same system with a policy manual: capital versus operating budgets, ring-fenced reserves, cost-centre codes, expiring allocations. Written-down accounts are harder to override than personal ones, and field evidence shows numeracy attenuates the effect without eliminating it.',
    },
    {
      misread: 'It is all about the buckets.',
      correction: 'Buckets are one of Thaler’s three components. The others are how outcomes are coded — acquisition versus transaction utility, which is why a bargain on something unneeded feels like a gain — and how often accounts are evaluated and closed. Evaluation frequency is where much of the real damage happens.',
    },
    {
      misread: 'Non-fungibility always makes people worse off.',
      correction: 'The same mechanism that produces year-end waste also produces successful saving. Field experiments show that earmarking and physically partitioning cash increases savings among low-income households. The mechanism is neutral; whether it helps depends entirely on which behaviour the fence is blocking.',
    },
    {
      misread: 'The field results give you a reliable number to plan against.',
      correction: 'The phenomenon is well established, but individual field estimates have competing readings — some food-benefit results reflect households for whom the benefit is effectively in-kind, and the petrol-grade result may partly reflect price attention rather than category budgeting. Use the direction and the mechanism; do not quote any single estimate as a general parameter.',
    },
  ],
  evidence: [
    {
      source: 'Thaler, “Mental Accounting and Consumer Choice” (1985) and “Mental Accounting Matters” (Journal of Behavioral Decision Making, 1999)',
      finding: 'Sets out the full system: coding of outcomes into acquisition and transaction utility, assignment of money to accounts by source and use, and the frequency with which accounts are evaluated and closed. The beer-on-the-beach case shows willingness to pay for an identical good shifting with the reference price of where it is bought.',
      caveat: 'A theoretical framework built from experimental and observational evidence rather than a single quantified result.',
    },
    {
      source: 'Kahneman & Tversky, “Choices, Values, and Frames” (1984); Tversky & Kahneman, “The Framing of Decisions” (1981)',
      finding: 'Losing a ticket and losing an equivalent bill leave you equally poorer, but far fewer people will buy a replacement ticket than will proceed after losing cash. Separately, a five-dollar saving is worth a trip across town on a cheap item and not on an expensive one — the saving is judged inside the account of the purchase.',
    },
    {
      source: 'Shefrin & Thaler, the behavioural life-cycle hypothesis (1988); Thaler & Shefrin, planner-doer model (1981)',
      finding: 'Money is held in accounts with different spending rules — current income, current assets, future income — and the propensity to consume an extra dollar differs sharply across them, against the standard prediction that it should not. The framework explains this as a far-sighted planner using account boundaries to constrain a myopic doer.',
    },
    {
      source: 'Thaler & Johnson, “Gambling with the House Money and Trying to Break Even” (Management Science, 1990)',
      finding: 'After a prior gain, people accept gambles they would refuse with money coded as their own stake, and after a loss they will take gambles that offer a chance to return to the reference point. Prior outcomes change the rule applied to subsequent decisions in the same account.',
    },
    {
      source: 'Hastings & Shapiro, “Fungibility and Consumer Choice: Evidence from Commodity Price Shocks” (Quarterly Journal of Economics, 2013)',
      finding: 'When petrol prices rise, households substitute toward lower grades far more sharply than an equivalent reduction in income would produce — a violation of fungibility with real money in a routine purchase.',
      caveat: 'Alternative readings exist, including increased price attention and search behaviour during price spikes rather than category budgeting as such.',
    },
    {
      source: 'Hastings & Shapiro, “How Are SNAP Benefits Spent?” (American Economic Review, 2018)',
      finding: 'The share of a food-benefit dollar spent on food is far higher than the share of an equivalent cash dollar, using retail panel data on actual purchases rather than survey responses.',
      caveat: 'For households already spending less on food than the benefit amount, the benefit is effectively in-kind and fungibility does not apply. The strong evidence comes from households where it should apply and does not.',
    },
    {
      source: 'Soman & Cheema, earmarking and partitioning field experiment (Journal of Marketing Research, 2011); Abeler & Marklein, labelled-voucher field experiment (2017)',
      finding: 'Cash earmarked and physically partitioned in sealed envelopes raised savings among low-income households, more so when the envelope carried a photograph of the saver’s children. Separately, people did not treat labelled vouchers as interchangeable with cash, with the effect concentrated among the less numerate.',
      caveat: 'Individual field experiments in specific populations. The direction is consistent with the framework; the magnitudes should not be transported to other settings.',
    },
    {
      source: 'Liebman & Mahoney, “Do Expiring Budgets Lead to Wasteful Year-End Spending?” (American Economic Review, 2017)',
      finding: 'United States federal procurement spending in the final week of the fiscal year runs at several times the normal weekly rate, and information-technology projects awarded in that week carry systematically lower quality ratings than those awarded earlier.',
    },
  ],
  takeaways: [
    'Mental accounting is a full bookkeeping system, not a bag of quirks: how outcomes are coded, how money is filed by source and use, and how often accounts are closed.',
    'Where a dollar gets filed on arrival decides how it is spent, because every later decision happens inside that booking rather than against it.',
    'Non-fungibility is not purely a defect. Account boundaries are a self-control technology, which is why “treat every dollar the same” often backfires in practice.',
    'The triage rule: keep a fence that protects a commitment you would otherwise break; demolish one that exists only because of how money arrived or when it expires.',
    'Expiring budgets are the most predictable source of institutional waste there is, and the waste is designed into the rule rather than into the people.',
    'Organisations do this harder than individuals, because their accounts are written down and someone’s job depends on defending them.',
  ],
};
