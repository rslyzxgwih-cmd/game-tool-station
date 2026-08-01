import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { SkillDetailV2, type SkillDetailV2Content } from "@/components/SkillDetailV2";
import { builds, getSkillBySlug, skills } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type Skill = (typeof skills)[number];
type Build = (typeof builds)[number];
type SkillLink = { href: string; label: string; note: string };

type SkillEnhancement = {
  quickSummary: string;
  bestFor: string[];
  notRecommendedIf: string[];
  strengths: string[];
  weaknesses: string[];
  whenToChoose: string;
  alternatives: { href: string; label: string; note: string }[];
  levelingAdvice: string[];
  faqs: { question: string; answer: string }[];
};

const TIME_OF_NEED_SLUG = "time-of-need";
const PROFANE_RITUAL_SLUG = "profane-ritual";
const GLACIAL_LANCE_SLUG = "glacial-lance";
const STORMCALLER_ARROW_SLUG = "stormcaller-arrow";
const RAIN_OF_ARROWS_SLUG = "rain-of-arrows";
const SHIELD_CHARGE_SLUG = "shield-charge";

const timeOfNeedV2Content: SkillDetailV2Content = {
  eyebrow: "RECOVERY SUPPORT SKILL",
  directAnswer:
    "Use Time of Need when a build already has a workable damage plan but recovery gaps, ailments, or mistakes keep interrupting progress. It is a support choice for stability, not a replacement for damage or positioning.",
  whatItDoes: [
    "Time of Need adds recovery support to a character that needs more survival. Its job is to help the existing build recover from pressure rather than become the build's main identity.",
    "The useful decision is whether recovery is the current bottleneck. If damage and clear already feel acceptable but deaths or recovery gaps slow the character, Time of Need has a clear role.",
  ],
  usefulWhen: [
    "The main damage loop already works.",
    "Recovery gaps are slowing campaign or map progress.",
    "A beginner route needs a simpler survival layer.",
    "Mistakes are ending otherwise manageable encounters.",
  ],
  mayNotFitWhen: [
    "Low damage is the main problem.",
    "The build already has enough recovery.",
    "Another defensive or control skill solves the same problem more clearly.",
  ],
  practicalPrinciples: [
    {
      title: "Diagnose the Real Problem",
      copy: "Add Time of Need because recovery is missing, not simply because a support slot is available.",
    },
    {
      title: "Keep Damage Independent",
      copy: "Maintain a clear main damage skill. Time of Need should support that route rather than distract from it.",
    },
    {
      title: "Use It After the Core Loop",
      copy: "Establish the character's primary combat plan first, then add recovery when survival is the limiting factor.",
    },
    {
      title: "Recheck Its Value",
      copy: "If later upgrades solve the recovery gap, compare whether another skill now serves the character better.",
    },
  ],
  commonMistakes: [
    "Expecting Time of Need to fix weak damage.",
    "Using recovery as a substitute for positioning and defensive upgrades.",
    "Adding the skill before the main combat loop is stable.",
    "Keeping it when recovery is no longer the character's main problem.",
  ],
  relatedSkillSlugs: ["temporal-chains", "enfeeble", "devour"],
  relatedBuildReason: (playstyle) =>
    `Compare this ${playstyle.toLowerCase()} route when deciding where recovery support fits into a complete character.`,
};

const profaneRitualV2Content: SkillDetailV2Content = {
  eyebrow: "CHAOS CORPSE SKILL",
  directAnswer:
    "Use Profane Ritual when a chaos or Witch route already has a clear main spell and a dependable reason to use corpses as a support layer. Avoid adding it early if corpse setup makes the character harder to understand.",
  whatItDoes: [
    "Profane Ritual uses corpses to support chaos spell pressure. It is best treated as a defined supporting job inside a corpse or chaos route rather than as a generic spell for every caster.",
    "The skill fits when the character can create or access corpses consistently and the added layer solves a real combat need. Without that foundation, a direct spell is easier to evaluate.",
  ],
  usefulWhen: [
    "A Witch or chaos route already has a stable main spell.",
    "Corpse interaction is already part of the character plan.",
    "The build wants an additional spell-pressure layer.",
    "The player is comfortable managing more setup than a direct spell requires.",
  ],
  mayNotFitWhen: [
    "You want a one-button beginner spell.",
    "The build has no dependable corpse interaction.",
    "You prefer direct weapon or spell damage without setup.",
  ],
  practicalPrinciples: [
    {
      title: "Establish the Main Spell First",
      copy: "Keep one clear damage identity before Profane Ritual becomes part of the setup.",
    },
    {
      title: "Give Corpses a Clear Job",
      copy: "Use the corpse layer because it adds useful pressure, not because corpse skills happen to be available.",
    },
    {
      title: "Keep the Setup Readable",
      copy: "Add Profane Ritual only after the player understands where corpses come from and why they are being used.",
    },
    {
      title: "Compare Simpler Alternatives",
      copy: "If the corpse requirement creates more friction than value, compare a direct chaos spell or another corpse skill.",
    },
  ],
  commonMistakes: [
    "Adding Profane Ritual before the main spell route works.",
    "Assuming every Witch or chaos build needs a corpse layer.",
    "Treating setup-dependent pressure like a direct one-button spell.",
    "Keeping multiple corpse tools without assigning each one a distinct role.",
  ],
  relatedSkillSlugs: ["detonate-dead", "essence-drain", "unearth"],
  relatedBuildReason: (playstyle) =>
    `Compare this ${playstyle.toLowerCase()} route to see whether corpse and chaos support belong in the wider build plan.`,
};

