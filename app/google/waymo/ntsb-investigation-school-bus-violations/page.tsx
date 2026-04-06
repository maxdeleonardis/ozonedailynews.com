import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "NTSB Opens Investigation into Waymo Over School Bus Violations",
  description: "National Transportation Safety Board launches federal investigation after Waymo robotaxis illegally passed stopped school buses more than 20 times in",
  keywords: ["NTSB", "Waymo", "school bus", "investigation", "autonomous vehicles", "safety", "Austin", "Atlanta", "robotaxi", "NHTSA"],
  authors: [{ name: "Jack S", url: "https://www.objectwire.org/author/jack-s" }],
  openGraph: {
    title: "NTSB Opens Investigation into Waymo Over School Bus Violations",
    description: "First federal NTSB probe into Waymo after 20+ incidents of robotaxis illegally passing stopped school buses.",
    type: "article",
    publishedTime: "2026-01-23T17:00:00Z",
    authors: ["Jack S"],
    section: "Technology",
    tags: ["NTSB", "Waymo", "Autonomous Vehicles", "Safety", "Investigation"],
  },
  other: {
    'news_keywords': 'NTSB, Waymo, school bus safety, autonomous vehicles, robotaxi, federal investigation, Austin Texas, Atlanta Georgia, NHTSA, self-driving cars',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/google/waymo/ntsb-investigation-school-bus-violations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NTSB Opens Investigation into Waymo Over School Bus Violations',
    description: 'First federal NTSB probe into Waymo after 20+ incidents of robotaxis illegally passing stopped school buses.',
  },
};

export default function WaymoNTSBInvestigationPage() {
  return <WikiArticle slug="google-waymo-ntsb-investigation-school-bus-violations" />;
}
