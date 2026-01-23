# SEO Governance System Documentation

## Overview

This document describes the comprehensive SEO governance system implemented for ObjectWire, designed to match and exceed Duda-level SEO automation.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    SINGLE SOURCE OF TRUTH                        │
│                    lib/site-config.ts                           │
│  ┌──────────────┬──────────────┬──────────────┬─────────────┐  │
│  │ SITE_CONFIG  │ ROUTE_REGISTRY│ REDIRECT_RULES│ PARAMS     │  │
│  │ (URLs, meta) │ (all routes)  │ (301/308s)    │ (to strip) │  │
│  └──────────────┴──────────────┴──────────────┴─────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         │                     │                     │
         ▼                     ▼                     ▼
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   middleware.ts │  │   app/robots.ts │  │  app/sitemap.ts │
│                 │  │                 │  │                 │
│ • URL enforce   │  │ • Crawler rules │  │ • All pages     │
│ • Redirects     │  │ • Bot blocking  │  │ • Dynamic posts │
│ • Param strip   │  │ • AI crawlers   │  │ • Priorities    │
│ • Lowercase     │  │ • Sitemap refs  │  │                 │
│ • Trailing /    │  │                 │  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘
         │                     │                     │
         ▼                     ▼                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                      CRAWLER FILES                               │
│  ┌──────────────┬──────────────┬──────────────┬─────────────┐  │
│  │ robots.txt   │ sitemap.xml  │ llms.txt     │ ai-plugin   │  │
│  │ (auto-gen)   │ (auto-gen)   │ (static)     │ .json       │  │
│  └──────────────┴──────────────┴──────────────┴─────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## Files Overview

### Core Configuration

| File | Purpose | Size |
|------|---------|------|
| `lib/site-config.ts` | **Single source of truth** for all site settings | 12KB |
| `lib/seo.ts` | Structured data generators (JSON-LD) | 13KB |
| `lib/seo-governance.ts` | URL normalization utilities | 9KB |
| `lib/page-seo.ts` | Page metadata helpers | 8KB |

### Middleware & Routes

| File | Purpose |
|------|---------|
| `middleware.ts` | URL governance enforcement |
| `app/robots.ts` | Dynamic robots.txt generation |
| `app/sitemap.ts` | Dynamic sitemap.xml generation |
| `app/news-sitemap.xml/route.ts` | Google News sitemap |
| `app/rss.xml/route.ts` | RSS feed |

### Crawler Files (Public)

| File | Purpose |
|------|---------|
| `public/llms.txt` | AI/LLM crawler guidelines (summary) |
| `public/llms-full.txt` | Comprehensive AI guidelines |
| `public/.well-known/ai-plugin.json` | AI plugin specification |
| `public/.well-known/security.txt` | Security contact info |

## Features

### 1. Centralized Configuration (`lib/site-config.ts`)

```typescript
// All site settings in one place
export const SITE_CONFIG = {
  name: 'ObjectWire',
  url: 'https://objectwire.org',
  // ... all metadata
};

// Route registry with SEO settings
export const ROUTE_REGISTRY: RouteConfig[] = [
  { path: '/trump', priority: 0.9, changeFrequency: 'daily', indexable: true },
  // ... all routes
];

// Redirect rules
export const REDIRECT_RULES = [
  { source: '/donald-trump', destination: '/trump', permanent: true },
  // ...
];

// Tracking parameters to strip
export const TRACKING_PARAMS = ['utm_source', 'fbclid', ...];
```

### 2. URL Governance (`middleware.ts`)

Automatically enforces:

- ✅ **Trailing slash removal** - `/about/` → `/about`
- ✅ **Lowercase URLs** - `/ABOUT` → `/about`
- ✅ **Double slash fix** - `/about//page` → `/about/page`
- ✅ **Parameter stripping** - Removes 20+ tracking params
- ✅ **301/308 redirects** - Old URLs to canonical
- ✅ **WWW redirect** - `www.` → non-www
- ✅ **X-Robots-Tag** - noindex for admin routes

