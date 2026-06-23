# Content Improvement Plan

Project: `poe2startertools.com`

Target page: `/builds/poe2-mercenary-crossbow-starter-build`

GSC evidence:

- 154 impressions
- 2 clicks
- Current winner in Pages report

Date: 2026-06-11

## Objective

Turn the current winning page into the clearest answer for Mercenary Crossbow starter intent without creating a new page or new cluster.

The page should answer:

- Is Mercenary Crossbow a good starter?
- How should I level with crossbow?
- Which skill handles clear?
- Which skill handles boss damage?
- When should I add grenades?
- Should a beginner choose this over Ranger, Warrior, Witch, or Monk?

## Target Keywords

Primary:

- `mercenary crossbow build poe2`
- `poe2 mercenary crossbow build`

Secondary:

- `poe 2 crossbow build`
- `crossbow leveling poe2`
- `poe2 beginner builds`
- `poe2 mercenary guide`

Do not target unrelated crossbow pages, trade systems, passive trees, or endgame DPS calculators.

## Proposed Page Structure

Keep the current dynamic build page pattern, but add winner-specific content for this slug.

Recommended final structure:

1. Hero / decision answer
2. Quick answer table
3. Beginner progression
4. Crossbow leveling path
5. Skill role table
6. Related Builds
7. Related Skills
8. FAQ
9. Patch-sensitive note

## Section 1: Hero / Decision Answer

Current issue:

- The page has a good general answer, but it does not directly acknowledge that this is the first route for crossbow searchers.

Recommended content goal:

- State clearly that this is the starter version, not a full endgame calculator.
- Answer the player decision in the first paragraph.

Suggested copy:

`Choose this Mercenary Crossbow Starter Build if you want ranged weapon combat with clear skill roles: Fragmentation Rounds for packs, High Velocity Rounds for rares and bosses, and Escape Shot for safety. Skip it if you want the lowest-input beginner route or dislike crossbow rhythm.`

## Section 2: Quick Answer Table

Purpose:

- Give fast scanning value for casual users from search.

Recommended fields:

| Field | Value |
| --- | --- |
| Best for | Ranged players who want crossbow weapon feel |
| Difficulty | Medium |
| Clear skill | Fragmentation Rounds |
| Boss skill | High Velocity Rounds |
| Safety skill | Escape Shot |
| Add later | Gas Grenade or Explosive Grenade |
| Safer alternative | Beginner Minion Witch or Ranger |

## Section 3: Beginner Progression

Current issue:

- The existing `Leveling plan` has useful bullets, but it does not separate beginner decisions by stage.

Recommended heading:

- `Beginner Progression`

Recommended content:

1. `Start with one clear skill`
   - Use Fragmentation Rounds first so packs do not slow down the campaign.
2. `Add one boss button`
   - Add High Velocity Rounds before rare monsters and act bosses become walls.
3. `Add safety before damage greed`
   - Keep Escape Shot ready and avoid standing still to trade hits.
4. `Upgrade crossbow damage`
   - Weak weapons make crossbow builds feel worse than they are.
5. `Add grenades only after the loop works`
   - Gas Grenade or Explosive Grenade should support the build, not replace the first two jobs.

## Section 4: Crossbow Leveling Path

Recommended heading:

- `Crossbow Leveling Path`

Purpose:

- Capture `crossbow leveling poe2` without creating a new page.
- Link naturally to `/guides/mercenary/crossbow`.

Recommended table:

| Stage | Problem | Action |
| --- | --- | --- |
| Early campaign | Packs take too long | Use Fragmentation Rounds and keep crossbow damage updated. |
| First rare enemies | Single-target feels weak | Add High Velocity Rounds. |
| First deaths | Enemies reach you too often | Use Escape Shot and stop trading hits. |
| Dense packs | Space control is missing | Add Gas Grenade or Explosive Grenade. |
| Boss friction | Damage feels inconsistent | Upgrade crossbow first, then tune support skills. |

Internal link:

- Anchor: `Crossbow Leveling Guide`
- Target: `/guides/mercenary/crossbow`

## Section 5: Skill Role Table

Current issue:

- Core skill package exists, but it does not explain the decision role of each skill.

Recommended heading:

- `Skill Roles`

Recommended rows:

| Skill | Role | Decision |
| --- | --- | --- |
| Fragmentation Rounds | Pack clear | Use first for campaign mapping and normal packs. |
| High Velocity Rounds | Rare/boss damage | Add when tough enemies start slowing progress. |
| Escape Shot | Safety | Use before adding extra damage buttons. |
| Gas Grenade | Control/damage zone | Add if enemies are closing distance too often. |
| Explosive Grenade | Area alternative | Use if you prefer delayed area damage. |
| Rapid Shot | Faster pacing | Compare if the starter rhythm feels too slow. |
| Armour Piercing Rounds | Armor/boss support | Compare if single-target still feels bad. |
| Flash Grenade | Control | Use when safety is the bigger issue than damage. |

## Section 6: Related Builds

Current issue:

- The generic template shows unrelated builds:
  - Monk Leveling
  - Huntress Spear
  - Druid Hybrid
  - Witch Corpse

This is not acceptable for the current GSC winner.

Recommended curated section:

| Related Build | URL | Why It Belongs |
| --- | --- | --- |
| POE2 Mercenary Builds | `/builds/mercenary` | Parent hub for Mercenary build choices. |
| POE2 Crossbow Leveling Guide | `/guides/mercenary/crossbow` | Leveling/workflow support page. |
| POE2 Mercenary Grenade Leveling Build | `/builds/poe2-mercenary-grenade-leveling-build` | Area-control alternative. |
| POE2 Mercenary High Velocity Boss Build | `/builds/poe2-mercenary-high-velocity-boss-build` | Single-target escalation. |
| POE2 Mercenary Rapid Shot Build | `/builds/poe2-mercenary-rapid-shot-build` | Faster crossbow pacing. |
| POE2 Beginner Builds | `/builds/beginner` | Safer first-character comparison. |

