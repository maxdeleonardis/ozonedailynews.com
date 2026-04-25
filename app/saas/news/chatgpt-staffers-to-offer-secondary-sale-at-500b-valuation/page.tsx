import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "ChatGPT Staffers to Offer Secondary Sale at $500B Valuation",
  description: "OpenAI is negotiating a secondary stock sale, allowing current and former employees to sell $6 billion in shares to investors like SoftBank at a $500",
  alternates: {
    canonical: 'https://www.objectwire.org/chatgpt-staffers-to-offer-secondary-sale-at-500b-valuation',
  },
  openGraph: {
    title: "ChatGPT Staffers to Offer Secondary Sale at $500B Valuation",
    description: "OpenAI is negotiating a secondary stock sale, allowing current and former employees to sell $6 billion in shares to investors like SoftBank at a $500",
    type: 'article',
    url: "https://www.objectwire.org/chatgpt-staffers-to-offer-secondary-sale-at-500b-valuation",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "ChatGPT Staffers to Offer Secondary Sale at $500B Valuation",
    description: "OpenAI is negotiating a secondary stock sale, allowing current and former employees to sell $6 billion in shares to investors like SoftBank at a $500",
  },
};

export default function ChatGPTSecondarySalePage() {
  return <WikiArticle slug="saas-news-chatgpt-staffers-to-offer-secondary-sale-at-500b-valuation" />;
}
