import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Technology News 2026 | AI, Chips & Innovation',
  description: 'Latest technology news: AI hardware, semiconductors, startups and industry analysis.',
  alternates: { canonical: 'https://www.ozonenetwork.news/technology' },
  openGraph: {
    title: 'Technology News 2026 | AI, Chips & Innovation',
    description: 'Latest technology news: AI hardware, semiconductors, startups and industry analysis.',
    type: 'website',
    url: 'https://www.ozonenetwork.news/technology',
    siteName: 'OzoneNews',
  },
};

export default function Page() {
  return <WikiArticle slug="technology" />;
}
