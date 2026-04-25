import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/elon-musk/spacex-xai-merger-1-75-trillion-ipo-orbital-ai-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: "SpaceX-xAI Merger Sets Stage for $1.75 Trillion AI",
  description:
    "SpaceX completed an all-stock acquisition of xAI on February 2, 2026, valued at $1.25 trillion. Elon Musk has declared SpaceX will surpass all AI rivals",
  keywords: [
    'SpaceX xAI merger 2026',
    'SpaceX IPO $1.75 trillion 2026',
    'Elon Musk SpaceX AI dominance',
    'xAI SpaceX acquisition February 2026',
    'SpaceX Orbital Data Centers AI',
    'Sentient Sun project SpaceX',
    'Grok SpaceX xAI merger',
    'SpaceX Nasdaq IPO summer 2026',
    'xAI co-founders departed 2026',
    'Musk surpass DeepMind AI prediction',
    'SpaceX $1.25 trillion valuation merger',
    'SpaceX vertical integration AI compute',
    'Tony Wu Zihang Dai xAI departure',
    'Gibson Dunn SpaceX IPO counsel',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "SpaceX-xAI Merger Sets Stage for $1.75 Trillion AI",
    description:
      "SpaceX absorbed xAI in a $1.25 trillion all-stock deal on February 2, 2026. Musk says SpaceX will surpass DeepMind and every other AI lab combined. A",
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-18T18:00:00Z',
    modifiedTime: '2026-03-18T18:00:00Z',
    section: 'Technology',
    tags: [
      'SpaceX', 'xAI', 'Elon Musk', 'IPO', 'AI', 'Grok',
      'Orbital Data Centers', 'Merger', 'Technology', 'Space',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "SpaceX-xAI Merger | $1.75T IPO, Orbital AI, and 9 of 11",
    description:
      "After absorbing xAI in February 2026, Musk says SpaceX will 'far exceed everyone else combined' in AI. A $1.75T Nasdaq IPO is targeting summer 2026. But",
  },
  other: {
    news_keywords:
      'SpaceX xAI merger, Elon Musk AI, SpaceX IPO 2026, Orbital Data Centers, Sentient Sun, Grok, xAI co-founders departures, $1.75 trillion valuation, DeepMind, SpaceX Nasdaq',
  },
};

export default function SpaceXxAIMergerIPOPage() {
  return <NewsArticleDB slug="elon-musk-spacex-xai-merger-1-75-trillion-ipo-orbital-ai-2026" />;
}
