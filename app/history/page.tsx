// app/history/page.tsx — Reading history page

import type { Metadata } from 'next';
import ArticleHistory from '@/components/articles/ArticleHistory';
import Link           from 'next/link';

export const metadata: Metadata = {
  title: 'Reading History',
  description: 'Your recently viewed articles on ObjectWire.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.objectwire.org/history',
  },
  openGraph: {
    title: "Reading History",
    description: "Your recently viewed articles on ObjectWire.",
    type: 'article',
    url: "https://www.objectwire.org/history",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Reading History",
    description: "Your recently viewed articles on ObjectWire.",
  },
};

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </Link>
        </div>

        <h1 className="text-3xl font-black text-gray-900 mb-1">Reading History</h1>
        <p className="text-gray-500 text-sm mb-8">
          Articles you&apos;ve read in the last 7 days. History is automatically cleared after that.
        </p>

        <ArticleHistory />
      </div>
    </main>
  );
}
