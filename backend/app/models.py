"""
Pydantic models for request/response validation
"""
from pydantic import BaseModel, Field, validator
from typing import Optional, List
from datetime import datetime
from enum import Enum

class WorkflowStatus(str, Enum):
    """Editorial workflow states"""
    DRAFT = "draft"
    IN_REVIEW = "in_review"
    APPROVED = "approved"
    PUBLISHED = "published"
    ARCHIVED = "archived"

class CategoryBase(BaseModel):
    """Category base model"""
    name: str = Field(..., max_length=100)
    slug: str = Field(..., max_length=100)
    description: Optional[str] = None

class CategoryCreate(CategoryBase):
    """Category creation model"""
    pass

class Category(CategoryBase):
    """Category response model"""
    id: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class TagBase(BaseModel):
    """Tag base model"""
    name: str = Field(..., max_length=100)
    slug: str = Field(..., max_length=100)

class TagCreate(TagBase):
    """Tag creation model"""
    pass

class Tag(TagBase):
    """Tag response model"""
    id: str
    created_at: datetime

    class Config:
        from_attributes = True

class ArticleBase(BaseModel):
    """Article base model"""
    title: str = Field(..., max_length=500)
    slug: str = Field(..., max_length=500)
    excerpt: Optional[str] = None
    content: str
    hero_image: Optional[str] = None
    category_id: Optional[str] = None
    author: Optional[str] = Field(None, max_length=200)
    read_time: Optional[int] = None
    is_featured: bool = False

class ArticleCreate(ArticleBase):
    """Article creation model"""
    status: WorkflowStatus = WorkflowStatus.DRAFT
    tag_ids: Optional[List[str]] = []

class ArticleUpdate(BaseModel):
    """Article update model"""
    title: Optional[str] = Field(None, max_length=500)
    slug: Optional[str] = Field(None, max_length=500)
    excerpt: Optional[str] = None
    content: Optional[str] = None
    hero_image: Optional[str] = None
    category_id: Optional[str] = None
    author: Optional[str] = Field(None, max_length=200)
    read_time: Optional[int] = None
    status: Optional[WorkflowStatus] = None
    is_featured: Optional[bool] = None
    tag_ids: Optional[List[str]] = None

class Article(ArticleBase):
    """Article response model"""
    id: str
    status: WorkflowStatus
    published_at: Optional[datetime] = None
    created_at: datetime
    updated_at: datetime
    view_count: int = 0
    tags: List[Tag] = []
    category: Optional[Category] = None

    class Config:
        from_attributes = True

class ArticleList(BaseModel):
    """Paginated article list"""
    items: List[Article]
    total: int
    page: int
    page_size: int
    total_pages: int

class WorkflowTransition(BaseModel):
    """Workflow state transition"""
    to_status: WorkflowStatus
    comment: Optional[str] = None

class WorkflowHistory(BaseModel):
    """Workflow history record"""
    id: str
    article_id: str
    from_status: Optional[WorkflowStatus]
    to_status: WorkflowStatus
    comment: Optional[str]
    changed_by: Optional[str]
    changed_at: datetime

    class Config:
        from_attributes = True

class APIKeyCreate(BaseModel):
    """API key creation"""
    name: str
    tier: str = "free"
    rate_limit: int = 60
    expires_at: Optional[datetime] = None

class APIKey(BaseModel):
    """API key response"""
    id: str
    name: str
    key: str  # Only returned on creation
    tier: str
    rate_limit: int
    is_active: bool
    created_at: datetime
    expires_at: Optional[datetime]

    class Config:
        from_attributes = True
