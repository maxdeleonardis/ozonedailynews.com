// =============================================================================
// CONTENT REGISTRY — ObjectWire Central Content Metadata
// =============================================================================
// ALL DATA NOW LIVES IN SUPABASE (content_registry table).
//
// This file only exports:
//   1. Type definitions (ContentEntry, ChangeFrequency)
//   2. An empty contentRegistry array (sync fallback for registry-service.ts)
//   3. Sync helper functions (used as fallbacks by registry-service.ts)
//   4. registerPage() factory
//
// For runtime data, import from '@/lib/registry-service' instead.
// =============================================================================

export type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export interface ContentEntry {
  slug: string;             // URL path, e.g. "/winter-olympics/usa/breezy-johnson"
  title: string;            // Page title (used in <title> and structured data)
  description: string;      // Meta description — max 160 chars
  publishDate: string;      // ISO date: "2026-02-11"
  modifiedDate: string;     // ISO date: last edit
  category: string;         // Primary section label
  tags: string[];           // Topic tags for related-article matching
  author: string;           // Byline name (display name)
  authorSlug?: string;      // URL slug for author profile, e.g. "conan-boyle" → /authors/conan-boyle
  priority: number;         // Sitemap priority 0.0–1.0
  changeFrequency: ChangeFrequency;
  featured?: boolean;       // Show in homepage hero/featured slot
  imageUrl?: string;        // OG / article hero image
  imageWidth?: number;      // Pixel width  — required for Google Top Stories carousel (min 1200)
  imageHeight?: number;     // Pixel height — required for Google Top Stories carousel (min 675, 16:9)
  imageAlt?: string;        // Alt text for the hero image
  imageCredit?: string;     // Attribution string
}

