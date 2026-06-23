# CONTENT_ARCHITECTURE.md

Status: Active

Purpose: stop uncontrolled content production and keep POE2StarterTools as a decision platform, not a page farm.

For the next half day after this file is created, do not create more content pages. Future work must first update or consult this file, `KEYWORD_DATABASE.md`, and `GSC_RANKING_TRACKER.md`.

## Core Principle

Every page must own one player decision.

Before creating or editing any page, answer:

- What decision is the player making?
- What query exposed this decision in Google Search Console?
- Which page owns the keyword?
- Is this a new decision, or can an existing page answer it better?

No page should exist only to increase page count.

## URL Rules

### Builds

Use `/builds` for the build hub.

Use `/builds/[topic]` for build decision clusters:

- `/builds/beginner`
- `/builds/easy`
- `/builds/monk`
- `/builds/mercenary`
- `/builds/ranger`
- `/builds/warrior`
- `/builds/witch`
- `/builds/falling-thunder`
- `/builds/crossbow-monk`

Use `/builds/[slug]` for individual build detail pages:

- `/builds/poe2-mercenary-crossbow-starter-build`
- `/builds/poe2-monk-leveling-build`
- `/builds/poe2-beginner-minion-witch-build`

Do not create duplicate build pages with different wording for the same decision.

Bad:

- `/builds/mercenary-crossbow`
- `/guides/mercenary-crossbow-build`
- `/builds/poe2-mercenary-crossbow`

If the existing owner is `/builds/mercenary`, update that page or its related build detail page instead.

### Skills

Use `/skills` for the skill database hub.

Use `/skills/[slug]` for skill decision pages:

- `/skills/flame-wall`
- `/skills/killing-palm`
- `/skills/time-of-need`
- `/skills/falling-thunder`

Use `/skills/[slug]/builds` only when the query is clearly "builds using this skill" and the main skill page is not enough:

- `/skills/flame-wall/builds`
- `/skills/killing-palm/builds`
- `/skills/time-of-need/builds`

Do not create separate pages for spelling variants, Chinese-English mixed variants, or typo variants. Add aliases and `alternateName` instead.

### Guides

Use `/guides/[topic]` for non-build walkthrough decisions.

Guides should answer:

- Should I play this class?
- How should I approach this class?
- What should I avoid as a beginner?
- What is the workflow or learning path?

Examples:

- `/guides/mercenary`
- `/guides/mercenary/crossbow`

Guides must not steal build-query ownership from `/builds`.

Example:

- `poe2 mercenary guide` belongs to `/guides/mercenary`.
- `mercenary crossbow build poe2` belongs to `/builds/mercenary` or the relevant build detail page.

### Tools

Use tool pages only when the search intent requires input and output.

Current allowed tool surfaces:

- `/class-picker`
- Build Generator inside `/builds`

Do not create new tools unless GSC or product strategy proves a repeated interactive decision.

Do not create:

- DPS calculator
- Passive tree planner
- Trade tool
- Account features
- Comments
- Forums
- Premium tools

## Keyword Classification

### Builds Keywords

A keyword belongs to Builds when the user wants to choose a build, compare builds, or find a starter route.

Signals:

- `build`
- `builds`
- `starter`
- `beginner build`
- `easy build`
- `leveling build`
- class + build
- skill + build
- hybrid concept + build

Examples:

- `poe2 beginner builds` -> `/builds/beginner`
- `poe2 easy builds` -> `/builds/easy`
- `poe2 monk builds` -> `/builds/monk`
- `mercenary crossbow build poe2` -> `/builds/mercenary`
- `poe2 falling thunder build` -> `/builds/falling-thunder`
- `poe2 ranger build` -> `/builds/ranger`

### Skills Keywords

A keyword belongs to Skills when the user wants to understand a skill, decide whether to use it, or find what it does.

Signals:

- exact skill name
- skill mechanic
- "how does X work"
- "is X good"
- "best class for X"
- "builds using X" only if the skill is the query root

Examples:

- `poe2 flame wall` -> `/skills/flame-wall`
- `killing palm poe2` -> `/skills/killing-palm`
- `poe2 time of need` -> `/skills/time-of-need`
- `poe2 falling thunder` -> `/skills/falling-thunder` as skill owner, with a link to `/builds/falling-thunder`

