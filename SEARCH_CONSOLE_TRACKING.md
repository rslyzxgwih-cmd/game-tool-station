# Search Console Tracking

Start date: 2026-06-02
Review date: 2026-06-09

Sitemap submitted:

- `https://poe2startertools.com/sitemap.xml`

## First 7-day decision rule

Do not add major features during the first observation window.

Use Google Search Console data to decide the next increment:

- If `/class-picker` gets impressions: improve the class picker page and add one adjacent long-tail page.
- If `/builds` or build detail pages get impressions: expand build generator inputs or add 3-5 targeted build pages.
- If `/skills` or skill detail pages get impressions: expand skill database depth and internal links.
- If there are no meaningful impressions: adjust titles, meta descriptions, and page intent before adding features.

## Queries to watch

- `poe2 warrior builds`
- `witch builds poe 2`
- `poe2 mercenary guide`
- `poe2 best starter class`
- `poe2 class picker`
- `poe2 beginner build`
- `poe2 monk leveling build`
- `poe2 witch minion build`
- `poe2 skill gems`
- `killing palm`
- `flame wall`
- `staggering palm`
- `poe2 time of need`

## 2026-06-04 GSC Snapshot

Current exposed queries are skill-first:

- `killing palm` / `poe 2 killing palm` / `poe 2 杀戮之掌`
- `poe2 flame wall` / `poe 2 flame wall` / `flame wall poe 2`
- `流放之路2 火焰之墙` / `火焰墙 poe 2` / `火焰墙 poe2` / `poe2 flamewall` / `poe2 火墙`
- `staggering palm` / `震荡掌`

Low-volume build signals to watch, but not expand before the skill signal weakens:

- `poe 2 mercenary crossbow build`
- `poe2 easy builds`

## Metrics to record

- Total impressions
- Total clicks
- Top queries
- Top pages
- Indexed pages
- Pages discovered but not indexed

## Current Strategic Interpretation

Google is starting to understand the site through skill and class-specific build intent.

Current product response:

- Skill pages now use the fixed database standard: Skill Overview, Damage Type, Tags, Level Scaling, Best Builds, Related Skills, and FAQ.
- The GSC-exposed skill URLs `/skills/killing-palm`, `/skills/flame-wall`, and `/skills/staggering-palm` were verified on production after the template update.
- Exact GSC query aliases were added to the same three skill pages on 2026-06-04, and production checks passed after deployment `dpl_2WKf5o7TpNP5LG9B76Agqfh39Vrn`.
- Do not change URL structure while measuring these pages.

Next planning focus:

- Continue skill-first expansion or skill page refinement if GSC keeps surfacing skill queries.
- Expand only missing build/class clusters if build queries outpace skill queries.
- Avoid UI, animation, styling, and broad feature work during this measurement window.

Do not build unrelated pages while the current GSC signal is skill-first.
