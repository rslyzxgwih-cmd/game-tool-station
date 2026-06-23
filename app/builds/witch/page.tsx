import type { Metadata } from "next";
import Link from "next/link";
import { getBuildBySlug, getSkillBySlug } from "@/lib/content";

const buildSlugs = [
  "poe2-beginner-minion-witch-build",
  "poe2-witch-fire-minion-build",
  "poe2-witch-corpse-starter-build",
];
const skillSlugs = ["raise-spectre", "skeletal-warrior", "detonate-dead", "flame-wall"];

export const metadata: Metadata = {
  title: "POE2 Witch Builds – Best POE2 Build Guide (Leveling + Endgame)",
  description: "Best POE2 Witch build guide for beginner minions, corpse skills, and leveling routes.",
  alternates: {
    canonical: "/builds/witch",
  },
};

export default function WitchBuildsPage() {
  const relatedBuilds = buildSlugs.map((slug) => getBuildBySlug(slug)).filter(Boolean);
  const coreSkills = skillSlugs.map((slug) => getSkillBySlug(slug)).filter(Boolean);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-black leading-tight text-ink md:text-4xl">POE2 Witch Builds</h1>

      <section className="mt-6 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          Best Build Guide: Witch is a beginner-friendly POE2 route for minion, corpse, and fire setups.
          It is strong because minions and corpse skills let players level safely while learning bosses.
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
          <li className="border border-line bg-paper px-3 py-2">Start with minions for safer early progress.</li>
          <li className="border border-line bg-paper px-3 py-2">Add a corpse or fire skill when pack damage feels slow.</li>
          <li className="border border-line bg-paper px-3 py-2">Upgrade defenses before chasing extra damage layers.</li>
          <li className="border border-line bg-paper px-3 py-2">Move into Detonate Dead or Witchfire routes after the core loop works.</li>
        </ol>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Why This Build</h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          <li className="border border-line bg-paper px-3 py-2">Safe beginner positioning.</li>
          <li className="border border-line bg-paper px-3 py-2">Strong corpse and minion scaling.</li>
          <li className="border border-line bg-paper px-3 py-2">Clear routes into leveling and endgame setups.</li>
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
