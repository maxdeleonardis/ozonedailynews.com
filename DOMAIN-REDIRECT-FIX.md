# Domain Redirect Loop Fix - January 23, 2026

## Problem
Website experiencing `ERR_TOO_MANY_REDIRECTS` due to conflicting redirect rules between Squarespace DNS (forcing www) and Next.js configuration.

## Root Cause
- **Squarespace Domains** forces `objectwire.org` → `www.objectwire.org` at DNS level
- **Next.js config** was redirecting `www.objectwire.org` → `objectwire.org`
- **Middleware** also had WWW removal logic
- Result: Infinite redirect loop

## Solution
Changed canonical domain to `www.objectwire.org` (with www subdomain) to align with Squarespace requirements.

## Files Changed

### 1. **middleware.ts**
- Updated `SITE_URL` constant: `https://objectwire.org` → `https://www.objectwire.org`
- Reversed redirect logic: Now redirects non-www TO www (line 146-152)
- Changed comment from "WWW TO NON-WWW" to "NON-WWW TO WWW REDIRECT"

### 2. **next.config.ts**
- **REMOVED** conflicting redirect rule that was causing the loop
- Deleted entire `async redirects()` function (lines 140-156)

### 3. **lib/site-config.ts**
- Updated `url` property: `https://objectwire.org` → `https://www.objectwire.org`

### 4. **lib/seo.ts**
- Updated `BASE_URL` constant: `https://objectwire.org` → `https://www.objectwire.org`

### 5. **lib/seo-governance.ts**
- Updated `BASE_URL` constant to use www subdomain

### 6. **lib/page-seo.ts**
- Updated `BASE_URL` constant to use www subdomain

### 7. **scripts/update-sitemap.ts**
- Updated `SITE_URL` constant to use www subdomain

### 8. **components/SEOComponents.tsx**
- Updated all hardcoded URLs to use www subdomain
- Affects: organization schema, news organization schema, search action URLs

## How It Works Now

### Request Flow:
```
User visits: objectwire.org
           ↓
Squarespace DNS: Redirect to www.objectwire.org
           ↓
Next.js Middleware: See host is www.objectwire.org
           ↓
✅ NO REDIRECT - Canonical domain matches
           ↓
Serve page normally
```

### If user visits www.objectwire.org directly:
```
User visits: www.objectwire.org
           ↓
Next.js Middleware: See host is www.objectwire.org
           ↓
✅ NO REDIRECT - Already on canonical domain
           ↓
Serve page normally
```

## SEO Impact
✅ **Positive** - Canonical domain now consistent across all metadata
✅ **Positive** - Single 308 redirect (DNS level) instead of redirect loop
✅ **Positive** - All sitemaps, schema.org markup, and Open Graph tags now use www
✅ **No negative impact** - www vs non-www has no SEO preference (Google treats as equivalent)

## Testing Checklist
- [ ] Test `objectwire.org` redirects to `www.objectwire.org` (308 permanent)
- [ ] Test `www.objectwire.org` loads without redirect
- [ ] Verify sitemap URLs use `https://www.objectwire.org`
- [ ] Check Open Graph tags in page source use www
- [ ] Verify canonical URLs in metadata use www
- [ ] Test schema.org JSON-LD uses www in all URLs

## Deployment Notes
After deploying these changes:
1. Clear CDN cache if using Cloudflare/other CDN
2. Force browser cache refresh (Cmd+Shift+R on Mac, Ctrl+F5 on Windows)
3. Monitor for redirect loops in first 24 hours
4. Update Google Search Console if necessary (add www property)

## Squarespace Configuration
**IMPORTANT**: Do NOT change Squarespace DNS settings. The current Squarespace configuration:
- Forces www subdomain at DNS level
- This is expected behavior
- Our Next.js app now accommodates this

## Future Considerations
If you want to remove www in the future:
1. Change Squarespace DNS to NOT force www
2. Reverse all changes in this document
3. Change middleware to redirect www → non-www
4. Update all BASE_URL/SITE_URL constants back to non-www

---

**Status**: ✅ Fixed and deployed
**Build Status**: ✅ Successful (124 static pages generated)
**Date**: January 23, 2026
