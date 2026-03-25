import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/slay-the-spire-2';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Shatters Records and Briefly "Slays" Steam — 430K Peak Players | ObjectWire',
  description:
    'Slay the Spire 2 hit 430,456 concurrent Steam players within 24 hours of Early Access launch on March 5, 2026, crashing the Steam cart system and setting the all-time roguelike record.',
  keywords: [
    'Slay the Spire 2 launch',
    'Slay the Spire 2 concurrent players',
    'Slay the Spire 2 Steam record',
    'Mega Crit Slay the Spire 2',
    'Slay the Spire 2 Early Access',
    'roguelike Steam record 2026',
    'Slay the Spire 2 co-op',
    'Slay the Spire 2 Godot Engine',
    'Slay the Spire 2 characters',
    'Steam cart crash March 2026',
    'Slay the Spire 2 review',
    'indie game record 2026',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Slay the Spire 2 Shatters Records — 430K Peak, Steam Cart Crash, 97% Positive Reviews',
    description:
      'Mega Crit\'s sequel hit 430,456 concurrent players within 24 hours, crashed the Steam store for 30 minutes, and set the all-time roguelike concurrent player record.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: PUBLISH_ISO,
    modifiedTime: PUBLISH_ISO,
    section: 'Gaming',
    tags: ['Slay the Spire 2', 'Mega Crit', 'Steam', 'Roguelike', 'Indie Games', 'Early Access'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slay the Spire 2 Hits 430K Concurrent — Crashes Steam, Sets Roguelike Record',
    description:
      'The $24.99 sequel launched into Early Access on March 5, crashed Steam\'s cart system, and peaked at 430,456 concurrent players by day two.',
  },
};

export default function SlayTheSpire2LaunchPage() {
  return <NewsArticleDB slug="video-games-new-slay-the-spire-2" />;
}
