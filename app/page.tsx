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

const goalCards = [
  {
    href: "/builds/beginner",
    title: "Progress Faster",
    copy: "Find a cleaner leveling route before your next campaign wall.",
    accent: "text-emerald-200",
    className: "from-emerald-950 via-green-800 to-zinc-950",
    glowClass: "shadow-[0_0_38px_rgba(16,185,129,0.2)]",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19h16" />
        <path d="M6 16l4-4 3 3 5-7" />
        <path d="M15 8h3v3" />
      </svg>
    ),
  },
  {
    href: "/builds",
    title: "Make Currency",
    copy: "Choose stable builds that clear efficiently and waste fewer upgrades.",
    accent: "text-amber-200",
    className: "from-yellow-800 via-amber-700 to-stone-950",
    glowClass: "shadow-[0_0_38px_rgba(245,158,11,0.22)]",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <path d="M9 9h5a2 2 0 010 4h-4" />
        <path d="M12 6v12" />
      </svg>
    ),
  },
  {
    href: "/skills",
    title: "Experiment",
    copy: "Compare skill roles before rebuilding your character around a new idea.",
    accent: "text-purple-200",
    className: "from-violet-950 via-purple-800 to-fuchsia-950",
    glowClass: "shadow-[0_0_38px_rgba(147,51,234,0.22)]",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 3h6" />
        <path d="M10 3v5l-5 9a3 3 0 002.6 4h8.8a3 3 0 002.6-4l-5-9V3" />
        <path d="M8 15h8" />
      </svg>
    ),
  },
  {
    href: "/builds/poe2-mercenary-crossbow-starter-build",
    title: "Push Endgame",
    copy: "Pick a focused path with clearer boss damage and survival priorities.",
    accent: "text-red-200",
    className: "from-red-950 via-red-800 to-zinc-950",
    glowClass: "shadow-[0_0_38px_rgba(220,38,38,0.23)]",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l7 7-7 11-7-11 7-7z" />
        <path d="M9 10h6" />
        <path d="M12 7v9" />
      </svg>
    ),
  },
  {
    href: "/class-picker",
    title: "Relax & Have Fun",
    copy: "Start with a class fantasy that fits your pace instead of chasing a spreadsheet.",
    accent: "text-cyan-200",
    className: "from-sky-950 via-cyan-800 to-teal-950",
    glowClass: "shadow-[0_0_38px_rgba(14,165,233,0.21)]",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2">
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
    tone: "from-red-950/80 via-zinc-950 to-zinc-950",
    description: "A ranged starter route for players who want clear skill roles, safer spacing, and direct weapon upgrades.",
  },
  {
    href: "/builds/monk-crossbow-build",
    title: "Monk Crossbow Build",
    difficulty: "Medium",
    tone: "from-emerald-950/80 via-zinc-950 to-zinc-950",
    description: "A hybrid route for players testing crossbow range with Monk payoff timing and Tempest Bell decisions.",
  },
  {
    href: "/builds/poe2-monk-tempest-bell-build",
    title: "Invoker Build",
    difficulty: "Medium",
    tone: "from-violet-950/80 via-zinc-950 to-zinc-950",
    description: "A Monk burst path for players who like timing windows, payoff skills, and active combat rhythm.",
  },
  {
    href: "/builds/poe2-ranger-lightning-arrow-starter-build",
    title: "Lightning Arrow Farming Build",
    difficulty: "Easy",
    tone: "from-amber-950/80 via-zinc-950 to-zinc-950",
    description: "A fast bow clear option for players who want distance, momentum, and smoother farming decisions.",
  },
];

const toolCards = [
  {
    href: "/class-picker",
    title: "Class Picker",
    copy: "Choose your first direction.",
  },
  {
    href: "/skills",
    title: "Skill Explorer",
    copy: "Understand what each skill solves.",
  },
  {
    href: "/builds",
    title: "Build Planner",
    copy: "Compare existing build paths.",
  },
  {
    href: "/builds/beginner",
    title: "Leveling Guides",
    copy: "Start with safer progression routes.",
  },
];

const footerLinks = [
  { href: "/builds", label: "POE2 Builds" },
  { href: "/skills", label: "Skills" },
  { href: "/builds/beginner", label: "Starter Builds" },
  { href: "/builds/monk", label: "Monk Builds" },
];

