import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "The Sidemen | British YouTube Entertainment Group",
  description: "Comprehensive profile of The Sidemen, the UK's biggest YouTube group featuring KSI, Miniminter, Zerkaa, TBJZL, Behzinga, Vikkstar123, and W2S. History,",
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen',
  },
  keywords: ['Sidemen', 'KSI', 'Miniminter', 'Zerkaa', 'TBJZL', 'Behzinga', 'Vikkstar123', 'W2S', 'UK YouTubers', 'Sidemen Charity Match', 'YouTube group'],
  openGraph: {
    title: "The Sidemen | British YouTube Entertainment Group",
    description: "Comprehensive profile of The Sidemen, the UK",
    type: 'article',
    url: "https://www.objectwire.org/youtube/sidemen",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Sidemen | British YouTube Entertainment Group",
    description: "Comprehensive profile of The Sidemen, the UK",
  },
};

export default function SidemenWikiPage() {
  return <WikiArticle slug="youtube-sidemen" />;
}
