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
- **Admin data (`src/lib/adminStore.ts` + `src/lib/firebase.ts`)**: the `/admin` dashboard (`src/page/admin/Admin.tsx`) manages CV PDFs (ES/EN) and the projects list in **Firestore** (collections `projects` and `cvs`, security rules in `firestore.rules`: public read, authenticated write). Files are stored as base64 data URLs inside Firestore docs (1 MB/doc limit, hence the 700 KB PDF / 600 KB image caps) — no Firebase Storage needed. Login uses **Firebase Auth** (email/password): the form's "usuario" must match `VITE_ADMIN_USER` and the password is checked by `signInWithEmailAndPassword` against the account `VITE_ADMIN_EMAIL`. Firebase config + admin vars live in `.env.local` (see `.env.example`). Public components read through `useProjects()` (falls back to `DEFAULT_PROJECTS` in `src/data/projects.ts`) and `downloadCv()` (falls back to the static PDFs in `public/assets/`).

Static assets (project screenshots, `foto.webp`, default CV PDFs) are in `public/assets/`. Brand/tech SVG icons are React components in `src/components/icons/`.
