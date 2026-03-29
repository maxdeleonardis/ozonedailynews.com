import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/youtube/chicos-toxicos/sava-schultz';

export const metadata: Metadata = {
  title: 'Sava Schultz | TikTok Star, OnlyFans Model & Social Media Influencer | ObjectWire',
  description:
    'Who is Sava Schultz? American TikTok star Sava Schultz (@savaschulz) is a viral dance, lip sync, and fitness content creator and OnlyFans model. Full profile, age, net worth, height, boyfriend, and social media links.',
  keywords: [
    'Sava Schultz',
    'who is Sava Schultz',
    'Sava Schultz TikTok',
    'Sava Schultz OnlyFans',
    'savaschulz TikTok',
    'Sava Schultz age',
    'Sava Schultz height',
    'Sava Schultz net worth',
    'Sava Schultz boyfriend',
    'Sava Schultz Instagram',
    'Sava Schultz famous for',
    'American TikTok star',
    'TikTok dancer',
    'social media influencer',
    'OnlyFans model',
    'Sava Schultz 2026',
    'fitness TikTok creator',
    'Sava Schultz lip sync',
    'Sava Schultz dance videos',
    'Gen-Z influencer',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/chicos-toxicos/sava-schultz',
  },
  openGraph: {
    title: 'Sava Schultz | TikTok Star & Social Media Influencer',
    description:
      'Full profile of Sava Schultz: the American TikTok star known for viral dance, lip sync, and fitness content. Age, height, net worth, boyfriend, and social links on ObjectWire.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/chicos-toxicos/sava-schultz',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'Influencer',
    tags: ['Sava Schultz', 'TikTok', 'OnlyFans', 'Dance', 'Fitness'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sava Schultz | TikTok Star & Social Media Influencer',
    description:
      'Who is Sava Schultz? Full profile of the viral American TikTok star, OnlyFans model, and fitness content creator.',
  },
};

export default function SavaSchultzPage() {
  return <WikiArticle slug="youtube-chicos-toxicos-sava-schultz" />;
}
