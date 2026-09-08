import type { DeepDive } from '../../../types/curriculum';

/** #27 · Sphere 3 · The Winner’s Curse & Ego Escalation */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'Here is the deal on the table. You may acquire Company T. Its value per share is somewhere between $0 and $100, every value equally likely, and only Company T knows which. Under your management it will be worth exactly fifty percent more than it is worth under theirs. You must name one price now, in a sealed envelope. They will accept anything at or above their true value and reject anything below it. What do you bid? Most people land between $50 and $75, and the logic feels airtight: the company averages $50, it is worth $75 to me, so anything under $75 is profit. The correct bid is zero. Every offer you could make loses money on average, and the clause that proves it is the one you read straight past — they only say yes when they know something you do not.',
  sections: [
    {
      heading: 'The curse is arithmetic, not arrogance',
      body: [
        'Run the acquisition problem properly. If they accept your offer of P, that tells you their true value was somewhere between $0 and P — so, on average, P divided by two. Worth fifty percent more to you makes it 0.75 × P. You paid P. You lose a quarter of every dollar you bid, at every possible bid. No overconfidence is required to produce this result. No competitive fever. No ego. Just a failure to ask what winning implies.',
        'That is the whole mechanism, and it generalises. In any auction where the asset has roughly the same underlying value to everyone — an oil lease, a block of radio spectrum, a company’s future cash flows — bidders form independent, noisy estimates. Suppose those estimates are honest and unbiased, scattered evenly above and below the truth. The auction does not select the best bidder. It selects the highest estimate. And the highest of many honest estimates is, by construction, the one most likely to be too high.',
        'So winning is information, and it is bad news. The moment the gavel falls you have learned that every other informed party looked at the same asset and concluded it was worth less than you did. The popular version of this concept — the winner overpaid because he got carried away — inverts cause and effect. Getting carried away makes it worse. It is not what makes it happen.',
        'The precise definition matters for the fix. The curse is not overbidding; it is failing to condition on winning. A bidder who does the conditioning shades downward — bids below their own best estimate — and shades harder the more rivals there are and the noisier the estimate. That is the counterintuitive part. Competition should make you bid more. The mathematics says the opposite: more bidders means the winning estimate is drawn from further out in the tail, so more competition demands more caution, not less.',
      ],
      example: {
        label: 'Where the idea came from',
        body: 'In 1971 three petroleum engineers at Atlantic Richfield — Capen, Clapp and Campbell — published a paper in the Journal of Petroleum Technology arguing that companies bidding on offshore Gulf of Mexico leases were earning returns well below what the risk justified. Their explanation was not that oilmen were emotional. It was that the sealed-bid process systematically handed the tract to whichever firm’s geologists had been most optimistic. These were professionals with seismic data, engineering models and enormous financial discipline. The selection effect did not care.',
      },
    },
    {
      heading: 'Why your mind cannot see the selection effect',
      body: [
        'The reason this is invisible from the inside is structural, not moral. You have exactly one estimate: yours. You cannot see the distribution of everyone else’s. So the question that would save you — where does my number sit relative to the others? — has no available input. Your estimate feels like a measurement of the asset. It is actually one draw from a scattered cloud, and you can only see the draw.',
        'There is a second reason, and it is the more interesting one. For almost everything you have ever bid on in ordinary life, the curse does not apply. When you buy a house you will live in, a painting you love, or hire a candidate you need, the value is private — it is genuinely worth more to you than to the underbidder, and winning tells you nothing bad. The rule of thumb your mind has learned from a lifetime of private-value transactions is bid up to what it is worth to me, and in that domain the rule is correct. It fails only in common-value situations, which happen to be where the largest cheques are written.',
        'Then there is the ego layer, which is a separate engine bolted onto the same event. Status contests in social species were genuinely all-or-nothing: relative standing, not absolute resources, determined access to everything that mattered, and backing down in front of an audience was permanently expensive. That machinery is still installed. It produces the sensation that stopping is losing, which is a category error in an auction and an entirely sensible instinct in a dominance display.',
        'Keep the two engines separate, because they need different countermeasures. The statistical curse is fixed by arithmetic discipline: shade your bid, and treat the number of rivals as a reason to bid less. The ego engine is fixed by architecture: who is in the room, who set the ceiling, and whether anyone is watching.',
      ],
    },
    {
      heading: 'The move that flips a valuation into a duel',
      body: [
        'The damage is done by a specific and identifiable switch: the question in your head changes from what is this worth? to what does it cost me to stop? Martin Shubik built the cleanest possible demonstration of this in 1971. He auctioned a dollar bill under one modified rule — the highest bidder pays and receives the dollar, and the second-highest bidder also pays and receives nothing.',
        'Watch what happens at ninety-nine cents. The runner-up at ninety-five cents faces a choice: quit and lose ninety-five cents, or bid a dollar and break even. Bidding is obviously correct. Now the other player is at ninety-nine cents facing a certain loss, so they bid $1.05 to lose only five cents instead. Every subsequent bid is individually rational and jointly catastrophic. Shubik reported bids running far past the value of the dollar in ordinary classroom settings.',
        'Notice that nobody in that spiral is being irrational about the step in front of them. They are being rational about the wrong quantity. Sunk cost has quietly become the object of the negotiation, and the prize has become a rounding error. This is escalation of commitment — Barry Staw’s territory — and it is distinct from, and additive to, the statistical curse. You can lose money in a common-value auction with perfect emotional control. Add the duel and you lose considerably more.',
        'The tell in a real room is grammatical. Early in a process people say things like at that price the economics work. Late in a process they say we are not losing this to them. The subject of the sentence has moved from the asset to the rival. The moment you hear it — in someone else or in your own mouth — the valuation exercise is over and something else is running.',
      ],
      example: {
        label: 'Spectrum, 2000',
        body: 'The European third-generation mobile licence auctions in 2000 are the largest live experiment anyone has run on this. The United Kingdom’s auction raised roughly £22.5 billion; Germany’s raised close to €50 billion a few months later. Both were well-designed auctions run by serious economists — the design worked exactly as intended and extracted enormous value for the state. What followed was a wave of write-downs and credit downgrades across European telecoms operators, and years of argument about whether the winners had bid to a business case or bid to avoid being locked out of a market their rivals would then own. The auctions were not a failure of auction design. They were a demonstration of what happens when a common-value asset with wide estimate dispersion meets a small number of firms who cannot afford, reputationally, to be seen to lose.',
      },
    },
    {
      heading: 'Expertise and experience do not fix it',
      body: [
        'Bazerman and Samuelson published the Acquiring a Company problem in 1983 alongside a simpler demonstration: they auctioned jars containing $8 in coins to MBA students. The average bid across all participants fell below the true value, exactly as you would hope from a room of unbiased estimators. The average winning bid exceeded it. The seller made money on every jar. The bidders, collectively, were not overconfident — the winner was simply the one drawn from the top of the distribution.',
        'The stronger result came later. Ball, Bazerman and Carroll ran the acquisition problem repeatedly, with full feedback after every trial, across twenty rounds. Learning was close to absent. That is the finding that should change how you think about your own deal experience, because it explains why experience does not help here: the feedback you receive is selected. You observe the outcomes of the deals you won and nothing at all about the deals you lost. If you never see the counterfactual, twenty years of transactions teach you almost nothing about your bidding calibration.',
        'John Kagel and Dan Levin then established the effect in controlled laboratory auctions and added the detail that matters most operationally: inexperienced bidders bid more aggressively as the number of rivals increased, which is precisely backwards. Experienced subjects reduced the error but did not eliminate it. Ulrike Malmendier and Young Han Lee later found the same shape in live money on eBay — a striking share of auctions closed above a fixed price for an identical item that was available on the same site at the same moment.',
        'Finally, look at who is standing next to the bidder. Deal teams are rewarded for closing. Advisory fees are typically contingent on completion. The people in the process with the deepest expertise usually have the weakest financial incentive to recommend walking away. That is not a character problem, it is an org chart, and it is why the walkaway number has to be owned by someone whose compensation does not depend on a deal happening.',
      ],
      example: {
        label: 'The feedback you never get',
        body: 'Imagine you have bid on forty acquisitions in your career and won twelve. You have detailed post-mortems on all twelve. You have essentially nothing on the twenty-eight you lost — not what the winner paid, not how the asset performed, not whether the winning price ever made sense. Your entire experiential dataset is the sample selected by the exact mechanism that biases the outcome. A dozen careful post-mortems on a biased sample produce confident, well-argued, systematically wrong intuitions about what things are worth.',
      },
    },
    {
      heading: 'The three switches that turn the fever on',
      body: [
        'Gillian Ku, Deepak Malhotra and Keith Murnighan studied live and internet auctions and named the conditions that generate what they call competitive arousal. Three stand out and all three are structural, which means all three are removable. The first is rivalry: a specific, named, personified opponent rather than an abstract market. The second is time pressure, particularly a closing window that compresses deliberation. The third is the presence of an audience — spectators, press, a board, colleagues who will know.',
        'Add two more from practice. Prior investment: by the time you are in the room you have spent real money on diligence, and that spend is now quietly arguing for a yes. And auction format: an open ascending process, where each bid is a visible act of defiance, produces very different behaviour from a sealed bid, where nobody performs anything.',
        'The reason this list is useful is that every item is a lever. You can decline to name the rival internally and refer only to the price. You can refuse a decision window shorter than your analysis cycle. You can keep the auditorium empty — no live updates to the board, no running commentary, no one whose respect is on the line watching the number climb. You can put the walkaway price in writing before the process starts and hand it to someone who is not in the room and has no upside from the deal.',
        'The general principle: you cannot make yourself immune to competitive arousal by resolving to be calm. You can arrange the conditions so that the arousal has nothing to grip. A number set in advance by an absent authority is a far better control than a determined executive in a live room, because it does not have to win an argument at the moment it matters.',
      ],
    },
    {
      heading: 'When paying the most is the right answer',
      body: [
        'The honest limit first: not every high bid is cursed, and treating every competitive win as a mistake will cost you good assets. The curse requires three ingredients together — the value is broadly common across bidders, estimates are genuinely noisy, and there are several bidders. Remove any one and the shading logic weakens or reverses. If you have information the others do not, or a genuinely different use for the asset, being the top bidder is exactly what you should expect and there is nothing to correct.',
        'The discipline is to write down, before you see any price, the specific reason the asset is worth more to you than to a well-run competitor — a real integration, a real capability, a real cost structure. If that reason exists on paper beforehand, a winning bid is evidence you were right. If it appears only after you have won, it is a story constructed to justify a number, and you should treat it as such.',
        'The field evidence is also more nuanced than the parable suggests. Later analyses of the same offshore lease data that inspired the original paper found bidders earning positive, if modest, returns, and behaving as though they had partially adjusted for the effect. The laboratory result is robust and reproducible. The claim that professional bidders never adapt is too strong, and you should not deploy it as an argument. Markets do learn — slowly, incompletely, and usually after an expensive decade.',
        'And keep the two problems apart when you diagnose your own organisation. If your winning bids underperform quietly and consistently across many deals, you have a conditioning problem and the fix is arithmetic. If you have one catastrophic overpayment attached to a named rival and a press cycle, you had a duel, and the fix is governance. Applying the wrong remedy leaves the actual failure fully intact.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'The internal conversation starts naming a competitor more often than it names a number.',
      meaning: 'The objective has migrated from valuation to relative standing. Once the rival is the subject of the sentence, the price ceiling is no longer doing any work.',
    },
    {
      signal: 'Someone argues that walking away now would waste the diligence spend.',
      meaning: 'Sunk cost has entered the valuation. That money is gone under every scenario and belongs in no comparison between bidding and stopping.',
    },
    {
      signal: 'More bidders enter and your team’s enthusiasm rises.',
      meaning: 'Backwards. A larger field means the winning estimate sits further out in the tail, which is a reason to shade down, not evidence the asset is good.',
    },
    {
      signal: 'The business case is rebuilt after the price moves rather than before.',
      meaning: 'Synergy numbers that appear only once a bid needs justifying are outputs of the negotiation, not inputs to it.',
    },
    {
      signal: 'The decision window shrinks and an audience appears — board updates, press interest, a live process.',
      meaning: 'Two of the three documented competitive-arousal triggers just switched on. Expect the reservation price to become negotiable.',
    },
    {
      signal: 'You feel relief rather than sober satisfaction when the bid is accepted.',
      meaning: 'Relief signals the contest ended, not that the economics cleared. In a common-value auction, acceptance is the moment to re-examine your estimate, not celebrate it.',
    },
  ],
  playbook: [
    {
      move: 'Shade the bid explicitly, and shade harder as the field grows.',
      how: 'Bid below your own best estimate by an amount that scales with the uncertainty in your model and the number of credible rivals. State it out loud as a rule: "Our valuation says $180 million. Our bid is $150 million, and if three more bidders qualify it goes down, not up."',
      watchOut: 'This reads as timidity to anyone who has not seen the arithmetic. Show the conditioning logic once, in writing, before the process, so it is a policy rather than a loss of nerve.',
    },
    {
      move: 'Set the walkaway price before the process and hand it to someone outside it.',
      how: 'Write the number and the reasoning, date it, and give it to a person with no deal-completion incentive — a CFO, an audit chair, a non-executive. Raising it requires their written sign-off and a new memo explaining what changed about the asset.',
      watchOut: 'It only works if the holder can genuinely say no. A ceiling held by someone who reports to the deal sponsor is decoration.',
    },
    {
      move: 'Depersonalise the opponent inside your own building.',
      how: 'Ban the rival’s name from internal discussion of the price. Refer to "the market clearing level" instead. It sounds fussy and it materially changes the temperature, because rivalry is the strongest documented arousal trigger and it needs a face to attach to.',
    },
    {
      move: 'Ask the one question that separates skill from selection.',
      how: 'Before any bid is approved: "Write down why this asset is worth more to us than to a competent competitor." If the answer is a specific mechanism, proceed. If the answer is that we simply value it more, you have described the winner’s curse rather than a thesis.',
    },
    {
      move: 'Exit loudly and hand the rival the curse.',
      how: 'Say it cleanly and without rancour: "At this level, winning this creates more risk than losing it. We are stepping back, and we wish them well with it." You keep the capital, you keep the reputation for discipline, and the counterparty keeps an asset that just cleared everyone else’s ceiling.',
      watchOut: 'Say nothing that sounds like a prediction of their failure. Gloating converts a disciplined exit into a grudge, and grudges are how you end up in the next duel.',
    },
    {
      move: 'Break an active ego spiral with a clock, not an argument.',
      how: 'Name the dynamic without assigning blame and buy time: "We have stopped comparing this to our return threshold and started comparing it to them. Nothing is decided for twenty-four hours." Delay works where reasoning does not, because arousal decays and arguments escalate.',
      watchOut: 'Only viable if you have not already agreed to a deadline that makes delay a forfeit. Protect the calendar early — by the time you need the pause, it is usually already sold.',
    },
  ],
  commonMisreads: [
    {
      misread: 'The winner’s curse is a fancy name for overconfidence.',
      correction: 'It survives in a room of perfectly calibrated, unemotional bidders. The auction selects the highest of many honest estimates, and the highest of many honest estimates is systematically too high. Overconfidence deepens the hole; it does not dig it.',
    },
    {
      misread: 'It applies to any competitive purchase.',
      correction: 'It requires a common value across bidders. When the asset is genuinely worth more to you — a house you will live in, a hire that fills a specific gap — winning carries no bad news, and shading your bid just loses you things you should have bought.',
    },
    {
      misread: 'More competition means the asset is more valuable, so bid up.',
      correction: 'Extra bidders add nothing to the underlying value and everything to the selection effect. The equilibrium response to a larger field is a lower bid. Kagel and Levin found inexperienced bidders reliably do the opposite.',
    },
    {
      misread: 'Experienced dealmakers have calibrated this out of their instincts.',
      correction: 'Their feedback is selected. They see outcomes only for deals they won, which is precisely the biased sample the mechanism produces. Repeated play with full feedback barely improved performance in the laboratory version.',
    },
    {
      misread: 'The dollar-auction spiral and the statistical curse are the same problem.',
      correction: 'They are two independent engines that often run together. One is a conditioning failure fixed by arithmetic; the other is escalation of commitment fixed by governance. Solving one leaves the other completely operational.',
    },
  ],
  evidence: [
    {
      source: 'Capen, Clapp & Campbell, "Competitive Bidding in High-Risk Situations" (1971)',
      finding: 'Three Atlantic Richfield engineers argued that offshore oil lease auctions systematically awarded tracts to the firm with the most optimistic geological estimate, producing returns below what the risk warranted. The argument is statistical: the auction selects the highest estimate, not the best judgement.',
      caveat: 'Later analyses of the same outer continental shelf data found bidders earning positive if modest returns and behaving as though they had partly adjusted. The mechanism is solid; the claim that the industry lost money persistently is contested.',
    },
    {
      source: 'Bazerman & Samuelson, "I Won the Auction But Don’t Want the Prize" (1983)',
      finding: 'Introduced the Acquiring a Company problem, where the correct bid is zero and most respondents bid between $50 and $75. Also auctioned jars holding $8 in coins: the average bid fell below the true value while the average winning bid exceeded it, so the seller profited and the winner lost.',
    },
    {
      source: 'Ball, Bazerman & Carroll (1991)',
      finding: 'Ran the acquisition problem for twenty trials with full outcome feedback after each. Participants showed little to no learning. Experience does not correct the error because the feedback available in real auctions is selected on winning.',
    },
    {
      source: 'Kagel & Levin, common-value auction experiments (1986 onward)',
      finding: 'Demonstrated the winner’s curse robustly under laboratory conditions with real money, and found that inexperienced bidders bid more aggressively as the number of rivals rose — the opposite of the equilibrium response. Experienced subjects reduced the error without eliminating it.',
    },
    {
      source: 'Shubik, "The Dollar Auction Game" (1971)',
      finding: 'The auction where the runner-up also pays. Above the value of the prize, every additional bid is a rational attempt to reduce a loss, and the spiral routinely carried bids far past a dollar.',
      caveat: 'Shubik reported this as a classroom demonstration rather than a controlled experiment, and noted it works best with an audience and a light social atmosphere. That the conditions matter is itself part of the finding.',
    },
    {
      source: 'Ku, Malhotra & Murnighan, competitive arousal (2005)',
      finding: 'Studied live and internet auctions and identified rivalry, time pressure and the presence of an audience as the conditions that shift bidders from valuing the asset to wanting to win. All three are properties of the process, which makes them removable.',
    },
    {
      source: 'Malmendier & Lee, "The Bidder’s Curse" (2011)',
      finding: 'Examined eBay auctions with real money and found a striking share of them closing above a fixed price for the identical item available on the same site at the same time. Overbidding is not confined to laboratories or to exotic assets.',
    },
    {
      source: 'Roll, "The Hubris Hypothesis of Corporate Takeovers" (1986), and the acquirer-returns literature',
      finding: 'Argued that takeover premiums reflect bidders’ valuation errors selected by the winning process. Large-sample studies consistently find target shareholders capture most of the announced gains while acquirer announcement returns cluster near zero.',
      caveat: 'Average acquirer returns are close to zero with very wide dispersion, and results vary by sample, period and method. "Most acquisitions destroy value" is a stronger claim than the evidence supports; "acquirers capture little of the gain on average" is defensible.',
    },
  ],
  takeaways: [
    'Winning a common-value auction is information, and the information is that everyone else valued it lower than you did.',
    'The curse is a failure to condition on winning, not a failure of temperament. It survives perfect emotional control.',
    'More bidders is a reason to bid less, not more. The winning estimate is drawn from further out in the tail.',
    'Your deal experience is a biased sample: you see outcomes only for the deals you won, which is the exact selection that causes the problem.',
    'Rivalry, time pressure and an audience are the three documented arousal triggers, and all three are properties of the process you control.',
    'A walkaway price written in advance and held by someone with no deal upside beats any amount of resolve inside the room.',
  ],
};
