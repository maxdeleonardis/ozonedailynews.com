import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Render Vs Vercel: For Free Start-Up App Deployment Review",
  description: "Render and Vercel have emerged as frontrunners for bootstrapped founders seeking free, scalable options. Both promise seamless deploys, but they serve",
  alternates: {
    canonical: 'https://www.objectwire.org/render-vs-vercel-for-free-start-up-app-deployment',
  },
  openGraph: {
    title: "Render Vs Vercel: For Free Start-Up App Deployment Review",
    description: "Render and Vercel have emerged as frontrunners for bootstrapped founders seeking free, scalable options. Both promise seamless deploys, but they serve",
    type: 'article',
    url: "https://www.objectwire.org/render-vs-vercel-for-free-start-up-app-deployment",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Render Vs Vercel: For Free Start-Up App Deployment Review",
    description: "Render and Vercel have emerged as frontrunners for bootstrapped founders seeking free, scalable options. Both promise seamless deploys, but they serve",
  },
};

export default function RenderVsVercelPage() {
  return <WikiArticle slug="saas-news-render-vs-vercel-for-free-start-up-app-deployment" />;
}
