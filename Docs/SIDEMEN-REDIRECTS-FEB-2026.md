# 301 Redirects Configuration - Sidemen Content Migration

**Date:** February 7, 2026  
**Status:** ✅ Implemented  
**File:** `/next.config.ts`

---

## Overview

All Sidemen-related content has been migrated from `/sidemen/*` to `/youtube/sidemen/*` to better organize the site hierarchy and improve SEO by placing creator content under the YouTube umbrella.

301 (permanent) redirects have been implemented to ensure:
- ✅ No broken links for existing bookmarks or external references
- ✅ SEO link equity (PageRank) is preserved
- ✅ Search engines update their indexes to the new URLs
- ✅ Users are automatically redirected to the correct pages

---

## Redirect Mappings

### Main Hub Page
```
/sidemen → /youtube/sidemen (301 Permanent)
```

### Individual Member Pages
```
/sidemen/ksi         → /youtube/sidemen/ksi         (301 Permanent)
/sidemen/miniminter  → /youtube/sidemen/miniminter  (301 Permanent)
/sidemen/zerkaa      → /youtube/sidemen/zerkaa      (301 Permanent)
/sidemen/tbjzl       → /youtube/sidemen/tbjzl       (301 Permanent)
/sidemen/behzinga    → /youtube/sidemen/behzinga    (301 Permanent)
/sidemen/vikkstar    → /youtube/sidemen/vikkstar    (301 Permanent)
/sidemen/w2s         → /youtube/sidemen/w2s         (301 Permanent)
```

### Catch-All Wildcard
```
/sidemen/:path*      → /youtube/sidemen/:path*      (301 Permanent)
```

This wildcard redirect catches:
- Any future Sidemen pages (e.g., `/sidemen/charity-match` → `/youtube/sidemen/charity-match`)
- Nested paths (e.g., `/sidemen/ksi/bio` → `/youtube/sidemen/ksi/bio`)
- Query parameters are preserved automatically

---

## Technical Implementation

### Configuration Location
File: `/next.config.ts`

### Code Structure
```typescript
redirects: async () => {
  return [
    // Main Sidemen hub
    {
      source: '/sidemen',
      destination: '/youtube/sidemen',
      permanent: true, // 301 redirect
    },
    
    // Individual members (7 redirects)
    {
      source: '/sidemen/ksi',
      destination: '/youtube/sidemen/ksi',
      permanent: true,
    },
    // ... (6 more member redirects)
    
    // Wildcard catch-all
    {
      source: '/sidemen/:path*',
      destination: '/youtube/sidemen/:path*',
      permanent: true,
    },
  ];
},
```

---

## How Next.js Redirects Work

### 1. Server-Side Processing
- Redirects are processed at the server/CDN level
- No JavaScript required (works even if JS is disabled)
- Happens before page rendering

### 2. HTTP Status Code
- `permanent: true` = **301 Permanent Redirect**
- Tells browsers and search engines the move is permanent
- Browsers may cache the redirect

### 3. Path Parameter Matching
- `:path*` captures everything after `/sidemen/`
- Automatically forwards to the new destination
- Preserves query strings and fragments

---

## SEO Impact

### Positive Effects ✅

1. **Link Equity Preservation**
   - 301 redirects pass ~90-99% of PageRank
   - External backlinks maintain their value
   - Domain authority is preserved

2. **Search Engine Updates**
   - Google will update indexed URLs within days/weeks
   - Old URLs replaced with new ones in search results
   - No duplicate content issues

3. **User Experience**
   - Seamless redirection for users
   - No 404 errors for bookmarked pages
   - Preserves social media shared links

4. **Better Site Structure**
   - Improved URL hierarchy: `/youtube/sidemen/*`
   - Clearer content categorization
   - Better internal linking context

### Timeline for SEO Updates

- **Immediate:** Redirects are live, users see new URLs
- **1-3 days:** Google discovers redirects via crawling
- **1-2 weeks:** Search Console shows redirect notices
- **2-4 weeks:** Old URLs replaced in search results
- **1-2 months:** Full consolidation of signals

---

## Testing the Redirects

### Manual Testing

Test each redirect in your browser:

```bash
# Main hub
curl -I https://objectwire.com/sidemen
# Should return: HTTP/1.1 301 Moved Permanently
# Location: https://objectwire.com/youtube/sidemen

# Individual members
curl -I https://objectwire.com/sidemen/ksi
curl -I https://objectwire.com/sidemen/miniminter
# etc...
```

