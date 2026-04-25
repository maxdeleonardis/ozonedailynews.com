import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Contact Us | The Objective Wire",
  description: "Contact Object Wire for inquiries, tips, or story submissions. Get in touch with our team today.",
  alternates: {
    canonical: 'https://www.objectwire.org/case',
  },
  openGraph: {
    title: "Contact Us | The Objective Wire",
    description: "Contact Object Wire for inquiries, tips, or story submissions. Get in touch with our team today.",
    type: 'article',
    url: "https://www.objectwire.org/case",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Us | The Objective Wire",
    description: "Contact Object Wire for inquiries, tips, or story submissions. Get in touch with our team today.",
  },
};

export default function CasePage() {
  return <WikiArticle slug="get-help-case" />;
}
