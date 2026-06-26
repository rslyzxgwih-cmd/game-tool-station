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
    <main className="mx-auto max-w-7xl px-4 py-5">
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
      <div className="mb-4 border-b border-line pb-4">
        <h1 className="text-2xl font-black leading-tight text-ink md:text-3xl">
          What POE2 class should you play first?
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-ink/68">
          Choose one input: Melee, Ranged, Summoner, or Spell. The output is a practical class
          recommendation, not a tier list.
        </p>
      </div>
      <ClassPicker />

      <section className="mt-4 border border-line bg-panel p-4">
        <h2 className="text-base font-black text-ink">Improve gameplay stability</h2>
        <p className="mt-2 text-sm leading-6 text-ink/70">
          If every class feels delayed, fix routing before changing your starter choice. ExitLag is the first check for unstable POE2 latency.
        </p>
        <Link
          href="/tools/exitlag"
          className="mt-3 inline-flex border border-ink bg-ink px-3 py-2 text-xs font-black uppercase text-white hover:bg-moss"
        >
          Reduce combat delay
        </Link>
      </section>
    </main>
  );
}
