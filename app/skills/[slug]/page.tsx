import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { builds, getSkillBySlug, skills } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type Skill = (typeof skills)[number];
type Build = (typeof builds)[number];

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) {
    return {};
  }

  return {
    title: `${skill.name} – Best POE2 Build Guide (Leveling + Endgame)`,
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

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-black leading-tight text-ink md:text-4xl">{skill.name}</h1>

      <section className="mt-6 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Definition</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          Best Skill Guide: {skill.name} is a POE2 {skill.tags.join(", ")} skill for{" "}
          {skill.bestFor.toLowerCase().replace(/\.$/, "")}.
        </p>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Usage</h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          {usage.map((item) => (
            <li key={item} className="border border-line bg-paper px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Used in Builds</h2>
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
        <h2 className="text-lg font-black text-ink">Beginner Tip</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          Beginner players should add {skill.name} only when it clearly improves clear, boss damage, or safety.
        </p>
      </section>
    </main>
  );
}
