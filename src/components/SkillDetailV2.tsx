import Link from "next/link";

type SkillDetailV2Skill = {
  name: string;
  description: string;
  tags: string[];
};

type RelatedBuild = {
  slug: string;
  title: string;
  playstyle: string;
};

type RelatedSkill = {
  slug: string;
  name: string;
  description: string;
};

export type SkillDetailV2Content = {
  eyebrow: string;
  directAnswer: string;
  whatItDoes: string[];
  usefulWhen: string[];
  mayNotFitWhen: string[];
  practicalPrinciples: Array<{ title: string; copy: string }>;
  commonMistakes: string[];
  relatedSkillSlugs: string[];
  relatedBuildReason: (playstyle: string) => string;
};

type SkillDetailV2Props = {
  skill: SkillDetailV2Skill;
  content: SkillDetailV2Content;
  relatedBuilds: RelatedBuild[];
  relatedSkills: RelatedSkill[];
};

export function SkillDetailV2({ skill, content, relatedBuilds, relatedSkills }: SkillDetailV2Props) {
  return (
    <main className="bg-[#030304] text-zinc-100">
      <article className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
        <Link
          href="/skills"
          className="inline-flex text-sm font-bold text-amber-200 transition hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        >
          Back to POE2 Skills
        </Link>

        <header className="mt-5 border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(10,14,20,0.98),rgba(11,19,32,0.92)_55%,rgba(31,22,8,0.82))] p-5 shadow-[0_0_50px_rgba(14,165,233,0.08)] sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">{content.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">{skill.name}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">{skill.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {skill.tags.map((tag) => (
              <span
                key={tag}
                className="border border-cyan-300/25 bg-cyan-200/10 px-3 py-1 text-xs font-black uppercase text-cyan-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <section className="mt-6 border border-amber-300/25 bg-amber-300/10 p-5" aria-labelledby="direct-answer">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-200">Direct Answer</p>
          <h2 id="direct-answer" className="mt-2 text-2xl font-black text-white">
            Should You Use {skill.name}?
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-amber-50">{content.directAnswer}</p>
        </section>

        <section className="mt-6 border border-blue-400/15 bg-zinc-950/80 p-5">
          <h2 className="text-2xl font-black text-white">What the Skill Does</h2>
          <div className="mt-3 grid gap-3 text-sm leading-7 text-zinc-300">
            {content.whatItDoes.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-emerald-300/20 bg-emerald-950/20 p-5">
            <h2 className="text-xl font-black text-white">When This Skill Is Useful</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-300">
              {content.usefulWhen.map((item) => (
                <li key={item} className="border border-emerald-300/15 bg-black/25 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-red-300/20 bg-red-950/15 p-5">
            <h2 className="text-xl font-black text-white">When It May Not Fit</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-300">
              {content.mayNotFitWhen.map((item) => (
                <li key={item} className="border border-red-300/15 bg-black/25 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6 border border-cyan-400/15 bg-zinc-950/80 p-5">
          <h2 className="text-2xl font-black text-white">Practical Usage Principles</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {content.practicalPrinciples.map((principle) => (
              <article key={principle.title} className="border border-cyan-300/15 bg-black/25 p-4">
                <h3 className="text-lg font-black text-white">{principle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 border border-zinc-700 bg-zinc-950/80 p-5">
          <h2 className="text-2xl font-black text-white">Common Mistakes and Misunderstandings</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-300">
            {content.commonMistakes.map((item) => (
              <li key={item} className="border border-zinc-700 bg-black/25 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 border border-amber-300/15 bg-zinc-950/80 p-5">
          <h2 className="text-2xl font-black text-white">Related Builds</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {relatedBuilds.map((build) => (
              <article key={build.slug} className="flex flex-col border border-amber-300/15 bg-black/25 p-4">
                <h3 className="text-lg font-black text-white">{build.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-300">
                  {content.relatedBuildReason(build.playstyle)}
                </p>
                <Link
                  href={`/builds/${build.slug}`}
                  className="mt-4 text-sm font-black text-amber-200 transition hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
                >
                  View Build
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 border border-cyan-400/15 bg-zinc-950/80 p-5">
          <h2 className="text-2xl font-black text-white">Related Skills</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {relatedSkills.map((relatedSkill) => (
              <article key={relatedSkill.slug} className="flex flex-col border border-cyan-300/15 bg-black/25 p-4">
                <h3 className="text-lg font-black text-white">{relatedSkill.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-300">{relatedSkill.description}</p>
                <Link
                  href={`/skills/${relatedSkill.slug}`}
                  className="mt-4 text-sm font-black text-cyan-200 transition hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                >
                  View Skill
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(8,13,20,0.96),rgba(10,22,30,0.9))] p-5 sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Next Decision</p>
          <h2 className="mt-2 text-2xl font-black text-white">Choose the Skill in a Real Build Context</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">
            Return to the Skills database for another comparison, or use the Build Finder when the character route is
            still the bigger decision.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/skills"
              className="inline-flex min-h-11 items-center justify-center border border-amber-300/50 bg-amber-300 px-4 py-2 text-sm font-black text-zinc-950 transition hover:bg-amber-200"
            >
              Return to Skills
            </Link>
            <Link
              href="/builds"
              className="inline-flex min-h-11 items-center justify-center border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/15"
            >
              Use the Build Finder
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
