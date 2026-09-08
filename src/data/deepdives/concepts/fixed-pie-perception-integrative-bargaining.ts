import type { DeepDive } from '../../../types/curriculum';

/** #30 · Sphere 3 · Fixed-Pie Perception & Integrative Bargaining */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'Two sourcing managers spend four hours locked in a conference room over one number: a component price sitting at $2.14 against a demanded $2.31. They finally split the difference at $2.22 and both walk out convinced they lost. In four hours, nobody asked the other side a single question about payment terms, warranty length, minimum order volume, or exclusivity — four variables sitting untouched on the table the entire time, at least one of which the other side would probably have handed over almost for free. The room spent four hours slicing a pie that was never the only pie on the table.',
  sections: [
    {
      heading: 'The assumption nobody states out loud',
      body: [
        'Fixed-pie perception isn’t a belief anyone would defend if asked directly — almost nobody thinks negotiation is always zero-sum. It operates beneath conscious belief, as a default processing habit: negotiators treat every point the other side gains as a point they lose, without checking. That’s why telling people “win-win deals exist” changes almost nothing — they already agree, and keep negotiating as if it were false anyway.',
        'The formal split is between distributive bargaining — dividing a fixed quantity of one thing — and integrative bargaining, which trades across several things valued differently by each side. Bazerman and Neale’s research, and Raiffa’s earlier mathematical treatment of negotiation, both center on this: claiming a larger share of one pie versus building a bigger, differently-shaped one. Lax and Sebenius named the two activities claiming value and creating value, because most negotiators are fluent in the first and rusty at the second.',
        'The failure lives in a specific gap: discovering a trade requires a diagnostic question, not a leading one, and almost nobody asks it under pressure. “Would you accept $2.20?” tests a position. “What matters more to you, price or delivery time?” tests a structure. Instinct optimizes for the first kind, because it feels like progress. Only the second kind actually locates a trade.',
        'Thompson and Hastie’s research found the sharper version of this failure: a substantial share of negotiators, even with real information available if they’d asked for it, couldn’t identify issues where they and their counterpart actually wanted the same outcome — fully compatible issues, not just tradeable ones. That’s a worse miss than failing to logroll, since compatible value costs nobody a concession. It just has to be noticed.',
      ],
    },
    {
      heading: 'Why defaulting to zero-sum is a reasonable bet',
      body: [
        'Treating this as a failure of imagination misses the engineering logic underneath it. Ancestral resource splits — a carcass, a water source, grazing rights — were genuinely single-currency and rivalrous: more for one party strictly meant less for the other, with no warranty clause or payment schedule to trade against instead. A mind calibrated to that environment defaults to protecting its share, because for most of its history, that was the only available move.',
        'The sharper reason is information economics. Lax and Sebenius named it the negotiator’s dilemma: creating joint value requires disclosing your real priorities, but disclosure is exploitable — a counterpart who learns you don’t care about the delivery date can just take it for free, rather than trading something they value for it. Assuming the pie is fixed, and withholding that information, is a defensible risk-averse strategy against a real threat, not a failure of creativity.',
        'This reframes the fix. It isn’t “trust the other side more” — often bad advice against an adversarial or unfamiliar counterpart. It’s building a procedure that lets both sides reveal relative priorities without revealing exploitable absolute ones, like how low you’d actually go on price. That’s a design problem, not a goodwill problem, and it has design solutions.',
      ],
    },
    {
      heading: 'The move: logrolling across issues valued differently',
      body: [
        'The technique that captures the value fixed-pie perception hides is logrolling, formalized by Pruitt and Lewis: trading concessions across issues the two sides rank differently, so each side gives up something low on its own list for something high on it — a jointly better outcome than any single-issue split. This differs from compromise. Splitting every issue down the middle feels fair, but is still a fixed-pie habit; it just applies the habit to more variables instead of one.',
        'The hard step: you need the other side’s ranking, and can’t just ask “what matters most?” and expect a clean answer. A counterpart may name a fake low priority purely to “generously concede” it later for their real target. Even an honest answer gets discounted — Ross’s work on reactive devaluation found a stated position is routinely devalued for no reason but where it came from, so a genuinely low priority can still read as a bluff.',
        'The concrete answer: stop asking single questions and offer packages. Multiple equivalent simultaneous offers — developed by Victoria Medvec and Adam Galinsky — present two or three proposals costing you the same but differing sharply in composition: price-heavy, exclusivity-heavy, volume-heavy. You’re indifferent among them. The counterpart isn’t, and which one they gravitate toward reveals their ranking without a question they could deflect or an answer they could regret.',
      ],
      example: {
        label: 'A worked trade',
        body: 'A logistics firm and a regional carrier are $340,000 apart on an annual rate. The buyer proposes three equally-costed packages instead: the asking rate with 90-day payment; a lower rate with 15-day payment and two-year exclusivity; the original offer with a volume guarantee and first-refusal on new routes. The carrier, cash-strained after a slow quarter, takes the fast-payment package without hesitation. Nobody asked if it needed faster cash — its reaction to three equal options answered that for free.',
      },
    },
    {
      heading: 'Sophistication makes people more suspicious, not more generous',
      body: [
        'Experience with a deal’s substance — the industry, the pricing — doesn’t touch this failure, because it isn’t about domain knowledge. Neale and Northcraft’s research, run on both student negotiators and practising professionals, found experienced negotiators making the same judgment errors at rates not meaningfully better than novices. Knowing the market cold says nothing about your specific counterpart’s priorities today, which is the only knowledge that actually prevents the error.',
        'Worse, sophistication can work against discovery through reactive devaluation. Once a negotiator knows counterparts sometimes misrepresent priorities to extract cheap concessions, the rational response is to discount whatever the other side says. That protects against being played — and blocks any real logrolling offered honestly, because the correctly paranoid negotiator can no longer receive true information as true.',
        'This produces an ironic pattern: the more rounds of back-and-forth two sophisticated parties go through, the more each side’s stated priorities get treated as noise, and the more the conversation collapses back onto the one variable neither side can fake — price — the exact fixed-pie battleground the research shows people default to.',
        'The uncomfortable conclusion: “we have experienced negotiators on this deal” is not a control against fixed-pie perception, for the same reason raw intelligence isn’t a control elsewhere in this field guide. The failure runs through a default assumption and a rational defense against exploitation — not a skill deficit years of deal-making would fix.',
      ],
    },
    {
      heading: 'When the pie genuinely narrows or widens',
      body: [
        'The clearest on-switch is structural: a genuinely single-issue negotiation — one number, nothing else adjustable — is distributive by construction. There’s no hidden compatible issue, because there’s only one dimension. Recognizing which category you’re in, before hunting for a trade that can’t exist, matters more than any technique here.',
        'Time pressure and public framing switch it on even when several issues exist. A negotiation staged in front of an audience locks both sides into distributive processing, because conceding a low-cost issue in public can look like losing status even when it costs nothing real. The same two people, alone, are far freer to say what they don’t actually care about.',
        'Trust and expected repeat interaction switch it off. Parties who’ll deal with each other again — a long-term supplier, two departments needing each other next quarter — have real incentive to invest in discovery, since a good trade doubles as reputation capital. One-shot, anonymous negotiations remove that incentive, which is one reason a single home sale stays stubbornly zero-sum even when other issues exist on paper.',
      ],
      example: {
        label: 'Same negotiation, public versus private',
        body: 'Two co-founders renegotiating equity in front of their leadership teams spend two hours restating the same 60/40 versus 50/50 positions, because backing down in front of eight reports reads as losing status. The same two founders, alone in a car afterward, discover in minutes that one cares far more about the CEO title than the equity, and the other cares far more about the equity than the title. Their preferences didn’t change between the two rooms. The audience did.',
      },
    },
    {
      heading: 'The honest limits: when logrolling doesn’t apply, and when it’s being weaponized',
      body: [
        'The first honest limit is structural: genuinely single-issue negotiations exist and are legitimately zero-sum. A flat monthly rent with no other term, a one-time private sale, a salary offer with no other lever — none have a hidden compatible issue, because nothing else is on the table to trade against. Searching for a trade that doesn’t exist wastes time and can read as evasive to a counterpart who correctly sees the deal as simple.',
        'The second limit: logrolling can be faked. A sophisticated counterpart can invent a low-cost, high-drama “priority” purely to trade it away later for their real target. Package proposals make this harder to pull off, but not impossible — a priority that doesn’t hold up against a second, differently-shaped proposal deserves a second look before you bank a concession on it.',
        'The third limit is the evidence itself: most classic findings come from lab and classroom role-plays on assigned scripts, not audited real deals, and role-players carry none of the reputational stakes of an actual negotiation. The core findings have been replicated widely enough to be about as solid as negotiation research gets, but “replicated in a classroom” and “true of your counterpart tomorrow” aren’t the same claim — treat the technique as a strong prior worth testing, not a guarantee.',
        'One more thing worth naming: “expanding the pie” is itself a rhetorical move that can disguise a bad distributive outcome. Someone who talks up creative value-creation while quietly keeping the larger share of real concessions is dressing up exploitation. Genuine logrolling lets you point to a specific gain you didn’t pay for elsewhere. If you can’t name one, “we expanded the pie” probably just meant you gave more ground and got a nicer story about it.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'Both sides keep restating the same number, just moving it slightly, across many rounds.',
      meaning: 'The conversation is locked onto a single dimension. Nobody has introduced a second issue to trade against, so every round is a zero-sum inch forward or back.',
    },
    {
      signal: 'Someone frames the deal as a contest — “we need to win this” — in front of an audience.',
      meaning: 'Public, audience-aware framing locks in distributive processing. Conceding a low-cost issue now reads as losing status, even when it costs nothing real.',
    },
    {
      signal: 'A party answers “what matters most to you” with a vague, unranked list.',
      meaning: 'Either they have not actually ranked their own priorities, or they are declining to reveal the ranking. Both respond better to package proposals than to a direct question.',
    },
    {
      signal: 'One side reacts with visible relief to a specific clause buried inside a broader offer.',
      meaning: 'You just found a compatible or asymmetrically-valued issue by accident. Note exactly which clause it was — that is the trade to build the rest of the deal around.',
    },
    {
      signal: 'A counterpart’s stated “low priority” turns out to be something they have fought hard for elsewhere.',
      meaning: 'Possible reactive misrepresentation. The priority claim does not match their revealed behavior, so test it before trading a real concession against it.',
    },
    {
      signal: 'The deal genuinely has only one adjustable term on the table.',
      meaning: 'This is a real distributive negotiation. Searching for a hidden compatible issue here wastes time that should go into anchoring and a clean walk-away point instead.',
    },
  ],
  playbook: [
    {
      move: 'Count the issues before you negotiate a single one.',
      how: 'List every dimension that could move — price, timeline, volume, exclusivity, warranty, payment terms — before any number gets discussed: “Before we talk numbers, what else is actually on the table?”',
      watchOut: 'If you never return to the list once price comes up, you did the exercise for show.',
    },
    {
      move: 'Ask relative, not absolute, preference questions.',
      how: 'Instead of “do you care about payment terms,” ask “if you had to give up either payment terms or exclusivity, which hurts less?” A relative question is harder to bluff and reveals a ranking, not a yes or no.',
      watchOut: 'Ask it about more than one pair — a single forced choice can still be a strategic answer.',
    },
    {
      move: 'Offer equivalent packages instead of one number.',
      how: 'Build two or three proposals costing you the same but differing in composition — price-heavy, term-heavy, volume-heavy — and present them together: “Any of these three works; which fits you best?” Their reaction reveals a ranking without either side asking directly.',
      watchOut: 'The packages must be genuinely close in value to you, or you’re just anchoring with extra steps.',
    },
    {
      move: 'Test a stated priority before trading a real concession against it.',
      how: 'Check a claimed low priority against a second, differently-shaped proposal before trading against it: “You said timeline doesn’t matter much — would a tighter deadline with a better rate work?”',
      watchOut: 'Testing too many priorities in a row feels like an interrogation. Test the one with the largest concession riding on it first.',
    },
    {
      move: 'Take the disclosure risk in small, reversible steps.',
      how: 'Trade a small piece of information for a small piece of theirs before disclosing a full ranking: “I’ll tell you our position on delivery timing if you tell me yours.” Reciprocal, incremental disclosure caps your exposure if they’re misrepresenting.',
    },
    {
      move: 'Name the fixed-pie trap out loud when a deal stalls on one number.',
      how: '“We’re both dug in on price because it’s the only thing on the table — what else could move here?” Naming the pattern as structural, not personal, invites both sides to widen the frame without losing face.',
      watchOut: 'Works best before either side has stated a number publicly. Once committed, reopening the frame can look like retreat.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Fixed-pie perception means people are being greedy or negotiating in bad faith.',
      correction: 'It’s a default processing assumption, not a character flaw — most negotiators believe the pie is fixed because nobody gave them reason to think otherwise, and the diagnostic questions that would reveal a trade feel risky to ask.',
    },
    {
      misread: 'If both sides just communicate more openly, fixed-pie perception disappears.',
      correction: 'The negotiator’s dilemma explains why blanket openness is often the wrong advice — disclosure is exploitable by a non-reciprocating counterpart. The fix is a structured way to reveal relative rankings without exposing absolute ones, not a general appeal to trust.',
    },
    {
      misread: 'Every negotiation has a hidden win-win waiting to be found.',
      correction: 'Genuinely single-issue negotiations exist and are legitimately distributive — there’s no compatible issue when there’s only one dimension. Assuming otherwise wastes time and can look evasive to a counterpart who correctly sees the deal as simple.',
    },
    {
      misread: 'Experienced negotiators don’t fall for this — it’s a beginner’s mistake.',
      correction: 'Research finds experienced negotiators fall for it at rates not meaningfully better than novices, partly because sophistication breeds reactive devaluation — suspicion that blocks genuine logrolling along with the fake kind.',
    },
    {
      misread: 'If the other side says they don’t care about an issue, it’s safe to take it for free.',
      correction: 'A claimed low priority can be a manufactured concession, planted to be traded away later for the real target. Test it against a second, differently-shaped proposal before banking a major concession on it.',
    },
  ],
  evidence: [
    {
      source: 'Thompson & Hastie, “Social Perception in Negotiation” (1990)',
      finding: 'Studied negotiator pairs with real, discoverable information about each other’s priorities and found a substantial share failed to identify issues where they and their counterpart actually wanted the same outcome — a more basic failure than failing to logroll, since compatible issues cost nobody a concession.',
    },
    {
      source: 'Pruitt & Lewis, integrative bargaining research (1975)',
      finding: 'Formalized logrolling — trading concessions across issues the two sides rank differently — and showed it reliably produces higher joint outcomes than splitting every issue down the middle.',
    },
    {
      source: 'Raiffa, The Art and Science of Negotiation (1982)',
      finding: 'Introduced the Pareto-efficient frontier as the benchmark for a deal: an agreement is inefficient if some other agreement exists that both parties would prefer. Most real deals stop well short of that frontier because the parties never discover it.',
    },
    {
      source: 'Lax & Sebenius, The Manager as Negotiator (1986)',
      finding: 'Named the negotiator’s dilemma: creating joint value requires disclosing priorities, but disclosure is exploitable by a non-reciprocating counterpart — making guarded, fixed-pie behavior a rational response to real risk, not only a cognitive error.',
    },
    {
      source: 'Fisher & Ury, Getting to Yes (1981)',
      finding: 'Popularized the interests-versus-positions distinction and asking why a party wants what it says it wants, as a route to trades a positional back-and-forth never surfaces.',
      caveat: 'This is practitioner literature, not a controlled experiment — an influential, widely-taught framework, not an empirical finding on the order of Thompson and Hastie’s.',
    },
    {
      source: 'Ross, reactive devaluation research (early 1990s)',
      finding: 'Showed a proposal or concession is often devalued by the receiving party for no reason but that it came from an adversary — explaining why sophisticated negotiators can rationally distrust an honest disclosure of low priority.',
    },
    {
      source: 'Medvec & Galinsky, multiple equivalent simultaneous offers (MESO)',
      finding: 'Describes presenting several equal-value packages of different composition, then reading the counterpart’s reaction across them to infer a priority ranking without a single, easily-bluffed question.',
      caveat: 'Much of this evidence, including MESO’s effectiveness, comes from lab and classroom exercises rather than audited real deals. Treat it as a strong prior worth testing, not a guarantee.',
    },
    {
      source: 'Neale & Northcraft (1986); Northcraft & Neale (1987)',
      finding: 'Compared experienced negotiators and real-estate professionals against novices and found comparable rates of the same negotiation judgment errors, including anchoring.',
      caveat: '“Comparable rates” comes from a small set of studies on specific tasks; read it as “experience is not a reliable control” rather than as a precise equivalence.',
    },
  ],
  takeaways: [
    'Fixed-pie perception is a default assumption about the other side’s preferences, not a belief anyone consciously holds or a character flaw.',
    'Compatible issues — where both sides want the same thing — go undiscovered more often than tradeable ones, and cost nothing to concede once found.',
    'Withholding your priorities is often a rational defense, not stubbornness. The fix is a structured way to reveal relative rankings without exposing absolute ones.',
    'Package proposals and equivalent simultaneous offers reveal a counterpart’s ranking through their reaction, without asking a question they can easily bluff.',
    'Experience does not protect you here — sophistication often produces reactive devaluation, a rational suspicion that blocks real trades along with fake ones.',
    'Some negotiations are genuinely single-issue and genuinely zero-sum. The first job is counting how many real dimensions are actually on the table.',
  ],
};
