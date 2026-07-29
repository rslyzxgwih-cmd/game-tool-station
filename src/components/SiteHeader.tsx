import Link from "next/link";

const navItems = [
  { href: "/builds", label: "Builds" },
  { href: "/skills", label: "Skills" },
  { href: "/builds/beginner", label: "Beginner Builds" },
  { href: "/class-picker", label: "Class Picker" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050506]/95 text-white shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <Link href="/" className="flex w-full min-w-0 items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 sm:w-auto" aria-label="POE2 Starter Tools home">
          <span className="grid size-9 shrink-0 place-items-center border border-amber-200/50 bg-amber-200 text-xs font-black text-zinc-950 shadow-[0_0_24px_rgba(245,158,11,0.22)]">P2</span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black uppercase leading-none tracking-[0.18em] text-amber-100">
              POE2 Starter Tools
            </span>
            <span className="hidden text-xs font-semibold text-white/52 sm:block">Build decisions / Skills / Beginner routes</span>
          </span>
        </Link>
        <nav className="grid w-full grid-cols-2 gap-1 text-xs font-black uppercase tracking-[0.12em] text-white/64 sm:flex sm:w-auto sm:min-w-0 sm:flex-wrap sm:items-center sm:justify-end sm:text-sm sm:tracking-normal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center justify-center border border-transparent px-2 py-2 text-center transition hover:border-white/14 hover:bg-white/8 hover:text-amber-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 sm:min-h-0 sm:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
