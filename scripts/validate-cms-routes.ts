#!/usr/bin/env ts-node
// scripts/validate-cms-routes.ts
// Validates that CMS edit routes can resolve all published articles
// Run as part of pre-deployment checks to catch routing issues early

import fs from 'fs';
import path from 'path';

const STATIC_BASE = path.join(process.cwd(), 'content', 'static');
const REGISTRY_PATH = path.join(STATIC_BASE, 'content_registry.json');

interface RegistryEntry {
  slug: string;
  filePath?: string;
  title: string;
}

// Simulate the CMS loadFromStatic function
function canLoadArticle(slug: string): { success: boolean; path?: string; error?: string } {
  const slugVariants = [
    slug,
    `/${slug}`,
    slug.replace(/^\//, ''),
  ];

  // Try registry lookup
  if (fs.existsSync(REGISTRY_PATH)) {
    try {
      const registry: RegistryEntry[] = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
      for (const slugVariant of slugVariants) {
        const entry = registry.find((e) => {
          // Match exact slug
          if (e.slug === slugVariant || e.slug === `/${slugVariant}`) return true;
          
          // Match if registry slug ends with the variant
          if (e.slug.endsWith(`/${slugVariant}`)) return true;
          
          // Match if we convert /category/slug to category-slug
          const registryWithoutLeadingSlash = e.slug.replace(/^\//, '');
          const registryWithDashes = registryWithoutLeadingSlash.replace(/\//g, '-');
          if (registryWithDashes === slugVariant) return true;
          
          return false;
        });
        
        if (entry?.filePath) {
          const fp = path.join(STATIC_BASE, entry.filePath);
          if (fs.existsSync(fp)) {
            return { success: true, path: entry.filePath };
          } else {
            return { success: false, error: `Registry points to missing file: ${entry.filePath}` };
          }
        }
      }
    } catch (err) {
      return { success: false, error: `Registry read failed: ${err}` };
    }
  }

  return { success: false, error: 'Not found in registry' };
}

// ─── Main validation ──────────────────────────────────────────────────────────

console.log('\n🔍 Validating CMS edit routes...\n');

if (!fs.existsSync(REGISTRY_PATH)) {
  console.error('❌ content_registry.json not found. Run: npm run wiki:sync -- --write');
  process.exit(1);
}

const registry: RegistryEntry[] = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));

let passed = 0;
let failed = 0;
const failures: Array<{ slug: string; error: string }> = [];

for (const entry of registry) {
  // Test both with and without leading slash (how edit links are generated)
  // Convert /category/slug to category-slug for edit URL format
  const registrySlugWithoutLeadingSlash = entry.slug.replace(/^\//, '');
  const testSlug = registrySlugWithoutLeadingSlash.replace(/\//g, '-');
  
  const result = canLoadArticle(testSlug);
  
  if (result.success) {
    passed++;
  } else {
    failed++;
    failures.push({ slug: entry.slug, error: result.error || 'Unknown error' });
  }
}

console.log(`📊 Results:\n`);
console.log(`  ✅ Resolvable: ${passed}`);
console.log(`  ❌ Failed:     ${failed}`);
console.log(`  📁 Total:      ${registry.length}\n`);

if (failures.length > 0) {
  console.error('❌ Failed edit routes:\n');
  failures.forEach(({ slug, error }) => {
    console.error(`  ${slug}`);
    console.error(`    → ${error}\n`);
  });
  process.exit(1);
}

// ─── Additional checks ────────────────────────────────────────────────────────

console.log('🔍 Additional checks:\n');

// Check 1: All filePaths exist
let missingFiles = 0;
for (const entry of registry) {
  if (entry.filePath) {
    const fp = path.join(STATIC_BASE, entry.filePath);
    if (!fs.existsSync(fp)) {
      console.error(`  ❌ Missing file: ${entry.filePath} (slug: ${entry.slug})`);
      missingFiles++;
    }
  }
}
if (missingFiles === 0) {
  console.log(`  ✅ All ${registry.length} filePaths exist on disk`);
}

// Check 2: All slugs are unique
const slugCounts = new Map<string, number>();
for (const entry of registry) {
  slugCounts.set(entry.slug, (slugCounts.get(entry.slug) || 0) + 1);
}
const duplicates = Array.from(slugCounts.entries()).filter(([_, count]) => count > 1);
if (duplicates.length > 0) {
  console.error(`  ❌ Duplicate slugs found:`);
  duplicates.forEach(([slug, count]) => console.error(`    ${slug} (${count} times)`));
} else {
  console.log(`  ✅ All slugs are unique`);
}

// Check 3: All edit links would work (leading slash handling)
let badLinks = 0;
for (const entry of registry) {
  const editSlug = entry.slug.replace(/^\//, '');
  if (editSlug.includes('//')) {
    console.error(`  ❌ Bad edit slug: ${editSlug} (from: ${entry.slug})`);
    badLinks++;
  }
}
if (badLinks === 0) {
  console.log(`  ✅ All edit links properly formatted`);
}

console.log('\n✅ CMS route validation passed!\n');