const glacialLanceV2Content: SkillDetailV2Content = {
  eyebrow: "COLD SPEAR SKILL",
  directAnswer:
    "Use Glacial Lance when a spear route wants cold ranged pressure and safer spacing as part of its main plan. It fits players who want to engage from range, but it may not suit a build committed to close melee or a different damage direction.",
  whatItDoes: [
    "Glacial Lance adds cold spear damage from range. Its decision value is giving a spear character another way to apply pressure without staying close to every threat.",
    "The skill belongs in a route that already values ranged, spear, and cold roles. If the wider build is not supporting those priorities, adding Glacial Lance can make the character direction less clear.",
  ],
  usefulWhen: [
    "A spear build wants safer spacing.",
    "Cold ranged pressure matches the character's main direction.",
    "The current skill package needs a ranged spear option.",
    "The player prefers controlling engagement distance over constant close contact.",
  ],
  mayNotFitWhen: [
    "The route is committed to close melee pressure.",
    "The build is already centered on another damage direction.",
    "A simpler main skill already handles ranged coverage.",
  ],
  practicalPrinciples: [
    {
      title: "Keep the Spear Identity Clear",
      copy: "Use Glacial Lance because ranged spear pressure is part of the route, not as an unrelated extra skill.",
    },
    {
      title: "Use Range Deliberately",
      copy: "Let the skill create safer spacing when closing distance would add unnecessary pressure.",
    },
    {
      title: "Choose One Main Direction",
      copy: "Avoid splitting early progression between several unrelated damage plans.",
    },
    {
      title: "Compare Nearby Spear Skills",
      copy: "If cold pressure is not the right fit, compare another ranged or area-focused spear option.",
    },
  ],
  commonMistakes: [
    "Adding Glacial Lance to a build that does not support its ranged spear role.",
    "Treating safer spacing as a reason to ignore defenses.",
    "Using too many spear skills without assigning each one a distinct job.",
    "Keeping the skill when another option already handles ranged coverage more clearly.",
  ],
  relatedSkillSlugs: ["lightning-spear", "explosive-spear", "frostbolt"],
  relatedBuildReason: (playstyle) =>
    `Compare this ${playstyle.toLowerCase()} route when deciding whether cold ranged spear pressure fits the wider character plan.`,
};

const stormcallerArrowV2Content: SkillDetailV2Content = {
  eyebrow: "LIGHTNING BOW SKILL",
  directAnswer:
    "Use Stormcaller Arrow when a bow build wants delayed lightning pressure as a deliberate part of its combat plan. It fits players who are comfortable setting up an effect before its payoff, but it may not suit someone who wants every arrow to feel immediate.",
  whatItDoes: [
    "Stormcaller Arrow builds a bow setup around delayed lightning hits. Its role is not simply another bow attack; it asks the player to value setup and later payoff.",
    "The skill makes the most sense when ranged, bow, and lightning priorities already point in the same direction. It should solve a clear need inside that route rather than compete with several other bow skills for the same job.",
  ],
  usefulWhen: [
    "A bow route is already committed to lightning.",
    "The player is comfortable with delayed payoff.",
    "The skill package needs a setup-oriented bow option.",
    "The wider character plan supports ranged lightning pressure.",
  ],
  mayNotFitWhen: [
    "You want immediate impact from every attack.",
    "The build is not supporting lightning or bow priorities.",
    "Another bow skill already covers the same combat role more simply.",
  ],
  practicalPrinciples: [
    {
      title: "Respect the Delayed Payoff",
      copy: "Choose Stormcaller Arrow because its setup style fits the player, not because every bow route needs it.",
    },
    {
      title: "Keep Lightning as the Direction",
      copy: "Use the skill inside a clear lightning bow plan instead of splitting into unrelated damage roles.",
    },
    {
      title: "Assign It One Job",
      copy: "Decide whether the skill is the main identity or a supporting setup before adding more bow buttons.",
    },
    {
      title: "Compare Immediate Alternatives",
      copy: "If delayed pressure feels awkward, compare a more direct bow skill that better matches the desired pacing.",
    },
  ],
  commonMistakes: [
    "Expecting delayed lightning pressure to feel like an immediate bow hit.",
    "Adding the skill without a clear lightning direction.",
    "Using several bow skills for the same job.",
    "Keeping a setup style that does not match the player's preferred pacing.",
  ],
  relatedSkillSlugs: ["lightning-arrow", "lightning-rod", "rain-of-arrows"],
  relatedBuildReason: (playstyle) =>
    `Compare this ${playstyle.toLowerCase()} route to decide whether delayed lightning bow pressure belongs in the full build.`,
};

