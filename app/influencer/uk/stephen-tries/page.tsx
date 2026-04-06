import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/uk/stephen-tries';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/influncer/uk/stephen_tries.png';

export const metadata: Metadata = {
  title: 'Stephen Tries | Age, YouTube, Instagram, Bio 2026',
  description:
    'Stephen Tries (Stephen Lawson) is a British comedian and YouTuber from Norwich, 30 in 2026, with 1.6M+ subscribers. Full biography, "How To" series,',
  keywords: [
    'Stephen Tries',
    'Stephen Tries age',
    'Stephen Tries age 2026',
    'Stephen Tries real name',
    'Stephen Tries YouTube',
    'Stephen Tries Instagram',
    'Stephen Tries TikTok',
    'Stephen Tries Sidemen',
    'Stephen Tries Norwich',
    'Stephen Tries Stephen Lawson',
    'Stephen Tries biography',
    'Stephen Tries 2026',
    'UK YouTuber comedy',
    'How To Be Stormzy',
    'Stephen Tries subscribers',
    'British YouTuber',
    'UK comedy YouTube',
    'Stephen Tries How To series',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Stephen Tries | Age, YouTube, Instagram & Bio 2026',
    description:
      'Full profile of Stephen Tries (real name: Stephen Lawson), Norwich comedian, 30 in 2026. YouTube: 1.6M subscribers. Known for "How To Be Stormzy" and UK',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    tags: ['Stephen Tries', 'UK YouTuber', 'Norwich', 'Comedy', 'Sidemen', 'YouTube'],
    publishedTime: '2026-04-02T14:00:00Z',
    modifiedTime: '2026-04-02T14:00:00Z',
    images: [
      {
        url: `https://www.objectwire.org${IMAGE_URL}`,
        width: 1200,
        height: 675,
        alt: 'Stephen Tries, British comedian and YouTuber',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stephen Tries | 1.6M YouTube, British Comedy, Bio 2026',
    description:
      'Stephen Tries profile: age 30, real name Stephen Lawson, "How To Be Stormzy" creator, Sidemen extended circle, Norwich-born UK YouTuber.',
  },
};

export default function InfluencerUkStephenTriesPage() {
  return <CreatorArticleDB slug="influencer-uk-stephen-tries" />;
}
