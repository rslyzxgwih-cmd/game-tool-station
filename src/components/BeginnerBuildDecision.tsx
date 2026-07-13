"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Gameplay = "Minions" | "Ranged" | "Melee" | "Spells";
type Priority = "Easy to Play" | "Fast Leveling" | "Low Budget" | "Strong Endgame";

type Recommendation = {
  href: string;
  label: string;
  reason: string;
  buildClass: string;
  playstyle: string;
  difficulty: string;
  budget: string;
  bestFor: string;
  mainStrength: string;
};

const gameplayOptions: Gameplay[] = ["Minions", "Ranged", "Melee", "Spells"];
const priorityOptions: Priority[] = ["Easy to Play", "Fast Leveling", "Low Budget", "Strong Endgame"];

const minionStarter: Recommendation = {
  href: "/builds/poe2-beginner-minion-witch-build",
  label: "POE2 Beginner Minion Witch Build",
  reason: "Minions create space while you learn positioning, boss mechanics, and basic upgrades.",
  buildClass: "Witch",
  playstyle: "Safe summoner",
  difficulty: "Easy",
  budget: "Starter",
  bestFor: "First character safety",
  mainStrength: "Low pressure while learning fights",
};

const rangedStarter: Recommendation = {
  href: "/builds/poe2-beginner-ranged-starter-build",
  label: "POE2 Beginner Ranged Starter Build",
  reason: "Ranged damage keeps the first character readable while you learn movement and upgrade timing.",
  buildClass: "Ranger",
  playstyle: "Simple ranged clear",
  difficulty: "Easy",
  budget: "Low",
  bestFor: "Fast campaign pacing",
  mainStrength: "Clear distance and simple skill roles",
};

const meleeStarter: Recommendation = {
  href: "/builds/poe2-warrior-totem-slam-build",
  label: "POE2 Warrior Totem Slam Build",
  reason: "Totems add placed damage while Warrior keeps the defensive plan easier to understand.",
  buildClass: "Warrior",
  playstyle: "Totem assisted melee",
  difficulty: "Medium",
  budget: "Moderate",
  bestFor: "Durable melee players",
  mainStrength: "Forgiving defenses with support damage",
};

const spellStarter: Recommendation = {
  href: "/builds/poe2-sorceress-fireball-build",
  label: "POE2 Sorceress Fireball Build",
  reason: "Fireball gives spell players one direct damage plan before adding extra support layers.",
  buildClass: "Sorceress",
  playstyle: "Direct spell caster",
  difficulty: "Easy",
  budget: "Low",
  bestFor: "Simple spell leveling",
  mainStrength: "Readable burst from range",
};

const druidStarter: Recommendation = {
  href: "/builds/poe2-druid-hybrid-starter-build",
  label: "POE2 Druid Hybrid Starter Build",
  reason: "Druid is best when you want a flexible first route and accept a little more build uncertainty.",
  buildClass: "Druid",
  playstyle: "Hybrid melee spell",
  difficulty: "Medium",
  budget: "Moderate",
  bestFor: "Experiment-minded beginners",
  mainStrength: "Flexible class fantasy",
};

const recommendations: Record<Gameplay, Record<Priority, Recommendation>> = {
  Minions: {
    "Easy to Play": minionStarter,
    "Fast Leveling": minionStarter,
    "Low Budget": minionStarter,
    "Strong Endgame": minionStarter,
  },
  Ranged: {
    "Easy to Play": rangedStarter,
    "Fast Leveling": rangedStarter,
    "Low Budget": rangedStarter,
    "Strong Endgame": rangedStarter,
  },
  Melee: {
    "Easy to Play": meleeStarter,
    "Fast Leveling": meleeStarter,
    "Low Budget": meleeStarter,
    "Strong Endgame": meleeStarter,
  },
  Spells: {
    "Easy to Play": spellStarter,
    "Fast Leveling": spellStarter,
    "Low Budget": spellStarter,
    "Strong Endgame": druidStarter,
  },
};

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
      className={`min-h-10 rounded-full px-3 py-2 text-left text-xs font-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 ${
        isSelected
          ? "bg-amber-200 text-zinc-950 shadow-[0_0_26px_rgba(245,158,11,0.24)]"
          : "bg-white/[0.06] text-white/72 ring-1 ring-white/10 hover:bg-white/[0.1] hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

export function BeginnerBuildDecision() {
  const [gameplay, setGameplay] = useState<Gameplay>("Minions");
  const [priority, setPriority] = useState<Priority>("Easy to Play");

  const result = useMemo(() => recommendations[gameplay][priority], [gameplay, priority]);

  return (
    <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="border border-white/10 bg-black/36 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Beginner Build Finder</p>
        <h2 className="mt-2 text-2xl font-black leading-tight text-white md:text-3xl">
          Match your first build to the way you want to play.
        </h2>
        <p className="mt-2 text-sm font-semibold leading-6 text-white/58">
          Pick the playstyle and priority that matter most. We’ll recommend a clear route for your first character.
        </p>

        <div className="mt-5 grid gap-4">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.16em] text-white/54">Playstyle</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {gameplayOptions.map((option) => (
                <OptionButton key={option} label={option} isSelected={gameplay === option} onClick={() => setGameplay(option)} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.16em] text-white/54">Priority</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {priorityOptions.map((option) => (
                <OptionButton key={option} label={option} isSelected={priority === option} onClick={() => setPriority(option)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <article className="border border-emerald-200/18 bg-[linear-gradient(135deg,rgba(16,185,129,0.18),rgba(3,7,18,0.92))] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200">Recommended Beginner Build</p>
        <h2 className="mt-2 text-2xl font-black leading-tight text-white md:text-3xl">{result.label}</h2>
        <p className="mt-3 text-sm font-semibold leading-6 text-white/72">{result.reason}</p>

        <dl className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
          {[
            ["Class", result.buildClass],
            ["Playstyle", result.playstyle],
            ["Difficulty", result.difficulty],
            ["Budget", result.budget],
            ["Best For", result.bestFor],
            ["Main Strength", result.mainStrength],
          ].map(([label, value]) => (
            <div key={label} className="bg-white/[0.055] px-3 py-2 ring-1 ring-white/10">
              <dt className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-white/44">{label}</dt>
              <dd className="mt-1 font-bold text-white/82">{value}</dd>
            </div>
          ))}
        </dl>

        <Link
          href={result.href}
          className="mt-5 inline-flex min-h-11 items-center justify-center bg-amber-200 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-zinc-950 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
        >
          View Recommended Build
        </Link>
      </article>
    </section>
  );
}
