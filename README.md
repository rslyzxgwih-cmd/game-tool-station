# POE2 Starter Tools

Lightweight Path of Exile 2 tool platform for build, skill, and beginner leveling pages.

Core routes:

- `/`
- `/builds`
- `/builds/[slug]`
- `/skills`
- `/skills/[slug]`
- `/class-picker`

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

`NEXT_PUBLIC_GA_ID` overrides the default GA4 Measurement ID configured for `poe2startertools.com`.
