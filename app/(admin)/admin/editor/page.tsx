'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import { createBlogPost, generateSlug, calculateReadTime } from '@/lib/blog-service';
import { ArticleBlock } from '@/lib/article-types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ImageUploader } from '@/components/ImageUploader';
import Link from 'next/link';

const BLOCK_TYPES = [
  // Content
  { type: 'summary', label: 'Executive Summary', icon: '📋', category: 'Content' },
  { type: 'heading', label: 'Section Heading', icon: '📌', category: 'Content' },
  { type: 'paragraph', label: 'Paragraph', icon: '📝', category: 'Content' },
  { type: 'quote', label: 'Quote', icon: '💬', category: 'Content' },
  { type: 'list', label: 'Bullet List', icon: '📝', category: 'Content' },
  { type: 'numbered-list', label: 'Numbered List', icon: '🔢', category: 'Content' },
  // Data
  { type: 'stat-grid', label: 'Statistics Grid', icon: '📊', category: 'Data' },
  { type: 'key-mechanisms', label: 'Key Points List', icon: '🔑', category: 'Data' },
  { type: 'timeline', label: 'Timeline', icon: '⏱️', category: 'Data' },
  { type: 'comparison', label: 'Comparison Table', icon: '⚖️', category: 'Data' },
  { type: 'data-table', label: 'Data Table', icon: '📊', category: 'Data' },
  { type: 'chart', label: 'Chart', icon: '📈', category: 'Data' },
  { type: 'pros-cons', label: 'Pros/Cons List', icon: '⚖️', category: 'Data' },
  // Media
  { type: 'image', label: 'Image', icon: '🖼️', category: 'Media' },
  { type: 'video', label: 'Video Embed', icon: '🎥', category: 'Media' },
  { type: 'gallery', label: 'Image Gallery', icon: '🖼️', category: 'Media' },
  { type: 'audio', label: 'Audio Player', icon: '🎧', category: 'Media' },
  // Social
  { type: 'twitter', label: 'Twitter/X Embed', icon: '🐦', category: 'Social' },
  { type: 'instagram', label: 'Instagram Embed', icon: '📸', category: 'Social' },
  { type: 'tiktok', label: 'TikTok Embed', icon: '🎵', category: 'Social' },
  { type: 'map', label: 'Map Embed', icon: '🗺️', category: 'Social' },
  // Interactive
  { type: 'code', label: 'Code Block', icon: '💻', category: 'Interactive' },
  { type: 'poll', label: 'Poll', icon: '📊', category: 'Interactive' },
  { type: 'accordion', label: 'Accordion/FAQ', icon: '❓', category: 'Interactive' },
  // Special
  { type: 'callout', label: 'Callout Box', icon: '💡', category: 'Special' },
  { type: 'divider', label: 'Divider', icon: '➖', category: 'Special' },
  { type: 'author-bio', label: 'Author Bio', icon: '👤', category: 'Special' },
  { type: 'related-articles', label: 'Related Articles', icon: '🔗', category: 'Special' },
  { type: 'newsletter', label: 'Newsletter CTA', icon: '📧', category: 'Special' },
  { type: 'button', label: 'Button/CTA', icon: '🔘', category: 'Special' },
  { type: 'file-download', label: 'File Download', icon: '📎', category: 'Special' },
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
  const [sidebarBlocks, setSidebarBlocks] = useState<ArticleBlock[]>([]);
  const [layoutColumns, setLayoutColumns] = useState<1 | 2>(1);
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
  const [activeSidebarBlockId, setActiveSidebarBlockId] = useState<string | null>(null);
  const [draggedBlockId, setDraggedBlockId] = useState<string | null>(null);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [currentTextareaId, setCurrentTextareaId] = useState<string | null>(null);
  const [showColorPicker, setShowColorPicker] = useState<string | null>(null);
  const textareaRefs = useRef<{ [key: string]: HTMLTextAreaElement | null }>({});

  const TEXT_COLORS = [
    { name: 'Red', value: 'red', class: 'bg-red-500' },
    { name: 'Blue', value: 'blue', class: 'bg-blue-500' },
    { name: 'Green', value: 'green', class: 'bg-green-500' },
    { name: 'Orange', value: 'orange', class: 'bg-orange-500' },
    { name: 'Purple', value: 'purple', class: 'bg-purple-500' },
    { name: 'Yellow', value: 'yellow', class: 'bg-yellow-500' },
    { name: 'Gray', value: 'gray', class: 'bg-gray-500' },
  ];

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
      ...(type === 'timeline' && { items: [{ num: 'Jan 2026', title: '', desc: '' }] }),
      ...(type === 'comparison' && { content: 'Column 1|Column 2', items: [{ num: '', title: '', desc: '' }] }),
      ...(type === 'accordion' && { items: [{ num: '', title: '', desc: '' }] }),
      ...(type === 'pros-cons' && { items: [{ num: 'pro', title: '', desc: '' }] }),
      ...(type === 'data-table' && { tableData: { headers: ['Column 1', 'Column 2'], rows: [['', '']] } }),
      ...(type === 'gallery' && { galleryImages: [{ url: '', caption: '' }] }),
      ...(type === 'poll' && { pollOptions: [{ text: '', votes: 0 }] }),
      ...(type === 'related-articles' && { relatedLinks: [{ title: '', url: '', image: '' }] }),
      ...(type === 'code' && { language: 'javascript' }),
      ...(type === 'chart' && { chartType: 'bar' }),
      ...(type === 'button' && { buttonStyle: 'primary', buttonUrl: '' }),
      ...(type === 'author-bio' && { authorName: '', authorImage: '', authorBio: '' }),
    };
    setBlocks([...blocks, newBlock]);
    setActiveBlockId(newBlock.id);
  };

  const addSidebarBlock = (type: string) => {
    const newBlock: ArticleBlock = {
      id: `sidebar-block-${Date.now()}`,
      type: type as ArticleBlock['type'],
      content: '',
      ...(type === 'stat-grid' && { stats: [{ value: '', label: '', color: 'blue' }] }),
      ...(type === 'key-mechanisms' && { items: [{ num: '01', title: '', desc: '' }] }),
      ...(type === 'sources' && { sources: [''] }),
      ...(type === 'related-articles' && { relatedLinks: [{ title: '', url: '', image: '' }] }),
    };
    setSidebarBlocks([...sidebarBlocks, newBlock]);
    setActiveSidebarBlockId(newBlock.id);
  };

  const updateSidebarBlock = (id: string, updates: Partial<ArticleBlock>) => {
    setSidebarBlocks(sidebarBlocks.map(block => 
      block.id === id ? { ...block, ...updates } : block
    ));
  };

  const deleteSidebarBlock = (id: string) => {
    if (!confirm('Delete this sidebar block?')) return;
    setSidebarBlocks(sidebarBlocks.filter(block => block.id !== id));
    if (activeSidebarBlockId === id) setActiveSidebarBlockId(null);
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

  // Link insertion functions
  const openLinkModal = (blockId: string) => {
    const textarea = textareaRefs.current[blockId];
    if (textarea) {
      const selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
      setLinkText(selectedText);
    }
    setCurrentTextareaId(blockId);
    setLinkUrl('');
    setShowLinkModal(true);
  };

  const insertLink = () => {
    if (!currentTextareaId || !linkUrl) return;
    
    const block = blocks.find(b => b.id === currentTextareaId);
    if (!block) return;

    const textarea = textareaRefs.current[currentTextareaId];
    const content = block.content || '';
    
    // Format: [link text](url)
    const linkMarkdown = `[${linkText || linkUrl}](${linkUrl})`;
    
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newContent = content.substring(0, start) + linkMarkdown + content.substring(end);
      updateBlock(currentTextareaId, { content: newContent });
    } else {
      // Append to end if no selection
      updateBlock(currentTextareaId, { content: content + ' ' + linkMarkdown });
    }
    
    setShowLinkModal(false);
    setLinkUrl('');
    setLinkText('');
    setCurrentTextareaId(null);
  };

  const insertBold = (blockId: string) => {
    const textarea = textareaRefs.current[blockId];
    const block = blocks.find(b => b.id === blockId);
    if (!textarea || !block) return;
    
    const content = block.content || '';
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    
    const newContent = content.substring(0, start) + `**${selectedText || 'bold text'}**` + content.substring(end);
    updateBlock(blockId, { content: newContent });
  };

  const insertItalic = (blockId: string) => {
    const textarea = textareaRefs.current[blockId];
    const block = blocks.find(b => b.id === blockId);
    if (!textarea || !block) return;
    
    const content = block.content || '';
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    
    const newContent = content.substring(0, start) + `*${selectedText || 'italic text'}*` + content.substring(end);
    updateBlock(blockId, { content: newContent });
  };

  const insertUnderline = (blockId: string) => {
    const textarea = textareaRefs.current[blockId];
    const block = blocks.find(b => b.id === blockId);
    if (!textarea || !block) return;
    
    const content = block.content || '';
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    
    const newContent = content.substring(0, start) + `__${selectedText || 'underlined text'}__` + content.substring(end);
    updateBlock(blockId, { content: newContent });
  };

  const insertColor = (blockId: string, color: string) => {
    const textarea = textareaRefs.current[blockId];
    const block = blocks.find(b => b.id === blockId);
    if (!textarea || !block) return;
    
    const content = block.content || '';
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    
    // Format: {color:red}text{/color}
    const newContent = content.substring(0, start) + `{color:${color}}${selectedText || 'colored text'}{/color}` + content.substring(end);
    updateBlock(blockId, { content: newContent });
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
      await createBlogPost({
        title,
        slug,
        excerpt,
        author,
        category,
        tags,
        read_time: calculateReadTime(blocks),
        blocks,
        sidebar_blocks: sidebarBlocks,
        layout_columns: layoutColumns,
        status,
        featured_image: featuredImage,
      });

      alert(`Post ${status === 'published' ? 'published' : 'saved as draft'} successfully!`);
      router.push('/admin/dashboard');
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Error saving post. Check Supabase configuration.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderBlockEditor = (block: ArticleBlock, isSidebar: boolean = false) => {
    const updateFn = isSidebar ? updateSidebarBlock : updateBlock;
    switch (block.type) {
      case 'paragraph':
        return (
          <div className="space-y-2">
            {/* Formatting Toolbar */}
            <div className="flex items-center gap-1 p-2 bg-gray-100 rounded-t border border-b-0 border-gray-200 flex-wrap">
              <button
                type="button"
                onClick={() => insertBold(block.id)}
                className="px-3 py-1 text-sm font-bold hover:bg-gray-200 rounded transition-colors"
                title="Bold (**text**)"
              >
                B
              </button>
              <button
                type="button"
                onClick={() => insertItalic(block.id)}
                className="px-3 py-1 text-sm italic hover:bg-gray-200 rounded transition-colors"
                title="Italic (*text*)"
              >
                I
              </button>
              <button
                type="button"
                onClick={() => insertUnderline(block.id)}
                className="px-3 py-1 text-sm underline hover:bg-gray-200 rounded transition-colors"
                title="Underline (__text__)"
              >
                U
              </button>
              <div className="w-px h-5 bg-gray-300 mx-1"></div>
              <button
                type="button"
                onClick={() => openLinkModal(block.id)}
                className="px-3 py-1 text-sm text-blue-600 hover:bg-gray-200 rounded transition-colors flex items-center gap-1"
                title="Insert Link"
              >
                🔗 Link
              </button>
              <div className="w-px h-5 bg-gray-300 mx-1"></div>
              {/* Color Picker */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowColorPicker(showColorPicker === block.id ? null : block.id)}
                  className="px-3 py-1 text-sm hover:bg-gray-200 rounded transition-colors flex items-center gap-1"
                  title="Text Color"
                >
                  🎨 Color
                </button>
                {showColorPicker === block.id && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10">
                    <div className="grid grid-cols-4 gap-1">
                      {TEXT_COLORS.map((color) => (
                        <button
                          key={color.value}
                          type="button"
                          onClick={() => {
                            insertColor(block.id, color.value);
                            setShowColorPicker(null);
                          }}
                          className={`w-6 h-6 rounded ${color.class} hover:ring-2 hover:ring-offset-1 hover:ring-gray-400`}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-1"></div>
              <span className="text-xs text-gray-400">
                Supports: bold, italic, underline, links, colors
              </span>
            </div>
            <Textarea
              ref={(el) => { textareaRefs.current[block.id] = el; }}
              placeholder="Paragraph content... Paste text with links - they will be preserved. Use the toolbar for formatting."
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
              rows={4}
              className="font-mono text-sm rounded-t-none"
            />
          </div>
        );

      case 'summary':
      case 'callout':
      case 'quote':
        return (
          <Textarea
            placeholder={
              block.type === 'summary' ? 'Executive summary... Use **bold** for key terms.' : 
              block.type === 'callout' ? 'Important note or callout...' : 
              'Quote text...'
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
            {(block.items || []).map((item: any, idx: number) => (
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
            {(block.items || []).map((item: any, idx: number) => (
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
            {(block.stats || []).map((stat: any, idx: number) => (
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
            {(block.items || []).map((item: any, idx: number) => (
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
            {(block.sources || []).map((source: any, idx: number) => (
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

      // ========== NEW BLOCKS ==========

      case 'numbered-list':
        return (
          <Textarea
            placeholder="1. First item&#10;2. Second item&#10;3. Third item"
            value={block.content}
            onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            rows={6}
            className="font-mono text-sm"
          />
        );

      case 'twitter':
        return (
          <div className="space-y-3">
            <Input
              placeholder="Twitter/X post URL (e.g., https://twitter.com/user/status/123)"
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            />
            <p className="text-xs text-gray-500">Paste a Twitter/X post URL to embed</p>
          </div>
        );

      case 'instagram':
        return (
          <div className="space-y-3">
            <Input
              placeholder="Instagram post URL (e.g., https://instagram.com/p/ABC123)"
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            />
            <p className="text-xs text-gray-500">Paste an Instagram post URL to embed</p>
          </div>
        );

      case 'tiktok':
        return (
          <div className="space-y-3">
            <Input
              placeholder="TikTok video URL (e.g., https://tiktok.com/@user/video/123)"
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            />
            <p className="text-xs text-gray-500">Paste a TikTok video URL to embed</p>
          </div>
        );

      case 'audio':
        return (
          <div className="space-y-3">
            <Input
              placeholder="Audio file URL (mp3, wav, etc.)"
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            />
            <Input
              placeholder="Audio title/description"
              value={block.caption || ''}
              onChange={(e) => updateBlock(block.id, { caption: e.target.value })}
            />
          </div>
        );

      case 'map':
        return (
          <div className="space-y-3">
            <Input
              placeholder="Google Maps embed URL or place name"
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            />
            <Input
              placeholder="Location caption (optional)"
              value={block.caption || ''}
              onChange={(e) => updateBlock(block.id, { caption: e.target.value })}
            />
            <p className="text-xs text-gray-500">Go to Google Maps → Share → Embed → Copy the src URL from iframe</p>
          </div>
        );

      case 'gallery':
        return (
          <div className="space-y-3">
            {(block.galleryImages || []).map((img: any, idx: number) => (
              <div key={idx} className="grid grid-cols-12 gap-2 items-center">
                <Input
                  placeholder="Image URL"
                  value={img.url}
                  onChange={(e) => {
                    const newImages = [...(block.galleryImages || [])];
                    newImages[idx] = { ...newImages[idx], url: e.target.value };
                    updateBlock(block.id, { galleryImages: newImages });
                  }}
                  className="col-span-8"
                />
                <Input
                  placeholder="Caption"
                  value={img.caption}
                  onChange={(e) => {
                    const newImages = [...(block.galleryImages || [])];
                    newImages[idx] = { ...newImages[idx], caption: e.target.value };
                    updateBlock(block.id, { galleryImages: newImages });
                  }}
                  className="col-span-4"
                />
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => updateBlock(block.id, { 
                galleryImages: [...(block.galleryImages || []), { url: '', caption: '' }] 
              })}
            >
              + Add Image
            </Button>
          </div>
        );

      case 'code':
        return (
          <div className="space-y-3">
            <select
              value={block.language || 'javascript'}
              onChange={(e) => updateBlock(block.id, { language: e.target.value })}
              className="w-full h-10 px-3 rounded-md border border-gray-300"
            >
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="python">Python</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="json">JSON</option>
              <option value="bash">Bash</option>
              <option value="sql">SQL</option>
              <option value="java">Java</option>
              <option value="csharp">C#</option>
              <option value="cpp">C++</option>
              <option value="go">Go</option>
              <option value="rust">Rust</option>
              <option value="php">PHP</option>
              <option value="ruby">Ruby</option>
            </select>
            <Textarea
              placeholder="// Your code here..."
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
              rows={10}
              className="font-mono text-sm"
            />
          </div>
        );

      case 'data-table':
        return (
          <div className="space-y-3">
            <div className="flex gap-2 mb-2">
              {(block.tableData?.headers || []).map((header: any, idx: number) => (
                <Input
                  key={idx}
                  placeholder={`Header ${idx + 1}`}
                  value={header}
                  onChange={(e) => {
                    const newHeaders = [...(block.tableData?.headers || [])];
                    newHeaders[idx] = e.target.value;
                    updateBlock(block.id, { tableData: { ...block.tableData!, headers: newHeaders } });
                  }}
                  className="flex-1"
                />
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  const newHeaders = [...(block.tableData?.headers || []), `Column ${(block.tableData?.headers?.length || 0) + 1}`];
                  const newRows = (block.tableData?.rows || []).map((row: any) => [...row, '']);
                  updateBlock(block.id, { tableData: { headers: newHeaders, rows: newRows } });
                }}
              >
                + Col
              </Button>
            </div>
            {(block.tableData?.rows || []).map((row: any, rowIdx: number) => (
              <div key={rowIdx} className="flex gap-2">
                {row.map((cell: any, cellIdx: number) => (
                  <Input
                    key={cellIdx}
                    placeholder="Cell value"
                    value={cell}
                    onChange={(e) => {
                      const newRows = [...(block.tableData?.rows || [])];
                      newRows[rowIdx] = [...newRows[rowIdx]];
                      newRows[rowIdx][cellIdx] = e.target.value;
                      updateBlock(block.id, { tableData: { ...block.tableData!, rows: newRows } });
                    }}
                    className="flex-1"
                  />
                ))}
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                const numCols = block.tableData?.headers?.length || 2;
                const newRow = Array(numCols).fill('');
                updateBlock(block.id, { tableData: { ...block.tableData!, rows: [...(block.tableData?.rows || []), newRow] } });
              }}
            >
              + Add Row
            </Button>
          </div>
        );

      case 'chart':
        return (
          <div className="space-y-3">
            <select
              value={block.chartType || 'bar'}
              onChange={(e) => updateBlock(block.id, { chartType: e.target.value as 'bar' | 'line' | 'pie' })}
              className="w-full h-10 px-3 rounded-md border border-gray-300"
            >
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
              <option value="pie">Pie Chart</option>
            </select>
            <Textarea
              placeholder="Enter data as: Label:Value (one per line)&#10;e.g.&#10;January:100&#10;February:150&#10;March:200"
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
              rows={6}
              className="font-mono text-sm"
            />
            <Input
              placeholder="Chart title (optional)"
              value={block.caption || ''}
              onChange={(e) => updateBlock(block.id, { caption: e.target.value })}
            />
          </div>
        );

      case 'poll':
        return (
          <div className="space-y-3">
            <Input
              placeholder="Poll question"
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
              className="font-semibold"
            />
            {(block.pollOptions || []).map((option: any, idx: number) => (
              <Input
                key={idx}
                placeholder={`Option ${idx + 1}`}
                value={option.text}
                onChange={(e) => {
                  const newOptions = [...(block.pollOptions || [])];
                  newOptions[idx] = { ...newOptions[idx], text: e.target.value };
                  updateBlock(block.id, { pollOptions: newOptions });
                }}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => updateBlock(block.id, { 
                pollOptions: [...(block.pollOptions || []), { text: '', votes: 0 }] 
              })}
            >
              + Add Option
            </Button>
          </div>
        );

      case 'accordion':
        return (
          <div className="space-y-3">
            {(block.items || []).map((item: any, idx: number) => (
              <div key={idx} className="space-y-2 p-3 bg-gray-50 rounded-lg">
                <Input
                  placeholder="Question/Title"
                  value={item.title}
                  onChange={(e) => {
                    const newItems = [...(block.items || [])];
                    newItems[idx] = { ...newItems[idx], title: e.target.value };
                    updateBlock(block.id, { items: newItems });
                  }}
                  className="font-semibold"
                />
                <Textarea
                  placeholder="Answer/Content"
                  value={item.desc}
                  onChange={(e) => {
                    const newItems = [...(block.items || [])];
                    newItems[idx] = { ...newItems[idx], desc: e.target.value };
                    updateBlock(block.id, { items: newItems });
                  }}
                  rows={3}
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
              + Add FAQ Item
            </Button>
          </div>
        );

      case 'divider':
        return (
          <div className="space-y-3">
            <select
              value={block.content || 'line'}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
              className="w-full h-10 px-3 rounded-md border border-gray-300"
            >
              <option value="line">Simple Line</option>
              <option value="dots">Dots</option>
              <option value="stars">Stars</option>
              <option value="space">Space Only</option>
            </select>
          </div>
        );

      case 'author-bio':
        return (
          <div className="space-y-3">
            <Input
              placeholder="Author name"
              value={block.authorName || ''}
              onChange={(e) => updateBlock(block.id, { authorName: e.target.value })}
            />
            <Input
              placeholder="Author image URL"
              value={block.authorImage || ''}
              onChange={(e) => updateBlock(block.id, { authorImage: e.target.value })}
            />
            <Textarea
              placeholder="Author bio/description..."
              value={block.authorBio || ''}
              onChange={(e) => updateBlock(block.id, { authorBio: e.target.value })}
              rows={3}
            />
          </div>
        );

      case 'related-articles':
        return (
          <div className="space-y-3">
            {(block.relatedLinks || []).map((link: any, idx: number) => (
              <div key={idx} className="grid grid-cols-12 gap-2 items-center">
                <Input
                  placeholder="Article title"
                  value={link.title}
                  onChange={(e) => {
                    const newLinks = [...(block.relatedLinks || [])];
                    newLinks[idx] = { ...newLinks[idx], title: e.target.value };
                    updateBlock(block.id, { relatedLinks: newLinks });
                  }}
                  className="col-span-5"
                />
                <Input
                  placeholder="URL"
                  value={link.url}
                  onChange={(e) => {
                    const newLinks = [...(block.relatedLinks || [])];
                    newLinks[idx] = { ...newLinks[idx], url: e.target.value };
                    updateBlock(block.id, { relatedLinks: newLinks });
                  }}
                  className="col-span-5"
                />
                <Input
                  placeholder="Image URL"
                  value={link.image || ''}
                  onChange={(e) => {
                    const newLinks = [...(block.relatedLinks || [])];
                    newLinks[idx] = { ...newLinks[idx], image: e.target.value };
                    updateBlock(block.id, { relatedLinks: newLinks });
                  }}
                  className="col-span-2"
                />
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => updateBlock(block.id, { 
                relatedLinks: [...(block.relatedLinks || []), { title: '', url: '', image: '' }] 
              })}
            >
              + Add Article
            </Button>
          </div>
        );

      case 'newsletter':
        return (
          <div className="space-y-3">
            <Input
              placeholder="Headline (e.g., 'Subscribe to our newsletter')"
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            />
            <Input
              placeholder="Description text"
              value={block.caption || ''}
              onChange={(e) => updateBlock(block.id, { caption: e.target.value })}
            />
          </div>
        );

      case 'button':
        return (
          <div className="space-y-3">
            <Input
              placeholder="Button text"
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            />
            <Input
              placeholder="Button URL"
              value={block.buttonUrl || ''}
              onChange={(e) => updateBlock(block.id, { buttonUrl: e.target.value })}
            />
            <select
              value={block.buttonStyle || 'primary'}
              onChange={(e) => updateBlock(block.id, { buttonStyle: e.target.value as 'primary' | 'secondary' | 'outline' })}
              className="w-full h-10 px-3 rounded-md border border-gray-300"
            >
              <option value="primary">Primary (Dark)</option>
              <option value="secondary">Secondary (Gray)</option>
              <option value="outline">Outline</option>
            </select>
          </div>
        );

      case 'file-download':
        return (
          <div className="space-y-3">
            <Input
              placeholder="File URL"
              value={block.fileUrl || ''}
              onChange={(e) => updateBlock(block.id, { fileUrl: e.target.value })}
            />
            <Input
              placeholder="File name (e.g., 'Annual Report 2025.pdf')"
              value={block.fileName || ''}
              onChange={(e) => updateBlock(block.id, { fileName: e.target.value })}
            />
            <Input
              placeholder="Description (optional)"
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
            />
          </div>
        );

      case 'pros-cons':
        return (
          <div className="space-y-3">
            <Input
              placeholder="Title (optional, e.g., 'Pros and Cons')"
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
              className="font-semibold"
            />
            {(block.items || []).map((item: any, idx: number) => (
              <div key={idx} className="grid grid-cols-12 gap-2 items-center">
                <select
                  value={item.num}
                  onChange={(e) => {
                    const newItems = [...(block.items || [])];
                    newItems[idx] = { ...newItems[idx], num: e.target.value };
                    updateBlock(block.id, { items: newItems });
                  }}
                  className="col-span-2 h-10 px-2 rounded-md border border-gray-300"
                >
                  <option value="pro">Pro ✓</option>
                  <option value="con">Con ✗</option>
                </select>
                <Input
                  placeholder="Point"
                  value={item.title}
                  onChange={(e) => {
                    const newItems = [...(block.items || [])];
                    newItems[idx] = { ...newItems[idx], title: e.target.value };
                    updateBlock(block.id, { items: newItems });
                  }}
                  className="col-span-10"
                />
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => updateBlock(block.id, { 
                items: [...(block.items || []), { num: 'pro', title: '', desc: '' }] 
              })}
            >
              + Add Point
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
                
                {/* Layout Toggle */}
                <div>
                  <Label>Article Layout</Label>
                  <div className="flex gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => setLayoutColumns(1)}
                      className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                        layoutColumns === 1 
                          ? 'border-blue-500 bg-blue-50 text-blue-700' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-6 border-2 border-current rounded" />
                        <span className="font-medium">1 Column</span>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setLayoutColumns(2)}
                      className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                        layoutColumns === 2 
                          ? 'border-blue-500 bg-blue-50 text-blue-700' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-5 h-6 border-2 border-current rounded" />
                          <div className="w-3 h-6 border-2 border-current rounded" />
                        </div>
                        <span className="font-medium">2 Columns</span>
                      </div>
                    </button>
                  </div>
                  {layoutColumns === 2 && (
                    <p className="text-xs text-gray-500 mt-2">
                      A sidebar will appear on the right. Add sidebar content below.
                    </p>
                  )}
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

            {/* Sidebar Blocks (only show when 2 columns selected) */}
            {layoutColumns === 2 && (
              <Card className="border-orange-200 bg-orange-50/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      <span className="text-orange-500">◧</span>
                      Sidebar Blocks
                    </CardTitle>
                    <span className="text-sm text-gray-500">{sidebarBlocks.length} blocks</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {sidebarBlocks.length === 0 ? (
                    <div className="text-center py-6 text-gray-500">
                      <p className="text-sm">No sidebar content yet</p>
                      <p className="text-xs mt-1">Add blocks using the sidebar panel →</p>
                    </div>
                  ) : (
                    sidebarBlocks.map((block, index) => (
                      <div
                        key={block.id}
                        className={`
                          border rounded-lg p-4 transition-all
                          ${activeSidebarBlockId === block.id ? 'border-orange-500 bg-orange-50 shadow-md' : 'border-gray-200 bg-white hover:border-gray-300'}
                        `}
                        onClick={() => setActiveSidebarBlockId(block.id)}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{BLOCK_TYPES.find(b => b.type === block.type)?.icon}</span>
                            <span className="font-medium text-sm">{BLOCK_TYPES.find(b => b.type === block.type)?.label}</span>
                            <span className="text-xs px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full">Sidebar #{index + 1}</span>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={(e) => { e.stopPropagation(); deleteSidebarBlock(block.id); }} 
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            🗑️
                          </Button>
                        </div>
                        {renderBlockEditor(block, true)}
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar - Add Block */}
          <div className="space-y-4">
            <Card>
              <CardHeader className="py-3">
                <CardTitle className="text-base">Add Content Block</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 max-h-[500px] overflow-y-auto">
                {/* Group by category */}
                {['Content', 'Data', 'Media', 'Social', 'Interactive', 'Special'].map(category => (
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

            {/* Add Sidebar Block (only when 2 columns) */}
            {layoutColumns === 2 && (
              <Card className="border-orange-200">
                <CardHeader className="pb-2 py-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <span className="text-orange-500">◧</span>
                    Add Sidebar Block
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-xs text-gray-500 mb-2">Common sidebar blocks:</p>
                  {[
                    { type: 'paragraph', label: 'Text', icon: '📝' },
                    { type: 'callout', label: 'Callout Box', icon: '💡' },
                    { type: 'related-articles', label: 'Related Articles', icon: '🔗' },
                    { type: 'newsletter', label: 'Newsletter', icon: '📧' },
                    { type: 'author-bio', label: 'Author Bio', icon: '👤' },
                    { type: 'image', label: 'Image', icon: '🖼️' },
                    { type: 'button', label: 'Button/CTA', icon: '🔘' },
                    { type: 'list', label: 'Quick Links', icon: '📝' },
                  ].map((blockType) => (
                    <Button
                      key={`sidebar-${blockType.type}`}
                      variant="outline"
                      className="w-full justify-start gap-2 h-9 text-sm border-orange-200 hover:bg-orange-50 hover:border-orange-300"
                      onClick={() => addSidebarBlock(blockType.type)}
                    >
                      <span>{blockType.icon}</span>
                      {blockType.label}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      {/* Link Modal */}
      {showLinkModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Insert Link</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="linkText">Link Text</Label>
                <Input
                  id="linkText"
                  placeholder="Text to display"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="linkUrl">URL</Label>
                <Input
                  id="linkUrl"
                  placeholder="https://example.com"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                />
              </div>
              <div className="flex gap-3 justify-end pt-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowLinkModal(false);
                    setLinkUrl('');
                    setLinkText('');
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={insertLink} disabled={!linkUrl}>
                  Insert Link
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}