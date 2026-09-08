import type { DeepDive } from '../../../types/curriculum';

/** #36 · Sphere 4 · The Endowment Effect & Divestiture Aversion */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'A management team is deciding whether to sell a brand the company has owned for eleven years. An external buyer has offered a number that a fair, disinterested outside valuation would call generous. Three of the five executives in the room built parts of this brand personally — hired the first employees, wrote the first strategy deck, defended it through two bad quarters nobody outside the building remembers. When the offer comes up, nobody argues with the buyer’s math. They argue with the idea of not owning it anymore. The brand has not changed in value in the last hour. The only thing that changed is that someone said the word “sell” out loud, and the room’s internal estimate of what it is worth quietly moved up in response.',
  sections: [
    {
      heading: 'The gap the classic experiment actually measures',
      body: [
        'The famous version of this finding is not a survey of stated preferences. It is a market test. Give half a room a mug and ask the minimum price they would accept to sell it back; ask the other half, who have no mug, the maximum they would pay for the identical one. Owners consistently demand roughly double what non-owners offer, and when researchers then let the room trade freely, far fewer trades happen than the standard economic prediction that ownership should not affect valuation at all — a benchmark known as the Coase theorem.',
        'What gets lost in the popular retelling is how little history the object carries. The mug in the classic paradigm is brand-new, low-value, and assigned to its owner by a coin flip seconds earlier. That detail is exactly what makes the finding theoretically interesting: in this paradigm, the effect is not about sentimental attachment to a meaningful possession. It shows up before any memory has had time to attach to anything.',
        'It is worth stating plainly, before going further, that how large and how universal this effect is under tightly controlled laboratory conditions remains a genuine, active dispute in economics — even as a version of the same pattern shows up reliably and expensively outside the lab. Both things are true at once, and holding them together, rather than picking whichever flatters an argument, is the point of this deep dive.',
      ],
    },
    {
      heading: 'Why possession would carry a premium at all',
      body: [
        'One influential account starts outside psychology entirely, in animal behavior. Across many species, the current possessor of a contested resource wins disputes against a challenger far more often than relative fighting strength alone would predict. Evolutionary game theorists model this as a low-cost convention — sometimes called a “bourgeois” strategy — for settling ownership disputes without a costly fight every time. Offered as an analogy, not a proven causal chain from animal contests to human mug-selling, it is a plausible reason a possession-linked bias might exist at all.',
        'The dominant psychological account is more direct: prospect theory’s reference-dependence and loss aversion. Value is coded relative to a reference point, and once you own something, that reference point becomes “I have this.” A loss relative to that point is weighted more heavily than an equivalent gain, so selling your own mug is coded as a loss while buying an identical one is coded as a gain — same object, opposite emotional sign.',
        'Loss aversion has been the historically dominant explanation, but it is not the only serious one on offer. Later sections in this deep dive introduce credible competitors. Flagging that now matters, because mechanism, not just magnitude, turns out to be contested territory here too.',
      ],
    },
    {
      heading: 'The move: divestiture aversion in a boardroom',
      body: [
        'The specific, named pattern for the corporate version of this is divestiture aversion: a systematic overvaluation of a currently held asset, brand, or strategy specifically when the question on the table is whether to give it up, relative to what a fresh, disinterested buyer would pay for the identical future cash flows.',
        'The tell is in the language. When a keep-or-sell conversation is dominated by references to history and effort — what it took to build this, how far it has come — rather than forward-looking cash flow and market comparables, the valuation conversation has quietly been replaced by an ownership-defense conversation. Nobody announces the swap. It simply happens, the same way a hard target question gets swapped for an easier, more comfortable one.',
        'This is not confined to boardrooms or hypotheticals. Real estate data shows an equivalent, non-anecdotal version: owners facing a nominal loss relative to their original purchase price set measurably higher asking prices and sell more slowly than comparable owners who are not facing a loss against their own reference point.',
      ],
      example: {
        label: 'The reference point is the purchase price, not the market',
        body: 'A study of condominium resales in Boston found that owners whose current market value sat below what they had originally paid listed their units at higher asking prices, relative to true value, than owners who stood to make a gain — and their units took longer to sell as a result. The sellers were not confused about the current market. They were anchored to their own purchase price as the reference point defining a loss, and priced accordingly, with real money and real time on the line rather than a stated preference in a survey.',
      },
    },
    {
      heading: 'Who is not protected, and who actually is',
      body: [
        'Intelligence, seniority, and confidence do not protect anyone from this. If anything, the executive who personally championed or built an initiative over years sits in the worst possible position to judge its present market value, because long, personal ownership is exactly the condition under which the bias runs strongest, not a defense against it.',
        'What does measurably help is narrower than general expertise. A field study of memorabilia traders found that dealers with deep, repeated experience trading a specific category of collectible showed little to no ownership-driven pricing gap for goods in that category — while the same traders, evaluating something just outside their usual specialty, and casual traders generally, showed the standard asymmetry.',
        'The domain-specificity is the useful part. This is not “smart, experienced people are immune.” It is “intense, repeated, feedback-rich trading experience in exactly this category narrows the gap” — a description that almost never fits an executive deciding, once, whether to keep or sell a unique asset they spent years building.',
      ],
      example: {
        label: 'The trading-show test',
        body: 'Rather than running the trade in a university lab, a field study offered real sports-card and memorabilia dealers a chance to swap one item for another of comparable market value at an actual trading show. Dealers with years of experience trading specifically within their own category took the trade about as readily as economic theory says they should, showing little sign of the usual ownership premium. Offered a trade just outside their category, the same dealers reverted to the ordinary pattern immediately — reluctant to part with what they already held, though nothing about their trading skill had changed in the previous five minutes.',
      },
    },
    {
      heading: 'What widens the gap, and what narrows it',
      body: [
        'Framing widens or narrows it directly. Describing a choice as giving up or losing what you currently hold activates the loss side of the asymmetry; describing the identical substantive choice as gaining or adding an option activates the weaker gain side. A long, singular personal history with the asset — built it, ran it, defended it through hard quarters — widens the gap further still.',
        'One boundary narrows it reliably: goods held for exchange rather than use. Cash, tokens, and inventory bought purely for resale show little or no ownership premium, while goods bound up with personal use or identity show the effect strongly. This distinction is a genuinely useful diagnostic for which decisions are actually at risk and which are not.',
        'The single most practical lever is bringing in someone with no ownership stake and real, category-specific market experience to price the asset independently. That one move removes both the ownership and the loss-frame at once, which is more than framing language alone can usually do.',
      ],
    },
    {
      heading: 'The honest limits: a live dispute, and why it doesn’t change what to do',
      body: [
        'The prominent challenge to the classic result comes from Charles Plott and Kathryn Zeiler. Using an incentive-compatible elicitation procedure, extensive practice rounds so subjects understood the mechanism, and anonymity to remove any concern about looking cheap or hasty, they found the textbook gap shrank sharply — in some conditions to the point of not being statistically distinguishable from no effect at all. Their interpretation: much of the famous original result reflected subjects misunderstanding the elicitation task, not a stable underlying preference for what one already owns.',
        'That is not the end of the story. Other researchers re-examined comparable procedures and reported the asymmetry persisting even under careful, well-explained conditions once measured against proper controls. The size of the “true” laboratory effect remains an open empirical dispute that neither side has closed, and treating either paper as the final word overstates what the literature actually shows.',
        'None of the guidance in this deep dive depends on winning that argument. Evidence sitting entirely outside the contested lab paradigm — professional traders pricing goods outside their specialty, and real home sellers anchored to their purchase price — shows a real, economically consequential version of the same pattern with actual money changing hands, regardless of how much of the tightly controlled mug-swapping result eventually turns out to be procedural artifact. You can manage the behavior reliably without the mechanism debate ever being settled.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'A valuation is anchored to what was originally paid or what it took to build, not to current market comparables.',
      meaning: 'The reference point is locked to the acquisition event. Anything below it is being coded as a loss, inflating the number regardless of true present value.',
    },
    {
      signal: 'The owner’s valuation runs systematically higher than an outside party’s, with the same information available to both.',
      meaning: 'A live WTA-versus-WTP gap. Check whether the difference tracks real private information or simply reflects who currently holds the asset.',
    },
    {
      signal: 'A proposal to sell, cut, or divest is met with the asset’s history and the effort behind it, not its forward-looking value.',
      meaning: 'Loss-aversion language is substituting for a forward-looking valuation. The “how we got here” story is doing work “what is it worth now” should be doing.',
    },
    {
      signal: 'The same person shows no comparable premium on an identical, fungible, easily replaced resource like cash.',
      meaning: 'Consistent with the exchange-goods-versus-use-goods boundary: the bias is specific to goods tied to use or identity, not general possessiveness.',
    },
    {
      signal: 'A seasoned specialist is unattached to their usual trading stock but shows full attachment the moment a good sits outside their category.',
      meaning: 'Domain-specific market experience, not general seniority or intelligence, narrows the gap — and it does not transfer across categories.',
    },
    {
      signal: 'The same change is accepted readily framed as “a new option” but resisted hard framed as “giving up what you have.”',
      meaning: 'The substance never moved. Only the loss-versus-gain frame relative to the current reference point did, and that alone shifted the resistance.',
    },
  ],
  playbook: [
    {
      move: 'Force the outside-offer question before trusting any internal valuation.',
      how: 'Ask plainly: “If we didn’t already own this, and someone offered to sell it to us today at this price, would we buy it?” This resets the reference point to a hypothetical non-owner and strips out the endowment frame.',
      watchOut: 'Asked publicly in front of whoever built the thing, this reads as an attack on their judgment. Ask privately, or apply it as standard practice to everything, not just their project.',
    },
    {
      move: 'Reframe the same choice between loss language and gain language on purpose.',
      how: 'To ease resistance: “You’re not giving up your current terms, you’re adding an option you don’t have today.” To sharpen stakes: “Understand exactly what you’d be walking away from.” Same substance, opposite frame, chosen deliberately depending on which side of the table you’re on.',
    },
    {
      move: 'Separate the history column from the valuation column in writing.',
      how: 'Run any keep-or-sell decision through two written columns: acquisition cost and history in one, independent current market value in the other. Decide only from the second column.',
      watchOut: 'The history column will keep trying to re-enter as a justification. Name it out loud when it does — “that’s the history column, not the valuation column.”',
    },
    {
      move: 'Get the number from someone with no stake and real, category-specific experience.',
      how: 'Bring in an outside specialist or buy-side view for anything you are deciding whether to keep or sell — not a generalist, and not yourself. Category-specific trading experience is what narrows the gap.',
    },
    {
      move: 'Rotate who runs the periodic keep-or-cut review.',
      how: 'Whoever championed or built something is structurally the worst-placed person to judge its current value. Assign renewal and divestiture reviews to someone who did not create it.',
    },
    {
      move: 'Pressure-test attachment with a concrete exit condition.',
      how: 'Ask: “Name the price or condition at which you would let this go without a second thought.” If no honest number exists, or it moves every time you approach it, that is ownership-driven attachment, not a considered valuation.',
    },
  ],
  commonMisreads: [
    {
      misread: 'The mugs experiment proves ownership reliably and permanently doubles an object’s value in anyone’s mind.',
      correction: 'Plott and Zeiler’s incentive-compatible, trained, anonymous procedure sharply reduced or eliminated the gap in some conditions, arguing much of the classic result reflected confusion about the elicitation task. Later re-examinations found the asymmetry persisting anyway. The debate is genuinely open, not settled in either direction.',
    },
    {
      misread: 'If the lab result is contested, the real-world pattern of owners overvaluing what they hold must be fake too.',
      correction: 'Field evidence outside the contested paradigm — professional traders handling unfamiliar goods, and documented loss-averse home-seller pricing — shows a real, economically measurable version of the pattern with actual money at stake. The lab-methodology dispute and the real-world pattern are separate questions.',
    },
    {
      misread: 'This is the same thing as the sunk cost fallacy, or the “IKEA effect” of valuing what you personally built.',
      correction: 'The classic paradigm produces the effect with goods a person did not build, did not pay for, and has held for minutes. Mere random assignment of possession is sufficient. Labor-based and cost-based over-valuation are related but distinct effects that can stack on top of pure ownership, not substitute for it.',
    },
    {
      misread: 'Everyone overvalues everything they own, equally, all the time.',
      correction: 'Goods held for exchange or resale show little or no premium, and traders evaluating goods inside their specific expertise show a much smaller gap than novices or the same traders outside their specialty. The effect concentrates in goods tied to use or identity, not general possessiveness.',
    },
    {
      misread: 'Since researchers disagree on why it happens, one specific mechanism must be the whole explanation.',
      correction: 'Credible competing accounts exist beyond simple loss aversion, including query-theory explanations based on the order in which buyers and sellers generate reasons, and mere-ownership or attachment accounts. Multiple mechanisms likely contribute in different proportions depending on the good.',
    },
  ],
  evidence: [
    {
      source: 'Kahneman, Knetsch & Thaler, “Experimental Tests of the Endowment Effect and the Coase Theorem” (Journal of Political Economy, 1990)',
      finding: 'In repeated market experiments with randomly assigned mugs, owners’ minimum selling prices ran roughly double non-owners’ maximum buying prices, and trading volume fell well short of what the Coase theorem predicts if ownership did not affect valuation.',
    },
    {
      source: 'Plott & Zeiler, “The Willingness to Pay-Willingness to Accept Gap...” (American Economic Review, 2005) and a related 2007 follow-up',
      finding: 'Using an incentive-compatible elicitation mechanism with extensive practice and anonymity, the WTA-WTP gap shrank sharply, in some conditions to a point not statistically distinguishable from no effect, suggesting much of the classic gap reflected subject misunderstanding of the elicitation procedure.',
      caveat: 'Contested. Later re-examinations of comparable procedures reported the asymmetry persisting under similar conditions. Treat the size of the “true” lab effect as an open dispute, not a settled number.',
    },
    {
      source: 'List, “Does Market Experience Eliminate Market Anomalies?” (Quarterly Journal of Economics, 2003)',
      finding: 'Among real sports-card and memorabilia traders, dealers with intensive experience specifically in that category showed little to no exchange asymmetry, while occasional traders and even experienced dealers outside their usual specialty showed the standard pattern.',
    },
    {
      source: 'Genesove & Mayer, “Loss Aversion and Seller Behavior: Evidence from the Housing Market” (Quarterly Journal of Economics, 2001)',
      finding: 'Using real Boston condominium sales data, owners facing a nominal loss relative to their original purchase price set higher asking prices and sold more slowly than comparable owners not facing a loss.',
    },
    {
      source: 'Novemsky & Kahneman, “The Boundaries of Loss Aversion” (Journal of Marketing Research, 2005)',
      finding: 'Goods held for the purpose of exchange or resale show little or no endowment effect, while goods held for personal use show the standard effect, tying the bias to consumption and identity rather than possession in general.',
    },
    {
      source: 'Johnson, Häubl & Keinan, “Aspects of Endowment: A Query Theory of Value Construction” (Journal of Experimental Psychology: Learning, Memory, and Cognition, 2007)',
      finding: 'Proposes that owners and prospective buyers generate reasons in a different natural order — owners think of reasons to keep first, buyers of reasons not to buy first — and that this ordering alone can produce a WTA-WTP asymmetry without invoking loss aversion directly.',
    },
    {
      source: 'Evolutionary game theory on possession (Maynard Smith’s “bourgeois strategy”) and field studies of animal territorial contests',
      finding: 'Across many species, the current possessor of a contested resource wins disputes against challengers more often than relative fighting ability alone would predict, a pattern modeled as a low-cost convention for resolving ownership conflicts.',
      caveat: 'An evolutionary analogy offered to explain why a possession-linked bias might exist at all — it documents a parallel animal-behavior pattern, not a direct causal test of the human psychological mechanism.',
    },
  ],
  takeaways: [
    'The core pattern — owners demand more to sell than non-owners will pay for the identical good — is real, but its size and universality under tightly controlled lab conditions is a genuine, ongoing dispute.',
    'Plott and Zeiler showed the classic gap shrinks sharply under careful, incentive-compatible, well-explained procedures; other researchers found it persisting anyway. Read both sides rather than the one that flatters your argument.',
    'None of the practical advice here needs that argument resolved: real markets with real money — home sellers, professional traders outside their specialty — show the same possession-linked overvaluation independent of the lab dispute.',
    'The bias is not general possessiveness: goods held for exchange barely show it, and deep, category-specific market experience shrinks it, while general intelligence or seniority does not.',
    'Loss aversion is the classic explanation, but query theory and mere-ownership accounts are credible competitors. You do not need the exact mechanism settled to manage the behavior.',
    'The single highest-leverage move is the outside-offer question: if we didn’t already own this, would we buy it today at this price? It resets the reference point without requiring anyone to admit bias.',
  ],
};
