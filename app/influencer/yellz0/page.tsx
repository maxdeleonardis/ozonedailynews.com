import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Yellz0 (Aniela Verbin) | TikTok Star, Model & Content',
  description:
    'Full biography of Yellz0, real name Aniela Verbin. Pennsylvania-born TikTok star with 4M+ followers, model, and content creator known for lifestyle',
  keywords: [
    'Yellz0',
    'Aniela Verbin',
    'Yellz0 TikTok',
    'Yellz0 Instagram',
    'Yellz0 real name',
    'Yellz0 age',
    'Yellz0 model',
    'TikTok creator biography',
    'Pennsylvania creator',
    'social media creator',
  ],
  alternates: {
    canonical: 'https://www.owire.org/creator/yellz0',
  },
  openGraph: {
    title: 'Yellz0 (Aniela Verbin) | TikTok Star, Model & Content',
    description:
      'Profile of Yellz0: real name Aniela Verbin. Pennsylvania-born TikTok star with 4M+ followers, lifestyle model, and one of social media\'s most',
    type: 'article',
    url: 'https://www.owire.org/creator/yellz0',
    images: [{ url: '/influncer/yellz0_what_cup_size.PNG', width: 1200, height: 675 }],
    siteName: 'ObjectWire',
    authors: ['ObjectWire Creator Desk'],
    section: 'Creator',
    tags: ['Yellz0', 'TikTok', 'Model', 'Creator', 'Aniela Verbin', 'Content Creator'],
    publishedTime: '2026-02-21T12:00:00Z',
    modifiedTime: '2026-03-29T12:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yellz0 (Aniela Verbin) | TikTok Star & Model',
    description:
      'Full profile of Yellz0, real name Aniela Verbin. Pennsylvania-born TikTok creator with 4M+ followers, model, and content creator.',
  },
};

export default function Yellz0Page() {
  return <CreatorArticleDB slug="creator/yellz0" />;
}
