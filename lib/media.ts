/**
 * getMediaUrl — environment-aware image URL resolver
 *
 * LOCAL  (NEXT_PUBLIC_MEDIA_BASE not set):
 *   getMediaUrl('/formula-1/ceo_formula_1.PNG')
 *   → '/formula-1/ceo_formula_1.PNG'
 *   Next.js serves this from the /public folder as normal.
 *
 * PRODUCTION  (NEXT_PUBLIC_MEDIA_BASE = Supabase bucket URL):
 *   getMediaUrl('/formula-1/ceo_formula_1.PNG')
 *   → 'https://xxx.supabase.co/storage/v1/object/public/blog-images/formula-1/ceo_formula_1.PNG'
 *
 * Usage:
 *   import { getMediaUrl } from '@/lib/media';
 *   <Image src={getMediaUrl('/entertainment/conan_obrian.PNG')} ... />
 *
 * Set in your environment:
 *   .env.local          → NEXT_PUBLIC_MEDIA_BASE=        (empty = use /public)
 *   Vercel/production   → NEXT_PUBLIC_MEDIA_BASE=https://kzcwclprrtonpsnownbl.supabase.co/storage/v1/object/public/blog-images
 */
export function getMediaUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_MEDIA_BASE?.replace(/\/$/, '');

  // No base set — serve from /public (local dev default)
  if (!base) return path.startsWith('/') ? path : `/${path}`;

  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/**
 * Convenience wrapper for author / avatar images stored in /public/authors
 */
export function getAuthorAvatarUrl(filename: string): string {
  return getMediaUrl(`/authors/${filename}`);
}
