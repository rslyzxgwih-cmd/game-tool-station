# Mercenary Guide Cluster Plan

Source signal: `poe2 mercenary guide`

## Strategic Read

Google is testing POE2StarterTools as a practical class guide source for Mercenary. Unlike Warrior and Witch, the query is guide-oriented rather than strictly build-list oriented.

This cluster should help a player decide:

- Is Mercenary a good first class?
- How does crossbow gameplay work at a high level?
- What starter build should I use?
- Which skills should I understand first?

## Priority Page

Planned URL:

- `/guides/mercenary`

Page type:

- Class guide hub

This should be a practical onboarding guide, not a news-style article.

## Player Decision

The player is deciding whether Mercenary is worth starting and how to avoid getting lost in crossbow skill choices.

The page output should be:

- whether Mercenary fits the player
- beginner difficulty
- recommended starter build
- core crossbow and grenade skills
- when to choose Mercenary over Warrior or Witch

## Required Page Sections

1. Mercenary fit summary
   - good for ranged players
   - good for tactical weapon feel
   - not ideal for players who dislike reload or ammo rhythm

2. Starter route
   - link to `/builds/poe2-mercenary-crossbow-starter-build`

3. Skill shortlist
   - `/skills/fragmentation-rounds`
   - `/skills/high-velocity-rounds`
   - `/skills/gas-grenade`
   - optional: `/skills/explosive-grenade`

4. First decisions
   - clear skill vs single-target skill
   - crossbow comfort vs bow simplicity
   - spacing and kiting before damage optimization

5. Compare against Warrior and Witch
   - Warrior: more durable melee
   - Witch: safer minion pacing

## Internal Link Plan

Inbound links:

- `/`
- `/builds`
- `/class-picker`
- `/builds/poe2-mercenary-crossbow-starter-build`
- `/skills/fragmentation-rounds`
- `/skills/high-velocity-rounds`
- `/skills/gas-grenade`

Outbound links:

- `/builds/poe2-mercenary-crossbow-starter-build`
- `/skills/fragmentation-rounds`
- `/skills/high-velocity-rounds`
- `/skills/gas-grenade`
- `/builds/warrior`
- `/builds/witch`

## Database Planning

Current data can support a first Mercenary guide page.

Future guide table to consider after first three cluster pages:

- `id`
- `title`
- `slug`
- `class`
- `primary_query`
- `decision_question`
- `content`

Do not create the `guides` table until a real guide page exists and GSC keeps showing guide intent.

Future skill fields to consider:

- `class_cluster`: `mercenary`
- `related_build_slug`: `poe2-mercenary-crossbow-starter-build`

## Do Not Build Yet

- Mercenary DPS calculator
- crossbow simulator
- advanced endgame gear guide
- all Mercenary skill pages rewritten
- generic `poe2 mercenary best build` page without a clear decision output

## Development Priority

Priority: 3

Reason: Query is guide-oriented and requires a new guide route. Build only after Warrior and Witch cluster plans are implemented or if GSC shows Mercenary impressions rising faster.
