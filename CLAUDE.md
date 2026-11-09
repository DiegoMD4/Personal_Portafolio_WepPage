# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server (auto-opens the browser)
- `npm run build` — type-check (`tsc -b`) then build with Vite
- `npm run lint` — run ESLint over the whole project
- `npm run preview` — preview the production build

There is no test suite.

## Architecture

Portfolio SPA built with React 18 + TypeScript + Vite + Tailwind CSS + react-router-dom. Two routes (`src/App.tsx`): `/` (public portfolio) and `/admin` (private management UI). `vercel.json` rewrites everything to `index.html` so client routing works when deployed.

The public route is a two-phase flow in `src/page/Home.tsx`: an animated laptop intro (`src/components/Entry.tsx`, CSS typing/boot animations defined in `src/index.css`) that auto-transitions into `src/page/Portfolio.tsx` after the boot sequence; the footer's "Volver a la entrada" resets the flow. Portfolio sections live in `src/page/` (About, Experience, Technologies, Projects, Contact) and render inside anchored `<Section>` blocks; `src/components/Navbar.tsx` is sticky/translucent, highlights the active section via the scroll-spy hook `src/hooks/useScroll.tsx` (largest visible `<section>` wins), and collapses into a hamburger + slide-in sidebar below `md`.

Cross-cutting concerns:

- **Language (ES/EN)**: `LanguageContext` + `LanguageProvider`, initialized from `navigator.language`. Translatable copy lives in `src/json/*.json` keyed `"es"`/`"en"`; short strings are inline ternaries on `language === "es-ES"`. Project content is bilingual data in `src/data/projects.ts` (`title_es`/`title_en`, etc.). Any visible text change must be made in both languages.
- **Theme (light/dark)**: `ThemeProvider` persists to `localStorage` and toggles the `dark` class on `<html>` (`darkMode: 'class'`). Design tokens (accent `#be3144`, accent-bright `#e0566b`, `night.*`/`day.*` palettes, Inter/Space Grotesk/JetBrains Mono fonts; no yellow — it was removed from the palette) are defined in `tailwind.config.js`; shared keyframes/utilities (grid background, glows, typing, sidebar) in `src/index.css`. The entry screen and `/admin` are always dark (they use `night-*` tokens directly).
- **Admin data (`src/lib/adminStore.ts`)**: the `/admin` dashboard (`src/page/admin/Admin.tsx`) manages CV PDFs (ES/EN) and the projects list. Everything persists to `localStorage`/`sessionStorage` only — there is no backend, so changes are per-browser. Public components read through the same store (`getProjects`, `getCvHref`) so admin overrides show up on the site. Login compares against `VITE_ADMIN_USER`/`VITE_ADMIN_PASSWORD` from `.env.local` (see `.env.example`); since `VITE_*` vars are embedded in the client bundle, this gate is cosmetic until a real backend validates credentials.

Static assets (project screenshots, `foto.webp`, default CV PDFs) are in `public/assets/`. Brand/tech SVG icons are React components in `src/components/icons/`.
