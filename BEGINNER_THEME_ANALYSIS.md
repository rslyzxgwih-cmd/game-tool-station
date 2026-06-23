# Beginner Theme Analysis

Project: `poe2startertools.com`

Date: 2026-06-13

Status: analysis only.

Reviewed URLs:

- `/builds/beginner`
- `/builds/easy`
- `/builds`
- comparison target: `/builds/poe2-mercenary-crossbow-starter-build`

Constraints followed:

- No deployment.
- No code changes.
- No new pages.
- No new URLs.

## Executive Conclusion

Google is actively crawling the Beginner/Easy area because it sees a coherent low-risk build decision cluster:

```text
/builds
  -> /builds/beginner
  -> /builds/easy
  -> /builds/poe2-mercenary-crossbow-starter-build
  -> /guides/mercenary/crossbow
  -> beginner-friendly build details
  -> related skill pages
```

The cluster works because it answers a real player problem:

> "I am new, casual, or returning. What build can I start without ruining the campaign?"

However, `Beginner`, `Easy`, and `Starter` are not one identical intent. They are three overlapping intents in the same funnel.

The correct ownership model is:

- `/builds` owns general build discovery.
- `/builds/beginner` owns first-character safety and new-player comparison.
- `/builds/easy` owns low-friction build selection.
- individual starter build pages own concrete class/archetype routes.
- `/builds/poe2-mercenary-crossbow-starter-build` owns exact Mercenary Crossbow starter intent.

## Why Google Is Crawling Beginner/Easy Pages

## 1. The Query Family Is Real And Broad

The site has already received GSC signals around:

- `poe2 beginner builds`
- `poe2 easy builds`
- `poe2 beginner build`
- `poe2 starter builds`
- `poe2 build starter`
- `mercenary crossbow build poe2`
- `crossbow leveling poe2`

These are connected queries. A user searching them is not only asking for content. They are trying to reduce risk before choosing a first build.

## 2. The Pages Have Clear Crawl Paths

Local internal-link references found in `app/` and `src/`:

| URL | Local references | Interpretation |
| --- | ---: | --- |
| `/builds` | 210 | Broad parent hub; count is inflated by path prefix use but confirms centrality |
| `/builds/beginner` | 13 | Strong support hub |
| `/builds/easy` | 6 | Smaller but clearly discoverable support hub |
| `/builds/poe2-mercenary-crossbow-starter-build` | 19 | Strongest exact build owner |
| `/guides/mercenary/crossbow` | 15 | Strong support guide |

Important crawl paths:

- `/` links to Beginner and Easy.
- `/builds` links to Beginner, Easy, Mercenary Crossbow, and class hubs.
- `/builds/beginner` links to Mercenary Crossbow, Mercenary hub, Crossbow guide, Minion Witch, Warrior Slam, and Ranger Lightning Arrow.
- `/builds/easy` links to Mercenary Crossbow, Mercenary hub, Crossbow guide, Minion Witch, Warrior Earthquake, and Ranger Lightning Arrow.
- Mercenary winner links back to Beginner as a safer comparison.
- Sitemap includes `/builds/beginner` and `/builds/easy`.

## 3. The Pages Use Decision-First Language

Beginner/Easy pages do not read like generic build lists. They use player-decision language:

- safety;
- input load;
- friction;
- low pressure;
- simple skills;
- fewer campaign mistakes;
- one clear damage plan;
- one defensive habit;
- one obvious upgrade path.

That language matches the searcher's underlying decision, not just the literal keyword.

## 4. The Pages Have Schema And Visible FAQ

Both `/builds/beginner` and `/builds/easy` use `TopicClusterSupportPage`, which outputs:

- `Article` schema;
- `FAQPage` schema;
- breadcrumb schema through `Breadcrumbs`;
- visible Related Builds;
- visible Related Skills;
- visible FAQ.

This gives Google an understandable page type and enough structured context to crawl these URLs as real support pages rather than thin index pages.

## Ownership Boundaries

## `/builds`

Role:

- General build hub.
- Routes broad build intent.
- Contains Build Generator.
- Links to validated clusters and build details.

