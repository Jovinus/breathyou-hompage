# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing homepage for Breath You (브레스유), a medical-AI startup, served at `breathyou.care`. It is an [Astro](https://astro.build) static site — bilingual (Korean / English), aimed at investors and partners.

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server with hot reload — http://localhost:4321
npm run build    # static build → dist/
npm run preview  # serve the built dist/
```

There are no tests or linters. Verify changes by running `npm run build` (it type-checks `.astro` files and fails on errors) and reviewing in `npm run dev`.

## Architecture

**All site text lives in `src/data/content.ts`** — a single `content` object keyed by language (`ko`, `en`). Each language holds the full content tree (hero, problem, solution, research, advantage, market, roadmap, team, contact, footer). Editing copy almost always means editing only this file.

The rendering flow:
- `src/pages/index.astro` (`/`) and `src/pages/en/index.astro` (`/en/`) each pick `content.ko` / `content.en` and pass it to `src/components/Site.astro`.
- `Site.astro` composes `Base.astro` (layout) + `Nav` + the nine section components + `Footer`, passing the whole content object down as the `t` prop.
- Every section component receives `t: Content` and reads its own slice (e.g. `t.hero`).

**Adding a section** = add a key to both `ko` and `en` in `content.ts`, create a component in `src/components/`, and wire it into `Site.astro`.

### Typing gotcha

`content` is declared `as const`, so `Content` is a union of the `ko` and `en` literal types. If you add a field to one object in an array (e.g. one team member or product), **add it to every sibling** — otherwise the union type makes that field unsafe to access in the component's `.map()`.

## Content policy (important)

The site is sourced from a confidential business plan but **deliberately omits sensitive numbers**: no revenue targets, funding amounts, valuation, or exit plans. Keep content to vision, market sizing (TAM/SAM/SOM/LAM), validation, and roadmap. Detailed IR material is shared privately, not on the site.

`*.pdf` is gitignored — the business plan PDF must never be committed or deployed.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Astro and deploys to GitHub Pages. GitHub Pages is configured with `build_type: workflow` (GitHub Actions), and the custom domain `breathyou.care` is preserved via `public/CNAME` (copied into `dist/` on build). There is no separate staging environment — a push to `main` is a production deploy.

## Assets

`public/` is served at the site root. `public/logo.png` is the brand logo; `public/team/` holds team photos referenced by `photo` paths in `content.ts`.
