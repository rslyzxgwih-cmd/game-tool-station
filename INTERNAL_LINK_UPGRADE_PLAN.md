# Internal Link Upgrade Plan

Project: `poe2startertools.com`

Winner URL: `/builds/poe2-mercenary-crossbow-starter-build`

GSC evidence:

- 154 impressions
- 2 clicks
- Current strongest page in Pages report

Date: 2026-06-11

## Objective

Move internal authority toward the current GSC winner without creating new pages or new keyword clusters.

The target page should become the clearest destination for:

- `mercenary crossbow build poe2`
- `poe2 mercenary crossbow build`
- `poe 2 crossbow build`
- beginner Mercenary crossbow starter intent

## Link Ownership Rule

Use a parent/detail/support model:

| Role | URL | Purpose |
| --- | --- | --- |
| Detail winner | `/builds/poe2-mercenary-crossbow-starter-build` | Main GSC-winning page for Mercenary Crossbow Starter intent. |
| Parent hub | `/builds/mercenary` | Compare Mercenary crossbow/grenade/boss routes. |
| Leveling guide | `/guides/mercenary/crossbow` | Explain crossbow leveling progression and workflow. |
| Beginner comparison | `/builds/beginner` | Help players decide if Mercenary is too complex. |

Do not link every crossbow phrase to every page. The winner page should receive exact build-intent anchors; the guide should receive leveling/workflow anchors.

## Required Source Links

### 1. Flame Wall

Source URL:

- `/skills/flame-wall`

Current status:

- Links to `/skills/flame-wall/builds`
- Links to `/builds/easy`
- Links to Sorceress Spark/Fire/Flame Wall support pages
- Links to `/skills/killing-palm`
- Does not link to winner page

Why link from here:

- GSC shows Flame Wall as a validated skill winner.
- This link creates a useful cross-decision route: caster setup vs crossbow starter.
- It should be framed as a comparison, not as related skill content.

Recommended placement:

- Focused internal links block on `/skills/flame-wall`

Recommended anchor:

- `Mercenary Crossbow Starter Build`

Recommended note:

- `Compare this if you are choosing between a caster setup skill and a ranged weapon starter.`

Target:

- `/builds/poe2-mercenary-crossbow-starter-build`

Risk:

- Low. This is a comparison link, not a claim that Flame Wall belongs in the crossbow build.

### 2. Killing Palm

Source URL:

- `/skills/killing-palm`

Current status:

- Links to `/skills/killing-palm/builds`
- Links to `/builds/monk`
- Links to `/builds/falling-thunder`
- Links to `/skills/flame-wall`
- Does not link to winner page

Why link from here:

- GSC validates Killing Palm as a skill winner.
- This gives players a useful decision route: active melee finisher vs ranged crossbow starter.
- It supports the winner page without pretending the skills are mechanically related.

Recommended placement:

- Focused internal links block on `/skills/killing-palm`

Recommended anchor:

- `Mercenary Crossbow Starter Build`

Recommended note:

- `Compare this if you are deciding between active Monk melee and ranged crossbow leveling.`

Target:

- `/builds/poe2-mercenary-crossbow-starter-build`

Risk:

- Low. It is a comparison link and should be worded as a player decision alternative.

### 3. Warrior

Source URL:

- `/builds/warrior`

Current status:

- Links to `/builds/mercenary` as a ranged alternative.
- Does not directly link to winner page.

Why link from here:

- Warrior searchers are deciding durable melee vs ranged weapon gameplay.
- The winner page is the best direct comparison for players leaving Warrior because they want range.

Recommended placement:

- Compare next section or Related Builds block.

Recommended anchor:

- `Mercenary Crossbow Starter Build`

Recommended note:

- `Use this if you want a ranged weapon starter instead of durable melee.`

Target:

- `/builds/poe2-mercenary-crossbow-starter-build`

Risk:

- Low. It clarifies alternatives and supports a proven winner.

### 4. Skills Hub

Source URL:

- `/skills`

Current status:

- Skill database hub does not directly route to the winner page.

Why link from here:

- Users browsing skills may need a build-level route after selecting crossbow-related skills.
- The link should not turn the Skills hub into a build hub. It should be a small routing block tied to crossbow skills.

