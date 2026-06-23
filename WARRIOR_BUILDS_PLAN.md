# Warrior Builds Cluster Plan

Source signal: `poe2 warrior builds`

## Strategic Read

Google is testing POE2StarterTools as a class-specific build decision site. The Warrior query is a direct build-selection query, not a lore, news, or wiki query.

This cluster should help a player decide:

- Should I play Warrior?
- Which Warrior starter build should I choose first?
- Is Warrior better for durability, slam gameplay, or fast leveling?
- Which Warrior skills belong on the first shortlist?

## Priority Page

Planned URL:

- `/builds/warrior`

Page type:

- Build cluster hub

Do not make this a long guide article. Make it a dense build-selection page.

## Player Decision

The player is deciding whether Warrior is the right starting class and which Warrior build to open first.

The page output should be:

- recommended first Warrior build
- who Warrior fits
- who should avoid Warrior
- key Warrior skills
- links to existing build and skill records

## Required Page Sections

1. Warrior build selector summary
   - default answer: Warrior Slam Starter
   - difficulty: Easy
   - playstyle: Durable slam melee

2. Best fit table
   - good for heavy melee players
   - good for players who want durability
   - bad for players who want fastest campaign speed

3. Existing build link
   - `/builds/poe2-warrior-slam-starter-build`

4. Skill links
   - `/skills/rolling-slam`
   - `/skills/boneshatter`
   - `/skills/earthquake`

5. Decision notes
   - choose Warrior if you value stability over speed
   - skip Warrior if mobility and fast clear are the priority

## Internal Link Plan

Inbound links:

- `/`
- `/builds`
- `/class-picker`
- `/skills/rolling-slam`
- `/skills/boneshatter`
- `/skills/earthquake`

Outbound links:

- `/builds/poe2-warrior-slam-starter-build`
- `/skills/rolling-slam`
- `/skills/boneshatter`
- `/skills/earthquake`
- `/builds/witch`
- `/guides/mercenary`

## Database Planning

Current data can support the first version.

Future build fields to consider:

- `cluster_slug`: `warrior`
- `primary_query`: `poe2 warrior builds`
- `decision_question`: `Which Warrior build should I start with?`
- `recommended_for`
- `avoid_if`

Future skill fields to consider:

- `class_cluster`: `warrior`
- `related_build_slug`: `poe2-warrior-slam-starter-build`

Do not add these fields until the first cluster pages are built or GSC confirms continuing Warrior demand.

## Do Not Build Yet

- Warrior DPS calculator
- Warrior passive tree planner
- Warrior endgame gear planner
- Warrior tier list
- separate pages for every Warrior variation

## Development Priority

Priority: 1

Reason: `poe2 warrior builds` is the cleanest build-cluster query and maps directly to an existing build page plus existing skills.
