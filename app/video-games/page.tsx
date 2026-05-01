import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/video-games';

export const metadata: Metadata = {
  title: 'Video Game News | GTA 6, Nintendo & More 2026',
  description: 'Latest video game news: GTA 6, Nintendo Switch 2, new releases, and gaming industry analysis from ObjectWire.',
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Video Game News | GTA 6, Nintendo & More 2026',
    description: 'Latest video game news: GTA 6, Nintendo Switch 2, new releases, and gaming industry analysis from ObjectWire.',
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Game News | GTA 6, Nintendo & More 2026',
    description: 'Latest video game news: GTA 6, Nintendo Switch 2, new releases, and gaming industry analysis from ObjectWire.',
  },
};

export default function Page() {
  return <ArticlePageDB slug="video-games" />;
}
