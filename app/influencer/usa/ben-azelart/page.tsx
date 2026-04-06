import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/usa/ben-azelart';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/influncer/usa/ben_azelart.png';

export const metadata: Metadata = {
  title: 'Ben Azelart | Age, YouTube, Instagram, TikTok, Bio 2026',
  description:
    'Ben Azelart is a Dallas-born YouTuber and skateboarder, 24 in 2026, with 49M+ YouTube subscribers and 15M+ TikTok fans. Full biography, Stay Wild brand,',
  keywords: [
    'Ben Azelart',
    'Ben Azelart age',
    'Ben Azelart age 2026',
    'Ben Azelart YouTube',
    'Ben Azelart Instagram',
    'Ben Azelart TikTok',
    'Ben Azelart biography',
    'Ben Azelart real name',
    'Ben Azelart Hannah Thomas',
    'Ben Azelart Lexi Rivera',
    'Ben Azelart Brent Rivera',
    'Ben Azelart skateboarder',
    'Ben Azelart Stay Wild',
    'Ben Azelart 2026',
    'Ben Azelart subscribers',
    'USA YouTube creator',
    'challenge YouTuber',
    'Ben Azelart Hawaii',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Ben Azelart | Age, YouTube, Instagram & Bio 2026',
    description:
      'Full profile of Ben Azelart, Dallas-born challenger and skateboarder, 24 in 2026. YouTube: 49M subscribers. TikTok: 15M fans. Engaged to Hannah Thomas,',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    tags: ['Ben Azelart', 'YouTuber', 'Texas', 'Skateboarder', 'Stay Wild'],
    publishedTime: '2026-04-02T14:30:00Z',
    modifiedTime: '2026-04-02T14:30:00Z',
    images: [
      {
        url: `https://www.objectwire.org${IMAGE_URL}`,
        width: 1200,
        height: 675,
        alt: 'Ben Azelart, YouTuber and skateboarder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ben Azelart | 49M YouTube, 15M TikTok, Bio 2026',
    description:
      'Ben Azelart profile: age 24, born Dallas TX, grew up Hawaii, skateboarder, challenge creator, Stay Wild founder, engaged to Hannah Thomas.',
  },
};

export default function InfluencerUsaBenAzelartPage() {
  return <CreatorArticleDB slug="influencer-usa-ben-azelart" />;
}
