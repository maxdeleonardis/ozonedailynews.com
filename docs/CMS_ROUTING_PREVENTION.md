# Prevention System for CMS Routing Issues

**Created:** June 9, 2026  
**Purpose:** Ensure CMS edit routes never break again after file structure changes

---

## ✅ Automated Safeguards Implemented

### 1. **Pre-Build Validation** (`scripts/validate-cms-routes.ts`)

**What it does:**
- Simulates CMS edit route resolution for all published articles
- Checks that every registry entry can be loaded via edit URL
- Validates filePaths actually exist on disk
- Detects duplicate slugs
- Catches malformed edit links

**When it runs:**
- Automatically on `npm run build` (via `prebuild` hook)
- Manually via `npm run validate:cms`
- Before every production deployment

**Example output:**
```
🔍 Validating CMS edit routes...

📊 Results:
  ✅ Resolvable: 29
  ❌ Failed:     0
  📁 Total:      29

🔍 Additional checks:
  ✅ All 29 filePaths exist on disk
  ✅ All slugs are unique
  ✅ All edit links properly formatted

✅ CMS route validation passed!
```

**If validation fails:**
- Build is blocked (exit code 1)
- Lists all broken routes with specific errors
- Must be fixed before deployment

---

## 🔒 Code-Level Safeguards

### 2. **Registry-First Architecture** (`app/admin/articles/edit/[slug]/page.tsx`)

**Defense in depth approach:**

```typescript
function loadFromStatic(slug: string) {
  // Layer 1: Registry lookup (primary, O(1))
  // ✅ Handles sharded paths automatically
  if (registry) {
    const entry = findInRegistry(slug);
    if (entry?.filePath) {
      return readFile(entry.filePath);
    }
  }
  
  // Layer 2: Recursive fallback (secondary, O(n))
  // ✅ Works even if registry is corrupted
  return recursiveSearch(slug);
}
```

**Benefits:**
- Dual-layer resolution prevents total failure
- Registry corruption doesn't break CMS
- File moves without registry update are auto-fixed on next sync

### 3. **Slug Normalization** (`components/admin/AdminArticleList.tsx`)

**Prevents double-slash URLs:**

