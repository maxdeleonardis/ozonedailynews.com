import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/wwe/news/backlash-2026-preview';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'WWE Backlash 2026 | Full Card Preview, Matches, Date',
  description:
    'WWE Backlash 2026 full card preview: Roman Reigns vs. Jacob Fatu for the World Heavyweight Title, Seth Rollins vs. Bron Breakker, IYO SKY vs. Asuka, and all confirmed matches.',
  keywords: [
    'WWE Backlash 2026',
    'WWE Backlash 2026 card',
    'Roman Reigns vs Jacob Fatu Backlash',
    'Seth Rollins Bron Breakker Backlash 2026',
    'IYO SKY Asuka Backlash 2026',
    'WWE Backlash 2026 matches',
    'WWE Backlash 2026 date',
    'WWE Backlash 2026 preview',
    'WWE pay per view 2026',
    'World Heavyweight Championship Backlash',
    'WWE Backlash May 2026',
    'WWE premium live event 2026',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'WWE Backlash 2026 | Full Card Preview',
    description:
      'Reigns vs. Fatu, Rollins vs. Breakker, IYO SKY vs. Asuka. Full card breakdown and analysis for WWE Backlash 2026.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-28T10:00:00Z',
    modifiedTime: '2026-04-28T10:00:00Z',
    section: 'Sports',
    tags: ['WWE', 'Backlash 2026', 'Roman Reigns', 'Jacob Fatu', 'Seth Rollins'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WWE Backlash 2026 Card | Every Confirmed Match',
    description:
      'Reigns vs. Fatu for the World Title. Rollins vs. Breakker. IYO SKY vs. Asuka. Full Backlash 2026 preview and analysis.',
  },
};

export default function WweNewsBacklash2026PreviewPage() {
  return <NewsArticleDB slug="wwe-news-backlash-2026-preview" />;
}
