# ObjectWire Frontend - Project Structure

**Last Updated:** January 1, 2026

## Directory Organization

```
/home/jack/Documents/Objectwire/Objectwire-Frontend/
│
├── app/                          # Next.js App Router
│   ├── admin/                    # Admin dashboard for article management
│   ├── blog/                     # Blog pages and article routing
│   ├── editorial-standards/      # Editorial policy page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout (nav/footer)
│   └── page.tsx                  # Homepage
│
├── backend/                      # FastAPI backend (Python)
│   ├── app/
│   │   ├── routers/
│   │   │   ├── articles.py       # Article API endpoints
│   │   │   ├── categories.py    # Category management
│   │   │   └── dashboard.py     # Dashboard data
│   │   ├── config.py             # Backend configuration
│   │   ├── database.py           # Database connection
│   │   └── models.py             # SQLAlchemy models
│   ├── main.py                   # FastAPI app entry point
│   └── requirements.txt          # Python dependencies
│
├── components/                   # React components
│   ├── article-renderer.tsx      # Block-based article renderer
│   └── ui/                       # Radix UI components
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── tabs.tsx
│       └── textarea.tsx
│
├── lib/                          # Utilities and contexts
│   ├── articles-context.tsx      # Article state management
│   └── utils.ts                  # Helper functions
│
├── scripts/                      # Build and utility scripts
│   ├── import-rss-to-blocks.ts   # RSS to blocks converter (active)
│   ├── start-dashboard.sh        # Dashboard startup script
│   └── legacy/
│       └── import-rss-blogs.ts   # Old RSS importer
│
├── public/                       # Static assets
│   └── editorial-standards.md    # Markdown version of standards
│
├── docs/                         # Documentation
│   ├── PROJECT_STRUCTURE.md      # This file
│   ├── Dashboard.md              # Dashboard documentation
│   └── TEST_RESULTS.md           # Test results and notes
│
├── Docs/                         # Original documentation
│   ├── Objectwire Whitepaper.md
│   ├── Editorial Standard.txt
│   ├── Private Policy.txt
│   ├── Terms of Services.txt
│   └── ...
│
├── config/                       # Configuration files
│   └── package-scripts.json      # NPM scripts config
│
├── .next/                        # Next.js build output (gitignored)
├── node_modules/                 # Dependencies (gitignored)
├── .venv/                        # Python virtual env (gitignored)
│
├── components.json               # shadcn/ui config
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.mjs            # PostCSS configuration
├── package.json                  # Node dependencies
├── LOG.md                        # Development log (primary)
└── README.md                     # Project readme

```

## Key Files

### Configuration
- `next.config.ts` - Next.js settings
- `tsconfig.json` - TypeScript compiler settings
- `components.json` - shadcn/ui component configuration
- `package.json` - Node.js dependencies and scripts
- `postcss.config.mjs` - PostCSS/Tailwind configuration

### Core Application
- `app/layout.tsx` - Root layout with navigation
- `app/page.tsx` - Homepage
- `app/admin/page.tsx` - Article editor dashboard
- `lib/articles-context.tsx` - Article state management

### Backend Integration (Ready)
- `backend/app/routers/articles.py` - API endpoints
- `backend/app/models.py` - Database models
- `backend/main.py` - FastAPI server

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run import-blogs` - Import RSS feeds to blocks

## Data Flow

### Current (Phase 3.3)
```
RSS Feed → import-rss-to-blocks.ts → data/imported-articles.ts → articles-context.tsx → localStorage
                                                                                      ↓
                                                                            Admin Dashboard (/admin)
                                                                                      ↓
                                                                            Blog Pages (/blog/[slug])
```

### Planned (Phase 4)
```
RSS Feed → Backend LLM Service → FastAPI /articles → Frontend API Client → Admin Dashboard
                ↓                        ↓                                        ↓
         Auto-generate blocks    PostgreSQL/Supabase                    Live editing & preview
```

## Article Block Structure

Articles use a flexible block-based system:

```typescript
interface ArticleBlock {
  id: string;
  type: 'paragraph' | 'heading' | 'summary' | 'stat-grid' | 'key-mechanisms' | 'sources' | 'callout';
  content: string;
  level?: number;                  // For headings (2-4)
  items?: Array<{...}>;            // For key-mechanisms
  stats?: Array<{...}>;            // For stat-grid
  sources?: string[];              // For sources block
}
```

Each article contains an array of blocks rendered sequentially.

## Development Workflow

1. **Local Development:**
   ```bash
   npm run dev                    # Runs on localhost:3000
   ```

2. **Import RSS Articles:**
   ```bash
   npm run import-blogs           # Fetch and convert RSS to blocks
   ```

3. **Edit Articles:**
   - Navigate to `/admin`
   - Create/edit articles with block editor
   - Preview and publish

4. **Backend (when ready):**
   ```bash
   cd backend
   python main.py                 # Start FastAPI server
   ```

## File Organization Principles

- **`app/`** - All Next.js pages and routes
- **`components/`** - Reusable React components
- **`lib/`** - Utilities, helpers, contexts
- **`scripts/`** - Build scripts and tools
- **`backend/`** - Python FastAPI backend
- **`docs/`** - Internal documentation
- **`Docs/`** - Original policy documents
- **`config/`** - Configuration files

## Notes

- Main development log: `LOG.md`
- Backend is ready but not yet connected to frontend
- Admin dashboard uses localStorage (temporary)
- RSS importer converts to block format automatically
- Ready for LLM integration in Phase 5
