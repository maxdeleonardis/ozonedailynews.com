'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import { createBlogPost, generateSlug, calculateReadTime } from '@/lib/blog-service';
import { ArticleBlock } from '@/lib/articles-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ImageUploader } from '@/components/ImageUploader';
import Link from 'next/link';

const BLOCK_TYPES = [
  { type: 'summary', label: 'Executive Summary', icon: '📋', category: 'Content' },
  { type: 'heading', label: 'Section Heading', icon: '📌', category: 'Content' },
  { type: 'paragraph', label: 'Paragraph', icon: '📝', category: 'Content' },
  { type: 'quote', label: 'Quote', icon: '💬', category: 'Content' },
  { type: 'list', label: 'Bullet List', icon: '📝', category: 'Content' },
  { type: 'stat-grid', label: 'Statistics Grid', icon: '📊', category: 'Data' },
  { type: 'key-mechanisms', label: 'Key Points List', icon: '🔑', category: 'Data' },
  { type: 'timeline', label: 'Timeline', icon: '⏱️', category: 'Data' },
  { type: 'comparison', label: 'Comparison Table', icon: '⚖️', category: 'Data' },
  { type: 'callout', label: 'Callout Box', icon: '💡', category: 'Special' },
  { type: 'image', label: 'Image', icon: '🖼️', category: 'Media' },
  { type: 'video', label: 'Video Embed', icon: '🎥', category: 'Media' },
  { type: 'sources', label: 'Sources', icon: '📚', category: 'Special' },
];

