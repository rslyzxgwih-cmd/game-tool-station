export type TopicClusterPage = {
  title: string;
  description: string;
  canonical: string;
  keywords: string[];
  parent: {
    href: string;
    label: string;
  };
  sections: {
    title: string;
    body: string;
  }[];
  relatedBuilds: {
    href: string;
    label: string;
    note: string;
  }[];
  relatedSkills: {
    href: string;
    label: string;
    note: string;
  }[];
  nextRecommended?: {
    href: string;
    label: string;
    note: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const topicClusterPages = {
  killingPalmBuilds: {
    title: "POE2 Killing Palm Builds",
    description: "Choose when Killing Palm belongs in a Monk build, which builds use it, and which skills support it.",
    canonical: "/skills/killing-palm/builds",
    keywords: ["poe2 killing palm builds", "killing palm poe2", "poe 2 killing palm", "poe2 杀戮之掌"],
    parent: { href: "/skills/killing-palm", label: "Killing Palm" },
    sections: [
      {
        title: "Decision Answer",
        body: "Use Killing Palm when the build rewards active finishers and you are comfortable watching enemy state during fights. Skip it if you want one-button melee or slow tank pacing.",
      },
      {
        title: "Cluster Role",
        body: "This page supports the main Killing Palm skill page by connecting it to Monk builds, palm skills, and close-range finisher decisions.",
      },
    ],
    relatedBuilds: [
      { href: "/builds/monk", label: "POE2 Monk Builds", note: "Parent Monk route for active melee and palm decisions." },
      { href: "/builds/poe2-monk-leveling-build", label: "POE2 Monk Leveling Build", note: "Primary Monk starter path using palm and payoff skills." },
      { href: "/builds/poe2-monk-palm-leveling-build", label: "POE2 Monk Palm Leveling Build", note: "Best fit for players searching specifically for palm gameplay." },
      { href: "/builds/poe2-monk-tempest-bell-build", label: "POE2 Monk Tempest Bell Build", note: "Pairs finisher pressure with boss payoff windows." },
    ],
    relatedSkills: [
      { href: "/skills/killing-palm", label: "Killing Palm", note: "Parent skill decision page." },
      { href: "/skills/staggering-palm", label: "Staggering Palm", note: "Control partner for palm routes." },
      { href: "/skills/tempest-bell", label: "Tempest Bell", note: "Common payoff skill for Monk boss damage." },
      { href: "/skills/falling-thunder", label: "Falling Thunder", note: "Lightning melee support for Monk builds." },
    ],
    faqs: [
      {
        question: "Is Killing Palm a good beginner skill?",
        answer: "Killing Palm is good for active players who want finishers. It is less ideal for players who want a passive or low-input starter.",
      },
      {
        question: "What class uses Killing Palm best?",
        answer: "Monk is the main class fit because the skill works with active melee, timing, and close-range finishers.",
      },
    ],
  },
  flameWallBuilds: {
    title: "POE2 Flame Wall Builds",
    description: "Decide when Flame Wall belongs in a fire or lightning caster build and which skills support it.",
    canonical: "/skills/flame-wall/builds",
    keywords: ["poe2 flame wall builds", "flame wall poe2", "poe 2 flame wall", "poe2 火焰墙"],
    parent: { href: "/skills/flame-wall", label: "Flame Wall" },
    sections: [
      {
        title: "Decision Answer",
        body: "Use Flame Wall when your main skill benefits from a reliable extra fire layer. Skip it if your build needs one standalone damage button or cannot spare setup time.",
      },
      {
        title: "Cluster Role",
        body: "This page connects the Flame Wall skill page to Sorceress starter builds, fire spell builds, and Spark support paths.",
      },
    ],
    relatedBuilds: [
      { href: "/builds/easy", label: "POE2 Easy Builds", note: "Compare whether Flame Wall adds too much setup friction." },
      { href: "/builds/poe2-sorceress-flame-wall-build", label: "POE2 Sorceress Flame Wall Build", note: "Direct build target for Flame Wall queries." },
      { href: "/builds/poe2-sorceress-fireball-build", label: "POE2 Sorceress Fireball Build", note: "Fire caster route that can use Flame Wall as a layer." },
      { href: "/builds/poe2-sorceress-spark-starter-build", label: "POE2 Sorceress Spark Starter Build", note: "Lightning starter where Flame Wall can support projectile damage." },
    ],
    relatedSkills: [
      { href: "/skills/flame-wall", label: "Flame Wall", note: "Parent skill decision page." },
      { href: "/skills/spark", label: "Spark", note: "Common starter spell searched alongside Flame Wall." },
      { href: "/skills/fireball", label: "Fireball", note: "Direct fire caster partner." },
      { href: "/skills/rolling-magma", label: "Rolling Magma", note: "Fire projectile option for caster builds." },
    ],
    faqs: [
      {
        question: "Is Flame Wall a main skill or support skill?",
        answer: "For most beginner decisions, Flame Wall is better treated as a support layer that improves another damage plan.",
      },
      {
        question: "What builds use Flame Wall?",
        answer: "Flame Wall fits fire caster builds and some Spark-style setups that want an extra damage layer.",
      },
    ],
  },
  timeOfNeedBuilds: {
    title: "POE2 Time of Need Builds",
    description: "Choose which POE2 builds should use Time of Need for recovery, curses, ailments, and survival.",
    canonical: "/skills/time-of-need/builds",
    keywords: ["poe2 time of need builds", "time of need poe2", "poe2 迫切时刻"],
    parent: { href: "/skills/time-of-need", label: "Time of Need" },
    sections: [
      {
        title: "Decision Answer",
        body: "Use Time of Need when your build has enough damage but loses time to burst damage, curses, elemental ailments, or missing recovery in longer fights.",
      },
      {
        title: "Cluster Role",
        body: "This page supports the Time of Need skill page by connecting it to beginner builds and class routes that benefit from safer recovery.",
      },
    ],
    relatedBuilds: [
      { href: "/builds/beginner", label: "POE2 Beginner Builds", note: "Use this if survival is a first-character concern." },
      { href: "/builds/easy", label: "POE2 Easy Builds", note: "Use this if recovery is needed to keep the route low friction." },
      { href: "/builds/poe2-warrior-slam-starter-build", label: "POE2 Warrior Slam Starter Build", note: "Durable melee route that can benefit from recovery support." },
      { href: "/builds/poe2-mercenary-crossbow-starter-build", label: "POE2 Mercenary Crossbow Starter Build", note: "Ranged route where recovery helps when spacing fails." },
      { href: "/builds/poe2-monk-leveling-build", label: "POE2 Monk Leveling Build", note: "Active melee route where missed timing can punish players." },
    ],
    relatedSkills: [
      { href: "/skills/time-of-need", label: "Time of Need", note: "Parent skill decision page." },
      { href: "/skills/enfeeble", label: "Enfeeble", note: "Defensive curse option for dangerous fights." },
      { href: "/skills/temporal-chains", label: "Temporal Chains", note: "Control option for safer pacing." },
      { href: "/skills/bone-cage", label: "Bone Cage", note: "Defensive control option." },
    ],
    faqs: [
      {
        question: "What builds should use Time of Need?",
        answer: "Builds that already clear acceptably but still die to burst, curses, or ailments should consider Time of Need.",
      },
      {
        question: "Is Time of Need a damage skill?",
        answer: "No. Its value is recovery and stability, not direct DPS.",
      },
    ],
  },
  warriorLeveling: {
    title: "POE2 Warrior Leveling Builds",
    description: "Choose a Warrior leveling route by slam skills, survivability, and beginner fit.",
    canonical: "/builds/warrior/leveling",
    keywords: ["poe2 warrior leveling build", "poe 2 warrior build", "poe 2 战士流派"],
    parent: { href: "/builds/warrior", label: "Warrior Builds" },
    sections: [
      {
        title: "Decision Answer",
        body: "Choose Warrior leveling if you want durable melee and simple priorities. The tradeoff is slower movement and less ranged comfort.",
      },
      {
        title: "Cluster Role",
        body: "This page supports the Warrior Builds cluster by connecting slam builds, melee skill pages, and starter build decisions.",
      },
    ],
    relatedBuilds: [
      { href: "/builds/poe2-warrior-slam-starter-build", label: "POE2 Warrior Slam Starter Build", note: "Main Warrior starter path." },
      { href: "/builds/poe2-warrior-earthquake-leveling-build", label: "POE2 Warrior Earthquake Leveling Build", note: "Area-focused leveling route." },
      { href: "/builds/poe2-warrior-boneshatter-build", label: "POE2 Warrior Boneshatter Build", note: "Physical melee pressure route." },
    ],
    relatedSkills: [
      { href: "/skills/rolling-slam", label: "Rolling Slam", note: "Early Warrior slam identity." },
      { href: "/skills/boneshatter", label: "Boneshatter", note: "Direct physical damage anchor." },
      { href: "/skills/earthquake", label: "Earthquake", note: "Area slam support for packs." },
      { href: "/skills/time-of-need", label: "Time of Need", note: "Recovery support for safer leveling." },
    ],
    faqs: [
      {
        question: "Is Warrior good for beginners?",
        answer: "Warrior is good for players who value durability and straightforward melee priorities more than speed.",
      },
      {
        question: "What is the safest Warrior leveling build?",
        answer: "Start with the Warrior Slam Starter Build, then compare Earthquake if pack clearing feels slow.",
      },
    ],
  },
  witchMinion: {
    title: "POE2 Witch Minion Builds",
    description: "Choose a Witch minion route by safety, summon pressure, and beginner fit.",
    canonical: "/builds/witch/minion",
    keywords: ["poe2 witch minion build", "best minion build poe 2", "poe 2 最佳召唤流派"],
    parent: { href: "/builds/witch", label: "Witch Builds" },
    sections: [
      {
        title: "Decision Answer",
        body: "Choose Witch minions if you want safer positioning and allies absorbing pressure. Skip the route if you dislike minion management.",
      },
      {
        title: "Cluster Role",
        body: "This page supports the Witch Builds cluster by connecting minion build pages, summon skills, and beginner safety decisions.",
      },
    ],
    relatedBuilds: [
      { href: "/builds/poe2-beginner-minion-witch-build", label: "POE2 Beginner Minion Witch Build", note: "Main minion starter route." },
      { href: "/builds/poe2-witch-fire-minion-build", label: "POE2 Witch Fire Minion Build", note: "Minion clear route using fire pressure." },
      { href: "/builds/poe2-witch-chaos-leveling-build", label: "POE2 Witch Chaos Leveling Build", note: "Non-minion comparison for Witch players." },
    ],
    relatedSkills: [
      { href: "/skills/raise-spectre", label: "Raise Spectre", note: "Key exposed Spectre query target." },
      { href: "/skills/skeletal-warrior", label: "Skeletal Warrior", note: "Basic frontline minion." },
      { href: "/skills/skeletal-arsonist", label: "Skeletal Arsonist", note: "Fire minion clear option." },
      { href: "/skills/time-of-need", label: "Time of Need", note: "Recovery support for personal safety." },
    ],
    faqs: [
      {
        question: "Is Witch minion good for beginners?",
        answer: "Yes, if the player wants safer positioning and does not mind managing summons.",
      },
      {
        question: "What skill should a minion Witch check first?",
        answer: "Start with Skeletal Warrior or Raise Spectre, then add stronger clear if packs feel slow.",
      },
    ],
  },
  mercenaryCrossbow: {
    title: "POE2 Mercenary Crossbow Build Guide",
    description: "Choose a Mercenary crossbow route by clear skill, boss skill, and beginner friction.",
    canonical: "/guides/mercenary/crossbow",
    keywords: [
      "mercenary crossbow build poe2",
      "poe2 mercenary crossbow build",
      "poe 2 crossbow build",
      "crossbow leveling poe2",
      "poe2 mercenary guide",
    ],
    parent: { href: "/guides/mercenary", label: "Mercenary Guide" },
    sections: [
      {
        title: "Decision Answer",
        body: "Choose Mercenary crossbow if you want ranged spacing, weapon impact, and a build where pack clear and boss damage have separate jobs. Skip it if reload rhythm or skill swapping feels like friction.",
      },
      {
        title: "Leveling Progression",
        body: "For crossbow leveling, start with Fragmentation Rounds for packs, add High Velocity Rounds for rares and bosses, then add one control tool such as Gas Grenade or Flash Grenade only after the first two roles feel stable.",
      },
      {
        title: "Beginner Build Explanation",
        body: "A beginner-friendly crossbow build should not ask one skill to solve every fight. Keep the early setup to clear, single target, and escape; add grenades later if enemies are closing distance too often.",
      },
      {
        title: "Cluster Role",
        body: "This page supports the Mercenary Guide cluster by connecting exact crossbow queries to starter builds, grenade leveling, boss damage, and core Mercenary skill decisions.",
      },
    ],
    relatedBuilds: [
      { href: "/builds/monk-crossbow-build", label: "Crossbow Monk Guide", note: "Primary hub if the player is comparing crossbow range with Monk payoff timing." },
      { href: "/builds/mercenary", label: "POE2 Mercenary Builds", note: "Parent build hub for crossbow, grenade, and boss-damage routes." },
      { href: "/builds/beginner", label: "POE2 Beginner Builds", note: "Use this if the real decision is whether Mercenary is too much for a first character." },
      { href: "/builds/poe2-mercenary-crossbow-starter-build", label: "POE2 Mercenary Crossbow Starter Build", note: "Main crossbow starter route." },
      { href: "/builds/poe2-mercenary-grenade-leveling-build", label: "POE2 Mercenary Grenade Leveling Build", note: "Area control comparison route." },
      { href: "/builds/poe2-mercenary-high-velocity-boss-build", label: "POE2 Mercenary High Velocity Boss Build", note: "Single-target crossbow route." },
    ],
    relatedSkills: [
      { href: "/skills/fragmentation-rounds", label: "Fragmentation Rounds", note: "Simple crossbow clear skill." },
      { href: "/skills/high-velocity-rounds", label: "High Velocity Rounds", note: "Rare and boss damage option." },
      { href: "/skills/rapid-shot", label: "Rapid Shot", note: "Faster crossbow pacing if the starter rhythm feels slow." },
      { href: "/skills/gas-grenade", label: "Gas Grenade", note: "Space control support." },
      { href: "/skills/time-of-need", label: "Time of Need", note: "Recovery support when spacing fails." },
    ],
    faqs: [
      {
        question: "What is the best mercenary crossbow build poe2?",
        answer: "Start with the POE2 Mercenary Crossbow Starter Build because it keeps the first setup readable: Fragmentation Rounds for clear, High Velocity Rounds for tougher enemies, and one escape or control tool.",
      },
      {
        question: "Is a poe 2 crossbow build good for beginners?",
        answer: "A POE2 crossbow build is beginner-friendly only when it stays simple. If the build asks for several ammo skills, grenade timing, and constant swapping from the start, use Beginner Builds or Ranger instead.",
      },
      {
        question: "How should crossbow leveling poe2 work?",
        answer: "Crossbow leveling should progress by role: first solve pack clear, then single-target damage, then control and recovery. Do not add extra tools before those first two jobs are working.",
      },
      {
        question: "Is Mercenary crossbow good for beginners?",
        answer: "It is good for players who want range and weapon feel, but the reload rhythm can feel less simple than bow or minion routes.",
      },
      {
        question: "What Mercenary crossbow skills should come first?",
        answer: "Use one clear skill such as Fragmentation Rounds and one rare-killer skill such as High Velocity Rounds before adding extra tools.",
      },
    ],
  },
  beginnerBuilds: {
    title: "Entry Hub for POE2 Builds",
    description: "Choose the best POE2 starter route by safety, input load, leveling clarity, and how much the build asks you to manage.",
    canonical: "/builds/beginner",
    keywords: ["poe2 beginner builds", "poe2 beginner build", "path of exile 2 beginner builds", "best poe2 starter build", "poe2 monk crossbow build"],
    parent: { href: "/builds", label: "Builds" },
    sections: [
      {
        title: "Decision Answer",
        body: "This page is the entry hub for POE2 builds. The safest beginner route has one clear damage plan, one defensive habit, and one obvious upgrade path. Start with Monk Crossbow Build if you want a focused starter hub around crossbow range and Monk payoff timing.",
      },
      {
        title: "Best POE2 Starter Build",
        body: "The current priority starter hub is Monk Crossbow Build because it gives new players a clear 1-70 path, crossbow skill roles, Tempest Bell payoff, and simple gear progression. Compare other beginner routes only after that decision is understood.",
      },
      {
        title: "How to Choose",
        body: "Pick by friction, not by theoretical damage. If you are new, avoid builds that require weapon swapping, timing windows, or several damage packages before the campaign loop feels stable.",
      },
      {
        title: "Where Mercenary Fits",
        body: "Mercenary Crossbow is a beginner candidate only for players who already want ranged weapon rhythm. It is not the lowest-input route, but it can work if the first setup stays limited to clear, single target, and escape.",
      },
      {
        title: "Leveling Tips",
        body: "A first build should level by adding one job at a time. If a crossbow route feels busy, compare Beginner Minion Witch, Warrior Slam, or Ranger before forcing extra grenades into the campaign setup.",
      },
      {
        title: "Early Game Progression",
        body: "The first acts should prove the build has pack clear, rare damage, and a defensive habit. If one of those jobs is missing, fix that before adding another damage layer.",
      },
      {
        title: "Common Mistakes",
        body: "The most common beginner mistake is copying a build name without understanding the first three buttons. A starter route should make the next action obvious when packs, rares, or deaths become the problem.",
      },
    ],
    relatedBuilds: [
      { href: "/builds/monk-crossbow-build", label: "Best POE2 Starter Build", note: "Primary starter build hub for Monk Crossbow leveling, Tempest Bell, skills, and beginner decisions." },
      { href: "/builds/poe2-mercenary-crossbow-starter-build", label: "POE2 Mercenary Crossbow Starter Build", note: "Crossbow starter route when ranged weapon feel matters." },
      { href: "/builds/mercenary", label: "POE2 Mercenary Builds", note: "Parent hub for players considering Mercenary as a first character." },
      { href: "/guides/mercenary/crossbow", label: "POE2 Mercenary Crossbow Build Guide", note: "Exact crossbow guide for players who still want Mercenary." },
      { href: "/builds/monk", label: "POE2 Monk Builds", note: "Active melee cluster for players repeatedly comparing Monk pages." },
      { href: "/builds/poe2-beginner-minion-witch-build", label: "POE2 Beginner Minion Witch Build", note: "Lowest pressure route for players who want summons to create space." },
      { href: "/builds/poe2-warrior-slam-starter-build", label: "POE2 Warrior Slam Starter Build", note: "Durable melee answer for players who want heavy hits." },
      { href: "/builds/poe2-ranger-lightning-arrow-starter-build", label: "POE2 Ranger Lightning Arrow Starter Build", note: "Familiar bow route for ranged players who value clear speed." },
    ],
    relatedSkills: [
      { href: "/skills/raise-spectre", label: "Raise Spectre", note: "Minion safety and summon pressure." },
      { href: "/skills/rolling-slam", label: "Rolling Slam", note: "Simple melee anchor for Warrior." },
      { href: "/skills/lightning-arrow", label: "Lightning Arrow", note: "Bow clear skill for Ranger starters." },
      { href: "/skills/fragmentation-rounds", label: "Fragmentation Rounds", note: "Crossbow clear skill for Mercenary starters." },
      { href: "/skills/high-velocity-rounds", label: "High Velocity Rounds", note: "Single-target crossbow skill for rares and bosses." },
      { href: "/skills/time-of-need", label: "Time of Need", note: "Recovery support for builds that already have enough damage." },
      { href: "/skills/flame-wall", label: "Flame Wall", note: "Caster setup skill to compare before choosing a spell starter." },
      { href: "/skills/killing-palm", label: "Killing Palm", note: "Active Monk finisher that is stronger for players who want timing." },
      { href: "/skills/tempest-bell", label: "Tempest Bell", note: "Monk boss payoff skill for active beginners." },
      { href: "/skills/falling-thunder", label: "Falling Thunder", note: "Cleaner lightning Monk identity than hybrid crossbow experiments." },
      { href: "/skills/furious-slam", label: "Furious Slam", note: "Warrior slam comparison if the player really wants heavy melee instead of Monk timing." },
    ],
    nextRecommended: {
      href: "/builds/monk-crossbow-build",
      label: "Best POE2 Starter Build",
      note: "Open this next as the primary starter build hub for Monk Crossbow leveling and skills.",
    },
    faqs: [
      {
        question: "What is the best POE2 beginner build?",
        answer: "For most new players, a minion Witch or simple Warrior starter is easier than a timing-heavy combo build. Choose the route with the fewest decisions during combat.",
      },
      {
        question: "Should beginners choose the highest damage build?",
        answer: "No. Early progress usually improves more from stable clear, simple skills, and fewer panic decisions than from theoretical damage.",
      },
      {
        question: "Is mercenary crossbow build poe2 beginner friendly?",
        answer: "Mercenary Crossbow can be beginner friendly if the build starts simple. Use one clear skill, one boss skill, and one escape before adding grenade layers.",
      },
      {
        question: "Should crossbow leveling poe2 be my first route?",
        answer: "Choose crossbow leveling as a first route only if ranged weapon feel is the reason you want Mercenary. If you mainly want the safest first character, start with Witch, Warrior, or Ranger instead.",
      },
      {
        question: "What should a beginner do in the early game?",
        answer: "Use one clear skill, one tougher-enemy skill, and one defensive habit before adding extra mechanics. If a build cannot explain those jobs clearly, pick a simpler starter.",
      },
      {
        question: "What common mistake ruins beginner builds?",
        answer: "The common mistake is chasing too many skills too early. Beginner builds work better when upgrades reinforce the first clear, boss, and survival plan.",
      },
    ],
  },
  easyBuilds: {
    title: "POE2 Easy Builds",
    description: "Compare easy POE2 builds for players who want low friction, simple skills, and fewer campaign mistakes.",
    canonical: "/builds/easy",
    keywords: ["poe2 easy builds", "poe2 easy build", "poe2 easiest build", "poe 2 crossbow build", "crossbow leveling poe2"],
    parent: { href: "/builds", label: "Builds" },
    sections: [
      {
        title: "Decision Answer",
        body: "Easy builds should reduce the number of things you track while fighting. Look for one main skill, clear defensive priorities, and a class that still works when your gear is imperfect.",
      },
      {
        title: "Best Starter Builds",
        body: "The easiest starter choices are the routes with readable jobs: Minion Witch for low pressure, Warrior Earthquake for direct melee, Ranger Lightning Arrow for ranged clear, and Mercenary Crossbow only if the first package stays small.",
      },
      {
        title: "Recommended Starter Builds",
        body: "Use Mercenary Crossbow when the player wants ranged weapon feel, Monk Leveling when active melee is the appeal, and Beginner Minion Witch when the player wants the lowest-pressure first character.",
      },
      {
        title: "What Makes a Build Easy",
        body: "An easy build is not always the strongest build. It is a build that keeps working while you learn boss patterns, gem choices, and upgrades without asking you to solve every system at once.",
      },
      {
        title: "Crossbow And Monk Links",
        body: "Monk Crossbow Build is the only starter hub for players combining crossbow range with Monk payoff timing. If crossbow is the only intent, use Mercenary Crossbow. If Monk is the only intent, use Monk Builds, Falling Thunder, Tempest Bell, or Killing Palm.",
      },
      {
        title: "Leveling Tips",
        body: "Level easy builds by resisting extra buttons. If a new skill does not solve clear, single-target damage, defense, or movement, delay it until the main loop works.",
      },
      {
        title: "Early Game Progression",
        body: "A low-friction build should feel readable before the first major boss walls. Upgrade the weapon or main spell first, then add recovery or control when deaths become the slowdown.",
      },
      {
        title: "Easy Crossbow Check",
        body: "A crossbow build becomes easy only when the player can name each button's job. If Fragmentation Rounds clears packs, High Velocity Rounds handles rares, and one escape skill solves pressure, the Mercenary route is readable enough to test.",
      },
      {
        title: "Common Mistakes",
        body: "Do not confuse easy with passive. Easy means fewer unclear decisions, not zero movement or zero defensive planning.",
      },
    ],
    relatedBuilds: [
      { href: "/builds/beginner", label: "POE2 Beginner Builds", note: "Use this if the decision is first-character safety rather than low friction." },
      { href: "/builds/poe2-mercenary-crossbow-starter-build", label: "POE2 Mercenary Crossbow Starter Build", note: "Easy enough only if the first skill package stays small." },
      { href: "/builds/mercenary", label: "POE2 Mercenary Builds", note: "Crossbow hub for players comparing easy ranged routes." },
      { href: "/guides/mercenary/crossbow", label: "POE2 Mercenary Crossbow Build Guide", note: "Exact crossbow guide before committing to Mercenary." },
      { href: "/builds/monk", label: "POE2 Monk Builds", note: "Use this when the player wants active melee rather than low-input safety." },
      { href: "/builds/monk-crossbow-build", label: "Best POE2 Starter Build", note: "Primary Monk Crossbow starter hub when the player wants range, Tempest Bell payoff, and a 1-70 path." },
      { href: "/builds/falling-thunder", label: "POE2 Falling Thunder Build", note: "Cleaner Monk lightning route than a crossbow hybrid." },
      { href: "/builds/poe2-beginner-minion-witch-build", label: "POE2 Beginner Minion Witch Build", note: "Easy because minions lower personal pressure." },
      { href: "/builds/poe2-warrior-earthquake-leveling-build", label: "POE2 Warrior Earthquake Leveling Build", note: "Easy melee route with straightforward pack damage." },
      { href: "/builds/poe2-ranger-lightning-arrow-starter-build", label: "POE2 Ranger Lightning Arrow Starter Build", note: "Easy ranged route if you like moving and shooting." },
    ],
    relatedSkills: [
      { href: "/skills/skeletal-warrior", label: "Skeletal Warrior", note: "Simple frontline minion." },
      { href: "/skills/earthquake", label: "Earthquake", note: "Area melee damage with clear identity." },
      { href: "/skills/lightning-arrow", label: "Lightning Arrow", note: "Ranged clear option for bow builds." },
      { href: "/skills/flame-wall", label: "Flame Wall", note: "Useful support layer for simple caster routes." },
      { href: "/skills/time-of-need", label: "Time of Need", note: "Recovery support when damage is fine but deaths are the problem." },
      { href: "/skills/killing-palm", label: "Killing Palm", note: "Active melee comparison that is not the lowest-friction route." },
      { href: "/skills/tempest-bell", label: "Tempest Bell", note: "Monk payoff skill for players who accept timing windows." },
      { href: "/skills/falling-thunder", label: "Falling Thunder", note: "Monk lightning skill with clearer identity than hybrid experiments." },
      { href: "/skills/furious-slam", label: "Furious Slam", note: "Warrior slam comparison if the player wants heavier melee instead." },
    ],
    nextRecommended: {
      href: "/builds/beginner",
      label: "POE2 Beginner Builds",
      note: "Use this next if the easy-build decision is really about first-character safety.",
    },
    faqs: [
      {
        question: "What makes a POE2 build easy?",
        answer: "A build is easy when it has a clear main skill, simple gear priorities, and does not require several timed mechanics to clear the campaign.",
      },
      {
        question: "Are easy builds worse for endgame?",
        answer: "Not necessarily. Easy starter builds are mainly chosen to reach stable progression first; they can later be refined or replaced.",
      },
      {
        question: "Is poe 2 crossbow build an easy build?",
        answer: "A POE2 crossbow build is easy only when it avoids too many early swaps. For most players, Mercenary Crossbow Starter is easier than grenade-heavy setups.",
      },
      {
        question: "What is the easiest early game progression rule?",
        answer: "Keep one main skill updated, add one defensive or movement habit, and avoid changing several damage packages at once.",
      },
      {
        question: "What mistake makes easy builds harder?",
        answer: "Adding optional support skills before the main skill feels stable usually makes an easy build harder than it needs to be.",
      },
    ],
  },
  monkBuilds: {
    title: "POE2 Monk Builds",
    description: "Choose a POE2 Monk build by melee speed, combo pressure, lightning skills, and beginner friction.",
    canonical: "/builds/monk",
    keywords: ["poe2 monk builds", "poe2 monk build", "poe2 monk leveling build"],
    parent: { href: "/builds", label: "Builds" },
    sections: [
      {
        title: "Decision Answer",
        body: "Choose Monk if you want active melee, movement, and payoff windows. Avoid Monk as your first build if you want slow tank pacing, passive damage, or the lowest possible input route.",
      },
      {
        title: "Best Monk Direction",
        body: "For most searchers, start with a lightning Monk or palm leveling route. Falling Thunder gives the build a clearer damage identity, while Killing Palm and Tempest Bell reward players who enjoy timing.",
      },
      {
        title: "Beginner Recommendation",
        body: "Monk is a valid beginner route only for players who want active movement and timing. If the player wants low pressure, send them to Beginner Builds or Easy Builds before they commit to Monk.",
      },
      {
        title: "Skill Progression Roadmap",
        body: "Use Falling Thunder for early lightning identity, add Tempest Bell when single-target payoff matters, then compare Killing Palm or Staggering Palm if the player wants finisher timing.",
      },
    ],
    relatedBuilds: [
      { href: "/builds/monk-crossbow-build", label: "Monk Crossbow Build", note: "Primary starter build hub for crossbow range, Tempest Bell payoff, and Monk leveling decisions." },
      { href: "/builds/poe2-monk-leveling-build", label: "POE2 Monk Leveling Build", note: "General Monk campaign route with lightning and combo skills." },
      { href: "/builds/falling-thunder", label: "POE2 Falling Thunder Build", note: "Exact-match support page for Falling Thunder searchers." },
      { href: "/builds/poe2-monk-tempest-bell-build", label: "POE2 Monk Tempest Bell Build", note: "Boss payoff route for active Monk players." },
      { href: "/builds/poe2-monk-palm-leveling-build", label: "POE2 Monk Palm Leveling Build", note: "Finisher route if the player wants palm timing." },
      { href: "/builds/beginner", label: "POE2 Beginner Builds", note: "Use this if Monk timing looks too active for a first character." },
      { href: "/builds/easy", label: "POE2 Easy Builds", note: "Use this if the decision is low friction instead of active melee." },
    ],
    relatedSkills: [
      { href: "/skills/falling-thunder", label: "Falling Thunder", note: "Lightning Monk identity skill." },
      { href: "/skills/killing-palm", label: "Killing Palm", note: "Finisher route for active Monk players." },
      { href: "/skills/tempest-bell", label: "Tempest Bell", note: "Payoff skill for boss windows." },
      { href: "/skills/staggering-palm", label: "Staggering Palm", note: "Control partner for palm routes." },
      { href: "/skills/wind-blast", label: "Wind Blast", note: "Breathing-room skill for close-range Monk play." },
      { href: "/skills/furious-slam", label: "Furious Slam", note: "Warrior slam comparison if the player wants heavy melee instead of Monk speed." },
    ],
    nextRecommended: {
      href: "/builds/monk-crossbow-build",
      label: "Monk Crossbow Build",
      note: "Open this next if the Monk decision is moving toward a starter build with crossbow range and Tempest Bell payoff.",
    },
    faqs: [
      {
        question: "Is Monk good for beginners?",
        answer: "Monk is good for active players, but it is not the lowest-input beginner route. Choose it if movement and timing sound fun.",
      },
      {
        question: "What Monk build should I start with?",
        answer: "Start with the Monk Leveling Build, then compare Falling Thunder if you want a clearer lightning melee identity.",
      },
    ],
  },
  mercenaryBuilds: {
    title: "POE2 Mercenary Builds",
    description: "Choose a POE2 Mercenary build by crossbow feel, clear skill, boss damage, and beginner friction.",
    canonical: "/builds/mercenary",
    keywords: ["poe2 mercenary builds", "poe2 mercenary build", "mercenary crossbow build poe2", "poe 2 crossbow build", "crossbow leveling poe2"],
    parent: { href: "/builds", label: "Builds" },
    sections: [
      {
        title: "Decision Answer",
        body: "Choose Mercenary if you want ranged combat with a tactical weapon feel. The best first version uses one clear skill, one rare-killer skill, and one escape or control option.",
      },
      {
        title: "Crossbow Build Rule",
        body: "Do not make the first Mercenary setup too clever. Crossbow builds become easier when you separate pack clear from boss damage instead of asking one skill to solve every fight.",
      },
      {
        title: "Leveling Progression",
        body: "For Mercenary leveling, start with a reliable crossbow clear skill, add a single-target round for rares, then add grenades only when packs are reaching you too often. This keeps the campaign loop readable.",
      },
      {
        title: "Beginner-Friendly Explanation",
        body: "The beginner version of Mercenary is not a full ammo puzzle. It is a ranged build with clear roles: shoot packs, burst tougher enemies, reposition before pressure becomes a death.",
      },
    ],
    relatedBuilds: [
      { href: "/builds/poe2-mercenary-crossbow-starter-build", label: "POE2 Mercenary Crossbow Starter Build", note: "Main exact target for Mercenary crossbow searchers." },
      { href: "/guides/mercenary", label: "POE2 Mercenary Guide", note: "Parent guide for class fit, crossbow route, and beginner friction decisions." },
      { href: "/guides/mercenary/crossbow", label: "POE2 Crossbow Build Guide", note: "Child guide for crossbow skill package decisions." },
      { href: "/builds/beginner", label: "POE2 Beginner Builds", note: "Use this to compare Mercenary against safer first-character routes." },
      { href: "/builds/poe2-mercenary-grenade-leveling-build", label: "POE2 Mercenary Grenade Leveling Build", note: "Area-control comparison route." },
      { href: "/builds/poe2-mercenary-high-velocity-boss-build", label: "POE2 Mercenary High Velocity Boss Build", note: "Single-target route if boss damage is the problem." },
      { href: "/builds/poe2-mercenary-rapid-shot-build", label: "POE2 Mercenary Rapid Shot Build", note: "Faster crossbow option if the starter rhythm feels slow." },
    ],
    relatedSkills: [
      { href: "/skills/fragmentation-rounds", label: "Fragmentation Rounds", note: "Simple crossbow clear skill." },
      { href: "/skills/high-velocity-rounds", label: "High Velocity Rounds", note: "Single-target crossbow option." },
      { href: "/skills/gas-grenade", label: "Gas Grenade", note: "Control layer for dangerous packs." },
      { href: "/skills/rapid-shot", label: "Rapid Shot", note: "Faster crossbow pacing." },
      { href: "/skills/time-of-need", label: "Time of Need", note: "Recovery support if spacing mistakes are causing deaths." },
    ],
    faqs: [
      {
        question: "What is the best Mercenary build for beginners?",
        answer: "Start with the Mercenary Crossbow Starter Build if you like ranged weapon gameplay. Choose grenade leveling if you prefer area control.",
      },
      {
        question: "What is the best mercenary crossbow build poe2?",
        answer: "The best first answer is the POE2 Mercenary Crossbow Starter Build because it separates clear, single-target damage, and escape instead of overloading one skill.",
      },
      {
        question: "How does crossbow leveling poe2 work for Mercenary?",
        answer: "Crossbow leveling works best when you keep weapon upgrades current, use Fragmentation Rounds for packs, add High Velocity Rounds for tougher enemies, and delay extra grenade layers until needed.",
      },
      {
        question: "Is Mercenary harder than Ranger?",
        answer: "Mercenary can feel harder because crossbow rhythm and skill roles matter more. Ranger is usually simpler if you only want bow clear.",
      },
    ],
  },
  crossbowMonkBuild: {
    title: "POE2 Monk Crossbow Starter Build",
    description: "Use the Monk Crossbow Build starter hub to test crossbow range, Tempest Bell payoff, and a simple POE2 beginner leveling path.",
    canonical: "/builds/monk-crossbow-build",
    keywords: ["poe2 crossbow monk", "poe2 crossbow monk build", "crossbow monk poe2", "poe 2 crossbow monk", "poe2 monk crossbow build"],
    parent: { href: "/builds/monk", label: "Monk Builds" },
    sections: [
      {
        title: "Decision Answer",
        body: "Monk Crossbow Build is the main starter hub when you specifically want crossbow range on a Monk shell. Keep the route focused so it does not split into two unfinished builds.",
      },
      {
        title: "Safer Alternative",
        body: "If the real intent is crossbow gameplay, use Mercenary Crossbow. If the real intent is Monk damage, use Falling Thunder, Tempest Bell, or Monk Leveling instead of forcing a weapon package that adds friction.",
      },
      {
        title: "Beginner Progression",
        body: "Do not start Monk Crossbow as a first route unless you keep the early skill package narrow. First test crossbow range and Monk movement separately, then continue only if both parts solve real problems.",
      },
      {
        title: "Beginner Stage 1",
        body: "Start by deciding which part of the idea matters most. If range and reload rhythm are the appeal, open Mercenary Crossbow. If mobility, melee timing, and payoff windows are the appeal, open Monk Builds or Falling Thunder.",
      },
      {
        title: "Beginner Stage 2",
        body: "If you still want the hybrid, keep the first test small: one crossbow clear skill, one movement or spacing habit, and one Monk comparison skill. Do not add a full Monk combo package and a full crossbow package at the same time.",
      },
      {
        title: "Leveling Roadmap",
        body: "Leveling should start from the cleaner parent route first: Mercenary if crossbow range matters, Monk if movement and melee timing matter. Only test the hybrid after the main route feels stable enough that the extra weapon idea does not hide basic problems.",
      },
      {
        title: "Level 1-20 Check",
        body: "Before level 20, prove the route can clear normal packs without too many swaps. If Fragmentation Rounds or another crossbow clear skill is carrying the build, the page should push you toward Mercenary instead of deeper Monk investment.",
      },
      {
        title: "Level 20-40 Check",
        body: "Between level 20 and 40, compare single-target and survival friction. If High Velocity Rounds solves bosses but Monk skills feel unused, Mercenary is cleaner. If Falling Thunder or Tempest Bell feels central, standard Monk is cleaner.",
      },
      {
        title: "Early Mapping Check",
        body: "In early mapping, the hybrid only makes sense if crossbow range solves a real problem without weakening the Monk identity. If the build becomes a list of unrelated buttons, switch to Mercenary Crossbow or Monk Leveling.",
      },
      {
        title: "Skill Progression Roadmap",
        body: "Use Fragmentation Rounds and High Velocity Rounds as crossbow reference skills, then compare Escape Shot or Rapid Shot for weapon feel. For Monk identity, compare Falling Thunder, Tempest Bell, Killing Palm, Wind Blast, and Staggering Palm.",
      },
      {
        title: "Common Mistakes",
        body: "The common mistake is trying to make Monk Crossbow do both jobs at once: full crossbow leveling and full Monk combo play. Keep one crossbow package and one Monk payoff.",
      },
    ],
    relatedBuilds: [
      { href: "/builds/monk", label: "POE2 Monk Builds", note: "Parent Monk build cluster." },
      { href: "/builds/mercenary", label: "POE2 Mercenary Builds", note: "Cleaner home for crossbow-first players." },
      { href: "/guides/mercenary/crossbow", label: "POE2 Mercenary Crossbow Build Guide", note: "Best next page if the search intent is really crossbow leveling." },
      { href: "/builds/poe2-mercenary-crossbow-starter-build", label: "POE2 Mercenary Crossbow Starter Build", note: "Use this instead of forcing crossbow into Monk if weapon feel is the goal." },
      { href: "/builds/poe2-mercenary-rapid-shot-build", label: "POE2 Mercenary Rapid Shot Build", note: "Use this if faster crossbow pacing is the real goal." },
      { href: "/builds/poe2-monk-leveling-build", label: "POE2 Monk Leveling Build", note: "Safer Monk route for campaign progression." },
      { href: "/builds/poe2-monk-tempest-bell-build", label: "POE2 Monk Tempest Bell Build", note: "Use this if Monk boss payoff is the real goal." },
      { href: "/builds/poe2-monk-palm-leveling-build", label: "POE2 Monk Palm Leveling Build", note: "Use this if finisher timing is the real goal." },
      { href: "/builds/falling-thunder", label: "POE2 Falling Thunder Build", note: "Cleaner Monk lightning route." },
      { href: "/builds/beginner", label: "POE2 Beginner Builds", note: "Use this if the player wants first-character safety." },
      { href: "/builds/easy", label: "POE2 Easy Builds", note: "Use this if the player wants less friction." },
    ],
    relatedSkills: [
      { href: "/skills/fragmentation-rounds", label: "Fragmentation Rounds", note: "Crossbow clear reference skill." },
      { href: "/skills/falling-thunder", label: "Falling Thunder", note: "Cleaner Monk lightning route." },
      { href: "/skills/killing-palm", label: "Killing Palm", note: "Monk finisher option." },
      { href: "/skills/high-velocity-rounds", label: "High Velocity Rounds", note: "Crossbow single-target reference skill." },
      { href: "/skills/escape-shot", label: "Escape Shot", note: "Spacing reference if the hybrid needs a safer ranged reset." },
      { href: "/skills/rapid-shot", label: "Rapid Shot", note: "Faster crossbow pacing comparison." },
      { href: "/skills/galvanic-shards", label: "Galvanic Shards", note: "Lightning crossbow comparison if the player wants ranged lightning instead of Monk lightning." },
      { href: "/skills/tempest-bell", label: "Tempest Bell", note: "Monk boss payoff skill." },
      { href: "/skills/wind-blast", label: "Wind Blast", note: "Monk spacing and breathing-room comparison." },
      { href: "/skills/staggering-palm", label: "Staggering Palm", note: "Monk control comparison for palm routes." },
      { href: "/skills/furious-slam", label: "Furious Slam", note: "Heavy melee comparison that belongs to Warrior, not Monk." },
    ],
    nextRecommended: {
      href: "/builds/poe2-mercenary-crossbow-starter-build",
      label: "POE2 Mercenary Crossbow Starter Build",
      note: "Open this next if the real search intent is crossbow leveling rather than Monk identity.",
    },
    faqs: [
      {
        question: "Is Monk Crossbow Build a good beginner build?",
        answer: "Yes, if it stays narrow: crossbow range for safety, one single-target answer, and Tempest Bell as the payoff. It becomes hard when too many buttons are added.",
      },
      {
        question: "What should I play instead of Monk Crossbow?",
        answer: "Choose Mercenary if you want crossbows, or choose a Falling Thunder Monk if you want active Monk melee.",
      },
      {
        question: "How should Monk Crossbow leveling start?",
        answer: "Start by testing the parent route first. If crossbow range is carrying the build, use Mercenary Crossbow. If Monk movement and payoff skills are carrying the build, use Monk Leveling or Falling Thunder.",
      },
      {
        question: "What skills should Monk Crossbow compare first?",
        answer: "Compare Fragmentation Rounds and High Velocity Rounds for crossbow roles, then compare Falling Thunder, Tempest Bell, Killing Palm, Wind Blast, and Staggering Palm for Monk identity.",
      },
      {
        question: "Is Monk Crossbow better than Mercenary Crossbow?",
        answer: "Not for most players. Mercenary Crossbow is cleaner when the main goal is crossbow gameplay because its skill package is built around ranged weapon roles.",
      },
      {
        question: "Is Monk Crossbow better than standard Monk?",
        answer: "Not if the main goal is Monk gameplay. Standard Monk routes such as Falling Thunder, Tempest Bell, or Monk Leveling usually keep the build more focused.",
      },
      {
        question: "When is Monk Crossbow worth testing?",
        answer: "Test it only when you specifically want crossbow range but still want to compare Monk movement, lightning, or payoff skills. If either side feels unused, follow the cleaner parent route.",
      },
      {
        question: "What is the most common Monk Crossbow mistake?",
        answer: "The common mistake is adding too many crossbow and Monk buttons early. Keep the test small or the build becomes harder than both Mercenary and Monk.",
      },
    ],
  },
  fallingThunderBuild: {
    title: "POE2 Falling Thunder Build",
    description: "Choose when Falling Thunder should anchor a Monk build and which related Monk skills support it.",
    canonical: "/builds/falling-thunder",
    keywords: ["poe2 falling thunder", "poe2 falling thunder build", "falling thunder poe2"],
    parent: { href: "/builds/monk", label: "Monk Builds" },
    sections: [
      {
        title: "Decision Answer",
        body: "Use Falling Thunder when you want Monk to feel like lightning melee instead of generic fast attacks. It is best for players who enjoy movement and can commit upgrades to one elemental melee identity.",
      },
      {
        title: "Build Role",
        body: "Falling Thunder works best as the main identity of a Monk leveling route, with Tempest Bell or palm skills adding payoff rather than distracting from the core damage plan.",
      },
      {
        title: "Beginner Recommendation",
        body: "Falling Thunder is a cleaner pure Monk answer than Monk Crossbow because it keeps the build inside one melee-lightning identity. Compare Monk Crossbow Build only when range is part of the decision.",
      },
      {
        title: "Leveling Roadmap",
        body: "Use Falling Thunder as the early identity, keep mobility and defenses current, then add Tempest Bell for single-target payoff when bosses start taking too long.",
      },
      {
        title: "Skill Progression Roadmap",
        body: "Start with Falling Thunder, compare Tempest Bell for payoff, add Killing Palm only if the player wants finisher timing, and use Staggering Palm when control is the problem.",
      },
    ],
    relatedBuilds: [
      { href: "/builds/poe2-monk-leveling-build", label: "POE2 Monk Leveling Build", note: "Main Monk route that already includes Falling Thunder." },
      { href: "/builds/monk", label: "POE2 Monk Builds", note: "Parent build cluster for Monk decisions." },
      { href: "/skills/killing-palm/builds", label: "POE2 Killing Palm Builds", note: "Nearby Monk finisher cluster." },
      { href: "/builds/poe2-monk-tempest-bell-build", label: "POE2 Monk Tempest Bell Build", note: "Boss payoff route after Falling Thunder." },
      { href: "/builds/monk-crossbow-build", label: "Monk Crossbow Build", note: "Primary starter hub if the player wants Monk payoff timing plus crossbow range." },
      { href: "/builds/easy", label: "POE2 Easy Builds", note: "Use this if Monk timing feels too active." },
    ],
    relatedSkills: [
      { href: "/skills/falling-thunder", label: "Falling Thunder", note: "Parent skill page for this query." },
      { href: "/skills/tempest-bell", label: "Tempest Bell", note: "Boss payoff partner." },
      { href: "/skills/killing-palm", label: "Killing Palm", note: "Finisher support option." },
      { href: "/skills/staggering-palm", label: "Staggering Palm", note: "Control option for palm routes." },
      { href: "/skills/wind-blast", label: "Wind Blast", note: "Melee spacing support for Monk." },
      { href: "/skills/furious-slam", label: "Furious Slam", note: "Heavy melee comparison if the player wants Warrior-style slam instead." },
    ],
    nextRecommended: {
      href: "/skills/tempest-bell",
      label: "Tempest Bell",
      note: "Open this next when Falling Thunder has clear identity but single-target payoff is the next decision.",
    },
    faqs: [
      {
        question: "Is Falling Thunder good for Monk leveling?",
        answer: "Yes, if you want an active lightning melee route and are willing to keep the build focused around that identity.",
      },
      {
        question: "What skills go with Falling Thunder?",
        answer: "Tempest Bell, Killing Palm, and other Monk control or payoff skills are the first skills to compare.",
      },
    ],
  },
} satisfies Record<string, TopicClusterPage>;