Owns:

- `poe2 builds`
- `poe2 build hub`
- broad build discovery
- build generator surface

Should not own:

- `poe2 beginner builds`
- `poe2 easy builds`
- exact Mercenary Crossbow build queries

Current status:

- Correctly repositioned as `POE2 Builds Hub`.
- Uses `CollectionPage` schema.
- No FAQ, which is acceptable for a routing hub.

## `/builds/beginner`

Role:

- New-player and first-character comparison page.
- Helps users choose the safest route before picking a class/build.

Owns:

- `poe2 beginner builds`
- `poe2 beginner build`
- `path of exile 2 beginner builds`
- first-character safety queries

Should support but not own:

- `mercenary crossbow build poe2`
- `crossbow leveling poe2`
- exact class starter queries

Current content:

- Decision Answer
- How to Choose
- Where Mercenary Fits
- Beginner Leveling Rule
- Related Builds
- Related Skills
- 4 FAQs

Boundary:

`/builds/beginner` should answer "what kind of first build should I choose?" It should route exact choices to child pages.

## `/builds/easy`

Role:

- Low-friction build comparison page.
- Helps users avoid builds with too many buttons, timing windows, swaps, or early mechanical complexity.

Owns:

- `poe2 easy builds`
- `poe2 easy build`
- `poe2 easiest build`
- low-friction build queries

Should support but not own:

- exact Mercenary Crossbow build intent;
- broad Beginner intent;
- class-specific starter pages.

Current content:

- Decision Answer
- What Makes a Build Easy
- Easy Crossbow Check
- Related Builds
- Related Skills
- 3 FAQs

Boundary:

`/builds/easy` should answer "which builds require the least friction?" It can include Mercenary Crossbow only as a conditional easy route.

## `/builds/poe2-mercenary-crossbow-starter-build`

Role:

- Exact build detail winner.
- Converts a broad beginner/easy decision into one concrete route.

Owns:

- `mercenary crossbow build poe2`
- `poe2 mercenary crossbow build`
- `poe 2 crossbow build` when the user wants a starter build;
- `beginner mercenary build`

Should support but not own:

- broad `poe2 beginner builds`;
- broad `poe2 easy builds`;
- general build discovery.

Current content:

- Quick answer
- Decision answer
- Leveling plan
- Beginner Progression
- Crossbow Leveling Path
- Skill Roles
- Core skill package
- Good for / Skip if
- Related Builds
- Related Skills
- 11 FAQs

Boundary:

The Mercenary page should answer "how do I play this specific starter?" It should not become the generic beginner-build page.

## Beginner vs Easy vs Starter

These are **multiple intents**, not one intent.

They overlap, but the decision state is different.

| Term | User mindset | Main decision | Correct owner |
| --- | --- | --- | --- |
| Beginner | "I am new or rusty." | What is safe and forgiving? | `/builds/beginner` |
| Easy | "I want less friction." | What requires fewer mechanics? | `/builds/easy` |
| Starter | "I need a first playable route." | What exact build do I open and level? | Individual build pages |

## Beginner Intent

Beginner is about player confidence and risk.

The user may not know:

- which class to pick;
- which mechanics are punishing;
- whether a build is too hard;
- what to avoid as a first character.

The page should compare safe options and route users outward.

## Easy Intent

Easy is about operational friction.

The user may be experienced but wants:

- fewer buttons;
- less timing;
- fewer swaps;
- fewer early gear dependencies;
- simpler campaign flow.

The page should compare complexity, not just new-player safety.

## Starter Intent

Starter is about execution.

The user has moved from comparison to action:

- which skill first;
- how to level;
- what build route;
- what to add later;
- what to skip.

This belongs to build detail pages such as Mercenary Crossbow Starter or Warrior Slam Starter.

## Comparison Against Mercenary Winner Page

