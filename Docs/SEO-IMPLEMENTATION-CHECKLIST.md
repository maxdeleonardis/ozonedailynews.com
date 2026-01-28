# SEO Critical Issues - Implementation Checklist

**Created:** January 27, 2026  
**Target Completion:** February 3, 2026 (1 week)

---

## 🎯 PRIORITY 1: TECHNICAL SEO (Must Do This Week)

### ✅ 1. robots.txt Configuration
- [x] Updated `/public/robots.txt` with proper directives
- [x] Added crawl delays for Googlebot and Googlebot-News
- [x] Listed both sitemaps (sitemap.xml, news-sitemap.xml)
- [x] Updated `/app/robots.ts` with crawl delay directives

**Status:** ✅ **COMPLETE**  
**Files Modified:**
- `/public/robots.txt`
- `/app/robots.ts`

---

### ✅ 2. Google News Sitemap
- [x] Created `/app/news-sitemap.xml/route.ts`
- [x] Follows Google News Sitemap protocol
- [x] Filters articles to last 48 hours (Google News requirement)
- [x] Includes publication name, date, title, keywords
- [x] Listed in robots.txt

**Status:** ✅ **COMPLETE** (Already existed)  
**File:** `/app/news-sitemap.xml/route.ts`

**Test:** Visit `https://www.objectwire.org/news-sitemap.xml` after deployment

---

