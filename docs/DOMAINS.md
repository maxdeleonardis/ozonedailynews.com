# Ozone Network News | Domain Network Guide

**Legal entity:** Ozone Network News LLC (ONN)
**Document scope:** Every domain in the ONN network, its editorial identity, what it covers, and how the sites work together.

---

## Network Overview

**ozonenetwork.news** — FLAGSHIP: Gaming, Finance, Startups

Overflow verticals, each housed on a dedicated authority domain:


- **basilnews.com** — Personal finance, market movements, job listings, restaurant and hospitality hiring [Purchased]
- **honeynewspaper.com** — Human-centered journalism, truth and ethics, real-world impact, environment [Purchased May 26, 2026, replaces micanewspaper.com]
- **cloverheadlines.com** — Luxury lifestyle, fashion, travel, premium culture [Purchased May 26, 2026]
- **obsidianpaper.com** — Cybersecurity, privacy, data breaches, digital security [Purchased May 26, 2026]
- **onyxtimes.org** — Premium institutional newspaper, world events, politics, governance [Purchased May 26, 2026]
- **contentnewsnow.com** — Content creators, YouTube, OnlyFans events and drama (no explicit content) [Purchased May 26, 2026]

**Flagship niche rule (post-March 2026 Core Update):** `ozonenetwork.news` is no longer a generalist site. It publishes original content only within three pillars: **Gaming**, **Entertainment**, and **Startups and Tech**. All other verticals (health, cybersecurity, food, science, local, luxury) are covered exclusively on their dedicated sub-brand domains. The flagship aggregates those verticals via hub cards that link out, no body text duplication.

**Google's March 2026 Core Update directive: niche down.** Broad generalist sites are penalized. The network model answers this by housing topical authority on dedicated domains while the flagship aggregates and cross-links. Authority flows bidirectionally: sub-brand articles link to the flagship hub, flagship hubs link to the sub-brand.

---

## How Content Is Organized

Every domain in the network runs on the same shared codebase. Deploying a new brand is a matter of pointing the config at the right domain.

### Content Types

Each article belongs to one of five content types, which determines its layout and depth:

| Content Type | Best For |
|---|---|
| **News Article** | Breaking news, quick-turnaround reporting, creator news, job listings |
| **Jack Article** | Long-form investigations, premium analysis, institutional reporting (OnyxTimes, HoneyNewspaper) |
| **Article Page** | Evergreen guides, job listings, profiles, reference content |
| **Creator Article** | Creator and influencer profile pages (ContentNewsNow) |
| **Wiki Article** | Glossary entries and reference definitions |

### Registry

Every published article is tracked in a master registry. The registry is what Google reads to build the sitemap, structured data, and Top Stories eligibility. An article not in the registry does not appear in search results, regardless of whether the page exists. Every new article must be added to the registry before publishing.

### Brand Identity per Domain

Each domain gets its own name, URL, logo, and email. These are set once in the deployment environment — the underlying codebase is shared across all domains. When spinning up a new sub-brand, configure: site name, live URL, logo image URL, editorial email, and Twitter handle.

### Authors and Bylines

Every article must have a named author with a real external profile (Twitter or LinkedIn). This is a hard requirement for Google's E-E-A-T standards. Authors without external profiles use the house byline "OzoneNews Editorial Team."

### Article Lifecycle

Articles move through four states:

| State | In Google News | In Sitemap |
|---|---|---|
| **news** | Yes, for 48 hours | Yes |
| **review** | No | Yes |
| **feature** | No | Yes, high priority |
| **pruned** | No | No |

New articles default to `news`. After 48 hours they move to `review`. High-performing evergreen pieces are promoted to `feature`. Outdated content is pruned from all sitemaps.

---

## Domain 1 | ozonenetwork.news — Flagship

**Role:** Flagship. Aggregates all sub-brand verticals.
**Live:** https://www.ozonenetwork.news

### What it covers

