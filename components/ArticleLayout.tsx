import { ReactNode } from 'react';
import { Breadcrumb } from './Breadcrumb';

interface ArticleLayoutProps {
  children: ReactNode;
  pathname?: string;
  customBreadcrumbs?: Array<{ name: string; item: string }>;
  currentPage?: string;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
}

/**
 * Reusable layout component for articles that includes breadcrumbs
 * and consistent spacing/width constraints
 */
export default function ArticleLayout({
  children,
  pathname,
  customBreadcrumbs,
  currentPage,
  className = '',
  maxWidth = '4xl',
}: ArticleLayoutProps) {
  // Auto-generate breadcrumbs from pathname if not provided
  const breadcrumbItems = customBreadcrumbs || (pathname ? pathname.split('/').filter(Boolean).map((seg, i, arr) => ({
    name: seg.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()),
    item: '/' + arr.slice(0, i + 1).join('/'),
  })) : []);

  const maxWidthClass = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
  }[maxWidth];

  return (
    <div className={`min-h-screen ${className}`}>
      <div className={`container mx-auto px-4 pt-4 ${maxWidthClass}`}>
        <Breadcrumb
          items={[
            { name: 'Home', item: '/' },
            ...breadcrumbItems,
            ...(currentPage ? [{ name: currentPage, item: '' }] : []),
          ]}
        />
      </div>
      {children}
    </div>
  );
}
