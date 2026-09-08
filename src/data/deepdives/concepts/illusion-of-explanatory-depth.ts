import type { DeepDive } from '../../../types/curriculum';

/** #08 · Sphere 1 · The Illusion of Explanatory Depth (IOED) */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'Draw a bicycle. Not artfully — just the frame, the pedals, the chain, and which wheel the chain actually drives. Rebecca Lawson ran this exact task with hundreds of adults and collected drawings of machines that could not steer, could not be pedalled, or had the chain looped around both wheels. Regular cyclists made errors too. Nothing about your knowledge changed in the last twenty seconds. What changed is that someone asked you to produce it, and production is a completely different operation from recognition. The gap between the confidence you had before you picked up the pen and the confidence you have now is the most exploitable asymmetry in any room where people decide about systems.',
  sections: [
    {
      heading: 'The illusion has a narrow target',
      body: [
        'Leon Rozenblit and Frank Keil ran the same loop a dozen ways. Rate how well you understand how a zipper works. Now write a detailed, step-by-step causal explanation of one. Now rate yourself again. Ratings fall, and they stay fallen even after participants are shown a correct expert account. The self-assessment was not stubborn. It simply had nothing behind it.',
        'The precision most people lose is that this is not general overconfidence. Rozenblit and Keil compared explanatory knowledge against facts, procedures and narratives, and the collapse was specific. Ratings of a capital city or a recipe barely move. Ratings of a mechanism with interacting parts fall off a cliff. The illusion attaches to causal systems, which is exactly the class of thing organisations make decisions about.',
        'The reason is structural. A fact has a determinate end state: you retrieve it or you do not, and the failure is immediate. An explanation has no end state. It can be given at any level of detail, and every level feels like a legitimate stopping point. So you never receive the signal that tells you where your knowledge actually terminates.',
        'What you possess is usually three things: the function, the label, and the ability to recognise a correct explanation when someone else supplies it. All three feel like understanding from the inside. None is the causal chain, and only the causal chain lets you predict what happens when the system is stressed, changed or scaled.',
      ],
    },
    {
      heading: 'You are a node, not a library',
      body: [
        'Treating this as a personal failing gets the engineering backwards. No individual has ever understood their own tools. The person who smelted the bronze did not grow the grain; the person who wrote the payments library did not design the card network. Frank Keil calls this the division of cognitive labour, and children map it early — they know which adult to ask about which question long before they can say why.',
        'The problem is that the boundary between what is stored in your head and what is stored in the network around you is not marked. Steven Sloman and Nathaniel Rabb showed that merely telling people scientists had discovered and understood a phenomenon raised those people’s ratings of their own understanding of it. Nobody had explained anything. Proximity to knowledge registered as possession of it.',
        'The modern amplifier is search, and the cost is calibration. You end up unable to tell which of your confident beliefs are load-bearing knowledge and which are pointers to someone else’s file — and a pointer cannot be interrogated under pressure.',
      ],
      example: {
        label: 'The seam that disappeared',
        body: 'Matthew Fisher, Mariel Goddu and Frank Keil found that people who had just used a search engine rated their own internal knowledge higher afterwards — including on unrelated questions they had not searched. Adrian Ward later found people misremember information they retrieved online as having come from their own memory. The mechanism appears to be that easy retrieval is stored as a feeling of competence, and the feeling is not tagged with where the answer came from.',
      },
    },
    {
      heading: 'The move: the label eats the mechanism',
      body: [
        'The specific operation is substitution of a functional label for a causal chain. You know what the thing is called and what it produces, and the fluency of the label — how smoothly it comes to mind, how often you have heard it used correctly — is read as depth. That reading is not a conscious inference. It is the same fluency-equals-truth shortcut that makes a polished slide feel truer than a rough one.',
        'The tell is level-flatness. A genuine mechanistic explanation descends: system, subsystem, the specific component that fails, what the failure looks like from outside. An illusory one stays at one altitude and moves sideways, restating the function in different words and adding adjectives instead of steps.',
        'This survives contact with reality because almost nobody is ever asked. Producing a mechanism is effortful, mildly humiliating when it fails, and socially coded as pedantic. In most organisations the person with the most authority is asked for mechanism least often of anyone, so their calibration has had the fewest chances to update.',
        'The damage lands in estimates. Timelines, costs, blast radius, who is affected and when are all outputs of a causal model. If the model is a label, the estimate is a guess wearing the clothes of an analysis — and it will be defended with the confidence appropriate to one.',
      ],
      example: {
        label: 'Just a toggle',
        body: 'A founder asks for a settings toggle that turns off email notifications for a customer’s whole organisation. Twenty minutes of work, obviously. The actual chain: the notification decision lives in a queue consumer, not the web app, so the flag must be readable from a second service; the flag is per-organisation but permissions are per-user, so someone must decide who can set it; already-queued messages have the old flag baked in; and the setting has to survive the nightly sync that overwrites organisation records from the CRM. None of that is visible from the front end, the only surface the founder has ever seen working.',
      },
    },
    {
      heading: 'Expertise makes it worse at the edges',
      body: [
        'The illusion is strongest where exposure is high and production is rare. That does not describe a novice; it describes an expert operating just outside their specialism. A cardiologist has heard a drug-interaction mechanism described a thousand times without once being made to produce it. A CFO has approved architecture spending for a decade. Familiarity is the fuel here, not ignorance, which is why credentials predict it so badly.',
        'Seniority also removes the correction mechanism. The higher you sit, the more your explanations are received rather than tested, and the more expensive it becomes for anyone to ask you to descend a level. Your position is not protecting you from the illusion. It is protecting you from finding out about it.',
        'Knowing the concept does not immunise you either. The illusion is generated at the moment of judgment, by the fluency of recognition, before any deliberate check could run — so you will still feel that you understand the next familiar system you meet. Being surrounded by capable people makes it worse, because a strong team feels from the inside like personal comprehension. Auditing every belief is unaffordable, so the skill here is triage, not vigilance.',
      ],
    },
    {
      heading: 'The switch is how, not why',
      body: [
        'Philip Fernbach and colleagues built the sharpest known lever on this. People rated their understanding of policies and stated their positions. One group then wrote a mechanistic explanation of how the policy would work; another listed their reasons for their position. The mechanism group came back with lower self-rated understanding and less extreme positions. The reasons group did not move.',
        'That asymmetry is why “why do you believe that” backfires. Reasons are a rhetorical resource you have in abundance — asking for them hands someone their strongest material and lets them rehearse it. Mechanism is a computation you can either perform or not. It does not invite an argument; it sets a task, which either completes or visibly stalls. That is also why “how” lands as curiosity and “why” lands as challenge.',
        'Other conditions move the switch predictably. Abstract framing inflates the illusion and concrete framing deflates it, which is the basis for asking who does what by when rather than what the strategy is. Writing deflates more than speaking, drawing more than writing, and teaching someone who will ask follow-up questions most of all — because the follow-ups are exactly the descent the illusion prevents.',
      ],
      example: {
        label: 'Mechanism versus reasons',
        body: 'The Fernbach policies were consequence-based ones: cap-and-trade, single-payer healthcare, merit pay for teachers, raising the retirement age. Participants asked to explain how a policy would produce its intended effect afterwards reported both lower understanding and more moderate positions, and in one study were less willing to donate to an advocacy group on the issue. Participants asked instead to enumerate their reasons showed no such softening. Same people, same topics; the only difference was which question they had to answer first.',
      },
    },
    {
      heading: 'The honest limits',
      body: [
        'The replication picture is split and you should carry the split, not the headline. The core finding — self-rated understanding collapses when people attempt a mechanistic explanation — is robust. The political-moderation extension has not held up: Jarret Crawford and John Ruscio ran preregistered replications of the Fernbach result and reproduced the drop in self-rated understanding but not the reduction in attitude extremity. Use mechanism questions to reveal what someone knows, not as a depolarisation technique.',
        'The boundary condition was in the original work anyway. Mechanism questions bite on positions held for consequentialist reasons, where there is plumbing to trace. They do nothing on positions grounded in values, where the honest answer to “how does that work” is that this is not what the position is about. Asking anyway reads as bad faith, and reasonably so.',
        'Inability to explain is also not evidence of being wrong. Much real competence is tacit — a mechanic who cannot narrate the combustion cycle can still diagnose your engine by sound. And deferring to distributed expertise is usually correct: you should believe the bridge will hold without personally checking the load calculations.',
        'When the mechanism genuinely is not in the room, trust track record on similar problems, whether the person’s past estimates were calibrated, and whether they can name the conditions under which they would turn out to be wrong. Someone who can specify their own failure modes has a model even if they cannot narrate it. Someone who cannot has a label.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'Asked how something works, the answer describes what it does.',
      meaning: 'Function has been substituted for mechanism. The speaker has the label and the output, not the chain between them.',
    },
    {
      signal: 'The explanation runs long but never gets more specific.',
      meaning: 'Level-flatness. A real causal account descends into components; an illusory one moves sideways adding adjectives.',
    },
    {
      signal: 'A confident timeline or cost with no named steps behind it.',
      meaning: 'The estimate is the output of a model that does not exist, and it will be defended with the confidence of an analysis.',
    },
    {
      signal: 'Someone cites the existence of experts or documentation as support for their own understanding.',
      meaning: 'The community-of-knowledge effect. Proximity to knowledge is registering as possession of it.',
    },
    {
      signal: 'Certainty rises as the conversation moves further from operational detail.',
      meaning: 'Abstraction inflates the illusion. The people closest to the plumbing are usually the least certain in the room.',
    },
    {
      signal: 'A request for step-by-step detail produces irritation rather than an answer.',
      meaning: 'The question was heard as a status challenge, which is what happens when there is nothing available to produce.',
    },
  ],
  playbook: [
    {
      move: 'Ask how, never why.',
      how: 'Say: “Walk me through what happens between the customer clicking that and the money landing in our account. Step by step, and tell me where it can stall.” Why invites a defence; how sets a task that either completes or visibly stalls.',
      watchOut: 'Asked twice in a row in public, this stops reading as curiosity and starts reading as an audit. Take the second pass in writing.',
    },
    {
      move: 'Make them name the first failure.',
      how: 'Say: “Where does this break first, and who notices?” Failure modes cannot be produced from a label — you need the components to know which one gives way — so this is a fast, non-confrontational depth probe.',
    },
    {
      move: 'Force the plan down to a named person and a date.',
      how: 'Say: “Who is the first person whose Monday changes because of this, and what do they do differently that morning?” Concrete framing deflates the illusion; abstract framing inflates it. This is that lever in one sentence.',
    },
    {
      move: 'Run it on your own position first, out loud.',
      how: 'Say: “Before I push this, let me try to explain the mechanism and see where I run out.” Then actually run out somewhere. Demonstrating the move on yourself buys the standing to use it on others without it landing as a status play.',
      watchOut: 'Only works if you genuinely stop at the edge. A performed stumble followed by a flawless explanation reads as theatre.',
    },
    {
      move: 'Demand an artefact, not a conversation.',
      how: 'Ask for a one-page written causal chain, or a diagram whose arrows have labels. Externalising forces serial production and removes the conversational cover that lets a fluent speaker skate. Read it before the meeting, not during.',
    },
    {
      move: 'Separate the mechanism question from the values question explicitly.',
      how: 'Say: “I am not asking whether you are for or against this. I am asking who pays, and when.” Naming the split protects you from the charge that you are attacking their position, and stops you wasting the technique where it does nothing.',
      watchOut: 'If the disagreement really is about values, keep asking for mechanism and you will look like you are dodging the actual argument.',
    },
  ],
  commonMisreads: [
    {
      misread: 'It shows people are stupid or do not know anything.',
      correction: 'They know the function, the label, and enough to recognise a correct explanation. Outsourcing the rest to a knowledge community is the correct strategy and always has been. The failure is that the boundary between your knowledge and the network’s is unmarked.',
    },
    {
      misread: 'Asking people why they believe something makes them humble.',
      correction: 'It does the opposite. Reasons are abundant and rehearsable, so being asked for them lets someone strengthen their position. In the Fernbach comparison the reasons group did not moderate at all. Mechanism deflates; reasons entrench.',
    },
    {
      misread: 'This is a reliable way to depolarise a political argument.',
      correction: 'The drop in self-rated understanding replicates well. The reduction in attitude extremity did not survive preregistered replication by Crawford and Ruscio. Treat mechanism questions as a diagnostic of what someone knows, not as an attitude-change tool.',
    },
    {
      misread: 'If they cannot explain it, they are wrong.',
      correction: 'Articulating a mechanism and holding a correct belief are different skills. Tacit expertise is real, and deferring to genuine experts is usually rational. The test tells you where explicit causal knowledge stops, which is useful, not who is right.',
    },
    {
      misread: 'It is basically Dunning-Kruger applied to machines.',
      correction: 'Different claim, different evidence. Dunning-Kruger concerns relative self-assessment of skill and carries a live statistical-artefact critique. The IOED is specific to causal knowledge, hits the highly educated as hard as anyone, and collapses within seconds of being tested.',
    },
  ],
  evidence: [
    {
      source: 'Rozenblit & Keil, “The Misunderstood Limits of Folk Science” (2002)',
      finding: 'People rated their understanding of everyday devices, attempted a step-by-step causal explanation, then re-rated. Ratings dropped sharply and stayed down. The drop was far smaller for facts, procedures and narratives — the illusion is specific to causal systems.',
    },
    {
      source: 'Lawson, “The Science of Cycology” (2006)',
      finding: 'Asked to complete or select a schematic bicycle, a substantial proportion of adults produced or endorsed machines that could not function. Errors appeared among regular riders, showing that daily exposure to a working system does not build a causal model of it.',
    },
    {
      source: 'Fernbach, Rogers, Fox & Sloman, “Political Extremism Is Supported by an Illusion of Understanding” (2013)',
      finding: 'Participants asked to give a mechanistic explanation of a policy afterwards rated their understanding lower and reported more moderate positions; those asked instead to list reasons showed no moderation. The contrast between the prompts is the result.',
    },
    {
      source: 'Crawford & Ruscio, preregistered replications (2021)',
      finding: 'Close replication attempts of the Fernbach result. The drop in self-rated understanding after explaining a mechanism reproduced; the reduction in political extremity did not.',
      caveat: 'Treat the depolarisation application as unsupported. The underlying IOED finding is unaffected — what failed was the extension to attitude change, not the illusion itself.',
    },
    {
      source: 'Sloman & Rabb, “Your Understanding Is My Understanding” (2016)',
      finding: 'Telling people that scientists had discovered and understood a phenomenon raised participants’ ratings of their own understanding of it. Access to a knowledge community is experienced as personal knowledge.',
    },
    {
      source: 'Fisher, Goddu & Keil, “Searching for Explanations” (2015); Ward (2021)',
      finding: 'Using internet search to answer questions inflated people’s ratings of their own internal knowledge, including on unrelated topics they had not searched. Ward found people misattribute externally retrieved information to their own memory.',
    },
    {
      source: 'Alter, Oppenheimer & Zemla, construal-level account (2010)',
      finding: 'Framing a system abstractly increased the illusion of explanatory depth; framing it concretely reduced it. This is the theoretical basis for asking who does what by when.',
      caveat: 'A single research programme, and the wider construal-level literature has had mixed replication results. Use concrete framing because it works operationally, not because this mechanism is settled.',
    },
    {
      source: 'Keil, division of cognitive labour',
      finding: 'People, including young children, maintain a working map of which kinds of experts know which kinds of things and rely on it constantly. The illusion is a side effect of a system otherwise doing exactly what it should.',
    },
  ],
  takeaways: [
    'You hold the function and the label. The causal chain between them is usually missing, and nothing signals its absence.',
    'The illusion is specific to mechanisms. People are not similarly deluded about facts, recipes or stories — only about how things work.',
    'Ask how, not why. Reasons are abundant and entrench a position; mechanism is a computation that either completes or visibly stalls.',
    'Expertise does not protect you: high exposure with rare production is the exact recipe, and seniority removes anyone who would test you.',
    'Concrete beats abstract — who does what, by when, and where does it break first. Abstraction is what inflates the illusion.',
    'The understanding collapse replicates; the political-moderation extension did not. Use it as a diagnostic, never as persuasion.',
  ],
};
