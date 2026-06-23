"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { classes, getBuildForGenerator, type Difficulty } from "@/lib/content";

const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];

export function BuildGenerator() {
  const [classSlug, setClassSlug] = useState(classes[0].slug);
  const [difficulty, setDifficulty] = useState<Difficulty>("Easy");

  const result = useMemo(() => getBuildForGenerator(classSlug, difficulty), [classSlug, difficulty]);
  const selectedClass = classes.find((poeClass) => poeClass.slug === classSlug) ?? classes[0];
  const isExactMatch = result.class === classSlug && result.difficulty === difficulty;

  return (
    <section className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="border border-line bg-panel p-4">
        <h2 className="text-base font-black text-ink">Inputs</h2>
        <p className="mt-2 text-sm leading-6 text-ink/66">
          Input class and difficulty. Output one launch-ready build page.
        </p>
        <div className="mt-4 grid gap-3">
          <label className="grid gap-2 text-sm font-black text-ink" htmlFor="build-class">
            Class
            <select
              id="build-class"
              value={classSlug}
              onChange={(event) => setClassSlug(event.target.value)}
              className="border border-line bg-white px-3 py-2 text-sm font-bold text-ink outline-none focus:ring-2 focus:ring-moss"
            >
              {classes.map((poeClass) => (
                <option key={poeClass.slug} value={poeClass.slug}>
                  {poeClass.name}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-black text-ink" htmlFor="build-difficulty">
            Difficulty
            <select
              id="build-difficulty"
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value as Difficulty)}
              className="border border-line bg-white px-3 py-2 text-sm font-bold text-ink outline-none focus:ring-2 focus:ring-moss"
            >
              {difficulties.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <article className="border border-line bg-panel p-4">
        <div className="flex flex-wrap gap-2">
          <span className="border border-line bg-paper px-3 py-1 text-xs font-black uppercase text-moss">
            {selectedClass.name}
          </span>
          <span className="border border-line bg-paper px-3 py-1 text-xs font-black uppercase text-ember">
            {difficulty}
          </span>
          {!isExactMatch ? (
            <span className="border border-line bg-paper px-3 py-1 text-xs font-black uppercase text-violet">
              Closest match
            </span>
          ) : null}
        </div>
        <h3 className="mt-4 text-xl font-black leading-tight text-ink">{result.title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/72">{result.promise}</p>
        <div className="mt-4 grid gap-2">
          {result.coreSkills.map((skill) => (
            <span key={skill} className="border border-line bg-paper px-3 py-2 text-sm font-bold text-ink/72">
              {skill}
            </span>
          ))}
        </div>
        <Link
          href={`/builds/${result.slug}`}
          className="mt-4 inline-flex border border-ink bg-ink px-4 py-2 text-xs font-black uppercase text-white transition hover:bg-moss focus:outline-none focus:ring-2 focus:ring-moss"
        >
          Open build page
        </Link>
      </article>
    </section>
  );
}
