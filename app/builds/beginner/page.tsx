import type { Metadata } from "next";
import Link from "next/link";
import { BeginnerBuildDecision } from "@/components/BeginnerBuildDecision";
import { topicClusterPages } from "@/lib/topicClusterPages";

const page = topicClusterPages.beginnerBuilds;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: page.canonical,
  },
  keywords: page.keywords,
};

const buildCardDetails: Record<
  string,
  {
    recommendedFor: string[];
    avoidIf: string[];
    difficulty: "Easy" | "Medium" | "Advanced";
  }
> = {
  "/builds/monk-crossbow-build": {
    recommendedFor: ["Players who want Monk payoff timing", "Crossbow curiosity", "A focused starter hub"],
    avoidIf: ["Players who want the lowest-input first character", "Players who dislike hybrid ideas"],
    difficulty: "Medium",
  },
  "/builds/poe2-mercenary-crossbow-starter-build": {
    recommendedFor: ["Ranged weapon players", "Clear skill roles", "Players who like spacing"],
    avoidIf: ["Players who dislike reload rhythm", "Players who want one-button combat"],
    difficulty: "Medium",
  },
  "/builds/mercenary": {
    recommendedFor: ["Players comparing crossbow routes", "Ranged build shoppers", "Mercenary-first decisions"],
    avoidIf: ["Players who already know they want minions", "Players who need the safest route"],
    difficulty: "Medium",
  },
  "/guides/mercenary/crossbow": {
    recommendedFor: ["Crossbow leveling questions", "Mercenary players", "Ranged weapon comparisons"],
    avoidIf: ["Players who want summons", "Players who do not want weapon timing"],
    difficulty: "Medium",
  },
  "/builds/monk": {
    recommendedFor: ["Active melee players", "Timing-window gameplay", "Players comparing Monk skills"],
    avoidIf: ["Players who want passive safety", "Players who dislike movement-heavy melee"],
    difficulty: "Advanced",
  },
  "/builds/poe2-beginner-minion-witch-build": {
    recommendedFor: ["New players", "Low budget", "Easy leveling"],
    avoidIf: ["Players who hate minion management", "Players who want direct weapon impact"],
    difficulty: "Easy",
  },
  "/builds/poe2-warrior-slam-starter-build": {
    recommendedFor: ["New melee players", "Simple defenses", "Low budget weapon progression"],
    avoidIf: ["Players who want fast movement", "Players who dislike slow heavy attacks"],
    difficulty: "Easy",
  },
  "/builds/poe2-ranger-lightning-arrow-starter-build": {
    recommendedFor: ["Ranged players", "Fast leveling", "Simple bow clear"],
    avoidIf: ["Players who want to face-tank", "Players who dislike constant repositioning"],
    difficulty: "Easy",
  },
};

function getCardDetails(href: string) {
  return (
    buildCardDetails[href] ?? {
      recommendedFor: ["Players comparing beginner routes", "Existing POE2 build decisions", "Starter build research"],
      avoidIf: ["Players who need a full passive tree planner", "Players who want exact endgame DPS math"],
      difficulty: "Medium" as const,
    }
  );
}

export default function BeginnerBuildsPage() {
  const keyPoints = page.sections.slice(0, 3);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-black leading-tight text-ink md:text-4xl">{page.title}</h1>

      <BeginnerBuildDecision />

      <section className="mt-6 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-ink/72">
          Best Guide: {page.description} Use this route when you need a focused POE2 build, skill, or beginner leveling
          path from the existing site structure.
        </p>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Key Points</h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/72">
          {keyPoints.map((section) => (
            <li key={section.title} className="border border-line bg-paper px-3 py-2">
              <span className="font-black text-ink">{section.title}: </span>
              {section.body}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Beginner Build Cards</h2>
        <div className="mt-3 grid gap-3">
          {page.relatedBuilds.map((item) => {
            const details = getCardDetails(item.href);

            return (
              <article key={item.href} className="border border-line bg-paper p-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-black text-ink">
                      <Link href={item.href} className="hover:text-moss">
                        {item.label}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-ink/64">{item.note}</p>
                  </div>
                  <span className="border border-line bg-white px-3 py-1 text-xs font-black uppercase text-moss">
                    Difficulty: {details.difficulty}
                  </span>
                </div>

                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-black text-ink">Recommended For:</h4>
                    <ul className="mt-2 grid gap-1 text-sm leading-6 text-ink/72">
                      {details.recommendedFor.map((point) => (
                        <li key={point}>Good for: {point}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-black text-ink">Avoid if:</h4>
                    <ul className="mt-2 grid gap-1 text-sm leading-6 text-ink/72">
                      {details.avoidIf.map((point) => (
                        <li key={point}>Not ideal for: {point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Related Skills</h2>
        <div className="mt-3 grid gap-2 text-sm font-bold">
          {page.relatedSkills.slice(0, 6).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss"
            >
              <span className="block text-ink">{item.label}</span>
              <span className="block font-normal leading-6 text-ink/62">{item.note}</span>
            </Link>
          ))}
        </div>
      </section>

      {page.nextRecommended ? (
        <section className="mt-4 border border-line bg-panel p-4">
          <h2 className="text-lg font-black text-ink">Next Page</h2>
          <Link
            href={page.nextRecommended.href}
            className="mt-3 block border border-line bg-paper px-3 py-2 text-sm font-bold text-ink/72 hover:text-moss"
          >
            {page.nextRecommended.label}
            <span className="block font-normal leading-6 text-ink/62">{page.nextRecommended.note}</span>
          </Link>
        </section>
      ) : null}
    </main>
  );
}
