import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Apptronik | Humanoid Robotics Company Profile',
  description: 'Complete profile of Apptronik, a leading humanoid robotics company based in Austin, Texas. Building robots to work alongside humans in retail, logistics,',
  openGraph: {
    title: 'Apptronik | Humanoid Robotics Company Profile',
    description: 'Austin-based company developing humanoid robots for retail, logistics, and manufacturing industries.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apptronik | Humanoid Robotics Company Profile',
    description: 'Austin-based company developing humanoid robots for retail, logistics, and manufacturing industries.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/saas/apptronik',
  },
};

export default function ApptronikPage() {
  return <WikiArticle slug="saas-apptronik" />;
}
