import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "W2S (Harry Lewis) | FIFA Pack Opening Legend & Sidemen Wildcard | ObjectWire",
  description: "Complete profile of W2S (Harry Lewis/Wroetoshaw): 16M+ subscribers, legendary FIFA pack luck, chaotic energy, relationship with Katie Leach, and Sidemen wildcard moments. 2026 coverage.",
  keywords: [
    "W2S",
    "Harry Lewis",
    "Wroetoshaw",
    "W2S FIFA pack opening",
    "Harry Lewis Katie Leach",
    "W2S chaotic moments",
    "Wroetoshaw 2026",
    "Harry Lewis subscriber count",
    "W2S Sidemen",
    "Harry Lewis Guernsey"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/w2s',
  },
  openGraph: {
    title: 'W2S (Harry Lewis) | Pack Opening King & Sidemen Wildcard',
    description: 'Full profile of W2S: legendary FIFA pack luck, 16M+ subscribers, chaotic personality, relationship with Katie Leach, and wildcard Sidemen role.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/sidemen/w2s',
    siteName: 'ObjectWire',
    section: 'YouTube',
  },
};

export default function W2SPage() {
  return <ArticlePageDB slug="youtube-sidemen-w2s" />;
}
