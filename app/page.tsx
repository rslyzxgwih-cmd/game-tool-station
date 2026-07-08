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

const cards = [
  {
    href: "/builds",
    title: "Builds",
    items: ["Compare build paths", "Leveling builds", "Endgame routes"],
  },
  {
    href: "/skills",
    title: "Skills",
    items: ["Understand skill choices", "Tempest Bell", "Flame Wall"],
  },
  {
    href: "/builds/beginner",
    title: "Starter Builds",
    items: ["Find safest route", "Easy leveling", "Low-budget choices"],
  },
];

const decisionCards = [
  {
    href: "/class-picker",
    title: "Start My First Character",
    copy: "Choose a class and starter direction before opening build guides.",
    className: "from-sky-950 via-blue-700 to-cyan-900",
    glowClass: "shadow-[0_0_34px_rgba(14,165,233,0.24)]",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z" />
        <path d="M9 12l2 2 4-5" />
      </svg>
    ),
  },
  {
    href: "/builds",
    title: "Farm Currency",
    copy: "Pick a stable build path before chasing upgrades or farming loops.",
    className: "from-yellow-700 via-amber-600 to-stone-950",
    glowClass: "shadow-[0_0_34px_rgba(245,158,11,0.24)]",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <path d="M9 10h5a2 2 0 010 4h-4" />
        <path d="M12 7v10" />
      </svg>
    ),
  },
  {
    href: "/builds/poe2-mercenary-crossbow-starter-build",
    title: "Push Endgame",
    copy: "Use a proven route with clear damage, bossing, and escape roles.",
    className: "from-red-950 via-red-700 to-zinc-950",
    glowClass: "shadow-[0_0_34px_rgba(220,38,38,0.24)]",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 20l6-16 4 9 6 3-16 4z" />
        <path d="M10 14l4-4" />
      </svg>
    ),
  },
  {
    href: "/skills",
    title: "Try New Skills",
    copy: "Compare skill roles before adding another button to your build.",
    className: "from-violet-950 via-purple-700 to-fuchsia-950",
    glowClass: "shadow-[0_0_34px_rgba(147,51,234,0.24)]",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v5" />
        <path d="M12 17v5" />
        <path d="M4.2 4.2l3.5 3.5" />
        <path d="M16.3 16.3l3.5 3.5" />
        <path d="M2 12h5" />
        <path d="M17 12h5" />
        <path d="M4.2 19.8l3.5-3.5" />
        <path d="M16.3 7.7l3.5-3.5" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    href: "/builds/beginner",
    title: "Find Beginner Build",
    copy: "Match playstyle and friction level to the safest Starter Builds.",
    className: "from-emerald-950 via-green-700 to-teal-950",
    glowClass: "shadow-[0_0_34px_rgba(34,197,94,0.22)]",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 4h14v16H5z" />
        <path d="M8 8h8" />
        <path d="M8 12h5" />
        <path d="M8 16h7" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#05070a] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#05070a_0%,#11181b_42%,#05070a_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:52px_52px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-6 md:py-8">
        <section className="relative overflow-hidden border border-white/10 bg-[linear-gradient(135deg,#11161a_0%,#17201f_54%,#07090b_100%)] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.38)] md:p-8">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-moss to-transparent" />
          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">POE2 companion tool</p>
            <h1 className="mt-3 max-w-4xl text-[1.9rem] font-extrabold leading-tight text-white md:text-[3.25rem]">
              POE2 Decision Engine for Builds, Skills, and Leveling
            </h1>
            <p className="mt-3 max-w-3xl text-base font-bold leading-7 text-white/76">
              Tell us your situation. Find the right build, skills, and next step.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/builds"
                className="inline-flex min-h-11 items-center justify-center border border-emerald-300/60 bg-emerald-500/18 px-4 py-2 text-xs font-black uppercase text-emerald-100 shadow-[0_0_22px_rgba(16,185,129,0.18)] hover:bg-emerald-300 hover:text-ink"
              >
                Browse POE2 Builds
              </Link>
              <Link
                href="/builds/beginner"
                className="inline-flex min-h-11 items-center justify-center border border-white/20 bg-white/8 px-4 py-2 text-xs font-black uppercase text-white hover:bg-white hover:text-ink"
              >
                Starter Builds
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-black text-white">What do you want to achieve in Path of Exile 2?</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {decisionCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`group min-h-44 border border-white/12 bg-gradient-to-br ${card.className} ${card.glowClass} p-4 text-white transition duration-200 hover:-translate-y-1 hover:border-white/35 hover:shadow-[0_0_44px_rgba(255,255,255,0.14)] focus:outline-none focus:ring-2 focus:ring-emerald-300`}
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid size-12 place-items-center border border-white/30 bg-white/15 text-white shadow-[inset_0_0_18px_rgba(255,255,255,0.08)]">
                      {card.icon}
                    </span>
                    <span className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-white/70">Decision</span>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-black leading-tight">{card.title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white/78">{card.copy}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <NextActionEngine />

        <section className="mt-6 border border-white/10 bg-[#0b1013]/92 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">Recommended Paths</p>
              <h2 className="mt-2 max-w-4xl text-3xl font-black leading-tight text-white md:text-4xl">
                Choose a build route before opening every guide.
              </h2>
              <p className="mt-3 max-w-2xl text-base font-bold leading-7 text-white/68">
                Start with a focused leveling path, then compare a proven ranged option if you want cleaner distance and boss damage roles.
              </p>
            </div>
            <Link
              href="/builds"
              className="inline-flex min-h-11 items-center justify-center border border-white/15 bg-white/8 px-4 py-2 text-xs font-black uppercase text-white/82 hover:border-emerald-300 hover:text-emerald-100"
            >
              View Build Hub
            </Link>
          </div>
          <div className="mt-5 grid gap-3 lg:grid-cols-2">
            <Link
              href="/builds/monk"
              className="border border-emerald-300/25 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(8,12,14,0.96))] p-4 text-white shadow-[0_0_34px_rgba(16,185,129,0.12)] hover:border-emerald-300/60"
            >
              <span className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">Starter timing path</span>
              <h3 className="mt-2 text-2xl font-black leading-tight">POE2 Monk Build</h3>
              <dl className="mt-4 grid gap-3 text-sm leading-6 text-white/72">
                <div>
                  <dt className="font-black text-white">Best for</dt>
                  <dd>Players who want a skill-timing route around Tempest Bell and fast leveling decisions.</dd>
                </div>
                <div>
                  <dt className="font-black text-white">Difficulty</dt>
                  <dd>Medium</dd>
                </div>
                <div>
                  <dt className="font-black text-white">Recommended because</dt>
                  <dd>It gives Monk players a clear path from early skill choices into stronger burst windows.</dd>
                </div>
              </dl>
            </Link>
            <Link
              href="/builds/poe2-mercenary-crossbow-starter-build"
              className="border border-red-300/25 bg-[linear-gradient(135deg,rgba(220,38,38,0.16),rgba(8,12,14,0.96))] p-4 text-white shadow-[0_0_34px_rgba(220,38,38,0.12)] hover:border-red-300/60"
            >
              <span className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Ranged control path</span>
              <h3 className="mt-2 text-2xl font-black leading-tight">Mercenary Crossbow Starter</h3>
              <dl className="mt-4 grid gap-3 text-sm leading-6 text-white/72">
                <div>
                  <dt className="font-black text-white">Best for</dt>
                  <dd>Players who prefer distance, reload rhythm, and a more controlled bossing setup.</dd>
                </div>
                <div>
                  <dt className="font-black text-white">Difficulty</dt>
                  <dd>Easy to Medium</dd>
                </div>
                <div>
                  <dt className="font-black text-white">Recommended because</dt>
                  <dd>It is the clearest proven route for beginners who want safer damage windows.</dd>
                </div>
              </dl>
            </Link>
          </div>
          <Link
            href="/tools/exitlag"
            className="mt-3 inline-flex min-h-11 items-center justify-center border border-white/15 bg-white/8 px-4 py-2 text-xs font-black uppercase text-white/76 hover:border-emerald-300 hover:text-emerald-100"
          >
            POE2 lag fix
          </Link>
        </section>

        <section aria-label="Secondary exploration" className="mt-7 grid gap-3 md:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="border border-white/10 bg-white/[0.04] p-3 text-white/62 hover:border-emerald-300/50 hover:bg-white/[0.07]">
              <h2 className="text-base font-black text-white/84">{card.title}</h2>
              <ul className="mt-2 grid gap-1.5 text-sm leading-6 text-white/56">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
