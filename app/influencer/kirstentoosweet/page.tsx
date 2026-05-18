import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = 'creator/kirstentoosweet';
const ARTICLE_URL = 'https://www.owire.org/creator/kirstentoosweet';
const IMAGE_URL = '/influncer/kristentoosweet.png';

export const metadata: Metadata = {
  title: 'Kirsten Toosweet | TikTok Creator & Lifestyle Creator',
  description:
    'Full profile of Kirsten Toosweet, TikTok creator with 2.5M+ followers and 25M+ likes. Lifestyle, comedy, and beauty content across TikTok, Instagram,',
  keywords: [
    'Kirsten Toosweet',
    'kirstentoosweet',
    'Kirsten Toosweet TikTok',
    'Kirsten Toosweet Instagram',
    'Kirsten Toosweet YouTube',
    'Kirsten Toosweet age',
    'TikTok creator',
    'lifestyle creator',
    'social media creator',
    'beauty content creator',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Kirsten Toosweet | TikTok Creator & Lifestyle Creator',
    description:
      'Profile of Kirsten Toosweet, TikTok lifestyle creator with 2.5M+ followers. Comedy, beauty, and day-in-the-life content across all major platforms.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Creator Desk'],
    section: 'Creator',
    tags: ['Kirsten Toosweet', 'TikTok', 'Creator', 'Lifestyle Creator', 'Instagram', 'YouTube'],
    publishedTime: '2026-03-31T12:00:00Z',
    modifiedTime: '2026-03-31T12:00:00Z',
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Kirsten Toosweet - TikTok Creator and Lifestyle Creator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kirsten Toosweet | TikTok Creator & Lifestyle Creator',
    description:
      'Full profile of Kirsten Toosweet, TikTok creator with 2.5M+ followers. Lifestyle, comedy, and beauty content.',
  },
};

export default function CreatorKirstentoosweetPage() {
  return <CreatorArticleDB slug="creator/kirstentoosweet" />;
}
