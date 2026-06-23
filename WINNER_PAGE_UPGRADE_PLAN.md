# Winner Page Upgrade Plan

Project: `poe2startertools.com`

Winner page:

- `/builds/poe2-mercenary-crossbow-starter-build`
- GSC evidence: 154 impressions

Date: 2026-06-11

## Goal

Strengthen the current GSC winner page without creating a new keyword cluster, build page, skill page, or route.

This page should become the clearest answer for:

- `mercenary crossbow build poe2`
- `poe2 mercenary crossbow build`
- `poe 2 crossbow build`
- beginner Mercenary crossbow starter intent

## Ownership Decision

New GSC page evidence makes `/builds/poe2-mercenary-crossbow-starter-build` the active winner.

Use this ownership model:

| Query / Intent | Owner | Support |
| --- | --- | --- |
| `mercenary crossbow build poe2` | `/builds/poe2-mercenary-crossbow-starter-build` | `/builds/mercenary` |
| `poe2 mercenary crossbow build` | `/builds/poe2-mercenary-crossbow-starter-build` | `/builds/mercenary` |
| `poe 2 crossbow build` | `/builds/poe2-mercenary-crossbow-starter-build` unless GSC later shows broader hub preference | `/builds/mercenary` |
| `crossbow leveling poe2` | `/guides/mercenary/crossbow` | winner page links to guide |
| `poe2 beginner builds` | `/builds/beginner` | winner page links as comparison |

Do not create:

- `/builds/mercenary-crossbow`
- `/builds/poe2-crossbow-build`
- `/guides/mercenary-crossbow-build`
- any new crossbow cluster page

## Current Issues To Fix

1. FAQ depth is too shallow:
   - Current FAQ count: 3.
   - It does not directly answer all GSC query forms.

2. Related Builds are not focused:
   - Current generic template can show unrelated builds such as Monk, Huntress, Druid, or Witch.
   - This weakens topical clarity for a page Google has already selected.

3. Related Skills are not curated:
   - Core skills are present.
   - Off-topic skills such as `Skeletal Sniper` can appear from the generic algorithm.

4. Beginner guidance exists but needs stronger structure:
   - Current leveling bullets are useful.
   - Missing explicit beginner progression and staged crossbow leveling path.

5. Internal links need targeted reinforcement:
   - Add direct support from Builds Hub, Skills Hub, Flame Wall, Killing Palm.
   - Keep links natural and decision-based.

## Upgrade Scope

Implement only a winner-page override and targeted source links.

Do not redesign the page.
Do not change route structure.
Do not update sitemap logic unless URL count unexpectedly changes.
Do not alter the full build template for every build page.

## Page Content Upgrades

### 1. Add Quick Answer Block

Purpose:

- Give search visitors a fast answer before they scroll.

Recommended fields:

| Field | Value |
| --- | --- |
| Best for | Ranged players who want crossbow weapon feel |
| Difficulty | Medium |
| Clear skill | Fragmentation Rounds |
| Boss skill | High Velocity Rounds |
| Safety skill | Escape Shot |
| Add later | Gas Grenade or Explosive Grenade |
| Safer beginner alternatives | Beginner Minion Witch, Ranger |

### 2. Add Beginner Progression

Heading:

- `Beginner Progression`

Required points:

1. Start with one clear skill.
2. Add one boss button.
3. Add safety before extra damage.
4. Upgrade crossbow damage early.
5. Add grenades only after the first loop works.

### 3. Add Crossbow Leveling Path

Heading:

- `Crossbow Leveling Path`

Required stages:

| Stage | Problem | Answer |
| --- | --- | --- |
| Early campaign | Packs take too long | Use Fragmentation Rounds. |
| First rares | Single-target feels weak | Add High Velocity Rounds. |
| First deaths | Enemies reach you | Use Escape Shot and stop trading hits. |
| Dense packs | Need space control | Add Gas Grenade or Explosive Grenade. |
| Boss friction | Damage feels inconsistent | Upgrade crossbow and single-target first. |

Add a natural link:

- Anchor: `Crossbow Leveling Guide`
- Target: `/guides/mercenary/crossbow`

### 4. Add Skill Roles

Heading:

- `Skill Roles`

Required skills:

| Skill | Role |
| --- | --- |
| Fragmentation Rounds | Pack clear |
| High Velocity Rounds | Rare and boss damage |
| Escape Shot | Safety and repositioning |
| Gas Grenade | Control and damage zone |
| Explosive Grenade | Area alternative |
| Rapid Shot | Faster crossbow pacing |
| Armour Piercing Rounds | Armor and boss support |
| Flash Grenade | Defensive control |

