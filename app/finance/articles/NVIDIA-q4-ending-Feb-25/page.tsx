import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "NVIDIA Reports Record $68.1 Billion Revenue in Fiscal Q4 2026 | ObjectWire",
  description:
    "NVIDIA posted record Q4 FY2026 revenue of $68.1 billion, up 73% year-over-year, driven by $62.3 billion in Data Center sales. Full-year revenue hit $215.9 billion.",
  openGraph: {
    title: "NVIDIA Reports Record $68.1 Billion Revenue in Fiscal Q4 2026",
    description:
      "Data Center revenue hit $62.3 billion. Non-GAAP EPS of $1.62 beat analyst estimates. Q1 FY2027 guidance set at $78.0 billion.",
    type: "article",
    url: "https://www.objectwire.org/finance/articles/NVIDIA-q4-ending-Feb-25",
    publishedTime: "2026-02-25T22:00:00Z",
    section: "Finance",
  },
  authors: [{ name: "ObjectWire Financial Desk" }],
  alternates: {
    canonical: "https://www.objectwire.org/finance/articles/NVIDIA-q4-ending-Feb-25",
  },
};

export default function NvidiaQ4FY2026Page() {
  return <JackArticleDB slug="finance-articles-NVIDIA-q4-ending-Feb-25" />;
}
