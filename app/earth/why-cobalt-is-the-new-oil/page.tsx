import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/earth/why-cobalt-is-the-new-oil';

export const metadata: Metadata = {
  title: "Why Cobalt Is the New Oil | The Battery Metal Crunch",
  description:
    "Cobalt is the essential ingredient in every EV battery, and nearly 70% of it comes from a single conflict-torn country. As demand explodes and ethics",
  keywords: [
    'cobalt new oil battery metal 2026',
    'DRC cobalt mining human rights issues',
    'cobalt supply chain EV battery critical mineral',
    'deep sea cobalt alternative polymetallic nodules',
    'cobalt shortage electric vehicle supply chain',
    'artisanal cobalt mining Congo child labor',
    'battery metal crunch clean energy transition',
    'cobalt price forecast 2026 demand',
    'ocean floor cobalt deposits Clarion Clipperton Zone',
    'ethical cobalt sourcing EV manufacturers',
    'critical mineral supply chain geopolitics',
    'cobalt dependence China processing refining',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Why Cobalt Is the New Oil | The Battery Metal Crunch",
    description:
      "Nearly 70% of the world's cobalt comes from mines in the DRC, many linked to child labor and environmental destruction. The deep sea offers an",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: ['/earth/pexels-george-desipris-726478.jpg'],
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-02-20T10:30:00Z',
    modifiedTime: '2026-02-20T10:30:00Z',
    section: 'Earth & Environment',
    tags: ['Cobalt', 'EV Batteries', 'DRC', 'Deep Sea Mining', 'Critical Minerals', 'Supply Chain', 'Clean Energy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cobalt Is the New Oil | and the DRC Is the New Middle East",
    description:
      "One country supplies 70% of the cobalt powering every EV on the road. The human cost is staggering. The deep-sea alternative comes with its own reckoning.",
  },
};

export default function CobaltNewOilPage() {
  return <NewsArticleDB slug="earth-why-cobalt-is-the-new-oil" />;
}
