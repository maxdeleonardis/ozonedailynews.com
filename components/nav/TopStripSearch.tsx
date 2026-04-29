'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

interface Suggestion {
  title: string;
  url: string;
  category: string;
}

export default function TopStripSearch({ dateString }: { dateString: string }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeSearch(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setSuggestions([]);
        setActiveSuggestion(-1);
      }
    };
    document.addEventListener('mousedown', onMouse);
    return () => document.removeEventListener('mousedown', onMouse);
  }, []);

  useEffect(() => {
    if (!query.trim() || query.trim().length < 2) {
      setSuggestions([]);
      setActiveSuggestion(-1);
      return;
    }
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search-suggestions?q=${encodeURIComponent(query.trim())}`);
        const data = await res.json();
        setSuggestions(data.suggestions ?? []);
        setActiveSuggestion(-1);
      } catch {
        setSuggestions([]);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [query]);

  function closeSearch() {
    setSearchOpen(false);
    setQuery('');
    setSuggestions([]);
    setActiveSuggestion(-1);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeSuggestion >= 0 && suggestions[activeSuggestion]) {
      router.push(suggestions[activeSuggestion].url);
      closeSearch();
      return;
    }
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      closeSearch();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!suggestions.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveSuggestion(i => Math.min(i + 1, suggestions.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveSuggestion(i => Math.max(i - 1, -1)); }
  };

  return (
    <>
      {/* ── Left: date + search ── */}
      <div className="flex items-center gap-2">
        {!searchOpen && (
          <span className="text-xs font-mono text-gray-500 hidden sm:block">{dateString}</span>
        )}

        {searchOpen ? (
          <div ref={wrapperRef} className="relative">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search ObjectWire…"
                className="text-sm font-mono border-b-2 border-black bg-transparent outline-none w-52 sm:w-72 py-1 placeholder-gray-400 text-gray-900"
                autoComplete="off"
              />
              <button type="submit" aria-label="Submit search" className="text-gray-500 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </button>
              <button type="button" onClick={closeSearch} aria-label="Close search" className="text-gray-400 hover:text-black transition-colors text-xs font-mono">
                ✕
              </button>
            </form>

            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 mt-2 w-64 sm:w-80 bg-white border border-gray-200 rounded-xl shadow-xl z-[200] overflow-hidden">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onMouseDown={(e) => { e.preventDefault(); router.push(s.url); closeSearch(); }}
                    onMouseEnter={() => setActiveSuggestion(i)}
                    className={`w-full text-left px-4 py-3 flex items-center gap-3 border-b border-gray-100 last:border-0 transition-colors ${
                      activeSuggestion === i ? 'bg-gray-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate leading-tight">{s.title}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider font-mono">{s.category}</p>
                    </div>
                    <svg className="w-3 h-3 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
                <button
                  type="button"
                  onMouseDown={(e) => { e.preventDefault(); router.push(`/search?q=${encodeURIComponent(query.trim())}`); closeSearch(); }}
                  className="w-full text-left px-4 py-2.5 text-xs text-blue-600 hover:bg-blue-50 transition-colors font-semibold border-t border-gray-100"
                >
                  See all results for &ldquo;{query}&rdquo; →
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
            className="text-gray-400 hover:text-black transition-colors p-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </button>
        )}
      </div>

      {/* ── Right: Discord, Est., theme, Independent ── */}
      {!searchOpen && (
        <div className="flex items-center gap-3">
          <a
            href="https://discord.gg/wBsgkU4uAf"
            target="_blank"
            rel="noopener noreferrer"
            title="Join the ObjectWire Discord community"
            className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#5865F2] hover:text-[#4752C4] transition-colors border border-[#5865F2]/30 hover:border-[#5865F2] rounded px-2 py-0.5"
          >
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Community
          </a>
          <span className="text-xs font-mono text-gray-500 hidden sm:block whitespace-nowrap">Est. 2024 ·</span>
          <ThemeToggle />
          <span className="text-xs font-mono text-gray-500 hidden sm:block whitespace-nowrap">Independent</span>
        </div>
      )}
    </>
  );
}
