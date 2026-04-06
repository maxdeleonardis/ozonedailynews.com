import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Austin, Texas Private Detective Agency | ObjectWire.org",
  description: "Our digital forensics unit uncovers hidden email accounts, social-media aliases, cryptocurrency transactions, and dark-web references linked to harassment.",
  alternates: {
    canonical: 'https://www.objectwire.org/austin-private-detective-agency',
  },
};

export default function AustinPrivateDetectivePage() {
  return <WikiArticle slug="austin-private-detective-agency" />;
}
