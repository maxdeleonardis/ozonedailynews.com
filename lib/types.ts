export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    email?: string;
  };
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  readingTime: number;
  metadata?: {
    sources?: string[];
    verificationLevel?: 'high' | 'medium' | 'low';
    strategicRelevance?: number;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  color?: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
}

// Dashboard Types
export interface DashboardMetrics {
  totalUsers: number;
  activeMarkets: number;
  volume24h: number;
  totalArticles: number;
  publishedArticles: number;
  draftArticles: number;
  totalCategories: number;
  weeklyVolume: ChartDataPoint[];
  recentActivity: ActivityItem[];
  topCategories: CategoryStat[];
}

export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface ActivityItem {
  id: string;
  type: 'article' | 'market' | 'user' | 'system';
  title: string;
  description: string;
  timestamp: string;
  user?: string;
  metadata?: Record<string, any>;
}

export interface CategoryStat {
  id: string;
  name: string;
  count: number;
  percentage: number;
  color?: string;
}

export interface DashboardFilters {
  dateRange?: {
    start: Date;
    end: Date;
  };
  category?: string;
  status?: 'published' | 'draft' | 'archived';
  marketType?: string;
}