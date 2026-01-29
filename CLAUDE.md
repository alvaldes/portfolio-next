# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 16, React 19, HeroUI (latest stable), and Tailwind CSS v4. Features i18n support (English/Spanish), dark/light themes, and 3D visual elements.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm start        # Run production server
pnpm lint         # Run ESLint
```

**Node version:** 24.13.0 (specified in `.nvmrc` and `.node-version`)

## Architecture

### Routing & i18n

Routes use `app/[lang]/` pattern with `lang` being `en` or `es`:
- `/en`, `/es` - Home page
- `/en/works`, `/es/works` - Projects listing
- `/en/works/[id]`, `/es/works/[id]` - Project detail

**i18n Configuration:** `i18n.config.ts` defines locales. Dictionary files in `dictionaries/en.json` and `dictionaries/es.json` contain all translatable content.

**Dictionary Loading:** `lib/dictionary.ts` dynamically imports JSON with `'server-only'` to prevent client bundle leakage.

### Component Patterns

**Server Components (default):** Pages, layouts, `Footer`, `Socials` - can be async and fetch dictionaries directly.

**Client Components ('use client'):** Navigation components (`Nav/*`), `CardItem`, `SectionTransition`, `GoToTop`, `Stacks`, theme-aware components.

### Styling

- **Tailwind CSS v4** via `@tailwindcss/postcss` plugin (no `tailwind.config.ts` in v4 - config in CSS)
- **HeroUI** components from `@heroui/react` (latest stable release)
- Custom theme variables in `globals.css` under `@theme { }` block
- Theme switching via `next-themes` with `attribute="class"`

### Key Files

- `app/[lang]/layout.tsx` - Main layout, loads dictionaries, wraps with Providers
- `app/[lang]/providers.tsx` - Client-side ThemeProvider wrapper
- `app/[lang]/globals.css` - Imports heroui.css, defines custom @theme variables
- `app/fonts.ts` - Google Fonts configuration (M Plus Rounded, Comfortaa)

### Next.js 15+ Async Params Pattern

All page components receive `params` as a Promise that must be awaited:

```tsx
export default async function Page(props: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await props.params
  const dictionary = await getDictionary(lang)
}
```

### Dependencies of Note

- `@react-three/fiber` + `@react-three/drei` - 3D canvas components (EarthCanvas, StarsCanvas)
- `framer-motion` - Animations (SectionTransition, CardItem hover)
- `marked` - Markdown parsing for project descriptions
- `next-themes` - Dark/light theme management

## Current Migration Status

The project is on Next.js 16.1.6, React 19, HeroUI (latest stable), and Tailwind v4. See `MIGRATION.md` for upgrade history and `TODO.md` for planned future upgrades.
