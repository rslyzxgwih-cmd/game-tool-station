# Crawl Path Audit

Date: 2026-06-14
Scope: Monk and Mercenary build discovery review.

## Method

This is a local crawl-discovery audit, not a live GSC index-status check.

Checked:
- Sitemap inclusion.
- Internal links from homepage.
- Internal links from `/builds`.
- Distance from homepage.
- Distance from `/builds`.

Rule:
- Important pages should be reachable within 3 clicks.

## Sitemap Coverage

`app/sitemap.ts` includes:
- Static build hubs such as `/builds`, `/builds/monk`, `/builds/mercenary`, `/builds/crossbow-monk`, and `/builds/falling-thunder`.
- All dynamic build pages through `builds.map(...)`.
- All dynamic skill pages through `skills.map(...)`.

Result: Monk and Mercenary dynamic build pages are included in sitemap through the build data source.

## Mercenary Crawl Paths

| URL | Sitemap | From homepage | From `/builds` | Status |
| --- | --- | ---: | ---: | --- |
| `/builds/poe2-mercenary-crossbow-starter-build` | Yes | 1 click | 1 click | Strong |
| `/builds/mercenary` | Yes | 1 click | 1 click | Strong |
| `/guides/mercenary/crossbow` | Yes | 1 click | 1 click | Strong |
| `/guides/mercenary` | Yes | 2 clicks via Mercenary/Crossbow context | 2 clicks via Mercenary context | Acceptable |
| `/builds/poe2-mercenary-grenade-leveling-build` | Yes | 2 clicks via `/builds` | 1 click | Acceptable |
| `/builds/poe2-mercenary-lightning-crossbow-build` | Yes | 2 clicks via `/builds` | 1 click | Acceptable |
| `/builds/poe2-mercenary-cold-crossbow-build` | Yes | 2 clicks via `/builds` | 1 click | Acceptable |
| `/builds/poe2-mercenary-high-velocity-boss-build` | Yes | 2 clicks via `/builds` | 1 click | Acceptable |
| `/builds/poe2-mercenary-rapid-shot-build` | Yes | 2 clicks via `/builds` | 1 click | Acceptable |

## Monk Crawl Paths

| URL | Sitemap | From homepage | From `/builds` | Status |
| --- | --- | ---: | ---: | --- |
| `/builds/monk` | Yes | 1 click | 1 click | Strong |
| `/builds/falling-thunder` | Yes | 1 click | 1 click | Strong |
| `/builds/crossbow-monk` | Yes | 2 clicks via `/builds` | 1 click | Acceptable |
| `/builds/poe2-monk-leveling-build` | Yes | 1 click | 1 click | Strong |
| `/builds/poe2-monk-lightning-staff-build` | Yes | 2 clicks via `/builds` | 1 click | Acceptable |
| `/builds/poe2-monk-ice-strike-build` | Yes | 2 clicks via `/builds` | 1 click | Acceptable |
| `/builds/poe2-monk-tempest-bell-build` | Yes | 2 clicks via `/builds` | 1 click | Acceptable |
| `/builds/poe2-monk-palm-leveling-build` | Yes | 2 clicks via `/builds` | 1 click | Acceptable |
| `/builds/poe2-monk-siphoning-strike-build` | Yes | 2 clicks via `/builds` | 1 click | Acceptable |

## Findings

1. The winner page has the strongest crawl path:
   - Homepage direct link.
   - Builds hub direct link.
   - Skills hub support link.
   - Skill detail support links.
   - Sitemap inclusion.

2. Monk and Mercenary dynamic build pages are not orphaned:
   - They are all reachable from `/builds`.
   - They are all included in sitemap through dynamic build routes.

3. Important pages are within 3 clicks:
   - Home -> `/builds` -> build detail is 2 clicks.
   - `/builds` -> build detail is 1 click.

## Recommended Watch List

Watch in GSC:
- `/builds/poe2-mercenary-crossbow-starter-build`
- `/builds`
- `/builds/beginner`
- `/builds/easy`
- `/skills/flame-wall`
- `/skills/killing-palm`
- `/skills/tempest-bell`

Do not create replacement URLs for these intents unless query data proves a separate intent.

