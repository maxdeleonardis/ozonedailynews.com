import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Beyond the Hype: How Japan's Chikyu Just Started the Real Deep-Sea Gold Rush | ObjectWire",
  description:
    "On February 2, 2026, Japan's drilling vessel Chikyu successfully lifted rare earth-rich sediment from 6,000 meters beneath the Pacific — the world's first deep-sea rare earth extraction at that depth. This is no longer theoretical.",
  keywords: [
    'Japan Chikyu deep sea rare earth extraction 2026',
    'world first deep sea mining rare earth minerals',
    'Chikyu drilling vessel Pacific 6000 meters',
    'Japan rare earth China monopoly break 2026',
    'deep sea rare earth sediment extraction success',
    'Japan deep sea mining world first February 2026',
    'rare earth mineral extraction ocean floor Japan',
    'China rare earth monopoly Japan independence',
    'deep sea gold rush rare earth minerals Pacific',
    'Japan critical minerals strategy deep ocean 2026',
    'rare earth supply chain China 90 percent monopoly',
    'Chikyu Pacific seabed drilling rare earth success',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/earth/news/japan-chikyu-deep-sea-rare-earth-extraction',
  },
  openGraph: {
    title: "Beyond the Hype: How Japan's Chikyu Just Started the Real Deep-Sea Gold Rush",
    description:
      "Japan's Chikyu drilled to 6,000 meters beneath the Pacific on February 2, 2026 and came back up with rare earth-rich sediment. The deep-sea mining era is no longer a future scenario. It started 18 days ago.",
    type: 'article',
    url: 'https://www.objectwire.org/earth/news/japan-chikyu-deep-sea-rare-earth-extraction',
    siteName: 'ObjectWire',
    images: ['/earth/pexels-hungtran-3699436.jpg'],
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-02-20T13:30:00Z',
    modifiedTime: '2026-02-20T13:30:00Z',
    section: 'Earth & Environment',
    tags: ['Japan', 'Chikyu', 'Deep Sea Mining', 'Rare Earth', 'China', 'Pacific Ocean', 'Critical Minerals'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Japan Just Pulled Rare Earths from 6,000 Meters Below the Pacific. The Deep-Sea Gold Rush Is Real.",
    description:
      "The Chikyu's February 2 extraction wasn't a test. It was proof of concept for an industry that could break China's stranglehold on the minerals powering the modern world.",
  },
};

export default function ChikyuDeepSeaPage() {
  return <WikiArticle slug="earth-news-japan-chikyu-deep-sea-rare-earth-extraction" />;
}
