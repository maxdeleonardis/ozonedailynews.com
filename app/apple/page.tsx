import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Apple News 2026 | iPhone, Mac, AI & More',
  description: 'Latest Apple news: iPhone, Mac, Vision Pro, Apple Intelligence and more from ObjectWire.',
  alternates: { canonical: 'https://www.objectwire.org/apple' },
  openGraph: {
    title: 'Apple News 2026 | iPhone, Mac, AI & More',
    description: 'Latest Apple news: iPhone, Mac, Vision Pro, Apple Intelligence and more from ObjectWire.',
    type: 'website',
    url: 'https://www.objectwire.org/apple',
    siteName: 'ObjectWire',
  },
};

export default function Page() {
  return <WikiArticle slug="apple" />;
}
