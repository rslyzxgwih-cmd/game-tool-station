import type { Metadata } from "next";
import { TopicClusterSupportPage } from "@/components/TopicClusterSupportPage";
import { topicClusterPages } from "@/lib/topicClusterPages";

const page = topicClusterPages.mercenaryBuilds;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: page.canonical,
  },
  keywords: page.keywords,
};

export default function MercenaryBuildsPage() {
  return <TopicClusterSupportPage page={page} />;
}
