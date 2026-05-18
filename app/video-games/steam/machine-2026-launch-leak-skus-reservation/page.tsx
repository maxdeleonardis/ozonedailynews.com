import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/steam/machine-2026-launch-leak-skus-reservation';
const OG_IMAGE =
  'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Steam Machine 2026 Launch Leak | Four SKUs, Two Frame Variants, Queue',
  description:
    'Steam client code reveals four Steam Machine SKUs and two Steam Frame variants for 2026. Valve activates the same reservation queue used for the Steam Controller. 512GB and 2TB confirmed configurations.',
  keywords: [
    'Steam Machine 2026',
    'Steam Machine launch date',
    'Steam Machine SKUs 2026',
    'Steam Frame variants',
    'Steam Machine reservation queue',
    'Valve Steam Machine leak',
    'Steam Machine 512GB',
    'Steam Machine 2TB',
    'Steam Machine price 2026',
    'SteamOS living room PC',
    'Steam Machine specs 2026',
    'Valve hardware 2026',
    'Steam Controller bundle',
    'Steam Machine vs Steam Deck',
    'Wccftech Steam Machine leak',
    'Steam Machine modular SSD',
  ],
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'Steam Machine 2026 Leak | 4 SKUs, Steam Frame, Reservation Queue Confirmed',
    description:
      'Valve Steam client code exposes four Steam Machine configurations, two Steam Frame variants, and an imminent reservation queue. 512GB entry and 2TB flagship confirmed.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-11T20:00:00Z',
    modifiedTime: '2026-05-11T20:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'PC gaming setup representing Steam Machine 2026' }],
    tags: ['Steam Machine', 'Valve', 'SteamOS', 'PC Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steam Machine 2026 | 4 SKUs and Reservation Queue Leaked in Steam Client Code',
    description: '512GB to 2TB configs, two Steam Frame variants, Valve queue system confirmed in latest client update.',
    images: [OG_IMAGE],
  },
};

export default function SteamMachine2026LaunchLeakPage() {
  return <NewsArticleDB slug="video-games-steam-machine-2026-launch-leak-skus-reservation" />;
}