**Three niched pillars — original content published only within these:**

| Pillar | Hub | Category values in play |
|---|---|---|
| Gaming | `/video-games` | `Gaming`, `Entertainment` |
| Finance | `/finance`, `/crypto` | `Finance`, `Crypto`, `News` |
| Startups | `/tech` | `Tech`, `News` |

**Overflow verticals** — the flagship publishes aggregate hub cards linking to sub-brand articles. No original body content on these topics at `ozonenetwork.news`:

| Topic | Sub-brand | Flagship hub |
|---|---|---|
| Science, space, sustainability | `ozonedailynews.com` | `/science` aggregate card |
| Cybersecurity, privacy, startups, tech | `obsidianpaper.com` | `/security` aggregate card |
| Health, ethics, environment | `honeynewspaper.com` | `/health` aggregate card |
| Content creators, YouTube | `contentnewsnow.com` | `/creators` aggregate card |
| Personal finance, job listings, restaurant industry | `basilnews.com` | `/finance` aggregate card |
| Investigations, civic watchdog | `objectivewire.org` | `/investigations` aggregate card |
| US events, global news, governance | `onyxtimes.org` | `/world` aggregate card |
| Luxury lifestyle, fashion, travel | `cloverheadlines.com` | `/lifestyle` aggregate card |

### How the network avoids content cannibalization

Each sub-brand owns its vertical completely. The flagship never republishes a sub-brand article — it only shows a brief summary card (150-300 words) linking out. Hub pages on the flagship display cards (title, image, link) that point to the sub-brand URL. Original flagship content covers a different angle than the sub-brand — for example, if HoneyNewspaper covers a public health story from an environmental angle, the flagship covers the regulatory or policy angle of the same news. Different angle = different article = no cannibalization.

### Flagship hub pages to build

| Hub URL | Aggregates From | Status |
|---|---|---|
| `/science` | ozonedailynews.com | Planned |
| `/health` | honeynewspaper.com | Planned |
| `/security` | obsidianpaper.com | Planned |
| `/finance` | basilnews.com | Planned |
| `/lifestyle` | cloverheadlines.com | Planned |
| `/world` | onyxtimes.org | Planned |
| `/creators` | contentnewsnow.com | Planned |
| `/investigations` | objectivewire.org | Planned |

### Priority pillars already built

| Pillar | Hub | Monthly Search Volume |
|---|---|---|
| `/video-games/gta-6` | GTA 6 hub | 5M+ |
| `/video-games/switch2` | Nintendo Switch 2 | 2M+ |
| `/open-ai` | OpenAI hub | 3M+ |
| `/google` | Google news | 2M+ |
| `/nvidia` | Nvidia hub | 800K+ |
| `/crypto` | Crypto hub | 500K+ |
| `/anime` | Anime hub | 400K+ |

---

## Domain 2 | ozonedailynews.com \u2014 Science, Space, Global Sustainability

**Role:** The network's science and sustainability desk. Covers space exploration, atmospheric science, climate research, and global sustainability initiatives.
**Live:** https://www.ozonedailynews.com
**Editorial identity:** Grounded in data, written for a curious general audience. Not activism, not sensationalism \u2014 reported science journalism that explains what the research actually says and why it matters for the planet.

### What it covers

- **Space exploration** \u2014 NASA missions, SpaceX launches, ESA programs, asteroid science, lunar and Mars developments
- **Atmospheric science** \u2014 ozone layer recovery, air quality data, atmospheric research findings
- **Climate science** \u2014 new research, IPCC reports, carbon data, sea level measurements, glacier and ice sheet updates
- **Global sustainability** \u2014 renewable energy milestones, international sustainability agreements, clean tech breakthroughs
- **Biodiversity and ecosystems** \u2014 species data, habitat research, conservation science
- **Planetary health** \u2014 ocean chemistry, freshwater systems, soil science, food system sustainability

### Why this niche works for SEO