```tsx
// Before: /admin/articles/edit//news/article ❌
// After:  /admin/articles/edit/news/article ✅
<a href={`/admin/articles/edit/${article.slug.replace(/^\//, '')}`}>
  Edit
</a>
```

**Always strips leading slash** regardless of how slug is stored in database.

---

## 🧪 Testing Strategy

### Manual Testing Checklist

**Before every major change to file structure:**

1. ✅ Run `npm run validate:cms`
2. ✅ Check at least 3 edit links from `/admin/articles`
3. ✅ Test direct URL access: `/admin/articles/edit/[slug]`
4. ✅ Verify new articles created via CMS are editable
5. ✅ Test articles from different stores (articles, jack_articles, article_pages)

### Automated Testing (Future Enhancement)

**Integration test template** (create `tests/cms-routes.test.ts`):

```typescript
describe('CMS Edit Routes', () => {
  it('should resolve all published articles', async () => {
    const registry = readRegistry();
    for (const entry of registry) {
      const slug = entry.slug.replace(/^\//, '');
      const article = await loadFromStatic(slug);
      expect(article).toBeTruthy();
    }
  });

  it('should handle sharded paths', async () => {
    const article = await loadFromStatic('researchers-find-hidden-damage...');
    expect(article.slug).toBe('/news/researchers-find-hidden-damage...');
  });

  it('should strip leading slashes from edit links', () => {
    const slug = '/news/article-name';
    const editUrl = `/admin/articles/edit/${slug.replace(/^\//, '')}`;
    expect(editUrl).toBe('/admin/articles/edit/news/article-name');
  });
});
```

---

## 📋 Deployment Checklist

**Every deployment must pass:**

- [ ] `npm run build` succeeds (includes `validate:cms`)
- [ ] All validation scripts pass:
  - [ ] `validate:public` - No forbidden files in /public
  - [ ] `validate:canonicals` - No layout-level canonical overrides
  - [ ] `validate:cms` - All CMS routes resolvable
- [ ] Registry is up to date (`npm run wiki:sync -- --write`)
- [ ] Local testing of at least 3 edit links
- [ ] Check production `/admin/articles` after deploy

---

## 🚨 Monitoring & Alerts (Future)

### Error Tracking

**Add to production:**

```typescript
// app/admin/articles/edit/[slug]/page.tsx
if (!article) {
  // Log to error tracking service
  console.error('CMS_ROUTE_404', {
    slug,
    timestamp: new Date().toISOString(),
    registryExists: fs.existsSync(REGISTRY_PATH),
    registrySize: registry?.length,
  });
  notFound();
}
```

### Health Check Endpoint

**Create API route:** `app/api/health/cms/route.ts`

```typescript
export async function GET() {
  const registry = readRegistry();
  const results = await Promise.all(
    registry.slice(0, 10).map(async (entry) => {
      const slug = entry.slug.replace(/^\//, '');
      const article = await loadFromStatic(slug);
      return { slug: entry.slug, resolvable: !!article };
    })
  );
  
  const failedCount = results.filter(r => !r.resolvable).length;
  
  return Response.json({
    status: failedCount === 0 ? 'healthy' : 'degraded',
    totalChecked: results.length,
    failed: failedCount,
    timestamp: new Date().toISOString(),
  });
}
```

**Monitor via cron:**
```bash
curl https://www.ozonedailynews.com/api/health/cms | jq
```

---

## 📚 Developer Documentation

### When Adding New File Structures

**Required steps to prevent routing breaks:**

1. **Update `loadFromStatic()` logic**
   - Add new directory pattern to recursive search
   - Update registry lookup logic if needed

2. **Update `migrate-to-sharded.ts`**
   - Add new sharding strategy if different from existing

3. **Update `sync-registry.ts`**
   - Ensure new structure is scanned recursively
   - Verify filePath generation is correct

4. **Run validation**
   ```bash
   npm run validate:cms
   npm run build
   ```

5. **Test manually**
   - Create test article in new structure
   - Verify edit link works
   - Verify article renders on frontend

### When Changing Slug Format

**If you change how slugs are stored (e.g., add/remove leading slash):**

1. **Update normalization in edit route**
   ```typescript
   const slugVariants = [
     slug,
     `/${slug}`,
     slug.replace(/^\//, ''),
     // Add new variant here
   ];
   ```

2. **Update AdminArticleList link generation**
   ```tsx
   <a href={`/admin/articles/edit/${normalizeSlug(article.slug)}`}>
   ```

3. **Run migration to update all existing slugs**

4. **Update validation script** to check new format

---

## 🎯 Key Principles

### 1. **Registry is Source of Truth**
- Always read from `content_registry.json` first
- Fallback to filesystem search only if registry fails
- Keep registry in sync via prebuild hooks

### 2. **Defense in Depth**
- Multiple resolution strategies (registry → recursive → Supabase)
- Validation at multiple stages (prebuild, deployment, runtime)
- Graceful degradation if one layer fails

### 3. **Fail Fast**
- Block builds on validation failure
- Exit code 1 stops deployment pipeline
- Force fix before production

### 4. **Test Everything**
- Validate after every structure change
- Manual spot-checks before deploy
- Automated health checks in production

---

## 🔧 Troubleshooting Guide

### "CMS route validation failed"

**Cause:** Registry and filesystem out of sync

**Fix:**
```bash
npm run wiki:sync -- --write
npm run validate:cms
```

### "Missing file: articles/slug.json"

**Cause:** File moved without registry update

**Fix:**
```bash
# Find the file
find content/static -name "*slug*.json"

# Update registry
npm run wiki:sync -- --write
```

### "Duplicate slugs found"

**Cause:** Same slug in multiple stores or duplicate entries

**Fix:**
```bash
# Find duplicates
cat content/static/content_registry.json | jq '[.[] | .slug] | group_by(.) | map(select(length > 1))'

# Remove duplicates manually or re-run migration
```

### "Edit link gives 404"

**Debugging steps:**
1. Check slug format: `console.log(article.slug)`
2. Check registry entry: `cat content/static/content_registry.json | jq '.[] | select(.slug | contains("search-term"))'`
3. Check file exists: `ls -la content/static/[filePath]`
4. Run validation: `npm run validate:cms`

---

## 📝 Commit Message Template

**When fixing CMS routing issues:**

```
fix: cms edit route resolution for [issue]

- Update loadFromStatic() to handle [new pattern]
- Add validation for [edge case]
- Ensure [scenario] doesn't break again

Validation:
- npm run validate:cms ✅
- Manual testing of 5 edit links ✅
- Build passes ✅

Prevents recurrence by: [explain safeguard]
```

---

## ✅ Success Metrics

**This prevention system is working if:**
- ✅ Zero CMS 404s in production logs
- ✅ `npm run build` catches issues before deploy
- ✅ All edit links work across all article types
- ✅ New articles created via CMS are immediately editable
- ✅ File structure changes don't break existing routes

---

## 🚀 Future Enhancements

1. **E2E Testing with Playwright**
   - Automate click testing of edit links
   - Test full CMS workflow (create → edit → publish)

2. **Visual Regression Testing**
   - Screenshot comparison of edit page layouts
   - Catch UI breaks from routing changes

3. **Performance Monitoring**
   - Track edit page load times
   - Alert on slow registry lookups (> 100ms)

4. **Slack/Discord Alerts**
   - Notify team on validation failures
   - Weekly digest of CMS health metrics

---

**Summary:** With these safeguards, CMS routing issues are caught automatically during build and can't reach production. ✅
