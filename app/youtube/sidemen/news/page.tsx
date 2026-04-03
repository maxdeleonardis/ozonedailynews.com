import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "How to Get Last-Minute Sidemen Charity Match 2026 Tickets | ObjectWire",
  description: "Complete guide to securing last-minute tickets for the Sidemen Charity Match 2026 at Wembley Stadium. Learn about resale options, hospitality packages, and tips for attending this epic YouTube creator football event.",
  alternates: {
    canonical: 'https://www.objectwire.org/sidemen/news',
  },
  keywords: ['Sidemen Charity Match 2026', 'last-minute tickets', 'Wembley Stadium', 'KSI', 'YouTube Allstars', 'Bright Side', 'BBC Children in Need', 'Sidemen FC'],
};

export default function SidemenCharityMatchTicketsPage() {
  return <WikiArticle slug="youtube-sidemen-news" />;
}
