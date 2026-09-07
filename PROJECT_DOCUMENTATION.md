# COGNITIVE OPERATOR
### Comprehensive Project Documentation & Architectural Field Manual

**Version:** 1.1.0  
**Repository:** [https://github.com/prathtwitter/cognitive-operator](https://github.com/prathtwitter/cognitive-operator)  
**Live Production URL (primary):** [https://cognitive-operator-prath.vercel.app/](https://cognitive-operator-prath.vercel.app/)  
**Mirror:** [https://prathtwitter.github.io/cognitive-operator/](https://prathtwitter.github.io/cognitive-operator/)  
**Deployment Target:** Vercel Edge (primary) / GitHub Pages (CI mirror)  
**Date:** September 2026  

---

## 1. Executive Summary & Vision

**Cognitive Operator** is a Progressive Web Application (PWA) engineered for high-performing executives, negotiators, strategists, and debaters. 

Unlike standard pop-psychology literature that relies on vague anecdotes, Cognitive Operator synthesizes **40 empirically grounded phenomena** across **cognitive neuroscience, evolutionary biology, behavioral economics, and game theory** into an actionable, mobile-first field guide.

### Core Philosophy
* **Zero Academic Fluff:** Every concept is paired with an everyday mental model analogy, concrete human behavior triggers, and verbatim conversational weaponry.
* **Rapid Tactical Retrieval:** Designed for use before or during high-stakes interactions (boardroom meetings, contract negotiations, conflict de-escalation).
* **High-Signal Grounding:** Direct access to curated lectures, Nobel prize papers, and landmark monographs (<45 minutes each), completely bypassing 300-page business books.
* **Offline & Mobile Ergonomics:** Zero-latency client-side execution, PWA standalone installation on iOS and Android, and complete local persistence without mandatory user accounts. A service worker precaches the shell and hashed assets, so a cold launch with no network still boots the full curriculum — verified end-to-end in headless Chrome with the network cut (see §9).

---

## 2. System Architecture & Tech Stack

```
                                  ┌─────────────────────────────┐
                                  │       Client Browser        │
                                  │   (Mobile / Tablet / PC)    │
                                  └──────────────┬──────────────┘
                                                 │
                                                 ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                 Vite + React 19 + TypeScript                            │
│                                                                                         │
│  ┌───────────────────────┐  ┌────────────────────────┐  ┌────────────────────────────┐  │
│  │ UserProgressContext   │  │   Curriculum Dataset   │  │     Interactive Views      │  │
│  │ (localStorage sync)   │  │  (4 Spheres, 40 Models)│  │ (Weaponry, Lab, Vault)     │  │
│  └───────────────────────┘  └────────────────────────┘  └────────────────────────────┘  │
│                                                                                         │
│  Tailwind CSS v4 (Modern Obsidian Executive Palette) + Lucide Component System         │
└────────────────────────────────────────┬────────────────────────────────────────────────┘
                                         │
                        ┌────────────────┴────────────────┐
                        ▼                                 ▼
             GitHub Pages (Automated CI)           Vercel Edge Platform
```

### Technology Breakdown
* **Framework:** React 19 + TypeScript (Strict Type Safety, `verbatimModuleSyntax`).
* **Build System:** Vite 8.2 with `@tailwindcss/vite` plugin (sub-500ms production builds).
* **Styling Engine:** Tailwind CSS v4 with custom dark-mode-first tokens:
  * Obsidian Background (`#090a0f`)
  * Elevated Card Surface (`#11131a`)
  * Card Border Accent (`#222634`)
  * Sphere Chromas: Cyan (Sphere 1), Purple (Sphere 2), Amber (Sphere 3), Emerald (Sphere 4).
* **PWA & Mobile Optimization:**
  * Standalone Display Mode (`manifest.webmanifest`), with **relative** `start_url`/`scope`/icon paths so a single build installs correctly at a root domain *and* under a project subpath.
  * **Service worker** (`public/sw.js`, no build plugin): network-first for navigations (new deploys land on the next online launch), cache-first for content-hashed `/assets/*`, stale-while-revalidate for icons and the manifest. Bump `CACHE_VERSION` to evict everything.
  * Real PNG icon set rasterized from `icon.svg` — `apple-touch-icon.png` (180², full-bleed so iOS applies its own mask), `icon-192/512.png` (`purpose: any`), `maskable-512.png` (artwork inside the 80% safe zone). SVG-only icons do not render as an iOS home-screen icon.
  * Dynamic Island / Notch safe-area padding (`pb-safe`, `pt-safe`).
  * Pinch-zoom is **not** disabled (WCAG 1.4.4).
* **Routing:** Dependency-free hash router (`src/lib/router.ts`) over `useSyncExternalStore`. Hash-based by design — no server rewrite rules on either host, and the service worker scope is always the app root.
* **Icons:** `lucide-react` (featherweight SVG icon library).
* **State & Persistence:** React Context API backed by zero-dependency `localStorage` syncing for bookmarks, mastered flags, and scenario quiz scores. Only this app's three `cog_operator_*_v1` keys are ever written or cleared.

---

## 3. The 4-Sphere Curriculum Taxonomy (All 40 Concepts)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              THE 40 COGNITIVE PHENOMENA                                │
├──────────────────────────┬──────────────────────────┬──────────────────────────────────┤
│ Sphere                   │ Core Focus               │ Key Thinkers                     │
├──────────────────────────┼──────────────────────────┼──────────────────────────────────┤
│ 1. Internal Architecture │ Biases, Ego Defense      │ Kahneman, Kahan, Ross, Haidt     │
│ 2. Social Dynamics       │ Status, Reciprocity      │ Henrich, Cialdini, Kuran, Brehm  │
│ 3. Strategic Interaction │ Game Theory, Leverage    │ Schelling, Axelrod, Akerlof, Voss│
│ 4. Behavioral Economics  │ Incentives, Systems      │ Thaler, Laibson, Schultz, Siebert│
└──────────────────────────┴──────────────────────────┴──────────────────────────────────┘
```

### Sphere 1: Internal Architecture & Cognitive Biases (Models 1–10)
How the individual human brain processes data, conserves metabolic energy, rationalizes mistakes, and defends ego identity.

1. **Dual-Process Architecture & Cognitive Miserliness:** Type 1 heuristic substitution vs Type 2 deliberative thought *(Kahneman, Stanovich)*.
2. **Identity-Protective Cognition & Motivated Reasoning:** High intelligence weaponized to protect tribal belonging *(Kahan)*.
3. **Naïve Realism & The Bias Blind Spot:** The conviction that one sees reality unvarnished while opponents are irrational or corrupt *(Ross, Pronin)*.
4. **The Press Secretary Model of Consciousness & Confabulation:** Conscious reason fabricating post-hoc stories for subconscious gut choices *(Gazzaniga, Haidt)*.
5. **Affect Heuristic & Somatic Markers:** Visceral gut sensations misread as objective mathematical risk assessments *(Damasio, Slovic)*.
6. **Bayesian Updating Failures & Base-Rate Neglect:** Vivid anecdotes obliterating large-scale statistical probability *(Kahneman, Tversky)*.
7. **Epistemic Arrogance & Overprecision:** The Dunning-Kruger trap of setting unrealistically narrow confidence bounds *(Dunning, Kruger)*.
8. **The Illusion of Explanatory Depth (IOED):** Confusing familiarity with causal mechanistic understanding *(Rozenblit, Keil, Fernbach)*.
9. **Fundamental Attribution Error & Actor-Observer Asymmetry:** Judging others by internal character while excusing oneself with external context *(Jones, Harris)*.
10. **Effort Justification & Induced Compliance Dissonance:** Sanctifying outcomes that required painful sacrifice to avoid admitting wasted effort *(Festinger, Aronson)*.

### Sphere 2: Social Dynamics & Persuasion (Models 11–20)
How status hierarchies, reciprocity obligations, tribal barriers, and conformity dictate group compliance.

11. **Costly Signaling Theory & Status Typologies:** The Handicap Principle; Dominance (fear) vs Prestige (competence) *(Zahavi, Henrich)*.
12. **Preference Falsification & Pluralistic Ignorance:** Silent consensus hiding unanimous private disagreement *(Kuran, Asch)*.
13. **Psychological Reactance & Autonomy Defense:** Defiance triggered when an agent feels behavioral freedom is restricted *(Brehm)*.
14. **Minimal Group Paradigm & In-Group Favoritism:** Arbitrary categorization sparking instant tribal warfare and resource hoarding *(Tajfel, Sherif)*.
15. **Strategic Reciprocity & Concession Framing:** The Door-in-the-Face technique and evolutionary debt-balancing *(Cialdini, Trivers)*.
16. **Informational Cascades & Social Proof:** Rational herd imitation producing fragile collective bubbles *(Bikhchandani, Hirshleifer)*.
17. **Emotional Contagion & Autonomic Mirroring:** Nonverbal transmission of sympathetic panic and vagal calm *(Hatfield, Cacioppo)*.
18. **Counter-Signaling Theory:** Middle-tier strivers over-signaling while true elites drop status markers *(Feltovich, Harbaugh, To)*.
19. **Moral Foundations & Sacred Values Theory:** Taboo trade-offs where economic logic feels like moral blasphemy *(Haidt, Tetlock)*.
20. **Diffusion of Responsibility & The Bystander Paradigm:** Collective paralysis in groups where individual ownership is undefined *(Darley, Latané)*.

### Sphere 3: Strategic & High-Stakes Interactions (Models 21–30)
The psychology of conflict, asymmetric negotiation, leverage, and game-theoretic communication.

21. **Prospect Theory & Framing Asymmetry:** The 2:1 loss aversion multiplier and domain-shifting risk behavior *(Kahneman, Tversky)*.
22. **Strategic Ambiguity & Off-Record Indirect Speech:** Preserving plausible deniability and managing common knowledge *(Pinker, Schelling)*.
23. **Focal Points & Anchoring Gravity Wells:** Salient psychological landmarks and numeric anchoring in bargaining *(Schelling, Tversky)*.
24. **Signaling Asymmetry & Adverse Selection:** The "Lemons" problem and skin-in-the-game warranties *(Akerlof, Spence)*.
25. **Tit-for-Tat & Retaliatory Discipline:** Nice, provocable, forgiving, and clear in repeated games *(Axelrod)*.
26. **Affect Labeling & De-escalation Dynamics:** Down-regulating amygdala hyperactivity by verbalizing emotional states *(Lieberman, Voss)*.
27. **The Winner’s Curse & Ego Escalation:** Catastrophic value destruction in competitive bidding wars *(Capen, Bazerman)*.
28. **Commitment Devices & Strategic Inflexibility:** "Burning the ships" to force the counterparty to concede *(Schelling)*.
29. **BATNA & Power-Dependence Relations:** Leverage as the inverse of dependency and quality of walkaway options *(Fisher, Ury, Emerson)*.
30. **Fixed-Pie Perception & Integrative Bargaining:** Unlocking positive-sum trade-offs via logrolling across non-competing currencies *(Bazerman, Raiffa)*.

### Sphere 4: Behavioral Economics & Motivation (Models 31–40)
Incentive gaming, intertemporal choice, friction, and systemic irrationality.

31. **Hyperbolic Discounting & Present Bias:** Non-linear decay of future rewards driving impulsive choices *(Ainslie, Laibson)*.
32. **Choice Architecture & Default Mechanics:** The outsized power of default options to dictate 80%+ of compliance *(Thaler, Sunstein)*.
33. **Goodhart’s & Campbell’s Laws:** When a measure becomes a target, it ceases to be a good measure *(Goodhart, Campbell)*.
34. **The Sunk Cost Fallacy & Escalation of Commitment:** Throwing good resources after bad to justify historical waste *(Staw, Arkes)*.
35. **Dopaminergic Prediction Error & Variable Ratio Schedules:** Unpredictable rewards fueling compulsive habit loops *(Schultz, Skinner)*.
36. **The Endowment Effect & Divestiture Aversion:** The 2x valuation inflation applied to possessed items and ideas *(Thaler, Knetsch)*.
37. **Decision Fatigue & Cognitive Depletion Traps:** Degradation of executive willpower leading to status-quo defaulting *(Baumeister, Levav)*.
38. **Extrinsic Incentive Crowding-Out:** "A fine is a price"—cash replacing moral contracts and destroying intrinsic motivation *(Gneezy, Rustichini)*.
39. **Mental Accounting & Non-Fungibility Traps:** Segregating identical money into irrational psychological buckets *(Thaler)*.
40. **The Cobra Effect & Perverse Feedback Loops:** Well-intended incentives actively breeding the exact crisis being penalized *(Siebert)*.

---

## 4. User Experience & Screen Modules

### A. Curriculum Explorer (`activeTab === 'curriculum'`)
* **Sphere Selector Cards:** Interactive cards displaying the 4 core disciplines with color-coded badges, conceptual tags, and models count.
* **Difficulty Filters:** Quickly isolate *Foundational*, *Advanced*, or *Lethal* models.
* **Concept Cards:**
  * Number index badge (`#01` to `#40`)
  * Title & Tagline
  * **💡 Everyday Mental Model Analogy Badge**
  * Thinkers pills
  * Quick-weapon preview with 1-click clipboard copy
  * Bookmark and Mastered toggle states.
  * The whole card is mouse-clickable; keyboard users get a real focusable "Read Full Breakdown" button (the card cannot itself be a `<button>` without illegally nesting the bookmark/mastery controls).

### B. Field Weaponry Matrix ("In the Arena") (`activeTab === 'weaponry'`)
* Designed for emergency lookup immediately before a negotiation or during a recess.
* **Context Filter Tags:** `Executive`, `Debate`, `Negotiation`, `Crisis`, `Interpersonal`.
* **Situational Search:** Real-time filtering by crisis symptoms (*"deadlock"*, *"blame"*, *"gut feel"*, *"quota"*, *"panic"*).
* **Verbatim Script Cards:** High-contrast monospace script display with 1-tap copy to clipboard and "Why It Works" strategic rationales.
* Direct deep-dive links to inspect the underlying theory.

### C. Live Scenario Lab (`activeTab === 'scenarios'`)
* Interactive case-study simulations covering realistic corporate and relationship dilemmas:
  * Scenario 1: *The Charismatic Infrastructure Pitch* (Dual-Process Substitution)
  * Scenario 2: *The Phantom Reorganization Assent* (Pluralistic Ignorance)
  * Scenario 3: *The Hostile Outage Phone Call* (Affect Labeling & De-escalation)
  * Scenario 4: *The Unsinkable $12M Legacy Project* (Sunk Cost Fallacy)
  * Scenario 5: *The Dogmatic Policy Argument* (Illusion of Explanatory Depth)
* Real-time diagnostic verification with immediate explanations and recommended conversational weaponry.
* Live mastery score tracker.

### D. Personal Mastery Vault (`activeTab === 'vault'`)
* **Pre-Meeting Review:** Quick access to all bookmarked concepts.
* **Curriculum Progress:** Visual circular and bar indicators tracking completion toward 40/40 mastery.
* **Readiness Score:** Automatic rank assignment (*Novice* $\rightarrow$ *Operator* $\rightarrow$ *Elite*).
* Reset and local storage management tools.

### E. Global Omnibar Search (`⌘K` / `Ctrl+K`)
* Instant modal search indexing titles, taglines, thinkers, definitions, phrases, and tags with zero network latency.
* `Enter` jumps straight to the top result; `Esc` or a backdrop click dismisses.

### F. Deep Links & Shareable URLs
Every view is addressable, so a concept can be texted to yourself before a meeting and the Android back gesture behaves.

| URL | Opens |
|-----|-------|
| `#/` | Curriculum |
| `#/?sphere=social-dynamics&difficulty=Lethal` | Curriculum, pre-filtered |
| `#/arena?tag=Negotiation&q=deadlock` | Field Weaponry, pre-filtered and pre-searched |
| `#/lab` | Scenario Lab |
| `#/vault` | Mastery Vault |
| `#/c/23` | Concept #23 (short share form — the number matches the `#23` badge in the UI) |
| `#/arena?tag=Crisis&c=26` | Concept #26 open *over* the filtered Arena |

**History semantics.** Opening a concept and switching tabs push history entries; filter and search changes replace (so filtering never floods the back stack, and search is debounced 250 ms before it reaches the URL). Paging prev/next inside the modal replaces, so closing after browsing ten concepts takes one Back, not ten. The close button uses a real history step when this app pushed the entry, and falls back to a replace on a cold deep link so it can never navigate off the site.

---

## 5. Local Setup & Mobile Access Guide

### Prerequisites
* Node.js v18+ (tested with v24.13.1)
* npm v9+ (tested with v11.8.0)

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Run the development server with local network broadcasting
npm run dev

# 3. Compile production static bundle
npm run build
```

### Scripts

| Script | Does |
|--------|------|
| `npm run dev` | Vite dev server on port **5173**, bound to `0.0.0.0` for phone testing |
| `npm run build` | `tsc -b` across all three TS projects, then the Vite production build |
| `npm run preview` | Serve `dist/` (the only way to exercise the service worker locally) |
| `npm run lint` | oxlint |
| `npm run typecheck` | `tsc -b` only |
| `npm test` | Vitest — data-integrity and router suites |
| `npm run verify` | lint → typecheck → test, the same gate CI runs |

### Accessing on Mobile Devices
The development server automatically binds to `0.0.0.0`, allowing instant phone testing:
1. Ensure your smartphone is connected to the same Wi-Fi network as your development machine.
2. Open Safari (iOS) or Chrome (Android) and enter:
   ```text
   http://<your-lan-ip>:5173
   ```
   Note: over plain `http` the browser withholds `navigator.clipboard`, so every "Copy" button falls back to a legacy `execCommand` path and reports honestly if even that is refused. The service worker does **not** register over `http` (it needs a secure context) — install and offline testing must happen against an HTTPS deploy or `localhost`.
3. **PWA Standalone Installation:**
   * **iOS Safari:** Tap the **Share** button $\rightarrow$ Select **"Add to Home Screen"**.
   * **Android Chrome:** Tap the **Three Dots** $\rightarrow$ Select **"Install App"**.

---

## 6. Cloud Deployment Architecture

### Deployment 1: Vercel — **primary**
* **Live URL:** [https://cognitive-operator-prath.vercel.app/](https://cognitive-operator-prath.vercel.app/)
* **Config:** `vercel.json` defines framework (`vite`), build command (`npm run build`), and output directory (`dist`).
* Root-domain hosting, HTTPS with HSTS — the install/offline target.

### Deployment 2: GitHub Pages — CI mirror
* **URL:** [https://prathtwitter.github.io/cognitive-operator/](https://prathtwitter.github.io/cognitive-operator/)
* **Config:** `.github/workflows/deploy.yml` — lint/typecheck/test must pass before build, and only non-PR pushes to `master` deploy.
* Served from the `/cognitive-operator/` subpath. This used to break PWA install because `manifest.webmanifest` is copied verbatim from `public/` (Vite rewrites paths in `index.html`, **not** inside JSON), so its absolute `/icon.svg` and `start_url: "/"` 404'd. Both are now relative, which resolves correctly on either host.

### Path resolution rules (both hosts)
* `vite.config.ts` sets `base: './'`.
* `index.html` may use `/`-prefixed asset paths — Vite rewrites them at build time.
* `public/manifest.webmanifest` and anything else in `public/` must use `./`-relative paths — Vite does **not** rewrite these.
* The service worker resolves its own URL from `import.meta.env.BASE_URL` against the document URL, so its scope is correct on both hosts.

---

## 7. Data Structure Specification

Every concept follows the strict TypeScript schema defined in `src/types/curriculum.ts`:

```typescript
export interface Concept {
  id: string;
  sphereId: 'internal-architecture' | 'social-dynamics' | 'strategic-interactions' | 'behavioral-economics';
  numberInSphere: number;
  globalIndex: number;
  title: string;
  tagline: string;
  plainEnglishAnalogy: string;
  everydayHumanBehavior: string;
  formalTerminology: {
    primaryTerm: string;
    subConstructs?: string[];
    keyThinkers: string[];
    definition: string;
  };
  underlyingMechanism: {
    evolutionaryDriver: string;
    neurologicalBasis: string;
    summary: string;
  };
  realWorldRecognition: {
    personalLifeTrigger: {
      title: string;
      scenario: string;
      hiddenDynamic: string;
    };
    professionalLifeTrigger: {
      title: string;
      scenario: string;
      hiddenDynamic: string;
    };
  };
  conversationalWeaponry: Array<{
    situation: string;
    phrase: string;
    rationale: string;
    contextTag: 'Executive' | 'Debate' | 'Negotiation' | 'Interpersonal' | 'Crisis';
  }>;
  highSignalSource: {
    title: string;
    creatorOrHost: string;
    platform: 'Podcast' | 'Lecture' | 'Paper' | 'Monograph';
    duration: string;
    whyItBeatsTheNoise: string;
    searchQuery: string;
    url?: string;
  };
  tags: string[];
  difficulty: 'Foundational' | 'Advanced' | 'Lethal';
}
```

---

## 8. Maintenance & Extensibility

* **Adding New Models:** Add new objects conforming to `Concept` inside `src/data/sphere1.ts` through `sphere4.ts`. The aggregated indexes in `src/data/index.ts` automatically re-index search, filters, and count badges. Also bump the owning sphere's `conceptsCount` in `src/data/spheres.ts` — a test enforces that it matches reality.
* **Adding New Scenarios:** Add new entries to `SCENARIOS` in `src/data/scenarios.ts`.
* **Exporting / Backing Up Notes:** Future updates can wire export functionality to dump `localStorage` state into a downloadable JSON file.
* **Share links are index-based** (`#/c/23`). Appending concepts is safe; renumbering existing ones breaks previously shared links. Slug ids also resolve (`#/c/dual-process-miserliness`), so a renumber can be survived by sharing slugs instead.

---

## 9. Quality Gates

`npm run verify` (and CI, before any deploy) runs:

| Gate | Covers |
|------|--------|
| `oxlint` | React hook rules, `react-refresh` component-export boundary |
| `tsc -b` | Three TS projects: `src`, `vite.config.ts`, `tests` |
| Vitest — `tests/data-integrity.test.ts` | 40 concepts, unique ids, contiguous `globalIndex`, per-sphere numbering, `conceptsCount` accuracy, ≥2 weapons per concept, valid context tags and difficulties, every `highSignalSource.url` present and `https://`, every scenario `conceptId` resolvable, exactly one correct option per scenario, concept lookup by index and slug |
| Vitest — `tests/router.test.ts` | Hash parsing/building, filter scoping per tab, junk-value fallbacks, round-trip stability |

**PWA verification is not in CI.** Service workers need a real browser, so offline behavior was verified out-of-band by driving headless Chrome over the DevTools Protocol: register → take control → populate cache → cut the network → cold-load `#/c/23` and confirm the app boots and the deep link resolves (10/10 checks). Re-run that harness manually after touching `public/sw.js` or `src/lib/registerSW.ts`.

---

*Cognitive Operator — Engineered for strategic clarity and intellectual sovereignty.*
