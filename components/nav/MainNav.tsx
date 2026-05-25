'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import NavUserButton from './NavUserButton';
import MobileNav from './MobileNav';

type NavItem = { label: string; href: string };
type Hub = { label: string; href: string; items: NavItem[]; cols?: 1 | 2 };

const HUBS: Hub[] = [
  {
    label: 'Gaming',
    href: '/video-games',
    cols: 2,
    items: [
      { label: 'All Gaming', href: '/video-games' },
      { label: 'GTA 6', href: '/video-games/gta-6' },
      { label: 'Nintendo Switch 2', href: '/video-games/nintendo' },
      { label: 'Fortnite', href: '/video-games/fortnite' },
      { label: 'Epic Games', href: '/video-games/epic' },
      { label: 'MHA Ultra Rumble', href: '/video-games/mha/ultra-rumble' },
      { label: 'Anime Games', href: '/anime' },
      { label: 'Ubisoft', href: '/video-games/ubisoft' },
      { label: 'Unreal Engine', href: '/video-games/unreal-engine' },
      { label: 'Rocket League', href: '/rocket-league' },
    ],
  },
  {
    label: 'Finance',
    href: '/finance',
    cols: 2,
    items: [
      { label: 'All Finance', href: '/finance' },
      { label: 'DraftKings', href: '/finance/draftkings' },
      { label: 'PrizePicks', href: '/finance/prizepicks' },
      { label: 'Crypto', href: '/crypto' },
      { label: 'BlackRock', href: '/blackrock' },
      { label: 'Prediction Markets', href: '/copyright/news/trump-prediction-markets-cftc-van-dyke-2026' },
    ],
  },
  {
    label: 'Startups',
    href: '/tech',
    cols: 2,
    items: [
      { label: 'All Startups', href: '/tech' },
      { label: 'OpenAI', href: '/open-ai' },
      { label: 'Nvidia', href: '/nvidia' },
      { label: 'Google', href: '/google' },
      { label: 'Apple', href: '/apple' },
      { label: 'Microsoft', href: '/microsoft' },
      { label: 'Meta', href: '/meta' },
      { label: 'Cloudflare', href: '/cloudflare' },
      { label: 'Cursor AI', href: '/technology/cursor' },
      { label: 'GitHub', href: '/github' },
      { label: 'xAI', href: '/elon-musk/xai' },
      { label: 'Intel', href: '/intel' },
    ],
  },
  {
    label: 'News',
    href: '/news',
    items: [
      { label: 'All News', href: '/news' },
      { label: 'Texas', href: '/texas' },
      { label: 'California', href: '/california' },
      { label: 'Copyright & Law', href: '/copyright' },
      { label: 'YouTube', href: '/youtube' },
    ],
  },
]

const LINK_CLS =
  'block px-3 lg:px-4 py-2.5 text-[10px] font-black tracking-[.12em] uppercase whitespace-nowrap hover:bg-black hover:text-white transition-colors';

export default function MainNav() {
  const [openHub, setOpenHub] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenHub(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenHub(null), 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <div className="border-t-2 border-black">
      <div className="container mx-auto px-4">
        <nav className="flex items-center">

          {/* Home icon */}
          <Link
            href="/"
            aria-label="Home"
            className={`${LINK_CLS} border-r border-black shrink-0 flex items-center`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 3 11h1v6a1 1 0 0 0 1 1h4v-4h2v4h4a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 .707-1.707l-7-7Z" />
            </svg>
          </Link>

          {/* Hub nav items — hidden on mobile, shown md+ */}
          <div className="hidden md:flex items-center flex-1">
            {HUBS.map((hub) => {
              const isOpen = openHub === hub.label;
              return (
                <div
                  key={hub.label}
                  className="relative shrink-0"
                  onMouseEnter={() => openMenu(hub.label)}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={hub.href}
                    className={`${LINK_CLS} border-r border-black flex items-center gap-1 ${isOpen ? 'bg-black text-white' : ''}`}
                  >
                    {hub.label}
                    <svg
                      className={`w-2.5 h-2.5 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>

                  {isOpen && (
                    <div
                      className={`absolute top-full left-0 z-[200] bg-white border-2 border-t-0 border-black shadow-2xl py-1 ${hub.cols === 2 ? 'min-w-[280px]' : 'min-w-[180px]'}`}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className={hub.cols === 2 ? 'grid grid-cols-2' : 'flex flex-col'}>
                        {hub.items.map((item, idx) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpenHub(null)}
                            className={`block px-4 py-2 text-[10px] font-bold tracking-[.1em] uppercase text-gray-800 hover:bg-black hover:text-white transition-colors whitespace-nowrap ${
                              idx === 0 ? `border-b border-gray-200 ${hub.cols === 2 ? 'col-span-2' : ''}` : ''
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center ml-auto shrink-0">
            <Link
              href="/site-index"
              className={`${LINK_CLS} border-l border-r border-black hidden sm:block`}
            >
              Index
            </Link>
            <div className="hidden sm:block border-r border-black">
              <NavUserButton />
            </div>
            {/* Mobile hamburger */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>

        </nav>
      </div>
    </div>
  );
}
