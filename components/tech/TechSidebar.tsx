"use client";

import Link from "next/link";

export default function TechSidebar() {
  const trendingTopics = [
    "Claude Sonnet 4.5",
    "Quantum Computing",
    "Enterprise AI Agents", 
    "GitHub Copilot Workspace",
    "TPU v6 Architecture"
  ];

  const upcomingEvents = [
    { name: "AWS re:Invent", date: "DEC 2026" },
    { name: "Google I/O", date: "MAY 2026" },
    { name: "NVIDIA GTC", date: "MAR 2026" },
  ];

  return (
    <div className="grid grid-cols-1 gap-0 border border-gray-200 divide-y divide-gray-200 bg-white">
      {/* Search / Filter (Conceptual) */}
      <div className="p-6">
        <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2">
          Index
        </div>
        <input 
          type="text" 
          placeholder="Search intelligence..." 
          className="w-full font-serif text-lg placeholder-gray-300 border-b border-gray-200 pb-2 focus:outline-none focus:border-black transition-colors"
        />
      </div>

      {/* Trending List - Text Only */}
      <div className="p-6">
        <h3 className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-6">
          Trending
        </h3>
        <ul className="space-y-4">
          {trendingTopics.map((topic, idx) => (
            <li key={idx}>
              <Link 
                href={`/search?q=${topic}`} 
                className="block font-sans text-sm text-gray-900 hover:text-blue-600 transition-colors"
              >
                {topic}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Events - Minimal Table style */}
      <div className="p-6">
        <h3 className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-6">
          Calendar
        </h3>
        <div className="space-y-4">
          {upcomingEvents.map((event, idx) => (
            <div key={idx} className="flex justify-between items-baseline group cursor-pointer">
              <span className="font-sans text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                {event.name}
              </span>
              <span className="font-mono text-[10px] text-gray-400">
                {event.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter - Clean Box */}
      <div className="p-6 bg-gray-50">
        <h3 className="font-serif text-xl text-gray-900 mb-2">
          Intelligence Briefing
        </h3>
        <p className="font-sans text-xs text-gray-500 mb-4 leading-relaxed max-w-[200px]">
          Strategic analysis delivered weekly. No noise.
        </p>
        <Link 
          href="/news" 
          className="inline-block font-mono text-[10px] uppercase tracking-widest text-black border-b border-black hover:opacity-60 transition-opacity pb-0.5"
        >
          Subscribe →
        </Link>
      </div>
    </div>
  );
}
