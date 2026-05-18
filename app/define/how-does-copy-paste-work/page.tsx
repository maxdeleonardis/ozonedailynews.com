import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


export const metadata: Metadata = {
  title: "How Does Copy and Paste Work? A Technical Breakdown of",
  description: "A deep technical dive into how copy-paste works on modern operating systems, from keyboard interrupts and system calls to clipboard managers, memory",
  keywords: [
    'how does copy paste work technically',
    'ctrl c ctrl v system call explained',
    'clipboard memory buffer how it works',
    'copy paste operating system architecture',
    'keyboard interrupt ctrl c ctrl v',
    'clipboard manager Windows Mac Linux',
    'how clipboard stores data memory',
    'copy paste cross application data transfer',
    'system clipboard technical explanation 2026',
    'ctrl c ctrl v process behind the scenes',
  ],
  alternates: {
    canonical: 'https://www.ozonenetwork.news/define/how-does-copy-paste-work',
  },
  openGraph: {
    title: "How Does Copy and Paste Work? A Technical Breakdown of",
    description: "A deep technical dive into how copy-paste works on modern operating systems, from keyboard interrupts and system calls to clipboard managers, memory",
    type: 'article',
    url: "https://www.ozonenetwork.news/define/how-does-copy-paste-work",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "How Does Copy and Paste Work? A Technical Breakdown of",
    description: "A deep technical dive into how copy-paste works on modern operating systems, from keyboard interrupts and system calls to clipboard managers, memory",
  },
};

export default function HowDoesCopyPasteWorkPage() {
  return <WikiArticle slug="define-how-does-copy-paste-work" />;
}
