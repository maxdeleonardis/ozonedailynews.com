import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/events/gtc-2026/closing-day-3-intel-microsoft-agentic-march-18-2026';

export const metadata: Metadata = {
  title: "Closing Out GTC 2026: Intel, Microsoft & the Agentic Explosion | Day 3 Wrap-Up",
  description:
    "As GTC 2026 enters its final stretch, Intel and NVIDIA debut their joint Sovereign AI rack, the OpenClaw Agentic program dominates Day 3, and Thursday's",
  keywords: [
    'GTC 2026 Day 3 wrap-up',
    'NVIDIA GTC 2026 closing',
    'Intel NVIDIA Sovereign AI rack GTC 2026',
    'OpenClaw agentic AI GTC',
    'Jensen Huang Vera Rubin GTC 2026',
    'GTC 2026 San Jose Day 3 March 18',
    'NVIDIA Intel partnership GTC 2026',
    'GTC 2026 expo close Thursday',
    'agentic AI autonomous agents GTC 2026',
    'NVIDIA Microsoft GTC 2026',
    'GTC 2026 final day March 19',
    'AI conference 2026 Silicon Valley',
    'GTC 2026 networking San Jose Civic',
    'Vera Rubin 1 trillion parameter model',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Closing Out GTC 2026: Intel, Microsoft & the Agentic Explosion | Day 3 Wrap-Up",
    description:
      "Intel and NVIDIA showcase a joint Sovereign AI rack, OpenClaw workshops flood the floor, and Thursday's short expo window marks the end of the most",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-18T20:00:00Z',
    modifiedTime: '2026-03-18T20:00:00Z',
    section: 'Technology',
    tags: [
      'NVIDIA', 'GTC 2026', 'Intel', 'Microsoft', 'Agentic AI',
      'OpenClaw', 'Jensen Huang', 'Vera Rubin', 'AI Conference', 'Technology',
    ],
    images: [
      {
        url: 'https://www.objectwire.org/nvidia/gtc-2026-hero.jpg',
        alt: 'NVIDIA GTC 2026, Day 3 Wrap-Up',
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "GTC 2026 Day 3: Intel & NVIDIA's Sovereign AI Rack, OpenClaw Agents, Final Sprint",
    description:
      "Day 3 at GTC 2026 belongs to the partners. Intel and NVIDIA showcase their joint Sovereign AI rack, OpenClaw workshops dominate the afternoon, and",
  },
  other: {
    news_keywords:
      'GTC 2026, NVIDIA GTC closing, Intel NVIDIA partnership, OpenClaw agentic AI, Vera Rubin GPU, Jensen Huang, GTC 2026 Day 3, March 18 2026, San Jose AI conference',
  },
};

export default function GTC2026Day3WrapUpPage() {
  return <NewsArticleDB slug="events-gtc-2026-closing-day-3-intel-microsoft-agentic-march-18-2026" />;
}
