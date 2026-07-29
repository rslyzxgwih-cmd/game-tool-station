import Image from "next/image";
import Link from "next/link";

type BuildDetailV2Build = {
  title: string;
  class: string;
  playstyle: string;
  difficulty: string;
};

type RelatedBuild = {
  slug: string;
  title: string;
  playstyle: string;
};

type BuildDetailV2Props = {
  build: BuildDetailV2Build;
  relatedBuilds: RelatedBuild[];
};

const badges = ["Mercenary", "Crossbow", "Easy", "Fast Farming"];

const snapshot = [
  { label: "Class", value: "Mercenary" },
  { label: "Playstyle", value: "Fast crossbow firing" },
  { label: "Difficulty", value: "Easy" },
  { label: "Main Skill", value: "Rapid Shot" },
  { label: "Best For", value: "Players who want faster ranged pacing with crossbows." },
  { label: "Main Strength", value: "Steady ranged pressure with one clear main skill." },
];

const chooseThisBuild = [
  "You prefer ranged crossbow combat.",
  "You want faster pack clearing and direct combat decisions.",
  "You want a Mercenary route with one clear main skill.",
  "You prefer a lower-friction starting direction.",
];

const avoidThisBuild = [
  "You prefer slow tactical shots.",
  "You want a full passive tree planner before choosing a build.",
  "You need exact patch-sensitive DPS math before starting.",
];

const coreSkills = [
  {
    name: "Rapid Shot",
    href: "/skills/rapid-shot",
    role: "Main ranged pressure",
    copy:
      "Use Rapid Shot as the combat identity of this route. It keeps the POE2 Mercenary Rapid Shot Build focused on steady crossbow pressure instead of too many unrelated mechanics.",
  },
  {
    name: "Fragmentation Rounds",
    href: "/skills/fragmentation-rounds",
    role: "Close-range coverage or secondary pack pressure",
    copy:
      "Use Fragmentation Rounds when packs or close-range pressure need a secondary crossbow answer. It supports the Rapid Shot Mercenary build without replacing the main skill.",
  },
  {
    name: "Explosive Shot",
    href: "/skills/explosive-shot",
    role: "Additional area pressure",
    copy:
      "Use Explosive Shot as an extra area-pressure option when the main crossbow skill is not enough for grouped enemies or tougher moments.",
  },
];

const levelingRoute = [
  {
    title: "Establish the Main Skill",
    copy:
      "Keep Rapid Shot as the primary damage identity before adding unnecessary mechanics. This helps rapid shot leveling stay readable while you learn the Mercenary crossbow build.",
  },
  {
    title: "Add Coverage When Needed",
    copy:
      "Use the existing secondary crossbow skills when pack coverage or tougher encounters begin to expose gaps. Add coverage to solve a clear problem, not because the bar has empty space.",
  },
  {
    title: "Stabilize Defenses",
    copy:
      "Improve survivability whenever deaths cost more time than another small damage increase saves. A beginner ranged build still needs defensive upgrades before the route feels stable.",
  },
];

const upgradePriorities = [
  "Keep the main crossbow damage route functional.",
  "Improve survivability when deaths interrupt progression.",
  "Add pack coverage when clearing begins to feel slow.",
  "Avoid expensive or complex changes before the core route feels stable.",
];

const strengths = [
  "Clear ranged identity",
  "Focused skill direction",
  "Practical pack-clearing goal",
  "Easy-to-understand starting decisions",
];

const tradeoffs = [
  "The fast-firing pace is not a good fit if you prefer slow tactical shots.",
];

function relatedReasonFor(slug: string, playstyle: string) {
  if (slug.includes("crossbow-starter")) {
    return "Compare this if you want a broader Mercenary crossbow build before committing to Rapid Shot.";
  }

  if (slug.includes("grenade")) {
    return "Compare this if you want more tool switching after the basic crossbow route feels stable.";
  }

  if (slug.includes("lightning-crossbow")) {
    return "Compare this if you want a crossbow route with more elemental coverage.";
  }

  return `Compare this ${playstyle.toLowerCase()} route if Rapid Shot is not the exact pacing you want.`;
}

const linkClass =
  "inline-flex min-h-11 items-center justify-center border border-amber-300/50 bg-amber-300 px-4 py-2 text-sm font-black text-zinc-950 shadow-[0_0_24px_rgba(251,191,36,0.18)] transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200";

const secondaryLinkClass =
  "inline-flex min-h-11 items-center justify-center border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200";

