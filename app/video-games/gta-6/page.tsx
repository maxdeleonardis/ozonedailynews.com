import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Grand Theft Auto VI — Release Date, Price, & Everything We Know | ObjectWire",
  description:
    "Complete guide to Grand Theft Auto VI: confirmed November 19, 2026 release date, global pricing speculation including India ₹5,999–₹6,999 and US $89.99–$124.19 retailer leaks, platforms, protagonists Lucia & Jason, gameplay, and Rockstar's development timeline.",
  keywords: [
    "GTA 6",
    "Grand Theft Auto VI",
    "GTA 6 release date",
    "GTA 6 price",
    "GTA 6 India price",
    "GTA 6 UK price",
    "GTA 6 November 2026",
    "Rockstar Games GTA 6",
    "GTA 6 Vice City",
    "GTA 6 Lucia",
    "GTA 6 PC",
    "GTA 6 PS5",
    "GTA 6 Xbox Series X",
    "GTA 6 gameplay",
    "Take-Two Interactive",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/video-games/gta-6",
  },
  openGraph: {
    title: "Grand Theft Auto VI — Release Date, Price & Full Guide",
    description:
      "November 19, 2026 confirmed. Global price speculation reaches £89.99 in the UK and ₹6,999 in India. Everything known about GTA 6.",
    type: "article",
    url: "https://www.objectwire.org/video-games/gta-6",
    siteName: "ObjectWire",
    section: "Video Games",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTA 6 — Release Date, Price & Full Guide | ObjectWire",
    description:
      "Confirmed: November 19, 2026. UK retailer posts £89.99 listing. India brace for ₹5,999–₹6,999. Complete GTA VI encyclopedia.",
  },
};

export default function GTA6Page() {
  return <WikiArticle slug="video-games-gta-6" />;
}
