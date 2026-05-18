import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/creator/throttlehouse';
const PAGE_URL = `https://www.ozonenetwork.news${SLUG}`;
const IMAGE_URL = 'https://yt3.googleusercontent.com/ytc/AIdro_nK2N8g_cFQzJ0v9dpnJW2a1gm1ZNMx7cXfME9R=s900-c-k-c0x00ffffff-no-rj';

export const metadata: Metadata = {
  title: 'ThrottleHouse | Jeff Thomas and Thomas Holland YouTube 2026',
  description:
    'ThrottleHouse is a Canadian automotive YouTube channel hosted by Jeff Thomas and Thomas Holland. Over 2M subscribers, Victoria BC, founded 2017. Car reviews, comparisons, and the Throttle House ranking system.',
  keywords: [
    'ThrottleHouse',
    'ThrottleHouse YouTube',
    'Jeff Thomas ThrottleHouse',
    'Thomas Holland ThrottleHouse',
    'ThrottleHouse car reviews',
    'ThrottleHouse subscribers 2026',
    'ThrottleHouse Canada',
    'ThrottleHouse history',
    'ThrottleHouse ranking system',
    'Canadian car YouTube channel',
    'automotive YouTube 2026',
    'ThrottleHouse 2M subscribers',
    'ThrottleHouse Victoria BC',
    'ThrottleHouse Porsche review',
    'ThrottleHouse BMW review',
    'best car review YouTube channel',
    'ThrottleHouse biography',
    'ThrottleHouse 2026',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'ThrottleHouse | Jeff Thomas & Thomas Holland YouTube Channel Profile 2026',
    description:
      'Full profile of ThrottleHouse, the Canadian automotive YouTube channel hosted by Jeff Thomas and Thomas Holland. History, milestones, ranking system, and 2026 stats.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Creator Desk'],
    section: 'Creator',
    tags: ['ThrottleHouse', 'YouTube', 'Car Reviews', 'Canada', 'Jeff Thomas', 'Thomas Holland'],
    publishedTime: '2026-05-15T18:00:00Z',
    modifiedTime: '2026-05-15T18:00:00Z',
    images: [{ url: IMAGE_URL, width: 900, height: 900, alt: 'ThrottleHouse YouTube channel logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThrottleHouse | 2M+ Subscribers, Car Reviews, Throttle House Rankings',
    description:
      'Jeff Thomas and Thomas Holland built the most-trusted car review channel in Canada. Victoria BC, founded 2017, 2M+ subscribers.',
    images: [IMAGE_URL],
  },
};

export default function ThrottleHousePage() {
  return <CreatorArticleDB slug="creator-throttlehouse" />;
}
