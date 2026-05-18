import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/bufalika';
const ARTICLE_URL = `https://www.owire.org${SLUG}`; // restored by wiki:publish
const PAGE_URL = ARTICLE_URL;
const OG_IMAGE = '';
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Bufalika | Net Worth, Age, Instagram, OnlyFans, Telegram 2026',
  description:
    'Bufalika is a lifestyle creator and model known for Instagram and OnlyFans. Full bio: estimated net worth, age, Telegram, social handles, and 2026 creator profile.',
  keywords: [
    'Bufalika',
    'Bufalika age',
    'Bufalika age 2026',
    'Bufalika net worth',
    'Bufalika Instagram',
    'Bufalika OnlyFans',
    'Bufalika Telegram',
    'Bufalika TikTok',
    'Bufalika real name',
    'Bufalika biography',
    'Bufalika 2026',
    'Bufalika content creator',
    'Bufalika model',
    'bufalika social media',
    'Bufalika exclusive content',
    'creator OnlyFans profile 2026',
    'lifestyle creator biography',
    'bufalika height',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Bufalika | Net Worth, Age, Instagram, OnlyFans & Telegram 2026',
    description:
      'Full profile: Bufalika, lifestyle creator. Estimated net worth, age, Instagram, OnlyFans, Telegram, and 2026 creator summary.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    section: 'Creator',
    tags: ['Bufalika', 'Creator', 'OnlyFans', 'Instagram', 'Creator'],
    publishedTime: '2026-04-27T12:00:00Z',
    modifiedTime: '2026-04-27T12:00:00Z',
    images: [{ url: `https://www.owire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'Bufalika portrait' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bufalika | Net Worth, Age, OnlyFans, Telegram 2026',
    description: 'Bufalika: estimated net worth, age, Instagram, OnlyFans, Telegram, and full 2026 creator profile.',
  },
};

export default function CreatorBufalikaPage() {
  return <CreatorArticleDB slug="creator-bufalika" />;
}
