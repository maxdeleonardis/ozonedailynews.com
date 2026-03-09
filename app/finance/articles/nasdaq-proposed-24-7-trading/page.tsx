import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "The End of the Bell: Nasdaq’s 2026 Proposal for 24/7 Trading | ObjectWire",
  description: "Analysis of Nasdaq's filing with the SEC to extend trading hours for U.S.-listed securities. Examining the impact on global liquidity, algorithmic latency, and the infrastructure of the 'Always-On' market.",
  keywords: [
    "Nasdaq 24/7 trading proposal 2026",
    "SEC extended hours filing",
    "24 hour stock market transition",
    "global liquidity fragmentation",
    "overnight trading infrastructure",
    "always-on financial markets",
    "algorithmic trading 24/7",
    "Blue Ocean ATS vs Nasdaq"
  ],
  openGraph: {
    title: "The End of the Bell: Nasdaq’s 2026 Proposal for 24/7 Trading",
    description: "Financial Intelligence: Deconstructing the pivot toward a continuous global equity market and its structural implications.",
    type: "article",
    url: "https://www.objectwire.org/finance/articles/nasdaq-proposed-24-7-trading",
    publishedTime: "2026-01-29T09:00:00Z",
    section: "Market Infrastructure",
  },
  authors: [{ name: "ObjectWire Financial Desk" }],
  alternates: {
    canonical: 'https://www.objectwire.org/finance/articles/nasdaq-proposed-24-7-trading',
  },
};

export default function NasdaqExtendedHoursPage() {
  return <WikiArticle slug="finance-articles-nasdaq-proposed-24-7-trading" />;
}
