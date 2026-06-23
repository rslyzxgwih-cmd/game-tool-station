# POE2 Decision Tools Project State

Updated: 2026-06-02

## Mission

Build a lightweight Path of Exile 2 decision-tool platform. This is not a game site,
news site, blog, forum, wiki clone, DPS calculator, passive tree planner, or trade system.

## First-week scope

Only ship and validate:

- Class Picker: input `Melee`, `Ranged`, `Summoner`, or `Spell`; output recommended classes.
- Build Generator: input `Class` and `Difficulty`; output one focused build page.
- Skill Database: 30 beginner-relevant skill entries with decision rules.

## Active routes

- `/`
- `/class-picker`
- `/builds`
- `/builds/warrior`
- `/builds/witch`
- `/builds/[slug]`
- `/guides/mercenary`
- `/skills`
- `/skills/[slug]`
- `/sitemap.xml`
- `/robots.txt`

## Data model

PostgreSQL schema is intentionally simple and lives in `database/schema.sql`.
Current launch data is static seed data in `src/lib/content.ts` with the same table shape.

## Verification status

- `npm install` completed and generated `node_modules` plus `package-lock.json`.
- `npm run build` passes.
- GA4 support is wired for `G-VB4Z8X6P5Q`:
  - `src/components/GoogleAnalytics.tsx` loads Google tag only when the env var is set.
  - `app/layout.tsx` mounts the tracker globally.
  - `src/lib/seo.ts` defaults to `G-VB4Z8X6P5Q` and allows `NEXT_PUBLIC_GA_ID` override.
  - `.env.example` documents `NEXT_PUBLIC_GA_ID=G-VB4Z8X6P5Q`.
  - Production deployment succeeded on 2026-06-04 with deployment ID `dpl_HKp328TGAqFTtQWu98xYuB9pn8Bj`.
  - Production checks passed for `/` and `/skills/time-of-need`: HTTP 200, `G-VB4Z8X6P5Q` present, and `https://www.googletagmanager.com/gtag/js?id=G-VB4Z8X6P5Q` present.
- Build output prerenders 50 static pages:
  - 3 class cluster pages
  - 8 build detail pages
  - 30 skill detail pages
  - core static routes
- Vercel production deployment succeeded:
  - Production alias: `https://poe2-decision-tools.vercel.app`
  - Custom domain alias: `https://poe2startertools.com`
  - Current deployment ID: `dpl_91pQarM7aR1Zhq28fN6gyiJovPUY`
- Custom domains added to Vercel project:
  - `poe2startertools.com`
  - `www.poe2startertools.com`
- DNS is verified:
  - `poe2startertools.com` resolves to `76.76.21.21`
  - `www.poe2startertools.com` resolves to `76.76.21.21`
- Production HTTP checks passed for:
  - `/`
  - `/class-picker`
  - `/builds`
  - `/builds/poe2-monk-leveling-build`
  - `/skills`
  - `/skills/spark`
  - `/sitemap.xml`
- `https://www.poe2startertools.com/class-picker` redirects to
  `https://poe2startertools.com/class-picker`.
- Production sitemap contains 159 URLs.
- `https://poe2startertools.com/sitemap.xml` emits `https://poe2startertools.com/...`
  URLs for canonical production indexing.
- Google Search Console verification meta was added to `app/layout.tsx` and verified
  on production HTML:
  - `_XLhuSN9E37enthAWvtScmBZDohJ0lHJyixyPxQSvag`
- Google Search Console ownership verification succeeded.
- Google Search Console sitemap submission completed on 2026-06-02:
  - `https://poe2startertools.com/sitemap.xml`
- UI direction updated on 2026-06-02:
  - First screen now presents the core tools directly: Class Picker, Build Generator, and Skill Database.
  - Homepage copy was reduced and changed from marketing-style presentation to a denser tool console.
  - Builds and Skills pages were tightened into database/table-style surfaces.
  - Detail pages were reduced from large landing-page cards to compact record pages.
- Indexing entry checks passed:
  - `https://poe2startertools.com/robots.txt` returns `Sitemap: https://poe2startertools.com/sitemap.xml`
  - `https://poe2startertools.com/sitemap.xml` returns 45 URLs
  - sitemap URLs use `https://poe2startertools.com/...` and do not contain `vercel.app`
- Latest production checks passed after the UI direction update:
  - `/` includes `Class Picker`, `Build Generator`, `Skill Database`, `Melee`, `Name or tag`, and `Launch build table`.
  - `/class-picker`, `/builds`, `/skills`, `/builds/poe2-monk-leveling-build`, `/skills/spark`, `/sitemap.xml`, and `/robots.txt` return 200.
  - `https://www.poe2startertools.com/skills` redirects to `https://poe2startertools.com/skills`.
