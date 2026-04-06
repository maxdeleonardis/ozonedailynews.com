import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "NASA's Juno Spacecraft Measures Europa's Ice Shell at 18 Miles Thick",
  description: "NASA's Juno mission has measured Europa's ice shell thickness at 18 miles, providing critical insights into Jupiter's ocean moon. Discovery advances",
  keywords: [
    "NASA Juno",
    "Europa ice shell",
    "18 miles thick",
    "Jupiter moon",
    "Europa ocean",
    "Juno spacecraft",
    "Europa Clipper",
    "ocean world",
    "astrobiology",
    "planetary science",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/nasa/europa/juno-ice-shell-18-miles-thick',
  },
  openGraph: {
    title: "NASA's Juno Measures Europa's Ice Shell at 18 Miles Thick",
    description: "Breakthrough measurement reveals Europa's frozen crust thickness, advancing our understanding of this potentially habitable ocean world.",
    type: "article",
    url: "https://www.objectwire.org/nasa/europa/juno-ice-shell-18-miles-thick",
    images: [
      {
        url: "https://www.objectwire.org/images/juno-europa-ice-measurement-og.jpg",
        width: 1200,
        height: 630,
        alt: "Juno spacecraft measuring Europa ice shell",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NASA's Juno Measures Europa's Ice Shell at 18 Miles Thick",
    description: "Breakthrough measurement of Europa's frozen ocean crust advances search for life on Jupiter's moon.",
    images: ["https://www.objectwire.org/images/juno-europa-ice-measurement-twitter.jpg"],
  },
};

export default function JunoEuropaIceMeasurementPage() {
  return <WikiArticle slug="nasa-europa-juno-ice-shell-18-miles-thick" />;
}
