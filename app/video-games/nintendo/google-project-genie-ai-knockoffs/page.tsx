import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Google\'s Project Genie AI Tool Generates Nintendo Game Knockoffs',
  description: 'Google launches Project Genie AI tool that generates playable Nintendo knockoffs including Super Mario and Zelda worlds without copyright safeguards,',
  keywords: [
    'Google Project Genie',
    'AI gaming',
    'Nintendo knockoffs',
    'copyright concerns',
    'AI-generated games',
    'Super Mario AI',
    'Zelda AI',
    'gaming copyright',
    'generative AI',
    'Google AI',
    'Jay Peters',
    'The Verge',
    'intellectual property',
    'AI ethics',
  ],
  alternates: {
    canonical: 'https://www.ozonenetwork.news/nintendo/google-project-genie-ai-knockoffs',
  },
  openGraph: {
    title: 'Google\'s Project Genie AI Creates Nintendo Game Knockoffs',
    description: 'AI tool generates playable worlds resembling Mario, Zelda without restrictions.',
    type: 'article',
    url: 'https://www.ozonenetwork.news/nintendo/google-project-genie-ai-knockoffs',
    siteName: 'OzoneNews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google AI Tool Makes Nintendo Knockoffs',
    description: 'Project Genie generates playable Mario and Zelda clones without safeguards.',
  },
};

export default function ProjectGeniePage() {
  return <NewsArticleDB slug="video-games-nintendo-google-project-genie-ai-knockoffs" />;
}
