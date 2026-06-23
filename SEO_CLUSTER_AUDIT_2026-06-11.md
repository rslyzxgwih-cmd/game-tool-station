# SEO Cluster Audit - 2026-06-11

Scope: Mercenary, Beginner, Killing Palm, Flame Wall.

Constraint: no new pages, no new URLs, no skill/build additions, no UI changes.

Data source:

- Local GSC tracker data through 2026-06-04.
- User-provided GSC screenshots through 2026-06-11.
- Current source files and local static HTML output.

Goal: be ready to act when the next GSC export arrives.

## Strategic Summary

Google is testing two proven surfaces:

1. Skill decision pages:
   - `killing palm`
   - `flame wall`
   - `time of need`
2. Build/class/weapon decision pages:
   - `mercenary crossbow build poe2`
   - `poe 2 crossbow build`
   - `crossbow leveling poe2`
   - `poe2 beginner builds`

The highest strategic value is now the Mercenary/Crossbow/Beginner build cluster. Killing Palm and Flame Wall remain validated skill winners, but they should be maintained rather than expanded until new GSC data shows a new query gap.

## Keyword Ownership Map

| Keyword / Intent | Primary Owner URL | Support URLs | Rule |
| --- | --- | --- | --- |
| `mercenary crossbow build poe2` | `/builds/mercenary` | `/builds/poe2-mercenary-crossbow-starter-build`, `/guides/mercenary/crossbow` | Build query belongs to Builds, not Guides. |
| `poe 2 crossbow build` | `/builds/mercenary` | `/guides/mercenary/crossbow`, `/builds/poe2-mercenary-crossbow-starter-build` | Broad crossbow build intent should consolidate on Mercenary hub. |
| `crossbow leveling poe2` | `/guides/mercenary/crossbow` | `/builds/mercenary`, `/builds/poe2-mercenary-crossbow-starter-build` | Leveling workflow belongs to guide page. |
| `poe2 mercenary guide` | `/guides/mercenary` | `/builds/mercenary`, `/guides/mercenary/crossbow` | Guide intent belongs to class guide. |
| `poe2 beginner builds` | `/builds/beginner` | `/builds`, `/builds/easy`, beginner build detail pages | Exact beginner plural query belongs to beginner hub. |
| `poe2 easy builds` | `/builds/easy` | `/builds/beginner`, `/builds` | Easy-build intent should not merge with beginner-build intent. |
| `poe2 build starter` / starter build variants | `/builds/beginner` | `/builds`, individual starter build detail pages | If GSC shows `/builds` winning, keep `/builds` as broad hub and link harder to `/builds/beginner`. |
| `killing palm` / `poe 2 killing palm` | `/skills/killing-palm` | `/skills/killing-palm/builds`, `/skills/staggering-palm`, Monk builds | Skill-name query belongs to skill page. |
| `killing palm builds` | `/skills/killing-palm/builds` | `/skills/killing-palm`, Monk build detail pages | Only use support page when query contains builds/using. |
| `flame wall` / `poe2 flame wall` | `/skills/flame-wall` | `/skills/flame-wall/builds`, Sorceress fire/lightning builds | Skill-name query belongs to skill page. |
| `flame wall builds` | `/skills/flame-wall/builds` | `/skills/flame-wall`, Sorceress Flame Wall build | Build-using-skill query belongs to support page. |

## Internal Linking Map

Counts come from local static HTML. Inbound examples are sampled where the count is high.

### Mercenary / Crossbow

| URL | Target Keyword | Internal Links In | Internal Links Out | Missing FAQ | Missing Related Content |
| --- | --- | ---: | --- | --- | --- |
| `/builds/mercenary` | `mercenary crossbow build poe2`, `poe 2 crossbow build` | 171 | `/guides/mercenary/crossbow`, `/builds/beginner`, `/builds/poe2-mercenary-crossbow-starter-build`, grenade/high-velocity/rapid-shot builds | No | No |
| `/guides/mercenary` | `poe2 mercenary guide` | 2 | `/builds/mercenary`, `/guides/mercenary/crossbow`, `/builds/beginner`, Mercenary detail builds | No | No |
| `/guides/mercenary/crossbow` | `crossbow leveling poe2`, crossbow guide intent | 13 | `/builds/mercenary`, `/builds/beginner`, `/builds/poe2-mercenary-crossbow-starter-build`, Mercenary detail builds | No | No |
| `/builds/poe2-mercenary-crossbow-starter-build` | `mercenary crossbow build poe2` detail/starter | 72 | `/builds/mercenary`, `/guides/mercenary/crossbow`, `/builds/beginner`, skill pages | No | No |
| `/builds/poe2-mercenary-grenade-leveling-build` | `poe2 mercenary grenade build` | 8 | `/builds/mercenary`, `/guides/mercenary/crossbow`, `/builds/beginner`, starter build | No | No |
| `/builds/poe2-mercenary-lightning-crossbow-build` | `poe2 mercenary lightning build` | 17 | `/builds/mercenary`, `/guides/mercenary/crossbow`, `/builds/beginner`, starter build | No | No |
| `/builds/poe2-mercenary-cold-crossbow-build` | `poe2 mercenary cold build` | 13 | `/builds/mercenary`, `/guides/mercenary/crossbow`, `/builds/beginner`, starter build | No | No |
| `/builds/poe2-mercenary-high-velocity-boss-build` | `poe2 mercenary boss build` | 12 | `/builds/mercenary`, `/guides/mercenary/crossbow`, `/builds/beginner`, starter build | No | No |
| `/builds/poe2-mercenary-rapid-shot-build` | `poe2 rapid shot mercenary build` | 9 | `/builds/mercenary`, `/guides/mercenary/crossbow`, `/builds/beginner`, starter build | No | No |

