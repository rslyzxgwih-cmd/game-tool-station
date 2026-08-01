import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/seo";

const monkBuilds = [
  {
    title: "Best Monk Starter Build",
    href: "/builds/poe2-monk-leveling-build",
    summary:
      "Start with the Monk Leveling Build if you want the safest first route into Monk. It keeps the early plan focused around mobile melee clear, then adds Tempest Bell when tougher enemies need a planned burst window.",
  },
  {
    title: "Tempest Bell Build",
    href: "/builds/poe2-monk-leveling-build",
    summary:
      "The Tempest Bell route is the core Monk boss-damage path for players who like timing windows. Use it when your clear already works and you need a payoff skill for rares, bosses, and tougher campaign checks.",
  },
  {
    title: "Ice Strike Build",
    href: "/builds/poe2-monk-ice-strike-build",
    summary:
      "Ice Strike is the control-focused Monk option. It is best for players who want safer melee pacing, chill or freeze pressure, and more room to learn enemy attacks without abandoning active combat.",
  },
  {
    title: "Lightning Staff Build",
    href: "/builds/poe2-monk-lightning-staff-build",
    summary:
      "Lightning Staff is for players who want Monk to feel fast, elemental, and aggressive. It rewards commitment to lightning scaling, staff uptime, and clean movement between packs.",
  },
  {
    title: "Crossbow Monk",
    href: "/builds/monk-crossbow-build",
    summary:
      "Crossbow Monk is a hybrid comparison route, not the default Monk recommendation. Use it only if you specifically want to test ranged crossbow spacing while still comparing Monk payoff skills.",
  },
];

const coreSkills = [
  {
    href: "/skills/tempest-bell",
    label: "Tempest Bell",
    note: "Boss payoff skill for Monk builds that need single-target burst.",
  },
  {
    href: "/skills/falling-thunder",
    label: "Falling Thunder",
    note: "Early lightning melee identity for leveling and clear.",
  },
  {
    href: "/skills/killing-palm",
    label: "Killing Palm",
    note: "Finisher tool for active melee players who watch enemy state.",
  },
  {
    href: "/skills/charged-staff",
    label: "Charged Staff",
    note: "Lightning staff support for builds already committed to that scaling.",
  },
];

const faqs = [
  {
    question: "What is the best POE2 Monk build for beginners?",
    answer:
      "The best beginner Monk route is the Monk Leveling Build because it keeps the first plan narrow: one clear identity, one payoff skill, and enough movement to avoid trading hits.",
  },
  {
    question: "Is Monk beginner friendly in POE2?",
    answer:
      "Monk can be beginner friendly for active players, but it is not the lowest-input class. Choose Monk if movement, timing, and payoff skills sound fun rather than stressful.",
  },
  {
    question: "Should I start with Tempest Bell?",
    answer:
      "Do not make Tempest Bell your only early answer. Start with a stable clear skill first, then add Tempest Bell when rares and bosses need stronger single-target payoff.",
  },
  {
    question: "Is Ice Strike better than Tempest Bell?",
    answer:
      "Ice Strike is better when safety and control matter most. Tempest Bell is better when the build already clears packs and needs a focused boss-damage window.",
  },
  {
    question: "What Monk build levels fastest?",
    answer:
      "Lightning or Falling Thunder-style Monk routes usually level fastest because they give the class a clear damage identity early. They still need defensive upgrades to avoid campaign slowdowns.",
  },
  {
    question: "Is Crossbow Monk worth playing?",
    answer:
      "Crossbow Monk is worth testing only if the hybrid idea is the goal. If you mainly want crossbows, Mercenary is cleaner. If you mainly want Monk, use a standard Monk route.",
  },
  {
    question: "What skills should every Monk compare first?",
    answer:
      "Most Monk players should compare Falling Thunder, Tempest Bell, Killing Palm, and Charged Staff before adding extra mechanics.",
  },
  {
    question: "When should I switch Monk builds?",
    answer:
      "Switch when the current build fails a specific job: clear, single-target damage, survival, or comfort. Do not switch only because another build has better theoretical damage.",
  },
];

