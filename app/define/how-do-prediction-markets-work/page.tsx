import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "How Do Prediction Markets Work? Are They Cryptocurrency? | Complete Guide | ObjectWire",
  description: "Complete technical breakdown of how prediction markets work, from order books to probability pricing. Plus: the relationship between prediction markets and cryptocurrency, blockchain-based vs traditional platforms.",
  keywords: [
    "how do prediction markets work explained",
    "prediction market mechanics order book",
    "are prediction markets cryptocurrency",
    "blockchain prediction markets vs traditional",
    "prediction market pricing probability",
    "polymarket how it works technical",
    "kalshi prediction market mechanics",
    "prediction market shares pricing algorithm",
    "decentralized prediction markets crypto",
    "prediction markets betting difference explained",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/how-do-prediction-markets-work',
  },
};

export default function HowPredictionMarketsWorkPage() {
  return <WikiArticle slug="define-how-do-prediction-markets-work" />;
}
