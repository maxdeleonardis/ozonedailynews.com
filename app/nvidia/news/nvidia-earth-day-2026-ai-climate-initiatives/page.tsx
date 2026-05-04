import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/nvidia/news/nvidia-earth-day-2026-ai-climate-initiatives';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'NVIDIA Earth Day 2026 | 5 AI Initiatives Protecting the Planet',
  description: 'NVIDIA Earth Day 2026 spotlights five AI initiatives: Earth-2 climate digital twin, orangutan bioacoustic monitoring, AMP recycling robots, ocean plastic detection, and wildfire prediction.',
  keywords: [
    'NVIDIA Earth Day 2026',
    'NVIDIA Earth-2 climate AI',
    'NVIDIA physical AI environment',
    'NVIDIA CorrDiff climate model',
    'NVIDIA AMP robotics recycling',
    'NVIDIA orangutan conservation AI',
    'NVIDIA wildfire prediction AI',
    'NVIDIA ocean plastic detection',
    'NVIDIA Jetson robotics',
    'Earth-2 digital twin weather',
    'NVIDIA climate tech 2026',
    'generative AI climate change',
    'AI environmental sustainability',
    'NVIDIA GPU climate research',
    'HealDA atmospheric data',
    'StormScope nowcasting',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'NVIDIA Earth Day 2026 | 5 AI Initiatives Protecting the Planet',
    description: 'From kilometer-scale storm forecasts to orangutan bioacoustics and recycling robots, NVIDIA is deploying Physical AI across 5 major environmental fronts.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-04-23T10:00:00Z',
    modifiedTime: '2026-04-23T10:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Green forest canopy representing NVIDIA Earth Day AI environmental initiatives' }],
    tags: ['NVIDIA', 'Earth Day', 'Climate AI', 'Physical AI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVIDIA Earth Day 2026: 5 AI Initiatives Saving the Planet',
    description: 'Earth-2 digital twin, orangutan bioacoustics, AMP recycling robots, ocean plastic AI, wildfire prediction — NVIDIA goes all-in on climate tech.',
    images: [OG_IMAGE],
  },
};

export default function NvidiaNewsNvidiaEarthDay2026AiClimateInitiativesPage() {
  return <NewsArticleDB slug="nvidia-news-nvidia-earth-day-2026-ai-climate-initiatives" />;
}
