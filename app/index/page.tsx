import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Site Index | Complete Sitemap",
  description: "Comprehensive site index showing all pages and sections of ObjectWire. Navigate our complete content hierarchy.",
  keywords: ["sitemap", "site index", "navigation", "ObjectWire pages"],
  alternates: {
    canonical: 'https://www.objectwire.org/index',
  },
  openGraph: {
    title: "Site Index | Complete Sitemap",
    description: "Comprehensive site index showing all pages and sections of ObjectWire. Navigate our complete content hierarchy.",
    type: 'article',
    url: "https://www.objectwire.org/index",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Site Index | Complete Sitemap",
    description: "Comprehensive site index showing all pages and sections of ObjectWire. Navigate our complete content hierarchy.",
  },
};

export default function WikiPage() {
  return <WikiArticle slug="index" />;
}
