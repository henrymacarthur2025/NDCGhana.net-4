import { useState } from 'react';
import { Search, Plus, Filter, FileText, MoreVertical, Edit2, Trash2, Eye, Calendar, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PressRelease {
  id: string;
  title: string;
  status: 'published' | 'draft' | 'scheduled';
  date: string;
  readTime: string;
  views?: number;
}

const initialReleases: PressRelease[] = [
  {
    id: 'PR-1029',
    title: 'Statement on the New Infrastructure Bill and its Impact on our Constituency',
    status: 'published',
    date: 'Oct 24, 2024',
    readTime: '3 min read',
    views: 1250,
  },
  {
    id: 'PR-1030',
    title: 'Announcing the Annual Youth Empowerment Summit 2024',
    status: 'scheduled',
    date: 'Nov 15, 2024',
    readTime: '2 min read',
  },
  {
    id: 'PR-1031',
    title: 'Response to the Budget Statement Regarding Education Funding',
    status: 'published',
    date: 'Oct 10, 2024',
    readTime: '4 min read',
    views: 3400,
  },
  {
    id: 'PR-1032',
    title: 'Draft: Updates on the Local Hospital Renovation Project',
    status: 'draft',
    date: 'Last edited 2 hours ago',
    readTime: '-',
  },
  {
    id: 'PR-1033',
    title: 'Condolence Message to the Family of the Late Paramount Chief',
    status: 'published',
    date: 'Sep 28, 2024',
    readTime: '1 min read',
    views: 890,
  },
];

export default function PressReleases() {
  const [activeTab, setActiveTab] = useState<'all' | 'published' | 'draft' | 'scheduled'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReleases = initialReleases.filter((pr) => {
    const matchesSearch = pr.title.toLowerCase().includes(searchTerm.toLowerCase()) || pr.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || pr.status === activeTab;
    return matchesSearch && matchesTab;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'draft':
        return <FileText className="h-4 w-4 text-outline" />;
      case 'scheduled':
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">Published</span>;
      case 'draft':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-variant text-on-surface-variant">Draft</span>;
      case 'scheduled':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/10 text-warning">Scheduled</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-on-surface">Press Releases</h2>
          <p className="text-on-surface-variant text-sm mt-1">
            Manage and publish your official statements and press releases.
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-primary hover:bg-royal-blue text-white rounded-lg shadow-sm font-medium transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          New Release
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-surface-white p-4 rounded-xl shadow-sm border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Tabs */}
        <div className="flex space-x-1 border-b border-outline-variant/30 pb-0 md:border-b-0 md:pb-0">
          {[
            { id: 'all', label: 'All Releases' },
            { id: 'published', label: 'Published' },
            { id: 'draft', label: 'Drafts' },
            { id: 'scheduled', label: 'Scheduled' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg md:rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary/10 text-primary border-b-2 border-primary md:border-none'
                  : 'text-on-surface-variant hover:bg-surface-variant hover:text-on-surface'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-outline" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border border-outline-variant rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-surface w-full md:w-64 transition-all"
            />
          </div>
          <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors">
            <Filter className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-surface-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-outline-variant">
            <thead className="bg-surface-dim">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-on-surface-variant uppercase tracking-wider">
                  Details
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-on-surface-variant uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-on-surface-variant uppercase tracking-wider hidden md:table-cell">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-on-surface-variant uppercase tracking-wider hidden lg:table-cell">
                  Metrics
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-outline-variant/50">
              {filteredReleases.length > 0 ? (
                filteredReleases.map((release) => (
                  <tr key={release.id} className="hover:bg-surface-variant/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          {getStatusIcon(release.status)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-on-surface line-clamp-1">
                            {release.title}
                          </div>
                          <div className="text-xs text-on-surface-variant mt-1">
                            ID: {release.id} • {release.readTime}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(release.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                      <span className="text-sm text-on-surface-variant flex items-center">
                        {release.status === 'scheduled' ? (
                          <Calendar className="h-4 w-4 mr-1 text-outline" />
                        ) : null}
                        {release.date}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                      {release.status === 'published' && release.views !== undefined ? (
                        <span className="text-sm text-on-surface-variant font-medium">
                          {release.views.toLocaleString()} views
                        </span>
                      ) : (
                        <span className="text-sm text-on-surface-variant italic">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-3">
                        <button className="text-on-surface-variant hover:text-primary transition-colors" title="View">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-on-surface-variant hover:text-info transition-colors" title="Edit">
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <FileText className="mx-auto h-12 w-12 text-outline/50 mb-3" />
                    <h3 className="text-sm font-medium text-on-surface">No press releases found</h3>
                    <p className="text-sm text-on-surface-variant mt-1">
                      {searchTerm ? 'Try adjusting your search or filters.' : 'Get started by creating a new press release.'}
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Dummy */}
        <div className="bg-surface-dim px-4 py-3 border-t border-outline-variant sm:px-6 flex items-center justify-between">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-on-surface-variant">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredReleases.length}</span> of <span className="font-medium">{filteredReleases.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-outline-variant bg-surface-white text-sm font-medium text-on-surface-variant hover:bg-surface-variant">
                  Previous
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-outline-variant bg-surface-white text-sm font-medium text-on-surface-variant hover:bg-surface-variant">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
