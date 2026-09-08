import type { DeepDive } from '../../../types/curriculum';

/** #32 · Sphere 4 · Choice Architecture & Default Mechanics */
export const deepDive: DeepDive = {
  readingTimeMinutes: 14,
  hook: 'A new hire spends their first morning signing eleven documents and reads maybe two of them closely. One of the other nine sets a retirement contribution rate. Another opts them into an internal newsletter. A third enrolls them in an insurance tier one level above the cheapest available option. None of these were decisions in any meaningful sense — they were pre-filled boxes the new hire’s pen moved past on the way to a signature line. Every one of them will shape a piece of that person’s financial life for years, quietly, because nobody in the room stopped to ask whether the pre-filled answer was actually the right one for them.',
  sections: [
    {
      heading: 'One word, three different mechanisms',
      body: [
        'The default effect gets talked about as one force — “people are lazy, they take whatever’s pre-selected” — but the research separates at least three distinct channels that usually operate together. The first is effort: overriding a default requires an action, and any action is a cost that doing nothing doesn’t carry. Samuelson and Zeckhauser’s original status-quo-bias research showed people stick with a current option well past what effort alone should explain, across insurance plans and retirement-portfolio allocations.',
        'The second channel is implied endorsement. Craig McKenzie, Michael Liersch, and Stacey Finkelstein found people read a default as a signal about what the choice-architect thinks is sensible — implicit advice, not just the path of least resistance. This means a default can move behavior even when switching is effortless, purely because people infer someone who knows more set it that way for a reason.',
        'The third channel is loss aversion anchored to the status quo: once an option is the default, giving it up is coded as a loss relative to a reference point, and losses are weighted more heavily than equivalent gains — the same asymmetry behind prospect theory generally, applied to whatever happens to be pre-selected rather than to what someone already owns.',
        'This matters because the three channels respond to different countermeasures. Reduce switching effort — a one-click opt-out — and you weaken the first while leaving the other two untouched. Signal the default was set for administrative convenience, not as a recommendation, and you weaken the second alone. Treating “the default effect” as one undifferentiated force means reaching for the wrong lever and being surprised when the number barely moves.',
      ],
    },
    {
      heading: 'Doing nothing was usually the safer bet',
      body: [
        'Changing any established arrangement carries a double cost: the effort of making the change, and the risk that the new arrangement turns out worse than the familiar one — a risk that staying put simply doesn’t carry. In a slow-changing environment, that arithmetic favors inertia most of the time, and a mind that defaults to the status quo unless given a strong reason to switch is running a reasonable policy, not a broken one.',
        'The structural version of the argument is more relevant to the institutional defaults people actually encounter today. A company’s benefits enrollment, a government form’s pre-filled field, a software installer’s recommended setting — most of these were genuinely set by someone with more information about the typical case than any individual has about their own situation in the moment. Deferring to the default is often a reasonable bet that the designer probably got the common case right, and for a real share of defaults, that bet pays off.',
        'This is exactly why the mechanism is both durable and easy to turn against people at the same time. The same inference that makes deferring to a thoughtfully-set default sensible — someone competent probably set this up reasonably — is the inference a designer can exploit by setting the default to serve their own interest instead of the chooser’s, while relying on that same, otherwise-reasonable trust to keep the chooser from ever checking.',
      ],
    },
    {
      heading: 'The move: whoever sets the default pre-decides the outcome for everyone else',
      body: [
        'Setting a default allocates the burden of action, and in any population, most people won’t spend that effort regardless of which side of the decision actually serves them better. A default-setter with no persuasive power at all — no argument, no marketing, no better product — can still determine the majority outcome purely through where a checkbox is pre-set, as long as most people’s motivation to override it is weaker than the effort of doing so.',
        'The mechanism is often invisible on top of being effortful to reverse: a real share of people affected never register that a choice was made for them at all. Negative-option billing, pre-checked marketing-consent boxes, and default contribution rates set low to minimize an employer’s matching cost are all built on the same asymmetry — easy to fall into, harder to climb out of, often unnoticed by the person it’s happening to.',
        'The moral line sits where that asymmetry gets exploited on purpose. A default reflecting a genuine best guess about what most people would choose is choice architecture’s constructive form. A default set because inertia is profitable — where the designer’s own data shows most people would opt out if friction were removed — is the same mechanism used adversarially, and it’s the version regulators increasingly target: rules requiring cancellation be no harder than signup.',
      ],
      example: {
        label: 'The gap between easy in and hard out',
        body: 'A software tool offers a free 14-day trial requiring a credit card up front, converting automatically to an annual plan unless cancelled. Signing up takes one click. Cancelling requires logging in, finding a buried settings menu, and confirming through two dialog boxes each offering a discount instead. Both defaults save the company a sales conversation. Only the conversion default is where the money is actually made, and it’s not a coincidence it’s also the harder one to reverse.',
      },
    },
    {
      heading: 'Financial expertise doesn’t neutralize it',
      body: [
        'Research on retirement-plan participants who work inside the financial industry itself — whose day job involves the exact mechanics of contribution rates, fund selection, and compounding — has found they still anchor on a plan’s default contribution rate and default fund menu in their own personal accounts, at rates not meaningfully different from the general employee population. Professional expertise in the abstract doesn’t stop the mechanism from running on your own choices.',
        'This makes sense once the three channels are separated again. Effort doesn’t care what you know — overriding a default costs the same small action whether specialist or novice, and specialists face the same attention budget as anyone. Endorsement can get stronger with adjacent expertise — someone who knows defaults are often set after real analysis may infer a given one reflects that analysis, which is sometimes true and sometimes exactly what a designer is counting on.',
        'The practical implication mirrors a pattern that shows up across this field guide: “we have sophisticated people managing this” is not, by itself, evidence that a default is being actively evaluated rather than passively accepted. The only real test is whether someone can state what the default is and explain why it sits where it does — not whether they’re capable of doing so if asked.',
      ],
    },
    {
      heading: 'What makes a default bite harder, and what defeats it',
      body: [
        'Complexity is the biggest amplifier. The more options on the table, the harder any single one is to evaluate against the rest, and the more people fall back on whatever’s pre-selected. A retirement plan with two fund choices shows a much smaller default effect than one with several dozen, because the cost of a real comparison scales with the number of things being compared.',
        'Visibility of the default is close to a precondition for overriding it at all: a default nobody knows exists can’t be actively accepted or rejected, only drifted into. This is why disclosure requirements — stating clearly what happens if a person does nothing — move behavior even without changing the default itself, by converting an invisible default into a visible one.',
        'The best-studied alternative isn’t “no default,” which usually just hands the outcome to whatever technical fallback exists — it’s active choice: removing the pre-selection and requiring an explicit answer from everyone, with a real consequence for silence. James Choi, David Laibson, Brigitte Madrian, and Andrew Metrick’s research comparing this to standard defaults found active choice can outperform a poorly-chosen default while still simplifying the decision, though only when non-response actually triggers something rather than quietly reverting to a fallback.',
      ],
      example: {
        label: 'Same decision, two designs',
        body: 'One benefits form pre-selects the cheapest health plan and lets employees upgrade. A second presents the same three plans with none pre-selected, requiring everyone to click one before submitting. The first will look, in the data, like most employees “chose” the cheap plan. The second shows a very different distribution, because it measures an actual decision instead of a default nobody confirmed. Neither is manipulative by itself — the difference is whether the numbers get reported as revealed preference or labeled as what they are.',
      },
    },
    {
      heading: 'The honest limits: what’s proven, what’s shaky, and what’s been overstated',
      body: [
        'Two claims get bundled under “nudges work,” deserving very different confidence levels. The narrow claim — defaults specifically move enrollment-type behavior, by a lot — is among the best-replicated findings in behavioral economics. Madrian and Shea’s automatic-401(k)-enrollment study, and its substantial follow-up literature, found switching from opt-in to opt-out moved participation from a minority of employees to a large majority, and most auto-enrolled employees kept the default rate and fund rather than customizing either. That result has held up across many employers and re-analyses.',
        'The broad claim — that “nudging” in general, covering reminders, norm messages, framing, and defaults all lumped together, reliably changes behavior — took a serious hit. A 2022 meta-analysis by Mertens and colleagues reported a meaningful average effect pooled across many domains. A same-year re-analysis by Maier and colleagues corrected for publication bias — weak or null results going unpublished — using similar data, and found the effect shrank drastically, toward a figure not clearly different from zero. The two teams dispute each other’s methods, unresolved. “Nudging” as a general category is contested, not a settled win.',
        'The organ-donation comparison deserves its own correction — it’s probably the most-repeated statistic in this field, and usually overstated. Johnson and Goldstein’s comparison of European countries found a very large gap in registered consent between opt-in and opt-out countries — real, and a legitimate landmark. But it measures registered legal consent, not organs transplanted. Most opt-out countries still ask next-of-kin before proceeding, so presumed consent doesn’t remove the decision point it appears to on paper. Looking at actual donation outcomes instead, the gap shrinks considerably — cross-country reviews, including a widely-cited 2009 BMJ review, attribute most of what remains to transplant infrastructure and coordination, not the legal default. Spain, the usual success story, is opt-out, but its own authorities credit a dedicated coordinator system built over decades, not the default. Some opt-out countries have had unremarkable actual donation rates despite the favorable law.',
        'None of this makes defaults a weak tool — that would be as much an overcorrection. A default’s effect on registering consent isn’t automatically its effect on the outcome several steps downstream that actually matters. Treat defaults as one of the strongest, most confirmed tools here for enrollment-type decisions specifically, and treat any broader “nudge” pitch, or any cross-country statistic offered without checking what it measures, as a claim needing its own evidence — not a free pass from the default literature’s real credibility.',
      ],
    },
  ],
  spotIt: [
    {
      signal: 'A form arrives with an option already selected, and changing it takes several extra steps.',
      meaning: 'You are looking at a default engineered to capture everyone without a strong active preference — which, empirically, is most people.',
    },
    {
      signal: 'Someone justifies a choice with “that’s just what it came with” or “I never got around to changing it.”',
      meaning: 'Status quo inertia, not a considered preference. The current setting is evidence of the switching cost, not evidence they actually prefer it.',
    },
    {
      signal: 'Cancelling or opting out takes noticeably more steps than signing up did.',
      meaning: 'A deliberately asymmetric friction design. The default was built to be sticky on the way out, not just convenient on the way in.',
    },
    {
      signal: 'A pitch cites one striking statistic about consent, signups, or registration with no mention of the actual downstream outcome.',
      meaning: 'Check whether the number measures the behavior that actually matters or a proxy for it — a signed form is not the same thing as a life saved or a dollar spent.',
    },
    {
      signal: 'A decision involves an unusually large menu of options.',
      meaning: 'Default effects grow stronger as choice complexity rises. In a crowded menu, whatever is pre-selected captures a disproportionate share of the outcome.',
    },
    {
      signal: 'Someone treats one successful nudge as proof that “nudging” as a category is reliable.',
      meaning: 'Effects vary enormously by mechanism. A strong result for a default says very little about a reminder, a norm message, or a framing tweak.',
    },
  ],
  playbook: [
    {
      move: 'If you want large-scale behavior change and control the system, change the default before you change the message.',
      how: '“Instead of emailing people to enroll, let’s flip this to automatic enrollment with an easy opt-out, putting the burden on people who want out.”',
      watchOut: 'An opt-out default without a genuinely easy exit reads as coercive once people notice, and invites the backlash and regulatory attention negative-option billing now draws.',
    },
    {
      move: 'Ask what a statistic is actually measuring before you trust it.',
      how: '“Is this the outcome we care about, or a proxy for it — a signed form, a checked box — that might not translate into the real behavior at anywhere near the same rate?”',
    },
    {
      move: 'Separate a default claim from a general nudge claim before betting resources on either.',
      how: '“This is a default-effect argument, which has strong, repeated evidence behind it. If what’s actually proposed is a reminder or a framing change, ask for evidence on that mechanism specifically — the track record there is weaker.”',
    },
    {
      move: 'Make an invisible default visible when you suspect one is working against you.',
      how: '“Walk me through what happens if I do nothing here — what’s the pre-selected outcome, and who benefits from it?” Naming a default out loud often converts a drifted-into outcome into a deliberate choice.',
    },
    {
      move: 'Use active choice, not just a better default, when a decision is too consequential or too personal to pre-select for someone else.',
      how: 'For decisions like medical directives or benefits with real personal tradeoffs, require an explicit answer from everyone rather than defaulting either direction: “no default, but a mandatory choice with a real deadline.”',
      watchOut: 'Active choice only works if ignoring the prompt has a genuine consequence. Without one, it quietly turns back into whichever fallback the system reverts to.',
    },
    {
      move: 'Audit your own defaults for who they actually serve before you defend them.',
      how: 'Ask who benefits when someone affected by a default you control does absolutely nothing — the person it was ostensibly designed for, or you. If the two answers differ, expect scrutiny, and get ahead of it.',
    },
  ],
  commonMisreads: [
    {
      misread: 'The Austria-versus-Germany organ donation comparison proves defaults alone save lives at that scale.',
      correction: 'That comparison measures registered legal consent, not organs actually transplanted. Most opt-out countries still consult next-of-kin in practice, and actual donation outcomes differ far less than the consent-rate gap suggests — infrastructure and coordination explain more of the real-world variation than the legal default by itself.',
    },
    {
      misread: '“Nudging” is a single, well-validated technique with a reliable effect size across the board.',
      correction: 'A 2022 meta-analysis reported a meaningful average effect across many nudge types, but a same-year re-analysis correcting for publication bias found the effect shrinks drastically, toward a figure not clearly different from zero. The two research teams still disagree on method, and the general claim remains genuinely contested.',
    },
    {
      misread: 'Since the broad nudge literature looks shaky, defaults themselves probably don’t work either.',
      correction: 'Defaults are the exception, not the casualty — the automatic-enrollment literature is among the most repeatedly confirmed results in behavioral economics. Don’t let a critique of the broad category discredit its best-supported specific member.',
    },
    {
      misread: 'Only inattentive or unsophisticated people get moved by defaults.',
      correction: 'Research on employees with direct financial expertise found they anchor on default contribution rates and fund menus in their own accounts too. The mechanism runs on effort and inference, not on ignorance, so expertise does not neutralize it.',
    },
    {
      misread: 'Removing a bad default and pre-selecting nothing is the neutral, ethical choice.',
      correction: 'A form with no explicit default still hands the outcome to whatever the technical fallback happens to be, which functions as a default regardless of intent. The studied alternative is active choice — forcing an explicit answer — not simply deleting the pre-selection and hoping.',
    },
  ],
  evidence: [
    {
      source: 'Samuelson & Zeckhauser, “Status Quo Bias in Decision Making” (1988)',
      finding: 'Found people disproportionately stick with whatever option currently applies to them — across insurance plans, retirement allocations, and other real choices — well past what ordinary economic theory predicts, establishing status quo bias as the foundation later default research built on.',
    },
    {
      source: 'Madrian & Shea, “The Power of Suggestion” (2001)',
      finding: 'Switching a company retirement plan from opt-in to automatic enrollment produced a large, rapid rise in new-hire participation, and most auto-enrolled employees kept the default rate and fund rather than customizing either — one of the most repeatedly confirmed results in behavioral finance.',
    },
    {
      source: 'Johnson & Goldstein, “Do Defaults Save Lives?” (2003)',
      finding: 'Compared organ-donor registration across European countries with opt-in versus opt-out consent laws and found a very large gap in registered consent status between the two regimes.',
      caveat: 'This measures registered legal consent, not organs actually transplanted. Most opt-out countries still consult next-of-kin, and actual donation rates across opt-in and opt-out countries differ far less than the consent-rate gap implies — reviews attribute much of the variation to transplant infrastructure (Spain, the usual success story, credits its dedicated coordinator system) rather than the legal default alone. Treat the headline statistic as real but considerably narrower than its popular retelling.',
    },
    {
      source: 'McKenzie, Liersch & Finkelstein, “Recommendations Implicit in Policy Defaults” (2006)',
      finding: 'Found people infer that a default reflects the choice-architect’s implicit advice about the best option, showing defaults move behavior partly through perceived endorsement rather than effort avoidance alone.',
    },
    {
      source: 'Carroll, Choi, Laibson, Madrian & Metrick, “Optimal Defaults and Active Decisions” (2009)',
      finding: 'Compared standard defaults against active choosing — an explicit decision with no pre-selection — and found active choice can outperform a poorly-set default while still simplifying the decision, provided non-response carries a real consequence.',
    },
    {
      source: 'Mertens, Herberz, Hahnel & Brosch, “The Effectiveness of Nudging” (2022)',
      finding: 'A large meta-analysis reporting a meaningful positive average effect of choice-architecture interventions pooled across many behavioral domains and nudge types.',
    },
    {
      source: 'Maier, Bartoš, Stanley, Shanks, Harris & Wagenmakers, “No Evidence for Nudging After Adjusting for Publication Bias” (2022)',
      finding: 'Re-analyzed similar meta-analytic nudge data using statistical corrections for publication bias and found the average effect shrank drastically, toward a figure not clearly distinguishable from zero.',
      caveat: 'The two teams dispute each other’s correction methods; the disagreement remains unresolved. Treat general “nudging works” claims as a live controversy, clearly separate from the much better-supported, narrower claim that defaults specifically move enrollment-type behavior.',
    },
    {
      source: 'Choi, Laibson, Madrian & Metrick, research on financially sophisticated employees',
      finding: 'Found employees with direct financial-industry expertise still anchor on default contribution rates and fund menus in their own accounts, at rates not meaningfully different from the general population — showing the effect doesn’t require ignorance of how the system works.',
    },
  ],
  takeaways: [
    'Defaults work through at least three separate channels — effort, implied endorsement, and loss aversion relative to the status quo — not one single “laziness” mechanism.',
    'The automatic-enrollment result is among the most robust findings in behavioral science. Treat it as a genuinely safe bet for enrollment-type decisions specifically.',
    'The organ-donation statistic you’ve likely heard measures registered consent, not lives saved — actual transplant rates differ far less across opt-in and opt-out countries than the headline implies.',
    '“Nudging” as a general category took a real hit in 2022: a large meta-analysis’s average effect shrank drastically once a second team corrected for publication bias, and the dispute remains open.',
    'Financial expertise does not neutralize default effects — even specialists anchor on the pre-set contribution rate and fund menu in their own accounts.',
    'Judge every specific nudge claim on its own mechanism and its own evidence — “a default” and “a nudge in general” do not deserve the same level of trust.',
  ],
};
