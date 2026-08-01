import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BuildDetailV2, type BuildDetailV2Content } from "@/components/BuildDetailV2";
import { builds, getBuildBySlug, getSkillBySlug } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type Build = (typeof builds)[number];

const MERCENARY_CROSSBOW_SLUG = "poe2-mercenary-crossbow-starter-build";
const MERCENARY_RAPID_SHOT_SLUG = "poe2-mercenary-rapid-shot-build";
const SORCERESS_SPARK_STARTER_SLUG = "poe2-sorceress-spark-starter-build";
const BEGINNER_RANGED_STARTER_SLUG = "poe2-beginner-ranged-starter-build";
const WARRIOR_TOTEM_SLAM_SLUG = "poe2-warrior-totem-slam-build";
const DRUID_HYBRID_STARTER_SLUG = "poe2-druid-hybrid-starter-build";
const BEGINNER_MINION_WITCH_SLUG = "poe2-beginner-minion-witch-build";
const SORCERESS_RELATED_BUILD_SLUGS = [
  "poe2-sorceress-fireball-build",
  "poe2-sorceress-frostbolt-build",
  "poe2-sorceress-arc-build",
];

const mercenaryCrossbowSections = {
  snapshot: [
    { label: "Class", value: "Mercenary" },
    { label: "Playstyle", value: "Ranged crossbow with clear skill roles" },
    { label: "Difficulty", value: "Medium, beginner-readable if you keep the first setup small" },
    { label: "Core loop", value: "Clear packs, swap to boss damage, reposition before pressure reaches you" },
    { label: "Best next page", href: "/guides/mercenary/crossbow", value: "Crossbow leveling guide" },
  ],
  bestFor: [
    "Players who want a ranged starter with visible weapon impact.",
    "Beginners who can follow a simple three-job setup: clear, boss damage, escape.",
    "Returning ARPG players who like spacing, reload rhythm, and tactical positioning.",
  ],
  avoidIf: [
    "You want the lowest-input beginner build with almost no skill switching.",
    "You dislike reload rhythm, ammo-style pacing, or swapping between clear and single-target skills.",
    "You would rather play a passive minion route or a direct melee route.",
  ],
  strengths: [
    "Clear early identity: crossbow range, safe spacing, and direct weapon upgrades.",
    "Easy to diagnose problems because each skill has a specific job.",
    "Strong learning route for players who want to understand Mercenary before adding grenades.",
  ],
  weaknesses: [
    "Feels worse than expected if the crossbow weapon is underleveled.",
    "Can become clumsy when beginners add too many grenade or utility buttons too early.",
    "Less forgiving than the safest minion or tanky melee starters when positioning fails.",
  ],
  progression: [
    {
      title: "Early leveling tips",
      items: [
        "Use one clear skill for normal packs before adding extra damage packages.",
        "Keep a current crossbow equipped; weak weapon damage makes every other decision look worse.",
        "Use Escape Shot or another spacing answer before trying to trade hits.",
      ],
    },
    {
      title: "Mid-game progression",
      items: [
        "Add a focused single-target option when rares and act bosses stop dying quickly.",
        "Start adding control or grenade tools only after clear, boss damage, and escape feel stable.",
        "Upgrade defenses when deaths cost more time than slower damage does.",
      ],
    },
    {
      title: "Endgame priorities",
      items: [
        "Keep weapon upgrades, resistances, and defensive recovery ahead of luxury damage layers.",
        "Separate mapping comfort from boss damage so one skill is not expected to solve every job.",
        "Use the Mercenary hub to compare grenade, rapid-shot, and boss-focused routes after the starter loop works.",
      ],
    },
  ],
  priorities: [
    {
      title: "Gear priorities",
      items: [
        "Crossbow damage first, because every core skill scales from weapon feel.",
        "Resistances and life before extra offensive layers.",
        "Movement and recovery stats when positioning mistakes are causing deaths.",
      ],
    },
    {
      title: "Passive priorities",
      items: [
        "Take reliable crossbow or projectile damage before narrow conditional bonuses.",
        "Add defense early enough that boss learning does not become repeated deaths.",
        "Avoid splitting between too many damage types before the main crossbow route is stable.",
      ],
    },
    {
      title: "Skill progression",
      items: [
        "Start with pack clear.",
        "Add single-target damage for rares and bosses.",
        "Add escape or control before adding grenade layers.",
      ],
    },
  ],
  mistakes: [
    "Adding grenades before the basic crossbow loop feels stable.",
    "Ignoring weapon upgrades and trying to fix low damage with more buttons.",
    "Using the same skill for packs, rares, bosses, and survival instead of assigning clear jobs.",
    "Standing still too long because the build feels ranged.",
  ],
  links: [
    { href: "/builds/mercenary", label: "Mercenary Builds", note: "Parent hub for crossbow and grenade routes." },
    { href: "/guides/mercenary/crossbow", label: "Mercenary Crossbow Guide", note: "Use this for crossbow leveling workflow." },
    { href: "/builds/beginner", label: "Beginner Builds", note: "Compare safer first-character options." },
    { href: "/builds/easy", label: "Easy Builds", note: "Compare lower-friction starter routes." },
    { href: "/builds/crossbow-monk", label: "Crossbow Monk", note: "Compare if Monk identity is part of the decision." },
    { href: "/skills/fragmentation-rounds", label: "Fragmentation Rounds", note: "Pack-clear reference skill." },
    { href: "/skills/high-velocity-rounds", label: "High Velocity Rounds", note: "Single-target reference skill." },
    { href: "/skills/escape-shot", label: "Escape Shot", note: "Spacing and safety reference skill." },
  ],
  faqs: [
    {
      question: "Is Mercenary Crossbow good for beginners?",
      answer:
        "Yes, if you keep the build simple. Use one clear skill, one single-target skill, and one escape or control answer before adding extra tools.",
    },
    {
      question: "What should I upgrade first on a Mercenary Crossbow starter?",
      answer:
        "Upgrade the crossbow first. If the weapon falls behind, both clear and boss damage feel bad even when the skill setup is correct.",
    },
    {
      question: "When should this build add grenades?",
      answer:
        "Add grenades after the core crossbow loop already works. Beginners should solve clear, boss damage, and escape before adding more buttons.",
    },
    {
      question: "Is Mercenary Crossbow easier than Crossbow Monk?",
      answer:
        "Usually yes for crossbow-first players. Mercenary is cleaner when the main decision is ranged weapon gameplay, while Crossbow Monk is a hybrid comparison route.",
    },
    {
      question: "What is the most common beginner mistake?",
      answer:
        "The most common mistake is adding too many tools too early. Keep the starter setup focused, then expand once the leveling loop feels stable.",
    },
  ],
};

