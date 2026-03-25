import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Mythmatch — Gameplay, Story, Developer & Pricing | ObjectWire',
  description:
    "Complete guide to Mythmatch — the narrative merge-puzzle RPG from Team Artichoke. Released March 13, 2026 on Steam and macOS. Play as Artemis cast down by Olympus Inc., helping the women of Ithaca through a cozy, anti-capitalist town-building adventure on the world map.",
  keywords: [
    'Mythmatch',
    'Mythmatch game',
    'Team Artichoke',
    'Moo Yu developer',
    'merge puzzle RPG',
    'Greek mythology game 2026',
    'Mythmatch Steam',
    'Artemis game',
    'indie game SXSW',
    'Wholesome Direct game',
    'anti-capitalist game',
    'narrative puzzle RPG',
    'cozy game 2026',
    'UK Games Fund',
    'LittleBigPlanet developer',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/mythmatch',
  },
  openGraph: {
    title: 'Mythmatch — Complete Guide: Gameplay, Story, Developer & Pricing',
    description:
      'Team Artichoke\'s Mythmatch launched March 13, 2026 on Steam. Play as Artemis rejected by "Olympus Inc." and help the women of Ithaca rebuild through a bow-powered merge-puzzle mechanic. $15.99 until March 27.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/mythmatch',
    siteName: 'ObjectWire',
    section: 'Video Games',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mythmatch — Indie Merge RPG Guide | ObjectWire',
    description:
      'Artemis vs. Olympus Inc. — Team Artichoke\'s cozy, anti-capitalist merge-puzzle RPG is out now on Steam. $15.99 (20% off) until March 27.',
  },
};

export default function MythmatchPage() {
  return <ArticlePageDB slug="video-games-mythmatch" />;
}
