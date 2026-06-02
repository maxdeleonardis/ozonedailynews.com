import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/youtube/creator-economy-cpm-2026';

export const metadata: Metadata = {
  title: 'YouTube CPM by Niche 2026 | Creator Economy Deep Dive',
  description: 'A full breakdown of YouTube CPM and RPM rates by niche in 2026, covering 20 content categories, geographic premiums, Q4 seasonality, and creator strategy for Q3.',
  keywords: [
    'YouTube CPM 2026',
    'YouTube RPM 2026',
    'YouTube CPM by niche',
    'creator economy 2026',
    'YouTube monetization 2026',
    'highest CPM YouTube niches',
    'YouTube AdSense rates 2026',
    'YouTube RPM niche breakdown',
    'how much YouTube pays 2026',
    'YouTube personal finance CPM',
    'YouTube gaming CPM',
    'YouTube ad rates 2026',
    'CPM vs RPM YouTube',
    'YouTube Q3 creator strategy',
    'YouTube advertiser niches',
  ],
  alternates: { canonical: `https://www.OzoneNews.org${SLUG}` },
  openGraph: {
    title: 'YouTube CPM by Niche 2026 | Creator Economy Deep Dive',
    description: 'Personal finance pays $15-$50 CPM. Gaming pays $4-$15. A full 20-niche breakdown of YouTube ad rates, geographic premiums, and creator strategy for 2026.',
    type: 'article',
    url: `https://www.OzoneNews.org${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Tina Boyle'],
    publishedTime: '2026-06-01T10:00:00-05:00',
    modifiedTime: '2026-06-01T10:00:00-05:00',
    section: 'Tech',
    tags: ['YouTube', 'Creator Economy', 'CPM Rates', 'YouTube Monetization'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube CPM by Niche 2026 | 20-Category Breakdown',
    description: 'Personal finance: $50 CPM. Gaming: $4. Here is the full 2026 YouTube niche earnings hierarchy.',
  },
};

export default function CreatorEconomyCPM2026Page() {
  return <NewsArticleDB slug="youtube-creator-economy-cpm-2026" />;
}
