import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/events/starbucks/halo-award-scheduled-ordering-may-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Starbucks Wins 2026 Silver Halo Award | Scheduled Ordering Launches May 11',
  description:
    'Starbucks wins the 2026 Silver Halo Award for Best Local-Impact Initiative and launches scheduled mobile ordering across North America starting May 11, 2026.',
  keywords: [
    'Starbucks Silver Halo Award 2026',
    'Engage for Good Halo Award Best Local-Impact Initiative',
    'Starbucks scheduled ordering launch date',
    'Starbucks Mobile Order Pay scheduled pickup',
    'Starbucks app scheduled order May 2026',
    'Starbucks Foundation community award',
    'Starbucks partners community impact 2026',
    'Starbucks scheduled ordering North America',
    'Starbucks app update May 11 2026',
    'Starbucks mobile order one hour ahead',
    'Paul Riedel Starbucks digital loyalty',
    'Starbucks Halo Award TikTok branding',
    'Starbucks community coffeehouse initiative',
    'Starbucks customer experience upgrade 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Starbucks Wins 2026 Silver Halo Award & Launches Scheduled Ordering May 11',
    description:
      'Silver Halo Award for local community impact, plus a new scheduled pickup option launching May 11 across all North America Mobile Order & Pay locations.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire News Desk'],
    publishedTime: '2026-04-27T12:00:00Z',
    modifiedTime: '2026-04-27T12:00:00Z',
    section: 'News',
    tags: ['Starbucks', 'Halo Award', 'Mobile Ordering', 'Community Impact'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starbucks Wins Silver Halo Award | Scheduled Ordering Comes May 11',
    description:
      'Silver Halo for community impact, and starting May 11 you can schedule your pickup up to 1 hour ahead on the Starbucks app.',
  },
};

export default function EventsStarbucksHaloAwardScheduledOrderingMay2026Page() {
  return <NewsArticleDB slug="events-starbucks-halo-award-scheduled-ordering-may-2026" />;
}
