import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "OpenAI Authorizes First Insurance Apps in ChatGPT",
  description: "Spanish insurer Tuio and US platform Insurify launch regulated insurance tools within ChatGPT, marking a shift to AI commerce.",
  keywords: ["OpenAI", "ChatGPT", "Insurance", "Tuio", "Insurify", "Fintech"],
  authors: [{ name: "ObjectWire Editorial Team" }],
  alternates: {
    canonical: 'https://www.objectwire.org/open-ai/first-ai-insurance-apps',
  },
  openGraph: {
    title: "OpenAI Authorizes First Insurance Apps in ChatGPT",
    description: "Spanish insurer Tuio and US platform Insurify launch regulated insurance tools within ChatGPT, marking a shift to AI commerce.",
    type: 'article',
    url: "https://www.objectwire.org/open-ai/first-ai-insurance-apps",
    siteName: 'ObjectWire',
    section: "Tech",
  },
  twitter: {
    card: 'summary_large_image',
    title: "OpenAI Authorizes First Insurance Apps in ChatGPT",
    description: "Spanish insurer Tuio and US platform Insurify launch regulated insurance tools within ChatGPT, marking a shift to AI commerce.",
  },
};

export default function OpenAIInsurancePage() {
  return <WikiArticle slug="open-ai-first-ai-insurance-apps" />;
}
