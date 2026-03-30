import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/news/fed-cbdc-halted-stablecoins-digital-dollar-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1771736007142-e1348a02f006?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Fed Confirms CBDC Work Halted | Backs Stablecoins as Digital Dollar Framework | ObjectWire',
  description:
    'The Federal Reserve has confirmed it will not pursue a central bank digital currency, instead backing stablecoins and tokenized bank deposits as the U.S. digital dollar framework.',
  keywords: [
    'Federal Reserve CBDC halted 2026',
    'Fed stablecoin support',
    'US digital dollar framework',
    'CBDC vs stablecoin',
    'tokenized bank deposits',
    'Federal Reserve digital currency',
    'US vs Europe digital money',
    'stablecoin regulation 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Fed Confirms CBDC Work Halted | Backs Stablecoins as Digital Dollar Framework | ObjectWire',
    description:
      'The Federal Reserve has confirmed it will not pursue a CBDC, throwing its weight behind stablecoins and tokenized bank deposits as the preferred digital dollar frameworks for the United States.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'US hundred dollar bill representing Federal Reserve monetary policy' }],
    publishedTime: '2026-03-30T22:00:00Z',
    modifiedTime: '2026-03-30T22:00:00Z',
    section: 'Crypto',
    tags: ['Federal Reserve', 'CBDC', 'Stablecoin', 'Digital Dollar', 'Crypto', 'Finance'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fed Confirms CBDC Work Halted | Backs Stablecoins Instead',
    description:
      'The Federal Reserve will not pursue a central bank digital currency. Stablecoins and tokenized bank deposits are now the official U.S. digital dollar framework.',
    images: [OG_IMAGE],
  },
};

export default function CryptoNewsFedCbdcHaltedStablecoinsDigitalDollar2026Page() {
  return <JackArticleDB slug="crypto-news-fed-cbdc-halted-stablecoins-digital-dollar-2026" />;
}
