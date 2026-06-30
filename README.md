# ASCEND FOR ALL (AFA) — Website

Marketing site for **ASCEND FOR ALL (AFA)**, a national, disability-led NGO in
Ethiopia removing economic and educational barriers for persons with
disabilities through inclusion, empowerment and advocacy.

An award-style single-page experience that treats **accessibility as a
first-class requirement** — fitting for a disability-led organisation.

## Tech stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | React 19 + Vite                         |
| Styling        | Tailwind CSS v4 (`@theme` design tokens)|
| Smooth scroll  | Lenis (synced to GSAP ticker)           |
| Scroll effects | GSAP + ScrollTrigger                    |
| UI motion      | Framer Motion                           |
| Icons          | lucide-react                            |
| Hosting        | Vercel (static)                         |

> **No backend.** All content is static. The contact form posts to a
> third-party endpoint (or `mailto`), so there is no server to run or secure.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Contact form (optional)

The form works with zero configuration: with nothing set it opens the visitor's
email client pre-filled (`mailto`).

To receive submissions in your inbox instead, point it at any no-backend form
service (Web3Forms, Formspree, …):

```bash
cp .env.example .env
# then edit .env, e.g. for Web3Forms:
VITE_FORM_ENDPOINT=https://api.web3forms.com/submit
VITE_FORM_KEY=your-access-key
```

In production, add `VITE_FORM_ENDPOINT` (and `VITE_FORM_KEY` if needed) under
**Vercel → Project → Settings → Environment Variables**.

## Deploying to Vercel

1. Push this repo to GitHub/GitLab.
2. Import it in Vercel — the framework, build command (`npm run build`) and
   output directory (`dist`) are auto-detected (`vercel.json` pins them).
3. (Optional) add the `VITE_WEB3FORMS_KEY` env var.
4. Deploy. That's it.

Or from the CLI: `npm i -g vercel && vercel`.

## Accessibility notes

- Semantic landmarks (`header`/`nav`/`main`/`footer`), `aria-labelledby` on every section.
- "Skip to main content" link, visible focus rings, keyboard-operable nav + mobile menu.
- Every animation (Lenis, GSAP parallax, Framer reveals, marquee, counters)
  **fully respects `prefers-reduced-motion`** and degrades to a static layout.
- Decorative elements are `aria-hidden`; the kinetic headline still reads as plain text.

## Editing content

All copy lives in [`src/data/site.js`](src/data/site.js) — update text there and
every section stays in sync. Components are purely presentational.

## Replacing placeholder content

This build ships with **temporary placeholders** so it looks finished:

- **Photos** are license-free Unsplash images, referenced by id at the top of
  `src/data/site.js` (the `img()` helper, plus `heroImage` / `aboutImage` /
  `bandImage`, and the `image` fields on `programs` and `testimonials`).
  Replace the ids with AFA's own **consented** photography, or drop files into
  [`public/images/`](public/images/) and point the fields at `/images/...`.
- **Impact stories** are clearly-labelled *illustrative* samples — replace with
  real, consented testimonials before going live.

## Project structure

```
src/
  data/site.js            All AFA content (single source of truth)
  hooks/                  useLenis, useReducedMotion
  lib/motion.js           Shared Framer Motion variants
  components/
    layout/               Navbar, Footer, SkipLink
    ui/                   Section, Reveal, AnimatedHeading, Marquee, Magnetic, Counter
    sections/             Hero, About, Programs, Focus, VisionMission, Values,
                          Principles, Band, Impact, Goals, Objectives, Donate, Contact
  App.jsx                 Composition + Lenis + reduced-motion config
```
