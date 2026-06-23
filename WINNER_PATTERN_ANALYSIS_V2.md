# Winner Pattern Analysis V2

Date: 2026-06-19
Project: POE2 Starter Tools
Scope: Analysis only

No page content, URLs, builds, skills, clusters, metadata, sitemap, schema, or deployment changes were made.

## Pages Compared

Primary comparison:

- `/builds/poe2-mercenary-crossbow-starter-build`
- `/builds/crossbow-monk`
- `/builds/poe2-druid-hybrid-starter-build`

Compared against:

- Warrior pages: `/builds/warrior`, `/builds/warrior/leveling`, `/builds/poe2-warrior-slam-starter-build`
- Witch pages: `/builds/witch`, `/builds/witch/minion`, `/builds/poe2-beginner-minion-witch-build`
- Other generated build pages from `src/lib/content.ts`

## Executive Finding

The current winner pattern is not simply "longer content." The winners outperform because they combine:

1. Exact query ownership.
2. A clear player decision at the top.
3. Beginner or leveling framing.
4. Curated internal links to parent hubs, alternatives, related builds, and related skills.
5. FAQ questions that match real search language.
6. Schema and canonical consistency.
7. A crawl path from the main hubs.

The Druid starter page has a valid generated build page, but it lacks the winner pattern. It has no dedicated class hub, no focused content override, no curated decision cluster, no validated GSC keyword support, and no strong internal link loop.

## 1. Content Structure Differences

| Page | Template Type | Structure Strength | Main Difference |
| --- | --- | --- | --- |
| `/builds/poe2-mercenary-crossbow-starter-build` | Dynamic build page with custom focused content | Strongest | Has quick facts, beginner progression, leveling path, skill roles, related builds, related skills, next page, and deep FAQ |
| `/builds/crossbow-monk` | Dedicated topic-cluster support page | Strong | Acts as a decision fork between Mercenary Crossbow and standard Monk routes |
| `/builds/poe2-druid-hybrid-starter-build` | Generic dynamic build page | Weak | Uses default build template with no Druid-specific cluster or focused sections |
| Warrior hub pages | Hand-written class hub plus support route | Medium | Good class ownership, but less page-level depth than Mercenary Crossbow |
| Witch hub pages | Hand-written class hub plus minion support route | Medium | Good beginner/minion framing, but fewer exact query variants than Mercenary/Crossbow |
| Other build pages | Generated data-driven build pages | Weak to medium | Useful for coverage, but mostly lack custom intent depth |

### Mercenary Crossbow

The Mercenary winner is the deepest build detail page because `app/builds/[slug]/page.tsx` contains a special `focusedBuildContent` block for `poe2-mercenary-crossbow-starter-build`.

It has:

- 7 quick facts.
- 3 beginner progression stages.
- 5 crossbow leveling path rows.
- 8 skill role explanations.
- 10 curated related build links.
- 11 curated related skill links.
- 14 FAQs.
- A next recommended page.

This page solves multiple connected decisions:

- Is Mercenary Crossbow the right starter?
- How should crossbow leveling start?
- Which skill solves pack clear?
- Which skill solves boss damage?
- When should grenades be added?
- When should the player compare Beginner Builds instead?

### Crossbow Monk

Crossbow Monk is strong for a different reason. It is not positioned as the best route. It is positioned as a decision fork.

It has:

- 11 sections.
- 11 related build links.
- 11 related skill links.
- 8 FAQs.
- A parent route: `/builds/monk`.
- A next recommended route to Mercenary Crossbow.

The page repeatedly clarifies:

- If the user wants crossbow, use Mercenary.
- If the user wants Monk, use Falling Thunder, Tempest Bell, or Monk Leveling.
- If the user wants the hybrid, treat it as an experiment.

That makes the page useful even if the build is not the recommended answer.

### Druid Hybrid Starter

The Druid page is technically present through the generic build detail route, but it is structurally much weaker.

It has:

- Default dynamic build layout.
- 3 default FAQs.
- Auto-selected related builds.
- Auto-selected related skills.
- No `focusedBuildContent`.
- No `/builds/druid` hub.
- No Druid entry in `classClusterRoutes`.
- No Druid-specific decision cluster links.
- No dedicated Druid support page.

Its content says the page is patch-sensitive and uncertain. That is honest, but it also gives Google fewer stable decision signals than Mercenary Crossbow or Crossbow Monk.

## 2. Internal Link Differences

Source-level explicit URL mentions in `app` and `src`:

