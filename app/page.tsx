import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "POE2 Builds & Skills – Best POE2 Build Guide (Leveling + Endgame)",
  description:
    "Best POE2 builds, skills, and leveling paths for every class in Path of Exile 2.",
  alternates: {
    canonical: "/",
  },
};

const cards = [
  {
    href: "/builds",
    title: "Builds",
    items: ["Best Builds", "Leveling Builds", "Endgame Builds"],
  },
  {
    href: "/skills",
    title: "Skills",
    items: ["Tempest Bell", "Detonate Dead", "Flame Wall"],
  },
  {
    href: "/builds/beginner",
    title: "Beginner",
    items: ["Starter Builds", "Easy Leveling Guides"],
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      <section className="border-b border-line pb-5">
        <h1 className="max-w-4xl text-3xl font-black leading-tight text-ink md:text-4xl">
          POE2 Builds & Skills – Best Leveling and Endgame Guides
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-ink/68">
          Find optimized builds, skills, and leveling paths for every class in Path of Exile 2.
        </p>
        <Link
          href="/builds"
          className="mt-4 inline-flex min-h-11 items-center justify-center border border-ink bg-ink px-4 py-2 text-xs font-black uppercase text-white hover:bg-moss"
        >
          Browse Builds
        </Link>
      </section>

      <section className="mt-4 grid gap-3 md:grid-cols-3">
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className="border border-line bg-panel p-4 hover:border-moss">
            <h2 className="text-lg font-black text-ink">{card.title}</h2>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/70">
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Link>
        ))}
      </section>
    </main>
  );
}
