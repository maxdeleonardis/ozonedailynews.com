import type { Metadata } from "next";
import Link from "next/link";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Winter Olympics 2026 Milano Cortina: Complete Coverage & Schedule",
  description: "Complete coverage of the 2026 Winter Olympics in Milano Cortina, Italy. News, schedules, athletes, results, and analysis from February 6-22, 2026.",
  keywords: [
    "Winter Olympics 2026",
    "Milano Cortina 2026",
    "Winter Games",
    "Olympic coverage",
    "Italy Olympics",
    "Olympic sports",
    "Olympic athletes",
    "Olympic schedule",
  ],
  openGraph: {
    title: "Winter Olympics 2026: Milano Cortina Complete Coverage | ObjectWire",
    description: "Your hub for Winter Olympics 2026 news, schedules, results, and athlete stories from Milano Cortina, Italy.",
    type: "website",
    url: "https://www.objectwire.org/winter-olympics",
    images: [
      {
        url: "https://www.objectwire.org/winter-olympics-2026-og.jpg",
        width: 1200,
        height: 630,
        alt: "Winter Olympics 2026 Milano Cortina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Winter Olympics 2026: Milano Cortina Complete Coverage",
    description: "Live updates, schedules, and stories from the Winter Olympics 2026.",
  },
};

export default function WinterOlympicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      <NewsArticleSchema
        title="Winter Olympics 2026: Complete Milano Cortina Coverage"
        description="Comprehensive coverage of the 2026 Winter Olympics in Milano Cortina, Italy. Breaking news, athlete profiles, event schedules, medal counts, and analysis."
        publishedTime="2026-01-15T00:00:00Z"
        modifiedTime="2026-02-07T00:00:00Z"
        author="ObjectWire Sports Desk"
        imageUrl="https://www.objectwire.org/winter-olympics-2026.jpg"
        articleUrl="https://www.objectwire.org/winter-olympics"
        section="Sports"
        keywords={["Winter Olympics", "Milano Cortina 2026", "Olympic Games", "winter sports", "Italy"]}
      />

      <Breadcrumb
        items={[
          { name: "Home", item: "/" },
          { name: "Winter Olympics 2026", item: "/winter-olympics" },
        ]}
      />

      <article className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            WINTER OLYMPICS 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Milano Cortina 2026
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            XXV Olympic Winter Games — February 6-22, 2026
          </p>
          <div className="flex justify-center gap-4 text-lg text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇮🇹</span>
              <span>Milano & Cortina d'Ampezzo, Italy</span>
            </div>
            <div className="hidden md:block">•</div>
            <div>16 Days of Competition</div>
          </div>
        </header>

        {/* Quick Facts Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-12 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🏔️</span>
            Quick Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-200">
            <div>
              <p className="text-gray-400 text-sm mb-1">Dates</p>
              <p className="text-xl font-semibold">February 6-22, 2026</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Host Cities</p>
              <p className="text-xl font-semibold">Milano & Cortina d'Ampezzo</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Sports</p>
              <p className="text-xl font-semibold">16 Sports</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Events</p>
              <p className="text-xl font-semibold">116 Medal Events</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Athletes</p>
              <p className="text-xl font-semibold">~2,900 Expected</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Countries</p>
              <p className="text-xl font-semibold">~90 NOCs</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Opening Ceremony</p>
              <p className="text-xl font-semibold">February 6, 2026</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Closing Ceremony</p>
              <p className="text-xl font-semibold">February 22, 2026</p>
            </div>
          </div>
        </div>

        {/* Live Updates / Current Status */}
        <section className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 mb-8 border border-blue-500/30">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              Games Status
            </h2>
            <div className="text-sm text-gray-300">
              Updated: February 7, 2026, 10:00 AM CET
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 mb-4">
            <div className="flex items-center gap-4 mb-3">
              <div className="text-4xl">🏅</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Day 2 Underway</h3>
                <p className="text-gray-300">Events in progress across multiple venues</p>
              </div>
            </div>
            <p className="text-gray-200 leading-relaxed">
              The Winter Olympics are in full swing with alpine skiing, snowboarding, ice hockey, 
              and figure skating events taking place today. Medal ceremonies scheduled for this evening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4 border border-white/10">
              <div className="text-3xl mb-2">🎿</div>
              <h4 className="font-semibold text-white mb-1">Alpine Skiing</h4>
              <p className="text-sm text-gray-300">Men's Downhill - In Progress</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 border border-white/10">
              <div className="text-3xl mb-2">🏒</div>
              <h4 className="font-semibold text-white mb-1">Ice Hockey</h4>
              <p className="text-sm text-gray-300">Group Stage Matches Today</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 border border-white/10">
              <div className="text-3xl mb-2">⛸️</div>
              <h4 className="font-semibold text-white mb-1">Figure Skating</h4>
              <p className="text-sm text-gray-300">Team Event - Short Program</p>
            </div>
          </div>
        </section>

        {/* Medal Count */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🥇</span>
            Medal Count
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Rank</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Country</th>
                  <th className="text-center py-3 px-4 text-gray-300 font-semibold">🥇 Gold</th>
                  <th className="text-center py-3 px-4 text-gray-300 font-semibold">🥈 Silver</th>
                  <th className="text-center py-3 px-4 text-gray-300 font-semibold">🥉 Bronze</th>
                  <th className="text-center py-3 px-4 text-gray-300 font-semibold">Total</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                <tr className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-3 px-4 font-semibold">1</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span className="text-2xl">🇳🇴</span>
                    <span>Norway</span>
                  </td>
                  <td className="text-center py-3 px-4 font-semibold">3</td>
                  <td className="text-center py-3 px-4">2</td>
                  <td className="text-center py-3 px-4">1</td>
                  <td className="text-center py-3 px-4 font-bold">6</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-3 px-4 font-semibold">2</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span>
                    <span>United States</span>
                  </td>
                  <td className="text-center py-3 px-4 font-semibold">2</td>
                  <td className="text-center py-3 px-4">3</td>
                  <td className="text-center py-3 px-4">2</td>
                  <td className="text-center py-3 px-4 font-bold">7</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-3 px-4 font-semibold">3</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span className="text-2xl">🇨🇦</span>
                    <span>Canada</span>
                  </td>
                  <td className="text-center py-3 px-4 font-semibold">2</td>
                  <td className="text-center py-3 px-4">1</td>
                  <td className="text-center py-3 px-4">2</td>
                  <td className="text-center py-3 px-4 font-bold">5</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-3 px-4 font-semibold">4</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span className="text-2xl">🇮🇹</span>
                    <span>Italy (Host)</span>
                  </td>
                  <td className="text-center py-3 px-4 font-semibold">1</td>
                  <td className="text-center py-3 px-4">2</td>
                  <td className="text-center py-3 px-4">1</td>
                  <td className="text-center py-3 px-4 font-bold">4</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-3 px-4 font-semibold">5</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span className="text-2xl">🇩🇪</span>
                    <span>Germany</span>
                  </td>
                  <td className="text-center py-3 px-4 font-semibold">1</td>
                  <td className="text-center py-3 px-4">1</td>
                  <td className="text-center py-3 px-4">2</td>
                  <td className="text-center py-3 px-4 font-bold">4</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-center">
            <Link 
              href="/winter-olympics/medal-count" 
              className="inline-block text-blue-400 hover:text-blue-300 font-semibold"
            >
              View Full Medal Standings →
            </Link>
          </div>
        </section>

        {/* Sports & Events */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">16 Olympic Sports</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/winter-olympics/alpine-skiing" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">⛷️</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Alpine Skiing</h3>
              <p className="text-sm text-gray-400">11 events</p>
            </Link>

            <Link href="/winter-olympics/biathlon" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Biathlon</h3>
              <p className="text-sm text-gray-400">11 events</p>
            </Link>

            <Link href="/winter-olympics/bobsleigh" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">🛷</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Bobsleigh</h3>
              <p className="text-sm text-gray-400">4 events</p>
            </Link>

            <Link href="/winter-olympics/cross-country-skiing" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">⛷️</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Cross-Country</h3>
              <p className="text-sm text-gray-400">12 events</p>
            </Link>

            <Link href="/winter-olympics/curling" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">🥌</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Curling</h3>
              <p className="text-sm text-gray-400">3 events</p>
            </Link>

            <Link href="/winter-olympics/figure-skating" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">⛸️</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Figure Skating</h3>
              <p className="text-sm text-gray-400">5 events</p>
            </Link>

            <Link href="/winter-olympics/freestyle-skiing" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">🎿</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Freestyle Skiing</h3>
              <p className="text-sm text-gray-400">13 events</p>
            </Link>

            <Link href="/winter-olympics/ice-hockey" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">🏒</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Ice Hockey</h3>
              <p className="text-sm text-gray-400">2 events</p>
            </Link>

            <Link href="/winter-olympics/luge" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">🛷</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Luge</h3>
              <p className="text-sm text-gray-400">4 events</p>
            </Link>

            <Link href="/winter-olympics/nordic-combined" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">🎿</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Nordic Combined</h3>
              <p className="text-sm text-gray-400">3 events</p>
            </Link>

            <Link href="/winter-olympics/short-track" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">⛸️</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Short Track</h3>
              <p className="text-sm text-gray-400">9 events</p>
            </Link>

            <Link href="/winter-olympics/skeleton" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">🛷</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Skeleton</h3>
              <p className="text-sm text-gray-400">2 events</p>
            </Link>

            <Link href="/winter-olympics/ski-jumping" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">🎿</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Ski Jumping</h3>
              <p className="text-sm text-gray-400">4 events</p>
            </Link>

            <Link href="/winter-olympics/snowboarding" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">🏂</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Snowboarding</h3>
              <p className="text-sm text-gray-400">11 events</p>
            </Link>

            <Link href="/winter-olympics/speed-skating" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">⛸️</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Speed Skating</h3>
              <p className="text-sm text-gray-400">14 events</p>
            </Link>

            <Link href="/winter-olympics/ski-mountaineering" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">⛰️</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Ski Mountaineering</h3>
              <p className="text-sm text-gray-400">5 events (NEW)</p>
            </Link>
          </div>
        </section>

        {/* Latest News */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">📰</span>
            Latest Olympic News
          </h2>
          
          <div className="space-y-4">
            <Link href="/winter-olympics/italy-first-gold-lollobrigida" className="block p-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg hover:from-blue-600/30 hover:to-cyan-600/30 transition-colors border-2 border-blue-500/50 group">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🥇</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-black uppercase tracking-wider bg-red-600 text-white animate-pulse">
                      🔴 Breaking
                    </span>
                    <span className="text-sm text-gray-300">39 minutes ago • Speed Skating</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300">
                    Italy Wins First Gold as Milano Cortina Olympics Open
                  </h3>
                  <p className="text-gray-300">
                    Francesca Lollobrigida set an Olympic record in women's 3,000-meter speed skating on her 35th birthday, 
                    thrilling the home crowd and securing Italy's first gold medal of the Games.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/winter-olympics/lindsey-vonn-training-downhill" className="block p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg hover:from-purple-600/30 hover:to-pink-600/30 transition-colors border-2 border-purple-500/50 group">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⛷️</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-black uppercase tracking-wider bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                      🔥 Trending
                    </span>
                    <span className="text-sm text-gray-300">10 hours ago • Alpine Skiing</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300">
                    Lindsey Vonn Posts Third-Fastest Training Time Before Olympic Downhill
                  </h3>
                  <p className="text-gray-300">
                    The 41-year-old American skied on a torn ACL nine days after her crash, finishing 0.37 seconds 
                    behind teammate Breezy Johnson. Legendary performance ahead of Saturday's race.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/winter-olympics/news/opening-ceremony-recap" className="block p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎭</div>
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-2">February 7, 2026 • Opening Ceremony</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">
                    Milano Cortina Opens with Spectacular Ceremony Celebrating Italian Heritage
                  </h3>
                  <p className="text-gray-300">
                    The 2026 Winter Olympics officially began with a stunning opening ceremony in Milano, 
                    featuring performances celebrating Italy's art, culture, and Olympic history.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/winter-olympics/news/team-usa-roster" className="block p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🇺🇸</div>
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-2">February 6, 2026 • Team USA</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">
                    Team USA Announces Final Roster: 230 Athletes Across All Winter Sports
                  </h3>
                  <p className="text-gray-300">
                    The United States Olympic Committee unveiled its complete roster for Milano Cortina 2026, 
                    featuring returning champions and exciting newcomers.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/winter-olympics/news/climate-concerns" className="block p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🌡️</div>
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-2">February 5, 2026 • Climate</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">
                    Warm Temperatures Raise Concerns for Outdoor Events
                  </h3>
                  <p className="text-gray-300">
                    Unusually warm weather in the Italian Alps has organizers monitoring conditions closely 
                    and preparing backup plans for snow-dependent events.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-6 text-center">
            <Link 
              href="/winter-olympics/news" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Olympic News →
            </Link>
          </div>
        </section>

        {/* Featured Athletes */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">⭐</span>
            Athletes to Watch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/winter-olympics/athletes/mikaela-shiffrin" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">⛷️</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">Mikaela Shiffrin</h3>
              <p className="text-gray-400 mb-2">Alpine Skiing (USA)</p>
              <p className="text-sm text-gray-300">
                Most decorated alpine skier in World Cup history, aiming for multiple medals in her fourth Olympics.
              </p>
            </Link>

            <Link href="/winter-olympics/athletes/nathan-chen" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">⛸️</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">Nathan Chen</h3>
              <p className="text-gray-400 mb-2">Figure Skating (USA)</p>
              <p className="text-sm text-gray-300">
                Defending Olympic champion and six-time U.S. champion returns to defend his gold medal.
              </p>
            </Link>

            <Link href="/winter-olympics/athletes/johannes-boe" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">Johannes Thingnes Bø</h3>
              <p className="text-gray-400 mb-2">Biathlon (Norway)</p>
              <p className="text-sm text-gray-300">
                Dominant biathlete with 5 Olympic golds, seeking to cement legacy as greatest of all time.
              </p>
            </Link>

            <Link href="/winter-olympics/athletes/chloe-kim" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">🏂</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">Chloe Kim</h3>
              <p className="text-gray-400 mb-2">Snowboarding (USA)</p>
              <p className="text-sm text-gray-300">
                Two-time Olympic halfpipe champion looking to make history with third consecutive gold.
              </p>
            </Link>

            <Link href="/winter-olympics/athletes/eileen-gu" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">🎿</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">Eileen Gu</h3>
              <p className="text-gray-400 mb-2">Freestyle Skiing (China)</p>
              <p className="text-sm text-gray-300">
                Three-time Beijing 2022 medalist returns as one of winter sports' biggest stars.
              </p>
            </Link>

            <Link href="/winter-olympics/athletes/shoma-uno" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group">
              <div className="text-4xl mb-3">⛸️</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">Shoma Uno</h3>
              <p className="text-gray-400 mb-2">Figure Skating (Japan)</p>
              <p className="text-sm text-gray-300">
                World champion and Olympic bronze medalist aiming for gold on Italian ice.
              </p>
            </Link>
          </div>

          <div className="mt-6 text-center">
            <Link 
              href="/winter-olympics/athletes" 
              className="inline-block text-blue-400 hover:text-blue-300 font-semibold"
            >
              View All Athletes →
            </Link>
          </div>
        </section>

        {/* Venues */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🏟️</span>
            Competition Venues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Milano Cluster</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Ice Arena</strong> - Ice hockey</li>
                <li>• <strong>Mediolanum Forum</strong> - Figure skating, short track</li>
                <li>• <strong>PalaItalia</strong> - Curling</li>
                <li>• <strong>Speed Skating Oval</strong> - Speed skating</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Cortina d'Ampezzo Cluster</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Cortina Olympic Stadium</strong> - Opening/closing ceremonies</li>
                <li>• <strong>Tofana</strong> - Alpine skiing (downhill, super-G)</li>
                <li>• <strong>Socrepes</strong> - Curling</li>
                <li>• <strong>Olympic Sliding Centre</strong> - Bobsleigh, luge, skeleton</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Valtellina Cluster</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Livigno</strong> - Freestyle skiing, snowboard</li>
                <li>• <strong>Bormio</strong> - Alpine skiing (technical events)</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Val di Fiemme Cluster</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Lago di Tesero</strong> - Cross-country skiing</li>
                <li>• <strong>Ski Jumping Arena</strong> - Ski jumping, Nordic combined</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Schedule Highlights */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">📅</span>
            Today's Schedule Highlights
          </h2>
          
          <div className="space-y-3">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="text-3xl">⛷️</div>
                <div>
                  <h4 className="font-semibold text-white">Men's Alpine Skiing - Downhill</h4>
                  <p className="text-sm text-gray-400">Cortina d'Ampezzo</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-white">11:00 AM CET</div>
                <div className="text-sm text-gray-400">In Progress</div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="text-3xl">⛸️</div>
                <div>
                  <h4 className="font-semibold text-white">Figure Skating - Team Event Short Program</h4>
                  <p className="text-sm text-gray-400">Mediolanum Forum, Milano</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-white">2:00 PM CET</div>
                <div className="text-sm text-gray-400">Upcoming</div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🏒</div>
                <div>
                  <h4 className="font-semibold text-white">Men's Ice Hockey - USA vs Canada</h4>
                  <p className="text-sm text-gray-400">Ice Arena, Milano</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-white">7:30 PM CET</div>
                <div className="text-sm text-gray-400">Tonight</div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link 
              href="/winter-olympics/schedule" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Full Schedule →
            </Link>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Quick Links</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/winter-olympics/schedule" className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
              <div className="text-3xl mb-2">📅</div>
              <div className="text-white font-semibold">Schedule</div>
            </Link>

            <Link href="/winter-olympics/results" className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-white font-semibold">Results</div>
            </Link>

            <Link href="/winter-olympics/medal-count" className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
              <div className="text-3xl mb-2">🥇</div>
              <div className="text-white font-semibold">Medal Count</div>
            </Link>

            <Link href="/winter-olympics/athletes" className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
              <div className="text-3xl mb-2">👤</div>
              <div className="text-white font-semibold">Athletes</div>
            </Link>

            <Link href="/winter-olympics/teams" className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
              <div className="text-3xl mb-2">🌍</div>
              <div className="text-white font-semibold">Teams</div>
            </Link>

            <Link href="/winter-olympics/photos" className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
              <div className="text-3xl mb-2">📸</div>
              <div className="text-white font-semibold">Photos</div>
            </Link>

            <Link href="/winter-olympics/videos" className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
              <div className="text-3xl mb-2">🎥</div>
              <div className="text-white font-semibold">Videos</div>
            </Link>

            <Link href="/winter-olympics/history" className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-white font-semibold">History</div>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
