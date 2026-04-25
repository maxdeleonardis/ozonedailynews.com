import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/news/artemis-ii-launch-lunar-journey-april-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Artemis II Launches | First Humans to Moon in 54 Years',
  description:
    'NASA\'s Artemis II lifted off April 1, 2026, sending four astronauts on a 10-day lunar journey for the first time since 1972. Commander Reid Wiseman leads',
  keywords: [
    'Artemis II launch 2026',
    'NASA Artemis II crew',
    'Reid Wiseman lunar mission',
    'Victor Glover Christina Koch Moon',
    'Jeremy Hansen Canadian astronaut Moon',
    'SLS Space Launch System launch',
    'Orion capsule Integrity',
    'humans to the Moon 2026',
    'Artemis II translunar injection',
    'deep space radiation research',
    'first Moon mission since 1972',
    'NASA Kennedy Space Center launch',
    'Artemis program Moon mission',
    'free-return trajectory lunar orbit',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Artemis II Launches | First Humans Beyond Earth Orbit Since',
    description:
      'Four astronauts are headed to the Moon for the first time in 54 years. SLS lifted off April 1, 2026. Translunar injection burn tonight. Lunar flyby at',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Science Desk'],
    publishedTime: '2026-04-02T06:00:00Z',
    modifiedTime: '2026-04-02T06:00:00Z',
    section: 'Science',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Rocket launching into night sky' }],
    tags: ['Artemis II', 'NASA', 'Moon Mission', 'Space Launch System', 'Reid Wiseman', 'Orion Capsule', 'Deep Space'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artemis II Is Off | Humans to the Moon for First Time Since',
    description:
      'SLS lifted off April 1 at 6:35 p.m. EDT. Four astronauts, 10 days, 252,000 miles from Earth. Translunar injection burn tonight. The Moon is back.',
    images: [OG_IMAGE],
  },
};

export default function NewsArtemisIiLaunchLunarJourneyApril2026Page() {
  return <NewsArticleDB slug="news-artemis-ii-launch-lunar-journey-april-2026" />;
}
