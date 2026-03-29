# ObjectWire Frontend

**Professional intelligence platform with block-based article editor and AI-ready architecture**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/) [![FastAPI](https://img.shields.io/badge/Backend-FastAPI-green)](https://fastapi.tiangolo.com/)

# ObjectWire Frontend

**Professional intelligence platform with block-based article editor and AI-ready architecture**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/) [![FastAPI](https://img.shields.io/badge/Backend-FastAPI-green)](https://fastapi.tiangolo.com/)

## 📚 Documentation

**Core Setup & Architecture:**
- [INSTALLATION.md](INSTALLATION.md), Setup and environment configuration
- [SUPABASE_SETUP.md](SUPABASE_SETUP.md), Database, CLI workflow, and integration guide
- [ARCHITECTURE_SPRINT.md](ARCHITECTURE_SPRINT.md), Two-room architecture pattern

**Component System:** 🆕
- [COMPONENT-SYSTEM-SUMMARY.md](Docs/COMPONENT-SYSTEM-SUMMARY.md), Overview of DynamicNewsArticle component
- [DYNAMIC-NEWS-ARTICLE-COMPONENT.md](Docs/DYNAMIC-NEWS-ARTICLE-COMPONENT.md), Complete technical documentation
- [QUICK-START-ARTICLE-TEMPLATE.md](Docs/QUICK-START-ARTICLE-TEMPLATE.md), 5-minute getting started guide
- [COMPONENT-VISUAL-GUIDE.md](Docs/COMPONENT-VISUAL-GUIDE.md), Visual reference and layouts
- [MIGRATION-GUIDE.md](Docs/MIGRATION-GUIDE.md) — Before/after migration examples

**Strategic Documents:**
- [WHITEPAPER.md](WHITEPAPER.md), Platform vision and business strategy
- [BLACKBOOK_BLUEPRINT.md](BLACKBOOK_BLUEPRINT.md), Prediction market design
- [LOG.md](LOG.md), Development history and changelog

**Backend:**
- [backend/README.md](backend/README.md), FastAPI backend documentation

---

## Quick Start

```bash
npm install           # Install dependencies
npm run dev           # Start dev server → localhost:3000
npm run import-blogs  # Import RSS articles
```

## Features

### ✅ DynamicNewsArticle Component System 🆕
- **Reusable SEO-optimized article template** based on Minnesota fraud article
- **7 specialized sub-components** (CaseOverview, ProcessDiagram, KeyFigures, etc.)
- **70-80% code reduction** per article
- **Responsive sidebar** with timeline, documents, related articles
- **Type-safe** with full TypeScript support
- **Comprehensive documentation** with examples
- See: [Example Article](/app/example-investigation/page.tsx) or [Component Docs](Docs/COMPONENT-SYSTEM-SUMMARY.md)

### ✅ Block-Based Article Editor (`/admin`)
- 7 content block types with specialized editors
- Drag-and-drop reordering
- Live preview and publishing
- Category & metadata management
- **Currently localStorage** (backend integration ready)

### ✅ RSS Import System
- Converts objectwire.org RSS to structured blocks
- Smart category mapping
- Auto-generates TypeScript files
- `npm run import-blogs`

### ✅ Article Rendering
- Flexible block-based content structure
- Hover effects on **bold** text
- Animated statistics
- Source citations

## Article Blocks

| Type | Description | Use Case |
|------|-------------|----------|
| `paragraph` | Main content with **bold** support | Body text |
| `heading` | Section headers (H2-H4) | Sections |
| `summary` | Highlighted executive summary | Key takeaways |
| `stat-grid` | Animated counting statistics | Data points |
| `key-mechanisms` | Numbered list with descriptions | Processes |
| `sources` | Citation list | References |
| `callout` | Important info box | Highlights |

## Project Structure

```
ObjectWire-Frontend/
│
├── app/                          # Next.js App Router
│   ├── admin/page.tsx            # Article editor dashboard
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
│   │   │   ├── categories.py     # Category management
│   │   │   └── dashboard.py      # Dashboard data
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
├── config/                       # Configuration files
│   └── package-scripts.json      # NPM scripts config
│
├── public/                       # Static assets
│   └── editorial-standards.md    # Markdown version of standards
│
├── Docs/                         # Original documentation
│   ├── Objectwire Whitepaper.md
│   ├── Editorial Standard.txt
│   ├── Private Policy.txt
│   └── Terms of Services.txt
│
├── components.json               # shadcn/ui config
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.mjs            # PostCSS configuration
├── package.json                  # Node dependencies
├── LOG.md                        # Development log & progress
└── README.md                     # Project overview (this file)
```

## Tech Stack

**Frontend:**
- Next.js 15.5.4 (App Router, Turbopack)
- TypeScript 5
- Tailwind CSS 4
- Radix UI components
- Framer Motion animations
- React Context API for state

**Backend (Ready for Integration):**
- FastAPI (Python)
- PostgreSQL/Supabase (planned)
- RESTful API endpoints

**Tools:**
- xml2js - RSS feed parsing
- tsx - TypeScript script execution
- Turbopack - Fast builds

## Development Commands

```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Production build
npm run start        # Production server
npm run import-blogs # Import RSS articles to blocks
```

## Admin Dashboard

Access at `/admin` to:
- **Create articles** with block-based editor
- **Edit existing** articles
- **Manage metadata** (category, author, tags)
- **Preview** before publishing
- **Publish or save** as draft

**Features:**
- Drag-drop block reordering
- 7 specialized block type editors
- Live URL slug generation
- Category dropdown
- Author and read time metadata
- Block type reference guide

## Data Flow

### Current (Phase 3.3)
```
RSS Feed 
  ↓
scripts/import-rss-to-blocks.ts
  ↓
lib/articles-context.tsx (React Context)
  ↓
localStorage (browser)
  ↓
Admin Dashboard (/admin) ↔ Blog Pages (/blog)
```

### Planned (Phase 4-5)
```
RSS Feed / LLM Input
  ↓
Backend FastAPI Service
  ↓
Multiple LLM Providers (Grok, Gemini, OpenAI)
  ↓
Auto-generated Article Blocks
  ↓
PostgreSQL Database
  ↓
Frontend API Client
  ↓
Admin Dashboard ↔ Blog Pages ↔ Email/RSS Distribution
```

## Roadmap

### ✅ Phase 3.3 (Complete)
- Block-based article editor
- Admin dashboard fully functional
- RSS import system with block conversion
- Component library (Radix UI)
- State management via React Context

### 🚧 Phase 4 (Next)
- Connect frontend to FastAPI backend
- Replace localStorage with API calls to `/backend/app/routers/articles.py`
- User authentication for admin access
- Media upload and asset management
- Version history and revision tracking

### 📋 Phase 5 (Planned)
- **LLM Integration:**
  - Multiple providers: Grok API, Gemini API, OpenAI API
  - Provider selection based on task type
  - AI-powered article generation from topics/URLs
  - Auto-draft from RSS feeds
  - Fact-checking and source verification
  - Auto-categorization and tagging
  - SEO optimization
- **Automated Publishing:**
  - RSS → AI processing → auto-publish pipeline
  - Scheduled content generation
  - Multi-language support
  - A/B testing for headlines

## Integration Status

| Component | Status | Notes |
|-----------|--------|-------|
| Frontend Admin | ✅ Complete | Fully functional dashboard |
| Block Editor | ✅ Complete | All 7 block types working |
| RSS Import | ✅ Complete | Auto-converts to blocks |
| Blog Display | ✅ Complete | Block renderer working |
| localStorage | ✅ Complete | Temporary, works for now |
| Backend API | ⏳ Ready | FastAPI server ready, not connected |
| Authentication | ❌ Not started | Phase 4 task |
| LLM Integration | ❌ Not started | Phase 5 task |
| Database | ❌ Not started | PostgreSQL/Supabase in Phase 4 |

## Installation & Setup

### Requirements
- Node.js 18+
- npm or yarn
- Python 3.9+ (for backend)

### Frontend Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Import articles from RSS
npm run import-blogs

# Build for production
npm run build
npm run start
```

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py            # Runs on localhost:8000
```

## Key Files Reference

### Core Application
- `app/admin/page.tsx` - Article editor (925 lines)
- `lib/articles-context.tsx` - Article state management (244 lines)
- `components/article-renderer.tsx` - Block renderer
- `scripts/import-rss-to-blocks.ts` - RSS to blocks converter (280 lines)

### Configuration
- `next.config.ts` - Next.js settings
- `tsconfig.json` - TypeScript compiler options
- `tailwind.config.ts` - Tailwind CSS configuration
- `components.json` - shadcn/ui component paths

### Backend (Python)
- `backend/main.py` - FastAPI entry point
- `backend/app/models.py` - SQLAlchemy models
- `backend/app/routers/articles.py` - Article endpoints

## Development Workflow

1. **Design:** Block-based architecture for flexible content
2. **Build:** Editor dashboard with 7 block types
3. **Import:** RSS feeds converted to blocks automatically
4. **Extend:** Backend LLM integration in next phases
5. **Scale:** Multi-provider AI with auto-publishing

## Contact & Support

- **Email:** jack@objectwire.org
- **Phone:** (575) 495-0323
- **Location:** Austin, TX
- **Development Log:** See [LOG.md](LOG.md) for complete progress history

## Documentation

- **LOG.md** - Complete development history and progress tracking
- **This README** - Project overview and structure

---

*Proprietary - ObjectWire, 2026*
