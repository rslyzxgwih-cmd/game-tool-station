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

const beginnerBuilds = [
  {
    group: "Minion Starter",
    href: "/builds/poe2-beginner-minion-witch-build",
    name: "POE2 Beginner Minion Witch Build",
    buildClass: "Witch",
    playstyle: "Safe summoner",
    difficulty: "Easy",
    budget: "Starter",
    bestFor: "New players who want space to learn",
    reason: "Choose this if safety and low input load matter more than direct weapon impact.",
    tone: "text-emerald-200",
  },
  {
    group: "Ranged Starter",
    href: "/builds/poe2-beginner-ranged-starter-build",
    name: "POE2 Beginner Ranged Starter Build",
    buildClass: "Ranger",
    playstyle: "Simple ranged clear",
    difficulty: "Easy",
    budget: "Low",
    bestFor: "Players who want distance and fast campaign pacing",
    reason: "Choose this if you want one clear ranged damage skill and easy-to-read upgrades.",
    tone: "text-cyan-200",
  },
  {
    group: "Melee Starter",
    href: "/builds/poe2-warrior-totem-slam-build",
    name: "POE2 Warrior Totem Slam Build",
    buildClass: "Warrior",
    playstyle: "Totem assisted melee",
    difficulty: "Medium",
    budget: "Moderate",
    bestFor: "Players who want durable melee with support damage",
    reason: "Choose this if you want melee pressure without relying only on close-range hits.",
    tone: "text-amber-200",
  },
  {
    group: "Spell Starter",
    href: "/builds/poe2-sorceress-fireball-build",
    name: "POE2 Sorceress Fireball Build",
    buildClass: "Sorceress",
    playstyle: "Direct fire caster",
    difficulty: "Easy",
    budget: "Low",
    bestFor: "Players who want simple spell damage",
    reason: "Choose this if you want a readable caster route before adding setup-heavy spell layers.",
    tone: "text-violet-200",
  },
  {
    group: "Spell Starter",
    href: "/builds/poe2-druid-hybrid-starter-build",
    name: "POE2 Druid Hybrid Starter Build",
    buildClass: "Druid",
    playstyle: "Hybrid melee spell",
    difficulty: "Medium",
    budget: "Moderate",
    bestFor: "Experiment-minded beginners",
    reason: "Choose this only if flexibility matters more than having the safest first route.",
    tone: "text-lime-200",
  },
];

const comparisonBuilds = [
  {
    name: "Minion Witch",
    href: "/builds/poe2-beginner-minion-witch-build",
    playstyle: "Minions",
    difficulty: "Easy",
    budget: "Starter",
    safety: "Excellent",
    levelingSpeed: "Good",
    bestFor: "Safest first character",
  },
  {
    name: "Beginner Ranged",
    href: "/builds/poe2-beginner-ranged-starter-build",
    playstyle: "Ranged",
    difficulty: "Easy",
    budget: "Low",
    safety: "Good",
    levelingSpeed: "Strong",
    bestFor: "Fast leveling with distance",
  },
  {
    name: "Warrior Totem Slam",
    href: "/builds/poe2-warrior-totem-slam-build",
    playstyle: "Melee",
    difficulty: "Moderate",
    budget: "Moderate",
    safety: "Strong",
    levelingSpeed: "Good",
    bestFor: "Durable melee learners",
  },
  {
    name: "Sorceress Fireball",
    href: "/builds/poe2-sorceress-fireball-build",
    playstyle: "Spell",
    difficulty: "Easy",
    budget: "Low",
    safety: "Good",
    levelingSpeed: "Good",
    bestFor: "Simple caster route",
  },
  {
    name: "Druid Hybrid",
    href: "/builds/poe2-druid-hybrid-starter-build",
    playstyle: "Hybrid",
    difficulty: "Moderate",
    budget: "Moderate",
    safety: "Good",
    levelingSpeed: "Moderate",
    bestFor: "Flexible experiments",
  },
];

