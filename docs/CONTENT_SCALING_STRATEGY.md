# Content Scaling Strategy | 1M+ Articles

**Current Status (June 2026):**
- 37 JSON files across 7 stores
- 536KB total storage
- Flat directory structure

**Projected Growth:**
- Target: 1M+ articles
- Estimated size: ~15GB at 15KB avg per article
- Git performance concerns at 100K+ files in single directory

---

## Recommended Architecture: Year/Month Sharding

### Directory Structure

```
content/
  static/
    articles/
      2026/
        01/
          news-slug-jan-2026.json
          another-article-jan-2026.json
        02/
          news-slug-feb-2026.json
      2027/
        01/
          news-slug-jan-2027.json
    
    article_pages/
      science/
        west-coast-sea-stars-resurgence-die-off-2026.json
        great-barrier-reef-bleaching-data-2026.json
      earth/
        coral-reef.json
        climate-change.json
      tech/
        ai-infrastructure.json
    
    jack_articles/
      2026/
        06/
          deep-dive-slug-june-2026.json
    
    content_registry.json  # Master index with file paths
```

---

## Implementation Strategy

### Phase 1: Registry-Based Routing (Already Done ✅)

Your current system already uses `content_registry.json` as the source of truth. This is perfect! The registry contains:
```json
{
  "slug": "/science/west-coast-sea-stars-resurgence-die-off-2026",
  "filePath": "article_pages/science/west-coast-sea-stars-resurgence-die-off-2026.json",
  "publishDate": "2026-06-09",
  ...
}
```

### Phase 2: Add `filePath` Field to Registry

Modify `sync-registry.ts` to include the actual file path:

```typescript
// Instead of inferring location from slug
{
  "slug": "/science/article-name",
  "filePath": "article_pages/2026/06/science-article-name.json",  // NEW
  "category": "Science",
  ...
}
```

### Phase 3: Update `article-service.ts` to Use Registry

```typescript
function readStaticRow<T>(table: string, slug: string): T | null {
  // OLD: Direct slug → filename mapping
  const file = path.join(STATIC_BASE, table, `${slug}.json`);
  
  // NEW: Registry lookup → filePath
  const registry = getContentRegistry();
  const entry = registry.find(e => e.slug === slug);
  if (!entry?.filePath) return null;
  const file = path.join(STATIC_BASE, entry.filePath);
  
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf8')) as T;
}
```

### Phase 4: Migrate Existing Files

```bash
# Script: scripts/migrate-to-sharded.ts
# Move articles/ → articles/2026/06/
# Move article_pages/ → article_pages/{category}/
# Update content_registry.json with new filePaths
```

---

## Why This Approach Works

### ✅ **Git Performance**
- Modern filesystems handle 10K-100K files per directory well
- Year/month sharding keeps directories at ~2-5K files max
- Git operations (diff, checkout) stay fast

### ✅ **CMS Compatibility**
- `/admin` writes to correct year/month based on `published_at`
- Registry update happens atomically with file write
- No breaking changes to CMS UI

### ✅ **ISR & Build Performance**
- Next.js reads registry once at build time
- File reads are O(1) lookups via registry
- No directory scanning needed

### ✅ **Category-Based Organization for Evergreen**
- `article_pages/` organized by topic: `/science`, `/tech`, `/earth`
- Easy to find and update related articles
- Matches URL structure naturally

### ✅ **Time-Based Organization for News**
- `articles/` organized by date: `/2026/06`
- Old articles can be archived or moved to cold storage
- Clear lifecycle management

---

## Storage Projections

| Scale | Files | Estimated Size | Git Performance | Recommendation |
|---|---|---|---|---|
| 1K articles | 1,000 | 15MB | Excellent | Current flat structure OK |
| 10K articles | 10,000 | 150MB | Good | Start considering sharding |
| 100K articles | 100,000 | 1.5GB | Moderate | **Implement sharding NOW** |
| 1M articles | 1,000,000 | 15GB | Poor without sharding | **Sharding REQUIRED** |

