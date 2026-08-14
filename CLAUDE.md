# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing homepage for Breath You — the incorporated company **브레스유 (주) / BreathYou Co., Ltd.** (incorporated 2026-08-05) — a medical-AI startup, served at `breathyou.care`. It is an [Astro](https://astro.build) static site — bilingual (Korean / English), aimed at investors and partners.

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server with hot reload — http://localhost:4321
npm run check    # astro check — type-checks .astro frontmatter and content.ts
npm run build    # astro check && astro build → dist/
npm run preview  # serve the built dist/
```

There are no tests or linters. `astro check` is the only gate, so run it: plain `astro build` strips frontmatter types without checking them, which means the `as const` union gotcha below silently builds green. `npm run build` runs the check first, and CI runs `npm run check` before deploying.

## Architecture

Two data files, split by kind:

- **`src/data/content.ts` — copy.** A single `content` object keyed by language (`ko`, `en`). Each language holds the full content tree (`ui`, hero, problem, solution, research, advantage, market, roadmap, team, contact, footer). Editing copy almost always means editing only this file. The `ui` slice holds a11y strings (skip link, nav labels) so `/en/` is not silently Korean.
- **`src/data/site.ts` — data/config.** `SITE_URL`, `LOGO`, `EMAIL`, `PUBLICATIONS_URL`, and the `company` object. **Legal-entity facts live here and only here** — `legalName`, `ceo`, `address`, `bizRegNo` per language, plus `foundedISO` / `foundedLabel`. Footer, JSON-LD, and every logo `alt` read from it, so the brand/legal name appears in no component. `bizRegNo` is `''` until the certificate is issued; empty values are skipped at render time rather than printing a bare label. `address` is the 등기부 wording verbatim for display, with `addressParts` (street / locality / region) feeding the JSON-LD `PostalAddress`.

The rendering flow:
- `src/pages/index.astro` (`/`) and `src/pages/en/index.astro` (`/en/`) each pick `content.ko` / `content.en` and pass it to `src/components/Site.astro`.
- `Site.astro` composes `Base.astro` (layout) + `Nav` + the nine section components + `Footer`, passing the whole content object down as the `t` prop.
- Every section component takes `t: Content` (via `SectionProps` from `src/types.ts`) and reads its own slice (e.g. `t.hero`).
- The eight `.section` components render through **`src/components/Section.astro`**, which owns the shared scaffold (`section` / `container` / `reveal` eyebrow + title + optional lead) and a `<slot />` for the body. `soft` toggles the `section--soft` background alternation. Its markup is 1:1 with class names in `global.css` — changing the DOM there breaks styling silently.

**Adding a section** = add a key to both `ko` and `en` in `content.ts`, create a component in `src/components/` that wraps its body in `<Section>`, and wire it into `Site.astro`.

### Typing gotcha

`content` is declared `as const`, so `Content` is a union of the `ko` and `en` literal types. If you add a field to one object in an array (e.g. one team member or product), **add it to every sibling** — otherwise the union type makes that field unsafe to access in the component's `.map()`. Same rule across languages: a new key added to `ko` only is a type error in the component that reads it. `npm run check` catches both; `astro build` alone does not.

## Content policy (important)

The site is sourced from a confidential business plan but **deliberately omits sensitive numbers**: no revenue targets, funding amounts, valuation, or exit plans. Keep content to vision, market sizing (TAM/SAM/SOM/LAM), validation, and roadmap. Detailed IR material is shared privately, not on the site.

`*.pdf` is gitignored — the business plan PDF must never be committed or deployed.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm run check`, builds with Astro, and deploys to GitHub Pages. GitHub Pages is configured with `build_type: workflow` (GitHub Actions), and the custom domain `breathyou.care` is preserved via `public/CNAME` (copied into `dist/` on build). There is no separate staging environment — a push to `main` is a production deploy.

## Assets

`public/` is served at the site root. `public/logo.png` is the brand logo; `public/team/` holds team photos referenced by `photo` paths in `content.ts`.
