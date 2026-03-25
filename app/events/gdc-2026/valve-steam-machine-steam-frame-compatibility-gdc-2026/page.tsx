import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = 'valve-steam-machine-steam-frame-compatibility-gdc-2026';
const CANONICAL = `https://www.objectwire.org/events/gdc-2026/${SLUG}`;

export const metadata: Metadata = {
  title: 'Valve Outlines Steam Machine & Steam Frame Compatibility Standards at GDC 2026 | ObjectWire',
  description: 'Valve presented compatibility requirements and development timelines for the Steam Machine desktop and Steam Frame VR headset at GDC 2026 — both remain on track for a 2026 launch despite RAM supply-chain delays.',
  keywords: [
    'Valve', 'Steam Machine', 'Steam Frame', 'GDC 2026', 'SteamOS', 'Steam Deck Verified',
    'Steam Machine Verified', 'Steam Frame Verified', 'Proton', 'Lepton', 'GDC San Francisco',
    'game developers conference 2026', 'VR headset', 'Snapdragon 8 Gen 3',
  ],
  openGraph: {
    title: 'Valve Outlines Steam Machine & Steam Frame Compatibility Standards at GDC 2026',
    description: 'Valve confirmed 2026 launch targets for Steam Machine and Steam Frame VR at GDC, publishing Verified certification requirements and blaming RAM shortages for ongoing delays.',
    type: 'article',
    publishedTime: '2026-03-11T18:00:00Z',
    authors: ['ObjectWire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valve at GDC 2026: Steam Machine & Steam Frame Compatibility Standards Revealed',
    description: 'Valve confirmed 2026 hardware targets, published Verified requirements, and blamed RAM shortages for delays at a GDC session attended by 450 developers.',
  },
  alternates: { canonical: CANONICAL },
};

export default function ValveGDC2026Article() {
  return <NewsArticleDB slug="events-gdc-2026-valve-steam-machine-steam-frame-compatibility-gdc-2026" />;
}
