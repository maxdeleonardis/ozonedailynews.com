import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Europa: Jupiter's Ocean Moon with 18-Mile Ice Shell | NASA Juno Mission Discovery | ObjectWire",
  description: "NASA's Juno spacecraft measured Europa's ice shell at 18 miles thick, revealing insights into Jupiter's moon with a vast subsurface ocean. Implications for Europa Clipper mission and search for life.",
  keywords: [
    "Europa",
    "Jupiter moon",
    "NASA Juno",
    "Europa ice shell",
    "subsurface ocean",
    "Europa Clipper",
    "ocean world",
    "astrobiology",
    "extraterrestrial life",
    "Jupiter system",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/nasa/europa',
  },
  openGraph: {
    title: "Europa: Jupiter's Ocean Moon with 18-Mile Ice Shell",
    description: "NASA's Juno mission measures Europa's ice thickness, advancing our understanding of this potentially habitable ocean world.",
    type: "article",
    url: "https://www.objectwire.org/nasa/europa",
    images: [
      {
        url: "https://www.objectwire.org/images/europa-ice-shell-og.jpg",
        width: 1200,
        height: 630,
        alt: "Europa ice shell illustration",
      },
    ],
  },
};

export default function EuropaPage() {
  return <WikiArticle slug="nasa-europa" />;
}
