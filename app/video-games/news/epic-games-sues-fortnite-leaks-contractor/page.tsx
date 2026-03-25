import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically â€” content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/epic-games-sues-fortnite-leaks-contractor';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Epic Games Sues Contractor Who Ran Fortnite Leaks Account | ObjectWire',
  description:
    'Epic Games filed a lawsuit on March 5 against former contractor Hayden Cohen, who allegedly ran the "AdiraInfo" Fortnite leaks account on X and Discord while working inside the company.',
  keywords: [
    'Epic Games lawsuit',
    'Fortnite leaks contractor',
    'Hayden Cohen Fortnite',
    'AdiraInfo Fortnite leaks',
    'Epic Games Adira lawsuit',
    'Fortnite leaks account sued',
    'Epic Games contractor NDA',
    'Fortnite collaboration leaks',
    'Epic Games federal lawsuit',
    'Fortnite insider leaks 2026',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Epic Games Sues Contractor Who Ran Fortnite Leaks Account',
    description:
      'Former contractor Hayden Cohen allegedly operated the "AdiraInfo" leaks account on X and Discord, leaking a dozen unreleased Fortnite collaborations "for clout."',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-01T00:00:00Z',
    modifiedTime: '2026-03-01T00:00:00Z',
    section: 'Gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epic Games Sues Fortnite Leaks Contractor â€” "For Clout"',
    description:
      'Hayden Cohen allegedly ran the AdiraInfo leaks account while working as an Epic contractor, disclosing 12+ unreleased collaborations.',
  },
};

export default function EpicSuesFortniteLeakerPage() {
  return <NewsArticleDB slug="video-games-news-epic-games-sues-fortnite-leaks-contractor" />;
}