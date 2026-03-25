import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "All-In Podcast at Davos 2026: Silicon Valley Meets Global Elite | ObjectWire",
  description: "How Chamath Palihapitiya, Jason Calacanis, David Sacks, and David Friedberg brought the All-In Podcast to the World Economic Forum in Davos, including exclusive interviews, private dinners, and live episodes.",
  keywords: [
    "All-In Podcast",
    "Davos 2026",
    "Chamath Palihapitiya",
    "Jason Calacanis",
    "David Sacks",
    "David Friedberg",
    "World Economic Forum",
    "tech podcast",
    "Silicon Valley Davos",
    "WEF 2026",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/davos/all-in-podcast',
  },
  openGraph: {
    title: "All-In Podcast Takes Davos 2026 by Storm",
    description: "Inside the All-In Podcast's historic trip to the World Economic Forum, featuring exclusive access to world leaders and tech titans.",
    type: "article",
    url: "https://www.objectwire.org/davos/all-in-podcast",
    images: [
      {
        url: "https://www.objectwire.org/images/all-in-davos-2026-og.jpg",
        width: 1200,
        height: 630,
        alt: "All-In Podcast at Davos 2026",
      },
    ],
  },
};

export default function AllInPodcastDavosPage() {
  return <WikiArticle slug="events-davos-all-in-podcast" />;
}
