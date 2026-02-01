"use client";

import Link from "next/link";

export default function TechStatsBar() {
  return (
    <div className="bg-white border-b border-gray-100 py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Simple Text Trend Line */}
        <div className="flex items-center">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mr-3">
            LATEST:
          </span>
          <Link 
            href="/claude-sonnet-4-5-release" 
            className="text-[11px] font-sans font-medium text-gray-900 hover:text-blue-600 transition-colors tracking-wide"
          >
            Claude 4.5 Benchmarks released ahead of schedule
          </Link>
        </div>

        {/* System Status / Minimal Utility */}
        <div className="hidden sm:flex items-center gap-6">
          <span className="text-[10px] font-mono text-gray-400 tracking-wider">
            SYSTEM: ONLINE
          </span>
          <Link 
            href="/about" 
            className="text-[10px] font-mono text-gray-500 hover:text-black uppercase tracking-wider transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
