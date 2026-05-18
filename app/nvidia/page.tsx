import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const revalidate = 3600;

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


export const metadata: Metadata = {
  title: "Nvidia Corporation | AI Computing, Graphics Processing",
  description: "Comprehensive overview of Nvidia Corporation, world leader in graphics processing units (GPUs), artificial intelligence computing, data centers, and",
  keywords: [
    "Nvidia",
    "GPU",
    "artificial intelligence",
    "data center",
    "Jensen Huang",
    "CUDA",
    "GeForce",
    "AI computing",
    "graphics cards",
    "semiconductor",
  ],
  alternates: {
    canonical: 'https://www.ozonenetwork.news/nvidia',
  },
  openGraph: {
    title: "Nvidia Corporation | AI Computing & Graphics Processing",
    description: "Complete guide to Nvidia, covering GPU technology, AI computing platforms, market dominance, and data center solutions.",
    type: "article",
    url: "https://www.ozonenetwork.news/nvidia",
    images: [
      {
        url: "https://www.ozonenetwork.news/images/nvidia-og.jpg",
        width: 1200,
        height: 630,
        alt: "Nvidia Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nvidia Corporation: AI Computing Leader",
    description: "Comprehensive overview of Nvidia GPU and AI technology.",
    images: ["https://www.ozonenetwork.news/images/nvidia-twitter.jpg"],
  },
};

export default function NvidiaPage() {
  return <WikiArticle slug="nvidia" />;
}
