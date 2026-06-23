import type { Metadata } from "next";
import Link from "next/link";
import { builds } from "@/lib/content";

export const metadata: Metadata = {
  title: "POE2 Builds – Best POE2 Build Guide (Leveling + Endgame)",
  description:
    "Best POE2 build guide hub for leveling builds, endgame builds, and beginner class routes.",
  alternates: {
    canonical: "/builds",
  },
};

const coreSkills = ["Tempest Bell", "High Velocity Rounds", "Detonate Dead", "Flame Wall"];

const levelingPath = [
  "Choose a class hub before choosing gear.",
  "Start with one main damage skill.",
  "Add one boss damage tool.",
  "Upgrade defenses before endgame.",
  "Move to a focused build guide.",
];

const whyThisBuild = [
  "Routes players from broad build intent to a specific guide.",
  "Keeps beginner, leveling, and endgame decisions in one hub.",
  "Connects builds directly to core POE2 skills.",
];

export default function BuildsPage() {
  const relatedBuilds = builds.slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 py-5">
      <h1 className="text-2xl font-black leading-tight text-ink md:text-3xl">
        POE2 Builds
      </h1>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-base font-black text-ink">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          POE2 Builds is the main build guide hub for leveling and endgame routes.
          It is strong because it sends players from broad class intent to focused build pages.
        </p>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-base font-black text-ink">Core Skills</h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72 md:grid-cols-4">
          {coreSkills.map((skill) => (
            <li key={skill} className="border border-line bg-paper px-3 py-2">{skill}</li>
          ))}
        </ul>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-base font-black text-ink">Leveling Path</h2>
        <ol className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          {levelingPath.map((step) => (
            <li key={step} className="border border-line bg-paper px-3 py-2">{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-base font-black text-ink">Why This Build</h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          {whyThisBuild.map((item) => (
            <li key={item} className="border border-line bg-paper px-3 py-2">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-base font-black text-ink">Related Builds</h2>
        <div className="mt-3 grid gap-2 text-sm font-bold text-moss">
          {relatedBuilds.map((build) => (
            <Link key={build.slug} href={`/builds/${build.slug}`} className="border border-line bg-paper px-3 py-2 hover:text-ink">
              {build.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
