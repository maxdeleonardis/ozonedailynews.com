import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG =
  '/entertainment/apple-tv/spring-2026-premiere-schedule-imperfect-women-for-all-mankind-outcome-margos-got-money-troubles';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/apple/apple-tv-spring-2026-slate.jpg';

export const metadata: Metadata = {
  title: 'Apple TV+ Spring 2026 Lineup: Imperfect Women, For All Mankind S5, Outcome & More | ObjectWire',
  description:
    "Apple TV+ launches its biggest spring slate yet with five high-profile premieres across five weeks, from March 18 to April 15. Headlined by the SXSW breakout Margo's Got Money Troubles, Keanu Reeves in Outcome, Elisabeth Moss in Imperfect Women, and the long-awaited For All Mankind Season 5.",
  keywords: [
    'Apple TV+ spring 2026',
    "Margo's Got Money Troubles Apple TV+",
    'Imperfect Women Apple TV',
    'For All Mankind Season 5',
    'Outcome Keanu Reeves Apple TV',
    'Apple TV spring premiere schedule',
    'Elisabeth Moss Apple TV',
    'Jonah Hill Outcome film',
    'SXSW 2026 Apple TV',
    'Apple TV+ new shows 2026',
    'Michelle Pfeiffer Apple TV',
    'Your Friends and Neighbors Season 2',
    'Apple TV+ original series',
    'Kerry Washington Apple TV',
    'Jon Hamm Apple TV+',
  ],
  openGraph: {
    title: 'Apple TV+ Spring 2026: Five-Week Premiere Blitz From March 18 to April 15',
    description:
      "Apple TV+ kicks off a five-week spring slate with Imperfect Women (March 18), For All Mankind S5 (March 27), Your Friends & Neighbors S2 (April 3), Outcome (April 10), and the SXSW hit Margo's Got Money Troubles (April 15).",
    url: FULL_URL,
    type: 'article',
    images: [{ url: IMAGE_URL, alt: 'Apple TV+ Spring 2026 Premier Schedule' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Apple TV+ Spring 2026: Margo's Got Money Troubles, Outcome, For All Mankind S5 & More",
    description:
      "Five weeks, five major premieres. Apple TV+'s spring 2026 blitz runs March 18 – April 15 with Elisabeth Moss, Keanu Reeves, Jon Hamm, and the SXSW breakout starring Elle Fanning and Michelle Pfeiffer.",
    images: [IMAGE_URL],
  },
  alternates: { canonical: FULL_URL },
};

export default function AppleTVSpring2026SlatePagePage() {
  return <NewsArticleDB slug="entertainment-apple-tv-spring-2026-premiere-schedule-imperfect-women-for-all-mankind-outcome-margos-got-money-troubles" />;
}
