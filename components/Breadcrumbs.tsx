import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  currentPage?: string;
}

export default function Breadcrumbs({ items, currentPage }: BreadcrumbsProps) {
  // If no items provided, generate from current path
  const breadcrumbItems = items || [];

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="mb-4 md:mb-6"
      itemScope 
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
        {/* Home */}
        <li 
          itemProp="itemListElement" 
          itemScope 
          itemType="https://schema.org/ListItem"
          className="flex items-center"
        >
          <Link 
            href="/" 
            itemProp="item"
            className="flex items-center hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span itemProp="name" className="sr-only">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {/* Dynamic breadcrumb items */}
        {breadcrumbItems.map((item, index) => (
          <li 
            key={item.href}
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-1.5"
          >
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link 
              href={item.href}
              itemProp="item"
              className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors capitalize"
            >
              <span itemProp="name">{item.label}</span>
            </Link>
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}

        {/* Current page (not clickable) */}
        {currentPage && (
          <li 
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-1.5"
          >
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span 
              itemProp="name"
              className="text-gray-900 dark:text-gray-100 font-medium capitalize line-clamp-1"
            >
              {currentPage}
            </span>
            <meta itemProp="position" content={String(breadcrumbItems.length + 2)} />
          </li>
        )}
      </ol>
    </nav>
  );
}

/**
 * Generate breadcrumb items from a URL path
 * Example: /news/texas/article-slug -> [{ label: 'News', href: '/news' }, { label: 'Texas', href: '/news/texas' }]
 */
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];
  
  let currentPath = '';
  
  for (let i = 0; i < segments.length - 1; i++) {
    currentPath += `/${segments[i]}`;
    breadcrumbs.push({
      label: formatBreadcrumbLabel(segments[i]),
      href: currentPath,
    });
  }
  
  return breadcrumbs;
}

/**
 * Format breadcrumb labels (replace hyphens, capitalize, handle special cases)
 */
function formatBreadcrumbLabel(segment: string): string {
  // Special case mappings
  const specialCases: Record<string, string> = {
    'hbomax': 'HBO Max',
    'netflix': 'Netflix',
    'prime': 'Prime Video',
    'disneyplus': 'Disney+',
    'saas': 'SaaS',
    'ai': 'AI',
    'api': 'API',
    'ceo': 'CEO',
    'cto': 'CTO',
    'cfo': 'CFO',
    'usa': 'USA',
    'uk': 'UK',
    'eu': 'EU',
  };

  const lower = segment.toLowerCase();
  if (specialCases[lower]) {
    return specialCases[lower];
  }

  // Replace hyphens with spaces and capitalize each word
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
