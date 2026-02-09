# 301 Redirects Quick Reference - Sidemen Migration

## ✅ Implementation Complete

**Date:** February 7, 2026  
**File Modified:** `/next.config.ts`  
**Redirect Count:** 9 redirects (8 specific + 1 wildcard)

---

## Redirects Implemented

### 1. Main Hub
```
/sidemen → /youtube/sidemen
```

### 2. Individual Members (7 redirects)
```
/sidemen/ksi        → /youtube/sidemen/ksi
/sidemen/miniminter → /youtube/sidemen/miniminter
/sidemen/zerkaa     → /youtube/sidemen/zerkaa
/sidemen/tbjzl      → /youtube/sidemen/tbjzl
/sidemen/behzinga   → /youtube/sidemen/behzinga
/sidemen/vikkstar   → /youtube/sidemen/vikkstar
/sidemen/w2s        → /youtube/sidemen/w2s
```

### 3. Wildcard Catch-All
```
/sidemen/:path* → /youtube/sidemen/:path*
```
Catches all future pages like `/sidemen/charity-match` automatically!

---

## Testing Commands

### Test in Development
```bash
# Start Next.js dev server
npm run dev

# Test redirects (in another terminal)
curl -I http://localhost:3000/sidemen
curl -I http://localhost:3000/sidemen/ksi
```

### Test in Production
```bash
# After deployment
curl -I https://objectwire.com/sidemen
curl -I https://objectwire.com/sidemen/ksi
```

Expected response:
```
HTTP/1.1 301 Moved Permanently
Location: https://objectwire.com/youtube/sidemen
```

---

## Quick Test Script

Save as `test-redirects.sh`:
```bash
#!/bin/bash

echo "Testing Sidemen Redirects..."
echo "============================="

DOMAIN="http://localhost:3000"  # Change to production URL after deploy

PATHS=("" "ksi" "miniminter" "zerkaa" "tbjzl" "behzinga" "vikkstar" "w2s")

for path in "${PATHS[@]}"; do
    if [ -z "$path" ]; then
        url="$DOMAIN/sidemen"
        echo -e "\nTesting: /sidemen"
    else
        url="$DOMAIN/sidemen/$path"
        echo -e "\nTesting: /sidemen/$path"
    fi
    
    response=$(curl -sI "$url")
    status=$(echo "$response" | grep -i "HTTP" | head -1)
    location=$(echo "$response" | grep -i "Location" | head -1)
    
    echo "  Status: $status"
    echo "  $location"
done

echo -e "\n============================="
echo "Test complete!"
```

Make executable and run:
```bash
chmod +x test-redirects.sh
./test-redirects.sh
```

---

## Browser Testing Checklist

- [ ] Visit http://localhost:3000/sidemen → redirects to /youtube/sidemen
- [ ] Visit /sidemen/ksi → redirects to /youtube/sidemen/ksi
- [ ] Visit /sidemen/miniminter → redirects correctly
- [ ] Visit /sidemen/zerkaa → redirects correctly
- [ ] Visit /sidemen/tbjzl → redirects correctly
- [ ] Visit /sidemen/behzinga → redirects correctly
- [ ] Visit /sidemen/vikkstar → redirects correctly
- [ ] Visit /sidemen/w2s → redirects correctly
- [ ] Visit /sidemen/charity-match → redirects to /youtube/sidemen/charity-match (wildcard)
- [ ] Check browser address bar shows NEW URL after redirect
- [ ] Verify no redirect loops or errors

---

## Post-Deployment Checklist

### Immediate (Day 1)
- [ ] Deploy to production
- [ ] Test all 8+ redirects in production
- [ ] Verify 301 status codes (not 302)
- [ ] Check no 404 errors logged

### Week 1
- [ ] Monitor Google Search Console for redirect notices
- [ ] Check analytics for traffic patterns
- [ ] Verify old URLs redirecting properly
- [ ] Look for any redirect chains

### Week 2-4
- [ ] Watch for search result updates
- [ ] Monitor indexed pages count
- [ ] Check coverage reports in Search Console
- [ ] Request indexing for key new URLs

### Month 1-2
- [ ] Verify full consolidation in search results
- [ ] Confirm old URLs removed from index
- [ ] Check PageRank signals transferred
- [ ] Review analytics for any issues

---

## Troubleshooting

### Redirect not working
1. Clear browser cache
2. Try incognito mode
3. Restart Next.js dev server
4. Check `next.config.ts` syntax

### 404 errors
1. Verify destination page exists
2. Check file paths are correct
3. Ensure pages built correctly

### Redirect loop
1. Check destination doesn't redirect back
2. Verify no conflicting redirects
3. Test each redirect individually

---

## Documentation

- **Full Details:** `/Docs/SIDEMEN-REDIRECTS-FEB-2026.md`
- **Migration Info:** `/Docs/SIDEMEN-REORGANIZATION-FEB-2026.md`
- **Config File:** `/next.config.ts` (lines 122-178)

---

## Support

If redirects aren't working after deployment:
1. Check Next.js build logs for errors
2. Verify `next.config.ts` compiled correctly
3. Test with `curl -I` to see actual HTTP response
4. Check hosting platform redirect support

---

**Status:** ✅ Ready for Testing & Deployment
