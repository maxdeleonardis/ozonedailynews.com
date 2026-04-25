import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/news/bip-361-quantum-bitcoin-legacy-sunset';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1635840418908-772c54d7931f?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'BIP-361 Quantum Bitcoin | Legacy Signature Sunset Explained',
  description:
    'BIP-361 proposes freezing 34% of Bitcoin supply, including Satoshi Nakamoto coins, to protect against quantum computing attacks. Full breakdown of the',
  keywords: [
    'BIP-361',
    'BIP-361 Bitcoin',
    'quantum Bitcoin',
    'Bitcoin quantum computing',
    'Satoshi Nakamoto coins frozen',
    'Jameson Lopp BIP-361',
    'post quantum migration Bitcoin',
    'P2MR Bitcoin',
    'BIP-360',
    'Bitcoin legacy signature sunset',
    'quantum existentialism Bitcoin',
    'Shor algorithm Bitcoin',
    'Bitcoin ECDSA quantum',
    'Adam Back quantum Bitcoin',
    'Bitcoin supply frozen',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'BIP-361 Quantum Bitcoin | Legacy Signature Sunset Explained',
    description:
      'BIP-361 would freeze 34% of Bitcoin supply to defend against quantum attacks. Satoshi Nakamoto coins included. Three-phase migration breakdown.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire News Desk'],
    publishedTime: '2026-04-16T16:00:00Z',
    modifiedTime: '2026-04-16T16:00:00Z',
    section: 'Crypto',
    tags: ['Bitcoin', 'BIP-361', 'Quantum Computing', 'Satoshi Nakamoto', 'Jameson Lopp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIP-361 Would Freeze 34% of Bitcoin Supply Against',
    description:
      'Jameson Lopp proposes three-phase quantum migration. Satoshi Nakamoto coins at risk of permanent lockout.',
  },
};

export default function CryptoNewsBip361QuantumBitcoinLegacySunsetPage() {
  return <ArticlePageDB slug="crypto-news-bip-361-quantum-bitcoin-legacy-sunset" />;
}