- Class cluster skeleton shipped on 2026-06-02:
  - `/builds/warrior` answers whether Warrior is the right starter path and routes users to the Warrior slam starter build.
  - `/builds/witch` answers whether Witch minions are the right beginner path and routes users to the minion Witch build.
  - `/guides/mercenary` answers whether Mercenary is a good first ranged/crossbow class and routes users to the Mercenary starter build.
  - Homepage, header navigation, and sitemap now expose all three cluster pages.
- Latest production checks passed after the class cluster skeleton deployment:
  - `/builds/warrior`, `/builds/witch`, and `/guides/mercenary` return 200.
  - Homepage contains links to all three cluster pages.
  - Production sitemap contains 45 URLs and includes all three cluster URLs.
- Class cluster internal links strengthened on 2026-06-02:
  - `/builds` now has a `Class build clusters` section linking to Warrior, Witch, and Mercenary cluster pages.
  - The Warrior, Witch, and Mercenary starter build detail pages link back to their matching class cluster.
  - Production checks passed for `/builds` and the three matching starter build detail pages.
- Breadcrumb structure strengthened on 2026-06-02:
  - Added visible breadcrumbs and `BreadcrumbList` JSON-LD for Warrior, Witch, and Mercenary cluster pages.
  - Added visible breadcrumbs and `BreadcrumbList` JSON-LD to build detail pages.
  - Production checks passed for `/builds/warrior`, `/builds/witch`, `/guides/mercenary`, and the Warrior starter build detail page.
- Skill database structure strengthened on 2026-06-02:
  - Added visible breadcrumbs and `BreadcrumbList` JSON-LD to `/skills`.
  - Added visible breadcrumbs and `BreadcrumbList` JSON-LD to all skill detail pages.
  - Production checks passed for `/skills`, `/skills/spark`, and `/skills/raise-spectre`.
- Skill coverage expanded locally on 2026-06-03:
  - Skill Database increased from 30 skill entries to 100 skill entries.
  - `npm run build` passes and prerenders 120 static pages.
  - Sitemap generation is automatic from `skills`, so the new skill URLs are included in the build.
- Skill coverage expansion deployed on 2026-06-03:
  - Production deployment succeeded after refreshing Vercel CLI login.
  - Production checks passed for `/skills`, `/skills/spark`, `/skills/disengage`, `/skills/arc`, and `/sitemap.xml`.
  - Production sitemap contains 115 URLs and includes new skill URLs such as `/skills/disengage` and `/skills/arc`.
- Build coverage expanded and deployed on 2026-06-03:
  - Build database increased from 8 build entries to 50 build entries.
  - Build detail pages now automatically include visible FAQ, `FAQPage` JSON-LD, related builds, related skills, internal skill links, and breadcrumbs.
  - `npm run build` passes and prerenders 162 static pages.
  - Production deployment succeeded with deployment ID `dpl_348DgQPsixoGAmQRi3ZGF1pDpKfY`.
  - Production checks passed for `/builds/poe2-witch-chaos-leveling-build`, `/builds/poe2-warrior-earthquake-leveling-build`, `/builds/poe2-mercenary-grenade-leveling-build`, `/builds/poe2-sorceress-arc-build`, and `/sitemap.xml`.
  - Production sitemap contains 157 URLs and includes new build URLs.
- GSC signal patch shipped on 2026-06-03:
  - Added `/builds/ranger` for `poe 2 ranger build` and `poe 2 游侠流派` signals.
  - Added `/skills/time-of-need` after `poe2 time of need` appeared in GSC.
  - Added bilingual aliases and `alternateName` schema for Flame Wall, Killing Palm, Raise Spectre, Spark, Detonate Dead, and Time of Need.
  - Homepage watchlist now reflects the latest GSC query signals.
  - Production checks passed for `/builds/ranger`, `/skills/time-of-need`, `/skills/flame-wall`, `/skills/killing-palm`, and `/sitemap.xml`.
  - Production sitemap contains 159 URLs and includes `/builds/ranger` plus `/skills/time-of-need`.
- Skill detail page standard shipped on 2026-06-04:
  - No URL structure was changed.
  - No UI redesign, animation, or visual effects were added.
  - All `/skills/[slug]` pages now render the required database sections: Skill Overview, Damage Type, Tags, Level Scaling, Best Builds, Related Skills, and FAQ.
  - Skill pages now generate `FAQPage` JSON-LD and use existing build/skill data to create internal links automatically.
  - `/skills` now reports the live skill count dynamically instead of the old 30-skill launch text.
  - `npm run build` passes and prerenders 164 static pages, including 101 skill detail pages.
  - Production deployment succeeded with deployment ID `dpl_DM6exBmnKyTzEdLbJ7ojyrHgF3eT`.
  - Production checks passed for `/skills/killing-palm`, `/skills/flame-wall`, `/skills/staggering-palm`, `/skills`, and `/sitemap.xml`.
  - Production sitemap remains 159 URLs and includes `/skills/killing-palm`, `/skills/flame-wall`, and `/skills/staggering-palm`.
