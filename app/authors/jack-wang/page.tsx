<<<<<<< Updated upstream
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { AuthorSchema } from "@/components/AuthorSchema";
import AuthorArticles from "@/components/AuthorArticles";
import { getEntriesByAuthor } from '@/lib/content-registry';
=======
import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';
>>>>>>> Stashed changes

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Jack Wang | Contributor & Journalist — ObjectWire",
  description: `Jack Wang is a co-founder and contributor at ObjectWire. published articles covering technology, gaming, finance, and digital culture.`,
  alternates: {
    canonical: 'https://www.objectwire.org/authors/jack-wang',
  },
  openGraph: {
    title: "Jack Wang | ObjectWire Contributor",
    description: "Co-founder bringing insightful metaphors and deep perspectives to journalism.",
    type: "profile",
    url: 'https://www.objectwire.org/authors/jack-wang',
  },
};

export default function JackSAuthorPage() {
  return <WikiArticle slug="authors-jack-wang" />;
}
