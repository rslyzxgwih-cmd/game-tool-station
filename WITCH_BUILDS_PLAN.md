# Witch Builds Cluster Plan

Source signal: `witch builds poe 2`

## Strategic Read

Google is testing POE2StarterTools on Witch build-selection intent. This is likely beginner and minion-heavy intent, not a broad class encyclopedia query.

This cluster should help a player decide:

- Should I start Witch?
- Is Minion Witch the safest first build?
- Which Witch build page should I open?
- Which minion skills matter first?

## Priority Page

Planned URL:

- `/builds/witch`

Page type:

- Build cluster hub

This should be a decision page for Witch builds, not a general Witch guide.

## Player Decision

The player is deciding whether Witch is a good starter and whether a minion setup fits their playstyle.

The page output should be:

- recommended first Witch build
- minion vs spell decision
- beginner fit
- core minion skill links
- link to the current Minion Witch build page

## Required Page Sections

1. Witch build selector summary
   - default answer: Beginner Minion Witch
   - difficulty: Easy
   - playstyle: Safe summoner

2. Minion Witch decision block
   - pick it if you want safety and pressure from summons
   - skip it if you dislike minion management

3. Existing build link
   - `/builds/poe2-beginner-minion-witch-build`

4. Skill links
   - `/skills/raise-spectre`
   - `/skills/skeletal-warrior`
   - `/skills/skeletal-arsonist`
   - optional: `/skills/skeletal-sniper`

5. Compare against Warrior and Mercenary
   - Warrior: more durable direct melee
   - Mercenary: more active ranged weapon gameplay

## Internal Link Plan

Inbound links:

- `/`
- `/builds`
- `/class-picker`
- `/skills/raise-spectre`
- `/skills/skeletal-warrior`
- `/skills/skeletal-arsonist`

Outbound links:

- `/builds/poe2-beginner-minion-witch-build`
- `/skills/raise-spectre`
- `/skills/skeletal-warrior`
- `/skills/skeletal-arsonist`
- `/builds/warrior`
- `/guides/mercenary`

## Database Planning

Current data can support the first version.

Future build fields to consider:

- `cluster_slug`: `witch`
- `primary_query`: `witch builds poe 2`
- `decision_question`: `Which Witch build should I start with?`
- `recommended_for`
- `avoid_if`

Future skill fields to consider:

- `class_cluster`: `witch`
- `related_build_slug`: `poe2-beginner-minion-witch-build`

Do not add database fields before building the first three cluster pages.

## Do Not Build Yet

- Witch endgame minion scaling guide
- complete minion database
- every Witch build variant
- generic Witch lore or class overview
- AI-generated long Witch guide

## Development Priority

Priority: 2

Reason: Query maps strongly to existing Minion Witch content and can become the safest beginner-build cluster.
