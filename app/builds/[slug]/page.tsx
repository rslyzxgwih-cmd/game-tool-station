import type { Metadata } from "next";
import Link from "next/link";
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
        "The most common mistake is adding too many tools too early. Keep the first version focused, then expand once the leveling loop feels stable.",
    },
  ],
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

  const coreSkills = build.coreSkills.slice(0, 4);
  const levelingPath = build.levelingPlan.slice(0, 5);
  const reasons = build.goodFor.slice(0, 3);
  const relatedBuilds = relatedBuildsFor(build);
  const isMercenaryCrossbowWinner = build.slug === MERCENARY_CROSSBOW_SLUG;
  const isMercenaryRapidShot = build.slug === MERCENARY_RAPID_SHOT_SLUG;
  const isSorceressSparkStarter = build.slug === SORCERESS_SPARK_STARTER_SLUG;
  const v2ContentBySlug: Partial<Record<string, BuildDetailV2Content>> = {
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

  const v2Content = v2ContentBySlug[build.slug];

  if (v2Content) {
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

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-black leading-tight text-ink md:text-4xl">{build.title}</h1>

      {isMercenaryCrossbowWinner ? (
        <section className="mt-6 border border-line bg-panel p-4">
          <h2 className="text-lg font-black text-ink">Build Snapshot</h2>
          <div className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
            {mercenaryCrossbowSections.snapshot.map((item) => (
              <div key={item.label} className="border border-line bg-paper px-3 py-2">
                <span className="font-black text-ink">{item.label}: </span>
                {item.href ? (
                  <Link href={item.href} className="font-bold text-moss hover:text-ink">
                    {item.value}
                  </Link>
                ) : (
                  item.value
                )}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-6 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          Best Build Guide: {build.title} is a {build.playstyle.toLowerCase()} POE2 build for{" "}
          {build.class} players from the{" "}
          <Link href="/" className="font-bold text-moss hover:text-ink">
            POE2 Starter Tools
          </Link>{" "}
          guide hub. It is strong because it keeps the setup focused on{" "}
          {coreSkills.slice(0, 2).join(" and ")} for leveling and endgame.
        </p>
      </section>

      {isMercenaryCrossbowWinner ? (
        <section className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="border border-line bg-panel p-4">
            <h2 className="text-lg font-black text-ink">Who This Build Is Best For</h2>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
              {mercenaryCrossbowSections.bestFor.map((item) => (
                <li key={item} className="border border-line bg-paper px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line bg-panel p-4">
            <h2 className="text-lg font-black text-ink">Who Should Avoid This Build</h2>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
              {mercenaryCrossbowSections.avoidIf.map((item) => (
                <li key={item} className="border border-line bg-paper px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Core Skills</h2>
        <ul className="mt-3 grid gap-2 text-sm font-bold text-ink/72">
          {coreSkills.map((skillName) => {
            const skill = getSkillBySlug(skillNameToSlug(skillName));

            return (
              <li key={skillName} className="border border-line bg-paper px-3 py-2">
                {skill ? (
                  <Link href={`/skills/${skill.slug}`} className="text-moss hover:text-ink">
                    {skill.name}
                  </Link>
                ) : (
                  skillName
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {isMercenaryCrossbowWinner ? (
        <section className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="border border-line bg-panel p-4">
            <h2 className="text-lg font-black text-ink">Strengths</h2>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
              {mercenaryCrossbowSections.strengths.map((item) => (
                <li key={item} className="border border-line bg-paper px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line bg-panel p-4">
            <h2 className="text-lg font-black text-ink">Weaknesses</h2>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
              {mercenaryCrossbowSections.weaknesses.map((item) => (
                <li key={item} className="border border-line bg-paper px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Leveling Path</h2>
        <ol className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          {levelingPath.map((step) => (
            <li key={step} className="border border-line bg-paper px-3 py-2">
              {step}
            </li>
          ))}
        </ol>
      </section>

      {isMercenaryCrossbowWinner ? (
        <section className="mt-4 border border-line bg-panel p-4">
          <h2 className="text-lg font-black text-ink">Progression Priorities</h2>
          <div className="mt-3 grid gap-3">
            {mercenaryCrossbowSections.progression.map((group) => (
              <div key={group.title} className="border border-line bg-paper px-3 py-2">
                <h3 className="font-black text-ink">{group.title}</h3>
                <ul className="mt-2 grid gap-1 text-sm leading-6 text-ink/72">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Why This Build</h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          {reasons.map((reason) => (
            <li key={reason} className="border border-line bg-paper px-3 py-2">
              {reason}
            </li>
          ))}
        </ul>
      </section>

      {isMercenaryCrossbowWinner ? (
        <section className="mt-4 border border-line bg-panel p-4">
          <h2 className="text-lg font-black text-ink">Gear, Passive, and Skill Priorities</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {mercenaryCrossbowSections.priorities.map((group) => (
              <div key={group.title} className="border border-line bg-paper px-3 py-2">
                <h3 className="font-black text-ink">{group.title}</h3>
                <ul className="mt-2 grid gap-1 text-sm leading-6 text-ink/72">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {isMercenaryCrossbowWinner ? (
        <section className="mt-4 border border-line bg-panel p-4">
          <h2 className="text-lg font-black text-ink">Common Beginner Mistakes</h2>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
            {mercenaryCrossbowSections.mistakes.map((item) => (
              <li key={item} className="border border-line bg-paper px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {isMercenaryCrossbowWinner ? (
        <section className="mt-4 border border-line bg-panel p-4">
          <h2 className="text-lg font-black text-ink">Relevant Existing Pages</h2>
          <div className="mt-3 grid gap-2 text-sm leading-6">
            {mercenaryCrossbowSections.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss"
              >
                <span className="font-black text-moss">{item.label}</span>
                <span className="block text-ink/62">{item.note}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {isMercenaryCrossbowWinner ? (
        <section className="mt-4 border border-line bg-panel p-4">
          <h2 className="text-lg font-black text-ink">FAQ</h2>
          <div className="mt-3 grid gap-2">
            {mercenaryCrossbowSections.faqs.map((item) => (
              <div key={item.question} className="border border-line bg-paper px-3 py-2 text-sm leading-6">
                <h3 className="font-black text-ink">{item.question}</h3>
                <p className="mt-1 text-ink/72">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Related Builds</h2>
        <div className="mt-3 grid gap-2 text-sm font-bold">
          {relatedBuilds.map((item) => (
            <Link
              key={item.slug}
              href={`/builds/${item.slug}`}
              className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
