import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/abby-berner';
const ARTICLE_URL = `https://www.owire.org${SLUG}`; // restored by wiki:publish
const PAGE_URL = ARTICLE_URL;
const OG_IMAGE = '/influncer/usa/abby_berner.png';
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Abby Berner | Age, Height, Net Worth, TikTok 2026',
  description:
    'Abby Berner is a US fitness creator born September 1, 2000. Full bio: age, height 5\'6", net worth, 5M+ TikTok, 1M+ Instagram, Snapchat, Telegram, tattoos, and 2026 creator profile.',
  keywords: [
    'Abby Berner',
    'Abby Berner age',
    'Abby Berner age 2026',
    'Abby Berner height',
    'Abby Berner net worth',
    'Abby Berner TikTok',
    'Abby Berner Instagram',
    'Abby Berner Snapchat',
    'Abby Berner Telegram',
    'Abby Berner OnlyFans',
    'Abby Berner tattoos',
    'Abby Berner real name',
    'Abby Berner biography',
    'Abby Berner 2026',
    'Abby Berner fitness',
    'Abby Berner model',
    'abby berner boyfriend',
    'US fitness creator TikTok',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Abby Berner | Age, Height, Net Worth & Bio 2026',
    description:
      'Full profile: Abby Berner, US fitness creator. Age, height 5\'6", net worth, 5M+ TikTok, 1M+ Instagram, Snapchat, Telegram, tattoos.',
    tags: ['Abby Berner', 'Creator', 'TikTok', 'Fitness', 'Model'],
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    section: 'Creator',
    publishedTime: '2026-04-27T12:00:00Z',
    modifiedTime: '2026-04-27T12:00:00Z',
    images: [{ url: `https://www.owire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'Abby Berner portrait' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abby Berner | Age, Height, 5M TikTok, Net Worth 2026',
    description: 'Abby Berner: age, height 5\'6", net worth, TikTok, Instagram, Snapchat, Telegram, tattoos, full 2026 profile.',
  },
};

export default function CreatorAbbyBernerPage() {
  return <CreatorArticleDB slug="creator-abby-berner" />;
}
