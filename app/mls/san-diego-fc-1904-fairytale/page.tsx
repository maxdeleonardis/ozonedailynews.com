import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/mls/san-diego-fc-1904-fairytale';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1551388749-6b3478890d58?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'San Diego FC Unbeaten Start | Defying MLS Expansion Curse',
  description:
    'San Diego FC are 5W-3D-0L through 8 matches in their inaugural MLS season, the best expansion-year start in league history. How the 30th franchise rewrote',
  keywords: [
    'San Diego FC 2026',
    'San Diego FC MLS',
    'San Diego FC expansion',
    'San Diego FC unbeaten',
    'MLS expansion team 2026',
    'San Diego FC results',
    'MLS 30th franchise',
    'San Diego FC season',
    'San Diego FC inaugural season',
    'MLS expansion curse',
    'San Diego FC roster',
    'Major League Soccer 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'San Diego FC Unbeaten Start | Defying the MLS Expansion',
    description:
      '5 wins, 3 draws, 0 losses. San Diego FC have posted the best expansion-year start in MLS history through 8 matches.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-04T15:00:00Z',
    modifiedTime: '2026-04-04T15:00:00Z',
    section: 'Sports',
    tags: ['San Diego FC', 'MLS', 'Major League Soccer', 'Expansion', 'Soccer'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Packed soccer stadium with fans during a match' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'San Diego FC | The Best Expansion Start in MLS History',
    description: '5W-3D-0L through 8 matches. San Diego FC are rewriting the expansion playbook.',
  },
};

export default function MlsSanDiegoFc1904FairytalePage() {
  return <NewsArticleDB slug="mls-san-diego-fc-1904-fairytale" />;
}
