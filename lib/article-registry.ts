// Article Registry - Tracks all DynamicNewsArticle files for admin panel
// This allows static article files to be managed via the admin interface

export interface StaticArticleMetadata {
  id: string; // Unique ID
  filePath: string; // Path to the .tsx file
  slug: string; // URL slug
  title: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  publishDate: string; // ISO date string
  updatedDate?: string;
  featuredImage?: string; // Thumbnail for listings
  heroImage?: string; // Hero image in article
  status: 'draft' | 'published';
  readTime?: string;
  // For admin management
  canEdit: boolean; // Whether editable via admin
  createdAt: string;
  updatedAt: string;
}

// Registry of all static articles created with DynamicNewsArticle
export const STATIC_ARTICLES: StaticArticleMetadata[] = [
  {
    id: 'apple-company-profile',
    filePath: '/app/apple/page.tsx',
    slug: 'apple',
    title: 'Apple Inc. - Company Profile',
    excerpt: 'Comprehensive overview of Apple Inc., the American multinational technology company headquartered in Cupertino, California.',
    author: 'ObjectWire Technology Desk',
    category: 'Company Profile',
    tags: ['Apple', 'Company Profile', 'Technology', 'iPhone', 'Tim Cook'],
    publishDate: '2026-01-30T15:00:00Z',
    featuredImage: '/images/apple-company-thumb.jpg',
    status: 'published',
    readTime: '12 min read',
    canEdit: true,
    createdAt: '2026-01-30T15:00:00Z',
    updatedAt: '2026-01-30T15:00:00Z',
  },
  {
    id: 'apple-iphone-18-delay-2027',
    filePath: '/app/apple-iphone-18-delay-2027-foldable/page.tsx',
    slug: 'apple-iphone-18-delay-2027-foldable',
    title: 'Apple Delays iPhone 18 to 2027, Prioritizing Foldable Launch',
    excerpt: 'Apple postpones standard iPhone 18 until early 2027, shifting focus to premium models and its first-ever foldable iPhone launching in H2 2026.',
    author: 'ObjectWire Technology Desk',
    category: 'Technology',
    tags: ['Apple', 'iPhone', 'Foldable', 'Supply Chain'],
    publishDate: '2026-01-30T14:00:00Z',
    featuredImage: '/images/apple-foldable-thumb.jpg',
    heroImage: '/images/apple-foldable-hero.jpg',
    status: 'published',
    readTime: '5 min read',
    canEdit: true,
    createdAt: '2026-01-30T14:00:00Z',
    updatedAt: '2026-01-30T14:00:00Z',
  },
  {
    id: 'minnesota-feeding-our-future-fraud',
    filePath: '/app/minnesota-feeding-our-future-fraud/page.tsx',
    slug: 'minnesota-feeding-our-future-fraud',
    title: 'Feeding Our Future: Inside Minnesota\'s $250 Million Fraud Scheme',
    excerpt: 'A comprehensive investigation into the largest pandemic-era fraud case in U.S. history, involving falsified meal counts, shell companies, and more than 70 federal indictments.',
    author: 'ObjectWire Investigations',
    category: 'Investigation',
    tags: ['Fraud', 'Minnesota', 'Federal Investigation'],
    publishDate: '2025-12-30T10:00:00Z',
    updatedDate: '2026-01-15T12:00:00Z',
    featuredImage: '/images/feeding-our-future-thumb.jpg',
    status: 'published',
    readTime: '15 min read',
    canEdit: true,
    createdAt: '2025-12-30T10:00:00Z',
    updatedAt: '2026-01-15T12:00:00Z',
  },
  {
    id: 'example-investigation',
    filePath: '/app/example-investigation/page.tsx',
    slug: 'example-investigation',
    title: 'Example Investigation: Template Article',
    excerpt: 'This is a template demonstrating the DynamicNewsArticle component.',
    author: 'ObjectWire Investigations',
    category: 'Documentation',
    tags: ['Example', 'Template', 'Documentation'],
    publishDate: '2026-01-30T10:00:00Z',
    featuredImage: '/images/example-thumb.jpg',
    status: 'draft',
    readTime: '8 min read',
    canEdit: true,
    createdAt: '2026-01-30T10:00:00Z',
    updatedAt: '2026-01-30T10:00:00Z',
  },
];

// Helper functions for admin panel integration

/**
 * Get all articles (both database and static)
 */
export function getAllArticles(): StaticArticleMetadata[] {
  return STATIC_ARTICLES;
}

/**
 * Get article by slug
 */
export function getArticleBySlug(slug: string): StaticArticleMetadata | undefined {
  return STATIC_ARTICLES.find(article => article.slug === slug);
}

/**
 * Get article by ID
 */
export function getArticleById(id: string): StaticArticleMetadata | undefined {
  return STATIC_ARTICLES.find(article => article.id === id);
}

/**
 * Get published articles only
 */
export function getPublishedArticles(): StaticArticleMetadata[] {
  return STATIC_ARTICLES.filter(article => article.status === 'published');
}

/**
 * Get articles by category
 */
export function getArticlesByCategory(category: string): StaticArticleMetadata[] {
  return STATIC_ARTICLES.filter(article => article.category === category);
}

/**
 * Search articles
 */
export function searchArticles(query: string): StaticArticleMetadata[] {
  const lowerQuery = query.toLowerCase();
  return STATIC_ARTICLES.filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.excerpt.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Update article metadata
 * In a real system, this would write to a JSON file or database
 */
export function updateArticleMetadata(
  id: string,
  updates: Partial<StaticArticleMetadata>
): StaticArticleMetadata | null {
  const index = STATIC_ARTICLES.findIndex(article => article.id === id);
  if (index === -1) return null;

  STATIC_ARTICLES[index] = {
    ...STATIC_ARTICLES[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  return STATIC_ARTICLES[index];
}

/**
 * Add new article to registry
 */
export function addArticleToRegistry(article: Omit<StaticArticleMetadata, 'createdAt' | 'updatedAt'>): StaticArticleMetadata {
  const now = new Date().toISOString();
  const newArticle: StaticArticleMetadata = {
    ...article,
    createdAt: now,
    updatedAt: now,
  };

  STATIC_ARTICLES.push(newArticle);
  return newArticle;
}

/**
 * Remove article from registry
 */
export function removeArticleFromRegistry(id: string): boolean {
  const index = STATIC_ARTICLES.findIndex(article => article.id === id);
  if (index === -1) return false;

  STATIC_ARTICLES.splice(index, 1);
  return true;
}

/**
 * Generate article statistics
 */
export function getArticleStats() {
  return {
    total: STATIC_ARTICLES.length,
    published: STATIC_ARTICLES.filter(a => a.status === 'published').length,
    drafts: STATIC_ARTICLES.filter(a => a.status === 'draft').length,
    categories: [...new Set(STATIC_ARTICLES.map(a => a.category))],
    totalTags: [...new Set(STATIC_ARTICLES.flatMap(a => a.tags))].length,
  };
}

export default {
  getAllArticles,
  getArticleBySlug,
  getArticleById,
  getPublishedArticles,
  getArticlesByCategory,
  searchArticles,
  updateArticleMetadata,
  addArticleToRegistry,
  removeArticleFromRegistry,
  getArticleStats,
};
