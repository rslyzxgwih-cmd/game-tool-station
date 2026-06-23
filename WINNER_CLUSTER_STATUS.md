# Winner Cluster Status

Date: 2026-06-15
Project: POE2 Starter Tools

## Status

Winner-cluster strengthening has been deployed to production.

The deployed cluster focuses on:
- Mercenary Crossbow.
- Crossbow Monk.
- Monk Hub.
- Tempest Bell.
- Falling Thunder.

No content expansion should happen until new Google Search Console data is available.

## Pages To Monitor

| Page | URL | Reason |
| --- | --- | --- |
| Mercenary Crossbow | `/builds/poe2-mercenary-crossbow-starter-build` | Top-performing winner page |
| Crossbow Monk | `/builds/crossbow-monk` | Second strongest page signal |
| Monk Hub | `/builds/monk` | Repeated Monk detection by Google |
| Tempest Bell | `/skills/tempest-bell` | Monk payoff skill signal |
| Falling Thunder | `/skills/falling-thunder` | Monk lightning skill signal |

## Baseline Checks After Deployment

| Check | Result |
| --- | --- |
| Production deployment ready | Pass |
| Required URLs return 200 | Pass |
| Canonicals use production domain | Pass |
| Sitemap parses as XML | Pass |
| Winner pages included in sitemap | Pass |
| Key internal links present | Pass |
| Key internal link targets return 200 | Pass |
| Orphan risk introduced | No |

## Observation Metrics

Track for each monitored page:
- Impressions.
- Clicks.
- Average position.
- Queries appearing.
- Query growth.
- Indexation changes.
- Whether the page receives new impressions after deployment.

## Do Not Do During Observation

Do not:
- Create new pages.
- Create new classes.
- Create new skills.
- Create new clusters.
- Expand Druid.
- Expand Huntress.
- Add more Monk pages.
- Add more crossbow hybrid pages.

## Next Decision Rule

After 7 days, act only if GSC shows one of these:
- A monitored page gains impressions but remains outside top 10.
- A monitored query receives impressions on the wrong page.
- A new repeated query appears for the same existing cluster.
- Indexation improves but CTR remains weak.

If no new GSC data is available, continue observing and do not expand.

