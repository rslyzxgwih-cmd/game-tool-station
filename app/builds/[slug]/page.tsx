import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { builds, getBuildBySlug, getSkillBySlug } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type Build = (typeof builds)[number];

const MERCENARY_CROSSBOW_SLUG = "poe2-mercenary-crossbow-starter-build";

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
