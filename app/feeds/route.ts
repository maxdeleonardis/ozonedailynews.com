import { NextResponse } from 'next/server';
import { SITE_CONFIG } from '@/lib/site-config';

// Feed discovery endpoint for crawlers
export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  
  const feeds = {
    site_name: "ObjectWire",
    feeds: {
      main_sitemap: `${baseUrl}/sitemap.xml`,
      news_sitemap: `${baseUrl}/news-sitemap.xml`,
      rss: `${baseUrl}/rss.xml`,
      atom: `${baseUrl}/atom.xml`,
      json_feed: `${baseUrl}/feed.json`,
    },
    api: {
      articles: `${baseUrl}/api/articles`,
      search: `${baseUrl}/api/search`,
    },
    schemas: {
      newsArticle: "https://schema.org/NewsArticle",
      breadcrumb: "https://schema.org/BreadcrumbList",
      organization: "https://schema.org/NewsMediaOrganization",
    },
  };
  
  return NextResponse.json(feeds, {
    headers: {
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
