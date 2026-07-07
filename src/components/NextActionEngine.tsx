"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type CampaignStatus = "not-finished" | "finished";
type AtlasProgress = "not-started" | "early" | "blocked";
type LevelBand = "under-30" | "30-60" | "60-plus";
type Experience = "new" | "casual" | "returning";
type MainGoal = "choose-build" | "stop-dying" | "more-damage" | "progress-atlas" | "reduce-lag";
type PlayerStage = "New Player" | "Learning Systems" | "Progressing Endgame" | "Optimizing Builds" | "Creating Experiments";

type Recommendation = {
  stage: PlayerStage;
  stageReason: string;
  diagnosis: string;
  actions: string[];
  links: { href: string; label: string; note: string }[];
};

const fieldClass = "border border-line bg-white px-3 py-2 text-sm font-bold text-ink outline-none focus:ring-2 focus:ring-moss";

const options = {
  campaign: [
    { value: "not-finished", label: "Still in Campaign" },
    { value: "finished", label: "Campaign finished" },
  ],
  atlas: [
    { value: "not-started", label: "Not started" },
    { value: "early", label: "Early Atlas" },
    { value: "blocked", label: "Stuck or dying" },
  ],
  level: [
    { value: "under-30", label: "Under 30" },
    { value: "30-60", label: "30-60" },
    { value: "60-plus", label: "60+" },
  ],
  experience: [
    { value: "new", label: "New player" },
    { value: "casual", label: "Casual player" },
    { value: "returning", label: "Returning player" },
  ],
  goal: [
    { value: "choose-build", label: "Choose a build" },
    { value: "stop-dying", label: "Stop dying" },
    { value: "more-damage", label: "More damage" },
    { value: "progress-atlas", label: "Progress Atlas" },
    { value: "reduce-lag", label: "Fix lag" },
  ],
};

function getPlayerStage(
  campaign: CampaignStatus,
  atlas: AtlasProgress,
  level: LevelBand,
  experience: Experience,
  goal: MainGoal,
): PlayerStage {
  if (campaign === "not-finished" || level === "under-30" || experience === "new") {
    return "New Player";
  }

  if (campaign === "finished" && level === "60-plus" && experience === "returning" && goal === "choose-build") {
    return "Creating Experiments";
  }

  if (campaign === "finished" && level === "60-plus" && goal === "more-damage") {
    return "Optimizing Builds";
  }

  if (campaign === "finished" && (atlas === "early" || atlas === "blocked" || goal === "progress-atlas")) {
    return "Progressing Endgame";
  }

  return "Learning Systems";
}

function applyImmediateGoalContext(recommendation: Recommendation, goal: MainGoal): Recommendation {
  if (goal === "reduce-lag") {
    return {
      ...recommendation,
      actions: [
        "Rule out latency before changing your build.",
        ...recommendation.actions.filter((action) => action !== "Rule out latency before changing your build."),
      ].slice(0, 3),
      links: [
        { href: "/tools/exitlag", label: "POE2 Lag Fix", note: "Check routing and combat delay before blaming the build." },
        ...recommendation.links.filter((item) => item.href !== "/tools/exitlag"),
      ].slice(0, 3),
    };
  }

  if (goal === "stop-dying") {
    return {
      ...recommendation,
      actions: [
        "Fix defenses before adding more damage.",
        ...recommendation.actions.filter((action) => action !== "Fix defenses before adding more damage."),
      ].slice(0, 3),
    };
  }

  return recommendation;
}

