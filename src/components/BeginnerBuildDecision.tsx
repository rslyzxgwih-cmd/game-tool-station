"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Gameplay = "Minions" | "Ranged" | "Melee" | "Spell";
type Priority = "Easy to play" | "Fast leveling" | "Low budget" | "Strong endgame";

const gameplayOptions: Gameplay[] = ["Minions", "Ranged", "Melee", "Spell"];
const priorityOptions: Priority[] = ["Easy to play", "Fast leveling", "Low budget", "Strong endgame"];

const recommendations: Record<Gameplay, Record<Priority, { href: string; label: string; reason: string }>> = {
  Minions: {
    "Easy to play": {
      href: "/builds/poe2-beginner-minion-witch-build",
      label: "Beginner Minion Witch Build",
      reason: "Minions create space while you learn positioning, bosses, and basic upgrades.",
    },
    "Fast leveling": {
      href: "/builds/poe2-witch-fire-minion-build",
      label: "Witch Fire Minion Build",
      reason: "Fire minions add better pack clear while keeping the safer summoner structure.",
    },
    "Low budget": {
      href: "/builds/poe2-beginner-minion-witch-build",
      label: "Beginner Minion Witch Build",
      reason: "A simple minion route needs fewer early gear checks than weapon-heavy builds.",
    },
    "Strong endgame": {
      href: "/builds/witch/minion",
      label: "Witch Minion Builds",
      reason: "Use the Witch minion hub when you want to compare safer summon routes before scaling further.",
    },
  },
  Ranged: {
    "Easy to play": {
      href: "/builds/poe2-ranger-lightning-arrow-starter-build",
      label: "Ranger Lightning Arrow Starter Build",
      reason: "Bow clear is readable and familiar if you want range without crossbow rhythm.",
    },
    "Fast leveling": {
      href: "/builds/poe2-ranger-lightning-arrow-starter-build",
      label: "Ranger Lightning Arrow Starter Build",
      reason: "Lightning Arrow is the cleanest ranged choice when campaign speed matters.",
    },
    "Low budget": {
      href: "/builds/poe2-ranger-lightning-arrow-starter-build",
      label: "Ranger Lightning Arrow Starter Build",
      reason: "A simple bow route keeps early upgrades focused on one weapon and one clear skill.",
    },
    "Strong endgame": {
      href: "/builds/poe2-mercenary-crossbow-starter-build",
      label: "Mercenary Crossbow Starter Build",
      reason: "Crossbow skills separate clear, boss damage, and escape for players who want deeper ranged decisions.",
    },
  },
  Melee: {
    "Easy to play": {
      href: "/builds/poe2-warrior-slam-starter-build",
      label: "Warrior Slam Starter Build",
      reason: "Warrior is slower but easier to read if durability matters more than speed.",
    },
    "Fast leveling": {
      href: "/builds/poe2-monk-leveling-build",
      label: "Monk Leveling Build",
      reason: "Monk is the faster melee choice if you enjoy movement and active timing.",
    },
    "Low budget": {
      href: "/builds/poe2-warrior-slam-starter-build",
      label: "Warrior Slam Starter Build",
      reason: "A slam route keeps early melee priorities simple: weapon damage, defense, and pack control.",
    },
    "Strong endgame": {
      href: "/builds/monk-crossbow-build",
      label: "Monk Crossbow Build",
      reason: "Use this if you want a more experimental melee route with range and payoff timing.",
    },
  },
  Spell: {
    "Easy to play": {
      href: "/builds/poe2-sorceress-spark-starter-build",
      label: "Sorceress Spark Starter Build",
      reason: "Spark gives spell players a simple main skill before adding support layers.",
    },
    "Fast leveling": {
      href: "/builds/poe2-sorceress-spark-starter-build",
      label: "Sorceress Spark Starter Build",
      reason: "Spark is the cleanest caster route when you want fast pack coverage.",
    },
    "Low budget": {
      href: "/builds/poe2-sorceress-spark-starter-build",
      label: "Sorceress Spark Starter Build",
      reason: "A one-spell starter is easier to upgrade than a setup-heavy caster package.",
    },
    "Strong endgame": {
      href: "/builds/poe2-sorceress-flame-wall-build",
      label: "Sorceress Flame Wall Build",
      reason: "Flame Wall works better when you are ready to add setup and support-skill timing.",
    },
  },
};

export function BeginnerBuildDecision() {
  const [gameplay, setGameplay] = useState<Gameplay>("Minions");
  const [priority, setPriority] = useState<Priority>("Easy to play");

  const result = useMemo(() => recommendations[gameplay][priority], [gameplay, priority]);

  return (
    <section className="mt-6 border-4 border-ink bg-white p-4 shadow-lg">
      <p className="text-xs font-black uppercase text-moss">Beginner decision</p>
      <h2 className="mt-1 text-2xl font-black leading-tight text-ink">Find Your Best POE2 Beginner Build</h2>
      <p className="mt-2 text-sm leading-6 text-ink/72">
        Answer a few questions and find a build that matches your playstyle.
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-black text-ink">What type of gameplay do you enjoy?</h3>
          <div className="mt-2 grid gap-2">
            {gameplayOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setGameplay(option)}
                className={`border px-3 py-2 text-left text-sm font-black ${
                  gameplay === option ? "border-moss bg-moss text-white" : "border-line bg-paper text-ink/72 hover:border-moss"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black text-ink">What matters most?</h3>
          <div className="mt-2 grid gap-2">
            {priorityOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setPriority(option)}
                className={`border px-3 py-2 text-left text-sm font-black ${
                  priority === option ? "border-moss bg-moss text-white" : "border-line bg-paper text-ink/72 hover:border-moss"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <article className="mt-4 border border-line bg-panel p-3">
        <p className="text-xs font-black uppercase text-ember">Recommended build</p>
        <h3 className="mt-1 text-xl font-black text-ink">{result.label}</h3>
        <p className="mt-2 text-sm leading-6 text-ink/72">{result.reason}</p>
        <Link
          href={result.href}
          className="mt-3 inline-flex border border-ink bg-ink px-4 py-2 text-xs font-black uppercase text-white hover:bg-moss"
        >
          Open recommended build
        </Link>
      </article>
    </section>
  );
}
