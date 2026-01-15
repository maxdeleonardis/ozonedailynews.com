# 📰 Google News Approval Roadmap

## Current Status: Pre-Application Phase

ObjectWire is building towards Google News Publisher Center approval. This document outlines the technical requirements, content standards, and implementation checklist needed to qualify.

---

## 🎯 Google News Requirements Overview

### 1. **Technical Requirements** (Infrastructure)
| Requirement | Status | Priority |
|-------------|--------|----------|
| robots.txt allows Googlebot-News | ✅ Done | P0 |
| Sitemap.xml with news-specific entries | ⏳ Needs Enhancement | P0 |
| Article structured data (NewsArticle schema) | ⏳ Partial | P0 |
| Mobile-responsive design | ✅ Done | P0 |
| HTTPS enabled | ✅ Done | P0 |
| Fast page load (<3s) | ✅ Done | P0 |
| Unique, canonical URLs for all articles | ✅ Done | P0 |
| Accessible to Googlebot | ✅ Done | P0 |

### 2. **Content Requirements** (Editorial)
| Requirement | Status | Priority |
|-------------|--------|----------|
| Original, timely news content | ✅ Done | P0 |
| Clear author attribution | ✅ Done | P0 |
| Publication dates visible | ✅ Done | P0 |
| Editorial standards page | ✅ Done | P0 |
| About page | ✅ Done | P0 |
| Contact information | ⏳ Needs Work | P0 |
| Privacy policy | ✅ Done | P0 |
| Distinct article vs. advertorial content | ✅ N/A (no ads) | P0 |
| Minimum 3-5 articles per week | ⏳ Needs Content | P1 |

### 3. **Publisher Requirements** (Trust)
| Requirement | Status | Priority |
|-------------|--------|----------|
| Clear ownership/publisher info | ⏳ Needs Work | P0 |
| Physical address or location | ⏳ Needs Work | P0 |
| Corrections policy | ⏳ Needs Work | P1 |
| Staff/contributor page | ❌ Not Started | P1 |
| Masthead/editorial team | ❌ Not Started | P1 |

---

## 🔧 Technical Implementation Tasks

### Phase 1: Schema & Structured Data (Week 1)

#### Task 1.1: Implement NewsArticle Schema
```typescript
// Add to article pages
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Article Title",
  "datePublished": "2026-01-14T10:00:00Z",
  "dateModified": "2026-01-14T12:00:00Z",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "publisher": {
    "@type": "NewsMediaOrganization",
    "name": "ObjectWire",
    "logo": {
      "@type": "ImageObject",
      "url": "https://objectwire.com/logo.png"
    }
  },
  "image": "https://objectwire.com/article-image.jpg",
  "description": "Article excerpt/meta description"
}
```

**Files to modify:**
- [ ] `app/[...slug]/page.tsx` - Add JSON-LD script
- [ ] `app/blog/[slug]/page.tsx` - Add JSON-LD script
- [ ] Create `components/NewsArticleSchema.tsx` helper

