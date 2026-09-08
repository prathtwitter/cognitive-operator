import type { DeepDive } from '../../../types/curriculum';

/** #16 · Sphere 2 · Informational Cascades & Social Proof */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'Two jars sit on a table. One holds two blue marbles and one red; the other holds two red and one blue. A coin toss has already decided which jar is in play, and nobody knows the outcome. One at a time, you each draw a marble, look at it in private, put it back, and say out loud which jar you think it is. The first person draws blue and says blue jar. The second draws blue and says blue jar. Now it is your turn. You draw red. And you should still say blue jar — that is not weakness, it is the correct calculation, because two blue draws outweigh your single red one. So you say blue jar. Everyone behind you now watches three people say blue jar, and every one of them will say it too, whatever they happen to draw. The line will be unanimous. It contains exactly two marbles’ worth of information, and it will still contain two marbles’ worth if it runs to a thousand people.',
  sections: [
    {
      heading: 'A cascade is not peer pressure',
      body: [
        'The most useful thing to get right is that nobody in that jar experiment was conforming. Nobody felt awkward, nobody wanted to be liked, nobody was uncomfortably outnumbered. Every person did arithmetic and got it right. Sushil Bikhchandani, David Hirshleifer and Ivo Welch published the model in 1992, and Abhijit Banerjee published a close cousin the same year, and what makes the result unsettling is that it requires no human weakness at all. Swap the participants for perfectly rational machines and the cascade still forms.',
        'Morton Deutsch and Harold Gerard drew the necessary distinction in 1955. Normative influence is going along with a group because of what the group will think of you. Informational influence is treating other people’s behaviour as evidence about the world. Asch’s line-judgement studies are normative — the participants could see the right answer and went along anyway. A cascade is the other thing entirely, and works among anonymous strangers who will never meet, have no reputation at stake, and are trying only to be right.',
        'The structural fact that generates all of it is this: you observe other people’s actions, not their reasons. A choice is a lossy compression of a private belief. When someone joins the queue you learn that their overall assessment tipped one way. You do not learn how strong their evidence was, whether they had any, or whether they were simply copying the person in front. Once information has been compressed to a single bit, nobody downstream can decompress it.',
        'Everything else follows. After the public tally outweighs any single private signal, every subsequent decision is made by ignoring private evidence. The queue keeps growing; the evidence in it does not. A hundred people doing the same thing may be a hundred independent judgements, or two judgements and ninety-eight echoes, and from the outside the two look identical.',
      ],
    },
    {
      heading: 'Why free-riding on other people’s homework is correct',
      body: [
        'Information is expensive. Real due diligence costs money, time and attention, and every hour spent verifying is an hour not spent acting. If somebody ahead of you has plausibly already paid that cost, copying them is not laziness — it is an efficient allocation of a scarce resource. This is why the behaviour is stable and hard to lecture people out of. It is a correct individual decision.',
        'The ancestral version makes the payoff vivid. If four members of your group sprint away from a treeline, the expected cost of pausing to verify whether there is a predator is enormous, and the cost of running unnecessarily is a few minutes of wasted energy. Under that asymmetry, copying without verifying does not merely work, it dominates. The machinery built for that world is the machinery now evaluating a funding round.',
        'The tragedy is a commons problem, and framing it that way makes it tractable. Independent investigation is a public good: when you analyse something yourself and act on it, you contribute a genuine signal everyone downstream can use. When you copy instead, you consume the public good without replenishing it. Each decision to economise is rational; the aggregate is a consensus containing almost no information, held with enormous confidence, by people who each assumed somebody else had done the work.',
        'This is also the source of the property that matters commercially. Because a cascade rests on so little evidence, it takes very little new evidence to overturn it. A single credible public datum can outweigh the whole visible consensus, because the consensus was never carrying much weight. That is why cascades do not decay gracefully. They reverse, abruptly, and everyone involved is surprised by the speed.',
      ],
    },
    {
      heading: 'The move that does the damage: publishing choices, suppressing reasons',
      body: [
        'The specific behaviour that manufactures cascades inside organisations is broadcasting a decision while withholding the reasoning behind it. A tally is visible; a rationale is not. So the tally is what propagates.',
        'You have heard the sentence in an investment committee. “Three other firms are already in.” It is simultaneously true and completely evidence-free. It tells you three groups arrived at a positive overall assessment. It does not tell you whether any of them looked at the underlying numbers, or whether firms two and three were themselves reasoning from the presence of firm one. The people quoting it are not being dishonest — they are relaying the only thing they can see.',
        'The same sentence is a sales instrument. “Three of the top players in your vertical migrated last quarter” converts your hesitation from a considered position into a deviation, without making a single falsifiable claim about whether migrating was a good idea. Note how efficient that is next to arguing merits. Merits can be disputed. A count cannot, because it is true.',
        'The countermeasure is narrow and specific: demand the root, not the tally. Ask who is the first person in the chain who looked at the thing directly, and what they saw. In a genuinely informed consensus this question has an answer and people are pleased to give it. In a cascade it produces a short silence and then a redirection to somebody else’s decision — and if you keep pulling that thread you usually arrive at one or two people, or at a press release.',
      ],
      example: {
        label: 'The music lab',
        body: 'Matthew Salganik, Peter Dodds and Duncan Watts built an artificial music market with roughly fourteen thousand participants and forty-eight songs by unknown bands. Crucially, they ran eight parallel independent worlds where download counts from that world were visible, plus a control where they were not. In the control, appeal without social information produced a fairly stable ranking. In the social-influence worlds, success became far more unequal and far less predictable: the same song could finish near the top in one world and near the bottom in another, driven by which early listeners happened to click first. A follow-up inverted the displayed rankings and found the false popularity substantially self-fulfilling. Quality set loose bounds; within them, the first few clicks decided the outcome.',
      },
    },
    {
      heading: 'Who is not protected',
      body: [
        'Expertise makes this worse, for a clean economic reason. David Scharfstein and Jeremy Stein modelled reputational herding in 1990: when a professional is judged relative to peers, being wrong alone is career-ending while being wrong alongside everybody else is a market event. Under that asymmetry, suppressing your private signal is rational for the individual and destructive in aggregate. Keynes had made the same observation decades earlier — that it is safer for a reputation to fail conventionally than to succeed unconventionally. The more your compensation depends on relative benchmarking, the stronger the incentive to keep a dissenting signal to yourself.',
        'Then the effect on confidence, where expertise actively hurts. Jan Lorenz and colleagues had participants estimate factual quantities and then see what others had guessed. Even mild social information made estimates converge sharply — the diversity that makes crowd aggregation work collapsed — with no improvement in accuracy. Meanwhile confidence rose. That combination is the operational danger: a room getting more certain while the underlying evidence stays exactly where it was.',
        'It is worth being blunt about what this looks like in practice, because the popular image involves retail investors and viral gadgets. The failure of Silicon Valley Bank in March 2023 was not a retail panic. It was executed by venture funds and their portfolio CFOs — among the most financially sophisticated depositors in the country — coordinating through group chats and board calls. On 9 March 2023 the bank faced roughly forty-two billion dollars of withdrawal requests in a single day. The sophistication and the connectivity made it fast; they did not prevent it.',
        'And the reason knowing about cascades does not protect you: from the inside, a cascade and a genuinely informed consensus present identically. In both cases many capable people are doing the same thing. There is no felt difference and nothing to notice. The only way to tell them apart is to interrogate the structure of the information rather than the size of the agreement, and almost nobody does that unaided.',
      ],
      example: {
        label: 'One vote, a quarter more',
        body: 'Lev Muchnik, Sinan Aral and Sean Taylor ran a randomised experiment on a live news aggregation site, quietly applying a single artificial up-vote or down-vote to comments as they were posted. A single positive vote — one, on an item later seen by thousands — raised the probability of the next viewer voting positively and left the comment with a final mean rating roughly a quarter higher than untreated controls. The negative manipulation behaved completely differently: crowds corrected artificial down-votes rather than amplifying them. That asymmetry is worth carrying. Positive social signals compound; negative ones invite scrutiny. It is one reason bubbles and pile-ons are not mirror images.',
      },
    },
    {
      heading: 'The switches',
      body: [
        'Cascades need a specific set of conditions, and every one of them is something you control in a meeting room.',
        'They form when decisions are made sequentially and publicly, the reasoning behind each is hidden, imitation is cheap, quality is genuinely uncertain, a running tally is visible, and the choice is binary. Binary choices are especially corrosive, because a yes from someone holding overwhelming evidence looks exactly like a yes from someone barely persuaded. The format itself destroys the information about signal strength.',
        'They fail to form, or break, under the mirror-image conditions. Simultaneous private commitment is the most powerful intervention available and the cheapest: if everyone writes their position before anyone speaks, there is no sequence for a cascade to run along. Publishing reasoning rather than positions restores what the compression destroyed. Continuous responses — a probability, a number, a bet — force people to reveal how strong their evidence is, which is why markets and forecasting tournaments aggregate better than a show of hands. And breaking unanimity matters enormously: Asch found a single dissenter cut conformity dramatically, and while that is the normative mechanism, the operational lever is the same.',
        'Then the reversal condition, the model’s most useful prediction. Because a cascade encodes so little information, one credible public signal can end it instantly. That predicts exactly the pattern seen in fashions, bank runs, technology fads and corporate strategy: long stable consensus, then a fast and total flip that afterwards looks obvious. If you find yourself asking how everyone changed their mind at once, the answer is usually that they never had independent minds to change.',
      ],
    },
    {
      heading: 'The honest limits',
      body: [
        'The reflexive lesson people take from this is to become a contrarian, and that is worse than what it replaces. Most of the time the crowd is following something real. Reflexive contrarianism throws away genuine information along with the fake, and pays a cost every time the consensus is correct — which is more often than not. Reliably disagreeing is not independence; it is a different function of the same input.',
        'It also matters that not all following is cascading. Network effects and standards are cases where copying is straightforwardly right regardless of intrinsic quality: the payment rail your customers already use, the file format your industry reads, the language your hiring pool writes. There the value genuinely resides in the number of adopters, so a large tally is not a proxy for evidence — it is the evidence. Confusing coordination with herding will make you argue against decisions that are correct.',
        'The right diagnostic is neither whether people are agreeing nor whether you should disagree. It is: how many independent signals are inside this agreement, and can I see any of them? A consensus of eight people who read the same two sources and sit in the same group chat has a sample size of two. A consensus of three who each looked at the underlying data separately is far stronger evidence, despite being smaller and looking less impressive on a slide.',
        'One last calibration, because the applied literature gets oversold. Social-proof interventions in the field are real and small. Large-scale randomised home energy reports comparing a household to its neighbours cut consumption by roughly two percent across hundreds of thousands of households — genuine, replicated, economically meaningful, and also two percent. Descriptive norms can backfire too: telling people what everyone else does gives permission to those already performing better to do less, unless an approval signal is added. Anyone promising lab-sized effects in a real campaign is quoting the wrong studies.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'Every stated reason for the decision points at somebody else’s decision.',
      meaning: 'Nobody in the chain is holding a primary signal. Follow the references backward and you will usually arrive at one or two actual analyses, or at a press release.',
    },
    {
      signal: 'A count is offered where a mechanism was requested — “four firms are in”, “everyone has moved to this.”',
      meaning: 'A tally is not an argument. It is the only observable fact available to somebody who has not looked at the underlying thing themselves.',
    },
    {
      signal: 'The room’s confidence rose over the meeting while no new evidence entered it.',
      meaning: 'Social information raises certainty without raising accuracy. Rising conviction against static data is the cleanest available tell.',
    },
    {
      signal: 'The people agreeing all read the same three sources or sit in the same channel.',
      meaning: 'Correlated inputs presenting as independent confirmation. The effective sample size is the number of distinct sources, not the number of nodding heads.',
    },
    {
      signal: 'Nobody can tell you what the first mover actually knew.',
      meaning: 'The foundation of the whole structure is unexamined. If it turns out to be thin, everything built on it goes at once rather than gradually.',
    },
    {
      signal: 'Unanimity arrived quickly on something genuinely uncertain.',
      meaning: 'Real uncertainty produces disagreement about assumptions before agreement about conclusions. Fast unanimity means the question was not independently answered many times.',
    },
  ],
  playbook: [
    {
      move: 'Collect positions privately and simultaneously, before anyone speaks.',
      how: '“Everyone write down your call and your single strongest reason right now, before we discuss anything. We read them out together.” No sequence means no cascade — the highest-yield thirty seconds in the meeting.',
      watchOut: 'If any senior person has already said what they think, you are measuring the cascade rather than preventing it. It happens first or it is worthless.',
    },
    {
      move: 'Ask for the root, not the tally.',
      how: '“Who is the first person who looked at this directly, and what did they see? I want the primary source, not the count of people who agree.” In an informed consensus this is a pleasant question. In a cascade it produces silence.',
    },
    {
      move: 'Force people to reveal signal strength, not just direction.',
      how: '“Do not tell me yes or no. Give me a probability, and tell me what would move it by ten points.” Binary formats destroy exactly the information you need; numbers restore it.',
      watchOut: 'Numbers can be theatre too. The follow-up — what evidence would change this — separates a considered estimate from a decorated guess.',
    },
    {
      move: 'Assign the dissent so that it costs nobody anything.',
      how: '“Priya, your job today is to argue we should not do this. Nothing you say counts against you afterwards.” Breaking unanimity is cheap and disproportionately effective; one visible dissenter changes what everyone else feels able to say.',
      watchOut: 'Rotate the role and mean it. If the assigned dissenter is always the same person they become the office sceptic and get discounted, which restores the unanimity you were breaking.',
    },
    {
      move: 'Circulate reasoning rather than recommendations.',
      how: 'Make the artefact a written argument with the evidence attached, read in silence before discussion. “Send the reasoning, not the conclusion.” This defeats the compression that creates cascades, and is why memo cultures decide better than deck cultures.',
      watchOut: 'A memo that opens with the recommendation and reverse-engineers support is a deck with more words. The evidence has to be able to lose.',
    },
    {
      move: 'When you deploy social proof deliberately, make it specific, similar and recent.',
      how: '“Three companies in your segment moved last quarter — here is who, and what actually changed for them.” Naming the parties and the outcome converts a bare tally into something verifiable, which is both more persuasive and more defensible.',
      watchOut: 'Descriptive norms backfire on people already performing above the norm — telling a strong team what average teams do reads as permission to do less. Pair it with an explicit statement of what good looks like.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Herding is a form of stupidity or weakness of character.',
      correction: 'In the standard model every participant is Bayesian and every individual decision is correct. The failure is entirely at the aggregate level. That matters practically: diagnose it as a people problem and you will try to fix it by hiring better people, which does nothing, instead of changing the information structure, which works.',
    },
    {
      misread: 'A cascade is the same thing as conformity or peer pressure.',
      correction: 'Different mechanisms, different cures. Asch’s participants could see the right answer and went along for social reasons — normative influence. A cascade needs no social pressure and runs among anonymous strangers trying only to be accurate. Fixing the social dynamics of a room does not stop a cascade; fixing the sequence and the format does.',
    },
    {
      misread: 'A large crowd doing the same thing represents a large amount of evidence.',
      correction: 'Cascades stop aggregating information at the moment they begin. A queue of a thousand can encode the private signals of the first two people. Size of consensus and quantity of evidence are independent quantities, and confusing them is the central error the model exists to correct.',
    },
    {
      misread: 'The remedy is to be a contrarian.',
      correction: 'Reflexive disagreement discards the crowd’s real information along with the fake, and loses every time the consensus is right — which is most of the time. The question is never whether to follow, but how many independent signals are inside the agreement and whether any are visible to you.',
    },
    {
      misread: 'Social proof is a powerful marketing lever, so more of it is better.',
      correction: 'Field effects are real but small — well-run large-scale norm interventions deliver low single-digit percentage changes, not the swings quoted from lab studies. Descriptive norms also boomerang on above-average performers unless paired with a signal of what is approved. Budget for two percent, not twenty.',
    },
  ],
  evidence: [
    {
      source: 'Bikhchandani, Hirshleifer & Welch, Journal of Political Economy (1992); Banerjee, QJE (1992)',
      finding: 'The formal model. Agents deciding in sequence who observe predecessors’ actions but not their private signals will rationally abandon their own information once the public tally is lopsided. Cascades can begin after very few decisions, are frequently wrong, and are fragile because they aggregate almost no information.',
    },
    {
      source: 'Anderson & Holt, American Economic Review (1997)',
      finding: 'Brought the model into the laboratory with the two-urn design. Cascades formed as predicted, and subjects mostly followed the Bayesian prescription, abandoning their own draws once the public history outweighed them.',
      caveat: 'A stylised task with small stakes, and a minority of subjects consistently overweighted their private signal. Real markets also have prices, which aggregate private information better than a sequence of binary announcements.',
    },
    {
      source: 'Salganik, Dodds & Watts, Science (2006); Salganik & Watts (2008)',
      finding: 'An artificial music market with roughly fourteen thousand participants and forty-eight unknown songs, run as eight parallel social-influence worlds plus an independent control. Showing download counts made success both far more unequal and far less predictable; the follow-up showed inverted, false rankings became substantially self-fulfilling.',
      caveat: 'An online experiment with low-stakes choices among unknown artists. It demonstrates the mechanism cleanly but does not establish how much of any particular real-world outcome is cascade rather than quality.',
    },
    {
      source: 'Muchnik, Aral & Taylor, Science (2013)',
      finding: 'A randomised field experiment on a live news site. A single artificial positive vote on a new comment raised its final mean rating by roughly a quarter relative to controls, while artificial negative votes were corrected rather than amplified by subsequent viewers.',
    },
    {
      source: 'Lorenz, Rauhut, Schweitzer & Helbing, PNAS (2011)',
      finding: 'Even mild social information caused participants’ numerical estimates to converge sharply, eliminating the diversity that makes crowd aggregation accurate, with no improvement in accuracy and a measurable increase in confidence.',
    },
    {
      source: 'Scharfstein & Stein, American Economic Review (1990)',
      finding: 'Models reputational herding: where performance is judged relative to peers, professionals rationally suppress private signals and follow the crowd, because being wrong alone carries far greater career cost than being wrong alongside everybody else.',
    },
    {
      source: 'Asch conformity studies (1951–1956); Bond & Smith meta-analysis (1996)',
      finding: 'In an unambiguous line-judgement task a majority of participants conformed to an obviously wrong group answer at least once, and a single dissenting ally reduced conformity dramatically.',
      caveat: 'Routinely overstated. Across all critical trials most responses were still independent, the mechanism is normative rather than informational, and the meta-analytic record shows the effect varies by culture and has declined in the United States over time. It is not evidence for informational cascades — it is the adjacent phenomenon people confuse with them.',
    },
    {
      source: 'Allcott, Journal of Public Economics (2011); Schultz et al. (2007)',
      finding: 'Large-scale randomised home energy reports showing a household how its usage compared with neighbours reduced consumption by roughly two percent across hundreds of thousands of households. Schultz and colleagues found the same descriptive comparison increased usage among households already below average unless paired with an approval signal.',
      caveat: 'Included as a magnitude check. This is among the best-evidenced applied social-proof results available, and it is a low single-digit percentage. Field effects in this literature are frequently quoted at lab-study magnitudes they do not support.',
    },
  ],
  takeaways: [
    'Cascades are made of individually correct decisions. That is what makes them stable, fast, and impossible to fix by hiring smarter people.',
    'You see actions, not reasons. A choice is a one-bit compression of a private belief, and nobody downstream can decompress it.',
    'A queue of a thousand can encode two people’s opinions. Size of consensus tells you nothing about quantity of evidence.',
    'Because they carry so little information, cascades do not decay — they flip. One credible public signal outweighs the whole visible crowd.',
    'Private simultaneous commitment before anyone speaks is the cheapest effective intervention. Sequence is the vulnerability.',
    'Ask how many independent signals are inside the agreement, and whether you can see any. That separates informed consensus from an echo.',
  ],
};
