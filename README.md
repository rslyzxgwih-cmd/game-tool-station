# POE2 Decision Tools

Lightweight Path of Exile 2 tool platform for decision pages, not a blog, forum, or wiki clone.

Phase 1 routes:

- `/`
- `/builds`
- `/builds/[slug]`
- `/skills`
- `/skills/[slug]`
- `/class-picker`

First-week tools:

- Class Picker: input `Melee`, `Ranged`, `Summoner`, or `Spell`; output recommended classes.
- Build Generator: input `Class` and `Difficulty`; output one build page.
- Skill Database: 30 skill pages.

Database design lives in `database/schema.sql`. The first launch uses seed data with the same shape as the PostgreSQL tables so the site can validate search impressions before expanding backend work.

Run locally:

```powershell
npm install
npm run dev
```

Environment variables:

```powershell
NEXT_PUBLIC_SITE_URL=https://poe2startertools.com
NEXT_PUBLIC_GA_ID=G-VB4Z8X6P5Q
```

`NEXT_PUBLIC_GA_ID` overrides the default GA4 Measurement ID configured for
`poe2startertools.com`.
