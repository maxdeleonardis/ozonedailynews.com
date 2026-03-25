import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/yellz0';

export const metadata: Metadata = {
  title: 'Yellz0 (Aniela Verbin) - Social Media Influencer & Model | ObjectWire',
  description:
    'Full biography of Yellz0, real name Aniela Verbin. Pennsylvania-born TikTok star, model, and content creator known for lifestyle content, her signature blonde look, and millions of followers across social media.',
  keywords: [
    'Yellz0',
    'Aniela Verbin',
    'Yellz0 TikTok',
    'Yellz0 Instagram',
    'Yellz0 YouTube',
    'Yellz0 OnlyFans',
    'Yellz0 real name',
    'Yellz0 age',
    'Yellz0 bra size',
    'Yellz0 measurements',
    'Yellz0 model',
    'social media influencer',
    'TikTok model',
    'Pennsylvania influencer',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/yellz0',
  },
  openGraph: {
    title: 'Yellz0 (Aniela Verbin) - TikTok Star, Model & Content Creator',
    description:
      'Profile of Yellz0: real name Aniela Verbin. Pennsylvania-born TikTok star, lifestyle model, and one of social media\'s most recognizable faces. Full biography, facts, and coverage.',
    type: 'article',
    url: 'https://www.objectwire.org/influencer/yellz0',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'Influencer',
    tags: ['Yellz0', 'TikTok', 'Model', 'Influencer', 'Social Media', 'Aniela Verbin'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yellz0 (Aniela Verbin) - TikTok Star & Model',
    description:
      'Full profile of Yellz0, real name Aniela Verbin. Pennsylvania-born TikTok influencer, model, and content creator.',
  },
};

export default function Yellz0Page() {
  return <WikiArticle slug="influencer-yellz0" />;
}