### Guides Keywords

A keyword belongs to Guides when the user wants a class overview, learning path, or practical walkthrough rather than a build list.

Signals:

- `guide`
- `how to play`
- class overview
- beginner workflow
- campaign approach

Examples:

- `poe2 mercenary guide` -> `/guides/mercenary`
- `poe2 mercenary crossbow guide` -> `/guides/mercenary/crossbow`

### Tools Keywords

A keyword belongs to Tools when the user needs an interactive recommendation from inputs.

Signals:

- `picker`
- `generator`
- `which class should I play`
- `choose class`
- `find build`

Examples:

- `poe2 class picker` -> `/class-picker`
- `poe2 build generator` -> `/builds`

## Page Creation Rules

### Create New Page

Create a new page only when all are true:

1. GSC has exposed the keyword or the user provides fresh GSC evidence.
2. The keyword has a distinct player decision.
3. No existing page clearly owns that decision.
4. The new page can be linked from at least two existing pages.
5. The page can include FAQ, schema, related builds, related skills, and a parent link.
6. The new URL fits the URL rules above.

Required output for a new page:

- Clear decision answer near the top
- FAQ section
- `FAQPage` schema
- Breadcrumb schema
- Related Builds block
- Related Skills block
- Parent page link
- Sitemap entry
- At least two inbound internal links

### Update Existing Page

Update an existing page when any are true:

1. The keyword is a spelling variant or wording variant of an existing owner.
2. The keyword is Chinese-English mixed but the decision is unchanged.
3. The keyword includes a typo such as `poe3` instead of `poe2`.
4. The page already ranks or receives impressions for the query.
5. The new content would duplicate an existing decision.
6. The query can be answered with FAQ, aliases, related links, or metadata on an existing page.

Allowed updates:

- Add exact alias
- Add `alternateName`
- Add FAQ question
- Add related build
- Add related skill
- Add parent-child internal link
- Improve title or description for exact intent
- Clarify decision answer

Do not create a new page for:

- Singular vs plural
- Word order variants
- Chinese translation variants
- Misspellings
- Broad query already owned by a hub

## Internal Link Rules

Every page must have a clear parent and clear children or related pages.

### Build -> Skill

Every build page should link to its core skills.

Rule:

- Build detail pages link to 3-6 core skill pages.
- Build cluster pages link to 3-4 related skill pages.
- If a skill is a GSC-exposed P0 or P1 keyword, it should receive links from every relevant build.

Examples:

- `/builds/falling-thunder` -> `/skills/falling-thunder`
- `/builds/monk` -> `/skills/killing-palm`, `/skills/falling-thunder`, `/skills/tempest-bell`
- `/builds/mercenary` -> `/skills/fragmentation-rounds`, `/skills/high-velocity-rounds`

### Skill -> Build

Every skill page should link to builds that use or compare that skill.

Rule:

- Skill pages link to 2-4 related builds.
- If a build support page exists, the skill page links to it.
- Skill pages should not become build list pages unless `/skills/[slug]/builds` is justified.

Examples:

- `/skills/falling-thunder` -> `/builds/falling-thunder`
- `/skills/flame-wall` -> `/skills/flame-wall/builds`
- `/skills/killing-palm` -> `/skills/killing-palm/builds`

### Guide -> Build

Guides should point users toward build decisions after explaining class fit or workflow.

Rule:

- Guide pages link to one build cluster and 2-3 build detail pages.
- Guide pages should not own build queries if a build page exists.

Examples:

- `/guides/mercenary` -> `/builds/mercenary`
- `/guides/mercenary/crossbow` -> `/builds/poe2-mercenary-crossbow-starter-build`

### Tool -> Build

Tool output must route to an existing build page, not a generic answer.

Rule:

- Class Picker output links to class build clusters.
- Build Generator output links to build detail pages.
- Tools should not create new URLs per result.

Examples:

- Melee -> `/builds/warrior` or `/builds/monk`
- Ranged -> `/builds/ranger` or `/builds/mercenary`
- Summoner -> `/builds/witch`
- Build Generator result -> `/builds/[slug]`

## Keyword Ownership Rules

One keyword can have only one primary owner page.

Secondary pages may support the keyword, but they must not compete with the owner through the same title, H1, canonical, or exact primary intent.

