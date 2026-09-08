import type { DeepDive } from '../../../types/curriculum';

/** #09 · Sphere 1 · Fundamental Attribution Error & Actor-Observer Bias */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'Someone hands you a short essay defending Fidel Castro. Before you read a word, you are told the writer did not pick the position — a professor assigned it, the way a debate coach assigns a side by coin toss. You read it. Now estimate the writer’s actual opinion of Castro. Edward Jones and Victor Harris ran this in 1967, and their participants — told plainly that the position was assigned — still judged the pro-Castro writers as more sympathetic to Castro than writers given the opposite side. The constraint was not hidden or subtle. It was stated in advance and discounted anyway. That is the whole problem in one experiment: you can know the situation produced the behaviour and still read the behaviour as character.',
  sections: [
    {
      heading: 'Three claims wearing one name',
      body: [
        'The popular version bundles several claims that have very different amounts of evidence behind them, and the bundling is where most misuse begins. Separate them before you try to operate on anyone.',
        'The first is correspondence bias: seeing behaviour produced under a visible constraint, you still infer a matching disposition. This is the Jones and Harris result, and it is robust — reproduced across decades, materials and cultures, and treated by Daniel Gilbert and Patrick Malone’s review as one of the better-established findings in the field.',
        'The second is the actor-observer asymmetry: the folk claim that you explain your own behaviour situationally and everyone else’s dispositionally. This is much weaker than the folklore. Bertram Malle’s meta-analysis, covering well over a hundred studies, found the overall asymmetry close to zero. It appears under specific conditions — negative outcomes, self-relevant events, intimate relationships — and in some conditions it reverses.',
        'The third is the self-serving bias: taking credit for successes and assigning failures to circumstance. That one holds up well in meta-analysis and does real damage in performance reviews. So the operational claim is narrower than the slogan: you under-weight constraints acting on other people, with a motivated tilt in your own favour on top. The tidy symmetry is the part that does not survive the data.',
      ],
    },
    {
      heading: 'Why the machine is built this way',
      body: [
        'Behaviour is visible; constraints are not. When you watch a person act, the person fills your visual field and the situation is background — literally, in the perceptual sense Fritz Heider first described. Constraints are counterfactual objects: the deadline that moved, the headcount that was cut, the instruction given on Friday. None of them are in the frame.',
        'Gilbert’s model of the inference is the useful part. You categorise the behaviour, automatically characterise the person as matching it, and only then — with spare capacity — correct for the situation. The first two stages are cheap and automatic; the third is effortful and optional. Gilbert, Pelham and Krull showed this directly: participants under cognitive load failed to correct for constraints they had been explicitly told about.',
        'Read as engineering rather than defect, this is compression. A trait is a portable prediction: if this person is unreliable, that travels with them into every future situation. A situational explanation predicts almost nothing about tomorrow. Where the expensive ancestral mistake was misjudging who could be trusted, an engine biased toward stable person-level tags was the cheaper error.',
        'The cost is that the same engine runs in environments where the situation does nearly all the work — which describes most modern organisations, where incentives, tooling, queues and process design determine behaviour far more than character does.',
      ],
    },
    {
      heading: 'The move: constraint amnesia',
      body: [
        'The damaging operation is this. You observe behaviour produced under a constraint you could name, infer a trait anyway, and then carry that trait forward long after the constraint is forgotten. The inference is made once, cheaply, and then stops being an inference and becomes part of who that person is in your model of the world.',
        'The most damning demonstration is Gilbert and Jones’s work on perceiver-induced constraint. Participants themselves dictated what a target would say — they chose the constraint — and then, watching the target comply, still inferred the statements reflected the target’s real attitudes. You do not need the constraint hidden. You can have personally authored it and still read the compliance as character.',
        'Ross, Amabile and Steinmetz produced the version that maps onto workplaces. Pairs were randomly assigned to be quizmaster or contestant. Quizmasters wrote questions from their own idiosyncratic knowledge; contestants answered badly, as anyone would. Observers who had watched the coin flip still rated the quizmasters as more knowledgeable. The role manufactured the appearance of expertise and observers credited the person.',
        'That is a description of every organisation with asymmetric roles. Whoever sets the agenda looks strategic. Whoever presents looks competent. The role generates the evidence, and the evidence gets attributed to the individual.',
      ],
      example: {
        label: 'The post-mortem that produced a trait',
        body: 'A launch slips by five weeks. The written retrospective records that a key engineer “dropped the ball” and “needs to be more proactive.” What it does not record: the specification changed twice in the final month, the staging environment was down for nine working days, and the engineer flagged the slip in writing in week three to a manager who was on leave. Two years later nobody remembers the specification changes or the outage. What survives, in a performance file and in three people’s heads, is the trait — because traits are storable and constraints are not.',
      },
    },
    {
      heading: 'Seniority makes it worse, and more expensive',
      body: [
        'Correction is the stage that needs resources, and senior people are resource-poor in exactly the moments the inference is made: under time pressure, back to back, working from a summary rather than the situation. Gilbert’s cognitive-busyness result is not an exotic laboratory manipulation. It is a description of an executive calendar.',
        'The higher you sit, the less of the constraint you can see. You receive outputs — a number, a slipped date, a complaint — with the friction that produced them already stripped out. The abstraction that makes information manageable is the same abstraction that deletes the situation, leaving only people and results.',
        'The bias is also far more expensive at the top. A junior person who wrongly concludes a colleague is careless has a slightly worse working relationship. A senior person who reaches the same conclusion reorganises a team or removes someone — and then, having changed the person while leaving the system untouched, watches the replacement produce the same outcome and concludes that hiring is broken.',
        'There is a cultural dimension too, and it surfaces as an argument about facts. Joan Miller found Indian adults offered more contextual explanations than American adults for equivalent behaviour; Michael Morris and Kaiping Peng found parallel differences in how Chinese-language and English-language newspapers explained the same murders. On a mixed team, people genuinely disagree about which explanation is obvious, and each side reads the other as motivated rather than differently calibrated.',
      ],
    },
    {
      heading: 'The conditions that switch it on and off',
      body: [
        'It runs hottest with a single observation of someone you do not know well, a negative outcome, no visibility into their constraints, and no time. Add a group boundary — another function, another region, a vendor — and it intensifies, because out-group behaviour is explained dispositionally more readily than in-group behaviour.',
        'It weakens under a short list of conditions, all structural rather than attitudinal. Repeated observation across genuinely different situations weakens it, because a trait that appears in only one context stops looking like a trait. Having done the job yourself weakens it. Being required to state the constraints in writing before offering a characterisation weakens it, because that forces the correction stage to run before the conclusion is spoken.',
        'You cannot instruct people out of this and you should stop trying. You install the constraint into the process instead: a retrospective template that demands the environment before the actors, a rule that no trait claim is made from a single incident, a requirement that anyone proposing a people explanation first says what they would have done with the same calendar and the same brief.',
      ],
      example: {
        label: 'The attribution follows the camera',
        body: 'Michael Storms filmed two-person conversations, each participant also watched by an observer. Afterwards everyone explained the behaviour they had seen. Actors who were then shown a videotape shot from the observer’s viewpoint — seeing their own face and body as others had — shifted toward explaining their own behaviour in terms of disposition rather than situation. No new information about the conversation was added. Only the viewing angle changed, and the explanation moved with it.',
      },
    },
    {
      heading: 'The honest limits',
      body: [
        'Do not lead with the neat version. Tell a room that people always excuse themselves and blame others, and someone who knows the literature will point out that Malle’s meta-analysis found the classic asymmetry close to zero — and you will have spent your credibility defending the weakest part of the claim. Lead with what holds: constraints on other people are under-weighted, with a motivated tilt in your own favour on top.',
        'Traits are also real. People differ in conscientiousness and those differences predict outcomes across situations. The mirror-image error — refusing on principle to ever conclude someone is wrong for a role — is a genuine management failure, and one that people who have just learned about this bias commit reliably. Situational explanation is a discipline for generating hypotheses, not a rule forbidding conclusions.',
        'There is also a live argument about whether the disposition-versus-situation dichotomy is the right frame at all. Malle’s folk-conceptual work argues ordinary people do not sort explanations into internal and external; they distinguish intentional actions explained by reasons from unintentional events explained by causes. The practical advice survives either way, but the textbook framing is not settled science.',
        'What to trust instead of a strong single read: repetition across varying situations, and the substitution test. Would a different competent person, in this exact situation with this information and these incentives, have produced a materially different outcome? If no, you are looking at a system. If yes, and it stays yes across several episodes, you are looking at a person — and now you have something worth acting on.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'A failure is explained with an adjective about a person and no constraint is named.',
      meaning: 'The characterisation stage ran and the correction stage did not. Whatever the environment contributed has already been deleted from the account.',
    },
    {
      signal: 'The same failure gets a different explanation depending on which team produced it.',
      meaning: 'In-group behaviour explained situationally, out-group behaviour dispositionally. This is the reliable half of the asymmetry.',
    },
    {
      signal: 'Someone describes a colleague’s lapse in words they would never apply to themselves in the same spot.',
      meaning: 'The self-serving tilt — notable because it is the piece that survives meta-analysis, unlike the general actor-observer story.',
    },
    {
      signal: 'You have a confident read on someone you have observed in exactly one setting.',
      meaning: 'A trait inferred from a single context is a role artefact until proven otherwise. Roles manufacture the appearance of competence and incompetence alike.',
    },
    {
      signal: 'The people making the judgment have never done the job they are judging.',
      meaning: 'They see outputs but not friction. The correction stage has no material to work with even if someone tries to run it.',
    },
    {
      signal: 'The proposed remedy is a personnel change while the process stays untouched.',
      meaning: 'A system has been diagnosed as a person. Expect the replacement to produce a similar outcome and the conclusion to be that hiring is broken.',
    },
  ],
  playbook: [
    {
      move: 'Anchor on competence, then hunt the constraint.',
      how: 'Say: “Let us assume everyone involved is competent and was trying to do the right thing. What made the wrong thing the easy thing to do?” The premise blocks the character explanation without accusing anyone of bias, and turns attention to design.',
      watchOut: 'Used as a standing rule this becomes a shield that makes genuine underperformance undiscussable. It is a first-pass hypothesis generator, not a permanent verdict.',
    },
    {
      move: 'Run the substitution test out loud.',
      how: 'Say: “If we had put our strongest person in that seat, with that brief and that deadline, would the outcome have been materially different?” If the honest answer is no, you have a system problem and the personnel conversation is a distraction.',
    },
    {
      move: 'Demand the environment before the actors.',
      how: 'Structure the retrospective so constraints get written down first — what changed, what was unavailable, who was out, what the incentives rewarded — and only then discuss decisions. Forcing correction to run before anyone speaks a characterisation is the only version that survives time pressure.',
      watchOut: 'If the template is long, people fill it in after they have already decided. Enforce the order live, not just in the document.',
    },
    {
      move: 'Set an evidence bar for trait claims.',
      how: 'Say: “Have we seen this twice, in two genuinely different situations? If not, it is an event, not a pattern.” Traits that appear in only one context are usually properties of that context rather than of the person.',
    },
    {
      move: 'Turn the camera around on yourself first.',
      how: 'Ask: “What would I have done with that calendar, that brief and that information?” Answering honestly is the cheapest available correction, and doing it visibly earns you the right to ask others without it reading as a rebuke.',
    },
    {
      move: 'When you are the target, supply the constraint before defending your intent.',
      how: 'Say: “You are reading my intent. Let me give you what I was working with first, and then tell me whether you would still call it that.” Arguing about character invites a character argument; supplying the situation gives their correction stage the material it never had.',
      watchOut: 'A long constraint list stops being an explanation and starts sounding like a defence lawyer. Give two facts, then stop and let them respond.',
    },
  ],
  commonMisreads: [
    {
      misread: 'People blame others and excuse themselves — that is the actor-observer asymmetry.',
      correction: 'Malle’s meta-analysis of well over a hundred studies found the overall asymmetry close to zero, appearing mainly for negative and self-relevant events. The reliable findings are narrower: constraints on others are under-weighted, and there is a separate, well-supported self-serving tilt.',
    },
    {
      misread: 'It is a Western bias that does not appear in collectivist cultures.',
      correction: 'The cross-cultural work shows moderation, not absence. Indian and East Asian samples offer more situational explanations on average, but correspondence effects still appear in those samples. Treat culture as a dial on the size of the effect, not a switch.',
    },
    {
      misread: 'The fix is to stop making judgments about character.',
      correction: 'Individual differences are real and do predict outcomes across situations. Never reaching a person-level conclusion is its own management failure. The fix is an evidence standard — repetition across genuinely different contexts — not abolition of the category.',
    },
    {
      misread: 'Now that I know about the bias, I will correct for it.',
      correction: 'Correction is a separate, resource-dependent stage that runs after the automatic characterisation. Knowing the name does not fund the stage. Under load, time pressure, or a summary-only view of the situation you make the inference anyway, and it feels like observation.',
    },
    {
      misread: 'It is the same thing as the self-serving bias.',
      correction: 'Distinct, with different evidence bases. Self-serving bias is motivational and protects the self-concept. Correspondence bias is largely perceptual and cognitive, and it appears in judgments of strangers where the observer has nothing at stake at all.',
    },
  ],
  evidence: [
    {
      source: 'Jones & Harris, “The Attribution of Attitudes” (1967)',
      finding: 'Participants read essays for or against Castro, told whether the writer chose the position or had it assigned. Even in the assigned condition they inferred the essay reflected the writer’s real attitude — attenuated by the no-choice instruction, but nowhere near eliminated.',
      caveat: 'A small 1960s undergraduate study. Its weight comes from extensive reproduction since, not from the original sample.',
    },
    {
      source: 'Ross, Amabile & Steinmetz, quiz-show study (1977)',
      finding: 'Pairs were randomly assigned to write questions or answer them. Observers who had watched the random assignment still rated questioners as more knowledgeable than contestants. Role-conferred advantage was read as personal ability.',
    },
    {
      source: 'Gilbert & Jones, perceiver-induced constraint (1986)',
      finding: 'Observers who personally dictated what a target would say still inferred that the statements reflected the target’s genuine attitudes. Awareness of the constraint is not sufficient to prevent the inference — even authorship of it is not sufficient.',
    },
    {
      source: 'Gilbert, Pelham & Krull, “On Cognitive Busyness” (1988)',
      finding: 'Participants under cognitive load failed to adjust dispositional inferences for constraints they had been explicitly told about. Supports the three-stage model: characterisation is automatic, correction is effortful and drops out first under pressure.',
    },
    {
      source: 'Malle, “The Actor-Observer Asymmetry in Attribution: A (Surprising) Meta-Analysis” (2006)',
      finding: 'Aggregating well over a hundred studies, the classic asymmetry was close to zero overall. It emerged under specific conditions — negative events, self-relevant outcomes, intimate relationships — and reversed in others.',
      caveat: 'This undercuts the popular framing and should be carried openly. The correspondence-bias half of the concept is unaffected; the tidy “you excuse yourself, you condemn others” symmetry is what the data do not support.',
    },
    {
      source: 'Storms, videotape perspective reversal (1973)',
      finding: 'Showing actors footage of themselves from the observer’s viewing angle shifted their explanations of their own behaviour toward dispositional causes. Attribution followed visual perspective rather than knowledge.',
      caveat: 'Small sample and early-1970s methods, with no large preregistered replication on the public record. Treat it as a vivid illustration of the perceptual-salience account rather than load-bearing evidence.',
    },
    {
      source: 'Mezulis, Abramson, Hyde & Hankin, self-serving attribution meta-analysis (2004)',
      finding: 'Found a large and broadly consistent self-serving attributional bias across a wide range of samples, with cultural and clinical moderators. This is the best-supported piece of the bundle and the one most likely to be running in a performance review.',
    },
    {
      source: 'Miller (1984); Morris & Peng (1994), cultural attribution work',
      finding: 'Indian adults offered more contextual explanations than American adults for equivalent behaviour, with the difference widening across development. Chinese-language and English-language press coverage of the same crimes emphasised situational versus dispositional causes.',
      caveat: 'Cross-cultural differences are real, but effect sizes and interpretation remain contested and some later work finds smaller gaps. Evidence the bias is tunable, not that any group is exempt.',
    },
  ],
  takeaways: [
    'Behaviour is in the frame and constraints are not. The inference engine credits whatever fills the visual field.',
    'Characterisation is automatic; correction is optional and expensive. Under load the correction simply does not run.',
    'The robust claim is that you under-weight constraints on others. The tidy actor-observer symmetry is much weaker than the folklore.',
    'Roles manufacture the appearance of ability. Whoever sets the agenda looks strategic, and observers credit the person, not the seat.',
    'Seniority worsens it and raises the price: you see outputs without friction, and you can act on the mistaken read.',
    'Use the substitution test — would a strong person in that exact situation have done better? — and require two contexts before naming a trait.',
  ],
};