### 5. Replace Related Builds With Curated Recommendations

Use only related pages that support Mercenary, Beginner, Warrior, or Monk themes already validated by GSC.

Recommended list:

1. `/builds/mercenary`
   - `POE2 Mercenary Builds`
2. `/guides/mercenary/crossbow`
   - `POE2 Crossbow Leveling Guide`
3. `/builds/poe2-mercenary-grenade-leveling-build`
   - `POE2 Mercenary Grenade Leveling Build`
4. `/builds/poe2-mercenary-high-velocity-boss-build`
   - `POE2 Mercenary High Velocity Boss Build`
5. `/builds/poe2-mercenary-rapid-shot-build`
   - `POE2 Mercenary Rapid Shot Build`
6. `/builds/beginner`
   - `POE2 Beginner Builds`
7. `/builds/warrior`
   - `POE2 Warrior Builds`
   - Use only as durable melee comparison.
8. `/builds/monk`
   - `POE2 Monk Builds`
   - Use only as active melee comparison.

Do not show generic unrelated class builds in this section.

### 6. Replace Related Skills With Curated Skills

Recommended list:

1. `/skills/fragmentation-rounds`
2. `/skills/high-velocity-rounds`
3. `/skills/escape-shot`
4. `/skills/gas-grenade`
5. `/skills/explosive-grenade`
6. `/skills/rapid-shot`
7. `/skills/armour-piercing-rounds`
8. `/skills/flash-grenade`

Remove off-topic generic matches, especially:

- `Skeletal Sniper`

### 7. Expand FAQ

Current FAQ should expand from 3 to 8-10 questions.

Required FAQ topics:

1. `What is the best mercenary crossbow build poe2?`
2. `Is this the best poe 2 crossbow build for beginners?`
3. `How should crossbow leveling poe2 start?`
4. `What skill should Mercenary use for pack clear?`
5. `What skill should Mercenary use for boss damage?`
6. `When should Mercenary add grenades?`
7. `Is Mercenary Crossbow easier than Ranger?`
8. `Should I choose Mercenary Crossbow or Beginner Minion Witch?`

Schema:

- Keep FAQPage JSON-LD generated from the rendered FAQ list.
- Do not add schema-only FAQ that is not visible on the page.

## Internal Link Upgrades

Add winner-page links from:

| Source | Anchor | Target | Intent |
| --- | --- | --- | --- |
| `/builds` | `POE2 Mercenary Crossbow Starter Build` | winner page | Build hub to winning build detail. |
| `/skills` | `Mercenary Crossbow Starter Build` | winner page | Skill hub to current build route from crossbow skills. |
| `/skills/flame-wall` | `Mercenary Crossbow Starter Build` | winner page | Caster setup vs ranged weapon comparison. |
| `/skills/killing-palm` | `Mercenary Crossbow Starter Build` | winner page | Active melee vs ranged crossbow comparison. |
| `/builds/warrior` | `Mercenary Crossbow Starter Build` | winner page | Durable melee vs ranged weapon comparison. |

Keep these links as comparison/decision routes. Do not imply Flame Wall or Killing Palm are part of the crossbow build.

## Implementation Shape

Preferred implementation:

- Add a small `focusedBuildContent` object in `app/builds/[slug]/page.tsx`.
- Key it by `poe2-mercenary-crossbow-starter-build`.
- Override only:
  - extra sections
  - FAQ
  - related builds
  - related skills
- Keep generic rendering for all other build pages.

Why:

- Lowest blast radius.
- No schema changes outside the winner page.
- No database schema changes.
- No URL changes.

## Validation

After implementation:

- `npm run build` passes.
- Static page count remains `176`.
- Sitemap URL count remains `171`.
- Winner page status is 200.
- Winner page contains:
  - `Beginner Progression`
  - `Crossbow Leveling Path`
  - `Skill Roles`
  - expanded FAQ
  - curated Related Builds
  - curated Related Skills
- Winner page no longer shows:
  - `Skeletal Sniper`
  - unrelated Monk/Huntress/Druid/Witch builds inside Related Builds
- Winner page receives links from:
  - `/builds`
  - `/skills`
  - `/skills/flame-wall`
  - `/skills/killing-palm`
  - `/builds/warrior`

## Stop Conditions

Stop and reassess if:

- New GSC data shows `/builds/mercenary` outranking the detail page for the same exact query.
- `crossbow leveling poe2` is assigned primarily to `/guides/mercenary/crossbow`.
- Beginner queries start assigning impressions to `/builds/beginner` instead of the winner page.

In those cases, do not create new URLs; clarify ownership through headings and internal anchors.
