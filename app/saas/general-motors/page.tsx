import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'General Motors Austin | Tech & Innovation Hub Profile',
  description: 'Complete profile of General Motors Austin tech operations. Building the future of automotive with AI, software development, and electric vehicle',
  openGraph: {
    title: 'General Motors Austin | Automotive Technology Hub',
    description: 'GM\'s Austin Tech Ridge office focuses on AI, software engineering, and electric vehicle innovation.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "General Motors Austin | Automotive Technology Hub",
    description: "GM\'s Austin Tech Ridge office focuses on AI, software engineering, and electric vehicle innovation.",
  },
  alternates: {
    canonical: 'https://www.objectwire.org/saas/general-motors',
  },
};

export default function GeneralMotorsPage() {
  return <WikiArticle slug="saas-general-motors" />;
}
