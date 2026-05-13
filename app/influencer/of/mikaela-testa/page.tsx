import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/of/mikaela-testa';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Mikaela Testa | Age, Instagram, OnlyFans, Bio 2026',
  description:
    'Mikaela Testa is an Australian creator and content creator known for her Instagram and OnlyFans presence. Full biography, age, and social media',
  keywords: [
    'Mikaela Testa',
    'Mikaela Testa age',
    'Mikaela Testa Instagram',
    'Mikaela Testa OnlyFans',
    'Mikaela Testa biography',
    'Mikaela Testa 2026',
    'Australian creator',
    'Mikaela Testa social media',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Mikaela Testa | Age, Instagram, OnlyFans & Bio 2026',
    description:
      'Full profile of Mikaela Testa, Australian creator. Age, Instagram, OnlyFans, and career history.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Creator Desk'],
    section: 'Creator',
    tags: ['Mikaela Testa', 'Creator', 'Australia', 'OnlyFans'],
    publishedTime: '2026-04-22T12:00:00Z',
    modifiedTime: '2026-04-22T12:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mikaela Testa | Age, Instagram, OnlyFans',
    description: 'Australian creator Mikaela Testa — age, social handles, and biography.',
  },
};

export default function MikaelaTesta() {
  return <CreatorArticleDB slug="creator-of-mikaela-testa" />;
}