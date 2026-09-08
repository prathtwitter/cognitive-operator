import type { DeepDive } from '../../../types/curriculum';

/** #05 · Sphere 1 · Affect Heuristic & Somatic Marker Hypothesis */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'Pick one: a 1 percent chance of winning $500 in cash, or a 1 percent chance of winning a $500 voucher for a European holiday — flights, hotel, meals included. Most people take the holiday. Now run the same choice at a 99 percent chance. Most people switch to the cash. Nothing about the money changed. What changed is that at 99 percent you started doing arithmetic, and at 1 percent you were doing something else entirely: looking at a picture of yourself in Rome and asking how much you liked it. The probability was in the sentence both times. It only touched the decision once.',
  sections: [
    {
      heading: 'The tag on the picture',
      body: [
        'The popular version — emotions cloud judgement — is too flattering, because it implies a clean judgement underneath that the emotion is obscuring. What actually happens is narrower. Almost every mental image arrives pre-tagged with a faint positive or negative marker, and that marker is frequently not an input to the evaluation. It is the evaluation.',
        'The signature is measurable and peculiar. In the world, risk and benefit correlate positively: things that pay well tend to be things that can hurt you. Inside people\'s heads the correlation reverses. Finucane and colleagues ran the manipulation that proves this is more than an opinion pattern. Tell people only about a technology\'s benefits and their perceived risk falls. Tell them only about hazards and perceived benefit falls. Information leaks from one attribute into the other, which cannot happen if the two are assessed separately — only if both are read off a single feeling.',
        'Sit with the consequence. You cannot hold "high risk, high reward" as a felt position. You can hold it as a sentence, on a slide, and believe it intellectually. But the moment you are asked to decide rather than describe, the single tag reasserts itself and one of those two numbers quietly moves to match the other.',
      ],
    },
    {
      heading: 'Why the body compresses',
      body: [
        'Damasio\'s case for why this exists is an engineering one. Any situation worth deciding about has more relevant dimensions than working memory can hold, so re-deriving the full evaluation each time is not slow but impossible. The organism does what any system under a memory constraint does: it caches. Past outcomes get bound to bodily states, and a similar situation reactivates the state as a summary.',
        'Affect is therefore a compression algorithm. It takes a high-dimensional situation and returns a scalar — one number on one axis, good to bad. Scalars are the only things that can be compared. Without one you cannot rank two options at all, because there is no shared dimension on which a career move and a house purchase sit.',
        'Patients with damage to the ventromedial prefrontal cortex show how badly you need this. Intelligence, memory, language and formal reasoning survive. What collapses is the ability to terminate a deliberation. They generate the considerations, often more thoroughly than you would, and arrive at no preference, because nothing weights anything. This inverts the usual moral. A person without gut feelings is not a cold rationalist. They are someone who cannot leave the shop.',
      ],
      example: {
        label: 'The patient who could not choose a date',
        body: 'Damasio describes a patient, referred to as Elliot, who had a tumour removed from the ventromedial prefrontal region. He tested normal or better on IQ, memory, attention and reasoning. His life collapsed anyway — failed businesses, lost job, two divorces. Offered two possible dates for his next appointment, Elliot produced nearly half an hour of competent analysis: weather, commitments, travel time, proximity to other engagements. He never chose. Told which date to take, he accepted immediately. The deliberation machinery was intact. The thing that says "that one, enough" was gone.',
      },
    },
    {
      heading: 'Affect detects presence, not amount',
      body: [
        'Here is the move that does the damage, stated precisely: feelings are close to binary, and they are being asked to report a magnitude. Affect is an excellent detector of whether something is good or bad, a poor instrument for how good or bad, and close to useless for how likely.',
        'The cleanest demonstration is scope insensitivity. Asked what they would pay to stop migrating birds drowning in oil ponds, three separate groups were given 2,000, 20,000 and 200,000 birds. The answers came out around eighty dollars each — indistinguishable across a hundredfold change in what was being bought. Nobody was pricing a quantity of birds. They were pricing the image of one oiled bird, and there is only one of those regardless of the number in the sentence. Hsee and Rottenstreich separated the modes directly: valuing by feeling barely moves with quantity, and prompting calculation makes quantity matter again.',
        'Translate that into a boardroom and it is alarming. A risk register is a ranking produced by feeling. Rankings produced by feeling are usually directionally right — the room will agree A is riskier than B and often be correct. But the room can be unanimous on the ordering and wrong by two orders of magnitude on the sizing, and sizing is what determines what you spend.',
      ],
      example: {
        label: 'Two risks, one feeling',
        body: 'A retailer\'s leadership reviews two exposures. First, a data breach: vivid, narratable, personally frightening, easy to picture on a news screen. Second, a slow erosion of repeat purchase in the core basket, currently a fraction of a point a quarter. The room spends eighty minutes on the breach and eleven on the repeat rate. Modelled over three years, the drift is worth several multiples of the expected breach cost. Nobody was wrong about which felt worse. They were wrong to treat that feeling as an estimate of size, because feelings have no size dimension to report.',
      },
    },
    {
      heading: 'Quantitative people are not exempt',
      body: [
        'The natural defence is that this describes the public, not people who work with numbers. Slovic\'s point about expert and lay risk perception is that they differ in which hazards they fear, not in whether feeling drives the judgement. Experts hold well-tuned tags inside their domain, which is exactly why their intuitions are good there — and no tags outside it, which is where confidence outruns calibration.',
        'Worse, numbers carry affect, and the carrying is format-dependent. Slovic, Monahan and MacGregor gave forensic clinicians identical risk information about a patient as a percentage and as a frequency out of a hundred. The frequency version produced markedly higher judgements of dangerousness and more refusals to discharge. The arithmetic was the same. A frequency generates an image of actual people committing actual acts; a percentage does not.',
        'Then the lawyering problem. Numerate people do not escape the tag; they build a model that ratifies it, with more digits, better sourcing and a sensitivity table, pointing exactly where the tag pointed before the model existed. And Finucane found that time pressure strengthens the inverse risk-benefit relationship — the more hurried the judgement, the more completely one feeling substitutes for two assessments. Senior decisions are made under time pressure almost by definition.',
      ],
    },
    {
      heading: 'The switches',
      body: [
        'Affect dominates under recognisable conditions: an option evaluated on its own rather than beside an alternative; an imagery-rich description; a single identifiable target rather than a statistic; short time or loaded attention; an emotionally charged rather than monetary outcome.',
        'It loses ground under the opposite conditions, and one of them is disproportionately powerful. Hsee showed that a used dictionary with 20,000 entries and a torn cover loses to an intact one with 10,000 entries when each is judged alone — and wins decisively when the two sit side by side. Alone, the only attribute you can feel is the cover. Together, the entry count becomes visible and comparable.',
        'That gives you the highest-leverage rule in the whole concept: never evaluate one option by itself. Separate evaluation is the natural habitat of the affect heuristic, so any process presenting proposals one at a time — a vendor pitch, candidates judged as they arrive, a project approved on its own merits — is a process engineered to be decided by feeling. The second reliable switch is a common unit. Cost per unit, incidents per year, expected value per dollar. It does not eliminate the feeling; it puts a comparable magnitude on the page beside it.',
      ],
    },
    {
      heading: 'Where the science is soft, and what still holds',
      body: [
        'Two claims get bundled here and they do not have the same standing. The affect heuristic — the inverse risk-benefit correlation, scope insensitivity, probability insensitivity for affect-rich outcomes — is well replicated across labs, formats and domains. Treat it as solid.',
        'The somatic marker hypothesis is stronger and more specific: that bodily feedback, learned without conscious awareness, is the mechanism. That is genuinely contested. The headline result — healthy participants in the Iowa Gambling Task avoiding the bad decks before they could say why, while ventromedial patients did neither — was reanalysed by Maia and McClelland with a more sensitive probe of what participants knew. They found far more explicit knowledge than the original questions detected, and enough of it to account for the choices. Dunn, Dalgleish and Lawrence later found the anticipatory bodily-response evidence inconsistent and the causal role of the bodily signal unproven.',
        'What survives is still substantial: emotion is integral to choice rather than an optional contaminant, and ventromedial damage reliably wrecks real-world decision-making with reasoning intact. What does not survive is the popular story of the gut as an unconscious calculator that has already worked out the answer.',
        'The last limit matters most in practice. Affect is often right. In domains that are regular and give fast, unambiguous feedback, the tag encodes real accumulated learning and overriding it costs you. The discipline is not to suppress the feeling but to demote it from verdict to prompt: a reliable detector that something needs sizing, followed by an insistence that something else does the sizing.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'A proposal is described as both low-risk and high-return, with no mechanism for why the two come apart here.',
      meaning: 'The inverse correlation is showing. One affective tag is generating both numbers, so they move together instead of trading off.',
    },
    {
      signal: 'The discussion of an option gets more vivid and less numerical the longer it runs.',
      meaning: 'The room has switched from calculation to imagery. Whatever is decided now is decided on the picture, not the model.',
    },
    {
      signal: 'A tenfold change in scale produces almost no change in what people will spend or accept.',
      meaning: 'Scope insensitivity. The valuation is driven by an image, and the image is the same size at every scale.',
    },
    {
      signal: 'Options are being presented one at a time, each judged on its own merits.',
      meaning: 'Separate evaluation — the format in which affect reliably beats attributes that are only meaningful by comparison.',
    },
    {
      signal: 'The objection is aesthetic — messy, unpolished, not how we do things — and is being treated as a risk assessment.',
      meaning: 'Negative affect has been converted into a probability claim without passing through any estimate.',
    },
    {
      signal: 'A low-probability event is discussed as though the probability were roughly irrelevant to it.',
      meaning: 'Affect-rich outcome. Emotional intensity is crowding out the odds — dread and excitement both do this.',
    },
  ],
  playbook: [
    {
      move: 'Force the two assessments apart before anyone speaks.',
      how: 'Ask each person to write two numbers privately: value if this works, and probability it does not. Say: "Two numbers, separately, before we discuss. I want to see whether they move independently."',
      watchOut: 'Asked in open discussion, the first speaker\'s pair anchors everyone else and you have measured one person\'s affect six times.',
    },
    {
      move: 'Refuse to evaluate anything alone.',
      how: 'Insist on a live comparator on the same page in the same units: "Before we approve this, put the next best use of the same money beside it. I do not trust my read on a single option."',
      watchOut: 'A straw comparator is worse than none. It converts a feeling into a feeling with a false endorsement.',
    },
    {
      move: 'Convert dread or enthusiasm into a rate.',
      how: 'Say: "This feels risky and that instinct is worth taking seriously. What I need next is a frequency — how many times in a hundred similar deals does it actually bite, and what does it cost when it does?"',
      watchOut: 'Validate the detector before challenging it. Lead with the challenge and you get defence of the feeling instead of a number.',
    },
    {
      move: 'Test for scope sensitivity out loud.',
      how: 'Restate the proposal at ten times and a tenth of the scale and watch whether the assessment moves. "If this were two million rather than two hundred thousand, does anything about our answer change?" If nothing changes, nothing was being sized.',
    },
    {
      move: 'Use the frequency format deliberately when the risk is real.',
      how: 'Say "eleven out of a hundred launches like this slip past the quarter" rather than "an eleven percent slip rate." Same arithmetic; the frequency generates the image a percentage suppresses.',
      watchOut: 'This works because it distorts. Use it to correct an under-felt risk, not to manufacture one, and expect it to be used on you.',
    },
    {
      move: 'Audit your own tag before you argue.',
      how: 'When you notice you dislike a proposal, ask whether your risk estimate arrived before or after the dislike. If after, you are producing evidence for a verdict, and everyone in the room can tell.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Emotion is the enemy of good decisions and the goal is to remove it.',
      correction: 'People who lose affective weighting do not become better decision-makers; they become unable to decide at all. Affect is what makes options comparable. The failure is using it to estimate magnitude, not its presence.',
    },
    {
      misread: 'The gut has already done the calculation unconsciously, so trust it.',
      correction: 'That is the strong somatic marker claim and it is contested. Reanalyses of the Iowa Gambling Task found participants held far more explicit knowledge than the original studies detected. Intuition can be excellent in regular, high-feedback domains, but not because a hidden calculator ran the numbers.',
    },
    {
      misread: 'Numerate and technical people are insulated from this.',
      correction: 'Experts differ in which hazards trigger the tag, not in whether the tag drives the judgement. Numeracy tends to produce a better-argued model pointing where the feeling already pointed.',
    },
    {
      misread: 'If people rank the risks correctly, the analysis is sound.',
      correction: 'Ordering and sizing are different outputs. Affect is decent at ordering and near-blind to magnitude. A correctly ordered risk register can still misallocate the entire budget.',
    },
    {
      misread: 'Explaining the bias to the room will neutralise it.',
      correction: 'Affective tagging is automatic and pre-conscious; it does not respond to being named. What changes outcomes is structural — joint evaluation, common units, separate written estimates — not awareness.',
    },
  ],
  evidence: [
    {
      source: 'Finucane, Alhakami, Slovic & Johnson (2000), "The Affect Heuristic in Judgments of Risks and Benefits"',
      finding: 'Perceived risk and benefit are inversely correlated in judgement even where they correlate positively in the world. Information about benefits alone lowered perceived risk, and vice versa — leakage that only makes sense if one affective evaluation generates both. Time pressure strengthened the effect.',
    },
    {
      source: 'Alhakami & Slovic (1994)',
      finding: 'The inverse risk-benefit relationship is mediated by the strength of positive or negative affect toward the activity itself, rather than by information people hold about it.',
    },
    {
      source: 'Rottenstreich & Hsee (2001), "Money, Kisses, and Electric Shocks"',
      finding: 'For affect-rich outcomes — a holiday, a kiss, a shock — sensitivity to probability collapses. People treated 1 percent and 99 percent far more similarly than they did for equivalent cash.',
    },
    {
      source: 'Hsee & Rottenstreich (2004), valuation by feeling versus by calculation',
      finding: 'Valuing by feeling produced willingness-to-pay close to flat across large changes in quantity. Prompting the same people into calculation restored sensitivity to scale.',
    },
    {
      source: 'Desvousges and colleagues (1992), willingness to pay to save migrating birds',
      finding: 'Separate groups asked about 2,000, 20,000 and 200,000 birds gave statistically indistinguishable amounts, around eighty dollars in each case — the canonical demonstration of scope insensitivity.',
      caveat: 'Contingent valuation asks about hypothetical payments and the method has known instability problems, so treat the dollar figures as illustrative. Scope insensitivity itself has been reproduced in many other paradigms.',
    },
    {
      source: 'Slovic, Monahan & MacGregor (2000), frequency versus probability formats',
      finding: 'Forensic clinicians judged the same patient substantially more dangerous, and refused discharge more often, when identical risk information was expressed as a frequency out of a hundred rather than as a percentage.',
    },
    {
      source: 'Damasio, Descartes\' Error (1994); Bechara and colleagues, Iowa Gambling Task (1994, 1997)',
      finding: 'Patients with ventromedial prefrontal damage retain intelligence and reasoning but lose the ability to weight options and decide. Healthy participants showed anticipatory bodily responses to disadvantageous decks and began avoiding them; patients did neither.',
      caveat: 'The claim that this learning is non-conscious is contested. Maia & McClelland (2004) used a more sensitive probe and found explicit knowledge sufficient to explain the choices; Dunn, Dalgleish & Lawrence (2006) found the anticipatory-response evidence inconsistent and the causal role of bodily signals unproven. The broader finding that emotion is integral to decision-making does not depend on the non-conscious version.',
    },
    {
      source: 'Small, Loewenstein & Slovic (2007); Fetherstonhaugh and colleagues (1997) on psychophysical numbing',
      finding: 'People give substantially more to one identified victim than to statistical victims, and the value placed on saving lives declines as the number at risk grows. Feeling responds to the individual and flattens across scale.',
      caveat: 'The related result that priming analytic thought reduces giving rests on a small priming manipulation, and priming effects as a class replicate poorly. The identifiable-victim effect is far better supported than that particular mechanism.',
    },
  ],
  takeaways: [
    'Affect is not noise on top of the evaluation. In fast judgements it is the evaluation, and both the risk number and the benefit number get read off it.',
    'The reliable failure is magnitude, not direction. Feelings rank well and size terribly, which is how a correctly ordered risk list still misallocates the budget.',
    'Test for scope sensitivity: if a tenfold change in scale does not move the assessment, nothing was being estimated.',
    'Separate evaluation is this bias\'s home turf. Never judge one option alone — force a comparator in the same units onto the same page.',
    'The affect heuristic is solid. The somatic marker hypothesis, in its strong non-conscious form, is contested — do not build arguments that need it.',
    'Do not aim for affect-blindness. People who lose affective weighting cannot decide at all. Demote the feeling to a prompt, then make something else do the sizing.',
  ],
};
