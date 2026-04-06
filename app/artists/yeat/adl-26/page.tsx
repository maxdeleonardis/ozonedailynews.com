import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Yeat ADL Album | Cinematic Shift, Elton John, Kid Cudi',
  description:
    "Yeat's sixth studio album ADL (A Dangerous Lyfe / A Dangerous Love) drops March 27, 2026 on Capitol Records. 21 tracks, 70 minutes, featuring Elton John,",
  alternates: {
    canonical: 'https://www.objectwire.org/artists/yeat/adl-26',
  },
  openGraph: {
    type: 'article',
    title: 'Yeat ADL Album | Cinematic Shift and Star-Studded Evolution',
    description:
      "Yeat's sixth studio album ADL arrives March 27, 2026. A 21-track double album featuring Elton John, Kid Cudi, Grimes, Don Toliver, and Kylie Jenner.",
    url: 'https://www.objectwire.org/artists/yeat/adl-26',
    siteName: 'ObjectWire',
    images: [
      {
        url: 'https://www.objectwire.org/artist/Yeat-adl.png',
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
    title: 'Yeat ADL Album',
    description:
      "Yeat drops ADL, a 21-track double album feat. Elton John, Kid Cudi, Grimes, Don Toliver, and more. Full breakdown inside.",
    images: ['https://www.objectwire.org/artist/Yeat-adl.png'],
  },
};

export default function ArtistsYeatAdl26Page() {
  return <ArticlePageDB slug="artists-yeat-adl-26" />;
}
