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

const performanceTools = [
  {
    name: "ExitLag",
    role: "reduce latency spikes",
    anchor: "Fix POE2 lag and reduce combat delay",
    href: "https://www.exitlag.com/refer/10318560",
  },
];

export const metadata: Metadata = {
  title: "POE2 Monk Build Guide - Best Tempest Bell Leveling Build (Beginner Friendly)",
  description:
    "This POE2 Monk build guide shows the best Tempest Bell build for fast leveling and beginner friendly Monk skill setup. Learn the optimal Monk leveling build and skills for early and mid game progression.",
  alternates: {
    canonical: "/builds/monk",
  },
  keywords: [
    "POE2 Monk build",
    "Tempest Bell build",
    "Monk leveling build",
    "best POE2 Monk build",
    "beginner friendly Monk build",
    "fast leveling Monk",
  ],
};

export default function MonkBuildsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-black leading-tight text-ink md:text-4xl">
        POE2 Monk Build Guide - Best Tempest Bell Leveling Build (Beginner Friendly)
      </h1>

      <section className="mt-6 border border-line bg-panel p-4">
        <p className="text-sm leading-6 text-ink/72">
          This is one of the best POE2 Monk builds for fast leveling using a Tempest Bell build focused on beginner friendly progression and strong boss damage. 
          The build delivers efficient Monk leveling with a simple skill setup that combines Falling Thunder for clear speed and Tempest Bell for boss payoff. 
          Perfect for players who want a straightforward melee build that scales from early to mid game.
        </p>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Core Skills for This POE2 Monk Tempest Bell Build</h2>
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
        <h2 className="text-lg font-black text-ink">POE2 Monk Leveling Path (Tempest Bell Progression)</h2>
        <p className="mb-3 text-sm leading-6 text-ink/72">
          This POE2 Monk build uses Tempest Bell build progression to maintain smooth leveling from early to mid game.
        </p>
        <ol className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          {levelingSteps.map((step) => (
            <li key={step} className="border border-line bg-paper px-3 py-2">
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Why This POE2 Monk Build Works</h2>
        <p className="mb-3 text-sm leading-6 text-ink/72">
          This Monk leveling build performs consistently due to stable scaling from the Tempest Bell build core mechanics.
        </p>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          <li className="border border-line bg-paper px-3 py-2">Falling Thunder gives the build early clear identity.</li>
          <li className="border border-line bg-paper px-3 py-2">Tempest Bell gives the build a simple boss payoff window.</li>
          <li className="border border-line bg-paper px-3 py-2">The skill package stays small enough for beginner Monk leveling.</li>
        </ul>
      </section>

      <section className="mt-4 border-2 border-moss bg-panel p-4">
        <h2 className="text-lg font-black text-ink">POE2 Performance & Gameplay Stability</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          If your POE2 Monk Build feels delayed or unstable during combat, especially when using Tempest Bell combos
          or fast melee rotations, network latency may be affecting performance.
        </p>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          High ping can directly impact timing, responsiveness, and boss fight consistency.
        </p>
        <Link href="/tools/exitlag" className="mt-2 inline-block text-sm font-black text-moss hover:text-ink">
          Open the POE2 ExitLag lag fix page
        </Link>
        <p className="mt-3 text-sm font-black text-ink">Recommended tools to improve gameplay stability:</p>
        <div className="mt-3 grid gap-2">
          {performanceTools.map((tool) => (
            <div key={tool.name} className="border border-line bg-paper px-3 py-2 text-sm">
              <p className="font-black text-ink">{tool.name}</p>
              <p className="mt-1 text-xs font-bold uppercase text-ink/55">{tool.role}</p>
              {tool.href ? (
                <Link
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-2 block font-bold text-moss hover:text-ink"
                >
                  {tool.anchor}
                </Link>
              ) : (
                <p className="mt-2 font-bold text-ink/72">{tool.anchor}</p>
              )}
            </div>
          ))}
        </div>
        <Link
          href="https://www.exitlag.com/refer/10318560"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-4 inline-flex min-h-11 items-center justify-center border border-ink bg-ink px-4 py-2 text-xs font-black uppercase text-white hover:bg-moss"
        >
          Stop POE2 Monk Build lag affecting your gameplay - Fix it instantly with ExitLag
        </Link>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">More POE2 Build Guides</h2>
        <div className="mt-3 grid gap-2 text-sm font-bold">
          <Link href="/builds" className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss">
            POE2 Builds Hub - All Class Guides
          </Link>
          <Link href="/builds/mercenary" className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss">
            POE2 Mercenary Crossbow Build
          </Link>
          <Link href="/builds/beginner" className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss">
            POE2 Beginner Builds Guide
          </Link>
        </div>
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
