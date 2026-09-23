import json, os

REG = 'content/static/content_registry.json'
reg = json.load(open(REG))

# Build map: filePath (rel to content/static) -> parsed article JSON
json_by_fp = {}
for root, dirs, files in os.walk('content/static'):
    for fname in files:
        if not fname.endswith('.json') or fname in ('content_registry.json', 'content_registry.backup.json'):
            continue
        full = os.path.join(root, fname)
        rel = os.path.relpath(full, 'content/static')
        try:
            data = json.load(open(full))
        except Exception:
            continue
        if isinstance(data, dict) and data.get('slug'):
            json_by_fp[rel] = data

fixed_title = 0
dupes_removed = 0
seen_slug = {}
result = []

for e in reg:
    fp = e.get('filePath')
    src = json_by_fp.get(fp) if fp else None
    if src:
        # Sync title from the actual JSON truth (post-rewrite titles)
        if src.get('title') and e.get('title') != src.get('title'):
            e['title'] = src['title']
            fixed_title += 1
        # Sync description from JSON subtitle/metadata
        desc = src.get('metadata', {}).get('description') or src.get('subtitle')
        if desc and e.get('description') != desc:
            e['description'] = desc

    # Dedupe by canonical slug (strip leading slash)
    key = e.get('slug', '').lstrip('/')
    if not key:
        result.append(e)
        continue
    if key in seen_slug:
        # keep the entry that has a resolved filePath/richer metadata
        dupes_removed += 1
        continue
    seen_slug[key] = True
    result.append(e)

json.dump(result, open(REG, 'w'), indent=2, ensure_ascii=False)
open(REG, 'a').write('\n')
print(f"Fixed titles: {fixed_title}")
print(f"Dupes removed (by slug): {dupes_removed}")
print(f"Final entries: {len(result)}")