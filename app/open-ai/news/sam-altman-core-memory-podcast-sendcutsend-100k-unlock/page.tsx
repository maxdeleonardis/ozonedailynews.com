import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/open-ai/news/sam-altman-core-memory-podcast-sendcutsend-100k-unlock';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Sam Altman Core Memory Podcast | $100K Unlock, Anthropic Jab',
  description:
    'A Nevada manufacturing CEO paid $100,000 to unlock Sam Altman and Greg Brockman\'s paywalled Core Memory podcast episode. Altman accused Anthropic of "fear-based marketing" over Claude Mythos restrictions.',
  keywords: [
    'Sam Altman Core Memory podcast',
    'Sam Altman Ashlee Vance interview 2026',
    'Jim Belosic SendCutSend $100000',
    'OpenAI Core Memory podcast unlocked',
    'Sam Altman Anthropic fear-based marketing',
    'Claude Mythos Project Glasswing',
    'Sam Altman Greg Brockman podcast',
    'OpenAI GPT-5.5 personal AGI',
    'Core Memory podcast Ashlee Vance',
    'Sam Altman doomerism AI',
    'OpenAI Elon Musk lawsuit podcast',
    'SendCutSend manufacturing sponsor OpenAI',
    'Sam Altman Anthropic criticism 2026',
    'Greg Brockman podcast appearance 2026',
    'OpenAI news April 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Sam Altman Core Memory Podcast | $100K Unlock, Anthropic Criticism',
    description:
      'Manufacturing CEO Jim Belosic paid $100K to free the paywalled Sam Altman and Greg Brockman episode. Altman called Anthropic\'s Claude Mythos rollout "clearly incredible marketing... selling a bomb shelter."',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-25T16:30:00Z',
    modifiedTime: '2026-04-25T16:30:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Podcast microphone in a recording studio representing the Core Memory episode with Sam Altman' }],
    tags: ['Sam Altman', 'OpenAI', 'Anthropic', 'Core Memory', 'Greg Brockman', 'Podcast'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Someone Paid $100K to Unlock the Sam Altman Podcast | He Called Anthropic a "Bomb Shelter" Salesman',
    description:
      'Nevada CEO Jim Belosic paid Ashlee Vance $100K to free the paywalled Altman episode. Altman\'s Anthropic dig went viral: "We will sell you a bomb shelter for $100 million."',
    images: [OG_IMAGE],
  },
};

export default function OpenAiNewsSamAltmanCoreMemoryPodcastSendcutsend100kUnlockPage() {
  return <NewsArticleDB slug="open-ai-news-sam-altman-core-memory-podcast-sendcutsend-100k-unlock" />;
}
