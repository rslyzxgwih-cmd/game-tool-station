# Next 7 Day Execution Plan

Project: `poe2startertools.com`

Date: 2026-06-11

Primary evidence:

- Winner page: `/builds/poe2-mercenary-crossbow-starter-build`
- GSC Pages report: 154 impressions
- Core pages are indexed and receiving traffic

Strategic constraint:

- Do not create large new skill clusters.
- Do not create new build pages.
- Expand only themes already validated by GSC:
  - Mercenary
  - Beginner
  - Warrior
  - Monk

## 7-Day Goal

Increase authority and clarity around the current GSC winner while preserving keyword ownership.

Success metric:

- Winner page impressions continue rising.
- Winner page clicks continue or increase.
- No cannibalization caused by new URLs.
- Sitemap URL count stays stable.
- GSC keeps assigning Mercenary Crossbow intent to the winner page or its parent/support pages.

## Day 1: Winner Page Upgrade

Primary task:

- Implement `WINNER_PAGE_UPGRADE_PLAN.md`.

Work:

1. Add winner-specific content override for `/builds/poe2-mercenary-crossbow-starter-build`.
2. Add:
   - Quick Answer block
   - Beginner Progression
   - Crossbow Leveling Path
   - Skill Roles
3. Expand FAQ from 3 questions to 8-10 questions.
4. Curate Related Builds.
5. Curate Related Skills.

Validation:

- `npm run build`
- Confirm static page count unchanged.
- Confirm sitemap URL count unchanged.
- Confirm FAQPage schema includes expanded FAQ.
- Confirm no new URL exists.

Stop condition:

- If the implementation requires changing all build pages, stop and choose a smaller override.

## Day 2: Internal Link Upgrade

Primary task:

- Implement `INTERNAL_LINK_UPGRADE_PLAN.md`.

Required source links:

1. `/builds`
   - Anchor: `POE2 Mercenary Crossbow Starter Build`
2. `/skills`
   - Anchor: `Mercenary Crossbow Starter Build`
3. `/skills/flame-wall`
   - Anchor: `Mercenary Crossbow Starter Build`
4. `/skills/killing-palm`
   - Anchor: `Mercenary Crossbow Starter Build`
5. `/builds/warrior`
   - Anchor: `Mercenary Crossbow Starter Build`

Rules:

- Make links natural.
- Use comparison framing from skill pages.
- Do not imply Flame Wall or Killing Palm are used in the Mercenary Crossbow build.
- Do not add sitewide footer links.

Validation:

- Check winner page receives links from all five sources.
- Check source pages still answer their own decisions.

## Day 3: Indexation Audit

Primary task:

- Use `INDEXATION_CHECKLIST.md`.

Work:

1. Request latest GSC export if not available.
2. Check winner page:
   - sitemap presence
   - self-canonical
   - 200 status
   - internal links in
   - internal links out
3. Check P0 support URLs:
   - `/builds/mercenary`
   - `/guides/mercenary/crossbow`
   - `/builds/beginner`
   - `/builds`
4. Check non-indexed URLs only if GSC provides a list.

Do not:

- Change non-indexed pages without query evidence.
- Create replacement pages.
- Remove indexed pages.

## Day 4: GSC Ownership Review

Primary task:

- Confirm query-to-page mapping.

Queries to inspect:

- `mercenary crossbow build poe2`
- `poe2 mercenary crossbow build`
- `poe 2 crossbow build`
- `crossbow leveling poe2`
- `poe2 beginner builds`
- `poe2 warrior build`
- `poe2 monk build`
- `killing palm`
- `flame wall`

Decision rules:

| Result | Action |
| --- | --- |
| Winner page keeps impressions | Do nothing except monitor. |
| Winner page gains clicks | Maintain current structure. |
| `/builds/mercenary` starts winning broad crossbow query | Keep it as parent; do not fight Google unless clicks drop. |
| `/guides/mercenary/crossbow` wins leveling query | Good. Keep guide as leveling owner. |
| `/builds/beginner` wins beginner query | Good. Keep winner page as Mercenary-specific. |
| Two URLs split one exact query | Add clarifying internal links, do not create a new URL. |

## Day 5: Beginner / Warrior / Monk Support Pass

Primary task:

- Strengthen only supporting themes if GSC confirms impressions.

Allowed support work:

- Beginner:
  - make sure `/builds/beginner` links clearly to winner page as one candidate.
- Warrior:
  - make sure `/builds/warrior` links to winner page as ranged alternative.
- Monk:
  - make sure Monk pages keep Killing Palm ownership clear and only compare to winner page when useful.

Do not:

- Add new Warrior build pages.
- Add new Monk build pages.
- Add new skill clusters.

## Day 6: Quality And Cannibalization Check

Primary task:

- Audit whether the winner page upgrade caused overlap.

Check:

1. Does `/builds/poe2-mercenary-crossbow-starter-build` clearly own exact starter intent?
2. Does `/builds/mercenary` still act as parent hub?
3. Does `/guides/mercenary/crossbow` still own leveling/workflow?
4. Does `/builds/beginner` still own beginner builds?
5. Are Flame Wall and Killing Palm still skill owners?

If unclear:

- Adjust headings and links.
- Do not create or delete pages.

## Day 7: Decision Review

Primary task:

- Decide whether to keep observing or make the next small patch.

Use these thresholds:

| Signal | Action |
| --- | --- |
| Winner impressions up, clicks steady/up | Keep observing; no new pages. |
| Winner impressions up, clicks zero | Improve title/meta/FAQ snippet quality on winner page. |
| Winner clicks up | Do not disturb page structure. |
| Crossbow leveling grows on guide page | Strengthen guide-to-winner and winner-to-guide links. |
| Beginner grows on `/builds/beginner` | Strengthen beginner comparison, not winner page. |
| Warrior or Monk query grows | Improve existing class hub only. |
| New unrelated skill queries appear | Log them; do not create clusters unless repeated. |

## Work Not Allowed This Week

- New skill clusters
- New build pages
- Ascendancy pages
- Boss pages
- DPS calculator
- Passive tree planner
- Trade system
- UI redesign
- Animation work
- Account/login/comment features

## Documentation Updates

After each action, update:

- `GSC_RANKING_TRACKER.md`
- `PROJECT_STATE.md`
- `NEXT_ACTIONS.md`

Only update `CONTENT_ARCHITECTURE.md` if ownership rules change.

## Deployment Rule

Deploy only after:

1. `npm run build` passes.
2. Static page count stays unchanged.
3. Sitemap count stays unchanged.
4. Production verification confirms:
   - winner page 200
   - FAQPage schema
   - required internal links
   - no new URLs

## Final Recommendation

The next implementation should be a narrow winner-page upgrade, not a site expansion.

Priority order:

1. Winner page content depth.
2. Winner page related builds/skills cleanup.
3. Internal links from selected hubs/pages.
4. Indexation audit.
5. GSC ownership review.