export const metadata: Metadata = {
  title: "Best POE2 Monk Builds - Tempest Bell, Ice Strike, Lightning Staff",
  description:
    "Compare the best POE2 Monk builds for beginners, leveling, Tempest Bell, Ice Strike, Lightning Staff, Crossbow Monk, and core Monk skills.",
  alternates: {
    canonical: "/builds/monk",
  },
  keywords: [
    "best poe2 monk builds",
    "poe2 monk build",
    "poe2 monk leveling build",
    "tempest bell build",
    "poe2 ice strike build",
    "poe2 lightning staff build",
  ],
};

export default function MonkBuildsPage() {
  return (
    <main className="bg-[#030304] text-zinc-100">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Builds",
              item: absoluteUrl("/builds"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Monk Builds",
              item: absoluteUrl("/builds/monk"),
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Best POE2 Monk Builds",
          itemListElement: monkBuilds.map((build, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: build.title,
            url: absoluteUrl(build.href),
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />

      <article className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <header className="border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(10,14,20,0.98),rgba(12,21,34,0.92)_55%,rgba(31,22,8,0.82))] p-5 shadow-[0_0_50px_rgba(14,165,233,0.08)] sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Monk Topic Hub</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">Best POE2 Monk Builds</h1>
          <div className="mt-4 grid max-w-4xl gap-3 text-sm leading-7 text-zinc-300">
            <p>
              Monk is the POE2 class for players who want active melee combat, fast repositioning, and a build
              identity built around timing rather than passive safety. The class works best when each skill has a clear
              job: one skill clears packs, one skill creates boss payoff, and one defensive habit keeps the player from
              standing still too long. That makes Monk rewarding for players who like reading fights, moving through
              openings, and turning short damage windows into meaningful progress.
            </p>
            <p>
              The main strength of Monk is flexibility inside a focused melee identity. Falling Thunder gives early
              lightning direction, Tempest Bell creates a visible single-target payoff, Killing Palm supports finisher
              timing, and Charged Staff helps players who commit to lightning staff scaling. Monk can feel fast and
              powerful while leveling because the best builds do not need a huge number of buttons at the start. A good
              Monk route usually begins with one reliable damage skill, then adds payoff and control only when the
              campaign starts asking for more.
            </p>
            <p>
              The weakness is that Monk punishes vague build planning. If you add too many skills early, split damage
              types without a reason, or treat Tempest Bell as a complete build before your clear skill works, the class
              can feel fragile. Monk is also less forgiving than durable Warrior or passive Minion Witch routes. Players
              who want to stand still, tank every hit, or avoid timing windows should start with a safer beginner build.
            </p>
            <p>
              You should play Monk if you want a skill-based leveling experience with clear decisions. Choose Tempest
              Bell when boss damage is the problem, Ice Strike when safety and control matter, Lightning Staff when you
              want a committed elemental route, and Crossbow Monk only when the hybrid concept itself is the reason you
              are interested. If your goal is the easiest possible first character, compare{" "}
              <Link href="/builds/beginner" className="font-bold text-amber-200 hover:text-amber-100">
                Beginner Builds
              </Link>{" "}
              before committing.
            </p>
          </div>
        </header>

        <section className="mt-6 grid gap-4">
          {monkBuilds.map((build) => (
            <section key={build.title} className="border border-cyan-400/15 bg-zinc-950/80 p-5">
              <h2 className="text-xl font-black text-white">{build.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{build.summary}</p>
              <Link href={build.href} className="mt-3 inline-block text-sm font-black text-amber-200 hover:text-amber-100">
                Open {build.title}
              </Link>
            </section>
          ))}
        </section>

        <section className="mt-6 border border-cyan-400/15 bg-zinc-950/80 p-5">
          <h2 className="text-xl font-black text-white">Core Monk Skills</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {coreSkills.map((skill) => (
              <Link
                key={skill.href}
                href={skill.href}
                className="border border-cyan-300/15 bg-black/25 px-3 py-3 text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
              >
                <span className="block font-black text-cyan-200">{skill.label}</span>
                <span className="mt-1 block text-sm leading-6">{skill.note}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-6 border border-cyan-400/15 bg-zinc-950/80 p-5">
          <h2 className="text-xl font-black text-white">Monk Leveling Tips</h2>
          <div className="mt-3 grid gap-3 text-sm leading-7 text-zinc-300">
            <p>
              Monk leveling should start with restraint. The class has several attractive skills, but a beginner Monk
              becomes much easier when the starter setup has one main identity. Pick whether the character
              is a lightning Monk, a control Monk, a finisher Monk, or a payoff-window Monk before adding extra ideas.
              If every skill on the bar is trying to solve a different problem, the campaign becomes harder to read.
              Start by asking one question: what kills normal packs reliably? Until that answer is stable, do not build
              around boss payoff, hybrid weapon experiments, or late-game scaling.
            </p>
            <p>
              In the early game, Falling Thunder-style routes are often the cleanest starting point because they give
              Monk a clear damage identity quickly. A simple early plan is better than a perfect theoretical plan. Keep
              weapon upgrades current, take enough defensive choices to survive mistakes, and avoid splitting between
              too many elements. If you are using Tempest Bell later, treat it as the payoff skill, not the first thing
              that must solve every fight. It becomes much stronger once your clear skill already handles normal packs
              and you can save Bell windows for rares, bosses, or enemies with enough life to justify setup.
            </p>
            <p>
              Mid-game Monk leveling is where many players make the build too busy. The campaign starts asking for
              better single-target damage, more reliable defenses, and cleaner movement at roughly the same time. Solve
              those jobs one by one. If packs are slow, improve the main clear skill. If bosses are slow, add Tempest
              Bell or another focused payoff. If deaths are the issue, upgrade defenses and movement habits before
              adding more damage. If a new skill does not clearly improve clear, single-target damage, safety, or
              comfort, delay it. Monk rewards precision, not clutter.
            </p>
            <p>
              Ice Strike should be considered when control matters more than raw speed. It gives the player more room
              to learn enemy movement and can make melee positioning feel less punishing. Lightning Staff should be
              considered when you are ready to commit to lightning scaling and staff uptime. Killing Palm should be
              added when you enjoy watching enemy state and using finishers, but it should not distract from the main
              damage loop. Charged Staff belongs later, when the build already supports lightning and can keep the staff
              plan active without losing survivability.
            </p>
            <p>
              Crossbow Monk is the exception, not the default leveling recommendation. If the reason you want the build
              is crossbow range, compare Mercenary Crossbow first. If the reason you want the build is Monk movement,
              melee timing, or Tempest Bell payoff, stay with a normal Monk route. Hybrid builds are harder because they
              ask the player to maintain two identities at once. They can be fun, but they should be tested after you
              understand what the Monk half and the crossbow half are each solving.
            </p>
            <p>
              For endgame transition, do not judge the build only by damage numbers. Ask whether the route still has
              clean answers for mapping, bossing, survival, and movement. A good Monk endgame setup keeps the leveling
              identity intact while improving gear, defenses, and support skills around it. If you keep dying before
              payoff windows, add safety. If bosses live too long, refine the payoff. If clearing feels scattered,
              simplify the main skill package. The best Monk builds are not the ones with the most mechanics; they are
              the ones where every mechanic has a job.
            </p>
            <p>
              Gear choices during Monk leveling should support the job you already chose. If you are playing lightning
              Monk, prioritize upgrades that make that lightning route more reliable instead of chasing every damage
              tag that appears. If you are playing Ice Strike, value control, defenses, and consistent uptime because
              the point of the route is safer melee pacing. If you are leaning into Tempest Bell, make sure the rest of
              the build can actually create the window where Bell matters. A common mistake is copying an endgame idea
              too early and then wondering why the campaign feels weak. The campaign version of a build needs fewer
              assumptions: current weapon, enough defenses, a clear main skill, and one answer for tougher enemies.
            </p>
            <p>
              Passive choices should follow the same rule. Take reliable damage and survival before narrow conditional
              bonuses. If you are dying, a small defensive improvement can be worth more than another damage node
              because it keeps you attacking instead of repeating fights. If your damage feels low, check whether the
              problem is the passive tree, the weapon, or the skill package before changing everything at once. Monk is
              especially sensitive to overcorrection: players often respond to one bad boss fight by adding several new
              mechanics, which makes the next fight harder to understand. Make one change, test whether it solved the
              problem, then move forward carefully. That habit is what turns Monk from a fragile-feeling class into a clean
              leveling character.
            </p>
          </div>
        </section>

        <section className="mt-6 border border-cyan-400/15 bg-zinc-950/80 p-5">
          <h2 className="text-xl font-black text-white">FAQ</h2>
          <div className="mt-3 grid gap-3">
            {faqs.map((faq) => (
              <section key={faq.question} className="border border-cyan-300/15 bg-black/25 px-3 py-3">
                <h3 className="font-black text-white">{faq.question}</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-300">{faq.answer}</p>
              </section>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
