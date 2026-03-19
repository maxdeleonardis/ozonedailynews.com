import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Naftali Ehrenkranz - Digital Director at Get Free Together | ObjectWire",
  description: "Profile of Naftali Ehrenkranz, Digital Director at Get Free Together 501(c)(4) organization. Examining background, hiring practices, and role in the organization's operations.",
  keywords: [
    "Naftali Ehrenkranz",
    "Get Free Together",
    "Digital Director",
    "501c4 staff",
    "nonprofit hiring",
    "political organizing"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/ngos/getfreetogether/digital-director',
  },
  openGraph: {
    type: "article",
    title: "Naftali Ehrenkranz - Digital Director Profile",
    description: "Investigating the Digital Director of Get Free Together 501(c)(4) organization.",
  },
};

export default function DigitalDirectorPage() {
  return <WikiArticle slug="ngos-getfreetogether-digital-director" />;
}
