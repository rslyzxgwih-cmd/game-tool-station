import type { Metadata } from "next";
import { BuildDetailV2, type BuildDetailV2Content } from "@/components/BuildDetailV2";

export const metadata: Metadata = {
  title: "Monk Crossbow Build 鈥?Best POE2 Build Guide (Leveling + Endgame)",
  description: "Best POE2 Monk Crossbow build guide for beginner leveling, Tempest Bell, and endgame setup choices.",
  alternates: {
    canonical: "/builds/monk-crossbow-build",
  },
};

const monkCrossbowContent: BuildDetailV2Content = {
  eyebrow: "MONK HYBRID BUILD",
  intro:
    "A hybrid POE2 route for players testing crossbow range with Monk payoff skills. Choose it when the hybrid idea is the goal, not when you simply want the cleanest crossbow or the simplest Monk starter.",
  badges: ["Monk", "Crossbow", "Hybrid", "Starter Guide"],
  heroImage: {
    src: "/images/builds/monk.webp",
    alt: "Monk releasing lightning power in a dark fantasy battle scene",
  },
  credibilityLine: "Updated: July 2026 | Guide scope: build choice, skill roles, and progression priorities",
  snapshotCaption: "Hybrid Monk and crossbow route",
  snapshot: [
    { label: "Class", value: "Monk" },
    { label: "Playstyle", value: "Hybrid ranged and payoff-window combat" },
    { label: "Difficulty", value: "Medium" },
    { label: "Main Skill Idea", value: "Crossbow spacing plus Tempest Bell payoff" },
    { label: "Best For", value: "Players who specifically want to test a Monk hybrid route." },
    { label: "Main Strength", value: "Direct comparison between ranged openings and Monk burst timing." },
  ],
  chooseThisBuild: [
    "You want to experiment with crossbow range while still comparing Monk payoff skills.",
    "You like hybrid routes and can keep each skill role separate.",
    "You want Tempest Bell to remain the payoff skill instead of the whole build.",
  ],
  avoidThisBuild: [
    "You mainly want the cleanest crossbow route; Mercenary is simpler for that goal.",
    "You mainly want a standard Monk route with less hybrid decision-making.",
  ],
  whyTitle: "Why This Route Works",
  whyParagraphs: [
    "Crossbow Monk works only when the two halves of the build have separate jobs. Crossbow range creates openings, while Monk skills provide the payoff and comparison point.",
    "Tempest Bell gives the hybrid route a clear reason to remain connected to Monk. Without a payoff skill, the character risks becoming a weaker version of a normal ranged build.",
    "The route is easiest to evaluate when you compare it honestly against both Mercenary Crossbow and standard Monk leveling before committing.",
  ],
  coreSkills: [
    {
      name: "Tempest Bell",
      href: "/skills/tempest-bell",
      role: "Monk payoff skill",
      copy: "Use Tempest Bell when tougher enemies need a planned burst window.",
    },
    {
      name: "Falling Thunder",
      href: "/skills/falling-thunder",
      role: "Monk damage comparison",
      copy: "Compare Falling Thunder when the route needs a clearer lightning Monk identity.",
    },
    {
      name: "Killing Palm",
      href: "/skills/killing-palm",
      role: "Finisher comparison",
      copy: "Use Killing Palm as a comparison point for active Monk players who enjoy watching enemy state.",
    },
    {
      name: "Escape Shot",
      href: "/skills/escape-shot",
      role: "Ranged spacing tool",
      copy: "Use Escape Shot as the crossbow-side reference for distance and repositioning.",
    },
  ],
  levelingTitle: "Safe Progression Route",
  levelingRoute: [
    {
      title: "Start with a Stable Monk Loop",
      copy: "Do not add crossbow range before the Monk damage loop feels readable.",
    },
    {
      title: "Add Crossbow Range Carefully",
      copy: "Use crossbow tools to solve spacing, not to replace the whole Monk identity.",
    },
    {
      title: "Use Tempest Bell for Payoff",
      copy: "Save Tempest Bell for rares, bosses, or other moments where a planned burst window matters.",
    },
    {
      title: "Compare Before Specializing",
      copy: "If ranged weapon feel becomes the main goal, compare Mercenary Crossbow before investing deeper.",
    },
  ],
  levelingNote:
    "This page is a hybrid decision guide. It helps you decide whether the concept fits before you commit to deeper optimization.",
  upgradePriorities: [
    "Keep the Monk damage loop stable.",
    "Use crossbow tools only when spacing is the problem.",
    "Improve defenses before adding more hybrid mechanics.",
    "Compare standard Monk and Mercenary routes if the identity feels unclear.",
  ],
  strengths: [
    "Distinct hybrid identity",
    "Useful comparison against Mercenary Crossbow",
    "Tempest Bell gives a clear payoff window",
    "Good for players who enjoy experimentation",
  ],
  tradeoffs: [
    "The route asks the player to manage two identities at once.",
    "It is less direct than either a standard Monk route or a standard Mercenary crossbow route.",
  ],
  relatedBuildsTitle: "Related Builds",
  relatedReasonFor: (_slug, playstyle) =>
    `Compare this ${playstyle.toLowerCase()} route before deciding whether the hybrid idea is worth keeping.`,
  ctaEyebrow: "Build Diagnosis",
  ctaTitle: "Not Sure the Hybrid Route Fits?",
  ctaCopy: "Return to the Build Finder to compare standard Monk, Mercenary Crossbow, and beginner starter routes.",
  primaryCta: {
    label: "Compare POE2 Builds",
    href: "/builds#featured-builds",
  },
  secondaryCta: {
    label: "Use the Build Finder",
    href: "/builds",
  },
};

const relatedBuilds = [
  { slug: "poe2-monk-leveling-build", title: "POE2 Monk Leveling Build", playstyle: "Melee leveling" },
  { slug: "poe2-monk-tempest-bell-build", title: "POE2 Monk Tempest Bell Build", playstyle: "Monk payoff" },
  {
    slug: "poe2-mercenary-crossbow-starter-build",
    title: "POE2 Mercenary Crossbow Starter Build",
    playstyle: "Ranged crossbow",
  },
];

export default function MonkCrossbowBuildPage() {
  return (
    <BuildDetailV2
      build={{
        title: "Monk Crossbow Build",
        class: "Monk",
        playstyle: "Hybrid ranged and payoff-window combat",
        difficulty: "Medium",
      }}
      relatedBuilds={relatedBuilds}
      content={monkCrossbowContent}
    />
  );
}
