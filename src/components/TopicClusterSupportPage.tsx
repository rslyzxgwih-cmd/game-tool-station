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
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-black leading-tight text-ink md:text-4xl">{page.title}</h1>

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
              {section.body}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Related Builds</h2>
        <div className="mt-3 grid gap-2 text-sm font-bold">
          {relatedBuilds.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-lg font-black text-ink">Related Skills</h2>
        <div className="mt-3 grid gap-2 text-sm font-bold">
          {relatedSkills.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-line bg-paper px-3 py-2 text-ink/72 hover:text-moss"
            >
              {item.label}
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
          </Link>
        </section>
      ) : null}
    </main>
  );
}
