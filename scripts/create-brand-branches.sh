#!/bin/zsh
# scripts/create-brand-branches.sh
# Creates one branch per sub-brand, updates the color scheme, creates a GitHub
# repo under maxdeleonardis, and pushes the branch as that repo's master.
#
# Run from repo root:  zsh scripts/create-brand-branches.sh

set -e
ROOT=$(pwd)

# ─── Brand definitions ────────────────────────────────────────────────────────
# Format: "branch:domain:site-name:slug:categories:slug-prefixes:canvas:ink:accent:footer:footer-text:footer-muted:footer-divider:footer-link:footer-link-hover"

BRANDS=(
  "basil:basilnews.com:BasilNews:basil:Finance,News,Business:/finance,/jobs,/markets,/news:#f6f5f2:#1c1c2e:#16a34a:#0f2d1a:#c8d8ce:#6b8870:#1a3d24:#86efac:#d1fae5"
  "honey:honeynewspaper.com:HoneyNewspaper:honey:Science,World,Culture,Health:/health,/environment,/ethics,/news:#f6f5f2:#1c1c2e:#d97706:#1c1309:#d8c8a8:#887848:#3a2a0e:#fcd34d:#fef3c7"
  "clover:cloverheadlines.com:CloverHeadlines:clover:Culture,Entertainment:/lifestyle,/fashion,/travel,/news:#faf5ff:#1c1c2e:#7c3aed:#1e1b4b:#c8c8e8:#7b7ba8:#312e81:#c4b5fd:#ede9fe"
  "obsidian:obsidianpaper.com:ObsidianPaper:obsidian:Tech,News,World:/security,/privacy,/tech,/news:#f6f5f2:#1c1c2e:#ea580c:#1a0e08:#d8c4b8:#886848:#3a1f0e:#fdba74:#fed7aa"
  "onyx:onyxtimes.org:OnyxTimes:onyx:World,Politics,News,Finance:/world,/politics,/governance,/news:#f8f8f8:#111111:#2d2d2d:#080808:#d0d0d0:#707070:#1e1e1e:#a0a0a0:#e0e0e0"
  "content:contentnewsnow.com:ContentNewsNow:content:Entertainment,Culture,Tech:/creators,/youtube,/news:#f6f5f2:#1c1c2e:#dc2626:#1a0808:#d8b8b8:#885050:#3a0e0e:#fca5a5:#fee2e2"
)

# ─── Process each brand ───────────────────────────────────────────────────────

for BRAND_DEF in "${BRANDS[@]}"; do
  IFS=':' read -r BRANCH DOMAIN SITE_NAME SLUG CATEGORIES SLUG_PREFIXES \
    CANVAS INK ACCENT FOOTER FOOTER_TEXT FOOTER_MUTED FOOTER_DIVIDER \
    FOOTER_LINK FOOTER_LINK_HOVER <<< "$BRAND_DEF"

  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "  Creating branch: $BRANCH  ($DOMAIN)"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  # 1. Create branch from master
  git checkout master
  git checkout -b "$BRANCH"

  # 2. Update CSS color variables using Python (reliable multiline handling)
  python3 - <<PYEOF
import re

with open('app/globals.css', 'r') as f:
    css = f.read()

replacements = {
    r'(--ozone-canvas:\s+)#[0-9a-fA-F]{3,8}':       r'\g<1>${CANVAS}',
    r'(--ozone-ink:\s+)#[0-9a-fA-F]{3,8}':           r'\g<1>${INK}',
    r'(--ozone-accent:\s+)#[0-9a-fA-F]{3,8}':        r'\g<1>${ACCENT}',
    r'(--ozone-footer:\s+)#[0-9a-fA-F]{3,8}':        r'\g<1>${FOOTER}',
    r'(--ozone-footer-text:\s+)#[0-9a-fA-F]{3,8}':   r'\g<1>${FOOTER_TEXT}',
    r'(--ozone-footer-muted:\s+)#[0-9a-fA-F]{3,8}':  r'\g<1>${FOOTER_MUTED}',
    r'(--ozone-footer-divider:\s+)#[0-9a-fA-F]{3,8}':r'\g<1>${FOOTER_DIVIDER}',
    r'(--ozone-footer-link:\s+)#[0-9a-fA-F]{3,8}':   r'\g<1>${FOOTER_LINK}',
    r'(--ozone-footer-link-hover:)#[0-9a-fA-F]{3,8}':r'\g<1>${FOOTER_LINK_HOVER}',
}

for pattern, replacement in replacements.items():
    css = re.sub(pattern, replacement, css)