| Target | Explicit Source Mentions | Interpretation |
| --- | ---: | --- |
| `/builds/poe2-mercenary-crossbow-starter-build` | 24 | Strong winner link target |
| `/builds/crossbow-monk` | 11 | Supported winner candidate |
| `/builds/poe2-druid-hybrid-starter-build` | 0 | No explicit curated source links |
| `/builds/warrior` | 24 | Strong class hub |
| `/builds/witch` | 16 | Supported class hub |
| `/builds/poe2-warrior-slam-starter-build` | 3 | Some support, less than the class hub |
| `/builds/poe2-beginner-minion-witch-build` | 3 | Some support, less than the class hub |

Important note: the Druid page can still be reached through generated build lists and sitemap output because it exists in `builds`. The issue is not route existence. The issue is lack of curated internal links with clear anchor text and decision context.

### Winner Link Pattern

Mercenary Crossbow receives links from:

- `/builds`
- `/builds/mercenary`
- `/guides/mercenary`
- `/guides/mercenary/crossbow`
- `/builds/beginner`
- `/builds/easy`
- skill pages such as Fragmentation Rounds, High Velocity Rounds, Escape Shot, Gas Grenade, Rapid Shot, Armour Piercing Rounds, and Flash Grenade
- comparison pages such as Warrior and Monk routes

Crossbow Monk receives links from:

- `/builds`
- `/builds/monk`
- `/builds/beginner`
- `/builds/easy`
- Mercenary Crossbow
- Monk skill pages and topic pages

Druid does not receive the same kind of link reinforcement. It has no parent Druid hub and no validated skill pages routing toward it.

## 3. Title Patterns

| Page | Title Pattern | Why It Works Or Fails |
| --- | --- | --- |
| Mercenary Crossbow | `POE2 Mercenary Crossbow Starter Build` | Exact class + weapon + starter + build phrase |
| Crossbow Monk | `POE2 Crossbow Monk Build` | Exact hybrid query phrase |
| Druid Hybrid | `POE2 Druid Hybrid Starter Build` | Reasonable title, but weaker because query demand and cluster support are unproven |
| Warrior hub | `POE2 Warrior Builds` | Exact class hub phrase |
| Witch hub | `POE2 Witch Builds` | Exact class hub phrase |

Winning title pattern:

```text
POE2 + entity + decision modifier + page type
```

Examples:

- `POE2 Mercenary Crossbow Starter Build`
- `POE2 Crossbow Monk Build`
- `POE2 Warrior Builds`
- `POE2 Witch Builds`

The title alone is not enough. Druid has a plausible title, but it lacks internal link support, GSC validation, and a parent cluster.

## 4. Keyword Patterns

Winner keyword patterns are narrow and decision-heavy:

- `mercenary crossbow build poe2`
- `poe2 mercenary crossbow build`
- `poe 2 crossbow build`
- `crossbow leveling poe2`
- `poe2 crossbow monk`
- `poe2 crossbow monk build`
- `poe2 monk builds`

These queries contain at least two strong entities:

- class + weapon
- weapon + class
- class + build
- skill + build
- beginner + build
- leveling + class/weapon

Druid currently uses:

- `poe2 druid starter build`
- `poe2 druid bear build`
- `poe2 druid volcano build`
- `poe2 druid cold build`
- `poe2 druid werewolf build`
- `poe2 druid elemental build`

These are valid possible keywords, but they are not yet validated winners in the current project evidence. They also spread across many Druid concepts without a parent Druid hub to consolidate them.

## 5. Beginner-Focused Elements

| Page | Beginner Framing | Leveling Guidance | Early Progression |
| --- | --- | --- | --- |
| Mercenary Crossbow | Strong | Strong | Strong |
| Crossbow Monk | Strong as a warning/fork | Strong | Strong |
| Druid Hybrid | Weak | Generic | Weak |
| Warrior hub | Medium | Linked through Warrior leveling page | Medium |
| Witch hub | Medium | Linked through Witch minion page | Medium |
| Other build pages | Usually generic | Generic 3-step plan | Weak |

The strongest pages help the player avoid a mistake, not just choose a build.

Mercenary Crossbow says:

- Keep the first setup simple.
- Use one clear skill.
- Use one boss skill.
- Add safety before extra mechanics.
- Add grenades later.

Crossbow Monk says:

- Do not treat the hybrid as the default.
- Compare Mercenary if crossbow is the real intent.
- Compare Monk routes if Monk identity is the real intent.

Druid says:

- It is flexible.
- It is patch-sensitive.
- Pick melee-first or spell-first.

That is less actionable for a new player and less clear for Google.

## 6. FAQ Usage

