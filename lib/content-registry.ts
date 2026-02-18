// =============================================================================
// CONTENT REGISTRY — ObjectWire Central Content Metadata
// =============================================================================
// This is the single source of truth for all article metadata.
// It powers:
//   - Sitemap generation (real lastmod dates, not filesystem timestamps)
//   - Dynamic homepage + /news feed (sorted by publishDate)
//   - Related articles (scored by category + tags)
//   - SEOWrapper structured data (per-page NewsArticle + BreadcrumbList JSON-LD)
//   - Meta description fallbacks
//
// HOW TO ADD AN ARTICLE:
// 1. Add an entry to the contentRegistry array below
// 2. Set publishDate to the actual publish date (ISO format: "YYYY-MM-DD")
// 3. Set modifiedDate whenever the article content is updated
// 4. Set priority: 0.9 for breaking/featured, 0.7 for standard, 0.5 for evergreen
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
  author: string;           // Byline name
  priority: number;         // Sitemap priority 0.0–1.0
  changeFrequency: ChangeFrequency;
  featured?: boolean;       // Show in homepage hero/featured slot
  imageUrl?: string;        // OG / article hero image
}

export const contentRegistry: ContentEntry[] = [

  // ===========================================================================
  // WINTER OLYMPICS 2026
  // ===========================================================================
  {
    slug: '/winter-olympics',
    title: 'Milan Cortina 2026 Winter Olympics Coverage | ObjectWire',
    description: 'Full coverage of the Milan Cortina 2026 Winter Olympics — medal standings, athlete profiles, event results, and breaking news.',
    publishDate: '2026-02-06',
    modifiedDate: '2026-02-17',
    category: 'Sports',
    tags: ['Winter Olympics', 'Milan Cortina 2026', 'Team USA'],
    author: 'ObjectWire Sports Desk',
    priority: 0.9,
    changeFrequency: 'daily',
    featured: true,
  },
  {
    slug: '/winter-olympics/usa/breezy-johnson',
    title: 'Breezy Johnson — Team USA First Gold at Milan Cortina 2026',
    description: 'Breezy Johnson won Team USA\'s first gold medal at the 2026 Milan Cortina Winter Olympics in Women\'s Downhill alpine skiing.',
    publishDate: '2026-02-11',
    modifiedDate: '2026-02-11',
    category: 'Sports',
    tags: ['Winter Olympics', 'Team USA', 'Alpine Skiing', 'Gold Medal', 'Breezy Johnson'],
    author: 'ObjectWire Sports Desk',
    priority: 0.9,
    changeFrequency: 'weekly',
    featured: true,
  },

  // ===========================================================================
  // YOUTUBE / SIDEMEN
  // ===========================================================================
  {
    slug: '/youtube/sidemen',
    title: 'The Sidemen — YouTube\'s Biggest Creator Group | ObjectWire',
    description: 'Complete profile of the Sidemen — KSI, Miniminter, Zerkaa, TBJZL, Behzinga, Vikkstar123, and W2S. History, net worth, charity events and more.',
    publishDate: '2026-01-15',
    modifiedDate: '2026-02-17',
    category: 'YouTube',
    tags: ['Sidemen', 'YouTube', 'KSI', 'Miniminter', 'Creator Economy'],
    author: 'ObjectWire Editorial',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    slug: '/youtube/sidemen/charity-match',
    title: 'Sidemen Charity Match 2026 — History, Players & Event Guide',
    description: 'Complete guide to the Sidemen Charity Match 2026 — the world\'s biggest YouTube football event. Players, history, charity raised, and live updates.',
    publishDate: '2026-02-07',
    modifiedDate: '2026-02-17',
    category: 'YouTube',
    tags: ['Sidemen', 'Charity Match', 'YouTube Football', 'KSI', 'MrBeast', 'IShowSpeed'],
    author: 'ObjectWire Sports Team',
    priority: 0.9,
    changeFrequency: 'weekly',
    featured: true,
  },
  {
    slug: '/youtube/sidemen/ksi',
    title: 'KSI (JJ Olatunji) — Profile, Net Worth & Career | ObjectWire',
    description: 'Full profile of KSI — YouTube star, boxer, and Sidemen member. Career timeline, net worth, music, and boxing record.',
    publishDate: '2026-01-15',
    modifiedDate: '2026-02-10',
    category: 'YouTube',
    tags: ['KSI', 'Sidemen', 'YouTube', 'Boxing', 'Creator Economy'],
    author: 'ObjectWire Editorial',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    slug: '/youtube/sidemen/miniminter',
    title: 'Miniminter (Simon Minter) — Profile & Career | ObjectWire',
    description: 'Profile of Miniminter, founding Sidemen member Simon Minter — YouTube career, content style, and personal life.',
    publishDate: '2026-01-15',
    modifiedDate: '2026-02-10',
    category: 'YouTube',
    tags: ['Miniminter', 'Simon Minter', 'Sidemen', 'YouTube'],
    author: 'ObjectWire Editorial',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    slug: '/youtube/sidemen/zerkaa',
    title: 'Zerkaa (Josh Bradley) — Profile & Career | ObjectWire',
    description: 'Profile of Zerkaa, Sidemen member Josh Bradley — YouTube history, content, and personal milestones.',
    publishDate: '2026-01-15',
    modifiedDate: '2026-02-10',
    category: 'YouTube',
    tags: ['Zerkaa', 'Josh Bradley', 'Sidemen', 'YouTube'],
    author: 'ObjectWire Editorial',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    slug: '/youtube/sidemen/tbjzl',
    title: 'TBJZL (Tobi Brown) — Profile & Career | ObjectWire',
    description: 'Profile of TBJZL, Sidemen member Tobi Brown — YouTube presence, football content, and career overview.',
    publishDate: '2026-01-15',
    modifiedDate: '2026-02-10',
    category: 'YouTube',
    tags: ['TBJZL', 'Tobi Brown', 'Sidemen', 'YouTube'],
    author: 'ObjectWire Editorial',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    slug: '/youtube/sidemen/behzinga',
    title: 'Behzinga (Ethan Payne) — Profile & Career | ObjectWire',
    description: 'Profile of Behzinga, Sidemen member Ethan Payne — fitness transformation, YouTube career, and personal story.',
    publishDate: '2026-01-15',
    modifiedDate: '2026-02-10',
    category: 'YouTube',
    tags: ['Behzinga', 'Ethan Payne', 'Sidemen', 'YouTube'],
    author: 'ObjectWire Editorial',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    slug: '/youtube/sidemen/vikkstar',
    title: 'Vikkstar123 (Vikram Barn) — Profile & Career | ObjectWire',
    description: 'Profile of Vikkstar123, Sidemen member Vikram Barn — gaming content, net worth, and YouTube history.',
    publishDate: '2026-01-15',
    modifiedDate: '2026-02-10',
    category: 'YouTube',
    tags: ['Vikkstar', 'Vikram Barn', 'Sidemen', 'YouTube', 'Gaming'],
    author: 'ObjectWire Editorial',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    slug: '/youtube/sidemen/w2s',
    title: 'W2S (Harry Lewis) — Profile & Career | ObjectWire',
    description: 'Profile of W2S, Sidemen member Harry Lewis — FIFA content, YouTube milestones, and personal life.',
    publishDate: '2026-01-15',
    modifiedDate: '2026-02-10',
    category: 'YouTube',
    tags: ['W2S', 'Harry Lewis', 'Sidemen', 'YouTube', 'FIFA'],
    author: 'ObjectWire Editorial',
    priority: 0.6,
    changeFrequency: 'monthly',
  },

  // ===========================================================================
  // VIDEO GAMES
  // ===========================================================================
  {
    slug: '/video-games/top-10-anime-games-2026',
    title: 'Top 10 Anime Games of 2026: Best Seasonal Games & Battle Royales',
    description: 'Rankings of the best anime games in 2026 — Genshin Impact, My Hero Ultra Rumble, Dragon Ball Legends, and more. Player counts and seasonal update frequency.',
    publishDate: '2026-01-27',
    modifiedDate: '2026-01-27',
    category: 'Video Games',
    tags: ['Anime Games', 'Genshin Impact', 'My Hero Ultra Rumble', 'Dragon Ball', 'Gaming Rankings'],
    author: 'ObjectWire Gaming Desk',
    priority: 0.7,
    changeFrequency: 'monthly',
    featured: true,
  },
  {
    slug: '/video-games/nintendo',
    title: 'Nintendo 2026 — Switch 2, Games & News | ObjectWire',
    description: 'Latest Nintendo news — Switch 2 launch, upcoming game releases, and analysis of Nintendo\'s 2026 strategy.',
    publishDate: '2026-01-10',
    modifiedDate: '2026-02-05',
    category: 'Video Games',
    tags: ['Nintendo', 'Switch 2', 'Gaming', 'Video Games'],
    author: 'ObjectWire Gaming Desk',
    priority: 0.7,
    changeFrequency: 'weekly',
  },
  {
    slug: '/video-games/mha/ultra-rumble',
    title: 'My Hero Ultra Rumble — Season Guide & Tips 2026',
    description: 'Complete guide to My Hero Ultra Rumble in 2026 — current season, character tier list, tips, and patch notes.',
    publishDate: '2026-01-20',
    modifiedDate: '2026-02-01',
    category: 'Video Games',
    tags: ['My Hero Ultra Rumble', 'MHA', 'Anime Games', 'Battle Royale'],
    author: 'ObjectWire Gaming Desk',
    priority: 0.6,
    changeFrequency: 'weekly',
  },

  // ===========================================================================
  // TECH / AI
  // ===========================================================================
  {
    slug: '/nvidia',
    title: 'NVIDIA 2026 — AI Chips, GB200, and Market Dominance | ObjectWire',
    description: 'ObjectWire\'s coverage of NVIDIA in 2026 — Blackwell architecture, data center revenue, AI dominance, and stock analysis.',
    publishDate: '2026-01-05',
    modifiedDate: '2026-02-10',
    category: 'Tech',
    tags: ['NVIDIA', 'AI Chips', 'Blackwell', 'GPU', 'Semiconductors'],
    author: 'ObjectWire Tech Desk',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    slug: '/microsoft',
    title: 'Microsoft 2026 — Copilot, Azure, and AI Strategy | ObjectWire',
    description: 'ObjectWire\'s Microsoft coverage — Copilot expansion, Azure AI growth, and enterprise strategy in 2026.',
    publishDate: '2026-01-05',
    modifiedDate: '2026-02-08',
    category: 'Tech',
    tags: ['Microsoft', 'Copilot', 'Azure', 'AI', 'Enterprise'],
    author: 'ObjectWire Tech Desk',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    slug: '/open-ai',
    title: 'OpenAI 2026 — GPT-5, Sora, and the Road to AGI | ObjectWire',
    description: 'ObjectWire\'s OpenAI coverage — GPT-5 capabilities, Sora video AI, o3 reasoning models, and the AGI timeline debate.',
    publishDate: '2026-01-05',
    modifiedDate: '2026-02-12',
    category: 'Tech',
    tags: ['OpenAI', 'GPT-5', 'Sora', 'AGI', 'AI'],
    author: 'ObjectWire Tech Desk',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    slug: '/google',
    title: 'Google 2026 — Gemini, Search AI, and Alphabet Strategy | ObjectWire',
    description: 'ObjectWire coverage of Google in 2026 — Gemini 2.0 updates, AI-powered Search changes, and Alphabet earnings.',
    publishDate: '2026-01-05',
    modifiedDate: '2026-02-10',
    category: 'Tech',
    tags: ['Google', 'Gemini', 'Alphabet', 'AI Search', 'Tech'],
    author: 'ObjectWire Tech Desk',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    slug: '/intel',
    title: 'Intel 2026 — 18A Process, Foundry Business & Turnaround | ObjectWire',
    description: 'Intel\'s make-or-break year: 18A high-volume manufacturing, foundry customer wins, and Pat Gelsinger\'s departure impact.',
    publishDate: '2026-01-08',
    modifiedDate: '2026-02-05',
    category: 'Tech',
    tags: ['Intel', 'Semiconductors', '18A', 'Foundry', 'Chips'],
    author: 'ObjectWire Tech Desk',
    priority: 0.7,
    changeFrequency: 'weekly',
  },
  {
    slug: '/neurophos-ai-hardware-startup',
    title: 'Neurophos — The AI Hardware Startup Challenging NVIDIA | ObjectWire',
    description: 'Deep-dive profile of Neurophos, the photonic AI chip startup aiming to disrupt NVIDIA\'s data center dominance.',
    publishDate: '2026-02-01',
    modifiedDate: '2026-02-01',
    category: 'Tech',
    tags: ['Neurophos', 'AI Hardware', 'Photonic Chips', 'Startups', 'NVIDIA'],
    author: 'ObjectWire Tech Desk',
    priority: 0.7,
    changeFrequency: 'monthly',
  },

  // ===========================================================================
  // ELON MUSK / SPACE / TESLA
  // ===========================================================================
  {
    slug: '/elon-musk',
    title: 'Elon Musk — Tesla, SpaceX, X, and DOGE Coverage | ObjectWire',
    description: 'ObjectWire\'s full Elon Musk coverage hub — Tesla earnings, SpaceX missions, X platform changes, and DOGE updates.',
    publishDate: '2026-01-05',
    modifiedDate: '2026-02-14',
    category: 'Tech',
    tags: ['Elon Musk', 'Tesla', 'SpaceX', 'X', 'DOGE'],
    author: 'ObjectWire Editorial',
    priority: 0.9,
    changeFrequency: 'daily',
    featured: true,
  },

  // ===========================================================================
  // FINANCE
  // ===========================================================================
  {
    slug: '/finance',
    title: 'Finance Intelligence — Markets, Crypto & Economy | ObjectWire',
    description: 'ObjectWire Finance covers markets, cryptocurrency, macroeconomics, and investment intelligence for the informed reader.',
    publishDate: '2026-01-01',
    modifiedDate: '2026-02-17',
    category: 'Finance',
    tags: ['Finance', 'Markets', 'Crypto', 'Economy', 'Investing'],
    author: 'ObjectWire Finance Desk',
    priority: 0.8,
    changeFrequency: 'daily',
  },
  {
    slug: '/crypto',
    title: 'Crypto Intelligence — Bitcoin, Ethereum & Web3 | ObjectWire',
    description: 'ObjectWire Crypto covers Bitcoin, Ethereum, stablecoins, DeFi, and regulatory developments shaping digital assets in 2026.',
    publishDate: '2026-01-01',
    modifiedDate: '2026-02-17',
    category: 'Finance',
    tags: ['Crypto', 'Bitcoin', 'Ethereum', 'DeFi', 'Web3'],
    author: 'ObjectWire Finance Desk',
    priority: 0.8,
    changeFrequency: 'daily',
  },

  // ===========================================================================
  // NEWS — GENERAL
  // ===========================================================================
  {
    slug: '/news',
    title: 'ObjectWire News — Breaking Stories & Verified Intelligence',
    description: 'ObjectWire\'s news hub — breaking stories, verified reporting, and editorial intelligence across tech, finance, sports, and culture.',
    publishDate: '2026-01-01',
    modifiedDate: '2026-02-17',
    category: 'News',
    tags: ['News', 'Breaking News', 'Journalism'],
    author: 'ObjectWire Editorial',
    priority: 0.9,
    changeFrequency: 'daily',
  },

  // ===========================================================================
  // SAAS / STARTUPS
  // ===========================================================================
  {
    slug: '/saas',
    title: 'SaaS Intelligence — Startups, Software & B2B Tech | ObjectWire',
    description: 'ObjectWire SaaS covers startup funding, software products, and B2B technology news.',
    publishDate: '2026-01-01',
    modifiedDate: '2026-02-10',
    category: 'SaaS',
    tags: ['SaaS', 'Startups', 'B2B', 'Software', 'Venture Capital'],
    author: 'ObjectWire Tech Desk',
    priority: 0.7,
    changeFrequency: 'weekly',
  },
  {
    slug: '/blitzy-ai-powered-autonomous-software-development',
    title: 'Blitzy — AI-Powered Autonomous Software Development | ObjectWire',
    description: 'Profile of Blitzy, the AI-powered platform automating enterprise software development at scale.',
    publishDate: '2026-02-05',
    modifiedDate: '2026-02-05',
    category: 'SaaS',
    tags: ['Blitzy', 'AI Development', 'Autonomous Coding', 'Startups', 'Enterprise AI'],
    author: 'ObjectWire Tech Desk',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    slug: '/ironspring-ventures-startups-are-changing-construction-goodship-track3d-fleetpulse',
    title: 'IronSpring Ventures — Startups Changing Construction | ObjectWire',
    description: 'How IronSpring Ventures\' portfolio companies — Goodship, Track3D, and FleetPulse — are modernizing the construction industry.',
    publishDate: '2026-02-03',
    modifiedDate: '2026-02-03',
    category: 'SaaS',
    tags: ['IronSpring Ventures', 'Construction Tech', 'Startups', 'Venture Capital'],
    author: 'ObjectWire Editorial',
    priority: 0.6,
    changeFrequency: 'monthly',
  },

  // ===========================================================================
  // ENTERTAINMENT / CULTURE
  // ===========================================================================
  {
    slug: '/entertainment',
    title: 'Entertainment Coverage — Film, TV & Culture | ObjectWire',
    description: 'ObjectWire Entertainment covers movies, TV, streaming, music, and cultural moments worth tracking.',
    publishDate: '2026-01-01',
    modifiedDate: '2026-02-15',
    category: 'Entertainment',
    tags: ['Entertainment', 'Film', 'TV', 'Culture', 'Streaming'],
    author: 'ObjectWire Editorial',
    priority: 0.7,
    changeFrequency: 'daily',
  },
  {
    slug: '/disney',
    title: 'Disney 2026 — Streaming, Parks, and Studio Coverage | ObjectWire',
    description: 'ObjectWire Disney coverage — Disney+ subscriber growth, park expansion, Marvel/Star Wars slate, and Bob Iger strategy.',
    publishDate: '2026-01-10',
    modifiedDate: '2026-02-10',
    category: 'Entertainment',
    tags: ['Disney', 'Disney+', 'Marvel', 'Star Wars', 'Streaming'],
    author: 'ObjectWire Entertainment Desk',
    priority: 0.7,
    changeFrequency: 'weekly',
  },

  // ===========================================================================
  // APPLE
  // ===========================================================================
  {
    slug: '/apple',
    title: 'Apple 2026 — iPhone 17, Vision Pro, and AI Features | ObjectWire',
    description: 'ObjectWire Apple coverage — iPhone 17 leaks, Vision Pro adoption, Apple Intelligence, and Tim Cook\'s long-term bets.',
    publishDate: '2026-01-05',
    modifiedDate: '2026-02-12',
    category: 'Tech',
    tags: ['Apple', 'iPhone', 'Vision Pro', 'Apple Intelligence', 'Tim Cook'],
    author: 'ObjectWire Tech Desk',
    priority: 0.8,
    changeFrequency: 'weekly',
  },

  // ===========================================================================
  // GITHUB / DEVELOPER
  // ===========================================================================
  {
    slug: '/github',
    title: 'GitHub 2026 — Copilot, Actions & Developer Platform | ObjectWire',
    description: 'ObjectWire GitHub coverage — GitHub Copilot evolution, AI code review, Actions improvements, and developer platform strategy.',
    publishDate: '2026-01-10',
    modifiedDate: '2026-02-08',
    category: 'Tech',
    tags: ['GitHub', 'Copilot', 'Developer Tools', 'Microsoft', 'Open Source'],
    author: 'ObjectWire Tech Desk',
    priority: 0.7,
    changeFrequency: 'weekly',
  },

  // ===========================================================================
  // NASA / SPACE
  // ===========================================================================
  {
    slug: '/nasa',
    title: 'NASA 2026 — Artemis, Mars, and Commercial Partnerships | ObjectWire',
    description: 'ObjectWire NASA coverage — Artemis lunar program progress, Mars mission planning, and commercial space partnerships.',
    publishDate: '2026-01-05',
    modifiedDate: '2026-02-05',
    category: 'Tech',
    tags: ['NASA', 'Artemis', 'Moon', 'Mars', 'Space'],
    author: 'ObjectWire Editorial',
    priority: 0.7,
    changeFrequency: 'weekly',
  },

];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/** Get all featured articles, sorted by publishDate descending */
export function getFeaturedArticles(): ContentEntry[] {
  return contentRegistry
    .filter((e) => e.featured)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

/** Get the most recently published articles */
export function getLatestArticles(limit = 10): ContentEntry[] {
  return [...contentRegistry]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}

/** Get articles by category */
export function getArticlesByCategory(category: string, limit?: number): ContentEntry[] {
  const results = contentRegistry
    .filter((e) => e.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  return limit ? results.slice(0, limit) : results;
}

/** Get related articles for a given slug, scored by category + tag overlap */
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

/** Look up a single entry by slug */
export function getEntry(slug: string): ContentEntry | undefined {
  return contentRegistry.find((e) => e.slug === slug);
}
