---
name: redesign-planner
description: Plans a portfolio redesign — asks about direction, breaks work into sections, defines data contracts, and writes a CLAUDE.md that primes every section build session.
---

# Redesign Planner

When this skill is invoked, follow this protocol in order. Do not skip steps.

---

## Step 1 — Read the current codebase

Before asking the user anything, read these files silently to understand what exists:

- `data/portfolioData.ts` — all available data fields and their types
- `app/layout.js` and `app/page.js` — root structure (what is currently live)
- `tailwind.config.js` — fonts, colors, and extensions already configured
- `next.config.js` — Next.js settings and any experimental flags
- `package.json` — installed dependencies (what is already available to use)

---

## Step 2 — Ask the user these questions

Ask all of these before writing anything. Wait for answers.

1. **Design direction** — What is the visual concept? (e.g., dark terminal, editorial newspaper, brutalist, glassmorphism, etc.) Share a reference URL or describe the feel.
2. **Route** — Replace the current site at `/` or build at a preview route (e.g., `/v2`) while the live site stays untouched?
3. **Sections** — Which sections are needed? Default: Hero, About, Skills, Projects, Contact. Any additions or removals?
4. **New data** — Is there anything new to show that is not already in `portfolioData.ts`? (new projects, a blog, case studies, testimonials, etc.)
5. **Reuse** — Are any components from the current codebase worth keeping, or is this a clean slate?

---

## Step 3 — Produce the plan

Using the codebase knowledge and the user's answers, define the following.

### Shared infrastructure (Session 0)
List everything that must exist before any section can be built:
- Theme CSS variables and their values
- Context providers (if the design has modes or themes)
- Layout shell (the root wrapper, fonts, body styles)
- Any new fields needed in `portfolioData.ts`
- Any shared utility components (animation wrappers, layout primitives)

### Section breakdown
For each section produce a spec block:

```
## <SectionName>
File: app/components/portfolio/<SectionName>.tsx
Renders: <one sentence>
Data: <exact field paths from portfolioData, e.g. profile.name, projects[].stack[]>
Depends on: <shared components or context it needs>
Notes: <any tricky requirements or design details>
```

### Session map
Number every conversation that will be needed:

```
Session 0: Shared infrastructure — theme tokens, layout shell, context, data additions
Session 1: Hero section
Session 2: About section
Session 3: Skills section
Session 4: Projects section
Session 5: Contact section
(add or remove sessions based on the user's section list)
```

---

## Step 4 — Write CLAUDE.md

Write a `CLAUDE.md` at the project root containing everything a fresh Claude session needs to build one section without exploring the codebase.

Use this structure:

```markdown
# Portfolio Redesign — Session Context

## Stack
- Next.js (App Router), TypeScript, Tailwind CSS
- Data source: `data/portfolioData.ts` — single source of truth, do not hardcode content
- Fonts: loaded via `next/font` in the layout
- Styling: Tailwind utility classes + CSS variables for theme tokens

## Design Direction
[paste the user's answer from Step 2]

## Route
[/ or /v2 — and whether the current site must stay live]

## Theme Tokens
[list every CSS variable name and value defined for this redesign]
e.g.
--ed-heading: #111111
--ed-muted: #787774
--ed-border: #EAEAEA
--ed-surface: #F9F9F8

## Shared Components
[file path and one-line description for every shared component]
e.g.
app/components/portfolio/FadeIn.tsx — IntersectionObserver fade-up wrapper, accepts delay prop

## Data Contract
[for each section: which fields it reads from portfolioData]
e.g.
Hero: profile.name, profile.tagline, profile.eyebrow, profile.resumeUrl, profile.email
About: profile.bio, profile.socials.github, profile.socials.linkedin
Skills: skills.frontend[], skills.backend[], skills.other[]
Projects: projects[].id, projects[].title, projects[].description, projects[].stack[], projects[].githubUrl
Contact: profile.email, profile.socials.github, profile.socials.linkedin, profile.resumeUrl

## Session Build Order
[numbered list from the session map]

## Per-Session Instructions
Start every section session with:
> "Implement the [SectionName] section. Read CLAUDE.md for full context. Scope: [file path] only."

Do not read unrelated files. Do not refactor shared components. If something is missing from shared infrastructure, stop and flag it rather than inventing a workaround.

## Section Specs
[paste every section spec block from Step 3]
```

---

## Step 5 — Tell the user what to do next

After writing CLAUDE.md, output a short summary:

- Total number of sessions
- What Session 0 needs to produce (list the shared infrastructure items)
- The exact opening prompt for each session, ready to copy-paste

Example output format:

```
Plan written to CLAUDE.md. Ready to build in [N] sessions.

Session 0 — Shared infrastructure
Prompt: "Set up shared infrastructure for the portfolio redesign. Read CLAUDE.md. Deliverables: [list]."

Session 1 — Hero
Prompt: "Implement the Hero section for the portfolio redesign. Read CLAUDE.md. File: app/components/portfolio/HeroSection.tsx."

...
```

---

## Rules for this skill

- Do not write any component code during planning. Planning only.
- Do not make assumptions about the design direction — ask first.
- The CLAUDE.md must be complete enough that a session can start cold and produce correct code with zero follow-up questions about project context.
- If the user's direction is vague, push for a concrete reference (URL, screenshot, or named aesthetic) before writing the plan.
