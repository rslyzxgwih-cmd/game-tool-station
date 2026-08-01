import type { Metadata } from "next";
import Link from "next/link";

const exitLagAffiliateUrl = "https://www.exitlag.com/refer/10318560";

export const metadata: Metadata = {
  title: "POE2 Lag Fix - Reduce Latency, Ping Spikes and Combat Delay",
  description:
    "Fix POE2 lag, poe2 lagging, latency, ping spikes, delay, and poe2 延迟 with ExitLag routing optimization for smoother combat responsiveness.",
  alternates: {
    canonical: "/tools/exitlag",
  },
  keywords: [
    "poe 2 lag",
    "poe2 lag",
    "poe2 lagging",
    "poe2 latency",
    "poe2 ping",
    "poe2 delay",
    "poe2 延迟",
    "poe2 lag fix",
    "ExitLag POE2",
  ],
};

const relatedLinks = [
  { href: "/builds/monk", label: "Monk build responsiveness guide" },
  { href: "/builds/monk-crossbow-build", label: "Monk Crossbow timing guide" },
  { href: "/skills/tempest-bell", label: "Tempest Bell timing skill page" },
  { href: "/builds", label: "POE2 builds hub" },
];

export default function ExitLagPage() {
  return (
    <main className="bg-[#030304] text-zinc-100">
      <article className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
      <header className="border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(10,14,20,0.98),rgba(12,21,34,0.92)_55%,rgba(31,22,8,0.82))] p-5 shadow-[0_0_50px_rgba(14,165,233,0.08)] sm:p-7">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Performance Tool</p>
        <h1 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
          POE2 Lag Fix - Reduce Latency and Improve Combat Responsiveness
        </h1>

      <p className="mt-4 text-sm leading-7 text-zinc-300">
        If POE2 feels delayed, rubberbanded, or unstable, the problem is often routing instead of
        your build. This page is the single POE2 lag fix guide for poe 2 lag, poe2 lag, poe2 lagging,
        poe2 latency, poe2 ping, and poe2 delay problems.
      </p>
      </header>

      <section className="mt-6 border border-cyan-400/15 bg-zinc-950/80 p-5">
        <h2 className="text-lg font-bold text-white">POE2 Lag Problems</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-300">
          POE2 lag usually shows up as high ping spikes, combat delay, delayed skill input, or
          short freezes during boss mechanics. When poe2 lagging starts during movement or burst
          windows, changing your build will not fix the underlying connection path.
        </p>
        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
          <li>- Poe 2 lag during mapping or boss encounters</li>
          <li>- Poe2 latency spikes when enemies or effects fill the screen</li>
          <li>- Poe2 ping instability that makes movement feel inconsistent</li>
          <li>- Poe2 delay between pressing a skill and seeing the action happen</li>
        </ul>
      </section>

      <section className="mt-6 border border-cyan-400/15 bg-zinc-950/80 p-5">
        <h2 className="text-lg font-bold text-white">How Lag Hurts Monk and Tempest Bell Builds</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-300">
          Monk builds are sensitive to timing. If Tempest Bell lands late, if melee skills feel out
          of sync, or if your character desyncs during a boss window, you lose damage even when the
          build is correct.
        </p>
        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
          <li>- Tempest Bell timing issues reduce burst damage windows</li>
          <li>- Monk build responsiveness loss makes fast rotations feel weaker</li>
          <li>- Melee desync problems cause missed positioning and unsafe trades</li>
          <li>- High ping can turn a strong build into inconsistent gameplay</li>
        </ul>
      </section>

      <section className="mt-6 border border-cyan-400/15 bg-zinc-950/80 p-5">
        <h2 className="text-lg font-bold text-white">ExitLag Is the POE2 Latency Solution</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-300">
          ExitLag focuses on routing optimization, latency stabilization, and ping reduction. Use it
          when POE2 lag, poe2 latency, or poe2 ping issues are affecting combat responsiveness.
        </p>
        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
          <li>- Optimizes the network route between your PC and game server</li>
          <li>- Stabilizes latency so combat timing feels more consistent</li>
          <li>- Reduces ping spikes that cause delayed skills and missed actions</li>
          <li>- Keeps the solution simple: POE2 lag problem to ExitLag fix</li>
        </ul>
      </section>

      <section className="mt-6 border border-amber-300/40 bg-amber-300/10 p-5">
        <h2 className="text-lg font-black text-white">Fix POE2 Lag with ExitLag</h2>
        <p className="mt-2 text-sm leading-6 text-amber-50">
          If POE2 lag is causing delayed skills, high ping spikes, or lost DPS windows, use ExitLag
          before changing your build. The goal is simple: reduce latency, stabilize routing, and make
          combat feel responsive again.
        </p>

        <Link
          href={exitLagAffiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-4 inline-flex min-h-11 items-center justify-center bg-amber-300 px-4 py-2 font-bold text-zinc-950 hover:bg-amber-200"
        >
          Fix POE2 lag with ExitLag
        </Link>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-white">Related Pages</h2>

        <div className="mt-3 space-y-2 text-sm">
          {relatedLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block font-bold text-cyan-200 hover:text-cyan-100">
              {link.label}
            </Link>
          ))}
        </div>
      </section>
      </article>
    </main>
  );
}
