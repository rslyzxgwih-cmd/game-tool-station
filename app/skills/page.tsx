import type { Metadata } from "next";
import Link from "next/link";
import { skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "POE2 Skills 鈥?Best POE2 Build Guide (Leveling + Endgame)",
  description: "Best POE2 skill guide for beginner builds, leveling choices, and endgame setup planning.",
  alternates: {
    canonical: "/skills",
  },
};

const featuredSkillSlugs = [
  "tempest-bell",
  "time-of-need",
  "profane-ritual",
  "glacial-lance",
  "stormcaller-arrow",
  "rain-of-arrows",
];

const skillGroups = [
  {
    title: "Build-Defining Skills",
    copy: "Start here when a skill changes the whole route, not just one support slot.",
    slugs: ["tempest-bell", "spark", "lightning-arrow", "detonate-dead"],
  },
  {
    title: "Leveling and Safety Skills",
    copy: "Use these when the current problem is survival, control, or smoother campaign progress.",
    slugs: ["time-of-need", "temporal-chains", "enfeeble", "shield-charge"],
  },
  {
    title: "Ranged and Area Skills",
    copy: "Compare these when the build needs better spacing, coverage, or bow/crossbow direction.",
    slugs: ["rain-of-arrows", "stormcaller-arrow", "glacial-lance", "rapid-shot"],
  },
];

function skillBySlug(slug: string) {
  return skills.find((skill) => skill.slug === slug);
}

export default function SkillsPage() {
  const featuredSkills = featuredSkillSlugs
    .map(skillBySlug)
    .filter((skill): skill is (typeof skills)[number] => Boolean(skill));

  return (
    <main className="bg-[#030304] text-zinc-100">
      <article className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <header className="border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(10,14,20,0.98),rgba(12,21,34,0.92)_55%,rgba(31,22,8,0.82))] p-5 shadow-[0_0_50px_rgba(14,165,233,0.08)] sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Skill Explorer</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">POE2 Skills</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
            Use the skill hub to decide which POE2 skill belongs in your current build. Start with the role the
            character needs: main damage, coverage, recovery, control, mobility, or a supporting layer.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/builds"
              className="inline-flex min-h-11 items-center justify-center border border-amber-300/50 bg-amber-300 px-4 py-2 text-sm font-black text-zinc-950 transition hover:bg-amber-200"
            >
              Use the Build Finder
            </Link>
            <Link
              href="/builds/beginner"
              className="inline-flex min-h-11 items-center justify-center border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/15"
            >
              Compare Beginner Builds
            </Link>
          </div>
        </header>

        <section className="mt-6 grid gap-4 md:grid-cols-3" aria-labelledby="featured-skills">
          <h2 id="featured-skills" className="sr-only">
            Featured POE2 Skills
          </h2>
          {featuredSkills.map((skill) => (
            <Link
              key={skill.slug}
              href={`/skills/${skill.slug}`}
              className="border border-cyan-400/15 bg-zinc-950/80 p-4 transition hover:border-amber-300/40 hover:bg-zinc-900"
            >
              <span className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                {skill.tags.slice(0, 2).join(" / ")}
              </span>
              <span className="mt-3 block text-xl font-black text-white">{skill.name}</span>
              <span className="mt-2 block text-sm leading-6 text-zinc-300">{skill.bestFor}</span>
            </Link>
          ))}
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <section key={group.title} className="border border-amber-300/15 bg-zinc-950/80 p-5">
              <h2 className="text-xl font-black text-white">{group.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{group.copy}</p>
              <div className="mt-4 grid gap-2">
                {group.slugs.map((slug) => {
                  const skill = skillBySlug(slug);

                  if (!skill) {
                    return null;
                  }

                  return (
                    <Link
                      key={skill.slug}
                      href={`/skills/${skill.slug}`}
                      className="border border-zinc-700 bg-black/25 px-3 py-2 text-sm font-bold text-zinc-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
                    >
                      {skill.name}
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </section>

        <section className="mt-6 border border-cyan-300/15 bg-zinc-950/80 p-5">
          <h2 className="text-2xl font-black text-white">How to Choose a Skill</h2>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-zinc-300 md:grid-cols-2">
            <p>
              Do not pick a skill because it looks powerful in isolation. Pick it because your build needs a specific
              job solved: clearing packs, damaging tougher enemies, staying alive, repositioning, or supporting another
              main skill.
            </p>
            <p>
              If the skill does not match your class, weapon, tags, or current progression problem, compare another
              route before spending time around it. The best skill decision is the one that makes the whole build easier
              to understand.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
