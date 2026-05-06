# Alfasa | ObjectWire Credibility and News Network Authority Plan

**Created:** May 5, 2026  
**Status:** Active — Execute alongside RECOVERY_PLAN.md  
**Goal:** Verified news network status across Google News, Bing News, Apple News, Perplexity, and major aggregators

---

## Current Credibility Assets

| Asset | Status | Impact |
|---|---|---|
| Google My Business verified | ✅ Done | Local trust signal. Confirms real business entity. |
| Editorial standards page | ✅ Live | E-E-A-T signal. Required for news eligibility. |
| Corrections policy | ✅ Live | Trust signal. Required for Google News. |
| Author bylines | ✅ Improving | E-E-A-T. External credential links needed. |
| HTTPS + canonical URLs | ✅ Live | Technical baseline. |
| Structured data (NewsArticle JSON-LD) | ✅ Live | Required for Google Top Stories and News. |
| Google News inclusion | ❌ Not verified | Primary traffic target. |
| Bing News inclusion | ❌ Not verified | Never ranked — zero presence. |
| Apple News partnership | ❌ Not applied | Significant referral traffic potential. |
| Perplexity citations | ❌ Unknown | AI search presence — growing fast. |
| Press association membership | ❌ None | High-trust credibility signal. |
| ICANN WHOIS transparency | ❓ Check status | Required for some news verification programs. |

---

## Why Google My Business Helps (and What It Does Not Do)

Your verified GMB profile confirms ObjectWire exists as a real local business entity in Austin, TX. This matters for:

- Local search visibility (PI services, investigative journalism Austin queries)
- Google's entity graph — associating objectwire.org with a verified real-world entity
- Knowledge panel eligibility (will appear once domain authority recovers)

What GMB does **not** do:
- Qualify you for Google News inclusion (separate program, separate criteria)
- Lift the HCU algorithmic suppression
- Provide editorial authority signals (authorship, sourcing, beat coverage)

GMB is a business identity signal. News authority is an editorial identity signal. Both matter but they are evaluated by different Google systems.

---

## Google News | How to Get Included

### What Google News Actually Is

Google News is not a manual whitelist anymore. Since 2019, Google moved to an algorithmic eligibility model. Any site that meets the technical and editorial criteria can appear in Google News surfaces (News tab, Top Stories carousel, Discover feed) without submitting an application.

The criteria are evaluated continuously by the crawler.

### Technical Requirements (Check All)

- [ ] `NewsArticle` JSON-LD schema on every article — you have this, verify it is on ALL news pages
- [ ] `published_at` ISO-8601 timestamp in schema matches the actual publish time (not a default date)
- [ ] `author` field in schema points to a real author URL (`/authors/[slug]`)
- [ ] `image` in schema is at least 1200x675px — required for Top Stories eligibility
- [ ] News sitemap at `/news-sitemap.xml` — you have this, verify it is updating on publish
- [ ] News sitemap includes `<news:publication_date>` within the last 48 hours for new articles
- [ ] `robots.txt` does not block Googlebot-News
- [ ] Page load speed under 3 seconds on mobile (Core Web Vitals — LCP)
- [ ] No interstitials or popups blocking content on article pages
- [ ] Canonical URL in metadata matches the URL in JSON-LD schema exactly

### Editorial Requirements

- [ ] Every article has a visible byline with the author's name
- [ ] Every article has a visible publish date (and update date if edited)
- [ ] The site has an About page, Contact page, and Editorial Standards page — all three linked from the footer
- [ ] Corrections policy is publicly accessible and linked
- [ ] The site covers a consistent topic area — not every topic possible

### What Gets You Into Top Stories (the Carousel)

Top Stories is the high-value placement above organic results for news queries. Requirements beyond basic News inclusion:

- Article published within the last 72 hours (freshness is the primary signal)
- `imageUrl`, `imageWidth`, `imageHeight` all populated in the `content_registry` entry
- `NewsArticle` schema with `headline` matching the page `<h1>` exactly
- Strong click-through signal — headline must match real search intent, not be vague

The fastest path to Top Stories: publish breaking news articles within 2-4 hours of an event, with full schema, on a topic where you have established cluster depth (gaming, copyright/IP, Austin local).

---

## Bing News | Why You Have Zero Presence and How to Fix It

Bing News uses the **Bing News Publisher Portal** (news.microsoft.com/publisher) — it is a manual submission program, unlike Google News. You need to apply.

### Why You Have Never Ranked on Bing

Bing News requires explicit submission and approval. It is not crawl-based. A site can have 330 indexed pages on Bing and zero News presence because the two systems are completely separate. You have never applied.

### How to Get Into Bing News

**Step 1 — Bing Webmaster Tools verification**
- Go to bing.com/webmasters
- Add objectwire.org and verify ownership (XML file method or DNS TXT record)
- Submit your sitemap: `https://www.objectwire.org/sitemap.xml`
- Submit your news sitemap: `https://www.objectwire.org/news-sitemap.xml`

