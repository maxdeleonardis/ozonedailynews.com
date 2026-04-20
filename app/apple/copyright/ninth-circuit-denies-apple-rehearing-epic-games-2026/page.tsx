import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/apple/copyright/ninth-circuit-denies-apple-rehearing-epic-games-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://kzcwclprrtonpsnownbl.supabase.co/storage/v1/object/public/thumbnails/apple-ninth-circuit-epic-games-2026.jpg';

export const metadata: Metadata = {
  title: 'Ninth Circuit Denies Apple Rehearing | Epic Games App Store Case',
  description:
    'The Ninth Circuit unanimously denied Apple rehearing en banc in the Epic Games antitrust case, upholding the December 2025 ruling that Apple willfully',
  keywords: [
    'Apple Epic Games Ninth Circuit',
    'Apple rehearing denied 2026',
    'Apple App Store 27 percent commission',
    'Epic Games vs Apple ruling',
    'Ninth Circuit Apple antitrust',
    'App Store external payment links',
    'Apple injunction violation',
    'Epic Games antitrust 2026',
    'Apple App Store fees lawsuit',
    'Apple appeal denied Ninth Circuit',
    'App Store competition law',
    'Apple developer payment rules 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Ninth Circuit Unanimously Denies Apple Rehearing in Epic Games Case',
    description:
      'Apple loses its final appellate lifeline. The Ninth Circuit panel and full court both declined to revisit a December ruling that found Apple willfully',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Legal Desk'],
    publishedTime: '2026-03-31T14:00:00Z',
    modifiedTime: '2026-03-31T14:00:00Z',
    section: 'Tech',
    tags: ['Apple', 'Epic Games', 'App Store', 'Antitrust', 'Ninth Circuit', 'Copyright'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Ninth Circuit denies Apple rehearing — Epic Games antitrust case 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ninth Circuit Denies Apple Rehearing | Epic Games App Store Ruling Stands',
    description:
      'Apple exhausts its Ninth Circuit options. The court unanimously rejected both panel and en banc rehearing, locking in a ruling that Apple violated a court',
  },
};

export default function AppleCopyrightNinthCircuitDeniesAppleRehearingEpicGames2026Page() {
  return <NewsArticleDB slug="apple-copyright-ninth-circuit-denies-apple-rehearing-epic-games-2026" />;
}
