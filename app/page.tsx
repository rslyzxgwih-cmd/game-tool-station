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
      <section className="border-b border-line pb-[0.65rem]">
        <h1 className="max-w-4xl text-[1.75rem] font-extrabold leading-tight text-ink md:text-[2.125rem]">
          POE2 Builds & Skills – Best Leveling and Endgame Guides
        </h1>
        <p className="mt-[0.65rem] max-w-3xl text-sm leading-6 text-ink/68">
          Find optimized builds, skills, and leveling paths for every class in Path of Exile 2.
        </p>
        <Link
          href="/builds"
          className="mt-[0.65rem] inline-flex min-h-9 items-center justify-center border border-line bg-paper px-3 py-1.5 text-xs font-bold uppercase text-ink/55 hover:border-moss hover:text-ink/75"
        >
          Browse Builds
        </Link>
      </section>

      <section className="mt-4 border-4 border-ink bg-panel p-6 shadow-xl md:p-8">
        <h2 className="max-w-4xl text-3xl font-black leading-tight text-ink md:text-4xl">
          <Link href="/builds/monk" className="hover:text-moss">
            POE2 Monk Build
          </Link>{" "}
          <span className="text-ink/72">(Tempest Bell Focus)</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg font-black leading-7 text-ink/80">
          Best beginner leveling build for fast progression in Path of Exile 2.
        </p>
        <Link
          href="/builds/monk"
          className="mt-6 inline-flex min-h-14 items-center justify-center border-2 border-ink bg-moss px-6 py-4 text-base font-black uppercase text-white hover:bg-ink"
        >
          POE2 Monk Build
        </Link>
        <Link
          href="/tools/exitlag"
          className="ml-0 mt-3 inline-flex min-h-10 items-center justify-center border border-line bg-paper px-4 py-2 text-xs font-black uppercase text-ink/70 hover:border-moss hover:text-ink md:ml-3"
        >
          POE2 lag fix
        </Link>
      </section>

      <section aria-label="Secondary exploration" className="mt-7 grid gap-3 md:grid-cols-3">
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className="border border-line bg-paper/70 p-3 text-ink/65 hover:border-moss hover:bg-paper">
            <h2 className="text-base font-black text-ink/78">{card.title}</h2>
            <ul className="mt-2 grid gap-1.5 text-sm leading-6 text-ink/58">
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
