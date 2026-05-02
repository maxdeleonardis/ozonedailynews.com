import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Technology News 2026 | AI, Chips & Innovation',
  description: 'Latest technology news: AI hardware, semiconductors, startups and industry analysis.',
  alternates: { canonical: 'https://www.objectwire.org/technology' },
  openGraph: {
    title: 'Technology News 2026 | AI, Chips & Innovation',
    description: 'Latest technology news: AI hardware, semiconductors, startups and industry analysis.',
    type: 'website',
    url: 'https://www.objectwire.org/technology',
    siteName: 'ObjectWire',
  },
};

export default function Page() {
  return <WikiArticle slug="technology" />;
}
