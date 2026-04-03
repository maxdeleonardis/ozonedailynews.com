import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "The AI Sovereignty Shift: Why Your Questions Are Your Most Valuable IP | ObjectWire",
  description: "Jensen Huang's strategy for the age of Digital Labor. Why the inquiry is the new proprietary moat and how to deploy Local AI Sovereignty.",
  keywords: ["Jensen Huang", "NVIDIA", "AI Strategy", "Digital Labor", "Physical AI", "IP Security"],
  authors: [{ name: "ObjectWire Editorial Team" }],
  alternates: {
    canonical: 'https://www.objectwire.org/technology/ai-sovereignty-shift',
  },
};

export default function TechnologySovereigntyPage() {
  return <WikiArticle slug="technology-ai-sovereignty-shift" />;
}
