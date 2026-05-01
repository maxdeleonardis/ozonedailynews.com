import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/youtube';

export const metadata: Metadata = {
  title: 'YouTube News | Creators, Sidemen & Trends 2026',
  description: 'YouTube creator news, Sidemen updates, and platform trends. Verified coverage from ObjectWire.',
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'YouTube News | Creators, Sidemen & Trends 2026',
    description: 'YouTube creator news, Sidemen updates, and platform trends. Verified coverage from ObjectWire.',
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube News | Creators, Sidemen & Trends 2026',
    description: 'YouTube creator news, Sidemen updates, and platform trends. Verified coverage from ObjectWire.',
  },
};

export default function Page() {
  return <ArticlePageDB slug="youtube" />;
}
