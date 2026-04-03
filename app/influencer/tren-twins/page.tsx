import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/tren-twins';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = '/influncer/tren_twins_wiki.PNG';

export const metadata: Metadata = {
  title: 'Tren Twins | Christian & Michael Gaiera | Fitness Influencers',
  description:
    'Full profile of the Tren Twins, Christian and Michael Gaiera. Michigan-born identical twins who became viral fitness influencers, bodybuilders, and YoungLA brand athletes.',
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
    'fitness influencers',
    'Tren Twins TikTok',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Tren Twins | Christian & Michael Gaiera | Fitness Influencers & YoungLA Athletes',
    description:
      'Profile of the Tren Twins: viral fitness influencers, YoungLA brand athletes, and one of the most talked-about duos in gym culture.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    tags: ['Tren Twins', 'Fitness', 'Bodybuilding', 'YoungLA', 'YouTube', 'Influencer'],
    publishedTime: '2026-03-31T12:00:00Z',
    modifiedTime: '2026-03-31T12:00:00Z',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Tren Twins - Christian and Michael Gaiera' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tren Twins | Christian & Michael Gaiera | Fitness Influencers',
    description:
      'Michigan-born identical twins, viral bodybuilders, YoungLA athletes. Full profile on ObjectWire.',
  },
};

export default function InfluencerTrenTwinsPage() {
  return <CreatorArticleDB slug="influencer-tren-twins" />;
}
