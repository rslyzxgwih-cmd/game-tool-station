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
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold">
        POE2 Lag Fix - Reduce Latency and Improve Combat Responsiveness
      </h1>

      <p className="mt-4 text-sm text-ink/80 leading-6">
        If POE2 feels delayed, rubberbanded, or unstable, the problem is often routing instead of
        your build. This page is the single POE2 lag fix guide for poe 2 lag, poe2 lag, poe2 lagging,
        poe2 latency, poe2 ping, poe2 delay, and poe2 延迟 problems.
      </p>

      <section className="mt-6 border border-line bg-panel p-4">
        <h2 className="text-lg font-bold">POE2 Lag Problems</h2>
        <p className="mt-2 text-sm text-ink/80 leading-6">
          POE2 lag usually shows up as high ping spikes, combat delay, delayed skill input, or
          short freezes during boss mechanics. When poe2 lagging starts during movement or burst
          windows, changing your build will not fix the underlying connection path.
        </p>
        <ul className="mt-3 text-sm text-ink/80 space-y-2">
          <li>- Poe 2 lag during mapping or boss encounters</li>
          <li>- Poe2 latency spikes when enemies or effects fill the screen</li>
          <li>- Poe2 ping instability that makes movement feel inconsistent</li>
          <li>- Poe2 delay between pressing a skill and seeing the action happen</li>
        </ul>
      </section>

      <section className="mt-6 border border-line bg-panel p-4">
        <h2 className="text-lg font-bold">How Lag Hurts Monk and Tempest Bell Builds</h2>
        <p className="mt-2 text-sm text-ink/80 leading-6">
          Monk builds are sensitive to timing. If Tempest Bell lands late, if melee skills feel out
          of sync, or if your character desyncs during a boss window, you lose damage even when the
          build is correct.
        </p>
        <ul className="mt-3 text-sm text-ink/80 space-y-2">
          <li>- Tempest Bell timing issues reduce burst damage windows</li>
          <li>- Monk build responsiveness loss makes fast rotations feel weaker</li>
          <li>- Melee desync problems cause missed positioning and unsafe trades</li>
          <li>- High ping can turn a strong build into inconsistent gameplay</li>
        </ul>
      </section>

      <section className="mt-6 border border-line bg-panel p-4">
        <h2 className="text-lg font-bold">ExitLag Is the POE2 Latency Solution</h2>
        <p className="mt-2 text-sm text-ink/80 leading-6">
          ExitLag focuses on routing optimization, latency stabilization, and ping reduction. Use it
          when POE2 lag, poe2 latency, or poe2 ping issues are affecting combat responsiveness.
        </p>
        <ul className="mt-3 text-sm text-ink/80 space-y-2">
          <li>- Optimizes the network route between your PC and game server</li>
          <li>- Stabilizes latency so combat timing feels more consistent</li>
          <li>- Reduces ping spikes that cause delayed skills and missed actions</li>
          <li>- Keeps the solution simple: POE2 lag problem to ExitLag fix</li>
        </ul>
      </section>

      <section className="mt-6 border-2 border-moss bg-panel p-4">
        <h2 className="text-lg font-black">Fix POE2 Lag with ExitLag</h2>
        <p className="mt-2 text-sm text-ink/80">
          If POE2 lag is causing delayed skills, high ping spikes, or lost DPS windows, use ExitLag
          before changing your build. The goal is simple: reduce latency, stabilize routing, and make
          combat feel responsive again.
        </p>

        <Link
          href={exitLagAffiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-4 inline-block bg-black text-white px-4 py-2 font-bold hover:bg-moss"
        >
          Fix POE2 lag with ExitLag
        </Link>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold">Related Pages</h2>

        <div className="mt-3 space-y-2 text-sm">
          {relatedLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-moss font-bold block">
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
