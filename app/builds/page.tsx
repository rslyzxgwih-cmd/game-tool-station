import type { Metadata } from "next";
import Link from "next/link";
import { BuildHubFinder, type BuildHubFinderBuild } from "@/components/BuildHubFinder";
import { builds, skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "POE2 Builds – Best POE2 Build Guide (Leveling + Endgame)",
  description:
    "Best POE2 build guide hub for leveling builds, endgame builds, and beginner class routes.",
  alternates: {
    canonical: "/builds",
  },
};

const finderBuildSlugs = [
  "poe2-beginner-ranged-starter-build",
  "poe2-mercenary-rapid-shot-build",
  "poe2-sorceress-fireball-build",
  "poe2-warrior-totem-slam-build",
  "monk-crossbow-build",
  "poe2-beginner-minion-witch-build",
];

const buildDisplayConfig: Record<
  string,
  {
    budget: string;
    bestFor: string;
    mainStrength: string;
    reason: string;
    title?: string;
    buildClass?: string;
    playstyle?: string;
    difficulty?: string;
    label?: string;
    image?: string;
  }
> = {
  "monk-crossbow-build": {
    title: "POE2 Monk Crossbow Starter Build",
    buildClass: "monk",
    playstyle: "Hybrid crossbow Monk",
    difficulty: "Medium",
    budget: "Moderate",
    bestFor: "Hybrid players",
    mainStrength: "Crossbow range with Monk payoff timing",
    reason: "Choose this if you want a more experimental hybrid route while still keeping the choice focused.",
    label: "Best Overall Hybrid Pick",
    image: "/images/builds/monk.webp",
  },
  "poe2-beginner-ranged-starter-build": {
    budget: "Starter Gear",
    bestFor: "New players",
    mainStrength: "Simple ranged leveling",
    reason: "Choose this if you want a first character with distance, clear skill roles, and low setup friction.",
    label: "Best for New Players",
    image: "/images/builds/lightning-arrow.webp",
  },
  "poe2-mercenary-rapid-shot-build": {
    budget: "Low Budget",
    bestFor: "Fast farming",
    mainStrength: "Steady crossbow pacing",
    reason: "Choose this if you want faster ranged farming while staying inside real Mercenary crossbow routes.",
    label: "Best for Fast Farming",
    image: "/images/builds/mercenary.webp",
  },
  "poe2-sorceress-fireball-build": {
    budget: "Low Budget",
    bestFor: "Spell starters",
    mainStrength: "Direct fire casting",
    reason: "Choose this if you want a spell route that is easier to understand than multi-element setups.",
    label: "Best Spell Starter",
    image: "/images/builds/invoker.webp",
  },
  "poe2-warrior-totem-slam-build": {
    budget: "Moderate",
    bestFor: "Melee players",
    mainStrength: "Placed damage plus heavy melee",
    reason: "Choose this if you want melee pressure with a support tool for harder fights.",
  },
  "poe2-beginner-minion-witch-build": {
    budget: "Starter Gear",
    bestFor: "Minion players",
    mainStrength: "Safer first-character pressure",
    reason: "Choose this if you want summons to create space while you learn fights.",
  },
};

const groupSections = [
  {
    title: "Beginner Builds",
    copy: "Start here if you want simple mechanics, affordable upgrades, and a clear leveling route.",
    tone: "text-emerald-200",
    slugs: [
      "poe2-beginner-ranged-starter-build",
      "poe2-beginner-minion-witch-build",
      "poe2-warrior-totem-slam-build",
      "poe2-druid-hybrid-starter-build",
    ],
  },
  {
    title: "Easy Builds",
    copy: "Choose these routes when you want clear combat decisions and low mechanical pressure.",
    tone: "text-cyan-200",
    slugs: [
      "poe2-beginner-ranged-starter-build",
      "poe2-beginner-minion-witch-build",
      "poe2-sorceress-fireball-build",
      "poe2-warrior-totem-slam-build",
    ],
  },
  {
    title: "Farming Builds",
    copy: "Prioritize clear speed, mobility, and repeatable map progression.",
    tone: "text-amber-200",
    slugs: [
      "poe2-mercenary-rapid-shot-build",
      "poe2-ranger-rain-of-arrows-build",
      "poe2-ranger-lightning-arrow-starter-build",
    ],
  },
  {
    title: "Endgame Builds",
    copy: "These routes offer stronger scaling but may require better gear, timing, or more complex decisions.",
    tone: "text-violet-200",
    slugs: [
      "monk-crossbow-build",
      "poe2-sorceress-fireball-build",
      "poe2-monk-tempest-bell-build",
      "poe2-mercenary-high-velocity-boss-build",
    ],
  },
];

