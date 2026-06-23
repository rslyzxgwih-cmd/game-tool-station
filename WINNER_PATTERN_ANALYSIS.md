# Winner Pattern Analysis

Date: 2026-06-16
Project: POE2 Starter Tools
Scope: Analysis only

Compared pages:
- Mercenary Crossbow: `/builds/poe2-mercenary-crossbow-starter-build`
- Crossbow Monk: `/builds/crossbow-monk`
- Flame Wall: `/skills/flame-wall`

No pages, URLs, classes, skills, clusters, or site content were created in this task.

## Executive Finding

The current winners share one pattern:

They do not behave like generic content pages. They behave like decision pages for exact player uncertainty.

Each winner owns one narrow decision:
- Mercenary Crossbow answers: "Should I start Mercenary with crossbow, and how do I level it?"
- Crossbow Monk answers: "Is Crossbow Monk worth trying, or should I use Mercenary/Monk separately?"
- Flame Wall answers: "Should Flame Wall be used as a main skill or a support layer?"

The repeatable winner pattern is:

1. Exact-match title and URL.
2. Direct decision answer near the top.
3. Related builds and related skills.
4. FAQ schema.
5. Breadcrumb/canonical/schema hygiene.
6. Internal links to parent hubs and adjacent alternatives.
7. Clear intent ownership, not broad wiki coverage.

## 1. Common Query Patterns

| Page | Query Pattern | Intent Type | Why Google Can Understand It |
| --- | --- | --- | --- |
| `/builds/poe2-mercenary-crossbow-starter-build` | `poe2 mercenary crossbow build`, `mercenary crossbow build poe2`, `poe 2 crossbow build`, `crossbow leveling poe2` | Exact build + leveling | Class + weapon + build modifier are all explicit |
| `/builds/crossbow-monk` | `poe2 crossbow monk`, `poe2 crossbow monk build`, `crossbow monk poe2` | Hybrid build validation | The page answers whether the hybrid should exist, not just how to build it |
| `/skills/flame-wall` | `poe2 flame wall`, `poe 2 flame wall`, `flame wall poe2`, localized Flame Wall variants | Skill decision | The page maps a skill name to usage, builds, tags, and FAQ |

Common query traits:
- All three are noun-heavy, low ambiguity searches.
- Queries contain an entity plus a decision modifier:
  - class + weapon + build;
  - weapon + class hybrid;
  - skill name + game modifier.
- They are not broad "best POE2 builds" searches.
- They are closer to "I am already considering X, should I use it?" than "teach me everything."

Pattern implication:
- Future work should favor exact decision ownership over broad category pages.
- Do not create nearby duplicate owners for the same query family.

## 2. Internal Link Patterns

Current local source reference counts:

| Target | References in `app` and `src` |
| --- | ---: |
| `/builds/poe2-mercenary-crossbow-starter-build` | 24 |
| `/builds/crossbow-monk` | 11 |
| `/skills/flame-wall` | 11 |

### Mercenary Crossbow

Strongest internal link pattern:
- Receives links from `/builds`, `/skills`, `/guides/mercenary`, skill pages, Beginner/Easy pages, and comparison pages.
- Links outward to:
  - Mercenary hub.
  - Crossbow guide.
  - Beginner/Easy hubs.
  - Monk and Crossbow Monk comparison paths.
  - Core crossbow skills.

This creates a hub-and-spoke loop:

`/builds` -> Mercenary Crossbow -> related skills / related builds -> supporting hubs -> back to winner.

### Crossbow Monk

Strong internal link pattern:
- Parent is `/builds/monk`.
- Links to Mercenary Crossbow when crossbow is the real intent.
- Links to Monk/Falling Thunder when Monk is the real intent.
- Links to Beginner/Easy to clarify friction.

This page works because it is a decision fork, not a build list:

`Crossbow Monk` -> choose `Mercenary Crossbow` or `Monk/Falling Thunder`.

### Flame Wall

Strong internal link pattern:
- `/skills/flame-wall` links to `/skills/flame-wall/builds`.
- Flame Wall support page links to Sorceress Flame Wall, Fireball, Spark, and Easy Builds.
- Skill detail links back into Builds Hub and Mercenary Crossbow as a comparison route.

This creates a skill-to-build loop:

`/skills` -> Flame Wall -> Flame Wall Builds -> related Sorceress builds and related skills.

### Shared Internal Link Pattern

All three winners have:
- Parent hub link.
- Related Builds block.
- Related Skills block.
- FAQ block.
- Alternative-route links to avoid dead ends.

The most important pattern is not raw link count. It is directional clarity:
- If the user wants crossbow, route to Mercenary.
- If the user wants Monk, route to Monk/Falling Thunder/Tempest Bell.
- If the user wants Flame Wall, route to skill usage and caster builds.

## 3. Page Structure Patterns

