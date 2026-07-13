import type { Metadata } from "next";
import Link from "next/link";
import { NextActionEngine } from "@/components/NextActionEngine";

export const metadata: Metadata = {
  title: "POE2 Builds & Skills - Decision Engine for Starter Builds",
  description:
    "Get a POE2 diagnosis for your current situation, then choose the next build, skill, or leveling action.",
  alternates: {
    canonical: "/",
  },
};

const heroBackground = "/images/hero-bg.webp";

const goalCards = [
  {
    href: "/builds/beginner",
    title: "Progress Faster",
    copy: "Start with a clearer route through leveling and early upgrades.",
    className: "from-emerald-500/24 via-emerald-950/72 to-black/92",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19h16" />
        <path d="M6 16l4-4 3 3 5-7" />
        <path d="M15 8h3v3" />
      </svg>
    ),
  },
  {
    href: "/builds",
    title: "Make Currency",
    copy: "Choose a reliable path before investing in gear or farming loops.",
    className: "from-amber-400/24 via-yellow-950/74 to-black/92",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <path d="M9 9h5a2 2 0 010 4h-4" />
        <path d="M12 6v12" />
      </svg>
    ),
  },
  {
    href: "/skills",
    title: "Experiment",
    copy: "Explore skill ideas without rebuilding around the wrong mechanic.",
    className: "from-purple-400/24 via-violet-950/76 to-black/92",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 3h6" />
        <path d="M10 3v5l-5 9a3 3 0 002.6 4h8.8a3 3 0 002.6-4l-5-9V3" />
        <path d="M8 15h8" />
      </svg>
    ),
  },
  {
    href: "/builds/poe2-mercenary-crossbow-starter-build",
    title: "Push Endgame",
    copy: "Move into bosses and maps with a build that has defined jobs.",
    className: "from-red-500/28 via-red-950/78 to-black/92",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l7 7-7 11-7-11 7-7z" />
        <path d="M9 10h6" />
        <path d="M12 7v9" />
      </svg>
    ),
  },
  {
    href: "/class-picker",
    title: "Relax & Have Fun",
    copy: "Pick a class fantasy and pace that makes the game easier to enjoy.",
    className: "from-cyan-400/24 via-sky-950/74 to-black/92",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l8 4v5c0 4.5-3.4 7.5-8 9-4.6-1.5-8-4.5-8-9V7l8-4z" />
        <path d="M8 12h8" />
        <path d="M10 15h4" />
      </svg>
    ),
  },
];

const recommendedBuilds = [
  {
    href: "/builds/poe2-mercenary-crossbow-starter-build",
    title: "Mercenary Crossbow Starter Build",
    category: "Ranged Starter",
    difficulty: "Easy",
    image: "/images/builds/mercenary.webp",
    playerFit: "Best for new players who want safe damage and clear weapon upgrades.",
    description: "A steady crossbow route with ranged control and simple combat decisions.",
  },
  {
    href: "/builds/monk-crossbow-build",
    title: "Monk Crossbow Build",
    category: "Hybrid Monk",
    difficulty: "Medium",
    image: "/images/builds/monk.webp",
    playerFit: "Best for players who want mobility, timing windows, and ranged pressure.",
    description: "A hybrid character path built around crossbow range and Monk payoff timing.",
  },
  {
    href: "/builds/poe2-monk-tempest-bell-build",
    title: "Invoker Build",
    category: "Burst Caster",
    difficulty: "Medium",
    image: "/images/builds/invoker.webp",
    playerFit: "Best for players who enjoy setup, burst windows, and magic payoff moments.",
    description: "A spell-forward route that rewards timing and controlled burst damage.",
  },
  {
    href: "/builds/poe2-ranger-lightning-arrow-starter-build",
    title: "Lightning Arrow Farming Build",
    category: "Fast Clear",
    difficulty: "Easy",
    image: "/images/builds/lightning-arrow.webp",
    playerFit: "Best for players who want speed, distance, and smoother farming loops.",
    description: "A bow-focused selection for fast clears and low-friction map movement.",
  },
];

const toolCards = [
  { href: "/class-picker", title: "Class Picker", copy: "Choose a class fantasy." },
  { href: "/skills", title: "Skill Explorer", copy: "Compare skill purpose." },
  { href: "/builds", title: "Build Planner", copy: "Browse proven paths." },
  { href: "/builds/beginner", title: "Leveling Guides", copy: "Start safely." },
];