Space and climate news generates high sustained search volume year-round, with massive spikes around launches, discoveries, and international reports. Most science coverage online is either paywalled (Nature, Science) or oversimplified (clickbait aggregators). Accurate, readable science journalism in a news format is underserved and Google-favored for E-E-A-T.

### Publishing cadence: 4x/week

| Day | Content Type | Example |
|---|---|---|
| Monday | Space news | "NASA Artemis III Mission Update | Launch Window and Crew Confirmed" |
| Tuesday | Climate data | "Arctic Ice Sheet Hits Second-Lowest Recorded Extent | 2026 Data" |
| Thursday | Sustainability | "EU Hits 50% Renewable Energy Target Two Years Early | Data Report" |
| Saturday | Deep feature | "The Ozone Layer in 2026 | Recovery Progress and What Comes Next" |

---

## Domain 3 | objectivewire.org

**Role:** Investigations, civic watchdog, private intelligence reporting, public records journalism.
**Original site** — doubles as a private detective agency resource.
**Live:** `https://www.objectivewire.org`
**Niche:** FOIA-sourced reporting, court records, law enforcement, missing persons, local crime, consumer fraud, public records tutorials

### Why this niche

`objectivewire.org` has a dual identity: it is simultaneously a news outlet and a resource for people navigating private investigation, background checks, and public records. The keyword overlap between "private detective near me" and "public records journalism" is significant and underserved. Google treats `.org` domains with civic/public interest content favorably for E-E-A-T scoring.

The private detective angle is NOT a conflict — it is a feature. Every news article about a FOIA request or court record also ranks for investigative services searches. Every private detective resource page links back to the relevant news article for authority.

### Core verticals

**News desk:**
- **FOIA and public records** — new FOIA requests filed, request outcomes, government transparency
- **Court records** — indictments, civil suit filings, sentencing, appeals outcomes
- **Law enforcement news** — police department policy, misconduct cases, federal agency actions
- **Missing persons** — NamUs database updates, case developments, awareness coverage
- **Consumer fraud** — FTC actions, scam alerts, class action settlements

**Private detective resource desk (evergreen `ArticlePage` type):**
- How to find public records by state
- Background check services comparison
- How to hire a licensed private investigator
- FOIA request templates by agency type
- Court record lookup guides by jurisdiction
- Austin private detective agency directory (`/austin-private-detective-agency` — already built)

### Publishing cadence: 3x/week (depth over volume — every piece is sourced and verifiable)

| Day | Content Type | Example |
|---|---|---|
| Tuesday | Court / legal news | "Federal Grand Jury Indicts Austin Developer on Wire Fraud Charges | Case Documents" |
| Thursday | Public records / FOIA | "FBI Releases 2,400 Pages on 1990s Case via FOIA | What the Documents Show" |
| Saturday | Resource / guide | "How to File a FOIA Request with the DOJ in 2026 | Step-by-Step Template" |

### Already-built routes to preserve

- `/austin-private-detective-agency` — live, do not delete
- `/missing-persons` — live, do not delete
- `/investigations` — live, do not delete
- `/lawsuit` — live, do not delete

**Target keywords:** FOIA news today, court records news, private detective Austin TX, public records lookup guide, missing persons news 2026, federal indictment news

**E-E-A-T note:** ObjectiveWire is a YMYL-adjacent site (legal, law enforcement). Every article must cite primary sources: court documents, FOIA releases, or official press releases. Author bylines must have real external profiles. No anonymous sourcing without editorial justification logged in the corrections page.

---

## Sub-Brand Network

Each sub-brand is an independent editorial identity within the ONN network. They share the same codebase and deployment infrastructure but publish under their own brand, URL, and niche.

---

### basilnews.com — Personal Finance, Market Movements, Job Listings

