# Builds Hub Optimization Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve `/builds` as the build decision hub for validated GSC queries without creating new URLs.

**Architecture:** Keep `/builds` as a single Next.js App Router hub page. The hub should route users and crawlers toward validated build owners instead of competing with child pages for exact-match keywords.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind, existing `JsonLd` component, existing content data from `src/lib/content.ts`.

---

Project: `poe2startertools.com`

Date: 2026-06-11

Status: planning only.

Current GSC signal:

- `/builds`: 76 impressions

Constraints:

- Do not create new URLs.
- Do not create new build pages.
- Do not redesign the site.
- Do not deploy from this plan.
- Preserve current keyword ownership.
- Prioritize already validated themes: Mercenary, Beginner, Warrior, Monk.

## Executive Summary

`/builds` is already useful because it links to the current winner page, build hubs, and all build detail pages. The main issue is not missing volume. The issue is hierarchy.

Right now `/builds` presents itself as `POE2 Beginner Builds` in metadata, H1, and `CollectionPage` schema. That creates keyword ownership overlap with `/builds/beginner`, which should be the primary owner for `poe2 beginner builds`.

The best next improvement is to reposition `/builds` as a broad build decision router:

- `/builds` owns general build discovery and build-generator intent.
- `/builds/beginner` owns `poe2 beginner builds`.
- `/builds/easy` owns `poe2 easy builds`.
- `/builds/poe2-mercenary-crossbow-starter-build` owns `mercenary crossbow build poe2`.
- `/builds/mercenary` supports Mercenary build browsing.
- `/guides/mercenary/crossbow` supports crossbow leveling workflow.

## Current Content Structure Review

Source file:

- `app/builds/page.tsx`

Current structure:

1. Metadata title: `POE2 Beginner Builds`
2. H1: `POE2 Beginner Builds`
3. Intro copy explains beginner, easy, class, and exact-match build pages.
4. `BuildGenerator` appears immediately after the hero.
5. `Build query clusters` section links to important build and guide URLs.
6. Class summary grid lists the first 8 classes.
7. `Launch build pages` grid links every build detail from `builds`.
8. `CollectionPage` schema names the page `POE2 Beginner Builds`.

What works:

- The page links to the current GSC winner.
- The page links to validated build hubs.
- The page exposes the Build Generator without needing a separate tool URL.
- The page links every dynamic build detail through the `builds.map()` grid.

What needs improvement:

- `/builds` is competing with `/builds/beginner` through title, H1, and schema naming.
- The current winner page is in the query cluster, but not visually or structurally prioritized.
- The page treats validated and unvalidated build pages with equal weight.
- Beginner users see the generator before a clear route choice.
- Parent, child, and support-page roles are not explicit.

## Validated Build Link Coverage

| URL | Current link from `/builds` | Intended role | Assessment |
| --- | --- | --- | --- |
| `/builds/poe2-mercenary-crossbow-starter-build` | Present in query clusters and all-build grid | Current GSC winner for exact Mercenary crossbow starter intent | Keep and promote higher |
| `/builds/mercenary` | Present in query clusters | Parent Mercenary build hub | Keep as parent support |
| `/guides/mercenary/crossbow` | Present in query clusters | Crossbow leveling and workflow guide | Keep as support, not build owner |
| `/builds/beginner` | Present in query clusters | Owner for `poe2 beginner builds` | Keep, but stop `/builds` from using the same title |
| `/builds/easy` | Present in query clusters | Owner for `poe2 easy builds` | Keep |
| `/builds/warrior` | Present in query clusters | Owner for `poe2 warrior builds` | Keep |
| `/builds/monk` | Present in query clusters | Owner for `poe2 monk builds` | Keep |
| `/builds/crossbow-monk` | Present in query clusters and all-build grid | Hybrid crossbow comparison page | Keep as Monk-to-crossbow bridge |
| `/builds/falling-thunder` | Present in query clusters | Falling Thunder build intent | Keep, but lower priority than Mercenary and Beginner |
| `/builds/poe2-warrior-slam-starter-build` | Present only in all-build grid | Warrior starter detail | No immediate promotion unless GSC grows |
| `/builds/warrior/leveling` | Existing route, not in top query clusters | Warrior leveling support | Consider adding later if Warrior impressions grow |
| `/builds/poe2-monk-leveling-build` | Present only in all-build grid | Monk leveling detail | No immediate promotion unless Monk impressions grow |

