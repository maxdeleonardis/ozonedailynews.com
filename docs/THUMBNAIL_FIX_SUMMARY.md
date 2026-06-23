# Thumbnail Fix Summary | June 22, 2026

## Problem

Runtime error in Next.js dev server:
```
Invalid src prop (/api/og?slug=...) on `next/image` does not match `images.localPatterns`
```

## Root Cause

- **24 articles** had `thumbnail_src` fields pointing to broken `/api/og?slug=...` URLs
- These URLs were supposed to dynamically generate OG images via a Satori API endpoint
- The `/api/og` proxy route redirects to production Satori, which is currently returning HTTP 500 errors
- Local Satori instances (ports 3001-3004) are either down or returning HTTP 405 Method Not Allowed

## Solution Applied

### Immediate Fix (Completed)
✅ Replaced all `/api/og` URLs with Unsplash placeholder images
✅ Updated 24 article JSON files in `content/static/`
✅ Regenerated `content_registry.json` with corrected imageUrl fields
✅ Next.js error is now resolved — dev server works

### Files Modified
- **24 article JSON files** in:
  - `content/static/articles/2026/05/`
  - `content/static/articles/2026/06/`
  - `content/static/jack_articles/2026/05/`
  - `content/static/jack_articles/2026/06/`
- `content/static/content_registry.json` (regenerated)

### Placeholder Image Used
```
https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=675&fit=crop
```
(Generic space/stars image suitable for most science/tech content)

## Current Thumbnail Status

### ✅ Working (12 articles)
- Use local `/thumbnails/*.jpg` static files
- Located in `public/thumbnails/`
- Generated earlier from local Satori on port 3002
- **Articles**:
  - `/blue-origin`
  - `/nasa`
  - `/space-x`
  - `/science/quantum-entanglement-strange-metal-crystal-2026`
  - `/science/jwst-gj504b-salty-clouds-pink-planet-2026`
  - `/science/titan-hydrocarbon-resources-nasa-study-2026`
  - `/world-climate/antarctic-ice-sheet-collapse-30-year-warning-2026`
  - `/tech/bezos-orbital-data-centers-vivatech-2026`
  - `/blue-origin/new-glenn-pad-rebuild-lc36-2026`
  - `/tech/google-nvidia-ai-chip-playbook-tpu-2026`

### ⚠️ Using Generic Placeholders (27 articles)
- All 24 articles that had `/api/og` URLs (now fixed)
- Plus 3 additional articles already using Unsplash stock photos
- **Temporary solution** until Satori is available

### ✅ Using Supabase Storage (2 articles)
- `/tech/blazar-talon-1-5x-anamorphic-autofocus-full-frame-2026`
- `/tech/google-horndal-sweden-data-center-groundbreaking-2026`
- These have custom uploaded thumbnails — **no action needed**

## Next Steps

### Short Term (Ready to Execute)
1. **Get Satori running** on local port 3001 (not 3002)
   - Check `satori_how_to.md` for setup instructions
   - Verify with: `curl http://localhost:3001/api/health`

2. **Generate proper thumbnails** for all 27 placeholder articles
   - Run: `npm run generate:thumbnails -- --generate` (when implemented)
   - Or use: `npm run mint:thumbnails` (existing script from satori_how_to.md)

3. **Update articles one by one**
   - Replace Unsplash URLs with custom Satori-generated `/thumbnails/*.jpg` files
   - Maintain consistent branding across all articles

### Long Term (System Improvement)
1. **Fix production Satori** at `satori-neon.vercel.app`
   - Currently returns HTTP 500 on `/api/v1/generate`
   - Quick-generate registration endpoint works, but generate fails

2. **Evaluate live Satori** at `https://www.fshot.one/`
   - Currently returns HTTP 405 on both GET and POST
   - May need authentication or different endpoint structure

3. **Remove `/api/og` proxy route** entirely
   - Relies on broken external services
   - Static `/thumbnails/` approach is more reliable
   - Update `next.config.ts` to remove `/api/og` from localPatterns

## Tools Created

### `/scripts/generate-missing-thumbnails.ts`
- **Purpose**: Audit which articles need thumbnails
- **Usage**: `npm run generate:thumbnails`
- **Status**: ✅ Audit phase working, generation phase needs Satori

### `/scripts/fix-broken-thumbnails.ts`
- **Purpose**: Quick-fix specific articles with broken URLs
- **Usage**: Direct ts-node execution
- **Status**: ✅ Completed its job, archived for reference

## Scripts Available in package.json

```json
{
  "generate:thumbnails": "Audit and generate missing thumbnails",
  "mint:thumbnails": "Legacy thumbnail minter (requires local Satori)",
  "wiki:sync": "Regenerate content_registry.json from article JSON files"
}
```

## Verification Commands

```bash
# Check for any remaining /api/og URLs
find content/static -name "*.json" -not -name "content_registry.json" -exec grep -l 'api/og' {} \;

# Count articles by thumbnail type
cat content/static/content_registry.json | jq -r '.[] | .imageUrl' | sort | uniq -c | sort -rn

# List all articles with local thumbnails
cat content/static/content_registry.json | jq -r '.[] | select(.imageUrl | startswith("/thumbnails/")) | .slug'
```

## Build Status

✅ **Dev server runs without errors**
✅ **All 41 articles registered in content_registry.json**
✅ **No invalid image src props**
✅ **Ready for deployment** (with placeholder thumbnails)

---

**Last Updated**: June 22, 2026, 8:00 PM CDT
**Fixed By**: Automated batch sed replacement + registry regeneration
**Build**: Passing (0 errors)
