'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import {
  getAllArticles,
  updateArticleMetadata,
  StaticArticleMetadata,
} from '@/lib/article-registry';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

export default function StaticArticleManager() {
  const router = useRouter();
  const [articles, setArticles] = useState<StaticArticleMetadata[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<StaticArticleMetadata | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Partial<StaticArticleMetadata>>({});

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/admin');
      return;
    }

    loadArticles();
  }, [router]);

  const loadArticles = () => {
    const allArticles = getAllArticles();
    setArticles(allArticles);
  };

  const handleEdit = (article: StaticArticleMetadata) => {
    setSelectedArticle(article);
    setEditForm({
      title: article.title,
      excerpt: article.excerpt,
      category: article.category,
      tags: article.tags,
      featuredImage: article.featuredImage,
      heroImage: article.heroImage,
      status: article.status,
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!selectedArticle) return;

    const updated = updateArticleMetadata(selectedArticle.id, editForm);
    if (updated) {
      loadArticles();
      setIsEditing(false);
      setSelectedArticle(null);
      alert('✅ Article metadata updated! Note: Changes are in-memory only. In production, this would save to a database.');
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedArticle(null);
    setEditForm({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard">
              <Button variant="outline" size="sm">← Back to Dashboard</Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold">Static Article Manager</h1>
              <p className="text-sm text-gray-600">Manage articles created with DynamicNewsArticle</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Info Banner */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-semibold mb-1">About Static Articles</p>
              <p className="text-sm">
                These are articles created as <code className="bg-blue-100 px-1 rounded">.tsx</code> files using the DynamicNewsArticle component. 
                You can update metadata like thumbnails, titles, and descriptions here. To edit content, you'll need to edit the source file.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Articles List */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-bold mb-4">Articles ({articles.length})</h2>
                <div className="space-y-2">
                  {articles.map((article) => (
                    <button
                      key={article.id}
                      onClick={() => handleEdit(article)}
                      className={`w-full text-left p-3 rounded border transition-colors ${
                        selectedArticle?.id === article.id
                          ? 'bg-blue-50 border-blue-500'
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{article.title}</p>
                          <p className="text-xs text-gray-500 mt-1">/{article.slug}</p>
                        </div>
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full shrink-0 ${
                          article.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {article.status}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Editor Panel */}
          <div className="lg:col-span-2">
            {isEditing && selectedArticle ? (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Edit Metadata</h2>
                    <div className="flex gap-2">
                      <Button onClick={handleCancel} variant="outline" size="sm">
                        Cancel
                      </Button>
                      <Button onClick={handleSave} size="sm">
                        Save Changes
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <Label htmlFor="title">Article Title</Label>
                      <Input
                        id="title"
                        value={editForm.title || ''}
                        onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                        placeholder="Enter article title"
                      />
                    </div>

                    {/* Excerpt */}
                    <div>
                      <Label htmlFor="excerpt">Excerpt / Description</Label>
                      <Textarea
                        id="excerpt"
                        value={editForm.excerpt || ''}
                        onChange={(e) => setEditForm({ ...editForm, excerpt: e.target.value })}
                        placeholder="Enter article excerpt"
                        rows={3}
                      />
                    </div>

                    {/* Images */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="featuredImage">Thumbnail Image (for listings)</Label>
                        <Input
                          id="featuredImage"
                          value={editForm.featuredImage || ''}
                          onChange={(e) => setEditForm({ ...editForm, featuredImage: e.target.value })}
                          placeholder="/images/thumbnail.jpg"
                        />
                        {editForm.featuredImage && (
                          <img
                            src={editForm.featuredImage}
                            alt="Thumbnail preview"
                            className="mt-2 w-full h-32 object-cover rounded border"
                            onError={(e) => {
                              e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
                            }}
                          />
                        )}
                      </div>

                      <div>
                        <Label htmlFor="heroImage">Hero Image (in article)</Label>
                        <Input
                          id="heroImage"
                          value={editForm.heroImage || ''}
                          onChange={(e) => setEditForm({ ...editForm, heroImage: e.target.value })}
                          placeholder="/images/hero.jpg"
                        />
                        {editForm.heroImage && (
                          <img
                            src={editForm.heroImage}
                            alt="Hero preview"
                            className="mt-2 w-full h-32 object-cover rounded border"
                            onError={(e) => {
                              e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Image+Not+Found';
                            }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Input
                        id="category"
                        value={editForm.category || ''}
                        onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                        placeholder="Technology, Investigation, etc."
                      />
                    </div>

                    {/* Tags */}
                    <div>
                      <Label htmlFor="tags">Tags (comma-separated)</Label>
                      <Input
                        id="tags"
                        value={editForm.tags?.join(', ') || ''}
                        onChange={(e) => setEditForm({
                          ...editForm,
                          tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean)
                        })}
                        placeholder="apple, iphone, technology"
                      />
                    </div>

                    {/* Status */}
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <select
                        id="status"
                        value={editForm.status || 'draft'}
                        onChange={(e) => setEditForm({
                          ...editForm,
                          status: e.target.value as 'draft' | 'published'
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                      </select>
                    </div>

                    {/* File Path (readonly) */}
                    <div>
                      <Label>File Path (readonly)</Label>
                      <p className="text-sm text-gray-600 mt-1 font-mono bg-gray-50 p-2 rounded">
                        {selectedArticle.filePath}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t flex gap-2">
                      <Link href={`/${selectedArticle.slug}`} target="_blank">
                        <Button variant="outline">
                          View Article →
                        </Button>
                      </Link>
                      <Button variant="outline" asChild>
                        <a
                          href={`vscode://file${selectedArticle.filePath}`}
                          onClick={(e) => {
                            e.preventDefault();
                            alert('In production, this would open the file in VS Code. For now, navigate to:\n\n' + selectedArticle.filePath);
                          }}
                        >
                          Edit Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-12 text-center text-gray-500">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p>Select an article from the list to edit its metadata</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
