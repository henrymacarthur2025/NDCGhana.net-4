import { useState, useRef, ChangeEvent, DragEvent } from 'react';
import { Upload, X, Image as ImageIcon, File as FileIcon, CheckCircle, Video, Music } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UploadFile {
  id: string;
  file: File;
  previewUrl: string;
  progress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  title: string;
  category: string;
  tags: string[];
}

export default function UploadMedia() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [globalCategory, setGlobalCategory] = useState('');
  const [globalTags, setGlobalTags] = useState('');

  const categories = [
    'Press Release',
    'Event Action',
    'Speech/Address',
    'Parliamentary Session',
    'Community Outreach',
    'Campaign Material',
  ];

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const createUploadFiles = (newFiles: FileList | File[]) => {
    const defaultTagList = globalTags
      ? globalTags.split(',').map((t) => t.trim()).filter(Boolean)
      : [];

    const newUploadFiles: UploadFile[] = Array.from(newFiles).map((file) => ({
      id: Math.random().toString(36).substring(7),
      file,
      previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : '',
      progress: 0,
      status: 'pending',
      title: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
      category: globalCategory,
      tags: [...defaultTagList],
    }));

    setFiles((prev) => [...prev, ...newUploadFiles]);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      createUploadFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      createUploadFiles(e.target.files);
    }
  };

  const removeFile = (id: string) => {
    setFiles((prev) => {
      const fileToRemove = prev.find(f => f.id === id);
      if (fileToRemove?.previewUrl) {
        URL.revokeObjectURL(fileToRemove.previewUrl);
      }
      return prev.filter(f => f.id !== id);
    });
  };

  const updateFileMeta = (id: string, field: keyof UploadFile, value: any) => {
    setFiles((prev) =>
      prev.map((f) => (f.id === id ? { ...f, [field]: value } : f))
    );
  };

  const simulateUpload = () => {
    setFiles((prev) => prev.map(f => ({ ...f, status: 'uploading' })));
    
    // Simulate progress
    const intervals = files.map((file, index) => {
      return setInterval(() => {
        setFiles((prev) => {
          const currentFile = prev.find(f => f.id === file.id);
          if (!currentFile || currentFile.status !== 'uploading') return prev;
          
          let newProgress = currentFile.progress + Math.random() * 20;
          if (newProgress >= 100) {
            newProgress = 100;
            setTimeout(() => {
              setFiles((p) => p.map(f => f.id === file.id ? { ...f, status: 'completed' } : f));
            }, 300);
          }
          
          return prev.map(f => f.id === file.id ? { ...f, progress: newProgress } : f);
        });
      }, 500 + index * 200); // Stagger upload simulation
    });
    
    // After everything completes
    setTimeout(() => {
      intervals.forEach(clearInterval);
      navigate('/mp-portal/media');
    }, 4000);
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <ImageIcon className="h-8 w-8 text-info" />;
    if (type.startsWith('video/')) return <Video className="h-8 w-8 text-danger" />;
    if (type.startsWith('audio/')) return <Music className="h-8 w-8 text-warning" />;
    return <FileIcon className="h-8 w-8 text-outline" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-on-surface">Upload Media</h2>
          <p className="text-on-surface-variant flex items-center pr-4">
            Add photos, videos, and documents to your media library
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Upload Area */}
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors duration-200 ${
              isDragging 
                ? 'border-primary bg-primary/5' 
                : 'border-outline-variant hover:border-primary hover:bg-surface-variant/50'
            }`}
          >
            <input 
              type="file" 
              multiple 
              className="hidden" 
              ref={fileInputRef}
              onChange={handleFileInput}
              accept="image/*,video/*,audio/*,.pdf,.doc,.docx"
            />
            <div className="mx-auto bg-surface-variant rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 text-on-surface-variant">
              <Upload className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-on-surface mb-2">Click to select or drag & drop files here</h3>
            <p className="text-sm text-on-surface-variant max-w-sm mx-auto">
              Support for Images (JPG, PNG), Videos (MP4, MOV), Audio (MP3), and Documents (PDF) up to 50MB per file.
            </p>
          </div>

          {/* Upload Queue / Previews */}
          {files.length > 0 && (
            <div className="bg-surface-white rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
              <div className="bg-surface-dim px-6 py-4 border-b border-outline-variant/30 flex justify-between items-center">
                <h3 className="font-semibold text-on-surface">Files ready to upload ({files.length})</h3>
                <button 
                  onClick={() => setFiles([])}
                  className="text-sm text-on-surface-variant hover:text-danger flex items-center"
                >
                  <X className="h-4 w-4 mr-1" /> Clear All
                </button>
              </div>
              <div className="divide-y divide-outline-variant/30">
                {files.map((file) => (
                  <div key={file.id} className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Preview Thumbnail */}
                      <div className="flex-shrink-0 w-24 h-24 bg-surface-dim rounded-lg border border-outline-variant overflow-hidden flex items-center justify-center relative">
                        {file.previewUrl ? (
                          <img src={file.previewUrl} alt={file.title} className="w-full h-full object-cover" />
                        ) : (
                          getFileIcon(file.file.type)
                        )}
                        {file.status === 'completed' && (
                          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                            <CheckCircle className="h-8 w-8 text-success" />
                          </div>
                        )}
                      </div>

                      {/* File Details & Metadata Editing */}
                      <div className="flex-grow space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="truncate max-w-sm">
                            <input
                              type="text"
                              value={file.title}
                              onChange={(e) => updateFileMeta(file.id, 'title', e.target.value)}
                              className="font-medium text-on-surface bg-transparent border-b border-transparent hover:border-outline focus:border-primary focus:ring-0 px-0 py-0 w-full truncate"
                              placeholder="Media Title"
                              disabled={file.status !== 'pending'}
                            />
                            <p className="text-xs text-on-surface-variant mt-1">
                              {file.file.name} ({(file.file.size / (1024 * 1024)).toFixed(2)} MB)
                            </p>
                          </div>
                          {file.status === 'pending' && (
                            <button 
                              onClick={() => removeFile(file.id)}
                              className="text-on-surface-variant hover:text-danger transition-colors p-1"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          )}
                        </div>

                        {/* Metadata Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <select
                              value={file.category}
                              onChange={(e) => updateFileMeta(file.id, 'category', e.target.value)}
                              className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm bg-surface-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-10"
                              disabled={file.status !== 'pending'}
                            >
                              <option value="">Select Category</option>
                              {categories.map((c) => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <input
                              type="text"
                              value={file.tags.join(', ')}
                              onChange={(e) => {
                                const tagsArray = e.target.value.split(',').map(t => t.trim());
                                updateFileMeta(file.id, 'tags', tagsArray);
                              }}
                              placeholder="Tags (comma separated)"
                              className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-10"
                              disabled={file.status !== 'pending'}
                            />
                          </div>
                        </div>

                        {/* Progress Bar (Visible during/after upload) */}
                        {file.status !== 'pending' && (
                          <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all duration-300 ${file.status === 'completed' ? 'bg-success' : 'bg-primary'}`}
                              style={{ width: `${file.progress}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Global Metadata Column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-surface-white rounded-xl shadow-sm border border-outline-variant/30 p-6">
            <h3 className="font-semibold text-lg text-on-surface mb-4 border-b border-outline-variant/30 pb-2">Global Defaults</h3>
            <p className="text-sm text-on-surface-variant mb-4">
              Apply these set properties to all newly selected files.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">
                  Default Category
                </label>
                <select
                  value={globalCategory}
                  onChange={(e) => setGlobalCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-surface-white border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="">Select Category</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">
                  Default Tags
                </label>
                <input
                  type="text"
                  value={globalTags}
                  onChange={(e) => setGlobalTags(e.target.value)}
                  placeholder="e.g. Rally, 2024, Campaign"
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="pt-4 mt-4 border-t border-outline-variant/30 text-xs text-on-surface-variant">
                Tip: You can still individually edit each file's metadata before uploading.
              </div>
            </div>
          </div>

          {/* Action Card */}
          <div className="bg-surface-white rounded-xl shadow-sm border border-outline-variant/30 p-6 flex flex-col items-center">
             <button
               onClick={simulateUpload}
               disabled={files.length === 0 || files.some(f => f.status !== 'pending')}
               className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm font-medium text-white transition-colors
                 ${files.length > 0 && files.every(f => f.status === 'pending') 
                   ? 'bg-primary hover:bg-royal-blue' 
                   : 'bg-outline-variant cursor-not-allowed'
                 }
               `}
             >
               {files.some(f => f.status === 'uploading') ? (
                 <span className="flex items-center">
                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                   Uploading...
                 </span>
               ) : (
                 `Upload ${files.length} File${files.length !== 1 ? 's' : ''}`
               )}
             </button>
             <button
                onClick={() => navigate('/mp-portal/media')}
                className="mt-3 text-sm text-on-surface-variant hover:text-on-surface"
             >
                Cancel
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
