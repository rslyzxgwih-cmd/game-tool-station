# Indexation Checklist

Project: `poe2startertools.com`

Date: 2026-06-11

Purpose: audit non-indexed URLs for sitemap presence, internal link coverage, and cluster relevance before making content changes.

Constraint: do not create new pages or clusters from indexation issues alone.

## Current Known State

Core pages are indexed and receiving traffic.

Current GSC winner:

- `/builds/poe2-mercenary-crossbow-starter-build`
- 154 impressions

Current sitemap generation:

- Static cluster routes from `app/sitemap.ts`
- Dynamic build routes from `builds`
- Dynamic skill routes from `skills`

Expected sitemap count from recent production checks:

- 171 URLs

## Priority URL Groups

Audit in this order.

### P0: Winner And Supporting Hubs

| URL | Sitemap Expected | Internal Link Expected | Current Role |
| --- | --- | --- | --- |
| `/builds/poe2-mercenary-crossbow-starter-build` | Yes | High | GSC winner page |
| `/builds/mercenary` | Yes | High | Parent hub |
| `/guides/mercenary/crossbow` | Yes | Medium | Crossbow leveling support |
| `/builds/beginner` | Yes | Medium | Beginner comparison hub |
| `/builds` | Yes | High | Build index hub |

Action if non-indexed:

1. Confirm URL is in sitemap.
2. Confirm at least 3 meaningful internal links.
3. Confirm canonical points to itself.
4. Confirm page has FAQPage schema if it is SEO-facing.
5. Do not create replacement URL.

### P1: Validated Theme Pages

Only themes already validated by GSC:

- Mercenary
- Beginner
- Warrior
- Monk

| URL | Sitemap Expected | Why It Matters |
| --- | --- | --- |
| `/builds/warrior` | Yes | Warrior query support and comparison path. |
| `/builds/monk` | Yes | Monk/Killing Palm support. |
| `/builds/easy` | Yes | Beginner/easy build intent. |
| `/builds/crossbow-monk` | Yes | Existing crossbow-related query support. |
| `/builds/poe2-mercenary-grenade-leveling-build` | Yes | Mercenary alternative route. |
| `/builds/poe2-mercenary-high-velocity-boss-build` | Yes | Mercenary boss-damage support. |
| `/builds/poe2-mercenary-rapid-shot-build` | Yes | Mercenary faster crossbow support. |
| `/builds/poe2-monk-leveling-build` | Yes | Monk validated theme support. |
| `/builds/poe2-monk-palm-leveling-build` | Yes | Killing Palm support. |
| `/builds/poe2-warrior-slam-starter-build` | Yes | Warrior validated theme support. |

Action if non-indexed:

- Strengthen internal links from the parent hub only if GSC impressions exist.
- Do not expand content unless the page is receiving impressions or supports a P0 winner.

### P2: Validated Skill Pages

| URL | Sitemap Expected | Why It Matters |
| --- | --- | --- |
| `/skills/killing-palm` | Yes | Validated skill winner. |
| `/skills/flame-wall` | Yes | Validated skill winner. |
| `/skills/time-of-need` | Yes | Validated skill signal. |
| `/skills/staggering-palm` | Yes | Related observed query. |
| `/skills/fragmentation-rounds` | Yes | Winner page core skill. |
| `/skills/high-velocity-rounds` | Yes | Winner page core skill. |
| `/skills/escape-shot` | Yes | Winner page core skill. |
| `/skills/gas-grenade` | Yes | Mercenary support skill. |
| `/skills/explosive-grenade` | Yes | Mercenary support skill. |
| `/skills/rapid-shot` | Yes | Mercenary support skill. |
| `/skills/armour-piercing-rounds` | Yes | Mercenary support skill. |
| `/skills/flash-grenade` | Yes | Mercenary support skill. |

Action if non-indexed:

- First check internal links from winner page and parent hubs.
- Do not create new skill pages.
- Do not create skill clusters unless GSC exposes skill+build intent.

## Sitemap Checklist

For every non-indexed URL:

1. Is the URL present in `/sitemap.xml`?
2. Is the URL canonical self-referencing?
3. Is the URL reachable from at least one hub?
4. Is the URL reachable within 2 clicks from `/` or `/builds`?
5. Does the URL return 200?
6. Does the URL avoid duplicate ownership with another page?
7. Is the URL in the correct cluster according to `CONTENT_ARCHITECTURE.md`?

Expected sitemap sources:

- Static routes:
  - `/builds`
  - `/builds/beginner`
  - `/builds/easy`
  - `/builds/monk`
  - `/builds/mercenary`
  - `/builds/crossbow-monk`
  - `/builds/falling-thunder`
  - `/builds/warrior`
  - `/builds/witch`
  - `/guides/mercenary`
  - `/guides/mercenary/crossbow`
  - `/skills`
  - `/class-picker`
- Build detail pages:
  - generated from `builds`
- Skill detail pages:
  - generated from `skills`

If sitemap count changes unexpectedly:

- Stop.
- Run build.
- Compare generated route list.
- Do not deploy until URL count is explained.

## Internal Link Coverage Checklist

For every non-indexed URL:

| Coverage Level | Meaning | Action |
| --- | --- | --- |
| 0 inbound links | Orphan risk | Add from parent hub if page is still strategically needed. |
| 1-2 inbound links | Weak support | Add only if GSC has impressions or page supports a winner. |
| 3-10 inbound links | Acceptable | Improve only if rankings are close to top 10. |
| 10+ inbound links | Healthy | Do not add links unless ownership is unclear. |

Current known weak spots:

- `/guides/mercenary` had low inbound link count in prior audit.
- `/skills/flame-wall/builds` had low inbound link count.
- `/skills/killing-palm/builds` had low inbound link count.

Do not fix all weak spots blindly. Fix only those connected to GSC winners.

## Non-Indexed URL Decision Tree

When GSC provides a non-indexed URL:

1. Is it in the sitemap?
   - No: check route generation.
   - Yes: continue.

2. Is it internally linked?
   - No: add one parent-hub link only if the page has strategic value.
   - Yes: continue.

3. Does it overlap a stronger owner?
   - Yes: do not strengthen. Consider linking to the stronger owner.
   - No: continue.

4. Does it support current validated themes?
   - Mercenary
   - Beginner
   - Warrior
   - Monk
   - Killing Palm
   - Flame Wall

5. If no, do nothing.

6. If yes, improve:
   - FAQ
   - Related Builds
   - Related Skills
   - Parent link
   - Exact natural anchor

## Winner-Page Specific Indexation Checks

For `/builds/poe2-mercenary-crossbow-starter-build`:

Must remain true:

- Present in sitemap.
- Self-canonical.
- Linked from `/builds`.
- Linked from `/builds/mercenary`.
- Linked from `/guides/mercenary/crossbow`.
- Linked from `/builds/beginner`.
- After upgrade, linked from:
  - `/skills`
  - `/skills/flame-wall`
  - `/skills/killing-palm`
  - `/builds/warrior`

Do not:

- Remove it from dynamic build routes.
- Move it to a new URL.
- Canonical it to `/builds/mercenary`.
- Replace it with `/builds/mercenary-crossbow`.

## GSC Data Needed

Request these exports before acting on non-indexed pages:

1. Pages report:
   - URL
   - clicks
   - impressions
   - average position
2. Indexing report:
   - Not indexed URLs
   - reason
   - last crawl date
3. Query-to-page report:
   - query
   - page
   - clicks
   - impressions
   - average position

Without this data, do not prune, merge, or create pages.

## Ready Actions After Next Export

If winner page remains top:

- Implement `WINNER_PAGE_UPGRADE_PLAN.md`.

If `/builds/mercenary` overtakes winner page:

- Keep winner page as detail support.
- Strengthen parent/detail links without creating a new URL.

If `/guides/mercenary/crossbow` wins `crossbow leveling poe2`:

- Keep guide as leveling owner.
- Link winner page to guide with `Crossbow Leveling Guide`.

If non-indexed pages are unrelated to Mercenary, Beginner, Warrior, or Monk:

- Do nothing.
