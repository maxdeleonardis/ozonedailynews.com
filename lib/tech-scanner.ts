import { scanAllContent, Article } from './content-scanner';

export interface TechArticle {
  title: string;
  slug: string;
  publishDate: string;
  category: string;
  isPinned?: boolean;
  excerpt?: string;
  author?: string;
  readTime?: string;
  date?: string;
}

export async function scanTechArticles(): Promise<TechArticle[]> {
  const allArticles = await scanAllContent();
  
  // Filter for articles in the technology/tech directories
  return allArticles
    .filter(article => article.category === 'TECHNOLOGY' || article.category === 'TECH')
    .map(article => {
      // Extract the slug
      const slugParts = article.slug.split('/');
      const slug = slugParts[slugParts.length - 1];

      return {
        title: article.title,
        slug: slug,
        publishDate: article.publishDate,
        category: article.category,
        isPinned: false,
        excerpt: article.excerpt,
        author: article.author || 'ObjectWire Tech Desk',
        readTime: article.readTime,
        date: article.publishDate
      };
    });
}
