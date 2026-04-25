import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Arknights | Endfield Launches January 22, 2026 on PC',
  description:
    'Arknights: Endfield launched globally on January 22, 2026, for PC, iOS, Android, and PlayStation 5. The open-world action RPG from Hypergryph hit $173',
  keywords: [
    'Arknights Endfield',
    'Arknights Endfield launch',
    'Arknights Endfield PC PS5 mobile',
    'Hypergryph',
    'Gryphline',
    'open world action RPG 2026',
    'Arknights Endfield revenue',
    'Talos-II',
    'free to play gacha 2026',
    'Arknights Endfield gacha system',
    'Arknights Endfield release date',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/arknights-endfield',
  },
  openGraph: {
    title: 'Arknights | Endfield Launches January 22, 2026 -- $173M in',
    description:
      'Hypergryph shifts from tower defense to open-world action RPG with real-time combat and factory automation on Talos-II. 35M pre-registrations, $173M',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/arknights-endfield',
    siteName: 'ObjectWire',
    images: [{ url: '/video-games/endfield_gryphline.PNG' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arknights | Endfield -- $173M in Two Weeks After Jan 22',
    description:
      'Free-to-play open-world action RPG on PC, mobile, and PS5. 35M pre-registrations, cross-progression, factory automation, and 4-member real-time combat.',
  },
};

export default function ArkknightsEndfieldPage() {
  return <JackArticleDB slug="video-games-arknights-endfield" />;
}
