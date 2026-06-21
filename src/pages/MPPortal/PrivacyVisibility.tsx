import { useState } from 'react';
import { Save, Shield, Eye, FileText, BarChart3, Phone } from 'lucide-react';
import { SettingsNav } from '../../components/SettingsNav';

export default function PrivacyVisibility() {
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [contactVisibility, setContactVisibility] = useState('constituents');
  const [projectVisibility, setProjectVisibility] = useState('public');
  const [analyticsVisibility, setAnalyticsVisibility] = useState('private');

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant pb-4">
        <div>
          <h2 className="text-2xl font-bold text-on-surface">Settings</h2>
          <p className="text-on-surface-variant text-sm mt-1">Manage your platform preferences and security.</p>
        </div>
      </div>

      <SettingsNav />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-on-surface">Privacy & Visibility</h3>
          <p className="text-on-surface-variant text-sm mt-1">Control who can see your information and Activity on the platform.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="inline-flex items-center justify-center px-4 py-2 bg-primary hover:bg-royal-blue text-white rounded-lg shadow-sm font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSaving ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          ) : (
            <Save className="h-5 w-5 mr-2" />
          )}
          {isSaving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>

      <div className="bg-surface-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
        <div className="border-b border-outline-variant bg-surface-dim px-6 py-4 flex items-center">
          <Shield className="h-5 w-5 text-on-surface-variant mr-3" />
          <h3 className="text-lg font-semibold text-on-surface">Visibility Controls</h3>
        </div>
        
        <div className="p-6 divide-y divide-outline-variant">
          {/* Public Profile Visibility */}
          <div className="py-6 first:pt-0 last:pb-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="flex items-center mb-2">
                  <Eye className="h-5 w-5 text-on-surface-variant mr-2" />
                  <h4 className="text-sm font-semibold text-on-surface">Profile Visibility</h4>
                </div>
                <p className="text-xs text-on-surface-variant">
                  Determine who can see your main MP profile page, including your biography and parliamentary roles.
                </p>
              </div>
              <div className="md:col-span-2">
                <select 
                  value={profileVisibility}
                  onChange={(e) => setProfileVisibility(e.target.value)}
                  className="w-full max-w-sm px-4 py-2 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="public">Public (Everyone)</option>
                  <option value="constituents">Constituents Only</option>
                  <option value="party">Party Members Only</option>
                  <option value="private">Private (Only Me)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Visibility */}
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="flex items-center mb-2">
                  <Phone className="h-5 w-5 text-on-surface-variant mr-2" />
                  <h4 className="text-sm font-semibold text-on-surface">Contact Information</h4>
                </div>
                <p className="text-xs text-on-surface-variant">
                  Control who can view your direct contact details, such as constituency office phone numbers and emails.
                </p>
              </div>
              <div className="md:col-span-2">
                <select 
                  value={contactVisibility}
                  onChange={(e) => setContactVisibility(e.target.value)}
                  className="w-full max-w-sm px-4 py-2 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="public">Public (Everyone)</option>
                  <option value="constituents">Constituents Only</option>
                  <option value="party">Party Members Only</option>
                  <option value="private">Private (Only Me)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Project Visibility */}
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="flex items-center mb-2">
                  <FileText className="h-5 w-5 text-on-surface-variant mr-2" />
                  <h4 className="text-sm font-semibold text-on-surface">Project Visibility</h4>
                </div>
                <p className="text-xs text-on-surface-variant">
                  Set the default visibility for your constituency projects. You can override this on individual projects.
                </p>
              </div>
              <div className="md:col-span-2">
                <select 
                  value={projectVisibility}
                  onChange={(e) => setProjectVisibility(e.target.value)}
                  className="w-full max-w-sm px-4 py-2 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="public">Public (Everyone)</option>
                  <option value="constituents">Constituents Only</option>
                  <option value="party">Party Members Only</option>
                  <option value="private">Private (Only Me)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Analytics Visibility */}
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="flex items-center mb-2">
                  <BarChart3 className="h-5 w-5 text-on-surface-variant mr-2" />
                  <h4 className="text-sm font-semibold text-on-surface">Analytics Visibility</h4>
                </div>
                <p className="text-xs text-on-surface-variant">
                  Choose who can see your performance metrics, such as project completion rates and engagement scores.
                </p>
              </div>
              <div className="md:col-span-2">
                <select 
                  value={analyticsVisibility}
                  onChange={(e) => setAnalyticsVisibility(e.target.value)}
                  className="w-full max-w-sm px-4 py-2 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="public">Public (Everyone)</option>
                  <option value="constituents">Constituents Only</option>
                  <option value="party">Party Members Only</option>
                  <option value="private">Private (Only Me)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-surface-dim p-6 border-t border-outline-variant">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-on-surface">About your privacy</h4>
              <p className="text-xs text-on-surface-variant mt-1 max-w-2xl">
                The platform is designed to foster transparency. We recommend keeping most information public to build trust with constituents. However, you maintain full control over sensitive data and internal communications. Adjusting these settings takes effect immediately across the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