### 3. Crawler Control (`app/robots.ts`)

- Default rules for all bots
- Google-specific rules (Googlebot, Googlebot-News)
- Bing-specific rules
- AI crawler rules (GPTBot, ChatGPT-User, anthropic-ai, Claude-Web)
- Bad bot blocking (AhrefsBot, SemrushBot, MJ12bot, etc.)
- Parameter blocking patterns
- Multiple sitemap references

### 4. Dynamic Sitemaps

**Main Sitemap (`app/sitemap.ts`)**
- All routes from `ROUTE_REGISTRY`
- Dynamic blog posts from database
- Proper priorities and change frequencies

**News Sitemap (`app/news-sitemap.xml/route.ts`)**
- Google News format
- Last 2 days of articles only
- Publication metadata

### 5. AI/LLM Crawler Guidelines

**llms.txt (Summary)**
- Allowed/restricted content
- Attribution requirements
- Rate limiting
- Contact info

**llms-full.txt (Comprehensive)**
- Detailed content structure
- Schema examples
- Legal terms
- API information

**ai-plugin.json**
- OpenAI plugin format
- Content categories
- Crawl policy

## How It Works

### Adding a New Page

1. Add route to `ROUTE_REGISTRY` in `lib/site-config.ts`:

```typescript
{
  path: '/new-page',
  title: 'New Page Title',
  description: 'Description for search engines',
  priority: 0.8,
  changeFrequency: 'weekly',
  indexable: true,
  includeInNewsSitemap: false,
  type: 'static',
}
```

2. The page will automatically:
   - Appear in sitemap.xml
   - Have proper canonical URL
   - Be indexed by search engines
   - Follow URL normalization rules

### Adding a Redirect

1. Add to `REDIRECT_RULES` in `lib/site-config.ts`:

```typescript
{ source: '/old-url', destination: '/new-url', permanent: true }
```

2. Also add to `REDIRECTS` in `middleware.ts` for runtime enforcement

### Blocking a Parameter

1. Add to `TRACKING_PARAMS` in `lib/site-config.ts`
2. Add to `PARAMS_TO_STRIP` in `middleware.ts`

## Testing

### Verify robots.txt
```bash
curl https://objectwire.org/robots.txt
```

### Verify sitemap.xml
```bash
curl https://objectwire.org/sitemap.xml
```

### Verify URL normalization
```bash
# Should redirect to /trump
curl -I "https://objectwire.org/Trump"
curl -I "https://objectwire.org/trump/"
curl -I "https://objectwire.org/trump?utm_source=test"
```

### Verify llms.txt
```bash
curl https://objectwire.org/llms.txt
```

## Comparison to Duda Features

| Duda Feature | ObjectWire Implementation |
|--------------|---------------------------|
| Auto robots.txt | ✅ `app/robots.ts` |
| Auto sitemap | ✅ `app/sitemap.ts` |
| Canonical URLs | ✅ Middleware + metadata |
| 301 redirects | ✅ `REDIRECT_RULES` + middleware |
| Meta title templates | ✅ Layout metadata template |
| Structured data | ✅ JSON-LD in components |
| Image optimization | ✅ Next.js Image + config |
| WWW redirect | ✅ Middleware |
| Trailing slash control | ✅ Middleware |
| Parameter blocking | ✅ Middleware + robots.txt |

## Maintenance

### Regular Tasks

1. **Weekly**: Review new pages in `ROUTE_REGISTRY`
2. **Monthly**: Check Google Search Console for crawl errors
3. **Quarterly**: Update `llms.txt` with new content types

### When Adding Content Types

1. Update `ROUTE_REGISTRY` with type
2. Update sitemap generation if needed
3. Update `llms.txt` and `llms-full.txt`
4. Update `ai-plugin.json` categories

---

*Last updated: January 2025*
