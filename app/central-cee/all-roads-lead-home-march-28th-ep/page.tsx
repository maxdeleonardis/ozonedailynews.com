import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/central-cee/all-roads-lead-home-march-28th-ep';
const OG_IMAGE = '/artist/centralcee.png';

export const metadata: Metadata = {
  title: 'Central Cee All Roads Lead Home EP | West London Return | ObjectWire',
  description:
    'Central Cee drops surprise 7-track EP All Roads Lead Home on March 27, 2026. Features J Hus, A2ANTI, and a raw Shepherd\'s Bush sound one year after Can\'t Rush Greatness.',
  keywords: [
    'Central Cee All Roads Lead Home',
    'Central Cee EP 2026',
    'Central Cee J Hus Slaughter',
    'All Roads Lead Home tracklist',
    'Central Cee new music 2026',
    'UK drill EP March 2026',
    'Central Cee MOBO 2026',
    'Shepherd\'s Bush rap',
    'Central Cee A2ANTI',
    'Can\'t Rush Greatness follow up',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Central Cee Drops Surprise EP All Roads Lead Home | West London Return | ObjectWire',
    description:
      'One year after Can\'t Rush Greatness, Central Cee releases a raw 7-track EP rooted in Shepherd\'s Bush. Features J Hus and A2ANTI, dropping March 27, 2026.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [
      {
        url: `https://www.objectwire.org${OG_IMAGE}`,
        width: 1200,
        height: 675,
        alt: 'Central Cee All Roads Lead Home EP artwork 2026',
      },
    ],
    publishedTime: '2026-03-30T12:00:00Z',
    section: 'Music',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Central Cee All Roads Lead Home EP | ObjectWire',
    description:
      'Central Cee returns to his Shepherd\'s Bush roots with a surprise 7-track EP, featuring J Hus and A2ANTI. March 27, 2026.',
    images: [`https://www.objectwire.org${OG_IMAGE}`],
  },
};

export default function CentralCeeAllRoadsLeadHomeMarch28thEpPage() {
  return <NewsArticleDB slug="central-cee-all-roads-lead-home-march-28th-ep" />;
}