Coverage conclusion:

- No critical validated build URL is missing from `/builds`.
- The current issue is priority and ownership clarity, not absence of links.

## Hierarchy Review

Recommended hierarchy:

| Page | Role | Should own |
| --- | --- | --- |
| `/builds` | Build decision router and tool surface | General build discovery, build generator, broad build comparison |
| `/builds/beginner` | Beginner build hub | `poe2 beginner builds` |
| `/builds/easy` | Low-friction build hub | `poe2 easy builds` |
| `/builds/mercenary` | Mercenary parent hub | `poe2 mercenary builds`, Mercenary class build browsing |
| `/builds/poe2-mercenary-crossbow-starter-build` | Winner detail page | `mercenary crossbow build poe2`, `poe2 mercenary crossbow build` |
| `/guides/mercenary/crossbow` | Crossbow leveling support guide | `crossbow leveling poe2`, `poe 2 crossbow build` when the intent is workflow |
| `/builds/warrior` | Warrior parent hub | `poe2 warrior builds` |
| `/builds/monk` | Monk parent hub | `poe2 monk builds` |

Hierarchy problem:

- `/builds` currently looks like the owner of `poe2 beginner builds`, but `/builds/beginner` should own that query.

Hierarchy fix:

- Rename the `/builds` title, H1, and schema name to a broader hub label such as `POE2 Builds` or `POE2 Build Finder`.
- Keep `/builds/beginner` as the exact-match beginner owner.

## Beginner Navigation Review

Current beginner navigation:

- Intro copy tells users to compare beginner, easy, class, and exact-match build pages.
- Build Generator appears near the top.
- `Build query clusters` exposes beginner and easy pages.
- `Not sure which class?` links to `/class-picker`.

What works:

- Beginner users can reach `/builds/beginner`.
- Beginner users can reach `/builds/easy`.
- Beginner users can use the generator if they already know class and difficulty.

What is weak:

- A new player landing from Google sees the generator before the safest route choices.
- The page does not clearly answer: "Which build should I open first?"
- The current winner page is not labeled as the strongest validated route.

Recommended beginner navigation:

1. First route: `Start with beginner builds` -> `/builds/beginner`
2. Second route: `Use the current validated Mercenary crossbow starter` -> `/builds/poe2-mercenary-crossbow-starter-build`
3. Third route: `Choose lower-friction builds` -> `/builds/easy`
4. Fourth route: `Compare by class` -> Warrior, Monk, Mercenary hubs
5. Then show the Build Generator for users who already know their class and difficulty.

This keeps `/builds` practical without turning it into a landing page.

## Improvement Plan

### P0: Fix Keyword Ownership Signals

Files:

- Modify: `app/builds/page.tsx`

- [ ] Change metadata title from `POE2 Beginner Builds` to `POE2 Builds` or `POE2 Build Finder`.
- [ ] Change H1 from `POE2 Beginner Builds` to the same broad hub label.
- [ ] Change `CollectionPage` schema `name` from `POE2 Beginner Builds` to the same broad hub label.
- [ ] Keep canonical as `/builds`.

Expected result:

- `/builds` stops competing directly with `/builds/beginner`.
- `/builds/beginner` remains the cleaner owner for `poe2 beginner builds`.

### P0: Prioritize Validated Build Paths

Files:

- Modify: `app/builds/page.tsx`

- [ ] Reorder the top cluster so the current GSC winner is near the top.
- [ ] Keep `/builds/beginner` and `/builds/easy` above broad class pages.
- [ ] Keep `/builds/mercenary` and `/guides/mercenary/crossbow` close to the winner page.
- [ ] Keep Warrior and Monk as validated comparison hubs.
- [ ] Keep Witch and Ranger present, but lower priority unless fresh GSC data says otherwise.

Recommended top order:

1. `/builds/poe2-mercenary-crossbow-starter-build`
2. `/builds/beginner`
3. `/builds/easy`
4. `/builds/mercenary`
5. `/guides/mercenary/crossbow`
6. `/builds/warrior`
7. `/builds/monk`
8. `/builds/crossbow-monk`
9. `/builds/falling-thunder`
10. `/builds/witch`
11. `/builds/ranger`

Expected result:

- More internal priority flows to the winner page and validated support pages.
- The page still remains useful for broader build discovery.

