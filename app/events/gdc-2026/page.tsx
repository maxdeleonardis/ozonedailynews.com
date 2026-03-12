import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDC 2026 — Game Developers Conference Coverage | ObjectWire",
  description: "Full coverage of the Game Developers Conference 2026. Sessions, awards, announcements, industry trends, and everything happening at the world's largest professional game development event.",
  keywords: ["GDC 2026", "Game Developers Conference", "GDC", "game development", "indie games", "gaming industry", "San Francisco", "GDC Festival of Gaming", "gdconf"],
  openGraph: {
    title: "GDC 2026 — Game Developers Conference",
    description: "The world's largest professional game development event returns. Sessions, awards, keynotes, and breaking announcements — all covered by ObjectWire.",
    type: "website",
    images: ["/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GDC 2026 — Game Developers Conference Coverage | ObjectWire",
    description: "Sessions, awards, keynotes, and announcements from the world's largest pro game dev event.",
  },
  alternates: {
    canonical: "https://www.objectwire.org/events/gdc-2026",
  },
};

export default function GDC2026Page() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-violet-800 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">

            {/* Main Info */}
            <div className="md:col-span-2">
              <p className="text-indigo-200 text-sm font-mono tracking-wider mb-4 uppercase">
                March 17–21, 2026 · Moscone Center, San Francisco
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
                GDC 2026
              </h1>
              <p className="text-xl text-indigo-100 mb-2 font-semibold">
                Game Developers Conference
              </p>
              <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                The world's largest professional game development event returns to San Francisco.
                Five days of sessions, summits, tutorials, the IGF Awards, and the GDC Festival of Gaming —
                uniting every discipline in the industry under one roof.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur text-center">
                  <p className="text-3xl font-bold text-white">5</p>
                  <p className="text-sm text-indigo-100">Days</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur text-center">
                  <p className="text-3xl font-bold text-white">700+</p>
                  <p className="text-sm text-indigo-100">Sessions</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur text-center">
                  <p className="text-3xl font-bold text-white">29K+</p>
                  <p className="text-sm text-indigo-100">Attendees</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur text-center">
                  <p className="text-3xl font-bold text-white">100+</p>
                  <p className="text-sm text-indigo-100">Countries</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://gdconf.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-50 transition-colors text-sm"
                >
                  🎮 Official Site — gdconf.com
                </a>
                <span className="inline-flex items-center gap-2 bg-white/15 text-white font-medium px-5 py-2.5 rounded-lg text-sm border border-white/20">
                  📍 Moscone Center, San Francisco
                </span>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Event Details</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-indigo-200 text-xs uppercase tracking-wider mb-0.5">Dates</dt>
                  <dd className="font-semibold text-white">March 17–21, 2026</dd>
                </div>
                <div>
                  <dt className="text-indigo-200 text-xs uppercase tracking-wider mb-0.5">Location</dt>
                  <dd className="font-semibold text-white">Moscone Center<br />San Francisco, CA</dd>
                </div>
                <div>
                  <dt className="text-indigo-200 text-xs uppercase tracking-wider mb-0.5">Organiser</dt>
                  <dd className="font-semibold text-white">Informa Tech</dd>
                </div>
                <div>
                  <dt className="text-indigo-200 text-xs uppercase tracking-wider mb-0.5">Website</dt>
                  <dd>
                    <a href="https://gdconf.com" target="_blank" rel="noopener noreferrer" className="text-indigo-200 hover:text-white underline underline-offset-2 transition-colors">
                      gdconf.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-indigo-200 text-xs uppercase tracking-wider mb-0.5">Annual Since</dt>
                  <dd className="font-semibold text-white">1988</dd>
                </div>
                <div>
                  <dt className="text-indigo-200 text-xs uppercase tracking-wider mb-0.5">Highlights</dt>
                  <dd className="text-white">IGF Awards · GDC Awards · Festival of Gaming</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* ── What Is GDC ── */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is GDC?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The <strong>Game Developers Conference</strong> is the world's premier professional event for
                video game creators. Founded in 1988, it brings together programmers, artists, designers,
                producers, audio engineers, and business leaders for five days of education, inspiration,
                and networking in San Francisco.
              </p>
              <p className="text-gray-700 leading-relaxed">
                GDC is not a consumer expo — it is the industry talking to itself. Major studios announce
                engine features, indie developers debut experiments, and toolmakers compete for the attention
                of the people who build the games the world plays. Alongside formal sessions, the
                <strong> GDC Festival of Gaming</strong> opens the Expo floor to a broader audience,
                celebrating the art and culture of games.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎓", title: "Education", desc: "700+ sessions across programming, design, art, audio, business, and production tracks" },
                { icon: "🏆", title: "IGF Awards", desc: "Independent Games Festival honours the best indie games of the year" },
                { icon: "🕹️", title: "GDC Awards", desc: "The industry's own awards — voted on by game developers themselves" },
                { icon: "🎪", title: "Festival of Gaming", desc: "Public-facing expo showcasing the latest games, hardware, and tech" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Schedule / Days ── */}
      <div className="container mx-auto px-4 py-14 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">GDC 2026 Schedule</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { day: "Mon", date: "Mar 17", label: "Summits & Tutorials", desc: "Deep-dive full-day tracks on AI, rendering, narrative design, accessibility, and more", color: "bg-indigo-50 border-indigo-200" },
            { day: "Tue", date: "Mar 18", label: "Summits & Tutorials", desc: "Continued specialist summits including IGF Day, Audio Summit, and Mobile Summit", color: "bg-purple-50 border-purple-200" },
            { day: "Wed", date: "Mar 19", label: "Main Conference Day 1", desc: "Keynotes, Vision tracks, Expo opens, and IGF Showcase begins", color: "bg-violet-50 border-violet-200" },
            { day: "Thu", date: "Mar 20", label: "Main Conference Day 2", desc: "Award showcases, career sessions, networking events, and Festival of Gaming", color: "bg-fuchsia-50 border-fuchsia-200" },
            { day: "Fri", date: "Mar 21", label: "Main Conference Day 3", desc: "Closing sessions, GDC Awards ceremony, and final Expo day", color: "bg-pink-50 border-pink-200" },
          ].map((item) => (
            <div key={item.day} className={`rounded-xl p-5 border ${item.color}`}>
              <p className="text-xs font-mono text-gray-500 mb-1">{item.date}</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">{item.day}</p>
              <p className="font-semibold text-gray-800 text-sm mb-2">{item.label}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Key Tracks ── */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 py-14 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Session Tracks</h2>
          <p className="text-gray-600 mb-8">GDC covers every discipline in professional game development.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { track: "Programming", icon: "💻", color: "text-blue-600 bg-blue-50" },
              { track: "Visual Arts", icon: "🎨", color: "text-purple-600 bg-purple-50" },
              { track: "Game Design", icon: "🧩", color: "text-green-600 bg-green-50" },
              { track: "Audio", icon: "🎵", color: "text-orange-600 bg-orange-50" },
              { track: "Production", icon: "⚙️", color: "text-gray-600 bg-gray-100" },
              { track: "Business & Marketing", icon: "📈", color: "text-emerald-600 bg-emerald-50" },
              { track: "AI Summit", icon: "🤖", color: "text-cyan-600 bg-cyan-50" },
              { track: "Narrative Design", icon: "📖", color: "text-rose-600 bg-rose-50" },
              { track: "UX & Accessibility", icon: "♿", color: "text-teal-600 bg-teal-50" },
              { track: "Independent Games", icon: "🌱", color: "text-lime-600 bg-lime-50" },
              { track: "Mobile & Social", icon: "📱", color: "text-violet-600 bg-violet-50" },
              { track: "Career Development", icon: "🎓", color: "text-amber-600 bg-amber-50" },
            ].map((item) => (
              <div key={item.track} className={`flex items-center gap-3 rounded-lg p-4 ${item.color.split(" ")[1]}`}>
                <span className="text-2xl">{item.icon}</span>
                <span className={`font-semibold text-sm ${item.color.split(" ")[0]}`}>{item.track}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Awards ── */}
      <div className="container mx-auto px-4 py-14 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Awards & Recognition</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🏆</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900">IGF Awards</h3>
                <p className="text-sm text-gray-600">Independent Games Festival — Since 1999</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              The Independent Games Festival is one of the oldest and most prestigious awards in independent gaming.
              Categories include the Seumas McNally Grand Prize, Excellence in Visual Art, Excellence in Narrative,
              Excellence in Audio, and the Audience Award.
            </p>
            <p className="text-xs text-gray-500">Ceremony: Thursday, March 20, 2026</p>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🎮</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900">GDC Awards</h3>
                <p className="text-sm text-gray-600">Game of the Year — Voted by Developers</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Unique among industry awards, the GDC Awards are voted on exclusively by game developers —
              making them a true reflection of peer respect. Categories include Game of the Year, Innovation Award,
              Best Debut, and the Ambassador Award for community contributions.
            </p>
            <p className="text-xs text-gray-500">Ceremony: Friday, March 21, 2026</p>
          </div>
        </div>
      </div>

      {/* ── Festival of Gaming ── */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-14 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-violet-200 text-sm font-mono tracking-wider mb-3 uppercase">Public Event</p>
              <h2 className="text-4xl font-bold mb-4">GDC Festival of Gaming</h2>
              <p className="text-violet-100 mb-4 leading-relaxed">
                The <strong className="text-white">GDC Festival of Gaming</strong> transforms the Moscone Expo floor
                into a celebration of games and game culture open to the public. Attendees can play hundreds of titles
                — from AAA blockbusters to IGF-nominated indie gems — and meet the developers behind them.
              </p>
              <p className="text-violet-100 mb-6 leading-relaxed">
                Hardware manufacturers, engine vendors, and middleware companies fill the Expo with live demos,
                hands-on stations, and career opportunities for anyone interested in working in games.
              </p>
              <a
                href="https://gdconf.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Get Tickets at gdconf.com →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🕹️", title: "Playable Demos", desc: "Hundreds of games across all genres and platforms" },
                { icon: "👥", title: "Meet Devs", desc: "Get face time with the studios making your favourite games" },
                { icon: "🔧", title: "Tech Showcases", desc: "Unreal, Unity, Godot and more showing next-gen tooling" },
                { icon: "💼", title: "Career Fair", desc: "Studios hiring — bring your portfolio and CV" },
              ].map((item) => (
                <div key={item.title} className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-violet-200 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Why It Matters 2026 ── */}
      <div className="container mx-auto px-4 py-14 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why GDC 2026 Is One to Watch</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          The 2026 edition arrives at a pivotal moment for the industry — amid rapid AI integration, major studio
          consolidation, and a resurgent indie scene.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🤖",
              title: "AI in Game Development",
              desc: "Generative AI tools for art, dialogue, QA, and procedural content are moving from experiment to production pipeline. GDC's AI Summit will be the largest in the event's history.",
              color: "border-cyan-200 bg-cyan-50",
              textColor: "text-cyan-700",
            },
            {
              icon: "🌱",
              title: "Indie Renaissance",
              desc: "With major publishers contracting, independent studios are filling the creativity gap. Record IGF submissions signal a wave of boundary-pushing games coming to market.",
              color: "border-green-200 bg-green-50",
              textColor: "text-green-700",
            },
            {
              icon: "🌐",
              title: "Platform Wars",
              desc: "Competition between console, PC, mobile, and cloud gaming is reshaping business models. Cross-platform development, subscription economics, and live service sustainability are on every agenda.",
              color: "border-purple-200 bg-purple-50",
              textColor: "text-purple-700",
            },
          ].map((item) => (
            <div key={item.title} className={`rounded-xl p-6 border ${item.color}`}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className={`font-bold text-lg mb-2 ${item.textColor}`}>{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── GDC 2026 Stories ── */}
      <div className="container mx-auto px-4 py-14 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">GDC 2026 Coverage</h2>
        <p className="text-gray-600 mb-8">Sessions, announcements, and analysis from Moscone Center.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/video-games/game-of-the-year-2026-Clair-Obscur"
            className="group block border border-gray-200 rounded-xl overflow-hidden hover:border-violet-400 hover:shadow-md transition-all"
          >
            <div className="bg-gradient-to-r from-violet-600 to-indigo-700 px-5 py-3 flex items-center gap-2">
              <span className="text-white text-xs font-bold uppercase tracking-wider">GDC 2026 · Programming</span>
              <span className="ml-auto bg-white/20 text-white text-xs px-2 py-0.5 rounded-full font-medium">🔥 Trending</span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-violet-700 transition-colors leading-tight">
                Clair Obscur Devs Reveal GOTY Giant Built by Just 4 Programmers
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Sandfall Interactive confirmed 95% of Clair Obscur: Expedition 33 was scripted in Unreal Engine 5 Blueprints — by a team that started with a single programmer. The game has now surpassed Elden Ring as the most awarded title in history with 436 GOTY wins.
              </p>
              <span className="text-violet-600 text-sm font-medium group-hover:underline">Read more →</span>
            </div>
          </Link>

          <Link
            href="/events/gdc-2026/valve-steam-machine-steam-frame-compatibility-gdc-2026"
            className="group block border border-gray-200 rounded-xl overflow-hidden hover:border-indigo-400 hover:shadow-md transition-all"
          >
            <div className="bg-gradient-to-r from-gray-700 to-gray-900 px-5 py-3 flex items-center gap-2">
              <span className="text-white text-xs font-bold uppercase tracking-wider">GDC 2026 · Hardware</span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-indigo-700 transition-colors leading-tight">
                Valve Outlines Steam Machine & Steam Frame Compatibility Standards
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Valve confirmed 2026 launch targets for Steam Machine and Steam Frame VR, published Verified certification requirements, and blamed RAM supply-chain shortages for ongoing delays at a session attended by 450 developers.
              </p>
              <span className="text-indigo-600 text-sm font-medium group-hover:underline">Read more →</span>
            </div>
          </Link>

          <Link
            href="/video-games/news/outersloth-rejects-ai"
            className="group block border border-gray-200 rounded-xl overflow-hidden hover:border-green-400 hover:shadow-md transition-all"
          >
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-5 py-3 flex items-center gap-2">
              <span className="text-white text-xs font-bold uppercase tracking-wider">GDC 2026 · Indie &amp; Funding</span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-green-700 transition-colors leading-tight">
                Outersloth Rejects 100% of Generative AI Pitches
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                The indie fund backed by Among Us profits has processed ~3,400 submissions since 2022. Every single generative AI pitch has been turned down. Communications Director Victoria Tran: "I really like a game that has soul."
              </p>
              <span className="text-green-600 text-sm font-medium group-hover:underline">Read more →</span>
            </div>
          </Link>
        </div>
      </div>

      {/* ── Coverage Links ── */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Follow ObjectWire's GDC Coverage</h2>
              <p className="text-gray-600 text-sm">Live updates, announcements, and analysis throughout the conference week.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/video-games" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                🎮 Video Games Hub
              </Link>
              <Link href="/tech" className="inline-flex items-center gap-2 bg-gray-800 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-900 transition-colors text-sm">
                💻 Technology
              </Link>
              <Link href="/events" className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-medium px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                All Events →
              </Link>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
