import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/google';

export const metadata: Metadata = {
  title: 'Google News | AI, Search & Alphabet 2026',
  description: 'Latest Google news: AI research, Search updates, Waymo, DeepMind, and Alphabet business. Verified coverage from ObjectWire.',
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Google News | AI, Search & Alphabet 2026',
    description: 'Latest Google news: AI research, Search updates, Waymo, DeepMind, and Alphabet business. Verified coverage from ObjectWire.',
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google News | AI, Search & Alphabet 2026',
    description: 'Latest Google news: AI research, Search updates, Waymo, DeepMind, and Alphabet business. Verified coverage from ObjectWire.',
  },
};

export default function Page() {
  return <ArticlePageDB slug="google" />;
}
