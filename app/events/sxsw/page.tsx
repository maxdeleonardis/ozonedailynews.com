import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "SXSW 2026 - South by Southwest Austin Coverage | ObjectWire",
  description: "Complete coverage of SXSW 2026 in Austin, Texas. Festival dates, speakers, performers, tech showcases, film premieres, and everything you need to know about South by Southwest.",
  keywords: ["SXSW", "South by Southwest", "Austin Texas", "music festival", "tech conference", "film festival", "SXSW 2026"],
  alternates: {
    canonical: 'https://www.objectwire.org/sxsw',
  },
};

export default function SXSWPage() {
  return <WikiArticle slug="events-sxsw" />;
}
