"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type HomeSkill = {
  name: string;
  slug: string;
  tags: string[];
  bestFor: string;
  decisionRule: string;
  levelRequirement: number;
};

type HomeSkillExplorerProps = {
  skills: HomeSkill[];
};

type QuickFilter = "Beginner" | "Leveling" | "Bossing" | "Mapping" | "Melee" | "Ranged" | "Summoner" | "Spell";

const quickFilters: QuickFilter[] = ["Beginner", "Leveling", "Bossing", "Mapping", "Melee", "Ranged", "Summoner", "Spell"];

const popularSearches = [
  {
    label: "Flame Wall starter",
    href: "/skills/flame-wall",
    note: "Caster setup skill before choosing Spark or Fireball.",
  },
  {
    label: "Tempest Bell Monk",
    href: "/skills/tempest-bell",
    note: "Boss payoff for Monk and hybrid starter routes.",
  },
  {
    label: "Crossbow starter skills",
    href: "/builds/poe2-mercenary-crossbow-starter-build",
    note: "Fragmentation Rounds, High Velocity Rounds, and Escape Shot.",
  },
  {
    label: "Minion Witch skills",
    href: "/builds/poe2-beginner-minion-witch-build",
    note: "Safer first-character route with summons creating space.",
  },
];

const beginnerSkillSlugs = ["skeletal-warrior", "spark", "flame-wall", "fragmentation-rounds", "rolling-slam", "falling-thunder"];
const mostRecommendedSkillSlugs = ["tempest-bell", "flame-wall", "fragmentation-rounds", "high-velocity-rounds", "time-of-need", "killing-palm"];
const trendingSkillSlugs = ["flame-wall", "tempest-bell", "falling-thunder", "killing-palm", "gas-grenade", "spark"];

const filterSlugMap: Partial<Record<QuickFilter, string[]>> = {
  Beginner: beginnerSkillSlugs,
  Leveling: ["fragmentation-rounds", "rolling-slam", "spark", "flame-wall", "falling-thunder", "lightning-arrow"],
  Bossing: ["high-velocity-rounds", "tempest-bell", "boneshatter", "snipe", "armour-piercing-rounds"],
  Mapping: ["fragmentation-rounds", "lightning-arrow", "spark", "fireball", "explosive-grenade", "falling-thunder"],
};

function skillsFromSlugs(skills: HomeSkill[], slugs: string[]) {
  return slugs.map((slug) => skills.find((skill) => skill.slug === slug)).filter((skill): skill is HomeSkill => Boolean(skill));
}

function matchesQuickFilter(skill: HomeSkill, filter: QuickFilter) {
  const tags = skill.tags.map((tag) => tag.toLowerCase());

  if (filter === "Melee") return tags.includes("melee") || tags.includes("warrior") || tags.includes("monk");
  if (filter === "Ranged") return tags.includes("ranged") || tags.includes("bow") || tags.includes("crossbow");
  if (filter === "Summoner") return tags.includes("summoner") || tags.includes("minion") || tags.includes("witch");
  if (filter === "Spell") return tags.includes("spell") || tags.includes("fire") || tags.includes("cold") || tags.includes("lightning");

  return false;
}

function SkillCard({ skill }: { skill: HomeSkill }) {
  return (
    <Link href={`/skills/${skill.slug}`} className="border border-line bg-panel px-3 py-3 hover:border-moss">
      <span className="block text-sm font-black text-ink">{skill.name}</span>
      <span className="mt-1 block truncate text-xs font-bold uppercase text-moss">{skill.tags.join(" / ")}</span>
      <span className="mt-2 block text-xs leading-5 text-ink/64">{skill.decisionRule}</span>
    </Link>
  );
}

function SkillRail({ title, skills }: { title: string; skills: HomeSkill[] }) {
  return (
    <section className="border border-line bg-white p-3">
      <h3 className="text-sm font-black text-ink">{title}</h3>
      <div className="mt-2 grid gap-2">
        {skills.slice(0, 4).map((skill) => (
          <Link key={skill.slug} href={`/skills/${skill.slug}`} className="border border-line bg-paper px-3 py-2 text-sm hover:border-moss">
            <span className="block font-black text-ink">{skill.name}</span>
            <span className="mt-1 block text-xs leading-5 text-ink/62">{skill.bestFor}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HomeSkillExplorer({ skills }: HomeSkillExplorerProps) {
  const [activeFilter, setActiveFilter] = useState<QuickFilter>("Beginner");

  const beginnerSkills = useMemo(() => skillsFromSlugs(skills, beginnerSkillSlugs), [skills]);
  const mostRecommendedSkills = useMemo(() => skillsFromSlugs(skills, mostRecommendedSkillSlugs), [skills]);
  const trendingSkills = useMemo(() => skillsFromSlugs(skills, trendingSkillSlugs), [skills]);
  const filteredSkills = useMemo(() => {
    const slugs = filterSlugMap[activeFilter];

    if (slugs) return skillsFromSlugs(skills, slugs);

    return skills.filter((skill) => matchesQuickFilter(skill, activeFilter)).slice(0, 8);
  }, [activeFilter, skills]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-5">
      <div className="grid gap-4 border-b border-line pb-3 lg:grid-cols-[1fr_auto]">
        <div>
          <h2 className="text-xl font-black leading-tight text-ink">Skill Database</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-ink/68">
            Start from common decisions instead of typing random keywords. Pick a use case, then open the exact skill page.
          </p>
        </div>
        <Link href="/skills" className="inline-flex min-h-11 items-center justify-center border border-ink bg-ink px-4 py-2 text-xs font-black uppercase text-white hover:bg-moss">
          Browse {skills.length} Skills
        </Link>
      </div>

      <section className="mt-4 border border-line bg-panel p-4">
        <h3 className="text-base font-black text-ink">Popular Searches</h3>
        <div className="mt-3 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          {popularSearches.map((item) => (
            <Link key={item.href} href={item.href} className="border border-line bg-white px-3 py-3 text-sm hover:border-moss">
              <span className="block font-black text-ink">{item.label}</span>
              <span className="mt-1 block leading-6 text-ink/65">{item.note}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        <SkillRail title="Beginner Skills" skills={beginnerSkills} />
        <SkillRail title="Most Recommended Skills" skills={mostRecommendedSkills} />
        <SkillRail title="Trending Skills" skills={trendingSkills} />
      </div>

      <section className="mt-4 border border-line bg-panel p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-base font-black text-ink">Quick Filters</h3>
          <span className="text-xs font-black uppercase text-ink/55">{filteredSkills.length} matches shown</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
          {quickFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`min-h-11 border px-3 py-2 text-left text-sm font-black ${
                activeFilter === filter ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-moss"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-3 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.slug} skill={skill} />
          ))}
        </div>
      </section>
    </section>
  );
}
