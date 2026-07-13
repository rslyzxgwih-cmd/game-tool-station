"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Playstyle = "Minions" | "Ranged" | "Melee" | "Spells";
type Experience = "First Character" | "Beginner" | "Experienced" | "Advanced";
type Goal = "Leveling" | "Farming" | "Bossing" | "Endgame";
type Budget = "Starter Gear" | "Low Budget" | "Moderate" | "High Investment";

export type BuildHubFinderBuild = {
  slug: string;
  title: string;
  buildClass: string;
  playstyle: string;
  difficulty: string;
  budget: string;
  bestFor: string;
  mainStrength: string;
  reason: string;
};

type BuildHubFinderProps = {
  builds: BuildHubFinderBuild[];
};

const groups = {
  playstyle: ["Minions", "Ranged", "Melee", "Spells"] as Playstyle[],
  experience: ["First Character", "Beginner", "Experienced", "Advanced"] as Experience[],
  goal: ["Leveling", "Farming", "Bossing", "Endgame"] as Goal[],
  budget: ["Starter Gear", "Low Budget", "Moderate", "High Investment"] as Budget[],
};

function getTargetSlug(playstyle: Playstyle, experience: Experience, goal: Goal, budget: Budget) {
  if (playstyle === "Minions") {
    return "poe2-beginner-minion-witch-build";
  }

  if (playstyle === "Ranged" && goal === "Farming") {
    return "poe2-mercenary-rapid-shot-build";
  }

  if (
    playstyle === "Ranged" &&
    goal === "Leveling" &&
    (experience === "First Character" || experience === "Beginner") &&
    (budget === "Starter Gear" || budget === "Low Budget")
  ) {
    return "poe2-beginner-ranged-starter-build";
  }

  if (playstyle === "Spells") {
    return "poe2-sorceress-fireball-build";
  }

  if (playstyle === "Melee" && (goal === "Endgame" || experience === "Experienced" || experience === "Advanced" || budget === "High Investment")) {
    return "monk-crossbow-build";
  }

  if (playstyle === "Melee") {
    return "poe2-warrior-totem-slam-build";
  }

  return "poe2-beginner-ranged-starter-build";
}

function OptionButton({
  isSelected,
  label,
  onClick,
}: {
  isSelected: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-10 rounded-full px-3 py-2 text-xs font-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 ${
        isSelected
          ? "bg-amber-200 text-zinc-950 shadow-[0_0_28px_rgba(245,158,11,0.22)]"
          : "bg-white/[0.06] text-white/72 ring-1 ring-white/10 hover:bg-white/[0.1] hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

export function BuildHubFinder({ builds }: BuildHubFinderProps) {
  const [playstyle, setPlaystyle] = useState<Playstyle>("Ranged");
  const [experience, setExperience] = useState<Experience>("First Character");
  const [goal, setGoal] = useState<Goal>("Leveling");
  const [budget, setBudget] = useState<Budget>("Starter Gear");

  const recommendation = useMemo(() => {
    const targetSlug = getTargetSlug(playstyle, experience, goal, budget);
    const exact = builds.find((build) => build.slug === targetSlug);

    return {
      build: exact ?? builds[0],
      isFallback: !exact,
    };
  }, [budget, builds, experience, goal, playstyle]);

  const recommendedBuild = recommendation.build;

  return (
    <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="border border-white/10 bg-black/36 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Quick Build Finder</p>
        <h2 className="mt-2 text-2xl font-black leading-tight text-white md:text-3xl">Choose your playstyle, experience, goal, and budget.</h2>
        <div className="mt-5 grid gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white/54">Playstyle</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {groups.playstyle.map((item) => (
                <OptionButton key={item} label={item} isSelected={playstyle === item} onClick={() => setPlaystyle(item)} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white/54">Experience</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {groups.experience.map((item) => (
                <OptionButton key={item} label={item} isSelected={experience === item} onClick={() => setExperience(item)} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white/54">Goal</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {groups.goal.map((item) => (
                <OptionButton key={item} label={item} isSelected={goal === item} onClick={() => setGoal(item)} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white/54">Budget</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {groups.budget.map((item) => (
                <OptionButton key={item} label={item} isSelected={budget === item} onClick={() => setBudget(item)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <article className="border border-emerald-200/18 bg-[linear-gradient(135deg,rgba(16,185,129,0.18),rgba(3,7,18,0.9))] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
          {recommendation.isFallback ? "Closest Match Available" : "Best Match for You"}
        </p>
        <h2 className="mt-2 text-2xl font-black leading-tight text-white md:text-3xl">{recommendedBuild.title}</h2>
        <p className="mt-3 text-sm font-semibold leading-6 text-white/72">{recommendedBuild.reason}</p>

        <dl className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
          {[
            ["Class", recommendedBuild.buildClass],
            ["Playstyle", recommendedBuild.playstyle],
            ["Difficulty", recommendedBuild.difficulty],
            ["Budget", recommendedBuild.budget],
            ["Best For", recommendedBuild.bestFor],
            ["Main Strength", recommendedBuild.mainStrength],
          ].map(([label, value]) => (
            <div key={label} className="bg-white/[0.055] px-3 py-2 ring-1 ring-white/10">
              <dt className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-white/44">{label}</dt>
              <dd className="mt-1 font-bold text-white/82">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={`/builds/${recommendedBuild.slug}`}
            className="inline-flex min-h-11 items-center justify-center bg-amber-200 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-zinc-950 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
          >
            View Recommended Build
          </Link>
          <a
            href="#featured-builds"
            className="inline-flex min-h-11 items-center justify-center bg-white/[0.07] px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white/84 ring-1 ring-white/14 hover:bg-white hover:text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
          >
            Compare Other Builds
          </a>
        </div>
      </article>
    </section>
  );
}
