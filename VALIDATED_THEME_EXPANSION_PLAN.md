# Validated Theme Expansion Plan

Project: `poe2startertools.com`

Date: 2026-06-11

Status: planning only.

Constraints:

- Do not create pages.
- Do not deploy.
- Do not redesign.
- Do not create new clusters.
- Preserve current keyword ownership.
- Focus only on Mercenary, Beginner, Warrior, and Monk.

Current GSC winner:

- `/builds/poe2-mercenary-crossbow-starter-build`
- 154 impressions
- 2 clicks

## Strategic Goal

Strengthen topical authority around already validated themes by improving existing page relationships, not by increasing page count.

The next work should make the current content graph easier for Google and players to understand:

- Mercenary owns the crossbow starter decision.
- Beginner pages compare safety and friction.
- Warrior pages provide durable melee comparison.
- Monk pages provide active melee comparison.

## Current Keyword Ownership

| Intent | Primary owner | Support pages |
| --- | --- | --- |
| `mercenary crossbow build poe2` | `/builds/poe2-mercenary-crossbow-starter-build` | `/builds/mercenary`, `/guides/mercenary/crossbow` |
| `poe2 mercenary builds` | `/builds/mercenary` | Mercenary build detail pages |
| `crossbow leveling poe2` | `/guides/mercenary/crossbow` | Winner page, `/builds/mercenary` |
| `poe2 beginner builds` | `/builds/beginner` | `/builds/easy`, winner page |
| `poe2 easy builds` | `/builds/easy` | `/builds/beginner`, winner page |
| `poe2 warrior builds` | `/builds/warrior` | `/builds/warrior/leveling`, Warrior detail pages |
| `poe2 monk builds` | `/builds/monk` | Monk detail pages, `/builds/crossbow-monk` |
| `killing palm poe2` | `/skills/killing-palm` | `/skills/killing-palm/builds`, Monk pages |

## Theme Audit: Mercenary

### Existing URLs

| URL | Keyword target | Inbound links | Winner relationship |
| --- | --- | ---: | --- |
| `/builds/poe2-mercenary-crossbow-starter-build` | `mercenary crossbow build poe2` | 76 | Winner page |
| `/builds/mercenary` | `poe2 mercenary builds`, `poe2 mercenary build` | 170 | Links directly to winner |
| `/guides/mercenary` | `poe2 mercenary guide` | 3 | Links directly to winner |
| `/guides/mercenary/crossbow` | `crossbow leveling poe2`, `poe 2 crossbow build` | 14 | Links directly to winner |
| `/builds/poe2-mercenary-grenade-leveling-build` | `poe2 mercenary grenade build` | 9 | Links to winner |
| `/builds/poe2-mercenary-lightning-crossbow-build` | `poe2 mercenary lightning build` | 17 | Links to winner |
| `/builds/poe2-mercenary-cold-crossbow-build` | `poe2 mercenary cold build` | 13 | Links to winner |
| `/builds/poe2-mercenary-high-velocity-boss-build` | `poe2 mercenary boss build` | 13 | Links to winner |
| `/builds/poe2-mercenary-rapid-shot-build` | `poe2 rapid shot mercenary build` | 10 | Links to winner |

### Supporting Skill URLs

| URL | Keyword target | Inbound links | Winner relationship |
| --- | --- | ---: | --- |
| `/skills/fragmentation-rounds` | `poe2 fragmentation rounds` | 30 | Links to winner |
| `/skills/high-velocity-rounds` | `poe2 high velocity rounds` | 24 | Links to winner |
| `/skills/escape-shot` | `poe2 escape shot` | 18 | Links to winner |
| `/skills/gas-grenade` | `poe2 gas grenade` | 11 | Links to winner |
| `/skills/explosive-grenade` | `poe2 explosive grenade` | 12 | Links to winner |
| `/skills/rapid-shot` | `poe2 rapid shot` | 19 | Links to winner |
| `/skills/armour-piercing-rounds` | `poe2 armour piercing rounds` | 14 | Links to winner |
| `/skills/flash-grenade` | `poe2 flash grenade` | 6 | Links to winner |

### Findings

- Mercenary is the strongest existing content graph.
- Winner page has strong inbound coverage from hubs, support guides, skill pages, and comparison pages.
- `/builds/mercenary` is correctly acting as parent hub.
- `/guides/mercenary/crossbow` should remain the owner for `crossbow leveling poe2`.
- `/guides/mercenary` is the weakest Mercenary URL by inbound links, but it is a class guide, not the winner page.

