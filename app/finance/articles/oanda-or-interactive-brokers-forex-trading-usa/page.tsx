import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Institutional Comparison: OANDA vs Interactive Brokers (2025-2026) | ObjectWire",
  description: "A professional deconstruction of the $7.5 trillion daily forex market. Comparing execution models, API accessibility, and regulatory hedging for US-based traders.",
  keywords: [
    "OANDA vs Interactive Brokers 2026",
    "forex trading for US citizens",
    "IBKR vs OANDA spreads",
    "institutional forex execution",
    "API trading for forex",
    "professional forex brokerage US",
    "currency market liquidity 2026",
    "foreign exchange risk management"
  ],
  openGraph: {
    title: "Institutional Comparison: OANDA vs Interactive Brokers (2025-2026)",
    description: "Financial Intelligence: Comparing the two primary conduits for institutional-grade currency exposure in the US market.",
    type: "article",
    url: "https://www.objectwire.org/finance/articles/oanda-or-interactive-brokers-forex-trading-usa",
    publishedTime: "2025-10-21T08:00:00Z",
    section: "Market Infrastructure",
  },
  authors: [{ name: "ObjectWire Financial Desk" }],
  alternates: {
    canonical: 'https://www.objectwire.org/finance/articles/oanda-or-interactive-brokers-forex-trading-usa',
  },
};

export default function OANDAvsInteractiveBrokersPage() {
  return <WikiArticle slug="finance-articles-oanda-or-interactive-brokers-forex-trading-usa" />;
}
