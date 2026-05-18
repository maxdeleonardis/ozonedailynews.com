import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/tren-twins';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;
const OG_IMAGE = '/influncer/tren_twins_wiki.PNG';

export const metadata: Metadata = {
  title: 'Tren Twins | Christian & Michael Gaiera | Fitness',
  description:
    'Full profile of the Tren Twins, Christian and Michael Gaiera. Michigan-born identical twins who became viral fitness creators, bodybuilders, and',
  keywords: [
    'Tren Twins',
    'Christian Gaiera',
    'Michael Gaiera',
    'Tren Twins YouTube',
    'Tren Twins fitness',
    'YoungLA Tren Twins',
    'Tren Twins bodybuilding',
    'Tren Twins steroids',
    'Tren Twins Chris Bumstead',
    'Tren Twins gym',
    'fitness creators',
    'Tren Twins TikTok',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Tren Twins | Christian & Michael Gaiera | Fitness',
    description:
      'Profile of the Tren Twins: viral fitness creators, YoungLA brand athletes, and one of the most talked-about duos in gym culture.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    section: 'Creator',
    tags: ['Tren Twins', 'Fitness', 'Bodybuilding', 'YoungLA', 'YouTube', 'Creator'],
    publishedTime: '2026-03-31T12:00:00Z',
    modifiedTime: '2026-03-31T12:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Tren Twins - Christian and Michael Gaiera' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tren Twins | Christian & Michael Gaiera | Fitness',
    description:
      'Michigan-born identical twins, viral bodybuilders, YoungLA athletes. Full profile on OzoneNews.',
  },
};

export default function CreatorTrenTwinsPage() {
  return <CreatorArticleDB slug="creator-tren-twins" />;
}