Implementation note:

- Avoid the generic related-build algorithm for this winner slug.
- Use a winner-specific override keyed by `poe2-mercenary-crossbow-starter-build`.

## Section 7: Related Skills

Current issue:

- Current related skills include `Skeletal Sniper`, which is off-topic.

Recommended curated section:

| Related Skill | URL | Why It Belongs |
| --- | --- | --- |
| Fragmentation Rounds | `/skills/fragmentation-rounds` | Main clear skill. |
| High Velocity Rounds | `/skills/high-velocity-rounds` | Single-target skill. |
| Escape Shot | `/skills/escape-shot` | Safety and spacing. |
| Gas Grenade | `/skills/gas-grenade` | Space control. |
| Explosive Grenade | `/skills/explosive-grenade` | Area damage alternative. |
| Rapid Shot | `/skills/rapid-shot` | Faster crossbow pacing. |
| Armour Piercing Rounds | `/skills/armour-piercing-rounds` | Armor/boss support. |
| Flash Grenade | `/skills/flash-grenade` | Defensive control. |

Implementation note:

- Use winner-specific `relatedSkillSlugs`.
- Do not rely on generic class/playstyle matching for this page.

## Section 8: FAQ Expansion

Current FAQ count:

- 3 questions

Recommended target:

- 8 to 10 questions

Current FAQ:

1. `Is POE2 Mercenary Crossbow Starter Build good for beginners?`
2. `What skills does POE2 Mercenary Crossbow Starter Build use first?`
3. `Who should skip POE2 Mercenary Crossbow Starter Build?`

Recommended new FAQ:

1. `What is the best mercenary crossbow build poe2?`
   - Answer should point to this page as the starter version and explain clear/boss/safety roles.
2. `Is this the best poe 2 crossbow build for beginners?`
   - Answer should be conditional: yes for ranged weapon players, no for lowest-input users.
3. `How should crossbow leveling poe2 start?`
   - Answer should explain Fragmentation Rounds -> High Velocity Rounds -> Escape Shot -> grenades.
4. `What skill should Mercenary use for pack clear?`
   - Answer: Fragmentation Rounds first.
5. `What skill should Mercenary use for boss damage?`
   - Answer: High Velocity Rounds or Armour Piercing support.
6. `When should Mercenary add grenades?`
   - Answer: after clear and single-target are stable.
7. `Is Mercenary Crossbow easier than Ranger?`
   - Answer: Ranger is simpler; Mercenary has stronger weapon identity but more rhythm.
8. `Should I choose Mercenary Crossbow or Beginner Minion Witch?`
   - Answer: Witch is safer/lower pressure; Mercenary is better for ranged weapon feel.

FAQ schema:

- Keep `FAQPage` JSON-LD generated from the same FAQ array.
- Do not duplicate FAQ text in separate schema-only objects.

## Section 9: Patch-Sensitive Note

Current page already has a generic patch-sensitive note via template.

Recommended winner-specific note:

`Use this page to choose a starter direction, not to lock exact endgame DPS. Check current in-game gem tooltips before spending heavily, but keep the early decision simple: clear, single-target, escape, then optional grenades.`

## Internal Link Targets From This Page

Required outgoing links after improvement:

- `/builds/mercenary`
- `/guides/mercenary/crossbow`
- `/builds/beginner`
- `/builds/poe2-mercenary-grenade-leveling-build`
- `/builds/poe2-mercenary-high-velocity-boss-build`
- `/builds/poe2-mercenary-rapid-shot-build`
- `/skills/fragmentation-rounds`
- `/skills/high-velocity-rounds`
- `/skills/escape-shot`
- `/skills/gas-grenade`
- `/skills/explosive-grenade`
- `/skills/rapid-shot`
- `/skills/armour-piercing-rounds`
- `/skills/flash-grenade`

## Implementation Shape

Preferred low-risk implementation:

1. Add a `focusedBuildContent` override in `app/builds/[slug]/page.tsx` for `poe2-mercenary-crossbow-starter-build`.
2. Keep generic build template behavior for all other build pages.
3. Override only:
   - FAQ
   - Related Builds
   - Related Skills
   - Extra sections
4. Do not change route structure.
5. Do not change sitemap logic.

Alternative:

- Add richer fields directly to `Build` data type.
- Higher blast radius; not recommended for this one-page winner patch.

## Acceptance Criteria

After implementation:

- Page still returns 200.
- No new URLs are generated.
- Sitemap URL count remains unchanged.
- FAQPage schema includes expanded FAQ.
- Related Builds no longer includes unrelated Monk/Huntress/Druid/Witch pages.
- Related Skills no longer includes `Skeletal Sniper`.
- Page contains:
  - `Beginner Progression`
  - `Crossbow Leveling Path`
  - `Skill Roles`
  - `mercenary crossbow build poe2`
  - `poe 2 crossbow build`
  - `crossbow leveling poe2`
- Incoming links are added according to `INTERNAL_LINK_UPGRADE_PLAN.md`.

## Do Not Do

- Do not create a new Mercenary Crossbow page.
- Do not create a new Crossbow hub page.
- Do not add a DPS calculator.
- Do not add passive tree planning.
- Do not rewrite all build pages.
- Do not change UI styling.
- Do not expand unrelated skills.
