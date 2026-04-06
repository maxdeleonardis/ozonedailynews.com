import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Apple and Google Announce Strategic Gemini AI Partnership",
  description: "In a historic move, Apple and Google have announced a strategic partnership to integrate Google's Gemini AI into Apple's ecosystem, marking a major shift",
  keywords: ["Apple", "Google", "Gemini AI", "artificial intelligence", "tech partnership", "iOS", "iPhone", "AI integration"],
  openGraph: {
    title: "Apple and Google Announce Strategic Gemini AI Partnership",
    description: "Historic partnership brings Google's Gemini AI to Apple devices, reshaping the competitive landscape of AI-powered consumer technology.",
    type: "article",
    publishedTime: "2026-01-23T00:00:00Z",
  },
  alternates: {
    canonical: 'https://www.objectwire.org/apple-google-gemini-partnership',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple and Google Announce Strategic Gemini AI Partnership',
    description: 'Historic partnership brings Google',
  },
};

export default function AppleGoogleGeminiPartnershipPage() {
  return <WikiArticle slug="apple-news-apple-google-gemini-partnership" />;
}
