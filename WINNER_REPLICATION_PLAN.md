# Winner Replication Plan

Date: 2026-06-19
Project: POE2 Starter Tools
Scope: Analysis and structural recommendations only

No pages, URLs, builds, skills, clusters, content, metadata, sitemap, schema, or deployments were changed.

## Goal

Replicate the proven winner pattern only on pages that already show Google Search Console impressions.

Reference winners:

- `/builds/poe2-mercenary-crossbow-starter-build`
- `/builds/crossbow-monk`

Candidate pages:

- `/skills/killing-palm`
- `/skills/flame-wall`
- `/skills/falling-thunder`
- `/skills/tempest-bell`

## Reference Winner Pattern

The reference winner pattern is:

```text
Exact query owner
+ decision answer near the top
+ beginner intent coverage
+ leveling or progression guidance
+ exact-query FAQ
+ curated related builds
+ curated related skills
+ next recommended page
+ parent/child cluster structure
+ internal links from relevant hubs and adjacent pages
+ canonical and FAQ schema
```

The candidate pages should not be expanded into new URLs. They should be strengthened inside the current page ownership model.

## Current Structural Baseline

| Page | Current Type | Existing Strength |
| --- | --- | --- |
| `/skills/killing-palm` | Dynamic skill page with focused skill content | Strong exact skill signal, aliases, focused internal links, related builds, related skills, FAQ, child support page |
| `/skills/flame-wall` | Dynamic skill page with focused skill content | Strong exact skill signal, many aliases, support child page, related caster builds, related caster skills |
| `/skills/falling-thunder` | Dynamic skill page with focused skill content | Strong Monk skill owner, linked to `/builds/falling-thunder`, related Monk builds and skills |
| `/skills/tempest-bell` | Dynamic skill page with focused skill content | Strong Monk payoff owner, related Monk builds and skills, next recommended build route |

## Source-Level Internal Link Depth

Explicit source mentions in `app` and `src`:

| Target | Mentions |
| --- | ---: |
| `/skills/killing-palm` | 19 |
| `/skills/flame-wall` | 11 |
| `/skills/falling-thunder` | 9 |
| `/skills/tempest-bell` | 15 |
| `/skills/killing-palm/builds` | 7 |
| `/skills/flame-wall/builds` | 5 |
| `/builds/falling-thunder` | 12 |
| `/builds/poe2-mercenary-crossbow-starter-build` | 24 |
| `/builds/crossbow-monk` | 11 |

Interpretation:

- Killing Palm already has strong internal link depth for a skill page.
- Tempest Bell is also well connected.
- Flame Wall has solid but lighter support.
- Falling Thunder is split between the skill owner and `/builds/falling-thunder`; this is acceptable, but ownership must stay clear.

## Candidate Gap Matrix

| Check | Killing Palm | Flame Wall | Falling Thunder | Tempest Bell |
| --- | --- | --- | --- | --- |
| Exact query ownership | Strong | Strong | Medium-strong | Strong |
| Beginner intent coverage | Medium | Medium | Medium | Medium |
| Leveling intent coverage | Medium | Weak-medium | Medium | Weak-medium |
| FAQ exact-match opportunities | Medium | Medium | Medium | Medium |
| Related Builds coverage | Medium | Medium | Medium | Medium |
| Related Skills coverage | Strong | Strong | Strong | Strong |
| Internal link depth | Strong | Medium | Medium | Strong |
| Parent/child cluster structure | Strong | Strong | Medium | Medium |
| Next recommended page | Missing | Missing | Present | Present |
| Winner-pattern completeness | Medium-high | Medium | Medium-high | Medium-high |

## 1. `/skills/killing-palm`

### Current Ownership

Primary owner:

- `/skills/killing-palm` owns `killing palm`, `poe2 killing palm`, and skill-decision intent.

Existing child/support URL:

- `/skills/killing-palm/builds` owns build usage around Killing Palm.

