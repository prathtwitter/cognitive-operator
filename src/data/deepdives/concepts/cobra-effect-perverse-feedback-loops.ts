import type { DeepDive } from '../../../types/curriculum';

/** #40 · Sphere 4 · The Cobra Effect & Perverse Feedback Loops */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'Hanoi, 1902. The French colonial administration has a rat problem largely of its own making: a new sewer network, built to make the European quarter modern and sanitary, has turned out to be excellent rat habitat. The city hires professional exterminators, then opens the work to anyone, paying a small bounty per rat. To spare officials the job of handling carcasses, the rule is simplified — bring in a tail, collect the money. The counts are enormous, tens of thousands on the best days, and the paperwork is immaculate. Then somebody notices a rat running through the streets of Hanoi with no tail on it. The bounty was doing exactly what it had been designed to do. What it had been designed to do turned out not to be killing rats.',
  sections: [
    {
      heading: 'The mechanism, and a story that probably never happened',
      body: [
        'The historian Michael Vann worked through the French colonial archives on the Hanoi campaign, and the details are documented rather than folkloric. Tails were accepted as proof of a kill. Tailless rats began appearing alive in the city. Colonial health inspectors subsequently reported finding rats being bred on the outskirts of Hanoi, farmed for their tails. The campaign did not prevent plague reaching the city the following year.',
        'Now the awkward part. This idea is universally named after a story about a cobra bounty in British Delhi — locals breeding cobras for the reward, then releasing them all when the bounty was cancelled. That story is traceable to the German economist Horst Siebert, who used it as an anecdote in a 2001 book titled Der Kobra-Effekt. No primary documentation of the Delhi episode has ever been produced. It may have happened. Nobody has shown that it did, and it is repeated as established history constantly, including by people who are otherwise careful.',
        'It is worth being blunt about this rather than quietly substituting a better case, because the failure is the same one the concept describes. Stories spread under selection pressure, and the pressure on a story is “does this land in a boardroom,” not “is this true.” Nobody audited the gap, and the story bred accordingly. A piece about unchecked proxies that repeated an unverified anecdote as fact would be demonstrating the error while explaining it.',
      ],
    },
    {
      heading: 'Why a bounty builds a factory',
      body: [
        'An incentive is not a filter. It is a market. A payment per unit of anything is a standing offer to buy that thing, and the offer is open to everyone, including people who can make it more cheaply than they can find it. If manufacturing the problem costs less than solving it, someone will manufacture the problem — and this is not corruption in any interesting sense. It is arbitrage, the same response that makes markets allocate anything at all.',
        'The reason this keeps surprising competent people is that the human default for causal reasoning is a single arrow. Push here, that moves. Robert Merton named the general problem in 1936, including what he called the imperious immediacy of interest — where urgency about the intended outcome crowds out consideration of everything else the action will set in motion.',
        'Dietrich Dörner later put people in front of simulated systems and watched them intervene. The characteristic failure was not stupidity. It was treating a web of delayed, looping relationships as a chain of levers — acting decisively on the first-order effect and being genuinely surprised by the second. The designer models one actor and one arrow. The real system contains many actors, several better at economics than the designer, and every arrow runs both ways.',
      ],
    },
    {
      heading: 'The move: buying units of a bad thing',
      body: [
        'The precise move is paying per unit of a penalised thing rather than per unit of the outcome you want. Separate this cleanly from Goodhart’s law, its close neighbour and constant confusion. Goodhart describes a measurement failure: a proxy decays under optimisation pressure until the number no longer tracks the goal, and you get a report that lies. The cobra effect describes a supply failure: every unit can be genuine and correctly counted, and reality still gets worse — because you funded an industry producing the thing you were trying to eliminate.',
        'Hanoi contains both failures at once, which is why it teaches the distinction so well. Clipping a tail off a live rat is the Goodhart failure: the tail was a proxy for a dead rat and stopped being one. Breeding rats for their tails is the cobra failure: the incentive created supply. They look identical from a distance and they need opposite fixes. Tighter verification — insisting on whole carcasses — closes the proxy gap and does nothing at all about the farms. Only changing what you are buying does that.',
        'So the first diagnostic question is not “can this number be faked?” It is “can the underlying thing be manufactured?” Where the answer is no, you have at most a measurement problem and auditing will help. Where the answer is yes, you have opened a market, and no amount of verification rigour will close it — because nothing is being faked.',
      ],
      example: {
        label: 'Paid to make the pollutant',
        body: 'Under the Kyoto Protocol’s Clean Development Mechanism, projects earned tradable credits for destroying HFC-23, an extremely potent greenhouse gas produced as a by-product of manufacturing the refrigerant HCFC-22. Because the credits were valuable, plants had a direct financial reason to keep producing the refrigerant — and therefore the by-product — in order to destroy it and collect. Nothing was falsified: the gas really was produced and really was destroyed. Regulators acted on the incentive structure rather than on any proven deception, and the European Union excluded these credits from its emissions trading system from 2013. Whether specific producers deliberately raised output remains contested. That the scheme paid people to create the pollutant it was built to remove does not.',
      },
    },
    {
      heading: 'The better the rule is drafted, the faster the response',
      body: [
        'The comfortable assumption is that this happens to sloppy policy written by people who do not understand incentives. The documented cases point the other way. A precise, published, forecastable rule tells every affected party exactly where the boundary sits and what triggers the consequence — which is exactly the information needed to plan around it. Vagueness is a poor policy virtue but an effective anti-gaming defence: clarity buys compliance and evasion in the same transaction.',
        'The starkest example is a law nobody would call carelessly drafted. Dean Lueck and Jeffrey Michael examined timber harvesting in North Carolina near colonies of the red-cockaded woodpecker, an endangered species whose presence triggers restrictions on land use under the Endangered Species Act. Landowners closer to occupied colonies harvested their timber earlier and at younger tree ages than otherwise comparable landowners. The rational move, facing a rule that will bind once the birds arrive, is to remove the habitat before they do. A statute written to protect a species measurably accelerated destruction of its habitat, and it did so because its trigger conditions were clear enough to plan around.',
        'The variable governing speed is the capability of the people facing the rule. Lucas Davis studied Mexico City’s driving restriction, which barred vehicles from the road one weekday a week by licence plate. He found no evidence of improved air quality, alongside evidence consistent with households acquiring additional — often older and dirtier — vehicles to keep driving on their restricted day. A rule facing a large, well-resourced population gets a response in months. The same rule facing a small, closely watched group might hold for years.',
      ],
    },
    {
      heading: 'The five questions that decide whether you get a cobra',
      body: [
        'This is manageable, because the conditions are specific enough to check before launch. First: is the penalised thing producible? Rats breed. Software defects can be written. Emissions can be generated. A closed historical set — last year’s outstanding audit findings, a fixed list of legacy accounts — cannot be added to. Where supply is elastic you have cobra risk; where it is genuinely fixed, your exposure is limited to Goodhart-style measurement decay.',
        'Second: is production cheaper than genuine reduction? The arbitrage only runs if making the problem beats solving it, which is why bounty size matters in both directions — too low and nobody participates, too high and you have funded an industry. Third: are you paying per unit of the bad thing removed, or per unit of good outcome achieved and measured independently? An independently measured drop in the rat population is far harder to game by breeding rats.',
        'Fourth: how long before anyone checks the aggregate outcome rather than the submitted units? Long detection lags let an industry establish itself, acquire sunk costs, and develop a constituency that defends the programme. Fifth: is exit available? Mexico City’s drivers could buy a second car. Where the counterparty can step outside the boundary cheaply, they will, and your rule ends up shaping the composition of the response rather than its size.',
      ],
      example: {
        label: 'The question nobody asks at launch',
        body: 'There is a sixth question, and it is the one most consistently skipped: what happens on the day this ends? A per-unit incentive builds an industry with inventory, capital and expectations. When the programme is cancelled, that industry does something with what it holds, and the pre-programme equilibrium does not simply return — the entire premise of the cobra story, whether or not the cobras were real. The habit worth building is to write the wind-down into the same document as the launch, and to ask out loud who will be holding stock of the penalised thing on the last day.',
      },
    },
    {
      heading: 'What the evidence here can and cannot carry',
      body: [
        'The evidence base is case-based, not experimental, and should be described that way. Nobody has run a controlled trial of bounty design. Vann’s Hanoi work is archival history. Lueck and Michael’s and Davis’s studies are careful econometrics on specific policies, with the usual limits on generalising from one species in one state or one restriction in one city. Dörner’s simulations are small and decades old, with limited replication.',
        'The selection bias is more serious than any of that. Spectacular backfires become famous precisely because they are spectacular, and the enormous number of bounties and fines that worked roughly as intended generate no stories at all. Concluding from a collection of famous disasters that incentives generally backfire is the same error as concluding from a list of crashes that flying is dangerous. These cases establish a failure mode worth testing for, not a base rate.',
        'Which returns to the cobra. That story circulated for decades through lectures, business books and podcasts without anyone producing a source, because it is an excellent story making a genuinely true point. It survived on transmissibility rather than verification — an unchecked proxy operating exactly as this concept predicts, inside the literature about this concept. Trust the mechanism and the diagnostic questions. Be suspicious of any vivid anecdote you cannot source, including the ones here. And when you cite a case in front of people who might check, cite Hanoi, which has an archive, rather than Delhi, which has a raconteur.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'A proposal pays per unit of a bad thing removed rather than per unit of good outcome achieved.',
      meaning: 'The classic setup. Ask whether the bad thing can be manufactured — if it can, you have opened a market rather than built a filter.',
    },
    {
      signal: 'Submitted units climb steeply while the underlying problem stays flat or worsens.',
      meaning: 'Either the proxy is being faked or supply is being created. If the units check out as genuine, it is the second, and tighter auditing changes nothing.',
    },
    {
      signal: 'A new specialism appears whose entire income depends on the rule continuing to exist.',
      meaning: 'An industry has formed around the incentive. It now has a direct interest in the problem persisting, and will lobby accordingly.',
    },
    {
      signal: 'The rule’s trigger conditions are precise, published and forecastable well in advance.',
      meaning: 'Clarity buys compliance and evasion together. A boundary you can see coming is one you can act before it arrives.',
    },
    {
      signal: 'The counterparty is larger and better capitalised than the team writing the rule.',
      meaning: 'Response speed scales with counterparty capability. Assume weeks, not years, before someone finds the production response.',
    },
    {
      signal: 'Cancelling a failing programme is being discussed as a costless reset.',
      meaning: 'Exit is often the worst moment. Whoever built capacity around the incentive still holds it on the last day.',
    },
  ],
  playbook: [
    {
      move: 'Run the extraction audit before launch, not after.',
      how: 'Say: “Assume the sharpest and least scrupulous party we deal with reads this rule tomorrow morning. Give me three ways they make money from it without producing the outcome we want.” If the room answers quickly, the design is not ready.',
      watchOut: 'Frame it as stress-testing the rule, never as an accusation about anyone present, or you lose the honest answers.',
    },
    {
      move: 'Ask whether the penalised thing can be manufactured.',
      how: 'Literally: “Can someone make more of this?” A yes means you have a supply risk, not a measurement risk, and it cannot be fixed by auditing the proxy harder. A no means auditing will actually help.',
    },
    {
      move: 'Pay for the outcome, measured by someone with no stake in it.',
      how: 'Move the payment as close to the goal as the data allows — an independently measured drop in the population, not a count of submissions — and put the measurement with a party who does not get paid more when it moves.',
      watchOut: 'Outcome measures are noisier and slower than activity counts, and people will push back on that. The trade is the price of not funding a farm.',
    },
    {
      move: 'Cap the pool, not just the unit price.',
      how: 'An uncapped per-unit bounty is an open-ended offer to buy. A fixed pool turns it into a competition for a defined budget, which does not reward creating more supply.',
      watchOut: 'Caps create their own distortion — a race to submit early, rewarding speed over quality. Trading one failure mode for a smaller one is the realistic goal.',
    },
    {
      move: 'Write the wind-down plan into the launch document.',
      how: 'Ask: “Who will be holding inventory of this on the day we stop, and what do they do with it?” Then set the sunset date and the taper before anyone has built a business on the programme.',
    },
    {
      move: 'Diagnose which failure you have before you fix anything.',
      how: 'If the proxy is being faked, tighten verification. If genuine supply is being created, verification is irrelevant and you must change what you are buying. Treating a supply problem as a measurement problem produces a very rigorous audit of a growing disaster.',
    },
  ],
  commonMisreads: [
    {
      misread: 'The Delhi cobra bounty is a well-documented historical episode.',
      correction: 'It is not. The story traces to the German economist Horst Siebert, who presented it as an anecdote in a 2001 book, and no primary documentation has been produced. The properly documented case is the 1902 Hanoi rat bounty under French colonial administration, studied from the archives by the historian Michael Vann. Cite Hanoi.',
    },
    {
      misread: 'This is Goodhart’s law with a better anecdote attached.',
      correction: 'Different mechanisms. Goodhart describes a measure decaying under optimisation pressure until it no longer tracks the goal — the number lies. The cobra effect describes an incentive creating genuine supply of the penalised thing — the number can be honest and reality still worsens. The first is fixed by better verification; the second is not fixed by verification at all.',
    },
    {
      misread: 'The cases prove that incentives generally backfire.',
      correction: 'Severe selection bias. Backfires become famous because they are dramatic; the far larger number of schemes that worked unremarkably generate no stories. These cases establish a failure mode worth testing for before launch, not a base rate that justifies avoiding incentives.',
    },
    {
      misread: 'The root problem is dishonest counterparties.',
      correction: 'Mostly it is not. Breeding rats to sell tails is supplying a market someone else opened. In the carbon-credit and endangered-habitat cases, parties acted legally and openly, responding to published rules exactly as an economist would predict. Screening for honesty does nothing about a supply response.',
    },
    {
      misread: 'If a programme goes wrong you can simply cancel it and reset.',
      correction: 'Cancellation is often the most dangerous moment. Anyone who built capacity around the incentive still holds it on the final day, and the pre-programme equilibrium does not return on its own. This is the entire point of the cobra story, whether or not the snakes were ever real. Plan the exit before the launch.',
    },
  ],
  evidence: [
    {
      source: 'Vann, “Of Rats, Rice, and Race: The Great Hanoi Rat Massacre” (French Colonial History, 2003); The Great Hanoi Rat Hunt (2018)',
      finding: 'Archival study of the 1902 French colonial rat bounty in Hanoi. Payment was made on rat tails, tailless live rats subsequently appeared in the city, and health inspectors reported rats being bred on the outskirts for their tails. Plague reached the city the following year regardless.',
      caveat: 'A historian’s archival study of one campaign. It documents what happened; it does not measure how often this happens.',
    },
    {
      source: 'Siebert, Der Kobra-Effekt (2001) — the source of the name',
      finding: 'Siebert used a story about a British cobra bounty in Delhi, with locals breeding cobras and releasing them when the bounty ended, as an illustrative anecdote. The idea is named after this story.',
      caveat: 'No primary documentation of the Delhi episode has been produced. It is very likely apocryphal and should never be cited as history. The concept does not depend on it — better-documented cases exist.',
    },
    {
      source: 'Merton, “The Unanticipated Consequences of Purposive Social Action” (American Sociological Review, 1936)',
      finding: 'The canonical account of why deliberate interventions produce unintended results, identifying ignorance, error, and the way urgency about an intended outcome crowds out consideration of what else will be set in motion.',
      caveat: 'A theoretical framework, not an empirical study.',
    },
    {
      source: 'Clean Development Mechanism credits for HFC-23 destruction; Wara, “Is the global carbon market working?” (Nature, 2007) and subsequent regulatory action',
      finding: 'Credits issued for destroying a potent greenhouse gas produced as a by-product of refrigerant manufacture became valuable enough that plants had a financial reason to keep producing the by-product in order to destroy it. The European Union excluded these credits from its emissions trading system from 2013.',
      caveat: 'Whether specific producers deliberately increased output for the credits is contested and was inferred from production data and regulatory analysis rather than established by admission.',
    },
    {
      source: 'Lueck & Michael, “Preemptive Habitat Destruction under the Endangered Species Act” (Journal of Law and Economics, 2003)',
      finding: 'Using North Carolina timber data, landowners closer to red-cockaded woodpecker colonies harvested timber earlier and at younger tree ages than comparable landowners — consistent with removing habitat before regulatory restrictions could be triggered.',
      caveat: 'One species, one state, observational rather than experimental. The mechanism is inferred from harvest timing patterns.',
    },
    {
      source: 'Davis, “The Effect of Driving Restrictions on Air Quality in Mexico City” (Journal of Political Economy, 2008)',
      finding: 'A programme barring vehicles from the road one weekday per week by licence plate produced no detectable improvement in air quality, with evidence consistent with households acquiring additional, often older vehicles to keep driving on restricted days.',
    },
    {
      source: 'Dörner, The Logic of Failure (1989/1996)',
      finding: 'Participants managing simulated complex systems characteristically intervened on first-order effects, ignored delays and feedback loops, and made outcomes worse while believing they were improving them.',
      caveat: 'Small-sample simulation studies from the 1970s and 1980s with limited replication. Illustrative of the reasoning pattern rather than a measured effect size.',
    },
    {
      source: 'Goodhart (1975) and Campbell (1976) — the neighbouring mechanism',
      finding: 'A statistical regularity breaks down once it is targeted, and a quantitative indicator corrupts as it carries more decision weight. Cited here for contrast: these describe a measure decaying, not an incentive creating supply of the penalised thing.',
      caveat: 'Institutional observations from historical experience, not experimental findings.',
    },
  ],
  takeaways: [
    'The eponymous Delhi cobra story is very likely apocryphal — traceable to a 2001 anecdote with no primary documentation. Use the archivally documented 1902 Hanoi rat bounty instead.',
    'That the story spread for decades on how well it landed rather than on whether it was true is itself an unchecked proxy, in the literature about unchecked proxies.',
    'This is not Goodhart’s law. Goodhart is a measure decaying under optimisation pressure; the cobra effect is an incentive creating genuine supply of the penalised thing.',
    'The distinction determines the fix: a faked proxy is closed by tighter verification, a supply response is not affected by verification at all.',
    'The first question at design time is not “can this be faked?” but “can this be manufactured?” Elastic supply is what separates a measurement problem from a market you just opened.',
    'Plan the exit before the launch. Whoever built capacity around your incentive still holds it on the day you cancel, and the old equilibrium does not return by itself.',
  ],
};
