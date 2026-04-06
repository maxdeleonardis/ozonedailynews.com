import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/apple/news/apple-removes-anything-vibe-coding-app-store-2026';
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Apple Removes Anything Vibe Coding App from App Store',
  description:
    'Apple pulled AI-powered vibe coding app Anything from the App Store, confirmed by co-founder Dhruv Amin. The removal is Apple\'s most aggressive action',
  keywords: [
    'Apple removes Anything app',
    'vibe coding app Apple rejection',
    'Anything app store removal 2026',
    'Dhruv Amin Anything CEO',
    'Apple no-code AI app ban',
    'vibe coding App Store policy',
    'Apple AI app developer tools',
    'Apple App Store review 2026',
    'no-code app builder Apple',
    'Apple vibe coding crackdown',
    'AI app builder App Store removal',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Apple Pulls Vibe Coding App Anything from the App Store',
    description:
      'Apple removed Anything, an AI-powered app that lets users build software without writing code, in its most aggressive move yet against vibe coding tools',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-31T10:00:00Z',
    modifiedTime: '2026-03-31T10:00:00Z',
    section: 'Tech',
    tags: ['Apple', 'App Store', 'Vibe Coding', 'AI Tools', 'Developer Tools'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple just pulled a vibe coding app from the App Store',
    description:
      'Anything, an AI app that lets users build software without writing code, was removed by Apple last Thursday. CEO Dhruv Amin confirmed the ban.',
  },
};

export default function AppleNewsAppleRemovesAnythingVibeCodingAppStore2026Page() {
  return <NewsArticleDB slug="apple-news-apple-removes-anything-vibe-coding-app-store-2026" />;
}
