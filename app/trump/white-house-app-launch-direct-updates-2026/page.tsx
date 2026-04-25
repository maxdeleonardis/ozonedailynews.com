import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/white-house-app-launch-direct-updates-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1467251589161-f9c68fa14c59?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'White House Debuts Official App for Updates Straight',
  description:
    'The Trump administration launched an official White House smartphone app on March 27, 2026, offering livestreams, a text-the-president feature, and an ICE',
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'White House Debuts Official App for Updates Straight',
    description:
      'The Trump administration launched its official White House app on March 27, billing it as a way to receive news with no filter. The app includes',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'White House exterior representing Trump administration app launch' }],
    publishedTime: '2026-03-30T23:45:00Z',
    modifiedTime: '2026-03-30T23:45:00Z',
    section: 'News',
    tags: ['White House', 'Trump', 'App Launch', 'ICE', 'Privacy', 'Media Bias', 'Government'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White House Debuts Official App for Direct Updates',
    description:
      'The Trump White House launched a smartphone app on March 27 with livestreams, a text-the-president feature, and an ICE tip line. Developers have flagged',
    images: [OG_IMAGE],
  },
};

export default function TrumpWhiteHouseAppLaunchDirectUpdates2026Page() {
  return <NewsArticleDB slug="trump-white-house-app-launch-direct-updates-2026" />;
}