Recommended placement:

- Small section below the skill database intro or after the first skill grid.

Recommended heading:

- `Build routes from current skill signals`

Recommended link:

- Anchor: `Mercenary Crossbow Starter Build`
- Note: `Use this after checking Fragmentation Rounds or High Velocity Rounds.`

Target:

- `/builds/poe2-mercenary-crossbow-starter-build`

Optional companion links:

- `/skills/fragmentation-rounds`
- `/skills/high-velocity-rounds`

Risk:

- Medium. Avoid overloading `/skills` with build links. Keep this to one winner-page link.

### 5. Builds Hub

Source URL:

- `/builds`

Current status:

- Already links to winner page.
- Already links to `/builds/mercenary` and `/guides/mercenary/crossbow`.

Why upgrade:

- The winner page has 154 impressions and 2 clicks, so `/builds` should explicitly support it above generic build list noise.

Recommended placement:

- Build query clusters block.

Recommended anchor:

- `POE2 Mercenary Crossbow Starter Build`

Recommended query label:

- `mercenary crossbow build poe2`

Recommended answer:

- `Open this first if you want the crossbow starter route Google is already surfacing: clear skill, boss skill, escape, then grenades.`

Target:

- `/builds/poe2-mercenary-crossbow-starter-build`

Risk:

- Low. This is the build hub and should route directly to winning build pages.

## Secondary Supporting Links

These are not required immediately but should be considered if new GSC data confirms continued growth.

| Source URL | Anchor | Target | Condition |
| --- | --- | --- | --- |
| `/builds/mercenary` | `Mercenary Crossbow Starter Build` | winner page | Keep prominent as parent hub support. |
| `/guides/mercenary/crossbow` | `Mercenary Crossbow Starter Build` | winner page | Already appropriate; maintain. |
| `/builds/beginner` | `Mercenary Crossbow Starter Build` | winner page | Maintain as beginner comparison. |
| `/skills/fragmentation-rounds` | `Mercenary Crossbow Starter Build` | winner page | Add only if crossbow skill pages start gaining impressions. |
| `/skills/high-velocity-rounds` | `Mercenary Crossbow Starter Build` | winner page | Add only if high-velocity query grows. |

## Anchor Text Rules

Use exact-match anchors sparingly and naturally.

Allowed anchors:

- `Mercenary Crossbow Starter Build`
- `POE2 Mercenary Crossbow Starter Build`
- `mercenary crossbow build poe2`
- `POE2 crossbow build`

Use `crossbow leveling poe2` only when linking to:

- `/guides/mercenary/crossbow`

Avoid:

- Repeating the exact same anchor in every source.
- Linking `crossbow leveling poe2` to the build detail page if the page is not expanded with a strong leveling section.
- Creating new anchors that imply a page does not answer its actual decision.

## Implementation Order

When approved to implement, apply in this order:

1. `/builds`
   - Upgrade existing winner link placement/anchor.
2. `/builds/warrior`
   - Add direct ranged alternative link.
3. `/skills/flame-wall`
   - Add comparison link to winner.
4. `/skills/killing-palm`
   - Add comparison link to winner.
5. `/skills`
   - Add one restrained routing link to winner.

Reason:

- Start with high-relevance build pages.
- Then use validated skill winners as comparison routes.
- Keep Skills hub change minimal to avoid diluting the database intent.

## Validation Checklist

After implementation, verify:

- No new URLs added.
- `/sitemap.xml` URL count unchanged.
- Winner page receives links from:
  - `/skills/flame-wall`
  - `/skills/killing-palm`
  - `/builds/warrior`
  - `/skills`
  - `/builds`
- Winner page still links out to:
  - `/builds/mercenary`
  - `/guides/mercenary/crossbow`
  - `/builds/beginner`
  - core skill pages
- No source page loses its primary decision focus.

## Do Not Do

- Do not create `/builds/mercenary-crossbow`.
- Do not create `/guides/mercenary-crossbow-build`.
- Do not add sitewide footer links to the winner page.
- Do not link every skill page to the winner.
- Do not remove `/builds/mercenary`; keep it as parent hub.
