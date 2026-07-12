# CLAUDE.md
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
```bash
npm run dev        # start dev server (localhost:3000)
npm run build      # production build
npm run lint       # ESLint via next lint
npm run typecheck  # tsc --noEmit — must pass clean (added in CM-1)
```

## Current architecture
Single-page Next.js 13 App Router portfolio. All sections live on one page
(`app/page.js`) stacked vertically:
`NavBar → HeroSection → AboutSection → ProjectSection → EmailSection → Footer`.

**Smooth scroll navigation** — `react-scroll`. Every section is wrapped in
`<Element name="...">`; navbar links use `Link`/`ScrollLink`. The fixed navbar is
~180px tall, so scroll offsets are `-180` in `NavLink.jsx`.

**Client components** — anything using hooks, framer-motion, or react-scroll needs
`"use client"` at the top.

**Content is hardcoded** — `projectsData` in `ProjectSection.jsx`; `frontEndSkills`,
`backEndSkills`, `otherTechnicalSkills` in `AboutSection.jsx`. No CMS.

**Contact form** — `EmailSection.jsx` POSTs to `app/api/send/route.js`, which sends
via the Resend SDK. Requires `.env` with `RESEND_API_KEY` and `FROM_EMAIL`.

> This section describes the site being REPLACED. Rewrite it in CM-5 once the old
> components are removed.

## Redesign in progress                              [NEW]
Replacing the above with a dual-view portfolio: an Editorial view (light, minimal,
recruiter-facing) and a Neovim/tmux view (tokyonight), swapped by a toggle in a
persistent header. Tracked as tickets CM-1 through CM-6.

- Content moves out of components into `data/portfolioData.ts` — the single source
  of truth. Never hardcode content in a component again.
- `data/theme.ts` is the ONLY place a hex color may be defined.
- `types/portfolio.ts` holds all shared types.
- The Resend contact form and `app/api/send/route.js` are KEPT. Port the form into
  both views rather than replacing it with a mailto link.

## Language                                          [NEW]
The existing codebase is JavaScript. The redesign is TypeScript under `strict`,
adopted incrementally (`allowJs: true`, `checkJs: false`). Do not convert existing
`.js` files unless asked.

## Workflow — important                              [NEW]
- Never commit directly to `main`. Branch off `redesign`.
- One ticket = one branch = one PR. Finish it, open the PR, summarize, then STOP
  and wait for my approval. Do not start the next ticket unsolicited.
- If a ticket is bigger than described, say so and propose a split.
- Run `npm run typecheck` and `npm run lint` before opening any PR.
- Everything before CM-5 is additive — do not touch existing components or routes.

## Key dependencies
| Package | Purpose |
|---|---|
| `framer-motion` | Entrance animations (opacity/scale/y transitions) |
| `react-scroll` | Smooth scroll + active link detection |
| `react-type-animation` | Typing effect in HeroSection |
| `react-icons` | Tech skill icons in AboutSection |
| `@heroicons/react` | Hamburger/close icons in NavBar |
| `resend` | Transactional email from contact form |

> `react-scroll`, `react-type-animation`, and `@heroicons/react` may become unused
> after CM-5. Remove them from `package.json` then, not before.

## Design tokens
**Current site** (being replaced): dark throughout — `#121212` page, `#181818` cards,
`#33353F` borders, `#ADB7BE` muted text, accent gradient
`from-blue-900 via-blue-500 to-neutral-300`.

**Redesign**: all colors live in `data/theme.ts` (tokyonight + editorial accent).
No hex values anywhere else.

Images are served from `public/images/` and referenced relatively, e.g.
`./images/HeadShot.png`.