### What Already Matches The Winner Pattern

- Exact skill URL.
- Skill title generated as `Killing Palm POE2 Skill Guide | Builds, Tags, FAQ`.
- H1 asks a direct decision question.
- Aliases include English and mixed-language variants.
- Focused internal links exist.
- Related builds include Monk palm, Monk leveling, and Tempest Bell routes.
- Related skills include Staggering Palm, Tempest Bell, Falling Thunder, and Wind Blast.
- FAQ schema exists through the dynamic skill template.
- Parent/child structure exists through `/skills/killing-palm/builds`.

### Gaps

- No `nextRecommended` route is defined for Killing Palm.
- Beginner coverage exists but is not as structured as the winner pages.
- Leveling coverage exists mostly through FAQ, not as a dedicated progression block.
- FAQ phrasing does not yet fully mirror exposed query variants such as `poe2 killing palm`, `poe 2 killing palm`, and mixed-language variants.
- Related build section is useful but narrower than the winner pages.

### Structural Recommendations

Do not create new URLs.

Recommended structural improvements for a future implementation pass:

1. Add `nextRecommended` to the existing `focusedSkillContent["killing-palm"]`.
   - Recommended target: `/skills/killing-palm/builds` or `/builds/monk`.
   - Reason: winner pages route users to the next decision instead of ending at FAQ.
2. Add a dedicated existing-page section pattern for skill winners:
   - `Beginner Fit`
   - `Leveling Use`
   - `Common Mistakes`
   - `When To Skip`
3. Expand FAQ using exact exposed phrases:
   - `Is Killing Palm good in POE2?`
   - `How does Killing Palm work in POE2?`
   - `What builds use Killing Palm?`
   - `Is Killing Palm good for leveling?`
4. Keep `/skills/killing-palm` as the skill owner and `/skills/killing-palm/builds` as the build-usage owner.
5. Do not create another Killing Palm build URL.

## 2. `/skills/flame-wall`

### Current Ownership

Primary owner:

- `/skills/flame-wall` owns `flame wall`, `poe2 flame wall`, `poe 2 flame wall`, and skill-decision intent.

Existing child/support URL:

- `/skills/flame-wall/builds` owns build usage around Flame Wall.

### What Already Matches The Winner Pattern

- Exact skill URL.
- Many aliases for English, compact spelling, and mixed-language variants.
- H1 asks whether the player should use Flame Wall.
- Focused internal links exist.
- Related builds include Sorceress Flame Wall, Fireball, and Spark starter routes.
- Related skills include Spark, Fireball, Rolling Magma, Ember Fusillade, and Orb of Storms.
- Support child page exists.
- FAQ schema exists.

### Gaps

- No `nextRecommended` route is defined for Flame Wall.
- Beginner intent is present but not strong enough.
- Leveling intent is weaker than Mercenary/Crossbow winners.
- FAQ opportunities exist for exact phrases that Google has already exposed.
- The page should more clearly distinguish:
  - Flame Wall as a skill decision.
  - `/skills/flame-wall/builds` as build usage.
  - Sorceress/Spark pages as downstream routes.

### Structural Recommendations

Do not create new URLs.

Recommended structural improvements for a future implementation pass:

1. Add `nextRecommended` to `focusedSkillContent["flame-wall"]`.
   - Recommended target: `/skills/flame-wall/builds`.
2. Add skill-winner sections:
   - `Main Skill Or Support Skill`
   - `Beginner Caster Use`
   - `Leveling Use`
   - `Common Mistakes`
3. Expand FAQ with exact exposed phrases:
   - `Is Flame Wall good in POE2?`
   - `Is Flame Wall a main skill or support skill?`
   - `What builds use Flame Wall?`
   - `Is Flame Wall good for leveling?`
   - `Should Spark use Flame Wall?`
