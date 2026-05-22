import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/technology/news/sony-ps-plus-youtube-premium-price-hike-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=675&fit=crop&q=80';

export const metadata: Metadata = {
  title: 'PS Plus & YouTube Premium Price Hike | Sony and Google Raise Rates May 2026',
  description: 'Sony raised PS Plus monthly rates across all three tiers on May 20, 2026. Google notified YouTube Premium subscribers of a $2/month increase for June. Full breakdown of every new rate and the corporate strategy behind both moves.',
  keywords: [
    'PS Plus price hike 2026',
    'YouTube Premium price increase 2026',
    'PlayStation Plus new prices May 2026',
    'PS Plus Essential Extra Premium monthly cost',
    'YouTube Premium $15.99 June 2026',
    'Sony subscription price increase',
    'Google YouTube Premium family plan price',
    'YouTube Premium Apple tax $20.99',
    'PS Plus price increase all tiers',
    'YouTube Premium individual family lite price 2026',
    'subscription price hikes 2026',
    'Sony PS Plus quarterly price',
    'YouTube Music Premium price increase',
    'PlayStation Plus India Turkey price hike',
    'digital subscription cost increase summer 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'PS Plus & YouTube Premium Price Hike | Sony and Google Raise Rates May 2026',
    description: 'Sony quietly hiked PS Plus across all three tiers. Google raised YouTube Premium by $2/month for June. Full new rate breakdown and the silent corporate strategy behind both moves.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    publishedTime: '2026-05-21T22:00:00-05:00',
    modifiedTime: '2026-05-21T22:00:00-05:00',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Sony PS Plus and YouTube Premium price hike May 2026' }],
    tags: ['PlayStation Plus', 'YouTube Premium', 'Sony', 'Google', 'Subscription Prices'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PS Plus Up to $19.99/mo. YouTube Premium Up to $15.99. Both Hikes Hit This Week.',
    description: 'Sony raised all three PS Plus tiers quietly. Google is billing the YouTube Premium increase in June. Every new price listed.',
    images: [OG_IMAGE],
  },
};

export default function SonyPsPlusYoutubePriceHikePage() {
  return <NewsArticleDB slug="technology-news-sony-ps-plus-youtube-premium-price-hike-2026" />;
}
