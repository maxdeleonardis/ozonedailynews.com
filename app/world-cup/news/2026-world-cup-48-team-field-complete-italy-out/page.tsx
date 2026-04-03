import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/world-cup/news/2026-world-cup-48-team-field-complete-italy-out';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/world-cup/worldcup-usa-drama-strikes.jpg';

export const metadata: Metadata = {
  title: '2026 World Cup Field Complete | Italy Out, 48 Nations Set',
  description:
    'Iraq beat Bolivia and DR Congo beat Jamaica to fill the last two spots in the 2026 World Cup. Italy lost to Bosnia on penalties, missing a third consecutive tournament.',
  keywords: [
    '2026 World Cup 48 teams',
    'World Cup 2026 qualified teams',
    'Italy miss 2026 World Cup',
    'Italy Bosnia World Cup playoff',
    'Iraq qualify World Cup 2026',
    'DR Congo qualify World Cup 2026',
    'World Cup final playoff results',
    'FIFA World Cup 2026 field complete',
    '2026 World Cup Canada Mexico USA',
    'Italy miss three straight World Cups',
    'World Cup intercontinental playoff',
    'FIFA 48-team World Cup format',
    '2026 World Cup countries',
    'World Cup qualification 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: '2026 World Cup 48-Team Field Complete | Italy Out, Iraq and DR Congo In',
    description:
      'Iraq and DR Congo claimed the last two World Cup spots. Italy lost to Bosnia on penalties, becoming the first four-time champion to miss three straight tournaments.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfansa'],
    publishedTime: '2026-04-08T10:00:00Z',
    modifiedTime: '2026-04-08T10:00:00Z',
    section: 'Sports',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: '2026 FIFA World Cup 48-team field complete' }],
    tags: ['FIFA World Cup 2026', 'Italy', 'Iraq', 'DR Congo', 'World Cup Qualification', 'Bosnia'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Italy Out. Iraq and DR Congo In. The 2026 World Cup Field is Set.',
    description: 'All 48 nations confirmed for Canada, Mexico, and the USA. Italy miss a third straight World Cup.',
    images: [OG_IMAGE],
  },
};

export default function WorldCupNews2026WorldCup48TeamFieldCompleteItalyOutPage() {
  return <NewsArticleDB slug="world-cup-news-2026-world-cup-48-team-field-complete-italy-out" />;
}