4. Strengthen the existing child path:
   - Keep `/skills/flame-wall` as the skill owner.
   - Keep `/skills/flame-wall/builds` as the build owner.
5. Keep related builds focused on existing Sorceress/Fire/Spark routes.

## 3. `/skills/falling-thunder`

### Current Ownership

Primary owner:

- `/skills/falling-thunder` owns the skill decision.

Existing build route:

- `/builds/falling-thunder` owns build intent for `poe2 falling thunder build`.

### What Already Matches The Winner Pattern

- Exact skill URL.
- Related build route already exists.
- Focused internal links exist.
- Related builds include Monk Leveling, Tempest Bell, and Palm routes.
- Related skills include Tempest Bell, Killing Palm, Staggering Palm, and Wind Blast.
- `nextRecommended` points to `/skills/tempest-bell`.
- FAQ schema exists.
- `/builds/falling-thunder` has a topic-cluster support structure with sections, related builds, related skills, and FAQ.

### Gaps

- Ownership split needs to stay explicit:
  - `/skills/falling-thunder` = skill decision.
  - `/builds/falling-thunder` = build route.
- The skill page has some leveling language, but not the same staged progression pattern as the build winners.
- FAQ could better cover exact GSC-style phrases.
- Related build notes can more clearly route users between Monk Hub, Falling Thunder Build, Tempest Bell, and Crossbow Monk comparison.

### Structural Recommendations

Do not create new URLs.

Recommended structural improvements for a future implementation pass:

1. Keep `/skills/falling-thunder` and `/builds/falling-thunder` as separate owners.
2. Add a clearer on-page owner distinction:
   - `Use this page to decide whether the skill fits.`
   - `Use /builds/falling-thunder for the build route.`
3. Add skill-winner sections:
   - `Beginner Monk Fit`
   - `Leveling Roadmap`
   - `Skill Progression`
   - `When To Choose Tempest Bell Instead`
4. Expand FAQ with exact phrases:
   - `Is Falling Thunder good in POE2?`
   - `Is Falling Thunder good for Monk leveling?`
   - `What builds use Falling Thunder?`
   - `Should I use Falling Thunder or Tempest Bell?`
   - `Should I choose Falling Thunder or Crossbow Monk?`
5. Keep internal links pointing toward existing validated pages:
   - `/builds/monk`
   - `/builds/falling-thunder`
   - `/skills/tempest-bell`
   - `/skills/killing-palm`
   - `/builds/crossbow-monk`

## 4. `/skills/tempest-bell`

### Current Ownership

Primary owner:

- `/skills/tempest-bell` owns the Tempest Bell skill decision.

Existing build route:

- `/builds/poe2-monk-tempest-bell-build` exists as the build detail route.

### What Already Matches The Winner Pattern

- Exact skill URL.
- Focused skill content exists.
- Internal links point to Monk Builds, Tempest Bell Build, Killing Palm, Falling Thunder, Beginner Builds, and Easy Builds.
- Related builds include Tempest Bell, Monk Leveling, and Palm routes.
- Related skills include Killing Palm, Falling Thunder, Staggering Palm, and Charged Staff.
- `nextRecommended` points to the Tempest Bell build route.
- FAQ schema exists.

### Gaps

- No support-page mapping exists in `supportPageBySkill` for Tempest Bell, even though an existing build route exists.
- Beginner intent is present but lighter than Crossbow Monk.
- Leveling intent is not as structured as winner pages.
- Exact FAQ opportunities remain.
- Parent/child relationship should be more explicit:
  - `/skills/tempest-bell` = skill decision.
  - `/builds/poe2-monk-tempest-bell-build` = build route.

### Structural Recommendations

Do not create new URLs.

Recommended structural improvements for a future implementation pass:

1. Add Tempest Bell to `supportPageBySkill` using the existing URL:
   - `/builds/poe2-monk-tempest-bell-build`