Observations:

- `/builds/mercenary` has very strong sitewide inbound linking.
- `/builds/poe2-mercenary-crossbow-starter-build` is also strongly linked.
- `/guides/mercenary` has weak inbound linking for a class guide page.
- `/guides/mercenary/crossbow` is healthy as a support page, but must not steal pure build-query ownership from `/builds/mercenary`.

### Beginner

| URL | Target Keyword | Internal Links In | Internal Links Out | Missing FAQ | Missing Related Content |
| --- | --- | ---: | --- | --- | --- |
| `/builds` | broad build hub | 171 | all cluster pages and build detail pages | Expected: no FAQ | Expected: no explicit Related blocks |
| `/builds/beginner` | `poe2 beginner builds` | 12 | `/builds/mercenary`, `/guides/mercenary/crossbow`, `/builds/poe2-mercenary-crossbow-starter-build`, beginner minion build | No | No |
| `/builds/easy` | `poe2 easy builds` | 4 | `/builds/mercenary`, `/guides/mercenary/crossbow`, `/builds/poe2-mercenary-crossbow-starter-build`, Flame Wall | No | No |
| `/builds/poe2-beginner-minion-witch-build` | `poe2 beginner build` | 30 | `/builds/mercenary`, `/builds`, `/class-picker`, Sorceress Spark | No | No |
| `/builds/poe2-beginner-ranged-starter-build` | `poe2 beginner ranged build` | 5 | `/builds/mercenary`, `/builds`, `/class-picker`, beginner minion | No | No |
| `/builds/poe2-beginner-melee-starter-build` | `poe2 beginner melee build` | 4 | `/builds/mercenary`, `/builds`, `/class-picker`, beginner minion | No | No |
| `/class-picker` | `poe2 class picker` | 171 | `/builds/mercenary`, `/builds/monk`, `/builds` | Expected: no FAQ | Expected: tool surface |

Observations:

- `/builds/beginner` is correctly separated from `/builds/easy`.
- `/builds` is a broad hub and should not become the owner for `poe2 beginner builds`.
- `/builds/easy` has low inbound count compared with `/builds/beginner`; acceptable unless GSC shows `poe2 easy builds` rising.

### Killing Palm

| URL | Target Keyword | Internal Links In | Internal Links Out | Missing FAQ | Missing Related Content |
| --- | --- | ---: | --- | --- | --- |
| `/skills/killing-palm` | `killing palm`, `poe 2 killing palm` | 31 | `/skills/killing-palm/builds`, `/builds/monk`, `/builds/falling-thunder`, Monk detail builds, `/skills/staggering-palm`, `/skills/flame-wall` | No | No |
| `/skills/killing-palm/builds` | `killing palm builds` | 3 | `/skills/killing-palm`, Monk detail builds, `/skills/staggering-palm` | No | No |
| `/skills/staggering-palm` | `staggering palm` | 24 | `/skills/killing-palm`, `/skills/killing-palm/builds`, Monk detail builds | No | No |
| `/builds/monk` | `poe2 monk builds` | 171 | `/skills/killing-palm`, `/skills/staggering-palm`, `/builds/falling-thunder`, Monk detail builds | No | No |
| `/builds/falling-thunder` | `poe2 falling thunder build` | 5 | `/skills/killing-palm`, `/skills/killing-palm/builds`, `/skills/staggering-palm`, Monk build | No | No |

Observations:

- `/skills/killing-palm` is the correct owner and has enough inbound support.
- `/skills/killing-palm/builds` is under-linked, but that is acceptable unless GSC exposes "killing palm build(s)" queries.
- Killing Palm and Staggering Palm are tightly linked; keep ownership separate by query root.

### Flame Wall

