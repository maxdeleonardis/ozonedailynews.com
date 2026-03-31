import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = 'influencer/kirstentoosweet';
const PAGE_URL = 'https://www.objectwire.org/influencer/kirstentoosweet';
const IMAGE_URL = '/influencer/kirstentoosweet/thumbnail.jpg';

export const metadata: Metadata = {
  title: 'Kirsten Toosweet | TikTok Creator & Lifestyle Influencer',
  description:
    'Full profile of Kirsten Toosweet, TikTok creator with 2.5M+ followers and 25M+ likes. Lifestyle, comedy, and beauty content across TikTok, Instagram, YouTube, and Snapchat.',
  keywords: [
    'Kirsten Toosweet',
    'kirstentoosweet',
    'Kirsten Toosweet TikTok',
    'Kirsten Toosweet Instagram',
    'Kirsten Toosweet YouTube',
    'Kirsten Toosweet age',
    'TikTok creator',
    'lifestyle influencer',
    'social media influencer',
    'beauty content creator',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Kirsten Toosweet | TikTok Creator & Lifestyle Influencer',
    description:
      'Profile of Kirsten Toosweet, TikTok lifestyle creator with 2.5M+ followers. Comedy, beauty, and day-in-the-life content across all major platforms.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    tags: ['Kirsten Toosweet', 'TikTok', 'Influencer', 'Lifestyle Creator', 'Instagram', 'YouTube'],
    publishedTime: '2026-03-31T12:00:00Z',
    modifiedTime: '2026-03-31T12:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kirsten Toosweet | TikTok Creator & Lifestyle Influencer',
    description:
      'Full profile of Kirsten Toosweet, TikTok creator with 2.5M+ followers. Lifestyle, comedy, and beauty content.',
  },
};

export default function InfluencerKirstentoosweetPage() {
  return <CreatorArticleDB slug="influencer/kirstentoosweet" />;
}
