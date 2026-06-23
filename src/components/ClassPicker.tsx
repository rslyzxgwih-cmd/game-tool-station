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
      <div className="border border-line bg-panel p-4">
        <h2 className="text-base font-black text-ink">Choose playstyle</h2>
        <p className="mt-3 text-sm leading-6 text-ink/66">
          First-week version: one question, immediate class recommendation.
        </p>
        <div className="mt-4 grid gap-2">
          {styleOptions.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setStyle(item)}
              className={`border px-4 py-2 text-left text-sm font-black transition focus:outline-none focus:ring-2 focus:ring-moss ${
                style === item
                  ? "border-moss bg-moss text-white"
                  : "border-line bg-white text-ink hover:border-moss"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <article className="border border-line bg-white p-4">
          <p className="text-xs font-black uppercase text-moss">Selected input</p>
          <h3 className="mt-1 text-xl font-black text-ink">{style}</h3>
          <p className="mt-3 text-sm leading-6 text-ink/70">{styleCopy[style]}</p>
        </article>

        {recommendations.map((poeClass, index) => (
          <article key={poeClass.slug} className="border border-line bg-panel p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase text-ember">Recommendation {index + 1}</p>
                <h3 className="mt-1 text-xl font-black text-ink">{poeClass.name}</h3>
              </div>
              <span className="border border-line bg-paper px-3 py-1 text-xs font-black uppercase text-moss">
                {style}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-ink/70">{poeClass.decisionUse}</p>
            <p className="mt-3 text-sm leading-6 text-ink/58">{poeClass.avoidIf}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
