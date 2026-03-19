import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Comet AI Web Browser vs Atlas by ChatGPT - ObjectWire.org",
  description: "AI web browsers are reshaping how we surf the internet, blending machine learning with everyday navigation to deliver smarter, more personalized experiences.",
  alternates: {
    canonical: 'https://www.objectwire.org/comet-ai-web-browser-vs-atlas-by-chatgpt',
  },
};

export default function CometAIvsAtlasPage() {
  return <WikiArticle slug="define-comet-ai-web-browser-vs-atlas-by-chatgpt" />;
}
