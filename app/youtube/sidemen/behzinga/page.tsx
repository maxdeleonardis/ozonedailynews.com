import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Behzinga (Ethan Payne) | Fitness Transformation & Mental",
  description: "Complete profile of Behzinga (Ethan Payne): Sidemen member's inspiring fitness transformation, mental health advocacy, relationship with Faith Kelly, and",
  keywords: [
    "Behzinga",
    "Ethan Payne",
    "Behzinga fitness transformation",
    "Behzinga weight loss",
    "Ethan Payne mental health",
    "Behzinga Faith Kelly",
    "Sidemen Behzinga",
    "Behzinga 2026",
    "Ethan Payne fitness journey",
    "Behzinga charity match"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/behzinga',
  },
  openGraph: {
    title: 'Behzinga (Ethan Payne) | Fitness Journey & Mental Health',
    description: 'Full profile of Behzinga: transformative weight loss journey, mental health advocacy, engagement to Faith Kelly, and inspiring fitness content.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/sidemen/behzinga',
    siteName: 'ObjectWire',
    section: 'YouTube',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Behzinga (Ethan Payne) | Fitness Journey & Mental Health',
    description: 'Full profile of Behzinga: transformative weight loss journey, mental health advocacy, engagement to Faith Kelly, and inspiring fitness content.',
  },
};

export default function BehzingaPage() {
  return <ArticlePageDB slug="youtube-sidemen-behzinga" />;
}