- GSC exact-query skill patch shipped on 2026-06-04:
  - No URL structure was changed.
  - No UI redesign, animation, or visual effects were added.
  - Added exact query aliases for `/skills/killing-palm`, `/skills/flame-wall`, and `/skills/staggering-palm` based on the latest GSC impressions.
  - Updated skill page metadata to use `POE2 Skill Guide | Builds, Tags, FAQ` titles and richer skill-guide descriptions.
  - `npm run build` passes and prerenders 164 static pages, including 101 skill detail pages.
  - Production deployment succeeded with deployment ID `dpl_2WKf5o7TpNP5LG9B76Agqfh39Vrn`.
  - Vercel inspect reports the deployment as `Ready`, and Vercel error logs returned no logs for the last 30 minutes.
  - Production checks passed for `/skills/killing-palm`, `/skills/flame-wall`, `/skills/staggering-palm`, and `/sitemap.xml`.
- Keyword database created on 2026-06-04:
  - Added `KEYWORD_DATABASE.md` as the source of truth for GSC-exposed keywords.
  - Classified the latest two-day keyword screenshot into P0/P1/P2/P3 priorities.
  - Mapped exposed queries to target URLs, topic clusters, search intent, and next actions.
  - Next work is exact alias and internal-link strengthening for already exposed keywords, not new features or UI work.
- Time of Need page and GSC tracker shipped on 2026-06-04:
  - Added `GSC_RANKING_TRACKER.md` with the daily query/impressions/position/URL table.
  - Enhanced `/skills/time-of-need` with `How Time of Need Works`, `Best Classes for Time of Need`, `Best Builds Using Time of Need`, `Time of Need FAQ`, and additional internal links.
  - Added exact aliases for `Time of Need`, including `迫切时刻`, `poe 2 time of need`, and `poe2 迫切时刻`.
  - `npm run build` passes and prerenders 164 static pages.
  - Production deployment succeeded with deployment ID `dpl_91pQarM7aR1Zhq28fN6gyiJovPUY`.
  - Production checks passed for `/skills/time-of-need` and `/sitemap.xml`; sitemap remains 159 URLs.
- Validated keyword topic clusters shipped on 2026-06-05:
  - No new tools, UI redesign, animation, or broad content expansion were added.
  - Added six supporting cluster pages tied only to GSC-exposed keywords:
    `/skills/killing-palm/builds`, `/skills/flame-wall/builds`, `/skills/time-of-need/builds`,
    `/builds/warrior/leveling`, `/builds/witch/minion`, and `/guides/mercenary/crossbow`.
  - Each support page includes parent link, FAQ, `FAQPage` schema, breadcrumb schema, Related Builds, Related Skills, and internal links.
  - Parent pages now link to their child cluster pages from `/skills/killing-palm`, `/skills/flame-wall`, `/skills/time-of-need`, `/builds/warrior`, `/builds/witch`, and `/guides/mercenary`.
  - `npm run build` passes and prerenders 170 static pages.
  - Production deployment succeeded with deployment ID `dpl_EuXXESTKB2mEoGhF5yTH1JXLLJjz`.
  - Vercel inspect reports the deployment as `Ready` and aliased to `https://poe2startertools.com`.
  - Production checks passed for all six cluster pages, all six parent-child links, and `/sitemap.xml`.
  - Production sitemap contains 165 URLs and includes all six new cluster pages.
- Build-query topical authority expansion shipped on 2026-06-06:
  - No new tools, UI redesign, animation, or broad non-GSC expansion were added.
  - Added six exact-match build cluster pages:
    `/builds/beginner`, `/builds/easy`, `/builds/monk`, `/builds/mercenary`,
    `/builds/crossbow-monk`, and `/builds/falling-thunder`.
  - Strengthened existing `/builds/ranger` instead of creating a duplicate Ranger URL.
  - All seven target pages now include FAQ, `FAQPage` schema, breadcrumb schema, Related Builds, Related Skills, and internal links.
  - `/builds`, `/`, `/builds/monk`, `/skills/falling-thunder`, and `/guides/mercenary` now link into the new build clusters where relevant.
  - Dynamic build detail class breadcrumbs now route Monk builds to `/builds/monk` and Mercenary builds to `/builds/mercenary`.
  - `npm run build` passes and prerenders 176 static pages.
  - Production deployment succeeded with deployment ID `dpl_4g5KdKDosdvdgqiQsGmZQ8eMy6rH`.
  - Production checks passed for `/builds/beginner`, `/builds/easy`, `/builds/monk`, `/builds/ranger`, `/builds/mercenary`, `/builds/crossbow-monk`, `/builds/falling-thunder`, parent links, and `/sitemap.xml`.
  - Production sitemap contains 171 URLs and includes all six new build cluster pages plus the strengthened Ranger page.
