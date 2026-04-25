import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Miniminter (Simon Minter) | FIFA Content Creator & Sidemen",
  description: "Complete profile of Miniminter (Simon Minter): Sidemen founding member known for daily FIFA uploads, 10M+ subscribers, relationship with Talia Mar, and",
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
    title: 'Miniminter (Simon Minter) | FIFA Creator & Sidemen Member',
    description: 'Full profile of Miniminter: daily FIFA uploads, Sidemen founding member, relationship with Talia Mar, and 15+ years of consistent content creation.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/sidemen/miniminter',
    siteName: 'ObjectWire',
    section: 'YouTube',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miniminter (Simon Minter) | FIFA Creator & Sidemen Member',
    description: 'Full profile of Miniminter: daily FIFA uploads, Sidemen founding member, relationship with Talia Mar, and 15+ years of consistent content creation.',
  },
};

export default function MiniminterPage() {
  return <ArticlePageDB slug="youtube-sidemen-miniminter" />;
}
