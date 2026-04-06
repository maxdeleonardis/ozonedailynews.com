import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/earth/news/who-owns-the-ocean-floor';

export const metadata: Metadata = {
  title: "Who Owns the Ocean Floor? The Legal Battle Over Deep-Sea Mining Rights",
  description:
    "No single country owns the deep ocean floor, but that hasn't stopped nations and corporations from racing to claim it. Here's how international law",
  keywords: [
    'who owns the ocean floor international law',
    'deep sea mining rights UNCLOS 2026',
    'International Seabed Authority deep sea mining',
    'which country owns the deep ocean floor',
    'UNCLOS exclusive economic zone seabed rights',
    'deep sea mining legal framework international waters',
    'common heritage of mankind ocean floor law',
    'ISA mining license deep sea polymetallic nodules',
    'US deep sea mining UNCLOS not ratified',
    'deep ocean floor ownership national jurisdiction',
    'Clarion Clipperton Zone mining rights treaty',
    'Trump deep sea mining executive order 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Who Owns the Ocean Floor? The Legal Battle Over Deep-Sea Mining Rights",
    description:
      "The deep ocean is technically nobody's, and everybody's. As the race to mine it intensifies, the international legal framework governing the seabed is",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: ['/earth/pexels-george-desipris-726478.jpg'],
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-02-20T12:00:00Z',
    modifiedTime: '2026-02-20T12:00:00Z',
    section: 'Earth & Environment',
    tags: ['Ocean Floor', 'Deep Sea Mining', 'UNCLOS', 'International Law', 'ISA', 'Seabed Rights', 'Critical Minerals'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Who Owns the Ocean Floor? Nobody. Everybody. That's the Problem.",
    description:
      "The deep seabed is governed by a 1982 treaty the US never ratified. As corporations and nations race to mine it, the legal framework is under serious",
  },
};

export default function WhoOwnsOceanFloorPage() {
  return <NewsArticleDB slug="earth-news-who-owns-the-ocean-floor" />;
}
