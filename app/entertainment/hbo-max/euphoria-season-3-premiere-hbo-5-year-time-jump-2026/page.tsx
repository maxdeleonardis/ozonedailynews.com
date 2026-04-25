import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/hbo-max/euphoria-season-3-premiere-hbo-5-year-time-jump-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1634157703702-3c124b455499?w=1200&q=80';

export const metadata: Metadata = {
  title: 'Euphoria Season 3 | HBO Premiere, Time Jump, Episode Guide',
  description:
    'Euphoria Season 3 premiered April 12, 2026 on HBO and Max after a 4-year hiatus. A 5-year time jump moves Rue to Mexico, Cassie and Nate married, and',
  keywords: [
    'Euphoria Season 3 premiere 2026',
    'Euphoria Season 3 HBO release date',
    'Euphoria Season 3 episode guide 2026',
    'Euphoria Season 3 cast Zendaya Cassie Nate',
    'Euphoria Season 3 five year time jump',
    'Euphoria Season 3 Rue Mexico storyline',
    'Euphoria Season 3 Cassie Sydney Sweeney',
    'Euphoria Season 3 finale date May 31 2026',
    'Euphoria Season 3 Angus Cloud tribute Fezco',
    'Eric Dane Euphoria final performance 2026',
    'Euphoria Season 3 19 million viewers premiere',
    'Euphoria Season 3 Sharon Stone guest star',
    'Sam Levinson Euphoria final season',
    'Euphoria Season 3 review HBO Max',
    'Euphoria Season 3 stream Max 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Euphoria Season 3 | HBO Premiere After 4-Year Wait, 5-Year',
    description:
      '19 million viewers for the April 12 premiere. Rue in Mexico, Cassie married to Nate, Maddy in Hollywood. 8 episodes ending May 31, 2026. Tributes to Angus',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfasa'],
    publishedTime: '2026-04-21T21:00:00Z',
    modifiedTime: '2026-04-21T21:00:00Z',
    section: 'Entertainment',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Euphoria Season 3 HBO promotional aesthetic',
      },
    ],
    tags: ['Euphoria', 'HBO', 'Zendaya', 'TV', 'Entertainment'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Euphoria S3 Is Here. 4-Year Wait, 5-Year Jump, 19M Viewers.',
    description:
      'Rue is in Mexico. Cassie married Nate. Maddy\'s in Hollywood. The final season premieres April 12 with 8 episodes through May 31.',
    images: [OG_IMAGE],
  },
};

export default function EntertainmentHboMaxEuphoriaSeason3PremiereHbo5YearTimeJump2026Page() {
  return <JackArticleDB slug="entertainment-hbo-max-euphoria-season-3-premiere-hbo-5-year-time-jump-2026" />;
}
