'use client';
// app/[...slug]/error.tsx
// Error boundary for article pages.
// Shows a detailed debug panel so we can identify the root cause of crashes.

import { useEffect } from 'react';

export default function ArticleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log full error + component stack to console for easier debugging
    console.error('[ArticleError] Page crashed:', error);
    console.error('[ArticleError] Message:', error.message);
    console.error('[ArticleError] Stack:', error.stack);
    if ('digest' in error) console.error('[ArticleError] Digest:', error.digest);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-20 px-4">
      <div className="max-w-2xl w-full bg-white border border-red-200 rounded-xl shadow-sm p-8">
        <h1 className="text-xl font-bold text-red-700 mb-2">Page Error — Debug Info</h1>
        <p className="text-sm text-gray-600 mb-6">
          Something crashed while rendering this article. Details below.
        </p>

        <div className="space-y-4 text-xs font-mono">
          <div>
            <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-1">Error Message</p>
            <pre className="bg-red-50 border border-red-200 rounded p-3 text-red-800 whitespace-pre-wrap break-all">
              {error.message}
            </pre>
          </div>

          {error.stack && (
            <div>
              <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-1">Stack Trace</p>
              <pre className="bg-gray-50 border border-gray-200 rounded p-3 text-gray-700 whitespace-pre-wrap break-all overflow-auto max-h-64">
                {error.stack}
              </pre>
            </div>
          )}

          {error.digest && (
            <div>
              <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-1">Digest</p>
              <pre className="bg-gray-50 border border-gray-200 rounded p-3 text-gray-700">{error.digest}</pre>
            </div>
          )}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={reset}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded transition-colors"
          >
            Back to home
          </a>
        </div>
      </div>
    </div>
  );
}
