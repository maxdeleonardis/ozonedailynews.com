import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/tech';

export const metadata: Metadata = {
  title: 'Tech News | AI, Semiconductors & Software 2026',
  description: 'Latest technology news covering AI chips, cloud infrastructure, software, and semiconductor industry from ObjectWire.',
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Tech News | AI, Semiconductors & Software 2026',
    description: 'Latest technology news covering AI chips, cloud infrastructure, software, and semiconductor industry from ObjectWire.',
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech News | AI, Semiconductors & Software 2026',
    description: 'Latest technology news covering AI chips, cloud infrastructure, software, and semiconductor industry from ObjectWire.',
  },
};

export default function Page() {
  return <ArticlePageDB slug="tech" />;
}
