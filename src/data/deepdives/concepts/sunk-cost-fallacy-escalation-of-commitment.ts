import type { DeepDive } from '../../../types/curriculum';

/** #34 · Sphere 4 · The Sunk Cost Fallacy & Escalation of Commitment */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'You run an airline. Ten million dollars ago you commissioned a radar-invisible aircraft, and the programme is now ninety per cent complete. This morning a competitor announced the same plane — faster, cheaper, already flying. One million dollars of budget remains. Do you finish yours? Most people say yes. Now strip the history out: a subordinate walks into your office asking for one million dollars to build an aircraft that will be slower and more expensive than one already on the market. Almost nobody funds that. The two decisions are identical in every respect that can affect the future. The only thing separating them is a number that has already left the building — and it moved you anyway.',
  sections: [
    {
      heading: 'Two tests, and everyone forgets the second one',
      body: [
        'A cost is sunk when it satisfies two conditions, not one. It must be unrecoverable — no action available to you now gets it back. And it must be uninformative — knowing you spent it tells you nothing new about what happens from here. Almost no argument in any boardroom is really about the first condition. Everybody agrees the money is gone. The fight is over the second one, and that is where the concept earns its keep.',
        'When an engineer says the last eighteen months taught them an enormous amount, they may be making a genuine claim about condition two: the spend produced information that raises the forward-looking odds. That is not the fallacy. The fallacy is invoking the eighteen months as a reason in itself — as a debt the future owes the past. One question separates them cleanly. Would a stranger with the same information and no history fund this tomorrow?',
        'It is also worth pulling apart two things that get used interchangeably. The sunk cost fallacy is a static error: one decision, contaminated by one irrecoverable cost. Escalation of commitment, which is Barry Staw’s territory, is a dynamic process — a sequence of decisions in which each fresh commitment is made by someone who now owns all the previous ones, under feedback that is rarely clean enough to settle anything. The first is a puzzle you can solve on paper. The second is a system that eats organisations, and it needs entirely different tools.',
      ],
      example: {
        label: 'The ninety-per-cent trap',
        body: 'Notice how much work “ninety per cent complete” does in the airline problem. It is not a statement about the future — the last ten per cent of a hard engineering programme routinely costs more than the first ninety. It is a statement about the past wearing the costume of a forecast. Progress-to-date is the most common smuggling route for sunk cost, precisely because it sounds like a projection while carrying no information about the only two things that matter: what it will cost from here, and what it will be worth when it lands.',
      },
    },
    {
      heading: 'The rule that is usually right',
      body: [
        'The instinct is not arbitrary. Do-not-waste is one of the most useful rules a resource-constrained animal can carry, and it earns its place a hundred times for every time it misfires. Finish the food. Finish the shelter. Do not abandon the half-built thing on the first discouraging afternoon, because most half-built things look bad in the middle. Someone who reverses course at every negative signal accomplishes nothing and, worse, becomes useless as a partner — persistence is what makes a commitment worth anything to anybody else.',
        'Hal Arkes and Peter Ayton pushed this further, and their argument is the most interesting thing in the literature. Reviewing the comparative work, they found that non-human animals and young children show sunk-cost behaviour far more weakly than adult humans do. That is the reverse of what you would expect from a deep, hard-wired bias. Their conclusion was that the effect is largely a learned over-application of do-not-waste: we are taught it hard, we generalise it past its domain, and the generalisation is what costs us.',
        'That picture has since been complicated, and it is worth knowing how. Foraging-style experiments in which the investment is time spent waiting rather than money already paid do produce sunk-cost-like persistence in rodents as well as people. So the clean claim that only humans do this is too strong. What survives is the more useful version: the effect is at least partly a rule you were taught, which means it responds sharply to how a decision is framed and who is in the room — in a way a hard-wired reflex would not.',
      ],
    },
    {
      heading: 'The loop that does the damage',
      body: [
        'Escalation runs on a specific cycle, and naming its parts is what makes it interruptible. It starts with a commitment made publicly by an identifiable person. Then feedback arrives, and this is the essential ingredient: the feedback is ambiguous. Not catastrophic, not good — mixed enough that both stories remain tellable. The decision-maker resolves the ambiguity in the direction that protects the original choice, allocates more resource to prove it, and the fresh resource generates another round of ambiguous evidence. Every turn makes retreat more expensive than the last.',
        'Staw built the experiment that isolated the active ingredient. Participants played a manager allocating research funds to a division of a company, received results, then got a second allocation decision. Half had made the original allocation themselves; half had inherited someone else’s. The people who had made the first call put substantially more money into the division that had subsequently performed badly. Same numbers, same evidence, different amount of personal authorship — and authorship, not information, moved the money.',
        'The second half of the loop is goalpost migration. Because the original objective is now visibly out of reach, the objective quietly changes. A programme that was going to transform the customer experience becomes one that will consolidate three legacy systems, which becomes one that will at least give us a clean data model. Nobody lies. The success criterion simply drifts toward whatever the project is still capable of delivering, and each new criterion makes the next tranche of funding defensible on its own terms.',
      ],
      example: {
        label: 'Concorde',
        body: 'The Anglo-French supersonic programme is the standard case, and it is instructive because the commercial verdict arrived early. Order books thinned, the operating economics never worked, and the overland sonic-boom restrictions that killed the profitable route map were foreseeable long before the aircraft entered service. Both governments continued. Cancellation meant two national administrations publicly conceding a decade of highly visible expenditure and a treaty commitment, in front of each other. Richard Dawkins and Tamsin Carlisle later borrowed the name for the general error, which is how “the Concorde fallacy” entered the literature.',
      },
    },
    {
      heading: 'It is usually rational for the person doing it',
      body: [
        'This is the section that changes what you actually do, so take it slowly. The standard framing treats escalation as a bias — an error in the head of a manager who has not grasped that sunk costs are sunk. Inside organisations that framing is usually wrong, and it produces interventions that fail. The executive asking for another thirty-five million after eighty is very often not confused about economics. He is solving a different problem, and solving it correctly.',
        'Consider his actual payoff. Kill the project today and the loss crystallises this quarter, it has a name and a face, and the name is his. Fund it for another two years and the loss is larger but diffuse, shared with a successor, and there remains some probability — small, not zero — that it comes good and he is vindicated. He may well have moved on before it lands. Slow failure dominates fast failure from where he is standing, even while fast failure dominates for the firm. That is a plain principal-agent conflict, and formal models in accounting and economics have shown that reputation protection under asymmetric information can make continuation individually optimal with no cognitive error required at all.',
        'This is why sunk-cost training does so little. You are teaching people a rule they already know, to solve a problem they do not have. Seniority makes it worse rather than better: the more visible your authorship of the original decision, the more of your reputation sits as collateral against it, and the more expensive candour becomes. The people with the best information about a failing programme are systematically the people with the most to lose by saying so.',
        'The operational consequence is uncomfortable. You do not fix escalation by making people smarter. You fix it by changing who decides, what they are rewarded for, and whether the truth can be spoken without someone being destroyed for speaking it.',
      ],
    },
    {
      heading: 'The switches',
      body: [
        'Escalation is not uniform, and that is what makes it manageable. It intensifies when the decision-maker personally authored the original commitment, when that commitment was made publicly, when feedback is ambiguous rather than clearly bad, when the project is described as nearly complete, and when the person deciding expects to be in post for any upside but not for the downside. Sleesman and colleagues pooled several decades of escalation studies and mapped this family of moderators; the pattern is stable enough to design against deliberately.',
        'The most reliable de-escalation device observed in the wild is turnover. Staw, Barsade and Koput tracked bank executives and problem loans over time and found that recognition and write-off of bad loans increased following changes at the top: arriving executives could book losses that incumbents, who had authored the lending, would not. You do not need to fire anyone to exploit this. You can manufacture the same effect by handing the continue-or-kill recommendation to someone with no authorship, or by requiring the original sponsor to argue the kill case rather than the continuation.',
        'The other lever is the exit narrative. People escalate hardest when quitting carries no story except failure. Give the retreat a name — the spend bought information, the option was priced and it has expired, the market moved underneath us — and the cost of stopping falls sharply. This is not spin when it is true, and it usually is: a programme that ran eighteen months and produced a clear negative answer did in fact buy an answer nobody had.',
      ],
    },
    {
      heading: 'When persisting is the right call',
      body: [
        'The failure mode of this concept is people who have just learned it. “Sunk cost” becomes a rhetorical club, and it kills good projects. Plenty of investments look identical to escalation from the outside and are nothing of the kind: anything with a genuine J-curve, anything on a learning curve where unit costs are still falling, anything where current spend is buying a real option that has not yet expired, and anything where being known as an organisation that finishes what it starts is worth more than the cost of this particular finish.',
        'The distinguishing question is never how much has been spent. It is whether the forecast has moved, in which direction, and on what evidence. A project that is behind schedule but whose central estimate of eventual value is unchanged is not escalating; it is late. A project whose central estimate has fallen at every review for two years while funding rose is escalating regardless of how good this quarter’s story sounds. Track the forecast rather than the spend and the two stop looking alike.',
        'One more limit worth holding. An outsider’s low valuation of a project is not automatically the correct one. Sometimes the sponsor genuinely knows something you do not, and the case sounds thin because the load-bearing evidence is tacit, commercially sensitive, or three layers down in an org chart. Before you invoke sunk cost, make them show you the forecast and its history. If the forecast has held, you are looking at conviction. If it has quietly migrated, you are looking at the loop.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'The case for continuing leads with what has already been spent rather than what will be earned.',
      meaning: 'The forward-looking number either does not exist or does not survive being said aloud. Ask for it directly and watch what happens.',
    },
    {
      signal: 'The project has been described as “nearly there” at three consecutive reviews.',
      meaning: 'Progress-to-date is being used as a forecast. Percentage complete carries no information about remaining cost or eventual value.',
    },
    {
      signal: 'The success criterion has changed and nobody announced the change.',
      meaning: 'Goalpost migration. The objective is drifting toward whatever the programme can still deliver, which makes each new tranche locally defensible.',
    },
    {
      signal: 'The person requesting more money is the person who requested the original money.',
      meaning: 'Authorship is the single strongest amplifier of escalation. This is a governance problem before it is a judgement problem.',
    },
    {
      signal: 'Bad news about the project arrives late, softened, and only when it becomes unavoidable.',
      meaning: 'The information channel is already compromised. People are managing the sponsor’s exposure, which means the evidence reaching you is filtered.',
    },
    {
      signal: 'You feel a flash of irritation when someone suggests stopping something you started.',
      meaning: 'That is the reputational cost being computed, not the economics. Catch it there, before you dress it up as analysis.',
    },
  ],
  playbook: [
    {
      move: 'Reset the decision to zero, out loud.',
      how: 'Put the actual sentence in the room: “The twelve million is gone whether we fund this today or kill it today. The only live question is whether three million of fresh cash into this beats every other use of three million we have.”',
      watchOut: 'Say it about the decision, never about the person who made it. The moment it reads as an audit of someone’s judgement, they stop computing and start defending.',
    },
    {
      move: 'Move the decision to someone with no authorship.',
      how: 'Have the continue-or-kill recommendation written by a person who was not in the original approval — another function, a new hire, an outside reviewer. Turnover is the most reliable de-escalation mechanism seen in the field, and you can simulate it deliberately.',
      watchOut: 'The reviewer needs real standing and a real mandate, or the exercise becomes theatre that legitimises the escalation instead of interrupting it.',
    },
    {
      move: 'Reframe the spend as purchased information.',
      how: '“You did not make a mistake last year. You bought an answer we could not get any other way, and the answer turned out to be no. Let us bank it and redeploy.” This is the single most effective sentence for making retreat survivable, and it is usually true.',
      watchOut: 'It only works if you mean it and it holds afterwards. Use it once cynically and it becomes a known euphemism for “you failed,” and then it never works again.',
    },
    {
      move: 'Write the kill criteria before you commit.',
      how: 'At funding, name the specific observable that would mean stop — conversion below a stated level by month six, cost per unit above a stated ceiling. Pre-commitment works because the person writing it does not yet own the outcome.',
      watchOut: 'Kill criteria get renegotiated at the exact moment they trigger. Fix in advance who may waive them, and make waiving them a visible, minuted act.',
    },
    {
      move: 'Track the forecast, not the spend.',
      how: 'Keep a running record of the project’s estimated eventual value at every review and put the whole series on one page. A central estimate that has fallen at each review while funding rose is escalation, whatever this quarter’s narrative claims.',
    },
    {
      move: 'Make a well-run cancellation career-positive, visibly.',
      how: 'Promote or publicly credit someone for stopping something well. Escalation is a rational response to an incentive, so the only durable fix is changing what happens to people who stop things. One visible example changes more behaviour than a year of training.',
      watchOut: 'If the next few people who cancel projects are quietly sidelined, everybody notices within a quarter, and the policy is dead for a decade.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Any continued investment in a struggling project is the sunk cost fallacy.',
      correction: 'The fallacy is invoking past spend as a reason. Continuing because forward-looking expected value is still positive — a live option, a learning curve, a J-curve that has not turned yet — is ordinary investing. The test is whether the forecast has moved, not whether the project is late.',
    },
    {
      misread: 'People escalate because they do not understand that sunk costs are sunk.',
      correction: 'Most senior people understand it perfectly. In organisations escalation is frequently the individually rational move: slow, shared, deniable failure beats fast, personal, crystallised failure for the person deciding. That is a principal-agent problem, and education does not touch it.',
    },
    {
      misread: 'It is a hard-wired evolutionary bias.',
      correction: 'Arkes and Ayton found the effect weak or absent in non-human animals and young children, and argued it is an over-generalised do-not-waste rule that we are taught. Later foraging work in rodents complicates that, but the effect remains highly sensitive to framing and social context — which is exactly what makes it manageable.',
    },
    {
      misread: 'Cutting losses fast is always the disciplined choice.',
      correction: 'Chronic early abandonment is its own pathology and it is expensive in a different currency. It destroys the credibility that makes long-horizon commitments possible, and it guarantees you never reach the part of any learning curve where the returns actually are.',
    },
    {
      misread: 'Naming the bias in the meeting will fix it.',
      correction: 'Saying “that is sunk cost” to a sponsor in public raises the reputational stakes of retreat, which is the exact variable driving the escalation. It reliably produces a better-argued continuation. Change the decider or the exit narrative instead.',
    },
  ],
  evidence: [
    {
      source: 'Arkes & Blumer, “The Psychology of Sunk Cost” (1985)',
      finding: 'The founding series. Theatre patrons randomly assigned a discount on a season ticket attended fewer plays early in the season than those who paid full price — random assignment rules out self-selection. In a separate scenario study, most respondents chose to complete a hopeless aircraft programme described as nearly finished, while only a small minority funded the identical decision presented with no prior spending.',
    },
    {
      source: 'Staw, “Knee-Deep in the Big Muddy” (1976)',
      finding: 'The experiment that isolated personal responsibility. Participants who had personally made an initial resource allocation committed substantially more to that same unit after it performed poorly than participants who inherited the decision from someone else. Authorship, not information, drove the escalation.',
    },
    {
      source: 'Arkes & Ayton, “The sunk cost and Concorde effects” (1999)',
      finding: 'Reviewed the comparative literature and concluded that non-human animals and young children show sunk-cost behaviour far more weakly than adult humans, proposing the effect is an over-generalisation of a learned do-not-waste rule rather than a deep evolved reflex.',
      caveat: 'The strong version of this claim has been challenged since. Foraging paradigms in which the investment is time spent waiting do produce sunk-cost-like persistence in rodents, so the effect is not uniquely human. The framing-sensitivity conclusion survives; “only people do this” does not.',
    },
    {
      source: 'Staw, Barsade & Koput, bank executives and problem loans (1997)',
      finding: 'A longitudinal field study of banks found that recognition and write-off of bad loans increased following turnover among senior executives. New decision-makers booked losses that incumbents, who had authored the lending, would not.',
      caveat: 'Field data of this kind is observational. Executive turnover is not randomly assigned and may itself follow deteriorating performance, so the direction is well argued rather than experimentally established.',
    },
    {
      source: 'Sleesman et al., meta-analytic review of escalation determinants (2012)',
      finding: 'Pooled several decades of escalation research and mapped the moderators that consistently matter: personal responsibility for the initial choice, public commitment, ambiguity of feedback, and proximity to completion among them. The phenomenon is robust; its intensity is highly conditional.',
    },
    {
      source: 'Kanodia, Bushman & Dickhaut, and the agency literature on escalation',
      finding: 'Formal models in which continuing a failing project is individually optimal for a manager protecting a reputation under asymmetric information. Escalation can be rational for the agent and irrational for the firm at the same time, with no cognitive error anywhere in the chain.',
    },
    {
      source: 'Dawkins & Carlisle, “Parental investment, mate desertion and a fallacy” (1976)',
      finding: 'Coined “the Concorde fallacy” while arguing that animals should not be expected to base future parental investment on investment already made. The name attached itself to the human version, somewhat against the authors’ original point.',
    },
    {
      source: 'Overall replication status of the core effect',
      finding: 'The basic sunk-cost effect in humans is among the more dependable findings in behavioural decision research, appearing across money, time and effort, in laboratory and field settings, and across cultures.',
      caveat: 'Effect sizes vary widely with framing, domain and elicitation method, and much of the applied organisational literature is quasi-experimental rather than randomised. Treat the direction as solid and any specific magnitude as context-dependent.',
    },
  ],
  takeaways: [
    'A cost is only sunk if it is both unrecoverable and uninformative. Almost every real argument is about the second condition, not the first.',
    'Authorship is the amplifier. The person who made the original call is least able to kill it, and usually holds the best information about it.',
    'Inside organisations escalation is often rational for the individual and irrational for the firm. That is an incentive problem, not a knowledge problem.',
    '“Ninety per cent complete” is a statement about the past wearing the costume of a forecast. Ask for remaining cost and eventual value instead.',
    'Track the forecast across reviews rather than cumulative spend. A central estimate falling while funding rises is the signature of the loop.',
    'Give the retreat a name and an owner who can survive it. People escalate hardest when stopping carries no story except personal failure.',
  ],
};