const mercenaryCrossbowV2Content: BuildDetailV2Content = {
  eyebrow: "MERCENARY CROSSBOW STARTER",
  intro:
    "A ranged starter route for players who want visible weapon impact, clear crossbow skill roles, and practical progression decisions. Keep the setup focused around pack clear, boss damage, and spacing before adding grenades or extra tools.",
  badges: ["Mercenary", "Crossbow", "Starter", "Decision Guide"],
  heroImage: {
    src: "/images/builds/mercenary.webp",
    alt: "Mercenary with a crossbow in a dark battlefield scene",
  },
  snapshotCaption: "Ranged crossbow starter",
  snapshot: [
    { label: "Class", value: "Mercenary" },
    { label: "Playstyle", value: "Ranged crossbow with clear skill roles" },
    { label: "Difficulty", value: "Medium, beginner-readable if you keep the first setup small" },
    { label: "Core loop", value: "Clear packs, swap to boss damage, reposition before pressure reaches you" },
    { label: "Main Strength", value: "Clear separation between pack clear, boss damage, and escape tools." },
  ],
  chooseThisBuild: mercenaryCrossbowSections.bestFor,
  avoidThisBuild: mercenaryCrossbowSections.avoidIf,
  whyTitle: "Why This Build Works",
  whyParagraphs: [
    "The Mercenary Crossbow starter works because each skill has a readable job. One part of the setup handles normal packs, another handles tougher targets, and spacing tools prevent ranged play from turning into standing still.",
    "This makes the build easier for beginners to diagnose. If packs are slow, improve the clear tool. If rares or bosses are slow, improve the single-target option. If deaths are the problem, upgrade defenses and movement habits before adding more damage buttons.",
    "The route also gives returning players a clean way to learn Mercenary without immediately turning the character into a complicated grenade setup.",
  ],
  coreSkills: [
    {
      name: "Fragmentation Rounds",
      href: "/skills/fragmentation-rounds",
      role: "Pack clear",
      copy: "Use Fragmentation Rounds as the pack-clear reference point when normal enemies need focused crossbow coverage.",
    },
    {
      name: "High Velocity Rounds",
      href: "/skills/high-velocity-rounds",
      role: "Tough-enemy damage",
      copy: "Use High Velocity Rounds when rares or bosses need a more deliberate single-target answer.",
    },
    {
      name: "Escape Shot",
      href: "/skills/escape-shot",
      role: "Spacing and safety",
      copy: "Use Escape Shot before trying to trade hits. A ranged build still needs a clear way to reset distance.",
    },
  ],
  levelingTitle: "Beginner Progression Route",
  levelingRoute: mercenaryCrossbowSections.progression.map((group) => ({
    title: group.title,
    copy: group.items.join(" "),
  })),
  levelingNote:
    "Keep the first setup small: one clear skill, one tough-enemy skill, and one spacing answer before adding more mechanics.",
  upgradePriorities: mercenaryCrossbowSections.priorities.flatMap((group) =>
    group.items.slice(0, 1).map((item) => `${group.title}: ${item}`),
  ),
  strengths: mercenaryCrossbowSections.strengths,
  tradeoffs: mercenaryCrossbowSections.weaknesses,
  relatedBuildsTitle: "Related Builds",
  relatedReasonFor: (_slug, playstyle) =>
    `Compare this ${playstyle.toLowerCase()} route if you want another ranged, beginner, or Mercenary direction.`,
  ctaEyebrow: "Build Diagnosis",
  ctaTitle: "Need to Compare Before Starting?",
  ctaCopy: "Return to the Build Finder to compare crossbow, beginner, Monk, and other starter routes.",
  primaryCta: {
    label: "Compare POE2 Builds",
    href: "/builds#featured-builds",
  },
  secondaryCta: {
    label: "Use the Build Finder",
    href: "/builds",
  },
};

