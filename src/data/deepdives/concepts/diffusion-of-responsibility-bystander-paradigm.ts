import type { DeepDive } from '../../../types/curriculum';

/** #20 · Sphere 2 · Diffusion of Responsibility & The Bystander Paradigm */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'You are filling in a questionnaire in a small waiting room. A thin stream of smoke starts drifting through a vent in the wall. Within a few minutes the room is hazy enough to sting your eyes and blur the far wall. What do you do? When Latané and Darley ran this in the late 1960s, three quarters of the people sitting alone got up and reported it. When two other people were in the room — confederates instructed to glance at the smoke, shrug, and keep writing — one in ten did. The rest sat in a room filling with smoke, rubbing their eyes, waving it away from their faces, and finished the questionnaire.',
  sections: [
    {
      heading: 'Three mechanisms wearing one name',
      body: [
        'The label everybody remembers is diffusion of responsibility. Latané and Darley’s own model contains three separate processes, and diffusion is only one of them. Getting the distinction right matters, because the three have completely different antidotes and prescribing the wrong one wastes the intervention.',
        'The first is diffusion proper: the felt duty to act divides across everyone who could act. It requires that you know others are present and capable, and it is the mechanism people usually mean. The second is evaluation apprehension: the fear of looking foolish, of overreacting, of being the person who called the fire brigade about a bit of steam. This one gets worse as the audience gets more competent, which has an ugly implication we will come back to. The third is pluralistic ignorance: everyone else looks calm, so you conclude this is not an emergency — while every other person in the room is drawing exactly the same conclusion from your calm face. Nobody in the room believes it is fine. The room collectively believes it is fine.',
        'In the smoke study, pluralistic ignorance is doing most of the work. The participants were not coldly reasoning that someone else would report it. They were looking at two people who appeared unbothered and revising their own read of the situation downwards. That is why the intervention “assign an owner” would have done nothing there. You cannot assign ownership of a problem the group has not agreed exists.',
        'Latané and Darley also laid out a five-step chain that must complete before anyone helps: notice the event, interpret it as an emergency, assume personal responsibility, know what to do, and act. Only one of those steps is about responsibility. Before deploying an accountability fix, work out which link is broken — four times out of five it is a different one.',
      ],
    },
    {
      heading: 'Why hesitating was the right default',
      body: [
        'Reverse the error costs from the usual evolutionary story and this stops looking like a defect. Intervening in an ambiguous situation risks physical danger, social humiliation, and being publicly wrong in front of people whose opinion you need. Waiting one beat to see what others do costs almost nothing — provided the others actually know something.',
        'And usually they do. Social referencing is a genuinely good inference procedure. In a group where other people plausibly have information you lack, copying their read of a situation is not laziness; it is a sensible use of distributed knowledge. The failure mode is specific and slightly beautiful: everybody is running the same procedure on everybody else, so the group converges on a conclusion that no individual member holds. It is an information cascade compressed into fifteen seconds and conducted entirely through faces.',
        'There is a hierarchy version too. In a structured group with a visible leader, waiting is often correct — acting unilaterally in an organisation with a chain of command has real costs, and people learn that quickly. Which means the effect is frequently strongest in exactly the settings organisations care most about: capable teams with a senior person present. The more legitimate the structure, the better the reasons for waiting, and the longer the wait.',
      ],
    },
    {
      heading: 'The move: convert a set into an individual',
      body: [
        'The single highest-leverage sentence available to you is one that reassigns the audience into an actor. Not “somebody call an ambulance” but “you, in the blue jacket — call an ambulance, and come back and tell me you got through.”',
        'Every component of that sentence is doing work. Pointing and describing removes the ambiguity about who is being addressed, which collapses the diffusion to a single person. Naming the specific action removes step four of the chain, knowing what to do. And the instruction to report back closes the loop, which is the part almost everyone omits — without it, a person can believe they have discharged their duty by starting, and you never learn that the call did not connect.',
        'This is not folk advice. It is codified in first-aid and resuscitation training because the failure it prevents is so predictable, and closed-loop communication — an instruction directed at a named person and explicitly acknowledged back — is standard in how resuscitation and aviation crews are trained. Those fields did not adopt it for elegance. They adopted it because competent people standing near an emergency reliably fail to start.',
        'The organisational translation is direct and mostly ignored. A task in a channel with three hundred people is a task with no owner. Any sentence containing “the team will”, “we should”, or “someone needs to” is the corporate form of “somebody call 911”. The fix is a name, a verb, a date, and an acknowledgement from that named person. Everything else is a wish.',
      ],
      example: {
        label: 'The vulnerability nobody owned',
        body: 'A serious security advisory is posted in a channel with three hundred engineers. Most of them read it. It collects a dozen eyes-emoji reactions. Nobody acts, and forty-eight hours later it is exploited. Both mechanisms pointed the same way. Each reader carried roughly one three-hundredth of the felt duty, because clearly someone on the platform team owns this. And each faced a three-hundred-person audience for the embarrassment of escalating something already patched. The reaction emoji is the perfect artefact of that state: it discharges the feeling of having responded without producing action, and it makes the channel look, to everyone else, as though the matter is handled.',
      },
    },
    {
      heading: 'Experts freeze harder, not less',
      body: [
        'Evaluation apprehension scales with the perceived expertise of the audience. The more competent the people watching, the more expensive a false alarm becomes, and the more the cost falls specifically on the people best equipped to judge. This produces the worst possible distribution: in a room full of specialists, the person most qualified to raise the alarm is the person with the most to lose by raising it wrongly.',
        'Seniority creates a symmetric wait. Junior people hold back because they assume a senior person has seen it and judged it unimportant. Senior people hold back because they assume a junior person closer to the detail would have escalated it if it mattered. Both inferences are reasonable. Both are wrong. And neither party ever discovers the mistake, because the situation resolves itself one way or the other and nobody audits the silence.',
        'Training does not remove the freeze; it supplies a script to run while frozen. That is the honest description of what checklists, callouts and role assignment actually do. Aviation and emergency medicine did not build explicit verbal protocols because their people lack composure. They built them because composure is not what makes someone start, and a rehearsed first sentence is.',
        'There is one encouraging finding. Beaman and colleagues found in 1978 that students who had attended a lecture on bystander intervention were more likely to help in a staged emergency two weeks later. It is a single small study from a long time ago and should be held loosely. But the mechanism is plausible: much of the failure is a failure to recognise the situation as an instance of anything, and a name makes a pattern recognisable. Telling a team about this effect is one of the very few pieces of psychology education that may actually change behaviour.',
      ],
    },
    {
      heading: 'The conditions that switch it on and off',
      body: [
        'Ambiguity is the master variable. When it is unmistakable that something is wrong, the effect shrinks dramatically. Fischer and colleagues, in a meta-analysis of more than a hundred studies, found the effect confirmed overall but substantially attenuated — and in some conditions reversed — when the emergency was clearly dangerous, a perpetrator was present, or bystanders could physically assist. In a genuine physical emergency other people stop being competitors for responsibility and start being potential support. More bystanders means better odds, not worse.',
        'Visibility and identifiability cut in opposite directions, and both are levers. Diffusion needs you to know that other capable people are present, which is why the same crisis raised one-to-one on a phone call gets acted on immediately and raised in a group thread does not. But if the group knows who you are and will remember you were there, the effect weakens again — anonymity strengthens it. That combination is why large open channels are structurally worse than small named groups for anything that requires someone to move.',
        'Relationship matters, and the effect is large. Latané and Rodin found the inhibition largely vanished when the other bystander was a friend rather than a stranger — roughly seven in ten helped when alone, well under one in ten with a passive stranger, and back to alone-levels with someone they knew. Friends can resolve ambiguity out loud; they can say “is that normal?” to each other. Strangers cannot, so they resolve it by watching each other stay still.',
        'Competence matters too. Being the only person who plausibly can act eliminates diffusion completely, which makes “who here has handled one of these before?” unusually powerful: either it recruits someone qualified, or the silence establishes that you are the only candidate and the freeze breaks on its own.',
      ],
      example: {
        label: 'The friend condition',
        body: 'The single cheapest counter-measure available to an individual is to bring the ambiguity into the open with one other person. Say out loud, to someone specific: “That does not look right to me — am I reading this wrong?” It costs almost nothing, it converts a stranger into a temporary ally, and it directly attacks pluralistic ignorance by making one person’s private read public. In the studies, this is roughly the difference between the friend condition and the stranger condition, and it is the largest single effect in the paradigm that an individual can produce unilaterally.',
      },
    },
    {
      heading: 'The famous story was wrong; the science mostly is not',
      body: [
        'This entire research programme was launched by a story that did not happen the way it was told. The 1964 New York Times account of the murder of Kitty Genovese in Queens reported that thirty-eight witnesses watched the attack and did nothing. That is substantially inaccurate. Most neighbours heard rather than saw; the attack occurred in two episodes with the second largely out of view; at least one neighbour shouted and briefly drove the attacker off; the police were called; and a neighbour went to Genovese and stayed with her. Manning, Levine and Collins documented the gap formally in 2007, and the newspaper itself has since acknowledged the original story was flawed. If you have been telling the thirty-eight-witnesses version, stop.',
        'The experiments do not depend on the parable, and they hold up better than most of what social psychology published in that era. The seizure study found eighty-five percent of participants who believed they were alone with the victim reported the emergency during the fit, sixty-two percent with one other bystander, and thirty-one percent when they believed four others were present. The smoke and falling-bookcase studies point the same way, and more than a hundred subsequent studies support the effect.',
        'Two corrections change how you should use it. The first is the dangerousness reversal above. The second is more important and less known: analysis of closed-circuit footage of real public conflicts across three cities found at least one bystander intervened in roughly nine out of ten, and the more bystanders present, the more likely someone intervened. That is not a refutation of the lab work — both are true at once. The probability that any given individual acts falls as the crowd grows, while the probability that at least one acts rises, because there are more draws. The lab tells you about your own likely behaviour; the footage tells you about the world.',
        'The last limit is where this concept gets stretched furthest. A six-month initiative dying in a committee is not a three-minute emergency, and the seizure study does not explain your roadmap. What transfers is narrow: responsibility not assigned to an individual is not owned, and named accountability outperforms collective intent. That claim is well supported — by an entirely different literature on goal setting and accountability. Use the bystander studies for the freeze in the moment, and the accountability research for the committee.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'A request is addressed to a group rather than a person — “can someone look at this?”',
      meaning: 'Responsibility has been divided by the size of the audience. The larger the group, the lower each person’s felt duty and the higher the chance of zero action.',
    },
    {
      signal: 'People are reacting to a problem rather than acting on it — emoji, acknowledgements, “good catch”.',
      meaning: 'Acknowledgement discharges the feeling of having responded without producing action, and it signals to everyone else that the matter is being handled.',
    },
    {
      signal: 'Everyone in the room is glancing at everyone else and nobody is moving.',
      meaning: 'Pluralistic ignorance in progress. Each person is inferring from the others’ stillness that this is not an emergency, and supplying evidence for the same inference in return.',
    },
    {
      signal: 'The most qualified person present is the quietest.',
      meaning: 'Evaluation apprehension scales with audience expertise. The person best able to judge also has the most to lose from a false alarm, so competence suppresses rather than enables action here.',
    },
    {
      signal: 'You catch yourself thinking “surely someone has already dealt with this.”',
      meaning: 'That thought is the mechanism, verbatim, running in your own head. Treat it as a trigger to check rather than as a conclusion — it is almost never based on evidence.',
    },
    {
      signal: 'An initiative has a steering group, a working group, and no single named owner.',
      meaning: 'Structure has been mistaken for ownership. Ask who personally is accountable if it misses the date, and watch how long the pause is.',
    },
  ],
  playbook: [
    {
      move: 'Point, name, instruct, and demand a return.',
      how: '“John — call the ambulance now, then come back and tell me you got through.” Four elements: an identified person, a single action, immediacy, and a closing acknowledgement. Dropping the last one is the most common error, because it lets someone believe starting was finishing.',
      watchOut: 'If you name someone who cannot do the task, you have created a new failure with a name on it. Assign to capability, not to proximity.',
    },
    {
      move: 'Break pluralistic ignorance by saying what you see, out loud, to one person.',
      how: '“That does not look right to me — am I reading this wrong?” Directed at a specific individual, not the room. It costs almost nothing, it makes one private read public, and it converts a passive stranger into a temporary ally.',
      watchOut: 'Addressed to the room in general, it becomes another unassigned request and dissolves. The whole value is in choosing one pair of eyes.',
    },
    {
      move: 'Lower the cost of a false alarm before you need people to raise one.',
      how: 'Say it and repeat it: “I would rather be interrupted ten times for nothing than miss one real thing. Nobody here will be criticised for escalating something that turned out to be fine.” Then, the first time someone escalates a non-issue, thank them publicly and specifically.',
      watchOut: 'One sarcastic reaction to a false alarm destroys the policy permanently, and nobody will tell you it happened. The public thank-you is the whole mechanism, not decoration.',
    },
    {
      move: 'Eliminate the plural from every commitment.',
      how: 'Ban “the team will”, “we should” and “someone needs to” in writing. Replace with name, verb, date. “Priya will publish the rollback plan by Thursday 5pm.” Then require Priya to acknowledge in her own words, so the assignment is closed rather than broadcast.',
      watchOut: 'Do not turn this into blame allocation. Naming an owner works because it makes action clear; if it becomes a way of pre-selecting who gets punished, people learn to avoid being named at all.',
    },
    {
      move: 'Ask who has done this before.',
      how: '“Who here has handled one of these?” Either it surfaces a qualified person and you assign to them immediately, or the silence establishes that nobody has, which removes your excuse for waiting and usually breaks your own freeze.',
      watchOut: 'Ask once and act on the answer within a minute. Asking and then continuing to discuss converts a decision point into a discussion, which is where these things die.',
    },
    {
      move: 'Teach the pattern to the team, by name.',
      how: 'Run twenty minutes on the smoke study, the seizure study and the CCTV correction. The evidence that education helps is thin and old, but the failure is one of recognition, and a label makes a pattern recognisable.',
      watchOut: 'Do not present the thirty-eight-witnesses version of the Genovese story. It is inaccurate, someone in the room will know, and it will cost you the credibility of everything else you said.',
    },
  ],
  commonMisreads: [
    {
      misread: 'The bystander effect proves people are callous.',
      correction: 'It is a mixture of ambiguity resolution, fear of public error, and divided duty — none of which is indifference. Participants in these studies were visibly distressed while failing to act. And in real recorded public conflicts, someone intervenes roughly nine times out of ten.',
    },
    {
      misread: 'Thirty-eight people watched Kitty Genovese be murdered and did nothing.',
      correction: 'The original newspaper account was substantially wrong. Most neighbours heard rather than saw, a witness shouted and drove the attacker off, police were called, and a neighbour went to her. The parable was inaccurate; the experiments it inspired stand on their own evidence.',
    },
    {
      misread: 'More bystanders always means less chance of help.',
      correction: 'That holds for any given individual, not for the group. Meta-analysis shows the effect attenuates and can reverse in clearly dangerous emergencies, and real-world footage finds intervention becoming more likely as crowd size grows. Individual-level and group-level probabilities move in opposite directions.',
    },
    {
      misread: 'It is all diffusion of responsibility, so assigning an owner always fixes it.',
      correction: 'Three mechanisms share the name. Diffusion responds to naming an owner. Evaluation apprehension responds to lowering the cost of being wrong. Pluralistic ignorance responds to one person saying out loud what they see. Applying the wrong remedy achieves nothing.',
    },
    {
      misread: 'Committee paralysis in an organisation is the bystander effect.',
      correction: 'It rhymes, but a six-month initiative is not a three-minute emergency and the studies do not extend that far. The defensible claim — unassigned responsibility is unowned responsibility — comes from the accountability and goal-setting literature. Cite that for the committee and the bystander work for the freeze.',
    },
  ],
  evidence: [
    {
      source: 'Darley & Latané, “Bystander intervention in emergencies” (1968)',
      finding: 'Participants who believed they were the only other person present reported an apparent seizure eighty-five percent of the time during the fit; sixty-two percent with one other believed bystander; thirty-one percent when they believed four others were present. The difference showed up in speed as much as in whether help ever came.',
    },
    {
      source: 'Latané & Darley, the smoke-filled room (1968)',
      finding: 'Seventy-five percent of participants alone reported smoke entering the room. With two passive confederates present who ignored it, roughly ten percent did — many staying in a visibly hazy room to complete a questionnaire.',
    },
    {
      source: 'Latané & Rodin, the falling bookcase (1969)',
      finding: 'About seven in ten participants alone went to help after hearing a woman fall in the next room. With a passive stranger present, well under one in ten did. With a friend present, helping returned close to the alone rate — friends can resolve ambiguity by talking to each other.',
    },
    {
      source: 'Latané & Darley’s five-step decision model',
      finding: 'Helping requires five things in sequence: noticing, interpreting the event as an emergency, assuming responsibility, knowing what to do, and acting. Three separable processes suppress it — diffusion of responsibility, evaluation apprehension, and pluralistic ignorance — and only the first is about responsibility.',
    },
    {
      source: 'Fischer et al., meta-analytic review of bystander intervention (2011)',
      finding: 'Across more than a hundred studies the effect was confirmed, but substantially reduced and in some conditions reversed when the emergency was clearly dangerous, a perpetrator was present, or bystanders could physically help — in real danger, other bystanders read as support rather than as substitutes.',
    },
    {
      source: 'Philpot, Liebst, Levine, Bernasco & Lindegaard, CCTV analysis of public conflicts (2020)',
      finding: 'Examining real recorded conflicts in Amsterdam, Lancaster and Cape Town, at least one bystander intervened in roughly nine out of ten incidents, and larger numbers of bystanders were associated with a higher likelihood of someone intervening.',
      caveat: 'This does not overturn the laboratory finding. Individual probability of acting can fall while group probability of at least one intervention rises. The two literatures answer different questions and both answers are correct.',
    },
    {
      source: 'Manning, Levine & Collins, “The parable of the 38 witnesses” (2007)',
      finding: 'Documented that the newspaper account which launched this research programme was substantially inaccurate — the number of genuine eyewitnesses was far smaller, at least one neighbour intervened vocally, police were contacted, and a neighbour went to the victim.',
      caveat: 'The correction is about the founding anecdote, not the experiments. The experimental effect is independently supported and is one of social psychology’s more robust findings.',
    },
    {
      source: 'Beaman, Barnes, Klentz & McQuirk, education and helping (1978)',
      finding: 'Students who had attended a lecture on bystander intervention were more likely to help in a staged emergency two weeks later than those who had not.',
      caveat: 'A single small study, now decades old, with no large modern replication that I would rely on. Treat it as suggestive rather than established — though the underlying mechanism, that naming a pattern makes it recognisable, is plausible and cheap to act on.',
    },
  ],
  takeaways: [
    'Three different processes share this concept’s name, and they have three different fixes. Work out whether you are looking at divided duty, fear of a false alarm, or a room misreading each other’s calm.',
    'A request addressed to a group is a request addressed to nobody. Point, name, give one verb, and require a report back — the last step is the one people skip.',
    'Ambiguity is the master variable. In unmistakable emergencies the effect shrinks and can reverse, because other bystanders become help rather than substitutes.',
    'Expertise makes it worse, not better: the more competent the audience, the more expensive a false alarm, and the quieter the person best qualified to raise it.',
    'The Kitty Genovese story as popularly told is not accurate. Do not use it. The experiments hold up without it.',
    'For any given person, a crowd lowers the chance they act. For the crowd as a whole, it raises the chance somebody does. Both are true, and they answer different questions.',
  ],
};