export default function BlogEditor() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [author, setAuthor] = useState('ObjectWire Editorial Team');
  const [category, setCategory] = useState('Technology');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [blocks, setBlocks] = useState<ArticleBlock[]>([]);
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
  const [draggedBlockId, setDraggedBlockId] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/admin');
    }
  }, [router]);

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    setSlug(generateSlug(newTitle));
  };

  const addBlock = (type: string) => {
    const newBlock: ArticleBlock = {
      id: `block-${Date.now()}`,
      type: type as ArticleBlock['type'],
      content: '',
      ...(type === 'stat-grid' && { stats: [{ value: '', label: '', color: 'blue' }] }),
      ...(type === 'key-mechanisms' && { items: [{ num: '01', title: '', desc: '' }] }),
      ...(type === 'sources' && { sources: [''] }),
    };
    setBlocks([...blocks, newBlock]);
    setActiveBlockId(newBlock.id);
  };

  const updateBlock = (id: string, updates: Partial<ArticleBlock>) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, ...updates } : block
    ));
  };

  const deleteBlock = (id: string) => {
    if (!confirm('Delete this block?')) return;
    setBlocks(blocks.filter(block => block.id !== id));
    if (activeBlockId === id) setActiveBlockId(null);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, blockId: string) => {
    setDraggedBlockId(blockId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetBlockId: string) => {
    e.preventDefault();
    if (!draggedBlockId || draggedBlockId === targetBlockId) return;

    const draggedIndex = blocks.findIndex(b => b.id === draggedBlockId);
    const targetIndex = blocks.findIndex(b => b.id === targetBlockId);

    const newBlocks = [...blocks];
    const [draggedBlock] = newBlocks.splice(draggedIndex, 1);
    newBlocks.splice(targetIndex, 0, draggedBlock);

    setBlocks(newBlocks);
    setDraggedBlockId(null);
  };

  const handleDragEnd = () => {
    setDraggedBlockId(null);
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const savePost = async (status: 'draft' | 'published') => {
    if (!title.trim()) {
      alert('Please enter a title');
      return;
    }
    if (blocks.length === 0) {
      alert('Please add at least one content block');
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await createBlogPost({
        title,
        slug,
        excerpt,
        author,
        category,
        tags,
        read_time: calculateReadTime(blocks),
        blocks,
        status,
        featured_image: featuredImage,
      });

      if (error) throw error;
      alert(`Post ${status === 'published' ? 'published' : 'saved as draft'} successfully!`);
      router.push('/admin/dashboard');
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Error saving post. Check Supabase configuration.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderBlockEditor = (block: ArticleBlock) => {
    switch (block.type) {
      case 'summary':
      case 'paragraph':
      case 'callout':
      case 'quote':
        return (
          <Textarea
            placeholder={
              block.type === 'summary' ? 'Executive summary... Use **bold** for key terms.' : 
              block.type === 'callout' ? 'Important note or callout...' : 
              block.type === 'quote' ? 'Quote text...' :
              'Paragraph content... Use **bold** for key terms.'
            }
            value={block.content}
            onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            rows={block.type === 'quote' ? 3 : 4}
            className="font-mono text-sm"
          />
        );

      case 'list':
        return (
          <Textarea
            placeholder="• First item&#10;• Second item&#10;• Third item"
            value={block.content}
            onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            rows={6}
            className="font-mono text-sm"
          />
        );

      case 'image':
        return (
          <div className="space-y-3">
            <ImageUploader
              currentUrl={block.content}
              onUploadComplete={(url) => updateBlock(block.id, { content: url })}
            />
            <Input
              placeholder="Alt text (for accessibility)"
              value={block.caption || ''}
              onChange={(e) => updateBlock(block.id, { caption: e.target.value })}
            />
            <Input
              placeholder="Caption (optional)"
              value={block.credit || ''}
              onChange={(e) => updateBlock(block.id, { credit: e.target.value })}
            />
          </div>
        );

      case 'video':
        return (
          <div className="space-y-3">
            <Input
              placeholder="YouTube or Vimeo URL"
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            />
            <Input
              placeholder="Video title/description"
              value={block.caption || ''}
              onChange={(e) => updateBlock(block.id, { caption: e.target.value })}
            />
          </div>
        );

      case 'timeline':
        return (
          <div className="space-y-3">
            {(block.items || []).map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-2 items-center">
                <Input
                  placeholder="Date"
                  value={item.num}
                  onChange={(e) => {
                    const newItems = [...(block.items || [])];
                    newItems[idx] = { ...newItems[idx], num: e.target.value };
                    updateBlock(block.id, { items: newItems });
                  }}
                  className="col-span-3"
                />
                <Input
                  placeholder="Event title"
                  value={item.title}
                  onChange={(e) => {
                    const newItems = [...(block.items || [])];
                    newItems[idx] = { ...newItems[idx], title: e.target.value };
                    updateBlock(block.id, { items: newItems });
                  }}
                  className="col-span-9"
                />
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => updateBlock(block.id, { 
                items: [...(block.items || []), { num: 'Jan 2026', title: '', desc: '' }] 
              })}
            >
              + Add Event
            </Button>
          </div>
        );

      case 'comparison':
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <Input
                placeholder="Column 1 Header"
                value={block.content?.split('|')[0] || ''}
                onChange={(e) => {
                  const parts = block.content?.split('|') || ['', ''];
                  parts[0] = e.target.value;
                  updateBlock(block.id, { content: parts.join('|') });
                }}
              />
              <Input
                placeholder="Column 2 Header"
                value={block.content?.split('|')[1] || ''}
                onChange={(e) => {
                  const parts = block.content?.split('|') || ['', ''];
                  parts[1] = e.target.value;
                  updateBlock(block.id, { content: parts.join('|') });
                }}
              />
            </div>
            {(block.items || []).map((item, idx) => (
              <div key={idx} className="grid grid-cols-2 gap-2">
                <Input
                  placeholder="Value 1"
                  value={item.title}
                  onChange={(e) => {
                    const newItems = [...(block.items || [])];
                    newItems[idx] = { ...newItems[idx], title: e.target.value };
                    updateBlock(block.id, { items: newItems });
                  }}
                />
                <Input
                  placeholder="Value 2"
                  value={item.desc}
                  onChange={(e) => {
                    const newItems = [...(block.items || [])];
                    newItems[idx] = { ...newItems[idx], desc: e.target.value };
                    updateBlock(block.id, { items: newItems });
                  }}
                />
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => updateBlock(block.id, { 
                items: [...(block.items || []), { num: '', title: '', desc: '' }] 
              })}
            >
              + Add Row
            </Button>
          </div>
        );

      case 'heading':
        return (
          <div className="space-y-3">
            <select
              value={block.level || 2}
              onChange={(e) => updateBlock(block.id, { level: parseInt(e.target.value) })}
              className="w-full h-10 px-3 rounded-md border border-gray-300"
            >
              <option value="1">Heading 1 (H1)</option>
              <option value="2">Heading 2 (H2)</option>
              <option value="3">Heading 3 (H3)</option>
              <option value="4">Heading 4 (H4)</option>
              <option value="5">Heading 5 (H5)</option>
              <option value="6">Heading 6 (H6)</option>
            </select>
            <Input
              placeholder="Section heading..."
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
              className="text-lg font-semibold"
            />
          </div>
        );

      case 'stat-grid':
        return (
          <div className="space-y-3">
            {(block.stats || []).map((stat, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-2">
                <Input
                  placeholder="Value (e.g. $100M)"
                  value={stat.value}
                  onChange={(e) => {
                    const newStats = [...(block.stats || [])];
                    newStats[idx] = { ...newStats[idx], value: e.target.value };
                    updateBlock(block.id, { stats: newStats });
                  }}
                />
                <Input
                  placeholder="Label"
                  value={stat.label}
                  onChange={(e) => {
                    const newStats = [...(block.stats || [])];
                    newStats[idx] = { ...newStats[idx], label: e.target.value };
                    updateBlock(block.id, { stats: newStats });
                  }}
                />
                <select
                  value={stat.color}
                  onChange={(e) => {
                    const newStats = [...(block.stats || [])];
                    newStats[idx] = { ...newStats[idx], color: e.target.value };
                    updateBlock(block.id, { stats: newStats });
                  }}
                  className="h-10 px-3 rounded-md border border-gray-300"
                >
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="red">Red</option>
                  <option value="yellow">Yellow</option>
                  <option value="purple">Purple</option>
                </select>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => updateBlock(block.id, { 
                stats: [...(block.stats || []), { value: '', label: '', color: 'blue' }] 
              })}
            >
              + Add Stat
            </Button>
          </div>
        );

      case 'key-mechanisms':
        return (
          <div className="space-y-3">
            {(block.items || []).map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-2">
                <Input
                  placeholder="01"
                  value={item.num}
                  onChange={(e) => {
                    const newItems = [...(block.items || [])];
                    newItems[idx] = { ...newItems[idx], num: e.target.value };
                    updateBlock(block.id, { items: newItems });
                  }}
                  className="col-span-1"
                />
                <Input
                  placeholder="Title"
                  value={item.title}
                  onChange={(e) => {
                    const newItems = [...(block.items || [])];
                    newItems[idx] = { ...newItems[idx], title: e.target.value };
                    updateBlock(block.id, { items: newItems });
                  }}
                  className="col-span-4"
                />
                <Input
                  placeholder="Description"
                  value={item.desc}
                  onChange={(e) => {
                    const newItems = [...(block.items || [])];
                    newItems[idx] = { ...newItems[idx], desc: e.target.value };
                    updateBlock(block.id, { items: newItems });
                  }}
                  className="col-span-7"
                />
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                const num = String((block.items?.length || 0) + 1).padStart(2, '0');
                updateBlock(block.id, { 
                  items: [...(block.items || []), { num, title: '', desc: '' }] 
                });
              }}
            >
              + Add Point
            </Button>
          </div>
        );

      case 'sources':
        return (
          <div className="space-y-2">
            {(block.sources || []).map((source, idx) => (
              <Input
                key={idx}
                placeholder="Source reference..."
                value={source}
                onChange={(e) => {
                  const newSources = [...(block.sources || [])];
                  newSources[idx] = e.target.value;
                  updateBlock(block.id, { sources: newSources });
                }}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => updateBlock(block.id, { sources: [...(block.sources || []), ''] })}
            >
              + Add Source
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard">
              <Button variant="ghost" size="sm">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </Button>
            </Link>
            <h1 className="text-xl font-bold">New Blog Post</h1>
            <span className="text-sm text-gray-500">({blocks.length} blocks)</span>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => savePost('draft')} variant="outline" disabled={isLoading}>
              Save Draft
            </Button>
            <Button onClick={() => savePost('published')} disabled={isLoading}>
              {isLoading ? 'Publishing...' : 'Publish'}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-4 gap-6">
          {/* Main Editor */}
          <div className="col-span-3 space-y-6">
            {/* Post Details */}
            <Card>
              <CardHeader>
                <CardTitle>Post Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Meta Title *</Label>
                  <Input
                    id="title"
                    placeholder="Enter SEO-optimized title (50-60 characters)..."
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="text-lg font-medium"
                  />
                  <p className="text-xs text-gray-500 mt-1">{title.length}/60 characters</p>
                </div>
                <div>
                  <Label htmlFor="slug">URL Slug (supports nested paths)</Label>
                  <Input
                    id="slug"
                    placeholder="technology/ai-news or iran/nuclear-deal"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">URL: /{slug || 'your-slug'}</p>
                </div>
                <div>
                  <Label htmlFor="excerpt">Meta Description</Label>
                  <Textarea
                    id="excerpt"
                    placeholder="SEO-optimized description (150-160 characters)..."
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    rows={2}
                  />
                  <p className="text-xs text-gray-500 mt-1">{excerpt.length}/160 characters</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full h-10 px-3 rounded-md border border-gray-300"
                    >
                      <option>Technology</option>
                      <option>Business</option>
                      <option>Science</option>
                      <option>Politics</option>
                      <option>Culture</option>
                      <option>Opinion</option>
                      <option>Analysis</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="featuredImage">Featured Image</Label>
                  <ImageUploader
                    currentUrl={featuredImage}
                    onUploadComplete={setFeaturedImage}
                  />
                </div>
                <div>
                  <Label>Tags</Label>
                  <div className="flex gap-2 mb-2">
                    <Input
                      placeholder="Add tag..."
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    />
                    <Button type="button" onClick={addTag} variant="outline">Add</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center gap-2">
                        {tag}
                        <button onClick={() => setTags(tags.filter(t => t !== tag))}>×</button>
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Blocks */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Content Blocks</CardTitle>
                  <span className="text-sm text-gray-500">{blocks.length} blocks • Drag to reorder</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {blocks.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <div className="text-5xl mb-3">📝</div>
                    <p className="font-medium">No content blocks yet</p>
                    <p className="text-sm mt-1">Add your first block from the sidebar →</p>
                  </div>
                ) : (
                  blocks.map((block, index) => (
                    <div
                      key={block.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, block.id)}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, block.id)}
                      onDragEnd={handleDragEnd}
                      className={`
                        border rounded-lg p-4 transition-all cursor-move
                        ${activeBlockId === block.id ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 hover:border-gray-300'}
                        ${draggedBlockId === block.id ? 'opacity-50' : 'opacity-100'}
                      `}
                      onClick={() => setActiveBlockId(block.id)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col gap-0.5 cursor-grab active:cursor-grabbing">
                            <div className="w-4 h-0.5 bg-gray-400 rounded"></div>
                            <div className="w-4 h-0.5 bg-gray-400 rounded"></div>
                            <div className="w-4 h-0.5 bg-gray-400 rounded"></div>
                          </div>
                          <span className="text-lg">{BLOCK_TYPES.find(b => b.type === block.type)?.icon}</span>
                          <span className="font-medium text-sm">{BLOCK_TYPES.find(b => b.type === block.type)?.label}</span>
                          <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">#{index + 1}</span>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={(e) => { e.stopPropagation(); deleteBlock(block.id); }} 
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          🗑️ Delete
                        </Button>
                      </div>
                      {renderBlockEditor(block)}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-base">Add Content Block</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Group by category */}
                {['Content', 'Data', 'Media', 'Special'].map(category => (
                  <div key={category}>
                    <p className="text-xs font-semibold text-gray-500 mb-2">{category}</p>
                    <div className="space-y-1">
                      {BLOCK_TYPES.filter(b => b.category === category).map((blockType) => (
                        <Button
                          key={blockType.type}
                          variant="outline"
                          className="w-full justify-start gap-2 h-9 text-sm"
                          onClick={() => addBlock(blockType.type)}
                        >
                          <span>{blockType.icon}</span>
                          {blockType.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}