const rainOfArrowsV2Content: SkillDetailV2Content = {
  eyebrow: "BOW AREA SKILL",
  directAnswer:
    "Use Rain of Arrows when a bow build needs wider area coverage because single arrows are no longer covering enough space. It is a clear pack-coverage choice, not automatically the right answer when the main problem is elsewhere.",
  whatItDoes: [
    "Rain of Arrows adds area coverage to a bow build. Its practical job is helping a ranged character pressure a wider section of the fight than a single-arrow skill can cover.",
    "The skill is most useful when pack coverage is the real bottleneck. If the build already handles groups comfortably, another bow skill may provide a more distinct role.",
  ],
  usefulWhen: [
    "Single-arrow coverage is no longer enough.",
    "A bow route needs a clear area-pressure option.",
    "The player wants wider pack coverage from range.",
    "The rest of the build already supports ranged bow play.",
  ],
  mayNotFitWhen: [
    "The current main skill already covers packs well.",
    "The build needs a different role more urgently than area coverage.",
    "The character is not committed to a bow direction.",
  ],
  practicalPrinciples: [
    {
      title: "Use It for Coverage",
      copy: "Give Rain of Arrows the specific job of handling wider groups rather than expecting it to solve every encounter.",
    },
    {
      title: "Check the Real Bottleneck",
      copy: "Add the skill when pack coverage is weak, not simply because another bow skill is available.",
    },
    {
      title: "Keep the Skill Package Small",
      copy: "Maintain one clear main plan and avoid filling the bar with overlapping area options.",
    },
    {
      title: "Reassess as Coverage Improves",
      copy: "If the main bow skill later covers groups well enough, compare whether Rain of Arrows still has a distinct job.",
    },
  ],
  commonMistakes: [
    "Adding Rain of Arrows when pack coverage is already solved.",
    "Expecting an area skill to fix an unrelated character problem.",
    "Using several bow skills with no clear division of roles.",
    "Ignoring positioning because the skill reaches a wider area.",
  ],
  relatedSkillSlugs: ["lightning-arrow", "stormcaller-arrow", "snipe"],
  relatedBuildReason: (playstyle) =>
    `Compare this ${playstyle.toLowerCase()} route to see where wider bow coverage belongs in a complete build.`,
};

const shieldChargeV2Content: SkillDetailV2Content = {
  eyebrow: "SHIELD MOBILITY SKILL",
  directAnswer:
    "Use Shield Charge when a melee shield build wants movement and impact to share one clear role. It fits players who actively reposition with a shield, but it may not suit a character that does not treat shield use as part of its main identity.",
  whatItDoes: [
    "Shield Charge turns shield use into movement and impact. Its decision value is combining engagement or repositioning with the character's existing shield plan.",
    "The skill belongs in a melee route that already values shields and mobility. Without that connection, a simpler movement option may keep the build easier to understand.",
  ],
  usefulWhen: [
    "A melee route already uses a shield.",
    "The player wants movement tied to the shield identity.",
    "Repositioning is a regular part of the combat plan.",
    "The skill has a distinct mobility job beside direct attacks.",
  ],
  mayNotFitWhen: [
    "The build is not committed to shield use.",
    "You want movement separated from melee impact.",
    "Another mobility skill already solves repositioning more clearly.",
  ],
  practicalPrinciples: [
    {
      title: "Use It as Mobility First",
      copy: "Give Shield Charge a clear movement job before expecting it to replace the build's main attack.",
    },
    {
      title: "Keep the Shield Relevant",
      copy: "Choose the skill when shield use is already part of the character direction.",
    },
    {
      title: "Move with a Purpose",
      copy: "Use the skill to engage or reposition rather than adding movement that does not improve the combat plan.",
    },
    {
      title: "Separate Skill Roles",
      copy: "Let the main melee skill handle its own job while Shield Charge handles movement and impact.",
    },
  ],
  commonMistakes: [
    "Adding Shield Charge to a route that does not otherwise value shields.",
    "Treating a mobility skill as the answer to every damage problem.",
    "Using it without a clear engagement or repositioning purpose.",
    "Overlapping it with another movement option that already solves the same job.",
  ],
  relatedSkillSlugs: ["resonating-shield", "armour-breaker", "rolling-slam"],
  relatedBuildReason: (playstyle) =>
    `Compare this ${playstyle.toLowerCase()} route when deciding how shield mobility supports the wider melee plan.`,
};

const skillDetailV2ContentBySlug: Partial<Record<string, SkillDetailV2Content>> = {
  [TIME_OF_NEED_SLUG]: timeOfNeedV2Content,
  [PROFANE_RITUAL_SLUG]: profaneRitualV2Content,
  [GLACIAL_LANCE_SLUG]: glacialLanceV2Content,
  [STORMCALLER_ARROW_SLUG]: stormcallerArrowV2Content,
  [RAIN_OF_ARROWS_SLUG]: rainOfArrowsV2Content,
  [SHIELD_CHARGE_SLUG]: shieldChargeV2Content,
};

