# 📰 News Network Approval Roadmap
## Google News, Perplexity AI, and MSN News

## Current Status: Pre-Application Phase

ObjectWire is building towards approval from major news aggregators. This document outlines requirements for **Google News**, **Perplexity**, and **MSN News**.

---

## 🎯 Requirements Overview

### 1. **Technical Requirements** (Infrastructure)
| Requirement | Status | Priority | Platform |
|-------------|--------|----------|----------|
| robots.txt allows Googlebot-News | ✅ Done | P0 | Google |
| News-specific sitemap (`/news-sitemap.xml`) | ✅ Done | P0 | Google |
| NewsArticle Schema component | ✅ Done | P0 | All |
| Organization Schema on site | ✅ Done | P0 | All |
| WebSite Schema with SearchAction | ✅ Done | P0 | Google |
| Mobile-responsive design | ✅ Done | P0 | All |
| HTTPS enabled | ✅ Done | P0 | All |
| Fast page load (<3s) | ✅ Done | P0 | All |
| RSS Feed (`/rss.xml`) | ✅ Done | P0 | All |
| Unique, canonical URLs | ✅ Done | P0 | All |

### 2. **Content Requirements** (Editorial)
| Requirement | Status | Priority | Platform |
|-------------|--------|----------|----------|
| Original, timely news content | ✅ Done | P0 | All |
| Clear author attribution | ✅ Done | P0 | All |
| Publication dates visible | ✅ Done | P0 | All |
| Editorial standards page | ✅ Done | P0 | All |
| About page | ✅ Done | P0 | All |
| Contact information | ⏳ **ACTION NEEDED** | P0 | All |
| Privacy policy | ✅ Done | P0 | All |
| Minimum 3-5 articles per week | ⏳ **ACTION NEEDED** | P1 | All |

### 3. **Publisher Requirements** (Trust & Credibility)
| Requirement | Status | Priority | Platform |
|-------------|--------|----------|----------|
| Clear ownership/publisher info | ⏳ **ACTION NEEDED** | P0 | All |
| Physical address or location | ⏳ **ACTION NEEDED** | P0 | Google/MSN |
| Corrections policy page | ⏳ **ACTION NEEDED** | P1 | Google |
| Staff/contributor pages | ❌ **NOT STARTED** | P1 | All |
| Individual author profile pages | ❌ **NOT STARTED** | P1 | All |
| Masthead/editorial team | ❌ **NOT STARTED** | P1 | MSN |

---

## 🔴 IMMEDIATE ACTION ITEMS (Do These First)

### ☐ 1. Add NewsArticle Schema to Every Article Page
**Status:** Component created, needs integration

The schema component is at `components/NewsArticleSchema.tsx`. You need to add it to each article page:

```tsx
import { NewsArticleSchema } from '@/components/NewsArticleSchema';

// In your article component, add inside the return:
<NewsArticleSchema
  title="Article Title"
  description="Article excerpt"
  author="Author Name"
  publishedTime="2026-01-15T10:00:00Z"
  modifiedTime="2026-01-15T12:00:00Z"
  imageUrl="https://objectwire.org/images/article-image.jpg"
  articleUrl="https://objectwire.org/your-article-slug"
  section="Technology"
  keywords={["keyword1", "keyword2", "keyword3"]}
/>
```

**Files to update:**
- [ ] `app/[...slug]/page.tsx`
- [ ] All individual article pages (minesoda, quantum-computing, etc.)

---

### ☐ 2. Create Individual Author Pages
**Status:** Not started

Create a `/team` directory with individual author pages:

```
app/
  team/
    page.tsx              (main team listing)
    [author]/
      page.tsx            (individual author bio)
```

**Required for each author:**
- Full name
- Professional headshot photo
- Bio (100-200 words)
- Expertise areas
- Social media links (LinkedIn, Twitter/X)
- List of articles they've written
- Contact email (optional)

**Authors to create pages for:**
- [ ] ObjectWire Editorial Team
- [ ] ObjectWire Investigations
- [ ] Tech Review Team
- [ ] Business Analyst
- [ ] (Add your actual writers)

---

### ☐ 3. Enhance About Page with Ownership Info
**Status:** Needs enhancement

