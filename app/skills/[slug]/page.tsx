import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
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

  const usedInBuilds = buildsForSkill(skill);
  const usage = usageForSkill(skill);
  const enhancement = skillEnhancements[skill.slug];
  const relatedSkills = relatedSkillsFor(skill);
  const classLinks = classLinksForSkill(skill);
  const supportAdvice = supportGemAdvice(skill);
  const scaling = scalingAdvice(skill);
  const faqItems = faqForSkill(skill, enhancement);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Skills",
              item: absoluteUrl("/skills"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: skill.name,
              item: absoluteUrl(`/skills/${skill.slug}`),
            },
          ],
        }}
      />
      <h1 className="text-3xl font-black leading-tight text-ink md:text-4xl">{skill.name}</h1>

      <section className="mt-6 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Skill Overview</h2>
        <div className="mt-2 grid gap-3 text-sm leading-6 text-ink/72">
          <p>
            {skill.name} is a POE2 skill tagged as {skill.tags.join(", ")}. It is best understood as a decision tool:
            choose it when your build needs {skill.bestFor.toLowerCase().replace(/\.$/, "")}. The important question is
            not whether the skill is generally good, but whether it solves a specific job inside your current build.
          </p>
          <p>
            {skill.description} That makes the skill most useful when the rest of the character already supports the
            same role. If the build has no matching damage type, class identity, weapon package, or utility need, adding
            {` ${skill.name} `} can create clutter instead of progress.
          </p>
          <p>
            {enhancement?.quickSummary ??
              `For beginners, ${skill.name} should be added after the main damage loop is readable. Use this page to decide whether the skill belongs in your current route, which builds can use it, and which related skills should be compared before committing.`}
          </p>
        </div>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">How the Skill Works</h2>
        <div className="mt-2 grid gap-3 text-sm leading-6 text-ink/72">
          <p>
            In practical build planning, {skill.name} should be assigned one primary job. That job may be clear,
            single-target damage, control, recovery, setup, movement, or support. If the same skill is expected to solve
            every problem at once, the build usually becomes harder to evaluate.
          </p>
          <p>
            {skill.decisionRule} This rule is especially important while leveling because early characters have fewer
            passive points, weaker gear, and less room for complicated rotations. A skill that is excellent later can
            still feel weak if the campaign version of the build cannot support it yet.
          </p>
        </div>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          {usage.map((item) => (
            <li key={item} className="border border-line bg-paper px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Scaling</h2>
        <div className="mt-2 grid gap-3 text-sm leading-6 text-ink/72">
          {scaling.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Best Support Gems</h2>
        <div className="mt-2 grid gap-3 text-sm leading-6 text-ink/72">
          {supportAdvice.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Best Classes</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          The best class for {skill.name} is the one that already supports {skill.tags.join(", ")} decisions. Do not
          choose a class only because the skill is interesting; choose the class that gives the skill a clear build
          home, matching passives, and a realistic leveling route.
        </p>
        <div className="mt-3 grid gap-2 text-sm leading-6">
          {classLinks.map((item) => (
            <Link key={item.href} href={item.href} className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss">
              <span className="font-black text-moss">{item.label}</span>
              <span className="block text-ink/62">{item.note}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Best Builds</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          The best builds for {skill.name} are existing routes where the skill's tags and job match the page's class,
          playstyle, or core skill package. Use these pages to decide whether the skill should be a main identity, a
          support layer, or a comparison point before choosing another route.
        </p>
        <div className="mt-3 grid gap-2 text-sm font-bold">
          {usedInBuilds.map((build) => (
            <Link
              key={build.slug}
              href={`/builds/${build.slug}`}
              className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss"
            >
              {build.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Leveling Tips</h2>
        <div className="mt-2 grid gap-3 text-sm leading-6 text-ink/72">
          <p>
            Beginner players should add {skill.name} only when it clearly improves clear, boss damage, or safety. If
            the skill does not solve one of those problems, wait until the main build is stable enough to test it.
          </p>
          <p>
            In early acts, keep the skill package small. Leveling slows down when every new skill becomes part of the
            rotation before the player understands the core loop. If {skill.name} is a support or utility skill, add it
            after the main damage skill already clears normal packs.
          </p>
          <p>
            In mid game, compare the skill against the actual problem you are facing. If rares take too long, choose
            single-target support. If packs spread out, choose coverage. If deaths are the problem, choose defense,
            control, or recovery. {skill.name} is worth keeping only when it improves that specific bottleneck.
          </p>
          <p>
            In endgame transition, make the skill prove its value again. A skill that helped during campaign may become
            optional once gear, supports, and passive priorities change. Keep it if it still supports the build's main
            job; replace it if another related skill handles the job more cleanly.
          </p>
          {enhancement ? enhancement.levelingAdvice.map((item) => <p key={item}>{item}</p>) : null}
        </div>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Advanced Tips</h2>
        <div className="mt-2 grid gap-3 text-sm leading-6 text-ink/72">
          <p>
            Advanced use of {skill.name} starts with role discipline. Do not judge the skill by isolated damage or one
            highlight moment. Judge it by whether it improves the build's most important repeatable situation: clearing
            maps, killing bosses, controlling danger, recovering from mistakes, or enabling another skill.
          </p>
          <p>
            If {skill.name} is a main skill, keep support gems, passives, and gear pointed toward the same role. If it
            is a support skill, avoid overinvesting until the main damage plan is already solved. This prevents the
            common mistake of building half a main skill and half a support package without either one becoming strong.
          </p>
          <p>
            The best advanced test is simple: remove the skill mentally and ask what gets worse. If the build loses
            clear, single-target damage, safety, or rhythm, the skill has a real job. If nothing important changes, use
            a related skill or build page to find a cleaner option.
          </p>
        </div>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">FAQ</h2>
        <div className="mt-3 grid gap-2">
          {faqItems.map((item) => (
            <div key={item.question} className="border border-line bg-paper px-3 py-2 text-sm leading-6">
              <h3 className="font-black text-ink">{item.question}</h3>
              <p className="mt-1 text-ink/72">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Related Skills</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          Related skills share tags or solve nearby build problems. Compare them when {skill.name} almost fits, but the
          build needs a cleaner answer for clear, bossing, control, or safety.
        </p>
        <div className="mt-3 grid gap-2 text-sm font-bold">
          {relatedSkills.map((item) => (
            <Link key={item.slug} href={`/skills/${item.slug}`} className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss">
              {item.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Related Builds</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          These build pages are the next step after reading the skill guide. Open them when you want to see how
          {` ${skill.name} `} fits into an actual class route rather than evaluating the skill in isolation.
        </p>
        <div className="mt-3 grid gap-2 text-sm font-bold">
          {usedInBuilds.map((build) => (
            <Link key={build.slug} href={`/builds/${build.slug}`} className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss">
              {build.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
