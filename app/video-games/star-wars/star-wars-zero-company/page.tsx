import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/star-wars/star-wars-zero-company';
const OG_IMAGE = 'https://images.unsplash.com/photo-1772303142584-c6897b8fa57c?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Star Wars Zero Company | Bit Reactor and Respawn Reveal',
  description:
    'Star Wars Zero Company is a Clone Wars-era tactical RPG from Bit Reactor and Respawn. Grid combat, permadeath, Mass Effect-style exploration. Holiday 2026.',
  keywords: [
    'Star Wars Zero Company',
    'Star Wars Zero Company gameplay',
    'Bit Reactor tactical RPG',
    'Respawn Entertainment Star Wars',
    'Star Wars Zero Company release date',
    'Star Wars Zero Company permadeath',
    'Clone Wars tactical game 2026',
    'Star Wars XCOM',
    'Star Wars Zero Company PC Gamer preview',
    'Star Wars Zero Company Holiday 2026',
  ],
  alternates: {
    canonical: `https://www.ozonenetwork.news${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Star Wars Zero Company | Bit Reactor and Respawn Tactical',
    description:
      'Star Wars Zero Company blends XCOM-style tactics with Mass Effect exploration and permadeath in a Clone Wars setting. Holiday 2026 on PC, PS5, Xbox Series',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'ObjectWire',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: 'Star Wars Zero Company tactical RPG by Bit Reactor and Respawn',
      },
    ],
    publishedTime: '2026-03-30T12:00:00Z',
    section: 'Gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Star Wars Zero Company | Clone Wars Tactical RPG | Holiday',
    description:
      'Bit Reactor and Respawn\'s Star Wars Zero Company combines grid-based tactics, permadeath clone DNA, and Mass Effect-style hubs. Holiday 2026.',
    images: [`https://www.ozonenetwork.news${SLUG}/og`],
  },
};

export default function VideoGamesStarWarsStarWarsZeroCompanyPage() {
  return <ArticlePageDB slug="video-games-star-wars-star-wars-zero-company" />;
}
