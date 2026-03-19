import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Press Release Writing & Distribution Services | Austin TX - ObjectWire",
  description: "Professional press release writing, distribution, and media relations services in Austin, Texas. Get your news featured in major outlets with expert PR writing and strategic distribution.",
  keywords: ["press release Austin", "PR writing Texas", "press release distribution", "media relations Austin", "Austin PR services"],
  alternates: {
    canonical: 'https://www.objectwire.org/service/press-release',
  },
};

export default function PRBrandingPressReleasePage() {
  return <WikiArticle slug="service-press-release" />;
}
