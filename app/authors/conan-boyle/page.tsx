import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Conan Boyle - Science & Technology Journalist | ObjectWire",
  description: `Conan Boyle is the founding writer of ObjectWire based in Austin, Texas. NCSU journalism graduate. published articles on biotechnology, CRISPR, medical research, and emerging technologies.`,
  alternates: {
    canonical: 'https://www.objectwire.org/authors/conan-boyle',
  },
  openGraph: {
    title: "Conan Boyle | ObjectWire Founding Writer",
    description: "Science & technology journalist covering biotechnology, CRISPR, medical breakthroughs, and emerging tech.",
    url: 'https://www.objectwire.org/authors/conan-boyle',
    siteName: "ObjectWire",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Conan Boyle - Science Journalist",
    description: "Founding writer at ObjectWire. NCSU journalism grad covering biotech, CRISPR & medical innovation.",
  },
};

export default function ConanBoyleAuthorPage() {
  return <WikiArticle slug="authors-conan-boyle" />;
}
