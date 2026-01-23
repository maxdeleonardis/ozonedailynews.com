'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase, isSupabaseConfigured } from './supabase';

export interface ArticleBlock {
  id: string;
  type: 'paragraph' | 'heading' | 'image' | 'summary' | 'stat-grid' | 'key-mechanisms' | 'sources' | 'callout';
  content: string;
  level?: number;
  items?: { num: string; title: string; desc: string }[];
  stats?: { value: string; label: string; color: string }[];
  sources?: string[];
}

export interface Article {
  id: string; // UUID
  title: string;
  slug: string;
  excerpt: string;
  content: ArticleBlock[];
  category: string;
  status: 'draft' | 'published';
  author: string;
  created_at: string;
  updated_at: string;
  published_at?: string | null;
  featured?: boolean;
  image_url?: string | null;
  view_count?: number;
}

interface ArticlesContextType {
  articles: Article[];
  addArticle: (article: Article) => void;
  updateArticle: (id: string, article: Partial<Article>) => void;
  deleteArticle: (id: string) => void;
  getArticleBySlug: (slug: string) => Article | undefined;
  getArticleById: (id: string) => Article | undefined;
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

// Sample articles for when Supabase is not yet configured or empty
const sampleArticles: Article[] = [
  {
    id: '6943a789-7740-4742-97c7-21ce01a1aa62',
    title: "2025 Nissan Z vs Toyota GR Supra: Full Comparison, Specs & Performance",
    slug: '2025-nissan-z-vs-toyota-gr-supra-comparison',
    excerpt: 'This head-to-head breakdown covers engine specs, design, interior, technology, pricing, and real-world driving dynamics to help you decide between the 2025 Nissan Z and Toyota GR Supra.',
    content: [
      { id: '1', type: 'paragraph', content: 'In-depth comparison of two legendary sports cars.' }
    ],
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    created_at: '2025-11-07T00:00:00Z',
    updated_at: '2025-11-07T00:00:00Z',
    featured: true
  },
  {
    id: 'e45ded79-7f67-4241-acfa-75ebc2ef0e09',
    title: "Cognyte Software Ltd (CGNT): Investigative Analytics Platform",
    slug: 'cognyte-software-ltd-cgnt',
    excerpt: 'Cognyte develops advanced software solutions for investigative analytics, focusing on data fusion, analysis, and visualization to deliver actionable intelligence.',
    content: [
      { id: '1', type: 'paragraph', content: 'Deep dive into Cognyte\'s investigative analytics platform.' }
    ],
    category: 'Business',
    status: 'published',
    author: 'ObjectWire Team',
    created_at: '2025-08-26T00:00:00Z',
    updated_at: '2025-08-26T00:00:00Z',
    featured: false
  },
  {
    id: '8f41519b-43f9-4b6e-b5d2-16c6fe80fa21',
    title: "Blitzy: AI-Powered Autonomous Software Development",
    slug: 'blitzy-ai-powered-autonomous-software-development',
    excerpt: 'Harvard Innovation Lab startup Blitzy promises autonomous software development through AI agents that understand requirements and generate production-ready code.',
    content: [
      { id: '1', type: 'paragraph', content: 'Exploring the future of AI-powered software development.' }
    ],
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    created_at: '2025-11-15T00:00:00Z',
    updated_at: '2025-11-15T00:00:00Z',
    featured: true
  },
  {
    id: '4424d528-bf0b-4801-959e-11aa2d846ce4',
    title: "ChatGPT Staffers to Offer Secondary Sale at $500B Valuation",
    slug: 'chatgpt-staffers-to-offer-secondary-sale-at-500b-valuation',
    excerpt: 'OpenAI employees have opportunity to sell shares at historic $500 billion valuation, making it one of the most valuable private companies globally.',
    content: [
      { id: '1', type: 'paragraph', content: 'Analysis of OpenAI\'s unprecedented valuation milestone.' }
    ],
    category: 'Business',
    status: 'published',
    author: 'ObjectWire Team',
    created_at: '2025-12-15T00:00:00Z',
    updated_at: '2025-12-15T00:00:00Z',
    featured: true
  },
  {
    id: 'ae035b9f-23cf-489a-9fbb-c681fc7a2a32',
    title: "GitHub Universe: October 28th and 29th in San Francisco",
    slug: 'github-universe-october-28th-and-29th-san-francisco',
    excerpt: 'GitHub\'s flagship developer conference returns to San Francisco with announcements on AI-powered development tools, Copilot enhancements, and the future of collaborative coding.',
    content: [
      { id: '1', type: 'paragraph', content: 'Coverage of GitHub\'s annual developer conference.' }
    ],
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    created_at: '2025-10-28T00:00:00Z',
    updated_at: '2025-10-28T00:00:00Z',
    featured: false
  },
  {
    id: '65aebe09-ad2a-4945-8f06-4288dd3a116b',
    title: "Alphabet or NVIDIA: Here's Who I Think Will Win the AI Chip War",
    slug: 'alphabet-or-nvidia-here-s-who-i-think-will-win-the-ai-chip-war',
    excerpt: 'Analysis of the high-stakes competition between Alphabet\'s TPUs and NVIDIA\'s GPUs for dominance in the AI computing market.',
    content: [
      { id: '1', type: 'paragraph', content: 'Strategic analysis of the AI chip market competition.' }
    ],
    category: 'Technology',
    status: 'published',
    author: 'ObjectWire Team',
    created_at: '2025-10-05T00:00:00Z',
    updated_at: '2025-10-05T00:00:00Z',
    featured: false
  }
];

export function ArticlesProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    if (!isSupabaseConfigured) {
      console.log('ℹ️  Supabase not configured - using sample data');
      setArticles(sampleArticles);
      setLoading(false);
      return;
    }

    if (!supabase) {
      console.warn('⚠️  Supabase not configured - using sample data');
      setArticles(sampleArticles);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('updated_at', { ascending: false });

      if (!error && data && data.length > 0) {
        setArticles(data as Article[]);
      } else {
        console.log('ℹ️  No articles in Supabase - using sample data');
        setArticles(sampleArticles);
      }
    } catch (err) {
      console.error('Failed to load articles:', err);
      setArticles(sampleArticles);
    } finally {
      setLoading(false);
    }
  };

  const addArticle = (article: Article) => {
    setArticles(prev => [article, ...prev]);
  };

  const updateArticle = (id: string, updates: Partial<Article>) => {
    setArticles(prev => prev.map(a => a.id === id ? { ...a, ...updates } : a));
  };

  const deleteArticle = (id: string) => {
    setArticles(prev => prev.filter(a => a.id !== id));
  };

  const getArticleBySlug = (slug: string) => {
    return articles.find(a => a.slug === slug);
  };

  const getArticleById = (id: string) => {
    return articles.find(a => a.id === id);
  };

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        addArticle,
        updateArticle,
        deleteArticle,
        getArticleBySlug,
        getArticleById,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticles() {
  const context = useContext(ArticlesContext);
  if (context === undefined) {
    throw new Error('useArticles must be used within an ArticlesProvider');
  }
  return context;
}
