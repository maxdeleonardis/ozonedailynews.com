import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/meta/layoffs';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/default/meta.png';

export const metadata: Metadata = {
  title: 'Meta Bay Area Layoffs 2026 | 200 Jobs Cut in Burlingame',
  description:
    'Meta is cutting nearly 200 workers at its Burlingame and Sunnyvale offices, effective late May 2026. The cuts extend a pattern of reductions as Meta',
  keywords: [
    'Meta layoffs 2026',
    'Meta Bay Area layoffs',
    'Meta Burlingame layoffs',
    'Meta Sunnyvale layoffs',
    'Meta job cuts 2026',
    'Meta Reality Labs layoffs',
    'Meta AI pivot job cuts',
    'Meta WARN notice California 2026',
    'Meta restructuring 2026',
    'Meta employees laid off',
    'Meta Seattle layoffs 2026',
    'Meta Washington state WARN',
    'Mark Zuckerberg AI investment',
    'Meta Platforms workforce reduction',
    'tech layoffs Bay Area 2026',
    'Meta year of efficiency',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Meta Cuts Nearly 200 Bay Area Jobs | Burlingame',
    description:
      'State WARN filings confirm Meta is eliminating nearly 200 roles in Burlingame and Sunnyvale by late May. The cuts follow 700+ January reductions and',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-04-03T08:00:00Z',
    modifiedTime: '2026-04-03T08:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Meta headquarters with layoff announcement' }],
    tags: ['Meta', 'Layoffs', 'Bay Area', 'AI', 'Tech Jobs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta is cutting ~200 Bay Area jobs. Burlingame +',
    description: 'State WARN filings confirm the cuts. It follows 700 more in March, 168 in Washington state, and 1,000+ from Reality Labs in January.',
    images: [OG_IMAGE],
  },
};

export default function MetaLayoffsPage() {
  return <NewsArticleDB slug="meta-layoffs" />;
}