**Previously:** Food/Restaurants. Pivoted to Finance vertical May 26, 2026.
**Editorial identity:** Calm, approachable personal finance. No hype, no panic headlines. Covers major market movements in plain language, with a strong job listings and hiring vertical as the primary traffic driver at launch.
**Content pillars:** Personal finance basics, market movements (plain language), job listings, company hiring news, restaurant industry hiring, personal finance guides.
**Traffic strategy:** Job listing pages and company hiring news are the primary SEO entry point at launch. High search volume, low competition, easy to produce at scale.
**YMYL note:** Finance is YMYL. All market analysis and personal finance advice must be attributed to named authors with real external profiles.

---

### cloverheadlines.com — Luxury Lifestyle, Fashion, Travel

**Previously:** Personal Finance. Pivoted to Luxury Lifestyle vertical May 26, 2026.
**Editorial identity:** The network's aspirational lifestyle brand. Covers fashion releases, designer profiles, luxury travel destinations, high-end real estate, fine dining, and culture. Tone is editorial and appreciative, not advertising.
**Content pillars:** Luxury brand news, fashion week coverage, travel destinations, fine dining guides, art and culture events, real estate market coverage.

---

### grovenews.com — Retired from Plans

**Status:** Domain not purchased. Local news and real estate content now covered by `onyxtimes.org`. Do not purchase.

---

### sagenews.com — Retired from Plans

**Status:** Domain not purchased. Health and wellness coverage now assigned to `honeynewspaper.com`. Do not purchase.

---

### halonews.com — On Hold (Cybersecurity niche reassigned)

**Status:** Cybersecurity niche is now covered by `obsidianpaper.com`. `halonews.com` has no active niche assignment. Do not deploy. Consider releasing if not renewed.
**Note:** All cybersecurity CMS config that was planned for halonews.com should be applied to obsidianpaper.com instead.

---

### honeynewspaper.com — Human-Centered Journalism | Truth, Ethics, Real-World Impact

**Replaces:** `micanewspaper.com`
**Purchased:** May 26, 2026 | Expires: May 26, 2027
**Editorial identity:** Human-centered journalism focused on truth, ethics, and stories with direct real-world impact. Covers environmental causes (wildlife conservation, pollinators, ecosystems), climate accountability, public health, food safety, animal welfare, and community-level stories that mainstream outlets overlook. Think: "save the bees", PFAS contamination, school lunch policy, endangered species updates. Not activism — reported journalism that centers the human and ecological stakes.
**Content pillars:**
- **Environment** — pollinators, deforestation, ocean health, endangered species, pesticides
- **Public health** — FDA actions, food safety, air/water quality, PFAS, community health disparities
- **Ethics and accountability** — corporate accountability, greenwashing, animal welfare, supply chain reporting
- **Community impact** — local stories with national policy relevance
**YMYL note:** Health and environmental claims must cite peer-reviewed sources, government agencies (FDA, EPA, USDA), or primary documents. No speculation framed as fact.

---

### onyxtimes.org — Premium Institutional Newspaper | World Events, Politics, Governance

**Purchased:** May 26, 2026 | Expires: May 26, 2027
**Editorial identity:** The premium, serious, institutional-grade newspaper in the ONN network. Long-form, sourced, authoritative. Covers the stories that matter at a global and national scale with the depth and rigor of a broadsheet. No clickbait, no listicles. Every piece is reported, not rewritten.
**Core content pillars:**

| Pillar | Topics | Search volume signal |
|---|---|---|
| World Events | Wars, conflicts, disasters, summits, UN actions | Very high |
| Politics | US elections, congressional votes, executive orders, campaign news | Very high |
| Governance | Supreme Court, federal agency actions, regulatory changes, state law | High |
| Economic Policy | Fed decisions, inflation, trade policy, tariffs, GDP data | High |
| Elections | All major elections worldwide, polling, results, transitions | Very high (cyclical) |
| Climate Policy | COP summits, Paris Agreement updates, national commitments | High |
| International Relations | Geopolitics, NATO, G7/G20, sanctions, diplomacy | High |
| Nobel Prizes | Science, Peace, Economics — full award coverage with context | Seasonal high |
| Major Sports (governance angle) | Olympics, World Cup — politics, corruption, hosting controversies | Cyclical high |

