# Bhavin Gunjariya — Portfolio

A fast, animated personal portfolio for **Bhavin Gunjariya**, React / React Native developer.
Dark, premium "midnight + champagne gold" theme with scroll-reveal motion, a filterable
project showcase, and per-project case-study pages.

🔗 **Live:** https://bhavin-02.github.io

## Tech stack

- **React 19** + **Vite 7** + **TypeScript**
- **Tailwind CSS v4** (design tokens + utilities in `src/styles/globals.css`)
- **Framer Motion** (`motion`) for animation, **Lenis** for smooth scrolling
- **React Router** for the project detail routes
- **lucide-react** icons

## Getting started

```bash
bun install      # or: npm install
bun run dev      # start the dev server (http://localhost:5173)
bun run build    # type-check + production build to /dist
bun run preview  # preview the production build
bun run lint     # run ESLint
```

## Project structure

```
src/
├── components/          # Section components (Hero, About, Experience, …)
│   └── common/          # Reusable motion primitives (Reveal, TiltCard, …)
├── data/
│   ├── portfolio.ts     # Profile, experience, skills, stats
│   └── projectsData.ts  # Projects + per-project accent colors
├── pages/               # HomePage, ProjectDetailPage, NotFoundPage
├── styles/globals.css   # Tailwind entry + design system (tokens, keyframes)
└── constants/           # Contact / social links
public/
├── logo.svg             # Favicon (gold "B" monogram)
├── og-image.jpg         # Social share preview (1200×630)
└── Bhavin-Gunjariya-Resume.pdf
```

## Editing content

- **Projects** — edit `src/data/projectsData.ts`.
- **Experience / skills / bio / stats** — edit `src/data/portfolio.ts`.
- **Contact & social links** — edit `src/constants/constants.ts`.
- **Theme colors / fonts** — edit the tokens at the top of `src/styles/globals.css`.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow
(`.github/workflows/main.yml`), which builds with `bun run build` and deploys
`/dist` to GitHub Pages.
