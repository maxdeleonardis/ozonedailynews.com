import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/infamous-remake-collection';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
// TODO: replace BG_IMAGE with official inFamous press art uploaded to Supabase Storage
// Workflow: press kit screenshot → upload to blog-images/og-backgrounds/infamous-remake-collection.jpg
// Then set: const BG_IMAGE = 'https://kzcwclprrtonpsnownbl.supabase.co/storage/v1/object/public/blog-images/og-backgrounds/infamous-remake-collection.jpg';
const BG_IMAGE = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=675&fit=crop'; // neon city cyberpunk placeholder
const OG_IMAGE = `https://www.ozonenetwork.news/api/og?title=PlayStation+Working+on+inFamous+Remake+Collection&category=Gaming&author=Max+DeLeonardis&date=May+16+2026&bg=${encodeURIComponent(BG_IMAGE)}`;

export const metadata: Metadata = {
  title: 'inFamous Remake Collection | PlayStation Studios, Not Sucker Punch',
  description:
    'VGC journalist Jordan Middler says he believes Sony has an inFamous project underway at a PlayStation Studios team separate from original developer Sucker Punch, reviving the franchise dormant since 2014.',
  keywords: [
    'inFamous remake',
    'inFamous collection PlayStation',
    'inFamous PlayStation Studios 2026',
    'inFamous remake Sucker Punch',
    'Jordan Middler inFamous',
    'PlayStation inFamous announcement',
    'inFamous remaster PS5',
    'inFamous Second Son remake',
    'Sucker Punch next game',
    'PlayStation Studios remake 2026',
    'inFamous franchise return',
    'Sony PlayStation exclusive 2026',
    'inFamous new game',
    'inFamous 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'inFamous Remake Collection | PlayStation Studios, Not Sucker Punch',
    description:
      'VGC journalist Jordan Middler says a separate PlayStation Studios team, not Sucker Punch, has an inFamous project underway.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    publishedTime: '2026-05-16T08:00:00Z',
    modifiedTime: '2026-05-16T08:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'inFamous remake collection PlayStation Studios 2026' }],
    tags: ['inFamous', 'PlayStation Studios', 'Sony', 'Sucker Punch'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'inFamous Is Coming Back, Not From Sucker Punch',
    description: 'Jordan Middler: Sony has an inFamous project at a separate PlayStation Studios team. Franchise silent since 2014.',
    images: [OG_IMAGE],
  },
};

export default function InfamousRemakeCollectionPage() {
  return <NewsArticleDB slug="video-games-news-infamous-remake-collection" />;
}