const sorceressSparkV2Content: BuildDetailV2Content = {
  eyebrow: "SORCERESS SPELL STARTER",
  intro:
    "A focused ranged spell route for players who want Spark as the main identity and prefer adding supporting tools gradually.",
  badges: ["Sorceress", "Ranged Spell", "Beginner Friendly", "Focused Progression"],
  heroImage: {
    src: "/images/builds/invoker.webp",
    alt: "Sorceress caster channeling blue magic in a dark fantasy scene",
  },
  snapshotCaption: "Ranged spell starter",
  snapshot: [
    { label: "Class", value: "Sorceress" },
    { label: "Playstyle", value: "Lightning spell clear" },
    { label: "Difficulty", value: "Easy" },
    { label: "Main Skill", value: "Spark" },
    { label: "Best For", value: "Players who prefer ranged spell combat and focused progression." },
    { label: "Main Strength", value: "One recognisable main skill with gradual supporting-tool choices." },
  ],
  chooseThisBuild: [
    "You prefer ranged spell combat.",
    "You want Spark to remain the clear main skill.",
    "You prefer adding supporting tools gradually.",
    "You want a focused caster starting direction.",
  ],
  avoidThisBuild: [
    "You prefer melee or weapon-first combat.",
    "You dislike projectile-based spell play.",
    "You want a physical attack route.",
    "You prefer a slower and more deliberate combat rhythm.",
  ],
  whyTitle: "Why This Route Works",
  whyParagraphs: [
    "Spark defines the route's ranged spell identity. That gives the character a clear starting point instead of asking the player to learn several unrelated mechanics at once.",
    "Orb of Storms and Flame Wall can be introduced as separate supporting tools after Spark already feels comfortable. They do not need to replace the main identity of the route.",
    "The route stays readable because it avoids splitting attention across too many mechanics early. Add another tool only when it solves a clear play problem.",
  ],
  coreSkills: [
    {
      name: "Spark",
      href: "/skills/spark",
      role: "Main ranged spell identity",
      copy: "Use Spark as the main identity of this Sorceress starter route. Keep the early plan focused around this spell before adding extra tools.",
    },
    {
      name: "Orb of Storms",
      href: "/skills/orb-of-storms",
      role: "Additional spell tool",
      copy: "Compare Orb of Storms when you want another spell option beside Spark. Treat it as an added tool, not a replacement for the route.",
    },
    {
      name: "Flame Wall",
      href: "/skills/flame-wall",
      role: "Optional supporting spell tool",
      copy: "Compare Flame Wall as an optional caster tool if you want to explore a different supporting spell choice while keeping the route focused.",
    },
  ],
  levelingTitle: "Safe Progression Route",
  levelingRoute: [
    {
      title: "Establish Spark",
      copy: "Start by keeping Spark as the main spell identity. Make the route easy to read before adding more buttons.",
    },
    {
      title: "Add Supporting Tools",
      copy: "Introduce Orb of Storms, Flame Wall, or another spell tool only when it solves a clear problem in how the route feels.",
    },
    {
      title: "Stabilise the Route",
      copy: "Improve survivability when deaths interrupt progression. A simple spell route still needs enough stability to keep moving forward.",
    },
    {
      title: "Consider Specialisation Later",
      copy: "Compare other Sorceress spell routes only after you understand whether Spark still matches the playstyle you want.",
    },
  ],
  levelingNote:
    "Use this as a conservative starting direction, then specialise later when the route feels stable.",
  upgradePriorities: [
    "Keep the main spell route functional.",
    "Improve survivability when deaths interrupt progression.",
    "Add secondary tools only when they solve a clear problem.",
    "Avoid splitting resources across too many mechanics early.",
  ],
  strengths: [
    "Clear ranged spell identity",
    "One recognisable main skill",
    "Gradual supporting-tool progression",
    "Beginner-readable decisions",
  ],
  tradeoffs: [
    "This route is not ideal if you prefer melee or weapon-first combat.",
    "Projectile-based spell play may not suit players who prefer direct physical attacks.",
    "The focused caster direction can feel too narrow if you want to experiment immediately.",
  ],
  relatedBuildsTitle: "Related Builds",
  relatedReasonFor: (_slug, playstyle) =>
    `Compare this ${playstyle.toLowerCase()} Sorceress route if Spark is not the spell pacing you want.`,
  ctaEyebrow: "Build Diagnosis",
  ctaTitle: "Not Sure Spark Is the Right Spell Route?",
  ctaCopy: "Compare other POE2 builds or use the Build Finder before committing to your first caster route.",
  primaryCta: {
    label: "Compare POE2 Builds",
    href: "/builds#featured-builds",
  },
  secondaryCta: {
    label: "Use the Build Finder",
    href: "/builds",
  },
};

const guideCredibilityLine =
  "Updated: July 2026 | Guide scope: build choice, skill roles, and progression priorities";