**Add to `/about` page:**
- [ ] Legal entity name (LLC, Corp, etc.)
- [ ] Physical business address (or registered agent address)
- [ ] Year founded
- [ ] Founding story
- [ ] Mission statement
- [ ] Ownership structure
- [ ] Funding disclosure (self-funded, investors, etc.)

---

### ☐ 4. Create/Enhance Contact Page
**Status:** Needs work

**Required elements for `/contact`:**
- [ ] General inquiries email: `info@objectwire.org`
- [ ] Editorial email: `editorial@objectwire.org`
- [ ] Tips/submissions email: `tips@objectwire.org`
- [ ] Press inquiries email: `press@objectwire.org`
- [ ] Physical mailing address
- [ ] Contact form
- [ ] Response time expectations

---

### ☐ 5. Create Corrections Policy Page
**Status:** Page exists, verify content

**Required for `/corrections`:**
- [ ] How errors are handled
- [ ] How to report an error
- [ ] Correction process timeline
- [ ] Types of corrections (minor edits vs. major corrections)
- [ ] How corrections are displayed on articles
- [ ] Archive of past corrections (if any)

---

### ☐ 6. Update robots.txt with News Sitemap
**Status:** Needs update

Add to `public/robots.txt`:
```
Sitemap: https://objectwire.org/sitemap.xml
Sitemap: https://objectwire.org/news-sitemap.xml
```

---

### ☐ 7. Create Required Image Assets
**Status:** Not started

**For Google Publisher Center:**
- [ ] Square logo: 1000x1000px PNG (transparent background)
- [ ] Small square logo: 512x512px PNG
- [ ] Rectangle logo: 400x40px PNG (site masthead)
- [ ] Publication icon: 196x196px PNG
- [ ] OG image: 1200x630px (for social sharing)

**Save to:** `public/` directory

---

## 📋 Platform-Specific Requirements

### 🔵 Google News Publisher Center

**Application URL:** https://publishercenter.google.com

**Steps:**
1. [ ] Create Google Publisher Center account
2. [ ] Verify site ownership via Google Search Console
3. [ ] Add publication details
4. [ ] Upload logo assets
5. [ ] Select content categories
6. [ ] Submit for review (takes 2-4 weeks)

**Content requirements:**
- Minimum 30 published articles before applying
- At least 5 articles in the past 7 days
- News-focused content (not just opinion/blog)
- Clear separation between news and sponsored content

---

### 🟣 Perplexity AI Indexing

**How Perplexity finds content:**
- Crawls RSS feeds
- Indexes structured data (NewsArticle schema)
- Follows links from authoritative sources
- Prioritizes sites with strong E-E-A-T signals

**Optimization checklist:**
- [ ] Ensure RSS feed is complete and valid (`/rss.xml`)
- [ ] NewsArticle schema on all articles
- [ ] Clear author attribution with expertise signals
- [ ] Comprehensive source citations in articles
- [ ] Fast page load times
- [ ] Mobile-optimized design

**No formal application process** - Perplexity crawls automatically. Focus on:
1. Quality, original content
2. Proper structured data
3. Regular publishing cadence
4. Strong citations and sources

---

### 🟢 MSN News / Microsoft Start

**Partner Portal:** https://partnerhub.msn.com

**Requirements:**
- [ ] Active RSS feed
- [ ] Consistent publishing (minimum 10 articles/month)
- [ ] Original content only
- [ ] Professional editorial standards
- [ ] Clear ownership and contact info
- [ ] No paywalled content (or clear free tier)

**Application steps:**
1. [ ] Go to MSN Partner Hub
2. [ ] Submit application with site details
3. [ ] Provide RSS feed URL
4. [ ] Provide contact information
5. [ ] Wait for review (4-8 weeks typically)

**MSN prioritizes:**
- Breaking news coverage
- Local news (if applicable)
- Exclusive reporting
- Strong visual content (images, videos)

---

## 📅 Publishing Schedule Template

### Recommended Weekly Cadence (5-7 articles)

