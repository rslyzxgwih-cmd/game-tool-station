# POE2 Winner Analysis

Date: 2026-06-24

Scope: documentation only. No code changes. No deployment.

Goal: analyze available Google Search Console query evidence and decide which single cluster should receive focus for the next 30 days.

## Data Basis

This report uses the GSC evidence already recorded in project notes and thread screenshots:

- `GSC_RANKING_TRACKER.md`
- `KEYWORD_DATABASE.md`
- `WINNER_PATTERN_ANALYSIS.md`
- `WINNER_PATTERN_ANALYSIS_V2.md`
- `BEGINNER_THEME_ANALYSIS.md`
- `VALIDATED_THEME_EXPANSION_PLAN.md`
- `BUILDS_HUB_OPTIMIZATION_PLAN.md`
- User-provided GSC screenshots and notes from June 3-11
- Later page-level evidence:
  - `/builds/poe2-mercenary-crossbow-starter-build`: 154 impressions, 2 clicks
  - `/builds`: 76 impressions

Important limitation:

The available data is not a complete GSC export. Some screenshots contain impressions and clicks but not every row has average position or page URL. Therefore:

- CTR is only directional unless clicks and impressions are both known.
- Growth is judged by repeated daily appearance, increasing impressions, and page-level GSC evidence.
- Recommendations should be treated as strategic SEO prioritization, not a statistical final answer.

## Query Grouping

## 1. Skills Cluster

### Queries Observed

Primary skill queries:

- `killing palm`
- `poe 2 killing palm`
- `poe2 killing palm`
- `killing palm 杀戮之掌`
- `poe2 killing palm poe2 杀戮之掌`
- `flame wall`
- `poe 2 flame wall`
- `poe2 flame wall`
- `flame wall poe2`
- `poe 2 火焰之墙`
- `火焰墙 poe2`
- `time of need`
- `poe2 time of need`
- `poe2 迫切需要`
- `poe2 spectre`
- `poe2 幽魂`
- `poe 2 spark`
- `poe2 detonate dead`
- `poe2 falling thunder`
- `staggering palm`
- `tempest bell`

### Main URLs

| Query family | Primary URL |
|---|---|
| Killing Palm | `/skills/killing-palm` |
| Flame Wall | `/skills/flame-wall` |
| Time of Need | `/skills/time-of-need` |
| Falling Thunder | `/skills/falling-thunder` and `/builds/falling-thunder` |
| Tempest Bell | `/skills/tempest-bell` |
| Spectre | `/skills/raise-spectre` |
| Spark | `/skills/spark` |
| Detonate Dead | `/skills/detonate-dead` |

### Evidence

Early tracker data:

| Query | Impressions | Avg Position | Notes |
|---|---:|---:|---|
| `killing palm` | 6 | 3 | Strong early skill signal |
| `flame wall` | 3 | 6 | Strong early skill signal |
| `time of need` | 1 | 5 | Good early position, low data |
| `poe2 spectre` | 1 | TBD | Low signal |
| `poe 2 spark` | 1 | TBD | Low signal |
| `poe2 detonate dead` | 1 | TBD | Low signal |

Later screenshot trend:

- Killing Palm repeatedly appeared across multiple days.
- Flame Wall repeatedly appeared across multiple days and in several spelling/localized variants.
- Time of Need appeared with good early average position but lower impression volume.
- Falling Thunder and Tempest Bell started appearing as Monk-related support signals.

### CTR Assessment

Directional CTR: **Low to unknown**

Reason:

- Skills generated many impressions but few confirmed clicks.
- `killing palm` and `flame wall` had strong average positions early, but the screenshots mostly showed 0 clicks for these rows.
- This means Google understands the pages, but click-through is not yet proven as strongly as the build cluster.

### Growth Assessment

Growth speed: **Medium**

Killing Palm and Flame Wall had the clearest repeated skill impressions. However, the growth appears distributed across individual skill entities instead of concentrating around one large cluster.

### Expansion Opportunity

Opportunity: **Medium-High**

Skills are excellent for topical authority because they can support build pages through internal links. But skill pages should not be the next 30-day primary focus because they are fragmented:

- Killing Palm belongs to Monk.
- Flame Wall belongs to caster/Witch/Sorceress-style intent.
- Falling Thunder and Tempest Bell belong to Monk.
- Spectre/Detonate Dead belong to Witch.

Best use:

- Use skill pages as support pages for the winning build and class clusters.
- Do not expand all skills equally.

## 2. Builds Cluster

### Queries Observed

Primary build queries:

