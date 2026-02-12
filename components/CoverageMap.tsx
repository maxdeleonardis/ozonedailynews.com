import Link from 'next/link';
import { scanAllContent, groupByCategory, type Article } from '@/lib/content-scanner';

/* ─── TOPIC TREE STRUCTURE ─── */
interface SubTopic {
  name: string;
  href: string;
}

interface TopicItem {
  name: string;
  href: string;
  sub: SubTopic[];
}

interface Branch {
  name: string;
  items: TopicItem[];
}

interface TopicTree {
  id: string;
  name: string;
  icon: string;
  color: 'blue' | 'red' | 'green' | 'indigo' | 'purple' | 'pink';
  href: string;
  branches: Branch[];
}

/* ─── COLOR MAP ─── */
const colorMap = {
  blue:   { bg: 'bg-blue-600',   text: 'text-blue-600',   light: 'bg-blue-50',   dot: 'bg-blue-400',   hoverBg: 'hover:bg-blue-50'   },
  red:    { bg: 'bg-red-600',    text: 'text-red-600',    light: 'bg-red-50',    dot: 'bg-red-400',    hoverBg: 'hover:bg-red-50'    },
  green:  { bg: 'bg-green-600',  text: 'text-green-600',  light: 'bg-green-50',  dot: 'bg-green-400',  hoverBg: 'hover:bg-green-50'  },
  indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', light: 'bg-indigo-50', dot: 'bg-indigo-400', hoverBg: 'hover:bg-indigo-50' },
  purple: { bg: 'bg-purple-600', text: 'text-purple-600', light: 'bg-purple-50', dot: 'bg-purple-400', hoverBg: 'hover:bg-purple-50' },
  pink:   { bg: 'bg-pink-600',   text: 'text-pink-600',   light: 'bg-pink-50',   dot: 'bg-pink-400',   hoverBg: 'hover:bg-pink-50'   },
};

