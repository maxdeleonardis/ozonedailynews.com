# Article Date Quick Reference

## TL;DR

Every article needs these dates in the metadata:

```typescript
openGraph: {
  publishedTime: "2026-01-27T18:00:00Z",
  modifiedTime: "2026-01-27T18:00:00Z",
  section: "Technology",
}
```

## Quick Commands

**Get current timestamp:**
```bash
node -e "console.log(new Date().toISOString())"
```

**Example output:** `2026-01-28T15:30:00.000Z`

## Article Checklist

Creating new article:
- [ ] Add `publishedTime` (set to now)
- [ ] Add `modifiedTime` (same as published)
- [ ] Add `section` (Technology, Politics, Business, etc.)
- [ ] Add `authors` array

Updating existing article:
- [ ] Keep `publishedTime` unchanged
- [ ] Update `modifiedTime` to current time
- [ ] Verify changes appear on `/news` page

## Common Dates

```typescript
// Right now
"2026-01-28T15:30:00Z"

// Specific date at noon UTC
"2026-01-27T12:00:00Z"

// Specific date with time
"2026-01-27T18:30:00Z"  // 6:30 PM UTC
```

## Date Format Rules

✅ **Correct:**
- `"2026-01-27T18:00:00Z"`
- `"2026-12-31T23:59:59Z"`

❌ **Wrong:**
- `"2026-01-27"` (missing time)
- `"Jan 27, 2026"` (wrong format)
- `"2026-01-27 18:00:00"` (missing T and Z)

## Components

**Display full date info:**
```tsx
import ArticleDate from '@/components/ArticleDate';

<ArticleDate 
  publishedDate={metadata.openGraph.publishedTime}
  updatedDate={metadata.openGraph.modifiedTime}
/>
```

**Display compact (for cards):**
```tsx
import { ArticleDateCompact } from '@/components/ArticleDate';

<ArticleDateCompact 
  publishedDate={publishedTime}
  updatedDate={modifiedTime}
/>
```

## What Gets Displayed

| Article Status | Display | Sorting |
|---------------|---------|---------|
| New article | "Published Jan 27" + "2 hours ago" | By published date |
| Updated article | "Updated Jan 28" + "1 hour ago" + 🔄 badge | By updated date |
| Updated >1 hour | Shows both dates | Prioritized in feed |

## Troubleshooting

**Article not showing on /news?**
→ Check dates are in ISO 8601 format

**Article not sorting correctly?**
→ Verify `publishedTime` exists in openGraph

**Update not showing?**
→ Ensure `modifiedTime` is >1 hour after `publishedTime`

## Need Help?

See full guide: [Docs/ARTICLE-DATE-GUIDE.md](./ARTICLE-DATE-GUIDE.md)