#### Task 1.2: Enhance Sitemap for News
```typescript
// app/sitemap.ts - Add news-specific sitemap
export async function generateNewsSitemap() {
  // Only include articles from last 48 hours (Google News requirement)
  const recentPosts = posts.filter(post => 
    new Date(post.published_at) > new Date(Date.now() - 48 * 60 * 60 * 1000)
  );
  
  return recentPosts.map(post => ({
    url: `https://objectwire.com/${post.slug}`,
    lastModified: post.updated_at,
    news: {
      title: post.title,
      publication_date: post.published_at,
      name: "ObjectWire"
    }
  }));
}
```

**Files to create/modify:**
- [ ] Create `app/news-sitemap.xml/route.ts`
- [ ] Update `public/robots.txt` with news sitemap reference
- [ ] Create `app/sitemap-index.xml/route.ts`

#### Task 1.3: Add Organization Schema
```typescript
// Add to layout.tsx
{
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  "name": "ObjectWire",
  "url": "https://objectwire.com",
  "logo": "https://objectwire.com/logo.png",
  "sameAs": [
    "https://twitter.com/objectwire",
    "https://linkedin.com/company/objectwire"
  ],
  "foundingDate": "2025",
  "description": "Precision intelligence news network..."
}
```

### Phase 2: Content & Editorial Pages (Week 2)

#### Task 2.1: Create/Update Required Pages

**About Page Enhancement:**
- [ ] Add editorial team bios with photos
- [ ] Include mission statement
- [ ] Add founding story
- [ ] Include physical address/location
- [ ] Link to social profiles

**Contact Page:**
- [ ] Create dedicated `/contact` page
- [ ] Add contact form
- [ ] Include email address
- [ ] Add physical address
- [ ] List editorial inquiry process

**Staff/Masthead Page:**
- [ ] Create `/team` or `/masthead` page
- [ ] List all contributors with bios
- [ ] Include roles and expertise areas
- [ ] Add author profile photos

**Corrections Policy:**
- [ ] Create `/corrections` page
- [ ] Document correction process
- [ ] Show correction history (if any)
- [ ] Include how to report errors

### Phase 3: Publisher Center Setup (Week 3)

#### Task 3.1: Google Publisher Center Registration
1. Go to: https://publishercenter.google.com
2. Add publication: "ObjectWire"
3. Verify site ownership (Google Search Console)
4. Submit publication details:
   - Publication name
   - Category: News
   - Languages: English
   - Publication type: Online news source
   - Geographic focus: United States (initially)

#### Task 3.2: Required Assets
- [ ] Logo (1000x1000 PNG, transparent background)
- [ ] Square logo (512x512)
- [ ] Banner image (1200x675)
- [ ] Favicon (32x32, 16x16)

### Phase 4: Content Pipeline (Ongoing)

#### Establish Publishing Cadence
| Day | Content Type | Topic Focus |
|-----|--------------|-------------|
| Monday | Analysis | Technology/AI |
| Tuesday | Breaking News | Current Events |
| Wednesday | Investigation | Deep Dive |
| Thursday | Opinion | Editorial Perspective |
| Friday | Weekend Read | Long-form Feature |
| Weekend | Breaking Only | As needed |

**Target: 5-7 articles per week minimum**

---

## 📝 Editor Enhancements for Google News Optimization

### Add to Admin Editor:

#### 1. SEO Score Panel
```typescript
// Real-time SEO scoring
- Title length indicator (50-60 chars optimal)
- Meta description length (150-160 chars)
- Keyword density checker
- Readability score (Flesch-Kincaid)
- Internal link suggestions
```

#### 2. Fact-Checking Workflow
```typescript
// Required before publish
- [ ] Primary source verified
- [ ] Claims documented
- [ ] At least 2 sources cited
- [ ] Images properly attributed
- [ ] No unverified claims
```

#### 3. Publication Checklist
```typescript
// Auto-check before publishing
- [ ] Featured image set
- [ ] Meta title optimized
- [ ] Meta description complete
- [ ] Category selected
- [ ] Tags added (3-5 recommended)
- [ ] Author attributed
- [ ] Sources cited
```

#### 4. NewsArticle Schema Preview
```typescript
// Show structured data preview in editor
- Preview how article will appear in Google News
- Validate schema markup
- Check for missing required fields
```

---

## 🚀 Launch Checklist

### Pre-Application (Complete All)

**Technical:**
- [ ] NewsArticle JSON-LD on all article pages
- [ ] Organization JSON-LD on homepage
- [ ] News sitemap at `/news-sitemap.xml`
- [ ] Sitemap index referencing all sitemaps
- [ ] Mobile-first responsive design verified
- [ ] Page speed >90 on PageSpeed Insights
- [ ] All images have alt text
- [ ] Canonical URLs on all pages

**Content:**
- [ ] Minimum 30 published articles
- [ ] At least 5 articles in last 7 days
- [ ] Clear news focus (not blog/opinion only)
- [ ] Original reporting (not aggregation)
- [ ] Author bylines on all articles
- [ ] Publication dates visible

**Trust Signals:**
- [ ] About page complete with address
- [ ] Editorial standards published
- [ ] Privacy policy up to date
- [ ] Contact page with real contact info
- [ ] Team/masthead page
- [ ] Corrections policy
- [ ] Clear ownership statement

**Publisher Center:**
- [ ] Account created
- [ ] Site ownership verified
- [ ] All logos/assets uploaded
- [ ] Publication info complete
- [ ] Categories selected
- [ ] Initial review submitted

---

## 📊 Metrics to Track

### Before Application
- Pages indexed in Google
- Google Search Console health
- Core Web Vitals scores
- Mobile usability errors
- Structured data validation

### After Approval
- Google News impressions
- Click-through rate
- Top-performing articles
- Crawl frequency
- Coverage topics

---

## 🗓️ Timeline

| Week | Focus | Deliverables |
|------|-------|--------------|
| 1 | Technical SEO | Schema markup, news sitemap |
| 2 | Content Pages | About, Contact, Team, Corrections |
| 3 | Publisher Setup | Logo assets, Publisher Center registration |
| 4 | Content Ramp | 10+ new articles, establish cadence |
| 5 | Review & Apply | Final checks, submit for review |
| 6+ | Monitor | Track approval, address feedback |

---

## 📚 Resources

- [Google News Publisher Center](https://publishercenter.google.com)
- [Google News Publisher Help](https://support.google.com/news/publisher-center)
- [NewsArticle Schema Reference](https://schema.org/NewsArticle)
- [Google News Content Policies](https://support.google.com/news/publisher-center/answer/6204050)
- [Search Console Documentation](https://developers.google.com/search/docs)

---

## ✅ Next Immediate Actions

1. **Today:** Implement NewsArticle JSON-LD schema on article pages
2. **This Week:** Create news sitemap and update robots.txt
3. **This Week:** Enhance About page with full publisher info
4. **Next Week:** Create Contact, Team, and Corrections pages
5. **Next Week:** Design and upload logo assets
6. **Week 3:** Register in Google Publisher Center

---

*Last Updated: January 14, 2026*
*Document Version: 1.0*
