import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "GDC 2026 | Game Developers Conference Coverage",
  description: "Full coverage of the Game Developers Conference 2026. Sessions, awards, announcements, industry trends, and everything happening at the world's largest",
  keywords: ["GDC 2026", "Game Developers Conference", "GDC", "game development", "indie games", "gaming industry", "San Francisco", "GDC Festival of Gaming", "gdconf"],
  openGraph: {
    title: "GDC 2026 | Game Developers Conference",
    description: "The world's largest professional game development event returns. Sessions, awards, keynotes, and breaking announcements, all covered by ObjectWire.",
    type: "website",
    images: ["/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GDC 2026 | Game Developers Conference Coverage",
    description: "Sessions, awards, keynotes, and announcements from the world's largest pro game dev event.",
  },
  alternates: {
    canonical: "https://www.objectwire.org/events/gdc-2026",
  },
};

export default function GDC2026Page() {
  return <WikiArticle slug="events-gdc-2026" />;
}
