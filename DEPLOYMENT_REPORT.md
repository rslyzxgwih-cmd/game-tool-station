# Deployment Report

Date: 2026-06-22
Project: POE2 Starter Tools
Scope: CTR Upgrade Phase 1
Production URL: https://poe2startertools.com

## Scope

Only the requested high-performing pages were changed:

| URL | Change type |
| --- | --- |
| `/builds/poe2-mercenary-crossbow-starter-build` | Build decision support and internal navigation |
| `/builds/crossbow-monk` | Existing redirect preserved; canonical target `/builds/monk-crossbow-build` updated |
| `/skills/flame-wall` | Skill decision support and recommended build navigation |
| `/skills/tempest-bell` | Skill decision support and recommended build navigation |

## Modified Files

| File | Purpose |
| --- | --- |
| `app/builds/[slug]/page.tsx` | Added focused CTR blocks for the Mercenary Crossbow starter page |
| `app/builds/monk-crossbow-build/page.tsx` | Added focused CTR blocks for the Monk Crossbow canonical page |
| `app/skills/[slug]/page.tsx` | Added target-only skill decision blocks for Flame Wall and Tempest Bell |
| `DEPLOYMENT_REPORT.md` | Recorded scope, validation, and deployment evidence |

## Implemented Changes

Build pages now include:

- `Who Is This Build For?`
- `Should You Choose This Build?`
- Concise leveling progression for `Level 1-10`, `Level 10-30`, and `Level 30+`
- `Alternative Builds`
- `Next Step`

Skill pages now include:

- `What This Skill Is Good For`
- `When NOT To Use This Skill`
- `Best Combinations`
- `Recommended Builds Using This Skill`
- `Next Step`

## Guardrails

| Guardrail | Result |
| --- | --- |
| New URLs created | No |
| New pages created | No |
| Site architecture changed | No |
| API integration added | No |
| Backend code changed | No |
| `/builds/crossbow-monk` redirect changed | No |
| Existing canonical URLs preserved | Yes |

## Local Build Validation

Command:

```text
npm run build
```

Result:

```text
Compiled successfully
Linting and checking validity of types
Generating static pages (176/176)
Exit code: 0
```

## Deployment

The validated Phase 1 changes were deployed to Vercel production.

| Field | Value |
| --- | --- |
| Deployment URL | `https://poe2-decision-tools-dbog743ku-rslyzxgwih-2885s-projects.vercel.app` |
| Production alias | `https://poe2startertools.com` |
| Vercel inspect | `https://vercel.com/rslyzxgwih-2885s-projects/poe2-decision-tools/5gXcQPf1tRsk6HMrZnkm69gzpga2` |
| Target | `production` |

Vercel production build validation:

```text
Running "npm run build"
Compiled successfully
Generating static pages (176/176)
Build Completed
Aliased https://poe2startertools.com
```

## Live Verification

| URL | Status | Final URL | New sections present |
| --- | ---: | --- | --- |
| `https://poe2startertools.com/builds/poe2-mercenary-crossbow-starter-build` | 200 | Same URL | Pass |
| `https://poe2startertools.com/builds/crossbow-monk` | 308 -> 200 | `https://poe2startertools.com/builds/monk-crossbow-build` | Pass |
| `https://poe2startertools.com/skills/flame-wall` | 200 | Same URL | Pass |
| `https://poe2startertools.com/skills/tempest-bell` | 200 | Same URL | Pass |

## Notes

The deploy command printed shell-level environment variable assignment warnings before running Vercel, but Vercel deployment, production aliasing, and live verification completed successfully.

The changes are content and internal-link additions inside existing renderers. No route config, sitemap generator, API route, or backend file was changed.
