# ObjectWire | HCU Recovery Plan

**Created:** May 5, 2026  
**Status:** Executing  
**Target:** Partial recovery at Aug/Sep 2026 core update. Full recovery by Mar 2027.  
**Owner:** ObjectWire Editorial + Engineering

---

## Diagnosis Summary

### What Happened

ObjectWire experienced a site-wide impressions drop with **no manual action notification in Search Console**. This pattern is consistent with a **Google Helpful Content Update (HCU) algorithmic penalty**, not a manual spam action.

The HCU classifier is a site-level signal. Once it fires on a domain, it suppresses all pages — including high-quality ones — until the classifier re-evaluates the domain during a future core algorithm update.

Contributing factors:
- Scaled AI content published without consistent human editorial review
- Supabase excessive calls (April 22 incident) likely reduced crawl trust signals
- Mixed topical identity (investigative journalism + creator profiles + gaming news on same domain)
- Thin hub pages created for internal linking with insufficient editorial depth
- Author pages that lacked verifiable external credentials

### What Does NOT Help

| Action | Why It Does Not Fix This |
|---|---|
| Submitting individual reindex requests | Recrawls individual pages. Does NOT re-trigger the domain classifier. Classifier runs at core updates only. |
| Submitting a reconsideration request | There is no manual action on file. Nothing to reconsider. |
| Increasing publishing volume | More content at marginal quality makes the classifier worse, not better. |
| Changing the domain or redirecting | Destroys all existing indexing, backlinks, and Search Console history. |
| Bulk-deleting pages | Irreversible. `noindex` is safer and reversible. |
| Cross-linking objectwire.org and owire.org | Signals to Google they are the same operation. Undermines the separation strategy. |

---

## The Two-Domain Strategy

### objectwire.org — Investigative Journalism + Gaming/Tech News

Primary identity: **Austin investigative media company**.  
Content: Investigations, PI services, gaming/tech news, copyright/IP law, finance, crypto.  
Recovery path: Demonstrate topical authority + editorial depth + verified authorship.

### owire.org — Creator and Influencer Content

Purpose: House all creator profiles, influencer features, OnlyFans models, athlete bios.  
Why separated: Google's HCU classifier penalizes topical incoherence. Mixing adult-adjacent creator content with investigative journalism signals an unfocused domain. Separation is the correct call.

**owire.org must be a genuinely separate editorial identity:**

- [ ] Different site name, logo, and About page
- [ ] Different author bylines or at minimum a distinct editorial voice
- [ ] No cross-domain navigation links between objectwire.org and owire.org
- [ ] Own Search Console property (separate verification)
- [ ] Own GA4 property (separate measurement ID)
- [ ] Own sitemap at `owire.org/sitemap.xml`
- [ ] Own canonical URLs — no canonicals pointing back to objectwire.org

---

## Recovery Checklist

### WEEK 1 — Immediate Actions (Highest Leverage)

#### 1. Content Audit — Flag Thin Pages

Pull full indexed page list from Search Console:
`Search Console → Pages → Export full list`

Flag any page matching these criteria:
- Under 600 words with no original reporting
- Pure rewrite of another outlet's story (no added data, quotes, or original angle)
- Hub page with minimal body content (exists only for internal linking)
- Creator/influencer profiles that have been migrated to owire.org

For each flagged page, choose one:

**Option A — Rewrite to add genuine depth** (preferred for high-traffic pages)
- Add original data, named sources, or unique research angle
- Expand to 800+ words minimum
- Add at least one internal link to a related investigation or hub

**Option B — Set `noindex`** (faster, reversible, correct for thin pages with low traffic)
```tsx
// Add to the page's metadata export in page.tsx:
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  // ... rest of metadata unchanged
};
```

Track every noindexed page in the audit log below.

#### 2. Author Pages — Add External Credential Signals

Each `/authors/[slug]` page must have ALL of the following:

