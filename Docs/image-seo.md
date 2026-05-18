# Image SEO — OzoneNews Engineering Reference

> How to upload, store, display, and mark up images so they appear in Google Images,
> rank inside news articles, and never trigger a copyright claim.
>
> Last updated: February 18, 2026

---

## Part 1: Copyright — What You Can and Cannot Use

This is the most important section. Getting it wrong costs money.

### Safe image sources (use freely, no attribution required unless noted)

| Source | License | Notes |
|--------|---------|-------|
| **Wikimedia Commons** | CC0 / CC-BY / CC-BY-SA | Read the specific file license. CC0 = no attribution needed. CC-BY = credit required. |
| **Unsplash** | Unsplash License | Free for editorial use, no attribution required |
| **Pexels** | Pexels License | Same as Unsplash |
| **US Government work** (NASA, DARPA, DoD, White House photos) | Public Domain | Any photo taken by a US federal employee in official capacity is public domain |
| **Library of Congress** | Varies | Most historical photos are public domain — check each item |
| **Your own screenshots** | Yours | Screenshots of public software UIs (app stores, websites) are generally fair use for editorial commentary |
| **AI-generated images** (Midjourney, DALL-E, Flux) | Varies | Midjourney: commercial license with subscription. DALL-E: OpenAI grants you usage rights. Document which model you used. |

### What to avoid completely

- **Getty Images / AP / Reuters / AFP** — They actively scan the web with image fingerprinting and send DMCA notices + invoices ($1,000–$10,000 per image)
- **Google image search results** — These are just indexed copies of other people's images; "available for reuse" filter is unreliable
- **Celebrity / athlete photos from fan sites** — Almost always stolen from wire services
- **Movie/TV stills** — Covered by studio copyright; use only for direct criticism/review (fair use, small crop)
- **Social media screenshots of private posts** — Legally murky; only use public posts and credit the original poster

### Fair Use — when you can use copyrighted images

Fair use protects you when **all four** of these apply:

1. The use is **transformative** (commentary, criticism, news reporting — not decoration)
2. You used the **minimum necessary** (small crop, not the full HQ version)
3. The image is **factually newsworthy** (not just making the page look nice)
4. The use does **not harm the market** for the original

For OzoneNews: a small crop of a product screenshot in a review = fine. Using the same AP photo every tech news site uses as a header image = not fine.

---

## Part 2: Where to Store Images

### Option A — `/public/images/` (simple, current setup)

```
public/
  images/
    articles/
      winter-olympics/
        breezy-johnson-finish.jpg
        ilia-malinin-practice.jpg
      tech/
        openai-o3-benchmark.jpg
    team/
    logos/
```

**Pros:** Simple, no extra cost, images are statically served via Vercel's CDN.  
**Cons:** Images bloat the git repo and count against Vercel's 1 GB deployment limit.

Use this for: logos, team photos, UI assets, anything under ~200 KB.

### Option B — Supabase Storage (recommended for article photos)

OzoneNews already uses Supabase. Add a `media` bucket:

```
Supabase Storage
  bucket: media (public)
    articles/
      winter-olympics/
        breezy-johnson-finish.webp
    team/
```

Images get served from `https://[project].supabase.co/storage/v1/object/public/media/...`  
Vercel's `next/image` can optimize these if you add the domain to `next.config.ts`.

```typescript
// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      // Wikimedia Commons
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      // NASA
      {
        protocol: 'https',
        hostname: 'images-assets.nasa.gov',
      },
    ],
  },
};
```

### Option C — Cloudflare Images (~$5/month, ideal for scale)

Upload once, get a URL like `https://imagedelivery.net/[hash]/breezy-johnson/public`.  
Serves WebP automatically. Infinite transform variants (crop, resize) via URL params.  
Best option if you scale to 500+ articles.

---

## Part 3: Adding Images to the `contentRegistry`

Whenever an article has a hero image, register it in `lib/content-registry.ts`.  
The `imageUrl` field powers Google's rich results and the `NewsArticleSchema`:

