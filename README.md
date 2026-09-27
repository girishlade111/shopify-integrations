# Shopify Integrations

A polished, fully responsive marketing/demo website for a **Shopify app integrations marketplace** — discover, browse, and manage third-party integrations that extend a Shopify store (payments, marketing, analytics, shipping, webhooks and more). Built with Next.js and the shadcn/ui component library; originally scaffolded with v0.app and refined afterwards.

> Built by Girish Lade — https://ladestack.in

## What it does

The site presents a storefront-style catalog of Shopify integrations:

- **Home page** (`/`): hero section, popular integration categories grid (payment gateways, email/SMS marketing, analytics, social/sharing tools), feature highlights, CTAs.
- **Integrations catalog** (`/integrations`): searchable, tab-filtered grid of integration cards with badges, descriptions, and pricing CTAs.
- **Webhooks page** (`/webhooks`): explanatory page about Shopify webhooks with a reference-style table of webhook topics.
- **API page** (`/api`): explanatory page about the Shopify Admin API and how integrations connect to it.
- Dark/light theming via `next-themes` (shadcn `ThemeProvider`).

All pages are static — no database, no server-side API routes, no authentication back-end (sign-in/get-started buttons are UI placeholders).

## Features

- Fully responsive layout (mobile → desktop)
- Search input and category tabs on the integrations page
- shadcn/ui components: Card, Button, Input, Badge, Tabs, Table, Dialog, DropdownMenu, Toast, and more
- Dark mode with system preference detection
- Geist font family, Lucide icons throughout
- Charts-ready: `recharts` dependency included for analytics dashboards

## Tech stack

| Layer      | Technology |
|-----------|------------|
| Framework | Next.js 15 (App Router, static export) |
| UI        | React 19, Tailwind CSS 3.4, shadcn/ui (Radix primitives) |
| Icons     | lucide-react |
| Forms     | react-hook-form + zod |
| Fonts     | Geist (geist package) |
| Analytics | @vercel/analytics |

## Quick start

```bash
# install dependencies (pnpm preferred; npm works too)
pnpm install

# run the dev server
pnpm dev        # http://localhost:3000

# build a static production bundle
pnpm build     # output goes to ./out

# preview the static bundle
npx serve out
```

### npm alternative

```bash
npm install --legacy-peer-deps
npm run build
```

## Project structure

```
app/
  page.tsx              # Home / hero / categories
  integrations/page.tsx # Integrations catalog (search + tabs)
  webhooks/page.tsx     # Webhooks explainer + topic table
  api/page.tsx          # Shopify Admin API explainer
  layout.tsx            # Root layout, theme provider, fonts
  globals.css           # Tailwind base styles
components/
  ui/                   # shadcn/ui primitives (button, card, input, tabs, table, ...)
  theme-provider.tsx    # next-themes wrapper
lib/
  utils.ts              # cn() class-name helper
public/                 # Static assets
styles/                 # Extra style files
next.config.mjs         # Static export config (output: 'export')
components.json         # shadcn/ui configuration
```

## Environment variables

None required — the app is fully static and needs no secrets.

## Deployment

The site is a static export, so it can be hosted anywhere that serves static files:

- **GitHub Pages** (current): the `gh-pages` branch is deployed automatically and served at `https://girishlade111.github.io/shopify-integrations/`. Because the site lives under a sub-path, `next.config.mjs` sets `basePath: '/shopify-integrations'`. **If you deploy to a root domain or Vercel, remove the `basePath` setting** before building.
- **Vercel / Netlify / Cloudflare Pages**: connect the repo and build with `pnpm build` (publish directory `out/` for Pages).

## Security note

Next.js is pinned to 15.2.8 (patched for CVE-2025-55182 React2Shell and related 15.2.x advisories).