const skillEnhancements: Record<string, SkillEnhancement> = {
  "time-of-need": {
    quickSummary:
      "Time of Need is a recovery support skill for builds that already have damage but still lose momentum to burst, ailments, or mistakes. It is best for cautious beginner and leveling setups that need a safer fallback. Its biggest advantage is keeping a run stable without forcing the player to change the whole build.",
    bestFor: [
      "Beginner builds that die even when clear speed feels acceptable.",
      "Mercenary, Warrior, or Witch routes that need more recovery between mistakes.",
      "Players who want survival help without adding a complicated damage package.",
    ],
    notRecommendedIf: [
      "Your main problem is low damage rather than survival.",
      "You already have enough recovery and need better clear speed.",
      "You want every skill slot to increase damage directly.",
    ],
    strengths: [
      "Improves stability for leveling and boss learning.",
      "Works as a support decision instead of a full build identity.",
      "Pairs naturally with beginner and easy build routes.",
    ],
    weaknesses: [
      "Does not solve weak damage by itself.",
      "Can hide bad positioning if used as the only survival plan.",
      "May feel unnecessary on builds that already avoid hits well.",
    ],
    whenToChoose: "Choose Time of Need when deaths, ailments, or recovery gaps are slowing leveling more than damage is.",
    alternatives: [
      { href: "/builds/beginner", label: "Beginner Builds", note: "Compare safer first-character routes." },
      { href: "/builds/easy", label: "Easy Builds", note: "Use this if low-friction survival matters most." },
      { href: "/skills/temporal-chains", label: "Temporal Chains", note: "Use control if slowing enemies is better than recovery." },
      { href: "/builds/poe2-mercenary-crossbow-starter-build", label: "Mercenary Crossbow Starter", note: "Ranged route where recovery helps when spacing fails." },
    ],
    levelingAdvice: [
      "Early game: use core damage first; add recovery only when deaths are costing time.",
      "Mid game: add Time of Need if boss learning or ailment pressure interrupts progress.",
      "End game: keep it only if recovery still changes fight outcomes.",
    ],
    faqs: [
      {
        question: "Can I level with Time of Need?",
        answer: "Yes, but treat it as a support skill. It helps leveling when survival is the problem, not when your build lacks damage.",
      },
      {
        question: "Is Time of Need beginner friendly?",
        answer: "Yes. It is beginner friendly because it gives recovery support without asking the player to learn a new damage rotation.",
      },
      {
        question: "What builds benefit most from Time of Need?",
        answer: "Beginner, easy, Mercenary, Warrior, and Witch routes can use it when mistakes or burst damage are ending fights too early.",
      },
      {
        question: "What skill pairs well with Time of Need?",
        answer: "Temporal Chains pairs well if the build needs enemy control in addition to recovery.",
      },
    ],
  },
  twister: {
    quickSummary:
      "Twister is a ranged physical projectile skill for adding coverage when packs spread out. It is best for players who want safer spacing and more area pressure without committing to a complex combo. Its biggest advantage is making scattered enemies easier to manage while leveling.",
    bestFor: [
      "Ranged builds that need extra coverage.",
      "Players who want projectile pressure while repositioning.",
      "Leveling routes that struggle when enemies spread out.",
    ],
    notRecommendedIf: [
      "You already have strong pack clear from your main skill.",
      "You want a pure single-target boss skill.",
      "Your build does not scale physical or projectile damage.",
    ],
    strengths: [
      "Improves coverage against spread-out packs.",
      "Fits naturally into ranged leveling decisions.",
      "Keeps distance safer for casual players.",
    ],
    weaknesses: [
      "Can feel redundant if the main clear skill is already strong.",
      "Needs the rest of the build to support projectile scaling.",
      "Not the first answer for boss damage.",
    ],
    whenToChoose: "Choose Twister when pack coverage is the problem and your build already has a clearer single-target plan.",
    alternatives: [
      { href: "/builds/ranger", label: "Ranger Builds", note: "Compare bow and ranged clear routes." },
      { href: "/builds/beginner", label: "Beginner Builds", note: "Use this if the first build choice is still unclear." },
      { href: "/skills/lightning-arrow", label: "Lightning Arrow", note: "Simpler ranged clear comparison." },
      { href: "/skills/rain-of-arrows", label: "Rain of Arrows", note: "Area bow comparison for later coverage." },
    ],
    levelingAdvice: [
      "Early game: start with the simplest main skill, then add Twister if packs spread too widely.",
      "Mid game: keep weapon and projectile scaling current before adding more utility.",
      "End game: use Twister only if it still improves clear speed or safety.",
    ],
    faqs: [
      {
        question: "Can I level with Twister?",
        answer: "Yes, if your build supports ranged projectile damage and needs better pack coverage.",
      },
      {
        question: "Is Twister beginner friendly?",
        answer: "It can be beginner friendly as a coverage tool, but it should not replace a clear main damage plan.",
      },
      {
        question: "What class benefits most from Twister?",
        answer: "Ranged classes or builds that already care about projectile scaling benefit most.",
      },
      {
        question: "What skill pairs well with Twister?",
        answer: "Lightning Arrow or Rain of Arrows are useful comparisons if the player wants ranged clear instead of physical projectile coverage.",
      },
    ],
  },
  "tempest-bell": {
    quickSummary:
      "Tempest Bell is a Monk payoff skill used when a build needs stronger single-target burst. It is best for active Monk players who enjoy timing windows rather than passive damage. Its biggest advantage is giving Monk leveling builds a clear boss-damage button.",
    bestFor: [
      "Monk leveling builds that need boss payoff.",
      "Players who like active melee timing.",
      "Builds that already have clear speed but need single-target pressure.",
    ],
    notRecommendedIf: [
      "You want the lowest-input beginner build.",
      "You dislike timing windows or setup skills.",
      "Your main problem is pack clear rather than boss damage.",
    ],
    strengths: [
      "Strong boss payoff for Monk routes.",
      "Gives active players a clear combat rhythm.",
      "Pairs well with Falling Thunder and Killing Palm decisions.",
    ],
    weaknesses: [
      "Less useful if the player cannot maintain positioning.",
      "Can feel awkward before the main Monk loop is stable.",
      "Not the safest answer for low-input beginners.",
    ],
    whenToChoose: "Choose Tempest Bell when your Monk build clears packs acceptably but needs better payoff against rares and bosses.",
    alternatives: [
      { href: "/builds/monk", label: "Monk Builds", note: "Parent hub for Monk route decisions." },
      { href: "/builds/poe2-monk-tempest-bell-build", label: "Tempest Bell Build", note: "Existing build route for this payoff skill." },
      { href: "/skills/falling-thunder", label: "Falling Thunder", note: "Cleaner early Monk damage identity." },
      { href: "/skills/killing-palm", label: "Killing Palm", note: "Finisher comparison for active Monk players." },
    ],
    levelingAdvice: [
      "Early game: establish a simple Monk clear skill before relying on Tempest Bell.",
      "Mid game: add Tempest Bell when rares and act bosses start taking too long.",
      "End game: keep it if payoff windows are reliable and the build can stay safe during setup.",
    ],
    faqs: [
      {
        question: "Can I level with Tempest Bell?",
        answer: "Yes, but it works best after the main Monk clear loop already feels stable.",
      },
      {
        question: "Is Tempest Bell beginner friendly?",
        answer: "It is beginner friendly for active players, but not for players who want the lowest-input starter.",
      },
      {
        question: "What class benefits most from Tempest Bell?",
        answer: "Monk benefits most because Tempest Bell supports Monk payoff timing and boss damage.",
      },
      {
        question: "What skill pairs well with Tempest Bell?",
        answer: "Falling Thunder and Killing Palm are the first Monk skills to compare with Tempest Bell.",
      },
    ],
  },
  "profane-ritual": {
    quickSummary:
      "Profane Ritual is a chaos corpse spell for builds that want corpse-based support and damage pressure. It is best for Witch or chaos spell players who already understand corpse setup. Its biggest advantage is adding a darker support layer without turning the page into a full minion build.",
    bestFor: [
      "Witch routes using chaos or corpse interactions.",
      "Players who want extra spell pressure from corpse setup.",
      "Builds that already have a safe main skill and need a support layer.",
    ],
    notRecommendedIf: [
      "You want a one-button beginner spell.",
      "You dislike corpse setup or delayed payoff.",
      "Your build has no chaos, corpse, or spell support.",
    ],
    strengths: [
      "Connects chaos spell pressure with corpse mechanics.",
      "Supports Witch routes without requiring a full minion plan.",
      "Useful when a build needs more layered damage.",
    ],
    weaknesses: [
      "More setup-dependent than direct caster skills.",
      "Can confuse beginners if added before the main spell is stable.",
      "Not ideal for weapon-first builds.",
    ],
    whenToChoose: "Choose Profane Ritual when a Witch or chaos build already has a main spell and wants corpse-based support.",
    alternatives: [
      { href: "/builds/witch", label: "Witch Builds", note: "Parent hub for minion, corpse, and chaos routes." },
      { href: "/builds/witch/minion", label: "Witch Minion Builds", note: "Safer comparison if corpse play feels too active." },
      { href: "/skills/detonate-dead", label: "Detonate Dead", note: "Direct corpse explosion comparison." },
      { href: "/skills/essence-drain", label: "Essence Drain", note: "Simpler chaos spell comparison." },
    ],
    levelingAdvice: [
      "Early game: level with a direct spell first before adding corpse setup.",
      "Mid game: add Profane Ritual when corpse generation and safety are consistent.",
      "End game: keep it only if the corpse layer improves damage or control enough to justify the slot.",
    ],
    faqs: [
      {
        question: "Can I level with Profane Ritual?",
        answer: "You can use it while leveling, but it should support a main spell rather than replace one.",
      },
      {
        question: "Is Profane Ritual beginner friendly?",
        answer: "It is less beginner friendly than direct spells because it asks the player to understand corpse setup.",
      },
      {
        question: "What class benefits most from Profane Ritual?",
        answer: "Witch benefits most because Witch routes naturally connect chaos, corpse, and spell decisions.",
      },
      {
        question: "What skill pairs well with Profane Ritual?",
        answer: "Detonate Dead and Essence Drain are the first related skills to compare.",
      },
    ],
  },
  "temporal-chains": {
    quickSummary:
      "Temporal Chains is a curse/control skill for slowing enemies and making dangerous fights easier to read. It is best for safer leveling builds that need more time to reposition. Its biggest advantage is reducing pressure without requiring the player to change the main damage skill.",
    bestFor: [
      "Beginner builds that need more reaction time.",
      "Witch or caster routes that prefer control over burst.",
      "Players who die because enemies reach them too quickly.",
    ],
    notRecommendedIf: [
      "Your build already controls enemies comfortably.",
      "You need more damage rather than safer pacing.",
      "You dislike spending a skill slot on defense or control.",
    ],
    strengths: [
      "Makes fights easier to read.",
      "Supports safer leveling and boss learning.",
      "Works as a control layer for multiple build types.",
    ],
    weaknesses: [
      "Does not directly increase clear speed.",
      "Can feel unnecessary if the build already has strong freeze, stun, or range.",
      "Needs careful use so it does not replace core damage upgrades.",
    ],
    whenToChoose: "Choose Temporal Chains when slowing enemies gives more value than adding another damage button.",
    alternatives: [
      { href: "/builds/beginner", label: "Beginner Builds", note: "Compare safer routes if control is a major concern." },
      { href: "/builds/witch", label: "Witch Builds", note: "Parent hub for curse and spell decisions." },
      { href: "/skills/time-of-need", label: "Time of Need", note: "Recovery comparison when control is not enough." },
      { href: "/skills/enfeeble", label: "Enfeeble", note: "Defensive curse comparison." },
    ],
    levelingAdvice: [
      "Early game: focus on damage first unless enemy speed is already causing deaths.",
      "Mid game: add Temporal Chains when rares or bosses need safer pacing.",
      "End game: keep it if slowing enemies consistently prevents deaths or lost damage windows.",
    ],
    faqs: [
      {
        question: "Can I level with Temporal Chains?",
        answer: "Yes, but it is a support/control skill. Use it when enemy speed and pressure are the problem.",
      },
      {
        question: "Is Temporal Chains beginner friendly?",
        answer: "Yes. It is beginner friendly because slowing enemies gives more time to react and reposition.",
      },
      {
        question: "What class benefits most from Temporal Chains?",
        answer: "Witch and other caster routes benefit most, but any build that needs safer pacing can compare it.",
      },
      {
        question: "What skill pairs well with Temporal Chains?",
        answer: "Time of Need pairs well when the build also needs recovery support.",
      },
    ],
  },
};

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

function skillNameToSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function fallbackBuildSlugsForSkill(skill: Skill) {
  if (skill.tags.includes("monk")) {
    return ["poe2-monk-tempest-bell-build", "poe2-monk-leveling-build", "monk-crossbow-build"];
  }

  if (skill.tags.includes("mercenary") || skill.tags.includes("crossbow") || skill.tags.includes("grenade")) {
    return [
      "poe2-mercenary-crossbow-starter-build",
      "poe2-mercenary-high-velocity-boss-build",
      "poe2-mercenary-grenade-leveling-build",
    ];
  }

  if (skill.tags.includes("warrior") || skill.tags.includes("shield")) {
    return ["poe2-warrior-shield-leveling-build", "poe2-warrior-slam-starter-build", "poe2-warrior-earthquake-leveling-build"];
  }

  if (skill.tags.includes("witch") || skill.tags.includes("corpse") || skill.tags.includes("minion")) {
    return ["poe2-witch-corpse-starter-build", "poe2-beginner-minion-witch-build", "poe2-witch-fire-minion-build"];
  }

  if (skill.tags.includes("fire") || skill.slug === "flame-wall") {
    return ["poe2-sorceress-flame-wall-build", "poe2-sorceress-spark-starter-build", "poe2-sorceress-fireball-build"];
  }

  return ["poe2-mercenary-crossbow-starter-build", "poe2-beginner-minion-witch-build", "poe2-warrior-slam-starter-build"];
}

