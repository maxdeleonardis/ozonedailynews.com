'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useArticles } from '@/lib/articles-context';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreatePostModal({ isOpen, onClose }: CreatePostModalProps) {
  const router = useRouter();
  const { addArticle } = useArticles();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('ObjectWire Editorial');
  const [category, setCategory] = useState('News');

  if (!isOpen) return null;

  const generateSlug = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleStart = async () => {
    if (!title.trim()) {
      alert('Please enter a post title');
      return;
    }

    const slug = generateSlug(title);
    
    // Create the article stub
    const newArticle = {
      id: crypto.randomUUID(),
      title: title.trim(),
      slug,
      excerpt: '',
      content: [],
      category,
      status: 'draft' as const,
      author,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    try {
      await addArticle(newArticle);
      // Close modal and redirect to editor
      onClose();
      router.push(`/blog/${slug}/edit`);
    } catch (error) {
      console.error('Failed to create article:', error);
      alert('Failed to create article. Please try again.');
    }
  };

  const handleCancel = () => {
    setTitle('');
    setAuthor('ObjectWire Editorial');
    setCategory('News');
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={handleCancel}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-white rounded-lg shadow-2xl w-full max-w-md pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Create New Post</h2>
            <button
              onClick={handleCancel}
              className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6 space-y-5">
            {/* Post Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Post title
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your post title"
                  maxLength={200}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
                <span className="absolute right-3 top-2.5 text-xs text-gray-400">
                  {title.length}/200
                </span>
              </div>
            </div>

            {/* Post Author */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Post author
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter author name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white cursor-pointer"
              >
                <option value="News">News</option>
                <option value="Investigation">Investigation</option>
                <option value="Technology">Technology</option>
                <option value="Business">Business</option>
                <option value="Politics">Politics</option>
                <option value="Education">Education</option>
                <option value="Crime">Crime</option>
              </select>
            </div>

            {/* Helper Text */}
            <p className="text-sm text-gray-500 italic pt-2">
              You can always edit this later in your post's settings.
            </p>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex items-center justify-between">
            <button
              onClick={handleCancel}
              className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleStart}
              disabled={!title.trim()}
              className="px-6 py-2.5 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
