# Winner Replication Phase 1 Report

Date: 2026-06-19
Project: POE2 Starter Tools

## Scope

Target pages:

- `/skills/flame-wall`
- `/skills/killing-palm`

Reference winner pattern:

- `/builds/poe2-mercenary-crossbow-starter-build`
- `/builds/crossbow-monk`

Guardrails preserved:

- No new URLs.
- No new clusters.
- No new classes.
- No new skills.
- No new tools.
- No layout redesign.
- Existing canonical structure preserved.
- Existing sitemap structure preserved.

## Implementation Summary

Updated the existing dynamic skill page system in `app/skills/[slug]/page.tsx`.

Added optional winner-style fields to existing focused skill content:

- `beginnerFit`
- `levelingRoadmap`
- `nextRecommended`

These fields render only when present, so the structural replication is limited to the targeted skill pages and does not create broad site-wide content expansion.

## Flame Wall Changes

Target URL:

- `/skills/flame-wall`

Added:

- `Beginner Fit` section.
- `Leveling Roadmap` section.
- `Next Recommended Page` pointing to `/skills/flame-wall/builds`.
- Expanded exact-query FAQ coverage.
- Additional contextual internal links to existing pages.
- Safe ASCII alias override for metadata/schema to avoid broken JSON-LD output from legacy encoded aliases.

Key internal links strengthened:

- `/skills/flame-wall/builds`
- `/builds/easy`
- `/builds/poe2-sorceress-spark-starter-build`
- `/skills/spark`
- `/skills/fireball`
- `/skills/killing-palm`
- `/builds/poe2-mercenary-crossbow-starter-build`

FAQ now covers:

- `Is Flame Wall good in POE2?`
- `Is Flame Wall good for beginners?`
- `What build uses Flame Wall?`
- `How do I level with Flame Wall?`
- `Is Flame Wall good for leveling?`
- `Should Spark use Flame Wall?`
- `Should Flame Wall be my main skill?`

## Killing Palm Changes

Target URL:

- `/skills/killing-palm`

Added:

- `Beginner Fit` section.
- `Leveling Roadmap` section.
- `Next Recommended Page` pointing to `/skills/killing-palm/builds`.
- Expanded exact-query FAQ coverage.
- Additional contextual internal links to existing pages.
- Safe ASCII alias override for metadata/schema to avoid broken JSON-LD output from legacy encoded aliases.

Key internal links strengthened:

- `/builds/monk`
- `/builds/falling-thunder`
- `/skills/killing-palm/builds`
- `/builds/easy`
- `/skills/flame-wall`
- `/builds/poe2-mercenary-crossbow-starter-build`
- `/builds`

FAQ now covers:

- `Is Killing Palm good in POE2?`
- `Is Killing Palm worth using while leveling?`
- `Is Killing Palm good for leveling?`
- `What class should use Killing Palm?`
- `What build uses Killing Palm?`
- `How does Killing Palm work in POE2?`
- `What should Killing Palm be paired with?`

## SEO Impact Estimate

Expected benefit:

- Better match for existing GSC skill impressions.
- Stronger beginner and leveling intent coverage without creating new URLs.
- Cleaner skill-to-build crawl path.
- Valid JSON-LD for target pages.
- Clearer next-step routing from skill pages into build pages.

Risk:

- The schema alias override intentionally uses ASCII exact-query variants for the two target pages because the legacy Chinese alias encoding currently breaks `DefinedTerm` JSON-LD in generated HTML. Chinese alias repair should be handled separately as a controlled encoding/data cleanup if needed.

## Deployment

Production deployment status:

- Deployed to Vercel production.
- Deployment ID: `dpl_JAgFpRhU36kwf7ip3tTAs3imocdt`
- Deployment URL: `https://poe2-decision-tools-ogdqiolqz-rslyzxgwih-2885s-projects.vercel.app`
- Production alias: `https://poe2startertools.com`
- Vercel output included `Deployment completed` and `Aliased https://poe2startertools.com`.
- Vercel inspect status: `Ready`
- Target: `production`

Post-deploy live verification:

- `/` returned 200.
- `/sitemap.xml` returned 200 with `application/xml`.
- `/skills/flame-wall` returned 200.
- `/skills/killing-palm` returned 200.
- Flame Wall live canonical: `https://poe2startertools.com/skills/flame-wall`.
- Killing Palm live canonical: `https://poe2startertools.com/skills/killing-palm`.
- Both target pages include valid `DefinedTerm`, `FAQPage`, and `BreadcrumbList` JSON-LD.
- Both target pages show `Beginner Fit`, `Leveling Roadmap`, and `Next Recommended Page`.
- 31 unique live internal links from the two target pages were checked; all returned 200.
