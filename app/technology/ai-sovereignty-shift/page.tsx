import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "The AI Sovereignty Shift | Why Your Questions Are Your Most",
  description: "Jensen Huang's strategy for the age of Digital Labor. Why the inquiry is the new proprietary moat and how to deploy Local AI Sovereignty.",
  keywords: ["Jensen Huang", "NVIDIA", "AI Strategy", "Digital Labor", "Physical AI", "IP Security"],
  authors: [{ name: "ObjectWire Editorial Team" }],
  alternates: {
    canonical: 'https://www.objectwire.org/technology/ai-sovereignty-shift',
  },
  openGraph: {
    title: "The AI Sovereignty Shift | Why Your Questions Are Your Most",
    description: "Jensen Huang",
    type: 'article',
    url: "https://www.objectwire.org/technology/ai-sovereignty-shift",
    siteName: 'ObjectWire',
    section: "Tech",
  },
  twitter: {
    card: 'summary_large_image',
    title: "The AI Sovereignty Shift | Why Your Questions Are Your Most",
    description: "Jensen Huang",
  },
};

export default function TechnologySovereigntyPage() {
  return <WikiArticle slug="technology-ai-sovereignty-shift" />;
}