const beginnerRangedV2Content: BuildDetailV2Content = {
  eyebrow: "BEGINNER RANGED STARTER",
  intro:
    "A simple Ranger route for first characters that keeps Lightning Arrow at the center and uses mobility and area coverage as supporting jobs.",
  badges: ["Ranger", "Ranged", "Easy", "First Character"],
  heroImage: {
    src: "/images/builds/lightning-arrow.webp",
    alt: "Ranger firing a lightning arrow across a dark battlefield",
  },
  credibilityLine: guideCredibilityLine,
  snapshotCaption: "Beginner ranged starter",
  snapshot: [
    { label: "Class", value: "Ranger" },
    { label: "Playstyle", value: "Beginner ranged starter" },
    { label: "Difficulty", value: "Easy" },
    { label: "Main Skill", value: "Lightning Arrow" },
    { label: "Best For", value: "Players who want a simple ranged first character." },
    { label: "Main Strength", value: "Clear skill roles with room to reposition." },
  ],
  chooseThisBuild: [
    "You want a ranged first character.",
    "You prefer direct bow attacks over minion or melee management.",
    "You want one main skill with mobility and area coverage beside it.",
  ],
  avoidThisBuild: [
    "You want minions to handle most combat pressure.",
    "You prefer heavy melee and close-range impact.",
  ],
  whyTitle: "Why This Route Works",
  whyParagraphs: [
    "Lightning Arrow gives the route one clear main skill. That keeps early decisions readable while the player learns positioning and ranged combat.",
    "Escape Shot has a separate mobility role, while Rain of Arrows adds area coverage. Each skill answers a different need instead of competing for the same job.",
    "The route stays beginner-friendly when upgrades support the main bow identity first and extra mechanics are added only when they solve a clear progression problem.",
  ],
  coreSkills: [
    {
      name: "Lightning Arrow",
      href: "/skills/lightning-arrow",
      role: "Main ranged skill",
      copy: "Keep Lightning Arrow as the primary combat identity so the first character has one clear damage direction.",
    },
    {
      name: "Escape Shot",
      href: "/skills/escape-shot",
      role: "Repositioning tool",
      copy: "Use Escape Shot when distance and positioning matter more than adding another damage button.",
    },
    {
      name: "Rain of Arrows",
      href: "/skills/rain-of-arrows",
      role: "Area coverage",
      copy: "Use Rain of Arrows when wider pack coverage is the specific problem the main skill is not solving.",
    },
  ],
  levelingTitle: "Safe Progression Route",
  levelingRoute: [
    {
      title: "Establish Lightning Arrow",
      copy: "Use Lightning Arrow as the main identity before adding unrelated damage packages.",
    },
    {
      title: "Add Movement and Coverage",
      copy: "Bring in Escape Shot for positioning and Rain of Arrows when wider coverage becomes useful.",
    },
    {
      title: "Stabilize the Character",
      copy: "Prioritize defensive upgrades whenever deaths interrupt campaign progress more than damage does.",
    },
    {
      title: "Specialize After the Core Loop Works",
      copy: "Compare other Ranger routes only after the main skill, movement, and coverage roles feel clear.",
    },
  ],
  levelingNote:
    "Keep the initial setup narrow: one main ranged skill, one movement answer, and one area-coverage option.",
  upgradePriorities: [
    "Keep the main bow skill functional.",
    "Improve survivability when deaths slow progression.",
    "Add movement and area coverage only for clear play problems.",
    "Avoid splitting upgrades across several damage directions early.",
  ],
  strengths: [
    "Clear ranged identity",
    "Beginner-readable skill roles",
    "Simple first-character direction",
    "Mobility and area coverage options",
  ],
  tradeoffs: [
    "The route expects the player to manage distance rather than rely on minions or heavy melee contact.",
    "Players who dislike active repositioning may prefer a lower-pressure starter.",
  ],
  relatedBuildsTitle: "Related Builds",
  relatedReasonFor: (_slug, playstyle) =>
    `Compare this ${playstyle.toLowerCase()} route if you want a different first-character combat style.`,
  ctaEyebrow: "Build Diagnosis",
  ctaTitle: "Want to Compare Other Starter Routes?",
  ctaCopy: "Return to the Build Finder to compare ranged, minion, melee, and hybrid starting directions.",
  primaryCta: {
    label: "Compare POE2 Builds",
    href: "/builds#featured-builds",
  },
  secondaryCta: {
    label: "Use the Build Finder",
    href: "/builds",
  },
};

