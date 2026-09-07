# Cognitive Operator — Behavioral Science & Strategic Interaction PWA

An executive-grade, mobile-optimized Progressive Web Application designed to master human behavior, cognitive traps, and strategic interaction dynamics.

**Live:** [cognitive-operator-prath.vercel.app](https://cognitive-operator-prath.vercel.app/)
**Full docs:** [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md)

## Quick Start

### Development Server
```bash
npm run dev
```
- Local URL: `http://localhost:5173`
- Network (phone on the same Wi-Fi): `http://<your-lan-ip>:5173`

Over plain `http` the browser withholds `navigator.clipboard`, so Copy buttons fall back to a legacy path, and the service worker will not register (it needs a secure context). For install/offline testing use `localhost` or the HTTPS deploy.

### Production Build
```bash
npm run build
```
Compiles a production-ready bundle into `/dist`. `npm run preview` serves it — the only way to exercise the service worker locally.

### Quality Gates
```bash
npm run verify
```
Runs lint → typecheck → tests (data-integrity + router), the same gate CI enforces before deploying.

## Deep Links

Every view is addressable, so you can text yourself a concept before a meeting:

| URL | Opens |
|-----|-------|
| `#/c/23` | Concept #23 directly |
| `#/arena?tag=Negotiation` | Field Weaponry, filtered to negotiation scripts |
| `#/?sphere=social-dynamics&difficulty=Lethal` | Curriculum, pre-filtered |
| `#/vault` | Mastery Vault |

## Deployment

- **Vercel (primary)** — `vercel.json` is pre-configured; `npx vercel` deploys.
- **GitHub Pages (mirror)** — auto-deploys from `master` via GitHub Actions after the quality gates pass.

Both work from the same build: `base: './'` plus relative manifest paths mean the app installs correctly at a root domain *and* under a project subpath.
