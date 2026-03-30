import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Yeat ADL Album | Cinematic Shift, Elton John, Kid Cudi | ObjectWire',
  description:
    "Yeat's sixth studio album ADL (A Dangerous Lyfe / A Dangerous Love) drops March 27, 2026 on Capitol Records. 21 tracks, 70 minutes, featuring Elton John, Kid Cudi, Grimes, and Don Toliver.",
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Yeat ADL Album | Cinematic Shift and Star-Studded Evolution | ObjectWire',
    description:
      "Yeat's sixth studio album ADL arrives March 27, 2026. A 21-track double album featuring Elton John, Kid Cudi, Grimes, Don Toliver, and Kylie Jenner.",
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [
      {
        url: `https://www.objectwire.org${OG_IMAGE}`,
        width: 1200,
        height: 675,
        alt: 'Yeat ADL album cover 2026',
      },
    ],
    publishedTime: '2026-03-30T12:00:00Z',
    section: 'Music',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yeat ADL Album | ObjectWire',
    description:
      "Yeat drops ADL, a 21-track double album feat. Elton John, Kid Cudi, Grimes, Don Toliver, and more. Full breakdown inside.",
    images: [`https://www.objectwire.org${OG_IMAGE}`],
  },
};

export default function ArtistsYeatAdl26Page() {
  return <ArticlePageDB slug="artists-yeat-adl-26" />;
}