**Step 2 — Bing News Publisher Portal application**
- URL: `https://www.bing.com/news/publisher`
- Requirements:
  - Site must be verified in Bing Webmaster Tools
  - Must publish news content regularly (at minimum 3-4 articles per week)
  - Must have an About page, Contact page, and Privacy Policy
  - Must have original content (not syndicated or aggregated)
  - WHOIS information must be transparent (privacy protection is flagged)

**Step 3 — MSN News (automatic after Bing News approval)**
MSN News automatically syndicates from approved Bing News publishers. Once Bing News approves ObjectWire, MSN News inclusion is automatic.

**Timeline:** Bing News approval typically takes 2-4 weeks after submission.

---

## Apple News | The Highest-Quality Referral Traffic Source

Apple News reaches 125M+ monthly active users in the US. Publisher traffic from Apple News can be substantial for entertainment, gaming, and tech content — exactly ObjectWire's strongest verticals.

### How Apple News Publisher Works

Apple News uses **Apple News Format (ANF)** — a JSON-based article format — delivered via RSS feed. Publishers apply through News Publisher at `https://www.apple.com/news/news-for-publishers/`.

### Application Requirements

- [ ] RSS feed at a consistent URL (e.g., `/feed.json` or `/rss.xml`) — you have `/feed.json` and `/rss.xml`
- [ ] RSS feed must include full article content (not just excerpts)
- [ ] Site must be HTTPS
- [ ] Must have an About page and Contact information
- [ ] Must publish content consistently (minimum 3 articles/week)
- [ ] Content must be original (not aggregated)
- [ ] Must comply with Apple News content guidelines (no adult content on objectwire.org feed — this is why owire.org separation matters)

### Application Process

1. Go to `https://news.apple.com/publisher`
2. Sign in with an Apple ID (use a business Apple ID if possible)
3. Submit your RSS feed URL
4. Apple reviews manually — typically 1-3 weeks
5. Upon approval, Apple News crawls your RSS feed and formats articles automatically

### Apple News+ (Paid Tier)

Apple News+ is the paid subscription tier. This requires a separate partnership agreement with Apple and is only available after basic Apple News approval. Not the immediate target — basic Apple News first.

### owire.org and Apple News

Creator/influencer content may face Apple News content guideline restrictions. This is another reason owire.org must be completely separate. Apply objectwire.org to Apple News only — with the investigative journalism + gaming/tech identity clearly visible.

---

## Perplexity | AI Search Citations

Perplexity cites sources in its answers. When Perplexity cites ObjectWire, it drives direct traffic and builds authority signals that feed back into traditional search.

### How Perplexity Decides What to Cite

Perplexity's citation model favors:
- Sites already indexed by Google and Bing (baseline requirement)
- Sites with structured data (NewsArticle, BreadcrumbList)
- Pages that directly answer specific factual questions
- Pages with named primary sources, specific data, and verifiable claims
- Sites with real About pages, author bios, and editorial transparency

ObjectWire's investigative content and PI service pages are exactly the kind of specific, factual, locally-relevant content Perplexity cites. The gaming/tech news pages compete with hundreds of other outlets. The PI services and investigations compete with almost no one.

### What to Do

- No direct submission to Perplexity (it crawls automatically)
- Ensure every article page has complete `NewsArticle` or `Service` JSON-LD
- Write article introductions that directly answer specific questions (Perplexity pulls these as citations)
- The investigations content and PI services content are the highest citation probability pages

### Perplexity Pages (New Feature)

Perplexity now offers "Perplexity Pages" — structured reference pages on topics. If ObjectWire publishes a comprehensive hub page on a specific topic (Austin PI services, GTA 6 release date, etc.) that is more complete than competing pages, Perplexity may cite it as the authoritative source.

---

## Press Association Memberships and Verification Programs

These third-party credentials signal editorial legitimacy to Google, Bing, and Apple independently of the sites' own claims.

### Tier 1 — Apply Immediately (Free or Low Cost)

**Online News Association (ONA)**
- `journalists.org/membership`
- Open to digital-native news organizations
- Membership signals legitimacy to Google's quality raters
- Annual fee: ~$100

**Society of Professional Journalists (SPJ)**
- `spj.org/join.asp`
- The oldest and most recognized journalism professional association in the US
- Membership links on author pages carry E-E-A-T weight
- Annual fee: ~$75 per journalist member

**Texas Press Association**
- `texaspress.com`
- State-level press association — specifically valuable for Texas/Austin local news credibility
- Membership in a state press association is a strong local authority signal
- Annual fee: varies

**Austin journalism community**
- Austin Press Club (`austinpressclub.org`) — if active
- Austin chapter of SPJ

### Tier 2 — Apply After Basic Credibility is Established

**LION Publishers (Local Independent Online News)**
- `lionpublishers.com`
- Specifically for independent digital local news organizations
- Membership signals to Google and funders that ObjectWire is a legitimate local news operation
- Application requires demonstrating editorial independence and community coverage

