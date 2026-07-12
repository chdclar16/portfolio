# Chad Manuel — Portfolio

Personal portfolio site built with Next.js 13 App Router.

Live at [chadmanuel.dev](https://chadmanuel.dev)

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript (strict) + JavaScript (legacy components)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: Resend SDK
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Scripts

```bash
npm run dev        # development server
npm run build      # production build
npm run lint       # ESLint
npm run typecheck  # TypeScript check (tsc --noEmit)
```

## Environment Variables

Create a `.env.local` file:

```
RESEND_API_KEY=your_key_here
FROM_EMAIL=your_sender@email.com
```

## Project Structure

```
app/
  api/send/route.js     # Contact form API (Resend)
  components/           # Existing page sections
  page.js               # Single-page layout
data/
  portfolioData.ts      # Single source of truth for all content
  theme.ts              # Design tokens (tokyonight + editorial)
types/
  portfolio.ts          # Shared TypeScript interfaces
public/images/          # Static assets
```

## Redesign (In Progress)

A dual-view redesign is underway on the `redesign` branch, adding:

- **Editorial view** — light, minimal, recruiter-facing
- **Neovim/tmux view** — tokyonight dark theme, terminal aesthetic
- View toggle persisted to `localStorage`
- All content sourced from `data/portfolioData.ts`

## Contact

- Email: chad.manuel2013@gmail.com
- GitHub: [chdclar16](https://github.com/chdclar16)
- LinkedIn: [chadmanuel](https://www.linkedin.com/in/chadmanuel/)
