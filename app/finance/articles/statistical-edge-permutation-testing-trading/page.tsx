import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Building 51% Edges: The Quantitative Guide to Prop Firms & Algorithmic Trading | ObjectWire",
  description: "Stop trading on vibes. Learn how quants use Permutation Testing, Monte Carlo simulations, and Expected Value to turn 51% probabilities into a scalable business.",
  keywords: [
    "quant trading p-value",
    "data mining bias in backtesting",
    "Expected Value (EV) in trading",
    "Monte Carlo drawdown analysis",
    "permutation testing for trading",
    "algorithmic trading for prop firms",
    "python backtesting strategies",
    "statistical edge in finance"
  ],
  openGraph: {
    title: "Beyond Luck: A Statistical Framework for Algorithmic Trading",
    description: "If your strategy wins on random data, it's a ghost. Here’s how to use the 'Truth Serum' of permutation testing to find real alpha.",
    type: "article",
    url: "https://www.objectwire.org/finance/articles/statistical-edge-permutation-testing-trading",
    publishedTime: "2026-02-01T12:00:00Z",
    section: "Quantitative Finance",
  },
  authors: [{ name: "ObjectWire Financial Desk" }],
  alternates: {
    canonical: 'https://www.objectwire.org/finance/articles/statistical-edge-permutation-testing-trading',
  },
};

export default function StatisticalEdgePage() {
  return <WikiArticle slug="finance-articles-statistical-edge-permutation-testing-trading" />;
}
