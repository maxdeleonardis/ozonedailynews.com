#!/usr/bin/env tsx
// =============================================================================
// CANONICAL TAG AUTO-FIXER
// Automatically adds canonical tags to all pages missing them
// =============================================================================

import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://www.objectwire.org';
const REPORT_PATH = path.join(process.cwd(), 'canonical-report.json');

interface PageToFix {
  route: string;
  path: string;
  issues: string[];
}

interface Report {
  pagesWithoutCanonical: PageToFix[];
}

function getCanonicalUrl(route: string): string {
  // Clean up route
  let cleanRoute = route.replace(/^\/+/, '');
  if (cleanRoute === '') return BASE_URL;
  return `${BASE_URL}/${cleanRoute}`;
}

function fixStaticMetadata(content: string, canonicalUrl: string): string {
  // Pattern 1: export const metadata: Metadata = { ... }
  const metadataPattern = /(export const metadata:\s*Metadata\s*=\s*\{)([\s\S]*?)(\n\};)/;
  const match = content.match(metadataPattern);
  
  if (!match) {
    return content; // No metadata found, skip
  }
  
  const [fullMatch, opening, metadataBody, closing] = match;
  
  // Check if alternates already exists
  if (metadataBody.includes('alternates:') || metadataBody.includes('canonical:')) {
    return content; // Already has canonical
  }
  
  // Find where to insert (after description or keywords, before closing)
  let newMetadataBody = metadataBody;
  
  // Strategy: Add after keywords if it exists, otherwise after description
  if (metadataBody.includes('keywords:')) {
    // Find the end of keywords array
    const keywordsPattern = /keywords:\s*\[[\s\S]*?\],?/;
    newMetadataBody = metadataBody.replace(keywordsPattern, (keywordsMatch) => {
      const needsComma = !keywordsMatch.trim().endsWith(',');
      return keywordsMatch.trimEnd() + (needsComma ? ',' : '') + 
             `\n  alternates: {\n    canonical: '${canonicalUrl}',\n  },`;
    });
  } else if (metadataBody.includes('description:')) {
    // Find the end of description
    const descPattern = /description:\s*["'][^"']*["'],?/;
    newMetadataBody = metadataBody.replace(descPattern, (descMatch) => {
      const needsComma = !descMatch.trim().endsWith(',');
      return descMatch.trimEnd() + (needsComma ? ',' : '') +
             `\n  alternates: {\n    canonical: '${canonicalUrl}',\n  },`;
    });
  } else {
    // Just add at the beginning
    newMetadataBody = `\n  alternates: {\n    canonical: '${canonicalUrl}',\n  },` + metadataBody;
  }
  
  return content.replace(fullMatch, opening + newMetadataBody + closing);
}

function fixGenerateMetadata(content: string, canonicalUrl: string): string {
  // Pattern: export async function generateMetadata(...): Promise<Metadata> {
  // This is trickier - we need to find the return statement
  
  const generatePattern = /export async function generateMetadata[\s\S]*?return\s*\{([\s\S]*?)\n\s*\};/;
  const match = content.match(generatePattern);
  
  if (!match) {
    return content;
  }
  
  const [fullMatch, metadataBody] = match;
  
  if (metadataBody.includes('alternates:') || metadataBody.includes('canonical:')) {
    return content;
  }
  
  // Add alternates after title
  let newMetadataBody = metadataBody;
  const titlePattern = /title:\s*[^,]+,/;
  newMetadataBody = metadataBody.replace(titlePattern, (titleMatch) => {
    return titleMatch + `\n    alternates: {\n      canonical: '${canonicalUrl}',\n    },`;
  });
  
  return content.replace(fullMatch, fullMatch.replace(metadataBody, newMetadataBody));
}

function addMetadataToClientComponent(content: string, canonicalUrl: string, route: string): string {
  // For client components, we can't add metadata directly
  // We need to suggest moving metadata to a parent layout or creating a server component wrapper
  console.log(`   ⚠️  Skipping client component: ${route}`);
  console.log(`      Client components can't export metadata. Consider:`)
  console.log(`      1. Moving metadata to parent layout.tsx`);
  console.log(`      2. Creating a server component wrapper`);
  return content;
}

function fixPageFile(filePath: string, canonicalUrl: string, route: string): boolean {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;
    
    // Check if it's a client component
    const isClientComponent = /^['"]use client['"];?/m.test(content);
    
    if (isClientComponent) {
      content = addMetadataToClientComponent(content, canonicalUrl, route);
      if (content === originalContent) {
        return false; // No changes made
      }
    } else {
      // Try fixing static metadata first
      content = fixStaticMetadata(content, canonicalUrl);
      
      // If no changes, try generateMetadata
      if (content === originalContent) {
        content = fixGenerateMetadata(content, canonicalUrl);
      }
    }
    
    // Only write if changes were made
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf-8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`   ❌ Error fixing ${filePath}:`, error);
    return false;
  }
}

async function main() {
  console.log('🔧 Starting automatic canonical tag fixes...\n');
  
  // Read the report
  if (!fs.existsSync(REPORT_PATH)) {
    console.error('❌ canonical-report.json not found. Run validate script first.');
    process.exit(1);
  }
  
  const report: Report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf-8'));
  const pagesToFix = report.pagesWithoutCanonical;
  
  console.log(`Found ${pagesToFix.length} pages to fix.\n`);
  
  let fixed = 0;
  let skipped = 0;
  let failed = 0;
  
  for (const page of pagesToFix) {
    const filePath = path.join(process.cwd(), page.path);
    const canonicalUrl = getCanonicalUrl(page.route);
    
    if (!fs.existsSync(filePath)) {
      console.log(`   ⚠️  File not found: ${page.path}`);
      failed++;
      continue;
    }
    
    const success = fixPageFile(filePath, canonicalUrl, page.route);
    
    if (success) {
      console.log(`   ✅ Fixed: ${page.route}`);
      fixed++;
    } else {
      console.log(`   ⏭️  Skipped: ${page.route}`);
      skipped++;
    }
  }
  
  console.log('\n=============================================================================');
  console.log('SUMMARY');
  console.log('=============================================================================\n');
  console.log(`   ✅ Fixed: ${fixed}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   ❌ Failed: ${failed}`);
  console.log(`   📊 Total: ${pagesToFix.length}\n`);
  
  if (fixed > 0) {
    console.log('✅ Run validation script again to verify all fixes:\n');
    console.log('   npx tsx scripts/validate-canonical-tags.ts\n');
  }
}

main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});
