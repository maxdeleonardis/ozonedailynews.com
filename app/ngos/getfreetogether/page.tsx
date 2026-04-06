import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Get Free Together: Investigating the 501(c)(4) Organization",
  description: "An investigative report into Get Free Together, a 501(c)(4) social welfare organization. Examining funding sources, political activities, leadership",
  keywords: [
    "Get Free Together",
    "501c4 organization",
    "social welfare organization",
    "political advocacy",
    "dark money",
    "nonprofit investigation",
    "political funding",
    "tax-exempt organization"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/ngos/getfreetogether',
  },
  openGraph: {
    type: "article",
    title: "Get Free Together: Inside the 501(c)(4) Organization",
    description: "Investigative analysis of Get Free Together's structure, funding, and political activities.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Together: Inside the 501(c)(4) Organization',
    description: 'Investigative analysis of Get Free Together',
  },
};

export default function GetFreeTogetherPage() {
  return <WikiArticle slug="ngos-getfreetogether" />;
}