const comparisonSlugs = [
  "monk-crossbow-build",
  "poe2-beginner-ranged-starter-build",
  "poe2-mercenary-rapid-shot-build",
  "poe2-sorceress-fireball-build",
  "poe2-beginner-minion-witch-build",
  "poe2-warrior-totem-slam-build",
];

const comparisonConfig: Record<
  string,
  {
    clearSpeed: string;
    survivability: string;
    bossing: string;
  }
> = {
  "monk-crossbow-build": { clearSpeed: "Good", survivability: "Average", bossing: "Strong" },
  "poe2-beginner-ranged-starter-build": { clearSpeed: "Strong", survivability: "Good", bossing: "Average" },
  "poe2-mercenary-rapid-shot-build": { clearSpeed: "Excellent", survivability: "Average", bossing: "Good" },
  "poe2-sorceress-fireball-build": { clearSpeed: "Good", survivability: "Average", bossing: "Strong" },
  "poe2-beginner-minion-witch-build": { clearSpeed: "Average", survivability: "Excellent", bossing: "Good" },
  "poe2-warrior-totem-slam-build": { clearSpeed: "Average", survivability: "Strong", bossing: "Good" },
};

const popularSkillSlugs = ["stormcaller-arrow", "rain-of-arrows", "glacial-lance", "shield-charge"];

const skillDisplayConfig: Record<
  string,
  {
    type: string;
    bestFor: string;
    relatedStyle: string;
    copy: string;
  }
> = {
  "stormcaller-arrow": {
    type: "Lightning bow pressure",
    bestFor: "Ranged farming",
    relatedStyle: "Bow and lightning routes",
    copy: "Use this when you want ranged pressure and faster clear without committing to a melee setup.",
  },
  "rain-of-arrows": {
    type: "Bow area clear",
    bestFor: "Pack coverage",
    relatedStyle: "Ranger and bow leveling",
    copy: "Use this when single arrows stop covering enough space during campaign or early maps.",
  },
  "glacial-lance": {
    type: "Cold spear damage",
    bestFor: "Safer spacing",
    relatedStyle: "Cold spear and Huntress routes",
    copy: "Use this when you want cold pressure from range while keeping safer distance from enemies.",
  },
  "shield-charge": {
    type: "Shield mobility",
    bestFor: "Durable melee",
    relatedStyle: "Warrior and shield routes",
    copy: "Use this when your melee build needs movement, impact, and defensive identity in one skill.",
  },
};

function getBuild(slug: string) {
  return builds.find((build) => build.slug === slug);
}

function getBuildEntry(slug: string) {
  const build = getBuild(slug);
  const config = buildDisplayConfig[slug];

  if (build) {
    return {
      slug: build.slug,
      title: build.title,
      buildClass: build.class,
      playstyle: build.playstyle,
      difficulty: build.difficulty,
    };
  }

  if (config?.title && config.buildClass && config.playstyle && config.difficulty) {
    return {
      slug,
      title: config.title,
      buildClass: config.buildClass,
      playstyle: config.playstyle,
      difficulty: config.difficulty,
    };
  }

  return null;
}

function budgetForDifficulty(difficulty: string) {
  if (difficulty === "Easy") {
    return "Starter Gear";
  }

  if (difficulty === "Hard") {
    return "High Investment";
  }

  return "Moderate";
}

function getBuildCard(slug: string) {
  const entry = getBuildEntry(slug);
  const source = getBuild(slug);
  const config = buildDisplayConfig[slug];

  if (!entry) {
    return null;
  }

  return {
    ...entry,
    budget: config?.budget ?? budgetForDifficulty(entry.difficulty),
    bestFor: config?.bestFor ?? source?.goodFor[0] ?? "Players comparing build direction",
    mainStrength: config?.mainStrength ?? source?.coreSkills.slice(0, 2).join(" + ") ?? "Focused build identity",
    reason: config?.reason ?? source?.promise ?? source?.content ?? "Use this when the class and playstyle match your goal.",
    label: config?.label,
    image: config?.image,
  };
}

function getSkillEntry(slug: string) {
  return skills.find((skill) => skill.slug === slug);
}

