import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/youtube/sidemen/inside-uk/season3/ratings-review-winner';
const OG_IMAGE = '/entertainment/InsideS3.webp';

export const metadata: Metadata = {
  title: 'Sidemen Inside Season 3 Review | Winner, Ratings, Worth Watching | ObjectWire',
  description:
    'Eddie Hall wins Sidemen Inside Season 3. IMDb rates the series 6.9/10, fans call it the best season yet. Full review, winner recap, and viewer reactions.',
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Sidemen Inside Season 3 Review | Winner, Ratings, Worth Watching | ObjectWire',
    description:
      'Eddie Hall wins Sidemen Inside Season 3. IMDb rates the series 6.9/10, fans call it the best season yet. Full review, winner recap, and viewer reactions.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [{ url: `https://www.objectwire.org${OG_IMAGE}`, width: 1200, height: 675, alt: 'Sidemen Inside Season 3 promo art' }],
    publishedTime: '2026-03-30T22:00:00Z',
    modifiedTime: '2026-03-30T22:00:00Z',
    section: 'Entertainment',
    tags: ['Sidemen', 'Inside', 'Eddie Hall', 'YouTube', 'Reality TV', 'Season 3'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidemen Inside Season 3 | Winner, Ratings, Full Review',
    description:
      'Eddie Hall wins Sidemen Inside Season 3. IMDb 6.9/10, Reddit fans call it the best season. Full breakdown inside.',
    images: [`https://www.objectwire.org${OG_IMAGE}`],
  },
};

export default function YoutubeSidemenInsideUkSeason3RatingsReviewWinnerPage() {
  return <NewsArticleDB slug="youtube-sidemen-inside-uk-season3-ratings-review-winner" />;
}
