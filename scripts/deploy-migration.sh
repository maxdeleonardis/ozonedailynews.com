#!/bin/bash

# Supabase Architecture Sprint - Deployment Script
# This script guides you through pushing the database changes

set -e  # Exit on error

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  ObjectWire Architecture Sprint - Database Migration          ║"
echo "║  Two-Room Architecture: Kitchen (drafts) vs Dining Room (live) ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Check if Supabase CLI is installed
if ! command -v npx &> /dev/null; then
    echo "❌ Error: npx not found. Please install Node.js first."
    exit 1
fi

echo "📋 Migration Overview:"
echo "   • Add 'status' column (draft/published/archived)"
echo "   • Create indexes for performance"
echo "   • Update RLS policies (public sees published only)"
echo "   • Migrate existing data"
echo ""

# Step 1: Check if linked
echo "🔗 Step 1: Checking Supabase link..."
PROJECT_REF="jdmdgndgmclsa"

if ! npx supabase projects list 2>/dev/null | grep -q "$PROJECT_REF"; then
    echo "⚠️  Not linked to Supabase project. Linking now..."
    npx supabase link --project-ref "$PROJECT_REF" || {
        echo "❌ Failed to link. Please run manually:"
        echo "   npx supabase login"
        echo "   npx supabase link --project-ref $PROJECT_REF"
        exit 1
    }
else
    echo "✅ Linked to project: $PROJECT_REF"
fi

echo ""

# Step 2: Review migration
echo "📄 Step 2: Migration file to be applied:"
echo "   supabase/migrations/20260113000921_add_status_column_and_update_rls.sql"
echo ""
echo "Preview (first 20 lines):"
echo "─────────────────────────────────────────────────────────────────"
head -20 supabase/migrations/20260113000921_add_status_column_and_update_rls.sql
echo "─────────────────────────────────────────────────────────────────"
echo ""

# Step 3: Confirm
read -p "🚀 Ready to push this migration to production? (yes/no): " CONFIRM

if [ "$CONFIRM" != "yes" ]; then
    echo "❌ Cancelled. No changes made."
    echo ""
    echo "To push later, run:"
    echo "   npx supabase db push"
    exit 0
fi

echo ""
echo "🚀 Step 3: Pushing migration to production..."

# Push the migration
if npx supabase db push; then
    echo ""
    echo "╔════════════════════════════════════════════════════════════════╗"
    echo "║  ✅ SUCCESS! Database migration completed                      ║"
    echo "╚════════════════════════════════════════════════════════════════╝"
    echo ""
    echo "📊 What changed:"
    echo "   ✓ Added 'status' column to articles table"
    echo "   ✓ Created indexes for faster queries"
    echo "   ✓ Updated RLS policies (public = published only)"
    echo "   ✓ Migrated existing data"
    echo ""
    echo "🧪 Next Steps:"
    echo "   1. Install dependencies: npm install @supabase/ssr"
    echo "   2. Start dev server: npm run dev"
    echo "   3. Test the flow:"
    echo "      • Create article: /admin/editor/new"
    echo "      • Save as draft → NOT visible on /blog"
    echo "      • Click Publish → IS visible on /blog"
    echo ""
    echo "📚 Documentation:"
    echo "   • Architecture details: ARCHITECTURE_SPRINT.md"
    echo "   • CLI commands: SUPABASE_CLI_GUIDE.md"
    echo "   • Quick summary: SPRINT_SUMMARY.md"
    echo ""
else
    echo ""
    echo "❌ Migration failed. Check the error above."
    echo ""
    echo "Troubleshooting:"
    echo "   1. Ensure you're logged in: npx supabase login"
    echo "   2. Check project link: npx supabase status"
    echo "   3. View remote status: npx supabase projects list"
    echo ""
    exit 1
fi