/* ─── STATIC COVERAGE MAP DATA ─── 
   Sub-topics with hrefs are clickable links.
   This is the master editorial map of ObjectWire coverage.
*/
const topicTrees: TopicTree[] = [
  {
    id: 'tech',
    name: 'Technology',
    icon: '💻',
    color: 'blue',
    href: '/technology',
    branches: [
      {
        name: 'Big Tech',
        items: [
          { name: 'Google', href: '/google', sub: [
            { name: 'Waymo', href: '/google/waymo' },
            { name: 'Agentic Vision', href: '/google' },
            { name: 'Gemini 3 Flash', href: '/google' },
          ]},
          { name: 'Apple', href: '/apple', sub: [
            { name: 'iPhone 18', href: '/apple' },
            { name: 'Google Gemini Partnership', href: '/apple' },
          ]},
          { name: 'Microsoft', href: '/microsoft', sub: [] },
          { name: 'Nvidia', href: '/nvidia', sub: [] },
          { name: 'Intel', href: '/intel', sub: [
            { name: '18A Manufacturing', href: '/intel' },
          ]},
        ],
      },
      {
        name: 'AI & Software',
        items: [
          { name: 'OpenAI', href: '/open-ai', sub: [
            { name: 'AI Insurance Apps', href: '/open-ai' },
          ]},
          { name: 'SaaS', href: '/saas', sub: [
            { name: 'Cognyte', href: '/saas/cognyte' },
            { name: 'HashiCorp', href: '/saas/hashicorp' },
            { name: 'SailPoint', href: '/saas/sailpoint' },
            { name: 'Gatik', href: '/saas/gatik' },
            { name: 'Apptronik', href: '/saas/apptronik' },
          ]},
          { name: 'Crypto', href: '/crypto', sub: [
            { name: 'TXC Stablecoin', href: '/crypto' },
          ]},
          { name: 'Comparisons', href: '/define', sub: [
            { name: 'NestJS vs Next.js', href: '/define/nestjs-vs-nextjs' },
            { name: 'Hedera vs Solana', href: '/define/hedera-vs-solana' },
            { name: 'HTTP vs REST', href: '/define/http-vs-rest' },
          ]},
        ],
      },
      {
        name: 'Social Platforms',
        items: [
          { name: 'Meta', href: '/social/meta', sub: [
            { name: 'TPU Chip War', href: '/social/meta' },
          ]},
          { name: 'TikTok', href: '/social/tiktok', sub: [
            { name: 'USDS Joint Venture', href: '/social/tiktok' },
          ]},
          { name: 'X / Twitter', href: '/social/x-twitter', sub: [] },
          { name: 'GitHub', href: '/github', sub: [] },
        ],
      },
    ],
  },
  {
    id: 'news',
    name: 'News & Investigations',
    icon: '📰',
    color: 'red',
    href: '/news',
    branches: [
      {
        name: 'Breaking News',
        items: [
          { name: 'Latest', href: '/news', sub: [
            { name: 'xAI Layoffs', href: '/news/xai-layoffs' },
            { name: 'DoorDash SNAP EBT', href: '/news' },
          ]},
          { name: 'Texas', href: '/news/texas', sub: [
            { name: 'ASML Hutto', href: '/news/texas' },
            { name: 'Austin Tech Hub', href: '/news/texas/austin-tech-hub-decline' },
            { name: 'Pegatron Factory', href: '/news/texas' },
          ]},
          { name: 'World', href: '/news/world', sub: [
            { name: 'China-Japan Standoff', href: '/news/world' },
          ]},
          { name: 'Canada', href: '/news/canada', sub: [
            { name: 'Political Crisis', href: '/news/canada' },
          ]},
        ],
      },
      {
        name: 'Investigations',
        items: [
          { name: 'Minnesota', href: '/investigations/minesoda', sub: [
            { name: 'Ilhan Omar', href: '/investigations/minesoda' },
            { name: 'Nick Shirley Pt. 2', href: '/investigations/minesoda' },
          ]},
          { name: 'NGOs', href: '/ngos', sub: [
            { name: 'Get Free Together', href: '/ngos/getfreetogether' },
          ]},
          { name: 'Missing Persons', href: '/missing-persons', sub: [] },
        ],
      },
    ],
  },
  {
    id: 'finance',
    name: 'Finance & Business',
    icon: '💰',
    color: 'green',
    href: '/finance',
    branches: [
      {
        name: 'Markets & Analysis',
        items: [
          { name: 'Finance Hub', href: '/finance', sub: [
            { name: 'Tokenization Revolution', href: '/finance' },
            { name: 'CME Rules the World', href: '/finance' },
            { name: 'NASDAQ 24/7 Trading', href: '/finance' },
          ]},
          { name: 'Sovereign Debt', href: '/finance/articles/the-2026-sovereign-squeeze-ai-nuclear-age', sub: [] },
          { name: 'Deep Sea Mining', href: '/finance/articles/the-trillion-dollar-treasure-trove-in-the-deep-sea', sub: [] },
        ],
      },
      {
        name: 'Industry',
        items: [
          { name: 'Elon Musk', href: '/elon-musk', sub: [
            { name: 'SpaceX', href: '/elon-musk' },
            { name: 'AI Sun Shading', href: '/elon-musk' },
          ]},
          { name: 'Bank of America', href: '/bank-of-america', sub: [] },
          { name: 'General Motors', href: '/saas/general-motors', sub: [] },
          { name: 'Starlink', href: '/finance/articles/starlink-economic-analysis', sub: [] },
        ],
      },
    ],
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: '🏆',
    color: 'indigo',
    href: '/winter-olympics',
    branches: [
      {
        name: 'Winter Olympics 2026',
        items: [
          { name: 'Olympics Hub', href: '/winter-olympics', sub: [
            { name: 'Medal Count', href: '/winter-olympics' },
            { name: 'Daily Results', href: '/winter-olympics' },
          ]},
          { name: 'Team USA', href: '/winter-olympics/usa/team-usa-wins-five-medals-across-five-sports', sub: [
            { name: 'Breezy Johnson 🥇', href: '/winter-olympics/usa/breezy-johnson' },
            { name: 'Ilia Malinin ⛸️', href: '/winter-olympics/usa/ilia-malinin' },
            { name: 'Skiing Silvers', href: '/winter-olympics' },
          ]},
          { name: 'Athletes', href: '/winter-olympics/mikaela-shiffrin', sub: [
            { name: 'Chloe Kim', href: '/winter-olympics/chloe-kim-historic-three-peat-bid' },
            { name: 'Eileen Gu 🇨🇳', href: '/winter-olympics/china/eileen-gu' },
            { name: 'Klæbo 🇳🇴', href: '/winter-olympics/norway/johannes-klaebo' },
            { name: 'Lindsey Vonn', href: '/winter-olympics/lindsey-vonn' },
          ]},
          { name: 'Historic Runs', href: '/winter-olympics/swiss-skier-von-allmen-wins-third-gold', sub: [
            { name: 'Italy First Gold', href: '/winter-olympics' },
          ]},
        ],
      },
      {
        name: 'FIFA World Cup',
        items: [
          { name: 'World Cup', href: '/world-cup', sub: [
            { name: 'Boycott Controversy', href: '/world-cup' },
            { name: 'ICE Immigration', href: '/world-cup' },
          ]},
        ],
      },
    ],
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: '🎬',
    color: 'purple',
    href: '/entertainment',
    branches: [
      {
        name: 'Studios & Streaming',
        items: [
          { name: 'Disney', href: '/disney', sub: [
            { name: 'Films in Fortnite 🎮', href: '/disney/news/incoming-ceo-floats-premiering-films-in-fortnite' },
            { name: "Josh D'Amaro CEO", href: '/disney/josh-damaro' },
          ]},
          { name: 'Netflix', href: '/entertainment/netflix', sub: [] },
          { name: 'HBO Max', href: '/entertainment/hbomax', sub: [] },
          { name: 'James Cameron', href: '/entertainment/james-cameron', sub: [] },
        ],
      },
      {
        name: 'YouTube & Creators',
        items: [
          { name: 'Sidemen', href: '/youtube/sidemen', sub: [
            { name: 'KSI', href: '/youtube/sidemen/ksi' },
            { name: 'Miniminter', href: '/youtube/sidemen/miniminter' },
            { name: 'Behzinga', href: '/youtube/sidemen/behzinga' },
            { name: 'Vikkstar', href: '/youtube/sidemen/vikkstar' },
            { name: 'TBJZL', href: '/youtube/sidemen/tbjzl' },
            { name: 'W2S', href: '/youtube/sidemen/w2s' },
            { name: 'Zerkaa', href: '/youtube/sidemen/zerkaa' },
          ]},
          { name: 'MrBeast', href: '/beastgames', sub: [
            { name: 'Season 2 Casting', href: '/beastgames/season-2' },
          ]},
          { name: 'Influencers', href: '/influencer', sub: [
            { name: 'Iman Gadzhi', href: '/influencer/iman-gadzhi' },
            { name: 'SteveWillDoIt', href: '/influencer/stevewilldoit' },
            { name: 'Serge Gatari', href: '/influencer/serge-gatari' },
          ]},
          { name: 'Podcasts', href: '/podcasts', sub: [
            { name: 'All-In Podcast', href: '/podcasts/all-in-podcast' },
            { name: 'Joe Rogan', href: '/podcasts/joe-rogan' },
          ]},
        ],
      },
      {
        name: 'Video Games',
        items: [
          { name: 'Nintendo', href: '/video-games/nintendo', sub: [
            { name: 'Google Genie AI', href: '/video-games/nintendo' },
          ]},
          { name: 'Upcoming', href: '/video-games', sub: [
            { name: '007 First Light', href: '/video-games/007-first-light' },
            { name: "Marvel's Wolverine", href: '/video-games/marvels-wolverine' },
            { name: 'RE: Requiem', href: '/video-games/resident-evil-requiem' },
          ]},
          { name: 'MHA', href: '/video-games/mha', sub: [
            { name: "All's Justice", href: '/video-games/mha' },
            { name: 'Ultra Rumble S15', href: '/video-games/mha' },
          ]},
          { name: 'Top 10 2026', href: '/video-games/top-10-anime-games-2026', sub: [] },
        ],
      },
    ],
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle & Culture',
    icon: '👕',
    color: 'pink',
    href: '/clothing',
    branches: [
      {
        name: 'Fashion & Brands',
        items: [
          { name: 'SKIMS', href: '/clothing/skims', sub: [
            { name: 'CEO', href: '/clothing/skims/ceo' },
            { name: 'Creative Director', href: '/clothing/skims/creative-director' },
          ]},
          { name: 'Gymshark', href: '/clothing/gymshark', sub: [] },
          { name: 'New Balance', href: '/clothing/new-balance', sub: [] },
          { name: 'Young LA', href: '/clothing/young-la', sub: [] },
          { name: 'Vans', href: '/clothing/vans', sub: [] },
        ],
      },
      {
        name: 'Science & Space',
        items: [
          { name: 'NASA', href: '/nasa', sub: [
            { name: 'Europa Ice Shell Discovery', href: '/nasa/europa/juno-ice-shell-18-miles-thick' },
          ]},
          { name: 'Orbital AI', href: '/technology/articles/dawn-of-orbital-ai', sub: [] },
        ],
      },
    ],
  },
];

