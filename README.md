# Pinoct — Breast Cancer Awareness

A breast cancer awareness initiative by **Pakistan International School**, led by **Ayesha Faraz**.

React 19 + Vite + **Tailwind CSS v4** + React Router 7 + Framer Motion.

**Purpose:** spread breast cancer awareness, educate visitors, promote early detection, and provide useful information and resources.

All pages are bundled up-front, so switching pages is instant.

## Quick start
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the build locally
npm run lint
```

## Pages (React Router)
| Route | Page |
|---|---|
| `/` | Home — overview, school initiative, links to each topic (no repeated content) |
| `/about` | About us |
| `/awareness` | Signs, risk factors, stages, myths |
| `/self-check` | 5-step guide + reminder/tracker tool |
| `/screening` | Screening by age, tests, mammogram steps |
| `/faq` | Searchable, filterable FAQ |
| `/contact` | Email contact (Gmail) |
| `*` | 404 |

## Folder structure
```
src/
├─ main.jsx / App.jsx          entry + RouterProvider
├─ routes/                     paths.js (all URLs) · router.jsx
├─ layouts/MainLayout.jsx      Navbar + <Outlet/> + Footer (shared shell)
├─ pages/                      one file per route (lazy-loaded via pages/index.js)
├─ components/
│  ├─ common/                  reusable UI: Button, Card/IconBox, Section/Container, SectionHeader,
│  │                           PageHeader, AwarenessBanner, CtaBanner, Accordion, Tabs, FormField,
│  │                           Pill/CheckList/Callout/Note, StepsRow, StatusScreen, Logo, Seo (barrel: index.js)
│  └─ layout/                  Navbar, Footer, ScrollProgress, ScrollManager
├─ features/                   domain components: home, about, awareness, self-check, screening, contact
├─ data/                       all page content incl. banners.js (edit text here)
├─ config/site.js              brand name, WhatsApp, email, nav & footer links
├─ hooks/                      useLocalStorage, useScrolled
├─ utils/                      cn (clsx + tailwind-merge), date, ics, screening
└─ styles/index.css            Tailwind entry + @theme design tokens (colours, fonts, shadows, breakpoints, animations)
```
Styling is 100% Tailwind utility classes — there are no component CSS files. Design tokens live in `@theme` inside `src/styles/index.css` and are used as utilities (`bg-pink`, `text-muted`, `font-display`, `shadow-soft`, `rounded-card`…). Import alias: `@/` → `src/`.

## Change the font
1. Update the Google Fonts `<link>` in `index.html`.
2. Update `--font-sans`, `--font-display`, `--font-serif` in the `@theme` block of `src/styles/index.css`.

## Awareness banners
Edit or add campaign banners in `src/data/banners.js` and place them with `<AwarenessBanner banner={BANNERS.xyz} />`.

## School, client & contact details
Edit `SCHOOL`, `CLIENT` and `SITE.email` in `src/config/site.js`. The school logo is `public/school-logo.webp` (favicons: `public/icon-*.png`).

## Build output
`npm run build` also runs `scripts/spa-routes.mjs`, which writes an HTML file for every route
(`about.html`, `about/index.html`, …, `404.html`). Direct links and page refreshes therefore work
on any static host without rewrite rules.

## Deploy (free)
**Vercel:** push to GitHub → vercel.com → *Add New Project* → import repo → Deploy (settings come from `vercel.json`).
Or CLI: `npx vercel --prod`.

**Cloudflare:**
- No-code: `npm run build`, then Cloudflare dashboard → *Workers & Pages* → *Create* → *Pages* → *Upload assets* → drop the `dist` folder.
- Git: *Pages* → *Connect to Git* → build command `npm run build`, output `dist`.
- CLI: `npm run build && npx wrangler deploy` (uses `wrangler.jsonc`, SPA routing enabled).

Then add the custom domain `pinoct.com` in the project's *Domains* settings once purchased.
