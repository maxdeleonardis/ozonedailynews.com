'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import { getBlogPostById, updateBlogPost, generateSlug, calculateReadTime, BlogPostFull } from '@/lib/blog-service';
import { ArticleBlock } from '@/lib/articles-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

const BLOCK_TYPES = [
  { type: 'summary', label: 'Executive Summary', icon: '📋' },
  { type: 'heading', label: 'Section Heading', icon: '📌' },
  { type: 'paragraph', label: 'Paragraph', icon: '📝' },
  { type: 'stat-grid', label: 'Statistics Grid', icon: '📊' },
  { type: 'key-mechanisms', label: 'Key Points List', icon: '🔑' },
  { type: 'callout', label: 'Callout Box', icon: '💡' },
  { type: 'sources', label: 'Sources', icon: '📚' },
];

export default function EditBlogPost({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [blocks, setBlocks] = useState<ArticleBlock[]>([]);
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [createdAt, setCreatedAt] = useState('');
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/admin');
      return;
    }
    loadPost();
  }, [router, params.id]);

  const loadPost = async () => {
    try {
      const { data, error } = await getBlogPostById(params.id);
      if (error || !data) {
        setNotFound(true);
        return;
      }
      setTitle(data.title);
      setSlug(data.slug);
      setExcerpt(data.excerpt || '');
      setAuthor(data.author);
      setCategory(data.category);
      setTags(data.tags || []);
      setFeaturedImage(data.featured_image || '');
      setBlocks(data.blocks || []);
      setStatus(data.status);
      setCreatedAt(data.created_at);
    } catch (error) {
      console.error('Error loading post:', error);
      setNotFound(true);
    } finally {
      setIsFetching(false);
    }
  };

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
    setBlocks(blocks.filter(block => block.id !== id));
    if (activeBlockId === id) setActiveBlockId(null);
  };

  const moveBlock = (id: string, direction: 'up' | 'down') => {
    const index = blocks.findIndex(b => b.id === id);
    if (direction === 'up' && index > 0) {
      const newBlocks = [...blocks];
      [newBlocks[index - 1], newBlocks[index]] = [newBlocks[index], newBlocks[index - 1]];
      setBlocks(newBlocks);
    } else if (direction === 'down' && index < blocks.length - 1) {
      const newBlocks = [...blocks];
      [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
      setBlocks(newBlocks);
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const savePost = async (newStatus: 'draft' | 'published') => {
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
      const { data, error } = await updateBlogPost(params.id, {
        title,
        slug,
        excerpt,
        author,
        category,
        tags,
        read_time: calculateReadTime(blocks),
        blocks,
        status: newStatus,
        featured_image: featuredImage,
      });

      if (error) throw error;
      alert(`Post ${newStatus === 'published' ? 'published' : 'saved'} successfully!`);
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
        return (
          <Textarea
            placeholder={block.type === 'summary' ? 'Write executive summary... Use **bold** for key terms.' : 
                        block.type === 'callout' ? 'Important note or callout...' : 
                        'Write paragraph content... Use **bold** for key terms.'}
            value={block.content}
            onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            rows={4}
            className="font-mono text-sm"
          />
        );

      case 'heading':
        return (
          <Input
            placeholder="Section heading..."
            value={block.content}
            onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            className="text-lg font-semibold"
          />
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

  if (notFound) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">Post Not Found</h2>
            <p className="text-gray-600 mb-6">The post you're looking for doesn't exist.</p>
            <Link href="/admin/dashboard">
              <Button>Back to Dashboard</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

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
            <div>
              <h1 className="text-xl font-bold">Edit Post</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {status}
                </span>
                <span>•</span>
                <span>{blocks.length} blocks</span>
              </div>
            </div>
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

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Main Editor */}
          <div className="col-span-2 space-y-6">
            {/* Post Details */}
            <Card>
              <CardHeader>
                <CardTitle>Post Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    placeholder="Enter post title..."
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="text-lg font-medium"
                  />
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
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    placeholder="Brief description..."
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    rows={2}
                  />
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
                  <Label htmlFor="featuredImage">Featured Image URL</Label>
                  <Input
                    id="featuredImage"
                    placeholder="https://..."
                    value={featuredImage}
                    onChange={(e) => setFeaturedImage(e.target.value)}
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
                {createdAt && (
                  <div className="text-sm text-gray-500">
                    Created: {new Date(createdAt).toLocaleString()}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Content Blocks */}
            <Card>
              <CardHeader>
                <CardTitle>Content Blocks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {blocks.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p>No content blocks yet. Add your first block from the sidebar.</p>
                  </div>
                ) : (
                  blocks.map((block, index) => (
                    <div
                      key={block.id}
                      className={`border rounded-lg p-4 ${activeBlockId === block.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                      onClick={() => setActiveBlockId(block.id)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{BLOCK_TYPES.find(b => b.type === block.type)?.icon}</span>
                          <span className="font-medium text-sm">{BLOCK_TYPES.find(b => b.type === block.type)?.label}</span>
                          <span className="text-xs text-gray-400">#{index + 1}</span>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" onClick={() => moveBlock(block.id, 'up')} disabled={index === 0}>↑</Button>
                          <Button variant="ghost" size="sm" onClick={() => moveBlock(block.id, 'down')} disabled={index === blocks.length - 1}>↓</Button>
                          <Button variant="ghost" size="sm" onClick={() => deleteBlock(block.id)} className="text-red-600">×</Button>
                        </div>
                      </div>
                      {renderBlockEditor(block)}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Add Block</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {BLOCK_TYPES.map((blockType) => (
                  <Button
                    key={blockType.type}
                    variant="outline"
                    className="w-full justify-start gap-2"
                    onClick={() => addBlock(blockType.type)}
                  >
                    <span>{blockType.icon}</span>
                    {blockType.label}
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 space-y-2">
                <p>• Use **double asterisks** for bold key terms</p>
                <p>• Stat grids animate when scrolled into view</p>
                <p>• Key mechanisms show numbered bullet points</p>
                <p>• Content fades in as users scroll</p>
                <p>• Nested URLs: <code>technology/ai/part-2</code></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