/* ─── DYNAMIC LATEST ARTICLES SECTION ─── */
async function LatestArticlesSection() {
  const allArticles = await scanAllContent();
  const latest = allArticles.slice(0, 10);
  const categorized = groupByCategory(allArticles);
  const totalCount = allArticles.length;
  const categoryCount = Object.keys(categorized).length;

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-6 border-b-2 border-black pb-2">
        <div>
          <h2 className="text-xs font-black tracking-widest uppercase">Latest Articles</h2>
          <p className="text-[10px] text-gray-500 mt-0.5">{totalCount} articles across {categoryCount} categories</p>
        </div>
        <Link href="/news" className="text-xs font-bold text-blue-600 hover:underline">View All →</Link>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {latest.map((article, i) => (
          <Link
            key={article.slug}
            href={article.slug}
            className="group flex items-start gap-3 py-3 px-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-200"
          >
            <span className="text-xl font-black text-gray-200 leading-none mt-0.5 w-7 shrink-0 text-right">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400">
                {article.category}
              </span>
              <h3 className="text-sm font-bold leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">{article.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── MAIN COVERAGE MAP COMPONENT ─── */
export default async function CoverageMap({ showLatest = true }: { showLatest?: boolean }) {
  return (
    <section className="mb-12">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="h-px w-16 bg-black" />
          <h2 className="text-xs font-black tracking-[.3em] uppercase">Coverage Map</h2>
          <div className="h-px w-16 bg-black" />
        </div>
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          Explore ObjectWire&apos;s full coverage across {topicTrees.length} major beats and 100+ topics. Click any node to dive in.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {topicTrees.map((tree) => {
          const c = colorMap[tree.color];
          return (
            <div key={tree.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Tree header */}
              <Link href={tree.href} className={`flex items-center gap-3 px-5 py-4 ${c.bg} text-white group`}>
                <span className="text-2xl">{tree.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-black tracking-wide">{tree.name}</h3>
                </div>
                <svg className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Branches */}
              <div className="divide-y divide-gray-100">
                {tree.branches.map((branch) => (
                  <div key={branch.name} className="px-5 py-3">
                    <p className={`text-[10px] font-black tracking-widest uppercase ${c.text} mb-2`}>
                      {branch.name}
                    </p>
                    <ul className="space-y-1.5">
                      {branch.items.map((item) => (
                        <li key={item.name}>
                          <div className="flex items-start gap-2">
                            <div className="flex flex-col items-center mt-1.5 shrink-0">
                              <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                              {item.sub.length > 0 && (
                                <div className={`w-px flex-1 min-h-[12px] ${c.dot} opacity-30 mt-0.5`} />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <Link href={item.href} className={`text-sm font-semibold hover:underline underline-offset-2 ${c.hoverBg} rounded px-1 -mx-1 transition-colors`}>
                                {item.name}
                              </Link>
                              {/* Clickable sub-topics */}
                              {item.sub.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mt-1 ml-1">
                                  {item.sub.map((s) => (
                                    <Link
                                      key={s.name}
                                      href={s.href}
                                      className={`text-[10px] ${c.light} ${c.text} px-2 py-0.5 rounded-full font-medium hover:opacity-80 transition-opacity`}
                                    >
                                      {s.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic latest articles - auto-updates with new content */}
      {showLatest && (
        <LatestArticlesSection />
      )}
    </section>
  );
}
