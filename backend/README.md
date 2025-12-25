# ObjectWire Backend API

FastAPI backend for ObjectWire hybrid intelligence platform. Provides content management, editorial workflow, and AI integration capabilities.

## Features

- **Content Management**: Full CRUD operations for articles, categories, and tags
- **Editorial Workflow**: Draft → Review → Approved → Published state management
- **Supabase Integration**: PostgreSQL database with real-time capabilities
- **API Documentation**: Auto-generated OpenAPI docs at `/api/docs`
- **Version Control**: Article versioning and workflow history tracking
- **Scalable Architecture**: Async Python with FastAPI for high performance

## Tech Stack

- **FastAPI** - Modern async web framework
- **Supabase** - PostgreSQL database with authentication
- **Pydantic** - Data validation and serialization
- **Uvicorn** - ASGI server

## Quick Start

### 1. Set Up Supabase

1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Go to Settings → API to get your credentials:
   - `SUPABASE_URL`: API URL
   - `SUPABASE_KEY`: anon public key
   - `SUPABASE_SERVICE_KEY`: service_role key

### 2. Initialize Database Schema

1. Go to Supabase SQL Editor
2. Copy schema from `app/database.py` (DATABASE_SCHEMA constant)
3. Execute the SQL to create tables, indexes, and default data

### 3. Install Dependencies

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Linux/Mac:
source venv/bin/activate
# On Windows:
venv\\Scripts\\activate

# Install dependencies
pip install -r requirements.txt
```

### 4. Configure Environment

```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your credentials
nano .env
```

### 5. Run the Server

```bash
# Development mode with auto-reload
uvicorn main:app --reload --port 8000

# Production mode
uvicorn main:app --host 0.0.0.0 --port 8000
```

API will be available at:
- **API**: http://localhost:8000
- **Docs**: http://localhost:8000/api/docs
- **ReDoc**: http://localhost:8000/api/redoc

## API Endpoints

### Health & Monitoring

- `GET /` - API information
- `GET /api/health` - Health check
- `GET /api/health/db` - Database connection check

### Articles

- `GET /api/articles` - List articles (paginated, filterable)
- `GET /api/articles/{id}` - Get article by ID
- `GET /api/articles/slug/{slug}` - Get article by slug
- `POST /api/articles` - Create article
- `PATCH /api/articles/{id}` - Update article
- `DELETE /api/articles/{id}` - Delete article

### Categories

- `GET /api/categories` - List all categories
- `GET /api/categories/{id}` - Get category
- `POST /api/categories` - Create category
- `DELETE /api/categories/{id}` - Delete category

### Editorial Workflow

- `POST /api/editorial/{article_id}/transition` - Transition workflow state
- `GET /api/editorial/{article_id}/history` - Get workflow history
- `GET /api/editorial/pending-review` - Get articles pending review
- `GET /api/editorial/stats` - Get editorial statistics

## Workflow States

Articles follow this lifecycle:

```
draft → in_review → approved → published
   ↓         ↓          ↓          ↓
   └────────────────archived───────┘
```

Valid transitions:
- **draft** → in_review, archived
- **in_review** → draft, approved, archived
- **approved** → published, in_review
- **published** → archived, in_review
- **archived** → draft

## Database Schema

Key tables:
- **articles**: Main content storage
- **categories**: Article categorization
- **tags**: Article tagging system
- **article_tags**: Junction table for many-to-many tags
- **workflow_history**: Audit trail for state changes
- **article_versions**: Version control for content
- **api_keys**: Subscriber API access management

## Development

### Project Structure

```
backend/
├── main.py                 # FastAPI application entry point
├── requirements.txt        # Python dependencies
├── .env.example           # Environment variables template
├── app/
│   ├── config.py          # Configuration management
│   ├── database.py        # Supabase client & schema
│   ├── models.py          # Pydantic models
│   └── routers/           # API endpoints
│       ├── health.py      # Health checks
│       ├── articles.py    # Article CRUD
│       ├── categories.py  # Category management
│       └── editorial.py   # Workflow management
└── README.md
```

### Adding New Endpoints

1. Create router file in `app/routers/`
2. Define Pydantic models in `app/models.py`
3. Import and include router in `main.py`
4. Update documentation

### Testing

```bash
# Run FastAPI test client
pytest

# Manual testing with curl
curl http://localhost:8000/api/health

# Or use the interactive docs at /api/docs
```

## Next Steps

- [ ] User authentication with JWT
- [ ] API key validation middleware
- [ ] Rate limiting implementation
- [ ] AI content generation endpoints
- [ ] Vector search integration
- [ ] Webhook system for real-time updates
- [ ] Analytics and metrics tracking

## Contact

For issues or questions about the backend API, contact the ObjectWire team.
