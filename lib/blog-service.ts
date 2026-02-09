// Placeholder for blog service
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  publishedAt: string;
  category?: string;
}

export interface BlogPostFull extends BlogPost {
  author?: string;
  excerpt?: string;
  tags?: string[];
  status?: 'published' | 'draft';
  read_time?: number;
  blocks?: any[];
  created_at?: string;
  featured_image?: string;
  sidebar_blocks?: any[];
  layout_columns?: number;
  meta_title?: string;
  meta_description?: string;
  published_at?: string;
  updated_at?: string;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return [];
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  return [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostFull | null> {
  return null;
}

export async function getBlogPostById(id: string): Promise<BlogPostFull | null> {
  return null;
}

export async function createBlogPost(post: Partial<BlogPostFull>): Promise<BlogPost> {
  return {
    id: '1',
    title: post.title || '',
    slug: post.slug || '',
    content: post.content || '',
    publishedAt: new Date().toISOString(),
  };
}

export async function updateBlogPost(id: string, post: Partial<BlogPostFull>): Promise<BlogPost> {
  return {
    id,
    title: post.title || '',
    slug: post.slug || '',
    content: post.content || '',
    publishedAt: post.publishedAt || new Date().toISOString(),
  };
}

export async function deleteBlogPost(id: string): Promise<void> {
  console.log('Delete post:', id);
}

export function generateSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function calculateReadTime(content: string | any[]): number {
  const wordsPerMinute = 200;
  let text = '';
  
  if (typeof content === 'string') {
    text = content;
  } else if (Array.isArray(content)) {
    // Extract text from blocks
    text = content.map(block => block.content || '').join(' ');
  }
  
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