| URL | Target Keyword | Internal Links In | Internal Links Out | Missing FAQ | Missing Related Content |
| --- | --- | ---: | --- | --- | --- |
| `/skills/flame-wall` | `flame wall`, `poe2 flame wall` | 23 | `/skills/flame-wall/builds`, `/builds/easy`, Sorceress build details, `/skills/spark`, `/skills/fireball`, `/skills/killing-palm` | No | No |
| `/skills/flame-wall/builds` | `flame wall builds` | 1 | `/skills/flame-wall`, Sorceress Flame Wall/Fireball/Spark builds, fire skills | No | No |
| `/builds/poe2-sorceress-flame-wall-build` | `poe2 sorceress flame wall build` | 5 | `/skills/flame-wall`, `/skills/spark`, `/skills/rolling-magma`, Sorceress Spark | No | No |
| `/builds/poe2-sorceress-fireball-build` | `poe2 sorceress fireball build` | 6 | `/skills/fireball`, `/skills/flame-wall`, `/skills/ember-fusillade`, Sorceress Spark | No | No |
| `/builds/poe2-sorceress-spark-starter-build` | `poe2 sorceress starter build` | 59 | `/skills/spark`, `/skills/orb-of-storms`, `/skills/flame-wall` | No | No |

Observations:

- `/skills/flame-wall` is healthy and should remain the owner for the base skill query.
- `/skills/flame-wall/builds` has only one inbound link from the parent skill page. Do not strengthen until GSC exposes build-variant queries.
- Spark and Fireball support the Flame Wall cluster but should not compete for Flame Wall ownership.

## Content Gaps

### P0: Wait for GSC page-level data before changing

These are not implementation tasks yet. They are action candidates after the next export.

1. Mercenary guide inbound weakness:
   - `/guides/mercenary` has only 2 inbound links.
   - If `poe2 mercenary guide` grows, add stronger inbound links from `/builds/mercenary`, `/builds/beginner`, and `/`.

2. Crossbow ownership split:
   - `/builds/mercenary`, `/guides/mercenary/crossbow`, and `/builds/poe2-mercenary-crossbow-starter-build` all contain crossbow build language.
   - Need GSC Pages report to see which URL Google prefers for each query.

3. Beginner hub vs build hub:
   - `/builds` and `/builds/beginner` both mention beginner builds.
   - If GSC ranks `/builds` for `poe2 beginner builds`, push clearer exact-match links from `/builds` to `/builds/beginner` rather than creating a new page.

4. Skill support pages are under-linked:
   - `/skills/flame-wall/builds` inbound: 1.
   - `/skills/killing-palm/builds` inbound: 3.
   - Do not change unless "builds using skill" queries appear.

### P1: Low-risk improvements once data confirms

1. Add class-guide internal links into `/guides/mercenary` if guide query grows.
2. Add exact "crossbow leveling poe2" anchor from `/builds/mercenary` to `/guides/mercenary/crossbow` if the leveling query keeps rising.
3. Add exact "poe2 beginner builds" anchor from `/` and `/builds` to `/builds/beginner` if beginner impressions grow but clicks stay at zero.
4. Add one more link into `/skills/flame-wall/builds` from Sorceress Flame Wall build only if Flame Wall build-query impressions appear.

## Cannibalization Risks

| Risk | Competing URLs | Severity | Rule |
| --- | --- | --- | --- |
| Mercenary crossbow build | `/builds/mercenary`, `/builds/poe2-mercenary-crossbow-starter-build`, `/guides/mercenary/crossbow` | High | Build query owner is `/builds/mercenary`; detail page supports; guide owns leveling/workflow. |
| Crossbow leveling | `/guides/mercenary/crossbow`, `/builds/mercenary`, Mercenary detail pages | Medium | If query contains leveling/how-to, guide owns it. If query contains build only, `/builds/mercenary` owns it. |
| Beginner builds | `/builds`, `/builds/beginner`, `/builds/easy`, beginner detail pages | Medium | `/builds/beginner` owns exact beginner builds; `/builds` remains broad index. |
| Killing Palm | `/skills/killing-palm`, `/skills/killing-palm/builds`, Monk build detail pages | Low | Skill query stays on skill page; build query goes to support page. |
| Flame Wall | `/skills/flame-wall`, `/skills/flame-wall/builds`, `/builds/poe2-sorceress-flame-wall-build` | Low/Medium | Base skill query stays on skill page; build intent goes to support/build detail page. |

## Ready-To-Act Rules When New GSC Arrives

Use this decision tree before any edits:

1. If a query has impressions and the winning page matches the owner map:
   - Do not create a page.
   - Strengthen FAQ, exact anchor, and related links only on the winning owner URL.

2. If a query has impressions but Google shows the wrong URL:
   - Do not create a page.
   - Reduce ambiguity by linking from the wrong URL to the owner with exact natural anchor text.

3. If multiple URLs receive impressions for the same query:
   - Mark cannibalization.
   - Pick the owner from `CONTENT_ARCHITECTURE.md`.
   - Use internal links and headings to clarify ownership.

4. If a new query has no current owner:
   - Create a new page only if it passes `CONTENT_ARCHITECTURE.md` page creation rules.

## Current Recommendation

No implementation until the next GSC export.

The site is prepared to act quickly because the main ownership map is already clear. The next action depends on which URL Google chooses for:

- `poe 2 crossbow build`
- `mercenary crossbow build poe2`
- `crossbow leveling poe2`
- `poe2 beginner builds`
- `killing palm`
- `flame wall`