const warriorTotemSlamV2Content: BuildDetailV2Content = {
  eyebrow: "WARRIOR TOTEM BUILD",
  intro:
    "A Warrior route for players who want heavy melee supported by placed totem pressure, with each skill kept in a clear combat role.",
  badges: ["Warrior", "Melee", "Medium", "Totem Assisted"],
  heroImage: {
    src: "/images/hero-bg.webp",
    alt: "Ruined dark fantasy battlefield with distant fire and fog",
  },
  credibilityLine: guideCredibilityLine,
  snapshotCaption: "Totem-assisted melee route",
  snapshot: [
    { label: "Class", value: "Warrior" },
    { label: "Playstyle", value: "Totem assisted melee" },
    { label: "Difficulty", value: "Medium" },
    { label: "Main Skill", value: "Shockwave Totem" },
    { label: "Best For", value: "Players who want placed damage beside heavy melee." },
    { label: "Main Strength", value: "Separate placed pressure and direct melee roles." },
  ],
  chooseThisBuild: [
    "You like heavy melee with an additional placed damage tool.",
    "You are comfortable choosing when to place a totem and when to attack directly.",
    "You want a Warrior route with distinct skill jobs.",
  ],
  avoidThisBuild: [
    "You dislike placing support skills during combat.",
    "You want every action to come from one direct melee button.",
  ],
  whyTitle: "Why This Route Works",
  whyParagraphs: [
    "Shockwave Totem gives the route a placed-damage identity while the Warrior continues using direct slam skills. The roles are complementary rather than interchangeable.",
    "Earthquake and Rolling Slam keep the melee side of the route understandable. They let the player compare direct impact with the additional pressure created by the totem.",
    "The route is easiest to manage when the player establishes one reliable melee action first, then uses the totem where placed pressure clearly helps.",
  ],
  coreSkills: [
    {
      name: "Shockwave Totem",
      href: "/skills/shockwave-totem",
      role: "Placed damage support",
      copy: "Use Shockwave Totem to add pressure while you reposition or continue the direct melee loop.",
    },
    {
      name: "Earthquake",
      href: "/skills/earthquake",
      role: "Heavy melee option",
      copy: "Use Earthquake as a deliberate melee choice when the route needs direct heavy impact.",
    },
    {
      name: "Rolling Slam",
      href: "/skills/rolling-slam",
      role: "Active melee pressure",
      copy: "Use Rolling Slam as another direct Warrior action without asking the totem to solve every combat job.",
    },
  ],
  levelingTitle: "Safe Progression Route",
  levelingRoute: [
    {
      title: "Establish Direct Melee",
      copy: "Start with a clear melee action so the route works before the placed-damage layer is required.",
    },
    {
      title: "Introduce the Totem Role",
      copy: "Add Shockwave Totem when extra placed pressure helps, rather than placing it without a specific purpose.",
    },
    {
      title: "Keep Both Roles Readable",
      copy: "Use the totem for support and the slam skills for direct action instead of adding more overlapping mechanics.",
    },
    {
      title: "Stabilize Progression",
      copy: "Improve defenses whenever repeated deaths make the two-part combat loop difficult to maintain.",
    },
  ],
  levelingNote:
    "The route is clearest when direct melee remains functional and the totem adds a separate, deliberate layer.",
  upgradePriorities: [
    "Keep the direct melee route usable.",
    "Add the totem when placed pressure solves a clear need.",
    "Improve defenses when close-range play interrupts progress.",
    "Avoid adding extra mechanics before the melee and totem roles are stable.",
  ],
  strengths: [
    "Distinct melee and totem roles",
    "Clear Warrior identity",
    "Placed pressure beside direct attacks",
    "Progression choices with visible purpose",
  ],
  tradeoffs: [
    "The route asks you to manage both placement and direct melee timing.",
    "Players who want a single-action combat loop may prefer a more direct Warrior route.",
  ],
  relatedBuildsTitle: "Related Builds",
  relatedReasonFor: (_slug, playstyle) =>
    `Compare this ${playstyle.toLowerCase()} route if you want a different balance of direct melee and supporting tools.`,
  ctaEyebrow: "Build Diagnosis",
  ctaTitle: "Not Sure a Totem Route Fits Your Warrior?",
  ctaCopy: "Compare other POE2 builds or return to the Build Finder before choosing a melee direction.",
  primaryCta: {
    label: "Compare POE2 Builds",
    href: "/builds#featured-builds",
  },
  secondaryCta: {
    label: "Use the Build Finder",
    href: "/builds",
  },
};

const druidHybridV2Content: BuildDetailV2Content = {
  eyebrow: "DRUID HYBRID STARTER",
  intro:
    "A flexible Druid starting route for players who want a hybrid melee-and-spell identity and can keep one side of the build primary while learning.",
  badges: ["Druid", "Hybrid", "Medium", "Flexible Route"],
  heroImage: {
    src: "/images/hero-bg.webp",
    alt: "Ancient ruined landscape with mist and blue fire",
  },
  credibilityLine: guideCredibilityLine,
  snapshotCaption: "Hybrid melee and spell starter",
  snapshot: [
    { label: "Class", value: "Druid" },
    { label: "Playstyle", value: "Hybrid melee spell" },
    { label: "Difficulty", value: "Medium" },
    { label: "Core Direction", value: "Choose melee-first or spell-first" },
    { label: "Best For", value: "Hybrid players, experimenters, and returning players." },
    { label: "Main Strength", value: "Flexible skill roles once one primary direction is chosen." },
  ],
  chooseThisBuild: [
    "You enjoy combining melee and spell tools.",
    "You can choose one primary direction before expanding the setup.",
    "You value flexibility more than a one-button starter route.",
  ],
  avoidThisBuild: [
    "You want the most direct and documented one-skill route.",
    "You dislike making choices between melee-first and spell-first progression.",
  ],
  whyTitle: "Why This Route Works",
  whyParagraphs: [
    "The Druid hybrid route offers both melee and spell tools, but it stays readable only when one direction leads. Choosing melee-first or spell-first gives early upgrades a clear purpose.",
    "Frostbolt, Earthquake, and Orb of Storms represent different jobs rather than a demand to scale everything equally. Use the skills that support the chosen primary loop.",
    "The route suits players who want experimentation without immediate complexity. Delay the wider hybrid decisions until the first combat loop feels stable.",
  ],
  coreSkills: [
    {
      name: "Frostbolt",
      href: "/skills/frostbolt",
      role: "Ranged spell option",
      copy: "Use Frostbolt when the spell side is the primary direction or when ranged pressure solves a clear gap.",
    },
    {
      name: "Earthquake",
      href: "/skills/earthquake",
      role: "Direct melee option",
      copy: "Use Earthquake when heavy melee is the primary route rather than splitting attention evenly from the start.",
    },
    {
      name: "Orb of Storms",
      href: "/skills/orb-of-storms",
      role: "Additional spell tool",
      copy: "Add Orb of Storms when it has a defined supporting role beside the chosen main direction.",
    },
  ],
  levelingTitle: "Safe Progression Route",
  levelingRoute: [
    {
      title: "Choose the Primary Side",
      copy: "Decide whether the route begins melee-first or spell-first so early upgrades are not split without purpose.",
    },
    {
      title: "Build One Stable Loop",
      copy: "Keep the chosen main skill direction functional before adding the other side of the hybrid setup.",
    },
    {
      title: "Add a Supporting Role",
      copy: "Introduce another skill only when it solves range, pressure, or control that the main loop lacks.",
    },
    {
      title: "Expand Carefully",
      copy: "Compare broader hybrid choices after survival and the primary combat loop are stable.",
    },
  ],
  levelingNote:
    "A hybrid route is easier to learn when one side leads and every additional skill has a specific supporting job.",
  upgradePriorities: [
    "Choose melee-first or spell-first before splitting upgrades.",
    "Keep the primary combat loop functional.",
    "Improve survivability when experimentation interrupts progression.",
    "Add the second side of the hybrid route only for a defined role.",
  ],
  strengths: [
    "Flexible melee and spell identity",
    "Room for experimentation",
    "Clear choice between two starting directions",
    "Supporting skills with distinct roles",
  ],
  tradeoffs: [
    "The route requires more early decision-making than a pure melee or pure spell starter.",
    "Splitting upgrades too soon can make the character direction harder to understand.",
  ],
  relatedBuildsTitle: "Related Builds",
  relatedReasonFor: (_slug, playstyle) =>
    `Compare this ${playstyle.toLowerCase()} route if you want a more focused alternative to hybrid progression.`,
  ctaEyebrow: "Build Diagnosis",
  ctaTitle: "Want a More Focused Starting Route?",
  ctaCopy: "Use the Build Finder to compare hybrid, melee, ranged, spell, and minion directions.",
  primaryCta: {
    label: "Compare POE2 Builds",
    href: "/builds#featured-builds",
  },
  secondaryCta: {
    label: "Use the Build Finder",
    href: "/builds",
  },
};

