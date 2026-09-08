import type { DeepDive } from '../../../types/curriculum';

/** #04 · Sphere 1 · The Press Secretary Model & Confabulation */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'You are shown two photographs of strangers and asked which face you find more attractive. You point at one. The cards are turned face down, one is slid back across the table, and you are asked why you picked that one. You explain easily — she looks approachable, something warm about the eyes, I have never liked that severe kind of face. What you do not know is that the experimenter has palmed the cards. You are holding the face you rejected, explaining a preference you never expressed. Most people do not notice the switch. They produce reasons for the choice they did not make, fluently and in complete sentences, and they mean every word.',
  sections: [
    {
      heading: 'Two claims are made at once, and only one is established',
      body: [
        'The press secretary metaphor carries two very different propositions, and separating them is the difference between a working model and dinner-party fatalism.',
        'The strong claim is that conscious deliberation does not cause your behaviour at all — that you are a passenger, informed after the fact. That is not established. The result usually recruited for it, Libet’s finding that a readiness potential precedes the reported moment of conscious intention, has been seriously challenged on both method and interpretation, and concerns the timing of arbitrary finger movements rather than anything resembling a decision.',
        'The weaker claim is that your report of why you did something is a construction produced after the fact, by machinery with no privileged access to the actual causes, generated to be plausible and defensible rather than accurate. That is very well supported in healthy adults, and it is the one worth building on.',
        'The metaphor is exact for the weaker claim and misleading for the stronger one. A press secretary is not a hostage. The administration is real and it does make decisions. The secretary simply was not in the room where they were made, has to produce an account anyway, and — this is the operative part — never says “I have no idea.”',
      ],
    },
    {
      heading: 'Reasons are for other people, which is why they are so good',
      body: [
        'Hugo Mercier and Dan Sperber give the most useful account of why the machinery is built this way. Their argumentative theory holds that reasoning did not evolve as a solitary instrument for finding truth. It evolved as a social one, for producing and evaluating arguments — justifying yourself to others, and judging whether their justifications should be accepted.',
        'That reframes everything. In a species that survives by cooperation and tracks reputation, giving an account others accept is a survival function. Being accurate about your own internal causes buys nothing, because nobody can check and the information has no use. Producing a defensible account on demand buys everything. The system was optimised for output quality, not for correspondence with the cause.',
        'The theory makes a sharp prediction that holds: people should be lazy producers of their own arguments and demanding evaluators of everyone else’s. Trouche, Johansson, Hall and Mercier tested it with the card-switching trick from the hook. Participants wrote an argument, then were shown it back as though someone else had written it. A majority rejected it — same person, same argument, minutes apart.',
        'Read as a defect, that is embarrassing. Read as design, it is exactly right. Your evaluation module is sharp and your production module is lazy, because in the environment that built them, other people did the evaluating.',
      ],
    },
    {
      heading: 'The move: fluent output with no uncertainty signal attached',
      body: [
        'Confabulation is not lying, and this is not a technicality — it determines what you can do about it. Lying requires knowing the truth and saying something else. Someone producing a confabulated reason has no access to the actual cause and no indication that access is missing. Producing a manufactured reason feels identical to reporting a real one. That is why the person is unshakeable, and why calling them out never works.',
        'The choice blindness paradigm has been run across a striking range of domains. Johansson and colleagues published the face version in Science in 2005. Hall and colleagues took it into a supermarket, where shoppers tasted two jams or smelled two teas and were handed back the jar they had rejected. Most manipulations went undetected and people argued for the option they had turned down. Hall, Johansson and Strandberg then did it with moral and political attitudes: participants had their own survey answers covertly reversed and argued for the opposite of what they had recorded.',
        'The oldest and sharpest demonstration is Nisbett and Wilson’s from 1977. They laid out four pairs of identical nylon stockings in a shop and asked passers-by to pick the best. There was a strong position effect — the rightmost was chosen far more often. Not one person mentioned position. They cited the knit, the sheerness, the weave, and denied position mattered when asked directly.',
        'Practically, this means stated reasons are an instrument returning confident, well-formed text whether or not it has any input. Every process running on them — interview debriefs, deal post-mortems, performance reviews, stated-preference research — inherits that, and no amount of care in running the process changes it.',
      ],
      example: {
        label: 'The rubric did not make the decision. It supplied the vocabulary.',
        body: 'An interviewer writes “insufficient strategic vision under ambiguity” and scores the candidate a two. The rating was settled in the first ninety seconds, on cues nobody has access to: cadence, familiarity, a resemblance to someone they once worked badly with. The rubric did not cause the score and did not prevent it. What it did was supply a professional, defensible, entirely sincere vocabulary in which the score could be written down and defended in a hiring meeting. It converted an inaccessible cause into an auditable-looking artefact — worse than no form at all, because the artefact now looks like evidence.',
      },
    },
    {
      heading: 'Articulacy makes it worse, and seniority worse again',
      body: [
        'Fluency is the raw material of confabulation. The better you are at constructing arguments, the better the account your press secretary produces and the more persuasive it is — not only to the room but to you. You are its first audience, and you have no independent record to check it against.',
        'Expertise compounds this specifically. A junior person uneasy about a candidate says “I don’t know, something felt off,” which is an honest report of their epistemic state. A partner of twenty years says “the commercial judgement isn’t there under ambiguity,” which sounds like an assessment and is the same gut feeling wearing a suit. Expertise supplies a bottomless inventory of plausible causes, and the more of them available, the less likely anyone ever arrives at “I don’t know.”',
        'Jonathan Haidt’s work shows what happens when you dismantle the reasons and leave the verdict standing. In the moral dumbfounding studies, participants judged scenarios engineered to remove every consequentialist objection — nobody harmed, no risk, no chance of discovery — then offered reasons and watched each one removed by the interviewer. The judgement did not move. People end up near “I can’t explain it, I just know it’s wrong,” which is the most honest line in the transcript and the last one anyone wanted to say.',
        'That is the load-bearing insight for anyone running a decision process. If solving every stated objection would not change the decision, the objections were never the decision. They were the account. And the person offering them is not being evasive — they are reporting, in good faith, a press release they had no part in drafting.',
      ],
    },
    {
      heading: 'What makes it worse, and what actually reduces it',
      body: [
        'Confabulation spikes under identifiable conditions. It spikes when a reason is demanded and “I don’t know” is not socially available, which in most workplaces is always. It spikes in front of an audience, because the account is a social product. It spikes when the real cause is inaccessible, which is most of the time, or accessible but unsayable, which is the rest. And it spikes when there is a form to fill in, because a form is a request for text and text is what the machinery makes.',
        'The interventions that work attack timing rather than content. Commit the criteria and their weights to writing before the option, candidate or deal is seen. This does not stop the intuition — nothing stops the intuition — but it creates a record from before the decision, against which an inconsistent score is visibly inconsistent. Then ask about the future rather than the past. Why did you decide that has a stored answer ready. What would have to change for this to be a yes does not, because there is no press release on file for a counterfactual.',
        'The highest-leverage move is cultural and costs nothing. Make “my gut says no and I can’t articulate why” an acceptable sentence. In most organisations it is career-limiting, so every intuition gets laundered into a fabricated technical objection before it reaches the table, and the team then spends two weeks solving the fabrication. A leader who accepts the unarticulated version — including from people they outrank — gets the real signal weeks earlier.',
      ],
      example: {
        label: 'Ask what would move it, not why it is',
        body: 'A partner blocks a deal citing three concerns: integration risk, a key-person dependency, and customer concentration. The team spends a fortnight resolving all three and the answer is still no, with three new objections in place of the old ones. This looks like bad faith and almost never is. The question that would have saved the fortnight takes eight seconds: if all three were fully solved by Friday, does this become a yes, or does your gut still say no? Asked before the work rather than after it, that routes around the press secretary entirely, because there is no prepared statement for a hypothetical.',
      },
    },
    {
      heading: 'The honest limits, starting with the split-brain story',
      body: [
        'The split-brain research is the most quoted evidence for this concept and it is routinely oversold. The core observation is genuine. In patients whose corpus callosum had been severed to control intractable epilepsy, Gazzaniga and colleagues could present different images to each hemisphere. In the best-known case a chicken claw went to the verbal left hemisphere and a snow scene to the mute right. The right hand chose a chicken, the left hand a snow shovel. Asked to explain the shovel, the speaking left hemisphere — which had never seen the snow scene — immediately produced a coherent explanation linking it to the chicken. It did not say it did not know.',
        'The limits are substantial. Fully studied commissurotomy patients in the entire literature number dozens at the outside, with the most-cited findings drawn from a handful of individuals — all people with severe, long-standing epilepsy, often atypical brain organisation, tested under highly artificial conditions. The confabulation is robust within that group. That a general-purpose left-hemisphere interpreter runs the same way in intact brains is an extrapolation from that base, a position Gazzaniga argues forcefully rather than a demonstrated result.',
        'It is disputed from inside the field too. Pinto and colleagues reported in 2017 that two split-brain patients could respond to stimuli across the entire visual field, sitting awkwardly with the standard two-independent-agents reading. That work rests on two patients and has been contested in turn. The summary is not that the interpreter idea is refuted — it is that this literature is small, atypical and unsettled, and should not be the beam the model rests on. It does not have to be. Everything operationally important here comes from healthy adults: choice blindness across faces, food and political attitudes, Nisbett and Wilson, moral dumbfounding, selective laziness.',
        'One final limit matters more than the rest. Sometimes stated reasons genuinely are the real reasons. When someone did the analysis in writing, in advance, and decided from it, the reasons are a record rather than a story. The rule is not that reasons are worthless. It is that a reason produced after a decision is a hypothesis about it, and a reason written before it is evidence — so build the process so the second kind exists.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'The reasons arrive instantly, in complete and well-formed sentences.',
      meaning: 'Retrieval of a stored justification, not fresh analysis. Genuine reasoning arrives with hesitation, self-correction and hedging.',
    },
    {
      signal: 'You solve every stated objection and the decision does not move.',
      meaning: 'The objections were never load-bearing. An unstated cause is doing the work, and it will keep generating replacements indefinitely.',
    },
    {
      signal: 'The vocabulary belongs to the scoring rubric rather than to the person.',
      meaning: 'The form supplied the words after the judgement. The rubric is documenting a decision rather than producing one, and it makes it look audited.',
    },
    {
      signal: 'Someone says “I can’t explain it, but no.”',
      meaning: 'Rare, honest and valuable. Treat it as high-quality data — it is the one report that has not been through the press office.',
    },
    {
      signal: 'The stated reason changes each time you knock one down; the conclusion never does.',
      meaning: 'Serial justification. Each reason is generated on demand to replace the last. The verdict was fixed before the first one appeared.',
    },
    {
      signal: 'A person becomes more committed right after being asked to justify their position publicly.',
      meaning: 'Producing a public account binds them to it. You just made the position much harder to move, by asking a reasonable question.',
    },
  ],
  playbook: [
    {
      move: 'Ask what would change the answer, not why the answer is what it is.',
      how: 'Put it as a counterfactual: “If I solved all three of those by Friday, does this become a yes?” There is no prepared statement for a hypothetical, so they have to consult the underlying state.',
      watchOut: 'If they say yes, you solve it, and it is still no, do not present that as a caught contradiction. You learned what you needed; humiliating them costs you every honest answer afterwards.',
    },
    {
      move: 'Make “I don’t know why” sayable in the room.',
      how: 'Say it explicitly and early: “You’re allowed to say your gut says no and you can’t articulate it. I’d rather have that than a good-sounding reason we spend two weeks solving.”',
      watchOut: 'You have to accept it when used, including by people you outrank and on decisions you want. Punish it once and the laundering resumes permanently.',
    },
    {
      move: 'Commit the criteria in writing before the option is visible.',
      how: 'Agree the scoring dimensions and weights before the candidate walks in or the deal lands. It will not stop the intuition, but it produces a record from before the judgement that an inconsistent score can be measured against.',
      watchOut: 'A rubric written after the shortlist exists is worse than none, because it gets built — sincerely and unconsciously — to fit the person already preferred.',
    },
    {
      move: 'Separate the verdict from the justification in time.',
      how: 'Collect the judgement alone first — one word, written, no discussion — and ask for reasons in a later pass. Verdict and reason in the same breath guarantees the reason is manufactured to fit as it is spoken.',
    },
    {
      move: 'Ask customers what they did, never why they bought.',
      how: 'Replace “why do you choose this brand” with “walk me through the last time you bought one — where were you, what else was on the shelf, what did you pick up first.” Behaviour is recoverable; the causes of preference are not.',
      watchOut: 'Stated-preference research measures the account people give, not the driver of the purchase. Never let it outrank observed behaviour or a live test.',
    },
    {
      move: 'Treat your own reasons as drafts.',
      how: 'Before presenting a recommendation, write down what you believed before you did the work. If the recommendation matches that prior exactly, you may be presenting a press release with a methodology section attached.',
    },
  ],
  commonMisreads: [
    {
      misread: 'It means you have no free will and no real control over anything.',
      correction: 'The supported claim is narrower: your report of why you did something is a construction rather than a readout. Whether conscious deliberation causes behaviour is a separate question, and the evidence usually cited for the strong version — Libet’s readiness potential work — is contested on method and interpretation.',
    },
    {
      misread: 'People are lying about their reasons.',
      correction: 'Confabulation is not deception, and treating it as such guarantees a fight. Lying requires access to the truth. The person has no access to the cause and no signal that access is missing, so a fabricated reason feels exactly like a real one.',
    },
    {
      misread: 'Split-brain research proved this is how everyone works.',
      correction: 'It demonstrated confabulation in a very small number of patients with severe epilepsy and surgically severed hemispheres, tested under artificial conditions. Extending an interpreter module to intact brains is a theoretical extrapolation, disputed within the field, not something the surgery established.',
    },
    {
      misread: 'So reasoning is useless and we should just trust intuition.',
      correction: 'Reasoning is poor at auditing your own causes and good at evaluating other people’s arguments — exactly what the argumentative theory predicts. Relocate reasoning rather than abandon it: put it in a group, aim it at someone else’s claim, and use it before the decision.',
    },
    {
      misread: 'A better scoring rubric will fix it.',
      correction: 'A rubric changes the language the justification is written in, not the timing of the judgement, and it makes a post-hoc score look audited. It becomes useful only when criteria and weights are committed to before the option is seen — the part organisations reliably skip.',
    },
  ],
  evidence: [
    {
      source: 'Nisbett & Wilson, “Telling More Than We Can Know” (1977)',
      finding: 'Shoppers choosing among four identical pairs of stockings strongly favoured the rightmost item. Nobody cited position; they cited knit and sheerness, and denied position mattered when asked. The review argued people have little introspective access to the processes producing their judgements and instead report plausible theories about them.',
      caveat: 'The individual demonstrations used small samples by modern standards, and the paper is a review as much as a study. The general thesis has held up better than any single experiment inside it.',
    },
    {
      source: 'Choice blindness: Johansson, Hall, Sikström & Olsson (Science, 2005) and later extensions',
      finding: 'Participants chose the more attractive of two faces and were covertly handed the rejected one to explain. Most manipulations went undetected and people gave confident reasons for a choice they had not made. Later work replicated it with supermarket jam and tea, and with moral and political attitudes, where participants argued for reversed versions of their own survey answers.',
    },
    {
      source: 'Haidt, “The Emotional Dog and Its Rational Tail” (2001)',
      finding: 'Set out the social intuitionist model: moral judgement is generally produced by rapid intuition, with reasoning arriving afterwards to construct a justification for it.',
      caveat: 'Haidt does not claim reasoning never matters. His model gives reasoning real causal power when it comes from other people, and allows private reflection to change a judgement. The popular reading that reasoning is irrelevant is a distortion.',
    },
    {
      source: 'Moral dumbfounding (Haidt, Björklund & Murphy)',
      finding: 'Given harmless-taboo scenarios engineered to remove every consequentialist objection, participants held the moral judgement while every reason they offered was systematically removed, eventually reporting they could not explain it but were certain anyway.',
      caveat: 'This circulated for years as an unpublished manuscript. Later direct replications, including work by McHugh and colleagues, find the phenomenon is real but that measured rates depend heavily on scenario design and response coding.',
    },
    {
      source: 'Trouche, Johansson, Hall & Mercier, selective laziness (2016)',
      finding: 'Participants were shown their own written argument back, presented as someone else’s, and asked to evaluate it. A majority rejected the argument they had produced minutes earlier, indicating that argument production and evaluation run to different standards.',
    },
    {
      source: 'Gazzaniga and colleagues, split-brain interpreter (from the 1970s)',
      finding: 'In patients with a surgically severed corpus callosum, the speaking left hemisphere immediately produced coherent explanations for actions driven by information available only to the right hemisphere, without ever reporting ignorance. The chicken-claw and snow-shovel case is the canonical example.',
      caveat: 'The well-studied patient population is very small — dozens at most, with the best-known results from a handful of individuals — all with severe long-standing epilepsy, often atypical brain organisation, tested under artificial conditions. Extending a general interpreter module to intact brains is a theoretical inference, not a demonstrated finding.',
    },
    {
      source: 'Pinto et al., Brain (2017)',
      finding: 'Reported that two split-brain patients could respond to and report stimuli presented across the whole visual field, challenging the standard reading of split-brain patients as housing two independently conscious agents.',
      caveat: 'Two patients, and directly contested by Gazzaniga and colleagues in reply. Cited to show the split-brain literature is small and actively unsettled, not to claim the interpreter account has been overturned.',
    },
    {
      source: 'Libet, readiness potential experiments (1983)',
      finding: 'A measurable brain signal preceded participants’ reported moment of conscious intention to move, widely popularised as evidence that decisions are made before awareness of them.',
      caveat: 'Unsettled. Schurger and colleagues argue the readiness potential reflects averaged spontaneous neural fluctuations rather than an unconscious decision signal, and the paradigm concerns arbitrary finger movements rather than deliberate choice. Nothing in the practical model depends on it.',
    },
  ],
  takeaways: [
    'Confabulation is not lying. The person has no access to the real cause and no signal that access is missing, which is why they cannot be argued out of it.',
    'The instrument that produces “here is why I decided” returns confident, well-formed text regardless of whether it has any input at all.',
    'Articulacy and seniority make it worse. Expertise supplies an unlimited vocabulary of plausible causes for a judgement made in ninety seconds.',
    'If solving every stated objection would not change the decision, the objections were never the decision. They were the account.',
    'Ask what would change the answer rather than why the answer is what it is. There is no prepared statement on file for a counterfactual.',
    'The split-brain interpreter is a striking result in a tiny, atypical patient group. The load-bearing evidence is choice blindness in ordinary healthy adults.',
  ],
};
