export const siteConfig = {
  name: "POE2 Starter Tools",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://poe2startertools.com",
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID ?? "G-VB4Z8X6P5Q",
  description:
    "POE2 Starter Tools helps Path of Exile 2 players compare builds, skills, beginner guides, and leveling routes.",
};

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`;
}

export const defaultKeywords = [
  "poe2 beginner build",
  "poe2 build guide",
  "poe2 best starter class",
  "poe2 skill gems",
  "path of exile 2 beginner guide",
];
