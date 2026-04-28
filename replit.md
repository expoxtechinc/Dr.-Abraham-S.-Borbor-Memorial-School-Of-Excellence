# Dr. Abraham S. Borbor Memorial School of Excellence — Website

A vibrant, professional, mobile-first multi-page React + Vite static website for a real K-12 school in Mount Barclay, Lower Johnsonville, Liberia (established 2019).

Motto: **We Don't Just Teach, We Inspire.**

## What's in this project

- `artifacts/borbor-school` — the school website (React + Vite + Tailwind v4 + shadcn/ui + framer-motion + wouter)
- `artifacts/api-server` — unused stub from the monorepo template; the school site is fully static
- `artifacts/mockup-sandbox` — workspace canvas; not used for production
- `DEPLOY.md` — Vercel deployment + GitHub push instructions

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, highlights, stats, programs, news, CTA |
| `/about` | School story, mission, vision, history timeline, quick facts |
| `/academics` | Primary, Junior High, Senior High curriculum details |
| `/activities` | Featured programs, co-curricular, photo gallery (lightbox), news |
| `/staff` | Founder tribute, Principal Cecelia F. Ndomahun, VP Edwin Kwakpae, faculty roster |
| `/contact` | Click-to-call phones, email, WhatsApp, Facebook, contact form, Google Maps |
| `/admin` | Admin login (default `borborschool.admin@gmail.com` / `Admin2026`) |
| `/admin/dashboard` | Edit school info, activities, news, gallery, view inbox, change password |

## Tech / Architecture

- **No backend.** All admin-editable content (school info, activities, news, gallery, contact messages, admin credentials) is stored in the visitor's browser via `localStorage`. Seeded with sensible defaults on first load.
- Admin session uses `sessionStorage`.
- Real photographs from `attached_assets/` are imported via the `@assets` alias and used throughout the site.
- Theme: royal blue + white + gold, both light and dark mode.
- Global features: splash loader, scroll-to-top, WhatsApp FAB, scroll-triggered animations (framer-motion), responsive nav with mobile sheet drawer, embedded Google Map.
- Full SEO meta tags in `index.html` and per-page document titles via `useDocumentTitle`.

## Deployment

See `DEPLOY.md` for step-by-step Vercel and GitHub instructions. The `vercel.json` in the artifact configures the build for direct Vercel deploys.

## Credit

Built by SAS Tech Inc — <https://sastechinc-bp.vercel.app/>
