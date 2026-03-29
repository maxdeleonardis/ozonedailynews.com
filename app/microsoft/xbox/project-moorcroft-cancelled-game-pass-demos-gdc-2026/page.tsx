import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/xbox/project-moorcroft-cancelled-game-pass-demos-gdc-2026';

export const metadata: Metadata = {
  title: "Xbox Confirms Project Moorcroft Is Dead | Demo Program Cancelled After Four Years | ObjectWire",
  description:
    "Microsoft has officially abandoned Project Moorcroft, the long-promised program that would have paid developers to create pre-release game demos for Xbox Game Pass subscribers. The confirmation came at GDC 2026, marking another Phil Spencer-era initiative that never launched.",
  keywords: [
    'Project Moorcroft cancelled Xbox 2026',
    'Xbox Project Moorcroft dead GDC 2026',
    'Xbox Game Pass demos cancelled',
    'Project Moorcroft developer paid demos',
    'Microsoft Xbox demo program abandoned',
    'Phil Spencer era cancelled Xbox programs',
    'Xbox Game Pass demo feature dead',
    'Microsoft GDC 2026 Xbox announcements',
    'Xbox Store wishlist improvements 2026',
    'Chris Richards Xbox GDC 2026',
    'Xbox demos direction changed Moorcroft',
    'Project Moorcroft four years cancelled',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Xbox Confirms Project Moorcroft Is Dead | Demo Program Cancelled After Four Years",
    description:
      "Microsoft has abandoned Project Moorcroft, the program that would have paid developers to ship pre-release demos to Game Pass subscribers. Confirmed dead at GDC 2026, another Phil Spencer-era promise that never launched.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-18T16:00:00Z',
    modifiedTime: '2026-03-18T16:00:00Z',
    section: 'Gaming',
    tags: [
      'Xbox', 'Microsoft', 'Project Moorcroft', 'Game Pass',
      'GDC 2026', 'Gaming', 'Phil Spencer', 'Xbox Store',
    ],
    images: [
      {
        url: 'https://www.objectwire.org/entertainment/forza_horizon_6.PNG',
        alt: 'Xbox gaming',
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Xbox Confirms Project Moorcroft Is Dead",
    description:
      "After four years of promises, Microsoft has abandoned Project Moorcroft, the program that would have paid devs to ship Game Pass demos. Confirmed at GDC 2026.",
  },
  other: {
    news_keywords:
      'Project Moorcroft cancelled, Xbox demo program dead, GDC 2026 Xbox, Game Pass demos, Microsoft Xbox cancelled, Phil Spencer era, Xbox Store 2026',
  },
};

export default function ProjectMoorcroftCancelledPage() {
  return <NewsArticleDB slug="microsoft-xbox-project-moorcroft-cancelled-game-pass-demos-gdc-2026" />;
}
