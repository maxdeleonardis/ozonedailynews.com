'use client';

/**
 * YouTubeEmbed — Renders a YouTube video as a responsive 16:9 iframe.
 *
 * Usage in content_html (parsed by ContentRenderer):
 *   <YouTubeEmbed videoId="1O90WZJALYc" />
 *   <YouTubeEmbed videoId="1O90WZJALYc" caption="Blue Origin New Glenn explosion footage" />
 *
 * Or via full URL:
 *   <YouTubeEmbed url="https://www.youtube.com/watch?v=1O90WZJALYc" />
 *
 * Renders a privacy-enhanced embed (youtube-nocookie.com) with lazy loading.
 * No external dependencies — native YouTube iframe API only.
 */

interface YouTubeEmbedProps {
  videoId?: string;
  url?: string;
  caption?: string;
  title?: string;
}

function extractVideoId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) return u.pathname.slice(1).split('?')[0];
    return u.searchParams.get('v');
  } catch {
    return null;
  }
}

export function YouTubeEmbed({ videoId, url, caption, title }: YouTubeEmbedProps) {
  const id = videoId ?? (url ? extractVideoId(url) : null);
  if (!id) return null;

  const embedTitle = title ?? caption ?? 'YouTube video';

  return (
    <figure className="my-8 not-prose">
      <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
          title={embedTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-gray-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
