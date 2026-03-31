'use client';

import { useEffect, useRef } from 'react';

interface Props {
  headlines: string[];
}

const DURATION = 40; // seconds — full cycle
const STORAGE_KEY = 'ow_ticker_start';

export default function NavBreakingTicker({ headlines }: Props) {
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!pRef.current) return;

    // Read when the animation conceptually "started" from sessionStorage
    const stored = sessionStorage.getItem(STORAGE_KEY);
    const now = Date.now();
    let startTime: number;

    if (stored) {
      startTime = parseInt(stored, 10);
    } else {
      startTime = now;
      sessionStorage.setItem(STORAGE_KEY, String(startTime));
    }

    // How many seconds have elapsed since the animation started (mod cycle)
    const elapsed = ((now - startTime) / 1000) % DURATION;
    // Apply a negative delay to skip ahead to the right position
    pRef.current.style.animationDelay = `-${elapsed}s`;
    pRef.current.style.animationDuration = `${DURATION}s`;
  }, []);

  if (!headlines.length) return null;

  // Triple the list so the marquee loops smoothly
  const text = [...headlines, ...headlines, ...headlines].join('   ·   ');

  return (
    <div className="flex-1 min-w-0 flex items-center gap-2 px-3 overflow-hidden">
      <span className="shrink-0 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 tracking-[.15em] uppercase leading-none">
        Breaking
      </span>
      <div className="overflow-hidden flex-1">
        <p ref={pRef} className="text-[10px] font-semibold whitespace-nowrap animate-marquee font-mono text-black">
          {text}
        </p>
      </div>
    </div>
  );
}
