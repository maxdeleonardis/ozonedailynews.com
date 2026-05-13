import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/colleen-sheehan';
const ARTICLE_URL = `https://www.owire.org${SLUG}`; // restored by wiki:publish
const PAGE_URL = ARTICLE_URL;
const OG_IMAGE = '';
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Colleen Sheehan | Age, Height, TikTok, Instagram 2026',
  description:
    'Colleen Sheehan (colleen.333) is a Boston-based model born June 7, 2004. Full bio: age, height, net worth, 757K+ Instagram, TikTok, fashion, festival, cosplay content.',
  keywords: [
    'Colleen Sheehan',
    'colleen.333',
    'Colleen Sheehan age',
    'Colleen Sheehan age 2026',
    'Colleen Sheehan height',
    'Colleen Sheehan net worth',
    'Colleen Sheehan Instagram',
    'Colleen Sheehan TikTok',
    'Colleen Sheehan real name',
    'Colleen Sheehan Boston',
    'Colleen Sheehan biography',
    'Colleen Sheehan 2026',
    'colleen.333 Instagram',
    'colleen.333 TikTok',
    'colleen 333 model',
    'Boston creator model',
    'cosplay fashion creator',
    'festival creator Instagram',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Colleen Sheehan | Age, Height, Instagram & TikTok Bio 2026',
    description:
      'Full profile: Colleen Sheehan (colleen.333), Boston model born 2004. Age, height, net worth, 757K+ Instagram followers, TikTok, fashion and cosplay content.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Creator Desk'],
    section: 'Creator',
    tags: ['Colleen Sheehan', 'colleen.333', 'Creator', 'Instagram', 'Boston'],
    publishedTime: '2026-04-27T12:00:00Z',
    modifiedTime: '2026-04-27T12:00:00Z',
    images: [{ url: `https://www.owire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'Colleen Sheehan portrait' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colleen Sheehan | Age, 757K Instagram, Boston Model 2026',
    description: 'Colleen Sheehan (colleen.333): age, height, net worth, TikTok, Instagram, fashion, festival, cosplay creator from Boston.',
  },
};

export default function CreatorColleenSheehanPage() {
  return <CreatorArticleDB slug="creator-colleen-sheehan" />;
}