```typescript
// lib/content-registry.ts
{
  slug: '/winter-olympics/usa/breezy-johnson',
  title: 'Breezy Johnson Wins First U.S. Gold at Milan Cortina 2026',
  description: 'Breezy Johnson secured Team USA\'s first gold medal in the super-G at Milan Cortina 2026.',
  publishDate: '2026-02-11',
  modifiedDate: '2026-02-11',
  category: 'Sports',
  tags: ['Winter Olympics', 'Team USA', 'Alpine Skiing'],
  author: 'OzoneNews Sports Desk',
  priority: 0.9,
  changeFrequency: 'weekly',
  // ← Add this whenever the article has a real image
  imageUrl: 'https://www.OzoneNews.org/images/articles/winter-olympics/breezy-johnson-finish.webp',
},
```

Google requires a `NewsArticle` image that is **at least 1200 × 675 px** and **16:9 ratio** for the Top Stories carousel. Smaller images are still indexed but won't appear in the visual carousel.

---

## Part 4: Displaying Images — `NewsArticle` Style

For standard news articles use Next.js `<Image>` with the standard OzoneNews aspect ratio:

```tsx
import Image from 'next/image';

// Hero image — full width, 16:9
<div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
  <Image
    src="/images/articles/winter-olympics/breezy-johnson-finish.webp"
    alt="Breezy Johnson crosses the finish line at Milan Cortina 2026 super-G"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
    className="object-cover"
    priority          // ← always set on above-the-fold hero images
  />
</div>

// Caption with attribution (critical for CC-BY images)
<figcaption className="text-xs text-gray-500 mt-1.5 text-center">
  Breezy Johnson after winning super-G gold. Photo:{' '}
  <a
    href="https://commons.wikimedia.org/wiki/File:..."
    className="underline hover:text-gray-700"
    rel="noopener noreferrer"
    target="_blank"
  >
    FIS / Wikimedia Commons (CC BY-SA 2.0)
  </a>
</figcaption>
```

### `alt` text rules for Google Images ranking

Google reads `alt` to understand what the image shows. These practices directly affect image search ranking:

| Do | Don't |
|----|-------|
| `alt="Breezy Johnson crosses the finish line in super-G at Milan Cortina 2026"` | `alt="image"` |
| Describe the **specific moment** and **people/locations** | Just say the person's name |
| Include the **event name or location** | Keyword-stuff: `alt="breezy johnson gold medal winner skiing champion"` |
| Use natural English sentences | Leave it empty |

---

## Part 5: Displaying Images — Wikipedia / `ArticlePage` Style

The `ArticlePage` component (`components/ArticlePage.tsx`) has a built-in `InfoBox` with an `image` prop. This renders the infobox image exactly like Wikipedia's right-aligned sidebar:

```tsx
import { ArticlePage } from '@/components/ArticlePage';

<ArticlePage
  title="Breezy Johnson"
  category="Sports"
  lastUpdated="February 11, 2026"
  infoBox={{
    title: "Breezy Johnson",
    image: {
      // Image must be square or portrait for infoboxes — ideally 300×400
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/.../300px-Breezy_Johnson.jpg",
      alt: "Breezy Johnson competing in alpine skiing at the 2026 Winter Olympics",
      caption: "Johnson at Milan Cortina 2026. Photo: Wikimedia Commons (CC BY-SA 2.0)",
    },
    items: [
      { label: "Born", value: "April 13, 1996" },
      { label: "Country", value: "United States" },
      // ...
    ],
  }}
>
  {/* article content */}
</ArticlePage>
```

**Infobox image sizing:** The `ArticlePage` component renders these at `300 px` wide. Upload at **600 × 800 px minimum** (2× for retina). Portrait or square only — landscape photos look bad in the narrow sidebar.

---

## Part 6: Making Images Appear in Google Images

Google Images ranks images based on six signals:

### 1. `ImageObject` in JSON-LD (most important)

The `SEOWrapper` component already injects a `NewsArticle` schema that includes the image when an `imageUrl` is in the registry. Verify it looks like this:

```json
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "...",
  "image": {
    "@type": "ImageObject",
    "url": "https://www.OzoneNews.org/images/articles/breezy-johnson-finish.webp",
    "width": 1200,
    "height": 675
  }
}
```

To include `width` and `height` in the schema (Google recommends it), extend `ContentEntry` and `SEOWrapper`:

```typescript
// lib/content-registry.ts — add to interface
export interface ContentEntry {
  // ... existing fields
  imageUrl?: string;
  imageWidth?: number;   // ← add
  imageHeight?: number;  // ← add
}
```

