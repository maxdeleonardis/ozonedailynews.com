import { ReactNode } from 'react';
import Breadcrumbs, { generateBreadcrumbs } from './Breadcrumbs';

interface ArticleLayoutProps {
  children: ReactNode;
  pathname?: string;
  customBreadcrumbs?: Array<{ label: string; href: string }>;
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
  const breadcrumbItems = customBreadcrumbs || (pathname ? generateBreadcrumbs(pathname) : []);

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
        <Breadcrumbs 
          items={breadcrumbItems}
          currentPage={currentPage}
        />
      </div>
      {children}
    </div>
  );
}
