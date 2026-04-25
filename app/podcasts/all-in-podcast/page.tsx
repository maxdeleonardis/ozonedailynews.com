import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "All-In Podcast | Tech & Business Insights",
  description:
    "Complete profile of the All-In Podcast hosted by the Besties: Chamath Palihapitiya, Jason Calacanis, David Sacks, and David Friedberg. Tech, business, and",
  keywords: [
    "All-In Podcast",
    "Chamath Palihapitiya",
    "Jason Calacanis",
    "David Sacks",
    "David Friedberg",
    "tech podcast",
    "venture capital",
    "business",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/podcasts/all-in-podcast',
  },
  openGraph: {
    title: "All-In Podcast | Tech & Business Insights",
    description: "Complete profile of the All-In Podcast hosted by the Besties: Chamath Palihapitiya, Jason Calacanis, David Sacks, and David Friedberg. Tech, business, and",
    type: 'article',
    url: "https://www.objectwire.org/podcasts/all-in-podcast",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "All-In Podcast | Tech & Business Insights",
    description: "Complete profile of the All-In Podcast hosted by the Besties: Chamath Palihapitiya, Jason Calacanis, David Sacks, and David Friedberg. Tech, business, and",
  },
};

export default function AllInPodcastPage() {
  return <WikiArticle slug="podcasts-all-in-podcast" />;
}
