import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Alphabet or Nvidia: Here's Who I Think Will Win the AI Chip War - ObjectWire.org",
  description: "Google's TPUs embody targeted engineering in AI acceleration, purpose-built for deep learning workloads. Analyzing the AI chip war between Alphabet and",
  alternates: {
    canonical: 'https://www.objectwire.org/alphabet-or-nvidia-here-s-who-i-think-will-win-the-ai-chip-war',
  },
  openGraph: {
    title: "Alphabet or Nvidia: Here",
    description: "Google",
    type: 'article',
    url: "https://www.objectwire.org/alphabet-or-nvidia-here-s-who-i-think-will-win-the-ai-chip-war",
    siteName: 'ObjectWire',
    section: "Tech",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alphabet or Nvidia: Here",
    description: "Google",
  },
};

export default function AlphabetVsNvidiaAIChipPage() {
  return <WikiArticle slug="google-news-alphabet-or-nvidia-here-s-who-i-think-will-win-the-ai-chip-war" />;
}
