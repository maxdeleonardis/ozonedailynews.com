import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Pegatron Opens U.S. Factory in TX Bringing 100s of New Jobs | ObjectWire.org",
  description: "Taiwanese electronics giant Pegatron announces its inaugural U.S. manufacturing site in Georgetown, Texas, with a $35 million capital commitment.",
  alternates: {
    canonical: 'https://www.objectwire.org/pegatron-opens-us-factory-tx',
  },
};

export default function PegatronFactoryPage() {
  return <WikiArticle slug="news-texas-pegatron-opens-us-factory" />;
}
