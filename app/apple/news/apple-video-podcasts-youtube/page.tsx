import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/apple/news/apple-video-podcasts-youtube';

export const metadata: Metadata = {
  title: 'Apple Launches Full Video Podcasts to Challenge YouTube Dominance | ObjectWire',
  description:
    'Apple is integrating a native video experience into Apple Podcasts this spring, blending audio and video in one seamless app. The move is a direct challenge to YouTube\'s grip on video podcasting and puts new pressure on Spotify.',
  keywords: [
    'Apple Podcasts video',
    'Apple video podcasts',
    'Apple vs YouTube',
    'Apple Podcasts spring 2026',
    'video podcast platform',
    'Apple Podcasts update',
    'YouTube competitor',
    'Spotify competitor',
    'podcast video streaming',
    'Apple streaming',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Apple Launches Full Video Podcasts to Challenge YouTube Industry Dominance',
    description:
      'Apple Podcasts is going full video this spring, a native watch-and-listen experience designed to pull creators and audiences away from YouTube and Spotify.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'],
    publishedTime: '2026-02-18T10:00:00Z',
    modifiedTime: '2026-02-18T10:00:00Z',
    section: 'Technology',
    tags: ['Apple', 'Apple Podcasts', 'YouTube', 'Video Podcasts', 'Streaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple Launches Full Video Podcasts | A Direct Shot at YouTube',
    description:
      'Apple Podcasts is getting a native video experience this spring. Here\'s what it means for YouTube, Spotify, and the future of podcasting.',
  },
};

export default function AppleVideoPodcastsPage() {
  return <NewsArticleDB slug="apple-news-apple-video-podcasts-youtube" />;
}
