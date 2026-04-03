import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "The Trillion-Dollar Treasure: Polymetallic Nodules and the Deep-Sea Frontier | ObjectWire",
  description: "Analysis of the Clarion-Clipperton Zone (CCZ) and the macroeconomic impact of deep-sea mining on critical metal supply chains including nickel, cobalt, and manganese.",
  keywords: [
    "deep sea mining economics 2026",
    "polymetallic nodules CCZ",
    "critical metals supply chain",
    "nickel cobalt deep sea mining",
    "The Metals Company TMC stock analysis",
    "ocean floor mining regulation ISA",
    "battery metal scarcity 2030",
    "terrestrial vs deep sea mining"
  ],
  openGraph: {
    title: "The Trillion-Dollar Treasure: Polymetallic Nodules and the Deep-Sea Frontier",
    description: "Financial Intelligence: Assessing the industrial potential and regulatory hurdles of the $1 trillion deep-sea metal reserve.",
    type: "article",
    url: "https://www.objectwire.org/finance/articles/the-trillion-dollar-treasure-trove-in-the-deep-sea",
    publishedTime: "2025-06-17T08:00:00Z",
    section: "Resource Intelligence",
  },
  authors: [{ name: "ObjectWire Financial Desk" }],
  alternates: {
    canonical: 'https://www.objectwire.org/finance/articles/the-trillion-dollar-treasure-trove-in-the-deep-sea',
  },
};

export default function PolymetallicNodulesPage() {
  return <WikiArticle slug="finance-articles-the-trillion-dollar-treasure-trove-in-the-deep-sea" />;
}