**High-traffic topics ONYX owns (not covered elsewhere in ONN):**
- US presidential and congressional election cycles
- Supreme Court decisions and oral arguments
- Federal Reserve announcements and economic data releases
- Major international conflicts and peace negotiations
- State-level legislation with national relevance
- International sanctions and diplomatic incidents
- Olympic and World Cup governance, doping, bid controversies

**Note:** Absorbs what `grovenews.com` was planned to cover where it intersects with governance (zoning law, city council policy, municipal elections). Pure hyperlocal content without a policy angle is out of scope for OnyxTimes.

---

### obsidianpaper.com — Cybersecurity, Privacy, Data Security

**Status:** Niche assigned May 26, 2026. Cybersecurity vertical previously planned for halonews.com is now assigned here.
**Purchased:** May 26, 2026 | Expires: May 26, 2027
**Editorial identity:** The network's security and privacy desk. Covers data breaches, vulnerability reports, ransomware incidents, privacy law, and enterprise security policy. Written for a technically literate audience but accessible to informed general readers.
**Content pillars:** Data breach news, CVE and vulnerability alerts, ransomware and cybercrime, privacy law and regulation, enterprise security policy, consumer data protection.
**Note:** Breach articles must link to the official company disclosure or regulatory filing as the primary source. Never report unverified breach claims.

---

### contentnewsnow.com — Content Creators, YouTube, OnlyFans Events and Drama

**Status:** Niche assigned May 26, 2026.
**Purchased:** May 26, 2026 | Expires: May 26, 2027
**Editorial identity:** The network's creator economy desk. Covers YouTube channel drama, bans, algorithm changes, creator milestones, and collaborations. Also covers OnlyFans creator news: events, brand deals, controversies, and industry developments. No explicit content. Editorial focus is on the business and culture of the creator economy.
**Content pillars:** YouTube creator news, platform policy changes, channel drama and bans, creator milestones, OnlyFans industry news (business angle only), creator brand deals.
**Note:** All OnlyFans coverage is strictly news and business reporting. No explicit descriptions, no linking to adult content. Creator subjects are treated with the same editorial standards as any public figure.

---

## Domain Registry

| Domain | Brand Name | Covers | Status |
|---|---|---|---|
| `ozonenetwork.news` | OzoneNews | Flagship — all verticals aggregated | Live |
| `ozonedailynews.com` | OzoneDaily | Science, space, global sustainability | Live |
| `objectivewire.org` | ObjectiveWire | Investigations, public records, civic watchdog | Live |
| `basilnews.com` | BasilNews | Personal finance, market movements, job listings | Purchased — build next |
| `honeynewspaper.com` | HoneyNewspaper | Human-centered journalism, environment, public health, ethics | Purchased — build next |
| `contentnewsnow.com` | ContentNewsNow | Content creators, YouTube, OnlyFans events/drama | Purchased — build next |
| `cloverheadlines.com` | CloverHeadlines | Luxury lifestyle, fashion, travel | Purchased — build next |
| `obsidianpaper.com` | ObsidianPaper | Cybersecurity, privacy, data security | Purchased — build next |
| `onyxtimes.org` | OnyxTimes | World events, politics, governance | Purchased — build next |

---

## Checklist: Launching a New Domain

Complete all steps before a new domain goes live.

### Deployment

- [ ] Set the site name, URL, logo, editorial email address, and Twitter handle in Railway for the new service
- [ ] Verify the site config is pointing at the correct live domain, not the flagship URL
- [ ] Set up a Railway service linked to this repo for the new brand

### Authors

- [ ] Add every planned byline author with a real external profile (Twitter or LinkedIn)
- [ ] Authors without external profiles publish under "OzoneNews Editorial Team" until profiles are set up

