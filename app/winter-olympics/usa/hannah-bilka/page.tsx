import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Hannah Bilka | Team USA Ice Hockey | From Texas to the',
  description: 'Profile of Hannah Bilka, the Coppell, Texas native who defied the odds to become an Olympic ice hockey star. From playing on boys\' teams in Dallas to',
  keywords: ['Hannah Bilka', 'Team USA', 'ice hockey', 'Winter Olympics', 'Milan Cortina 2026', 'Coppell Texas', 'womens hockey', 'PWHL', 'Seattle Torrent'],
  openGraph: {
    title: 'Hannah Bilka | From Texas to Team USA Olympic Ice Hockey',
    description: 'How a girl from Coppell, Texas became one of America\'s brightest hockey stars at Milan Cortina 2026',
    type: 'article',
    publishedTime: '2026-02-14T22:00:00Z',
    authors: ['ObjectWire Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hannah Bilka | Texas to Team USA',
    description: 'The remarkable journey of Coppell\'s Hannah Bilka to Olympic ice hockey glory',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/usa/hannah-bilka',
  },
};

export default function HannahBilkaProfile() {
  return <WikiArticle slug="winter-olympics-usa-hannah-bilka" />;
}