### P1: Make Parent-Child Roles Explicit

Files:

- Modify: `app/builds/page.tsx`

- [ ] Add short role labels in the existing cluster cards, using existing card structure.
- [ ] Label the winner page as `Current validated starter`.
- [ ] Label `/builds/mercenary` as `Parent hub`.
- [ ] Label `/guides/mercenary/crossbow` as `Leveling guide`.
- [ ] Label `/builds/beginner` as `Beginner hub`.
- [ ] Label `/builds/easy` as `Low-friction hub`.

Expected result:

- Players understand which page to open.
- Google sees a cleaner parent-child relationship through anchors and surrounding text.

### P1: Improve Beginner First-Click Navigation

Files:

- Modify: `app/builds/page.tsx`

- [ ] Add a compact "Start here" route block before the generator or above the cluster grid.
- [ ] Include only existing URLs.
- [ ] Do not add marketing copy.
- [ ] Do not create a new component unless the existing page becomes hard to read.

Suggested route choices:

| Choice | Link | Purpose |
| --- | --- | --- |
| New player | `/builds/beginner` | safest general build comparison |
| Want current winner | `/builds/poe2-mercenary-crossbow-starter-build` | validated Mercenary crossbow route |
| Want easy builds | `/builds/easy` | lower-friction choices |
| Want class comparison | `/class-picker` | tool-assisted class decision |

Expected result:

- Beginner users are not forced to interpret the full build grid.
- The generator remains useful but becomes secondary to clear routing.

### P1: Separate Validated Pages From Full Inventory

Files:

- Modify: `app/builds/page.tsx`

- [ ] Keep the existing all-build grid.
- [ ] Add or rename the top section so it clearly functions as `Validated build paths`.
- [ ] Leave lower-priority dynamic build pages in `Launch build pages`.
- [ ] Avoid removing existing links unless they are broken.

Expected result:

- Validated pages receive stronger prominence.
- The full inventory remains crawlable.

### P2: Add Small Hub FAQ Only If It Does Not Steal Child Intent

Files:

- Modify: `app/builds/page.tsx`

Possible FAQ topics:

- `What is the best POE2 build for beginners?`
- `Should I start with Mercenary Crossbow or a safer beginner build?`
- `What is the difference between beginner builds and easy builds?`
- `Should I choose a class hub or a build detail page first?`

Rules:

- Answers must route to child owners.
- Do not make `/builds` the primary answer for `poe2 beginner builds`.
- Do not add FAQ schema until the visible FAQ exists.

Expected result:

- `/builds` can answer broad decision questions while sending exact intent to child pages.

## What Not To Do

- Do not create `/builds/mercenary-crossbow`.
- Do not create another beginner build hub.
- Do not create new class clusters from assumptions.
- Do not add DPS calculator, passive tree planner, trade tools, login, comments, or forums.
- Do not turn `/builds` into a marketing landing page.
- Do not add large generic guide text that competes with child pages.
- Do not remove existing build detail links from the full inventory grid.

## Validation Checklist For Future Implementation

After implementation, run:

- [ ] `npm run build`
- [ ] Verify `/builds` still links to `/builds/poe2-mercenary-crossbow-starter-build`.
- [ ] Verify `/builds` still links to `/builds/beginner`.
- [ ] Verify `/builds` still links to `/builds/easy`.
- [ ] Verify `/builds` still links to `/builds/mercenary`.
- [ ] Verify `/builds` still links to `/guides/mercenary/crossbow`.
- [ ] Verify `/builds` still links to `/builds/warrior`.
- [ ] Verify `/builds` still links to `/builds/monk`.
- [ ] Verify `/builds` canonical remains `/builds`.
- [ ] Verify sitemap does not gain new URLs.
- [ ] Verify no broken internal links.

## Recommended Next Execution

Do one small implementation pass only:

1. Rename `/builds` hub signals from beginner-specific to broad build-hub wording.
2. Reorder validated build links.
3. Add concise role labels.
4. Keep the full build inventory unchanged.
5. Build locally.
6. Deploy only after the user approves implementation.

Expected SEO impact:

- Lower cannibalization risk between `/builds` and `/builds/beginner`.
- Stronger internal priority for the current Mercenary Crossbow winner page.
- Better beginner navigation from a 76-impression hub page.
- Cleaner topical hierarchy for Mercenary, Beginner, Warrior, and Monk without expanding site size.