export default function HomePage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#030406] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(120,53,15,0.32),transparent_34%),radial-gradient(circle_at_12%_24%,rgba(88,28,135,0.26),transparent_30%),linear-gradient(180deg,#05070a_0%,#11100e_45%,#040506_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        <section className="relative overflow-hidden border border-white/10 bg-[linear-gradient(135deg,rgba(20,16,13,0.94),rgba(10,10,14,0.94)_52%,rgba(5,7,10,0.98))] px-5 py-14 text-center shadow-[0_34px_100px_rgba(0,0,0,0.48)] md:px-8 md:py-20">
          <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
          <div aria-hidden="true" className="absolute inset-x-16 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent" />
          <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-200">POE2 companion app</p>
          <h1 className="mx-auto mt-5 max-w-5xl text-[2.35rem] font-black leading-none text-white md:text-[4.8rem]">
            Find your next Path of Exile 2 build.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base font-bold leading-7 text-white/72 md:text-lg">
            Choose your goal. We'll help you find the right build, skills, and progression path.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/builds"
              className="inline-flex min-h-12 items-center justify-center border border-amber-200/60 bg-amber-300/14 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-amber-100 shadow-[0_0_28px_rgba(245,158,11,0.18)] hover:bg-amber-200 hover:text-zinc-950"
            >
              Explore Builds
            </Link>
            <Link
              href="/builds/beginner"
              className="inline-flex min-h-12 items-center justify-center border border-white/18 bg-white/8 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white/84 hover:border-emerald-200 hover:text-emerald-100"
            >
              Starter Builds
            </Link>
          </div>
        </section>

        <section className="mt-7">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-200">Choose your goal</p>
              <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">What do you want from your next run?</h2>
            </div>
            <Link href="/skills" className="text-sm font-black uppercase tracking-[0.14em] text-white/58 hover:text-white">
              Browse Skills
            </Link>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {goalCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className={`group min-h-56 border border-white/12 bg-gradient-to-br ${card.className} ${card.glowClass} p-5 transition duration-200 hover:-translate-y-1 hover:border-white/35 hover:shadow-[0_0_48px_rgba(255,255,255,0.12)] focus:outline-none focus:ring-2 focus:ring-amber-200/70`}
              >
                <span className={`grid size-14 place-items-center border border-white/24 bg-white/10 ${card.accent} shadow-[inset_0_0_22px_rgba(255,255,255,0.08)]`}>
                  {card.icon}
                </span>
                <h3 className="mt-8 text-2xl font-black leading-tight text-white">{card.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/70">{card.copy}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <NextActionEngine />
        </section>

        <section className="mt-7 border border-white/10 bg-zinc-950/78 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:p-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-200">Recommended Builds</p>
              <h2 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">Routes worth opening first.</h2>
            </div>
            <Link href="/builds" className="inline-flex min-h-11 items-center justify-center border border-white/15 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/78 hover:border-amber-200 hover:text-amber-100">
              All Builds
            </Link>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {recommendedBuilds.map((build) => (
              <Link key={build.title} href={build.href} className="group overflow-hidden border border-white/10 bg-[#08090c] text-white hover:border-amber-200/50">
                <div className={`relative aspect-[16/9] bg-gradient-to-br ${build.tone}`}>
                  <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_32%_25%,rgba(255,255,255,0.18),transparent_22%),linear-gradient(135deg,transparent,rgba(255,255,255,0.08))]" />
                  <span className="absolute left-3 top-3 border border-white/20 bg-black/35 px-2 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-white/82">
                    {build.difficulty}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-black leading-tight group-hover:text-amber-100">{build.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/64">{build.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200">Tool Navigation</p>
          <div className="mt-3 grid gap-3 md:grid-cols-4">
            {toolCards.map((tool) => (
              <Link key={tool.title} href={tool.href} className="border border-white/10 bg-white/[0.045] p-4 text-white shadow-[0_18px_48px_rgba(0,0,0,0.2)] hover:border-emerald-200/50 hover:bg-white/[0.075]">
                <h2 className="text-base font-black">{tool.title}</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/58">{tool.copy}</p>
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-8 border-t border-white/10 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-white">POE2 Starter Tools</p>
              <p className="mt-1 text-sm font-semibold text-white/52">Build decisions, skill paths, and leveling routes for Path of Exile 2 players.</p>
            </div>
            <nav className="flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/58">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="border border-white/10 bg-white/[0.04] px-3 py-2 hover:border-amber-200/50 hover:text-amber-100">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </footer>
      </div>
    </main>
  );
}
