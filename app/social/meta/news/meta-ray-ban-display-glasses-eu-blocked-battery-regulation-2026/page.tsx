import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/social/meta/news/meta-ray-ban-display-glasses-eu-blocked-battery-regulation-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg';

export const metadata: Metadata = {
  title: 'Meta Ray-Ban Display Glasses Blocked in EU | Battery Law, AI Rules, Supply',
  description:
    "Meta's display-equipped Ray-Ban smart glasses remain unavailable across the EU due to a 2027 battery regulation requiring user-replaceable cells, unresolved AI Act restrictions, and supply shortages stretching U.S. waitlists to late 2026.",
  keywords: [
    'Meta Ray-Ban glasses EU blocked',
    'Ray-Ban smart glasses Europe 2026',
    'EU Battery Regulation 2027 wearables',
    'Meta AI glasses Europe ban',
    'Ray-Ban Meta display glasses $799',
    'EU removable battery rule smart glasses',
    'Meta EU wearables regulation',
    'Ray-Ban glasses waitlist 2026',
    'Meta EU AI Act GDPR compliance',
    'Meta Ray-Ban Look and Ask EU',
    'EU smart glasses battery exemption',
    'Meta wearables supply shortage',
    'Ray-Ban Meta waveguide display',
    'EU wearables law 2027',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Meta Ray-Ban Display Glasses Blocked in EU | Battery Law, AI Rules, Supply',
    description:
      "EU Battery Regulation 2027, geofenced AI features, and a production shortage blocking UK, France, Italy, and Canada are keeping Meta's $799 Ray-Ban display glasses off European shelves.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T15:00:00Z',
    modifiedTime: '2026-04-02T00:00:00Z',
    section: 'Tech',
    tags: ['Meta', 'Ray-Ban', 'Smart Glasses', 'EU', 'Battery Regulation', 'AI Act', 'Wearables', 'Europe'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Meta Can't Sell Ray-Ban Display Glasses in the EU | Battery Rule Is Only Part of It",
    description:
      "Sealed battery design, geofenced AI features, and historic U.S. demand are creating a perfect storm keeping Ray-Ban display glasses out of Europe.",
    images: [IMAGE_URL],
  },
};

export default function MetaRayBanEUBlockedPage() {
  return <NewsArticleDB slug="social-meta-news-meta-ray-ban-display-glasses-eu-blocked-battery-regulation-2026" />;
}
