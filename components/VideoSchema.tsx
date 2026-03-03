/**
 * VideoSchema — VideoObject JSON-LD for Google Video Carousel
 *
 * Emits a <script type="application/ld+json"> block that tells Google this page
 * contains a video. Required for placement in the Video carousel and Video tab
 * in Google Search.
 *
 * Usage:
 *   <VideoSchema
 *     name="Gran Turismo 7 Official Trailer"
 *     description="Watch the official launch trailer for GT7."
 *     videoId="nnB6r43huNQ"
 *     uploadDate="2026-03-01T12:00:00Z"
 *     thumbnailUrl="https://www.objectwire.org/entertainment/gran_turismo.PNG"
 *     duration="PT2M30S"            // optional ISO 8601 duration
 *   />
 *
 * Can also be used for Vimeo or self-hosted:
 *   <VideoSchema
 *     name="My Video"
 *     description="..."
 *     contentUrl="https://example.com/video.mp4"
 *     embedUrl="https://player.vimeo.com/video/123456"
 *     uploadDate="2026-03-01T12:00:00Z"
 *     thumbnailUrl="https://example.com/thumb.jpg"
 *   />
 */

export interface VideoSchemaProps {
  /** Video title (required by Google) */
  name: string;
  /** Video description — at least one sentence (required by Google) */
  description: string;
  /** YouTube video ID — auto-generates thumbnailUrl, contentUrl, embedUrl */
  videoId?: string;
  /** Direct URL to the video file (auto-filled for YouTube) */
  contentUrl?: string;
  /** Embed player URL (auto-filled for YouTube) */
  embedUrl?: string;
  /** Video thumbnail URL — min 160×90, max 1920×1080 (auto-filled for YouTube) */
  thumbnailUrl?: string;
  /** ISO 8601 date (required by Google) */
  uploadDate: string;
  /** ISO 8601 duration, e.g. "PT2M30S" for 2 min 30 sec */
  duration?: string;
  /** If true, video requires a subscription/payment */
  requiresSubscription?: boolean;
}

export function VideoSchema({
  name,
  description,
  videoId,
  contentUrl,
  embedUrl,
  thumbnailUrl,
  uploadDate,
  duration,
  requiresSubscription = false,
}: VideoSchemaProps) {
  // Auto-fill YouTube-specific URLs
  const resolvedThumbnail =
    thumbnailUrl ?? (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : undefined);
  const resolvedEmbed =
    embedUrl ?? (videoId ? `https://www.youtube.com/embed/${videoId}` : undefined);
  const resolvedContent =
    contentUrl ?? (videoId ? `https://www.youtube.com/watch?v=${videoId}` : undefined);

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    uploadDate,
    ...(resolvedThumbnail ? { thumbnailUrl: resolvedThumbnail } : {}),
    ...(resolvedContent ? { contentUrl: resolvedContent } : {}),
    ...(resolvedEmbed ? { embedUrl: resolvedEmbed } : {}),
    ...(duration ? { duration } : {}),
    ...(requiresSubscription
      ? {
          isAccessibleForFree: false,
          hasPart: {
            '@type': 'Clip',
            name,
            isAccessibleForFree: false,
          },
        }
      : { isAccessibleForFree: true }),
    publisher: {
      '@type': 'Organization',
      name: 'ObjectWire',
      url: 'https://www.objectwire.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.objectwire.org/objectwire_o.PNG',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default VideoSchema;