**Your Current Position:** 37 files (536KB) — plenty of runway, but architect now before 10K.

---

## Alternative: Multi-Repo Architecture (If You Hit 1M+)

If you truly scale to 1M+ articles, consider:

### Option A: Year-Based Repos
```
ozonedailynews.com (main site code)
ozonedailynews-content-2024 (2024 articles)
ozonedailynews-content-2025 (2025 articles)
ozonedailynews-content-2026 (2026 articles)
```

- Deploy reads from all repos via submodules or Git LFS
- Build-time registry merge
- Each repo stays <100K files

### Option B: S3/R2 Static Storage + Registry in Git
```
Git: content_registry.json only (1 file, ~50MB at 1M entries)
R2: s3://ozone-content/articles/2026/06/slug.json
```

- CMS writes to R2 + updates registry in Git
- ISR reads from R2 using registry as index
- Infinite scale, but lose Git history for content

---

## Recommended Timeline

| When | Action | Priority |
|---|---|---|
| **Now (37 files)** | Add `filePath` to `content_registry.json` | Medium |
| **At 1K files** | Implement year/month sharding for `articles/` | High |
| **At 10K files** | Implement category sharding for `article_pages/` | High |
| **At 100K files** | Consider multi-repo or S3 hybrid | Critical |
| **At 1M files** | Migrate to S3/R2 + registry-only Git | Required |

---

## Immediate Next Steps (Recommended)

### Step 1: Enhance `content_registry.json` Schema

Add `filePath` field to every entry:

```json
{
  "slug": "/science/west-coast-sea-stars-resurgence-die-off-2026",
  "filePath": "article_pages/science-west-coast-sea-stars-resurgence-die-off-2026.json",
  "title": "...",
  ...
}
```

### Step 2: Update `scripts/sync-registry.ts`

```typescript
// When scanning files, preserve the relative path
const filePath = path.relative(STATIC_BASE, fullPath);
registryEntry.filePath = filePath;
```

### Step 3: Create `scripts/migrate-to-sharded.ts`

Script that:
1. Reads all files in `articles/`, `jack_articles/`
2. Parses `published_at` to get year/month
3. Moves file to `articles/2026/06/slug.json`
4. Updates `content_registry.json` with new `filePath`

### Step 4: Update CMS Publish Route

```typescript
// app/api/cms/publish/route.ts
const publishYear = new Date(published_at).getFullYear();
const publishMonth = String(new Date(published_at).getMonth() + 1).padStart(2, '0');
const filePath = `content/static/articles/${publishYear}/${publishMonth}/${slug}.json`;
```

---

## Decision Matrix

| If your goal is... | Recommended approach |
|---|---|
| Stay under 10K articles | Current flat structure is fine, add `filePath` to registry |
| Scale to 100K articles | Implement year/month sharding NOW |
| Scale to 1M articles | Plan multi-repo or S3 hybrid architecture |
| Multi-brand (7 brands × 100K each) | Per-brand repos + shared registry service |

---

## Conclusion

**For your immediate needs (37 → 10K articles):**
1. ✅ Keep flat structure for now
2. ✅ Add `filePath` to `content_registry.json` (future-proof)
3. ✅ Monitor file count per directory

**When you hit 10K articles:**
1. Run migration script to shard by year/month
2. Update CMS to write to sharded paths
3. Registry-based routing remains unchanged (zero breaking changes)

**Your registry-first architecture is already perfect for scale** — you just need to add the `filePath` field and implement sharding at the right time.

---

**Estimated Dev Time:**
- Add `filePath` to registry: 1 hour
- Create migration script: 2 hours
- Update CMS publish logic: 1 hour
- Test and validate: 1 hour

**Total: ~5 hours to be fully prepared for 100K+ scale**
