import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/of/mikaela-testa';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Mikaela Testa | Age, Instagram, OnlyFans, Bio 2026',
  description:
    'Mikaela Testa is an Australian influencer and content creator known for her Instagram and OnlyFans presence. Full biography, age, and social media',
  keywords: [
    'Mikaela Testa',
    'Mikaela Testa age',
    'Mikaela Testa Instagram',
    'Mikaela Testa OnlyFans',
    'Mikaela Testa biography',
    'Mikaela Testa 2026',
    'Australian influencer',
    'Mikaela Testa social media',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Mikaela Testa | Age, Instagram, OnlyFans & Bio 2026',
    description:
      'Full profile of Mikaela Testa, Australian influencer. Age, Instagram, OnlyFans, and career history.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    tags: ['Mikaela Testa', 'Influencer', 'Australia', 'OnlyFans'],
    publishedTime: '2026-04-22T12:00:00Z',
    modifiedTime: '2026-04-22T12:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mikaela Testa | Age, Instagram, OnlyFans',
    description: 'Australian influencer Mikaela Testa — age, social handles, and biography.',
  },
};

export default function MikaelaTesta() {
  return <CreatorArticleDB slug="influencer-of-mikaela-testa" />;
}