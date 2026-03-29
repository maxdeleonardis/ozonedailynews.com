interface Props {
  headlines: string[];
}

export default function NavBreakingTicker({ headlines }: Props) {
  if (!headlines.length) return null;

  // Triple the list so the marquee loops smoothly
  const text = [...headlines, ...headlines, ...headlines].join('   ·   ');

  return (
    <div className="flex-1 min-w-0 flex items-center gap-2 px-3 overflow-hidden">
      <span className="shrink-0 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 tracking-[.15em] uppercase leading-none">
        Breaking
      </span>
      <div className="overflow-hidden flex-1">
        <p className="text-[10px] font-semibold whitespace-nowrap animate-marquee font-mono text-black">
          {text}
        </p>
      </div>
    </div>
  );
}
