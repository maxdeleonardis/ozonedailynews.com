/**
 * ARTICLE DATE REGISTRY
 * =====================
 * Central publish-date source of truth for pages that don't embed a
 * `publishDate="…"` prop. The content scanner checks this map BEFORE
 * falling back to filesystem timestamps (which are unreliable on Vercel
 * because every file gets the deployment timestamp).
 *
 * Format: slug → ISO-8601 date string
 *
 * HOW TO ADD A NEW DATE
 * 1. Find the slug (the route path, e.g. "/youtube/sidemen/ksi")
 * 2. Add it below with the actual publish/creation date
 * 3. Redeploy — the scanner will pick it up automatically
 */
export const ARTICLE_DATES: Record<string, string> = {
  // ─── News ──────────────────────────────────────────────────
  '/news': '2025-06-01',
  '/news/doordash-snap-ebt': '2025-09-15',
  '/news/iran': '2025-11-10',
  '/news/2025/jerome-powell-federal-reserve-headquarters-renovation': '2025-03-12',
  '/news/2025/luxury-watch-heists-at-the-us-grand-prix': '2025-10-22',
  '/news/2025/the-intercept-sues-doge': '2025-04-18',
  '/news/canada/canada-political-crisis': '2025-12-05',
  '/news/newyork/nycs-ranked-choice-voting-system-faces-scrutiny': '2025-07-20',
  '/news/texas/asml-hutto-semiconductor': '2025-08-14',
  '/news/texas/austin-tech-hub-decline': '2025-06-28',
  '/news/texas/pegatron-opens-us-factory': '2025-07-10',
  '/news/texas/texas-instruments-ti-cc23xx-and-cc26xx': '2025-05-20',
  '/news/texas/lifetime-fitness-austin-new-location-opening-in-2025-november-1301-south-lamar': '2025-11-01',
  '/news/world/china-japan-standoff-2026': '2026-01-15',

  // ─── Technology ────────────────────────────────────────────
  '/technology': '2025-06-01',
  '/technology/ai-sovereignty-shift': '2025-12-10',

  // ─── Google ────────────────────────────────────────────────
  '/google': '2025-06-01',
  '/google/agentic-vision': '2025-11-18',
  '/google/agentic-vision/gemini-3-flash': '2025-12-02',
  '/google/news/alphabet-inc-the-history-of-google': '2025-04-01',
  '/google/news/alphabet-or-nvidia-here-s-who-i-think-will-win-the-ai-chip-war': '2025-09-22',
  '/google/waymo': '2025-08-01',
  '/google/waymo/ntsb-investigation-school-bus-violations': '2026-01-23',

  // ─── Apple ─────────────────────────────────────────────────
  '/apple/news/apple-google-gemini-partnership': '2026-01-28',

  // ─── Microsoft ─────────────────────────────────────────────
  '/microsoft': '2025-06-01',

  // ─── Nvidia ────────────────────────────────────────────────
  '/nvidia': '2025-06-01',

  // ─── Finance ───────────────────────────────────────────────
  '/finance': '2025-06-01',
  '/finance/articles/16-trillion-on-chain-tokenization-revolution-2026': '2026-01-10',
  '/finance/articles/nasdaq-proposed-24-7-trading': '2025-11-05',
  '/finance/articles/oanda-or-interactive-brokers-forex-trading-usa': '2025-03-15',
  '/finance/articles/starlink-economic-analysis': '2025-10-01',
  '/finance/articles/statistical-edge-permutation-testing-trading': '2025-08-20',
  '/finance/articles/the-2026-sovereign-squeeze-ai-nuclear-age': '2026-01-18',
  '/finance/articles/the-greenland-fulcrum-and-the-golden-dome-architecture': '2025-12-15',
  '/finance/articles/the-trillion-dollar-treasure-trove-in-the-deep-sea': '2025-11-20',
  '/bank-of-america': '2025-07-01',

  // ─── Crypto ────────────────────────────────────────────────
  '/crypto/txc-stablecoin': '2025-05-10',

  // ─── Elon Musk ─────────────────────────────────────────────
  '/elon-musk/sun-shading-the-billionaire-wants-ai-satellites-to-block-the-sun': '2025-10-30',

  // ─── Open AI ───────────────────────────────────────────────
  '/open-ai/first-ai-insurance-apps': '2025-12-20',

  // ─── Disney ────────────────────────────────────────────────
  '/disney': '2026-02-10',
  '/disney/josh-damaro': '2026-02-11',

  // ─── Entertainment ─────────────────────────────────────────
  '/entertainment/hbomax': '2025-04-15',
  '/entertainment/james-cameron': '2025-05-01',
  '/entertainment/netflix': '2025-06-10',
  '/entertainment/survivor': '2025-09-20',
  '/entertainment/news/black-lady-blacklives-matter': '2025-07-15',
  '/entertainment/news/prophet-ebo-noah-s-flood-prophecy': '2025-08-08',

  // ─── Winter Olympics ───────────────────────────────────────
  '/winter-olympics': '2026-02-06',
  '/winter-olympics/lindsey-vonn': '2026-02-05',

  // ─── World Cup ─────────────────────────────────────────────
  '/world-cup': '2026-01-20',
  '/world-cup/boycott-calls-ice-immigration': '2026-01-25',
  '/world-cup/boycott-controversy': '2026-01-22',

  // ─── Social Media ──────────────────────────────────────────
  '/social/meta': '2025-06-15',
  '/social/meta/news/meta-platforms-may-ditch-nvidia-for-googles-parent-company-tpus-custom-compute-chips-for-ai': '2025-11-12',
  '/social/tiktok': '2025-07-01',
  '/social/x-twitter': '2025-06-01',

  // ─── YouTube & Creators ────────────────────────────────────
  '/youtube': '2025-04-01',
  '/youtube/chicos-toxicos': '2025-05-15',
  '/youtube/nelk-boys': '2025-04-20',
  '/youtube/sidemen': '2025-03-15',
  '/youtube/sidemen/behzinga': '2025-03-15',
  '/youtube/sidemen/charity-match': '2025-06-20',
  '/youtube/sidemen/ksi': '2025-03-15',
  '/youtube/sidemen/miniminter': '2025-03-15',
  '/youtube/sidemen/tbjzl': '2025-03-15',
  '/youtube/sidemen/vikkstar': '2025-03-15',
  '/youtube/sidemen/w2s': '2025-03-15',
  '/youtube/sidemen/zerkaa': '2025-03-15',
  '/beastgames': '2025-08-01',
  '/beastgames/season-2': '2025-12-10',

  // ─── Influencers ───────────────────────────────────────────
  '/influencer/iman-gadzhi': '2025-05-01',
  '/influencer/instagram': '2025-04-10',
  '/influencer/nick-shirley': '2025-07-22',
  '/influencer/serge-gatari': '2025-06-05',
  '/influencer/serge-gatari/ai-course-review': '2025-06-05',
  '/influencer/steve-will-do-it-kicked-of-logan-paul-s-podcast-making-an-official-return-to-youtube': '2025-08-15',

  // ─── SaaS ─────────────────────────────────────────────────
  '/saas/apptronik': '2025-09-10',
  '/saas/cognyte': '2025-05-25',
  '/saas/gatik': '2025-07-18',
  '/saas/general-motors': '2025-08-05',
  '/saas/hashicorp': '2025-06-12',
  '/saas/novartis': '2025-10-14',
  '/saas/sailpoint': '2025-07-30',
  '/saas/upside': '2025-09-25',
  '/saas/news/chatgpt-staffers-to-offer-secondary-sale-at-500b-valuation': '2025-11-08',
  '/saas/news/introducing-bitchat-jack-dorseys-game-changing-bluetooth-mesh-messaging-app': '2025-04-22',
  '/saas/news/render-vs-vercel-for-free-start-up-app-deployment': '2025-03-18',
  '/saas/news/sam-altman-visits-hedera-team': '2025-10-20',

  // ─── NASA ──────────────────────────────────────────────────
  '/nasa': '2025-06-01',
  '/nasa/europa': '2025-10-10',
  '/nasa/europa/juno-ice-shell-18-miles-thick': '2025-12-08',
  '/neurophos-ai-hardware-startup': '2025-09-05',

  // ─── Clothing & Lifestyle ─────────────────────────────────
  '/clothing/fabletics': '2025-04-01',
  '/clothing/gymshark': '2025-04-01',
  '/clothing/new-balance': '2025-04-01',
  '/clothing/skims': '2025-05-10',
  '/clothing/skims/ceo': '2025-05-10',
  '/clothing/skims/creative-director': '2025-05-10',
  '/clothing/vans': '2025-04-01',
  '/clothing/young-la': '2025-04-01',

  // ─── Video Games ───────────────────────────────────────────
  '/video-games/007-first-light': '2025-11-15',
  '/video-games/marvels-wolverine': '2025-10-05',
  '/video-games/mha': '2025-06-01',
  '/video-games/mha/alls-justice': '2025-09-12',
  '/video-games/mha/ultra-rumble': '2025-04-15',
  '/video-games/mha/ultra-rumble/season-15': '2025-11-01',
  '/video-games/resident-evil-requiem': '2025-10-28',
  '/video-games/top-10-anime-games-2026': '2026-01-05',

  // ─── Investigations ────────────────────────────────────────
  '/investigations/minesoda': '2025-08-01',
  '/investigations/minesoda/Ilhan-Omar': '2025-08-15',
  '/investigations/minesoda/nick-shirley-drops-second-part-of-fraud-investigation': '2025-09-02',
  '/missing-persons': '2025-07-01',

  // ─── Define / Comparisons ─────────────────────────────────
  '/define/nestjs-vs-nextjs-express': '2025-03-10',
  '/define/hedera-vs-solana-for-dapps': '2025-04-05',
  '/define/proof-of-engagement-blockchain-vs-proof-of-authority': '2025-05-18',
  '/define/difference-between-http-and-rest-api-servers': '2025-03-25',
  '/define/comet-ai-web-browser-vs-atlas-by-chatgpt': '2025-11-25',

  // ─── Cars ──────────────────────────────────────────────────
  '/cars/2025-nissan-z-vs-toyota-gr-supra-comparison': '2025-05-02',

  // ─── Podcasts ──────────────────────────────────────────────
  '/podcasts/all-in-podcast': '2025-06-15',
  '/podcasts/joe-rogan': '2025-06-15',

  // ─── Events ────────────────────────────────────────────────
  '/events/davos': '2025-01-20',
  '/events/davos/all-in-podcast': '2025-01-22',
  '/events/davos/all-in-podcast/david-sacks': '2025-01-22',
  '/events/davos/all-in-podcast/jason': '2025-01-22',
  '/events/sxsw': '2025-03-08',
  '/events/news/github-universe-october-28th-and-29th-san-francisco': '2025-10-28',

  // ─── NGOs ──────────────────────────────────────────────────
  '/ngos': '2025-06-01',
  '/ngos/getfreetogether': '2025-07-10',
  '/ngos/getfreetogether/digital-director': '2025-07-10',

  // ─── Artists ───────────────────────────────────────────────
  '/artists': '2025-04-01',
  '/artists/drake': '2025-05-20',
  '/artists/yeat': '2025-06-15',

  // ─── College ───────────────────────────────────────────────
  '/college/guides/non-degree-studies-at-university-of-texas-austin': '2025-04-10',

  // ─── GitHub ────────────────────────────────────────────────
  '/github': '2025-06-01',

  // ─── Construction/Startups ─────────────────────────────────
  '/ironspring-ventures-startups-are-changing-construction-goodship-track3d-fleetpulse': '2025-09-18',
  '/blitzy-ai-powered-autonomous-software-development': '2025-10-05',
  '/austin-private-detective-agency': '2025-05-01',

  // ─── Authors ───────────────────────────────────────────────
  '/authors/conan-boyle': '2025-01-15',
  '/authors/jack-wang': '2025-01-15',

  // ─── Winter Olympics 2026 ──────────────────────────────────
  '/winter-olympics/usa/elana-meyers-taylor-bobsled-gold': '2026-02-17',
  '/winter-olympics/italy/speedskating-team-pursuit-gold-2026': '2026-02-17',
  '/winter-olympics/georgia/first-winter-olympic-medal-figure-skating': '2026-02-17',
  '/winter-olympics/france/biathlon-relay-gold-perrot-2026': '2026-02-17',
  '/winter-olympics/norway/oftebro-second-nordic-combined-gold': '2026-02-17',
};
