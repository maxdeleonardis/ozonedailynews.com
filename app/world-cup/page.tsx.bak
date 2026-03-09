import type { Metadata } from "next";
import Link from "next/link";
import {
  CountdownTimer,
  HostCitiesMap,
  QualifiedTeamsTracker,
  TournamentFormat,
  NewsFeed,
  FanPoll,
} from "./_components";

// ─── SEO Metadata (server-only) ──────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "FIFA World Cup 2026 — Schedule, Teams, Host Cities & News | ObjectWire",
  description:
    "Complete coverage of FIFA World Cup 2026 across the USA, Mexico, and Canada. 48 teams, 104 matches, 16 host cities — schedules, qualified teams, tournament format, and breaking news.",
  keywords: [
    "FIFA World Cup 2026",
    "World Cup 2026",
    "World Cup schedule",
    "World Cup teams",
    "World Cup host cities",
    "USA Mexico Canada",
    "soccer",
    "football",
  ],
  openGraph: {
    title: "FIFA World Cup 2026 — ObjectWire",
    description:
      "48 teams, 104 matches, 16 host cities across North America. Full tournament coverage.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.objectwire.org/world-cup",
  },
};

// ─── Page (Server Component) ─────────────────────────────────────────────────

export default function WorldCup2026Hub() {
  return (
    <div className="min-h-screen bg-white">
      {/* FIFA-Style Premium Hero */}
      <div className="relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-purple-950 to-black text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
          {/* FIFA Branding Style */}
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block mb-4">
              <div className="text-sm font-bold tracking-[0.3em] text-teal-400 mb-2">
                OFFICIAL COVERAGE
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6">
              FIFA WORLD CUP
              <span className="block text-5xl md:text-7xl lg:text-8xl mt-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                2026™
              </span>
            </h1>

            <div className="flex items-center justify-center gap-8 text-xl md:text-2xl font-semibold mb-8">
              <span className="flex items-center gap-2">
                <span className="text-4xl">🇺🇸</span> USA
              </span>
              <span className="text-teal-400">•</span>
              <span className="flex items-center gap-2">
                <span className="text-4xl">🇲🇽</span> MEXICO
              </span>
              <span className="text-teal-400">•</span>
              <span className="flex items-center gap-2">
                <span className="text-4xl">🇨🇦</span> CANADA
              </span>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Experience the biggest FIFA World Cup™ in history with 48 teams, 104 matches, 
              and 16 host cities across North America
            </p>

            {/* Countdown Timer - Minimal FIFA Style */}
            <div className="mt-12 pt-12 border-t border-white/20">
              <CountdownTimer />
            </div>

            {/* CTA Buttons - FIFA Style */}
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <button className="px-10 py-5 bg-teal-500 hover:bg-teal-400 text-black font-bold text-lg rounded-none transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl uppercase tracking-wide">
                Explore Matches
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold text-lg rounded-none transition-all duration-300 uppercase tracking-wide">
                View Schedule
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500" />
      </div>

      {/* Stats Bar - FIFA Style */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 border-b-4 border-teal-500">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "48", label: "Teams" },
              { value: "104", label: "Matches" },
              { value: "16", label: "Host Cities" },
              { value: "3", label: "Nations" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="text-6xl md:text-7xl font-black text-teal-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="bg-white">
        {/* Match Offerings Section - FIFA Style */}
        <section className="py-20 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                MATCH OFFERINGS
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Every offering features premium coverage and comprehensive analysis
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Single Match */}
              <div className="group relative bg-slate-50 overflow-hidden border-4 border-transparent hover:border-teal-500 transition-all duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl">⚽</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-teal-500 text-black px-4 py-2 font-bold text-sm uppercase">
                    Live Coverage
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                    Single Match
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Follow the action match by match with live updates, analysis, and exclusive insights
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-8">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">✓</span>
                      Real-time match updates
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">✓</span>
                      Expert commentary & analysis
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">✓</span>
                      Player statistics & highlights
                    </li>
                  </ul>
                  <button className="w-full py-4 bg-slate-900 hover:bg-teal-500 text-white hover:text-black font-bold uppercase tracking-wide transition-all duration-300">
                    Explore Now
                  </button>
                </div>
              </div>

              {/* Venue Series */}
              <div className="group relative bg-slate-50 overflow-hidden border-4 border-transparent hover:border-teal-500 transition-all duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-900 to-purple-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl">🏟️</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-4 py-2 font-bold text-sm uppercase">
                    City Focus
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                    Venue Series
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive coverage of all matches at your chosen city venue
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-8">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">✓</span>
                      All matches at select venues
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">✓</span>
                      City guides & local insights
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">✓</span>
                      Stadium features & history
                    </li>
                  </ul>
                  <button className="w-full py-4 bg-slate-900 hover:bg-purple-500 text-white font-bold uppercase tracking-wide transition-all duration-300">
                    View Venues
                  </button>
                </div>
              </div>

              {/* Follow My Team */}
              <div className="group relative bg-slate-50 overflow-hidden border-4 border-transparent hover:border-teal-500 transition-all duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-cyan-900 to-cyan-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl">🏆</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-cyan-500 text-black px-4 py-2 font-bold text-sm uppercase">
                    Team Tracker
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                    Follow My Team
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Track your favorite team through their World Cup journey
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-8">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">✓</span>
                      Team news & updates
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">✓</span>
                      Match schedules & results
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">✓</span>
                      Player profiles & stats
                    </li>
                  </ul>
                  <button className="w-full py-4 bg-slate-900 hover:bg-cyan-500 text-white hover:text-black font-bold uppercase tracking-wide transition-all duration-300">
                    Choose Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Host Cities Section - FIFA Clean Design */}
        <section className="py-20 bg-slate-50 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                16 Host Cities
              </h2>
              <p className="text-xl text-gray-600">
                Across the United States, Mexico, and Canada
              </p>
            </div>
            <HostCitiesMap />
          </div>
        </section>

        {/* Qualified Teams Section */}
        <section className="py-20 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                Qualified Teams
              </h2>
              <p className="text-xl text-gray-600">
                48 teams competing for glory
              </p>
            </div>
            <QualifiedTeamsTracker />
          </div>
        </section>

        {/* Tournament Format Section */}
        <section className="py-20 bg-slate-50 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                Tournament Format
              </h2>
              <p className="text-xl text-gray-600">
                The path to the final
              </p>
            </div>
            <TournamentFormat />
          </div>
        </section>

        {/* News & Poll Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 uppercase tracking-tight">
                  Latest News
                </h2>
                <NewsFeed />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 uppercase tracking-tight">
                  Fan Poll
                </h2>
                <FanPoll />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Premium Footer - FIFA Style */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-bold tracking-[0.3em] text-teal-400 mb-4">
              OBJECTWIRE OFFICIAL COVERAGE
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              DON'T MISS A MOMENT OF WORLD CUP 2026™
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Get comprehensive coverage, exclusive analysis, and breaking news from all 104 matches
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <Link
                href="/news"
                className="px-10 py-5 bg-teal-500 hover:bg-teal-400 text-black font-bold text-lg rounded-none transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
              >
                Latest News
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold text-lg rounded-none transition-all duration-300 uppercase tracking-wide"
              >
                Subscribe
              </Link>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-sm text-gray-500">
                © 2026 ObjectWire. FIFA World Cup™ coverage and analysis.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
