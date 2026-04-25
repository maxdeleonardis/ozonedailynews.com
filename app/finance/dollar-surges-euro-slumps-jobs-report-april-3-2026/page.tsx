import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/finance/dollar-surges-euro-slumps-jobs-report-april-3-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1771736007142-e1348a02f006?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Dollar Surges, Euro Slumps | Blowout Jobs Report April 2026',
  description:
    'The U.S. Dollar surged against the Euro on April 3, 2026, as a blowout NFP report added 178,000 jobs versus 65,000 expected, and safe-haven demand from',
  keywords: [
    'EUR/USD April 2026',
    'US dollar surge April 2026',
    'euro weakness 2026',
    'nonfarm payrolls March 2026',
    'NFP report April 3 2026',
    'dollar euro exchange rate 2026',
    'US jobs report blowout 2026',
    'safe-haven dollar Middle East',
    'EUR/USD 1.1540',
    'US unemployment rate 4.3 percent 2026',
    'dollar strength ISM manufacturing 2026',
    'euro energy prices war 2026',
    'forex dollar dominance 2026',
    'Bureau of Labor Statistics March 2026',
    'dollar vs euro travel 2026',
    'strong dollar inflation impact',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Dollar Surges, Euro Slumps | 178K Jobs, Safe-Haven Demand',
    description:
      'A triple signal, 178,000 new jobs, 202K jobless claims, 52.7 manufacturing PMI, sent the dollar to a 2026 high. EUR/USD fell to $1.1540 as Europe absorbs',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-03T16:00:00Z',
    modifiedTime: '2026-04-03T16:00:00Z',
    section: 'Finance',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Close-up of one hundred dollar bill' }],
    tags: ['U.S. Dollar', 'Euro', 'EUR/USD', 'Jobs Report', 'NFP', 'Forex', 'Finance'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'U.S. Adds 178K Jobs vs 65K Expected. The Dollar Surges.',
    description: 'EUR/USD falls to $1.1540. Safe-haven demand, a blowout jobs report, and European energy shock are all pointing the same direction.',
    images: [OG_IMAGE],
  },
};

export default function FinanceDollarSurgesEuroSlumpsJobsReportApril32026Page() {
  return <JackArticleDB slug="finance-dollar-surges-euro-slumps-jobs-report-april-3-2026" />;
}
