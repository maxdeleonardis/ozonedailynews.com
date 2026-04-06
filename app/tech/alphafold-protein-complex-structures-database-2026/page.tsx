import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = "/tech/alphafold-protein-complex-structures-database-2026";
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    "AlphaFold Database Adds 1.7 Million Protein Complex Structures in Historic Expansion",
  description:
    "The AlphaFold Protein Structure Database has added protein complex structures for the first time, with 1.7 million high-confidence homodimer predictions",
  keywords: [
    "AlphaFold protein complex structures 2026",
    "EMBL-EBI AlphaFold homodimer database update March 2026",
    "Google DeepMind NVIDIA Seoul National University protein folding",
    "AlphaFold database expansion 1.7 million structures",
    "protein complex homodimer structure prediction AI",
    "structural biology database update 2026",
    "AlphaFold EBI protein interactions",
    "DeepMind protein structure database complex",
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title:
      "AlphaFold Database Adds 1.7 Million Protein Complex Structures in Historic Expansion",
    description:
      "A four-way collaboration between EMBL-EBI, Google DeepMind, NVIDIA, and Seoul National University has added 1.7 million homodimer predictions to the",
    type: "article",
    url: FULL_URL,
    siteName: "ObjectWire",
    publishedTime: "2026-03-18T10:00:00Z",
    modifiedTime: "2026-03-18T10:00:00Z",
    section: "Technology",
    tags: [
      "AlphaFold",
      "Protein Structure",
      "DeepMind",
      "EMBL-EBI",
      "NVIDIA",
      "Structural Biology",
      "AI",
      "Bioinformatics",
      "Science",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AlphaFold Database Adds 1.7 Million Protein Complex Structures",
    description:
      "EMBL-EBI, Google DeepMind, NVIDIA & Seoul National University expand AlphaFold with 1.7M homodimer complex predictions, a first for the landmark",
  },
  other: {
    news_keywords:
      "AlphaFold protein complex, homodimer structures, EMBL-EBI DeepMind NVIDIA Seoul National University, structural biology 2026",
  },
};

export default function AlphaFoldComplexPage() {
  return <ArticlePageDB slug="tech-alphafold-protein-complex-structures-database-2026" />;
}
