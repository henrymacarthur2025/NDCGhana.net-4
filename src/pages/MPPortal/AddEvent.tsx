import { useState, useRef, ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Save, Send, MapPin, Calendar, Clock, Users, Paperclip, X, FileText } from 'lucide-react';

export default function AddEvent() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [eventType, setEventType] = useState('constituency');
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setAttachments((prev) => [...prev, ...newFiles]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSaveDraft = () => {
    navigate('/mp-portal/calendar');
  };

  const handlePublish = () => {
    navigate('/mp-portal/calendar');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/mp-portal/calendar" className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h2 className="text-2xl font-bold text-on-surface">Create New Event</h2>
            <p className="text-on-surface-variant text-sm mt-1">Schedule an event for your constituency or parliamentary agenda.</p>
          </div>
        </div>
        <div className="flex space-x-3">
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
            Publish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface-white rounded-xl shadow-sm border border-outline-variant p-6 space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-on-surface mb-1">Event Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a descriptive title..."
                className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-lg font-medium bg-surface"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-on-surface mb-1">Description</label>
              <textarea
                id="description"
                rows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Provide details about the event context, agenda, and objectives..."
                className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-y bg-surface"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">Event Type</label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-[42px]"
                >
                  <option value="constituency">Constituency Event</option>
                  <option value="parliament">Parliamentary Duty</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-on-surface mb-1 flex items-center">
                  <Users className="h-4 w-4 mr-1 text-on-surface-variant" /> Guests / Attendees
                </label>
                <input
                  type="text"
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder="E.g., Local Chiefs, General Public"
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface h-[42px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Logistics */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-surface-white rounded-xl shadow-sm border border-outline-variant p-6 space-y-6">
            <h3 className="font-semibold text-lg text-on-surface border-b border-outline-variant pb-2">Logistics</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-on-surface mb-1 flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-on-surface-variant" /> Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-on-surface mb-1 flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-on-surface-variant" /> Time
                </label>
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface"
                />
              </div>

              <div>
                <label htmlFor="venue" className="block text-sm font-medium text-on-surface mb-1 flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-on-surface-variant" /> Venue
                </label>
                <input
                  type="text"
                  id="venue"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  placeholder="Location or Virtual Link"
                  className="w-full px-4 py-2 border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface"
                />
              </div>
            </div>
          </div>

          <div className="bg-surface-white rounded-xl shadow-sm border border-outline-variant p-6">
             <div className="flex items-center justify-between mb-4 border-b border-outline-variant pb-2">
               <h3 className="font-semibold text-lg text-on-surface">Attachments</h3>
               <button 
                 onClick={() => fileInputRef.current?.click()}
                 className="text-primary hover:text-royal-blue text-sm font-medium flex items-center"
               >
                 <Paperclip className="h-4 w-4 mr-1" /> Add
               </button>
               <input
                 type="file"
                 multiple
                 ref={fileInputRef}
                 onChange={handleFileSelect}
                 className="hidden"
               />
             </div>
             
             {attachments.length > 0 ? (
               <ul className="space-y-2">
                  {attachments.map((file, index) => (
                    <li key={index} className="flex items-center justify-between p-2 bg-surface-variant/50 border border-outline-variant rounded-md">
                      <div className="flex items-center truncate mr-2">
                        <FileText className="h-4 w-4 text-on-surface-variant mr-2 flex-shrink-0" />
                        <span className="text-sm text-on-surface truncate">{file.name}</span>
                      </div>
                      <button 
                        onClick={() => removeAttachment(index)}
                        className="text-on-surface-variant hover:text-danger p-1 rounded-full transition-colors flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
               </ul>
             ) : (
               <div className="text-center py-6 border-2 border-dashed border-outline-variant rounded-lg bg-surface-variant/30">
                 <Paperclip className="h-6 w-6 text-outline mx-auto mb-2" />
                 <p className="text-sm text-on-surface-variant">No attachments added</p>
                 <p className="text-xs text-on-surface-variant mt-1">E.g., Agendas, Briefings</p>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
