'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useArticles, Article, ArticleBlock } from '@/lib/articles-context';
import { isAuthenticated, destroySession } from '@/lib/auth';

type BlockType = ArticleBlock['type'];

const blockTypeLabels: Record<BlockType, string> = {
  'paragraph': '📝 Paragraph',
  'heading': '📌 Heading',
  'summary': '📋 Summary Box',
  'stat-grid': '📊 Statistics Grid',
  'key-mechanisms': '🔢 Numbered List',
  'sources': '📚 Sources',
  'callout': '💡 Callout Box'
};

function BlockEditor({ 
  block, 
  onChange, 
  onDelete, 
  onMoveUp, 
  onMoveDown,
  isFirst,
  isLast 
}: { 
  block: ArticleBlock; 
  onChange: (block: ArticleBlock) => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="border rounded-lg bg-white shadow-sm">
      {/* Block Header */}
      <div className="flex items-center justify-between p-3 bg-gray-50 border-b rounded-t-lg">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isExpanded ? '▼' : '▶'}
          </button>
          <span className="text-sm font-medium">{blockTypeLabels[block.type]}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onMoveUp}
            disabled={isFirst}
            className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
            title="Move up"
          >
            ↑
          </button>
          <button
            onClick={onMoveDown}
            disabled={isLast}
            className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
            title="Move down"
          >
            ↓
          </button>
          <button
            onClick={onDelete}
            className="p-1 text-red-400 hover:text-red-600 ml-2"
            title="Delete block"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Block Content */}
      {isExpanded && (
        <div className="p-4">
          {block.type === 'paragraph' && (
            <div className="space-y-2">
              <Label className="text-xs text-gray-500">
                Use **text** for bold, which creates hover-highlight effects
              </Label>
              <Textarea
                value={block.content}
                onChange={(e) => onChange({ ...block, content: e.target.value })}
                rows={3}
                placeholder="Write your paragraph... Use **text** for bold/key terms"
                className="text-sm"
              />
            </div>
          )}

          {block.type === 'heading' && (
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-1">
                  <Label className="text-xs text-gray-500">Heading Text</Label>
                  <Input
                    value={block.content}
                    onChange={(e) => onChange({ ...block, content: e.target.value })}
                    placeholder="Section heading..."
                    className="text-sm font-semibold"
                  />
                </div>
                <div className="w-24">
                  <Label className="text-xs text-gray-500">Level</Label>
                  <Select 
                    value={String(block.level || 2)}
                    onValueChange={(v) => onChange({ ...block, level: parseInt(v) })}
                  >
                    <SelectTrigger className="text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">H2</SelectItem>
                      <SelectItem value="3">H3</SelectItem>
                      <SelectItem value="4">H4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {block.type === 'summary' && (
            <div className="space-y-2">
              <Label className="text-xs text-gray-500">
                Executive summary that appears in a highlighted box. Use **text** for bold.
              </Label>
              <Textarea
                value={block.content}
                onChange={(e) => onChange({ ...block, content: e.target.value })}
                rows={4}
                placeholder="Executive summary of the article..."
                className="text-sm"
              />
            </div>
          )}

          {block.type === 'callout' && (
            <div className="space-y-2">
              <Label className="text-xs text-gray-500">
                Important callout box with left border. Use **text** for bold.
              </Label>
              <Textarea
                value={block.content}
                onChange={(e) => onChange({ ...block, content: e.target.value })}
                rows={3}
                placeholder="Important information to highlight..."
                className="text-sm"
              />
            </div>
          )}

          {block.type === 'stat-grid' && (
            <div className="space-y-3">
              <Label className="text-xs text-gray-500">
                Animated statistics that count up when scrolled into view
              </Label>
              {(block.stats || []).map((stat, idx) => (
                <div key={idx} className="flex gap-2 items-end">
                  <div className="w-24">
                    <Label className="text-xs text-gray-400">Value</Label>
                    <Input
                      value={stat.value}
                      onChange={(e) => {
                        const newStats = [...(block.stats || [])];
                        newStats[idx] = { ...newStats[idx], value: e.target.value };
                        onChange({ ...block, stats: newStats });
                      }}
                      placeholder="$250M"
                      className="text-sm font-bold"
                    />
                  </div>
                  <div className="flex-1">
                    <Label className="text-xs text-gray-400">Label</Label>
                    <Input
                      value={stat.label}
                      onChange={(e) => {
                        const newStats = [...(block.stats || [])];
                        newStats[idx] = { ...newStats[idx], label: e.target.value };
                        onChange({ ...block, stats: newStats });
                      }}
                      placeholder="Total Amount"
                      className="text-sm"
                    />
                  </div>
                  <div className="w-24">
                    <Label className="text-xs text-gray-400">Color</Label>
                    <Select 
                      value={stat.color}
                      onValueChange={(v) => {
                        const newStats = [...(block.stats || [])];
                        newStats[idx] = { ...newStats[idx], color: v };
                        onChange({ ...block, stats: newStats });
                      }}
                    >
                      <SelectTrigger className="text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="red">Red</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                        <SelectItem value="green">Green</SelectItem>
                        <SelectItem value="blue">Blue</SelectItem>
                        <SelectItem value="gray">Gray</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const newStats = (block.stats || []).filter((_, i) => i !== idx);
                      onChange({ ...block, stats: newStats });
                    }}
                    className="text-red-500"
                  >
                    ✕
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const newStats = [...(block.stats || []), { value: '', label: '', color: 'gray' }];
                  onChange({ ...block, stats: newStats });
                }}
              >
                + Add Statistic
              </Button>
            </div>
          )}

          {block.type === 'key-mechanisms' && (
            <div className="space-y-3">
              <Label className="text-xs text-gray-500">
                Numbered list with hover animations
              </Label>
              {(block.items || []).map((item, idx) => (
                <div key={idx} className="flex gap-2 items-start border-l-2 border-gray-200 pl-3">
                  <div className="w-12 pt-5">
                    <span className="text-xs font-bold text-gray-400">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <Input
                      value={item.title}
                      onChange={(e) => {
                        const newItems = [...(block.items || [])];
                        newItems[idx] = { ...newItems[idx], title: e.target.value, num: String(idx + 1).padStart(2, '0') };
                        onChange({ ...block, items: newItems });
                      }}
                      placeholder="Item title"
                      className="text-sm font-semibold"
                    />
                    <Input
                      value={item.desc}
                      onChange={(e) => {
                        const newItems = [...(block.items || [])];
                        newItems[idx] = { ...newItems[idx], desc: e.target.value };
                        onChange({ ...block, items: newItems });
                      }}
                      placeholder="Description"
                      className="text-sm text-gray-600"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const newItems = (block.items || []).filter((_, i) => i !== idx);
                      onChange({ ...block, items: newItems });
                    }}
                    className="text-red-500 mt-4"
                  >
                    ✕
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const newItems = [...(block.items || []), { 
                    num: String((block.items?.length || 0) + 1).padStart(2, '0'), 
                    title: '', 
                    desc: '' 
                  }];
                  onChange({ ...block, items: newItems });
                }}
              >
                + Add Item
              </Button>
            </div>
          )}

          {block.type === 'sources' && (
            <div className="space-y-3">
              <Label className="text-xs text-gray-500">
                List of sources for fact verification
              </Label>
              {(block.sources || []).map((source, idx) => (
                <div key={idx} className="flex gap-2">
                  <Input
                    value={source}
                    onChange={(e) => {
                      const newSources = [...(block.sources || [])];
                      newSources[idx] = e.target.value;
                      onChange({ ...block, sources: newSources });
                    }}
                    placeholder="Source citation..."
                    className="text-sm"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const newSources = (block.sources || []).filter((_, i) => i !== idx);
                      onChange({ ...block, sources: newSources });
                    }}
                    className="text-red-500"
                  >
                    ✕
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const newSources = [...(block.sources || []), ''];
                  onChange({ ...block, sources: newSources });
                }}
              >
                + Add Source
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function AddBlockButton({ onAdd }: { onAdd: (type: BlockType) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2"
      >
        <span className="text-lg">+</span>
        <span className="text-sm">Add Block</span>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-20 p-2 grid grid-cols-2 gap-1">
            {(Object.keys(blockTypeLabels) as BlockType[]).map((type) => (
              <button
                key={type}
                onClick={() => {
                  onAdd(type);
                  setIsOpen(false);
                }}
                className="text-left px-3 py-2 text-sm hover:bg-gray-100 rounded transition-colors"
              >
                {blockTypeLabels[type]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function AdminDashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { articles, addArticle, updateArticle, deleteArticle } = useArticles();
  
  const [activeTab, setActiveTab] = useState('articles');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [currentArticle, setCurrentArticle] = useState<Partial<Article>>({
    title: '',
    slug: '',
    excerpt: '',
    blocks: [],
    category: 'News',
    status: 'draft',
    author: 'ObjectWire Editorial',
    readTime: '5 min read'
  });

  // Check authentication
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/admin');
    }
  }, [router]);

  // Handle edit query param
  useEffect(() => {
    const editId = searchParams.get('edit');
    if (editId) {
      const article = articles.find(a => a.id === editId);
      if (article) {
        setCurrentArticle(article);
        setEditingId(editId);
        setActiveTab('editor');
      }
    }
  }, [searchParams, articles]);

  const handleLogout = () => {
    destroySession();
    router.push('/admin');
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title: string) => {
    setCurrentArticle(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title)
    }));
  };

  const handleSaveArticle = () => {
    if (!currentArticle.title) {
      alert('Please enter a title');
      return;
    }

    if (!currentArticle.blocks || currentArticle.blocks.length === 0) {
      alert('Please add at least one content block');
      return;
    }

    const articleData: Article = {
      id: editingId || Date.now().toString(),
      title: currentArticle.title || '',
      slug: currentArticle.slug || generateSlug(currentArticle.title || ''),
      excerpt: currentArticle.excerpt || '',
      blocks: currentArticle.blocks || [],
      category: currentArticle.category || 'News',
      status: currentArticle.status as 'draft' | 'published' || 'draft',
      author: currentArticle.author || 'ObjectWire Editorial',
      createdAt: currentArticle.createdAt || new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      readTime: currentArticle.readTime || '5 min read'
    };

    if (editingId) {
      updateArticle(editingId, articleData);
    } else {
      addArticle(articleData);
    }

    // Reset form
    setCurrentArticle({
      title: '',
      slug: '',
      excerpt: '',
      blocks: [],
      category: 'News',
      status: 'draft',
      author: 'ObjectWire Editorial',
      readTime: '5 min read'
    });
    setEditingId(null);
    setActiveTab('articles');
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      deleteArticle(id);
    }
  };

  const handleEditArticle = (article: Article) => {
    setCurrentArticle(article);
    setEditingId(article.id);
    setActiveTab('editor');
  };

  const handleNewArticle = () => {
    setCurrentArticle({
      title: '',
      slug: '',
      excerpt: '',
      blocks: [],
      category: 'News',
      status: 'draft',
      author: 'ObjectWire Editorial',
      readTime: '5 min read'
    });
    setEditingId(null);
    setActiveTab('editor');
  };

  const addBlock = (type: BlockType) => {
    const newBlock: ArticleBlock = {
      id: Date.now().toString(),
      type,
      content: ''
    };

    if (type === 'heading') {
      newBlock.level = 2;
    }
    if (type === 'stat-grid') {
      newBlock.stats = [{ value: '', label: '', color: 'gray' }];
    }
    if (type === 'key-mechanisms') {
      newBlock.items = [{ num: '01', title: '', desc: '' }];
    }
    if (type === 'sources') {
      newBlock.sources = [''];
    }

    setCurrentArticle(prev => ({
      ...prev,
      blocks: [...(prev.blocks || []), newBlock]
    }));
  };

  const updateBlock = (blockId: string, updatedBlock: ArticleBlock) => {
    setCurrentArticle(prev => ({
      ...prev,
      blocks: (prev.blocks || []).map(b => b.id === blockId ? updatedBlock : b)
    }));
  };

  const deleteBlock = (blockId: string) => {
    setCurrentArticle(prev => ({
      ...prev,
      blocks: (prev.blocks || []).filter(b => b.id !== blockId)
    }));
  };

  const moveBlock = (blockId: string, direction: 'up' | 'down') => {
    const blocks = currentArticle.blocks || [];
    const idx = blocks.findIndex(b => b.id === blockId);
    if (idx === -1) return;
    
    const newIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (newIdx < 0 || newIdx >= blocks.length) return;

    const newBlocks = [...blocks];
    [newBlocks[idx], newBlocks[newIdx]] = [newBlocks[newIdx], newBlocks[idx]];
    
    setCurrentArticle(prev => ({ ...prev, blocks: newBlocks }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <span className="text-white font-bold">O</span>
              </div>
              <span className="font-bold">ObjectWire</span>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <span className="text-sm text-gray-500">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="sm">View Site</Button>
            </Link>
            <Button onClick={handleNewArticle} size="sm">
              + New Article
            </Button>
            <Button onClick={handleLogout} variant="outline" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="articles">Articles ({articles.length})</TabsTrigger>
            <TabsTrigger value="editor">
              {editingId ? 'Edit Article' : 'New Article'}
            </TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Articles List */}
          <TabsContent value="articles">
            <div className="grid gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Articles</h2>
                  <p className="text-gray-500 text-sm mt-1">Manage your published and draft articles</p>
                </div>
              </div>

              <div className="grid gap-4">
                {articles.map((article) => (
                  <Card key={article.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={article.status === 'published' ? 'default' : 'secondary'}>
                              {article.status}
                            </Badge>
                            <Badge variant="outline">{article.category}</Badge>
                            <span className="text-xs text-gray-400">
                              {article.blocks?.length || 0} blocks
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
                          <p className="text-gray-500 text-sm mb-3">{article.excerpt}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-400">
                            <span>By {article.author}</span>
                            <span>•</span>
                            <span>Updated {article.updatedAt}</span>
                            <span>•</span>
                            <span className="font-mono">/blog/{article.slug}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/blog/${article.slug}`}>View</Link>
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleEditArticle(article)}
                          >
                            Edit
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-red-500 hover:text-red-600"
                            onClick={() => handleDeleteArticle(article.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {articles.length === 0 && (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <p className="text-gray-500 mb-4">No articles yet</p>
                      <Button onClick={handleNewArticle}>
                        Create your first article
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Block Editor */}
          <TabsContent value="editor">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Editor */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{editingId ? 'Edit Article' : 'New Article'}</CardTitle>
                    <CardDescription>Build your article with interactive content blocks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        placeholder="Enter article title..."
                        value={currentArticle.title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        className="text-lg font-semibold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="slug">URL Slug</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">/blog/</span>
                        <Input
                          id="slug"
                          placeholder="article-slug"
                          value={currentArticle.slug}
                          onChange={(e) => setCurrentArticle(prev => ({ ...prev, slug: e.target.value }))}
                          className="font-mono text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                        placeholder="Brief summary of the article (appears in previews and SEO)..."
                        value={currentArticle.excerpt}
                        onChange={(e) => setCurrentArticle(prev => ({ ...prev, excerpt: e.target.value }))}
                        rows={2}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Content Blocks */}
                <Card>
                  <CardHeader>
                    <CardTitle>Content Blocks</CardTitle>
                    <CardDescription>
                      Add and arrange interactive content blocks. Use **text** for bold/key terms that highlight on hover.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {(currentArticle.blocks || []).map((block, index) => (
                      <BlockEditor
                        key={block.id}
                        block={block}
                        onChange={(updated) => updateBlock(block.id, updated)}
                        onDelete={() => deleteBlock(block.id)}
                        onMoveUp={() => moveBlock(block.id, 'up')}
                        onMoveDown={() => moveBlock(block.id, 'down')}
                        isFirst={index === 0}
                        isLast={index === (currentArticle.blocks?.length || 0) - 1}
                      />
                    ))}
                    
                    <AddBlockButton onAdd={addBlock} />
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Publish Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Publish</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Status</Label>
                      <Select 
                        value={currentArticle.status} 
                        onValueChange={(value) => setCurrentArticle(prev => ({ ...prev, status: value as 'draft' | 'published' }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1" 
                        onClick={handleNewArticle}
                      >
                        Clear
                      </Button>
                      <Button className="flex-1" onClick={handleSaveArticle}>
                        {editingId ? 'Update' : (currentArticle.status === 'published' ? 'Publish' : 'Save Draft')}
                      </Button>
                    </div>

                    {currentArticle.title && currentArticle.slug && (
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/blog/${currentArticle.slug}`} target="_blank">
                          Preview Article →
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* Category */}
                <Card>
                  <CardHeader>
                    <CardTitle>Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select 
                      value={currentArticle.category} 
                      onValueChange={(value) => setCurrentArticle(prev => ({ ...prev, category: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="News">News</SelectItem>
                        <SelectItem value="Investigation">Investigation</SelectItem>
                        <SelectItem value="Analysis">Analysis</SelectItem>
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Policy">Policy</SelectItem>
                        <SelectItem value="Business">Business</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                {/* Author & Meta */}
                <Card>
                  <CardHeader>
                    <CardTitle>Meta</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Author</Label>
                      <Input
                        value={currentArticle.author}
                        onChange={(e) => setCurrentArticle(prev => ({ ...prev, author: e.target.value }))}
                        placeholder="Author name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Read Time</Label>
                      <Input
                        value={currentArticle.readTime}
                        onChange={(e) => setCurrentArticle(prev => ({ ...prev, readTime: e.target.value }))}
                        placeholder="5 min read"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Block Guide */}
                <Card>
                  <CardHeader>
                    <CardTitle>Block Types</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-500 space-y-2">
                    <p><strong>📝 Paragraph</strong> - Regular text with **bold** support</p>
                    <p><strong>📌 Heading</strong> - Section headers (H2-H4)</p>
                    <p><strong>📋 Summary</strong> - Highlighted executive summary box</p>
                    <p><strong>📊 Stats Grid</strong> - Animated counting statistics</p>
                    <p><strong>🔢 Numbered List</strong> - Key mechanisms with hover effects</p>
                    <p><strong>📚 Sources</strong> - Citation list</p>
                    <p><strong>💡 Callout</strong> - Important info box</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard Settings</CardTitle>
                <CardDescription>Configure your admin dashboard preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Default Author</Label>
                  <Input defaultValue="ObjectWire Editorial" />
                </div>
                <div className="space-y-2">
                  <Label>Site Title</Label>
                  <Input defaultValue="ObjectWire" />
                </div>
                <div className="space-y-2">
                  <Label>Site Description</Label>
                  <Textarea defaultValue="Precision intelligence for professionals who demand verified, source-cited reporting." />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label className="text-red-600">Danger Zone</Label>
                  <Button 
                    variant="outline" 
                    className="text-red-600 border-red-200"
                    onClick={() => {
                      if (confirm('This will reset all articles to default. Are you sure?')) {
                        localStorage.removeItem('objectwire-articles');
                        window.location.reload();
                      }
                    }}
                  >
                    Reset to Default Articles
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <AdminDashboardContent />
    </Suspense>
  );
}
