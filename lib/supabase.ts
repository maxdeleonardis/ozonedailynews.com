import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate Supabase URL exists and is reachable
const isValidSupabaseUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  // Check if it's a placeholder or invalid URL
  if (url === 'https://placeholder.supabase.co') return false;
  // Check if it follows supabase.co pattern
  return url.includes('.supabase.co') && url.startsWith('https://');
};

const hasValidConfig = isValidSupabaseUrl(supabaseUrl) && !!supabaseKey;

// Initialize Supabase client with fallback for build time
// Using a dummy client to prevent runtime errors when Supabase is not configured
export const supabase = hasValidConfig
  ? createClient(supabaseUrl!, supabaseKey!, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
      global: {
        headers: {
          'x-application-name': 'objectwire-frontend',
        },
      },
    })
  : createClient('https://placeholder.supabase.co', 'placeholder-key');

// Export flag to check if Supabase is properly configured
export const isSupabaseConfigured = hasValidConfig;

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
