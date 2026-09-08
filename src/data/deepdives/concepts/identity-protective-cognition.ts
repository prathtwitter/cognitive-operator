import type { DeepDive } from '../../../types/curriculum';

/** #02 · Sphere 1 · Identity-Protective Cognition & Motivated Reasoning */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'Here is a two-by-two table from a real experiment. Patients with a skin rash either used a new cream or did not; some got better, some got worse. The four counts are arranged so the cream group holds by far the largest raw number of people who improved — and so that, once you divide and compare the ratios, the cream is clearly making the rash worse. The right answer is the opposite of the obvious one, and you have to do arithmetic to see it. People good with numbers get it right far more often. Exactly what you would expect. Now change two words. Call it a city that banned carrying concealed handguns, and the outcome crime rising or falling. Same counts, same division, same correct answer. In that version, being good with numbers stops helping you. It starts hurting you.',
  sections: [
    {
      heading: 'It does not change your conclusion. It moves your bar.',
      body: [
        'The popular version of motivated reasoning is that people believe what they want to believe. That version is useless, because it is not what happens. If wanting were sufficient you could decide right now to believe your rent is paid, and you cannot.',
        'Ziva Kunda gave the precise account in 1990. Motivated reasoning runs under what she called the illusion of objectivity: you cannot simply arrive at a preferred conclusion, you must construct a justification a dispassionate observer would find reasonable. The motivation never touches the conclusion directly. It works one layer down, on which memories get searched and how much evidence you require before you are satisfied. Thomas Gilovich compressed it into two questions. For a claim you would like to be true you ask: can I believe this? One supporting study will do. For a claim you would rather were false you ask: must I believe this? Now you want the sample size, the confound, the funding source. Both questions are legitimate. Applying them asymmetrically, without noticing, is the whole phenomenon.',
        'Dan Kahan added the part that makes this operationally dangerous. In identity-protective cognition the motivation is not preference. It is not that you want the answer to be pleasant. It is that a particular answer is what people like you believe, and believing otherwise costs you standing with the people whose respect you depend on. The stake is membership, not taste.',
      ],
    },
    {
      heading: 'Why the biased answer is the individually correct one',
      body: [
        'This looks like a defect until you do the arithmetic on the incentives, at which point it looks like optimisation.',
        'Take any contested empirical question — climate risk, a drug, a market forecast. Your personal belief about it has no measurable effect on the underlying reality or the eventual policy. You are one person. That same belief has an immediate and material effect on how you are regarded by colleagues, family and the professional community you depend on for work. One of those consequences is zero and the other is not. Kahan calls the result the tragedy of the science communication commons: a person optimising their own welfare should form beliefs that protect the relationships, because that is where the payoff sits. Everyone doing this individually produces a collectively catastrophic outcome, in the same structure as a fishery everybody rationally overfishes.',
        'The evolutionary backdrop has the same shape. Exclusion from a small band was not an inconvenience; it was a death sentence on a timescale of days. Being wrong about a distant empirical fact carried almost no cost. A mind built by that pressure treats a threat to belonging as urgent and a threat to accuracy as academic, because for most of the relevant history that was correct.',
      ],
      example: {
        label: 'Your tribe at work is not the one you would name',
        body: 'Almost nobody in a company thinks of themselves as tribal, and almost everybody is. The functional unit is not politics, it is your discipline: finance, engineering, brand, legal, sales. Each carries shared assumptions about what counts as evidence, what counts as risk, and who is credible. Reaching a conclusion your function would find naive costs you exactly what it sounds like — you become the finance person who cannot read numbers, or the engineer who has gone commercial. That is the membership at stake, and it is why this shows up more violently in cross-functional meetings than political ones.',
      },
    },
    {
      heading: 'The move: analytical effort spent on one side only',
      body: [
        'Charles Taber and Milton Lodge named the behaviour in 2006, and their term beats confirmation bias because it points at the asymmetry rather than the outcome. They called it disconfirmation bias. Congenial evidence is accepted near face value and processed fast. Uncongenial evidence triggers an extended, effortful, genuinely skilled search for reasons it does not count. The difference is not in ability. It is in how much ability gets deployed, and in which direction. This is why the phenomenon is invisible from the inside: nothing about counter-arguing feels like bias, it feels like rigour, because it is rigour. You really are finding real methodological problems. The critique is not the problem. The problem is that you only went looking on one side.',
        'The study in the hook is the cleanest demonstration available, because it isolates the effect on skill rather than on belief. In the skin-cream version numeracy behaves as it should: the more numerate you are, the more likely you get the ratio right. In the gun-control version, with identical numbers, that relationship comes apart. Highly numerate people get it right when the correct answer flatters their politics and wrong when it does not — and the gap between the two sides is widest among the most numerate participants of all.',
        'Read that last clause again. Numeracy did not merely fail to help. It actively drove the two sides further apart.',
      ],
      example: {
        label: 'The incrementality test nobody accepts',
        body: 'A brand team and a finance team look at the same holdout test on a large media spend. It says incremental return is roughly half what the last-click model reported. Finance accepts it in four minutes. The brand team spends a fortnight producing a genuinely competent critique: unmatched holdout regions, a window too short for brand effects, uncontrolled seasonality, a measurement partner with a commercial interest in the answer. Every point is real. None were ever raised about the last-click model, which has the same problems and worse. The skill is authentic; its direction was settled before the analysis began.',
      },
    },
    {
      heading: 'Skill is the accelerant, not the antidote',
      body: [
        'Most debiasing advice assumes capability and accuracy point the same way — that if you get more numerate, more scientifically literate, more analytically reflective, you converge on the truth. On identity-loaded questions that assumption is not merely weak. It has the sign wrong.',
        'In 2012 Kahan and colleagues surveyed roughly 1,500 US adults on climate risk, measuring science literacy and numeracy. The expectation is that the more scientifically literate are more concerned. Neither measure showed any association with greater concern. What they predicted was polarisation: the most scientifically literate respondents were furthest apart, spread along the lines of their cultural worldview. Kahan found a matching pattern with the Cognitive Reflection Test — higher scores produced more ideologically selective assessment of evidence, not less.',
        'The explanation is not mysterious once you accept that reasoning is a general-purpose instrument. Analytical skill carries no built-in target. Point it at what is true here and it finds truth. Point it at how do I remain a credible member of this group and it finds superb arguments for whatever the group already holds. Nothing internal to the skill decides which it is doing.',
        'The consequence for a leadership team is unpleasant. On any question that has become an identity marker, the most analytically capable person in the room who has already committed publicly is the least likely to update and the most likely to convince everyone else not to.',
      ],
    },
    {
      heading: 'What switches it on, and the one lever that switches it off',
      body: [
        'The effect is not constant. It has legible triggers, which makes it manageable rather than merely depressing. It intensifies when the question has been coded as a marker of who is on which side; when your position is on the record, in writing, in front of people; when the audience contains people whose respect you need; when accepting the evidence implies you or your team were wrong; and when the evidence arrives from a source associated with the other side.',
        'Read that list backwards and you have the design brief. Ask for commitments privately rather than publicly. Get the standard of evidence agreed before anyone knows which way the data points. Route unwelcome findings through a messenger the audience already trusts. Separate the question of what is true from the question of who was wrong, which usually means saying out loud that nobody is on the hook for the old decision.',
        'One further lever has real evidence behind it, and it is not more information. Kahan and colleagues later found that science curiosity — an appetite for surprising information, measurably distinct from science literacy — was associated with less polarisation and a willingness to look at evidence cutting against one’s own side. Treat that as promising rather than proven, but it generalises. You will not argue someone out of protecting an identity. You can offer them a different one that the correct answer flatters: the person who called it early, the operator who cut the loss before anyone else saw it.',
      ],
    },
    {
      heading: 'Where the diagnosis stops being useful',
      body: [
        'The concept has a failure mode more dangerous than the bias itself: motivated reasoning is unfalsifiable if you use it lazily. Any disagreement can be explained by it. Once you have the label you have a fully general excuse for never engaging with anyone who thinks you are wrong, and you will feel sophisticated while using it.',
        'The discipline is to test for asymmetry, not for disagreement. The question is never whether this person has a stake in the answer — everyone always does. It is whether their standard of evidence moves depending on which way the evidence points. Would they accept this study if it had come out the other way? Did they raise these objections about the analysis that agreed with them? That is checkable, and it is the only thing separating a motivated reasoner from someone who simply knows more than you do.',
        'One popular corollary is worth retiring. The backfire effect — the claim that correcting someone’s facts pushes them further into error — has largely failed to replicate, and larger studies generally find corrections move factual beliefs modestly toward accuracy. What they reliably do not move is the identity-linked position sitting on top. Correct the number, and expect the conclusion to survive it.',
        'Finally, identity protection is not always the wrong call. Loyalty is a real value, not a cognitive error, and sometimes backing your team through a bad quarter is exactly right. What you are avoiding is not loyalty. It is loyalty that has quietly disguised itself as analysis, so that nobody in the room — including you — can tell which is being offered.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'The standard of evidence moves depending on who the evidence helps.',
      meaning: 'The fingerprint. Ask whether the same study, with the same flaws, would have been accepted if it pointed the other way.',
    },
    {
      signal: 'Someone’s technical rigour switches on only when auditing the inconvenient number.',
      meaning: 'Disconfirmation bias. The critique is usually correct on its own terms; the tell is that it was never applied to the agreeable analysis.',
    },
    {
      signal: 'The rebuttal arrives faster than a person could have read the material.',
      meaning: 'The conclusion preceded the analysis. You are hearing retrieval of a stored position, not evaluation of new input.',
    },
    {
      signal: 'The conversation moves to methodology only after the result is known.',
      meaning: 'Method critique is legitimate and often right. Method critique appearing on only one side of the ledger is defence work.',
    },
    {
      signal: 'A person defends a position that costs them money but protects their professional standing.',
      meaning: 'Follow reputational exposure rather than the P&L. This tracks who will think less of them, not what it costs.',
    },
    {
      signal: 'You feel physically hot when one specific number is questioned.',
      meaning: 'This one is about you. The threat response has fired ahead of the counter-argument, and it is about to supply it.',
    },
  ],
  playbook: [
    {
      move: 'Move the identity before you move the evidence.',
      how: 'Detach the person from the history: “Forget the last two years. If you and I both joined on Monday with no involvement in any of it, what would we do with this line by Friday?”',
      watchOut: 'If you have criticised the project before, this lands as a trap. Get someone with no history in the fight to ask it.',
    },
    {
      move: 'Agree the falsifier before the data arrives.',
      how: 'Ask for the disconfirming observation in advance: “What would we need to see in Q3 for you to say this isn’t working?” A standard set while nobody knows the answer cannot be quietly relocated later.',
      watchOut: 'If they name a standard nothing could meet, that is your answer. Write it down and move on rather than arguing about the standard.',
    },
    {
      move: 'Attack the bar, not the conclusion.',
      how: 'Make the asymmetry the subject without making the person the subject: “I want to check we’re holding both of these to the same bar. If this test had come out the other way, would we have taken it as it stands?”',
      watchOut: 'Only works if you apply it to your own evidence in the same breath. Used one-directionally it is a more sophisticated accusation.',
    },
    {
      move: 'Give them a version where reversing is the leader-like act.',
      how: 'Reframe the kill decision as the same commitment that started the project: “The reason to shut this down now is the thing you built it for. Nobody else can make that call credibly.”',
      watchOut: 'Only offer this if you will back the narrative afterwards. If the reversal gets remembered as a failure, everyone watching learns never to reverse.',
    },
    {
      move: 'Never make group membership the explicit subject.',
      how: 'Do not say “you’re just defending your team.” Once belonging is named and under attack, every subsequent fact becomes an assault on the person, and their defence gets better rather than weaker.',
      watchOut: 'This holds even when it is obviously true, and even when someone else has already said it. Saying it second is not free.',
    },
    {
      move: 'Pre-commit yourself in writing, and show someone.',
      how: 'Before the data lands, write down what result would change your own view and send it to a colleague. You cannot credibly audit anyone for an asymmetric standard while quietly running one.',
    },
  ],
  commonMisreads: [
    {
      misread: 'It is stupidity, or it is dishonesty.',
      correction: 'Neither, and both diagnoses produce the wrong intervention. The person is doing genuinely high-quality reasoning aimed at a different target — protecting standing rather than establishing truth. Treating it as an intelligence or integrity problem buys defensiveness and nothing else.',
    },
    {
      misread: 'More information will resolve it.',
      correction: 'On identity-loaded questions more information mostly supplies better ammunition to both sides. Kahan’s results show numeracy and science literacy amplifying divergence. Information helps while a question is open and does almost nothing once it marks allegiance.',
    },
    {
      misread: 'It is something the other side does.',
      correction: 'The measurable signature is asymmetry in your own standard of evidence, not the content of your conclusions. Anyone belonging to a group whose respect they need is running it — including you, and including where you are right.',
    },
    {
      misread: 'This is a politics phenomenon.',
      correction: 'Politics is where it is easiest to measure, because the groups can be identified in advance. The functional unit is any group whose regard you depend on: your discipline, your function, your team. Cross-functional disputes are the richest source in working life.',
    },
    {
      misread: 'Correcting the facts backfires and makes people dig in.',
      correction: 'The backfire effect has largely failed to replicate; broader studies find corrections move factual beliefs modestly toward accuracy. What survives is the identity-linked conclusion built on top. Expect to win the number and lose the position anyway.',
    },
  ],
  evidence: [
    {
      source: 'Kunda, “The Case for Motivated Reasoning” (1990)',
      finding: 'Motivation does not manufacture conclusions directly. It biases which memories, rules and inference procedures get accessed, under a constraint Kunda called the illusion of objectivity: you must be able to build a justification a dispassionate observer would accept. That constraint is why the process is undetectable from the inside.',
    },
    {
      source: 'Kahan, Peters, Dawson & Slovic, “Motivated Numeracy and Enlightened Self-Government” (2013)',
      finding: 'About 1,100 US adults solved a covariance problem framed either as a skin-cream trial or, with identical numbers, as a gun-control result. In the neutral framing higher numeracy predicted accuracy. In the political framing it predicted polarisation: the most numerate were most accurate when the right answer suited their politics and least accurate when it did not.',
      caveat: 'A single design, a US partisan sample and a highly charged issue. The robust claim is the direction — skill amplifying divergence — rather than any effect size, and it should be carried across to workplace disputes with care.',
    },
    {
      source: 'Kahan et al., Nature Climate Change (2012)',
      finding: 'In a survey of roughly 1,500 US adults, science literacy and numeracy showed no association with greater concern about climate risk. They predicted cultural polarisation instead: the most scientifically literate respondents were furthest apart along the lines of their worldview.',
    },
    {
      source: 'Taber & Lodge, “Motivated Skepticism in the Evaluation of Political Beliefs” (2006)',
      finding: 'Named disconfirmation bias: people spend substantially more time and effort counter-arguing evidence that conflicts with their priors while accepting congenial evidence near face value. The effect was strongest among the most politically knowledgeable and those with the strongest priors.',
    },
    {
      source: 'Gilovich, How We Know What Isn’t So (1991)',
      finding: 'Formulated the asymmetric burden of proof. For welcome claims we ask whether we can believe them and one supporting study suffices; for unwelcome claims we ask whether we must, and the demands rise sharply. Deploying both without noticing the asymmetry is the mechanism.',
    },
    {
      source: 'Lord, Ross & Lepper, biased assimilation study (1979)',
      finding: 'Supporters and opponents of capital punishment read the same pair of studies — one supporting deterrence, one opposing, methodologies counterbalanced. Each side judged the study agreeing with them better conducted, and produced detailed methodological critiques only of the other one.',
      caveat: 'The biased-assimilation half has held up far better than the attitude-polarisation half. Whether mixed evidence actually makes attitudes more extreme has had mixed replication support, appearing mainly on self-report measures.',
    },
    {
      source: 'Kaplan, Gimbel & Harris, Scientific Reports (2016)',
      finding: 'Participants shown counter-evidence against strongly held political beliefs, but not against non-political ones, showed increased activity in the default mode network and in amygdala and insular cortex, regions associated with threat and self-representation.',
      caveat: 'Forty participants, all from one ideological direction, and inferring a mental state such as threat from an activation pattern is contested in imaging work. Consistent with the behavioural picture, not proof of a mechanism.',
    },
    {
      source: 'Kahan et al., science curiosity research (2017 onward)',
      finding: 'Science curiosity — an appetite for surprising information, measured separately from science literacy — was associated with less political polarisation and with willingness to examine evidence cutting against one’s own side, reversing the usual amplifying pattern.',
      caveat: 'One research programme, a relatively new measure, modest effects. Directionally useful, not established.',
    },
  ],
  takeaways: [
    'Motivated reasoning does not fabricate conclusions. It quietly relocates the standard of evidence. Watch the bar, not the belief.',
    'The stake is membership, not preference. People defend their standing in a group far harder than they defend any particular claim.',
    'Analytical skill is an accelerant. On identity-loaded questions the most capable person in the room diverges fastest and argues best.',
    'The only checkable test is asymmetry: would this same evidence, with the same flaws, have been accepted if it pointed the other way?',
    'Change the identity you are recruiting before you present the data. Offer a self that is served by getting it right.',
    'Say the tribe out loud and you lose. Once belonging is the explicit subject, every subsequent fact arrives as an attack.',
  ],
};
