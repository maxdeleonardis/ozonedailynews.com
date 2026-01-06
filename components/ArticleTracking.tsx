'use client';

import { useEffect, useRef } from 'react';
import { tracking } from '@/lib/tracking';

interface ArticleTrackingProps {
  articleSlug: string;
  articleTitle: string;
  category: string;
  children: React.ReactNode;
}

export default function ArticleTracking({
  articleSlug,
  articleTitle,
  category,
  children,
}: ArticleTrackingProps) {
  const startTimeRef = useRef<number>(Date.now());
  const maxScrollRef = useRef<number>(0);
  const trackedMilestonesRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Track article view
    tracking.trackEvent('article_view', {
      article_slug: articleSlug,
      article_category: category,
    });

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      if (scrollPercent > maxScrollRef.current) {
        maxScrollRef.current = scrollPercent;
      }

      // Track milestones: 25%, 50%, 75%, 100%
      const milestones = [25, 50, 75, 100];
      milestones.forEach((milestone) => {
        if (
          scrollPercent >= milestone &&
          !trackedMilestonesRef.current.has(milestone)
        ) {
          trackedMilestonesRef.current.add(milestone);
          tracking.trackArticleEngagement(articleSlug, articleTitle, category, milestone);
        }
      });
    };

    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
      tracking.trackTimeSpent(articleSlug, timeSpent);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
        if (timeSpent > 5) {
          tracking.trackTimeSpent(articleSlug, timeSpent);
        }
      } else {
        startTimeRef.current = Date.now();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
      if (timeSpent > 5) {
        tracking.trackTimeSpent(articleSlug, timeSpent);
      }
    };
  }, [articleSlug, articleTitle, category]);

  return <>{children}</>;
}
