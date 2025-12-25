"""
Article management endpoints
"""
from fastapi import APIRouter, HTTPException, Depends, Query
from typing import List, Optional
from datetime import datetime
from app.database import get_db
from app.models import Article, ArticleCreate, ArticleUpdate, ArticleList, WorkflowStatus

router = APIRouter()

@router.get("/", response_model=ArticleList)
async def list_articles(
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    status: Optional[WorkflowStatus] = None,
    category_id: Optional[str] = None,
    is_featured: Optional[bool] = None,
    db = Depends(get_db)
):
    """
    List articles with pagination and filters
    """
    try:
        # Build query
        query = db.table("articles").select("*, category:categories(*), tags:article_tags(tag:tags(*))")
        
        # Apply filters
        if status:
            query = query.eq("status", status.value)
        if category_id:
            query = query.eq("category_id", category_id)
        if is_featured is not None:
            query = query.eq("is_featured", is_featured)
        
        # Get total count
        count_query = db.table("articles").select("id", count="exact")
        if status:
            count_query = count_query.eq("status", status.value)
        if category_id:
            count_query = count_query.eq("category_id", category_id)
        if is_featured is not None:
            count_query = count_query.eq("is_featured", is_featured)
        
        count_result = count_query.execute()
        total = count_result.count if count_result.count else 0
        
        # Apply pagination
        offset = (page - 1) * page_size
        query = query.order("created_at", desc=True).range(offset, offset + page_size - 1)
        
        result = query.execute()
        
        # Transform data
        articles = []
        for item in result.data:
            article_data = {**item}
            # Extract tags from junction table
            if 'tags' in article_data:
                article_data['tags'] = [t['tag'] for t in article_data['tags'] if t.get('tag')]
            else:
                article_data['tags'] = []
            articles.append(article_data)
        
        total_pages = (total + page_size - 1) // page_size
        
        return ArticleList(
            items=articles,
            total=total,
            page=page,
            page_size=page_size,
            total_pages=total_pages
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch articles: {str(e)}")

@router.get("/{article_id}", response_model=Article)
async def get_article(article_id: str, db = Depends(get_db)):
    """
    Get article by ID
    """
    try:
        result = db.table("articles").select(
            "*, category:categories(*), tags:article_tags(tag:tags(*))"
        ).eq("id", article_id).execute()
        
        if not result.data:
            raise HTTPException(status_code=404, detail="Article not found")
        
        article = result.data[0]
        # Extract tags
        if 'tags' in article:
            article['tags'] = [t['tag'] for t in article['tags'] if t.get('tag')]
        else:
            article['tags'] = []
        
        # Increment view count
        db.table("articles").update({"view_count": article.get("view_count", 0) + 1}).eq("id", article_id).execute()
        
        return article
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch article: {str(e)}")

@router.get("/slug/{slug}", response_model=Article)
async def get_article_by_slug(slug: str, db = Depends(get_db)):
    """
    Get article by slug
    """
    try:
        result = db.table("articles").select(
            "*, category:categories(*), tags:article_tags(tag:tags(*))"
        ).eq("slug", slug).execute()
        
        if not result.data:
            raise HTTPException(status_code=404, detail="Article not found")
        
        article = result.data[0]
        # Extract tags
        if 'tags' in article:
            article['tags'] = [t['tag'] for t in article['tags'] if t.get('tag')]
        else:
            article['tags'] = []
        
        # Increment view count
        db.table("articles").update({"view_count": article.get("view_count", 0) + 1}).eq("id", article["id"]).execute()
        
        return article
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch article: {str(e)}")

@router.post("/", response_model=Article, status_code=201)
async def create_article(article: ArticleCreate, db = Depends(get_db)):
    """
    Create new article
    """
    try:
        # Prepare article data
        article_data = article.model_dump(exclude={"tag_ids"})
        article_data["created_at"] = datetime.utcnow().isoformat()
        article_data["updated_at"] = datetime.utcnow().isoformat()
        
        # Insert article
        result = db.table("articles").insert(article_data).execute()
        
        if not result.data:
            raise HTTPException(status_code=500, detail="Failed to create article")
        
        created_article = result.data[0]
        article_id = created_article["id"]
        
        # Add tags if provided
        if article.tag_ids:
            tag_relations = [{"article_id": article_id, "tag_id": tag_id} for tag_id in article.tag_ids]
            db.table("article_tags").insert(tag_relations).execute()
        
        # Fetch complete article with relations
        return await get_article(article_id, db)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create article: {str(e)}")

@router.patch("/{article_id}", response_model=Article)
async def update_article(article_id: str, article_update: ArticleUpdate, db = Depends(get_db)):
    """
    Update article
    """
    try:
        # Check if article exists
        check = db.table("articles").select("id").eq("id", article_id).execute()
        if not check.data:
            raise HTTPException(status_code=404, detail="Article not found")
        
        # Prepare update data (exclude None values)
        update_data = {k: v for k, v in article_update.model_dump(exclude={"tag_ids"}).items() if v is not None}
        update_data["updated_at"] = datetime.utcnow().isoformat()
        
        # Update article
        result = db.table("articles").update(update_data).eq("id", article_id).execute()
        
        # Update tags if provided
        if article_update.tag_ids is not None:
            # Delete existing tags
            db.table("article_tags").delete().eq("article_id", article_id).execute()
            # Add new tags
            if article_update.tag_ids:
                tag_relations = [{"article_id": article_id, "tag_id": tag_id} for tag_id in article_update.tag_ids]
                db.table("article_tags").insert(tag_relations).execute()
        
        # Fetch updated article
        return await get_article(article_id, db)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update article: {str(e)}")

@router.delete("/{article_id}", status_code=204)
async def delete_article(article_id: str, db = Depends(get_db)):
    """
    Delete article
    """
    try:
        result = db.table("articles").delete().eq("id", article_id).execute()
        if not result.data:
            raise HTTPException(status_code=404, detail="Article not found")
        return None
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete article: {str(e)}")
