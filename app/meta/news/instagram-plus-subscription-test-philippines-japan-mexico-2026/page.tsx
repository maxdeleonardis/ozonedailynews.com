import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/meta/news/instagram-plus-subscription-test-philippines-japan-mexico-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Instagram Plus Subscription | Meta Live Test Philippines',
  description:
    'Meta confirmed on March 30, 2026 that it is live-testing Instagram Plus in the Philippines, Japan, and Mexico. The premium tier unlocks Stealth Mode,',
  keywords: [
    'Instagram Plus subscription 2026',
    'Meta Instagram Plus live test',
    'Instagram premium subscription features',
    'Instagram Stealth Mode anonymous Stories',
    'Instagram Plus Philippines Japan Mexico',
    'Instagram Plus pricing 2026',
    'Meta subscription revenue strategy',
    'Snapchat Plus competitor Instagram',
    'Instagram Story Extend 48 hours',
    'Instagram Plus Superlikes Superheart',
    'Meta Manus AI agent Instagram',
    'Instagram Plus unlimited close friends lists',
    'Meta Verified vs Instagram Plus',
    'Instagram Plus Rewatch Counts feature',
    'Meta subscription monetization 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Meta Debuts Instagram Plus in First Live Subscription Test',
    description:
      'Instagram Plus rolls out in the Philippines, Japan, and Mexico with Stealth Mode, Story Extend, Rewatch Counts, and unlimited audience lists. Pricing',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-31T20:00:00Z',
    modifiedTime: '2026-03-31T20:00:00Z',
    section: 'Tech',
    tags: [
      'Meta',
      'Instagram',
      'Instagram Plus',
      'Subscription',
      'Social Media',
      'Meta Platforms',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Plus is real. Meta just confirmed a live test',
    description:
      'Stealth Mode lets you view Stories anonymously. Story Extend pushes your post to 48 hours. Starts at $1.07/month. U.S. launch TBD.',
  },
};

export default function MetaNewsInstagramPlusSubscriptionTestPhilippinesJapanMexico2026Page() {
  return <NewsArticleDB slug="meta-news-instagram-plus-subscription-test-philippines-japan-mexico-2026" />;
}
