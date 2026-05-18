# SEO Next Steps | OzoneNews

> Quick-reference action list distilled from the full [100k_organicsearch.md](100k_organicsearch.md) plan. Check items off as completed.

---

## Where We Are (March 2026)

- **330 pages**, 344 registry entries, 25+ categories
- Full SEO pipeline operational: sitemap, news sitemap, JSON-LD, auto-sync, canonical tags
- Supabase CMS wired (`/admin/editor` → `/blog/[slug]`)
- Biggest sections: Winter Olympics (32), Video Games (28), YouTube (25), News (24), Tech (54 combined)

---

## This Week

- [ ] **Register in Google Publisher Center** — [publishercenter.google.com](https://publishercenter.google.com/) — verify ownership, submit `/news-sitemap.xml`, upload 1000×1000 logo
- [ ] **Submit sitemaps in Google Search Console**, `/sitemap.xml` + `/news-sitemap.xml` separately
- [ ] **Register on Bing News PubHub**, [bing.com/webmasters/pubhub](https://www.bing.com/webmasters/pubhub)
- [ ] **Fix top 50 registry entries** missing `imageUrl` / `imageWidth` / `imageHeight` (blocks Top Stories)
- [ ] **Consolidate categories**, merge Tech→Technology, Gaming+Video Games→Gaming, SaaS→Technology, General→News
- [ ] **Add `loading="lazy"` to all YouTube iframe embeds**
- [ ] **Write `scripts/audit-registry.ts`**, flags entries with bad descriptions, missing images, duplicates

---

## Content Priorities (Next 30 Days)

**Publish 5–7 articles/week across these pillars:**

| Pillar | First Cluster Articles |
|---|---|
| Gaming | GTA 6 pre-orders, GTA 6 PC release, GTA 6 system requirements, Forza Horizon 6 car list, Switch 2 launch games |
| Tech/AI | OpenAI GPT-5 pricing, Google Gemini 3 update, Nvidia RTX 5090, Apple WWDC 2026 preview |
| Entertainment | Streaming subscriber reports, studio deals, Disney/Warner news |
| Finance | Fed rate decision, bank earnings, crypto regulation updates |

**Every article ships with:** metadata (title+desc+keywords), canonical, OG image 1200×675, `NewsArticleSchema`, `SEOWrapper`, `Breadcrumb` (3–4 levels), 4–6 internal links, thumbnail.

---

## Cluster Strategy

Build hub + sub-article clusters. All sub-articles link back to hub; hub links to all sub-articles.

**Top 5 clusters to complete first:**

1. `/video-games/gta-6`, 7 sub-articles (pre-orders, price, PC, map, characters, online, specs)
2. `/video-games/forza-horizon-6`, 5 sub-articles (cars, map, editions, routes, PC specs)
3. `/video-games/switch2`, 5 sub-articles (specs, games, price, compatibility, Joy-Con)
4. `/apple`, 5 sub-articles (iPhone 18, WWDC, Core AI, Mac Mini M5, Apple TV F1)
5. `/google`, 4 sub-articles (Gemini 3, AI Plus, Agentic Vision, Pixel 11)

---

## Google News Checklist (Per Article)

Every news article needs **all** of these to be eligible for Top Stories:

- [ ] Published within last 2 days (auto via `publishDate` in registry)
- [ ] `NewsArticle` JSON-LD on page (`NewsArticleSchema` component)
- [ ] Listed in `/news-sitemap.xml` (auto from registry)
- [ ] `imageUrl` ≥ 1200px wide with `imageWidth` + `imageHeight` set
- [ ] Publisher registered in Google Publisher Center
- [ ] Real author name (not "OzoneNews Editorial" for news pieces)

---

## Programmatic Content (Month 2–3)

- Scale `/define/` from 13 → 200+ pages ("What is CUDA", "What is LLM", etc.)
- Scale company profiles from ~12 → 100+ (`/saas/[company]`)
- Pre-build event pages: WWDC 2026, E3, GTC, Google I/O, World Cup

---

## Build Automation

- [ ] Build `RelatedArticles` component, auto-suggest from registry `tags[]` overlap
- [ ] Enforce breadcrumb depth ≥ 3 levels on all articles
- [ ] Shift high-volume content to Supabase CMS (no deploy per article)

---

## Track Weekly

| Metric | Where | Target |
|---|---|---|
| Indexed pages | GSC → Coverage | 100% |
| Avg position for pillar keywords | GSC → Performance | < 20 |
| CTR | GSC → Performance | > 3% |
| Top Stories appearances | GSC → Search Appearance | 10+/week by month 3 |
| Registry completeness | `scripts/audit-registry.ts` | 0 missing images/descriptions |
| Core Web Vitals | GSC → CWV | All green |

---

## Milestones

| Month | Target Sessions | Pages |
|---|---|---|
| 1 | 2K–5K | 360 |
| 3 | 12K–25K | 450 |
| 6 | 40K–65K | 600 |
| 12 | **100K+** | 900+ |
