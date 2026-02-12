'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const NAV_LINKS = [
  { href: '/news', label: 'News' },
  { href: '/finance', label: 'Finance' },
  { href: '/technology', label: 'Technology' },
  { href: '/investigations', label: 'Investigations' },
  { href: '/entertainment', label: 'Entertainment' },
  { href: '/winter-olympics', label: 'Winter Olympics' },
  { href: '/editorial-standards', label: 'Editorial Standards' },
  { href: '/about', label: 'About' },
  { href: '/get-help/contact', label: 'Contact' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus search input when menu opens
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[60] flex items-center justify-center w-10 h-10 -mr-2"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <div className="flex flex-col justify-center items-center w-6 h-6">
          <span
            className={`block h-[2px] w-6 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-[5px]' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-black transition-all duration-300 ease-in-out mt-[3px] ${
              isOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-black transition-all duration-300 ease-in-out mt-[3px] ${
              isOpen ? '-rotate-45 -translate-y-[5px]' : ''
            }`}
          />
        </div>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[49] backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 right-0 z-[50] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ maxHeight: '100dvh', overflowY: 'auto' }}
      >
        {/* Menu Header with Logo */}
        <div className="flex items-center justify-between px-4 h-20 border-b border-gray-100">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
            <img
              src="/objectwire-logo.png"
              alt="OBJECTWIRE"
              style={{ height: '44px', width: 'auto' }}
            />
          </Link>
          {/* Close X button */}
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-10 h-10"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-4 pt-4 pb-3">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
              <svg
                className="w-5 h-5 text-gray-400 ml-3 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ObjectWire..."
                className="flex-1 bg-transparent px-3 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="px-3 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                type="submit"
                className="px-4 py-3 bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mx-4" />

        {/* Navigation Links */}
        <nav className="px-4 py-3">
          <ul className="space-y-0">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-3.5 border-b border-gray-100 text-[15px] transition-colors ${
                      isActive
                        ? 'font-bold text-black'
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-[10px] tracking-[.2em] text-gray-400 uppercase text-center">
            Independent • Verified • Source-Cited
          </p>
        </div>
      </div>
    </div>
  );
}
