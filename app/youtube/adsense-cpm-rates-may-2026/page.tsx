import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/youtube/adsense-cpm-rates-may-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=675&fit=crop&q=80';

export const metadata: Metadata = {
  title: 'YouTube CPM Rates May 2026 | AdSense Niche Breakdown & RPM Data',
  description:
    'YouTube AdSense CPM rates for May 2026 by niche. Personal finance leads at $42 to $68 CPM. Tech spiked on Computex ad spend. Full RPM data, Premium impact, and Q3 creator strategy.',
  keywords: [
    'YouTube CPM rates May 2026',
    'YouTube AdSense CPM 2026',
    'YouTube RPM 2026',
    'YouTube CPM by niche',
    'AdSense CPM May 2026',
    'YouTube monetization 2026',
    'YouTube CPM personal finance',
    'YouTube CPM gaming',
    'YouTube CPM tech',
    'creator economy 2026',
    'YouTube RPM niche breakdown',
    'YouTube Premium revenue share',
    'AdSense RPM calculator 2026',
    'best YouTube niche CPM',
    'YouTube ad rates Q2 2026',
  ],
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'YouTube CPM Rates May 2026 | AdSense Niche Breakdown & RPM Data',
    description:
      'Personal finance hits $68 CPM. Tech surged 12% on Computex budgets. Gaming stalls at $6 to $11. Full May 2026 YouTube AdSense niche leaderboard with RPM data and Q3 creator strategy.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    publishedTime: '2026-05-29T18:00:00-05:00',
    modifiedTime: '2026-05-29T18:00:00-05:00',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'YouTube AdSense CPM RPM rates niche breakdown May 2026 creator economy data' }],
    tags: ['YouTube AdSense', 'CPM Rates 2026', 'Creator Economy', 'YouTube Monetization'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube CPM Rates May 2026 | Personal Finance $68, Tech Up 12%, Gaming $6',
    description: 'Full niche CPM and RPM leaderboard. Premium price hike impact. Q3 survival strategy for creators.',
    images: [OG_IMAGE],
  },
};

export default function YoutubeCpmMay2026Page() {
  return <NewsArticleDB slug="youtube-adsense-cpm-rates-may-2026-niche-breakdown" />;
}
