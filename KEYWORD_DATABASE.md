# GSC Keyword Database

Updated: 2026-06-06

Purpose: only act on keywords that Google Search Console has already exposed. Do not add new pages, features, UI work, animation, styling, or refactors unless the action helps an exposed keyword move toward top 10.

Daily ranking updates live in `GSC_RANKING_TRACKER.md`.

## Current Diagnosis

Google is currently testing the site as two things:

- Skill knowledge base: Killing Palm, Flame Wall, Time of Need, Spectre, Spark, Detonate Dead.
- Build decision hub: Ranger build, Warrior build, Witch builds, Mercenary crossbow, starter/easy builds.

The current problem is not site direction. The problem is turning early impressions into stable top-10 rankings.

## Keyword Database

| Priority | Query cluster | Impressions signal | Target URL | Intent | Current action |
| --- | --- | ---: | --- | --- | --- |
| P0 | `killing palm`, `poe 2 killing palm`, `killing palm 杀戮之掌`, `poe2 killing palm poe2 杀戮之掌` | Highest skill signal | `/skills/killing-palm` | Decide whether to use Killing Palm | Strengthen exact aliases, FAQ, Monk build links |
| P0 | `flame wall`, `poe 2 flame wall`, `flame wall poe2`, `火焰墙`, `火焰之墙` | Repeated skill signal | `/skills/flame-wall` | Decide whether Flame Wall belongs in a build | Strengthen Chinese variants, Sorceress/Fire build links |
| P1 | `poe2 time of need`, `poe2 迫切时刻`, `poe3 time of need` | New skill signal | `/skills/time-of-need` | Understand recovery/support skill use | Add exact Chinese alias; ignore `poe3` typo unless repeated |
| P1 | `poe 2 ranger build`, `poe 2 游侠流派` | Build cluster signal | `/builds/ranger` | Choose Ranger build direction | Strengthen Ranger cluster and links from bow builds |
| P1 | `poe 2 warrior build`, `poe 2 warrior builds`, `poe 2 战士流派` | Build cluster signal | `/builds/warrior` | Choose Warrior build direction | Strengthen Warrior cluster and links from slam builds |
| P1 | `witch builds poe 2`, `流放之路2女巫流派构建`, `best minion build poe 2`, `poe 2 最佳召唤流派` | Witch/minion signal | `/builds/witch` | Choose Witch/minion starter | Strengthen Witch cluster and minion links |
| P2 | `poe2 spectre`, `poe2 幽魂` | Skill signal | `/skills/raise-spectre` | Decide whether Raise Spectre fits minion builds | Link from Witch/minion pages |
| P2 | `poe 2 spark`, `流放之路2 电火花` | Skill signal | `/skills/spark` | Decide whether Spark is a starter spell | Link from Sorceress/Flame Wall pages |
| P2 | `poe2 detonate dead`, `流放之路2 尸爆` | Skill signal | `/skills/detonate-dead` | Decide whether corpse explosion setup is worth it | Link from Witch corpse build |
| P2 | `poe2 mercenary guide`, `poe2 雇佣兵指南` | Mercenary guide signal | `/guides/mercenary` | Decide whether Mercenary fits the player | Keep guide page; build-query variants are now handled by the 2026-06-06 addendum |
| P2 | `poe2 build starter`, `poe2 开荒流派` | General build intent | `/builds/beginner` and `/builds` | Find starter builds | Observe whether Google prefers the exact support page or the build hub |
| P3 | `poe2 德鲁伊开荒流派` | Low build signal | `/builds/poe2-druid-hybrid-starter-build` | Choose Druid starter | Observe only unless impressions repeat |

## 2026-06-06 Build Query Addendum

This section supersedes any older row that said general build queries should stay only on `/builds`.
Google has now exposed enough build-query variants to justify exact support pages while keeping `/builds`
as the parent hub.

