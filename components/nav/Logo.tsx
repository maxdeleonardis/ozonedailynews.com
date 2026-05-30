import Link from 'next/link';

/**
 * OzoneNews wordmark + orbital SVG mark.
 * Used in SiteHeader and the login page.
 */
export default function Logo({
  href = '/',
  size = 'md',
}: {
  href?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const iconSize = size === 'sm' ? 24 : size === 'lg' ? 40 : 32;
  const nameClass =
    size === 'sm'
      ? 'text-xl'
      : size === 'lg'
        ? 'text-4xl'
        : 'text-2xl sm:text-[1.65rem]';
  const subClass =
    size === 'sm'
      ? 'text-[0.7rem]'
      : size === 'lg'
        ? 'text-base'
        : 'text-[0.8rem] sm:text-[0.85rem]';

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2.5 group shrink-0"
      aria-label="OzoneNews — Home"
    >
      {/* ── Orbital mark ────────────────────────────────────────────── */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        className="shrink-0 text-ozone-accent transition-opacity group-hover:opacity-80"
      >
        {/* Orbital ring */}
        <ellipse
          cx="16"
          cy="16"
          rx="13"
          ry="5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform="rotate(-28 16 16)"
        />
        {/* Central body */}
        <circle cx="16" cy="16" r="4" fill="currentColor" />
        {/* Satellite — sits on the upper-right arc of the ring */}
        <circle cx="22.5" cy="8.2" r="1.8" fill="currentColor" />
      </svg>

      {/* ── Wordmark ─────────────────────────────────────────────────── */}
      <span className="leading-none select-none">
        <span
          className={`font-black tracking-tight text-[var(--ozone-ink)] font-sans group-hover:text-gray-700 transition-colors ${nameClass}`}
        >
          OZONE
        </span>
        <span
          className={`ml-1.5 font-semibold tracking-[0.18em] text-gray-400 font-sans uppercase group-hover:text-gray-500 transition-colors ${subClass}`}
        >
          NEWS
        </span>
      </span>
    </Link>
  );
}