| Dimension | Beginner | Easy | Builds Hub | Mercenary Crossbow Winner |
| --- | --- | --- | --- | --- |
| Page type | Support/comparison hub | Support/comparison hub | Parent routing hub | Exact build detail |
| Primary decision | safest first build type | lowest-friction build type | which build path to open | how to play Mercenary Crossbow starter |
| FAQ count | 4 | 3 | 0 | 11 |
| Related Builds | Yes | Yes | Full build inventory | Yes, curated |
| Related Skills | Yes | Yes | No skill block | Yes, curated |
| Schema | `Article` + `FAQPage` | `Article` + `FAQPage` | `CollectionPage` | `Article` + `FAQPage` |
| Depth | Medium-high | Medium | Medium | Very high |
| Internal support | Strong | Moderate | Very broad | Strongest exact-page support |
| Best role | compare options | reduce friction | route users | convert exact intent |

Mercenary wins harder because it answers a more specific searcher state.

Beginner/Easy are earlier in the decision funnel. They can receive impressions but will usually need to pass users to exact build pages to satisfy the search.

## Why Beginner/Easy Help The Mercenary Winner

Beginner/Easy pages support Mercenary without stealing its exact ownership:

- Beginner frames Mercenary Crossbow as viable only if the user wants ranged weapon rhythm.
- Easy frames Mercenary Crossbow as easy only if the first skill package stays small.
- Both pages link to Mercenary Crossbow as a related build.
- Mercenary links back to Beginner as the safer comparison.

This creates a useful loop:

```text
Beginner/Easy uncertainty
  -> Mercenary Crossbow as one possible route
  -> Mercenary detail page explains exact progression
  -> Beginner comparison remains available if the route feels too complex
```

That loop is good for users and good for Google because it clarifies page roles.

## Cannibalization Risks

## Risk 1: Beginner/Easy Carry Crossbow Keywords

`/builds/beginner` and `/builds/easy` include crossbow-related keywords and FAQ mentions.

This is useful for topical support, but risky if they start ranking for exact Mercenary Crossbow queries over the winner page.

Control:

- Keep crossbow wording as comparison/support language.
- Do not make Beginner/Easy pages the primary answer for Mercenary Crossbow.
- Keep exact crossbow progression on the winner page.

## Risk 2: `/builds` Could Drift Back Into Beginner

`/builds` was previously too close to `POE2 Beginner Builds`.

Current status is corrected:

- `/builds` = `POE2 Builds Hub`
- `/builds/beginner` = `POE2 Beginner Builds`

Control:

- Keep `/builds` broad.
- Do not add beginner-specific H1/title/schema to `/builds`.

## Risk 3: Easy And Beginner Could Collapse Into One Page

They are adjacent but not identical.

Control:

- Beginner should focus on safety and new-player risk.
- Easy should focus on friction and mechanical simplicity.

## Recommended Interpretation

Beginner, Easy, and Starter should be treated as a three-layer funnel:

```text
/builds
  Broad routing

/builds/beginner
  "I am new. What is safe?"

/builds/easy
  "I want low friction. What is simple?"

/builds/[starter-build]
  "I chose a route. How do I play it?"
```

This is stronger than trying to merge them into one page.

## Actionable Findings For Future Work

No immediate implementation is required from this report.

When future GSC data arrives:

1. If `poe2 beginner builds` grows:
   - strengthen `/builds/beginner`;
   - do not change `/builds`.

2. If `poe2 easy builds` grows:
   - strengthen `/builds/easy`;
   - add more friction-based comparisons only if they use existing URLs.

3. If `poe2 starter builds` grows:
   - decide whether the user wants a generic starter comparison or a class-specific starter.
   - if generic, use `/builds/beginner` or `/builds`.
   - if class-specific, use the existing starter build detail page.

4. If `mercenary crossbow build poe2` grows:
   - strengthen the Mercenary winner page;
   - keep Beginner/Easy as support pages only.

## Bottom Line

Google is crawling Beginner/Easy because the site has a coherent low-risk build cluster, not because those pages are isolated winners.

The winning structure is:

- `/builds` routes broad build intent.
- `/builds/beginner` owns safety-first beginner comparison.
- `/builds/easy` owns low-friction build comparison.
- starter build detail pages own exact execution.
- Mercenary Crossbow is the current best example of what a starter detail winner should look like.

Keep these as separate but connected intents.
