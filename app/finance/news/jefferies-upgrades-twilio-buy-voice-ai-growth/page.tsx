import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/finance/news/jefferies-upgrades-twilio-buy-voice-ai-growth';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Jefferies Upgrades Twilio to Buy, Betting on Voice AI Growth',
  description: 'Jefferies upgraded Twilio from Hold to Buy with a $160 price target, arguing the company could capture 21 cents per voice AI call versus 3 cents on traditional calls through its ConversationRelay product.',
  keywords: [
    'Jefferies Twilio upgrade Buy',
    'Twilio voice AI 2026',
    'TWLO stock upgrade',
    'Twilio ConversationRelay',
    'voice AI economy Twilio',
    'Twilio price target $160',
    'Samad Samana Twilio',
    'Twilio speech to text',
    'voice AI orchestration layer',
    'Twilio gross margin improvement',
    'Twilio revenue per call voice AI',
    'Twilio 2027 free cash flow',
    'voice AI tech stack 2026',
    'Twilio AI upgrade analyst',
    'cloud telephony voice AI',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Jefferies Upgrades Twilio to Buy, Betting on Voice AI Growth',
    description: 'Twilio could capture 21 cents per voice AI call vs. 3 cents on traditional calls. Jefferies raises price target to $160.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfanasa'],
    publishedTime: '2026-04-08T22:00:00Z',
    modifiedTime: '2026-04-08T22:00:00Z',
    section: 'Finance',
    tags: ['Twilio', 'Jefferies', 'Voice AI', 'Stock Upgrade', 'Wall Street'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jefferies Upgrades Twilio to Buy on Voice AI Thesis',
    description: 'Voice AI could boost Twilio revenue per call 7x, from $0.03 to $0.21. Jefferies sets $160 target, ~21x 2027 FCF.',
  },
};

export default function FinanceNewsJefferiesUpgradesTwilioBuyVoiceAiGrowthPage() {
  return <NewsArticleDB slug="finance-news-jefferies-upgrades-twilio-buy-voice-ai-growth" />;
}
