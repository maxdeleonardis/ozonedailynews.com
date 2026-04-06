import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/usdc/news/circle-usdc-drift-hack-285m-2026';
const OG_IMAGE = '/crypto/usdc.png';

export const metadata: Metadata = {
  title: 'Circle Slammed for Not Freezing USDC in $285M Drift Hack',
  description:
    'Circle Internet Group faces backlash after failing to freeze stolen USDC during the $285 million Drift Protocol exploit on April 1, 2026. ZachXBT says',
  keywords: [
    'Circle USDC Drift hack',
    'Drift Protocol hack 2026',
    'Circle CCTP exploit',
    'USDC frozen Drift',
    'ZachXBT Circle',
    '$285 million DeFi hack',
    'Solana Drift exploit',
    'Circle Internet Group',
    'USDC cross-chain transfer',
    'DeFi hack 2026',
    'Circle USDC freeze',
    'Drift Protocol Solana',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Circle Slammed for Not Freezing USDC in $285M Drift Hack',
    description:
      'ZachXBT says Circle had six hours to freeze stolen USDC as the Drift Protocol attacker bridged funds from Solana to Ethereum via CCTP. Circle took no',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Jack Breenen'],
    publishedTime: '2026-04-03T14:00:00Z',
    modifiedTime: '2026-04-03T14:00:00Z',
    section: 'Crypto',
    images: [
      {
        url: `https://www.objectwire.org${OG_IMAGE}`,
        width: 1200,
        height: 675,
        alt: 'USDC stablecoin logo',
      },
    ],
    tags: ['Circle', 'USDC', 'Drift Protocol', 'DeFi Hack'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Circle Had 6 Hours to Freeze $285M Drift Hack Funds, Did Nothing',
    description:
      'ZachXBT: Circle was "asleep" as the Drift attacker bridged stolen USDC from Solana to Ethereum via CCTP for hours during US business hours.',
    images: [`https://www.objectwire.org${OG_IMAGE}`],
  },
};

export default function CryptoUsdcNewsCircleUsdcDriftHack285m2026Page() {
  return <NewsArticleDB slug="crypto-usdc-news-circle-usdc-drift-hack-285m-2026" />;
}
