import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Strategic Report: The 2026 Sovereign Energy Squeeze",
  description: "Institutional analysis of the global shift toward 'Energy Sovereignty.' Why Big Tech's transition to nuclear power is creating a structural breaking point",
  keywords: [
    "AI data center energy demands 2026",
    "investing in uranium for AI growth",
    "SMR nuclear energy for data centers",
    "tokens per watt efficiency metric",
    "Cameco CCJ stock analysis 2026",
    "energy sovereignty investment strategies",
    "AI power infrastructure investing",
    "data center cooling technology trends"
  ],
  openGraph: {
    title: "Strategic Report: The 2026 Sovereign Energy Squeeze",
    description: "Financial Intelligence: 'Tokens per Watt' is the new metric as AI giants move toward corporate sovereign energy entities.",
    type: "article",
    url: "https://www.objectwire.org/finance/articles/the-2026-sovereign-squeeze-ai-nuclear-age",
    publishedTime: "2026-02-01T10:00:00Z",
    section: "Finance",
  },
  authors: [{ name: "ObjectWire Financial Desk" }],
  alternates: {
    canonical: 'https://www.objectwire.org/finance/articles/the-2026-sovereign-squeeze-ai-nuclear-age',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategic Report: The 2026 Sovereign Energy Squeeze',
    description: 'Financial Intelligence: ',
  },
};

export default function SovereignSqueezePage() {
  return <WikiArticle slug="finance-articles-the-2026-sovereign-squeeze-ai-nuclear-age" />;
}
