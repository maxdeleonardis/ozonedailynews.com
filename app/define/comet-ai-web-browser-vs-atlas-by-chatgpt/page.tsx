import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Comet AI Web Browser vs Atlas by ChatGPT",
  description: "AI web browsers are reshaping how we surf the internet, blending machine learning with everyday navigation to deliver smarter, more personalized",
  alternates: {
    canonical: 'https://www.objectwire.org/comet-ai-web-browser-vs-atlas-by-chatgpt',
  },
  openGraph: {
    title: "Comet AI Web Browser vs Atlas by ChatGPT",
    description: "AI web browsers are reshaping how we surf the internet, blending machine learning with everyday navigation to deliver smarter, more personalized",
    type: 'article',
    url: "https://www.objectwire.org/comet-ai-web-browser-vs-atlas-by-chatgpt",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Comet AI Web Browser vs Atlas by ChatGPT",
    description: "AI web browsers are reshaping how we surf the internet, blending machine learning with everyday navigation to deliver smarter, more personalized",
  },
};

export default function CometAIvsAtlasPage() {
  return <WikiArticle slug="define-comet-ai-web-browser-vs-atlas-by-chatgpt" />;
}
