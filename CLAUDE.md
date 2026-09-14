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

## ⚠️ Pricing must match the app exactly (updated 2026-09-12)

**Current: `$39.99 ONE-TIME`, no subscription, no trial, 20 try-on credits included.**
Product id `brideview.unlock` — a NON-CONSUMABLE, not a subscription. One free try-on happens
during onboarding, before the paywall, and that is what replaced the 3-day trial.

**✅ SITE AND APP ARE BACK IN SYNC AS OF 2026-09-14.** v5 shipped as **2.6.0** and is live, so this
copy now matches the binary. Between 2026-09-12 and 2026-09-14 the site was deliberately AHEAD of
the App Store (it described the one-time unlock while 2.4.0 still sold the subscription), which was
an owner decision taken knowingly. If you ever find them disagreeing again, ship the app rather
than reverting the site.

**The subscription is not gone, it is unsold.** 33 brides hold live `brideview.annual.v2` terms and
Apple keeps billing them until they personally cancel, so `/terms` §4.2 and `/delete-account` MUST
keep telling them how to cancel and confirming they keep their access. Deleting that clause strands
real paying people.

**`/terms` is not marketing copy — it is the EULA Apple reviewers read**, linked directly from the
in-app paywall. If the price or purchase type there disagrees with what the app charges, that is an
App Store guideline 3.1.2 rejection risk and a consumer-protection problem regardless of review.

**Whenever app pricing changes, update ALL of these in the same commit:**
- `src/components/Pricing.tsx` (plan card + the price strip)
- `src/components/FinalCTA.tsx` (the trust badge row)
- `src/app/terms/page.tsx` (§4.1 Unlock, §4.2 legacy membership, §4.3 credit packs, and the
  plain-English summary near the bottom)
- `src/app/about/page.tsx` ("Try Before You Pay")
- `src/app/privacy/page.tsx` and `src/app/delete-account/page.tsx`

**Credit packs (unchanged, and now the only repeat purchase):** $9.99/8, $19.99/16, $29.99/32,
$59.99/80. These must match `PACK_CONFIG` in `../BrideDressAI-app/services/purchaseService.ts`.

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
