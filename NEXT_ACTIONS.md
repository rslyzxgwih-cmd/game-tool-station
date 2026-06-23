# Next Actions

1. Keyword Database is the source of truth:
   - Use `CONTENT_ARCHITECTURE.md` before page creation or content expansion.
   - Use `KEYWORD_DATABASE.md` before any content or code action.
   - Update `GSC_RANKING_TRACKER.md` daily with query, impressions, average position, and target URL.
   - Only act on GSC-exposed keywords.
   - Current target is moving average position from 11 into top 10, not adding features.
2. First layer is live:
   - Skill Database has 100 skill entries.
   - Production sitemap has 115 URLs.
   - Verified `/skills`, `/skills/spark`, `/skills/disengage`, `/skills/arc`, and `/sitemap.xml`.
3. Second layer is live:
   - Build Database has 50 build entries.
   - Build pages include FAQ, related builds, related skills, internal skill links, schema, sitemap, and breadcrumb.
   - Production sitemap has 157 URLs.
4. Latest GSC signal patch is live:
   - Added `/builds/ranger`.
   - Added `/skills/time-of-need`.
   - Added bilingual aliases for Flame Wall, Killing Palm, Raise Spectre, Spark, Detonate Dead, and Time of Need.
5. Skill page standard is live:
   - No URL structure changed.
   - All 101 skill detail pages now include Skill Overview, Damage Type, Tags, Level Scaling, Best Builds, Related Skills, and FAQ.
   - FAQ schema and internal skill/build links are generated from existing data.
   - Production deployment: `dpl_DM6exBmnKyTzEdLbJ7ojyrHgF3eT`.
6. GSC exact-query skill patch is live:
   - Production deployment: `dpl_2WKf5o7TpNP5LG9B76Agqfh39Vrn`.
   - Added exact query aliases for `/skills/killing-palm`, `/skills/flame-wall`, and `/skills/staggering-palm`.
   - Skill metadata now uses `POE2 Skill Guide | Builds, Tags, FAQ` titles and richer skill-guide descriptions.
   - Production checks passed for the three skill pages and `/sitemap.xml`.
7. Validated keyword topic clusters are live:
   - Production deployment: `dpl_EuXXESTKB2mEoGhF5yTH1JXLLJjz`.
   - Added support pages for Killing Palm, Flame Wall, Time of Need, Warrior leveling, Witch minion, and Mercenary crossbow.
   - Each support page has FAQ, parent link, Related Builds, Related Skills, breadcrumb schema, and FAQ schema.
   - Parent pages link to child pages, and production sitemap now contains 165 URLs.
8. Build-query topical authority expansion is live:
   - Production deployment: `dpl_4g5KdKDosdvdgqiQsGmZQ8eMy6rH`.
   - Added `/builds/beginner`, `/builds/easy`, `/builds/monk`, `/builds/mercenary`, `/builds/crossbow-monk`, and `/builds/falling-thunder`.
   - Strengthened `/builds/ranger` instead of duplicating the Ranger URL.
   - All seven target pages have FAQ, FAQ schema, breadcrumb schema, Related Builds, Related Skills, and internal links.
   - Production sitemap now contains 171 URLs.
9. Existing-cluster strengthening is live:
   - Production deployment URL: `https://poe2-decision-tools-5mpbc9esl-rslyzxgwih-2885s-projects.vercel.app`.
   - No new URLs were created; production sitemap remains 171 URLs.
   - Strengthened `/skills/killing-palm`, `/skills/flame-wall`, `/skills/staggering-palm`, `/guides/mercenary`, `/builds/ranger`, `/builds/warrior`, and `/builds/witch`.
   - Production checks passed for FAQ schema, Related Builds, Related Skills, and required internal links, including `/skills/killing-palm` <-> `/skills/flame-wall`.
10. Mercenary/Crossbow/Beginner cluster strengthening is live:
   - Production deployment URL: `https://poe2-decision-tools-h5w54u8rr-rslyzxgwih-2885s-projects.vercel.app`.
   - No new URLs were created; production sitemap remains 171 URLs.
   - Strengthened `/builds/mercenary`, `/guides/mercenary/crossbow`, `/builds/beginner`, `/builds/easy`, `/builds/poe2-mercenary-crossbow-starter-build`, `/builds`, and `/`.
   - Added exact-query coverage for `mercenary crossbow build poe2`, `poe 2 crossbow build`, and `crossbow leveling poe2`.
   - Production checks passed for target text, FAQ schema, and required internal links.
11. Next work queue from `KEYWORD_DATABASE.md`:
   - For the next 7 days, prioritize IA and Keyword Ownership over new page production.
   - Map every new GSC query to one primary owner URL before editing content.
   - Update `GSC_RANKING_TRACKER.md` daily before editing content.
   - Watch whether impressions and average position improve for Mercenary Crossbow, POE2 Crossbow Build, Crossbow Leveling, Beginner Builds, Easy Builds, Crossbow Monk, Flame Wall, Falling Thunder, Warrior Build, Witch Build, and Mercenary Guide.
   - Only patch pages that gain impressions or sit close to position 10.
   - Do not add new pages unless Search Console exposes a keyword with no matching parent or support page.
12. GA4 is configured:
   - Measurement ID: `G-VB4Z8X6P5Q`.
   - Production deployment: `dpl_HKp328TGAqFTtQWu98xYuB9pn8Bj`.
   - Production checks passed for `/` and `/skills/time-of-need`.
   - Next manual check: verify Realtime traffic in GA4.
   - Optional Vercel override: `NEXT_PUBLIC_GA_ID=G-VB4Z8X6P5Q`.
13. Monitor the shipped class cluster skeleton in Google Search Console:
   - `poe2 warrior builds`
   - `witch builds poe 2`
   - `poe2 mercenary guide`
14. Monitor the skill-query pages already receiving signals:
   - `/skills/killing-palm`
   - `/skills/flame-wall`
   - `/skills/staggering-palm`
   - `/skills/time-of-need`
15. Watch whether Google starts assigning impressions to these pages:
   - `/builds/beginner`
   - `/builds/easy`
   - `/builds/monk`
   - `/builds/mercenary`
   - `/builds/crossbow-monk`
   - `/builds/falling-thunder`
   - `/builds/warrior`
   - `/builds/witch`
   - `/builds/ranger`
16. Use the existing cluster plans as the source of truth before expanding:
   - `WARRIOR_BUILDS_PLAN.md`
   - `WITCH_BUILDS_PLAN.md`
   - `MERCENARY_GUIDE_PLAN.md`
17. Keep each page decision-focused:
   - What is the player deciding?
   - What answer does the page give?
   - Which existing build and skill pages does it connect?
18. Do not optimize UI, animation, styling, or refactor code while the current goal is ranking improvement.
19. Do not expand into DPS, passive tree, trade, accounts, comments, forums, premium features, news, broad beginner guides, or unrelated class pages.
