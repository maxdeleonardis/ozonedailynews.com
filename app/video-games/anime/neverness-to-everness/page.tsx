import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Neverness to Everness | 30M Pre-Registrations, April 29 Launch | ObjectWire',
  description:
    'Neverness to Everness tops 30 million pre-registrations ahead of its April 29, 2026 global launch. Free A-Class character Haniel unlocked for all players at launch.',
  keywords: [
    'Neverness to Everness pre-registration',
    'Neverness to Everness release date',
    'Neverness to Everness April 2026',
    'Hotta Studio open world RPG',
    'anime GTA game 2026',
    'Neverness to Everness Haniel',
    'Hethereau open world game',
    'Perfect World Games RPG',
    'Neverness to Everness gacha',
    'free to play open world 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Neverness to Everness Tops 30M Pre-Registrations | Launches April 29, 2026 | ObjectWire',
    description:
      'Hotta Studio\'s open-world anime RPG hits 30M pre-registrations. Free A-Class character Haniel unlocked at launch. Global release April 29, 2026.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [
      {
        url: `https://www.objectwire.org${OG_IMAGE}`,
        width: 1200,
        height: 675,
        alt: 'Neverness to Everness open world anime RPG 2026',
      },
    ],
    publishedTime: '2026-03-30T12:00:00Z',
    section: 'Gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neverness to Everness | 30M Pre-Regs, Free Haniel at Launch | ObjectWire',
    description:
      'Anime GTA hits 30M pre-registrations. Haniel is free for all players. Global launch April 29, 2026.',
    images: [`https://www.objectwire.org${OG_IMAGE}`],
  },
};

export default function VideoGamesAnimeNevernessToEvernessPage() {
  return <ArticlePageDB slug="video-games-anime-neverness-to-everness" />;
}
