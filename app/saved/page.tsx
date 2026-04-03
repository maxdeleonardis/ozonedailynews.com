// app/saved/page.tsx — Saved articles page

import type { Metadata } from 'next';
import SavedArticles    from '@/components/discovery/SavedArticles';
import Link             from 'next/link';

export const metadata: Metadata = {
  title: 'Saved Articles | ObjectWire',
  description: 'Your bookmarked articles on ObjectWire.',
  robots: { index: false, follow: false },
};

export default function SavedPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Back nav */}
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

        <h1 className="text-3xl font-black text-gray-900 mb-1">Saved Articles</h1>
        <p className="text-gray-500 text-sm mb-8">
          Articles you&apos;ve bookmarked. Saved indefinitely, remove them any time.
        </p>

        <SavedArticles />
      </div>
    </main>
  );
}
