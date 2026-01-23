import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticlePage,
  Section,
  DataTable,
} from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: "Top Artists in the United States | ObjectWire Music",
  description:
    "Explore the top 7 artists dominating the US music scene right now. Featuring chart-toppers, streaming giants, and cultural icons shaping modern music.",
  keywords: [
    "top artists",
    "music charts",
    "US artists",
    "popular musicians",
    "streaming charts",
    "Billboard artists",
  ],
};

export default function ArtistsPage() {
  const tableOfContents = [
    { id: "rankings", label: "Current Rankings" },
    { id: "profiles", label: "Artist Profiles" },
    { id: "trends", label: "Industry Trends" },
  ];

  return (
    <ArticlePage
      title="Top Artists in the United States"
      subtitle="The biggest names dominating the music industry today"
      category="Music"
      lastUpdated="January 23, 2026"
      tableOfContents={tableOfContents}
    >
      <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">
        These are the <strong>top 7 artists</strong> currently dominating the{" "}
        <strong>United States music scene</strong>. Based on streaming numbers,
        chart performance, cultural impact, and industry influence, these
        musicians represent the most significant forces in modern music.
      </p>

      <Section id="rankings" title="Current Rankings">
        <p className="text-gray-700 mb-4">
          Rankings based on monthly streaming listeners, chart performance, and
          cultural impact as of January 2026:
        </p>

        <DataTable
          headers={["Rank", "Artist", "Genre", "Monthly Listeners", "Key Achievement"]}
          rows={[
            ["1", "Taylor Swift", "Pop / Country", "95M+", "Eras Tour Record Holder"],
            ["2", "The Weeknd", "R&B / Pop", "90M+", "Blinding Lights Diamond"],
            ["3", "Drake", "Hip-Hop / R&B", "85M+", "Most Streamed All-Time"],
            ["4", "Bad Bunny", "Latin Trap", "78M+", "Global Streaming Leader"],
            ["5", "SZA", "R&B / Soul", "65M+", "SOS Album Phenomenon"],
            ["6", "Peso Pluma", "Regional Mexican", "52M+", "Corridos Tumbados Pioneer"],
            ["7", "Yeat", "Rage Rap", "42M+", "Underground to Mainstream"],
          ]}
        />
      </Section>

      <Section id="profiles" title="Artist Profiles">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Taylor Swift */}
          <Link
            href="/artists/taylor-swift"
            className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl">👑</span>
              <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">#1</span>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">Taylor Swift</h3>
            <p className="text-sm text-gray-600 mb-2">Pop / Country</p>
            <p className="text-2xl font-bold text-purple-600 mb-2">95M+</p>
            <p className="text-xs text-gray-700">14x Grammy Winner, Eras Tour Record Holder</p>
          </Link>

          {/* The Weeknd */}
          <Link
            href="/artists/the-weeknd"
            className="block bg-gradient-to-br from-red-50 to-gray-50 rounded-xl p-6 border-2 border-red-200 hover:border-red-400 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl">🌙</span>
              <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded">#2</span>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">The Weeknd</h3>
            <p className="text-sm text-gray-600 mb-2">R&B / Pop</p>
            <p className="text-2xl font-bold text-red-600 mb-2">90M+</p>
            <p className="text-xs text-gray-700">4x Grammy Winner, Multiple Diamond Certifications</p>
          </Link>

          {/* Drake */}
          <Link
            href="/artists/drake"
            className="block bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200 hover:border-yellow-400 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl">🦉</span>
              <span className="text-xs font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded">#3</span>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">Drake</h3>
            <p className="text-sm text-gray-600 mb-2">Hip-Hop / R&B</p>
            <p className="text-2xl font-bold text-yellow-600 mb-2">85M+</p>
            <p className="text-xs text-gray-700">5x Grammy Winner, Most Streamed Artist Ever</p>
          </Link>

          {/* Bad Bunny */}
          <Link
            href="/artists/bad-bunny"
            className="block bg-gradient-to-br from-pink-50 to-yellow-50 rounded-xl p-6 border-2 border-pink-200 hover:border-pink-400 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl">🐰</span>
              <span className="text-xs font-bold text-pink-600 bg-pink-100 px-2 py-1 rounded">#4</span>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">Bad Bunny</h3>
            <p className="text-sm text-gray-600 mb-2">Latin Trap / Reggaeton</p>
            <p className="text-2xl font-bold text-pink-600 mb-2">78M+</p>
            <p className="text-xs text-gray-700">3x Grammy Winner, Global Streaming Leader 2020-2022</p>
          </Link>

          {/* SZA */}
          <Link
            href="/artists/sza"
            className="block bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border-2 border-teal-200 hover:border-teal-400 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl">🌊</span>
              <span className="text-xs font-bold text-teal-600 bg-teal-100 px-2 py-1 rounded">#5</span>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">SZA</h3>
            <p className="text-sm text-gray-600 mb-2">R&B / Soul</p>
            <p className="text-2xl font-bold text-teal-600 mb-2">65M+</p>
            <p className="text-xs text-gray-700">4x Grammy Winner, SOS Album Phenomenon</p>
          </Link>

          {/* Peso Pluma */}
          <Link
            href="/artists/peso-pluma"
            className="block bg-gradient-to-br from-green-50 to-red-50 rounded-xl p-6 border-2 border-green-200 hover:border-green-400 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl">🪶</span>
              <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">#6</span>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">Peso Pluma</h3>
            <p className="text-sm text-gray-600 mb-2">Regional Mexican</p>
            <p className="text-2xl font-bold text-green-600 mb-2">52M+</p>
            <p className="text-xs text-gray-700">Latin Grammy Winner, Corridos Tumbados Pioneer</p>
          </Link>

          {/* Yeat */}
          <Link
            href="/artists/yeat"
            className="block bg-gradient-to-br from-red-50 to-gray-50 rounded-xl p-6 border-2 border-red-200 hover:border-red-400 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-4xl">🔔</span>
              <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded">#7</span>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">Yeat</h3>
            <p className="text-sm text-gray-600 mb-2">Rage Rap / Hip-Hop</p>
            <p className="text-2xl font-bold text-red-600 mb-2">42M+</p>
            <p className="text-xs text-gray-700">Billboard 200 #1, Viral Streaming Phenomenon</p>
          </Link>
        </div>
      </Section>

      <Section id="trends" title="Industry Trends">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Key Observations</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Streaming Dominance:</strong> Monthly listeners continue to
            be the primary metric of success
          </li>
          <li>
            <strong>Genre Diversity:</strong> Top artists span pop, hip-hop, R&B,
            Latin, and regional Mexican music
          </li>
          <li>
            <strong>Global Influence:</strong> International artists (Bad Bunny,
            Peso Pluma) breaking through in the US
          </li>
          <li>
            <strong>Underground to Mainstream:</strong> Artists like Yeat proving
            viral success can translate to mainstream dominance
          </li>
          <li>
            <strong>Tour Revenue:</strong> Live performances driving massive
            revenue (Taylor Swifts Eras Tour)
          </li>
        </ul>
      </Section>
    </ArticlePage>
  );
}