- [ ] Real photo (consistent with any social profile)
- [ ] Stated area of expertise with specifics: "covers Austin local government and Travis County courts since 2024" — not just "writer at ObjectWire"
- [ ] At least one link to external work: prior publication byline, LinkedIn, journalism portfolio, or professional profile
- [ ] List of their most recent ObjectWire articles, linked
- [ ] Author's beat clearly defined (gaming, crypto, investigative, IP law, etc.)

Google's quality rater guidelines look for author credentials verifiable **outside** the site. An author bio that only references ObjectWire is a weak signal. A bio that references prior work elsewhere is a strong signal.

Authors to prioritize:
- [ ] Michael Cripe — entertainment / IP / copyright
- [ ] Jack Sterling — crypto / finance / investigations
- [ ] ObjectWire Investigative Desk — PI services / local reporting
- [ ] Any other active bylines on published articles

#### 3. Homepage — Journalism Identity Above the Fold

The homepage must communicate ObjectWire's editorial identity in the first viewport. A visitor landing on the homepage should immediately understand this is an investigative journalism operation, not a general news aggregator.

Required changes:
- [ ] Investigations section linked prominently from homepage — dedicated module, not buried in feed
- [ ] PI services / investigative identity visible in homepage hero or nav
- [ ] `/investigations` added to primary navigation
- [ ] `/service` or "Investigative Services" added to primary navigation or footer nav

#### 4. Investigations Navigation — Make It Findable

`/investigations` is the highest-value content signal on the domain. It must be:
- [ ] In the main navigation bar
- [ ] Linked from the homepage with a dedicated section (not just a feed item)
- [ ] Internally linked from at least 5 other pages across the site

---

### BEFORE AUGUST 2026 — Content Quality Actions

#### 5. Publish 2-3 New Original Investigations

The `/investigations/minesoda/` content is exactly what the HCU classifier rewards:
- Primary sources only
- Named figures, dates, dollar amounts
- No other outlet has the same angle
- Locally relevant with public interest significance

Two to three new investigations at this standard before the estimated Aug/Sep 2026 core update will signal to the classifier that the domain produces genuinely original editorial content.

Investigation pipeline suggestions:
- Austin city/county FOIA requests — budget allocations, contract awards, public official conduct
- Travis County court filings — fraud cases, civil suits against public figures
- Texas state agency public records — licensing, violations, complaints
- Local business fraud or consumer harm with documentable evidence

Each investigation needs:
- Minimum 1,200 words
- At least 2 named primary sources or sourced documents
- Published under a real author byline with a populated author page
- Linked from the `/investigations` hub and from the homepage

#### 6. Get One Real External Citation

The single fastest trust signal is a legitimate external website citing ObjectWire as a source in an editorial context.

**Achievable path:**
1. File a FOIA request with Austin city, Travis County, or a Texas state agency
2. Publish findings as a full investigation with source documents linked
3. Submit the story as a tip to: Austin Chronicle, Austin American-Statesman, KXAN, KUT
4. If they cover it and reference ObjectWire, that is a legitimate editorial backlink

This is not link building. This is how journalism earns domain authority. One credible external citation from a legitimate local news outlet carries more weight than 50 directory submissions.

---

### ONGOING — Standards Enforcement

#### 7. Human Review on Every Publish — Non-Negotiable

Every article that runs through `wiki:publish` must have been reviewed and edited by a human before the command is run. The editorial loop:

```
Alfasa suggests → Human writes or edits → Human reviews → wiki:publish → Supabase
```

No article goes live via `wiki:publish` without a human having read and approved the full content. This is the core behavioral change the classifier is looking for. It needs to be sustained for 6-18 months.

#### 8. Content Standards Enforced at Publish Time

Before running `wiki:publish` on any article, verify:

- [ ] 600+ words minimum (800+ preferred for news, 1,200+ for investigations)
- [ ] At least one original angle: a quote, a data point, a primary source, or a local angle no other outlet has
- [ ] Real author byline with a populated `/authors/[slug]` page
- [ ] At least 4 internal links (hub backlink, 2 cluster siblings, author page)
- [ ] No em dashes, no AI-generated boilerplate phrases ("it is worth noting", "in conclusion", "it is important to understand")
- [ ] Meta description 130-155 chars with primary keyword in first 60 chars
- [ ] `published_at` ISO-8601 timestamp accurate to the actual publish date

