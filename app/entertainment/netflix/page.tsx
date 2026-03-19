import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Netflix - Streaming Platform Profile | ObjectWire',
  description: 'Complete profile of Netflix, the world\'s leading streaming entertainment service with over 260 million subscribers worldwide. Original content, movies, TV shows, and documentaries.',
  openGraph: {
    title: 'Netflix - Global Streaming Leader',
    description: 'Netflix streaming platform profile with subscriber stats, original content, and market leadership information.',
    type: 'article',
  },
};

export default function NetflixPage() {
  return <WikiArticle slug="entertainment-netflix" />;
}