const beginnerMinionWitchV2Content: BuildDetailV2Content = {
  eyebrow: "BEGINNER MINION WITCH",
  intro:
    "A low-pressure Witch starter for players who want summons to create space while they learn positioning, survival, and basic progression decisions.",
  badges: ["Witch", "Summoner", "Easy", "First Character"],
  heroImage: {
    src: "/images/builds/invoker.webp",
    alt: "Witch caster surrounded by blue magic in a dark fantasy scene",
  },
  credibilityLine: guideCredibilityLine,
  snapshotCaption: "Low-pressure summoner starter",
  snapshot: [
    { label: "Class", value: "Witch" },
    { label: "Playstyle", value: "Safe summoner" },
    { label: "Difficulty", value: "Easy" },
    { label: "Core Skills", value: "Skeletal Warrior, Skeletal Sniper, Raise Spectre" },
    { label: "Best For", value: "First characters, boss learning, and players who dislike melee risk." },
    { label: "Main Strength", value: "Minions create space while the player learns." },
  ],
  chooseThisBuild: [
    "You want summons to create space during combat.",
    "You prefer a lower-pressure first character.",
    "You want time to learn positioning and survival decisions.",
  ],
  avoidThisBuild: [
    "You want direct weapon damage to be the main identity.",
    "You dislike managing minions and their supporting roles.",
  ],
  whyTitle: "Why This Route Works",
  whyParagraphs: [
    "The minion route reduces the need for the player to handle every source of pressure directly. That creates more room to learn positioning and progression.",
    "Skeletal Warrior, Skeletal Sniper, and Raise Spectre give the build a clear summoner identity. Keep minion survival and count useful before chasing extra complexity.",
    "The route remains beginner-friendly when the player adds only one direct support action for tougher enemies and upgrades personal defenses whenever deaths interrupt progress.",
  ],
  coreSkills: [
    {
      name: "Skeletal Warrior",
      href: "/skills/skeletal-warrior",
      role: "Front-line minion",
      copy: "Use Skeletal Warrior as part of the front line that creates space between the Witch and nearby pressure.",
    },
    {
      name: "Skeletal Sniper",
      href: "/skills/skeletal-sniper",
      role: "Ranged minion pressure",
      copy: "Use Skeletal Sniper to add a ranged minion role without changing the route into direct weapon combat.",
    },
    {
      name: "Raise Spectre",
      href: "/skills/raise-spectre",
      role: "Summoner support option",
      copy: "Use Raise Spectre as another minion option once the basic summoner loop and personal positioning feel stable.",
    },
  ],
  levelingTitle: "Safe Progression Route",
  levelingRoute: [
    {
      title: "Establish the Minion Front Line",
      copy: "Prioritize a clear summoner identity before adding unrelated direct-damage mechanics.",
    },
    {
      title: "Support Tougher Encounters",
      copy: "Keep one curse or direct support action available when rare enemies need more focused attention.",
    },
    {
      title: "Protect Progression",
      copy: "Upgrade personal defenses whenever deaths slow the campaign more than another minion damage choice would help.",
    },
    {
      title: "Expand the Minion Setup Carefully",
      copy: "Add another minion role only after the basic front line and positioning decisions feel manageable.",
    },
  ],
  levelingNote:
    "Keep the first summoner route readable: establish minions, protect the Witch, then add supporting decisions gradually.",
  upgradePriorities: [
    "Keep minion count and survival useful.",
    "Improve personal defenses when deaths interrupt progression.",
    "Maintain one focused support action for tougher enemies.",
    "Avoid adding unrelated damage mechanics before the summoner loop is stable.",
  ],
  strengths: [
    "Low-pressure first-character direction",
    "Minions create combat space",
    "Clear summoner identity",
    "Room to learn positioning and survival",
  ],
  tradeoffs: [
    "The route includes minion management instead of direct weapon control.",
    "Players who want every hit to come from their own character may prefer a ranged or melee starter.",
  ],
  relatedBuildsTitle: "Related Builds",
  relatedReasonFor: (_slug, playstyle) =>
    `Compare this ${playstyle.toLowerCase()} route if you want a different balance of safety, direct control, and progression complexity.`,
  ctaEyebrow: "Build Diagnosis",
  ctaTitle: "Want to Compare Other Beginner Builds?",
  ctaCopy: "Return to the Build Finder to compare minion, ranged, melee, spell, and hybrid starter routes.",
  primaryCta: {
    label: "Compare Beginner Builds",
    href: "/builds/beginner",
  },
  secondaryCta: {
    label: "Use the Build Finder",
    href: "/builds",
  },
};

