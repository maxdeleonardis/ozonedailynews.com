import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Non-Degree Studies at UT Austin 2026: Complete Guide - ObjectWire.org",
  description: "Designed for high school graduates, working adults, the unemployed, and even current UT students seeking extras. Complete guide to non-degree studies at UT Austin.",
  alternates: {
    canonical: 'https://www.objectwire.org/non-degree-studies-at-university-of-texas-austin',
  },
};

export default function NonDegreeStudiesUTAustinPage() {
  return <WikiArticle slug="college-guides-non-degree-studies-at-university-of-texas-austin" />;
}
