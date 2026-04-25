import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Pegatron Opens U.S. Factory in TX Bringing 100s of New Jobs",
  description: "Taiwanese electronics giant Pegatron announces its inaugural U.S. manufacturing site in Georgetown, Texas, with a $35 million capital commitment.",
  alternates: {
    canonical: 'https://www.objectwire.org/pegatron-opens-us-factory-tx',
  },
  openGraph: {
    title: "Pegatron Opens U.S. Factory in TX Bringing 100s of New Jobs",
    description: "Taiwanese electronics giant Pegatron announces its inaugural U.S. manufacturing site in Georgetown, Texas, with a $35 million capital commitment.",
    type: 'article',
    url: "https://www.objectwire.org/pegatron-opens-us-factory-tx",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pegatron Opens U.S. Factory in TX Bringing 100s of New Jobs",
    description: "Taiwanese electronics giant Pegatron announces its inaugural U.S. manufacturing site in Georgetown, Texas, with a $35 million capital commitment.",
  },
};

export default function PegatronFactoryPage() {
  return <WikiArticle slug="news-texas-pegatron-opens-us-factory" />;
}
