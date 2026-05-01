import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/crypto';

export const metadata: Metadata = {
  title: 'Crypto News | Bitcoin, XRP & Blockchain 2026',
  description: 'Latest cryptocurrency news: Bitcoin, XRP, HBAR, Coinbase, and blockchain developments. Verified from ObjectWire.',
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Crypto News | Bitcoin, XRP & Blockchain 2026',
    description: 'Latest cryptocurrency news: Bitcoin, XRP, HBAR, Coinbase, and blockchain developments. Verified from ObjectWire.',
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto News | Bitcoin, XRP & Blockchain 2026',
    description: 'Latest cryptocurrency news: Bitcoin, XRP, HBAR, Coinbase, and blockchain developments. Verified from ObjectWire.',
  },
};

export default function Page() {
  return <ArticlePageDB slug="crypto" />;
}