### Missing Relationships To Winner

- No critical missing relationship.
- Do not add more generic winner links from every Mercenary child page unless new GSC data shows those pages receiving crossbow starter impressions.
- `CONTENT_ARCHITECTURE.md` still contains an older ownership example assigning `mercenary crossbow build poe2` to `/builds/mercenary`; this should be updated later to reflect the current winner page ownership.

### Actionable Opportunities

1. Update keyword ownership documentation so `mercenary crossbow build poe2` maps to the winner page, not `/builds/mercenary`.
2. Keep `/builds/mercenary` as parent hub and route exact crossbow starter intent to the winner page.
3. Do not create a new `/builds/mercenary-crossbow` URL.
4. Watch whether `/guides/mercenary/crossbow` starts winning `crossbow leveling poe2`; if yes, strengthen guide-to-winner and winner-to-guide links, not new pages.

## Theme Audit: Beginner

### Existing URLs

| URL | Keyword target | Inbound links | Winner relationship |
| --- | --- | ---: | --- |
| `/builds/beginner` | `poe2 beginner builds` | 12 | Links to winner |
| `/builds/easy` | `poe2 easy builds` | 4 | Links to winner |
| `/class-picker` | `poe2 best starter class`, `poe2 class picker` | 170 | No direct winner link |
| `/builds/poe2-beginner-minion-witch-build` | `poe2 beginner build` | 30 | No direct winner link |
| `/builds/poe2-beginner-ranged-starter-build` | `poe2 beginner ranged build` | 5 | No direct winner link |
| `/builds/poe2-beginner-melee-starter-build` | `poe2 beginner melee build` | 4 | No direct winner link |

### Findings

- `/builds/beginner` and `/builds/easy` already support the winner page naturally.
- The three beginner detail pages have mixed roles:
  - Minion Witch is a safety comparison.
  - Beginner Ranged is the most natural comparison to Mercenary Crossbow.
  - Beginner Melee is a Warrior comparison.
- `/class-picker` is heavily linked but currently routes users by class rather than by exact winner page.

### Missing Relationships To Winner

- `/class-picker` has no direct winner link.
- `/builds/poe2-beginner-ranged-starter-build` has no direct winner link.
- `/builds/poe2-beginner-minion-witch-build` and `/builds/poe2-beginner-melee-starter-build` do not need direct winner links unless comparison intent appears in GSC.

### Actionable Opportunities

1. If GSC continues showing beginner + crossbow queries, add a restrained comparison link from `/builds/poe2-beginner-ranged-starter-build` to the winner page.
2. If users enter `Ranged` or `Mercenary` in Class Picker, route the recommendation toward `/builds/mercenary` or the winner page without changing the tool model.
3. Do not add winner links to every beginner detail page. Keep Minion Witch and Melee pages focused on low-pressure alternatives.
4. Strengthen `/builds/easy` only if it receives impressions for `poe2 easy builds` or `poe 2 crossbow build`.

## Theme Audit: Warrior

### Existing URLs

| URL | Keyword target | Inbound links | Winner relationship |
| --- | --- | ---: | --- |
| `/builds/warrior` | `poe2 warrior builds` | 170 | Links to winner |
| `/builds/warrior/leveling` | `poe2 warrior leveling build` | 1 | No direct winner link |
| `/builds/poe2-warrior-slam-starter-build` | `poe2 warrior starter build` | 58 | No direct winner link |
| `/builds/poe2-warrior-earthquake-leveling-build` | `poe2 warrior earthquake build` | 14 | No direct winner link |
| `/builds/poe2-warrior-boneshatter-build` | `poe2 warrior boneshatter build` | 16 | No direct winner link |
| `/builds/poe2-warrior-shield-leveling-build` | `poe2 warrior shield build` | 4 | Links to winner |
| `/builds/poe2-warrior-fire-slam-build` | `poe2 warrior fire slam build` | 7 | Links to winner |
| `/builds/poe2-warrior-totem-slam-build` | `poe2 warrior totem build` | 5 | Links to winner |

### Supporting Skill URLs

