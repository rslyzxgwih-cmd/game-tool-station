import Link from "next/link";
import type { TopicClusterPage } from "@/lib/topicClusterPages";

type TopicClusterSupportPageProps = {
  page: TopicClusterPage;
};

export function TopicClusterSupportPage({ page }: TopicClusterSupportPageProps) {
  const keyPoints = page.sections.slice(0, 3);
  const relatedBuilds = page.relatedBuilds.slice(0, 3);
  const relatedSkills = page.relatedSkills.slice(0, 3);

  return (
    <main className="bg-[#030304] text-zinc-100">
      <article className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
        <header className="border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(10,14,20,0.98),rgba(12,21,34,0.92)_55%,rgba(31,22,8,0.82))] p-5 shadow-[0_0_50px_rgba(14,165,233,0.08)] sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Decision Guide</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">{page.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">{page.description}</p>
        </header>

        <section className="mt-6 border border-amber-300/20 bg-amber-300/10 p-5">
          <h2 className="text-2xl font-black text-white">Quick Answer</h2>
          <p className="mt-3 text-sm leading-7 text-amber-50">
            Start here when this is the decision blocking your next POE2 character choice. Compare the key points below,
            then move to the build or skill page that best matches your current problem.
          </p>
        </section>

        <section className="mt-6 border border-cyan-400/15 bg-zinc-950/80 p-5">
          <h2 className="text-2xl font-black text-white">Key Points</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-300">
            {keyPoints.map((section) => (
              <li key={section.title} className="border border-cyan-300/15 bg-black/25 px-3 py-2">
                {section.body}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-amber-300/15 bg-zinc-950/80 p-5">
            <h2 className="text-2xl font-black text-white">Related Builds</h2>
            <div className="mt-4 grid gap-2 text-sm font-bold">
              {relatedBuilds.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-amber-300/15 bg-black/25 px-3 py-2 text-zinc-200 transition hover:border-amber-300/40 hover:text-amber-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border border-cyan-400/15 bg-zinc-950/80 p-5">
            <h2 className="text-2xl font-black text-white">Related Skills</h2>
            <div className="mt-4 grid gap-2 text-sm font-bold">
              {relatedSkills.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-cyan-300/15 bg-black/25 px-3 py-2 text-zinc-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {page.nextRecommended ? (
          <section className="mt-6 border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(8,13,20,0.96),rgba(10,22,30,0.9))] p-5">
            <h2 className="text-2xl font-black text-white">Next Page</h2>
            <Link
              href={page.nextRecommended.href}
              className="mt-4 inline-flex min-h-11 items-center justify-center border border-amber-300/50 bg-amber-300 px-4 py-2 text-sm font-black text-zinc-950 transition hover:bg-amber-200"
            >
              {page.nextRecommended.label}
            </Link>
          </section>
        ) : null}
      </article>
    </main>
  );
}
