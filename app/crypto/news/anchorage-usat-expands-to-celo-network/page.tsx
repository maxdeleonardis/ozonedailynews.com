import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/news/anchorage-usat-expands-to-celo-network';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/crypto/tether.png';

export const metadata: Metadata = {
  title: 'Anchorage USA₮ Expands to Celo | First Post-Ethereum Chain',
  description:
    'Anchorage Digital Bank launches its federally regulated stablecoin USA₮ on Celo, the first expansion beyond Ethereum. Celo hosts 4.2M weekly active stablecoin users and 14M MiniPay wallet users.',
  keywords: [
    'Anchorage Digital USA₮ Celo',
    'USA₮ stablecoin Celo network',
    'Anchorage Digital stablecoin expansion',
    'Celo stablecoin launch 2026',
    'USA₮ federally regulated stablecoin',
    'GENIUS Act stablecoin compliance',
    'Celo MiniPay wallet stablecoin',
    'Cantor Fitzgerald stablecoin reserves',
    'Bo Hines Tether USA₮',
    'Self Protocol ZK proof stablecoin',
    'Google Cloud stablecoin distribution',
    'Celo gas currency stablecoin',
    'OCC chartered crypto bank stablecoin',
    'regulated digital dollar Celo',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Anchorage USA₮ Expands to Celo | First Post-Ethereum Chain',
    description:
      'USA₮, the first federally regulated stablecoin under the GENIUS Act, launches on Celo. 4.2M weekly active users, Google Cloud distribution, ZK-proof identity verification.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-02T16:00:00Z',
    modifiedTime: '2026-04-02T16:00:00Z',
    section: 'Crypto',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Tether USA₮ stablecoin digital currency' }],
    tags: ['Anchorage Digital', 'USA₮', 'Celo', 'Stablecoin', 'GENIUS Act', 'DeFi', 'Google Cloud'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anchorage USA₮ Expands to Celo | First Chain Beyond Ethereum',
    description:
      'Federally regulated USA₮ launches on Celo. 4.2M weekly active stablecoin users, 14M MiniPay wallets, Google Cloud faucet, ZK-proof identity. The regulated digital dollar goes mobile-first.',
    images: [OG_IMAGE],
  },
};

export default function CryptoNewsAnchorageUsatExpandsToCeloNetworkPage() {
  return <JackArticleDB slug="crypto-news-anchorage-usat-expands-to-celo-network" />;
}