### Browser Testing
1. Clear browser cache
2. Visit old URL: `https://objectwire.com/sidemen/ksi`
3. Verify automatic redirect to: `https://objectwire.com/youtube/sidemen/ksi`
4. Check browser address bar shows new URL

### Automated Testing
```bash
# Test all redirects with a script
for path in "" "ksi" "miniminter" "zerkaa" "tbjzl" "behzinga" "vikkstar" "w2s"; do
  echo "Testing: /sidemen/$path"
  curl -sI "https://objectwire.com/sidemen/$path" | grep -E "(HTTP|Location)"
done
```

---

## Search Console Actions

### Recommended Steps

1. **Submit New Sitemap**
   - Update `sitemap.xml` with new URLs
   - Submit to Google Search Console
   - Request indexing for key pages

2. **Monitor Coverage Reports**
   - Watch for "Page with redirect" notices
   - Verify proper 301 status codes
   - Check for any redirect chains (should be direct)

3. **Update Internal Links** ✅
   - Already completed in codebase
   - All `/sidemen/*` links updated to `/youtube/sidemen/*`

4. **Track in Analytics**
   - Monitor traffic to old URLs (should redirect)
   - Verify traffic continues to new URLs
   - Watch for any 404 spikes

---

## Redirect Priority Order

Next.js processes redirects in order. Current priority:

1. **Specific paths first** (e.g., `/sidemen/ksi`)
2. **Wildcard last** (e.g., `/sidemen/:path*`)

This ensures:
- Known pages redirect to exact destinations
- Unknown/future pages caught by wildcard
- No redirect conflicts or loops

---

## Common Redirect Patterns

### Query Parameters
```
/sidemen/ksi?ref=twitter 
  → /youtube/sidemen/ksi?ref=twitter
```
✅ Query parameters are automatically preserved

### Hash Fragments
```
/sidemen/ksi#about
  → /youtube/sidemen/ksi#about
```
✅ Hash fragments are preserved client-side

### Trailing Slashes
```
/sidemen/ → /youtube/sidemen (no trailing slash)
```
✅ Normalized by `trailingSlash: false` config

---

## Validation Checklist

- [x] Redirects added to `next.config.ts`
- [x] All 8 Sidemen paths covered (1 hub + 7 members)
- [x] Wildcard catch-all for future pages
- [x] `permanent: true` for 301 status code
- [x] No TypeScript/configuration errors
- [ ] Deploy to production
- [ ] Test redirects in production
- [ ] Monitor Google Search Console
- [ ] Update sitemap.xml (if needed)
- [ ] Submit new sitemap to Google
- [ ] Check analytics after 1 week

---

## Troubleshooting

### Issue: Redirect not working
**Solution:** 
- Clear browser cache
- Try incognito/private mode
- Verify Next.js dev server is restarted
- Check for typos in `next.config.ts`

### Issue: Redirect loop
**Solution:**
- Check destination doesn't redirect back
- Verify no conflicting redirects
- Ensure internal links updated

### Issue: Search Console warnings
**Solution:**
- Wait 2-4 weeks for full processing
- Verify 301 status code (not 302)
- Check redirect chain length (should be 1)

---

## Maintenance

### Adding New Sidemen Content

New pages under `/youtube/sidemen/*` will automatically work. The wildcard redirect catches any old `/sidemen/*` attempts.

Example:
- New page: `/youtube/sidemen/new-member/page.tsx`
- Old URL attempt: `/sidemen/new-member`
- Automatically redirects to: `/youtube/sidemen/new-member` ✅

### Removing Redirects

**DO NOT remove these redirects** for at least:
- 6-12 months for internal content
- 12-24 months for high-traffic pages
- Permanently for pages with many backlinks

Only remove when:
- Search engines fully updated indexes
- Analytics shows zero traffic to old URLs
- No external references remain

---

## Impact Summary

### Pages Affected: 8+
- 1 main hub page
- 7 individual member pages  
- All future `/sidemen/*` pages (wildcard)

### Redirect Type: 301 Permanent
- Preserves SEO link equity
- Updates browser bookmarks
- Signals permanent move to search engines

### Implementation: Server-Side
- Fast, server-level redirects
- No JavaScript dependency
- Works for all user agents

### Status: ✅ Complete
- All redirects configured
- No compilation errors
- Ready for deployment

---

**Last Updated:** February 7, 2026  
**Maintained By:** ObjectWire Engineering Team