const firstBuildRules = [
  {
    title: "One clear damage skill",
    body: "Your first route should make the main damage button obvious. If the build asks you to rotate too many attacks before it works, save it for later.",
  },
  {
    title: "Forgiving defenses",
    body: "A beginner build should survive mistakes while you learn boss patterns, flask timing, movement, and enemy pressure.",
  },
  {
    title: "Affordable upgrades",
    body: "Look for weapon, spell, minion, or defense upgrades that are easy to understand before chasing rare endgame items.",
  },
  {
    title: "Low setup friction",
    body: "The best starter builds keep early combat readable: clear packs, handle rares, move out of danger, then upgrade one problem at a time.",
  },
  {
    title: "A clear leveling path",
    body: "Each new skill should solve a real problem such as clear speed, boss damage, defense, or movement.",
  },
];

const relatedSkills = [
  {
    href: "/skills/stormcaller-arrow",
    name: "Stormcaller Arrow",
    role: "Lightning bow pressure",
    bestFor: "Ranged starters",
    playstyle: "Bow and lightning clear",
  },
  {
    href: "/skills/rain-of-arrows",
    name: "Rain of Arrows",
    role: "Bow area coverage",
    bestFor: "Pack clearing",
    playstyle: "Ranged leveling",
  },
  {
    href: "/skills/glacial-lance",
    name: "Glacial Lance",
    role: "Cold ranged damage",
    bestFor: "Safer spacing",
    playstyle: "Cold spear routes",
  },
  {
    href: "/skills/shield-charge",
    name: "Shield Charge",
    role: "Shield movement and impact",
    bestFor: "Durable melee",
    playstyle: "Warrior and shield routes",
  },
];

const quickAnswers = [
  {
    question: "Which playstyle is safest?",
    answer: "Minions create space while you learn positioning and boss mechanics.",
  },
  {
    question: "What is easiest to level?",
    answer: "Choose a build with one main damage skill and upgrades that are easy to understand.",
  },
  {
    question: "Should beginners choose the strongest endgame build?",
    answer: "Not always. A build that is easier to level and gear is often better for a first character.",
  },
  {
    question: "When should I change builds?",
    answer: "Change only when your current route no longer matches your preferred playstyle or progression goal.",
  },
];

