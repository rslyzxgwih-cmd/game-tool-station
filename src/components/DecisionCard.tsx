import Link from "next/link";

type DecisionCardProps = {
  href: string;
  title: string;
  problem: string;
  answer: string;
  meta?: string;
};

export function DecisionCard({ href, title, problem, answer, meta }: DecisionCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between border border-line bg-panel p-4 transition hover:border-moss hover:bg-white focus:outline-none focus:ring-2 focus:ring-moss"
    >
      <span>
        {meta ? (
          <span className="mb-4 inline-flex rounded-md bg-paper px-2.5 py-1 text-xs font-black uppercase text-moss">
            {meta}
          </span>
        ) : null}
        <span className="block text-base font-black leading-tight text-ink">{title}</span>
        <span className="mt-2 block text-xs font-bold uppercase text-ember">{problem}</span>
      </span>
      <span className="mt-4 block text-sm leading-6 text-ink/68">{answer}</span>
      <span className="mt-4 text-xs font-black uppercase text-moss transition group-hover:translate-x-1">
        Open decision guide
      </span>
    </Link>
  );
}
