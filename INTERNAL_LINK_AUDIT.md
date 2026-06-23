# Internal Link Audit

Date: 2026-06-15
Project: POE2 Starter Tools
Sprint: Winner cluster strengthening

## Scope

This audit covers internal links added or reinforced around existing winning themes only.

No new URLs, classes, Druid pages, Huntress pages, or new clusters were created.

## Priority URLs

| URL | Role |
| --- | --- |
| `/builds/poe2-mercenary-crossbow-starter-build` | Top-performing winner page |
| `/builds/crossbow-monk` | Second strongest build page signal |
| `/builds/monk` | Monk topical hub |
| `/skills/tempest-bell` | Monk payoff skill |
| `/skills/falling-thunder` | Monk lightning identity skill |
| `/skills/furious-slam` | Heavy melee comparison page, not treated as Monk |
| `/builds/beginner` | Beginner intent hub |
| `/builds/easy` | Easy build intent hub |

## Current Source Reference Counts

These are local source references in `app` and `src`, not live crawl counts.

| Target | References |
| --- | ---: |
| `/builds/poe2-mercenary-crossbow-starter-build` | 24 |
| `/builds/crossbow-monk` | 11 |
| `/builds/monk` | 21 |
| `/skills/tempest-bell` | 15 |
| `/skills/falling-thunder` | 9 |
| `/skills/furious-slam` | 6 |
| `/builds/beginner` | 23 |
| `/builds/easy` | 18 |

## Link Improvements Applied

### Builds Hub

`/builds` now links more clearly to:
- Mercenary Crossbow Starter Build.
- Beginner Builds.
- Easy Builds.
- Monk Builds.
- Crossbow Monk.
- Tempest Bell.
- Falling Thunder.
- Furious Slam.

It also includes a `Next Recommended Page` block pointing to the Mercenary Crossbow winner page.

### Beginner And Easy Hubs

`/builds/beginner` and `/builds/easy` now link into:
- Mercenary Crossbow Starter Build.
- Crossbow Monk.
- Monk Hub.
- Falling Thunder.
- Tempest Bell.
- Furious Slam.

The intent split is preserved:
- Beginner means first-character safety.
- Easy means lower execution friction.
- Crossbow Monk is framed as an experimental decision page, not the default beginner route.

### Mercenary Crossbow Winner

`/builds/poe2-mercenary-crossbow-starter-build` now links to:
- Crossbow Monk as the next comparison page.
- Monk Hub.
- Falling Thunder.
- Tempest Bell.
- Beginner Builds.
- Easy Builds.

It keeps Mercenary Crossbow as the primary answer for crossbow gameplay.

### Crossbow Monk

`/builds/crossbow-monk` now links to:
- Mercenary Crossbow Starter Build.
- Mercenary Builds.
- Crossbow Guide.
- Monk Builds.
- Falling Thunder.
- Beginner Builds.
- Easy Builds.
- Tempest Bell.
- Furious Slam.

The page now pushes players toward Mercenary if crossbow is the true intent and toward Monk/Falling Thunder if Monk identity is the true intent.

### Monk Hub And Monk Skills

`/builds/monk`, `/skills/tempest-bell`, `/skills/falling-thunder`, and `/skills/furious-slam` now have stronger crosslinks.

Important distinction:
- Tempest Bell and Falling Thunder are treated as Monk skills.
- Furious Slam is treated as heavy melee / Warrior-style comparison content, not as a Monk skill.

## Next Recommended Page Coverage

Added `Next Recommended Page` support to:
- Focused build detail pages.
- Topic cluster support pages.
- Focused skill detail pages.
- Builds Hub.

This creates a clearer crawl path and user path without adding URLs.

## Remaining Watch Items

Use GSC to watch whether these pages gain impressions:
- `/builds/crossbow-monk`
- `/builds/monk`
- `/skills/tempest-bell`
- `/skills/falling-thunder`
- `/skills/furious-slam`

Do not expand Druid or Huntress unless Google starts showing repeated impressions for those themes.