| Priority | Query cluster | Target URL | Intent | Current action |
| --- | --- | --- | --- | --- |
| P1 | `mercenary crossbow build poe2`, `poe 2 mercenary crossbow build` | `/builds/mercenary` and `/builds/poe2-mercenary-crossbow-starter-build` | Choose Mercenary crossbow starter route | Build-focused parent page is live; monitor ranking split with `/guides/mercenary/crossbow` |
| P1 | `poe2 beginner builds`, `poe2 beginner build` | `/builds/beginner` | Choose safest first build | Exact-match support page is live; linked from `/builds` and homepage |
| P1 | `poe2 easy builds`, `poe2 easy build` | `/builds/easy` | Find lowest-friction starter builds | Exact-match support page is live; monitor whether it outranks `/builds` |
| P1 | `poe2 monk builds`, `poe2 monk build` | `/builds/monk` | Choose Monk build direction | Parent Monk build page is live and links to Falling Thunder and Crossbow Monk support pages |
| P1 | `poe2 crossbow monk` | `/builds/crossbow-monk` | Decide whether Crossbow Monk is worth trying | Exact-match decision page is live; answer should steer to Mercenary or Monk alternatives when appropriate |
| P1 | `poe2 falling thunder`, `poe2 falling thunder build` | `/builds/falling-thunder` and `/skills/falling-thunder` | Decide whether Falling Thunder anchors a Monk build | Build page is live and linked from the skill page |
| P1 | `poe 2 ranger build`, `poe2 ranger builds` | `/builds/ranger` | Choose Ranger build direction | Existing Ranger page was strengthened with FAQ schema, Related Builds, and Related Skills |

## Topic Clusters

### Skill Cluster

Primary ranking targets:

- `/skills/killing-palm`
- `/skills/flame-wall`
- `/skills/time-of-need`

Support pages:

- `/skills/raise-spectre`
- `/skills/spark`
- `/skills/detonate-dead`
- `/skills/staggering-palm`

Rule: do not create new skill pages unless the keyword has no matching page.

### Build Cluster

Primary ranking targets:

- `/builds/beginner`
- `/builds/easy`
- `/builds/monk`
- `/builds/mercenary`
- `/builds/crossbow-monk`
- `/builds/falling-thunder`
- `/builds/ranger`
- `/builds/warrior`
- `/builds/witch`
- `/guides/mercenary`
- `/builds`

Support pages:

- Ranger bow builds
- Warrior slam builds
- Witch minion and corpse builds
- Mercenary crossbow and grenade builds

Rule: do not create new class cluster pages unless GSC exposes that class.

## Internal Link Engine Rules

Use these rules before adding content:

1. P0 skill pages should receive links from every build that uses the skill.
2. P1 class cluster pages should link to their strongest build pages and strongest skill pages.
3. General build queries should stay on `/builds` until a specific class or skill dominates.
4. Mixed Chinese-English queries should be handled with aliases and `alternateName`, not duplicate pages.
5. Typo queries like `poe3` should be ignored unless repeated across multiple days.

## Next Action Queue

1. Add exact alias variants for:
   - Flame Wall: `火焰之墙`, `poe 2 火焰之墙`
   - Time of Need: `迫切时刻`, `poe2 迫切时刻`
   - Warrior Builds: `战士流派`
   - Witch Builds: `女巫流派构建`, `最佳召唤流派`
   - Mercenary Crossbow: `雇佣兵弩箭流派`, `雇佣兵指南`
2. Strengthen internal links:
   - Monk builds -> Killing Palm
   - Sorceress fire/lightning builds -> Flame Wall and Spark
   - Witch minion builds -> Raise Spectre
   - Witch corpse builds -> Detonate Dead
   - Ranger builds -> Ranger cluster
   - Warrior slam builds -> Warrior cluster
3. Do not start Ascendancy, Boss, UI, media, or new tools until GSC shows a new exposed keyword requiring it.
