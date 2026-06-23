# Winner Replication Phase 2 Evaluation

Date: 2026-06-19
Project: POE2 Starter Tools
Scope: Evaluation only

No page content, URLs, metadata, sitemap, schema, or deployment changes were made.

## Pages Evaluated

Candidate pages:

- `/skills/falling-thunder`
- `/skills/tempest-bell`

Compared against Phase 1 pages:

- `/skills/flame-wall`
- `/skills/killing-palm`

## Decision Summary

| Page | Replication Readiness | Reason |
| --- | --- | --- |
| `/skills/falling-thunder` | Ready for a limited Phase 2 pass | It has documented P1 GSC signal, a live build route, Monk hub support, and missing the same Phase 1 sections |
| `/skills/tempest-bell` | Conditional | It has strong Monk-cluster relevance, but current local GSC records do not show the same explicit independent signal as Falling Thunder |

Recommended priority:

1. `/skills/falling-thunder`
2. `/skills/tempest-bell`

## 1. Are They Receiving Sufficient GSC Signals?

### `/skills/falling-thunder`

Current evidence:

- `KEYWORD_DATABASE.md` lists `poe2 falling thunder` and `poe2 falling thunder build` as P1.
- Ownership is already split correctly:
  - `/skills/falling-thunder` = skill decision.
  - `/builds/falling-thunder` = build route.
- The build page is live and linked from the skill page.

Assessment:

- Sufficient for a limited replication pass.
- Do not create new URLs.
- Do not expand beyond the existing skill page and existing build route.

### `/skills/tempest-bell`

Current evidence:

- Tempest Bell is repeatedly used inside the Monk cluster.
- It is linked from Monk, Falling Thunder, Crossbow Monk, Killing Palm, and build pages.
- It has an existing build route: `/builds/poe2-monk-tempest-bell-build`.
- Current local GSC records do not show Tempest Bell as a standalone P1/P0 row in the same way as Falling Thunder, Killing Palm, or Flame Wall.

Assessment:

- Structurally strong, but GSC signal is less proven.
- It is eligible only as a cluster-support replication after Falling Thunder, or after fresh GSC evidence confirms impressions for `poe2 tempest bell`.
- Do not create `/skills/tempest-bell/builds`.

## 2. Are They Missing The Same Winner-Pattern Sections?

Phase 1 pages now have:

- `Beginner Fit`
- `Leveling Roadmap`
- `Next Recommended Page`
- expanded exact-query FAQ
- strengthened internal links
- schema-valid alias handling

Current candidate gap:

| Section / Signal | Falling Thunder | Tempest Bell |
| --- | --- | --- |
| `Beginner Fit` field | Missing | Missing |
| `Leveling Roadmap` field | Missing | Missing |
| `Next Recommended Page` | Present | Present |
| focused FAQ | Present, but lighter than Phase 1 | Present, but lighter than Phase 1 |
| Related Builds | Present | Present |
| Related Skills | Present | Present |
| Support route | Present: `/builds/falling-thunder` | Existing build route exists, but no `supportPageBySkill` mapping |
| Ownership distinction | Needs clearer skill-vs-build wording | Needs clearer skill-vs-build wording |

Conclusion:

- Both pages are missing the same two major structural sections added in Phase 1:
  - `Beginner Fit`
  - `Leveling Roadmap`
- Tempest Bell also needs its existing build route surfaced more explicitly as the support/child route.

## 3. Would Replication Likely Improve Performance?

### Falling Thunder

Likely improvement: medium-high.

Why:

- It already has GSC P1 evidence.
- It belongs to the Monk cluster that Google is testing.
- It has both skill and build intent.
- The existing `/builds/falling-thunder` page already has a stronger topic-cluster format.
- Adding Phase 1 sections to `/skills/falling-thunder` would reduce the gap between the skill owner and build owner.

Best structural improvements if approved later:

- Add `Beginner Fit`.
- Add `Leveling Roadmap`.
- Expand exact-query FAQ:
  - `Is Falling Thunder good in POE2?`
  - `Is Falling Thunder good for leveling?`
  - `What build uses Falling Thunder?`
  - `Should I use Falling Thunder or Tempest Bell?`
  - `Should I choose Falling Thunder or Crossbow Monk?`
- Keep `/skills/falling-thunder` as the skill owner.
- Keep `/builds/falling-thunder` as the build owner.

### Tempest Bell

Likely improvement: medium, conditional.

Why:

- The page already has good internal links and a next recommended build route.
- It is highly relevant to Monk, Falling Thunder, and Killing Palm.
- But current local GSC evidence is weaker than Falling Thunder.
- It may improve cluster strength, but it is less clearly a standalone winner replication target today.

Best structural improvements if approved later:

- Add `Beginner Fit`.
- Add `Leveling Roadmap`.
- Add `supportPageBySkill` mapping to existing `/builds/poe2-monk-tempest-bell-build`.
- Expand exact-query FAQ:
  - `Is Tempest Bell good in POE2?`
  - `Is Tempest Bell good for beginners?`
  - `What build uses Tempest Bell?`
  - `Should I use Tempest Bell or Falling Thunder?`
  - `What skills pair with Tempest Bell?`
- Do not create a new Tempest Bell support URL.

## 4. Internal Link Depth

Current explicit source mentions:

| Target | Explicit Source Mentions |
| --- | ---: |
| `/skills/killing-palm` | 20 |
| `/skills/flame-wall` | 12 |
| `/skills/tempest-bell` | 15 |
| `/skills/falling-thunder` | 9 |
| `/builds/falling-thunder` | 12 |
| `/builds/poe2-monk-tempest-bell-build` | 6 |

Interpretation:

- Tempest Bell has stronger direct skill-page link depth than Falling Thunder.
- Falling Thunder has stronger combined skill + build ownership because `/builds/falling-thunder` is an exact support page.
- Falling Thunder's lower direct skill-link count is offset by stronger query ownership in `KEYWORD_DATABASE.md`.

## 5. Priority Ranking

### Priority 1: `/skills/falling-thunder`

Reason:

- Clearer GSC evidence.
- Already listed as P1.
- Already has a matching build support URL.
- Directly supports Monk and Crossbow Monk winner clusters.
- Missing the exact same Phase 1 structural sections.

Recommended status:

- Ready for implementation if the next task is approved.

### Priority 2: `/skills/tempest-bell`

Reason:

- Strong cluster adjacency.
- Strong internal link depth.
- Already has an existing build route.
- But standalone GSC evidence is less clear in current local records.

Recommended status:

- Hold unless fresh GSC confirms `poe2 tempest bell` impressions, or implement only after Falling Thunder as a support-cluster enhancement.

## Final Recommendation

Proceed with Phase 2 only if the next implementation pass remains limited to existing URLs.

Suggested order:

1. Replicate Phase 1 structure on `/skills/falling-thunder`.
2. Recheck GSC.
3. Replicate on `/skills/tempest-bell` only if:
   - Tempest Bell has impressions, or
   - Falling Thunder/Monk cluster growth justifies strengthening the payoff-skill path.

Do not create new pages, new support URLs, or new clusters for Phase 2.