- `mercenary crossbow build poe2`
- `poe 2 mercenary crossbow build`
- `poe2 mercenary crossbow build`
- `poe 2 crossbow build`
- `crossbow leveling poe2`
- `poe2 beginner crossbow build`
- `poe2 crossbow monk`
- `poe2 crossbow monk build`
- `poe2 monk builds`
- `poe2 monk build`
- `poe2 falling thunder build`
- `poe2 ranger build`
- `poe 2 ranger build`
- `poe 2 warrior build`
- `poe 2 warrior builds`
- `witch builds poe 2`
- `best minion build poe 2`

### Main URLs

| Query family | Primary URL |
|---|---|
| Mercenary Crossbow Starter | `/builds/poe2-mercenary-crossbow-starter-build` |
| Crossbow leveling | `/guides/mercenary/crossbow` plus winner support |
| Crossbow Monk | `/builds/crossbow-monk` |
| Monk Builds | `/builds/monk` |
| Falling Thunder Build | `/builds/falling-thunder` |
| Ranger Builds | `/builds/ranger` |
| Warrior Builds | `/builds/warrior` |
| Witch Builds | `/builds/witch` |
| General Builds Hub | `/builds` |

### Evidence

Known page-level evidence:

| Page | Impressions | Clicks | Directional CTR |
|---|---:|---:|---:|
| `/builds/poe2-mercenary-crossbow-starter-build` | 154 | 2 | 1.3% |
| `/builds` | 76 | Unknown | Unknown |

Known query-level evidence:

- `mercenary crossbow build poe2` became the clear strongest exact winner.
- `poe 2 crossbow build` generated impressions and at least one recorded click in the screenshots.
- `crossbow leveling poe2` appeared as a related validated query.
- `poe2 crossbow monk` appeared as a second strong candidate.
- `poe2 monk builds`, `poe2 falling thunder`, and `poe2 falling thunder build` appeared as support signals.
- `poe 2 warrior build` and `witch builds poe 2` appeared as secondary class/build signals.

### CTR Assessment

Directional CTR: **Highest among known clusters**

Reason:

- The only clearly documented page-level CTR is the Mercenary Crossbow winner: 154 impressions and 2 clicks.
- Some screenshot rows show click activity around crossbow/build queries.
- Compared with skill queries, build queries are more action-oriented. Users searching build phrases are closer to choosing a page.

### Growth Assessment

Growth speed: **Highest**

Reason:

- Mercenary Crossbow moved from small query-level impressions to a page-level 154-impression winner.
- `/builds` reached 76 impressions as a hub.
- Crossbow Monk, Monk, Falling Thunder, and Beginner/Easy all appeared as adjacent build-intent signals.
- The build cluster is not one isolated URL. It is a connected graph:

```text
/builds
  -> /builds/beginner
  -> /builds/easy
  -> /builds/mercenary
  -> /guides/mercenary/crossbow
  -> /builds/poe2-mercenary-crossbow-starter-build
  -> /builds/crossbow-monk
  -> /builds/monk
  -> /builds/falling-thunder
```

### Expansion Opportunity

Opportunity: **Highest**

The build cluster has the strongest 30-day opportunity because it combines:

- proven impressions;
- proven clicks;
- build decision intent;
- beginner/leveling intent;
- internal link depth;
- multiple supporting existing URLs;
- affiliate monetization compatibility through performance/lag pages.

Best expansion angle:

Do not create broad new build families. Focus on reinforcing existing winners:

- Mercenary Crossbow Starter
- Crossbow Monk
- Monk Builds
- Beginner/Easy Builds
- Falling Thunder
- `/builds` hub

## 3. Beginner Cluster

### Queries Observed

Primary beginner queries:

- `poe2 beginner builds`
- `poe2 beginner build`
- `poe2 beginner build poe2`
- `poe2 easy builds`
- `poe2 easy build`
- `poe2 starter builds`
- `poe2 build starter`
- `poe2 beginner crossbow build`
- `beginner mercenary build`
- `best poe2 starter build`

### Main URLs

| Query family | Primary URL |
|---|---|
| Beginner Builds | `/builds/beginner` |
| Easy Builds | `/builds/easy` |
| Broad Build Discovery | `/builds` |
| Exact starter execution | `/builds/poe2-mercenary-crossbow-starter-build` |
| Class choice | `/class-picker` |

### Evidence

From existing analysis:

- Google actively crawled Beginner/Easy pages.
- Beginner/Easy queries repeatedly appeared alongside Mercenary Crossbow.
- `/builds` received 76 impressions.
- The Beginner/Easy cluster supports the Mercenary winner rather than replacing it.

### CTR Assessment

Directional CTR: **Unknown to medium**

Reason:

