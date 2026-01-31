# Scripts Directory

Utility scripts for managing the ObjectWire platform.

## Available Scripts

### `update-article-dates.ts`

Batch update article metadata with proper `publishedTime` and `modifiedTime` fields.

**Usage:**

```typescript
import { updateArticleDates, createTimestamp, getCurrentTimestamp } from './scripts/update-article-dates';

// Update multiple articles at once
const updates = [
  {
    filePath: 'app/news/article-slug/page.tsx',
    publishedTime: createTimestamp(2026, 1, 27, 18, 0),
    section: 'Technology'
  },
  {
    filePath: 'app/news/another-slug/page.tsx',
    publishedTime: createTimestamp(2026, 1, 26, 14, 30),
    modifiedTime: getCurrentTimestamp(), // Set to now
    section: 'Politics'
  }
];

updateArticleDates(updates);
```

**Functions:**

- `updateArticleDates(updates)` - Update multiple article files
- `getCurrentTimestamp()` - Get current time in ISO format
- `createTimestamp(year, month, day, hour?, minute?)` - Create specific timestamp

**Example: Mark article as updated today**

```typescript
updateArticleDates([{
  filePath: 'app/news/my-article/page.tsx',
  publishedTime: '2026-01-20T10:00:00Z',  // Keep original
  modifiedTime: getCurrentTimestamp(),     // Update to now
  section: 'Technology'
}]);
```

## Running Scripts

Since these are TypeScript files, you can either:

1. **Run with tsx:**
   ```bash
   npx tsx scripts/update-article-dates.ts
   ```

2. **Import in another file:**
   ```typescript
   import { updateArticleDates } from './scripts/update-article-dates';
   ```

3. **Run from Node REPL:**
   ```bash
   node --loader tsx --experimental-specifier-resolution=node
   > const { updateArticleDates } = require('./scripts/update-article-dates.ts')
   ```

## Best Practices

- Always backup files before running batch updates
- Test on a single file first
- Review changes with `git diff` before committing
- Use `createTimestamp()` for precise dates
- Use `getCurrentTimestamp()` for "right now"

## See Also

- [Docs/ARTICLE-DATE-GUIDE.md](../Docs/ARTICLE-DATE-GUIDE.md) - Complete guide for article dates
- [Docs/NEWS-DATE-IMPLEMENTATION.md](../Docs/NEWS-DATE-IMPLEMENTATION.md) - Implementation details