export function generateStaticParams() {
  return builds.map((build) => ({ slug: build.slug }));
}

function skillNameToSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function relatedBuildsFor(build: Build) {
  const sameClass = builds.filter((item) => item.slug !== build.slug && item.class === build.class);
  const fallback = builds.filter((item) => item.slug !== build.slug);

  return [...sameClass, ...fallback]
    .filter((item, index, list) => list.findIndex((candidate) => candidate.slug === item.slug) === index)
    .slice(0, 3);
}

function heroImageForBuild(build: Build) {
  if (build.class === "Mercenary") {
    return {
      src: "/images/builds/mercenary.webp",
      alt: "Mercenary crossbow build in a dark fantasy battlefield",
    };
  }

  if (build.class === "Monk") {
    return {
      src: "/images/builds/monk.webp",
      alt: "Monk build using lightning martial power",
    };
  }

  if (build.class === "Ranger" || build.playstyle.toLowerCase().includes("bow")) {
    return {
      src: "/images/builds/lightning-arrow.webp",
      alt: "Ranger build firing a lightning arrow",
    };
  }

  if (build.class === "Sorceress" || build.class === "Witch") {
    return {
      src: "/images/builds/invoker.webp",
      alt: "Caster build channeling blue magic",
    };
  }

  return {
    src: "/images/hero-bg.webp",
    alt: "Dark fantasy POE2 battlefield background",
  };
}

function safeAvoidItems(build: Build) {
  const blockedPhrases = ["passive tree planner", "patch-sensitive", "exact patch", "exact dps", "dps math"];
  const filtered = build.notFor.filter((item) => {
    const normalized = item.toLowerCase();

    return !blockedPhrases.some((phrase) => normalized.includes(phrase));
  });

  if (filtered.length > 0) {
    return filtered.slice(0, 3);
  }

  return [
    `You do not enjoy ${build.playstyle.toLowerCase()} pacing.`,
    `You want a different ${build.class} identity before committing to this route.`,
  ];
}

function roleForSkill(skillName: string, index: number) {
  if (index === 0) {
    return "Main build identity";
  }

  if (/escape|disengage|shield|time of need|chains|enfeeble/i.test(skillName)) {
    return "Safety or control tool";
  }

  if (/bell|snipe|high velocity|boneshatter|perfect strike/i.test(skillName)) {
    return "Tough-enemy payoff";
  }

  return "Supporting skill role";
}

