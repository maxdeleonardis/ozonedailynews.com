import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Tren Twins (Christian & Michael Gaiera) — Fitness Influencers & YoungLA Athletes | ObjectWire',
  description:
    'Full profile of the Tren Twins — Christian and Michael Gaiera. Michigan-born identical twins who became viral fitness influencers, bodybuilders, and YoungLA brand athletes. Their rise, controversies, and impact on gym culture.',
  keywords: [
    'Tren Twins',
    'Christian Gaiera',
    'Michael Gaiera',
    'Tren Twins YouTube',
    'Tren Twins fitness',
    'YoungLA Tren Twins',
    'Tren Twins bodybuilding',
    'Tren Twins steroids',
    'Tren Twins Chris Bumstead',
    'Tren Twins gym',
    'fitness influencers',
    'Tren Twins TikTok',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/tren-twins',
  },
  openGraph: {
    title: 'Tren Twins — Christian & Michael Gaiera | Fitness Influencers & YoungLA Athletes',
    description:
      'Profile of the Tren Twins: viral fitness influencers, YoungLA brand athletes, and one of the most talked-about duos in gym culture. Honest, raw, and built different.',
    type: 'article',
    url: 'https://www.objectwire.org/influencer/tren-twins',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'Influencer',
    tags: ['Tren Twins', 'Fitness', 'Bodybuilding', 'YoungLA', 'YouTube', 'Influencer'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tren Twins — Christian & Michael Gaiera | Fitness Influencers',
    description:
      'Full profile of the Tren Twins: Michigan-born bodybuilders, YoungLA athletes, and some of the most authentic fitness creators on the internet.',
  },
};

export default function TrenTwinsPage() {
  return <WikiArticle slug="influencer-tren-twins" />;
}
