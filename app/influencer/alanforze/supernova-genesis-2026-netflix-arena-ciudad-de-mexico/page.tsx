import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/influencer/alanforze/supernova-genesis-2026-netflix-arena-ciudad-de-mexico';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Supernova Genesis 2026 | Netflix Live, Arena Ciudad de',
  description: 'Supernova: Genesis 2026 takes place April 26 at Arena Ciudad de Mexico, live exclusively on Netflix. Full card: Alana Flores vs Samadis, Nando vs Abraham,',
  keywords: [
    'Supernova Genesis 2026',
    'Supernova Genesis boxeo influencers',
    'Alana Flores boxeo',
    'Alana Flores vs Samadis',
    'Mario Bautista vs Aaron Mercury',
    'Nando vs Abraham boxeo',
    'boxeo influencers Mexico 2026',
    'Supernova Genesis Netflix',
    'Arena Ciudad de Mexico boxeo',
    'AlanForze Supernova',
    'Supernova Genesis pelea',
    'influencer boxing Mexico',
    'Netflix boxeo en vivo',
    'Supernova April 26 2026',
    'Mario Bautista pelea',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Supernova: Genesis 2026 | Netflix Live | Arena Ciudad de',
    description: 'The biggest influencer boxing event in Latin America. Supernova: Genesis 2026 goes live April 26 on Netflix from Arena Ciudad de Mexico.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Entertainment Desk'],
    publishedTime: '2026-04-19T18:00:00Z',
    modifiedTime: '2026-04-19T18:00:00Z',
    section: 'Entertainment',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Boxing ring under arena lights' }],
    tags: ['Supernova Genesis', 'Alana Flores', 'Mario Bautista', 'Netflix', 'Mexico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supernova: Genesis 2026 | Netflix Live | April 26, Arena',
    description: 'Alana Flores, Mario Bautista, Nando and more fight live on Netflix from Arena Ciudad de Mexico this Sunday.',
    images: [OG_IMAGE],
  },
};

export default function InfluencerAlanforzeSupernovaGenesis2026NetflixArenaCiudadDeMexicoPage() {
  return <NewsArticleDB slug="influencer-alanforze-supernova-genesis-2026-netflix-arena-ciudad-de-mexico" />;
}
