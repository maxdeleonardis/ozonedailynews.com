"""
Database connection and session management
"""
from supabase import create_client, Client
from typing import Optional
from app.config import settings

# Global Supabase client
supabase: Optional[Client] = None

async def init_db():
    """Initialize Supabase client"""
    global supabase
    if settings.SUPABASE_URL and settings.SUPABASE_KEY:
        supabase = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)
        print("✓ Connected to Supabase")
    else:
        print("⚠ Warning: Supabase credentials not configured")

def get_db() -> Client:
    """Dependency to get database client"""
    if supabase is None:
        raise Exception("Database not initialized")
    return supabase

# Database schema - to be executed in Supabase SQL Editor
DATABASE_SCHEMA = """
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) UNIQUE NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Tags table
CREATE TABLE IF NOT EXISTS tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) UNIQUE NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Editorial workflow states
CREATE TYPE workflow_status AS ENUM ('draft', 'in_review', 'approved', 'published', 'archived');

-- Articles table
CREATE TABLE IF NOT EXISTS articles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    hero_image TEXT,
    category_id UUID REFERENCES categories(id),
    author VARCHAR(200),
    read_time INTEGER,
    status workflow_status DEFAULT 'draft',
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    created_by UUID,
    updated_by UUID,
    view_count INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE
);

-- Article tags junction table
CREATE TABLE IF NOT EXISTS article_tags (
    article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (article_id, tag_id)
);

-- Editorial workflow history
CREATE TABLE IF NOT EXISTS workflow_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
    from_status workflow_status,
    to_status workflow_status NOT NULL,
    comment TEXT,
    changed_by UUID,
    changed_at TIMESTAMP DEFAULT NOW()
);

-- Article versions (for tracking changes)
CREATE TABLE IF NOT EXISTS article_versions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
    title VARCHAR(500) NOT NULL,
    content TEXT NOT NULL,
    version_number INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    created_by UUID
);

-- API keys for subscribers
CREATE TABLE IF NOT EXISTS api_keys (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL,
    key_hash VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100),
    tier VARCHAR(50) DEFAULT 'free', -- free, pro, enterprise
    rate_limit INTEGER DEFAULT 60,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    expires_at TIMESTAMP,
    last_used_at TIMESTAMP
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category_id);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_api_keys_hash ON api_keys(key_hash);

-- Insert default categories
INSERT INTO categories (name, slug, description) VALUES
    ('AI & Technology', 'ai-technology', 'Artificial intelligence, machine learning, and emerging tech'),
    ('Crypto & Blockchain', 'crypto-blockchain', 'Cryptocurrency markets, blockchain technology, DeFi'),
    ('Finance & Markets', 'finance-markets', 'Stock markets, economic trends, financial analysis'),
    ('Politics & Policy', 'politics-policy', 'Political developments, policy changes, regulations')
ON CONFLICT (slug) DO NOTHING;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON articles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
"""
