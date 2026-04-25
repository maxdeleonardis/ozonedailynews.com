import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Marvels Wolverine | PS5 Exclusive Game",
  description:
    "Everything you need to know about Marvels Wolverine, the brutal single-player adventure by Insomniac Games. Release date, gameplay, and latest news.",
  keywords: [
    "Marvels Wolverine",
    "Wolverine game",
    "Insomniac Games",
    "PS5 exclusive",
    "Logan",
    "X-Men",
    "PlayStation 5",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/marvels-wolverine',
  },
  openGraph: {
    title: "Marvels Wolverine | PS5 Exclusive Game",
    description: "Everything you need to know about Marvels Wolverine, the brutal single-player adventure by Insomniac Games. Release date, gameplay, and latest news.",
    type: 'article',
    url: "https://www.objectwire.org/marvels-wolverine",
    siteName: 'ObjectWire',
    section: "Gaming",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Marvels Wolverine | PS5 Exclusive Game",
    description: "Everything you need to know about Marvels Wolverine, the brutal single-player adventure by Insomniac Games. Release date, gameplay, and latest news.",
  },
};

export default function WolverineGamePage() {
  return <WikiArticle slug="video-games-marvels-wolverine" />;
}
