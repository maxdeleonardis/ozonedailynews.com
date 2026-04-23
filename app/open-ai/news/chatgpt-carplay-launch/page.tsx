import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/open-ai/news/chatgpt-carplay-launch';
const OG_IMAGE = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'ChatGPT on CarPlay | First Major AI App for iOS 26.4',
  description:
    'ChatGPT is now on CarPlay following iOS 26.4, making it the first major AI assistant in Apple\'s in-car platform. Voice-only, no text, no wake word.',
  keywords: [
    'ChatGPT CarPlay',
    'ChatGPT CarPlay iOS 26.4',
    'OpenAI CarPlay app 2026',
    'first AI app CarPlay',
    'iOS 26.4 voice conversational apps CarPlay',
    'ChatGPT voice mode car driving',
    'Apple CarPlay AI assistant 2026',
    'ChatGPT iPhone update April 2026',
    'Google Gemini CarPlay',
    'Anthropic Claude CarPlay',
    'Siri vs ChatGPT CarPlay',
    'Apple voice-based conversational apps',
    'CarPlay distraction guidelines AI',
    'iOS 27 Siri chatbot upgrade',
    'ChatGPT App Store update',
    'OpenAI in-car AI',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'ChatGPT on CarPlay | First Major AI App for iOS 26.4',
    description:
      'OpenAI updated its iPhone app to add a dedicated CarPlay experience, making ChatGPT the first major AI chatbot on Apple\'s in-car platform. Voice-only,',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Alfanasa'],
    publishedTime: '2026-04-02T10:00:00Z',
    modifiedTime: '2026-04-02T10:00:00Z',
    section: 'Tech',
    tags: ['OpenAI', 'ChatGPT', 'Apple CarPlay', 'iOS 26.4', 'AI Assistants'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChatGPT is now on CarPlay, beating Gemini and Claude to the dashboard',
    description:
      'iOS 26.4 opened CarPlay to AI chatbots on March 24. OpenAI shipped a voice-only CarPlay app days later. Gemini and Claude have no release date yet.',
  },
};

export default function OpenAiNewsChatgptCarplayLaunchPage() {
  return <NewsArticleDB slug="open-ai-news-chatgpt-carplay-launch" />;
}
