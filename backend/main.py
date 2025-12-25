"""
ObjectWire Backend API
FastAPI application for content management, editorial workflow, and AI integrations
"""
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import uvicorn

from app.config import settings
from app.database import init_db
from app.routers import articles, categories, editorial, health

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Initialize database connection on startup"""
    await init_db()
    yield
    # Cleanup on shutdown if needed

app = FastAPI(
    title="ObjectWire API",
    description="Backend API for ObjectWire hybrid intelligence platform",
    version="1.0.0",
    lifespan=lifespan,
    docs_url="/api/docs",
    redoc_url="/api/redoc"
)

# CORS configuration for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(health.router, prefix="/api", tags=["Health"])
app.include_router(articles.router, prefix="/api/articles", tags=["Articles"])
app.include_router(categories.router, prefix="/api/categories", tags=["Categories"])
app.include_router(editorial.router, prefix="/api/editorial", tags=["Editorial Workflow"])

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "ObjectWire API",
        "version": "1.0.0",
        "docs": "/api/docs"
    }

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )
