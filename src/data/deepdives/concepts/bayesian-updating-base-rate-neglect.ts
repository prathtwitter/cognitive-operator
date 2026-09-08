import type { DeepDive } from '../../../types/curriculum';

/** #06 · Sphere 1 · Bayesian Updating Failures & Base-Rate Neglect */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'A disease affects one person in a thousand. The test for it never misses a real case, and it produces a false positive 5 percent of the time. Your result comes back positive. What is the chance you have the disease? Something in you has already answered, and the answer was close to 95 percent. Now do it with people instead of percentages. Take a thousand of you. One has the disease and tests positive. Of the remaining 999, about fifty test positive anyway. That is fifty-one positive results, of which exactly one is real. Your chance is roughly 2 percent. The distance between 95 and 2 is not an arithmetic slip. It is the sound of a number that was in the question never entering the calculation.',
  sections: [
    {
      heading: 'The input that is never represented',
      body: [
        'The convenient story is that people are bad at probability. That is true and mostly irrelevant, because the failure happens before any computation, at the stage where you decide which quantities are in play. The base rate is not discounted or weighted too lightly. It is not represented as an input.',
        'Kahneman and Tversky showed this with the study everyone half-remembers. Participants were told a description had been drawn from a pool of a hundred professionals — in one condition 70 engineers and 30 lawyers, in the other 30 engineers and 70 lawyers — and asked how likely the person was an engineer. Both groups gave essentially the same answers. The condition that makes this diagnostic is the third: given a description containing nothing that distinguished an engineer from a lawyer, people went to roughly fifty-fifty. Not to the base rate. To even odds. They abandoned a stated, correct number in favour of a description carrying zero information.',
        'That is the shape of the mechanism. You are not weighing a prior against evidence. You are running a similarity match — how well does this case resemble the type? — and similarity has no slot for a prior. A description either resembles an engineer or it does not, and how many engineers exist in the world does not change the resemblance by one degree.',
      ],
    },
    {
      heading: 'Why finding a prior is genuinely hard',
      body: [
        'Resist treating this as carelessness, because the environment the machinery was built for did not contain the problem. In a group of a hundred people the base rate is just memory. There is one reference class — people like us, here, now — and you have lived inside it. Nobody had to construct it and nobody could have chosen a different one.',
        'Now ask for the base rate on a decision you actually face. What proportion of software companies of roughly our size, entering roughly this adjacent category, hit roughly this revenue target inside two years? There is no obvious class. Include different funding structures? Different geographies? The last five years or the last fifteen? Each choice moves the answer, and defending any of them is analytical work somebody has to be paid to do.',
        'Meanwhile the individuating information — the case in front of you — is free, immediate and usually genuinely diagnostic. In most of life, attending to the particulars beats consulting statistics about situations in general. The default breaks in one configuration: when the individuating information is vivid but weakly diagnostic and the base rate is extreme. That is not rare. It is the exact shape of a customer anecdote, a competitor\'s press release, a job interview and a founder\'s pitch.',
      ],
    },
    {
      heading: 'Strength swallows weight',
      body: [
        'Griffin and Tversky gave the mechanism its most useful name. Evidence has two properties. Strength is how extreme, vivid or one-sided it is. Weight is how much it should actually move you — reliability, sample size, genuine diagnosticity. People key on strength and systematically underweight weight.',
        'Put two data points on a table. First, a forty-five-minute call with a furious enterprise customer walking you through why your navigation is unusable. Second, a survey of twelve thousand users in which navigation scores unremarkably. The call has enormous strength and almost no weight: one observation, self-selected, from the tail. The survey has modest strength and enormous weight. The room will act on the call, and everyone in it will experience that as being close to the customer rather than as a statistical error.',
        'This is why an anecdote is more dangerous than it looks. It does not argue against the base rate, which would at least put the base rate into the conversation. It replaces the question. You stop asking how common this is and start asking how well the story fits a type you recognise, and the second question feels like it answered the first.',
      ],
      example: {
        label: 'The rebuild that never should have happened',
        body: 'A CEO reads one long, articulate, angry thread about a navigation redesign. Three engineering sprints get redirected. Run the arithmetic nobody ran: fifty thousand active users, one complaint of that severity that quarter, and a support log showing navigation issues in a fraction of a percent of tickets. Even granting that loud complainers stand for a silent multiple — say a hundred to one — you are rebuilding for a low single-digit share of users, against a queue whose top three drivers are something else. The base rate had to be constructed; the anecdote arrived fully formed.',
      },
    },
    {
      heading: 'Expertise does not protect you',
      body: [
        'Casscells and colleagues put the disease question from the opening to students and staff at Harvard Medical School. Only a small minority produced the right answer, and the most common response was around 95 percent — the answer that ignores prevalence entirely. David Eddy reported the same pattern asking physicians a mammography question: most gave a figure near 75 percent when the correct answer was under 10 percent.',
        'These are people who know more about disease prevalence than anyone reading this, which is the point. The failure is not in domain knowledge but in problem representation — whether the prior gets built into the question you think you are answering. Expertise adds a vulnerability on top: experts hold more cases in memory, in richer detail, and a richly available case is exactly the ammunition representativeness needs.',
        'The costliest version is predictive rather than diagnostic. Ask an experienced team how long a project will take and they build the plan from the inside — this task, then this one, our people, our tools. The plan will be coherent, detailed, and wrong in a direction history could have told them, because the base rate for that class of project sits outside the story they just built.',
      ],
      example: {
        label: 'Kahneman\'s curriculum team',
        body: 'Kahneman ran a team writing a textbook. About a year in he asked everyone to privately estimate how long the rest would take; answers clustered around eighteen months to two and a half years. Then he asked the member with genuine expertise in curriculum development what had happened to comparable teams. The answer, once he was made to look: roughly 40 percent had never finished at all, and none that did had taken under seven years. He had held that knowledge the whole time and never applied it to his own forecast until asked a question that made the reference class the subject. The book took eight years.',
      },
    },
    {
      heading: 'The switches',
      body: [
        'Format is the largest lever and it is free. Gigerenzer and Hoffrage showed that recasting Bayesian problems as natural frequencies — ten out of a thousand rather than 1 percent — roughly tripled the proportion of people reasoning correctly, from around one in six to around one in two, with no training. Frequencies keep the base rate inside the structure of the sentence, where it cannot be dropped unnoticed.',
        'Causal framing is the second switch and it explains an otherwise baffling pattern. In the classic taxicab problem people ignore that 85 percent of the city\'s cabs are Green. Change the sentence so that 85 percent of cab accidents involve Green cabs and they start using it. Same number, same inferential role. The difference is that the second version arrives with a causal story attached, and the mind can represent a cause where it cannot easily represent a bare proportion.',
        'Sequence matters too: once a specific case is in your head the prior struggles to get in behind it, which is why naming the reference class before hearing the details is a different operation from recalling it afterwards. And how the odds were learned flips the direction of the error — learned from a stated description, rare events tend to be overweighted; learned by sampling outcomes, they tend to be underweighted, because in any short run the rare thing usually has not happened yet.',
      ],
    },
    {
      heading: 'The honest limits',
      body: [
        'Base-rate neglect is real but the textbook version overstates it. Jonathan Koehler\'s reconsideration argued the effect is much weaker when base rates are unambiguous, directly experienced and obviously relevant — conditions that hold across much of professional life and almost never in a classroom vignette about a shy librarian. The defensible claim is not that people ignore base rates, but that they ignore abstract, constructed base rates when a vivid case is available.',
        'The opposite error exists and is less discussed. Under conservatism, people holding a prior update too little in the face of genuinely diagnostic new evidence. You can be wrong in either direction, and the outside view is entirely capable of dismissing a real signal because it does not match history. A base rate is a starting point; the whole content of Bayes is what you do to it next.',
        'The reference class problem is not a bias but a genuine methodological difficulty. Which class? Reference-class forecasting works spectacularly for infrastructure megaprojects, where Flyvbjerg documented cost overruns in roughly nine cases out of ten, because that class is large, homogeneous and well recorded. Your product launch may belong to no class with more than four members, and a base rate computed from four members is an anecdote with a decimal point.',
        'Finally, the outside view is hostile to novelty by construction. The base rate for new restaurants, new categories and new companies is discouraging, and applying it mechanically means being right on average and wrong about every bet worth making. The correct use is not to let the prior decide but to make it visible, so the case for departing from it must be stated out loud — what specifically makes this instance different — and checked later against whether that difference was real.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'A decision is being argued entirely from one named case, and the case is unusually well told.',
      meaning: 'Strength has replaced weight. The vividness of the story is being read as the reliability of the evidence.',
    },
    {
      signal: 'A plan is built purely from the inside — our steps, our people, our timeline — with no reference to how comparable efforts went.',
      meaning: 'Inside view. The reference class has not been consulted, so the plan will be internally coherent and externally optimistic.',
    },
    {
      signal: 'A description is raising a probability even though it contains nothing that distinguishes the hypotheses.',
      meaning: 'Uninformative individuating information is pushing the judgement toward even odds and away from a known prior.',
    },
    {
      signal: 'The words "this time is different" arrive before anyone has said what specifically is different.',
      meaning: 'The base rate has been dismissed rather than updated. Departing from a prior is legitimate; departing without a stated mechanism is not.',
    },
    {
      signal: 'A conclusion is drawn from a handful of observations and stated with the confidence of a trend.',
      meaning: 'Sample-size neglect. Small samples produce extreme results more often, and extreme results feel like strong signals.',
    },
    {
      signal: 'Everyone is debating the accuracy of a test or filter and nobody has mentioned how common the thing being tested for is.',
      meaning: 'The classic setup. At low prevalence even a very accurate test returns mostly false positives, and accuracy talk does not substitute for the prevalence figure.',
    },
  ],
  playbook: [
    {
      move: 'Ask for the denominator before you hear the story.',
      how: 'Say: "Before the detail — out of how many? Across how many customers, deals or launches did this happen once?" Ask it first. Once the anecdote is in the room the denominator cannot compete with it.',
      watchOut: 'Asked after the story it reads as dismissing someone\'s experience. Asked first it reads as rigour. The timing is most of the effect.',
    },
    {
      move: 'Convert every probability into natural frequencies out loud.',
      how: 'Never let a percentage stand alone in a consequential discussion. "So of a thousand accounts like this, about thirty churn — and we are proposing to spend against all thousand?"',
    },
    {
      move: 'Run the outside view as a separate exercise, not a sanity check.',
      how: 'Say: "Park our plan for ten minutes. Name five genuinely comparable efforts and tell me what happened to them. Then we come back and say what makes us different." Two estimates, in that order.',
      watchOut: 'Produced after the inside plan, the outside view gets edited to agree with it. Make it a distinct exercise with its own written output.',
    },
    {
      move: 'Attach a cause to the base rate before you deploy it.',
      how: 'Bare proportions get ignored; causal ones get used. Not "78 percent of integrations of this type slip" but "integrations like this slip about eight times in ten because the data mapping is always found late — and we have not scoped the mapping."',
    },
    {
      move: 'Make the diagnosticity claim explicit.',
      how: 'Ask: "How much more likely is this evidence if the hypothesis is true than if it is false?" If the honest answer is not much, the evidence should barely move you however compelling it sounded.',
      watchOut: 'This can look pedantic. Ask it about your own favoured evidence first and it becomes a norm rather than an attack.',
    },
    {
      move: 'Write the prior down, then log the departure.',
      how: 'Record the reference-class number and, where you override it, the specific stated reason. Revisit both at the post-mortem. Overriding base rates invisibly and repeatedly is how an organisation stops learning.',
    },
  ],
  commonMisreads: [
    {
      misread: 'People ignore base rates because they cannot do the arithmetic.',
      correction: 'The arithmetic is trivial and most people manage it when the base rate is presented in a form they can represent. The failure is upstream: the prior never enters as an input, because the question has silently become one about resemblance.',
    },
    {
      misread: 'The fix is to distrust anecdotes and trust the data.',
      correction: 'Individuating information is usually genuinely diagnostic, and a strong specific signal should move you a lot. The problem is the pairing of vivid with weakly diagnostic. The skill is estimating diagnosticity, not discounting stories wholesale.',
    },
    {
      misread: 'Base-rate neglect is a universal feature of human cognition.',
      correction: 'Koehler\'s review found the effect substantially weaker when base rates are unambiguous, directly experienced and clearly relevant. It is a failure under specific conditions, not a permanent incapacity.',
    },
    {
      misread: 'The outside view settles the question.',
      correction: 'It sets the starting point; Bayes is entirely about what happens next. Used as a verdict it kills anything genuinely new, and it depends completely on a reference class that is itself a judgement call.',
    },
    {
      misread: 'Experts and technical people have this covered.',
      correction: 'Medical students and physicians produce the classic prevalence error, and trained researchers over-trust small samples. Expertise supplies a richer library of vivid cases, which is fuel for the pattern rather than protection from it.',
    },
  ],
  evidence: [
    {
      source: 'Kahneman & Tversky (1973), "On the Psychology of Prediction"',
      finding: 'The lawyer-engineer study. Flipping the stated composition of the pool from 70-30 to 30-70 barely moved judgements once a personality description was supplied. With no description, base rates were used correctly; with a deliberately uninformative one, people moved to roughly even odds.',
    },
    {
      source: 'Tversky & Kahneman (1974), Science, "Judgment under Uncertainty"',
      finding: 'The synthesis paper placing representativeness, availability and anchoring in one framework, and locating base-rate neglect as a consequence of judging by resemblance to a type rather than by probability.',
    },
    {
      source: 'Tversky & Kahneman (1971), "Belief in the Law of Small Numbers"',
      finding: 'Trained research psychologists over-trusted small samples, expecting them to closely resemble the parent population and treating extreme small-sample results as real effects.',
    },
    {
      source: 'Casscells, Schoenberger & Grayboys (1978), New England Journal of Medicine',
      finding: 'Students and staff at Harvard Medical School were given a test with a 5 percent false-positive rate for a condition with a prevalence of one in a thousand. Only a small minority produced the correct answer of roughly 2 percent; the most common answer was around 95 percent.',
      caveat: 'A small, informally administered sample of about sixty people, so treat the exact proportions as illustrative. The underlying pattern has been reproduced with clinicians many times since.',
    },
    {
      source: 'Gigerenzer & Hoffrage (1995), natural frequency formats',
      finding: 'Restating Bayesian problems as natural frequencies rather than probabilities roughly tripled correct inferences, from around one in six respondents to around one in two, with no instruction. Representation, not ability, was the binding constraint.',
    },
    {
      source: 'Griffin & Tversky (1992), "The Weighing of Evidence and the Determinants of Confidence"',
      finding: 'Separated the strength of evidence — how extreme or vivid — from its weight — how reliable or diagnostic. People key on strength and underweight weight, producing overconfidence from vivid weak evidence and underreaction to unremarkable strong evidence.',
    },
    {
      source: 'Flyvbjerg (2006) on reference-class forecasting for megaprojects',
      finding: 'Large infrastructure projects showed cost overruns in roughly nine cases out of ten, with forecasts systematically optimistic across decades. Forecasting from the distribution of comparable completed projects beat forecasting from the plan.',
      caveat: 'The method works because megaprojects form a large, homogeneous, well-documented class. Applied to a decision with only a handful of genuine comparables, a reference class is an anecdote with a decimal point.',
    },
    {
      source: 'Koehler (1996), "The Base Rate Fallacy Reconsidered"',
      finding: 'A review arguing base-rate neglect has been overstated by reliance on abstract vignettes. Where base rates are unambiguous, learned by direct experience and clearly relevant, people use them substantially.',
      caveat: 'This is the credible counter-literature and it should temper the strong claim. It does not rescue the configuration that causes trouble in practice — a constructed, abstract prior competing with a vivid particular case.',
    },
  ],
  takeaways: [
    'The base rate is not underweighted. In the failure case it never enters as an input, because the question has quietly become one about resemblance.',
    'Evidence has strength and weight. You feel the strength and have to calculate the weight, which is why a vivid anecdote beats a large sample by default.',
    'Ask for the denominator before you hear the story. Afterwards it sounds like dismissal; beforehand it sounds like rigour.',
    'Natural frequencies beat percentages. Ten out of a thousand keeps the base rate inside the sentence where it cannot be dropped unnoticed.',
    'A bare proportion gets ignored; a proportion with a causal mechanism attached gets used. Always ship the base rate with its reason.',
    'The outside view is the starting point, not the verdict. Departing from it is legitimate — departing without stating what makes this case different is not.',
  ],
};