| Page | Template Type | Above-Fold Job | Middle Page Job | Bottom Page Job |
| --- | --- | --- | --- | --- |
| Mercenary Crossbow | Build detail page | Quick answer and build identity | Progression, roadmap, skill roles | Related builds, related skills, FAQ |
| Crossbow Monk | Topic cluster support page | Decision answer and parent hub | Beginner progression, leveling roadmap, skill progression | Related builds, related skills, FAQ |
| Flame Wall | Skill detail page | "Should you use this skill?" | Overview, tags, level scaling, related builds/skills | FAQ and support note |

Common structure traits:
- They answer the decision before listing data.
- They expose related builds and related skills on the same page.
- They use FAQ schema.
- They use breadcrumbs.
- They use canonical URLs.
- They avoid blog-style narrative.

Structure difference:
- Mercenary Crossbow is the deepest page because it has custom focused build content.
- Crossbow Monk is strong as a decision fork but lighter than the Mercenary winner.
- Flame Wall is strongest when treated as a skill owner plus a support build page, not as one oversized skill article.

## 4. Title Patterns

| Page | URL | Title Pattern | H1 / On-Page Pattern |
| --- | --- | --- | --- |
| Mercenary Crossbow | `/builds/poe2-mercenary-crossbow-starter-build` | `POE2 Mercenary Crossbow Starter Build` | Exact build name |
| Crossbow Monk | `/builds/crossbow-monk` | `POE2 Crossbow Monk Build` | Exact hybrid query |
| Flame Wall | `/skills/flame-wall` | `Flame Wall POE2 Skill Guide | Builds, Tags, FAQ` | `Should you use Flame Wall in POE2?` |

Common title traits:
- Starts with the entity or exact query.
- Uses `POE2`.
- Includes the page type: Build, Starter Build, Skill Guide.
- Avoids vague marketing language.

Best title pattern by intent:
- Build page: `POE2 [Class/Skill/Weapon] [Build Type] Build`
- Hybrid decision page: `POE2 [Hybrid Concept] Build`
- Skill page: `[Skill Name] POE2 Skill Guide | Builds, Tags, FAQ`

## 5. Why These Winners Work

### They Have Clear Keyword Ownership

| Intent | Owner |
| --- | --- |
| Mercenary crossbow starter | `/builds/poe2-mercenary-crossbow-starter-build` |
| Crossbow Monk hybrid decision | `/builds/crossbow-monk` |
| Flame Wall skill decision | `/skills/flame-wall` |
| Flame Wall build usage | `/skills/flame-wall/builds` |

This prevents cannibalization.

### They Route Users To The Next Decision

Each page gives the user somewhere useful to go next:
- Mercenary Crossbow -> Crossbow Monk, skills, beginner/easy comparisons.
- Crossbow Monk -> Mercenary Crossbow or Monk/Falling Thunder.
- Flame Wall -> Flame Wall Builds, Easy Builds, Spark/Fireball/Sorceress routes.

### They Combine Content And Database Signals

The pages are not pure prose. They expose:
- skill tags;
- build class;
- difficulty;
- related builds;
- related skills;
- FAQ;
- schema.

This makes the site feel like a tool/database, not an article farm.

## 6. Weaknesses To Watch

### Mercenary Crossbow

Risk:
- It may attract broad crossbow intent that should sometimes go to `/guides/mercenary/crossbow`.

Watch:
- If queries contain `guide`, `leveling`, or `how to`, compare page impressions between the build detail and guide page.

### Crossbow Monk

Risk:
- It can cannibalize Mercenary Crossbow if Google treats "crossbow" as stronger than "Monk".

Watch:
- Whether crossbow-only queries land on Crossbow Monk.
- If yes, keep Crossbow Monk as a comparison/fork page, not a full crossbow guide.

### Flame Wall

Risk:
- Flame Wall has two valid owner layers:
  - `/skills/flame-wall` for skill decision;
  - `/skills/flame-wall/builds` for build usage.

Watch:
- Whether build-intent queries go to the skill page instead of the builds support page.
- If build-intent impressions cluster on `/skills/flame-wall`, internal links may need to route harder to `/skills/flame-wall/builds`.

## 7. Repeatable Winner Formula

Use this formula only for already validated winners:

```text
Exact URL
+ exact title
+ decision answer
+ related builds
+ related skills
+ next decision route
+ FAQ schema
+ breadcrumb
+ canonical
+ parent hub link
```

Do not use this formula to generate new pages without GSC evidence.

## 8. Current Strategic Conclusion

The common pattern is not "more content".

The common pattern is "decision ownership plus internal routing".

Mercenary Crossbow wins because it owns the exact starter build decision.
Crossbow Monk wins because it resolves a confusing hybrid decision.
Flame Wall wins because it owns a skill decision and routes to build usage.

Next step remains observation, not expansion.

No new URLs should be created until GSC shows a repeated query that does not already have a clear owner.

