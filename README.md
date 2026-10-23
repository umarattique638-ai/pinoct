# Pinoct — Breast Cancer Awareness

React 19 + Vite + React Router 7 + Framer Motion. Multi-page SPA with route-level code splitting.

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
| `/` | Home |
| `/about` | About us |
| `/awareness` | Signs, risk factors, stages, myths |
| `/self-check` | 5-step guide + reminder/tracker tool |
| `/screening` | Screening by age, tests, mammogram steps |
| `/faq` | Searchable, filterable FAQ |
| `/contact` | Contact form + channels |
| `*` | 404 |

## Folder structure
```
src/
├─ main.jsx / App.jsx          entry + RouterProvider
├─ routes/                     paths.js (all URLs) · router.jsx
├─ layouts/MainLayout.jsx      Navbar + <Outlet/> + Footer (shared shell)
├─ pages/                      one file per route (lazy-loaded via pages/index.js)
├─ components/
│  ├─ common/                  reusable UI: Button, Section, SectionHeader, PageHeader,
│  │                           Accordion, Tabs, FormField, Logo, Seo, CtaBanner… (barrel: index.js)
│  └─ layout/                  Navbar, Footer, ScrollProgress, ScrollManager
├─ features/                   domain components: home, about, awareness, self-check, screening, contact
├─ data/                       all page content (edit text here)
├─ config/site.js              brand name, email, nav & footer links
├─ hooks/                      useForm, useLocalStorage, useScrolled
├─ services/contactService.js  contact form submission
├─ utils/                      cn, date, ics, screening, validators
└─ styles/                     tokens.css (colours/fonts), base, typography, cards, forms, utilities
```
Each component keeps its CSS next to it (e.g. `Hero/Hero.jsx` + `Hero/Hero.css`). Import alias: `@/` → `src/`.

## Change the font
1. Update the Google Fonts `<link>` in `index.html`.
2. Update `--font-sans`, `--font-display`, `--font-serif` in `src/styles/tokens.css`.

## Contact form
Copy `.env.example` → `.env` and set `VITE_CONTACT_ENDPOINT` to a free Formspree/Web3Forms endpoint.
Without it, the form opens the visitor's email app pre-filled to `SITE.email` (`src/config/site.js`).

## Deploy (free)
**Vercel:** push to GitHub → vercel.com → *Add New Project* → import repo → Deploy (settings come from `vercel.json`).
Or CLI: `npx vercel --prod`.

**Cloudflare:**
- No-code: `npm run build`, then Cloudflare dashboard → *Workers & Pages* → *Create* → *Pages* → *Upload assets* → drop the `dist` folder.
- Git: *Pages* → *Connect to Git* → build command `npm run build`, output `dist`.
- CLI: `npm run build && npx wrangler deploy` (uses `wrangler.jsonc`, SPA routing enabled).

Then add the custom domain `pinoct.com` in the project's *Domains* settings once purchased.