**Google News Initiative**
- `newsinitiative.withgoogle.com`
- Training and resources for news publishers
- Completion of GNI training programs adds publisher credibility signals

### Tier 3 — Longer Term Targets

**Associated Press Membership**
Not available to independent sites. But AP wire access (for context, not reproduction) through AP Licensee program is possible.

**Reuters Connect**
Similar to AP. Wire access for editorial context.

**Press credentials for Austin City Hall**
Austin city government issues press credentials to journalists covering city hall. This is a verifiable external credential that can be linked from author pages and the About page.

---

## WHOIS Transparency

Many news verification programs (Bing News, Apple News, LION) flag domain privacy protection as a negative signal. Verify:

- [ ] Check current WHOIS record for `objectwire.org` at `whois.domaintools.com`
- [ ] If registrant information is hidden behind privacy protection, consider making the registrant organization name public (not personal address, but organization name "ObjectWire" or the LLC name)
- [ ] Registrant email should be a real business email at the domain (e.g., `editorial@objectwire.org`), not a personal Gmail

---

## RSS and Feed Health

Your feeds at `/rss.xml` and `/feed.json` are the primary ingestion point for Apple News, Bing News, and many aggregators. They must be healthy.

### Feed Requirements

- [ ] RSS feed updates within 30 minutes of a `wiki:publish`
- [ ] Feed includes full article body content (not just excerpt)
- [ ] Feed includes `<author>` tag with author name
- [ ] Feed includes `<pubDate>` in RFC 822 format matching the article's `published_at`
- [ ] Feed includes `<enclosure>` or `<media:content>` with article image URL, width, height
- [ ] Feed is valid — check at `validator.w3.org/feed/`
- [ ] Feed is accessible without authentication
- [ ] Feed returns correct `Content-Type: application/rss+xml` header

### Feed Audit Action

Run the feed through the W3C validator and fix any errors before submitting to Bing News or Apple News. A malformed feed will be rejected by both.

---

## Prioritized Action List

### This Week

| Action | Platform Impact | Effort |
|---|---|---|
| Verify Bing Webmaster Tools + submit sitemaps | Bing, Bing News | 30 min |
| Submit Bing News Publisher application | Bing News, MSN News | 1 hour |
| Validate RSS feed at W3C validator, fix errors | Apple News, Bing News, all aggregators | 1-2 hours |
| Apply to Apple News Publisher | Apple News | 1 hour |
| Join Online News Association | Google E-E-A-T, Bing, Apple | 30 min |
| Join Society of Professional Journalists (key authors) | Google E-E-A-T | 30 min |
| Check WHOIS transparency | Bing News, Apple News | 15 min |

### Before August 2026

| Action | Platform Impact | Effort |
|---|---|---|
| Join Texas Press Association | Local authority, Google, Bing | 1 day |
| Apply to LION Publishers | Google, funder credibility | Application process |
| Apply for Austin press credentials | Author E-E-A-T, local authority | 1-2 weeks |
| Complete Google News Initiative training | Google publisher signals | 2-4 hours |
| Add ONA/SPJ membership links to author pages | Google E-E-A-T | 1 hour |

---

## Platform Submission Tracker

| Platform | Submission URL | Status | Date Submitted | Date Approved |
|---|---|---|---|---|
| Bing Webmaster Tools | bing.com/webmasters | ❌ Pending | | |
| Bing News Publisher | bing.com/news/publisher | ❌ Pending | | |
| Apple News Publisher | news.apple.com/publisher | ❌ Pending | | |
| Online News Association | journalists.org/membership | ❌ Pending | | |
| Society of Professional Journalists | spj.org/join.asp | ❌ Pending | | |
| Texas Press Association | texaspress.com | ❌ Pending | | |
| LION Publishers | lionpublishers.com | ❌ Pending | | |
| Google News Initiative | newsinitiative.withgoogle.com | ❌ Pending | | |
| W3C Feed Validator | validator.w3.org/feed | ❌ Pending | | |

---

## What This Looks Like When It Works

Six months of consistent execution on this plan puts ObjectWire in:

- **Google News / Top Stories** — articles appearing in the news carousel for gaming, copyright, Austin local, and PI-related queries
- **Bing News + MSN News** — full article syndication to Bing News (opens a completely new traffic source that has never existed)
- **Apple News** — gaming, tech, and copyright articles appearing in Apple News feeds for subscribed topic categories
- **Perplexity citations** — investigation articles and PI service pages cited as authoritative sources in AI search answers
- **Verified editorial entity** — SPJ, ONA, and Texas Press Association memberships linkable from author pages and the About page

Combined with the RECOVERY_PLAN.md execution, this is what transforms ObjectWire from an HCU-suppressed domain into a verified, multi-platform news operation that Google, Bing, and Apple all recognize as a legitimate editorial source.

---

*This document lives at `Docs/alfasa_credibility.md`. Update the Platform Submission Tracker as applications are submitted and approved. Review monthly.*
