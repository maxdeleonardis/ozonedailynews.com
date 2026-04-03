import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'XRP | Digital Asset, XRP Ledger & Ripple Network | ObjectWire',
  description:
    'Comprehensive profile of XRP: the native digital asset of the XRP Ledger (XRPL). Covers history, how XRP works, the Ripple company, SEC lawsuit, use cases in cross-border payments, tokenomics, and the 2026 $80B exploit discovery.',
  keywords: [
    'XRP cryptocurrency',
    'XRP Ledger',
    'XRPL',
    'Ripple XRP',
    'XRP price',
    'Ripple Labs',
    'XRP SEC lawsuit',
    'XRP cross-border payments',
    'XRP tokenomics',
    'Brad Garlinghouse',
    'XRP vs Bitcoin',
    'XRP Ledger Foundation',
    'buy XRP',
    'XRP wallet',
    'XRP stablecoin RLUSD',
    'XRP 2026',
    'XRPL exploit 2026',
    'Ripple settlement SEC',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/crypto/xrp',
  },
  openGraph: {
    title: 'XRP | Digital Asset, XRP Ledger & Ripple | ObjectWire',
    description:
      'The complete XRP profile: how it works, Ripple Labs, the SEC lawsuit, cross-border payment use cases, and the 2026 $80B ledger exploit that was stopped before activation.',
    type: 'article',
    url: 'https://www.objectwire.org/crypto/xrp',
    siteName: 'ObjectWire',
    publishedTime: '2026-03-07T18:00:00Z',
    modifiedTime: '2026-03-07T18:00:00Z',
    section: 'Crypto',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XRP | Full Profile: History, Ripple, SEC Lawsuit & 2026 Exploit | ObjectWire',
    description:
      'Everything on XRP: the asset, the ledger, Ripple Labs, the SEC case, and the $80B exploit that never activated.',
  },
};

export default function XRPPage() {
  return <WikiArticle slug="crypto-xrp" />;
}