function buildsForSkill(skill: Skill) {
  const direct = builds.filter((build) => build.coreSkills.some((name) => skillNameToSlug(name) === skill.slug));
  const tagMatches = builds.filter((build) => {
    const terms = `${build.class} ${build.playstyle}`.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);

    return terms.some((term) => skill.tags.includes(term));
  });
  const fallback = fallbackBuildSlugsForSkill(skill)
    .map((slug) => builds.find((build) => build.slug === slug))
    .filter((build): build is Build => Boolean(build));

  return [...direct, ...tagMatches, ...fallback]
    .filter((build, index, list) => list.findIndex((candidate) => candidate.slug === build.slug) === index)
    .slice(0, 3);
}

function usageForSkill(skill: Skill) {
  return [
    `Use ${skill.name} when the build needs ${skill.tags[0] ?? "core"} pressure.`,
    `Use it for leveling after the main damage loop feels stable.`,
    `Use it in endgame when gear and supports match its tags.`,
  ];
}

function relatedSkillsFor(skill: Skill) {
  return skills
    .filter((item) => item.slug !== skill.slug && item.tags.some((tag) => skill.tags.includes(tag)))
    .slice(0, 6);
}

function makeGenericSkillV2Content(skill: Skill): SkillDetailV2Content {
  const primaryTag = skill.tags[0] ?? "core";
  const supportTags = skill.tags.slice(1, 3);

  return {
    eyebrow: `${primaryTag.toUpperCase()} SKILL GUIDE`,
    directAnswer: `Use ${skill.name} when your current build specifically needs ${skill.bestFor.toLowerCase().replace(/\.$/, "")}. Skip it for now if another skill already solves that job more cleanly or if your main build direction is still unclear.`,
    whatItDoes: [
      `${skill.name} is a POE2 ${skill.tags.join(", ")} skill. Its practical value comes from the role it fills inside a build, not from being added to every character that can equip it.`,
      `${skill.description} The important decision is whether your class, weapon, damage type, and support tools already point toward the same role.`,
    ],
    usefulWhen: [
      `Your build needs ${skill.bestFor.toLowerCase().replace(/\.$/, "")}.`,
      `Your current route already supports ${primaryTag}${supportTags.length ? ` and ${supportTags.join(", ")}` : ""}.`,
      "The skill has one clear job beside your main damage or defense plan.",
      "Adding it makes the character easier to play or easier to diagnose.",
    ],
    mayNotFitWhen: [
      "The main build direction is still changing every few levels.",
      "Another skill already handles the same job with less setup.",
      "You would need to split upgrades across unrelated damage or utility plans.",
    ],
    practicalPrinciples: [
      {
        title: "Assign One Job",
        copy: `Decide whether ${skill.name} is meant to handle clear, tougher enemies, mobility, control, recovery, or support before adding more skills around it.`,
      },
      {
        title: "Respect the Tags",
        copy: `The page tags this as ${skill.tags.join(", ")}. The surrounding build should reinforce those tags instead of pulling the character in a different direction.`,
      },
      {
        title: "Add It When Needed",
        copy: "During leveling, add the skill because it solves a visible problem. Do not add it only because a slot is open.",
      },
      {
        title: "Compare Nearby Options",
        copy: "If the role overlaps with another skill, choose the option that makes the build easier to understand and upgrade.",
      },
    ],
    commonMistakes: [
      `Adding ${skill.name} before the main combat loop is stable.`,
      "Using multiple skills for the same job without a clear reason.",
      "Ignoring defenses or positioning because a new skill feels stronger.",
      "Keeping the skill after the build no longer needs the role it provides.",
    ],
    relatedSkillSlugs: relatedSkillsFor(skill).slice(0, 3).map((item) => item.slug),
    relatedBuildReason: (playstyle) =>
      `Compare this ${playstyle.toLowerCase()} route to see whether ${skill.name} belongs in a complete build decision.`,
  };
}

