import type { Metadata } from "next";
import Link from "next/link";
import { getBuildBySlug, getSkillBySlug } from "@/lib/content";

const buildSlugs = [
  "poe2-ranger-lightning-arrow-starter-build",
  "poe2-ranger-poison-arrow-build",
  "poe2-ranger-rain-of-arrows-build",
];
const skillSlugs = ["lightning-arrow", "poisonburst-arrow", "escape-shot", "rain-of-arrows"];

export const metadata: Metadata = {
  title: "POE2 Ranger Builds – Best POE2 Build Guide (Leveling + Endgame)",
  description: "Best POE2 Ranger build guide for bow leveling, beginner clear, and endgame route choices.",
  alternates: {
    canonical: "/builds/ranger",
  },
};

export default function RangerBuildsPage() {
  const relatedBuilds = buildSlugs.map((slug) => getBuildBySlug(slug)).filter(Boolean);
  const coreSkills = skillSlugs.map((slug) => getSkillBySlug(slug)).filter(Boolean);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-black leading-tight text-ink md:text-4xl">POE2 Ranger Builds</h1>

      <section className="mt-6 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          Best Build Guide: Ranger is a fast bow route for players who want range, movement, and simple clear.
          It is strong because Lightning Arrow and escape tools make campaign leveling direct.
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
          <li className="border border-line bg-paper px-3 py-2">Use one bow clear skill as the campaign anchor.</li>
          <li className="border border-line bg-paper px-3 py-2">Keep an escape skill ready before adding damage layers.</li>
          <li className="border border-line bg-paper px-3 py-2">Upgrade bow damage whenever clear starts falling behind.</li>
          <li className="border border-line bg-paper px-3 py-2">Move into poison or area routes after the starter loop is stable.</li>
        </ol>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Why This Build</h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          <li className="border border-line bg-paper px-3 py-2">Fast ranged leveling.</li>
          <li className="border border-line bg-paper px-3 py-2">Simple bow skill package.</li>
          <li className="border border-line bg-paper px-3 py-2">Clear beginner upgrade priorities.</li>
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
