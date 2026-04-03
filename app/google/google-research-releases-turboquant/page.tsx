import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';



export default function GoogleGoogleResearchReleasesTurboquantPage() {
  return <NewsArticleDB slug="google-google-research-releases-turboquant" />;
}