function classLinksForSkill(skill: Skill): SkillLink[] {
  const links: SkillLink[] = [];

  if (skill.tags.includes("monk") || skill.tags.includes("melee") || skill.tags.includes("lightning")) {
    links.push({ href: "/builds/monk", label: "Monk Builds", note: "Compare active melee, lightning, and payoff-window routes." });
  }

  if (skill.tags.includes("witch") || skill.tags.includes("minion") || skill.tags.includes("corpse") || skill.tags.includes("chaos") || skill.tags.includes("curse")) {
    links.push({ href: "/builds/witch", label: "Witch Builds", note: "Compare minion, corpse, chaos, and curse-supported routes." });
  }

  if (skill.tags.includes("crossbow") || skill.tags.includes("grenade") || skill.tags.includes("mercenary")) {
    links.push({ href: "/builds/mercenary", label: "Mercenary Builds", note: "Compare crossbow, grenade, and ranged weapon routes." });
  }

  if (skill.tags.includes("bow") || skill.tags.includes("ranged")) {
    links.push({ href: "/builds/ranger", label: "Ranger Builds", note: "Compare bow, ranged clear, and mobility-focused routes." });
  }

  if (skill.tags.includes("warrior") || skill.tags.includes("slam") || skill.tags.includes("shield")) {
    links.push({ href: "/builds/warrior", label: "Warrior Builds", note: "Compare durable melee, shield, stun, and slam routes." });
  }

  if (skill.tags.includes("spell") || skill.tags.includes("fire") || skill.tags.includes("cold")) {
    links.push({ href: "/builds/poe2-sorceress-spark-starter-build", label: "Sorceress Leveling Build", note: "Compare simple caster leveling before adding extra spell layers." });
  }

  links.push({ href: "/builds/beginner", label: "Beginner Builds", note: "Use this if the player still needs a safer first-character route." });

  return links.filter((item, index, list) => list.findIndex((candidate) => candidate.href === item.href) === index).slice(0, 5);
}

