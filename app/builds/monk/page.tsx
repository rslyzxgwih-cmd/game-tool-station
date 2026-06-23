import type { Metadata } from "next";
import Link from "next/link";

const coreSkills = [
  { href: "/skills/tempest-bell", label: "Tempest Bell" },
  { href: "/skills/falling-thunder", label: "Falling Thunder" },
  { href: "/skills/killing-palm", label: "Killing Palm" },
  { href: "/skills/staggering-palm", label: "Staggering Palm" },
];

const levelingSteps = [
  "Start with Falling Thunder for early lightning melee clear.",
  "Add Tempest Bell when rares and bosses need a planned burst window.",
  "Use Killing Palm only after normal pack clear feels stable.",
  "Add Staggering Palm or another control skill when enemies punish close-range timing.",
  "Upgrade defenses before adding extra damage layers for endgame.",
];

const relatedBuilds = [
  { href: "/builds/poe2-monk-leveling-build", label: "POE2 Monk Leveling Build" },
  { href: "/builds/poe2-monk-tempest-bell-build", label: "POE2 Monk Tempest Bell Build" },
  { href: "/builds/poe2-monk-palm-leveling-build", label: "POE2 Monk Palm Leveling Build" },
  { href: "/builds/falling-thunder", label: "POE2 Falling Thunder Build" },
];

export const metadata: Metadata = {
  title: "POE2 Monk Build (Tempest Bell Focus)",
  description:
    "POE2 Monk build guide for Tempest Bell, Monk leveling, beginner Monk setup, and core Monk skills.",
  alternates: {
    canonical: "/builds/monk",
  },
  keywords: [
    "POE2 Monk build",
    "Tempest Bell build",
    "Monk leveling build",
    "POE2 beginner Monk guide",
    "POE2 Monk skills build",
  ],
};

export default function MonkBuildsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-black leading-tight text-ink md:text-4xl">
        POE2 Monk Build (Tempest Bell Focus)
      </h1>

      <section className="mt-6 border border-line bg-panel p-4">
        <p className="text-sm leading-6 text-ink/72">
          This POE2 Monk build is a Tempest Bell build for players who want fast melee leveling with a clear
          boss-damage payoff. Use it as a POE2 beginner Monk guide when you need a simple Monk leveling build and a
          small Monk skill setup. It also works as a POE2 Monk skills build because the core setup stays limited to
          four active skills.
        </p>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Core Skills for a Tempest Bell Build</h2>
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
          {levelingSteps.map((step) => (
            <li key={step} className="border border-line bg-paper px-3 py-2">
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Why This Build Works</h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          <li className="border border-line bg-paper px-3 py-2">Falling Thunder gives the build early clear identity.</li>
          <li className="border border-line bg-paper px-3 py-2">Tempest Bell gives the build a simple boss payoff window.</li>
          <li className="border border-line bg-paper px-3 py-2">The skill package stays small enough for beginner Monk leveling.</li>
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