### 🔄 3. Google Analytics 4 Setup
- [x] GA4 component already created (`/components/GoogleAnalytics.tsx`)
- [x] Tracking library implemented (`/lib/tracking/ga4.ts`)
- [ ] **TODO:** Get GA4 Measurement ID from Google Analytics
- [ ] **TODO:** Add to `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- [ ] **TODO:** Restart dev server
- [ ] **TODO:** Test in Real-time reports

**Status:** 🔄 **IN PROGRESS** (Infrastructure ready, needs configuration)  
**Guide:** See `/Docs/GOOGLE-ANALYTICS-SETUP-GUIDE.md`

**Action Items:**
1. Go to https://analytics.google.com/
2. Create new property: "ObjectWire"
3. Set up Web data stream
4. Copy Measurement ID
5. Add to `.env.local`
6. Verify in Real-time report

---

### 🔄 4. Google Search Console
- [ ] **TODO:** Verify property at https://search.google.com/search-console
- [ ] **TODO:** Add verification meta tag to `app/layout.tsx`
- [ ] **TODO:** Submit sitemap.xml
- [ ] **TODO:** Submit news-sitemap.xml
- [ ] **TODO:** Link to GA4 property

**Status:** ⏳ **PENDING**  
**Guide:** See `/Docs/GOOGLE-ANALYTICS-SETUP-GUIDE.md` (Part 2)

**Verification Options:**
- **HTML tag** (Recommended): Add to metadata in layout.tsx
- **DNS TXT record**: Add to domain DNS settings

---

### 🔄 5. Page Speed Optimization
- [ ] **TODO:** Audit all pages for unoptimized images
- [ ] **TODO:** Convert large images to WebP format
- [ ] **TODO:** Verify Next.js Image component usage
- [ ] **TODO:** Add `priority` prop to above-fold images
- [ ] **TODO:** Ensure all images have proper dimensions

**Status:** ⏳ **PENDING**

**Quick Check:**
```bash
# Find img tags (should use Next.js Image instead)
grep -r "<img" app/ components/ --exclude-dir=node_modules
```

**Priority Pages to Check:**
- `/` (homepage)
- `/news/*` (all news articles)
- `/github` (company profiles)
- `/nvidia`

---

## 🎯 PRIORITY 2: ON-PAGE SEO (This Week)

### 🔄 6. Title Tag Optimization
- [ ] **TODO:** Audit all page titles (run script below)
- [ ] **TODO:** Ensure all titles are 50-60 characters
- [ ] **TODO:** Add power words ("Breaking", "Complete", "2026")
- [ ] **TODO:** Include target keyword near beginning

**Status:** ⏳ **PENDING**

**Pages to Update:**
1. `/github` - Current title too long (92 chars)
2. `/nvidia` - Current title too long (77 chars)
3. Other company profile pages

**Audit Script:**
```bash
# Check title lengths
grep -r "title:" app/ --include="*.tsx" --include="*.ts" | grep -E "title: .{65,}"
```

---

### 🔄 7. Meta Description CTR Optimization
- [ ] **TODO:** Rewrite meta descriptions with urgency
- [ ] **TODO:** Add clear call-to-action
- [ ] **TODO:** Include target keyword
- [ ] **TODO:** Keep between 150-160 characters

**Status:** ⏳ **PENDING**

**Formula:**
```
"UPDATED [DATE]: [Shocking Detail] - [Key Stats] + [Why It Matters]. [CTA]."
```

**Example:**
```tsx
description: "UPDATED JAN 2026: GitHub's Microsoft acquisition breakdown - 420M repos, Copilot AI controversy & how it changed coding forever. Essential for developers."
```

---

### 🔄 8. Breadcrumb Schema Markup
- [ ] **TODO:** Create reusable Breadcrumb component
- [ ] **TODO:** Add Schema.org BreadcrumbList markup
- [ ] **TODO:** Implement on all article pages
- [ ] **TODO:** Test with Google Rich Results Test

**Status:** ⏳ **PENDING**

**Implementation:**
```tsx
// components/BreadcrumbSchema.tsx
export function BreadcrumbSchema({ items }: { items: Array<{name: string, url: string}> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

**Test:** https://search.google.com/test/rich-results

---

### 🔄 9. FAQ Schema for Featured Snippets
- [ ] **TODO:** Identify top 10 articles for FAQ optimization
- [ ] **TODO:** Add FAQ sections to articles
- [ ] **TODO:** Implement FAQ Schema markup
- [ ] **TODO:** Monitor for featured snippet captures

**Status:** ⏳ **PENDING**

**Target Articles:**
1. UBC CRISPR article
2. GitHub company profile
3. Nvidia company profile
4. Google AI articles
5. NASA Europa article

**FAQ Section Template:**
```tsx
<section className="faq-section">
  <h2>Frequently Asked Questions</h2>
  
  <div className="faq-item">
    <h3>What is [Topic]?</h3>
    <p>Clear, concise answer in 2-3 sentences...</p>
  </div>
  
  <div className="faq-item">
    <h3>How does [Topic] work?</h3>
    <ol>
      <li><strong>Step 1:</strong> Description</li>
      <li><strong>Step 2:</strong> Description</li>
      <li><strong>Step 3:</strong> Description</li>
    </ol>
  </div>
</section>
```

---

## 🎯 PRIORITY 3: CONTENT & INTERNAL LINKING (Next Week)

### 🔄 10. Internal Linking Strategy
- [ ] **TODO:** Add 5-10 internal links to each major page
- [ ] **TODO:** Create topic cluster hub pages
- [ ] **TODO:** Link related articles in body text
- [ ] **TODO:** Add "Related Coverage" widgets (if not present)

**Status:** ⏳ **PENDING**

**Hub Pages to Create:**
- `/technology/` - Main tech hub
- `/biotechnology/` - Bio/pharma hub
- `/artificial-intelligence/` - AI hub
- `/software-development/` - Dev tools hub

**Pages Needing Internal Links:**
- `/github` → Link to /microsoft, /openai, /gitlab
- `/nvidia` → Link to /google, /microsoft, /ai
- `/news/*` → Link to related news articles

---

### 🔄 11. Author E-E-A-T Enhancement
- [ ] **TODO:** Add author photos to all articles (real photos, not avatars)
- [ ] **TODO:** Expand author bio on profile pages
- [ ] **TODO:** Link to author's social media (Twitter, LinkedIn)
- [ ] **TODO:** Add "About the Author" section to articles

**Status:** ⏳ **PENDING**

**Required for Conan Boyle Profile:**
- Professional photo
- Full bio (200+ words)
- Credentials (NCSU graduate)
- Social media links
- Previous work/publications

---

### 🔄 12. Editorial Standards Footer
- [ ] **TODO:** Create reusable footer component
- [ ] **TODO:** Add to all article pages
- [ ] **TODO:** Link to editorial standards page
- [ ] **TODO:** Link to corrections policy

**Status:** ⏳ **PENDING**

**Component to Create:**
```tsx
// components/EditorialStandards.tsx
export function EditorialStandards() {
  return (
    <aside className="bg-gray-50 p-6 rounded-lg mt-8">
      <h3 className="font-bold mb-3">Editorial Standards</h3>
      <p className="text-sm text-gray-700 mb-4">
        ObjectWire maintains strict editorial independence. All claims are 
        fact-checked against primary sources.
      </p>
      <div className="flex gap-4 text-sm">
        <Link href="/editorial-standards">Editorial Standards</Link>
        <Link href="/corrections">Corrections Policy</Link>
      </div>
      <div className="flex gap-4 text-sm mt-2">
        <span>✓ Fact-checked</span>
        <span>✓ Source-cited</span>
        <span>✓ Expert-reviewed</span>
      </div>
    </aside>
  );
}
```

---

## 📊 TESTING & VERIFICATION

### After Implementation, Test:

1. **robots.txt**
   - [ ] Visit: https://www.objectwire.org/robots.txt
   - [ ] Verify all directives present
   - [ ] Test with: https://www.google.com/webmasters/tools/robots-testing-tool

2. **Sitemaps**
   - [ ] Visit: https://www.objectwire.org/sitemap.xml
   - [ ] Visit: https://www.objectwire.org/news-sitemap.xml
   - [ ] Validate XML: https://www.xml-sitemaps.com/validate-xml-sitemap.html

3. **Google Analytics**
   - [ ] Check Real-time report shows activity
   - [ ] Verify events tracking (scroll, clicks)
   - [ ] Test on different pages

4. **Meta Tags**
   - [ ] Use: https://metatags.io/
   - [ ] Check OpenGraph preview
   - [ ] Verify Twitter Card

5. **Schema Markup**
   - [ ] Test with: https://search.google.com/test/rich-results
   - [ ] Validate BreadcrumbList
   - [ ] Validate FAQPage
   - [ ] Validate NewsArticle

6. **Page Speed**
   - [ ] Test with: https://pagespeed.web.dev/
   - [ ] Check Core Web Vitals
   - [ ] Verify mobile scores
   - [ ] Target: 90+ on mobile, 95+ on desktop

---

## 📈 EXPECTED RESULTS TIMELINE

### Week 1 (Feb 3, 2026)
- ✅ Technical fixes deployed
- ✅ GA4 tracking live
- ✅ Search Console verified
- ✅ Sitemaps submitted

**Expected Impact:**
- +15-25% faster indexing
- +20-30% crawl efficiency

### Week 2-4 (Feb 10-24, 2026)
- ✅ On-page optimizations complete
- ✅ Title/description improvements
- ✅ FAQ sections added
- ✅ Breadcrumb schema live

**Expected Impact:**
- +10-20% organic CTR
- +5-15% ranking improvements
- First featured snippets

### Month 2 (March 2026)
- ✅ Internal linking strategy implemented
- ✅ Hub pages created
- ✅ E-E-A-T signals improved

**Expected Impact:**
- +30-50% page authority
- +20-40% pages per session
- Google News traffic increase

### Month 3 (April 2026)
- ✅ Full SEO optimization complete
- ✅ Backlink building started

**Expected Impact:**
- +50-100% organic traffic
- +100-200% Google News traffic
- 15-25 keywords in top 10

---

## 🎯 SUCCESS METRICS

### Key Performance Indicators (KPIs)

**Week 1:**
- [ ] 100% technical issues resolved
- [ ] GA4 showing data
- [ ] Search Console active
- [ ] Both sitemaps crawled

**Month 1:**
- [ ] 1,000+ organic sessions
- [ ] 20+ keywords in top 50
- [ ] 5+ keywords in top 10
- [ ] 1+ featured snippet

**Month 3:**
- [ ] 5,000+ organic sessions
- [ ] 50+ keywords in top 50
- [ ] 15+ keywords in top 10
- [ ] 5+ featured snippets

**Month 6:**
- [ ] 15,000+ organic sessions
- [ ] 100+ keywords in top 50
- [ ] 30+ keywords in top 10
- [ ] 15+ featured snippets

---

## 📋 DAILY/WEEKLY TASKS

### Daily (5 minutes)
- [ ] Check GA4 Real-time report
- [ ] Monitor server errors
- [ ] Check new article publications

### Weekly (30 minutes)
- [ ] Review GA4 Acquisition report
- [ ] Check Search Console performance
- [ ] Monitor keyword rankings
- [ ] Review Core Web Vitals
- [ ] Check for crawl errors

### Monthly (2 hours)
- [ ] Full SEO audit
- [ ] Content refresh on top pages
- [ ] Broken link check
- [ ] Backlink analysis
- [ ] Competitor analysis

---

## 🆘 SUPPORT & RESOURCES

**Documentation:**
- `/Docs/SEO-AUDIT-AND-OPTIMIZATION-REPORT.md` - Full audit
- `/Docs/GOOGLE-ANALYTICS-SETUP-GUIDE.md` - GA4 setup
- This file - Implementation checklist

**Tools:**
- Google Analytics: https://analytics.google.com/
- Google Search Console: https://search.google.com/search-console
- Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev/

**Learning:**
- Google SEO Starter Guide: https://developers.google.com/search/docs/beginner/seo-starter-guide
- Next.js SEO: https://nextjs.org/learn/seo/introduction-to-seo

---

## ✅ SIGN-OFF

**Implementation Started:** January 27, 2026  
**Target Completion:** February 3, 2026

### Progress Tracker

- **Priority 1 (Technical):** 40% Complete (2/5 done)
- **Priority 2 (On-Page):** 0% Complete (0/4 done)
- **Priority 3 (Content):** 0% Complete (0/3 done)

**Overall Progress:** 17% (2/12 items complete)

---

**Next Actions:**
1. ✅ Deploy robots.txt update
2. ⏳ Get GA4 Measurement ID
3. ⏳ Verify Google Search Console
4. ⏳ Audit page titles and descriptions

**Last Updated:** January 27, 2026  
**Next Review:** February 3, 2026
