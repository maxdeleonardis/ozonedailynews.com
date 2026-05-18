import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


const SLUG = '/technology/cursor';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const IMAGE_URL = 'https://www.ozonenetwork.news/news/cursor.PNG';

export const metadata: Metadata = {
  title:
    'Cursor Hits $2 Billion ARR, Anysphere Doubles Revenue in',
  description:
    'Anysphere reported $2 billion in annual recurring revenue for Cursor in February 2026, doubling the $1 billion ARR milestone announced in November 2025,',
  keywords: [
    'Cursor AI code editor ARR 2026',
    'Anysphere $2 billion revenue',
    'Cursor doubles revenue three months',
    'AI developer tools market 2026',
    'Cursor valuation $9 billion',
    'Anysphere funding round 2026',
    'AI code editor subscription pricing',
    'GitHub Copilot Cursor comparison',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Cursor Hits $2 Billion ARR | Anysphere Doubles Revenue in',
    description:
      'From $1 billion to $2 billion ARR in roughly 90 days. Anysphere\'s Cursor sets one of the fastest recurring revenue acceleration rates in SaaS history.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-02T12:00:00Z',
    modifiedTime: '2026-03-02T12:00:00Z',
    section: 'Technology',
    tags: [
      'Cursor', 'Anysphere', 'AI', 'SaaS', 'Developer Tools',
      'ARR', 'Revenue', 'Technology', 'Code Editor', 'LLM',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cursor Hits $2 Billion ARR in February 2026 | Doubling',
    description:
      'Anysphere\'s Cursor crossed $2 billion ARR in late February 2026, up from $1 billion in November 2025, roughly 90 days of growth.',
    images: [IMAGE_URL],
  },
};

export default function CursorRevenueDoublingPage() {
  return <JackArticleDB slug="technology-cursor" />;
}
