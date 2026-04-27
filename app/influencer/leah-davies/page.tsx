import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/leah-davies';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';
const IMAGE_URL = OG_IMAGE;

export const metadata: Metadata = {
  title: 'Leah Davies | Age, House DJ Sets, TikTok, Instagram 2026',
  description:
    'Leah Davies (lleahdavies) is a UK house DJ with 25K+ TikTok followers and a Resident Advisor profile. Full bio: age, DJ sets, SoundCloud, Instagram, booking info 2026.',
  keywords: [
    'Leah Davies',
    'Leah Davies DJ',
    'lleahdavies',
    'Leah Davies TikTok',
    'Leah Davies Instagram',
    'Leah Davies age',
    'Leah Davies age 2026',
    'Leah Davies UK DJ',
    'Leah Davies house DJ',
    'Leah Davies Resident Advisor',
    'Leah Davies SoundCloud',
    'Leah Davies biography',
    'Leah Davies 2026',
    'UK house DJ TikTok',
    'lleahdavies TikTok',
    'UK female DJ 2026',
    'Leah Davies DJ sets',
    'UK DJ influencer',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Leah Davies | Age, House DJ Sets, TikTok & Instagram Bio 2026',
    description:
      'Full profile: Leah Davies (lleahdavies), UK house DJ. 25K+ TikTok followers, Resident Advisor profile, SoundCloud mixes, Pull Up Recordings booking.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    tags: ['Leah Davies', 'UK DJ', 'House Music', 'lleahdavies'],
    publishedTime: '2026-04-27T12:00:00Z',
    modifiedTime: '2026-04-27T12:00:00Z',
    images: [
      {
        url: `https://www.objectwire.org${IMAGE_URL}`,
        width: 1200,
        height: 675,
        alt: 'Leah Davies UK house DJ portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leah Davies | UK House DJ, 25K+ TikTok Followers',
    description:
      'Leah Davies (lleahdavies) is a rising UK house DJ with a Resident Advisor profile and Pull Up Recordings booking.',
  },
};

export default function InfluencerLeahDaviesPage() {
  return <CreatorArticleDB slug="influencer-leah-davies" />;
}