export default function HomePage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#030304] text-white">
      <section
        className="relative min-h-[760px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(3,3,4,0.72) 0%,rgba(3,3,4,0.38) 46%,rgba(3,3,4,0.08) 100%),linear-gradient(180deg,rgba(3,3,4,0) 0%,rgba(3,3,4,0.18) 62%,#030304 98%),url('${heroBackground}')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(245,158,11,0.14),transparent_24%),radial-gradient(circle_at_20%_28%,rgba(147,51,234,0.14),transparent_26%),radial-gradient(circle_at_52%_58%,rgba(59,130,246,0.1),transparent_34%)]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#030304] to-transparent" />

        <div className="relative mx-auto flex min-h-[760px] max-w-7xl flex-col justify-between px-4 py-8 md:py-10">
          <div className="max-w-4xl pt-10 md:pt-20">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-amber-200">POE2 companion product</p>
            <h1 className="mt-5 max-w-6xl text-[3.05rem] font-black leading-[0.92] text-white drop-shadow-[0_10px_42px_rgba(0,0,0,0.72)] md:text-[6.4rem]">
              Find your next Path of Exile 2 build.
            </h1>
            <p className="mt-6 max-w-2xl text-base font-bold leading-7 text-white/72 md:text-xl md:leading-8">
              Choose your goal. We'll help you find the right build, skills, and progression path.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/builds/beginner" className="inline-flex min-h-14 items-center justify-center bg-amber-200 px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-zinc-950 shadow-[0_0_56px_rgba(245,158,11,0.36)] ring-1 ring-amber-100/60 hover:bg-white">
                Start with a build
              </Link>
              <Link href="/skills" className="inline-flex min-h-14 items-center justify-center bg-black/32 px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white/90 ring-1 ring-white/28 backdrop-blur hover:bg-white hover:text-zinc-950">
                Explore skills
              </Link>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {goalCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className={`group min-h-52 bg-gradient-to-br ${card.className} p-5 shadow-[0_24px_70px_rgba(0,0,0,0.3)] ring-1 ring-white/14 backdrop-blur transition duration-200 hover:-translate-y-1 hover:ring-white/36 hover:shadow-[0_0_52px_rgba(255,255,255,0.12)]`}
              >
                <span className="grid size-13 place-items-center bg-white/10 text-white ring-1 ring-white/32">
                  {card.icon}
                </span>
                <h2 className="mt-7 text-2xl font-black leading-tight">{card.title}</h2>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/68">{card.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-10">
        <section className="mt-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Recommended Builds</p>
              <h2 className="mt-2 max-w-3xl text-3xl font-black leading-tight md:text-5xl">Routes worth opening first.</h2>
            </div>
            <Link href="/builds" className="inline-flex min-h-11 items-center justify-center bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/78 ring-1 ring-white/14 hover:bg-white hover:text-zinc-950">
              All Builds
            </Link>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {recommendedBuilds.map((build) => (
              <Link key={build.title} href={build.href} className="group overflow-hidden bg-[#070809] text-white shadow-[0_28px_80px_rgba(0,0,0,0.34)] ring-1 ring-white/10 transition duration-200 hover:-translate-y-1 hover:ring-amber-200/44">
                <div
                  className="relative aspect-video overflow-hidden bg-zinc-900"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.2) 52%,rgba(0,0,0,0.56) 100%),url('${build.image}')`,
                    backgroundPosition: "center 38%",
                    backgroundSize: "cover",
                  }}
                >
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/34 via-transparent to-black/10 transition duration-200 group-hover:from-black/18" />
                  <span className="absolute left-3 top-3 bg-amber-200 px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-[0.14em] text-zinc-950 shadow-[0_0_22px_rgba(245,158,11,0.26)]">
                    {build.category}
                  </span>
                  <span className="absolute right-3 top-3 bg-black/48 px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-[0.14em] text-white/90 ring-1 ring-white/18">
                    {build.difficulty}
                  </span>
                </div>
                <div className="border-t border-white/10 p-4">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-amber-200/80">Character Selection</p>
                  <h3 className="mt-2 text-lg font-black leading-tight group-hover:text-amber-100">{build.title}</h3>
                  <p className="mt-3 text-sm font-bold leading-6 text-white/76">{build.playerFit}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/54">{build.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Tool Navigation</p>
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {toolCards.map((tool) => (
              <Link key={tool.title} href={tool.href} className="bg-white/[0.045] p-4 text-white shadow-[0_18px_48px_rgba(0,0,0,0.18)] ring-1 ring-white/10 hover:bg-white/[0.08] hover:ring-emerald-200/40">
                <h2 className="text-base font-black">{tool.title}</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/56">{tool.copy}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Decision Engine</p>
            <h2 className="mt-2 text-3xl font-black leading-tight md:text-5xl">Need a diagnosis before choosing?</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/58 md:text-base">
              Answer a few questions and get the next action that fits your campaign, Atlas, level, experience, and current goal.
            </p>
          </div>
          <NextActionEngine />
        </section>
      </div>
    </main>
  );
}