| Page | FAQ Count | FAQ Quality |
| --- | ---: | --- |
| Mercenary Crossbow | 14 | Strong exact-query coverage |
| Crossbow Monk | 8 | Strong decision/fork coverage |
| Druid Hybrid | 3 | Generic template FAQ |
| Warrior hub | 3 | Good class-level FAQ |
| Witch hub | 3 | Good class-level FAQ |
| Other generated builds | 3 | Generic template FAQ |

Mercenary FAQs use real query phrases:

- `best mercenary crossbow build poe2`
- `poe 2 crossbow build`
- `crossbow leveling poe2`
- `mercenary leveling build`
- `beginner mercenary build`

Crossbow Monk FAQs use the exact hybrid language:

- `Crossbow Monk`
- `Crossbow Monk leveling`
- `Crossbow Monk better than Mercenary Crossbow`
- `Crossbow Monk better than standard Monk`

Druid FAQs are inherited from the default template:

- Is this build good for beginners?
- What skills does it use first?
- Who should skip it?

Default FAQs are useful, but they do not create the same exact-match topical signal.

## 7. Related Build Sections

Mercenary Crossbow and Crossbow Monk have curated related build sections. This matters because the links are not just a list. They explain the next decision.

Mercenary Crossbow related builds include:

- Mercenary hub.
- Crossbow guide.
- Grenade leveling.
- High Velocity boss route.
- Rapid Shot route.
- Easy Builds.
- Beginner Builds.
- Warrior comparison.
- Monk comparison.
- Crossbow Monk comparison.

Crossbow Monk related builds include:

- Monk hub.
- Mercenary hub.
- Crossbow guide.
- Mercenary Crossbow starter.
- Monk Leveling.
- Tempest Bell.
- Palm Leveling.
- Falling Thunder.
- Beginner Builds.
- Easy Builds.

Druid related builds are automatically selected by class or difficulty. This can produce links, but the section lacks the curated "why this next page" logic that winner pages have.

## 8. Warrior And Witch Comparison

Warrior and Witch are stronger than generic build pages because they have hand-written class hubs:

- Exact titles.
- Canonicals.
- CollectionPage schema.
- FAQ schema.
- Breadcrumbs.
- Related skills.
- Related builds.
- Comparison links.
- Child support pages.

However, they are still less winner-like than Mercenary Crossbow because they are class hubs, not exact build/leveling answer pages.

The current pattern suggests:

- `/builds/warrior` and `/builds/witch` can earn broad class impressions.
- `/builds/poe2-warrior-slam-starter-build` and `/builds/poe2-beginner-minion-witch-build` need stronger exact-query support before they can behave like the Mercenary winner.
- Warrior and Witch should not be expanded unless GSC confirms which child query is winning.

## 9. Other Build Pages

Most other build pages come from generated build data. They are useful for coverage and sitemap breadth, but they usually lack:

- Exact GSC-backed FAQ phrases.
- Dedicated parent-child routes.
- Curated related build notes.
- Curated related skill notes.
- Beginner progression stages.
- Level 1-20 / 20-40 / early mapping guidance.
- Strong source-level internal links.

This explains why many pages can be indexed or discoverable without becoming winners.

## 10. Why The Winners Outperform

The winner pages outperform because they satisfy both search engines and players:

### For Google

- The title, URL, canonical, FAQ, and internal anchors repeat the same narrow entity.
- Related links form a cluster around validated terms.
- Parent and child routes make the hierarchy easy to understand.
- The page has enough structured sections to match multiple long-tail variants.

### For Players

- The page answers a decision immediately.
- It says when to choose the build and when to skip it.
- It gives a leveling path.
- It links to the next useful page instead of trapping the user.
- It compares adjacent alternatives.

## 11. Repeatable Winner Pattern

Use this pattern only for pages with GSC validation:

```text
Exact query owner
+ decision answer
+ beginner/leveling context
+ curated related builds
+ curated related skills
+ next recommended page
+ exact-query FAQ
+ parent hub link
+ skill/build cross-links
+ canonical and schema
```

Do not apply this pattern blindly to every build. Applying it to unvalidated Druid pages would create content bloat without traffic proof.

## 12. Strategic Recommendation

Do not expand Druid yet.

Druid currently looks like a coverage page, not a winner candidate. It should stay indexed and reachable through the generic build system, but it should not receive a dedicated cluster until GSC shows impressions for Druid-specific queries.

Priority should remain:

1. Observe Mercenary Crossbow.
2. Observe Crossbow Monk.
3. Observe Monk Hub.
4. Observe Tempest Bell and Falling Thunder.
5. Watch Warrior and Witch only for child-query evidence.
6. Avoid expanding Druid, Huntress, or broad unvalidated build families.

The strongest current growth lever is not more pages. It is understanding which existing exact-query pages Google is already testing, then reinforcing only those owners.
