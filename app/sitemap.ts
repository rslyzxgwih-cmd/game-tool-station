import type { MetadataRoute } from "next";
import { builds, skills } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/builds",
    "/builds/beginner",
    "/builds/easy",
    "/builds/monk",
    "/builds/monk-crossbow-build",
    "/builds/mercenary",
    "/builds/falling-thunder",
    "/builds/warrior",
    "/builds/warrior/leveling",
    "/builds/witch",
    "/builds/witch/minion",
    "/builds/ranger",
    "/guides/mercenary",
    "/guides/mercenary/crossbow",
    "/skills",
    "/skills/killing-palm/builds",
    "/skills/flame-wall/builds",
    "/skills/time-of-need/builds",
    "/class-picker",
    "/tools/exitlag",
  ].map((route) => ({
    url: absoluteUrl(route || "/"),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const buildRoutes = builds.map((build) => ({
    url: absoluteUrl(`/builds/${build.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const skillRoutes = skills.map((skill) => ({
    url: absoluteUrl(`/skills/${skill.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...buildRoutes, ...skillRoutes];
}