```tsx
// components/SEOWrapper.tsx — update image field in articleSchema
image: entry.imageUrl
  ? {
      '@type': 'ImageObject',
      url: entry.imageUrl,
      width: entry.imageWidth ?? 1200,
      height: entry.imageHeight ?? 675,
    }
  : undefined,
```

### 2. Descriptive file name

`/images/breezy-johnson-super-g-gold-milan-cortina-2026.webp` ranks better than `/images/img_4923.jpg`.

Rule: `[person-or-subject]-[event]-[year].webp`

### 3. `loading="lazy"` vs `priority`

- Above-the-fold hero image → always `priority` (prevents LCP penalty)
- All other images → Next.js lazy-loads by default (no extra code needed)

### 4. WebP format

Always serve WebP. It's 25–35% smaller than JPEG at the same quality.  
If you upload a JPEG, Next.js `<Image>` converts it to WebP automatically when served.  
When uploading to Supabase, convert before uploading using:

```bash
# MacOS / Linux
cwebp -q 85 photo.jpg -o photo.webp

# Windows (install libwebp from https://developers.google.com/speed/webp/download)
cwebp.exe -q 85 photo.jpg -o photo.webp
```

### 5. Canonical URL for the image

Ensure the image URL is stable and consistent. Never hotlink from Wikipedia — download and re-host, then give attribution. This prevents 404s if Wikimedia renames or deletes the file.

### 6. Sitemap image extension

Google supports `<image:image>` tags in sitemaps. Add it to the sitemap entry for pages with a hero image:

```typescript
// app/sitemap.ts — extended version (future enhancement)
// Note: Next.js MetadataRoute.Sitemap does not natively support image: extension
// To add image tags, return raw XML from app/sitemap.xml/route.ts instead

export async function GET() {
  const entries = contentRegistry.filter(e => e.imageUrl);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${entries.map(e => `
  <url>
    <loc>https://www.OzoneNews.org${e.slug}</loc>
    <lastmod>${e.modifiedDate}</lastmod>
    <image:image>
      <image:loc>${e.imageUrl}</image:loc>
      <image:title>${e.title}</image:title>
    </image:image>
  </url>`).join('')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
```

---

## Part 7: Attribution Template

When a CC-BY or CC-BY-SA image is used, always include visible credit. Copy-paste this pattern:

```tsx
<figure className="my-6">
  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
    <Image
      src="..."
      alt="..."
      fill
      sizes="(max-width: 768px) 100vw, 900px"
      className="object-cover"
    />
  </div>
  <figcaption className="mt-2 text-xs text-gray-500 text-center leading-relaxed">
    {/* For CC-BY: */}
    Caption text.{' '}
    <a href="[ORIGINAL_FILE_URL]" rel="noopener noreferrer" target="_blank" className="underline">
      Photo: [Photographer Name] / [Source]
    </a>{' '}
    (<a href="https://creativecommons.org/licenses/by/4.0/" rel="noopener noreferrer" target="_blank" className="underline">
      CC BY 4.0
    </a>)
  </figcaption>
</figure>
```

For CC0 / public domain:

```tsx
<figcaption className="mt-2 text-xs text-gray-500 text-center">
  Caption. Public Domain / {Source}.
</figcaption>
```

---

## Part 8: Quick Reference Checklist

Before publishing any article with images:

```
☐ Image source is CC0, CC-BY, public domain, owned, or licensed
☐ File name is descriptive: subject-event-year.webp
☐ Alt text describes the specific moment, people, and location
☐ Hero image is 1200 × 675 px minimum (16:9) for Google Top Stories
☐ Infobox image is portrait/square, 600 px minimum wide
☐ imageUrl added to contentRegistry entry
☐ Attribution caption visible on page (if CC-BY)
☐ Image hosted on OzoneNews.org or Supabase (not hotlinked from source)
☐ priority set on hero image, lazy on all others
```

---

## Part 9: Priority Implementation Order

1. **Add `imageUrl` to existing high-priority registry entries** — winter Olympics, Disney, any article with an existing image already referenced in page code
2. **Extend `SEOWrapper` to include `width`/`height`** in `ImageObject` schema
3. **Convert `app/sitemap.ts` to raw XML** so image sitemap extension can be added
4. **Audit all `ArticlePage` infoBoxes** for missing or hotlinked images
5. **Create `public/images/articles/` folder structure** and migrate any inline image URLs

---

*Document authored by OzoneNews Engineering, February 2026.*