// Empty array — sync fallback only. All data is in Supabase.
export const contentRegistry: ContentEntry[] = [
  // --- Auto-added by wiki:publish 2026-04-18 ---
  {
    slug: "/video-games/forza-horizon-6/news/pre-launch-511k-steam-presales-alinea-analytics-2026",
    title: "Forza Horizon 6 | 511K Steam Pre-Sales, $30M Revenue Before Launch",
    description: "Alinea Analytics data from April 15 projects a 2-million-unit day-one on Steam, a franchise record driven by the Japan setting, a viral gameplay reveal, and a solo-friendly achievement list.",
    publishDate: "April 18, 2026",
    modifiedDate: "2026-04-18",
    category: "Gaming",
    tags: ["Forza Horizon 6 Steam pre-sales","Forza Horizon 6 511000 pre-orders","Forza Horizon 6 $30 million revenue","Alinea Analytics Forza Horizon 6","Forza Horizon 6 2 million day one"],
    author: "Jack Sterling",
    priority: 0.7,
    changeFrequency: "weekly",
    imageUrl: "https://www.ozonenetwork.news/entertainment/forza_horizon_6.PNG",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Forza Horizon 6 Japan setting steam pre-sales 511K Alinea Analytics 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-19 ---
  {
    slug: "/meta/news/meta-broadcom-mtia-chip-partnership-2029-hock-tan",
    title: "Meta and Broadcom Extend Custom AI Chip Partnership to 2029 | $2.3B Paid, 2nm MTIA 500 Confirmed",
    description: "The deal covers four MTIA chip generations, a one-gigawatt compute deployment, and a first-of-its-kind 2-nanometer custom AI accelerator. Broadcom CEO Hock Tan will leave Meta's board and move to a dedicated advisory role.",
    publishDate: "April 19, 2026",
    modifiedDate: "2026-04-19",
    category: "Tech",
    tags: ["Meta Broadcom partnership 2029","Meta MTIA chip Broadcom","Meta custom AI chip 2026","MTIA 500 2nm chip","Broadcom XPU Meta"],
    author: "Jack Brenen",
    priority: 0.7,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1678957949479-b1e876bee3f1?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Meta Broadcom MTIA chip partnership 2029 Hock Tan 2nm AI accelerator",
  },
  // --- Auto-added by wiki:publish 2026-04-19 ---
  {
    slug: "/entertainment/news/jack-ryan-ghost-war-trailer-prime-video-2026",
    title: "Jack Ryan: Ghost War | John Krasinski Returns in Official Trailer for May 20 Prime Video Feature",
    description: "Prime Video drops the first full trailer for the Jack Ryan feature film, confirming a May 20, 2026 global premiere and Sienna Miller as a new MI6 ally",
    publishDate: "April 19, 2026",
    modifiedDate: "2026-04-19",
    category: "Entertainment",
    tags: ["Jack Ryan Ghost War","Jack Ryan Ghost War trailer","John Krasinski Jack Ryan 2026","Ghost War Prime Video","Jack Ryan movie 2026"],
    author: "ObjectWire Entertainment Desk",
    priority: 0.7,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Jack Ryan Ghost War trailer Prime Video John Krasinski May 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-19 ---
  {
    slug: "/video-games/battlefield-6/news/2026-roadmap-seasons-3-4-5-naval-warfare-back-to-roots",
    title: "Battlefield 6 2026 Roadmap | Seasons 3-5, Naval Warfare, Server Browser",
    description: "EA and Battlefield Studios officially map out the next nine months of content, featuring Wake Island, aircraft carriers, a server browser, and proximity chat, as DICE pivots to a 'correction year' after launch.",
    publishDate: "April 19, 2026",
    modifiedDate: "2026-04-19",
    category: "Gaming",
    tags: ["Battlefield 6 2026 roadmap","Battlefield 6 Season 3","Battlefield 6 Season 4 naval warfare","Battlefield 6 Wake Island","Battlefield 6 Golmud Railway reimagining"],
    author: "ObjectWire Editorial",
    priority: 0.7,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Battlefield 6 2026 roadmap seasons 3 4 5 naval warfare Wake Island server browser",
  },
  // --- Auto-added by wiki:publish 2026-04-19 ---
  {
    slug: "/video-games/unreal-engine/ue-5-7-megalights-pcg-nanite-voxels-2026",
    title: "Unreal Engine 5.7 | MegaLights, PCG Production-Ready, Nanite Voxels 2026",
    description: "Epic Games ships UE 5.7.2 with three headline systems that collectively turn the engine into an autonomous world-building suite, alongside a 25% GPU performance gain over UE 5.4 and a built-in context-aware AI developer assistant.",
    publishDate: "April 19, 2026",
    modifiedDate: "2026-04-19",
    category: "Tech",
    tags: ["Unreal Engine 5.7","Unreal Engine 5.7 MegaLights","UE 5.7 PCG production ready","Unreal Engine 5.7 Nanite Voxels","UE 5.7 features 2026"],
    author: "ObjectWire Editorial",
    priority: 0.7,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Unreal Engine 5.7 MegaLights PCG Nanite Voxels AI developer assistant 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-21 ---
  {
    slug: "/google/ai-coding-strike-team-antigravity-claude-code-2026",
    title: "Google AI Coding Strike Team | Antigravity vs Claude Code 2026",
    description: "Google DeepMind mobilizes a dedicated AI coding strike team called Antigravity to compete directly against Claude Code after Anthropic crosses $2.5B ARR in April 2026.",
    publishDate: "April 21, 2026",
    modifiedDate: "2026-04-21",
    category: "Tech",
    tags: ["Google AI coding strike team","Google Antigravity","Claude Code vs Gemini","Google DeepMind coding agents","AI coding 2026"],
    author: "ObjectWire Editorial",
    priority: 0.7,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Google DeepMind Antigravity AI coding team vs Claude Code 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-21 ---
  {
    slug: "/tech/stripe/stripe-stablecoins-aws-for-money-payments-2026",
    title: "Stripe Stablecoins | AWS for Money Strategy, Bridge, Tempo 2026",
    description: "Stripe's head of crypto go-to-market reveals the AWS for money strategy at the RWA Summit in Cannes, covering the Bridge acquisition, Tempo blockchain rails, and Stripe's plan to become the settlement layer for global stablecoin payments.",
    publishDate: "April 21, 2026",
    modifiedDate: "2026-04-21",
    category: "Tech",
    tags: ["Stripe stablecoins 2026","Stripe AWS for money","Stripe Bridge acquisition","Stripe Tempo blockchain","Stripe crypto payments"],
    author: "ObjectWire Editorial",
    priority: 0.7,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Stripe stablecoins AWS for money strategy Bridge Tempo payments 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-21 ---
  {
    slug: "/tech/news/adobe-firefly-ai-assistant-canva-ai-2-agentic-design-2026",
    title: "Adobe Firefly AI Assistant vs Canva AI 2.0 | Agentic Design 2026",
    description: "Adobe Firefly AI Assistant and Canva AI 2.0 both launched autonomous agentic design systems within hours of each other in April 2026, marking the end of manual creative workflows for both platforms.",
    publishDate: "April 21, 2026",
    modifiedDate: "2026-04-21",
    category: "Tech",
    tags: ["Adobe Firefly AI Assistant 2026","Canva AI 2.0","agentic AI design tools","Adobe creative agent","Canva AI 2.0 features"],
    author: "ObjectWire Editorial",
    priority: 0.7,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Adobe Firefly AI Assistant vs Canva AI 2.0 agentic design tools 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-21 ---
  {
    slug: "/video-games/ubisoft",
    title: "Ubisoft | Company Profile, Creative Houses, 2026 Reset",
    description: "Ubisoft company profile: the French multinational behind Assassin's Creed, Far Cry, and Rainbow Six, its 2026 Creative Houses restructure, financial performance, and what the reset means for its upcoming game pipeline.",
    publishDate: "April 21, 2026",
    modifiedDate: "2026-04-21",
    category: "Gaming",
    tags: ["Ubisoft","Ubisoft company profile","Ubisoft 2026","Ubisoft Creative Houses","Ubisoft restructure 2026"],
    author: "ObjectWire Editorial",
    priority: 0.8,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Ubisoft company profile Creative Houses restructure 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-21 ---
  {
    slug: "/video-games/capcom",
    title: "Capcom | Golden Era, RE Engine, 2026 Profile",
    description: "Capcom company profile: 11 consecutive years of record profits, RE Engine dominance, Resident Evil Requiem, Monster Hunter Wilds, Pragmata, and the Street Fighter 6 esports empire in 2026.",
    publishDate: "April 21, 2026",
    modifiedDate: "2026-04-21",
    category: "Gaming",
    tags: ["Capcom", "Capcom 2026", "RE Engine", "Resident Evil Requiem", "Monster Hunter Wilds"],
    author: "ObjectWire Editorial",
    priority: 0.8,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Capcom company profile RE Engine golden era 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-21 ---
  {
    slug: "/video-games/capcom/pragmata-one-million-units-2-days-launch-2026",
    title: "Pragmata Hits 1 Million Units in 48 Hours | Capcom Breaks the New IP Curse",
    description: "Capcom's Pragmata sold over one million copies in its first 48 hours, breaking the new IP curse. Multiplatform launch, Switch 2 momentum, and Capcom stock jumping 3.2% on April 20, 2026.",
    publishDate: "April 21, 2026",
    modifiedDate: "2026-04-21",
    category: "Gaming",
    tags: ["Pragmata", "Capcom", "Nintendo Switch 2", "RE Engine", "New IP"],
    author: "ObjectWire Gaming Desk",
    priority: 0.8,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Pragmata Capcom new IP 1 million units 48 hours Nintendo Switch 2 launch 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-21 ---
  {
    slug: "/video-games/windrose/windrose-222k-concurrent-players-steam-viral-indie-2026",
    title: "Windrose Hits 222K Concurrent Players | 2026's First Viral Indie Breakout",
    description: "The pirate survival game nobody expected blew past Dune: Awakening with 222,134 peak Steam players on its first full weekend, and sold a million copies before the week was out.",
    publishDate: "April 21, 2026",
    modifiedDate: "2026-04-21",
    category: "Gaming",
    tags: ["Windrose", "Kraken Express", "Steam", "Indie Games", "Pirate Survival"],
    author: "ObjectWire Gaming Desk",
    priority: 0.8,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Windrose pirate survival game 222K concurrent Steam players viral indie 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-21 ---
  {
    slug: "/video-games/forza-horizon-6/news/forza-horizon-6-500k-steam-presales-better-launch-fh5-alinea-2026",
    title: "Forza Horizon 6 Pre-Sells 500K on Steam | Alinea Analyst Projects Better Launch Than FH5",
    description: "Alinea Analytics reports Forza Horizon 6 has pre-sold roughly 500,000 copies on Steam one month before its May 19, 2026 launch, with analysts projecting an even bigger opening than Forza Horizon 5.",
    publishDate: "April 21, 2026",
    modifiedDate: "2026-04-21",
    category: "Gaming",
    tags: ["Forza Horizon 6", "Steam Pre-Sales", "Alinea Analytics", "Playground Games", "Racing"],
    author: "ObjectWire Gaming Desk",
    priority: 0.8,
    changeFrequency: "weekly",
    imageUrl: "https://www.ozonenetwork.news/entertainment/forza_horizon_6.PNG",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Forza Horizon 6 500K Steam pre-sales Alinea Analytics better than FH5 launch projection",
  },
  // --- Auto-added by wiki:publish 2026-04-21 ---
  {
    slug: "/copyright/sony/playstation-age-verification-psn-online-safety-laws-2026",
    title: "PlayStation Age Verification | PSN Voice Chat and Broadcasting Get an Age Gate in 2026",
    description: "Sony is rolling out mandatory age verification for PSN voice chat, Discord integration, and broadcasting from June 2026, driven by the UK Online Safety Act, Australian under-16 ban, and EU digital consent laws.",
    publishDate: "April 21, 2026",
    modifiedDate: "2026-04-21",
    category: "Tech",
    tags: ["PlayStation", "Sony", "PSN", "Online Safety", "Age Verification"],
    author: "ObjectWire Tech Desk",
    priority: 0.8,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1605901309584-818e25452571?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "PlayStation PSN age verification voice chat broadcasting UK Online Safety Act 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-21 ---
  {
    slug: "/entertainment/movies/street-fighter-movie-2026-trailer-cinemacon-cast-world-warrior",
    title: "Street Fighter Movie 2026 | World Warrior Trailer Drops at CinemaCon, and the Hype Is Real",
    description: "The Street Fighter live-action reboot debuted its first full trailer at CinemaCon on April 16, 2026. October 16 release, directed by Kitao Sakurai, starring Andrew Koji, Noah Centineo, Cody Rhodes, and Roman Reigns.",
    publishDate: "April 21, 2026",
    modifiedDate: "2026-04-21",
    category: "Entertainment",
    tags: ["Street Fighter", "Capcom", "Paramount Pictures", "Movies 2026", "Video Game Movies"],
    author: "ObjectWire Entertainment Desk",
    priority: 0.9,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1547149617-609fafa00a6b?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Street Fighter movie 2026 World Warrior trailer CinemaCon Andrew Koji Noah Centineo",
  },
  // --- Auto-added by wiki:publish 2026-04-20 ---
  {
    slug: "/cars/porsche",
    title: "Porsche | Company Profile, Models, History, 2026",
    description: "Porsche company profile: Stuttgart heritage, the 911 legacy, Taycan EV leadership, 2026 model lineup, Le Mans motorsport history, financial performance, and the road to full electrification.",
    publishDate: "2026-04-21",
    modifiedDate: "2026-04-21",
    category: "Cars",
    tags: ["Porsche","Porsche 911","Porsche Taycan","Porsche Le Mans","Porsche EV strategy"],
    author: "ObjectWire Editorial",
    priority: 0.8,
    changeFrequency: "monthly",
    imageUrl: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Porsche company profile 911 Taycan Le Mans EV strategy 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-21 ---
  {
    slug: "/cars/porsche/911-gt3-sc-sport-cabriolet-reveal-2026",
    title: "Porsche 911 GT3 S/C | First GT3 Convertible, 502 hp, $275K",
    description: "The 2026 Porsche 911 GT3 S/C is the first-ever production GT3 convertible. 502 hp, 9,000 RPM flat-six, manual-only, 3,322 lbs. Full specs, pricing, and what makes it historic.",
    publishDate: "2026-04-21",
    modifiedDate: "2026-04-21",
    category: "Cars",
    tags: ["Porsche 911 GT3 SC", "Porsche 911 GT3 convertible", "Porsche GT3 S/C specs", "Porsche 911 GT3 SC price", "Sports Cars 2026"],
    author: "Jack Sterling",
    authorSlug: "jack-sterling",
    priority: 0.9,
    changeFrequency: "monthly",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Porsche 911 GT3 S/C first production GT3 convertible 502hp manual $275K 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-21 ---
  {
    slug: "/tech/perplexity/news/perplexity-computer-agentic-ai-platform-explained-2026",
    title: "Perplexity Computer | Agentic AI Platform, Pricing, How It Works 2026",
    description: "Perplexity Computer is an agentic AI platform that executes multi-step workflows across your entire software stack. Full explainer: multi-model orchestration, cloud vs Mac Mini, pricing, and the SaaSpocalypse context.",
    publishDate: "2026-04-21",
    modifiedDate: "2026-04-21",
    category: "Tech",
    tags: ["Perplexity Computer", "Perplexity agentic AI", "AI Agents 2026", "Perplexity Computer pricing", "agentic AI platform"],
    author: "Jack Sterling",
    authorSlug: "jack-sterling",
    priority: 0.9,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Perplexity Computer agentic AI platform multi-model orchestration Comet browser 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-21 ---
  {
    slug: "/lawsuit/california-files-againast-amazon-after-emails-reveiled",
    title: "California vs Amazon | Unsealed Emails Reveal a System of Artificial Price Floors Across the Internet",
    description: "A styles of concern flag, a Chewy happy face, and a Buy Box ban. The newly released documents show how Amazon allegedly built a market-wide pricing cartel, and brands went along with it.",
    publishDate: "April 21, 2026",
    modifiedDate: "2026-04-21",
    category: "News",
    tags: ["Amazon", "Antitrust", "California", "Rob Bonta", "Retail Pricing"],
    author: "ObjectWire Legal Desk",
    authorSlug: "objectwire-legal-desk",
    priority: 0.9,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "California vs Amazon antitrust lawsuit unsealed emails artificial price floors 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-23 ---
  {
    slug: "/finance/cross-river-bank-baas-visa-usdc",
    title: "Cross River Bank | BaaS Infrastructure, Visa USDC Settlement Partner",
    description: "Cross River Bank is the behind-the-scenes infrastructure powering fintech BaaS, and the settlement partner for Visa's USDC on Solana pilot. Full profile: funding, partners, and what it means for stablecoin payments.",
    publishDate: "2026-04-23",
    modifiedDate: "2026-04-23",
    category: "Finance",
    tags: ["Cross River Bank","Cross River Bank Visa USDC","Cross River Bank fintech","Cross River Bank BaaS","Cross River Bank Solana"],
    author: "ObjectWire Editorial",
    priority: 0.7,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Cross River Bank BaaS infrastructure Visa USDC Solana settlement partner",
  },
  // --- Auto-added by wiki:publish 2026-04-23 ---
  {
    slug: "/youtube/sidemen/inside-uk/season3/ratings-review-winner",
    title: "Sidemen Inside Season 3 Review | Winner, Ratings, Worth Watching",
    description: "Eddie Hall takes the crown in the most chaotic season yet, fans are split on the drama but united on the entertainment value. Full review: winner reveal, ratings, best moments, and whether season 3 lives up to the hype.",
    publishDate: "March 30, 2026",
    modifiedDate: "2026-04-23",
    category: "Entertainment",
    tags: ["Sidemen Inside Season 3","Sidemen Inside winner","Eddie Hall Sidemen","Sidemen Inside review","Sidemen Inside ratings"],
    author: "Conan Boyle",
    priority: 0.7,
    changeFrequency: "weekly",
    imageUrl: "https://www.ozonenetwork.news/entertainment/InsideS3.webp",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Sidemen Inside Season 3 winner Eddie Hall ratings review 2026",
  },
  // --- Auto-added by wiki:publish 2026-04-23 ---
  {
    slug: "/tech/oracle",
    title: "Oracle | Company Profile, Cloud, AI Strategy 2026",
    description: "Oracle Corporation profile: $57B revenue, OCI hyperscaler rivalry with AWS, 200+ AI data center deals, Larry Ellison's national security cloud push, and the $500B Stargate partnership in 2026.",
    publishDate: "2026-04-23",
    modifiedDate: "2026-04-23",
    category: "Tech",
    tags: ["Oracle", "Oracle Cloud Infrastructure", "OCI", "Larry Ellison", "Stargate AI", "Enterprise Cloud"],
    author: "ObjectWire Tech Desk",
    priority: 0.9,
    changeFrequency: "monthly",
    imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Oracle Corporation headquarters Austin Texas cloud AI infrastructure 2026",
  },
  {
    slug: "nvidia-news-nvidia-earth-day-2026-ai-climate-initiatives",
    title: "NVIDIA Earth Day 2026 | 5 AI Initiatives Protecting the Planet",
    description: "NVIDIA Earth Day 2026 spotlights five AI initiatives: Earth-2 climate digital twin, orangutan bioacoustic monitoring, AMP recycling robots, ocean plastic detection, and wildfire prediction.",
    publishDate: "2026-04-23",
    modifiedDate: "2026-04-23",
    category: "Tech",
    tags: ["NVIDIA", "Earth Day", "Climate AI", "Physical AI", "Earth-2", "Jensen Huang"],
    author: "ObjectWire Tech Desk",
    priority: 0.8,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Green forest canopy representing NVIDIA Earth Day 2026 AI environmental climate initiatives",
  },
  {
    slug: "disney-news-bob-iger-thrive-capital-josh-kushner-advisor-2026",
    title: "Bob Iger Joins Thrive Capital | Josh Kushner's $15B VC Firm 2026",
    description: "Bob Iger officially rejoins Thrive Capital as advisor on April 23, 2026, one month after handing Disney CEO reins to Josh D'Amaro. Iger to mentor founders and guide investments in OpenAI-backed $15B VC firm.",
    publishDate: "2026-04-23",
    modifiedDate: "2026-04-23",
    category: "Entertainment",
    tags: ["Bob Iger", "Thrive Capital", "Josh Kushner", "Disney", "OpenAI", "A24"],
    author: "Jack Wang",
    priority: 0.8,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Bob Iger returns to Thrive Capital as advisor after leaving Disney CEO role in 2026",
  },
  {
    slug: "world-cup-news-italy-rejects-iran-replacement-world-cup-2026-zampolli",
    title: "Italy Rejects Iran Replacement Proposal | 2026 World Cup Controversy",
    description: "Italy's government and Olympic officials slam as 'shameful' a U.S. proposal by envoy Paolo Zampolli to replace Iran at the 2026 FIFA World Cup. Italy's sporting integrity vs. geopolitical crisis explained.",
    publishDate: "2026-04-23",
    modifiedDate: "2026-04-23",
    category: "World Cup",
    tags: ["Italy", "Iran", "FIFA", "2026 World Cup", "Paolo Zampolli", "Gianni Infantino"],
    author: "Jack Wang",
    priority: 0.85,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Soccer ball on stadium pitch representing Italy Iran 2026 FIFA World Cup controversy",
  },
  {
    slug: "apple-news-apple-post-iphone-gurman-6-secret-products-ambient-ai-2026",
    title: "Apple Post-iPhone Future | Gurman 6 Secret Products Ambient AI 2026",
    description: "Bloomberg's Mark Gurman reveals Apple's 6 secret product categories: AI AirPods with cameras, smart glasses, a wearable pendant, HomePad display, tabletop robot, and a privacy-first security camera.",
    publishDate: "2026-04-23",
    modifiedDate: "2026-04-23",
    category: "Tech",
    tags: ["Apple", "Mark Gurman", "Ambient AI", "Smart Glasses", "John Ternus", "Apple Robotics"],
    author: "Jack Wang",
    priority: 0.85,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Apple device ecosystem representing post-iPhone ambient AI product roadmap 2026",
  },
  {
    slug: "technology-terrapower",
    title: "TerraPower | Bill Gates Nuclear Company, Natrium Reactor 2026",
    description: "TerraPower is Bill Gates's nuclear reactor company building the Natrium sodium-cooled fast reactor in Kemmerer, Wyoming. Full company profile: history, technology, funding, and 2026 construction milestone.",
    publishDate: "2026-04-23",
    modifiedDate: "2026-04-23",
    category: "Technology",
    tags: ["TerraPower", "Bill Gates", "Nuclear Energy", "Natrium", "Kemmerer Wyoming"],
    author: "ObjectWire Tech Desk",
    priority: 0.9,
    changeFrequency: "monthly",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Nuclear power plant representing TerraPower Natrium reactor Kemmerer Wyoming 2026",
  },
  {
    slug: "technology-terrapower-natrium-kemmerer-groundbreaking-wyoming-2026",
    title: "TerraPower Kemmerer Groundbreaking | First Advanced Nuclear Reactor USA 2026",
    description: "TerraPower breaks ground on nuclear components of its Natrium reactor in Kemmerer, Wyoming on April 22, 2026 — the first advanced non-light-water reactor to begin construction in the US in over 40 years.",
    publishDate: "2026-04-23",
    modifiedDate: "2026-04-23",
    category: "Technology",
    tags: ["TerraPower", "Natrium", "Nuclear Energy", "Bill Gates", "Kemmerer Wyoming", "Generation IV"],
    author: "Jack Wang",
    priority: 0.85,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Nuclear power plant construction representing TerraPower Natrium groundbreaking Kemmerer Wyoming 2026",
  },
  {
    slug: "microsoft-news-microsoft-rule-of-70-buyout-8750-workers-ai-pivot-2026",
    title: "Microsoft's First-Ever Buyout | 'Rule of 70' Plan Targets 8,750 Workers in Massive AI Pivot",
    description: "Microsoft offers voluntary retirement buyouts to 8,750 U.S. workers using the 'Rule of 70' formula — age plus tenure equals 70 — in its first-ever buyout program and largest AI workforce pivot to date.",
    publishDate: "2026-04-23",
    modifiedDate: "2026-04-23",
    category: "Tech",
    tags: ["Microsoft", "Layoffs", "AI Pivot", "Mustafa Suleyman", "Rule of 70", "Amy Coleman"],
    author: "Jack Wang",
    authorSlug: "jack-wang",
    priority: 0.9,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Microsoft office building representing Rule of 70 voluntary buyout program AI workforce pivot 2026",
  },
  {
    slug: "news-samsung-labor-crisis-pyeongtaek-protest-hbm-chips-2026",
    title: "Samsung Labor Crisis | 40,000 Workers Protest in Pyeongtaek as AI Chip Supply Hangs in the Balance",
    description: "The largest protest in Samsung Electronics history erupted April 23, 2026 in Pyeongtaek, South Korea, as 40,000 workers demand pay parity with SK Hynix and threaten an 18-day strike that could cripple global AI chip supply.",
    publishDate: "2026-04-23",
    modifiedDate: "2026-04-23",
    category: "News",
    tags: ["Samsung", "Labor", "HBM Chips", "South Korea", "AI Supply Chain", "NSEU", "SK Hynix"],
    author: "Jack Wang",
    authorSlug: "jack-wang",
    priority: 0.9,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1591189824294-f9a64b5e5d15?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Protest crowd representing Samsung workers labor demonstration Pyeongtaek 2026",
  },
  {
    slug: "airlines-jetblue-jetblue-surveillance-pricing-lawsuit-personal-data-2026",
    title: "JetBlue Surveillance Pricing Lawsuit | Personal Data Used to Set Fares 2026",
    description: "JetBlue faces a federal class action lawsuit alleging it uses cookies, tracking pixels, and third-party data brokers to inflate ticket prices based on individual browsing behavior — a practice regulators call surveillance pricing.",
    publishDate: "2026-04-23",
    modifiedDate: "2026-04-23",
    category: "Finance",
    tags: ["JetBlue", "Surveillance Pricing", "Privacy", "Lawsuit", "Airlines"],
    author: "Jack Wang",
    authorSlug: "jack-wang",
    priority: 0.9,
    changeFrequency: "weekly",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=675&fit=crop",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Airplane at airport gate representing JetBlue surveillance pricing lawsuit 2026",
  },
];
// SYNC HELPER FUNCTIONS (used as fallbacks by registry-service.ts)
// When Supabase is unreachable, these operate on the empty array above,
// which means they return []. This is safe — the site degrades gracefully.
// =============================================================================

export function getFeaturedArticles(): ContentEntry[] {
  return contentRegistry
    .filter((e) => e.featured)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

const HUB_SLUGS = new Set([
  '/', '/news', '/tech', '/technology', '/finance', '/search', '/site-index',
  '/youtube', '/editorial-standards', '/social', '/entertainment', '/blog',
  '/about', '/team', '/privacy-policy', '/terms-of-service', '/copyright',
  '/corrections', '/get-help', '/service', '/index', '/feeds', '/crypto',
  '/artists', '/influencer', '/saas', '/research', '/objectwire',
  '/podcasts', '/video-games', '/winter-olympics', '/world-cup', '/formula-1',
  '/redbull', '/disney', '/elon-musk', '/google', '/apple', '/nvidia',
  '/microsoft', '/open-ai', '/github', '/nasa', '/intel', '/beastgames',
  '/bio-hacking', '/earth', '/ngos', '/cars', '/clothing', '/events',
  '/bank-of-america', '/austin-private-detective-agency', '/missing-persons',
  '/investigations', '/college', '/define', '/authors', '/politics',
  '/amazon', '/tiktok', '/trump', '/cuba',
]);

const HUB_CATEGORIES = new Set(['Meta', 'Support', 'Services', 'Legal']);

function isRealArticle(e: ContentEntry): boolean {
  if (HUB_SLUGS.has(e.slug)) return false;
  if (HUB_CATEGORIES.has(e.category)) return false;
  const parts = e.slug.split('/').filter(Boolean);
  if (parts.length < 2) return false;
  if (e.description.length < 60) return false;
  if (e.title.startsWith('›') || e.title.startsWith('ObjectWire coverage')) return false;
  return true;
}

export function getLatestArticles(limit = 10): ContentEntry[] {
  return [...contentRegistry]
    .filter(isRealArticle)
    .sort((a, b) => {
      const dateDiff = new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      if (dateDiff !== 0) return dateDiff;
      const modDiff = new Date(b.modifiedDate).getTime() - new Date(a.modifiedDate).getTime();
      if (modDiff !== 0) return modDiff;
      return (b.priority ?? 0) - (a.priority ?? 0);
    })
    .slice(0, limit);
}

export function getArticlesByCategory(category: string, limit?: number): ContentEntry[] {
  const results = contentRegistry
    .filter((e) => e.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  return limit ? results.slice(0, limit) : results;
}

export function getRelatedArticles(slug: string, limit = 5): ContentEntry[] {
  const current = contentRegistry.find((e) => e.slug === slug);
  if (!current) return getLatestArticles(limit);
  return contentRegistry
    .filter((e) => e.slug !== slug)
    .map((e) => ({
      entry: e,
      score:
        (e.category === current.category ? 3 : 0) +
        e.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.entry.publishDate).getTime() - new Date(a.entry.publishDate).getTime())
    .slice(0, limit)
    .map((e) => e.entry);
}

export function getEntry(slug: string): ContentEntry | undefined {
  return contentRegistry.find((e) => e.slug === slug);
}

export function getAllTags(): { tag: string; count: number }[] {
  const tagMap = new Map<string, number>();
  for (const entry of contentRegistry) {
    for (const tag of entry.tags) {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
    }
  }
  return [...tagMap.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getEntriesByTag(tag: string, limit?: number): ContentEntry[] {
  const results = contentRegistry
    .filter((e) => e.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  return limit ? results.slice(0, limit) : results;
}

export function getEntriesByAuthor(authorSlug: string): ContentEntry[] {
  return contentRegistry
    .filter((e) => e.authorSlug === authorSlug)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

// =============================================================================
// registerPage() — factory helper
// =============================================================================

export function registerPage(
  slug: string,
  title: string,
  description: string,
  overrides: Partial<Omit<ContentEntry, 'slug' | 'title' | 'description'>> = {}
): ContentEntry {
  const today = new Date().toISOString().split('T')[0];
  return {
    slug,
    title,
    description,
    publishDate: today,
    modifiedDate: today,
    category: 'General',
    tags: [],
    author: 'ObjectWire Editorial',
    priority: 0.7,
    changeFrequency: 'weekly',
    ...overrides,
  };
}
