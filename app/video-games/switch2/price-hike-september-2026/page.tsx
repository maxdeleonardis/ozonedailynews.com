import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/switch2/price-hike-september-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1749264292585-858660898055?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Nintendo Switch 2 Price Hike $499.99 September 2026 | Star Fox, H2 Titles Confirmed',
  description:
    'Nintendo confirms Switch 2 price rises from $449.99 to $499.99 on September 1, 2026 in North America and Europe. Star Fox launches June 25. Multiple unannounced H2 2026 titles confirmed by president Shuntaro Furukawa.',
  keywords: [
    'Nintendo Switch 2 price hike',
    'Nintendo Switch 2 $499.99',
    'Nintendo Switch 2 September 2026',
    'Nintendo Switch 2 price increase',
    'Star Fox Switch 2',
    'Star Fox June 25 2026',
    'Nintendo Switch 2 unannounced games',
    'Nintendo Switch 2 H2 2026',
    'Shuntaro Furukawa Switch 2',
    'Nintendo Switch 2 price September 1',
    'Nintendo Switch 2 games 2026',
    'Rhythm Heaven Groove Switch 2',
    'Splatoon Raiders Switch 2',
    'Fire Emblem Fortune Weave',
    'Nintendo Switch 2 adoption rate',
    'Nintendo stock price drop 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Nintendo Switch 2 Price Hike to $499.99 September 2026 | Star Fox & H2 Titles Confirmed',
    description:
      'Nintendo raises Switch 2 to $499.99 September 1. Star Fox launches June 25. Furukawa confirms multiple unannounced H2 titles. Nintendo stock fell 8% on announcement.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-11T18:00:00Z',
    modifiedTime: '2026-05-11T18:00:00Z',
    section: 'Gaming',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Nintendo Switch 2 console with Joy-Con 2 controllers',
      },
    ],
    tags: ['Nintendo Switch 2', 'Nintendo', 'Star Fox', 'Game Pass', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nintendo Switch 2 Rises to $499.99 September 1. Star Fox June 25. More Unannounced H2 Titles Coming.',
    description:
      'Furukawa confirms price hike driven by memory costs, exchange rates, and oil prices. Stock fell 8%. Switch 2 adoption still outpacing original Switch.',
    images: [OG_IMAGE],
  },
};

export default function Switch2PriceHikePage() {
  return <JackArticleDB slug="video-games-switch2-price-hike-september-2026" />;
}