### Ownership Decision

Choose the owner by intent:

- Build choice -> Builds
- Skill understanding -> Skills
- Class workflow -> Guides
- Interactive recommendation -> Tools

If two pages could own the same keyword, pick the page that gives the clearest decision answer.

### Current Ownership Examples

| Keyword | Primary owner | Support pages |
| --- | --- | --- |
| `poe2 beginner builds` | `/builds/beginner` | `/builds`, `/class-picker` |
| `poe2 easy builds` | `/builds/easy` | `/builds`, `/builds/beginner` |
| `poe2 monk builds` | `/builds/monk` | `/builds/falling-thunder`, `/builds/crossbow-monk` |
| `poe2 ranger build` | `/builds/ranger` | Ranger build detail pages |
| `mercenary crossbow build poe2` | `/builds/mercenary` | `/guides/mercenary/crossbow`, `/builds/poe2-mercenary-crossbow-starter-build` |
| `poe2 mercenary guide` | `/guides/mercenary` | `/builds/mercenary` |
| `poe2 flame wall` | `/skills/flame-wall` | `/skills/flame-wall/builds` |
| `poe2 falling thunder` | `/skills/falling-thunder` | `/builds/falling-thunder` |
| `poe2 falling thunder build` | `/builds/falling-thunder` | `/skills/falling-thunder` |

### Conflict Rule

If a new GSC query appears and ownership is unclear:

1. Do not create a page immediately.
2. Add the query to `KEYWORD_DATABASE.md`.
3. Choose one provisional owner.
4. Strengthen the owner page with FAQ and internal links.
5. Wait for GSC to show whether Google assigns impressions to that page.

## Required Page Anatomy

Every SEO-facing decision page should include:

- One direct decision answer
- Parent link
- Related Builds
- Related Skills
- FAQ
- `FAQPage` schema
- Breadcrumb schema
- Internal links to owner and support pages

Optional:

- Related Guides
- Tool entry point

Not allowed:

- Marketing hero-only layout
- News-style updates
- Patch-note commentary unless it changes the decision answer
- AI-sounding filler
- Large generic introductions before the answer

## Operating Rule

The next content action after this file should not be page creation by default.

Default next action:

1. Check GSC.
2. Update `GSC_RANKING_TRACKER.md`.
3. Compare query to this architecture.
4. Decide owner.
5. Update existing owner page unless the Create New Page rules are fully satisfied.

## 7-Day IA and Ownership Sprint

For the next 7 days, the primary work is not new page production.

Primary objective:

- Make the information architecture stable enough to support 100, 300, and 500 pages without keyword cannibalization.

Weekly priorities:

1. Maintain keyword ownership before writing content.
2. Map every GSC query to one primary owner URL.
3. Identify cannibalization risk between Builds, Skills, Guides, and Tools.
4. Strengthen owner pages before creating support pages.
5. Keep `/builds` and `/skills` as the two main trunks.
6. Keep Guides as workflow pages, not build-query landing pages.
7. Keep Tools as input-output decision surfaces, not content hubs.

During this sprint, a proposed new page is blocked unless it passes the Create New Page rules and has no existing owner.

## IA Review Checklist

Run this checklist before every content change:

- Does the query already have an owner in the ownership table?
- Is the proposed URL under the right trunk?
- Would this page compete with an existing page title, H1, or canonical intent?
- Can the query be solved by FAQ, alias, metadata, or internal links on the owner page?
- Does the page have at least two inbound internal links available?
- Does the page have clear outbound links to parent, related builds, and related skills?
- Would this page still make sense if the site had 500 pages?

If any answer is unclear, do not create the page. Update `KEYWORD_DATABASE.md` and wait for more GSC evidence.

## Cannibalization Rules

Potential cannibalization exists when two pages target the same user decision.

High-risk patterns:

- `/guides/[class]` competing with `/builds/[class]`
- `/skills/[skill]` competing with `/builds/[skill]`
- `/builds` competing with `/builds/beginner` or `/builds/easy`
- A generated `/builds/[slug]` page competing with a cluster page

Resolution:

1. Pick one primary owner.
2. Change the other page into a support page.
3. Add internal links from support page to owner page.
4. Avoid using the exact same H1 on both pages.
5. Keep canonical URLs separate only when decisions are truly different.
