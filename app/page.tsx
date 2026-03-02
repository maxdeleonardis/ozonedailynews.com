import Link from 'next/link';
import type { Metadata } from 'next';
import { getLatestArticles, getFeaturedArticles, getPopularArticles } from '@/lib/content-registry';
import { TopicTag, inferTopicTag } from '@/components/NewsArticle';
import LatestArticlesSection from '@/components/ui/LatestArticlesSection';
import MostReadSection from '@/components/ui/MostReadSection';
import HeroLatestFeed from '@/components/ui/HeroLatestFeed';
import HeroLeadSection from '@/components/ui/HeroLeadSection';

export const metadata: Metadata = {
  title: "ObjectWire | Independent Investigative Journalism & Tech News",
  description: "ObjectWire delivers independent investigative journalism, technology news, finance analysis, and verified reporting. Trusted source for in-depth coverage of business, politics, and innovation.",
  alternates: {
    canonical: 'https://www.objectwire.org',
  },
  openGraph: {
    title: "ObjectWire | Independent Investigative Journalism",
    description: "Independent news source delivering verified investigative journalism and technology coverage.",
    url: 'https://www.objectwire.org',
    siteName: 'ObjectWire',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ObjectWire | Independent Investigative Journalism",
    description: "Independent news source delivering verified investigative journalism and technology coverage.",
  },
};

// Homepage is statically generated at build time — content-registry provides real dates
export const dynamic = 'force-static';