- Existing-cluster strengthening shipped on 2026-06-08:
  - No new pages, URLs, skills, or builds were added.
  - Strengthened existing owners and support pages for Killing Palm, Flame Wall, Mercenary Crossbow Build, and Staggering Palm signals.
  - Updated `/skills/killing-palm`, `/skills/flame-wall`, and `/skills/staggering-palm` with focused internal links, curated Related Builds, curated Related Skills, and additional FAQ coverage.
  - Updated `/guides/mercenary`, `/builds/warrior`, and `/builds/witch` with FAQ schema, Related Builds, Related Skills, and stronger links to `/builds/ranger`, `/builds/warrior`, `/builds/witch`, and `/builds/mercenary`.
  - `/builds/ranger` was verified as already having FAQ schema, Related Builds, Related Skills, and the required cross-links.
  - `npm run build` passes and prerenders 176 static pages.
  - Production deployment URL: `https://poe2-decision-tools-5mpbc9esl-rslyzxgwih-2885s-projects.vercel.app`, aliased to `https://poe2startertools.com`.
  - Final production verification fixed and confirmed the missing `/skills/killing-palm` <-> `/skills/flame-wall` cross-links.
  - Production checks passed for `/skills/killing-palm`, `/skills/flame-wall`, `/skills/staggering-palm`, `/guides/mercenary`, `/builds/ranger`, `/builds/warrior`, `/builds/witch`, and `/sitemap.xml`.
  - Production sitemap remains 171 URLs, confirming no new URL expansion.
- Mercenary/Crossbow/Beginner cluster strengthening shipped on 2026-06-09:
  - No new pages, URLs, skills, or builds were added.
  - Strengthened the strongest GSC query cluster: `mercenary crossbow build poe2`, `poe 2 crossbow build`, and `crossbow leveling poe2`.
  - Updated `/builds/mercenary`, `/guides/mercenary/crossbow`, `/builds/beginner`, `/builds/easy`, `/builds`, `/`, and `/builds/poe2-mercenary-crossbow-starter-build`.
  - Added exact-query FAQ coverage, crossbow leveling progression, beginner-friendly explanations, related build recommendations, and stronger internal links to Mercenary Crossbow pages.
  - `npm run build` passes and prerenders 176 static pages.
  - Production deployment URL: `https://poe2-decision-tools-h5w54u8rr-rslyzxgwih-2885s-projects.vercel.app`, aliased to `https://poe2startertools.com`.
  - Production checks passed for target text, FAQ schema, and required internal links on Mercenary, Crossbow, Beginner, Easy, build detail, build index, home, and sitemap.
  - Production sitemap remains 171 URLs, confirming no new URL expansion.
- Local dev server verification is pending because this environment blocks `next dev`
  subprocess startup with `spawn EPERM`. Port `3000` is also occupied by Weixin Store Assistant.

## Success metric

Primary: Google Search Console impressions and clicks.

Initial observation window: 2026-06-02 to 2026-06-09.

Secondary:

- Clicks from `/` to `/class-picker`
- Build Generator result clicks to `/builds/[slug]`
- Skill page impressions by long-tail query

## Rule for future work

Do not add features unless they support a specific player decision problem and a search-intent test.

Follow `OPERATING_PRINCIPLES.md` before new development: analyze Google Search Console data,
search intent, and site architecture before deciding whether to build any page, guide, database
entry, or tool.

Current GSC query signals:

- `mercenary crossbow build poe2`
- `poe2 beginner builds`
- `poe2 easy builds`
- `poe2 crossbow monk`
- `poe2 flame wall`
- `poe2 falling thunder`
- `poe2 warrior builds`
- `witch builds poe 2`
- `poe2 mercenary guide`
- `killing palm`
- `poe 2 killing palm`
- `flame wall`
- `poe2 flamewall`
- `staggering palm`

Planning docs created:

- `WARRIOR_BUILDS_PLAN.md`
- `WITCH_BUILDS_PLAN.md`
- `MERCENARY_GUIDE_PLAN.md`
