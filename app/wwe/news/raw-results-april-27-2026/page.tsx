import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/wwe/news/raw-results-april-27-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'WWE Raw Results April 27 2026 | Reigns Accepts Fatu Backlash',
  description:
    'WWE Raw April 27 results: Roman Reigns accepted Jacob Fatu Backlash challenge after attack. Seth Rollins challenges Bron Breakker. Becky Lynch retains over IYO SKY.',
  keywords: [
    'WWE Raw results April 27 2026',
    'Roman Reigns Jacob Fatu Backlash 2026',
    'Seth Rollins Bron Breakker Backlash',
    'Becky Lynch IYO SKY Raw',
    'Asuka IYO SKY attack Raw',
    'Penta Rusev Raw results',
    'Oba Femi Grayson Waller Raw',
    'Judgment Day Raw April 2026',
    'WWE Raw Netflix April 2026',
    'WWE Backlash 2026 matches',
    'Raw results recap 2026',
    'WWE Raw April 27',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'WWE Raw Results April 27 | Reigns Accepts Fatu Backlash Match',
    description:
      'Roman Reigns accepts Jacob Fatu\'s Backlash challenge. Seth Rollins challenges Bron Breakker. Full Raw results, April 27, 2026.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-28T08:00:00Z',
    modifiedTime: '2026-04-28T08:00:00Z',
    section: 'Sports',
    tags: ['WWE', 'Raw', 'Roman Reigns', 'Jacob Fatu', 'Backlash 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WWE Raw April 27 | Reigns vs. Fatu at Backlash 2026 Official',
    description:
      'Fatu attacks Reigns, Reigns accepts the challenge. Rollins calls out Breakker. Becky retains. Full Raw April 27 results.',
  },
};

export default function WweNewsRawResultsApril272026Page() {
  return <NewsArticleDB slug="wwe-news-raw-results-april-27-2026" />;
}