type BuildCard = NonNullable<ReturnType<typeof getBuildCard>>;
type PopularSkillCard = NonNullable<ReturnType<typeof getSkillEntry>> & (typeof skillDisplayConfig)[string];

function toFinderBuild(slug: string): BuildHubFinderBuild | null {
  const build = getBuildCard(slug);

  if (!build) {
    return null;
  }

  return {
    slug: build.slug,
    title: build.title,
    buildClass: build.buildClass,
    playstyle: build.playstyle,
    difficulty: build.difficulty,
    budget: build.budget,
    bestFor: build.bestFor,
    mainStrength: build.mainStrength,
    reason: build.reason,
  };
}

const finderBuilds = finderBuildSlugs.map(toFinderBuild).filter((build): build is BuildHubFinderBuild => Boolean(build));

const featuredBuildSlugs = [
  "monk-crossbow-build",
  "poe2-beginner-ranged-starter-build",
  "poe2-mercenary-rapid-shot-build",
  "poe2-sorceress-fireball-build",
];

const featuredBuilds = featuredBuildSlugs
  .map(getBuildCard)
  .filter((build): build is NonNullable<ReturnType<typeof getBuildCard>> => Boolean(build));

const buildGroups = groupSections.map((section) => ({
  ...section,
  builds: section.slugs.map(getBuildCard).filter((build): build is NonNullable<ReturnType<typeof getBuildCard>> => Boolean(build)),
}));

const comparisonBuilds = comparisonSlugs
  .map((slug) => {
    const build = getBuildCard(slug);
    const comparison = comparisonConfig[slug];

    if (!build || !comparison) {
      return null;
    }

    return { ...build, ...comparison };
  })
  .filter((build): build is BuildCard & (typeof comparisonConfig)[string] => Boolean(build));

const popularSkills = popularSkillSlugs
  .map((slug) => {
    const skill = getSkillEntry(slug);
    const config = skillDisplayConfig[slug];

    if (!skill || !config) {
      return null;
    }

    return { ...skill, ...config };
  })
  .filter((skill): skill is PopularSkillCard => Boolean(skill));

