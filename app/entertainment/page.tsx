import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Entertainment Hub | Hollywood, Streaming & Culture | ObjectWire',
  description:
    'ObjectWire Entertainment: breaking news and deep coverage of Hollywood, Netflix, Disney, Hulu, Apple TV+, HBO Max, music, awards, and pop culture. Updated daily.',
  keywords: [
    'entertainment news 2026',
    'Hollywood news',
    'Netflix new shows 2026',
    'Disney Plus 2026',
    'Hulu originals',
    'Apple TV Plus 2026',
    'HBO Max shows',
    'Oscars 2026',
    'movie news',
    'TV shows 2026',
    'streaming news',
    'pop culture 2026',
    'ObjectWire entertainment',
  ],
  alternates: { canonical: 'https://www.objectwire.org/entertainment' },
  openGraph: {
    title: 'Entertainment Hub | Hollywood, Streaming & Culture | ObjectWire',
    description:
      'Breaking entertainment news: Hollywood, Netflix, Disney, Hulu, Apple TV+, HBO Max, awards season, and pop culture, all in one place.',
    type: 'website',
    url: 'https://www.objectwire.org/entertainment',
    siteName: 'ObjectWire',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const STREAMERS = [
  {
    href: '/netflix',
    label: 'Netflix',
    color: 'bg-red-600',
    textColor: 'text-white',
    description: '260M+ subscribers. Originals, films & docs.',
    letter: 'N',
  },
  {
    href: '/entertainment/hulu',
    label: 'Hulu',
    color: 'bg-green-600',
    textColor: 'text-white',
    description: 'Next-day TV, originals & live sports.',
    letter: 'H',
  },
  {
    href: '/disney',
    label: 'Disney+',
    color: 'bg-blue-700',
    textColor: 'text-white',
    description: 'Marvel, Star Wars, Pixar & classic Disney.',
    letter: 'D',
  },
  {
    href: '/apple',
    label: 'Apple TV+',
    color: 'bg-gray-900',
    textColor: 'text-white',
    description: 'Prestige originals, Severance, CODA, Slow Horses.',
    letter: 'A',
  },
  {
    href: '/entertainment/hbomax',
    label: 'HBO / Max',
    color: 'bg-purple-800',
    textColor: 'text-white',
    description: 'Premium TV, HBO originals & Warner films.',
    letter: 'M',
  },
  {
    href: '/amazon',
    label: 'Prime Video',
    color: 'bg-blue-500',
    textColor: 'text-white',
    description: 'The Boys, Rings of Power & Amazon originals.',
    letter: 'P',
  },
];

const LATEST_STORIES = [
  {
    href: '/entertainment/news/conan-obrien-hosting-98th-oscars-abc-hulu',
    label: 'OSCARS',
    title: 'Conan O\'Brien to Host the 98th Academy Awards on ABC & Hulu',
    meta: 'Awards · Mar 2026',
  },
  {
    href: '/entertainment/news/marty-supreme-enters-oscar-weekend-nine-nominations-low-odds',
    label: 'FILM',
    title: 'Marty Supreme Enters Oscar Weekend with Nine Nominations and Long Odds',
    meta: 'Film · Mar 2026',
  },
  {
    href: '/entertainment/apple-tv/spring-2026-premiere-schedule-imperfect-women-for-all-mankind-outcome-margos-got-money-troubles',
    label: 'APPLE TV+',
    title: 'Apple TV+ Spring 2026 Premiere Schedule: Imperfect Women, For All Mankind & More',
    meta: 'Streaming · Mar 2026',
  },
  {
    href: '/entertainment/apple-tv/apple-tv-plus-outcome-trailer-keanu-reeves-jonah-hill-april-2026',
    label: 'APPLE TV+',
    title: 'Apple TV+ Drops Trailer for Outcome Starring Keanu Reeves & Jonah Hill',
    meta: 'Streaming · Mar 2026',
  },
  {
    href: '/entertainment/hulu',
    label: 'HULU',
    title: 'Hulu Red Band Trailer: Vince Vaughn & James Marsden in Mike & Nick & Nick & Alice',
    meta: 'Film · Mar 2026',
  },
  {
    href: '/entertainment/news/fortnite-moves-into-movies',
    label: 'CULTURE',
    title: 'Fortnite Moves Into Movies | Epic\'s Next Big Play',
    meta: 'Culture · 2026',
  },
];

const SHOWS = [
  {
    href: '/entertainment/beastgames',
    title: 'Beast Games',
    sub: 'Amazon Prime Video',
    badge: 'REALITY',
    color: 'border-yellow-400',
  },
  {
    href: '/entertainment/beastgames/season-2',
    title: 'Beast Games Season 2',
    sub: 'Amazon Prime Video',
    badge: 'UPCOMING',
    color: 'border-yellow-400',
  },
  {
    href: '/entertainment/survivor',
    title: 'Survivor',
    sub: 'CBS',
    badge: 'REALITY',
    color: 'border-orange-400',
  },
  {
    href: '/entertainment/james-cameron',
    title: 'James Cameron',
    sub: 'Director Profile',
    badge: 'PROFILE',
    color: 'border-blue-400',
  },
];

const CATEGORIES = [
  { href: '/entertainment/news', label: 'All Entertainment News' },
  { href: '/netflix', label: 'Netflix' },
  { href: '/disney', label: 'Disney+' },
  { href: '/apple', label: 'Apple TV+' },
  { href: '/entertainment/hbomax', label: 'HBO / Max' },
  { href: '/entertainment/hulu', label: 'Hulu' },
  { href: '/amazon', label: 'Prime Video' },
  { href: '/entertainment/beastgames', label: 'Beast Games' },
  { href: '/entertainment/survivor', label: 'Survivor' },
  { href: '/entertainment/james-cameron', label: 'James Cameron' },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function EntertainmentHubPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hub masthead ──────────────────────────────────────────────────── */}
      <div className="border-b-4 border-black bg-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-[10px] font-black tracking-[.25em] uppercase text-gray-400 mb-2">
                ObjectWire / Entertainment
              </p>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter font-serif leading-none">
                ENTERTAINMENT
              </h1>
              <p className="text-sm text-gray-500 mt-3 max-w-xl">
                Hollywood, streaming, awards season, and pop culture, breaking news and deep coverage updated daily.
              </p>
            </div>
            <Link
              href="/entertainment/news"
              className="shrink-0 inline-block border-2 border-black px-5 py-2.5 text-[11px] font-black tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
            >
              All Stories →
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 space-y-16">

        {/* ── Streaming platforms ───────────────────────────────────────── */}
        <section>
          <h2 className="text-[10px] font-black tracking-[.25em] uppercase text-gray-400 mb-5 border-b border-gray-200 pb-2">
            Streaming Platforms
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {STREAMERS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`${s.color} ${s.textColor} p-4 flex flex-col gap-2 hover:opacity-90 transition-opacity group`}
              >
                <div className="text-2xl font-black font-serif">{s.letter}</div>
                <div className="font-black text-sm tracking-tight">{s.label}</div>
                <div className="text-[10px] opacity-75 leading-snug">{s.description}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Latest stories ────────────────────────────────────────────── */}
        <section>
          <h2 className="text-[10px] font-black tracking-[.25em] uppercase text-gray-400 mb-5 border-b border-gray-200 pb-2">
            Latest Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t-2 border-black">
            {LATEST_STORIES.map((story, i) => (
              <Link
                key={story.href}
                href={story.href}
                className={`flex flex-col gap-2 p-5 border-b-2 border-black hover:bg-gray-50 transition-colors group ${i % 2 === 0 ? 'md:border-r-2' : ''}`}
              >
                <span className="text-[9px] font-black tracking-[.2em] uppercase text-red-600">
                  {story.label}
                </span>
                <h3 className="font-black text-base leading-snug tracking-tight group-hover:underline">
                  {story.title}
                </h3>
                <span className="text-[11px] text-gray-400 font-mono">{story.meta}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Shows & profiles ──────────────────────────────────────────── */}
        <section>
          <h2 className="text-[10px] font-black tracking-[.25em] uppercase text-gray-400 mb-5 border-b border-gray-200 pb-2">
            Shows & Profiles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SHOWS.map((show) => (
              <Link
                key={show.href}
                href={show.href}
                className={`border-2 border-black border-t-4 ${show.color} p-5 flex flex-col gap-2 hover:bg-gray-50 transition-colors group`}
              >
                <span className="text-[9px] font-black tracking-[.2em] uppercase text-gray-400">
                  {show.badge}
                </span>
                <h3 className="font-black text-lg leading-tight tracking-tight group-hover:underline">
                  {show.title}
                </h3>
                <span className="text-xs text-gray-500">{show.sub}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Awards spotlight ──────────────────────────────────────────── */}
        <section className="border-2 border-black p-6 md:p-8 bg-gray-50">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="shrink-0">
              <div className="w-16 h-16 bg-black flex items-center justify-center">
                <span className="text-white font-black text-2xl font-serif">★</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black tracking-[.2em] uppercase text-gray-400 mb-1">Awards Season</p>
              <h2 className="text-2xl font-black tracking-tight font-serif mb-1">98th Academy Awards</h2>
              <p className="text-sm text-gray-600">
                Conan O'Brien hosts. Marty Supreme leads with nine nominations. Full coverage of Oscar night 2026.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-2">
              <Link
                href="/entertainment/news/conan-obrien-hosting-98th-oscars-abc-hulu"
                className="border-2 border-black px-4 py-2 text-[11px] font-black tracking-widest uppercase hover:bg-black hover:text-white transition-colors text-center"
              >
                Host Story
              </Link>
              <Link
                href="/entertainment/news/marty-supreme-enters-oscar-weekend-nine-nominations-low-odds"
                className="border-2 border-black px-4 py-2 text-[11px] font-black tracking-widest uppercase hover:bg-black hover:text-white transition-colors text-center"
              >
                Best Picture Race
              </Link>
            </div>
          </div>
        </section>

        {/* ── Category index ────────────────────────────────────────────── */}
        <section>
          <h2 className="text-[10px] font-black tracking-[.25em] uppercase text-gray-400 mb-5 border-b border-gray-200 pb-2">
            Browse Entertainment
          </h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="border-2 border-black px-4 py-2 text-[11px] font-black tracking-wider uppercase hover:bg-black hover:text-white transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
