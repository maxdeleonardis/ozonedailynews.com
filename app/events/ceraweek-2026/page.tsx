import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/events/ceraweek-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1765263857986-271b4923632d?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'CERAWeek 2026 | Clean Energy Startups Pivot to AI Despite Trump Headwinds | ObjectWire',
  description:
    'More than 300 clean energy startups at CERAWeek 2026 in Houston showcased AI-integrated battery storage, low-emission fuels, and grid tech as the sector adapts to cuts in renewable energy incentives.',
  keywords: [
    'CERAWeek 2026',
    'clean energy startups AI 2026',
    'CERAWeek Houston 2026',
    'S&P Global CERAWeek',
    'renewable energy AI pivot',
    'battery storage startups 2026',
    'low emission fuel startups',
    'Trump renewable energy incentives cuts',
    'clean energy investment 2026',
    'grid technology AI startups',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'CERAWeek 2026 | Clean Energy Startups Pivot to AI Despite Trump Headwinds | ObjectWire',
    description:
      'More than 300 clean energy startups descended on Houston for CERAWeek 2026, signaling the sector is adapting to the rollback of renewable energy incentives by embedding AI into battery storage, grid management, and low-emission fuels.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Solar panel and wind turbine, clean energy technology' }],
    publishedTime: '2026-03-30T20:00:00Z',
    modifiedTime: '2026-03-30T20:00:00Z',
    section: 'Tech',
    tags: ['CERAWeek', 'Clean Energy', 'AI', 'Houston', 'S&P Global', 'Battery Storage', 'Startups', 'Trump'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CERAWeek 2026 | Clean Energy Startups Pivot to AI',
    description:
      'More than 300 clean energy startups at CERAWeek 2026 are embedding AI into battery storage and grid tech to survive the rollback of federal renewable energy incentives.',
    images: [OG_IMAGE],
  },
};

export default function EventsCeraweek2026Page() {
  return <JackArticleDB slug="events-ceraweek-2026" />;
}