| Day | Content Type | Topic Focus | Priority |
|-----|--------------|-------------|----------|
| Monday | Analysis | Technology/AI trends | High |
| Tuesday | Breaking News | Current events | High |
| Wednesday | Investigation | Deep-dive reporting | High |
| Thursday | Business | Markets/startups | Medium |
| Friday | Feature | Long-form weekend read | Medium |
| Saturday | Opinion | Editorial perspective | Low |
| Sunday | Roundup | Week in review | Low |

**Minimum viable:** 3 articles per week
**Optimal for approval:** 5-7 articles per week
**Target before applying:** 30+ published articles

---

## 🗓️ Implementation Timeline

### Week 1: Technical Setup ✅ (Mostly Complete)
- [x] NewsArticle Schema component created
- [x] Organization Schema added to layout
- [x] News sitemap created (`/news-sitemap.xml`)
- [x] RSS feed exists (`/rss.xml`)
- [ ] Add schema to all article pages
- [ ] Update robots.txt with news sitemap

### Week 2: Author & Trust Pages
- [ ] Create `/team` main page with all contributors
- [ ] Create individual author pages (`/team/[author]`)
- [ ] Enhance `/about` with ownership details
- [ ] Enhance `/contact` with all required info
- [ ] Review and update `/corrections` policy

### Week 3: Assets & Registration
- [ ] Create all logo assets (various sizes)
- [ ] Upload OG image for social sharing
- [ ] Register for Google Publisher Center
- [ ] Verify site in Google Search Console
- [ ] Submit MSN Partner Hub application

### Week 4: Content Ramp-Up
- [ ] Publish 5+ new articles
- [ ] Establish consistent publishing schedule
- [ ] Ensure all articles have proper schema
- [ ] Monitor Google Search Console for issues

### Week 5+: Monitor & Optimize
- [ ] Check for Google News approval status
- [ ] Monitor Perplexity citations
- [ ] Track MSN application status
- [ ] Continue publishing cadence
- [ ] Address any feedback from platforms

---

## 🔗 Important URLs & Resources

### Your Site URLs
- Homepage: https://objectwire.org
- RSS Feed: https://objectwire.org/rss.xml
- Sitemap: https://objectwire.org/sitemap.xml
- News Sitemap: https://objectwire.org/news-sitemap.xml
- Editorial Standards: https://objectwire.org/editorial-standards
- About: https://objectwire.org/about
- Contact: https://objectwire.org/contact
- Corrections: https://objectwire.org/corrections

### Platform Portals
- Google Publisher Center: https://publishercenter.google.com
- Google Search Console: https://search.google.com/search-console
- MSN Partner Hub: https://partnerhub.msn.com
- Schema Validator: https://validator.schema.org
- Rich Results Test: https://search.google.com/test/rich-results

### Documentation
- [Google News Publisher Help](https://support.google.com/news/publisher-center)
- [NewsArticle Schema](https://schema.org/NewsArticle)
- [Google News Content Policies](https://support.google.com/news/publisher-center/answer/6204050)
- [MSN Content Guidelines](https://partnerhub.msn.com/guidelines)

---

## ✅ Quick Checklist Before Applying

### Technical (All Required)
- [ ] NewsArticle JSON-LD on all articles
- [ ] Organization JSON-LD on homepage
- [ ] Valid RSS feed at `/rss.xml`
- [ ] News sitemap at `/news-sitemap.xml`
- [ ] All sitemaps listed in robots.txt
- [ ] Mobile-responsive design
- [ ] Page speed score >90
- [ ] HTTPS everywhere
- [ ] Canonical URLs on all pages

### Content (All Required)
- [ ] 30+ published original articles
- [ ] 5+ articles published in last 7 days
- [ ] Clear author bylines on every article
- [ ] Visible publication dates
- [ ] Source citations in articles

### Trust Pages (All Required)
- [ ] About page with ownership info
- [ ] Contact page with email + address
- [ ] Editorial standards page
- [ ] Privacy policy
- [ ] Corrections policy
- [ ] Team/masthead page
- [ ] Individual author pages

### Assets (For Publisher Center)
- [ ] Square logo 1000x1000
- [ ] Small logo 512x512
- [ ] OG image 1200x630
- [ ] Favicon

---

*Last Updated: January 15, 2026*
*Document Version: 2.0*