export default function HomePage() {
  // Pull articles from the content registry (real publish dates — never filesystem timestamps)
  const allArticles = getLatestArticles(50);
  const latestArticles = allArticles.slice(0, 12);
  const featuredArticle = getFeaturedArticles()[0] ?? allArticles[0];
  const latest15 = getLatestArticles(15);
  const popular15 = getPopularArticles(15);
  const popularForHero = getPopularArticles(20);

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const editionNumber = Math.floor((Date.now() - new Date('2024-01-01').getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-[#faf9f6]">

      {/* ═══════════════════ MASTHEAD ═══════════════════ */}
      <header className="bg-[#faf9f6] md:bg-white pb-[6px]">
        <div className="container">
          {/* Top rule */}
          <div className="flex items-center justify-between text-[10px] tracking-[.25em] text-gray-500 font-mono pt-4 pb-3 border-b border-gray-200 uppercase">
            <span>{today}</span>
            <span>Independent • Verified • Source-Cited</span>
            <span>Edition No. {editionNumber}</span>
          </div>

          {/* Breaking Ticker */}
          <div className="bg-red-700 text-white py-1.5 overflow-hidden -mx-6 px-6">
            <div className="flex items-center gap-3">
              <span className="bg-white text-red-700 text-[10px] font-black px-2 py-0.5 tracking-wider shrink-0 animate-pulse">
                BREAKING
              </span>
              <div className="overflow-hidden flex-1">
                <p className="text-sm font-medium whitespace-nowrap animate-marquee">
                  {latestArticles.slice(0, 6).map(a => a.title).join('  ●  ')}
                </p>
              </div>
            </div>
          </div>

          {/* Nameplate */}
          <div className="text-center py-6">
            <div className="flex items-center justify-center gap-6 mb-1">
              <div className="hidden md:block h-px flex-1 bg-black" />
              <h1 className="text-[3.2rem] sm:text-7xl md:text-[6.5rem] font-black tracking-[-0.04em] leading-none select-none">
                OBJECTWIRE
              </h1>
              <div className="hidden md:block h-px flex-1 bg-black" />
            </div>
            <p className="text-[11px] tracking-[.35em] text-gray-500 font-mono uppercase mt-2">
              Investigative Journalism &bull; Technology &bull; Finance &bull; Sports &bull; Culture
            </p>
          </div>

        </div>
      </header>

      <main className="container py-10">

        {/* ═══════════════════ HERO: MOST POPULAR + LATEST NEWS ═══════════════════ */}
        <section className="grid lg:grid-cols-12 gap-8 mb-14 border-b-2 border-black pb-14">

          {/* ── Left: Most Popular (curated + GA4 live views) ── */}
          <HeroLeadSection
            featuredArticle={popularForHero[0] ?? featuredArticle}
            secondaryArticles={popularForHero.slice(1)}
          />

          {/* ── Right: Latest News feed (chronological) ── */}
          <aside className="lg:col-span-5 flex flex-col">
            <HeroLatestFeed articles={allArticles.slice(0, 8)} />
          </aside>
        </section>

        {/* ═══════════════════ SPOTLIGHT SECTIONS ═══════════════════ */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-16 bg-black" />
              <h2 className="text-xs font-black tracking-[.3em] uppercase">Coverage Map</h2>
              <div className="h-px w-16 bg-black" />
            </div>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Explore ObjectWire&apos;s featured coverage areas and dive into our top beats.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Winter Olympics Spotlight */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⛷️</span>
                <h2 className="text-xl font-black">Milan Cortina 2026</h2>
                <span className="ml-auto bg-white/20 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider">LIVE</span>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Breezy Johnson Wins First U.S. Gold', href: '/winter-olympics/usa/breezy-johnson', tag: '🥇' },
                  { title: 'Ilia Malinin Leads Men\'s Figure Skating', href: '/winter-olympics/usa/ilia-malinin', tag: '⛸️' },
                  { title: 'Chloe Kim\'s Historic Three-Peat Bid', href: '/winter-olympics/chloe-kim-historic-three-peat-bid', tag: '🏂' },
                  { title: 'Eileen Gu Claims Slopestyle Silver', href: '/winter-olympics/china/eileen-gu', tag: '🎿' },
                  { title: 'Klæbo Targets 6 Gold Medals', href: '/winter-olympics/norway/johannes-klaebo', tag: '🇳🇴' },
                  { title: 'Mikaela Shiffrin: GOAT Returns', href: '/winter-olympics/mikaela-shiffrin', tag: '⛷️' },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2.5 transition-colors">
                    <span className="text-lg">{item.tag}</span>
                    <span className="text-sm font-semibold flex-1">{item.title}</span>
                    <span className="text-white/40">→</span>
                  </Link>
                ))}
              </div>
              <Link href="/winter-olympics" className="mt-4 inline-flex items-center gap-2 text-sm font-bold bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                Full Olympics Coverage →
              </Link>
            </section>

            {/* Disney Spotlight */}
            <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 rounded-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🏰</span>
                <h2 className="text-xl font-black">Disney Coverage</h2>
                <span className="ml-auto bg-white/20 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider">NEW</span>
              </div>
              <div className="space-y-3">
                <Link href="/disney/news/incoming-ceo-floats-premiering-films-in-fortnite" className="block bg-white/10 hover:bg-white/20 rounded-lg px-4 py-3 transition-colors">
                  <span className="text-[10px] font-bold text-pink-300 tracking-wider uppercase">Breaking</span>
                  <h3 className="text-base font-bold mt-1">Disney Films Coming to Fortnite</h3>
                  <p className="text-xs text-blue-200 mt-1">Incoming CEO D&apos;Amaro envisions movie premieres inside Epic Games&apos; platform</p>
                </Link>
                <Link href="/disney/josh-damaro" className="block bg-white/10 hover:bg-white/20 rounded-lg px-4 py-3 transition-colors">
                  <span className="text-[10px] font-bold text-blue-300 tracking-wider uppercase">Profile</span>
                  <h3 className="text-base font-bold mt-1">Josh D&apos;Amaro: Disney&apos;s Next CEO</h3>
                  <p className="text-xs text-blue-200 mt-1">Complete biography of the incoming chief executive, March 2026</p>
                </Link>
              </div>
              <Link href="/disney" className="mt-4 inline-flex items-center gap-2 text-sm font-bold bg-white text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
                All Disney Coverage →
              </Link>
            </section>
          </div>
        </section>

        {/* ═══════════════════ LATEST + MOST READ (COMBINED HERO) ═══════════════════ */}
        <section className="mb-16">
          {/* Section header bar */}
          <div className="grid lg:grid-cols-12 gap-x-12 mb-0">
            <div className="lg:col-span-7 flex items-center justify-between border-b-2 border-black pb-2">
              <h2 className="text-xs font-black tracking-widest uppercase">Latest Articles</h2>
              <Link href="/news" className="text-xs font-bold text-blue-600 hover:underline">All Stories →</Link>
            </div>
            <div className="lg:col-span-5 flex items-center justify-between border-b-2 border-black pb-2 mt-4 lg:mt-0">
              <h2 className="text-xs font-black tracking-widest uppercase">Most Read</h2>
              <span className="text-[10px] font-bold text-green-600 tracking-wide" id="most-read-live-badge" />
            </div>
          </div>

          {/* Two-column body */}
          <div className="grid lg:grid-cols-12 gap-x-12">
            {/* ── Left: Latest 15 ── */}
            <div className="lg:col-span-7">
              <LatestArticlesSection articles={latest15} hideHeader />
            </div>
            {/* ── Right: Most Read (GA4 live) ── */}
            <div className="lg:col-span-5 lg:border-l lg:border-gray-200 lg:pl-10">
              <MostReadSection curatedArticles={popular15} hideHeader />
            </div>
          </div>
        </section>

        {/* ═══════════════════ ABOUT STRIP ═══════════════════ */}
        <section className="border-t-2 border-b-2 border-black py-10 mb-16 text-center">
          <h2 className="text-2xl font-black mb-3">About ObjectWire</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-4 text-base leading-relaxed">
            ObjectWire is an independent news organization committed to investigative journalism,
            verified reporting, and editorial integrity. Every article is source-cited, fact-checked,
            and written with depth and accuracy.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link href="/about" className="font-bold hover:underline">Our Story</Link>
            <span className="text-gray-300">|</span>
            <Link href="/editorial-standards" className="font-bold hover:underline">Editorial Standards</Link>
            <span className="text-gray-300">|</span>
            <Link href="/team" className="font-bold hover:underline">Our Team</Link>
            <span className="text-gray-300">|</span>
            <Link href="/get-help/contact" className="font-bold hover:underline">Contact</Link>
            <span className="text-gray-300">|</span>
            <Link href="/rss.xml" className="font-bold hover:underline text-orange-600">RSS Feed</Link>
          </div>
        </section>
      </main>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="bg-black text-white">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
            <div>
              <h3 className="text-xs font-black tracking-widest mb-4 text-gray-400">NEWS</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/news" className="hover:text-white transition-colors">Latest News</Link></li>
                <li><Link href="/news/texas" className="hover:text-white transition-colors">Texas</Link></li>
                <li><Link href="/news/world" className="hover:text-white transition-colors">World</Link></li>
                <li><Link href="/investigations" className="hover:text-white transition-colors">Investigations</Link></li>
                <li><Link href="/news/canada" className="hover:text-white transition-colors">Canada</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black tracking-widest mb-4 text-gray-400">TECHNOLOGY</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/google" className="hover:text-white transition-colors">Google</Link></li>
                <li><Link href="/apple" className="hover:text-white transition-colors">Apple</Link></li>
                <li><Link href="/nvidia" className="hover:text-white transition-colors">Nvidia</Link></li>
                <li><Link href="/intel" className="hover:text-white transition-colors">Intel</Link></li>
                <li><Link href="/saas" className="hover:text-white transition-colors">SaaS</Link></li>
                <li><Link href="/open-ai" className="hover:text-white transition-colors">OpenAI</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black tracking-widest mb-4 text-gray-400">ENTERTAINMENT</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/disney" className="hover:text-white transition-colors">Disney</Link></li>
                <li><Link href="/entertainment/netflix" className="hover:text-white transition-colors">Netflix</Link></li>
                <li><Link href="/winter-olympics" className="hover:text-white transition-colors">Olympics</Link></li>
                <li><Link href="/world-cup" className="hover:text-white transition-colors">World Cup</Link></li>
                <li><Link href="/video-games" className="hover:text-white transition-colors">Video Games</Link></li>
                <li><Link href="/youtube" className="hover:text-white transition-colors">YouTube</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black tracking-widest mb-4 text-gray-400">BUSINESS</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/finance" className="hover:text-white transition-colors">Finance</Link></li>
                <li><Link href="/elon-musk" className="hover:text-white transition-colors">Elon Musk</Link></li>
                <li><Link href="/microsoft" className="hover:text-white transition-colors">Microsoft</Link></li>
                <li><Link href="/clothing" className="hover:text-white transition-colors">Fashion</Link></li>
                <li><Link href="/crypto" className="hover:text-white transition-colors">Crypto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black tracking-widest mb-4 text-gray-400">ABOUT</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/editorial-standards" className="hover:text-white transition-colors">Standards</Link></li>
                <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="/get-help/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} ObjectWire. All rights reserved.</p>
            <p className="tracking-wider">Independent journalism serving the public interest</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