### Trust and policy pages

- [ ] Create the four required trust pages: About, Editorial Standards, Corrections, Contact
- [ ] Link all four from the global footer on the new domain
- [ ] Make sure the site's structured data points to these trust pages

### Content (minimum before launch)

- [ ] 15+ published articles with correct publication timestamps
- [ ] All articles are registered in the master content registry (required for Google to find them)
- [ ] Every article has a canonical URL pointing to the new domain, not the flagship
- [ ] Every article has a named author with an external profile

### Search engine setup

- [ ] Google Search Console property created for the new domain
- [ ] Sitemap submitted in Search Console
- [ ] News sitemap submitted (for any site publishing regular news content)
- [ ] At least one flagship hub page links to the new sub-brand so it's not an orphan domain in the network

---

## Cross-Domain Linking Rules

| Link direction | Rule |
|---|---|
| Sub-brand → flagship hub | Every sub-brand article links to the relevant flagship hub within the first 3 paragraphs. Example: a SageNews article on longevity drugs links to `ozonenetwork.news/health`. |
| Flagship hub → sub-brand article | Every flagship hub page displays cards (title, image, link) pointing to the sub-brand article URL. No body text duplication. |
| Sub-brand → sub-brand | Allowed when topics overlap. One link per article maximum. Example: HoneyNewspaper climate article linking to SageNews on heat-health risks. |
| ozonedailynews → flagship | Every science article links to the relevant flagship hub (e.g. `/science`, `/tech`). |
| objectivewire → flagship | Every investigation links to the relevant flagship hub (e.g. `/politics`, `/tech`, `/finance`). |

All links in article prose must be blue and underlined. External links must open in a new tab.

---

## Suggested Domain Registrar Notes

All domains should be registered through the same registrar for unified DNS management. Recommended nameserver: Cloudflare (free tier handles DNS, DDoS protection, and CDN for all domains).

| Domain | Status | Notes | Purchased | Expires |
|---|---|---|---|---|
| `ozonenetwork.news` | **Live** | Primary flagship — deployed | - | - |
| `ozonedailynews.com` | **Live** | Science, space, global sustainability — deployed | - | - |
| `objectivewire.org` | **Live** | Investigations — preserve existing routes | - | - |
| `basilnews.com` | **Purchased** | Personal Finance, Job Listings, Market Movements | - | - |
| `honeynewspaper.com` | **Purchased** | Human-centered journalism, ethics, environment, real-world impact | May 26, 2026 | May 26, 2027 |
| `micanewspaper.com` | **Retired** | Replaced by honeynewspaper.com — do not renew | - | - |
| `cloverheadlines.com` | **Purchased** | Luxury Lifestyle — fashion, travel, culture | May 26, 2026 | May 26, 2027 |
| `obsidianpaper.com` | **Purchased** | Cybersecurity — absorbs halonews.com niche | May 26, 2026 | May 26, 2027 |
| `onyxtimes.org` | **Purchased** | Premium institutional newspaper — world events, politics, governance | May 26, 2026 | May 26, 2027 |
| `contentnewsnow.com` | **Purchased** | Content Creators, YouTube, OnlyFans events/drama | May 26, 2026 | May 26, 2027 |
| `halonews.com` | **On Hold** | Niche reassigned to obsidianpaper.com — do not deploy | - | - |
| `sagenews.com` | **Retired from plans** | Health niche now covered by honeynewspaper.com — do not purchase | - | - |
| `grovenews.com` | **Retired from plans** | Local/real estate niche now covered by onyxtimes.org — do not purchase | - | - |

---

*Last updated: May 26, 2026 — niche assignments finalized for all purchased domains*
*See also: `Docs/NEWSNETWORK.md` (sub-brand niche details + editorial calendars), `Docs/OZONEDAILYNEWS.md` (CMS standards + publishing rules)*
