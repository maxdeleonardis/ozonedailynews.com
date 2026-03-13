import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';
// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Punchin' Podcast — Danny Aarons & Tennessee Thresher | ObjectWire",
  description: "Complete profile of Punchin' — the weekly couple podcast hosted by Danny Aarons and Tennessee Thresher on The Fellas Studios network. Episodes, topics, style, and how to listen.",
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/thefellas/punchin',
  },
  keywords: [
    "Punchin' podcast",
    'Danny Aarons',
    'Tennessee Thresher',
    'The Fellas Studios',
    'UK couple podcast',
    'comedy podcast',
    'relationship podcast',
    'UK YouTubers podcast',
  ],
  openGraph: {
    title: "Punchin' Podcast — Danny Aarons & Tennessee Thresher | ObjectWire",
    description: "Full profile of Punchin', the candid weekly couple podcast hosted by Danny Aarons and Tennessee Thresher on The Fellas Studios network.",
    type: "article",
    url: "https://www.objectwire.org/youtube/thefellas/punchin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punchin' Podcast — Danny Aarons & Tennessee Thresher",
    description: "Weekly couple comedy podcast from The Fellas Studios. Relationships, parenting, games, guests and more.",
  },
};

export default function PunchinPage() {
  return <WikiArticle slug="/youtube/thefellas/punchin" />;
}
