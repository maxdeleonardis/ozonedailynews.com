import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Site Index - Complete Sitemap | ObjectWire",
  description: "Comprehensive site index showing all pages and sections of ObjectWire. Navigate our complete content hierarchy.",
  keywords: ["sitemap", "site index", "navigation", "ObjectWire pages"],
  alternates: {
    canonical: 'https://www.objectwire.org/site-index',
  },
};

export default function SiteIndexPage() {
  return <WikiArticle slug="site-index" />;
}
