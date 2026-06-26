import Link from "next/link";
import { TranslateButton } from "./TranslateButton";

const navItems = [
  { href: "/builds", label: "Builds" },
  { href: "/skills", label: "Skills" },
  { href: "/builds/beginner", label: "Beginner" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-panel">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="POE2 Starter Tools home">
          <span className="grid size-8 place-items-center border border-ink bg-ink text-xs font-black text-white">P2</span>
          <span>
            <span className="block text-sm font-black uppercase leading-none text-ink">
              POE2 Starter Tools
            </span>
            <span className="block text-xs font-medium text-ink/58">Best builds / Beginner leveling / Core Skills</span>
          </span>
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-1 text-sm font-bold text-ink/72">
          <nav className="flex flex-wrap items-center justify-end gap-1 text-sm font-bold text-ink/72">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-transparent px-3 py-2 transition hover:border-line hover:bg-paper hover:text-ink focus:outline-none focus:ring-2 focus:ring-moss"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <TranslateButton />
        </div>
      </div>
    </header>
  );
}
