import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Our Team | ObjectWire",
  description: "Meet the ObjectWire editorial team. Our journalists, analysts, and contributors are dedicated to delivering verified, source-cited intelligence.",
  alternates: {
    canonical: 'https://www.objectwire.org/team',
  },
  openGraph: {
    title: "Our Team | ObjectWire",
    description: "Meet the journalists and analysts behind ObjectWire's precision intelligence reporting.",
  },
};

export default function TeamPage() {
  return <WikiArticle slug="team" />;
}