| URL | Keyword target | Inbound links | Winner relationship |
| --- | --- | ---: | --- |
| `/skills/rolling-slam` | `poe2 rolling slam` | 18 | No direct winner link |
| `/skills/boneshatter` | `poe2 boneshatter` | 16 | No direct winner link |
| `/skills/earthquake` | `poe2 earthquake` | 22 | No direct winner link |

### Findings

- Warrior hub is healthy and already links to the winner as a ranged comparison.
- Warrior detail pages are not primary Mercenary support pages.
- `/builds/warrior/leveling` has low inbound link count and does not link to the winner, but its current role is Warrior-specific.
- Adding winner links from all Warrior pages would dilute Warrior intent.

### Missing Relationships To Winner

- `/builds/warrior/leveling` could use one comparison link to the winner if the page is used as a beginner route decision page.
- Warrior skill pages should not link to the winner; they should stay Warrior-focused.

### Actionable Opportunities

1. Keep `/builds/warrior` as the only direct Warrior hub link to the winner for now.
2. If `poe2 warrior build` impressions grow, strengthen `/builds/warrior/leveling` internally from `/builds/warrior` before adding more cross-theme links.
3. Add one "ranged alternative" comparison link from `/builds/warrior/leveling` to the winner only if GSC shows Warrior users comparing away from melee.
4. Do not add Mercenary links to Rolling Slam, Boneshatter, or Earthquake skill pages.

## Theme Audit: Monk

### Existing URLs

| URL | Keyword target | Inbound links | Winner relationship |
| --- | --- | ---: | --- |
| `/builds/monk` | `poe2 monk builds` | 170 | No direct winner link |
| `/builds/falling-thunder` | `poe2 falling thunder build` | 5 | No direct winner link |
| `/builds/crossbow-monk` | `poe2 crossbow monk` | 2 | Links to winner |
| `/skills/killing-palm/builds` | `poe2 killing palm builds` | 3 | No direct winner link |
| `/builds/poe2-monk-leveling-build` | `poe2 monk leveling build` | 68 | Links to winner |
| `/builds/poe2-monk-lightning-staff-build` | `poe2 monk lightning build` | 5 | Links to winner |
| `/builds/poe2-monk-ice-strike-build` | `poe2 monk ice strike build` | 6 | Links to winner |
| `/builds/poe2-monk-tempest-bell-build` | `poe2 tempest bell build` | 6 | Links to winner |
| `/builds/poe2-monk-palm-leveling-build` | `poe2 monk palm build` | 5 | Links to winner |
| `/builds/poe2-monk-siphoning-strike-build` | `poe2 siphoning strike build` | 7 | No direct winner link |

### Supporting Skill URLs

| URL | Keyword target | Inbound links | Winner relationship |
| --- | --- | ---: | --- |
| `/skills/killing-palm` | `poe2 killing palm` | 31 | Links to winner |
| `/skills/staggering-palm` | `poe2 staggering palm` | 24 | No direct winner link |
| `/skills/falling-thunder` | `poe2 falling thunder` | 41 | No direct winner link |
| `/skills/tempest-bell` | `poe2 tempest bell` | 36 | No direct winner link |
| `/skills/charged-staff` | `poe2 charged staff` | 21 | No direct winner link |

### Findings

- Monk cluster is healthy as a standalone active-melee cluster.
- `/builds/crossbow-monk` is the correct bridge between Monk and the Mercenary winner page.
- `/skills/killing-palm` already links to the winner as an active melee vs ranged crossbow comparison.
- Most Monk skill pages should not link to the winner because they serve Monk-specific intent.
- `/builds/crossbow-monk` has only 2 inbound links and is the weakest bridge page.

### Missing Relationships To Winner

- `/builds/monk` does not link directly to the winner, but it links to `/builds/crossbow-monk`, which links to the winner.
- `/skills/killing-palm/builds` does not link to the winner; this is acceptable unless GSC shows cross-theme comparison behavior.
- `/skills/staggering-palm` does not link to the winner; keep it Monk-focused unless query data changes.

### Actionable Opportunities

1. Strengthen `/builds/crossbow-monk` as the bridge page, not the whole Monk cluster.
2. If `poe2 crossbow monk` impressions grow, add one more internal link to `/builds/crossbow-monk` from `/skills/killing-palm/builds` or `/skills/staggering-palm`.
3. Keep `/skills/killing-palm` as the only validated skill page with a direct winner comparison link.
4. Do not add winner links to Falling Thunder, Tempest Bell, or Charged Staff skill pages unless GSC exposes comparison intent.

