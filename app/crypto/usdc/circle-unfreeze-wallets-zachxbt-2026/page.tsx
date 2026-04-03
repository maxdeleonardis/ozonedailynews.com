import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/usdc/circle-unfreeze-wallets-zachxbt-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1652337037919-62e284ff2839?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Circle Unfreeze 5 of 16 USDC Wallets After ZachXBT Backlash | ObjectWire',
  description:
    'Circle unfroze 5 of 16 blacklisted USDC hot wallets after blockchain investigator ZachXBT exposed the sealed court-order freeze, as Circle stock fell ~20% on separate regulatory concerns.',
  keywords: [
    'Circle USDC wallet unfreeze 2026',
    'Circle blacklist USDC wallets ZachXBT',
    'Circle sealed court order USDC',
    'USDC blacklist controversy 2026',
    'ZachXBT Circle investigation',
    'Circle stock drop 2026',
    'USDC compliance freeze',
    'Circle Internet Group 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Circle Unfreeze 5 of 16 USDC Wallets After ZachXBT Backlash | ObjectWire',
    description:
      'Circle Internet Group unfroze five of 16 blacklisted USDC business hot wallets after blockchain investigator ZachXBT exposed the sealed court-order freeze. Circle stock had already fallen roughly 20% on separate regulatory concerns.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Cryptocurrency blockchain digital finance' }],
    publishedTime: '2026-03-30T17:00:00Z',
    modifiedTime: '2026-03-30T17:00:00Z',
    section: 'Crypto',
    tags: ['Circle', 'USDC', 'ZachXBT', 'Stablecoin', 'Crypto', 'Blacklist', 'Court Order'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Circle Unfreeze 5 of 16 USDC Wallets After ZachXBT Backlash',
    description:
      'Circle unfroze 5 of 16 blacklisted USDC wallets after ZachXBT exposed the sealed court-order freeze. Circle stock fell ~20% the same week.',
    images: [OG_IMAGE],
  },
};

export default function CryptoUsdcCircleUnfreezeWalletsZachxbt2026Page() {
  return <NewsArticleDB slug="crypto-usdc-circle-unfreeze-wallets-zachxbt-2026" />;
}
