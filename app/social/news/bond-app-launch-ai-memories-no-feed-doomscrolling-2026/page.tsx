import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/social/news/bond-app-launch-ai-memories-no-feed-doomscrolling-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Bond App Launch | AI Memories, No Feed, No Ads, Post-Feed Social',
  description: 'Bond, a new social app from Google DeepMind, Meta, and OpenAI veterans, launched out of stealth with no ads, no followers, and an AI that turns private memories into life recommendations.',
  keywords: [
    'Bond app launch 2026',
    'Bond social media app no ads',
    'Bond AI memories app',
    'Bond app post-feed social network',
    'Dino Becirovic Bond app',
    'Bond app Caffeinated Capital',
    'Bond app doomscrolling alternative',
    'Bond app iOS App Store',
    'Bond app data licensing model',
    'Bond app Google DeepMind OpenAI veterans',
    'Bond app Gemini Anthropic OpenAI AI',
    'social media alternative 2026',
    'anti-doomscrolling social app',
    'Bond app Hanxin Jin Meta',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Bond App Launch | AI Memories, No Feed & No Ads Post-Feed Social',
    description: 'Bond wants you to use it less. Built by ex-DeepMind, Meta, OpenAI, and TikTok engineers, the app replaces infinite scroll with private AI-powered memories and a $5M seed round.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Marcus Webb'],
    publishedTime: '2026-04-22T18:00:00Z',
    modifiedTime: '2026-04-22T18:00:00Z',
    section: 'Tech',
    tags: ['Bond App', 'Social Media', 'AI', 'Doomscrolling', 'Caffeinated Capital'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bond App Launched | A Social Network That Tells You to Get Off Your Phone',
    description: 'No feed. No ads. No follower counts. Bond uses AI memories from Gemini, OpenAI, and Anthropic to recommend real-life actions. Built by ex-DeepMind and Meta engineers.',
  },
};

export default function SocialNewsBondAppLaunchAiMemoriesNoFeedDoomscrolling2026Page() {
  return <NewsArticleDB slug="social-news-bond-app-launch-ai-memories-no-feed-doomscrolling-2026" />;
}
