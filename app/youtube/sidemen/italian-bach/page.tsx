import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Italian Bach | YouTube Content Creator & Sidemen",
  description: "Complete profile of Italian Bach (Isaac Butterfield), British-Italian YouTube creator known for his appearances with the Sidemen and distinctive",
  keywords: ["Italian Bach", "Isaac Butterfield", "Sidemen", "YouTube", "UK YouTuber", "Italian"],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/italian-bach',
  },
  openGraph: {
    title: "Italian Bach | YouTube Content Creator & Sidemen",
    description: "Complete profile of Italian Bach (Isaac Butterfield), British-Italian YouTube creator known for his appearances with the Sidemen and distinctive",
    type: 'article',
    url: "https://www.objectwire.org/youtube/sidemen/italian-bach",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Italian Bach | YouTube Content Creator & Sidemen",
    description: "Complete profile of Italian Bach (Isaac Butterfield), British-Italian YouTube creator known for his appearances with the Sidemen and distinctive",
  },
};

export default function ItalianBachPage() {
  return <WikiArticle slug="youtube-sidemen-italian-bach" />;
}
