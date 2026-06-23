import type { Metadata } from "next";
import Link from "next/link";
import { getBuildBySlug, getSkillBySlug } from "@/lib/content";

const buildSlugs = [
  "poe2-mercenary-crossbow-starter-build",
  "poe2-mercenary-grenade-leveling-build",
  "poe2-mercenary-high-velocity-boss-build",
];
const skillSlugs = ["fragmentation-rounds", "high-velocity-rounds", "gas-grenade", "explosive-grenade"];

export const metadata: Metadata = {
  title: "POE2 Mercenary Guide – Best POE2 Build Guide (Leveling + Endgame)",
  description: "Best POE2 Mercenary guide for crossbow builds, beginner leveling, and endgame route choices.",
  alternates: {
    canonical: "/guides/mercenary",
  },
};

export default function MercenaryGuidePage() {
  const relatedBuilds = buildSlugs.map((slug) => getBuildBySlug(slug)).filter(Boolean);
  const coreSkills = skillSlugs.map((slug) => getSkillBySlug(slug)).filter(Boolean);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-black leading-tight text-ink md:text-4xl">POE2 Mercenary Guide</h1>

      <section className="mt-6 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          Best Build Guide: Mercenary is a ranged crossbow route for players who want weapon feel and clear skill jobs.
          It is strong because pack clear, boss damage, and spacing can be handled by separate skills.
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
          <li className="border border-line bg-paper px-3 py-2">Start with Fragmentation Rounds for pack clear.</li>
          <li className="border border-line bg-paper px-3 py-2">Add High Velocity Rounds before rare and boss fights slow down.</li>
          <li className="border border-line bg-paper px-3 py-2">Use escape and spacing tools before adding more damage buttons.</li>
          <li className="border border-line bg-paper px-3 py-2">Add grenades only after the crossbow loop feels stable.</li>
          <li className="border border-line bg-paper px-3 py-2">Compare Ranger or Beginner Builds if reload rhythm feels too busy.</li>
        </ol>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Why This Build</h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          <li className="border border-line bg-paper px-3 py-2">Clear separation between pack clear and boss damage.</li>
          <li className="border border-line bg-paper px-3 py-2">Strong ranged spacing for campaign safety.</li>
          <li className="border border-line bg-paper px-3 py-2">Direct route into crossbow and grenade variants.</li>
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
