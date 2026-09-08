import type { DeepDive } from '../../../types/curriculum';

/** #37 · Sphere 4 · Decision Fatigue & Cognitive Depletion Traps */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: "It is 4:40 on a Thursday. You are on item nine of eleven. The room has been arguing about edge cases since one o'clock, three people have laptops open, and someone has a hard stop at five. Item nine is a three-year vendor renewal worth more than everything discussed so far combined. Somebody says “we've been happy enough with them, right?” Nobody objects. It carries in ninety seconds. Walking out, you have a specific feeling: that the last decision was worse than the first ones, and that you would not have accepted that reasoning at nine in the morning. That feeling is accurate. Almost everything you have been told about why it happens is not.",
  sections: [
    {
      heading: 'The observation is sound. The theory underneath it collapsed.',
      body: [
        "You are holding two claims that usually arrive glued together, and you need to separate them before anything else. The first claim is an observation: decisions made late in a long sequence of decisions are systematically different — more defaulting, less scrutiny, shorter reasoning. The second claim is a theory about why: that self-control draws on a single depletable resource, that the resource is metabolically fuelled, and that spending it early leaves less for later. The observation holds up reasonably well. The theory does not, and you should stop using it.",
        "Ego depletion was the flagship. Roy Baumeister and colleagues published the founding study in 1998 — participants who had to resist fresh cookies and eat radishes instead gave up sooner on an unsolvable puzzle than participants who ate the cookies. Hundreds of studies followed and a 2010 meta-analysis reported a solid medium-sized effect. Then the ground moved. Carter and McCullough showed the meta-analytic estimate was heavily inflated by publication bias, and once corrected it was indistinguishable from zero. A pre-registered replication run across more than twenty laboratories, coordinated by Martin Hagger and Nikos Chatzisarantis in 2016, found an effect close to zero. A second, larger multi-site replication led by Kathleen Vohs and published in 2021 — more than thirty labs, several thousand participants — found at most something too small and too fragile to build a management practice on.",
        "The fuel story fared worse than the resource story. The claim that blood glucose is the currency of willpower ran into simple arithmetic: Robert Kurzban pointed out that the incremental metabolic cost of a hard cognitive-control task is trivially small — a fraction of the sugar in a single mint. Then came the mouth-rinse results. Swilling a sugary drink and spitting it out restores performance about as well as swallowing it. A fuel tank does not refill through the inside of your cheek. A motivational or reward-signalling system does.",
        "So what survives? The lived experience, and a set of much more ordinary explanations for it. That is not a downgrade. It changes what you actually do, because the mundane mechanisms point at different fixes than the battery model does. If the problem were fuel, you would solve it with snacks and rest breaks. It is not fuel, so you solve it with structure.",
      ],
      example: {
        label: 'The metabolic arithmetic',
        body: "The brain runs at roughly twenty percent of resting metabolism, but that is a fixed overhead, not a variable cost that spikes when you concentrate. Measured differences in glucose consumption between resting and effortful cognition are small enough that the calories involved would be lost in the noise of standing up. Whatever makes hour six feel different from hour one, it is not that you have run out of sugar. Effort is scarce because attention is serial and has an opportunity cost — while you are deliberating on this, you are not doing anything else — not because thinking is exercise.",
      },
    },
    {
      heading: 'Four boring mechanisms that explain what you actually see',
      body: [
        "Attention drifts, and it drifts in a direction. Sustained attention on any single class of task degrades over time, which is one of the oldest and least controversial findings in experimental psychology. You do not need a resource metaphor for this; you need only the observation that novelty recruits attention and repetition does not. By item nine, the room is not out of willpower. It is bored, and boredom is information — it is the brain reporting that the marginal value of continuing to attend here has dropped below the alternative.",
        "Motivation shifts rather than drains. Michael Inzlicht, Brandon Schmeichel and Robert Kurzban have argued for a process account in which what changes over a long task is not capacity but priority: as you persist, the pull of everything you are not doing grows, and effort feels more costly because its opportunity cost is genuinely rising. This predicts the same behaviour as depletion and explains something depletion cannot — why a large enough incentive, or a genuinely interesting problem, restores performance instantly.",
        "Then there is the structure of the meeting itself, which is not psychology at all. Item eleven gets less time than item one for the arithmetic reason that the meeting ends. A hard stop compresses discussion. People have somewhere to be. Nobody wants to be the person who reopens something at 4:52. And a day of context switching leaves residue: each switch carries a real cost in reorientation, and by late afternoon you have paid that cost dozens of times.",
        "Finally, the status quo becomes attractive for a social reason rather than a neural one. Late in a long agenda, the default is the only option that requires no further conversation. Choosing it ends the meeting. Choosing anything else starts another one. Everyone in the room feels this, everyone knows everyone else feels it, and so the default carries with a speed that has nothing to do with anybody's prefrontal cortex.",
      ],
    },
    {
      heading: 'What actually goes wrong: deferral wearing the costume of decision',
      body: [
        "The damage is not usually a reckless choice. Recklessness is rare and visible. The characteristic late-agenda failure is quieter: the room adopts the option that requires no further work and experiences that as having decided. The renewal goes through. The headcount stays where it is. The pilot gets extended another quarter. Nobody chose those things on the merits; the merits were never opened, because opening them costs a meeting nobody has.",
        "The diagnostic tell is not the quality of the conclusion — you often cannot judge that in the room. It is the length of the reasoning. Compare the transcript of item two with item nine. Item two has conditionals, counterexamples and someone asking for a number. Item nine has two sentences and a nod. The content did not get simpler. The scrutiny got shorter.",
        "This creates something the battery model completely misses, and it is the part that should worry you most: agenda position is a lever, and other people can pull it. If you want a decision to pass without examination, you do not need to argue for it. You need it to be item nine. Anyone who has run committees for a few years knows this, whether or not they would say it out loud. Depletion is something that happens to you; agenda placement is something that gets done to you.",
        "The practical consequence is that you should treat the running order of a decision meeting as a governance artefact, not as logistics. Who set the order? Who benefits if the last three items pass on the nod? A well-run organisation reviews the agenda the way it reviews the numbers.",
      ],
      example: {
        label: 'The hungry judges study, and why it cannot carry the weight',
        body: "Danziger, Levav and Avnaim-Pesso reported in 2011 that across roughly 1,100 Israeli parole rulings, favourable decisions ran near two-thirds at the start of a session and fell towards zero before each food break, resetting afterwards. It became the most cited illustration of decision fatigue in existence. It should not be. Weinshall-Margel and Shapard showed the case order was not random: prisoners without legal representation were systematically scheduled late in sessions, and cases were grouped by prison. Andreas Glöckner later showed by simulation that a judge who simply declines to start a case they cannot finish before a break — an entirely rational scheduling habit — reproduces the same pattern with no fatigue at all. And the reported effect is implausibly enormous. No known psychological variable moves a binary judicial decision from two-thirds to near zero. When a result is that large, the most likely explanation is that something structural is generating it.",
      },
    },
    {
      heading: 'Seniority is the risk factor, not weakness',
      body: [
        "The people most exposed to this are the ones with the most authority, and not because their self-control is worse. Their days are structurally worse. More decisions, more context switches, longer agendas, more items where a defensible default exists, and — critically — the fewest people in the room willing to say “this one deserves another hour.” Every structural condition that produces late-agenda defaulting scales with rank.",
        "Expertise adds a specific inversion. An expert has a ready default for almost everything; a novice has to think because they have no template. The expert's fast answer is usually right, which is precisely why nobody challenges it at 4:40, and why the occasion when it is wrong sails through unexamined. The very competence that makes someone worth putting in the chair is what makes item nine dangerous when they are in it.",
        "There are real observational findings here that are worth knowing and worth doubting in the same breath. Jeffrey Linder and colleagues found in 2014 that inappropriate antibiotic prescribing for respiratory infections rose across the course of a clinic session; other work has found cancer-screening and vaccination orders declining from morning to afternoon appointments. These are consistent with the pattern. They are also observational, and they carry exactly the confound that sank the parole study — who gets booked into an afternoon slot is not random, and what a clinician faces at 4pm is not the same case mix they faced at 9am.",
        "Then there is the risk that comes from believing the theory. If you accept that you have a willpower battery, “I'm depleted” becomes a socially acceptable and completely unfalsifiable reason to take the default. It converts a structural failure into a personal state that nobody can argue with. The battery model does not just fail to describe you; it hands you a licence.",
      ],
    },
    {
      heading: 'What actually predicts a bad late decision',
      body: [
        "Hours elapsed is a weak predictor. Five conditions are much stronger, and unlike fatigue they are all visible from outside your own head.",
        "First: is there an available default that requires no further conversation? If the only way forward is to build something, lateness costs you far less, because the room has to produce work either way. The renewal is dangerous; the blank-page decision is not. Second: does anyone present lose materially if the default carries? A person with skin in the game will reopen an item at any hour. If nobody in the room is harmed by inaction, nobody will pay the social cost of extending the meeting. Third: is there a hard stop? A 4:40 item with a five o'clock wall is much worse than a 6:30 item with no stop, which tells you that clock time is the wrong variable and remaining slack is the right one.",
        "Fourth: has anything been written down? A decision that must be recorded with a stated rationale gets a rationale. A decision recorded as “approved” gets a nod. Fifth: how many items preceded it? Position in the sequence matters independently of duration, because attention to any one class of task degrades with repetition and because the items competing for the remaining minutes are cumulative.",
        "Read that list again and notice what it implies. You cannot manage a resource that does not exist. You can manage the availability of the default, the presence of a stakeholder, the slack in the calendar and the requirement to write. Every one of those is a scheduling decision made days in advance by someone with a calendar, not a state of mind to be pushed through with coffee.",
      ],
      example: {
        label: 'The checkout candy, retold accurately',
        body: "Confectionery sits at the register, and it does sell. But the reason is not that a hundred and fifty aisle comparisons have exhausted your prefrontal cortex. It is that the queue is dead time with nothing to do but look, the item is cheap enough to fall below any deliberation threshold, it is the only merchandise in the store you can reach without leaving your place in line, and the decision has a natural deadline. Retailers place it there because proximity and captive attention sell things. That mechanism is well understood, entirely sufficient, and does not require a depleted battery to explain.",
      },
    },
    {
      heading: 'What to trust, and what not to import along with it',
      body: [
        "Do not tell your organisation it has a willpower battery. It is false, it is unfalsifiable in practice, and it converts a fixable scheduling problem into a personal-resilience problem, which is where good advice goes to die. The moment fatigue becomes the explanation, the remedy becomes sleep and snacks, and the agenda stays exactly as it was.",
        "Do not confuse this with genuine physiological impairment, which is real and much better evidenced. Sustained sleep deprivation measurably degrades judgement, reaction time and risk calibration. A resident thirty hours into a shift is impaired in a way that is documented and serious. An executive at four in the afternoon after a normal night's sleep is not out of willpower; they are in a badly designed meeting. Treating those two as the same phenomenon insults the first and excuses the second.",
        "Be similarly careful with choice overload, which usually travels in the same paragraph as decision fatigue. The famous jam-display study is real, but a meta-analysis by Benjamin Scheibehenne and colleagues found the average effect of assortment size on choice across the literature was close to zero with enormous variation between studies. Larger assortments hurt in some conditions and help in others. Do not restructure a product line on it.",
        "What you should trust is the boring part, because the boring part is measurable. Agenda position is real and you can read it off a calendar invite. Hard stops are real. Minutes allocated per item are real and can be counted afterwards. Whether a default existed is a matter of record. Build your controls on those, and the practical advice — put consequential decisions early, cap the agenda, decide fewer things per session, put someone in the room who loses if the default wins — survives intact, resting on causes that have not been withdrawn.",
      ],
    },
  ],
  spotIt: [
    {
      signal: 'The reasoning gets shorter as the agenda advances, while the stakes do not.',
      meaning: 'Scrutiny is being rationed by remaining minutes rather than by importance. Compare the discussion length on item two with item nine.',
    },
    {
      signal: 'The winning argument is that something has been working “well enough” and nobody has raised a problem.',
      meaning: 'That is not an argument, it is the absence of one. The default is carrying because reopening it would cost another meeting.',
    },
    {
      signal: 'The largest financial item on the agenda is also the last one.',
      meaning: 'Either an accident or a strategy. Ask who set the running order and whether they benefit from that item passing quickly.',
    },
    {
      signal: 'Someone invokes tiredness as the reason to conclude rather than as a reason to stop.',
      meaning: 'Fatigue is being used to justify a decision instead of to defer one. If the room is too tired to decide well, that is an argument for adjourning, not for approving.',
    },
    {
      signal: 'A hard stop is announced at the start and the agenda is not shortened to match.',
      meaning: 'The room has pre-committed to compressing whatever falls last. The compression is now guaranteed and the only open question is which items receive it.',
    },
    {
      signal: 'Nobody in the room is materially worse off if the item passes unchanged.',
      meaning: 'No one will pay the social cost of reopening it. Missing stakeholders, not missing energy, is what lets weak items through.',
    },
  ],
  playbook: [
    {
      move: 'Put the consequential decision first, and say why.',
      how: 'Set the running order explicitly: “The renewal is the biggest number on this list, so it goes first while we have the whole hour ahead of us. Status updates go last, because they survive being rushed.” Ordering by consequence rather than by convenience costs nothing and removes the entire failure mode.',
      watchOut: 'People resent losing their usual slot. Frame it as protecting the item, not as demoting anyone.',
    },
    {
      move: 'Cap the number of decisions per session rather than the length of the session.',
      how: 'Three real decisions per meeting, with everything else marked as information. When a fourth appears, say: “That is a fourth decision. We agreed on three. It goes to Tuesday with a written pre-read.” The constraint has to be a count, because a time limit just compresses the tail.',
      watchOut: 'This only works if the overflow meeting genuinely happens. If items that get deferred quietly die, people will stop deferring.',
    },
    {
      move: 'Name the default out loud before the discussion, not after.',
      how: '“If we do nothing here, we auto-renew for three years at the current rate. That is the option we are actually comparing against.” Stating the default converts an invisible fallback into a candidate that has to justify itself like everything else.',
      watchOut: 'Do this early. Named at the end, it sounds like an objection to a decision already made.',
    },
    {
      move: 'Require a written rationale for anything above a threshold, recorded in the moment.',
      how: 'Two sentences in the minutes: what we chose and the reason. Say: “Before we move on — someone give me the sentence that goes in the record.” The requirement to produce a rationale is what makes reasoning happen; nobody can write two sentences on the strength of a nod.',
    },
    {
      move: 'Put the person who loses in the room.',
      how: 'For each significant item, identify who is materially worse off if it passes unchanged and make sure they are present with standing to speak. A stakeholder with something at risk will reopen an item at any hour, which is the only reliable defence against a late nod.',
      watchOut: 'If that person is junior, you must protect them explicitly, or their objection dies to the room wanting to go home.',
    },
    {
      move: 'Audit the running order, not just the outcomes.',
      how: 'Once a quarter, look back at what passed in the last twenty minutes of meetings versus the first twenty. If the late items are systematically bigger, or systematically from one sponsor, you have found a structural exploit rather than a fatigue problem.',
    },
  ],
  commonMisreads: [
    {
      misread: 'Willpower is a limited resource that depletes across the day, like a battery.',
      correction: 'This specific model failed large pre-registered multi-lab replication, and the glucose-as-fuel account is not credible on metabolic grounds. The behaviour people notice is better explained by attention drift, shifting motivation, accumulated switching costs and the structure of long agendas.',
    },
    {
      misread: 'The Israeli parole study proves that tired judges deny parole.',
      correction: 'Case ordering in that study was not random — unrepresented prisoners were scheduled late and cases were grouped by prison — and simulations show ordinary scheduling behaviour reproduces the pattern without any fatigue. Treat it as a vivid illustration with an unresolved causal story, not as evidence.',
    },
    {
      misread: 'The fix is breaks, snacks and better sleep hygiene.',
      correction: 'Those are worth doing for other reasons, but they treat a cause that does not exist. What changes late-agenda outcomes is structural: order by consequence, cap the number of decisions, name the default, require a written rationale, and seat someone with something at stake.',
    },
    {
      misread: 'Since the science is contested, the whole phenomenon is a myth and I can ignore it.',
      correction: 'The theory failed; the observation did not. Late items in long agendas genuinely get less scrutiny and default more often — that is visible in any set of minutes. Discarding the observation along with the discredited explanation is the more expensive error.',
    },
    {
      misread: 'Reducing the number of trivial choices in my life preserves capacity for important ones.',
      correction: 'The wardrobe-simplification advice rests entirely on the depleting-resource model. Simplifying trivia may save time and reduce clutter, which is worth something, but there is no good evidence it banks capacity for later decisions.',
    },
  ],
  evidence: [
    {
      source: 'Baumeister, Bratslavsky, Muraven & Tice (1998)',
      finding: 'The founding ego-depletion experiment. Participants required to resist fresh cookies and eat radishes instead persisted for less time on a subsequent unsolvable puzzle, which was interpreted as evidence for a single depletable self-control resource.',
      caveat: 'This is the study the entire popular model rests on, and it has not held up. Read it as a historical landmark rather than as support for the claim.',
    },
    {
      source: 'Hagger, Chatzisarantis et al., Registered Replication Report (2016)',
      finding: 'A pre-registered replication run across more than twenty independent laboratories with roughly two thousand participants found an ego-depletion effect close to zero, with a confidence interval spanning no effect at all.',
    },
    {
      source: 'Vohs et al., multi-site pre-registered test (2021)',
      finding: 'A larger follow-up across more than thirty labs and several thousand participants, designed with input from proponents of the original model. It found at best a very small effect, too small and too fragile to support practical recommendations.',
    },
    {
      source: 'Carter & McCullough (2014, 2015)',
      finding: 'Re-analysed the ego-depletion meta-analytic literature and found strong evidence of small-study and publication bias. Once corrected, the pooled estimate was not distinguishable from zero, meaning the apparently large literature never contained the effect it appeared to contain.',
    },
    {
      source: 'Kurzban (2010) on metabolic cost; Molden et al. (2012) on carbohydrate mouth rinse',
      finding: 'The incremental glucose cost of demanding cognitive-control tasks is far too small to explain behavioural decrements, and merely rinsing the mouth with a carbohydrate solution without swallowing restores performance. Both findings are incompatible with a fuel model and consistent with a motivational or reward-signalling account.',
    },
    {
      source: 'Danziger, Levav & Avnaim-Pesso, PNAS (2011)',
      finding: 'Across roughly 1,100 Israeli parole rulings, the rate of favourable decisions fell steeply within each session and reset after food breaks.',
      caveat: 'Contested and unable to bear causal weight. Weinshall-Margel and Shapard showed case order was not random — unrepresented prisoners were scheduled late and cases were grouped by prison. Glöckner showed by simulation that ordinary scheduling behaviour produces the same pattern without fatigue. The reported effect is also implausibly large for any psychological variable.',
    },
    {
      source: 'Linder et al., JAMA Internal Medicine (2014)',
      finding: 'Inappropriate antibiotic prescribing for acute respiratory infections increased across the course of a primary-care clinic session, one of several time-of-day patterns found in clinical decision records.',
      caveat: 'Observational. Patient case mix and who books an afternoon slot are not random, which is the same confound that undermined the parole study. Suggestive rather than decisive.',
    },
    {
      source: 'Inzlicht & Schmeichel; Kurzban et al., opportunity-cost model of effort',
      finding: 'Proposes that what changes across a long task is priority rather than capacity: the pull of unpursued alternatives grows, making continued effort feel more costly. It predicts the same observable behaviour as depletion and additionally explains why sufficient incentive or genuine interest restores performance immediately.',
    },
  ],
  takeaways: [
    'Separate the observation from the theory: late items in long agendas really do get less scrutiny, but not because a willpower battery ran down.',
    'Ego depletion failed large pre-registered multi-lab replication, and the glucose-as-fuel account does not survive basic metabolic arithmetic.',
    'The hungry-judges parole study had non-random case ordering and an implausibly large effect. Do not cite it as proof of anything.',
    'The real drivers are mundane and manageable: attention drift, shifting motivation, switching costs, hard stops, and a default that ends the meeting.',
    'The characteristic failure is not recklessness but deferral disguised as decision. Watch the length of the reasoning, not the confidence of the conclusion.',
    'Agenda position is a lever other people can pull. Order by consequence, cap the decision count, name the default, and seat someone who loses if it passes.',
  ],
};