function getRecommendation(
  campaign: CampaignStatus,
  atlas: AtlasProgress,
  level: LevelBand,
  experience: Experience,
  goal: MainGoal,
): Recommendation {
  const stage = getPlayerStage(campaign, atlas, level, experience, goal);

  if (stage === "New Player") {
    return applyImmediateGoalContext(
      {
        stage,
        stageReason:
          "Your answers show you are still in the foundation stage: campaign progress, level, or experience matters more than advanced optimization.",
        diagnosis:
          "You are still learning the foundations of Path of Exile 2. The best next step is not finding the strongest build; it is finishing progression with a simple route and fewer decisions.",
        actions: ["Complete progression with one beginner route.", "Improve defenses before adding mechanics.", "Learn basic currency and upgrade usage."],
        links: [
          { href: "/builds/beginner", label: "Beginner Builds", note: "Start here if this is your first character." },
          { href: "/builds/easy", label: "Easy Builds", note: "Use this if you want low-friction leveling." },
          { href: "/class-picker", label: "Class Picker", note: "Use this if the class choice is still unclear." },
        ],
      },
      goal,
    );
  }

  if (stage === "Learning Systems") {
    return applyImmediateGoalContext(
      {
        stage,
        stageReason: "You are past the first class choice, but the answers do not yet point to deep endgame optimization.",
        diagnosis:
          "You are entering the stage where understanding progression matters more than copying builds. Your next improvement comes from learning upgrade priorities and using existing pages as support.",
        actions: ["Learn upgrade priorities.", "Improve gear efficiently.", "Understand basic currency farming decisions."],
        links: [
          { href: "/builds", label: "Build Hub", note: "Compare build directions without opening every page." },
          { href: "/skills", label: "Skill Database", note: "Use skill pages to understand what each skill solves." },
          { href: "/builds/poe2-mercenary-crossbow-starter-build", label: "Mercenary Crossbow Starter", note: "A clear example of simple skill roles." },
        ],
      },
      goal,
    );
  }

  if (stage === "Progressing Endgame") {
    return applyImmediateGoalContext(
      {
        stage,
        stageReason: "Atlas or post-campaign answers show that consistency now matters more than adding random build ideas.",
        diagnosis:
          "Your biggest improvement comes from targeted upgrades, not random changes. Identify the part of your build that fails repeatedly and fix that first.",
        actions: ["Fix the weakest repeatable situation.", "Upgrade key items before changing builds.", "Stabilize one build direction."],
        links: [
          { href: "/builds", label: "Build Hub", note: "Use this to compare stable build directions." },
          { href: "/builds/easy", label: "Easy Builds", note: "Compare safer routes if deaths are blocking progress." },
          { href: "/skills/time-of-need", label: "Time of Need", note: "Useful if recovery gaps are the problem." },
        ],
      },
      goal,
    );
  }

  if (stage === "Optimizing Builds") {
    return applyImmediateGoalContext(
      {
        stage,
        stageReason: "Your answers suggest the basic route works and the next value is deeper build optimization.",
        diagnosis:
          "You are ready for deeper character optimization. The next step is improving damage scaling, gear quality, and advanced mechanics without losing the build's core identity.",
        actions: ["Improve damage scaling around one main skill.", "Optimize gear instead of replacing the build.", "Compare advanced mechanics through related skills."],
        links: [
          { href: "/skills", label: "Skill Database", note: "Compare scaling and support-skill decisions." },
          { href: "/builds/monk", label: "Monk Builds", note: "Good for timing-window optimization examples." },
          { href: "/builds/poe2-mercenary-crossbow-starter-build", label: "Mercenary Crossbow Starter", note: "Use as a clean model for skill role separation." },
        ],
      },
      goal,
    );
  }

  return applyImmediateGoalContext(
    {
      stage,
      stageReason: "Your answers suggest you already understand the basics and are choosing what to test next.",
      diagnosis:
        "You are ready to explore your own build ideas. The next step is controlled experimentation, not copying another complete setup blindly.",
      actions: ["Test one mechanic at a time.", "Compare alternatives against your current bottleneck.", "Create your own setup from existing build and skill pages."],
      links: [
        { href: "/builds", label: "Build Hub", note: "Use this as the map of existing build directions." },
        { href: "/skills", label: "Skill Database", note: "Use skill pages to compare mechanics." },
        { href: "/builds/monk", label: "Monk Builds", note: "Use Monk routes as examples of timing and payoff experiments." },
      ],
    },
    goal,
  );
}

export function NextActionEngine() {
  const [campaign, setCampaign] = useState<CampaignStatus>("not-finished");
  const [atlas, setAtlas] = useState<AtlasProgress>("not-started");
  const [level, setLevel] = useState<LevelBand>("30-60");
  const [experience, setExperience] = useState<Experience>("new");
  const [goal, setGoal] = useState<MainGoal>("choose-build");

  const recommendation = useMemo(
    () => getRecommendation(campaign, atlas, level, experience, goal),
    [campaign, atlas, level, experience, goal],
  );

  return (
    <section className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="border border-line bg-panel p-4">
        <p className="text-xs font-black uppercase text-moss">Player Journey Engine MVP</p>
        <h2 className="mt-1 text-xl font-black text-ink">Where are you now?</h2>
        <div className="mt-4 grid gap-3">
          <label className="grid gap-1 text-sm font-black text-ink">
            Campaign status
            <select className={fieldClass} value={campaign} onChange={(event) => setCampaign(event.target.value as CampaignStatus)}>
              {options.campaign.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-sm font-black text-ink">
            Atlas progress
            <select className={fieldClass} value={atlas} onChange={(event) => setAtlas(event.target.value as AtlasProgress)}>
              {options.atlas.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-sm font-black text-ink">
            Current level
            <select className={fieldClass} value={level} onChange={(event) => setLevel(event.target.value as LevelBand)}>
              {options.level.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-sm font-black text-ink">
            Experience level
            <select className={fieldClass} value={experience} onChange={(event) => setExperience(event.target.value as Experience)}>
              {options.experience.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-sm font-black text-ink">
            Main goal
            <select className={fieldClass} value={goal} onChange={(event) => setGoal(event.target.value as MainGoal)}>
              {options.goal.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <article className="border-4 border-ink bg-white p-4 shadow-lg">
        <p className="text-xs font-black uppercase text-ember">Diagnosis</p>
        <h2 className="mt-1 text-2xl font-black leading-tight text-ink">What you should do next</h2>
        <div className="mt-3 border border-line bg-paper px-3 py-2 text-sm leading-6">
          <span className="font-black text-ink">Player stage: </span>
          <span className="font-black text-moss">{recommendation.stage}</span>
          <p className="mt-1 text-ink/64">{recommendation.stageReason}</p>
        </div>
        <p className="mt-3 text-sm leading-6 text-ink/72">{recommendation.diagnosis}</p>

        <h3 className="mt-4 text-base font-black text-ink">Recommended next actions</h3>
        <ol className="mt-2 grid gap-2 text-sm leading-6 text-ink/72">
          {recommendation.actions.map((action) => (
            <li key={action} className="border border-line bg-paper px-3 py-2">
              {action}
            </li>
          ))}
        </ol>

        <h3 className="mt-4 text-base font-black text-ink">Supporting guides and tools</h3>
        <div className="mt-2 grid gap-2">
          {recommendation.links.map((item) => (
            <Link key={item.href} href={item.href} className="border border-line bg-panel px-3 py-2 text-sm hover:border-moss">
              <span className="block font-black text-moss">{item.label}</span>
              <span className="block leading-6 text-ink/64">{item.note}</span>
            </Link>
          ))}
        </div>
      </article>
    </section>
  );
}
