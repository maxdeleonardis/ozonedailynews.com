import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically â€” content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/resident-evil-requiem/steam-launch-record-267k-concurrent-players';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Resident Evil Requiem Shatters Steam Records â€” 267K Concurrent Players at Launch',
  description:
    'Resident Evil Requiem hit 267,509 concurrent Steam players on launch day February 27, 2026, nearly doubling Village and beating the RE4 remake record by',
  keywords: [
    'Resident Evil Requiem Steam record',
    'Resident Evil Requiem concurrent players',
    'Resident Evil Requiem PC launch 2026',
    'RE Requiem 267k Steam players',
    'Capcom Resident Evil Requiem sales',
    'Resident Evil Requiem SteamDB',
    'Resident Evil franchise Steam record',
    'RE Requiem vs RE4 remake players',
    'Resident Evil Requiem open zone horror',
    'Capcom survival horror 2026',
    'Resident Evil 9 launch numbers',
    'RE Requiem Steam charts',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Resident Evil Requiem Shatters Series Records â€” 267K Peak on Steam',
    description:
      '267,509 concurrent players. Nearly 100K above RE4 remake. More than double Village. Fourth most-played game on Steam at peak. Capcom\'s open-zone horror',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-01T00:00:00Z',
    modifiedTime: '2026-03-01T00:00:00Z',
    section: 'Gaming',
    tags: ['Resident Evil', 'Capcom', 'Steam', 'PC Gaming', 'Horror', 'Requiem'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RE Requiem Hits 267K on Steam â€” Biggest Resident Evil Launch Ever',
    description:
      'Capcom\'s ninth mainline entry obliterates franchise records. 267,509 concurrent players, nearly doubling Village and beating RE4 remake by 100K.',
  },
};

export default function RERequiemSteamLaunchPage() {
  return <NewsArticleDB slug="video-games-resident-evil-requiem-steam-launch-record-267k-concurrent-players" />;
}