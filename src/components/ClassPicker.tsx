"use client";

import { useMemo, useState } from "react";
import { classes, type PlayerStyle } from "@/lib/content";

const styleOptions: PlayerStyle[] = ["Melee", "Ranged", "Summoner", "Spell"];

const styleCopy: Record<PlayerStyle, string> = {
  Melee: "You want to fight up close and make positioning decisions every pack.",
  Ranged: "You want distance, kiting, and cleaner campaign safety.",
  Summoner: "You want allies to take pressure while you learn encounters.",
  Spell: "You want caster scaling, elemental or chaos damage, and clear buttons.",
};

export function ClassPicker() {
  const [style, setStyle] = useState<PlayerStyle>("Melee");

  const recommendations = useMemo(() => {
    return classes
      .filter((poeClass) => poeClass.styles.includes(style))
      .slice(0, 3);
  }, [style]);

  return (
    <section className="grid gap-3 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="border border-cyan-400/20 bg-zinc-950/80 p-4">
        <h2 className="text-base font-black text-white">Choose playstyle</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-300">
          First-week version: one question, immediate class recommendation.
        </p>
        <div className="mt-4 grid gap-2">
          {styleOptions.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setStyle(item)}
              className={`border px-4 py-2 text-left text-sm font-black transition focus:outline-none focus:ring-2 focus:ring-amber-200 ${
                style === item
                  ? "border-amber-300 bg-amber-300 text-zinc-950"
                  : "border-zinc-700 bg-black/30 text-zinc-200 hover:border-cyan-300/50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <article className="border border-amber-300/20 bg-amber-300/10 p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-200">Selected input</p>
          <h3 className="mt-1 text-xl font-black text-white">{style}</h3>
          <p className="mt-3 text-sm leading-6 text-amber-50">{styleCopy[style]}</p>
        </article>

        {recommendations.map((poeClass, index) => (
          <article key={poeClass.slug} className="border border-cyan-400/15 bg-zinc-950/80 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Recommendation {index + 1}</p>
                <h3 className="mt-1 text-xl font-black text-white">{poeClass.name}</h3>
              </div>
              <span className="border border-amber-300/25 bg-amber-200/10 px-3 py-1 text-xs font-black uppercase text-amber-100">
                {style}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{poeClass.decisionUse}</p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{poeClass.avoidIf}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
