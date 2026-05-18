import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';



const SLUG = '/elon-musk';

export const metadata: Metadata = {
  title: 'Elon Musk News | Tesla, SpaceX, xAI, DOGE 2026',
  description: 'Latest Elon Musk news: Tesla, SpaceX, xAI, X (Twitter), and DOGE policy updates. Verified reporting from ObjectWire News.',
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'Elon Musk News | Tesla, SpaceX & xAI 2026',
    description: 'Comprehensive coverage of Elon Musk, Tesla, SpaceX, and xAI from ObjectWire News.',
    type: 'website',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'ObjectWire News',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elon Musk News | Tesla, SpaceX & xAI 2026',
    description: 'Latest Elon Musk news from ObjectWire News.',
  },
};

export default function ElonMuskPage() {
  return <ArticlePageDB slug="elon-musk" />;
}
