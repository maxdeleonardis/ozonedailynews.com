import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Type definitions for your tables
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  featured: boolean;
  published_at: string;
  created_at: string;
  image_url?: string;
  view_count: number;
}

export interface Subscriber {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
  preferences: {
    categories: string[];
    frequency: 'daily' | 'weekly' | 'never';
  };
}

export interface UserPreference {
  id: string;
  user_id: string;
  read_articles: string[];
  saved_articles: string[];
  preferred_categories: string[];
  dark_mode: boolean;
}