function supportGemAdvice(skill: Skill) {
  const tagText = skill.tags.join(", ");
  const advice = [
    `Start with support gems that improve ${skill.name}'s main job instead of changing the skill into a different role. Because this page classifies the skill as ${tagText}, the first support choices should reinforce that identity.`,
  ];

  if (skill.tags.includes("projectile") || skill.tags.includes("ranged") || skill.tags.includes("bow") || skill.tags.includes("crossbow")) {
    advice.push(`${skill.name} should first compare projectile, attack speed, accuracy, and coverage supports. Add single-target supports only after normal pack clear already feels reliable.`);
  }

  if (skill.tags.includes("spell")) {
    advice.push(`Spell versions of ${skill.name} usually care about cast comfort, damage uptime, and whether the skill is direct, area-based, or a support layer. Do not add multiple setup supports before mana and survivability feel stable.`);
  }

  if (skill.tags.includes("melee")) {
    advice.push(`Melee support choices should respect positioning. If ${skill.name} asks you to stay close, defensive uptime, area coverage, and reliable hit timing can matter more than another narrow damage multiplier.`);
  }

  if (skill.tags.includes("minion") || skill.tags.includes("summoner")) {
    advice.push(`Minion support choices should separate minion damage from minion survival. If minions die too quickly, durability support can improve real damage more than another offensive link.`);
  }

  if (skill.tags.includes("curse") || skill.tags.includes("buff") || skill.tags.includes("recovery") || skill.tags.includes("control")) {
    advice.push(`Utility skills like ${skill.name} should be supported for uptime, reliability, and practical fight value. The goal is not to make the support skill look powerful on paper; the goal is to make the build safer or easier to execute.`);
  }

  advice.push(`Avoid support gems that create a second unfinished plan. A beginner should be able to explain why each support exists: more clear, more boss damage, more safety, or smoother leveling.`);

  return advice;
}

function scalingAdvice(skill: Skill) {
  const primaryTag = skill.tags[0] ?? "core";

  return [
    `${skill.name} scales best when the build commits to its primary role: ${primaryTag}. The first question is not whether the skill can be forced into many builds, but whether the current character is already investing in the tags that make the skill useful.`,
    `During early progression, scaling should stay simple. Improve the skill's main damage type, keep weapon or spell upgrades current when relevant, and add defenses before chasing endgame-only combinations. If ${skill.name} feels weak, check whether the problem is scaling, support choice, or the build asking the skill to solve the wrong job.`,
    `For endgame planning, ${skill.name} should scale around consistency. A support skill should improve uptime or safety, while a main skill should improve clear, single-target damage, or both. If the passive tree, gear, and support gems do not point toward the same job, the skill will feel worse than a simpler alternative.`,
  ];
}

function faqForSkill(skill: Skill, enhancement?: SkillEnhancement) {
  const base = [
    {
      question: `Can I level with ${skill.name}?`,
      answer: `Yes, but ${skill.name} should be used when it solves a clear leveling problem. Add it when the build needs ${skill.bestFor.toLowerCase().replace(/\.$/, "")}, not just because the skill is available.`,
    },
    {
      question: `Is ${skill.name} beginner friendly?`,
      answer: `${skill.name} is beginner friendly when its job is easy to understand. If the skill adds too much setup before the main build works, beginners should delay it and use a simpler route first.`,
    },
    {
      question: `What class benefits most from ${skill.name}?`,
      answer: `The best class depends on the tags attached to the skill: ${skill.tags.join(", ")}. Start with the class hub that already supports those tags, then choose a build that uses the same damage or utility plan.`,
    },
    {
      question: `When should I switch away from ${skill.name}?`,
      answer: `Switch away when ${skill.name} no longer solves its assigned job. If clear, boss damage, safety, or comfort is being handled better by another skill, move the build toward that cleaner option.`,
    },
    {
      question: `What skill pairs well with ${skill.name}?`,
      answer: `The best partner skill is one that covers a missing job. If ${skill.name} handles clear, pair it with single-target damage or defense. If it handles utility, pair it with a main damage skill.`,
    },
  ];

  return [...(enhancement?.faqs ?? []), ...base].filter(
    (item, index, list) => list.findIndex((candidate) => candidate.question === item.question) === index,
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) {
    return {};
  }

  return {
    title: `${skill.name} - Best POE2 Build Guide (Leveling + Endgame)`,
    description: `Best POE2 skill guide for ${skill.name}, beginner builds, leveling, and endgame use.`,
    alternates: {
      canonical: `/skills/${skill.slug}`,
    },
  };
}

export default async function SkillDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) {
    notFound();
  }

  const skillDetailV2Content = skillDetailV2ContentBySlug[skill.slug] ?? makeGenericSkillV2Content(skill);
  const relatedBuilds = buildsForSkill(skill);
  const relatedSkills = skillDetailV2Content.relatedSkillSlugs
    .map((relatedSlug) => getSkillBySlug(relatedSlug))
    .filter((item): item is Skill => Boolean(item));

  return (
    <SkillDetailV2
      skill={{
        name: skill.name,
        description: skill.description,
        tags: skill.tags,
      }}
      content={skillDetailV2Content}
      relatedBuilds={relatedBuilds.map(({ slug, title, playstyle }) => ({ slug, title, playstyle }))}
      relatedSkills={relatedSkills.map(({ slug, name, description }) => ({ slug, name, description }))}
    />
  );
}
