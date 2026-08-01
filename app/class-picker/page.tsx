import type { Metadata } from "next";
import Link from "next/link";
import { ClassPicker } from "@/components/ClassPicker";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "POE2 Best Starter Class Picker",
  description:
    "Answer a few practical questions and choose a Path of Exile 2 starter class for your playstyle.",
  alternates: {
    canonical: "/class-picker",
  },
  keywords: ["poe2 best starter class", "poe2 class picker", "path of exile 2 beginner class"],
};

export default function ClassPickerPage() {
  return (
    <main className="bg-[#030304] text-zinc-100">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "POE2 Starter Class Picker",
          url: absoluteUrl("/class-picker"),
          applicationCategory: "GameApplication",
          operatingSystem: "Any",
        }}
      />
      <article className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
        <header className="mb-5 border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(10,14,20,0.98),rgba(12,21,34,0.92)_55%,rgba(31,22,8,0.82))] p-5 shadow-[0_0_50px_rgba(14,165,233,0.08)] sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Class Decision Tool</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
            What POE2 class should you play first?
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
            Choose one input: Melee, Ranged, Summoner, or Spell. The output is a practical class
            recommendation, not a tier list.
          </p>
        </header>
        <ClassPicker />

        <section className="mt-5 border border-cyan-300/20 bg-zinc-950/80 p-5">
          <h2 className="text-base font-black text-white">Improve gameplay stability</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            If every class feels delayed, fix routing before changing your starter choice. ExitLag is the first check for unstable POE2 latency.
          </p>
          <Link
            href="/tools/exitlag"
            className="mt-3 inline-flex border border-amber-300/50 bg-amber-300 px-3 py-2 text-xs font-black uppercase text-zinc-950 hover:bg-amber-200"
          >
            Reduce combat delay
          </Link>
        </section>
      </article>
    </main>
  );
}
