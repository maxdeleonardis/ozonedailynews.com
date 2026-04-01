'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function TopStripSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
      setQuery('');
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Input grows to the left of the icon when open */}
      {open && (
        <form
          onSubmit={handleSubmit}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 border-b border-black"
        >
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ObjectWire…"
            className="w-44 sm:w-56 md:w-80 bg-transparent text-xs font-mono text-gray-900 placeholder-gray-400 outline-none py-0.5"
          />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpen(false); setQuery(''); }}
            aria-label="Close search"
            className="text-gray-400 hover:text-black transition-colors font-mono text-xs px-1"
          >
            ✕
          </button>
        </form>
      )}

      {/* Search icon — always visible, left of Est. */}
      <button
        type="button"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen((v) => !v); }}
        aria-label="Open search"
        className="shrink-0 text-gray-500 hover:text-black transition-colors p-0.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
      </button>

      {/* Est. label — always to the right of the icon */}
      <span className="text-xs font-mono text-gray-500 hidden sm:block whitespace-nowrap">Est. 2024 ·</span>
      <ThemeToggle />
      <span className="text-xs font-mono text-gray-500 hidden sm:block whitespace-nowrap">Independent</span>
    </div>
  );
}
