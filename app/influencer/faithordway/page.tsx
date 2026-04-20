import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = 'influencer/faithordway';
const ARTICLE_URL = 'https://www.objectwire.org/influencer/faithordway';
const IMAGE_URL = '/influncer/faithordway.png';

export const metadata: Metadata = {
  title: 'Faith Ordway | TikTok Star, Fitness Creator & Model',
  description:
    'Full profile of Faith Ordway, TikTok star with 5M+ followers and 243M+ likes. Ohio-born dancer, fitness creator, YoungLA ambassador, and social media',
  keywords: [
    'Faith Ordway',
    'faithordway',
    'Faith Ordway TikTok',
    'Faith Ordway Instagram',
    'Faith Ordway YouTube',
    'Faith Ordway age',
    'Faith Ordway YoungLA',
    'TikTok star',
    'fitness influencer',
    'dance creator',
    'social media personality',
    'Faith Ordway music',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Faith Ordway | TikTok Star, Fitness Creator & Model',
    description:
      'Profile of Faith Ordway, Ohio-born TikTok star with 5M+ followers and 243M+ likes. Dance content, fitness, YoungLA ambassador, and music career.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    tags: ['Faith Ordway', 'TikTok', 'Influencer', 'Fitness', 'YoungLA', 'Dance Creator'],
    publishedTime: '2026-03-31T12:00:00Z',
    modifiedTime: '2026-03-31T12:00:00Z',
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Faith Ordway - TikTok Star and Fitness Creator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faith Ordway | TikTok Star, Fitness Creator & Model',
    description:
      'Full profile of Faith Ordway, TikTok star with 5M+ followers. Dance, fitness, YoungLA ambassador, and music.',
  },
};

export default function InfluencerFaithordwayPage() {
  return <CreatorArticleDB slug="influencer/faithordway" />;
}
