'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ArticleBlock {
  id: string;
  type: 'paragraph' | 'heading' | 'summary' | 'stat-grid' | 'key-mechanisms' | 'sources' | 'callout' | 'quote' | 'list' | 'image' | 'video' | 'timeline' | 'comparison' | 'twitter' | 'audio' | 'gallery' | 'instagram' | 'tiktok' | 'map' | 'code' | 'data-table' | 'chart' | 'poll' | 'accordion' | 'divider' | 'author-bio' | 'related-articles' | 'newsletter' | 'pros-cons' | 'file-download' | 'button' | 'numbered-list';
  content: string;
  level?: number; // for headings
  items?: { num: string; title: string; desc: string }[]; // for key-mechanisms, timeline, comparison, accordion, pros-cons
  stats?: { value: string; label: string; color: string }[]; // for stat-grid
  sources?: string[]; // for sources block
  caption?: string; // for image/video
  credit?: string; // for image attribution
  language?: string; // for code block
  tableData?: { headers: string[]; rows: string[][] }; // for data-table
  chartType?: 'bar' | 'line' | 'pie'; // for chart
  pollOptions?: { text: string; votes: number }[]; // for poll
  galleryImages?: { url: string; caption: string }[]; // for gallery
  authorName?: string; // for author-bio
  authorImage?: string; // for author-bio
  authorBio?: string; // for author-bio
  relatedLinks?: { title: string; url: string; image?: string }[]; // for related-articles
  buttonUrl?: string; // for button
  buttonStyle?: 'primary' | 'secondary' | 'outline'; // for button
  fileUrl?: string; // for file-download
  fileName?: string; // for file-download
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  blocks: ArticleBlock[];
  category: string;
  status: 'draft' | 'published';
  author: string;
  createdAt: string;
  updatedAt: string;
  readTime: string;
}

