import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "POE2 Skills – Best POE2 Build Guide (Leveling + Endgame)",
  description: "Best POE2 skill guide for beginner builds, leveling choices, and endgame setup planning.",
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-black leading-tight text-ink md:text-4xl">POE2 Skills</h1>

      <section className="mt-6 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Definition</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          Best Skill Guide: POE2 Skills is the database entry point for beginner build skills, leveling skills, and
          endgame skill choices.
        </p>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Usage</h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          <li className="border border-line bg-paper px-3 py-2">
            Use <Link href="/skills/tempest-bell" className="font-bold text-moss hover:text-ink">Tempest Bell</Link> for
            Monk payoff damage.
          </li>
          <li className="border border-line bg-paper px-3 py-2">
            Use <Link href="/skills/detonate-dead" className="font-bold text-moss hover:text-ink">Detonate Dead</Link>{" "}
            for corpse-based burst.
          </li>
          <li className="border border-line bg-paper px-3 py-2">
            Use <Link href="/skills/flame-wall" className="font-bold text-moss hover:text-ink">Flame Wall</Link> for
            caster support damage.
          </li>
        </ul>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Used in Builds</h2>
        <div className="mt-3 grid gap-2 text-sm font-bold">
          <Link
            href="/builds/poe2-monk-tempest-bell-build"
            className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss"
          >
            POE2 Monk Tempest Bell Build
          </Link>
          <Link
            href="/builds/poe2-witch-corpse-starter-build"
            className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss"
          >
            POE2 Witch Corpse Starter Build
          </Link>
          <Link
            href="/builds/poe2-sorceress-flame-wall-build"
            className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss"
          >
            POE2 Sorceress Flame Wall Build
          </Link>
        </div>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Beginner Tip</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          Beginner players should choose one main skill first, then add support skills only when clear, boss damage, or
          safety needs help.
        </p>
      </section>
    </main>
  );
}
