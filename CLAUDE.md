# Bride View Landing Page

Marketing landing page for the Bride View iOS app. Drives App Store downloads as the primary conversion.

## Stack
- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4, Framer Motion for animations
- Hosted on Vercel, auto-deploys from `master`
- GitHub: `369-shar-block/brideview-landing`

## Structure
- `src/app/` — routes (`/`, `/about`, `/privacy`, `/terms`, `/delete-account`)
- `src/components/` — Hero, FinalCTA, Footer, Navbar, Features, etc.
- `src/lib/analytics.ts` — TikTok Pixel tracking helpers

## App Store URL
`https://apps.apple.com/us/app/bride-view/id6759754943` — appears in Hero, FinalCTA, Footer. Kept as a const at the top of each component.

## TikTok Pixel (ID: `D7FS5CJC77U4SGAC8TOG`)
Base pixel loads in `src/app/layout.tsx` via `next/script` (afterInteractive). Fires `PageView` on every route.

**Tracked events (code-based):**
- `ScrollDepth` — 25/50/75/100% milestones
- `TimeOnPage` — 15/30/60/120/300s milestones + final time on `pagehide`

Scroll + time tracking lives in `src/components/AnalyticsTracker.tsx` (client component mounted in root layout).

**App Store button click tracking is NOT in code** — it's set up via TikTok's Event Builder UI (Events Manager → Web Events → Event Builder). Do NOT re-add `Lead`/`ClickButton` firing from code or events will double-count.

## Commands
- `npm run dev` — local dev on :3000
- `npm run build` — production build (run before committing big changes)
- `npm run lint`

## Deploying
Push to `master` → Vercel auto-deploys. Live URL: `https://brideview-landing.vercel.app/`

## Gotchas
- App Store click conversion is tracked through TikTok Event Builder, not code. If a new App Store button is added, set it up inside TikTok's Event Builder (not with `ttq.track`).
- Pixel events verify via TikTok Pixel Helper Chrome extension. TikTok's Events Manager "Test Events" tab only works against the live Vercel URL, not localhost.
