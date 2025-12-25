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