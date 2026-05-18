import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


export const metadata: Metadata = {
  title: "Austin Private Detective + Investigative Journalism Services",
  description: "Based in Austin, Texas, we provide discreet, results-driven private detective services for individuals, businesses, and legal professionals.",
  alternates: {
    canonical: 'https://www.ozonenetwork.news/get-help',
  },
  openGraph: {
    title: "Austin Private Detective + Investigative Journalism Services",
    description: "Based in Austin, Texas, we provide discreet, results-driven private detective services for individuals, businesses, and legal professionals.",
    type: 'article',
    url: "https://www.ozonenetwork.news/get-help",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Austin Private Detective + Investigative Journalism Services",
    description: "Based in Austin, Texas, we provide discreet, results-driven private detective services for individuals, businesses, and legal professionals.",
  },
};

export default function GetHelpPage() {
  return <WikiArticle slug="get-help" />;
}
