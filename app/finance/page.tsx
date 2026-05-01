import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/finance';

export const metadata: Metadata = {
  title: 'Finance News | Markets, Crypto & Investment 2026',
  description: 'Finance and markets news: crypto, private credit, investment trends, and economic analysis from ObjectWire.',
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Finance News | Markets, Crypto & Investment 2026',
    description: 'Finance and markets news: crypto, private credit, investment trends, and economic analysis from ObjectWire.',
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finance News | Markets, Crypto & Investment 2026',
    description: 'Finance and markets news: crypto, private credit, investment trends, and economic analysis from ObjectWire.',
  },
};

export default function Page() {
  return <ArticlePageDB slug="finance" />;
}
