'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import NavUserButton from './NavUserButton';
import MobileNav from './MobileNav';

type NavItem = { label: string; href: string };
type Hub = { label: string; href: string; items: NavItem[]; cols?: 1 | 2 };

const HUBS: Hub[] = [
  {
    label: 'News',
    href: '/news',
    items: [
      { label: 'All News', href: '/news' },
      { label: 'World', href: '/news/world' },
      { label: 'AI & Science', href: '/news/ai' },
      { label: 'Canada', href: '/news/canada' },
      { label: 'Iran', href: '/news/iran' },
      { label: 'Layoffs', href: '/news/layoffs' },
      { label: 'Texas', href: '/news/texas' },
      { label: 'New York', href: '/news/newyork' },
    ],
  },
  {
    label: 'Tech',
    href: '/tech',
    cols: 2,
    items: [
      { label: 'All Tech', href: '/tech' },
      { label: 'OpenAI', href: '/open-ai' },
      { label: 'Google', href: '/google' },
      { label: 'Nvidia', href: '/nvidia' },
      { label: 'DeepSeek', href: '/tech/deepseek' },
      { label: 'Cloudflare', href: '/cloudflare' },
      { label: 'Stripe', href: '/tech/stripe' },
      { label: 'Oracle', href: '/tech/oracle' },
      { label: 'Perplexity', href: '/tech/perplexity' },
      { label: 'Palantir', href: '/tech/palantir-3d-frontend-gaia-zodiac' },
      { label: 'TSMC', href: '/tech/tsmc-semiconductor-foundry-profile' },
      { label: 'AlphaFold', href: '/tech/alphafold-protein-complex-structures-database-2026' },
      { label: 'Dell', href: '/tech/dell' },
      { label: 'Newegg', href: '/tech/newegg' },
      { label: 'Square', href: '/tech/square' },
    ],
  },
  {
    label: 'Finance',
    href: '/finance',
    items: [
      { label: 'All Finance', href: '/finance' },
      { label: 'Finance News', href: '/finance/news' },
      { label: 'BlackRock', href: '/blackrock' },
      { label: 'Cross River Bank', href: '/finance/cross-river-bank-baas-visa-usdc' },
      { label: 'Lead Bank', href: '/finance/lead-bank-crypto-infrastructure' },
      { label: 'Private Credit', href: '/finance/private-credit-redemption-crisis-blackstone-blackrock-blue-owl-2026' },
    ],
  },
  {
    label: 'Gaming',
    href: '/video-games',
    cols: 2,
    items: [
      { label: 'All Games', href: '/video-games' },
      { label: 'GTA 6', href: '/video-games/gta-6' },
      { label: 'Nintendo Switch 2', href: '/video-games/switch2' },
      { label: 'Nintendo', href: '/video-games/nintendo' },
      { label: 'Pokemon', href: '/video-games/pokemon' },
      { label: "Marvel's Wolverine", href: '/video-games/marvels-wolverine' },
      { label: 'Battlefield 6', href: '/video-games/battlefield-6' },
      { label: 'Mario Kart', href: '/video-games/mario-kart' },
      { label: 'Forza Horizon 6', href: '/video-games/forza-horizon-6' },
      { label: 'Resident Evil', href: '/video-games/resident-evil-requiem' },
      { label: 'Rainbow 6 Siege', href: '/video-games/rainbow-6-siege' },
      { label: 'Epic Games', href: '/video-games/epic' },
      { label: 'Ubisoft', href: '/video-games/ubisoft' },
      { label: 'Valve / Steam', href: '/video-games/valve-corporation' },
      { label: 'Capcom', href: '/video-games/capcom' },
      { label: 'Unreal Engine', href: '/video-games/unreal-engine' },
      { label: 'Star Wars Games', href: '/video-games/star-wars' },
      { label: 'Dragon Ball', href: '/video-games/dragon-ball' },
    ],
  },
  {
    label: 'Entertainment',
    href: '/entertainment',
    cols: 2,
    items: [
      { label: 'All Entertainment', href: '/entertainment' },
      { label: 'Netflix', href: '/entertainment/netflix' },
      { label: 'Marvel', href: '/entertainment/marvel' },
      { label: 'HBO Max', href: '/entertainment/hbo-max' },
      { label: 'Hulu', href: '/entertainment/hulu' },
      { label: 'Movies', href: '/entertainment/movies' },
      { label: 'Apple TV+', href: '/entertainment/apple-tv' },
      { label: 'Beast Games', href: '/entertainment/beastgames' },
      { label: 'James Cameron', href: '/entertainment/james-cameron' },
      { label: 'Survivor', href: '/entertainment/survivor' },
      { label: 'Disney', href: '/disney' },
    ],
  },
  {
    label: 'Politics',
    href: '/trump',
    cols: 2,
    items: [
      { label: 'Trump', href: '/trump' },
      { label: 'Trump News', href: '/trump/news' },
      { label: 'Elon Musk', href: '/elon-musk' },
      { label: 'SpaceX', href: '/elon-musk/spacex' },
      { label: 'xAI', href: '/elon-musk/xai' },
      { label: 'Boring Company', href: '/elon-musk/boring-company' },
      { label: 'Politics News', href: '/politics/news' },
    ],
  },
  {
    label: 'Crypto',
    href: '/crypto',
    items: [
      { label: 'All Crypto', href: '/crypto' },
      { label: 'Crypto News', href: '/crypto/news' },
      { label: 'Coinbase', href: '/crypto/coinbase' },
      { label: 'XRP', href: '/crypto/xrp' },
      { label: 'USDC', href: '/crypto/usdc' },
      { label: 'HBAR', href: '/crypto/hbar' },
      { label: 'Trump Crypto', href: '/crypto/trump' },
    ],
  },
  {
    label: 'Sports',
    href: '/winter-olympics',
    cols: 2,
    items: [
      { label: 'Winter Olympics', href: '/winter-olympics' },
      { label: 'Olympics News', href: '/winter-olympics/news' },
      { label: 'USA', href: '/winter-olympics/usa' },
      { label: 'Norway', href: '/winter-olympics/norway' },
      { label: 'Italy', href: '/winter-olympics/italy' },
      { label: 'France', href: '/winter-olympics/france' },
      { label: 'Lindsey Vonn', href: '/winter-olympics/lindsey-vonn' },
      { label: 'Mikaela Shiffrin', href: '/winter-olympics/mikaela-shiffrin' },
      { label: 'Chloe Kim', href: '/winter-olympics/chloe-kim-historic-three-peat-bid' },
      { label: 'Formula 1', href: '/formula-1' },
      { label: 'World Cup 2026', href: '/world-cup' },
      { label: 'MLS', href: '/mls' },
    ],
  },
  {
    label: 'Influencer',
    href: '/influencer',
    cols: 2,
    items: [
      { label: 'All Influencers', href: '/influencer' },
      { label: 'Influencer News', href: '/influencer/news' },
      { label: 'MrBeast', href: '/influencer/mrbeast' },
      { label: 'Iman Gadzhi', href: '/influencer/iman-gadzhi' },
      { label: 'Lean Beef Patty', href: '/influencer/lean-beef-patty' },
      { label: 'Ari Kytsya', href: '/influencer/ari-kytsya' },
      { label: 'Abby Berner', href: '/influencer/abby-berner' },
      { label: 'Tren Twins', href: '/influencer/tren-twins' },
      { label: 'Steve Will Do It', href: '/influencer/steve-will-do-it-kicked-of-logan-paul-s-podcast-making-an-official-return-to-youtube' },
      { label: 'Colleen Sheehan', href: '/influencer/colleen-sheehan' },
      { label: 'TikTok', href: '/tiktok' },
      { label: 'YouTube', href: '/youtube' },
    ],
  },
];

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
