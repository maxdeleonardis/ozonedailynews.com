import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Blitzy AI-Powered Autonomous Software Development Review | ObjectWire.org",
  description: "Blitzy, born out of the Harvard Innovation Lab, is a generative AI platform designed to automate custom software development. Unlike traditional low-code",
  alternates: {
    canonical: 'https://www.objectwire.org/blitzy-ai-powered-autonomous-software-development',
  },
};

export default function BlitzyAIPage() {
  return <WikiArticle slug="blitzy-ai-powered-autonomous-software-development" />;
}
