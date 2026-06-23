import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { builds, getBuildBySlug, getSkillBySlug } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type Build = (typeof builds)[number];

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

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-black leading-tight text-ink md:text-4xl">{build.title}</h1>

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