---

## owire.org Launch Checklist

Track separately from objectwire.org recovery. These are parallel tasks.

### Technical Setup
- [ ] Domain verified in Railway
- [ ] Next.js project scaffolded (separate repo from Object-wire26-)
- [ ] Supabase project created (separate from objectwire.org Supabase)
- [ ] Separate GA4 property created and measurement ID added
- [ ] Separate Search Console property verified
- [ ] `robots.ts` and `sitemap.ts` configured for owire.org domain
- [ ] No mention of objectwire.org in owire.org nav, footer, or metadata

### Editorial Identity
- [ ] Site name, tagline, and About page written — distinct from ObjectWire
- [ ] Author bylines defined for owire.org (can overlap in person, must differ in presentation)
- [ ] Editorial standards page written for owire.org
- [ ] Content categories defined (creator profiles, influencer features, etc.)

### Content Migration
- [ ] All creator/influencer pages from objectwire.org inventoried
- [ ] `noindex` added to objectwire.org versions before owire.org versions publish
- [ ] owire.org versions published with canonical pointing to owire.org URLs
- [ ] objectwire.org versions left as `noindex` (not deleted) — redirect to owire.org versions after 90 days if no ranking loss

---

## Noindex Audit Log

Track every page set to `noindex` during the audit. Include the reason and a target rewrite date if applicable.

| Page Path | Reason | Date Noindexed | Rewrite Target | Status |
|---|---|---|---|---|
| *(fill as audit runs)* | | | | |

---

## Timeline

| Milestone | Target Date | Status |
|---|---|---|
| Content audit started | May 5, 2026 | Pending |
| Thin pages identified and noindexed | May 12, 2026 | Pending |
| Author pages updated with external credentials | May 12, 2026 | Pending |
| Homepage journalism identity above fold | May 12, 2026 | Pending |
| Investigations in primary navigation | May 10, 2026 | Pending |
| Investigation #1 published | Jun 15, 2026 | Pending |
| Investigation #2 published | Jul 15, 2026 | Pending |
| First external citation earned | Jul 31, 2026 | Pending |
| owire.org scaffolded | May 20, 2026 | Pending |
| owire.org launched with initial creator content | Jun 1, 2026 | Pending |
| Google core update (est.) | Aug/Sep 2026 | Waiting |
| Assess partial recovery | Sep 2026 | Waiting |
| Google core update (est.) | Mar 2027 | Waiting |
| Assess full recovery | Mar 2027 | Waiting |

---

## What to Watch in Search Console

Check weekly, not daily. Daily variance is noise.

- **Coverage report** — are pages being indexed or excluded? Watch for "Crawled, not indexed" increases.
- **Core Web Vitals** — if LCP or CLS degrades, fix immediately. Page experience is a ranking factor.
- **Search performance** — track impressions and clicks for the `/investigations` cluster and PI service pages specifically. These are the identity pages most likely to recover first.
- **Manual Actions** — if a manual action appears, the strategy changes entirely. Follow up immediately.

Do NOT obsessively check daily rankings. The classifier evaluates the domain holistically at core updates. Daily rank checks during an algorithmic suppression period are misleading.

---

## What Success Looks Like

**Partial recovery (Aug/Sep 2026 core update):**
- Impressions for `/investigations`, `/service`, and best gaming/tech articles begin recovering
- At least 3-5 pages ranking in positions 1-10 for branded or specific long-tail queries
- Domain is no longer suppressed on clearly high-quality pages

**Full recovery (Mar 2027 core update):**
- Organic impressions returning to or exceeding pre-penalty levels
- Multiple pages ranking for non-branded gaming, tech, and local journalism queries
- objectwire.org recognized as a topical authority in Austin investigative journalism + gaming news

---

*This document is the single source of truth for the objectwire.org recovery strategy. Update the checklist and timeline as tasks are completed. Reviewed and updated at the start of each weekly session.*
