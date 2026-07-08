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
    difficulty: "Easy",
    image: "/images/builds/mercenary.webp",
    description: "Ranged control, clear skill roles, and weapon upgrades that are easy to understand.",
  },
  {
    href: "/builds/monk-crossbow-build",
    title: "Monk Crossbow Build",
    difficulty: "Medium",
    image: "/images/builds/monk.webp",
    description: "A hybrid route for players testing crossbow range with Monk payoff timing.",
  },
  {
    href: "/builds/poe2-monk-tempest-bell-build",
    title: "Invoker Build",
    difficulty: "Medium",
    image: "/images/builds/invoker.webp",
    description: "A burst-focused Monk path built around timing windows and payoff skills.",
  },
  {
    href: "/builds/poe2-ranger-lightning-arrow-starter-build",
    title: "Lightning Arrow Farming Build",
    difficulty: "Easy",
    image: "/images/builds/lightning-arrow.webp",
    description: "Fast bow clear for players who want speed, distance, and smoother farming.",
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
        className="relative min-h-[680px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(3,3,4,0.96)_0%,rgba(3,3,4,0.78)_46%,rgba(3,3,4,0.22)_100%),linear-gradient(180deg,rgba(3,3,4,0.1)_0%,#030304_94%),url('${heroBackground}')`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(245,158,11,0.16),transparent_24%),radial-gradient(circle_at_20%_28%,rgba(147,51,234,0.2),transparent_26%)]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#030304] to-transparent" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col justify-between px-4 py-8 md:py-10">
          <div className="max-w-4xl pt-10 md:pt-20">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-amber-200">POE2 companion product</p>
            <h1 className="mt-5 max-w-5xl text-[2.7rem] font-black leading-[0.95] text-white md:text-[5.7rem]">
              Find your next Path of Exile 2 build.
            </h1>
            <p className="mt-6 max-w-2xl text-base font-bold leading-7 text-white/72 md:text-xl md:leading-8">
              Choose your goal. We'll help you find the right build, skills, and progression path.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/builds/beginner" className="inline-flex min-h-12 items-center justify-center bg-amber-200 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-zinc-950 shadow-[0_0_36px_rgba(245,158,11,0.22)] hover:bg-white">
                Start with a build
              </Link>
              <Link href="/skills" className="inline-flex min-h-12 items-center justify-center bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white/86 ring-1 ring-white/18 hover:bg-white hover:text-zinc-950">
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
        <section className="-mt-8 relative z-10">
          <NextActionEngine />
        </section>

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
              <Link key={build.title} href={build.href} className="group overflow-hidden bg-[#070809] text-white shadow-[0_28px_80px_rgba(0,0,0,0.34)] ring-1 ring-white/10 hover:ring-amber-200/44">
                <div
                  className="relative aspect-[4/3] bg-zinc-900"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.82)),url('${build.image}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <span className="absolute left-3 top-3 bg-black/44 px-2 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-white/86 ring-1 ring-white/18">
                    {build.difficulty}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-black leading-tight group-hover:text-amber-100">{build.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/62">{build.description}</p>
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
      </div>
    </main>
  );
}
