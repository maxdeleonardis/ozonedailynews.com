# Article Date Management Guide

This guide explains how to properly manage publication and update dates for articles on the ObjectWire platform.

## Overview

All articles now track two key dates:
- **publishedTime**: When the article was first published
- **modifiedTime**: When the article was last updated (if different from publication)

This ensures:
- The `/news` page shows the most recently published/updated content first
- Readers can see when articles were updated
- Search engines get accurate publication dates
- Updated articles are highlighted

## Required Metadata Format

Every article `page.tsx` file should include these dates in the metadata export:

```typescript
export const metadata: Metadata = {
  title: "Your Article Title | ObjectWire",
  description: "Your article description",
  keywords: ["keyword1", "keyword2"],
  alternates: {
    canonical: 'https://www.objectwire.org/news/your-slug',
  },
  authors: [{ name: "Author Name" }],
  openGraph: {
    title: "Article Title",
    description: "Article description",
    type: "article",
    url: "https://www.objectwire.org/news/your-slug",
    publishedTime: "2026-01-27T18:00:00Z",    // REQUIRED
    modifiedTime: "2026-01-27T18:00:00Z",     // REQUIRED (update when article changes)
    section: "Technology",                     // Category for the article
    images: [
      {
        url: "https://www.objectwire.org/images/article-image.jpg",
        width: 1200,
        height: 630,
        alt: "Article image description",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Article Title",
    description: "Article description",
  },
};
```

## Date Format

All dates MUST be in ISO 8601 format with timezone:
```
"2026-01-27T18:00:00Z"
```

- Use UTC timezone (Z suffix)
- Include full timestamp with hours and minutes
- Format: `YYYY-MM-DDTHH:mm:ssZ`

## When to Update Dates

### Publishing a New Article
1. Set both `publishedTime` and `modifiedTime` to the same value
2. This should be the current date/time when you publish

### Updating an Existing Article
1. Keep `publishedTime` as the original publication date
2. Update `modifiedTime` to the current date/time
3. This will:
   - Show an "Updated" badge on the article
   - Move the article higher in the news feed
   - Display both dates to readers

## Example: Creating a New Article

```typescript
// New article published on January 28, 2026 at 3:00 PM UTC
export const metadata: Metadata = {
  // ... other metadata
  openGraph: {
    // ... other openGraph fields
    publishedTime: "2026-01-28T15:00:00Z",
    modifiedTime: "2026-01-28T15:00:00Z",
    section: "Technology",
  },
};
```

## Example: Updating an Article

```typescript
// Article originally published January 20, now updated January 28
export const metadata: Metadata = {
  // ... other metadata
  openGraph: {
    // ... other openGraph fields
    publishedTime: "2026-01-20T10:00:00Z",    // Keep original
    modifiedTime: "2026-01-28T15:30:00Z",     // Update to now
    section: "Technology",
  },
};
```

## Components for Displaying Dates

Use these components to display dates consistently:

### ArticleDate (Full Display)
```tsx
import ArticleDate from '@/components/ArticleDate';

<ArticleDate 
  publishedDate="2026-01-27T18:00:00Z"
  updatedDate="2026-01-28T10:00:00Z"
  showRelativeTime={true}
/>
```

### ArticleDateCompact (For Cards)
```tsx
import { ArticleDateCompact } from '@/components/ArticleDate';

<ArticleDateCompact 
  publishedDate="2026-01-27T18:00:00Z"
  updatedDate="2026-01-28T10:00:00Z"
/>
```

### ArticleUpdateBadge (Show Update Status)
```tsx
import { ArticleUpdateBadge } from '@/components/ArticleDate';

<ArticleUpdateBadge 
  publishedDate="2026-01-27T18:00:00Z"
  updatedDate="2026-01-28T10:00:00Z"
/>
```

## Date Utility Functions

The `lib/date-utils.ts` file provides helper functions:

- `formatArticleDate(date)` - Format for display
- `formatArticleDateTime(date)` - Format with time
- `getRelativeTime(date)` - "2 hours ago" format
- `parseDate(dateString)` - Parse various date formats
- `compareDescending(a, b)` - Sort newest first
- `isWithinDays(date, days)` - Check if recent

## How Sorting Works

The `/news` page sorts articles by:
1. If an article has `updatedAt` > `publishedAt`, use `updatedAt`
2. Otherwise, use `publishedAt`
3. Sort descending (newest first)

This ensures recently updated articles appear at the top of the feed.

## Checklist for Article Authors

- [ ] Set `publishedTime` in metadata.openGraph
- [ ] Set `modifiedTime` in metadata.openGraph (same as published if new)
- [ ] Set `section` in metadata.openGraph for categorization
- [ ] Add `authors` array to metadata
- [ ] When updating an article, update `modifiedTime` to current time
- [ ] Use ArticleDate component to display dates in the article
- [ ] Test that the article appears on `/news` page

## Common Issues

### Article not showing on /news page
- Check that metadata is exported correctly
- Verify dates are in ISO 8601 format
- Ensure the file is named `page.tsx`

### Article not sorting correctly
- Verify `publishedTime` is set in openGraph
- Check that dates are valid ISO strings
- Clear Next.js cache if needed

### "Recently Updated" not showing
- Ensure `modifiedTime` is at least 1 hour after `publishedTime`
- Verify the ArticleUpdateBadge component is used

## Database Articles

Articles stored in Supabase automatically track:
- `created_at` - When the record was created
- `published_at` - When the article was published
- `updated_at` - Automatically updated on every change

The news page automatically merges database and filesystem articles and sorts them correctly.
