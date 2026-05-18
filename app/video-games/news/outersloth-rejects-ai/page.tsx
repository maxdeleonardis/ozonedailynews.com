import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/news/outersloth-rejects-ai';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;

export const metadata: Metadata = {
  title:
    'Outersloth Rejects 100% of Generative AI Pitches, GDC',
  description:
    'Outersloth, the indie fund founded by Among Us creator Innersloth, confirmed at GDC 2026 it has rejected 100% of generative AI submissions. Of ~3,400',
  keywords: [
    'Outersloth rejects generative AI pitches',
    'Outersloth GDC 2026 Festival of Gaming',
    'Innersloth Among Us indie fund',
    'Outersloth Victoria Tran Forest Willard',
    'Outersloth 3400 submissions rejection rate',
    'indie game fund generative AI policy',
    'Outersloth contract public developer transparency',
    'Outersloth funded games Venba Unpacking',
    'GDC 2026 indie gaming AI controversy',
    'Outersloth $19 million 24 games',
    'indie game fund AI rejection 100 percent',
    'Outersloth soul criteria game selection',
    'Among Us profits indie reinvestment fund',
    'GDC Festival of Gaming 2026 indie session',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Outersloth Rejects 100% of Generative AI Pitches at GDC 2026',
    description:
      '"I really like a game that has soul. I don\'t know how to graph that... but we know it when we see it." Outersloth has rejected every single GenAI pitch',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Video Games',
    tags: [
      'Outersloth',
      'Innersloth',
      'Among Us',
      'Generative AI',
      'Indie Games',
      'GDC 2026',
      'Video Games',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outersloth Has Rejected 100% of Every AI Game Pitch It',
    description:
      '3,400 submissions. 50% rejected outright. 30% of those were GenAI. 0% of AI pitches funded. Victoria Tran: "I really like a game that has soul."',
  },
};

export default function OuterslothRejectsAIPage() {
  return <NewsArticleDB slug="video-games-news-outersloth-rejects-ai" />;
}
