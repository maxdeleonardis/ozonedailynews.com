import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "The Most Important Stablecoins in the World 2026 | Complete",
  description: "Complete guide to the most important stablecoins in 2026, USDT, USDC, DAI, USDE, and PYUSD. Market cap rankings, backing mechanisms, regulatory status,",
  keywords: [
    "most important stablecoins 2026 ranking",
    "USDT Tether market cap largest stablecoin",
    "USDC Circle stablecoin regulated",
    "DAI MakerDAO decentralized stablecoin",
    "stablecoin importance crypto ecosystem",
    "what are stablecoins why they matter",
    "fiat-backed stablecoins vs algorithmic",
    "stablecoin market capitalization 2026",
    "USDE Ethena stablecoin explained",
    "PayPal PYUSD stablecoin adoption",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/most-important-stablecoins-world-2026',
  },
  openGraph: {
    title: "The Most Important Stablecoins in the World 2026 | Complete",
    description: "Complete guide to the most important stablecoins in 2026, USDT, USDC, DAI, USDE, and PYUSD. Market cap rankings, backing mechanisms, regulatory status,",
    type: 'article',
    url: "https://www.objectwire.org/define/most-important-stablecoins-world-2026",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Most Important Stablecoins in the World 2026 | Complete",
    description: "Complete guide to the most important stablecoins in 2026, USDT, USDC, DAI, USDE, and PYUSD. Market cap rankings, backing mechanisms, regulatory status,",
  },
};

export default function MostImportantStablecoinsPage() {
  return <WikiArticle slug="define-most-important-stablecoins-world-2026" />;
}
