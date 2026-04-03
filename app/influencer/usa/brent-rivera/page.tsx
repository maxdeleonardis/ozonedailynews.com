import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/usa/brent-rivera';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/influncer/usa/brentrivera.png';

export const metadata: Metadata = {
  title: 'Brent Rivera | Age, YouTube, Instagram, TikTok, Bio 2026',
  description:
    'Brent Rivera is a Huntington Beach-born YouTuber and Amp Studios CEO, 28 in 2026, with 41M+ YouTube subscribers. Full biography, Dream Vacation series, Alexander IRL film, and social media links.',
  keywords: [
    'Brent Rivera',
    'Brent Rivera age',
    'Brent Rivera age 2026',
    'Brent Rivera YouTube',
    'Brent Rivera Instagram',
    'Brent Rivera TikTok',
    'Brent Rivera biography',
    'Brent Rivera real name',
    'Brent Rivera Lexi Rivera',
    'Brent Rivera Ben Azelart',
    'Brent Rivera Amp Studios',
    'Brent Rivera subscribers',
    'Brent Rivera 2026',
    'Brent Rivera MrBrent98',
    'Brent Rivera Dream Vacation',
    'USA YouTube creator',
    'challenge YouTuber California',
    'Brent Rivera Huntington Beach',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Brent Rivera | Age, YouTube, Instagram & Bio 2026',
    description:
      'Full profile of Brent Rivera, Huntington Beach YouTuber and Amp Studios CEO, 28 in 2026. YouTube: 41M subscribers. Formerly MrBrent98. Film: Alexander IRL. Co-founded Amp Studios.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    tags: ['Brent Rivera', 'YouTuber', 'California', 'Amp Studios', 'Lexi Rivera'],
    publishedTime: '2026-04-02T15:00:00Z',
    modifiedTime: '2026-04-02T15:00:00Z',
    images: [
      {
        url: `https://www.objectwire.org${IMAGE_URL}`,
        width: 1200,
        height: 675,
        alt: 'Brent Rivera, YouTuber and Amp Studios CEO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brent Rivera | 41M YouTube, Amp Studios CEO, Bio 2026',
    description:
      'Brent Rivera profile: age 28, Huntington Beach CA, formerly MrBrent98, Amp Studios co-founder, collaborated with Ben Azelart and Lexi Rivera.',
  },
};

export default function InfluencerUsaBrentRiveraPage() {
  return <CreatorArticleDB slug="influencer-usa-brent-rivera" />;
}