## Cross-Theme Relationship Map

| Relationship | Current status | Recommendation |
| --- | --- | --- |
| Mercenary hub -> winner | Strong | Keep |
| Crossbow guide -> winner | Strong | Keep |
| Beginner hub -> winner | Strong | Keep |
| Easy builds -> winner | Present but weaker | Watch GSC before adding more |
| Warrior hub -> winner | Present | Keep as durable melee vs ranged comparison |
| Warrior detail pages -> winner | Mixed | Do not expand broadly |
| Monk hub -> winner | Indirect through Crossbow Monk | Keep indirect |
| Crossbow Monk -> winner | Present but low inbound | Strengthen only if crossbow monk grows |
| Killing Palm -> winner | Present | Keep as active melee vs ranged crossbow comparison |

## Cannibalization Risks

| Risk | Current status | Mitigation |
| --- | --- | --- |
| `/builds/mercenary` vs winner page | Medium | Parent hub should support the winner for exact crossbow starter intent. |
| `/guides/mercenary/crossbow` vs winner page | Medium | Guide owns leveling workflow; winner owns starter build decision. |
| `/builds/beginner` vs winner page | Low | Beginner hub should compare safety, not own Mercenary crossbow build intent. |
| `/builds/crossbow-monk` vs winner page | Low | Crossbow Monk should explicitly recommend Mercenary if weapon feel is the real goal. |
| Monk skill pages vs winner page | Low | Keep Monk skill pages focused on Monk unless GSC shows comparison intent. |

## Recommended Next Actions

### P0: Documentation Alignment

- Update keyword ownership docs so `mercenary crossbow build poe2` maps to `/builds/poe2-mercenary-crossbow-starter-build`.
- Keep `/builds/mercenary` as parent support, not exact-query owner.

Why:

- The current GSC winner is the detail page.
- Old ownership notes still risk future cannibalization.

### P1: Beginner Comparison Refinement

- Watch `/builds/beginner`, `/builds/easy`, and `/builds/poe2-beginner-ranged-starter-build`.
- If beginner + crossbow impressions continue, add one contextual comparison link from `/builds/poe2-beginner-ranged-starter-build` to the winner.

Do not:

- Add winner links to every beginner build detail page.

### P2: Warrior Support Cleanup

- Keep `/builds/warrior` as the main Warrior-to-winner comparison.
- Strengthen `/builds/warrior/leveling` internally inside Warrior before adding more Mercenary links.
- Add a winner link from `/builds/warrior/leveling` only if GSC shows Warrior users comparing melee vs ranged starter routes.

### P3: Monk Bridge Strengthening

- Treat `/builds/crossbow-monk` as the Monk-to-Mercenary bridge.
- If `poe2 crossbow monk` grows, add one more link into `/builds/crossbow-monk` from a relevant Monk page.
- Do not link every Monk skill page to the winner.

## 7-Day Execution Order

1. Update ownership documentation.
2. Monitor GSC for:
   - `mercenary crossbow build poe2`
   - `poe 2 crossbow build`
   - `poe2 beginner builds`
   - `poe2 easy builds`
   - `poe2 warrior builds`
   - `poe2 monk builds`
   - `poe2 crossbow monk`
3. If winner page remains top, leave URL structure unchanged.
4. If Beginner/Easy pages gain impressions, improve comparison links inside existing pages.
5. If Warrior or Monk pages gain impressions, strengthen their parent/child internal links first.
6. Do not create new pages during this window.

## Stop Conditions

Do not implement expansion work if:

- New GSC data shows impressions shifting to an unrelated theme.
- A proposed link would make a skill page look like a crossbow build page.
- A proposed page would duplicate an existing owner.
- The work requires a new URL.

## Summary

The strongest next move is not content expansion. It is ownership cleanup and selective comparison routing.

Mercenary already has enough content depth around the winner page. Beginner, Warrior, and Monk should support the winner only where the player decision naturally compares:

- Beginner: "Is Mercenary too complex for my first build?"
- Warrior: "Should I play durable melee or ranged crossbow?"
- Monk: "Is crossbow really a Monk idea, or should I play Mercenary?"

Do this through existing pages only.
