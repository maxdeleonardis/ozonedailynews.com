import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Macro-Economic Architectural Analysis: Starlink’s High-Velocity Wealth Engine | ObjectWire",
  description: "As of 2026, Starlink has transitioned into a cash-flow-positive juggernaut, leveraging SpaceX to rewrite the financial rules of the telecommunications industry.",
  keywords: [
    "Starlink economics 2026",
    "SpaceX Starlink IPO valuation",
    "SaaS satellite model",
    "Starship economic impact",
    "Direct-to-Cell technology Starlink",
    "Starshield government contracts",
    "global connectivity tax",
    "Elon Musk Mars funding"
  ],
  openGraph: {
    title: "Macro-Economic Architectural Analysis: Starlink’s High-Velocity Wealth Engine",
    description: "Financial Intelligence: Starlink's transition from capital-heavy experimental phase to a cash-flow-positive juggernaut.",
    type: "article",
    url: "https://www.objectwire.org/finance/articles/starlink-economic-analysis",
    publishedTime: "2026-02-02T12:00:00Z",
    section: "Finance",
  },
  alternates: {
    canonical: "https://www.objectwire.org/finance/articles/starlink-economic-analysis",
  },
  authors: [{ name: "ObjectWire Financial Desk" }],
};

export default function StarlinkEconomicPage() {
  return <WikiArticle slug="finance-articles-starlink-economic-analysis" />;
}
