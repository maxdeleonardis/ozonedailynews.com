// =============================================================================
// ArticleViewTracker
//
// Tiny "fire-once" client component.  Drop it inside any article page and it
// automatically records the view for the logged-in user.
//
// Usage:
//   import ArticleViewTracker from '@/components/ArticleViewTracker';
//   ...
//   <ArticleViewTracker slug="my-article" title="My Article" url="/news/my-article" />
// =============================================================================

'use client';

import { useEffect, useRef } from 'react';
import { useArticleHistory } from '@/lib/use-article-history';

interface Props {
  slug:      string;
  title:     string;
  url:       string;
  image?:    string;
  category?: string;
}

export default function ArticleViewTracker({ slug, title, url, image, category }: Props) {
  const { track, isLoggedIn } = useArticleHistory();
  const tracked = useRef(false);

  useEffect(() => {
    if (!isLoggedIn || tracked.current) return;
    tracked.current = true;
    track({ slug, title, url, image, category });
  }, [isLoggedIn, track, slug, title, url, image, category]);

  // Invisible — renders nothing
  return null;
}