- Beginner queries are broad and high-funnel.
- They can drive impressions, but users may click more when a page offers an exact route.
- The currently documented exact winner is not `/builds/beginner`; it is the Mercenary Crossbow starter page.

### Growth Assessment

Growth speed: **Medium-High**

Reason:

- Beginner/Easy queries appeared repeatedly.
- `/builds` as the broad hub reached 76 impressions.
- The cluster is growing because it connects to exact build routes.

### Expansion Opportunity

Opportunity: **High as support, not as primary focus**

Beginner is valuable because it feeds build decisions. But it should not become the single focus because it is too broad. The best beginner work is to support the current build winner:

- Beginner Builds should route users toward Mercenary Crossbow when they want ranged starter safety.
- Easy Builds should compare friction and route users toward the right build.
- Class Picker should support the path to validated build owners.

## 4. Classes Cluster

### Queries Observed

Primary class queries:

- `poe 2 warrior build`
- `poe 2 warrior builds`
- `poe 2 ranger build`
- `poe 2 ranger builds`
- `witch builds poe 2`
- `poe2 monk builds`
- `poe2 monk build`
- `poe2 mercenary guide`
- `poe2 mercenary builds`

### Main URLs

| Query family | Primary URL |
|---|---|
| Warrior Builds | `/builds/warrior` |
| Ranger Builds | `/builds/ranger` |
| Witch Builds | `/builds/witch` |
| Monk Builds | `/builds/monk` |
| Mercenary Builds | `/builds/mercenary` |
| Mercenary Guide | `/guides/mercenary` |

### Evidence

Class-level signals are real but scattered:

- Warrior appeared early and repeatedly.
- Witch/minion appeared early.
- Ranger appeared early.
- Monk appeared later through Crossbow Monk, Falling Thunder, Tempest Bell, and Monk Builds.
- Mercenary has the strongest class-linked child winner through Crossbow Starter.

### CTR Assessment

Directional CTR: **Unknown**

Reason:

- Class queries are visible, but click data is not strongly documented per class.
- Class hubs are broader pages, so CTR may be lower than exact build pages.

### Growth Assessment

Growth speed: **Medium**

Reason:

- Class terms appear across several classes, but no non-Mercenary class has proven the same page-level strength as Mercenary Crossbow.
- Monk is the most promising non-Mercenary class because it connects to Crossbow Monk, Tempest Bell, Falling Thunder, and Killing Palm.

### Expansion Opportunity

Opportunity: **Medium-High**

The class cluster is useful, but the next 30 days should not be spread across every class. The only class-level focus that currently deserves reinforcement is the class/build relationship already validated by GSC:

- Mercenary -> Crossbow Starter
- Monk -> Crossbow Monk / Falling Thunder / Tempest Bell

Warrior and Witch should remain secondary until stronger child-page evidence appears.

## Cluster Comparison

| Cluster | Known CTR Strength | Impression Growth | Expansion Opportunity | Risk | Strategic Role |
|---|---|---|---|---|---|
| Skills | Low/unknown | Medium | Medium-High | Fragmentation across many skills | Support build authority |
| Builds | Highest known | Highest | Highest | Cannibalization if too many nearby pages | Primary 30-day focus |
| Beginner | Unknown/medium | Medium-high | High as support | Too broad if treated as owner for exact builds | Funnel into winners |
| Classes | Unknown | Medium | Medium-high | Spreading effort across too many classes | Parent hubs only |

## 1. Which Cluster Has Highest CTR?

Answer: **Builds**

Reason:

- The clearest page-level click evidence belongs to `/builds/poe2-mercenary-crossbow-starter-build`.
- 154 impressions and 2 clicks gives roughly 1.3% CTR.
- Skill pages show good average positions but mostly lack documented clicks.
- Beginner and class queries appear broader and less clearly tied to clicks.

Important nuance:

Within Builds, the winner is not the generic `/builds` hub. It is the exact starter build page:

`/builds/poe2-mercenary-crossbow-starter-build`

## 2. Which Cluster Has Fastest Impression Growth?

Answer: **Builds**

Reason:

- Mercenary Crossbow grew from early query-level appearance to 154 page impressions.
- `/builds` reached 76 impressions.
- Crossbow Monk, Monk, Beginner/Easy, Falling Thunder, and Warrior appeared as related build-intent signals.
- The growth is not isolated; Google is testing a connected build graph.

Skills also grew, especially Killing Palm and Flame Wall, but their growth is distributed by individual skill entities and does not yet show the same page-level winner strength.

## 3. Which Cluster Has Best Expansion Opportunity?

Answer: **Builds**, with a specific focus on **Mercenary Crossbow + Monk/Crossbow support**

Reason:

