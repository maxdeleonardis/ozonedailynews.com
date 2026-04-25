import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/world-cup/news/host-cities-security-funding-frozen-dhs-shutdown';

export const metadata: Metadata = {
  title: 'U.S. 2026 World Cup Host Cities Warn of Security Funding',
  description:
    'Security officials from all 11 U.S. host cities testified before Congress on February 25, 2026, that the DHS partial shutdown has frozen nearly $900',
  keywords: [
    '2026 FIFA World Cup security funding',
    'DHS partial shutdown World Cup',
    'FEMA World Cup grants frozen',
    'World Cup host cities security crisis',
    'FIFA World Cup 2026 United States',
    'DHS shutdown 2026',
    'World Cup security funding Congress',
    'FEMA continuing resolution lapse',
    'World Cup security grants $900 million',
    'House Homeland Security Committee World Cup',
    'counter-drone World Cup security',
    'World Cup Miami Dallas Houston security',
    'World Cup Los Angeles New York security',
    'FIFA World Cup June 2026',
    '2026 World Cup host cities',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'World Cup 2026 | DHS Shutdown Freezes $900M in Host-City',
    description:
      'All 11 U.S. host cities testified before Congress that a DHS partial shutdown has frozen $625M in World Cup security grants and $500M in counter-drone',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Alfansa'],
    publishedTime: '2026-02-25T16:00:00Z',
    modifiedTime: '2026-02-25T16:00:00Z',
    section: 'World Cup',
    tags: [
      'FIFA World Cup 2026', 'DHS Shutdown', 'FEMA', 'Security Funding',
      'World Cup Host Cities', 'Homeland Security', 'Congress', 'Counter-Drone',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DHS Shutdown Freezes $900M in World Cup Security Grants',
    description:
      'Eleven U.S. host cities told Congress: nearly $900M in security funding is frozen. Staffing, cybersecurity, and counter-drone programs are stalled. The',
  },
};

export default function WorldCupSecurityFundingPage() {
  return <NewsArticleDB slug="world-cup-news-host-cities-security-funding-frozen-dhs-shutdown" />;
}
