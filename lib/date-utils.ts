/**
 * Date utility functions for consistent date handling across the application
 */

/**
 * Format a date to ISO string format
 */
export function formatISODate(date: Date | string): string {
  return new Date(date).toISOString();
}

/**
 * Format a date for display in articles
 */
export function formatArticleDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Format a date with time for detailed displays
 */
export function formatArticleDateTime(date: Date | string): string {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

/**
 * Calculate relative time (e.g., "2 hours ago", "3 days ago")
 */
export function getRelativeTime(date: Date | string): string {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now.getTime() - past.getTime();
  
  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return 'Just now';
  } else if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (hours < 24) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (days < 7) {
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (weeks < 4) {
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (months < 12) {
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
}

/**
 * Check if a date is within the last N days
 */
export function isWithinDays(date: Date | string, days: number): boolean {
  const now = new Date();
  const targetDate = new Date(date);
  const diffDays = Math.floor((now.getTime() - targetDate.getTime()) / (1000 * 60 * 60 * 24));
  return diffDays <= days;
}

/**
 * Parse date from various formats
 */
export function parseDate(dateString: string | Date): Date {
  if (dateString instanceof Date) {
    return dateString;
  }
  
  // Try to parse ISO format
  const date = new Date(dateString);
  if (!isNaN(date.getTime())) {
    return date;
  }
  
  // Fallback to current date if parsing fails
  console.warn(`Failed to parse date: ${dateString}, using current date`);
  return new Date();
}

/**
 * Compare two dates for sorting (newest first)
 */
export function compareDescending(dateA: Date | string, dateB: Date | string): number {
  return new Date(dateB).getTime() - new Date(dateA).getTime();
}

/**
 * Compare two dates for sorting (oldest first)
 */
export function compareAscending(dateA: Date | string, dateB: Date | string): number {
  return new Date(dateA).getTime() - new Date(dateB).getTime();
}

/**
 * Get the most recent date from a list
 */
export function getMostRecent(dates: (Date | string)[]): Date | null {
  if (dates.length === 0) return null;
  
  return dates.reduce((latest, current) => {
    const currentDate = new Date(current);
    const latestDate = new Date(latest);
    return currentDate > latestDate ? currentDate : latestDate;
  }, new Date(dates[0])) as Date;
}

/**
 * Format date for sitemap
 */
export function formatSitemapDate(date: Date | string): string {
  return new Date(date).toISOString().split('T')[0];
}
