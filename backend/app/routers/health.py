"""
Health check endpoints
"""
from fastapi import APIRouter, Depends
from app.database import get_db

router = APIRouter()

@router.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "ObjectWire API",
        "version": "1.0.0"
    }

@router.get("/health/db")
async def database_health(db = Depends(get_db)):
    """Database connection health check"""
    try:
        # Simple query to test connection
        result = db.table("categories").select("id").limit(1).execute()
        return {
            "status": "healthy",
            "database": "connected",
            "message": "Database connection successful"
        }
    except Exception as e:
        return {
            "status": "unhealthy",
            "database": "disconnected",
            "error": str(e)
        }