interface ArticlesContextType {
  articles: Article[];
  addArticle: (article: Article) => void;
  updateArticle: (id: string, article: Partial<Article>) => void;
  deleteArticle: (id: string) => void;
  getArticleBySlug: (slug: string) => Article | undefined;
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

// Default articles including hard-coded blog posts
const defaultArticles: Article[] = [
  // Latest articles
  {
    id: '2',
    title: "2025 Nissan Z vs Toyota GR Supra: Full Comparison, Specs & Performance",
    slug: '2025-nissan-z-vs-toyota-gr-supra-comparison',
    excerpt: 'This head-to-head breakdown covers engine specs, design, interior, technology, pricing, and real-world driving dynamics to help you decide between the 2025 Nissan Z and Toyota GR Supra.',
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-11-07',
    updatedAt: '2025-11-07',
    readTime: '10 min read',
    blocks: []
  },
  {
    id: '3',
    title: "Cognyte Software Ltd (CGNT): Investigative Analytics Platform",
    slug: 'cognyte-software-ltd-cgnt',
    excerpt: 'Cognyte develops advanced software solutions for investigative analytics, focusing on data fusion, analysis, and visualization to deliver actionable intelligence.',
    category: 'Business',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-08-26',
    updatedAt: '2025-08-26',
    readTime: '4 min read',
    blocks: []
  },
  {
    id: '4',
    title: "Here's Another Thing to Worry About: AI Scanning Your Rental Car for Damage",
    slug: 'here-s-another-thing-to-worry-about',
    excerpt: 'The rental car industry is adopting artificial intelligence (AI) to inspect vehicles and charge customers for damages. Here\'s what renters should watch out for.',
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-07-07',
    updatedAt: '2025-07-07',
    readTime: '5 min read',
    blocks: []
  },
  {
    id: '5',
    title: "$2.5 Billion Federal Reserve Headquarters Renovation Sparks Political Controversy",
    slug: 'jerome-powell-federal-reserve-headquarters-renovation',
    excerpt: '$2.5 Billion Headquarters Renovation of FED | Trump Disproves - Examining the debate over the Federal Reserve\'s massive renovation project.',
    category: 'Politics',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-07-26',
    updatedAt: '2025-07-26',
    readTime: '5 min read',
    blocks: []
  },
  {
    id: '6',
    title: "Blitzy: AI-Powered Autonomous Software Development",
    slug: 'blitzy-ai-powered-autonomous-software-development',
    excerpt: 'Harvard Innovation Lab startup Blitzy promises autonomous software development through AI agents that understand requirements and generate production-ready code.',
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-11-15',
    updatedAt: '2025-11-15',
    readTime: '6 min read',
    blocks: []
  },
  {
    id: '7',
    title: "OANDA or Interactive Brokers: Which Is Better for Forex Trading in the USA?",
    slug: 'oanda-or-interactive-brokers-forex-trading-usa',
    excerpt: 'Comparing two leading forex brokers for U.S. traders: OANDA\'s user-friendly platform vs Interactive Brokers\' institutional-grade tools and pricing.',
    category: 'Business',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-12-10',
    updatedAt: '2025-12-10',
    readTime: '7 min read',
    blocks: []
  },
  {
    id: '8',
    title: "ChatGPT Staffers to Offer Secondary Sale at $500B Valuation",
    slug: 'chatgpt-staffers-to-offer-secondary-sale-at-500b-valuation',
    excerpt: 'OpenAI employees have opportunity to sell shares at historic $500 billion valuation, making it one of the most valuable private companies globally.',
    category: 'Business',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-12-15',
    updatedAt: '2025-12-15',
    readTime: '5 min read',
    blocks: []
  },
  {
    id: '9',
    title: "NYC's Ranked Choice Voting System Faces Scrutiny",
    slug: 'nycs-ranked-choice-voting-system-faces-scrutiny',
    excerpt: 'New York City\'s ranked choice voting experiment faces criticism over complexity, delayed results, and questions about whether it achieves its democratic goals.',
    category: 'Politics',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-11-20',
    updatedAt: '2025-11-20',
    readTime: '6 min read',
    blocks: []
  },
  {
    id: '10',
    title: "GitHub Universe: October 28th and 29th in San Francisco",
    slug: 'github-universe-october-28th-and-29th-san-francisco',
    excerpt: 'GitHub\'s flagship developer conference returns to San Francisco with announcements on AI-powered development tools, Copilot enhancements, and the future of collaborative coding.',
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-10-28',
    updatedAt: '2025-10-28',
    readTime: '5 min read',
    blocks: []
  },
  {
    id: '11',
    title: "The Trillion-Dollar Treasure Trove in the Deep Sea",
    slug: 'the-trillion-dollar-treasure-trove-in-the-deep-sea',
    excerpt: 'Polymetallic nodules covering vast areas of the ocean floor contain critical minerals worth trillions, sparking debate over deep-sea mining.',
    category: 'Business',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-09-12',
    updatedAt: '2025-09-12',
    readTime: '7 min read',
    blocks: []
  },
  {
    id: '12',
    title: "Render vs Vercel for Free Start-Up App Deployment",
    slug: 'render-vs-vercel-for-free-start-up-app-deployment',
    excerpt: 'A comprehensive comparison of Render and Vercel for startups choosing their deployment platform: pricing, features, and which one fits your stack.',
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-09-18',
    updatedAt: '2025-09-18',
    readTime: '6 min read',
    blocks: []
  },
  {
    id: '13',
    title: "Alphabet or NVIDIA: Here's Who I Think Will Win the AI Chip War",
    slug: 'alphabet-or-nvidia-here-s-who-i-think-will-win-the-ai-chip-war',
    excerpt: 'Analysis of the high-stakes competition between Alphabet\'s TPUs and NVIDIA\'s GPUs for dominance in the AI computing market.',
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-10-05',
    updatedAt: '2025-10-05',
    readTime: '8 min read',
    blocks: []
  },
  {
    id: '14',
    title: "NeuroPhos: Austin's AI Hardware Startup Achieving 300 Tops/W",
    slug: 'neurophos-ai-hardware-startup',
    excerpt: 'Austin-based startup NeuroPhos develops photonic AI accelerators achieving 300 Tops/W efficiency, potentially revolutionizing energy consumption in AI datacenters.',
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-10-22',
    updatedAt: '2025-10-22',
    readTime: '6 min read',
    blocks: []
  },
  {
    id: '15',
    title: "Comet AI Web Browser vs Atlas by ChatGPT",
    slug: 'comet-ai-web-browser-vs-atlas-by-chatgpt',
    excerpt: 'Comparing two AI-native browsers: Comet\'s privacy-focused approach versus ChatGPT\'s Atlas integration for seamless AI-assisted browsing.',
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-11-01',
    updatedAt: '2025-11-01',
    readTime: '5 min read',
    blocks: []
  },
  {
    id: '16',
    title: "Non-Degree Studies at University of Texas Austin",
    slug: 'non-degree-studies-at-university-of-texas-austin',
    excerpt: 'Comprehensive guide to UT Austin\'s non-degree programs, certificate courses, and continuing education opportunities for professionals and lifelong learners.',
    category: 'Education',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-09-05',
    updatedAt: '2025-09-05',
    readTime: '7 min read',
    blocks: []
  },
  {
    id: '17',
    title: "Prophet Ebo Noah's Flood Prophecy: Arrest and Controversy",
    slug: 'prophet-ebo-noah-s-flood-prophecy',
    excerpt: 'South African prophet Ebo Noah, known for his flood prophecies, faces arrest and criticism for false predictions that caused widespread panic.',
    category: 'News',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-08-15',
    updatedAt: '2025-08-15',
    readTime: '6 min read',
    blocks: []
  },
  {
    id: '18',
    title: "Sam Altman Visits Hedera Team: What It Means for Enterprise Blockchain",
    slug: 'sam-altman-visits-hedera-team',
    excerpt: 'OpenAI CEO Sam Altman\'s meeting with Hedera leadership signals potential integration of AI and enterprise blockchain technologies.',
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-10-12',
    updatedAt: '2025-10-12',
    readTime: '5 min read',
    blocks: []
  },
  {
    id: '19',
    title: "Introducing BitChat: Jack Dorsey's Decentralized Messaging Platform",
    slug: 'introducing-bitchat-jack-dorsey',
    excerpt: 'Twitter co-founder Jack Dorsey unveils BitChat, a Bitcoin-native encrypted messaging protocol built on decentralized principles.',
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-09-28',
    updatedAt: '2025-09-28',
    readTime: '6 min read',
    blocks: []
  },
  {
    id: '20',
    title: "Alphabet Inc: The History of Google",
    slug: 'alphabet-inc-the-history-of-google',
    excerpt: 'From a Stanford dorm room to a $1.5 trillion tech empire: the complete history of Google\'s transformation into Alphabet Inc.',
    category: 'Business',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-08-20',
    updatedAt: '2025-08-20',
    readTime: '10 min read',
    blocks: []
  },
  {
    id: '21',
    title: "Luxury Watch Heists at the 2025 U.S. Grand Prix: The Richard Mille Robberies",
    slug: 'luxury-watch-heists-at-the-2025-us-grand-prix-the-richard-mille-robberies',
    excerpt: 'Organized crime rings target high-value watches at Formula 1\'s U.S. Grand Prix in Austin, Texas, leading to FBI investigation.',
    category: 'Crime',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-10-27',
    updatedAt: '2025-10-27',
    readTime: '6 min read',
    blocks: []
  },
  {
    id: '22',
    title: "NASDAQ Proposed 24/7 Trading: What It Means for Investors",
    slug: 'nasdaq-proposed-24-7-trading',
    excerpt: 'NASDAQ explores round-the-clock trading to compete with cryptocurrency markets and meet global investor demand.',
    category: 'Business',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-11-05',
    updatedAt: '2025-11-05',
    readTime: '5 min read',
    blocks: []
  },
  {
    id: '23',
    title: "Oh Canada, What Has Happened? Economic Challenges Facing Our Northern Neighbor",
    slug: 'oh-canada-what-has-happened',
    excerpt: 'Analyzing Canada\'s economic struggles including housing affordability crisis, productivity challenges, and brain drain to the United States.',
    category: 'Business',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-09-22',
    updatedAt: '2025-09-22',
    readTime: '8 min read',
    blocks: []
  },
  {
    id: '24',
    title: "Pegatron Opens U.S. Factory in Texas",
    slug: 'pegatron-opens-us-factory-tx',
    excerpt: 'Apple supplier Pegatron establishes manufacturing facility in Texas, bringing thousands of jobs and marking shift in tech supply chain.',
    category: 'Business',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-10-15',
    updatedAt: '2025-10-15',
    readTime: '5 min read',
    blocks: []
  },
  {
    id: '25',
    title: "TXC Stable Coin: Texas' Entry into Digital Currency",
    slug: 'txc-stable-coin',
    excerpt: 'Texas explores state-backed digital currency with TXC stable coin proposal, aiming to compete with federal CBDC initiatives.',
    category: 'Business',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-11-12',
    updatedAt: '2025-11-12',
    readTime: '6 min read',
    blocks: []
  },
  {
    id: '26',
    title: "The Intercept Sues DOGE: Press Freedom vs Government Efficiency",
    slug: 'the-intercept-sues-doge',
    excerpt: 'The Intercept files lawsuit against Department of Government Efficiency over FOIA denials and transparency concerns.',
    category: 'Politics',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-12-05',
    updatedAt: '2025-12-05',
    readTime: '5 min read',
    blocks: []
  },
  {
    id: '27',
    title: "Hedera vs Solana for dApps: Which Blockchain Should You Build On?",
    slug: 'hedera-vs-solana-for-dapps',
    excerpt: 'Comparing Hedera Hashgraph and Solana for decentralized application development: speed, costs, security, and ecosystem.',
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-09-10',
    updatedAt: '2025-09-10',
    readTime: '7 min read',
    blocks: []
  },
  {
    id: '28',
    title: "TopStep Trading Combine: Is It Worth It?",
    slug: 'https-www-topstep-com-trading-combine',
    excerpt: 'Comprehensive review of TopStep\'s funded trader program: costs, rules, success rates, and whether it\'s the right path for aspiring traders.',
    category: 'Business',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-08-30',
    updatedAt: '2025-08-30',
    readTime: '8 min read',
    blocks: []
  },
  {
    id: '29',
    title: "NestJS vs Next.js vs Express: Choosing the Right Node.js Framework",
    slug: 'coding/nestjs-vs-nextjs-express',
    excerpt: 'Deep dive comparison of NestJS, Next.js, and Express for building modern Node.js applications: use cases, performance, and developer experience.',
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-10-08',
    updatedAt: '2025-10-08',
    readTime: '9 min read',
    blocks: []
  },
  {
    id: '30',
    title: "Difference Between HTTP and REST API Servers",
    slug: 'difference-between-http-and-rest-api-servers',
    excerpt: 'Understanding the fundamental differences between HTTP servers and RESTful API design principles for modern web development.',
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-09-15',
    updatedAt: '2025-09-15',
    readTime: '6 min read',
    blocks: []
  },
  {
    id: '31',
    title: "Does DoorDash Take SNAP? Food Delivery and Government Benefits",
    slug: 'does-doordash-take-snap',
    excerpt: 'Exploring the intersection of food delivery apps and SNAP benefits: current policies, pilot programs, and accessibility concerns.',
    category: 'News',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-08-12',
    updatedAt: '2025-08-12',
    readTime: '5 min read',
    blocks: []
  },
  {
    id: '32',
    title: "Who is Serge Gatari? AI Course Review",
    slug: 'who-is-serge-gatari-ai-course-review',
    excerpt: 'Investigating Serge Gatari\'s AI education platform: credentials, course quality, and whether the investment is worth it.',
    category: 'Education',
    status: 'published',
    author: 'ObjectWire Team',
    createdAt: '2025-11-18',
    updatedAt: '2025-11-18',
    readTime: '7 min read',
    blocks: []
  },
  // Original investigation
  {
    id: '1',
    title: "Feeding Our Future: Inside Minnesota's $250 Million Fraud Scheme",
    slug: 'minnesota-feeding-our-future-fraud',
    excerpt: 'A comprehensive investigation into one of the largest pandemic-era fraud cases in U.S. history, involving falsified meal counts, shell companies, and 70 federal indictments.',
    category: 'Investigation',
    status: 'published',
    author: 'ObjectWire Investigations',
    createdAt: '2025-12-30',
    updatedAt: '2025-12-30',
    readTime: '12 min read',
    blocks: [
      {
        id: 'summary-1',
        type: 'summary',
        content: 'The Feeding Our Future case represents one of the largest pandemic-era fraud schemes in United States history. Federal prosecutors have indicted **70 individuals** for allegedly stealing approximately **$250 million** from the U.S. Department of Agriculture\'s Federal Child Nutrition Program. The scheme exploited emergency COVID-19 provisions designed to feed children during school closures.'
      },
      {
        id: 'heading-1',
        type: 'heading',
        content: 'Background: The Federal Child Nutrition Program',
        level: 2
      },
      {
        id: 'para-1',
        type: 'paragraph',
        content: 'The Federal Child Nutrition Program, administered by the **U.S. Department of Agriculture (USDA)**, provides funding for meals served to children through schools and nonprofit organizations. During the COVID-19 pandemic, the program expanded significantly to address food insecurity caused by school closures.'
      },
      {
        id: 'para-2',
        type: 'paragraph',
        content: '**Feeding Our Future**, a Minnesota-based nonprofit, served as a sponsor organization that received federal funds and distributed them to meal sites. Under normal circumstances, sponsors are required to verify that meals are actually served to eligible children and maintain documentation of meal counts.'
      },
      {
        id: 'heading-2',
        type: 'heading',
        content: 'The Scheme: How It Worked',
        level: 2
      },
      {
        id: 'para-3',
        type: 'paragraph',
        content: 'According to federal indictments unsealed in September 2022, the fraud operated through a systematic pattern of false claims and fabricated documentation:'
      },
      {
        id: 'mechanisms-1',
        type: 'key-mechanisms',
        content: '',
        items: [
          { num: '01', title: 'Falsified Meal Counts', desc: 'Sites claimed to serve thousands of meals daily to children who never received food' },
          { num: '02', title: 'Shell Organizations', desc: 'Defendants created multiple entities to multiply fraudulent claims' },
          { num: '03', title: 'Fabricated Documentation', desc: 'Rosters of children, attendance records, and invoices were manufactured' },
          { num: '04', title: 'Money Laundering', desc: 'Funds were moved through multiple accounts and converted to assets' }
        ]
      },
      {
        id: 'heading-3',
        type: 'heading',
        content: 'Key Figures and Indictments',
        level: 2
      },
      {
        id: 'para-4',
        type: 'paragraph',
        content: 'The FBI and USDA Office of Inspector General identified 70 defendants across multiple indictments. Key figures include:'
      },
      {
        id: 'callout-1',
        type: 'callout',
        content: '**Aimee Bock**, founder and executive director of Feeding Our Future, faces charges of federal programs bribery, wire fraud, and money laundering conspiracy. Prosecutors allege she accepted bribes to approve fraudulent site applications and meal claims.'
      },
      {
        id: 'para-5',
        type: 'paragraph',
        content: 'Multiple defendants have pleaded guilty, with several cooperating with federal investigators. Trials for remaining defendants are scheduled throughout 2025 and 2026.'
      },
      {
        id: 'heading-4',
        type: 'heading',
        content: 'Scale of the Fraud',
        level: 2
      },
      {
        id: 'stats-1',
        type: 'stat-grid',
        content: '',
        stats: [
          { value: '$250M', label: 'Alleged Stolen', color: 'red' },
          { value: '70', label: 'Defendants Indicted', color: 'orange' },
          { value: '2020-22', label: 'Period of Fraud', color: 'gray' }
        ]
      },
      {
        id: 'para-6',
        type: 'paragraph',
        content: 'Federal investigators have recovered approximately **$50 million** in assets including real estate, vehicles, and luxury goods. The remaining funds were spent, transferred overseas, or remain unaccounted for.'
      },
      {
        id: 'heading-5',
        type: 'heading',
        content: 'Minnesota Department of Education Response',
        level: 2
      },
      {
        id: 'para-7',
        type: 'paragraph',
        content: 'The **Minnesota Department of Education (MDE)**, which oversees federal nutrition program sponsors in the state, faced criticism for its handling of warnings about Feeding Our Future. Internal documents revealed that MDE staff raised concerns about the organization\'s rapid growth as early as 2020.'
      },
      {
        id: 'para-8',
        type: 'paragraph',
        content: 'In 2021, MDE attempted to suspend Feeding Our Future\'s participation but was blocked by a court order obtained by the nonprofit. The organization continued operating until **FBI raids in January 2022**.'
      },
      {
        id: 'heading-6',
        type: 'heading',
        content: 'Systemic Implications',
        level: 2
      },
      {
        id: 'para-9',
        type: 'paragraph',
        content: 'The Feeding Our Future case has prompted nationwide scrutiny of federal nutrition program oversight. The USDA has implemented additional verification requirements, and Congress has held hearings on pandemic-era program vulnerabilities.'
      },
      {
        id: 'para-10',
        type: 'paragraph',
        content: 'Critics argue that emergency provisions, while necessary during the pandemic, created opportunities for exploitation. Defenders of the programs note that millions of children received legitimate meals during a time of unprecedented need.'
      },
      {
        id: 'sources-1',
        type: 'sources',
        content: '',
        sources: [
          'U.S. Department of Justice, District of Minnesota - Indictment Documents (2022-2025)',
          'FBI Minneapolis Field Office - Press Releases',
          'USDA Office of Inspector General - Audit Reports',
          'Minnesota Department of Education - Public Records',
          'Federal Court Records - PACER Database'
        ]
      }
    ]
  }
];

export function ArticlesProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('objectwire-articles');
    if (stored) {
      try {
        setArticles(JSON.parse(stored));
      } catch {
        setArticles(defaultArticles);
      }
    } else {
      setArticles(defaultArticles);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage when articles change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('objectwire-articles', JSON.stringify(articles));
    }
  }, [articles, isLoaded]);

  const addArticle = (article: Article) => {
    setArticles(prev => [article, ...prev]);
  };

  const updateArticle = (id: string, updates: Partial<Article>) => {
    setArticles(prev => prev.map(a => 
      a.id === id ? { ...a, ...updates, updatedAt: new Date().toISOString().split('T')[0] } : a
    ));
  };

  const deleteArticle = (id: string) => {
    setArticles(prev => prev.filter(a => a.id !== id));
  };

  const getArticleBySlug = (slug: string) => {
    return articles.find(a => a.slug === slug);
  };

  return (
    <ArticlesContext.Provider value={{ articles, addArticle, updateArticle, deleteArticle, getArticleBySlug }}>
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticles() {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticles must be used within ArticlesProvider');
  }
  return context;
}
