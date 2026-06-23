# Crossbow Monk Final Audit

Date: 2026-06-17
Project: POE2 Starter Tools
Scope: Pre-deployment audit only

Target page:
- `/builds/crossbow-monk`

Comparison pages:
- `/builds/poe2-mercenary-crossbow-starter-build`
- `/builds/beginner`

No new pages, routes, skills, builds, clusters, or architecture changes were made for this audit.

## Executive Decision

Recommended deployment decision: Deploy.

Reason:
- Build passes.
- Crossbow Monk canonical is correct.
- Crossbow Monk is included in sitemap.
- FAQ schema and Breadcrumb schema are present and parseable.
- All Crossbow Monk internal links resolve to generated routes.
- No orphan page risk was introduced.

Remaining risk is strategic, not technical:
- Crossbow Monk can attract crossbow-only intent that should belong to Mercenary Crossbow. The page currently mitigates this by routing users back to Mercenary Crossbow when crossbow gameplay is the real intent.

## Validation Results

| Check | Result | Evidence |
| --- | --- | --- |
| Build passes | Pass | `npm run build` completed successfully |
| Static generation | Pass | Next.js generated `176/176` static pages |
| Crossbow Monk HTML generated | Pass | `.next/server/app/builds/crossbow-monk.html` exists |
| Internal links valid | Pass | 29 internal hrefs found; all map to generated routes |
| No orphan pages introduced | Pass | Crossbow Monk is linked from hubs and comparison pages; no new route was introduced |
| Sitemap integrity | Pass | `.next/server/app/sitemap.xml.body` parses as XML |
| Sitemap URL count | Pass | 171 sitemap URLs |
| Crossbow Monk in sitemap | Pass | `https://poe2startertools.com/builds/crossbow-monk` found |
| Canonical consistency | Pass | `https://poe2startertools.com/builds/crossbow-monk` |
| FAQ schema validity | Pass | `FAQPage` JSON-LD found with 8 questions |
| Breadcrumb schema validity | Pass | `BreadcrumbList` JSON-LD found with 3 items |
| Article schema | Pass | `Article` JSON-LD found |

## Crossbow Monk Generated HTML Checks

From `.next/server/app/builds/crossbow-monk.html`:

| Item | Value |
| --- | --- |
| Canonical | `https://poe2startertools.com/builds/crossbow-monk` |
| JSON-LD scripts | 3 |
| JSON-LD types | `Article`, `FAQPage`, `BreadcrumbList` |
| FAQ count | 8 |
| Breadcrumb item count | 3 |
| Internal href count | 29 |

Internal links found and validated against generated routes include:
- `/`
- `/builds`
- `/builds/beginner`
- `/builds/easy`
- `/builds/falling-thunder`
- `/builds/mercenary`
- `/builds/monk`
- `/builds/poe2-mercenary-crossbow-starter-build`
- `/builds/poe2-mercenary-rapid-shot-build`
- `/builds/poe2-monk-leveling-build`
- `/builds/poe2-monk-palm-leveling-build`
- `/builds/poe2-monk-tempest-bell-build`
- `/guides/mercenary/crossbow`
- `/skills/escape-shot`
- `/skills/falling-thunder`
- `/skills/fragmentation-rounds`
- `/skills/furious-slam`
- `/skills/galvanic-shards`
- `/skills/high-velocity-rounds`
- `/skills/killing-palm`
- `/skills/rapid-shot`
- `/skills/staggering-palm`
- `/skills/tempest-bell`
- `/skills/wind-blast`

## Sitemap Integrity

Sitemap source:
- `.next/server/app/sitemap.xml.body`

Results:
- XML parsed successfully.
- URL count: 171.
- All sitemap URLs use `https://poe2startertools.com`.
- Crossbow Monk is present.
- Mercenary Crossbow Starter Build is present.
- Beginner Builds page is present.

Note:
- 171 sitemap URLs is expected. Next.js generated 176 static pages, but sitemap excludes non-indexable system routes such as `/_not-found`, `/robots.txt`, and `/sitemap.xml`.

## Comparison Against Mercenary Crossbow Winner

### Mercenary Crossbow Strengths

`/builds/poe2-mercenary-crossbow-starter-build` remains stronger than Crossbow Monk because it has a custom build-detail structure:

- Quick answer block.
- Quick facts.
- Beginner progression.
- Leveling roadmap.
- Skill progression roadmap.
- Explicit skill roles.
- Related builds.
- Related skills.
- Next recommended page.
- Large FAQ set.

Mercenary winner content depth:
- Quick facts: 7.
- Beginner progression stages: 3.
- Leveling roadmap items: 5.
- Skill role items: 8.
- Related builds: 10.
- Related skills: 11.
- FAQ items: 14.

### Crossbow Monk Current Coverage

`/builds/crossbow-monk` now has:

- Decision answer.
- Safer alternative.
- Beginner progression.
- Beginner Stage 1.
- Beginner Stage 2.
- Leveling roadmap.
- Level 1-20 check.
- Level 20-40 check.
- Early mapping check.
- Skill progression roadmap.
- Common mistakes.
- Related builds.
- Related skills.
- Next recommended page.
- FAQ.

