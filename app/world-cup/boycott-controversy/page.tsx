import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "2026 World Cup Boycott Controversy | ICE Immigration",
  description: "UPDATED JAN 27 2026: Human rights groups demand World Cup cancellation or relocation citing ICE enforcement concerns, family separations, and fan safety",
  keywords: [
    "World Cup 2026 boycott",
    "FIFA World Cup controversy",
    "ICE immigration policies",
    "World Cup cancellation calls",
    "FIFA human rights",
    "World Cup 2026 protests",
    "immigration enforcement World Cup",
    "FIFA pressure",
    "World Cup relocation",
    "soccer human rights",
    "2026 World Cup ICE",
    "World Cup boycott movement",
  ],
  authors: [{ name: "ObjectWire Team" }],
  openGraph: {
    title: "2026 World Cup Boycott Controversy Over ICE Immigration",
    description: "Human rights groups demand World Cup cancellation citing ICE enforcement concerns and family separations.",
    type: "article",
    url: "https://www.objectwire.org/world-cup/boycott-controversy",
    siteName: "ObjectWire",
    publishedTime: "2026-01-27T08:00:00Z",
    modifiedTime: "2026-01-27T14:30:00Z",
    section: "Breaking News",
    tags: ["World Cup 2026", "FIFA", "ICE", "Immigration", "Human Rights", "Boycott"],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Cup 2026 Faces Boycott Calls Over ICE Policies",
    description: "Human rights groups demand cancellation as FIFA faces mounting pressure over U.S. immigration enforcement.",
  },
  alternates: {
    canonical: "https://www.objectwire.org/world-cup/boycott-controversy",
  },
};

export default function WorldCupBoycottPage() {
  return <WikiArticle slug="world-cup-boycott-controversy" />;
}
