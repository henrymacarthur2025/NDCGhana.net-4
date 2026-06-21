import { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, MapPin, Clock, Users, Building, MoreVertical } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  type: 'constituency' | 'parliament' | 'other';
  location: string;
  description?: string;
}

const initialEvents: Event[] = [
  { id: '1', title: 'Constituency Townhall', date: new Date().toISOString().split('T')[0], time: '10:00 AM', type: 'constituency', location: 'Community Center' },
  { id: '2', title: 'Parliamentary Session', date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0], time: '02:00 PM', type: 'parliament', location: 'Parliament House' },
  { id: '3', title: 'Committee Meeting', date: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString().split('T')[0], time: '09:00 AM', type: 'parliament', location: 'Room 4B, Parliament' },
  { id: '4', title: 'Local School Visit', date: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split('T')[0], time: '11:00 AM', type: 'constituency', location: 'St. Mary High School' },
  { id: '5', title: 'Youth Entrepreneurship Workshop', date: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString().split('T')[0], time: '10:00 AM', type: 'constituency', location: 'Tech Hub' },
];

export default function CalendarEvents() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const today = () => setCurrentDate(new Date());

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(e => e.date === dateStr);
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'constituency': return 'bg-success/10 text-success border-success/20';
      case 'parliament': return 'bg-info/10 text-info border-info/20';
      default: return 'bg-warning/10 text-warning border-warning/20';
    }
  };

  const renderMonthView = () => {
    const days = [];
    // Empty cells for days before the 1st
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-32 bg-surface text-outline/30 border border-outline-variant p-2"></div>);
    }
    // Actual days
    for (let d = 1; d <= daysInMonth; d++) {
      const dayEvents = getEventsForDate(d);
      const isToday = new Date().getDate() === d && new Date().getMonth() === currentDate.getMonth() && new Date().getFullYear() === currentDate.getFullYear();
      
      days.push(
        <div key={d} className={`h-32 bg-surface-white border border-outline-variant p-2 overflow-y-auto transition-colors hover:bg-surface-variant/30 ${isToday ? 'ring-2 ring-primary inset-0' : ''}`}>
          <div className="flex justify-between items-center mb-1">
            <span className={`text-sm font-medium ${isToday ? 'bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center' : 'text-on-surface'}`}>
              {d}
            </span>
          </div>
          <div className="space-y-1">
            {dayEvents.map(event => (
              <div 
                key={event.id} 
                className={`text-xs px-2 py-1 rounded border truncate cursor-pointer hover:opacity-80 transition-opacity ${getTypeStyles(event.type)}`}
                title={`${event.time} - ${event.title}`}
              >
                <span className="font-semibold">{event.time.split(' ')[0]}</span> {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="grid grid-cols-7 gap-px bg-outline-variant border border-outline-variant rounded-b-xl overflow-hidden">
        {dayNames.map(day => (
          <div key={day} className="bg-surface-dim py-2 text-center text-xs font-medium text-on-surface-variant uppercase tracking-wider">
            {day}
          </div>
        ))}
        {days}
      </div>
    );
  };

  const renderListView = (filteredEvents: Event[]) => {
    return (
      <div className="bg-surface-white border border-outline-variant rounded-b-xl shadow-sm overflow-hidden p-6 space-y-4">
         {filteredEvents.length > 0 ? (
           filteredEvents.sort((a, b) => new Date(`${a.date} ${a.time}`).getTime() - new Date(`${b.date} ${b.time}`).getTime()).map(event => (
            <div key={event.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-outline-variant rounded-lg hover:bg-surface-variant/30 transition-colors">
              <div className="sm:w-32 flex-shrink-0 flex flex-col justify-center">
                <span className="text-sm font-bold text-on-surface">{event.date}</span>
                <span className="text-sm text-on-surface-variant flex items-center"><Clock className="h-3 w-3 mr-1"/> {event.time}</span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-base font-semibold text-on-surface">{event.title}</h4>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${getTypeStyles(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                <div className="text-sm text-on-surface-variant flex items-center mt-2">
                  <MapPin className="h-4 w-4 mr-1"/> {event.location}
                </div>
              </div>
              <div className="flex items-center sm:justify-end">
                 <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors">
                    <MoreVertical className="h-4 w-4" />
                 </button>
              </div>
            </div>
           ))
         ) : (
           <div className="text-center py-12">
             <CalendarIcon className="h-12 w-12 text-outline mx-auto mb-3" />
             <h3 className="text-lg font-medium text-on-surface">No events found</h3>
             <p className="text-sm text-on-surface-variant mt-1">There are no events scheduled for this period.</p>
           </div>
         )}
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-on-surface">My Calendar & Events</h2>
          <p className="text-on-surface-variant text-sm mt-1">Manage your parliamentary schedule and constituency engagements.</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-primary hover:bg-royal-blue text-white rounded-lg shadow-sm font-medium transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Add Event
        </button>
      </div>

      <div className="bg-surface-white rounded-xl shadow-sm border border-outline-variant">
        {/* Calendar Toolbar */}
        <div className="p-4 border-b border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface-dim rounded-t-xl">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-bold text-on-surface min-w-[150px]">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <div className="flex space-x-1">
              <button onClick={prevMonth} className="p-1.5 border border-outline-variant rounded hover:bg-surface-variant text-on-surface-variant transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={today} className="px-3 py-1.5 border border-outline-variant rounded hover:bg-surface-variant text-sm font-medium text-on-surface-variant transition-colors">
                Today
              </button>
              <button onClick={nextMonth} className="p-1.5 border border-outline-variant rounded hover:bg-surface-variant text-on-surface-variant transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
             <div className="bg-surface-white border border-outline-variant rounded-lg p-1 flex">
              {(['month', 'week', 'day'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors capitalize ${
                    view === v 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-on-surface-variant hover:bg-surface-variant'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="px-6 py-3 border-b border-outline-variant bg-surface-white flex flex-wrap gap-4 text-sm text-on-surface-variant">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-success mr-2"></span> Constituency
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-info mr-2"></span> Parliamentary
          </div>
        </div>

        {/* Calendar Body */}
        {view === 'month' && renderMonthView()}
        {view === 'week' && renderListView(events.filter(e => {
            const evDate = new Date(e.date);
            const startOfWeek = new Date(currentDate);
            startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
            const endOfWeek = new Date(currentDate);
            endOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 6);
            return evDate >= startOfWeek && evDate <= endOfWeek;
        }))}
        {view === 'day' && renderListView(events.filter(e => e.date === currentDate.toISOString().split('T')[0]))}
      </div>
    </div>
  );
}
