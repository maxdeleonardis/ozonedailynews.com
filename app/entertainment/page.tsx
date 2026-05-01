import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/entertainment';

export const metadata: Metadata = {
  title: 'Entertainment News | Gaming, Film & Streaming 2026',
  description: 'Entertainment news covering gaming, film, streaming, and digital culture. Source-cited reporting from ObjectWire.',
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Entertainment News | Gaming, Film & Streaming 2026',
    description: 'Entertainment news covering gaming, film, streaming, and digital culture. Source-cited reporting from ObjectWire.',
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entertainment News | Gaming, Film & Streaming 2026',
    description: 'Entertainment news covering gaming, film, streaming, and digital culture. Source-cited reporting from ObjectWire.',
  },
};

export default function Page() {
  return <ArticlePageDB slug="entertainment" />;
}