export default function BuildsPage() {
  return (
    <main className="bg-[#030304] text-white">
      <section
        className="relative overflow-hidden border-b border-white/10"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(3,3,4,0.92) 0%,rgba(3,3,4,0.76) 48%,rgba(3,3,4,0.9) 100%),linear-gradient(180deg,rgba(15,23,42,0.12),rgba(3,3,4,1)),url('/images/hero-bg.webp')",
          backgroundPosition: "center 42%",
          backgroundSize: "cover",
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(245,158,11,0.14),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-200">POE2 Build Finder</p>
            <h1 className="mt-3 text-4xl font-black leading-[0.98] tracking-tight text-white md:text-6xl">
              Find the Right POE2 Build
            </h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/72 md:text-lg">
              Choose by playstyle, experience, goal, and budget. Get a clear recommendation before you commit to a build.
            </p>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-white/56">
              New to POE2? Start with one clear damage skill, forgiving defenses, and affordable upgrades.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Beginner Friendly", "Low Budget", "Fast Leveling", "Endgame Ready"].map((item) => (
                <span key={item} className="rounded-full bg-white/[0.07] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/74 ring-1 ring-white/12">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <BuildHubFinder builds={finderBuilds} />
          </div>
        </div>
      </section>

      <section id="featured-builds" className="scroll-mt-24 border-b border-white/10 bg-[#05070a]">
        <div className="mx-auto max-w-7xl px-4 py-9">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Featured Builds</p>
              <h2 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">Four routes worth comparing first.</h2>
            </div>
            <p className="max-w-lg text-sm font-semibold leading-6 text-white/56">
              Compare four proven routes before choosing your next build.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredBuilds.map((build) => (
              <article key={build.slug} className="overflow-hidden border border-white/10 bg-black/34 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                {build.image ? (
                  <div
                    className="aspect-[16/10] bg-zinc-900"
                    style={{
                      backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.04) 0%,rgba(0,0,0,0.2) 58%,rgba(0,0,0,0.6) 100%),url('${build.image}')`,
                      backgroundPosition: "center 38%",
                      backgroundSize: "cover",
                    }}
                    role="img"
                    aria-label={`${build.title} build artwork`}
                  />
                ) : (
                  <div className="aspect-[16/10] bg-[radial-gradient(circle_at_28%_24%,rgba(245,158,11,0.16),transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(0,0,0,0.96))]" />
                )}
                <div className="p-4">
                  <p className="text-[0.66rem] font-black uppercase tracking-[0.16em] text-amber-200">{build.label}</p>
                  <h3 className="mt-2 text-lg font-black leading-tight text-white">{build.title}</h3>
                  <div className="mt-3 grid gap-2 text-xs font-bold text-white/62">
                    <p>
                      <span className="text-white/38">Class:</span> {build.buildClass}
                    </p>
                    <p>
                      <span className="text-white/38">Playstyle:</span> {build.playstyle}
                    </p>
                    <p>
                      <span className="text-white/38">Difficulty:</span> {build.difficulty}
                    </p>
                    <p>
                      <span className="text-white/38">Budget:</span> {build.budget}
                    </p>
                    <p>
                      <span className="text-white/38">Best For:</span> {build.bestFor}
                    </p>
                  </div>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/66">{build.reason}</p>
                  <Link href={`/builds/${build.slug}`} className="mt-4 inline-flex min-h-10 items-center justify-center bg-white/[0.07] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/82 ring-1 ring-white/14 hover:bg-amber-200 hover:text-zinc-950">
                    View Build
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#030304]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Build Groups</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">Choose the route that matches your actual goal.</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/58">
              Compare POE2 builds by beginner safety, leveling speed, farming comfort, and endgame scaling before opening a full guide.
            </p>
          </div>

          <div className="mt-7 grid gap-6">
            {buildGroups.map((section) => (
              <section key={section.title} aria-labelledby={`${section.title.toLowerCase().replaceAll(" ", "-")}-heading`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 id={`${section.title.toLowerCase().replaceAll(" ", "-")}-heading`} className={`text-xl font-black ${section.tone}`}>
                      {section.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm font-semibold leading-6 text-white/56">{section.copy}</p>
                  </div>
                </div>

                <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                  {section.builds.map((build) => (
                    <article key={`${section.title}-${build.slug}`} className="border border-white/10 bg-white/[0.035] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                      <p className={`text-[0.66rem] font-black uppercase tracking-[0.16em] ${section.tone}`}>{build.label ?? build.playstyle}</p>
                      <h4 className="mt-2 text-lg font-black leading-tight text-white">{build.title}</h4>
                      <dl className="mt-3 grid gap-2 text-xs font-bold text-white/62">
                        <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-1">
                          <dt className="text-white/36">Class</dt>
                          <dd>{build.buildClass}</dd>
                        </div>
                        <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-1">
                          <dt className="text-white/36">Playstyle</dt>
                          <dd className="text-right">{build.playstyle}</dd>
                        </div>
                        <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-1">
                          <dt className="text-white/36">Difficulty</dt>
                          <dd>{build.difficulty}</dd>
                        </div>
                        <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-1">
                          <dt className="text-white/36">Budget</dt>
                          <dd>{build.budget}</dd>
                        </div>
                        <div>
                          <dt className="text-white/36">Best For</dt>
                          <dd className="mt-1 text-white/78">{build.bestFor}</dd>
                        </div>
                      </dl>
                      <p className="mt-3 text-sm font-semibold leading-6 text-white/62">{build.reason}</p>
                      <Link href={`/builds/${build.slug}`} className="mt-4 inline-flex min-h-10 items-center justify-center bg-white/[0.07] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/82 ring-1 ring-white/14 hover:bg-amber-200 hover:text-zinc-950">
                        View Build
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#05070a]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Build Comparison</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">Compare common starter choices.</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/58">
              Compare difficulty, budget, clear speed, survivability, and endgame demands before opening a full guide.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto border border-white/10 bg-black/28">
            <table className="min-w-[860px] w-full border-collapse text-left text-sm">
              <thead className="bg-white/[0.055] text-xs uppercase tracking-[0.16em] text-white/46">
                <tr>
                  {["Build", "Class", "Difficulty", "Budget", "Clear Speed", "Survivability", "Bossing", "Best For"].map((heading) => (
                    <th key={heading} scope="col" className="border-b border-white/10 px-4 py-3 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonBuilds.map((build) => (
                  <tr key={build.slug} className="border-b border-white/8 last:border-b-0">
                    <th scope="row" className="px-4 py-4 align-top">
                      <Link href={`/builds/${build.slug}`} className="font-black text-white hover:text-amber-200">
                        {build.title}
                      </Link>
                      <p className="mt-1 text-xs font-semibold text-white/44">{build.playstyle}</p>
                    </th>
                    <td className="px-4 py-4 align-top font-bold text-white/70">{build.buildClass}</td>
                    <td className="px-4 py-4 align-top font-bold text-white/70">{build.difficulty}</td>
                    <td className="px-4 py-4 align-top font-bold text-white/70">{build.budget}</td>
                    <td className="px-4 py-4 align-top font-bold text-white/70">{build.clearSpeed}</td>
                    <td className="px-4 py-4 align-top font-bold text-white/70">{build.survivability}</td>
                    <td className="px-4 py-4 align-top font-bold text-white/70">{build.bossing}</td>
                    <td className="px-4 py-4 align-top font-bold text-white/70">{build.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#030304]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-200">Popular Skills</p>
              <h2 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">Skills that shape build decisions.</h2>
            </div>
            <p className="max-w-lg text-sm font-semibold leading-6 text-white/56">
              Use skill pages to understand whether your core skills support fast leveling, safe solo play, or stronger endgame scaling.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {popularSkills.map((skill) => (
              <article key={skill.slug} className="border border-white/10 bg-white/[0.035] p-4">
                <p className="text-[0.66rem] font-black uppercase tracking-[0.16em] text-violet-200">{skill.type}</p>
                <h3 className="mt-2 text-lg font-black text-white">{skill.name}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/62">{skill.copy}</p>
                <dl className="mt-3 grid gap-2 text-xs font-bold text-white/62">
                  <div>
                    <dt className="text-white/36">Best For</dt>
                    <dd className="mt-1 text-white/78">{skill.bestFor}</dd>
                  </div>
                  <div>
                    <dt className="text-white/36">Related Style</dt>
                    <dd className="mt-1 text-white/78">{skill.relatedStyle}</dd>
                  </div>
                </dl>
                <Link href={`/skills/${skill.slug}`} className="mt-4 inline-flex min-h-10 items-center justify-center bg-white/[0.07] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/82 ring-1 ring-white/14 hover:bg-violet-200 hover:text-zinc-950">
                  Explore Skill
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#05070a]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">New to POE2?</p>
              <h2 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">Quick answer before you choose a build.</h2>
              <div className="mt-4 space-y-3 text-sm font-semibold leading-6 text-white/62">
                <p>
                  Start with a POE2 build that has one clear damage skill, simple defenses, and affordable upgrades. Avoid complex timing windows, expensive uniques, and constant skill swapping on your first character.
                </p>
                <p>
                  Choose Minions for safety, Ranged for clear speed, Melee for durability, or Spells for burst damage. The best beginner builds and leveling builds are the ones that give you a clear upgrade path before endgame builds ask for deeper optimization.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  question: "Which build should I start with?",
                  answer: "Start with a build that has one clear damage plan, one defensive habit, and one obvious upgrade path.",
                },
                {
                  question: "What is the safest beginner route?",
                  answer: "Choose Minions or a durable ranged starter when deaths and positioning are slowing your progress.",
                },
                {
                  question: "What levels fastest?",
                  answer: "Fast-clearing ranged and Monk-style routes can level quickly, but they require better positioning than safer beginner builds.",
                },
                {
                  question: "What works best for solo leveling?",
                  answer: "Prioritize consistency across packs, rares, bosses, and movement rather than theoretical peak damage.",
                },
              ].map((item) => (
                <article key={item.question} className="border border-white/10 bg-black/28 p-4">
                  <h3 className="text-base font-black text-white">{item.question}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/62">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#030304]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="border border-amber-200/20 bg-[radial-gradient(circle_at_18%_20%,rgba(245,158,11,0.18),transparent_28%),linear-gradient(135deg,rgba(24,24,27,0.94),rgba(3,7,18,0.96))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.34)] md:p-7">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">BUILD DIAGNOSIS</p>
            <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-black leading-tight text-white md:text-4xl">Still Not Sure Which Build Fits You?</h2>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/64">
                  Answer a few questions about your playstyle, experience, goals, and budget. We'll narrow the choices and recommend a starting route.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/class-picker" className="inline-flex min-h-11 items-center justify-center bg-amber-200 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-zinc-950 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200">
                  Start Build Diagnosis
                </Link>
                <Link href="/builds/beginner" className="inline-flex min-h-11 items-center justify-center bg-white/[0.07] px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white/84 ring-1 ring-white/14 hover:bg-white hover:text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200">
                  Browse Beginner Builds
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
