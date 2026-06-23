import type { Metadata } from "next";
import Link from "next/link";
import { getBuildBySlug, getSkillBySlug } from "@/lib/content";

const buildSlugs = [
  "poe2-warrior-slam-starter-build",
  "poe2-warrior-earthquake-leveling-build",
  "poe2-warrior-boneshatter-build",
];
const skillSlugs = ["rolling-slam", "boneshatter", "earthquake"];

export const metadata: Metadata = {
  title: "POE2 Warrior Builds – Best POE2 Build Guide (Leveling + Endgame)",
  description: "Best POE2 Warrior build guide for beginner leveling, slam skills, and durable endgame routes.",
  alternates: {
    canonical: "/builds/warrior",
  },
};

export default function WarriorBuildsPage() {
  const relatedBuilds = buildSlugs.map((slug) => getBuildBySlug(slug)).filter(Boolean);
  const coreSkills = skillSlugs.map((slug) => getSkillBySlug(slug)).filter(Boolean);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-black leading-tight text-ink md:text-4xl">POE2 Warrior Builds</h1>

      <section className="mt-6 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          Best Build Guide: Warrior is a durable melee route for players who want slam skills and simple leveling.
          It is strong because armor, heavy hits, and early defenses keep the campaign stable.
        </p>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Core Skills</h2>
        <ul className="mt-3 grid gap-2 text-sm font-bold text-ink/72">
          {coreSkills.map((skill) =>
            skill ? (
              <li key={skill.slug} className="border border-line bg-paper px-3 py-2">
                <Link href={`/skills/${skill.slug}`} className="text-moss hover:text-ink">
                  {skill.name}
                </Link>
              </li>
            ) : null,
          )}
        </ul>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Leveling Path</h2>
        <ol className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          <li className="border border-line bg-paper px-3 py-2">Start with a slam skill for pack control.</li>
          <li className="border border-line bg-paper px-3 py-2">Keep weapon damage current before adding extra mechanics.</li>
          <li className="border border-line bg-paper px-3 py-2">Add defenses when boss deaths slow progress.</li>
          <li className="border border-line bg-paper px-3 py-2">Move into shield or Earthquake routes after the first loop is stable.</li>
        </ol>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Why This Build</h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          <li className="border border-line bg-paper px-3 py-2">Durable melee pacing.</li>
          <li className="border border-line bg-paper px-3 py-2">Simple skill priorities.</li>
          <li className="border border-line bg-paper px-3 py-2">Strong beginner defenses.</li>
        </ul>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Related Builds</h2>
        <div className="mt-3 grid gap-2 text-sm font-bold">
          {relatedBuilds.map((item) =>
            item ? (
              <Link
                key={item.slug}
                href={`/builds/${item.slug}`}
                className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss"
              >
                {item.title}
              </Link>
            ) : null,
          )}
        </div>
      </section>
    </main>
  );
}
