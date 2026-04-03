import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/elon-musk/spacex-xai-merger-1-75-trillion-ipo-orbital-ai-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: "SpaceX-xAI Merger Sets Stage for $1.75 Trillion AI Powerhouse | IPO Targets Summer 2026 | ObjectWire",
  description:
    "SpaceX completed an all-stock acquisition of xAI on February 2, 2026, valued at $1.25 trillion. Elon Musk has declared SpaceX will surpass all AI rivals combined within years. A $1.75 trillion IPO targeting Nasdaq is expected June/July 2026, while 9 of xAI's 11 co-founders have departed.",
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
    title: "SpaceX-xAI Merger Sets Stage for $1.75 Trillion AI Powerhouse",
    description:
      "SpaceX absorbed xAI in a $1.25 trillion all-stock deal on February 2, 2026. Musk says SpaceX will surpass DeepMind and every other AI lab combined. A Nasdaq IPO at $1.75 trillion valuation is targeting June/July 2026. But 9 of xAI's 11 co-founders have already walked.",
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
    title: "SpaceX-xAI Merger: $1.75T IPO, Orbital AI, and 9 of 11 Co-Founders Gone | ObjectWire",
    description:
      "After absorbing xAI in February 2026, Musk says SpaceX will 'far exceed everyone else combined' in AI. A $1.75T Nasdaq IPO is targeting summer 2026. But the talent picture at xAI is turbulent: 9 of 11 co-founders have left.",
  },
  other: {
    news_keywords:
      'SpaceX xAI merger, Elon Musk AI, SpaceX IPO 2026, Orbital Data Centers, Sentient Sun, Grok, xAI co-founders departures, $1.75 trillion valuation, DeepMind, SpaceX Nasdaq',
  },
};

export default function SpaceXxAIMergerIPOPage() {
  return <NewsArticleDB slug="elon-musk-spacex-xai-merger-1-75-trillion-ipo-orbital-ai-2026" />;
}
