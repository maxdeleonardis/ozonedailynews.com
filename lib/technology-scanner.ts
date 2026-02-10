import { scanAllContent, Article } from './content-scanner';

export interface TechnologyArticle {
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

export async function scanTechnologyArticles(): Promise<TechnologyArticle[]> {
  const allArticles = await scanAllContent();
  
  // Filter for articles in the technology directory
  return allArticles
    .filter(article => article.category === 'TECHNOLOGY')
    .map(article => {
      // Extract the slug (last part of the path if it's in technology/articles/)
      const slugParts = article.slug.split('/');
      const slug = slugParts[slugParts.length - 1];

      return {
        title: article.title,
        slug: slug,
        publishDate: article.publishDate,
        category: article.category,
        isPinned: false,
        excerpt: article.excerpt,
        author: article.author || 'ObjectWire Technology Desk',
        readTime: article.readTime,
        date: article.publishDate
      };
    });
}