export function BuildDetailV2({ build, relatedBuilds }: BuildDetailV2Props) {
  return (
    <main className="bg-[#030304] text-zinc-100">
      <article className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <Link
          href="/builds"
          className="inline-flex text-sm font-bold text-amber-200 transition hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        >
          Back to POE2 Builds
        </Link>

        <header className="mt-5 grid gap-6 border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(10,14,20,0.96),rgba(11,19,32,0.9)_50%,rgba(31,22,8,0.82))] p-5 shadow-[0_0_50px_rgba(14,165,233,0.08)] md:grid-cols-[1.4fr_0.8fr] md:p-7">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">MERCENARY CROSSBOW BUILD</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">{build.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
              A fast crossbow route for players who want clear ranged pressure, straightforward combat decisions, and a
              practical leveling direction. Use this POE2 crossbow build when you want a Rapid Shot Mercenary build that
              stays focused before adding more complex tools.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="border border-amber-300/25 bg-amber-200/10 px-3 py-1 text-xs font-black uppercase text-amber-100"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-56 overflow-hidden border border-zinc-700/80 bg-zinc-950 md:min-h-full">
            <Image
              src="/images/builds/mercenary.webp"
              alt="Mercenary with a crossbow in a dark battlefield scene"
              fill
              sizes="(min-width: 768px) 34vw, 100vw"
              className="object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 border border-cyan-300/20 bg-black/55 p-3">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Build Snapshot</p>
              <p className="mt-1 text-sm text-zinc-300">{build.playstyle}</p>
            </div>
          </div>
        </header>

        <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-labelledby="build-snapshot">
          <h2 id="build-snapshot" className="sr-only">
            Build Snapshot
          </h2>
          {snapshot.map((item) => (
            <div key={item.label} className="border border-cyan-400/15 bg-zinc-950/80 p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-emerald-300/20 bg-emerald-950/20 p-5">
            <h2 className="text-xl font-black text-white">Choose This Build If</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-300">
              {chooseThisBuild.map((item) => (
                <li key={item} className="border border-emerald-300/15 bg-black/25 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-red-300/20 bg-red-950/15 p-5">
            <h2 className="text-xl font-black text-white">Avoid This Build If</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-300">
              {avoidThisBuild.map((item) => (
                <li key={item} className="border border-red-300/15 bg-black/25 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6 border border-blue-400/15 bg-zinc-950/80 p-5">
          <h2 className="text-2xl font-black text-white">Why This Build Works</h2>
          <div className="mt-3 grid max-w-4xl gap-3 text-sm leading-7 text-zinc-300">
            <p>
              Rapid Shot provides the main combat identity: steady ranged pressure from a Mercenary crossbow setup. That
              makes the build easier to understand than routes that ask you to solve clear, boss damage, and utility
              with unrelated mechanics at the same time.
            </p>
            <p>
              Fragmentation Rounds and Explosive Shot give the route conservative coverage when the main skill is not
              enough. They support pack pressure and tougher moments without changing the core decision: keep the build
              centered on Rapid Shot first.
            </p>
            <p>
              The result is a practical mercenary leveling direction for players who want a beginner ranged build with a
              clear job for each skill. Keep the route focused on readable combat decisions, stable defenses, and
              secondary skills that solve a specific problem.
            </p>
          </div>
        </section>

        <section className="mt-6 border border-cyan-400/15 bg-zinc-950/80 p-5">
          <h2 className="text-2xl font-black text-white">Core Skills and Roles</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {coreSkills.map((skill) => (
              <article key={skill.href} className="flex flex-col border border-cyan-300/15 bg-black/25 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">{skill.role}</p>
                <h3 className="mt-2 text-lg font-black text-white">{skill.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-300">{skill.copy}</p>
                <Link
                  href={skill.href}
                  className="mt-4 text-sm font-black text-amber-200 transition hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
                >
                  Explore Skill
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 grid items-start gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border border-blue-400/15 bg-zinc-950/80 p-5">
            <h2 className="text-2xl font-black text-white">Leveling Route</h2>
            <div className="mt-4 grid gap-3">
              {levelingRoute.map((step, index) => (
                <article key={step.title} className="border border-blue-300/15 bg-black/25 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Step {index + 1}</p>
                  <h3 className="mt-2 text-lg font-black text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{step.copy}</p>
                </article>
              ))}
            </div>
            <p className="mt-4 border border-amber-300/20 bg-amber-300/10 p-3 text-sm leading-6 text-amber-50">
              This guide focuses on establishing a clear progression foundation before you invest in more specialized
              gear or passive-tree choices.
            </p>
          </div>

          <div className="self-start border border-emerald-300/20 bg-zinc-950/80 p-5">
            <h2 className="text-2xl font-black text-white">Upgrade Priorities</h2>
            <ol className="mt-4 grid gap-3 text-sm leading-6 text-zinc-300">
              {upgradePriorities.map((priority) => (
                <li key={priority} className="border border-emerald-300/15 bg-black/25 px-3 py-2">
                  {priority}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-emerald-300/20 bg-zinc-950/80 p-5">
            <h2 className="text-2xl font-black text-white">Strengths</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-300">
              {strengths.map((item) => (
                <li key={item} className="border border-emerald-300/15 bg-black/25 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-zinc-600 bg-zinc-950/80 p-5">
            <h2 className="text-2xl font-black text-white">Trade-offs</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-300">
              {tradeoffs.map((item) => (
                <li key={item} className="border border-zinc-700 bg-black/25 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6 border border-amber-300/15 bg-zinc-950/80 p-5">
          <h2 className="text-2xl font-black text-white">Related Builds</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {relatedBuilds.map((relatedBuild) => (
              <article key={relatedBuild.slug} className="flex flex-col border border-amber-300/15 bg-black/25 p-4">
                <h3 className="text-lg font-black text-white">{relatedBuild.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-300">
                  {relatedReasonFor(relatedBuild.slug, relatedBuild.playstyle)}
                </p>
                <Link
                  href={`/builds/${relatedBuild.slug}`}
                  className="mt-4 text-sm font-black text-amber-200 transition hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
                >
                  View Build
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(8,13,20,0.96),rgba(10,22,30,0.9))] p-5 md:p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Build Diagnosis</p>
          <h2 className="mt-2 text-2xl font-black text-white">Not Sure This Is the Right Crossbow Route?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">
            Compare other POE2 builds or return to the Build Finder before committing to your next character.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/builds#featured-builds" className={linkClass}>
              Compare POE2 Builds
            </Link>
            <Link href="/builds" className={secondaryLinkClass}>
              Use the Build Finder
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
