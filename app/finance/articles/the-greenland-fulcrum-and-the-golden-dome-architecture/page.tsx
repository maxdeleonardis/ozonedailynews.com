import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Strategic Report: The Greenland Fulcrum and the 'Golden Dome' Architecture",
  description: "Analysis of the 2026 Arctic Defense Alignment, the Golden Dome project, and its impact on critical minerals and defense sectors including CRML, MP, LMT,",
  openGraph: {
    title: "The Greenland Fulcrum and the 'Golden Dome' Architecture",
    description: "Financial Intelligence / Geopolitical Strategy: Analyzing the Arctic Defense Alignment and its multi-layered interception CapEx.",
    type: "article",
    url: "https://www.objectwire.org/finance/articles/the-greenland-fulcrum-and-the-golden-dome-architecture",
    publishedTime: "2026-02-01T08:00:00Z",
    section: "Finance",
  },
  authors: [{ name: "ObjectWire Financial Desk" }],
  alternates: {
    canonical: 'https://www.objectwire.org/finance/articles/the-greenland-fulcrum-and-the-golden-dome-architecture',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Greenland Fulcrum and the ',
    description: 'Financial Intelligence / Geopolitical Strategy: Analyzing the Arctic Defense Alignment and its multi-layered interception CapEx.',
  },
};

export default function GreenlandFulcrumPage() {
  return <WikiArticle slug="finance-articles-the-greenland-fulcrum-and-the-golden-dome-architecture" />;
}
