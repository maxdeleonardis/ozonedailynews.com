import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';
// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Resident Evil Requiem Shatters Steam Records — 267K Concurrent Players at Launch | ObjectWire',
  description:
    'Resident Evil Requiem hit 267,509 concurrent Steam players on launch day February 27, 2026, nearly doubling Village and beating the RE4 remake record by 100,000 players.',
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
  alternates: { canonical: 'https://www.objectwire.org/video-games/resident-evil-requiem/steam-launch-record-267k-concurrent-players' },
  openGraph: {
    title: 'Resident Evil Requiem Shatters Series Records — 267K Peak on Steam',
    description:
      '267,509 concurrent players. Nearly 100K above RE4 remake. More than double Village. Fourth most-played game on Steam at peak. Capcom\'s open-zone horror gamble pays off.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/resident-evil-requiem/steam-launch-record-267k-concurrent-players',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-03-06T16:00:00Z',
    modifiedTime: '2026-03-06T16:00:00Z',
    section: 'Gaming',
    tags: ['Resident Evil', 'Capcom', 'Steam', 'PC Gaming', 'Horror', 'Requiem'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RE Requiem Hits 267K on Steam — Biggest Resident Evil Launch Ever',
    description:
      'Capcom\'s ninth mainline entry obliterates franchise records. 267,509 concurrent players, nearly doubling Village and beating RE4 remake by 100K.',
  },
};

export default function SteamLaunchRecord267kConcurrentPlayersPage() {
  return <WikiArticle slug="/video-games/resident-evil-requiem/steam-launch-record-267k-concurrent-players" />;
}
