import React, { useState } from 'react';
import { Bell, Check, Trash2, Filter, MessageSquare, Target, Calendar, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'suggestion' | 'project' | 'event' | 'system';
  isRead: boolean;
  timestamp: string;
  link?: string;
}

const initialNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Suggestion Received',
    message: 'Kwame Mensah submitted a new suggestion regarding "Community Water Project".',
    type: 'suggestion',
    isRead: false,
    timestamp: '10 minutes ago',
    link: '/mp-portal/suggestions/1',
  },
  {
    id: '2',
    title: 'Project Milestone Reached',
    message: 'The "Local Clinic Renovation" project has reached 50% completion.',
    type: 'project',
    isRead: false,
    timestamp: '2 hours ago',
    link: '/mp-portal/projects/2',
  },
  {
    id: '3',
    title: 'Upcoming Event Reminder',
    message: 'Constituency Townhall meeting is scheduled for tomorrow at 10:00 AM.',
    type: 'event',
    isRead: true,
    timestamp: '1 day ago',
    link: '/mp-portal/calendar',
  },
  {
    id: '4',
    title: 'System Maintenance',
    message: 'The portal will be down for scheduled maintenance on Sunday from 2 AM to 4 AM.',
    type: 'system',
    isRead: true,
    timestamp: '2 days ago',
  },
  {
    id: '5',
    title: 'Suggestion Comment',
    message: 'A new comment was added to the "Road Safety" suggestion.',
    type: 'suggestion',
    isRead: false,
    timestamp: '3 days ago',
    link: '/mp-portal/suggestions/5',
  },
];

export default function NotificationCentre() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [filter, setFilter] = useState<'all' | 'unread' | 'suggestion' | 'project' | 'event' | 'system'>('all');

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !n.isRead;
    return n.type === filter;
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const deleteNotification = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'suggestion': return <MessageSquare className="h-5 w-5 text-warning" />;
      case 'project': return <Target className="h-5 w-5 text-info" />;
      case 'event': return <Calendar className="h-5 w-5 text-success" />;
      case 'system': return <AlertCircle className="h-5 w-5 text-danger" />;
      default: return <Bell className="h-5 w-5 text-outline" />;
    }
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'suggestion': return 'bg-warning/10';
      case 'project': return 'bg-info/10';
      case 'event': return 'bg-success/10';
      case 'system': return 'bg-danger/10';
      default: return 'bg-surface-variant';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center">
          <div className="relative mr-3">
            <Bell className="h-8 w-8 text-on-surface" />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 h-4 w-4 bg-danger text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-surface">
                {unreadCount}
              </span>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-on-surface">Notification Centre</h2>
            <p className="text-on-surface-variant text-sm mt-1">Stay updated on recent activities and alerts.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
            className={`flex items-center px-4 py-2 bg-surface text-on-surface border border-outline-variant rounded-lg transition-colors text-sm font-medium ${unreadCount === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-surface-variant'}`}
          >
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Mark all read
          </button>
          <button 
             onClick={clearAll}
             disabled={notifications.length === 0}
             className={`flex items-center p-2 border border-outline-variant rounded-lg text-on-surface-variant transition-colors ${notifications.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:text-danger hover:bg-surface-variant'}`}
             title="Clear all"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="bg-surface-white rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col md:flex-row">
        
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-outline-variant p-4 space-y-1">
          <h3 className="font-semibold text-sm text-on-surface-variant uppercase tracking-wider mb-3 px-3 flex items-center">
            <Filter className="h-4 w-4 mr-2" /> Filters
          </h3>
          {[
            { id: 'all', label: 'All Notifications' },
            { id: 'unread', label: 'Unread', count: unreadCount },
            { id: 'suggestion', label: 'Suggestions', icon: <MessageSquare className="h-4 w-4 text-warning mr-2" /> },
            { id: 'project', label: 'Projects', icon: <Target className="h-4 w-4 text-info mr-2" /> },
            { id: 'event', label: 'Events', icon: <Calendar className="h-4 w-4 text-success mr-2" /> },
            { id: 'system', label: 'System Alerts', icon: <AlertCircle className="h-4 w-4 text-danger mr-2" /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === item.id 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-on-surface-variant hover:bg-surface-variant hover:text-on-surface'
              }`}
            >
              <div className="flex items-center">
                {item.icon}
                {item.label}
              </div>
              {item.count !== undefined && item.count > 0 && (
                <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="flex-1 max-h-[600px] overflow-y-auto">
          {filteredNotifications.length > 0 ? (
            <div className="divide-y divide-outline-variant">
              {filteredNotifications.map((notification) => {
                const isUnread = !notification.isRead;
                
                const content = (
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full mr-4 flex-shrink-0 ${getTypeStyles(notification.type)}`}>
                      {getTypeIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0 pr-4">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className={`text-base truncate ${isUnread ? 'font-bold text-on-surface' : 'font-medium text-on-surface-variant'}`}>
                          {notification.title}
                        </h4>
                        <span className="text-xs text-on-surface-variant whitespace-nowrap flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {notification.timestamp}
                        </span>
                      </div>
                      <p className={`text-sm line-clamp-2 ${isUnread ? 'text-on-surface-variant' : 'text-outline'}`}>
                        {notification.message}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <div 
                    key={notification.id}
                    className={`relative group p-4 sm:p-6 transition-all hover:bg-surface-variant/30 ${isUnread ? 'bg-primary/[0.02]' : 'bg-surface-white'}`}
                  >
                    {isUnread && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"></div>
                    )}
                    
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 cursor-pointer" onClick={() => markAsRead(notification.id)}>
                        {notification.link ? (
                          <Link to={notification.link} className="block w-full">
                            {content}
                          </Link>
                        ) : (
                          <div className="block w-full">
                            {content}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {isUnread && (
                          <button 
                            onClick={() => markAsRead(notification.id)}
                            className="p-2 text-on-surface-variant hover:text-primary bg-surface border border-outline-variant rounded-lg transition-colors"
                            title="Mark as read"
                          >
                            <Check className="h-4 w-4" />
                          </button>
                        )}
                        <button 
                          onClick={(e) => deleteNotification(notification.id, e)}
                          className="p-2 text-on-surface-variant hover:text-danger bg-surface border border-outline-variant rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-12 text-center">
              <div className="bg-surface-dim p-4 rounded-full mb-4">
                <Bell className="h-10 w-10 text-outline" />
              </div>
              <h3 className="text-lg font-medium text-on-surface mb-2">Caught up!</h3>
              <p className="text-sm text-on-surface-variant max-w-sm">
                You have no notifications in this category. Check back later for updates.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
