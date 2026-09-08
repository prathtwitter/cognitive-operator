import type { DeepDive } from '../../../types/curriculum';

/** #24 · Sphere 3 · Signaling Asymmetry & Adverse Selection */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'You run a two-hour interview loop and come out certain the candidate is strong. So does everyone else on the panel. Six weeks later it is obvious you were wrong, and what stings is not that you were fooled — it is that you had no way not to be. Every question you asked, a weak candidate could have answered the same way with a weekend of preparation. Every line on the CV, a weak candidate could have written. You did not run a test. You ran a ceremony that almost anyone could pass, and then you paid the candidate roughly what anyone who passes that ceremony gets paid. That last step is the disease, and it is not a psychological one. It is arithmetic, and it runs whether or not anybody in the room is being deceitful.',
  sections: [
    {
      heading: 'This is a price mechanism, not a mood',
      body: [
        'In ordinary business talk, “information asymmetry” has degraded into a synonym for “they know more than we do, so be careful.” That is not what Akerlof described, and the loss of precision costs money. What he described is a feedback loop between price and quality that runs in rounds and always runs in the same direction.',
        'The loop works like this. Buyers cannot verify quality before paying, so they offer roughly what an average unit is worth. Sellers who hold genuinely above-average units find that price insulting relative to what they are giving up, so they withdraw. The pool that remains is worse than the pool that started. Buyers, being sensible, lower their offer to match the new average. More good sellers leave. Repeat. The market unravels from the top down, and at each step every single participant is behaving reasonably.',
        'That last point is the one people skip. There is no villain in this model. The buyer’s discount is not paranoia — it is the correct expectation given what the buyer can observe. It is right on average and wrong for every individual seller, and being right on average is exactly what destroys the good ones.',
        'It also matters to keep this separate from moral hazard, which gets conflated with it constantly. Adverse selection is hidden type: who you are, known before the deal. Moral hazard is hidden action: what you do, after the deal is signed. They need opposite tools. Screening and signalling address the first; incentives, monitoring and deductibles address the second. Spending screening money on a moral-hazard problem, or vice versa, is one of the more common expensive mistakes in procurement.',
      ],
    },
    {
      heading: 'Why the buyer’s defence is the thing that kills you',
      body: [
        'The seller’s information advantage is not usually a product of dishonesty. It is a by-product of ownership. Whoever has held the asset, run the system, managed the team or lived inside the process has simply been exposed to more of its behaviour than any outsider can be. The asymmetry is structural, so it does not go away when everybody involved is honest.',
        'Given that, buyers have exactly one broadly available defence: discount everything that is merely asserted. Economists call unbacked assertion cheap talk, and the reason it gets discounted to near zero is not cynicism but equilibrium. If costless claims were believed, every seller would make every claim, and claims would carry no information at all. The only stable resting point is one where words are treated as decoration.',
        'So the buyer defends by discounting, and the discount is precisely what pushes the honest premium seller out of the market. This is why the whole problem feels so unfair from the inside on both sides. The buyer thinks: I keep getting burned, so I will assume less. The good seller thinks: I keep being priced as though I were the median, so I will stop bidding. Both are responding correctly to the other, and together they hollow the category out.',
      ],
      example: {
        label: 'How a reverse auction eats a supplier base',
        body: 'A procurement team moves a category to competitive reverse auction to “remove emotion from the decision.” Year one they save eleven percent. The two suppliers who were carrying the most engineering depth decline to bid in year two, because at the clearing price they would be subsidising the specification work everyone else free-rides on. The remaining field is cheaper and thinner. Year three the auction clears lower again, and the winner scopes the job to the letter of a specification that the departed suppliers used to quietly fix. The savings are real and visible in the procurement scorecard. The cost lands two years later in a different budget line, under a different name, and nobody connects the two.',
      },
    },
    {
      heading: 'The single-crossing test, which is the whole game',
      body: [
        'Here is the part that is genuinely useful, and it is the part most business writing on “signalling” gets wrong. Spence’s job-market model does not say that education works as a signal because it is expensive. It says education works as a signal because it is differentially expensive — cheaper, in effort and time, for the more productive worker than for the less productive one. Strip that condition out and the model collapses: if a weak candidate can buy the credential just as easily, everybody buys it, nobody is separated, and the signal conveys nothing.',
        'Economists call this the single-crossing condition, or the Spence–Mirrlees condition. You do not need the mathematics. You need the one question it generates, and you should ask it of every reassurance anyone ever offers you: would a much weaker version of this counterparty find this exact move just as cheap? If the answer is yes, you are looking at decoration, no matter how impressive or costly it appears.',
        'Run the standard business signals through that filter and most of them fail immediately. A polished deck fails — polish is a procurement of design services, not of competence. A logo wall fails; logos are cheap to print and the underlying engagements are usually unverifiable. Most certifications fail, because they are purchasable at a price that is the same for a good firm and a bad one. Years in business partially passes, because a fraudulent operator has a shorter half-life. A named client whose operating lead you can telephone unannounced passes cleanly, because that call is survivable for one type and not the other.',
        'The failures matter more than the passes. Almost all effort spent on “demonstrating credibility” goes into moves that any competitor could copy by tomorrow afternoon. That effort is not just wasted; it actively teaches your buyer that this category’s claims mean nothing.',
      ],
      example: {
        label: 'Two guarantees, one real',
        body: 'Vendor A offers: “If we miss the uptime target, we will give you a ten percent discount on that month.” Vendor B offers: “Twenty percent of the annual fee sits in escrow and is released only if we hold 99.9% measured by your monitoring, not ours.” Do the arithmetic from the vendor’s side. Vendor A’s clause costs almost nothing to a bad operator — a bad month costs them a rounding error, so a bad operator offers it as happily as a good one. It fails single-crossing and therefore tells you nothing. Vendor B’s clause has an expected cost near zero for an operator genuinely running at 99.99% and a very large expected cost for one running at 99%. The two types cannot both afford to offer it. That gap — not the size of the number — is what makes it evidence.',
      },
    },
    {
      heading: 'Sophistication makes this worse, not better',
      body: [
        'The comforting story is that sharp buyers escape the lemons problem. They do not, and the reason is worth sitting with: a sharper buyer is simply a better discounter. Every improvement in your ability to detect and price risk speeds up the exit of the top of your supplier distribution. Individually you win the deal in front of you. Structurally, you are accelerating the decay of the market you will have to buy from next year.',
        'The person least protected here is not the naive buyer. It is the genuinely high-quality seller. You cannot argue your way out of a pooling equilibrium, because every protest you make is a protest a mediocre competitor would also make, in the same words, with the same conviction. Sincerity is not a signal. Sincerity is free.',
        'There is a second trap for sophisticated buyers, and it is subtler. When quality is unobservable, experienced people do not stop judging — they substitute. They judge fluency, confidence, cultural fit, how the counterparty handles a hard question in the room. Those are all real observations, and they are all observations of performance skill, which is exactly the dimension a weak operator can invest in most cheaply. A buyer who trusts their instinct in an opaque market is not screening. They are being screened by whoever is best at being screened.',
        'There is one theoretical escape hatch and it is worth knowing where it leaks. Grossman and Milgrom independently showed that if disclosure is verifiable, costless, and buyers reason properly, everything gets disclosed: the best of the silent group always has an incentive to step forward, which drags the next-best out, and so on down. Silence unravels into full disclosure. In real markets disclosure is rarely free, often unverifiable, and buyers routinely read silence as absence of data rather than as bad news. The gap between that theorem and reality is where a very large amount of money is quietly made. Train yourself to treat a missing dimension as an answer.',
      ],
    },
    {
      heading: 'What turns the loop on and what stops it',
      body: [
        'The dynamic runs hardest when: the transaction is one-shot; the counterparties are many and interchangeable; quality reveals itself long after payment; verification is expensive or impossible; and no third party has any stake in the truth of the claim. Notice that most enterprise services, most senior hiring, and most agency and consulting work score badly on every one of those. That is not an accident. Those are the markets where the lemons pressure is strongest and where price is least informative about quality.',
        'It weakens sharply when any of the following is present: genuine repeat purchase with a real switching threat; a reputation that is expensive to build and destroyable in one incident; cheap third-party verification such as inspection, audit or escrow; a warranty or bond whose expected cost differs by type; or a large, observable, sunk investment the seller would forfeit by behaving badly. Every institution you see clustered around a used-car market — dealer brands, certified pre-owned programmes, independent mechanics, warranties — exists to attack exactly this problem.',
        'The design lesson follows directly, and it is the opposite of what most people do. The question is never “how do I find trustworthy counterparties.” It is “what change would make the difference between a good one and a bad one visible before I commit.” The first question sends you looking for character, which is unobservable and which everybody claims. The second sends you looking for structure, which you can actually build.',
        'One caution on reputation systems specifically. A rating only works if standing is costly to acquire and can be lost. A five-star average on a platform where reviews are purchasable or where a burned seller can re-register under a new name is not an index of anything — it is a badge, and badges are honest only while somebody polices them.',
      ],
    },
    {
      heading: 'The honest limits of the model',
      body: [
        'Complete market collapse of the kind the pure model predicts is rarer than the theory implies, and you should know that before you deploy the argument in a room full of people who will check. Real markets grow institutions — brands, dealers, warranties, escrow, inspection, certification — precisely because the pressure exists, and those institutions absorb much of it. Field tests of the lemons effect in actual used-car markets have generally found something real but smaller than the model predicts. The model tells you reliably what pressure is present. It does not tell you what outcome will occur.',
        'More importantly, the direction of selection is not guaranteed. It is not a law that hidden information produces adverse selection. If the same trait that makes someone a low risk also makes them want more coverage — risk aversion is the usual candidate — then the people who buy the most insurance are better than average, and selection runs the other way. This has been documented in several insurance markets, and it is the reason economists now say “asymmetric information” and then check the sign empirically rather than assuming it.',
        'The education case is likewise unresolved rather than settled. Wage returns that jump disproportionately at the point of credential completion, rather than accruing smoothly per year studied, are hard to explain by skill acquisition alone and are commonly cited as evidence for signalling. How much of the return is signalling and how much is genuine human capital is actively contested, with credible economists spread across a wide range. Do not present either extreme as established.',
        'So trust the tool rather than the aggregate prediction. The single-crossing test — would a weaker counterparty find this move equally cheap — holds up regardless of whether any particular market is collapsing, because it is a statement about one specific signal in front of you rather than a forecast about an entire industry. That is the piece to carry into the room.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'Every bidder in a category lands within a narrow price band despite obviously different capability.',
      meaning: 'A pooling equilibrium. The market has stopped paying differentially for quality because it cannot see quality, so quality has stopped being supplied.',
    },
    {
      signal: 'Your strongest incumbent supplier quietly declines to bid this cycle.',
      meaning: 'The top of the distribution is exiting. Whatever you are paying now is the best price-quality combination you will see for a while, not the worst.',
    },
    {
      signal: 'A quality question is answered with an adjective and a testimonial.',
      meaning: 'Cheap talk. The reply cost nothing to produce, so a weaker competitor would have produced the identical reply. It is not evidence and should not move your estimate.',
    },
    {
      signal: 'A guarantee is offered that the seller would clearly never have to pay out on.',
      meaning: 'A signal engineered to fail single-crossing. It is designed to look like skin in the game while costing the same to a bad operator as to a good one.',
    },
    {
      signal: 'Detailed disclosure on every dimension except one.',
      meaning: 'Selective silence. Where disclosing would be cheap, the undisclosed dimension is the weak one. Read the omission as the answer.',
    },
    {
      signal: 'A counterparty is unusually available, unusually flexible, or unusually eager at the last minute.',
      meaning: 'Availability is information about the queue. Ask what they know about demand for this that you do not, rather than treating the flexibility as goodwill.',
    },
  ],
  playbook: [
    {
      move: 'Run the single-crossing test out loud, on every reassurance.',
      how: 'Before you let any claim move your estimate, ask what it would cost the worst plausible version of this counterparty to say the identical thing. Then put it to them directly: “Help me with something — what could you offer here that a much weaker competitor genuinely could not afford to match?”',
      watchOut: 'Strong operators enjoy that question and answer it immediately. Weak ones treat it as an insult and pivot to relationship language. The reaction is itself the data.',
    },
    {
      move: 'Convert assertions into contingent payment.',
      how: '“We are comfortable with your number. Let us structure it: sixty percent on delivery, forty percent released when the agreed metric holds for ninety consecutive days, measured on our systems.” The willingness to accept, and the counter they propose, prices their private belief about their own quality.',
      watchOut: 'This only produces a signal if the outcome is measurable and attributable to them. Otherwise you have not built a screen, you have built a future dispute.',
    },
    {
      move: 'Price the warranty instead of arguing about the promise.',
      how: 'Ask what they would charge to extend the guarantee from twelve months to thirty-six, or to double the penalty band. The number they quote is their own estimate of their failure rate, stated in a currency they cannot inflate.',
      watchOut: 'A refusal is not automatically a confession. Cash-flow constraints and insurance limits are real. Ask which it is, and whether a third party would underwrite it.',
    },
    {
      move: 'Treat silence as content and name the missing dimension.',
      how: '“You have covered the wins in detail. Walk me through the two engagements that went worst in the last three years, and tell me what the client on the losing one would say if I rang them.” Then actually ring them.',
      watchOut: 'Name the specific dimension. A vague “any problems?” gets a vague answer and lets them choose which failure to disclose.',
    },
    {
      move: 'When you are the high type, stop arguing and buy a signal your rivals cannot.',
      how: 'Do not defend your quality in words; nothing you say separates you from someone claiming the same thing. Offer the move that would be ruinous for a weaker firm: the first phase at cost with a genuine exit, your fee tied to their metric, a reference list you invite them to sample randomly rather than one you curate.',
      watchOut: 'Only credible if you would genuinely refuse to offer it when the fit is poor. A concession you would make in any circumstance is not skin in the game, and buyers eventually work that out.',
    },
    {
      move: 'Redesign what is observable rather than hunting for trustworthy people.',
      how: 'Build the structure that makes type visible before commitment: a paid pilot on your real data rather than a demo on theirs, escrowed milestones, a work sample scored blind, a reference you source yourself from the market rather than from their list.',
      watchOut: 'A supplied reference list is a badge, honest only while someone polices it. A reference you find independently is much closer to an index. Keep the two clearly separate in your own head.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Information asymmetry just means the other side knows more than you do.',
      correction: 'It names a specific failure with a specific dynamic: the average price drives out the best of the pool, which lowers the average, repeatedly. The problem is not their knowledge. It is your inability to pay differentially for a quality you cannot see.',
    },
    {
      misread: 'An expensive signal is a credible signal.',
      correction: 'Sticker price is close to irrelevant. What creates credibility is a cost gap between types. A signal both a strong and a weak counterparty can afford equally separates nobody, however lavish it looks — and most corporate credibility spending is exactly this.',
    },
    {
      misread: 'Adverse selection and moral hazard are two names for the same distrust.',
      correction: 'Hidden type before the deal versus hidden action after it. Screening and signalling fix the first; incentives, monitoring and deductibles fix the second. Applying the wrong instrument spends real money on a problem you do not have.',
    },
    {
      misread: 'If I get better at spotting lemons, I win.',
      correction: 'Better discounting improves the deal in front of you and accelerates the exit of the best suppliers from the market you will buy in next year. The only fix that compounds is making quality verifiable, which is a structural project rather than a skill.',
    },
    {
      misread: 'Wherever information is asymmetric, adverse selection follows.',
      correction: 'Not automatically. If the trait driving demand also predicts lower risk, selection runs the other way and buyers are better than average. This has been found in real insurance markets. Check the sign in your specific market rather than assuming the textbook direction.',
    },
  ],
  evidence: [
    {
      source: 'Akerlof, “The Market for ‘Lemons’: Quality Uncertainty and the Market Mechanism” (QJE, 1970)',
      finding: 'Showed that when buyers cannot verify quality, the willingness to pay only an average price drives above-average sellers out, which lowers the average and repeats — potentially collapsing the market even though every participant is behaving rationally. The paper was rejected by several leading journals before publication and later underpinned the 2001 Nobel shared with Spence and Stiglitz.',
    },
    {
      source: 'Spence, “Job Market Signaling” (QJE, 1973)',
      finding: 'Established that a signal separates types only when acquiring it is genuinely less costly for the higher-quality type. If both types face the same cost, everyone buys the signal, no information is transmitted, and the equilibrium pools. This differential-cost requirement, not expense as such, is the load-bearing condition.',
    },
    {
      source: 'The single-crossing (Spence–Mirrlees) condition',
      finding: 'The formal statement of that requirement: the cost curves of the two types must cross exactly once, so that at the relevant level of signalling the strong type finds one more unit cheaper than the weak type does. It is the technical name for the only test that matters in practice.',
    },
    {
      source: 'Rothschild & Stiglitz, insurance screening model (1976)',
      finding: 'Showed the mirror-image move: the uninformed side can screen by offering a menu — cheap with a high deductible, expensive with a low one — that induces each type to reveal itself by choosing. It also showed that in some configurations no competitive equilibrium exists at all, so screening is not a guaranteed fix.',
    },
    {
      source: 'Grossman (1981) and Milgrom (1981), the unravelling / full-disclosure result',
      finding: 'With verifiable and costless disclosure and appropriately sceptical receivers, everything gets disclosed: the best of the non-disclosing group always gains by stepping forward, which pulls the next-best out, cascading down until only the worst stays silent.',
      caveat: 'It requires verifiability, near-zero disclosure cost and buyers who genuinely reason that way. Real markets fail all three, which is why silence usually goes unpunished. Treat the theorem as instruction for how you should read silence, not as a description of how markets behave.',
    },
    {
      source: 'Field tests of the lemons effect in used-vehicle markets (Genesove, 1993, and later work)',
      finding: 'Found evidence consistent with adverse selection in wholesale used-car trading, but effects generally smaller than the pure model implies.',
      caveat: 'Real markets grow dealers, warranties, certified programmes and independent inspection precisely because the pressure exists, and these institutions absorb much of it. The model reliably identifies the pressure; it does not predict the outcome.',
    },
    {
      source: 'Empirical tests of selection in insurance markets (Chiappori & Salanié, 2000; Finkelstein & McGarry, 2006)',
      finding: 'Tests in French automobile insurance found little sign of the predicted asymmetric-information effect in contract choice. Work on long-term care insurance found private information does exist but is multi-dimensional: risk preference can offset risk type, so the people buying more cover are sometimes the better risks.',
      caveat: 'This is the clearest evidence that adverse selection is a possibility rather than a law. Advantageous selection is real. Establish the sign in your market before designing around it.',
    },
    {
      source: 'The signalling-versus-human-capital debate in education economics',
      finding: 'Wage returns that jump disproportionately at credential completion rather than accruing smoothly per year of study are difficult to explain by skill acquisition alone, and are commonly read as evidence that the credential is doing signalling work.',
      caveat: 'The share attributable to signalling versus genuine skill is genuinely contested, with credible estimates spread very widely and strong-signalling positions in the minority among labour economists. Present it as an open question, not as a settled result.',
    },
  ],
  takeaways: [
    'Adverse selection is arithmetic, not suspicion. The average price is correct on average and wrong for every individual, and being correct on average is what removes the best sellers.',
    'One question decides whether a signal is real: would a much weaker counterparty find this exact move just as cheap? If yes, it is decoration.',
    'Cost does not create credibility. A cost gap between types does. Most corporate credibility spending buys things any rival could copy by tomorrow.',
    'Getting sharper at discounting wins the deal in front of you and accelerates the decay of the market you buy in next year. Making quality verifiable is the only fix that compounds.',
    'Silence is content. Where disclosure would be cheap and a dimension is missing, treat the missing dimension as the bad one and name it out loud.',
    'Hidden information does not always produce adverse selection — in several real markets the selection runs the other way. Test the sign rather than assuming the textbook.',
  ],
};
