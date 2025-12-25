"""
Editorial workflow management endpoints
"""
from fastapi import APIRouter, HTTPException, Depends
from typing import List
from datetime import datetime
from app.database import get_db
from app.models import WorkflowTransition, WorkflowHistory, WorkflowStatus

router = APIRouter()

@router.post("/{article_id}/transition", response_model=dict)
async def transition_workflow(
    article_id: str,
    transition: WorkflowTransition,
    db = Depends(get_db)
):
    """
    Transition article workflow state
    """
    try:
        # Get current article
        article_result = db.table("articles").select("id, status").eq("id", article_id).execute()
        if not article_result.data:
            raise HTTPException(status_code=404, detail="Article not found")
        
        current_article = article_result.data[0]
        from_status = current_article.get("status")
        
        # Validate transition
        valid_transitions = {
            WorkflowStatus.DRAFT: [WorkflowStatus.IN_REVIEW, WorkflowStatus.ARCHIVED],
            WorkflowStatus.IN_REVIEW: [WorkflowStatus.DRAFT, WorkflowStatus.APPROVED, WorkflowStatus.ARCHIVED],
            WorkflowStatus.APPROVED: [WorkflowStatus.PUBLISHED, WorkflowStatus.IN_REVIEW],
            WorkflowStatus.PUBLISHED: [WorkflowStatus.ARCHIVED, WorkflowStatus.IN_REVIEW],
            WorkflowStatus.ARCHIVED: [WorkflowStatus.DRAFT]
        }
        
        if from_status and transition.to_status not in valid_transitions.get(WorkflowStatus(from_status), []):
            raise HTTPException(
                status_code=400,
                detail=f"Invalid transition from {from_status} to {transition.to_status.value}"
            )
        
        # Update article status
        update_data = {"status": transition.to_status.value, "updated_at": datetime.utcnow().isoformat()}
        
        # Set published_at when publishing
        if transition.to_status == WorkflowStatus.PUBLISHED and not current_article.get("published_at"):
            update_data["published_at"] = datetime.utcnow().isoformat()
        
        db.table("articles").update(update_data).eq("id", article_id).execute()
        
        # Record workflow history
        history_data = {
            "article_id": article_id,
            "from_status": from_status,
            "to_status": transition.to_status.value,
            "comment": transition.comment,
            "changed_at": datetime.utcnow().isoformat()
        }
        db.table("workflow_history").insert(history_data).execute()
        
        return {
            "message": "Workflow transitioned successfully",
            "article_id": article_id,
            "from_status": from_status,
            "to_status": transition.to_status.value
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to transition workflow: {str(e)}")

@router.get("/{article_id}/history", response_model=List[WorkflowHistory])
async def get_workflow_history(article_id: str, db = Depends(get_db)):
    """
    Get workflow history for an article
    """
    try:
        result = db.table("workflow_history").select("*").eq("article_id", article_id).order("changed_at", desc=True).execute()
        return result.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch workflow history: {str(e)}")

@router.get("/pending-review", response_model=dict)
async def get_pending_reviews(db = Depends(get_db)):
    """
    Get articles pending review
    """
    try:
        result = db.table("articles").select(
            "id, title, slug, author, created_at, updated_at"
        ).eq("status", WorkflowStatus.IN_REVIEW.value).order("updated_at", desc=True).execute()
        
        return {
            "count": len(result.data),
            "articles": result.data
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch pending reviews: {str(e)}")

@router.get("/stats", response_model=dict)
async def get_editorial_stats(db = Depends(get_db)):
    """
    Get editorial workflow statistics
    """
    try:
        stats = {}
        for status in WorkflowStatus:
            result = db.table("articles").select("id", count="exact").eq("status", status.value).execute()
            stats[status.value] = result.count if result.count else 0
        
        return {
            "total": sum(stats.values()),
            "by_status": stats
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch editorial stats: {str(e)}")
