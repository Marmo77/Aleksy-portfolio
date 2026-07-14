<div align="center">

# ADobrodziej — Developer Portfolio

A production-grade personal portfolio for **Aleksy Dobrodziej** — a frontend-leaning
developer from Poland. Built as a fully componentized, typed, data-driven Next.js
application, with a dark/light mint theme, animated sections, live GitHub data, and
dedicated case-study pages for each project.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white)



</div>

<div align="center">

![WebsiteImage]("/imgs/gh_image.jpg")

</div>

---

## ✨ Highlights

- **App Router, fully typed** — every route lives under `app/`, and there is no hardcoded
  copy in JSX. All content comes from a single typed data layer (`data/site.ts`).
- **One dynamic route for all projects** — `/projects/[slug]` renders each case study from
  data, pre-rendered at build time via `generateStaticParams()` with per-project metadata.
- **Dark / light theme** — a mint-accented design system driven by CSS variables and
  `next-themes`, theme-aware down to the code-window syntax colors and background glows.
- **Live GitHub contributions** — the hero's yearly contribution total is fetched
  server-side through a cached Route Handler, with a graceful fallback if the API is down.
- **Motion, done tastefully** — scroll-reveal sections, an animated contribution heatmap,
  a marquee, cursor-follow spotlights, and aurora backgrounds, all respecting
  `prefers-reduced-motion`.
- **Responsive to ~320px** — the hero grid, bento grids, agency chips, and alternating
  project rows all collapse cleanly to a single column, with no horizontal overflow.
- **Accessible form** — the contact form uses React Hook Form + Zod validation with a
  privacy-consent step, and falls back to a `mailto:` submit (no backend required).

## 🧱 Tech stack

| Layer | Tooling |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router), [React 19](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + CSS variable theme tokens |
| UI primitives | [shadcn/ui](https://ui.shadcn.com) on [Radix UI](https://www.radix-ui.com) |
| Motion | [Framer Motion](https://www.framer.com/motion/), `react-intersection-observer` |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) (class strategy) |
| Icons | [lucide-react](https://lucide.dev) |
| Forms | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| Fonts | `next/font` — Space Grotesk (display), Inter (body), JetBrains Mono (code) |
| Utilities | `class-variance-authority`, `clsx`, `tailwind-merge` |

## 📂 Project structure

```
app/
  (main)/
    layout.tsx              # Navbar + Footer wrap every page in this group
    page.tsx                # Homepage — assembles all sections in order
    projects/[slug]/        # Dynamic project case-study page
    privacy/                # Privacy policy
  api/github-contributions/ # Cached Route Handler for the yearly contribution total
  globals.css              # Tailwind base + CSS variable theme tokens + keyframes
components/
  layout/                  # navbar, footer, theme toggle, active-section hook
  hero/ about/ skills/     # one folder per homepage section
  evidence/ agency/ projects/ contact/
  shared/                  # Reveal, Surface, Spotlight, CountUp, icons
  ui/                      # shadcn/ui primitives
data/
  site.ts                  # All copy & structured content (single source of truth)
  theme.ts                 # Color tokens & font config
lib/
  utils.ts                 # cn() helper
public/
  screenshots/ gifs/       # Project imagery
```

## 🚀 Getting started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint with ESLint
```

## 📝 Editing content

Almost everything on the site — copy, stats, nav links, skills, evidence cards, projects,
and contact details — is defined in **`data/site.ts`**. Components read from it and render
via `.map()`, so updating a value in one place updates it everywhere (for example, the
yearly contribution number drives both the hero stat and the heatmap copy).

To add or change a project, edit the `projects.items` array; the homepage list, the
`/projects/[slug]` detail page, prev/next navigation, and static generation all pick it up
automatically.

## ☁️ Deployment

Optimized for [Vercel](https://vercel.com). Push the repo, import it, and it deploys with
zero configuration. The GitHub-contributions Route Handler is cached (`revalidate: 3600`)
to stay within the public API's rate limits.

---

<div align="center">
<sub>Designed & built by Aleksy Dobrodziej · <a href="https://addigital.vercel.app/">AD.digital</a></sub>
</div>