with open('app/globals.css', 'w') as f:
    f.write(css)

print('  ✓ globals.css updated')
PYEOF

  # 3. Create .env.example with brand-specific values
  cat > .env.example << ENVEOF
# ─── ${SITE_NAME} | Brand Environment Variables ───────────────────────────────
# Copy this to .env.local and fill in the secrets.
# Set these same values in Railway for the ${DOMAIN} service.

# ── Brand identity ──────────────────────────────────────────────────────────
NEXT_PUBLIC_BRAND_SLUG=${SLUG}
NEXT_PUBLIC_SITE_NAME=${SITE_NAME}
NEXT_PUBLIC_SITE_URL=https://www.${DOMAIN}
NEXT_PUBLIC_SITE_EMAIL=editorial@${DOMAIN}
NEXT_PUBLIC_SITE_TWITTER=@${SLUG}news
NEXT_PUBLIC_SITE_CATEGORIES=${CATEGORIES}
NEXT_PUBLIC_SITE_SLUG_PREFIXES=${SLUG_PREFIXES}
GITHUB_DEFAULT_BRANCH=${BRANCH}

# ── Supabase (shared across all ONN brands) ─────────────────────────────────
NEXT_PUBLIC_SUPABASE_URL=https://vgxzkkigomwmdxtwazeg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>

# ── GitHub CMS bridge ───────────────────────────────────────────────────────
GITHUB_TOKEN=<fine-grained-PAT-with-contents:write>
GITHUB_OWNER=maxdeleonardis
GITHUB_REPO=${DOMAIN}

# ── Analytics ───────────────────────────────────────────────────────────────
NEXT_PUBLIC_GA_MEASUREMENT_ID=<GA4-measurement-id>
ENVEOF

  echo "  ✓ .env.example created"

  # 4. Commit the brand configuration
  # Force-add .env.example — it's a template (no secrets), should be tracked
  git add app/globals.css
  git add -f .env.example
  git commit -m "brand: ${SLUG} — ${SITE_NAME} color scheme + env config"

  echo "  ✓ Branch ${BRANCH} committed"

done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  All branches created. Creating GitHub repos..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# ─── Create GitHub repos and push ─────────────────────────────────────────────

REPO_DEFS=(
  "basil:basilnews.com:BasilNews — Personal Finance, Job Listings, Market Movements"
  "honey:honeynewspaper.com:HoneyNewspaper — Human-Centered Journalism, Ethics, Environment"
  "clover:cloverheadlines.com:CloverHeadlines — Luxury Lifestyle, Fashion, Travel"
  "obsidian:obsidianpaper.com:ObsidianPaper — Cybersecurity, Privacy, Data Security"
  "onyx:onyxtimes.org:OnyxTimes — World Events, Politics, Governance"
  "content:contentnewsnow.com:ContentNewsNow — Content Creators, YouTube, Creator Economy"
)

for REPO_DEF in "${REPO_DEFS[@]}"; do
  IFS=':' read -r BRANCH DOMAIN DESCRIPTION <<< "$REPO_DEF"

  echo ""
  echo "  → Creating repo maxdeleonardis/${DOMAIN}..."

  # Create private repo on maxdeleonardis account
  gh repo create "maxdeleonardis/${DOMAIN}" \
    --private \
    --description "$DESCRIPTION" \
    --disable-wiki \
    --disable-issues=false \
    2>/dev/null && echo "  ✓ Repo created" || echo "  ⚠ Repo may already exist — continuing"

  # Push the brand branch as master on the new repo (SSH — maxdeleonardis auth)
  git checkout "$BRANCH"
  git remote remove "$BRANCH" 2>/dev/null || true
  git remote add "$BRANCH" "git@github.com:maxdeleonardis/${DOMAIN}.git"
  git push "$BRANCH" "${BRANCH}:master" --force

  echo "  ✓ Pushed to https://github.com/maxdeleonardis/${DOMAIN}"

done

# Return to master
git checkout master

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✅ All done. Summary:"
echo ""
echo "  basil    → https://github.com/maxdeleonardis/basilnews.com"
echo "  honey    → https://github.com/maxdeleonardis/honeynewspaper.com"
echo "  clover   → https://github.com/maxdeleonardis/cloverheadlines.com"
echo "  obsidian → https://github.com/maxdeleonardis/obsidianpaper.com"
echo "  onyx     → https://github.com/maxdeleonardis/onyxtimes.org"
echo "  content  → https://github.com/maxdeleonardis/contentnewsnow.com"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
