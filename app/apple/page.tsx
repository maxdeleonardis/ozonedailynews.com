import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Apple News 2026 | iPhone, Mac, AI & More',
  description: 'Latest Apple news: iPhone, Mac, Vision Pro, Apple Intelligence and more from OzoneNews.',
  alternates: { canonical: 'https://www.ozonenetwork.news/apple' },
  openGraph: {
    title: 'Apple News 2026 | iPhone, Mac, AI & More',
    description: 'Latest Apple news: iPhone, Mac, Vision Pro, Apple Intelligence and more from OzoneNews.',
    type: 'website',
    url: 'https://www.ozonenetwork.news/apple',
    siteName: 'OzoneNews',
  },
};

export default function Page() {
  return <WikiArticle slug="apple" />;
}
