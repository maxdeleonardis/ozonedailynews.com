'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ArticleBlock {
  id: string;
  type: 'paragraph' | 'heading' | 'summary' | 'stat-grid' | 'key-mechanisms' | 'sources' | 'callout';
  content: string;
  level?: number; // for headings
  items?: { num: string; title: string; desc: string }[]; // for key-mechanisms
  stats?: { value: string; label: string; color: string }[]; // for stat-grid
  sources?: string[]; // for sources block
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

// Default article with our Minnesota fraud investigation
const defaultArticles: Article[] = [
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
