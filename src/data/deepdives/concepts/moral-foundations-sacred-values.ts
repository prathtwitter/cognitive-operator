import type { DeepDive } from '../../../types/curriculum';

/** #19 · Sphere 2 · Moral Foundations & Sacred Values Theory */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'Read this and watch your own reaction rather than your reasoning. A hospital administrator can spend one million dollars on a liver transplant that saves one identified child, or on equipment and staffing that will serve many patients he will never meet. He takes it seriously. He weighs both options carefully. Eventually he authorises the transplant and saves the child. In Tetlock’s experiments, people judged an administrator like this more harshly than one who refused to entertain the comparison at all — and the longer he was described as deliberating, the angrier they became. He reached the outcome they wanted. The offence was the arithmetic.',
  sections: [
    {
      heading: 'Two theories, and only one of them is load-bearing',
      body: [
        'Haidt and Tetlock get bundled together in the popular telling, and they should not be. They answer different questions, and the evidence behind them is in different condition.',
        'Moral Foundations Theory is a claim about taxonomy: that moral intuition runs on several distinct channels — roughly care, fairness, loyalty, authority and sanctity, with liberty proposed later — and that groups differ in which channels they weight. It is a useful vocabulary. It is not a validated instrument. The five-factor structure has repeatedly failed to fit cleanly across cultures and samples, rival taxonomies are live, and the original authors published a substantially revised questionnaire in 2023 that split one foundation in two. Use the foundations as a checklist of places to look. Do not present them to a room as a measurement.',
        'The sacred-values work is narrower and far more useful. It is a claim about one cognitive event: what happens when something a person has classified as protected is placed into a common currency with something secular. The finding is that outrage attaches to the act of comparison itself, independent of the outcome. That is the mechanism you can work with.',
        'Baron and Spranca had already identified the two behavioural signatures, under the name protected values. First, quantity insensitivity: people resist the trade-off regardless of magnitude, so raising your offer makes the reaction worse rather than better. Second, agent-relativity — a strong omission bias, under which allowing a bad outcome is judged far more leniently than causing it. Both look irrational if you assume people are pricing outcomes. Neither is, once you see they are policing a boundary.',
      ],
    },
    {
      heading: 'Why a mind that refuses to compute is an asset',
      body: [
        'A value you are willing to trade is a value that can be bought, and everyone watching can see that. A value you visibly cannot trade is a commitment device. The refusal is not a failure of rationality; it is the product.',
        'This is Schelling’s logic about burning bridges, relocated into the head. A negotiator capable of pricing anything is one whose price everyone will spend the relationship hunting for. A negotiator visibly incapable of considering certain trades has removed a region of the bargaining space credibly, because the incapacity is not a posture they must maintain. The same logic scales: coalitions bound by non-negotiable commitments out-coordinate coalitions of individual optimisers, because defection is unthinkable rather than merely punished, and unthinkable is cheaper to enforce.',
        'It also explains the otherwise puzzling target of the anger. People do not primarily punish whoever sells; they punish whoever calculates. Someone willing to run the numbers has revealed that a price exists, and once a price exists everything downstream is a negotiation over magnitude. The boundary therefore has to be defended at the moment of comparison, because by the moment of sale it is far too late.',
        'So the reaction you triggered was not a misunderstanding to be cleared up. It was a correct response, by their lights, to a real move you made. Every attempt to explain that you were only running the numbers confirms the offence rather than mitigating it, because running the numbers was the offence.',
      ],
      example: {
        label: 'What Ford was actually punished for',
        body: 'The 1973 Ford cost-benefit memo is the canonical taboo trade-off in the wild: a document putting a dollar figure on burn deaths and comparing it with the cost of a design change. What made it explosive was not that the numbers were unusual — the valuations came from the regulator’s own guidance. It was that they were written down, by a named company, about identified deaths. Worth knowing too: the popular version of the case is itself substantially inaccurate. Gary Schwartz’s 1991 legal analysis established that the memo concerned rollover fuel leakage across the industry for a regulatory submission, not an internal decision about the Pinto’s fuel tank. The correction does not rescue the lesson. The public was never punishing a number. It was punishing the arithmetic.',
      },
    },
    {
      heading: 'Taboo versus tragic: the only reframe that works',
      body: [
        'The distinction that does the practical work is between a taboo trade-off and a tragic one. A taboo trade-off puts a sacred value against a secular one: a life against money, patient care against margin, a family against a career move. A tragic trade-off puts a sacred value against another sacred value: a life against a life, one patient’s care against another’s.',
        'People will engage with tragic trade-offs. They find them agonising and may resent you for surfacing them, but they do not treat you as morally disqualified for raising one, because nothing sacred has been converted into money. Taboo trade-offs produce outrage and permanent damage to your standing. Tragic ones produce hard, sober conversations. That difference is the whole negotiating asset here.',
        'So the move is not to argue anyone out of a sacred value. Attacking it directly fails, and worse, converts a policy disagreement into a question about your character. The move is to place a second sacred value — genuinely theirs, not one you invented for the occasion — on the other side of the ledger, and let the trade-off become tragic.',
        'The clinic case makes it visible. “Cut three minutes per patient and margin expands eighteen percent” is a taboo trade-off, and the revolt will outlive the initiative. “We can fund four more nurses next year or protect current visit lengths this year, and I do not think we can do both — which is the greater harm to patients?” is a tragic trade-off built from the same constraint. Same arithmetic, entirely different moral event. Nothing about the second version is a trick, which is why it works: the constraint is real and both branches are genuinely about what the clinicians care about.',
      ],
      example: {
        label: 'Money makes it worse; symbols make it better',
        body: 'Ginges, Atran, Medin and Shikaki ran field experiments with Palestinian and Israeli populations on real territorial and political questions. When a deal that violated a sacred value was sweetened with substantial material compensation, opposition went up rather than down, along with expressed support for violence. But when the other side made a symbolic concession that cost them one of their own sacred commitments — a genuine apology, an explicit acknowledgement of suffering — opposition fell. Sacred values do not respond to money in the right direction, and they do respond to sacred currency.',
      },
    },
    {
      heading: 'The most analytical person in the room detonates it',
      body: [
        'The person most likely to trigger a sacred-value reaction is not the least sophisticated one present. It is the most analytically capable, and the reason is structural. The craft of a CFO, a strategy consultant or a data scientist is converting heterogeneous things into a common unit so they can be compared. That is what analysis is. It is also, formally, exactly what a taboo trade-off is.',
        'They carry the worst possible warning system, which is none at all. From inside a spreadsheet every column is a variable and nothing feels sacred, because commensurability is the medium. There is no internal signal that a boundary has been crossed. The first indication is the reaction, by which point the conversation is no longer about the analysis.',
        'Seniority multiplies the blast radius. The identical sentence from an analyst is a modelling assumption nobody notices; from a newly arrived executive it is policy, quoted back for years. Knowing the theory does not protect you either, because sacred values are local and unlisted. You can understand this concept perfectly and still not know that here the on-call rotation is sacred and the brand guidelines are not.',
        'Hold onto one finding for the moment you get caught mid-analysis: longer deliberation drew harsher judgement than outright refusal. Defending the rigour of your work is therefore the worst available response, because the seriousness of your thinking is the aggravating factor. Tetlock also documented moral cleansing — participants who had merely contemplated a taboo trade-off then took up opportunities to affirm the value they had mentally violated. That tells you what repair looks like. Not a better memo. A costly, public act that reaffirms the value.',
      ],
    },
    {
      heading: 'What is sacred, and what is only said to be',
      body: [
        'Values are not permanently sacred. They are sacralised, by particular groups, in particular contexts, and the same value can be tradable in one setting and untouchable in another. The first job in any consequential negotiation is mapping, and mapping is cheap if you do it before you need it.',
        'Three markers tell you a value has been sacralised. It is stated without a threshold. Violations are described in the language of betrayal or disgust rather than cost. And people decline to name a price even hypothetically. That last one is your diagnostic, turned into a question: “at what number would this change?” A secular value produces a number, reluctantly. A sacred value produces offence at the question. Ask it privately, early, and about your own side too — leadership teams routinely discover three sacred commitments they never wrote down and one written commitment nobody actually holds.',
        'Then there is the category Tetlock called pseudo-sacred: values that are publicly non-negotiable and quietly traded constantly. Almost every institution runs on these, and how they survive tells you exactly when your own trade-off will detonate. Transport regulators put a number on a statistical life — on the order of ten million dollars in current United States guidance — and nobody riots, because the trade happens at a distance, in a technical register, made by an institution rather than a person, about statistical rather than identified lives.',
        'Reverse those four conditions and you have a formula for outrage: proximate, concrete, made by a named individual, about people with faces. If your proposal has all four it will explode regardless of the quality of the reasoning behind it — and the quality of the reasoning will make it worse, not better.',
      ],
      example: {
        label: 'Everyone prices a life; nobody says so in the room',
        body: 'Every developed country runs cost-benefit analysis on safety regulation using an explicit value of a statistical life. The number is public, revised periodically, and determines whether a guardrail gets built. Nobody is outraged by this, and everybody is outraged when a company is caught doing arithmetic that is mathematically identical. The difference is not the maths, and it is not quite hypocrisy. Institutional, abstract, statistical trade-offs are permitted; personal, concrete, identified ones are not — and any executive who confuses the two learns the difference in public.',
      },
    },
    {
      heading: 'What this framework will not do for you',
      body: [
        'Take the measurement claims lightly. Moral Foundations Theory’s factor structure has not held up well across cultures and samples, competing taxonomies are actively contested, and the instrument was revised by its own authors. It is a good set of prompts for noticing what a group cares about. It is not a scan, and presenting it as one will cost you credibility with exactly the people whose respect you needed.',
        'The strong version of the social intuitionist claim — that moral reasoning is purely post-hoc and never changes a judgement — is more than the evidence supports, and more than Haidt himself argues. Reasoning presented by another person, inside a relationship, over time, does move people. Moral dumbfounding is real but weaker than the popular telling: replication work finds a meaningful minority supply coherent reasons or revise their judgement rather than sitting in speechless certainty.',
        'Several adjacent findings that make this material fun at dinner parties have not survived replication — cleanliness and disgust priming effects on moral severity are among the casualties. The neural story is thin too: imaging work associating sacred values with rule-retrieval rather than valuation regions comes from small samples and carries the standard problem of inferring a mental process from a region lighting up. None of the core results depend on any of it. Rebuild any argument that does.',
        'The most important limit is ethical rather than empirical. This works because the constraint you are naming is real. Invoke someone’s sacred value to win a point you do not hold, and on the day they find out you have converted a disagreement into a betrayal, which is far more expensive. Some conflicts also have no available reframe: sometimes both sides want genuinely incompatible things, the negotiation is about power rather than framing, and pretending otherwise wastes time and insults the other side’s intelligence.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'Your entirely reasonable proposal produces anger out of all proportion to its content.',
      meaning: 'You crossed a sacred boundary rather than made a weak argument. The disproportion is the diagnostic — arguments get counterarguments, boundaries get outrage.',
    },
    {
      signal: 'Someone refuses to name a threshold. “There is no number.”',
      meaning: 'A secular value produces a reluctant number. A sacred one produces a refusal, and often offence at being asked. That refusal is your map.',
    },
    {
      signal: 'The objection is phrased in the language of disgust or betrayal rather than cost.',
      meaning: '“I cannot believe you would even suggest that” is a different object from “that is too expensive.” Note which register the room is in before you answer.',
    },
    {
      signal: 'Raising your offer makes the resistance worse.',
      meaning: 'Quantity insensitivity. You are in sacred territory and each increase reads as a larger bribe rather than a better deal. Stop increasing immediately.',
    },
    {
      signal: 'The person who thought longest about the trade-off is being judged hardest.',
      meaning: 'Condemnation is attaching to the deliberation, not the conclusion. Defending the rigour of your process will make it worse.',
    },
    {
      signal: 'People volunteer for unrelated acts of visible virtue after a hard decision.',
      meaning: 'Moral cleansing. The group is repairing a boundary it felt was violated. Read it as a signal of what was violated, and let it happen.',
    },
  ],
  playbook: [
    {
      move: 'Map the sacred boundaries before you need them.',
      how: 'In a calm session, ask leadership: “What will we not trade at any price, regardless of the business case?” Write the answers down. The list is short, it is not what the values poster says, and half the room will be surprised by the other half.',
      watchOut: 'If you let people list aspirational values, you get a poster instead of a map. Push until someone names something inconvenient.',
    },
    {
      move: 'Convert taboo into tragic before you open the conversation.',
      how: 'Never put a sacred value against money. Put it against another value they hold sacred. Not “three minutes less per patient adds eighteen points of margin” but “we can fund four more nurses next year or protect visit lengths this year — which is the greater harm to patients?”',
      watchOut: 'The second value must genuinely be theirs. A manufactured one is detected fast and upgrades you from opponent to manipulator.',
    },
    {
      move: 'Argue from inside their moral frame, sincerely.',
      how: '“I hold the same commitment to protecting vulnerable customers that you do — which is exactly why this tactic worries me. Over three years it erodes the thing we are both trying to protect.”',
      watchOut: 'Moral reframing effects are modest and it fails badly if insincere. If you cannot make the argument in their frame and mean it, your position may be weaker than you thought.',
    },
    {
      move: 'Pay in symbolic currency, never in cash.',
      how: 'When a sacred value has been damaged, repair is a costly, public, values-affirming act: an acknowledgement of harm, a reversal that visibly costs you, a commitment written into policy. Material sweeteners have been shown to increase opposition when a sacred value is in play.',
      watchOut: 'The gesture must cost something real and be legible as such. A cheap apology reads as a purchase attempt in different packaging.',
    },
    {
      move: 'If you are caught mid-calculation, repudiate rather than justify.',
      how: 'Say plainly: “That analysis should not have been framed that way, and I am withdrawing it.” Do not explain the methodology — deliberation length is an aggravating factor, so defending your thinking makes the judgement harsher.',
      watchOut: 'Only do this if you can then produce a different framing of the same constraint. Withdrawing without addressing the problem buys a week and costs the decision.',
    },
    {
      move: 'Move real trade-offs into the register where they survive.',
      how: 'Where a genuine trade-off must be made, take it to institutional ground: a written standard applied to all cases, decided by a body, in advance, about categories rather than named individuals. That is how every regulator on earth prices safety without a riot.',
      watchOut: 'This is a legitimate mechanism, not a laundering technique. Using distance to hide a decision you would be ashamed to defend is precisely what destroys institutional trust when it surfaces — and it surfaces.',
    },
  ],
  commonMisreads: [
    {
      misread: 'People with sacred values are being irrational and need better data.',
      correction: 'The refusal to compute is a functional commitment device. More data on the secular side confirms you are still trying to buy the thing, which is the offence. The behaviour is strategically coherent even where you disagree with the value.',
    },
    {
      misread: 'A bigger offer will eventually move them.',
      correction: 'Protected values are quantity-insensitive, and field experiments show material sweeteners increasing opposition. Each increment reads as a larger bribe. If raising the number is making things worse, you have your diagnosis.',
    },
    {
      misread: 'Moral Foundations Theory measures someone’s moral profile.',
      correction: 'The five-factor structure has repeatedly failed to fit cleanly across samples and cultures, rival taxonomies are live, and the authors have since revised the instrument. Use the foundations as prompts for where to look, not as a result you can present.',
    },
    {
      misread: 'Organisations never really make taboo trade-offs.',
      correction: 'They make them constantly — every safety regulator prices a statistical life. What varies is the register. Trade-offs survive when they are institutional, abstract, statistical and made in advance; they detonate when they are personal, concrete, identified and made in the room.',
    },
    {
      misread: 'Once you know the technique, any conflict can be reframed into agreement.',
      correction: 'Some conflicts are genuine value conflicts with no available reframe, and the negotiation is really about power. Recasting an intractable conflict as a communication problem is both wrong and condescending, and the other side hears it as both.',
    },
  ],
  evidence: [
    {
      source: 'Tetlock, Kristel, Elson, Green & Lerner, “The Psychology of the Unthinkable” (2000)',
      finding: 'People confronted with taboo trade-offs expressed moral outrage and condemned the decision-maker — and judged those who deliberated longer more harshly than those who refused outright. Participants who merely contemplated such a trade-off then sought opportunities for moral cleansing.',
      caveat: 'Samples were typical for the era rather than large, and much of the work used vignettes rather than real decisions. The pattern has held across a substantial follow-on literature, but treat magnitudes as unestablished.',
    },
    {
      source: 'Tetlock, “Thinking the Unthinkable: Sacred Values and Taboo Cognitions” (2003)',
      finding: 'Sets out the distinction that does the practical work: taboo trade-offs pit a sacred value against a secular one and provoke outrage; tragic trade-offs pit two sacred values against each other and are painful but permissible. Also introduces pseudo-sacred values — publicly untouchable, privately traded.',
    },
    {
      source: 'Ginges, Atran, Medin & Shikaki, “Sacred bounds on rational resolution of violent political conflict” (2007)',
      finding: 'Field experiments with Palestinian and Israeli populations. Adding substantial material compensation to a deal that violated a sacred value increased opposition and support for violence. Symbolic concessions, where the other side sacrificed one of their own sacred commitments, reduced opposition.',
    },
    {
      source: 'Baron & Spranca, “Protected Values” (1997)',
      finding: 'Identified the two behavioural signatures: quantity insensitivity, in which magnitude does not change the refusal, and agent-relativity, a strong omission bias under which allowing harm is judged far more leniently than causing it.',
    },
    {
      source: 'Haidt, “The Emotional Dog and Its Rational Tail” (2001); Graham, Haidt & Nosek (2009)',
      finding: 'The social intuitionist model — moral judgement arrives fast and intuitively, with explicit reasoning largely constructed afterwards — plus the mapping of political groups onto differing weightings of the moral foundations.',
      caveat: 'Contested. The questionnaire’s factor structure fits poorly across cultures, rival accounts such as morality-as-cooperation and the dyadic-harm model are live, and the authors published a revised instrument in 2023 splitting one foundation. The strong claim that reasoning never changes moral judgement is also more than the evidence supports.',
    },
    {
      source: 'Feinberg & Willer, moral reframing research (2013, 2015 onward)',
      finding: 'Arguments reframed into the moral language the audience actually weights — purity framing for conservative audiences, fairness framing for liberal ones — produced measurably more persuasion than the same argument in the speaker’s native moral vocabulary.',
      caveat: 'Effects are real but modest, and later studies have found smaller or inconsistent results depending on issue and audience. Directionally sound, not a reliable lever.',
    },
    {
      source: 'Berns and colleagues, neuroimaging of sacred values (2012)',
      finding: 'Values participants identified as sacred were associated with activity in regions linked to rule retrieval rather than regions associated with cost-benefit valuation, consistent with a deontic rather than utilitarian processing mode.',
      caveat: 'Small sample, and inferring a cognitive process from regional activation is the standard reverse-inference problem. This corroborates the behavioural finding; it does not establish it, and the behavioural finding stands without it.',
    },
    {
      source: 'Moral dumbfounding: Haidt, Björklund & Murphy (2000, long unpublished); McHugh and colleagues (2017 onward)',
      finding: 'Presented with harmless-but-taboo scenarios, many participants maintain moral condemnation after every reason they offer has been refuted, reporting certainty without justification.',
      caveat: 'The original study went unpublished for many years. Replications confirm the phenomenon but find it weaker than the popular telling: a meaningful minority supply coherent reasons or revise their judgement rather than remaining dumbfounded.',
    },
  ],
  takeaways: [
    'The outrage attaches to the act of comparison, not the outcome. Deliberating carefully and then deciding correctly can be punished harder than refusing to think about it.',
    'Refusing to compute is a commitment device, not a cognitive failure. A value you will trade is a value everyone will spend the relationship pricing.',
    'Raising the offer makes it worse. Protected values are quantity-insensitive and material sweeteners have been shown to increase opposition.',
    'The only reliable reframe converts a taboo trade-off into a tragic one — sacred against sacred, never sacred against money — and the second value must genuinely be theirs.',
    'The most analytical person present is the most likely to detonate it, because making things commensurable is both their craft and the offence.',
    'Trade-offs survive when they are institutional, abstract, statistical and made in advance; they explode when they are personal, concrete, identified and made in the room.',
  ],
};