Crossbow Monk content depth:
- Sections: 11.
- Related builds: 11.
- Related skills: 11.
- FAQ items: 8.

### Missing Versus Mercenary Winner

Crossbow Monk does not have:
- A build-detail quick facts grid.
- A true build-specific skill role table with role labels.
- A custom build-detail template.

Assessment:
- These are acceptable gaps before deployment because Crossbow Monk should remain a decision fork, not a full build-plan owner.
- Turning it into a full build-detail page may increase cannibalization against Mercenary Crossbow.

## Comparison Against Beginner Builds Page

### Beginner Builds Strengths

`/builds/beginner` is broader and safer for first-character intent.

It covers:
- Decision answer.
- Best starter builds.
- How to choose.
- Where Mercenary fits.
- Leveling tips.
- Early game progression.
- Common mistakes.
- Related builds.
- Related skills.
- Next recommended page.
- FAQ.

Beginner page depth:
- Sections: 7.
- Related builds: 8.
- Related skills: 11.
- FAQ items: 6.

### Crossbow Monk Compared To Beginner Builds

Crossbow Monk is now stronger in:
- Hybrid-specific intent coverage.
- Crossbow-vs-Monk decision handling.
- Level-stage guidance.
- FAQ depth.

Beginner Builds remains stronger in:
- General first-character safety.
- Broad starter build routing.
- Low-friction intent.

### Missing Versus Beginner Builds

Crossbow Monk should not copy Beginner Builds' broad starter recommendations.

Current useful gap:
- Crossbow Monk could eventually include a compact "Who should not play this" block if GSC shows high impressions but weak clicks.

Assessment:
- Not required before deployment.
- Avoid adding broad beginner content now because it could weaken the page's exact hybrid intent.

## Missing Sections

Current missing sections that are not blockers:

| Missing Section | Severity | Recommendation |
| --- | --- | --- |
| Quick facts grid | Low | Do not add before deployment; page is a decision fork, not a full build detail page |
| Skill role table | Low | Consider only if GSC shows users searching for exact Crossbow Monk skill order |
| Who should skip this build | Low | Useful future addition if CTR is weak |

No critical missing sections were found.

## Missing Internal Links

No critical missing internal links were found.

Current link coverage includes:
- Mercenary Crossbow.
- Mercenary Builds.
- Mercenary Crossbow Guide.
- Rapid Shot Mercenary build.
- Monk Hub.
- Monk Leveling.
- Monk Tempest Bell.
- Monk Palm Leveling.
- Falling Thunder.
- Beginner Builds.
- Easy Builds.
- Crossbow skills.
- Monk skills.
- Warrior/heavy melee comparison through Furious Slam.

Potential future internal link:
- `/skills/armour-piercing-rounds`

Do not add it now unless GSC shows Crossbow Monk queries with boss damage or armor language.

## Missing User-Intent Coverage

Covered intents:
- Is Crossbow Monk good?
- Is Crossbow Monk beginner friendly?
- How should Crossbow Monk leveling start?
- Is Mercenary Crossbow better?
- Is standard Monk better?
- When is Crossbow Monk worth testing?
- What skills should be compared first?
- What is the common mistake?

Remaining possible intent:
- "Crossbow Monk skill order"
- "Crossbow Monk leveling skills"
- "Crossbow Monk passive tree"

Recommendation:
- Do not address passive tree intent. It violates the current site strategy and adds complexity.
- Do not expand skill-order content until GSC validates that exact query pattern.

## Orphan Page Review

Crossbow Monk is not orphaned.

Discovery paths:
- `/builds` links to `/builds/crossbow-monk`.
- `/builds/beginner` links to `/builds/crossbow-monk`.
- `/builds/easy` links to `/builds/crossbow-monk`.
- `/builds/monk` links to `/builds/crossbow-monk`.
- `/builds/poe2-mercenary-crossbow-starter-build` links to `/builds/crossbow-monk`.
- `/skills/falling-thunder` links to `/builds/crossbow-monk`.
- Sitemap includes `/builds/crossbow-monk`.

Result:
- No orphan risk.

## Remaining Risks

1. Cannibalization risk with Mercenary Crossbow:
   - Crossbow-only users may land on Crossbow Monk.
   - Current mitigation: page explicitly routes crossbow intent back to Mercenary Crossbow.

2. Over-expansion risk:
   - Adding more hybrid details could turn this page into a second crossbow guide.
   - Recommendation: keep it as a decision fork until GSC proves separate skill-order intent.

3. Beginner confusion risk:
   - The page now repeatedly says Crossbow Monk is not the default beginner route.
   - This is intentional and should remain.

## Deployment Recommendation

Deploy.

Rationale:
- Technical validation passed.
- Sitemap/canonical/schema checks passed.
- Internal links are valid.
- No orphan pages were introduced.
- Page now has enough FAQ, beginner progression, leveling roadmap, and internal links for a winner-candidate test.

Post-deployment action:
- Stop content expansion.
- Observe GSC for 7 days.
- Track impressions, clicks, average position, indexed state, and whether Crossbow Monk receives crossbow-only queries that should belong to Mercenary Crossbow.

