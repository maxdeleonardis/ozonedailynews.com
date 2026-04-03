'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

export default function TopStrip({ dateString }: { dateString: string }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery('');
    }
  };

  return (
    <div className="border-b border-gray-300 bg-gray-50">
      <div className="container mx-auto px-4 py-1.5 flex items-center justify-between">
        <span className="text-xs font-mono text-gray-500">{dateString}</span>

        <div className="flex items-center gap-3">
          {searchOpen ? (
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search ObjectWire…"
                className="text-xs font-mono border-b border-black bg-transparent outline-none w-48 py-0.5 placeholder-gray-400 text-gray-900"
              />
              <button type="submit" aria-label="Submit search" className="text-gray-500 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => { setSearchOpen(false); setQuery(''); }}
                aria-label="Close search"
                className="text-gray-400 hover:text-black transition-colors text-xs font-mono"
              >
                ✕
              </button>
            </form>
          ) : (
            <>
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="text-gray-400 hover:text-black transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </button>
              <span className="text-xs font-mono text-gray-500 hidden sm:block">Est. 2024 ·</span>
              <ThemeToggle />
              <span className="text-xs font-mono text-gray-500 hidden sm:block">Independent</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
