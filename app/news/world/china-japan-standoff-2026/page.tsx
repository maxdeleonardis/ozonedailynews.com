import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "China | Japan Diplomatic Standoff (2026)",
  description: "Escalating tensions following the LDP election landslide and Takaichi's Taiwan policy. Beijing issues a high-level warning to Tokyo.",
  keywords: ["China", "Japan", "Diplomacy", "Sanae Takaichi", "Taiwan", "Geopolitics"],
  authors: [{ name: "ObjectWire Editorial Team" }],
  alternates: {
    canonical: 'https://www.objectwire.org/news/world/china-japan-standoff-2026',
  },
  openGraph: {
    title: "China | Japan Diplomatic Standoff (2026)",
    description: "Escalating tensions following the LDP election landslide and Takaichi",
    type: 'article',
    url: "https://www.objectwire.org/news/world/china-japan-standoff-2026",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "China | Japan Diplomatic Standoff (2026)",
    description: "Escalating tensions following the LDP election landslide and Takaichi",
  },
};

export default function ChinaJapanStandoffPage() {
  return <WikiArticle slug="news-world-china-japan-standoff-2026" />;
}
