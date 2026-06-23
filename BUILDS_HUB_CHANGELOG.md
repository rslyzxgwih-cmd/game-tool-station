# Builds Hub Changelog

Project: `poe2startertools.com`

Date: 2026-06-11

Target URL:

- `/builds`

## Goal

Reposition `/builds` as the general `POE2 Builds Hub` so it supports build discovery without competing against child pages that own exact-match queries.

## Keyword Ownership Preserved

| URL | Ownership |
| --- | --- |
| `/builds` | `POE2 Builds Hub` |
| `/builds/beginner` | `Beginner Builds` |
| `/builds/easy` | `Easy Builds` |
| `/builds/mercenary` | `Mercenary Builds` |
| `/builds/warrior` | `Warrior Builds` |
| `/builds/monk` | `Monk Builds` |

## Files Changed

- `app/builds/page.tsx`
- `BUILDS_HUB_CHANGELOG.md`

## Content Changes

- Updated `/builds` metadata title from `POE2 Beginner Builds` to `POE2 Builds Hub`.
- Updated `/builds` H1 from `POE2 Beginner Builds` to `POE2 Builds Hub`.
- Rewrote the top supporting copy so the page acts as a build decision router.
- Updated `CollectionPage` schema name to `POE2 Builds Hub`.
- Added schema description clarifying that `/builds` links beginner, easy, class, and validated starter build pages.

## Scope Control

- No new URLs created.
- No new clusters created.
- No build pages created.
- No navigation redesign.
- Existing hierarchy preserved.

## Expected SEO Impact

- Reduces cannibalization risk between `/builds` and `/builds/beginner`.
- Clarifies that `/builds` is the parent hub for build discovery.
- Keeps exact-match beginner intent on `/builds/beginner`.
- Keeps validated Mercenary, Beginner, Warrior, and Monk build paths linked from the hub.

## Validation

- Local build: passed with `npm run build`.
- Vercel production build: passed.
- Production deployment: complete.
- Deployment URL: `https://poe2-decision-tools-j2u5d34wx-rslyzxgwih-2885s-projects.vercel.app`
- Production alias: `https://poe2startertools.com`
- Live `/builds` verification: title is `POE2 Builds Hub | POE2 Decision Tools`; page HTML contains `POE2 Builds Hub`.
