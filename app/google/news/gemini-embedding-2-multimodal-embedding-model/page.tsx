import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Gemini Embedding 2 | Google\'s First Natively Multimodal Embedding Model',
  description: 'Discover Gemini Embedding 2, Google\'s first natively multimodal embedding model that maps text, images, audio, video, and documents into a single vector',
  keywords: ['Gemini Embedding 2', 'Google', 'multimodal embedding', 'AI', 'RAG', 'vector search', 'text embeddings', 'image embeddings', 'machine learning', 'Google DeepMind'],
  openGraph: {
    title: 'Gemini Embedding 2: Google\'s First Natively Multimodal Embedding Model',
    description: 'Google\'s Gemini Embedding 2 maps text, images, audio, video, and PDFs into a single unified vector space, simplifying AI stacks and powering the next',
    type: 'article',
    publishedTime: '2026-03-11T09:00:00Z',
    authors: ['ObjectWire Staff'],
    images: ['/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gemini Embedding 2: Google\'s First Natively Multimodal Embedding Model',
    description: 'Google\'s Gemini Embedding 2 maps text, images, audio, video, and PDFs into a single unified vector space for next‑gen search and RAG.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/google/news/gemini-embedding-2-multimodal-embedding-model',
  },
};

export default function GeminiEmbedding2Article() {
  return <NewsArticleDB slug="google-news-gemini-embedding-2-multimodal-embedding-model" />;
}
