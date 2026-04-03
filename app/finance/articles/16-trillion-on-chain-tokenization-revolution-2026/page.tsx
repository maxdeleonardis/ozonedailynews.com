import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "From Static Equity to Programmable Capital: The State of Tokenization in 2026",
  description: "A foundational analysis of the $16 trillion shift to the 'Financial Internet.' This report deconstructs atomic settlement, liquidity multipliers, and how tokenization is unlocking roughly 10% of global GDP.",
  keywords: [
    "tokenization 2026",
    "CLARITY Act 2025",
    "Larry Fink tokenization",
    "BlackRock BUIDL",
    "atomic settlement T-0",
    "programmable capital",
    "RWA investing strategy",
    "digital market infrastructure"
  ],
  openGraph: {
    title: "From Static Equity to Programmable Capital: The State of Tokenization in 2026",
    description: "Institutional analysis: How the transition from information to value is unlocking $16 trillion in trapped liquidity.",
    type: "article",
    url: "https://www.objectwire.org/finance/articles/16-trillion-on-chain-tokenization-revolution-2026",
    publishedTime: "2026-02-01T14:00:00Z",
    section: "Market Intelligence",
  },
  authors: [{ name: "ObjectWire Financial Desk" }],
  alternates: {
    canonical: 'https://www.objectwire.org/finance/articles/16-trillion-on-chain-tokenization-revolution-2026',
  },
};

export default function TokenizationRevolutionPage() {
  return <WikiArticle slug="finance-articles-16-trillion-on-chain-tokenization-revolution-2026" />;
}
