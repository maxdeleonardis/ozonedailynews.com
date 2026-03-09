import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Influencer Hub â€” Profiles, News & Culture | ObjectWire',
  description:
    'ObjectWire\'s Influencer Hub: in-depth Wikipedia-style profiles, breaking news, and cultural coverage of the biggest names in content creation â€” fitness, YouTube, golf, and beyond.',
  keywords: [
    'influencer profiles',
    'influencer news 2026',
    'Logan Paul',
    'Tren Twins',
    'Bryson DeChambeau',
    'Iman Gadzhi',
    'MrBeast',
    'Diamond Gym',
    'fitness influencers',
    'content creators 2026',
    'influencer hub',
    'ObjectWire influencer',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer',
  },
  openGraph: {
    title: 'Influencer Hub â€” Profiles, News & Culture | ObjectWire',
    description:
      'In-depth profiles and breaking news covering the biggest influencers across fitness, YouTube, golf, and online culture. Updated 2026.',
    type: 'website',
    url: 'https://www.objectwire.org/influencer',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Hub | ObjectWire',
    description:
      'Profiles, news, and cultural coverage of the biggest names in content creation â€” ObjectWire Influencer Hub.',
  },
};

export default function InfluencerHubPage() {
  return <WikiArticle slug="influencer" />;
}