export default function BeginnerBuildsPage() {
  return (
    <main className="bg-[#030304] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_18%_18%,rgba(245,158,11,0.16),transparent_28%),radial-gradient(circle_at_80%_22%,rgba(14,165,233,0.14),transparent_30%),linear-gradient(135deg,#030304,#07100d_48%,#030304)]">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-12">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-200">POE2 BEGINNER BUILDS</p>
            <h1 className="mt-3 text-4xl font-black leading-[0.98] tracking-tight text-white md:text-6xl">
              Find the Right POE2 Beginner Build
            </h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/72 md:text-lg">
              Choose a beginner build based on safety, playstyle, leveling speed, and how much complexity you want to manage.
            </p>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-white/56">
              Your first build should have one clear damage plan, simple defenses, and affordable upgrades.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["First Character Friendly", "Simple Mechanics", "Affordable Upgrades", "Clear Leveling Path"].map((item) => (
                <span key={item} className="rounded-full bg-white/[0.07] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/74 ring-1 ring-white/12">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#05070a]">
        <div className="mx-auto max-w-7xl px-4 py-9">
          <BeginnerBuildDecision />
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#030304]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Beginner Builds by Playstyle</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">Start from the playstyle you already understand.</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/58">
              Beginner builds should reduce confusion. Pick the combat style first, then compare safety, budget, and leveling clarity.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {beginnerBuilds.map((build) => (
              <article key={build.href} className="border border-white/10 bg-white/[0.035] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <p className={`text-[0.66rem] font-black uppercase tracking-[0.16em] ${build.tone}`}>{build.group}</p>
                <h3 className="mt-2 text-lg font-black leading-tight text-white">{build.name}</h3>
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
                <Link href={build.href} className="mt-4 inline-flex min-h-10 items-center justify-center bg-white/[0.07] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/82 ring-1 ring-white/14 hover:bg-amber-200 hover:text-zinc-950">
                  View Build
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#05070a]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Beginner Build Comparison</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">Compare the first-character tradeoffs.</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/58">
              Use this comparison to decide whether safety, leveling speed, or low budget matters most right now.
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {comparisonBuilds.map((build) => (
              <article key={build.href} className="border border-white/10 bg-black/28 p-4">
                <h3 className="text-lg font-black text-white">
                  <Link href={build.href} className="hover:text-amber-200">
                    {build.name}
                  </Link>
                </h3>
                <dl className="mt-3 grid gap-2 text-xs font-bold text-white/64">
                  {[
                    ["Playstyle", build.playstyle],
                    ["Difficulty", build.difficulty],
                    ["Budget", build.budget],
                    ["Safety", build.safety],
                    ["Leveling Speed", build.levelingSpeed],
                    ["Best For", build.bestFor],
                  ].map(([label, value]) => (
                    <div key={label} className="border-b border-white/8 pb-2 last:border-b-0">
                      <dt className="text-white/36">{label}</dt>
                      <dd className="mt-1 text-white/78">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#030304]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">What Makes a Good First Build</p>
              <h2 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">Good beginner builds make the next action obvious.</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-white/58">
                A starter route should help you notice the real problem: damage, defense, movement, budget, or too much setup.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {firstBuildRules.map((rule) => (
                <article key={rule.title} className="border border-white/10 bg-white/[0.035] p-4">
                  <h3 className="text-base font-black text-white">{rule.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/62">{rule.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#05070a]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-200">Related Skills</p>
              <h2 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">Skills that help beginners compare routes.</h2>
            </div>
            <p className="max-w-lg text-sm font-semibold leading-6 text-white/56">
              These skill pages help you understand whether a build is ranged, melee, defensive, or speed-focused.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {relatedSkills.map((skill) => (
              <article key={skill.href} className="border border-white/10 bg-white/[0.035] p-4">
                <p className="text-[0.66rem] font-black uppercase tracking-[0.16em] text-violet-200">{skill.role}</p>
                <h3 className="mt-2 text-lg font-black text-white">{skill.name}</h3>
                <dl className="mt-3 grid gap-2 text-xs font-bold text-white/62">
                  <div>
                    <dt className="text-white/36">Best For</dt>
                    <dd className="mt-1 text-white/78">{skill.bestFor}</dd>
                  </div>
                  <div>
                    <dt className="text-white/36">Related Playstyle</dt>
                    <dd className="mt-1 text-white/78">{skill.playstyle}</dd>
                  </div>
                </dl>
                <Link href={skill.href} className="mt-4 inline-flex min-h-10 items-center justify-center bg-white/[0.07] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/82 ring-1 ring-white/14 hover:bg-violet-200 hover:text-zinc-950">
                  Explore Skill
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#030304]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Quick Beginner Answers</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">Answer the first decision before chasing power.</h2>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {quickAnswers.map((item) => (
              <article key={item.question} className="border border-white/10 bg-black/28 p-4">
                <h3 className="text-base font-black text-white">{item.question}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/62">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#05070a]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="border border-amber-200/20 bg-[radial-gradient(circle_at_18%_20%,rgba(245,158,11,0.18),transparent_28%),linear-gradient(135deg,rgba(24,24,27,0.94),rgba(3,7,18,0.96))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.34)] md:p-7">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Next Step</p>
            <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-black leading-tight text-white md:text-4xl">Still Not Sure Where to Start?</h2>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/64">
                  Compare all POE2 builds or use the Class Picker to narrow your first character choice.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/builds" className="inline-flex min-h-11 items-center justify-center bg-amber-200 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-zinc-950 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200">
                  Compare All Builds
                </Link>
                <Link href="/class-picker" className="inline-flex min-h-11 items-center justify-center bg-white/[0.07] px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white/84 ring-1 ring-white/14 hover:bg-white hover:text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200">
                  Choose a Class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
