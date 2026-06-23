import type { Metadata } from "next";
import { TopicClusterSupportPage } from "@/components/TopicClusterSupportPage";
import { topicClusterPages } from "@/lib/topicClusterPages";

const page = topicClusterPages.fallingThunderBuild;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: page.canonical,
  },
  keywords: page.keywords,
};

export default function FallingThunderBuildPage() {
  return <TopicClusterSupportPage page={page} />;
}
