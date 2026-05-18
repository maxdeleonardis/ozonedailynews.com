import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/miranda-marie';
const ARTICLE_URL = `https://www.owire.org${SLUG}`; // restored by wiki:publish
const PAGE_URL = ARTICLE_URL;
const OG_IMAGE = '';
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Miranda Marie | Age, Height, OFTV, Instagram, TikTok 2026',
  description:
    'Miranda Marie (itsmirandahmarie) is a Florida creator on OFTV and Instagram with 730K+ followers. Full bio: age, height, net worth, TikTok, Twitch, nature and wildlife content.',
  keywords: [
    'Miranda Marie',
    'mirandahmarie',
    'itsmirandahmarie',
    'Miranda Marie age',
    'Miranda Marie age 2026',
    'Miranda Marie height',
    'Miranda Marie net worth',
    'Miranda Marie Instagram',
    'Miranda Marie TikTok',
    'Miranda Marie OFTV',
    'Miranda Marie Twitch',
    'Miranda Marie Florida',
    'Miranda Marie biography',
    'Miranda Marie 2026',
    'Miranda Marie OnlyFans TV',
    'itsmirandahmarie Instagram',
    'Florida nature creator',
    'Raccoon Island Miami creator',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Miranda Marie | Age, Height, OFTV & Instagram Bio 2026',
    description:
      'Full profile: Miranda Marie (itsmirandahmarie), Florida creator on OFTV and Instagram. Age, height, net worth, TikTok, Twitch, nature and wildlife content 2026.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    section: 'Creator',
    tags: ['Miranda Marie', 'OFTV', 'Instagram', 'Florida', 'Creator'],
    publishedTime: '2026-04-27T12:00:00Z',
    modifiedTime: '2026-04-27T12:00:00Z',
    images: [{ url: `https://www.owire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'Miranda Marie portrait' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miranda Marie | Age, Height, OFTV, 730K Instagram 2026',
    description: 'Miranda Marie (itsmirandahmarie): age, height, net worth, OFTV, TikTok, Twitch, Florida nature creator full 2026 profile.',
  },
};

export default function CreatorMirandaMariePage() {
  return <CreatorArticleDB slug="creator-miranda-marie" />;
}
