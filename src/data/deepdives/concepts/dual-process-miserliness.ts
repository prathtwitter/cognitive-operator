import type { DeepDive } from '../../../types/curriculum';

/** #01 · Sphere 1 · Dual-Process Architecture & Cognitive Miserliness */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'A bat and a ball cost $1.10 together. The bat costs $1.00 more than the ball. How much does the ball cost? An answer arrived in your head before you finished reading the question. It was almost certainly ten cents. It is almost certainly wrong — if the ball were ten cents, the bat would be $1.10, and the total would be $1.20. The ball costs five cents. What matters here is not that you got it wrong. What matters is that you got an answer at all, instantly, without deciding to compute one, and that the wrong answer felt finished. That feeling of doneness is the single most expensive sensation in business.',
  sections: [
    {
      heading: 'Two systems, one narrator',
      body: [
        'The standard shorthand is System 1 and System 2. System 1 is fast, automatic, always running, and produces impressions, intuitions and feelings without any sense of voluntary control. System 2 is slow, effortful, serial, and produces the experience of deliberate choice. Kahneman himself was careful about this language: they are not two people living in your head, and they are not two brain regions. They are a useful fiction for describing two families of mental operations that behave very differently.',
        'The part everyone remembers is "fast versus slow." The part that actually matters strategically is the division of labour. System 1 is not a junior partner that hands difficult problems upward. System 1 continuously generates suggestions — impressions, intentions, feelings — and System 2 mostly endorses them with minimal editing. Kahneman\'s formulation is that System 2 believes itself to be the protagonist of the story while spending most of its life as an approving audience.',
        'This is why the bat-and-ball problem is diagnostic rather than merely cute. Nothing about it is hard. Anyone who can do arithmetic can solve it in fifteen seconds of deliberate work. The failure is not a failure of capability. It is a failure of *dispatch*: System 1 produced a confident answer, System 2 was never summoned to check it, and the confident answer walked straight out of your mouth.',
      ],
    },
    {
      heading: 'Why laziness is the correct engineering choice',
      body: [
        'It is tempting to treat all of this as a design flaw. It is not. It is a budget.',
        'The adult human brain is roughly 2% of body weight and consumes something on the order of 20% of the body\'s energy at rest. That ratio is extraordinary among mammals, and it was paid for over evolutionary time by an ancestor whose calorie supply was neither reliable nor abundant. A brain that ran every problem through slow deliberate analysis would have been a metabolic liability, not an advantage.',
        'So the system evolved a default: answer cheaply unless something forces you not to. Susan Fiske and Shelley Taylor named the resulting creature the "cognitive miser" — a mind that treats attention as a scarce resource to be hoarded rather than a free good to be spent. Later work by Anuj Shah and Daniel Oppenheimer generalised this into an effort-reduction framework: most heuristics are not distinct tricks but the same underlying move, which is to reduce the number of things that must be examined, weighted and integrated before an answer is produced.',
        'The strategic consequence is uncomfortable but clarifying. When someone in a meeting substitutes a slogan for an analysis, they are not being stupid and usually not being dishonest. They are doing exactly what the hardware is optimised to do. Treating it as a character flaw guarantees you will fight the wrong battle.',
      ],
      example: {
        label: 'Where the energy actually goes',
        body: 'The 20% figure is a resting baseline, not a variable cost that spikes dramatically when you concentrate. Hard thinking does not burn calories the way sprinting does — the measurable metabolic difference between resting and effortful cognition is small. The evolutionary pressure was on maintaining an expensive organ at all, and on the opportunity cost of attention: while you are deliberating, you are not scanning for threats, not acting, not deciding anything else. Effort is scarce because attention is serial, not because thinking is a workout.',
      },
    },
    {
      heading: 'The switch you never notice',
      body: [
        'The mechanism that does the real damage has a specific name: attribute substitution. When you face a target question that is computationally hard, your mind quietly answers a different, easier heuristic question instead — and then reports the answer as though it addressed the original.',
        'The substitution is invisible from the inside. You do not experience "I could not evaluate the five-year technical risk, so I evaluated how much I liked the presenter." You experience "I have a good feeling about this vendor." The easy answer is delivered with the same confidence, in the same voice, as a genuine conclusion. There is no internal alarm that fires when a swap has occurred.',
        'Once you know the shape of it, you start seeing the pairs everywhere. The target question is *what is the probability this project ships on time?* and the substituted question is *how confident did the project lead sound?* The target question is *is this candidate good at the job?* and the substituted question is *how easily can I imagine this person in the role?* The target question is *how risky is this investment?* and the substituted question is *how do I feel about this investment right now?*',
        'Every one of those substitutions is a downgrade from a quantity you cannot see to a quantity you can feel. That is the whole trick. Feelings are always available; base rates are not.',
      ],
      example: {
        label: 'The substitution in a boardroom',
        body: 'An investment committee reviews a $4.5M infrastructure overhaul. The genuine question — will this architecture survive five years of load growth, and what does failure cost us? — requires modelling nobody in the room has done. The vendor presents with unusual polish. Within twenty minutes the committee has converged, and the sentence someone says out loud is "this team really gets it." Nobody lied. Nobody was lazy in the ordinary sense. The hard question was simply never in the room, and an easier one wearing its clothes was answered instead.',
      },
    },
    {
      heading: 'Intelligence does not protect you',
      body: [
        'This is the finding that changes how you run meetings, so it is worth stating precisely. Shane Frederick assembled the bat-and-ball problem into a three-item Cognitive Reflection Test and administered it at elite universities. At MIT, Harvard and Princeton, a majority of students failed to get all three items right. These are people with no arithmetic deficit whatsoever.',
        'Keith Stanovich has spent a career on the implication: the ability to reason well and raw processing power are separable. Intelligence tests measure something closer to computational capacity; rational thinking depends additionally on the disposition to *engage* that capacity, plus possession of the right mental tools ("mindware"). Stanovich coined the term dysrationalia for the gap — the well-documented phenomenon of highly intelligent people reasoning badly.',
        'There is a darker corollary that shows up repeatedly in later work: greater cognitive ability sometimes makes bias worse rather than better, because a more capable System 2 is a more capable lawyer for whatever System 1 already concluded. Sophistication buys better arguments for the intuition, not better scrutiny of it.',
        'The operational takeaway is that "we have smart people in the room" is not a control. It is not even weak evidence of a control. Hiring for intelligence and then relying on that intelligence to catch substitution errors is a governance design that does not work.',
      ],
    },
    {
      heading: 'The conditions that put System 2 to sleep',
      body: [
        'Engagement is not random. It is fairly predictable, which means it is partly manageable. System 2 is least likely to be summoned when: the question is under time pressure; working memory is already loaded with something else; the material is easy and fluent to process; the intuitive answer arrives with high confidence; and no one in the environment will ask you to show your work.',
        'Notice how precisely a good sales pitch is engineered against that list. It is time-boxed. It is cognitively busy — slides, story, momentum. It is maximally fluent, because a polished deck is easy to process and processing ease is itself misread as truth. It supplies a confident conclusion so you do not have to build one. And it typically ends with a request for a decision in the room, before anyone can go away and compute.',
        'Conversely, the conditions that reliably wake System 2 up are: a written question you must answer in writing; a number you must commit to; a requirement to state the mechanism rather than the conclusion; and a second person whose job is to disagree. None of these are clever. All of them work by forcing serial, explicit computation where an impression would otherwise suffice.',
      ],
    },
    {
      heading: 'What this buys you in practice',
      body: [
        'The wrong lesson is "distrust intuition." System 1 is not a defect and it is right most of the time — expert intuition in stable, high-feedback domains is genuinely excellent, and Kahneman spent years working through exactly when it can be trusted with Gary Klein. Chess masters, experienced nurses and firefighters develop real pattern recognition because their environments are regular and feedback is fast and unambiguous.',
        'The right lesson is narrower and far more useful: intuition is trustworthy in proportion to how regular the environment is and how quickly and clearly you get feedback. Most executive decisions score badly on both. Strategic bets have long feedback loops, noisy outcomes, and no repetition to learn from. That is precisely the territory where a confident gut feeling carries the least information — and, unhelpfully, where confidence tends to run highest.',
        'So the discipline is not to override every instinct. It is to know which room you are in, and to install friction only where the environment is irregular and the feedback is slow.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'The room converges unusually fast on a decision that has no model behind it.',
      meaning: 'Speed of consensus is inversely related to how much computation was done. Genuine analysis produces disagreement about assumptions first.',
    },
    {
      signal: 'The stated reason is about a person, not a mechanism — "they really get it", "I trust this team".',
      meaning: 'A judgement about people has been substituted for a judgement about a system. The person is observable; the system is not.',
    },
    {
      signal: 'Someone answers a quantitative question with an adjective.',
      meaning: 'Asked "how likely", answered "very confident". The target question was swapped for a feeling of confidence.',
    },
    {
      signal: 'The first number proposed is the one everyone reasons from afterwards.',
      meaning: 'System 2 accepted System 1\'s starting point and is now doing adjustment work inside a frame it never audited.',
    },
    {
      signal: 'You notice a strong opinion forming before you have seen the data.',
      meaning: 'This one is about you. The opinion is an impression that will now recruit arguments. Catch it here or you will defend it later.',
    },
    {
      signal: 'The material is unusually polished and the discussion is unusually shallow.',
      meaning: 'Processing fluency is being misread as validity. Ease of understanding says nothing about whether a claim is true.',
    },
  ],
  playbook: [
    {
      move: 'Name the swap without attacking the person.',
      how: 'Say out loud which question got answered and which one did not: "The pitch was genuinely strong — I think we\'ve answered whether we like this team. We haven\'t answered what happens to our cost base if volume triples."',
      watchOut: 'Frame it as a property of the room, never of an individual. The moment it sounds like an accusation of sloppiness, you get defensiveness instead of computation.',
    },
    {
      move: 'Force a number before the discussion, not after.',
      how: 'Ask everyone to write down their own estimate — probability, cost, date — privately and simultaneously, then reveal. Silent written commitment is the cheapest reliable System 2 trigger available.',
      watchOut: 'If people speak first and write second, you have measured conformity, not judgement.',
    },
    {
      move: 'Ask for the mechanism, not the conclusion.',
      how: '"Walk me through how this actually fails." Requiring a causal chain makes substitution impossible, because a feeling cannot be rendered as a sequence of steps.',
    },
    {
      move: 'Introduce deliberate friction on irregular decisions only.',
      how: 'A written pre-read answered in writing, a mandatory overnight gap before large commitments, or a named dissenter. Reserve these for decisions with slow, noisy feedback — using them everywhere just trains people to route around them.',
      watchOut: 'Friction has a real cost in speed and goodwill. Spend it where intuition is least reliable, not uniformly.',
    },
    {
      move: 'Protect the conditions rather than trusting the people.',
      how: 'Do not schedule consequential decisions at the end of a packed day, at the tail of a long agenda, or under a manufactured deadline. You cannot make a room smarter, but you can decline to hold the meeting in the conditions where System 2 reliably stays asleep.',
    },
    {
      move: 'Turn it on yourself first.',
      how: 'When you feel certain quickly, ask what easier question you might have answered. Doing this visibly also earns you the standing to ask it of others without it landing as a status move.',
    },
  ],
  commonMisreads: [
    {
      misread: 'System 1 is the bad one and System 2 is the good one.',
      correction: 'System 1 is right most of the time and runs almost everything you do competently. The failure mode is misapplication — a fast answer in a domain where fast answers do not work — not the existence of fast answers.',
    },
    {
      misread: 'They are two distinct brain systems you could point at on a scan.',
      correction: 'They are descriptive families of processes, not anatomy. Kahneman was explicit that the labels are a narrative device. Treating them as literal modules leads to bad predictions.',
    },
    {
      misread: 'Smart, senior people have grown out of this.',
      correction: 'Frederick\'s CRT results at elite universities and Stanovich\'s work on dysrationalia both point the other way. Greater ability can produce better justifications for an unexamined intuition.',
    },
    {
      misread: 'The fix is to think harder about everything.',
      correction: 'Deliberation is serial and scarce; spending it uniformly means spending it on trivia. The skill is triage — identifying the small number of decisions where the environment is irregular enough that intuition is untrustworthy.',
    },
    {
      misread: 'If I slow a decision down, I have de-biased it.',
      correction: 'Time alone does not summon System 2; it often just produces a longer defence of the original impression. What works is a structural demand — a number, a written mechanism, an assigned dissenter.',
    },
  ],
  evidence: [
    {
      source: 'Kahneman, Nobel Lecture — "Maps of Bounded Rationality" (2002)',
      finding: 'Lays out the accessibility framework: judgements are driven by whatever attribute comes to mind most readily, and the substitution of accessible attributes for the intended ones is the common root of a large family of biases.',
    },
    {
      source: 'Kahneman & Frederick, "Representativeness Revisited" (2002)',
      finding: 'Formalises attribute substitution — the target attribute is replaced by a more accessible heuristic attribute, and the substitution is not detected introspectively.',
    },
    {
      source: 'Frederick, Cognitive Reflection Test (2005)',
      finding: 'The bat-and-ball item and two siblings. Substantial proportions of students at highly selective universities answered incorrectly, demonstrating that the failure is one of engagement rather than capability.',
    },
    {
      source: 'Stanovich & West (2000); Stanovich on dysrationalia',
      finding: 'Introduced the Type 1 / Type 2 terminology and separated computational capacity from the disposition to engage it. Rationality and intelligence are measurably distinct.',
    },
    {
      source: 'Fiske & Taylor, Social Cognition (1984)',
      finding: 'The "cognitive miser" model — people default to conserving mental effort, treating attention as scarce.',
    },
    {
      source: 'Shah & Oppenheimer, effort-reduction framework (2008)',
      finding: 'Reframes most heuristics as instances of one underlying strategy: reduce the number of cues examined, weighted and integrated.',
    },
    {
      source: 'Kahneman & Klein, "Conditions for Intuitive Expertise" (2009)',
      finding: 'An adversarial collaboration establishing when intuition can be trusted: environments must be sufficiently regular to be predictable, and the practitioner must have had opportunity to learn them through prolonged, clear feedback. Both conditions typically fail for strategic business decisions.',
    },
    {
      source: 'Ego-depletion and decision-fatigue extensions',
      finding: 'A popular related claim is that deliberation drains a limited resource, degrading later decisions.',
      caveat: 'Treat as unsettled. Large multi-lab replication efforts have failed to find the ego-depletion effect at anything like the originally reported size, and prominent applied results in this family have contested confounds. The dual-process and substitution findings above do not depend on it.',
    },
  ],
  takeaways: [
    'You will always receive an answer instantly. Receiving one is not evidence that anyone computed it.',
    'The core failure is attribute substitution: a hard target question silently swapped for an easy, feelable one — with no internal signal that the swap occurred.',
    'Intelligence is not a defence. It frequently supplies better arguments for the unexamined intuition instead of better scrutiny of it.',
    'Trust intuition in proportion to the regularity of the environment and the speed and clarity of feedback. Most strategic decisions score badly on both.',
    'Structural friction beats exhortation: a private written number, a demanded causal mechanism, a named dissenter. "Let\'s all think carefully" does nothing.',
    'Watch the conditions, not just the people — fluency, time pressure and cognitive load are the levers that decide whether anyone checks the work.',
  ],
};
