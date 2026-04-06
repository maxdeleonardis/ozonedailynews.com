import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/xbox-co-creator-microsoft-sunsetting-gaming-ai';

export const metadata: Metadata = {
  title:
    "Xbox Co-Creator Says Microsoft Is 'Sunsetting' Gaming for AI",
  description:
    'Seamus Blackley, one of the original creators of Xbox, says Microsoft is quietly winding down its gaming brand as the company goes all-in on generative',
  keywords: [
    'Seamus Blackley Xbox Microsoft sunsetting gaming',
    'Microsoft gaming decline AI',
    'Xbox co-creator Microsoft AI pivot',
    'Seamus Blackley Xbox creator',
    'Microsoft sunsetting Xbox',
    'Microsoft generative AI gaming',
    'Xbox future Microsoft AI',
    'Phil Spencer Microsoft gaming',
    'Microsoft gaming brand decline 2026',
    'Xbox going away Microsoft AI',
    'Seamus Blackley 2026',
    'Microsoft abandoning gaming',
    'Xbox AI pivot Satya Nadella',
    'Microsoft gaming head installed decline',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Xbox Co-Creator Says Microsoft Is 'Sunsetting' Gaming for AI",
    description:
      "Seamus Blackley, who co-created the original Xbox, believes Microsoft is quietly winding down its gaming identity as it pivots entirely to generative AI,",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'],
    publishedTime: '2026-02-23T14:00:00Z',
    modifiedTime: '2026-02-23T14:00:00Z',
    section: 'Gaming & Technology',
    tags: ['Xbox', 'Microsoft', 'Seamus Blackley', 'Gaming', 'AI', 'Satya Nadella', 'Microsoft Gaming', 'Xbox decline'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Xbox Co-Creator: Microsoft Is 'Sunsetting' Gaming to Go All-In on AI",
    description:
      "Seamus Blackley, one of the original Xbox creators, says Microsoft's new gaming chief was installed to manage the brand's decline as the company pivots to",
  },
};

export default function XboxCoCreatorSunsetGamingPage() {
  return <NewsArticleDB slug="microsoft-news-xbox-co-creator-microsoft-sunsetting-gaming-ai" />;
}