function makeGenericBuildV2Content(build: Build): BuildDetailV2Content {
  const mainSkill = build.coreSkills[0] ?? "the main skill";
  const supportSkills = build.coreSkills.slice(1, 4);
  const safeAvoid = safeAvoidItems(build);

  return {
    eyebrow: `${build.class.toUpperCase()} BUILD GUIDE`,
    intro:
      `${build.title} is a ${build.playstyle.toLowerCase()} route for players deciding whether this ${build.class} setup matches their next character. Keep the starter setup focused around ${mainSkill}, then add supporting skills only when they solve a clear progression problem.`,
    badges: [build.class, build.playstyle, build.difficulty, "V2 Guide"],
    heroImage: heroImageForBuild(build),
    credibilityLine: guideCredibilityLine,
    snapshotCaption: build.playstyle,
    snapshot: [
      { label: "Class", value: build.class },
      { label: "Playstyle", value: build.playstyle },
      { label: "Difficulty", value: build.difficulty },
      { label: "Main Skill", value: mainSkill },
      { label: "Best For", value: build.goodFor[0] ?? build.promise },
      { label: "Main Strength", value: "A clear skill identity with practical progression priorities." },
    ],
    chooseThisBuild: build.goodFor.slice(0, 4),
    avoidThisBuild: safeAvoid,
    whyTitle: "Why This Route Works",
    whyParagraphs: [
      `${mainSkill} gives this build a clear first job. A good POE2 starter route should be easy to diagnose: one main action, a small number of support tools, and upgrades that reinforce the same character direction.`,
      supportSkills.length > 0
        ? `${supportSkills.join(", ")} support the route when a specific problem appears. Add them for coverage, safety, or tougher enemies instead of filling the skill bar with overlapping jobs.`
        : "The route is strongest when the first combat loop stays readable before extra mechanics are added.",
      "The best decision is not whether the build is perfect on paper. The useful question is whether it matches how you want to play, how much complexity you want to manage, and what problem your current character needs to solve next.",
    ],
    coreSkills: build.coreSkills.slice(0, 4).map((skillName, index) => {
      const skill = getSkillBySlug(skillNameToSlug(skillName));

      return {
        name: skillName,
        href: skill ? `/skills/${skill.slug}` : undefined,
        role: roleForSkill(skillName, index),
        copy:
          index === 0
            ? `Use ${skillName} as the main identity of this route before adding extra mechanics.`
            : `Use ${skillName} when it solves a specific support job for the ${mainSkill} route.`,
      };
    }),
    levelingTitle: "Safe Progression Route",
    levelingRoute: [
      {
        title: "Establish the Main Skill",
        copy: build.levelingPlan[0] ?? `Start by making ${mainSkill} feel reliable before adding extra tools.`,
      },
      {
        title: "Add Support Only for a Reason",
        copy:
          build.levelingPlan[1] ??
          "Add the next skill when clear, control, safety, or tougher enemies expose a real gap in the route.",
      },
      {
        title: "Stabilize Defenses",
        copy:
          build.levelingPlan[2] ??
          "Upgrade defenses whenever deaths cost more time than another small damage increase saves.",
      },
      {
        title: "Transition Carefully",
        copy:
          "After the core loop works, compare related builds before changing the class identity, damage type, or combat rhythm.",
      },
    ],
    levelingNote:
      "Use this V2 page as a build-choice guide: it explains skill roles and progression priorities without making patch-specific power claims.",
    upgradePriorities: [
      `Keep ${mainSkill} functional before scaling side mechanics.`,
      "Upgrade defenses when deaths interrupt progression.",
      "Add coverage or control only when the current route clearly needs it.",
      "Compare related builds before changing the whole character direction.",
    ],
    strengths: [
      `Clear ${build.class} identity`,
      `${build.playstyle} decision path`,
      "Readable skill roles",
      "Beginner-friendly progression checkpoints",
    ],
    tradeoffs: [
      `This route is less suitable if you do not enjoy ${build.playstyle.toLowerCase()} gameplay.`,
      "The build should stay focused early; adding too many unrelated skills can make progression harder to read.",
    ],
    relatedBuildsTitle: "Related Builds",
    relatedReasonFor: (_slug, playstyle) =>
      `Compare this ${playstyle.toLowerCase()} route if you want another way to solve the same class or progression decision.`,
    ctaEyebrow: "Build Diagnosis",
    ctaTitle: "Need a Different Route?",
    ctaCopy: "Return to the Build Finder to compare other POE2 builds before committing to your next character.",
    primaryCta: {
      label: "Compare POE2 Builds",
      href: "/builds#featured-builds",
    },
    secondaryCta: {
      label: "Use the Build Finder",
      href: "/builds",
    },
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const build = getBuildBySlug(slug);

  if (!build) {
    return {};
  }

  return {
    title: `${build.title} – Best POE2 Build Guide (Leveling + Endgame)`,
    description: `Best POE2 build guide for ${build.class} leveling and endgame using ${build.coreSkills
      .slice(0, 2)
      .join(" and ")}.`,
    alternates: {
      canonical: `/builds/${build.slug}`,
    },
  };
}

export default async function BuildDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const build = getBuildBySlug(slug);

  if (!build) {
    notFound();
  }

  const relatedBuilds = relatedBuildsFor(build);
  const isMercenaryCrossbowWinner = build.slug === MERCENARY_CROSSBOW_SLUG;
  const isMercenaryRapidShot = build.slug === MERCENARY_RAPID_SHOT_SLUG;
  const isSorceressSparkStarter = build.slug === SORCERESS_SPARK_STARTER_SLUG;
  const v2ContentBySlug: Partial<Record<string, BuildDetailV2Content>> = {
    [MERCENARY_CROSSBOW_SLUG]: mercenaryCrossbowV2Content,
    [BEGINNER_RANGED_STARTER_SLUG]: beginnerRangedV2Content,
    [WARRIOR_TOTEM_SLAM_SLUG]: warriorTotemSlamV2Content,
    [DRUID_HYBRID_STARTER_SLUG]: druidHybridV2Content,
    [BEGINNER_MINION_WITCH_SLUG]: beginnerMinionWitchV2Content,
  };

  if (isMercenaryRapidShot) {
    return (
      <BuildDetailV2
        build={{
          title: build.title,
          class: build.class,
          playstyle: build.playstyle,
          difficulty: build.difficulty,
        }}
        relatedBuilds={relatedBuilds.map(({ slug, title, playstyle }) => ({ slug, title, playstyle }))}
      />
    );
  }

  if (isSorceressSparkStarter) {
    const relatedSorceressBuilds = SORCERESS_RELATED_BUILD_SLUGS.map((relatedSlug) => getBuildBySlug(relatedSlug)).filter(
      (item): item is Build => Boolean(item),
    );

    return (
      <BuildDetailV2
        build={{
          title: build.title,
          class: build.class,
          playstyle: build.playstyle,
          difficulty: build.difficulty,
        }}
        relatedBuilds={relatedSorceressBuilds.map(({ slug, title, playstyle }) => ({ slug, title, playstyle }))}
        content={sorceressSparkV2Content}
      />
    );
  }

  const v2Content = v2ContentBySlug[build.slug] ?? makeGenericBuildV2Content(build);

  return (
    <BuildDetailV2
      build={{
        title: build.title,
        class: build.class,
        playstyle: build.playstyle,
        difficulty: build.difficulty,
      }}
      relatedBuilds={relatedBuilds.map(({ slug, title, playstyle }) => ({ slug, title, playstyle }))}
      content={v2Content}
    />
  );
}
