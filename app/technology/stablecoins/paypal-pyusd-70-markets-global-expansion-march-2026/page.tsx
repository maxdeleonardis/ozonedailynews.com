import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/technology/stablecoins/paypal-pyusd-70-markets-global-expansion-march-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: "PayPal Expands PYUSD Stablecoin to 70 Markets Worldwide | ObjectWire",
  description:
    "PayPal announced on March 18, 2026, that its dollar-backed stablecoin PayPal USD (PYUSD) is now available in 70 markets across Asia-Pacific, Europe, Latin America, and North America, a major expansion from its previous U.S. and U.K. availability.",
  keywords: [
    'PayPal PYUSD 70 markets global expansion 2026',
    'PayPal USD stablecoin international rollout March 2026',
    'PYUSD Asia-Pacific Europe Latin America 2026',
    'PayPal stablecoin Colombia Singapore Panama 2026',
    'PYUSD global availability dollar-backed stablecoin',
    'PayPal digital currency expansion 2026',
    'PayPal USD stablecoin new countries March 2026',
    'stablecoin payments global 2026',
    'PYUSD vs USDC USDT global reach',
    'PayPal cross-border payments stablecoin 2026',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "PayPal Expands PYUSD Stablecoin to 70 Markets Worldwide",
    description:
      "PayPal USD now available in 70 markets across four continents after launching exclusively in the U.S. and U.K. New regions include Colombia, Singapore, Panama, Costa Rica, and dozens more, with remaining markets expected in weeks.",
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-18T14:00:00Z',
    modifiedTime: '2026-03-18T14:00:00Z',
    section: 'Finance',
    tags: [
      'PayPal', 'PYUSD', 'Stablecoins', 'Crypto', 'Finance',
      'Payments', 'Digital Currency', 'Global', 'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "PayPal's PYUSD Stablecoin Goes Global | 70 Markets Across 4 Continents | ObjectWire",
    description:
      "PayPal USD just expanded from 2 countries to 70 markets. Colombia, Singapore, Panama, Guatemala, Peru and dozens more now have access to the dollar-backed stablecoin.",
  },
  other: {
    news_keywords:
      'PayPal PYUSD 70 markets, PayPal USD global expansion, stablecoin international rollout March 2026',
  },
};

export default function PayPalPYUSDExpansionPage() {
  return <NewsArticleDB slug="technology-stablecoins-paypal-pyusd-70-markets-global-expansion-march-2026" />;
}
