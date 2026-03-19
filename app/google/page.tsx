import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Google & Alphabet Inc - News, Analysis & Updates | ObjectWire",
  description: "Comprehensive coverage of Google, Alphabet Inc, and its subsidiaries including Waymo, DeepMind, and more. Latest news, business analysis, and technology updates.",
  keywords: ["Google", "Alphabet Inc", "Waymo", "DeepMind", "Google AI", "autonomous vehicles", "search engine", "tech news"],
  openGraph: {
    title: "Google & Alphabet Inc Coverage | ObjectWire",
    description: "In-depth reporting on Google, Alphabet, and all subsidiary companies.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.objectwire.org/google",
  },
};

export default function GooglePage() {
  return <WikiArticle slug="google" />;
}
