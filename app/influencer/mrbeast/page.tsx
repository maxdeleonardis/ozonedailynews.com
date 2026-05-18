import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/mrbeast';
const ARTICLE_URL = `https://www.owire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '/influncer/usa/mr_beast.png';

export const metadata: Metadata = {
  title: 'MrBeast | Jimmy Donaldson, YouTube, Age, Bio 2026',
  description:
    'MrBeast (Jimmy Donaldson) is the most-subscribed solo YouTube creator, with 350M+ subscribers. Full biography, YouTube analytics, Beast Games, Feastables,',
  keywords: [
    'MrBeast',
    'MrBeast YouTube',
    'MrBeast subscribers',
    'Jimmy Donaldson',
    'MrBeast age',
    'MrBeast age 2026',
    'MrBeast net worth',
    'MrBeast Beast Games',
    'MrBeast Feastables',
    'MrBeast philanthropy',
    'MrBeast biography',
    'MrBeast 2026',
    'most subscribed YouTube channel',
    'MrBeast controversy',
    'Beast Games Amazon Prime',
    'MrBeast Burger',
    'MrBeast real name',
  ],
  alternates: {
    canonical: `https://www.owire.org${SLUG}`,
  },
  openGraph: {
    title: 'MrBeast | 350M Subscribers, Beast Games & Full Bio 2026',
    description:
      'Jimmy Donaldson, known as MrBeast, is the most-subscribed solo creator on YouTube. Bio, YouTube analytics, Beast Games Season 1 controversy, and brand',
    type: 'article',
    url: `https://www.owire.org${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    section: 'Creator',
    publishedTime: '2026-04-22T10:00:00Z',
    modifiedTime: '2026-04-22T10:00:00Z',
    tags: ['MrBeast', 'YouTube', 'Jimmy Donaldson', 'Creator'],
    images: [
      {
        url: 'https://www.owire.org/influncer/usa/mr_beast.png',
        width: 1200,
        height: 675,
        alt: 'MrBeast, Jimmy Donaldson, most-subscribed solo YouTube creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MrBeast | 350M YouTube Subscribers, Beast Games, Bio 2026',
    description:
      'Jimmy Donaldson profile: YouTube analytics, Beast Games Season 1, Feastables brand, philanthropy, and controversy timeline.',
    images: ['https://www.owire.org/influncer/usa/mr_beast.png'],
  },
};

export default function CreatorMrbeastPage() {
  return <ArticlePageDB slug="creator-mrbeast" />;
}
