"use client";

import { formatArticleDate, formatArticleDateTime, getRelativeTime } from '@/lib/date-utils';

interface ArticleDateProps {
  publishedDate: string | Date;
  updatedDate?: string | Date;
  showRelativeTime?: boolean;
  showFullDateTime?: boolean;
  className?: string;
}

/**
 * Component to display article published and updated dates consistently
 */
export default function ArticleDate({
  publishedDate,
  updatedDate,
  showRelativeTime = true,
  showFullDateTime = false,
  className = ""
}: ArticleDateProps) {
  const published = new Date(publishedDate);
  const updated = updatedDate ? new Date(updatedDate) : null;
  
  // Determine if the article was significantly updated (more than 1 hour after publication)
  const wasUpdated = updated && (updated.getTime() - published.getTime() > 3600000);
  
  const formatDate = showFullDateTime ? formatArticleDateTime : formatArticleDate;
  const relativeTime = getRelativeTime(wasUpdated ? updated : published);

  return (
    <div className={`text-sm text-gray-600 ${className}`}>
      <time dateTime={published.toISOString()}>
        Published {formatDate(published)}
      </time>
      
      {wasUpdated && (
        <>
          <span className="mx-2">•</span>
          <time dateTime={updated.toISOString()} className="text-orange-600 font-medium">
            Updated {formatDate(updated)}
          </time>
        </>
      )}
      
      {showRelativeTime && (
        <>
          <span className="mx-2">•</span>
          <span className="text-gray-500">{relativeTime}</span>
        </>
      )}
    </div>
  );
}

/**
 * Compact version for article cards
 */
export function ArticleDateCompact({
  publishedDate,
  updatedDate,
  className = ""
}: Omit<ArticleDateProps, 'showRelativeTime' | 'showFullDateTime'>) {
  const published = new Date(publishedDate);
  const updated = updatedDate ? new Date(updatedDate) : null;
  const wasUpdated = updated && (updated.getTime() - published.getTime() > 3600000);
  
  const displayDate = wasUpdated ? updated : published;
  const relativeTime = getRelativeTime(displayDate);

  return (
    <div className={`text-xs text-gray-500 ${className}`}>
      {wasUpdated && (
        <span className="text-orange-600 font-medium mr-1">Updated:</span>
      )}
      <time dateTime={displayDate.toISOString()}>
        {relativeTime}
      </time>
    </div>
  );
}

/**
 * Badge version to show update status
 */
export function ArticleUpdateBadge({
  publishedDate,
  updatedDate,
}: Pick<ArticleDateProps, 'publishedDate' | 'updatedDate'>) {
  const published = new Date(publishedDate);
  const updated = updatedDate ? new Date(updatedDate) : null;
  
  if (!updated || updated.getTime() - published.getTime() <= 3600000) {
    return null;
  }

  const isRecent = Date.now() - updated.getTime() < 24 * 60 * 60 * 1000; // Within 24 hours

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
      isRecent 
        ? 'bg-orange-100 text-orange-800 border border-orange-300' 
        : 'bg-gray-100 text-gray-700 border border-gray-300'
    }`}>
      {isRecent ? '🔄 Recently Updated' : 'Updated'}
    </span>
  );
}
