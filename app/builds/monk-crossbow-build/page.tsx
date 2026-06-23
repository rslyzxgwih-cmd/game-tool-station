import type { Metadata } from "next";
import Link from "next/link";

const coreSkills = [
  { href: "/skills/tempest-bell", label: "Tempest Bell" },
  { href: "/skills/falling-thunder", label: "Falling Thunder" },
  { href: "/skills/killing-palm", label: "Killing Palm" },
  { href: "/skills/escape-shot", label: "Escape Shot" },
];

const relatedBuilds = [
  { href: "/builds/poe2-monk-leveling-build", label: "POE2 Monk Leveling Build" },
  { href: "/builds/poe2-monk-tempest-bell-build", label: "POE2 Monk Tempest Bell Build" },
  { href: "/builds/poe2-mercenary-crossbow-starter-build", label: "POE2 Mercenary Crossbow Starter Build" },
];

export const metadata: Metadata = {
  title: "Monk Crossbow Build – Best POE2 Build Guide (Leveling + Endgame)",
  description: "Best POE2 Monk Crossbow build guide for beginner leveling, Tempest Bell, and endgame setup choices.",
  alternates: {
    canonical: "/builds/monk-crossbow-build",
  },
};

export default function MonkCrossbowBuildPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-black leading-tight text-ink md:text-4xl">Monk Crossbow Build</h1>

      <section className="mt-6 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          Best Build Guide: Monk Crossbow Build is a hybrid POE2 route for players testing crossbow range with Monk
          payoff skills. It is strong because Tempest Bell gives the setup a clear boss damage window.
        </p>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Core Skills</h2>
        <ul className="mt-3 grid gap-2 text-sm font-bold text-ink/72">
          {coreSkills.map((skill) => (
            <li key={skill.href} className="border border-line bg-paper px-3 py-2">
              <Link href={skill.href} className="text-moss hover:text-ink">
                {skill.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Leveling Path</h2>
        <ol className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          <li className="border border-line bg-paper px-3 py-2">Start with a stable Monk damage skill.</li>
          <li className="border border-line bg-paper px-3 py-2">Add crossbow range only after the melee loop feels safe.</li>
          <li className="border border-line bg-paper px-3 py-2">Use Tempest Bell for rare and boss payoff windows.</li>
          <li className="border border-line bg-paper px-3 py-2">Keep movement and defenses ahead of extra damage layers.</li>
          <li className="border border-line bg-paper px-3 py-2">Compare Mercenary Crossbow if ranged weapon feel becomes the main goal.</li>
        </ol>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Why This Build</h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          <li className="border border-line bg-paper px-3 py-2">Combines Monk timing with ranged openings.</li>
          <li className="border border-line bg-paper px-3 py-2">Uses Tempest Bell as the core payoff skill.</li>
          <li className="border border-line bg-paper px-3 py-2">Gives players a direct comparison against Mercenary Crossbow.</li>
        </ul>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Related Builds</h2>
        <div className="mt-3 grid gap-2 text-sm font-bold">
          {relatedBuilds.map((build) => (
            <Link
              key={build.href}
              href={build.href}
              className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss"
            >
              {build.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
