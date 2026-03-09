import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Miniminter (Simon Minter) — FIFA Content Creator & Sidemen Daily Uploader | ObjectWire",
  description: "Complete profile of Miniminter (Simon Minter): Sidemen founding member known for daily FIFA uploads, 10M+ subscribers, relationship with Talia Mar, and charity football matches. 2026 coverage.",
  keywords: [
    "Miniminter",
    "Simon Minter", 
    "Miniminter FIFA",
    "Sidemen Miniminter",
    "Simon Minter Talia Mar",
    "Miniminter daily uploads",
    "UK FIFA YouTuber",
    "Miniminter 2026",
    "Sidemen charity match",
    "Miniminter net worth"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/miniminter',
  },
  openGraph: {
    title: 'Miniminter (Simon Minter) — FIFA Creator & Sidemen Member',
    description: 'Full profile of Miniminter: daily FIFA uploads, Sidemen founding member, relationship with Talia Mar, and 15+ years of consistent content creation.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/sidemen/miniminter',
    siteName: 'ObjectWire',
    section: 'YouTube',
  },
};

export default function MiniminterPage() {
  return <WikiArticle slug="youtube-sidemen-miniminter" />;
}
