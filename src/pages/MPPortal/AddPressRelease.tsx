import { useState, useRef, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Send, Image as ImageIcon, Calendar, Clock, Eye, X, Bold, Italic, List, Link as LinkIcon, AlignLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AddPressRelease() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const [publishMode, setPublishMode] = useState<'immediate' | 'scheduled'>('immediate');
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFeaturedImage(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    if (featuredImage) {
      URL.revokeObjectURL(featuredImage);
      setFeaturedImage(null);
    }
  };

  const handleSaveDraft = () => {
    // Save draft logic here
    navigate('/mp-portal/media/press');
  };

  const handlePublish = () => {
    // Publish logic here
    navigate('/mp-portal/media/press');
  };

  if (previewMode) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between pb-4 border-b border-outline-variant">
          <div className="flex items-center text-sm text-on-surface-variant">
            <button 
              onClick={() => setPreviewMode(false)}
              className="flex items-center hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Editor
            </button>
            <span className="mx-2">•</span>
            <span>Preview Mode</span>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleSaveDraft}
              className="px-4 py-2 border border-outline-variant text-on-surface hover:bg-surface-variant rounded-lg text-sm font-medium transition-colors"
            >
              Save as Draft
            </button>
            <button 
              onClick={handlePublish}
              className="px-4 py-2 bg-primary text-white hover:bg-royal-blue rounded-lg text-sm font-medium transition-colors flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              {publishMode === 'scheduled' ? 'Schedule' : 'Publish'}
            </button>
          </div>
        </div>

        <article className="bg-surface-white border border-outline-variant rounded-xl p-8 shadow-sm">
          {category && (
             <div className="mb-4">
               <span className="px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full text-xs font-semibold uppercase tracking-wider">
                 {category}
               </span>
             </div>
          )}
          <h1 className="text-4xl font-bold text-on-surface mb-6 font-sans">
            {title || 'Untitled Press Release'}
          </h1>
          <div className="flex items-center text-sm text-on-surface-variant mb-8">
            <span>By Office of the MP</span>
            <span className="mx-2">•</span>
            <span>{publishMode === 'scheduled' && scheduleDate ? `Scheduled for ${scheduleDate}` : 'Draft'}</span>
          </div>
          
          {featuredImage && (
            <div className="mb-8 rounded-xl overflow-hidden bg-surface-dim border border-outline-variant">
              <img src={featuredImage} alt="Featured" className="w-full h-auto max-h-[400px] object-cover" />
            </div>
          )}

          <div className="prose prose-lg max-w-none text-on-surface">
            {content ? (
               <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
            ) : (
               <p className="text-on-surface-variant italic">Add content to see it previewed here.</p>
            )}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/mp-portal/media/press" className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h2 className="text-2xl font-bold text-on-surface">Create Press Release</h2>
            <p className="text-on-surface-variant text-sm mt-1">Draft and publish a new press release or statement.</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => setPreviewMode(true)}
            className="hidden sm:flex items-center px-4 py-2 border border-outline-variant text-on-surface rounded-lg hover:bg-surface-variant transition-colors font-medium text-sm"
          >
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </button>
          <button 
            onClick={handleSaveDraft}
            className="flex items-center px-4 py-2 border border-outline-variant text-on-surface rounded-lg hover:bg-surface-variant transition-colors font-medium text-sm"
          >
            <Save className="h-4 w-4 mr-2 hidden sm:block" />
            Save Draft
          </button>
          <button 
            onClick={handlePublish}
            className="flex items-center px-4 py-2 bg-primary hover:bg-royal-blue text-white rounded-lg transition-colors font-medium text-sm"
          >
            <Send className="h-4 w-4 mr-2 hidden sm:block" />
            {publishMode === 'scheduled' ? 'Schedule' : 'Publish'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Editor Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface-white rounded-xl shadow-sm border border-outline-variant p-6 space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-on-surface mb-1">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a compelling title..."
                className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-lg font-medium bg-surface"
              />
            </div>
            
            {/* Rich Text Editor Mock */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-on-surface mb-1">Content</label>
              <div className="border border-outline-variant rounded-lg overflow-hidden bg-surface-white">
                <div className="bg-surface-dim px-3 py-2 border-b border-outline-variant flex items-center space-x-1">
                  <button className="p-1.5 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded transition-colors"><Bold className="h-4 w-4" /></button>
                  <button className="p-1.5 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded transition-colors"><Italic className="h-4 w-4" /></button>
                  <div className="w-px h-4 bg-outline-variant mx-1"></div>
                  <button className="p-1.5 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded transition-colors"><AlignLeft className="h-4 w-4" /></button>
                  <button className="p-1.5 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded transition-colors"><List className="h-4 w-4" /></button>
                  <div className="w-px h-4 bg-outline-variant mx-1"></div>
                  <button className="p-1.5 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded transition-colors"><LinkIcon className="h-4 w-4" /></button>
                  <button className="p-1.5 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded transition-colors flex items-center text-xs ml-auto">
                     <ImageIcon className="h-4 w-4 mr-1" /> Add Media
                  </button>
                </div>
                <textarea
                  id="content"
                  rows={15}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your press release here..."
                  className="w-full px-4 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-y bg-transparent"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Settings Column */}
        <div className="lg:col-span-1 space-y-6">
           {/* Featured Image */}
           <div className="bg-surface-white rounded-xl shadow-sm border border-outline-variant p-6">
            <h3 className="text-lg font-semibold text-on-surface mb-4">Featured Image</h3>
            {featuredImage ? (
              <div className="relative rounded-lg overflow-hidden border border-outline-variant group">
                <img src={featuredImage} alt="Featured" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <button 
                    onClick={removeImage}
                    className="p-2 bg-danger text-white rounded-full hover:bg-danger/80 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-outline-variant rounded-lg h-48 flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-surface-variant/50 transition-colors"
              >
                <div className="bg-surface-dim p-3 rounded-full mb-2">
                  <ImageIcon className="h-6 w-6 text-on-surface-variant" />
                </div>
                <span className="text-sm font-medium text-on-surface mb-1">Upload Image</span>
                <span className="text-xs text-on-surface-variant">Drag and drop or click</span>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
            )}
          </div>

          {/* Publishing & Categorization */}
          <div className="bg-surface-white rounded-xl shadow-sm border border-outline-variant p-6 space-y-6">
            <h3 className="text-lg font-semibold text-on-surface border-b border-outline-variant pb-2">Publish Settings</h3>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-on-surface mb-2">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface-white"
              >
                <option value="">Select a category</option>
                <option value="Policy Announcement">Policy Announcement</option>
                <option value="Constituency Update">Constituency Update</option>
                <option value="Statement">Statement</option>
                <option value="Event Notice">Event Notice</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-on-surface">Publish Time</label>
              <div className="space-y-2">
                <label className="flex items-center p-3 border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-variant transition-colors">
                  <input
                    type="radio"
                    name="publishMode"
                    value="immediate"
                    checked={publishMode === 'immediate'}
                    onChange={() => setPublishMode('immediate')}
                    className="h-4 w-4 text-primary focus:ring-primary border-outline"
                  />
                  <div className="ml-3 flex flex-col">
                    <span className="text-sm font-medium text-on-surface">Publish Immediately</span>
                  </div>
                </label>
                <label className="flex items-center p-3 border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-variant transition-colors">
                  <input
                    type="radio"
                    name="publishMode"
                    value="scheduled"
                    checked={publishMode === 'scheduled'}
                    onChange={() => setPublishMode('scheduled')}
                    className="h-4 w-4 text-primary focus:ring-primary border-outline"
                  />
                  <div className="ml-3 flex flex-col">
                    <span className="text-sm font-medium text-on-surface">Schedule for later</span>
                  </div>
                </label>
              </div>
            </div>

            {publishMode === 'scheduled' && (
              <div className="grid grid-cols-2 gap-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <div>
                  <label htmlFor="scheduleDate" className="block text-xs font-medium text-on-surface-variant mb-1 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" /> Date
                  </label>
                  <input
                    type="date"
                    id="scheduleDate"
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                    className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="scheduleTime" className="block text-xs font-medium text-on-surface-variant mb-1 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> Time
                  </label>
                  <input
                    type="time"
                    id="scheduleTime"
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                    className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
