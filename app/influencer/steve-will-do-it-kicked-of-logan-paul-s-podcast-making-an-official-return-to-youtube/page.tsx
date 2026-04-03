import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "SteveWillDoIt Kicked Off Logan Paul's Podcast, Makes Official Return to YouTube | ObjectWire",
  description: "Breaking news: SteveWillDoIt was removed from Logan Paul's Impaulsive podcast and has announced his official return to YouTube. Full story, context, and what this means for the influencer.",
  keywords: ["SteveWillDoIt", "Steve Deleonardis", "Logan Paul", "Impaulsive", "NELK Boys", "YouTube return", "influencer news"],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/steve-will-do-it-kicked-of-logan-paul-s-podcast-making-an-official-return-to-youtube',
  },
};

export default function SteveWillDoItPodcastPage() {
  return <WikiArticle slug="influencer-steve-will-do-it-kicked-of-logan-paul-s-podcast-making-an-official-return-to-youtube" />;
}
