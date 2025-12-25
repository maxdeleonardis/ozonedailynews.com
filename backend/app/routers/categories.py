"""
Category management endpoints
"""
from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.database import get_db
from app.models import Category, CategoryCreate

router = APIRouter()

@router.get("/", response_model=List[Category])
async def list_categories(db = Depends(get_db)):
    """
    List all categories
    """
    try:
        result = db.table("categories").select("*").order("name").execute()
        return result.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch categories: {str(e)}")

@router.get("/{category_id}", response_model=Category)
async def get_category(category_id: str, db = Depends(get_db)):
    """
    Get category by ID
    """
    try:
        result = db.table("categories").select("*").eq("id", category_id).execute()
        if not result.data:
            raise HTTPException(status_code=404, detail="Category not found")
        return result.data[0]
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch category: {str(e)}")

@router.post("/", response_model=Category, status_code=201)
async def create_category(category: CategoryCreate, db = Depends(get_db)):
    """
    Create new category
    """
    try:
        result = db.table("categories").insert(category.model_dump()).execute()
        if not result.data:
            raise HTTPException(status_code=500, detail="Failed to create category")
        return result.data[0]
    except Exception as e:
        if "duplicate" in str(e).lower():
            raise HTTPException(status_code=400, detail="Category with this slug already exists")
        raise HTTPException(status_code=500, detail=f"Failed to create category: {str(e)}")

@router.delete("/{category_id}", status_code=204)
async def delete_category(category_id: str, db = Depends(get_db)):
    """
    Delete category
    """
    try:
        result = db.table("categories").delete().eq("id", category_id).execute()
        if not result.data:
            raise HTTPException(status_code=404, detail="Category not found")
        return None
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete category: {str(e)}")
