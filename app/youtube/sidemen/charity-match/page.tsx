import type { Metadata } from "next";
import Link from "next/link";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sidemen Charity Match 2026: History, Players & Event Guide | YouTube's Biggest Football Match",
  description: "Complete guide to the Sidemen Charity Match 2026 - The world's biggest YouTube football event featuring KSI, MrBeast, Logan Paul, IShowSpeed, and 100+ creators. History, confirmed players, and live coverage.",
  keywords: [
    "Sidemen Charity Match 2026",
    "YouTube charity football",
    "KSI charity match",
    "Sidemen FC",
    "YouTube All-Stars",
    "MrBeast football",
    "IShowSpeed soccer",
    "Logan Paul match",
    "charity football match",
    "Sidemen event",
  ],
  openGraph: {
    title: "Sidemen Charity Match 2026: YouTube's Biggest Football Event",
    description: "The world's biggest YouTube charity football match returns! 100+ creators, millions raised, and the match of the year.",
    type: "article",
    url: "https://objectwire.com/youtube/sidemen/charity-match",
    images: [
      {
        url: "https://objectwire.com/og-sidemen-charity-match-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Sidemen Charity Match 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidemen Charity Match 2026: YouTube's Biggest Football Event",
    description: "100+ creators. Millions raised. The match of the year returns.",
    images: ["https://objectwire.com/og-sidemen-charity-match-2026.jpg"],
  },
};

export default function SidemenCharityMatchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <NewsArticleSchema
        title="Sidemen Charity Match 2026: History, Players & Event Guide"
        description="Complete guide to the Sidemen Charity Match 2026 - The world's biggest YouTube football event with 100+ creators raising millions for charity."
        author="ObjectWire Sports Team"
        publishedTime="2026-02-07T00:00:00Z"
        modifiedTime="2026-02-07T12:00:00Z"
        imageUrl="https://objectwire.com/og-sidemen-charity-match-2026.jpg"
        articleUrl="https://objectwire.com/youtube/sidemen/charity-match"
        section="Sports & Entertainment"
        keywords={["Sidemen Charity Match", "YouTube football", "charity event", "KSI", "Sidemen"]}
      />

      <Breadcrumb
        items={[
          { name: "Home", item: "/" },
          { name: "YouTube", item: "/youtube" },
          { name: "Sidemen", item: "/youtube/sidemen" },
          { name: "Charity Match 2026", item: "/youtube/sidemen/charity-match" },
        ]}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-blue-600 to-green-600 opacity-30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-red-600 rounded-full text-sm font-bold uppercase tracking-wider animate-pulse">
                ⚽ Coming September 2026
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
                Sidemen Charity Match
              </span>
              <br />
              <span className="text-white">2026</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The <span className="text-red-400 font-bold">world's biggest YouTube football event</span> returns! 100+ creators, celebrity guests, and millions raised for charity at London's iconic stadium.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/youtube/sidemen"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                🎮 The Sidemen Hub
              </Link>
              <a
                href="https://www.youtube.com/@Sidemen"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl font-bold text-lg transition-all border border-white/20"
              >
                📺 Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Event Stats */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 text-center">
            <div className="text-3xl mb-2">📅</div>
            <div className="text-sm text-gray-400 mb-1">Event Date</div>
            <div className="text-lg font-bold text-red-400">September 2026</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 text-center">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-sm text-gray-400 mb-1">Players</div>
            <div className="text-lg font-bold text-blue-400">100+ Creators</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 text-center">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-sm text-gray-400 mb-1">Total Raised</div>
            <div className="text-lg font-bold text-green-400">£25M+ (All Time)</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center">
            <div className="text-3xl mb-2">🏟️</div>
            <div className="text-sm text-gray-400 mb-1">Venue</div>
            <div className="text-lg font-bold text-purple-400">London Stadium</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* What is the Sidemen Charity Match */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <span className="text-red-400">⚽</span>
            What is the Sidemen Charity Match?
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              The <strong className="text-white">Sidemen Charity Match</strong> is an annual charity football event organized by the <Link href="/youtube/sidemen" className="text-red-400 hover:text-red-300 underline">Sidemen</Link>, the UK's biggest YouTube group. Since its inception in 2016, the match has grown into <span className="text-red-400 font-bold">the largest creator-led charity sporting event in the world</span>, featuring the biggest names from YouTube, social media, and entertainment.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              The event pits two teams of content creators, celebrities, and special guests against each other in a full 90-minute football match at a professional stadium. All proceeds go to various charitable causes, with the event raising over <strong className="text-green-400">£25 million</strong> across all editions.
            </p>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <p className="text-white text-lg m-0">
                "The Sidemen Charity Match has become bigger than football. It's a cultural moment where the internet comes together for good." - <strong>KSI</strong>
              </p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              The 2026 edition promises to be the biggest yet, with rumors of <strong>100+ participants</strong>, international superstars, and the largest charitable donation in the event's history. The match will be live-streamed to millions across multiple platforms and attended by tens of thousands of fans.
            </p>
          </div>
        </section>

        {/* Complete History Timeline */}
        <section>
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-yellow-400">📜</span>
            Complete History of Sidemen Charity Matches
          </h2>
          
          <div className="space-y-6">
            {/* 2016 Match */}
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-red-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-red-400 md:w-32">2016</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">The Beginning • Charlton Athletic FC</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-white">Date:</strong> May 21, 2016</p>
                    <p><strong className="text-white">Venue:</strong> The Valley (Charlton, London)</p>
                    <p><strong className="text-white">Attendance:</strong> 15,000+</p>
                    <p><strong className="text-white">Result:</strong> Sidemen 3-2 YouTube All-Stars</p>
                    <p><strong className="text-white">Raised:</strong> £110,000+ for various charities</p>
                    <p className="text-sm"><strong className="text-blue-400">Notable Moment:</strong> The first-ever YouTube charity football match. Featured only UK creators, mostly friends of the Sidemen. Proved the concept could work at scale.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2017 Match */}
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-orange-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-orange-400 md:w-32">2017</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Going Global • Southampton FC</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-white">Date:</strong> May 27, 2017</p>
                    <p><strong className="text-white">Venue:</strong> St Mary's Stadium (Southampton)</p>
                    <p><strong className="text-white">Attendance:</strong> 20,000+</p>
                    <p><strong className="text-white">Result:</strong> YouTube All-Stars 2-0 Sidemen</p>
                    <p><strong className="text-white">Raised:</strong> £210,000+</p>
                    <p className="text-sm"><strong className="text-blue-400">Notable Moment:</strong> International creators join for the first time. Calfreezy scored both goals in the All-Stars victory. Production quality significantly improved.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2018 Match */}
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-yellow-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-yellow-400 md:w-32">2018</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">The Stadium Era • Charlton FC</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-white">Date:</strong> June 2, 2018</p>
                    <p><strong className="text-white">Venue:</strong> The Valley (Charlton, London)</p>
                    <p><strong className="text-white">Attendance:</strong> 27,000 (Sold Out)</p>
                    <p><strong className="text-white">Result:</strong> Sidemen 7-1 YouTube All-Stars</p>
                    <p><strong className="text-white">Raised:</strong> £1.3M+ (10x increase!)</p>
                    <p className="text-sm"><strong className="text-blue-400">Notable Moment:</strong> KSI scored a hat-trick. The Sidemen's most dominant performance. First match to raise over £1 million, setting a new standard for creator charity events.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2019 Match */}
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-green-400 md:w-32">2019</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Celebrity Edition • Charlton FC</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-white">Date:</strong> June 15, 2019</p>
                    <p><strong className="text-white">Venue:</strong> The Valley (Charlton, London)</p>
                    <p><strong className="text-white">Attendance:</strong> 27,000 (Sold Out)</p>
                    <p><strong className="text-white">Result:</strong> YouTube All-Stars 3-0 Sidemen</p>
                    <p><strong className="text-white">Raised:</strong> £1.7M+</p>
                    <p className="text-sm"><strong className="text-blue-400">Notable Moment:</strong> Love Island stars, rappers, and mainstream celebrities join. Mo Syed (Yung Filly's manager) scores incredible goals. KSI plays goalkeeper entire match.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2020-2021 COVID Break */}
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-gray-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-gray-400 md:w-32">2020-21</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-300 mb-2">COVID-19 Hiatus</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>No matches held due to pandemic restrictions. The Sidemen continued charity efforts through online fundraising streams and donations, but the annual football match tradition was paused.</p>
                    <p className="text-sm"><strong className="text-gray-400">Impact:</strong> The two-year gap built massive anticipation for the return of the event in 2022.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2022 Match */}
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-blue-400 md:w-32">2022</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">The Return • London Stadium</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-white">Date:</strong> September 24, 2022</p>
                    <p><strong className="text-white">Venue:</strong> London Stadium (Olympic Stadium)</p>
                    <p><strong className="text-white">Attendance:</strong> 60,000+ (Sold Out)</p>
                    <p><strong className="text-white">Result:</strong> YouTube All-Stars 8-7 Sidemen (After Penalties)</p>
                    <p><strong className="text-white">Raised:</strong> £1M+ (confirmed, likely much higher)</p>
                    <p className="text-sm"><strong className="text-blue-400">Notable Moment:</strong> MASSIVE upgrade to London's Olympic Stadium. MrBeast makes UK debut. Chunkz scores iconic penalty. Most entertaining match yet with 15 combined goals. Featured Speed, Filly, Chunks, Castro, and more.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2023 Match */}
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-purple-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-purple-400 md:w-32">2023</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Record Breaking • London Stadium</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-white">Date:</strong> September 9, 2023</p>
                    <p><strong className="text-white">Venue:</strong> London Stadium</p>
                    <p><strong className="text-white">Attendance:</strong> 65,000+ (Sold Out)</p>
                    <p><strong className="text-white">Result:</strong> Sidemen 8-5 YouTube All-Stars</p>
                    <p><strong className="text-white">Raised:</strong> £2.4M+ (Record)</p>
                    <p className="text-sm"><strong className="text-blue-400">Notable Moment:</strong> Sidemen get revenge with dominant performance. IShowSpeed's chaotic energy steals the show. Tobi Brown (TBJZL) scores hat-trick. Logan Paul makes appearance. Highest fundraising total ever.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2024 Match */}
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-pink-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-pink-400 md:w-32">2024</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">The Spectacle • London Stadium</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-white">Date:</strong> September 14, 2024</p>
                    <p><strong className="text-white">Venue:</strong> London Stadium</p>
                    <p><strong className="text-white">Attendance:</strong> 65,000+ (Sold Out in hours)</p>
                    <p><strong className="text-white">Result:</strong> YouTube All-Stars 10-9 Sidemen (Overtime)</p>
                    <p><strong className="text-white">Raised:</strong> £2.5M+</p>
                    <p className="text-sm"><strong className="text-blue-400">Notable Moment:</strong> The highest-scoring match ever with 19 combined goals. DanTDM surprise appearance. Kai Cenat's US team performs well. Incredible overtime drama. Featured Beta Squad, Angry Ginge, and international stars.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2026 Match Preview */}
            <div className="bg-gradient-to-r from-red-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border-l-4 border-red-500 border-2">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-red-400 md:w-32">2026</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">🔥 The Biggest Event Yet • London Stadium</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-white">Date:</strong> September 2026 (TBA)</p>
                    <p><strong className="text-white">Venue:</strong> London Stadium (Expected)</p>
                    <p><strong className="text-white">Expected Attendance:</strong> 65,000+ (Instant Sellout)</p>
                    <p><strong className="text-white">Fundraising Goal:</strong> £5M+</p>
                    <p className="text-sm"><strong className="text-red-400">What to Expect:</strong> 100+ participants rumored. Biggest international creator lineup ever. Potential professional footballer cameos. Multi-platform streaming deal. Rumored post-match concert. This could be the largest creator event in history.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expected/Confirmed Players 2026 */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <span className="text-green-400">👥</span>
            Expected Players & Creators (2026)
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            While official rosters haven't been announced, these creators are expected or likely to participate based on past involvement, current relationships with the Sidemen, and recent hints:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sidemen Team */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-red-400 mb-4 flex items-center gap-2">
                🔴 Sidemen FC (Team Red)
              </h3>

              <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                <h4 className="text-xl font-bold text-red-400 mb-4">The Core 7 Sidemen</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/youtube/sidemen/ksi" className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors">
                    <span className="text-red-400">→</span> KSI (JJ)
                  </Link>
                  <Link href="/youtube/sidemen/miniminter" className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors">
                    <span className="text-red-400">→</span> Miniminter (Simon)
                  </Link>
                  <Link href="/youtube/sidemen/zerkaa" className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors">
                    <span className="text-red-400">→</span> Zerkaa (Josh)
                  </Link>
                  <Link href="/youtube/sidemen/tbjzl" className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors">
                    <span className="text-red-400">→</span> TBJZL (Tobi)
                  </Link>
                  <Link href="/youtube/sidemen/behzinga" className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors">
                    <span className="text-red-400">→</span> Behzinga (Ethan)
                  </Link>
                  <Link href="/youtube/sidemen/vikkstar" className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors">
                    <span className="text-red-400">→</span> Vikkstar123 (Vik)
                  </Link>
                  <Link href="/youtube/sidemen/w2s" className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors">
                    <span className="text-red-400">→</span> W2S (Harry)
                  </Link>
                </div>
              </div>

              <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                <h4 className="text-xl font-bold text-red-400 mb-4">Sidemen Allies & Friends</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong className="text-white">Calfreezy</strong> - OG Sidemen ally, past captain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong className="text-white">Callux</strong> - Long-time friend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong className="text-white">Chunks (AJ Shabeel)</strong> - Beta Squad member</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong className="text-white">Sharky</strong> - Beta Squad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong className="text-white">Niko Omilana</strong> - Beta Squad leader</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong className="text-white">King Kenny</strong> - Beta Squad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong className="text-white">Darkest Man</strong> - Beta Squad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong className="text-white">Theo Baker</strong> - UK creator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong className="text-white">Angry Ginge</strong> - Popular UK streamer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong className="text-white">Danny Aarons</strong> - Football YouTuber</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong className="text-white">Yung Filly</strong> - Comedian/Musician</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* YouTube All-Stars Team */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                🔵 YouTube All-Stars (Team Blue)
              </h3>

              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
                <h4 className="text-xl font-bold text-blue-400 mb-4">Mega Creators (Likely)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">MrBeast</strong> - World's biggest YouTuber (700M+ subs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">IShowSpeed</strong> - High-energy streamer, football fan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Logan Paul</strong> - WWE star, Prime co-founder with KSI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Kai Cenat</strong> - Twitch megastar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Chunkz</strong> - UK musician/comedian, crowd favorite</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Castro_1021</strong> - FIFA YouTuber, past participant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Deji</strong> - KSI's brother, regular participant</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
                <h4 className="text-xl font-bold text-blue-400 mb-4">International Stars</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Willne</strong> - UK commentary YouTuber</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">JiDion</strong> - US prankster</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">AMP Crew</strong> - US content group (Fanum, Davis, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">True Geordie</strong> - UK podcast host</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Manny</strong> - US YouTuber</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Dillon Danis</strong> - MMA fighter/creator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Fousey</strong> - US creator/boxer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Adin Ross</strong> - Controversial Kick streamer</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
                <h4 className="text-xl font-bold text-blue-400 mb-4">Potential Surprises</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">DanTDM</strong> - Gaming legend (made surprise 2024 appearance)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Jacksepticeye</strong> - Irish gaming icon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Markiplier</strong> - US gaming superstar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">xQc</strong> - Top Twitch streamer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Pokimane</strong> - Leading female creator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Valkyrae</strong> - YouTube Gaming star</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-xl">
            <h4 className="text-xl font-bold text-purple-400 mb-3">🎯 Special Guests & Cameos</h4>
            <p className="text-gray-300 mb-4">
              Past matches have featured professional footballers, musicians, and celebrities. 2026 could bring:
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm">
              <li>• Sergio Agüero (Manchester City legend)</li>
              <li>• Jermaine Jenas (Former England player)</li>
              <li>• Robert Pires (Arsenal legend)</li>
              <li>• Theo Walcott (Ex-Arsenal/England)</li>
              <li>• Miniminter's Dad (Fan favorite goalkeeper)</li>
              <li>• Musician performances at halftime</li>
              <li>• Celebrity referees or commentators</li>
              <li>• Surprise international football legends</li>
            </ul>
          </div>
        </section>

        {/* What Makes It Special */}
        <section>
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-purple-400">✨</span>
            What Makes the Sidemen Charity Match Special
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-600/10 to-orange-600/10 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-2xl font-bold text-red-400 mb-3">Global Internet Culture United</h3>
              <p className="text-gray-300 leading-relaxed">
                It's the one event where YouTube, Twitch, TikTok, and Instagram's biggest stars come together. US creators meet UK legends, rivalries are settled, and friendships are formed. It's a celebration of internet culture.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-3">Massive Charitable Impact</h3>
              <p className="text-gray-300 leading-relaxed">
                Over £25M raised to date for causes including Young Minds, Teenage Cancer Trust, CALM (Campaign Against Living Miserably), M7 Education, and numerous other charities supporting mental health, education, and youth programs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600/10 to-teal-600/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">Production Quality</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional broadcast production rivaling actual Premier League coverage. Multiple camera angles, expert commentary, drone footage, celebrity presenters, and entertainment beyond just football.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">😂</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-3">Entertainment Value</h3>
              <p className="text-gray-300 leading-relaxed">
                It's not just football—it's chaos, comedy, incredible goals, terrible misses, dramatic penalties, and genuine passion. IShowSpeed's antics, Chunkz's celebrations, and unexpected moments create viral content.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/10 to-orange-600/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
              <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">Accessible to Fans</h3>
              <p className="text-gray-300 leading-relaxed">
                Free to watch on YouTube with millions of live viewers. In-person tickets are affordable (£20-50) compared to traditional sports. The Sidemen make it accessible while still raising massive funds.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-600/10 to-red-600/10 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-3">Legitimate Competition</h3>
              <p className="text-gray-300 leading-relaxed">
                While entertaining, the matches are genuinely competitive. Players train, bragging rights matter, and the football can be surprisingly good. The rivalry between teams is real and adds stakes.
              </p>
            </div>
          </div>
        </section>

        {/* Event Impact & Statistics */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <span className="text-cyan-400">📊</span>
            Event Impact & All-Time Statistics
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Charitable Impact</h3>
              <div className="space-y-4">
                <div className="bg-green-900/20 rounded-xl p-5 border border-green-500/30">
                  <div className="text-3xl font-bold text-green-400 mb-2">£25M+</div>
                  <div className="text-gray-300 text-sm">Total Raised Across All Matches</div>
                </div>
                <div className="bg-blue-900/20 rounded-xl p-5 border border-blue-500/30">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-gray-300 text-sm">Charities Supported</div>
                </div>
                <div className="bg-purple-900/20 rounded-xl p-5 border border-purple-500/30">
                  <div className="text-3xl font-bold text-purple-400 mb-2">7</div>
                  <div className="text-gray-300 text-sm">Matches Held (2016-2024)</div>
                </div>
              </div>

              <div className="mt-6 bg-green-900/20 border-l-4 border-green-500 p-5 rounded-r-xl">
                <h4 className="text-lg font-bold text-green-400 mb-3">Main Beneficiaries</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Young Minds (Mental Health)</li>
                  <li>• Teenage Cancer Trust</li>
                  <li>• CALM (Campaign Against Living Miserably)</li>
                  <li>• M7 Education</li>
                  <li>• Rays of Sunshine</li>
                  <li>• Comic Relief</li>
                  <li>• Local UK charities</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Viewership & Reach</h3>
              <div className="space-y-4">
                <div className="bg-red-900/20 rounded-xl p-5 border border-red-500/30">
                  <div className="text-3xl font-bold text-red-400 mb-2">25M+</div>
                  <div className="text-gray-300 text-sm">Total YouTube Views (2024 Match)</div>
                </div>
                <div className="bg-orange-900/20 rounded-xl p-5 border border-orange-500/30">
                  <div className="text-3xl font-bold text-orange-400 mb-2">3M+</div>
                  <div className="text-gray-300 text-sm">Peak Concurrent Viewers</div>
                </div>
                <div className="bg-yellow-900/20 rounded-xl p-5 border border-yellow-500/30">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">65,000</div>
                  <div className="text-gray-300 text-sm">In-Person Attendance (Sold Out)</div>
                </div>
              </div>

              <div className="mt-6 bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-xl">
                <h4 className="text-lg font-bold text-blue-400 mb-3">Social Media Reach</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• #SidemenCharityMatch trends worldwide</li>
                  <li>• 500M+ combined social impressions</li>
                  <li>• Featured on mainstream news (BBC, Sky)</li>
                  <li>• Clips go viral on TikTok, Twitter/X, Instagram</li>
                  <li>• International media coverage</li>
                  <li>• Multi-platform streaming (YouTube, Twitch)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">All-Time Match Records</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">Highest Scoring Match</div>
                <div className="text-lg font-bold text-white">2024: 19 combined goals</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Most Goals by Player</div>
                <div className="text-lg font-bold text-white">KSI: Hat-trick (2018)</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Fastest Sellout</div>
                <div className="text-lg font-bold text-white">2024: Hours</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Most Raised</div>
                <div className="text-lg font-bold text-white">2024: £2.5M+</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Series Record</div>
                <div className="text-lg font-bold text-white">All-Stars: 4-3</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Largest Margin</div>
                <div className="text-lg font-bold text-white">Sidemen 7-1 (2018)</div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Watch & Participate */}
        <section>
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-orange-400">📺</span>
            How to Watch & Get Tickets
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm rounded-xl p-8 border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                🎟️ In-Person Tickets
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Tickets for the 2026 Sidemen Charity Match will be announced via the <a href="https://twitter.com/Sidemen" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 underline">@Sidemen Twitter</a> account and their YouTube community posts.
                </p>
                <div className="bg-orange-900/30 rounded-lg p-4">
                  <h4 className="font-bold text-orange-400 mb-2">Expected Ticket Info:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Venue:</strong> London Stadium (60,000+ capacity)</li>
                    <li>• <strong>Price Range:</strong> £20-£100</li>
                    <li>• <strong>On Sale:</strong> Summer 2026 (TBA)</li>
                    <li>• <strong>Sell Out Time:</strong> Minutes to hours (based on 2024)</li>
                    <li>• <strong>Where to Buy:</strong> Official Sidemen website/partners only</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
                  <p className="text-sm"><strong className="text-red-400">⚠️ Beware of Scams:</strong> Only buy from official channels. Tickets will be announced on verified Sidemen accounts. No pre-sales or "secret" ticket links.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                📱 Watch Online (Free!)
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  The match will be <strong className="text-blue-400">FREE to watch</strong> live on YouTube and potentially other streaming platforms:
                </p>
                <div className="bg-blue-900/30 rounded-lg p-4">
                  <h4 className="font-bold text-blue-400 mb-2">Streaming Channels:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Main Stream:</strong> <a href="https://youtube.com/@Sidemen" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Sidemen YouTube Channel</a></li>
                    <li>• <strong>Alternative Views:</strong> Individual Sidemen channels</li>
                    <li>• <strong>Watch Parties:</strong> Creator co-streams on Twitch/Kick</li>
                    <li>• <strong>International:</strong> Potential regional streaming deals</li>
                    <li>• <strong>Replays:</strong> Full match available after event</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-4">
                  <h4 className="font-bold text-purple-400 mb-2">What to Expect:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Professional multi-camera production</li>
                    <li>• Celebrity commentators</li>
                    <li>• Pre-match show with interviews</li>
                    <li>• Halftime entertainment</li>
                    <li>• Post-match celebrations and reactions</li>
                    <li>• Behind-the-scenes content</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <span className="text-yellow-400">💭</span>
            Why the Sidemen Charity Match Matters
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Beyond the entertainment value, the Sidemen Charity Match represents something significant about modern creator culture and philanthropy:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Redefining Celebrity Philanthropy</h3>
                <p className="text-gray-300 m-0 text-sm leading-relaxed">
                  Traditional celebrity charity events are often exclusive galas. The Sidemen made theirs accessible, free to watch online, and genuinely entertaining. They've shown that new media creators can mobilize their communities for massive charitable impact without corporate partnerships or traditional fundraising models.
                </p>
              </div>

              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Bridging Online & Offline Communities</h3>
                <p className="text-gray-300 m-0 text-sm leading-relaxed">
                  The match brings internet culture into the physical world at scale. 65,000 people gathered to celebrate their favorite creators, proving that online communities can translate to real-world impact. It's a testament to the genuine connection between creators and fans.
                </p>
              </div>

              <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-green-400 mb-3">Inspiring the Next Generation</h3>
                <p className="text-gray-300 m-0 text-sm leading-relaxed">
                  Young people see their heroes—not actors or athletes, but YouTubers—using their platforms for good. It normalizes charitable giving and shows that success comes with responsibility. The Sidemen have inspired countless other creators to host their own charity events.
                </p>
              </div>

              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Proving Creator Economy Power</h3>
                <p className="text-gray-300 m-0 text-sm leading-relaxed">
                  The match demonstrates the economic and cultural power of the creator economy. Seven YouTubers can sell out a 65,000-seat stadium, attract global brands, and generate more buzz than many professional sporting events. It's validation of new media's influence.
                </p>
              </div>
            </div>

            <div className="bg-red-900/20 border-2 border-red-500/50 rounded-xl p-6">
              <p className="text-white text-lg m-0 leading-relaxed">
                The Sidemen Charity Match isn't just a football game—it's a annual celebration of what the internet can achieve when creators use their influence responsibly. It's proof that entertainment and philanthropy don't have to be separate, and that the next generation of celebrities are rewriting the rules of what it means to give back.
              </p>
            </div>
          </div>
        </section>

        {/* Related Coverage */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <span className="text-orange-400">🔗</span>
            Related Coverage
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/youtube/sidemen"
              className="bg-gradient-to-r from-red-600/20 to-yellow-600/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 hover:border-red-400 transition-all group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🎮</div>
              <h3 className="text-xl font-bold text-red-400 mb-2">The Sidemen Hub</h3>
              <p className="text-gray-400 text-sm">Complete coverage of the UK's biggest YouTube group →</p>
            </Link>

            <Link
              href="/youtube/sidemen/ksi"
              className="bg-gradient-to-r from-red-600/20 to-black/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 hover:border-red-400 transition-all group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🥊</div>
              <h3 className="text-xl font-bold text-red-400 mb-2">KSI Profile</h3>
              <p className="text-gray-400 text-sm">Learn about the Sidemen founder →</p>
            </Link>

            <Link
              href="/youtube"
              className="bg-gradient-to-r from-red-600/20 to-white/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 hover:border-red-400 transition-all group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📺</div>
              <h3 className="text-xl font-bold text-red-400 mb-2">YouTube Hub</h3>
              <p className="text-gray-400 text-sm">YouTube platform history and culture →</p>
            </Link>

            <Link
              href="/news"
              className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 transition-all group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📰</div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Latest Creator News</h3>
              <p className="text-gray-400 text-sm">Stay updated on YouTube and streaming →</p>
            </Link>
          </div>
        </section>

      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-800">
        <p className="text-center text-gray-500 text-sm">
          Sidemen Charity Match 2026 • September 2026 (TBA) • London Stadium
          <br />
          <span className="text-xs">Organized by The Sidemen • All proceeds to charity • Follow <a href="https://twitter.com/Sidemen" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">@Sidemen</a> for official announcements</span>
        </p>
      </div>
    </div>
  );
}