2. Add skill-winner sections:
   - `Beginner Fit`
   - `Leveling Roadmap`
   - `Boss Payoff Role`
   - `When To Use Falling Thunder First`
3. Expand FAQ with exact phrases:
   - `Is Tempest Bell good in POE2?`
   - `What builds use Tempest Bell?`
   - `Is Tempest Bell good for beginners?`
   - `Should I use Tempest Bell or Falling Thunder?`
   - `What skills pair with Tempest Bell?`
4. Keep related builds focused on existing Monk routes:
   - `/builds/monk`
   - `/builds/poe2-monk-tempest-bell-build`
   - `/builds/falling-thunder`
   - `/builds/poe2-monk-leveling-build`
   - `/builds/crossbow-monk`
5. Do not create `/skills/tempest-bell/builds` unless GSC later proves that query family cannot be served by the existing build URL.

## Shared Structural Improvements

These should be applied only in a later approved implementation pass.

### A. Extend Existing Focused Skill Content

Use the existing `focusedSkillContent` pattern in `app/skills/[slug]/page.tsx`.

Recommended optional fields:

```text
quickAnswer
beginnerFit
levelingRoadmap
commonMistakes
ownershipNote
```

This avoids new routes and keeps all improvements inside the existing dynamic skill page system.

### B. Add Winner-Style Sections To Candidate Skill Pages

The winner build pages work because they make the next decision obvious. Candidate skill pages should get the same structure:

```text
Decision Answer
Beginner Fit
Leveling Use
Best Builds Using This Skill
Related Skills
Next Recommended Page
FAQ
```

Do not turn these pages into wiki articles. Keep them decision-first.

### C. Keep Keyword Ownership Boundaries

| Keyword Intent | Owner |
| --- | --- |
| `poe2 killing palm` | `/skills/killing-palm` |
| `killing palm builds` | `/skills/killing-palm/builds` |
| `poe2 flame wall` | `/skills/flame-wall` |
| `flame wall builds` | `/skills/flame-wall/builds` |
| `poe2 falling thunder` | `/skills/falling-thunder` |
| `poe2 falling thunder build` | `/builds/falling-thunder` |
| `poe2 tempest bell` | `/skills/tempest-bell` |
| `poe2 tempest bell build` | `/builds/poe2-monk-tempest-bell-build` |

### D. FAQ Expansion Rules

Add FAQ only when it matches one of these:

- A GSC-exposed exact phrase.
- A clear beginner decision.
- A leveling decision.
- A build-vs-skill ownership distinction.
- A related-skill comparison.

Do not add generic FAQ just to increase count.

### E. Internal Link Rules

Each candidate should have:

- Link to parent hub.
- Link to strongest existing build route.
- Link to 3-5 related skills.
- Link to one beginner/easy comparison page when friction matters.
- Link to one next recommended page.

No candidate needs a new URL at this stage.

## Priority Order

1. `/skills/killing-palm`
   - Highest existing skill signal.
   - Strong internal link depth.
   - Needs next recommended page and exact-query FAQ expansion.
2. `/skills/flame-wall`
   - Repeated skill signal.
   - Strong alias base.
   - Needs stronger beginner/leveling structure and next recommended page.
3. `/skills/falling-thunder`
   - Already connected to Monk winner cluster.
   - Needs clearer skill-vs-build ownership and exact FAQ refinement.
4. `/skills/tempest-bell`
   - Strong Monk support page.
   - Needs existing build route surfaced as support route and more explicit progression structure.

## Recommendation

Proceed later with one focused implementation pass across these four existing pages only.

Implementation should be limited to:

- Existing `focusedSkillContent` entries.
- Existing `supportPageBySkill` mappings.
- Existing related build and related skill arrays.
- Existing FAQ schema through the current dynamic skill template.

Do not:

- Create new URLs.
- Create new skill pages.
- Create new build pages.
- Create new clusters.
- Deploy without a separate approval.