- Builds have the strongest decision intent.
- Builds connect naturally to beginner, class, and skill clusters.
- Builds can absorb skill signals through related skills.
- Builds can absorb beginner signals through `/builds/beginner` and `/builds/easy`.
- Builds can support affiliate monetization because users are actively trying to improve gameplay outcomes.

Do not interpret this as permission to create many build pages.

The opportunity is to deepen and connect existing validated build owners, not to expand page count.

## Recommended Single Cluster For Next 30 Days

Focus cluster:

**Builds: Mercenary Crossbow / Crossbow Monk / Beginner Build Funnel**

Primary owner:

- `/builds/poe2-mercenary-crossbow-starter-build`

Support owners:

- `/builds`
- `/builds/beginner`
- `/builds/easy`
- `/builds/mercenary`
- `/guides/mercenary/crossbow`
- `/builds/crossbow-monk`
- `/builds/monk`
- `/builds/falling-thunder`
- `/skills/tempest-bell`
- `/skills/falling-thunder`
- `/skills/killing-palm`

## Why This Cluster Should Win The Next 30 Days

This cluster has the best combined score across:

- CTR evidence;
- impression growth;
- exact query ownership;
- beginner intent;
- class intent;
- skill support;
- internal link architecture;
- monetization fit.

It also matches the site mission:

> Help POE2 players make decisions.

The user decision is clear:

```text
I need a starter build
  -> should I play Mercenary Crossbow?
  -> should I choose a safer beginner build?
  -> should I try Crossbow Monk instead?
  -> which skills make this route work?
```

That is a stronger business and SEO target than trying to become a full skill wiki or broad class directory.

## 30-Day Focus Plan

## Week 1: Ownership Cleanup

Goal: make Google understand the exact page hierarchy.

Actions:

- Keep `/builds/poe2-mercenary-crossbow-starter-build` as the exact owner for Mercenary Crossbow.
- Keep `/builds` as broad build hub only.
- Keep `/builds/beginner` as beginner safety owner.
- Keep `/builds/easy` as low-friction owner.
- Keep `/guides/mercenary/crossbow` as crossbow leveling workflow support.
- Do not create a new Mercenary Crossbow URL.

## Week 2: Internal Link Reinforcement

Goal: increase authority to the winner without stuffing links.

Actions:

- Reinforce links from `/builds`, `/builds/beginner`, `/builds/easy`, `/builds/mercenary`, and `/guides/mercenary/crossbow`.
- Keep Crossbow Monk as the bridge page between Monk and Mercenary.
- Route relevant Monk and crossbow skill pages to the correct build owner.

## Week 3: Query-Matched FAQ and Progression

Goal: capture long-tail exact queries already seen in GSC.

Prioritize FAQ and section language around:

- `mercenary crossbow build poe2`
- `poe 2 crossbow build`
- `crossbow leveling poe2`
- `poe2 beginner crossbow build`
- `beginner mercenary build`
- `poe2 crossbow monk`
- `poe2 monk builds`
- `poe2 falling thunder build`

No new pages required.

## Week 4: Measurement and Decision

Goal: decide whether to keep focusing or shift.

Track:

- impressions for the winner page;
- clicks for the winner page;
- average position for `mercenary crossbow build poe2`;
- whether `/builds` grows from 76 impressions;
- whether Crossbow Monk becomes a second page-level winner;
- whether Monk/Falling Thunder/Tempest Bell queries grow enough to justify their own 30-day sprint.

## What Not To Focus On Next

Do not focus on all Skills.

Reason:

- Skills are important support pages, but the signals are fragmented.
- Killing Palm and Flame Wall should be maintained, not made the main 30-day business focus.

Do not focus on all Classes.

Reason:

- Warrior, Witch, Ranger, and Monk signals exist, but spreading effort across classes will dilute the winner.
- Only Mercenary and Monk have enough relationship to the strongest current build cluster.

Do not focus on generic Beginner pages alone.

Reason:

- Beginner intent is valuable but broad.
- Beginner pages should feed exact starter build pages, not replace them.

Do not create Druid, Huntress, boss, ascendancy, or large new skill clusters.

Reason:

- Current GSC evidence does not justify them as the next 30-day focus.

## Final Recommendation

For the next 30 days, focus on:

**Builds cluster, specifically Mercenary Crossbow as the main winner, supported by Beginner/Easy, Crossbow Monk, Monk, Falling Thunder, Tempest Bell, and Killing Palm.**

Single operational rule:

> Every SEO improvement should either strengthen the Mercenary Crossbow winner page or clarify the decision path that leads to it.

Do not expand broadly.
Do not chase every skill query.
Do not build new tools from this data.
Do not create new pages unless a future GSC export proves a repeated query has no existing owner.
