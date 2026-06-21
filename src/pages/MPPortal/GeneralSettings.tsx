import { useState } from 'react';
import { Save, User, Globe, Languages, Clock, Bell, Shield } from 'lucide-react';

import { SettingsNav } from '../../components/SettingsNav';

export default function GeneralSettings() {
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [searchable, setSearchable] = useState(true);
  
  const [region, setRegion] = useState('Greater Accra');
  const [district, setDistrict] = useState('Accra Metropolitan');
  
  const [language, setLanguage] = useState('en-US');
  const [timezone, setTimezone] = useState('Africa/Accra');

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      // In a real app, show a toast notification here
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
          <h3 className="text-xl font-bold text-on-surface">General</h3>
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
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      <div className="space-y-6">
        {/* Profile Preferences */}
        <section className="bg-surface-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
          <div className="border-b border-outline-variant bg-surface-dim px-6 py-4 flex items-center">
            <User className="h-5 w-5 text-on-surface-variant mr-3" />
            <h3 className="text-lg font-semibold text-on-surface">Profile Preferences</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">Profile Visibility</label>
                <select 
                  value={profileVisibility}
                  onChange={(e) => setProfileVisibility(e.target.value)}
                  className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="public">Public (Visible to everyone)</option>
                  <option value="constituents">Constituents Only</option>
                  <option value="party">Party Members Only</option>
                  <option value="private">Private</option>
                </select>
                <p className="text-xs text-on-surface-variant mt-2">
                  Controls who can view your full MP profile on the platform.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">Search Engine Indexing</label>
                <div className="flex items-center h-[42px]">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={searchable}
                      onChange={(e) => setSearchable(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    <span className="ml-3 text-sm font-medium text-on-surface">Allow search engines to index profile</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Preferences */}
        <section className="bg-surface-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
          <div className="border-b border-outline-variant bg-surface-dim px-6 py-4 flex items-center">
            <Globe className="h-5 w-5 text-on-surface-variant mr-3" />
            <h3 className="text-lg font-semibold text-on-surface">Regional Preferences</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">Default Region</label>
                <select 
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="Ashanti">Ashanti</option>
                  <option value="Greater Accra">Greater Accra</option>
                  <option value="Central">Central</option>
                  <option value="Eastern">Eastern</option>
                  <option value="Western">Western</option>
                  <option value="Northern">Northern</option>
                  <option value="Volta">Volta</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">Default District/Constituency</label>
                <input 
                  type="text" 
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Enter constituency name"
                />
              </div>
            </div>
            <p className="text-xs text-on-surface-variant">
              These settings adjust the default dashboards and reports to focus on your specific parliamentary area.
            </p>
          </div>
        </section>

        {/* Localization Settings */}
        <section className="bg-surface-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
          <div className="border-b border-outline-variant bg-surface-dim px-6 py-4 flex items-center">
            <Languages className="h-5 w-5 text-on-surface-variant mr-3" />
            <h3 className="text-lg font-semibold text-on-surface">Language & Region</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-on-surface mb-2 flex items-center">
                  <Languages className="h-4 w-4 mr-2 text-on-surface-variant" />
                  Interface Language
                </label>
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="en-US">English (US)</option>
                  <option value="en-GB">English (UK)</option>
                  <option value="fr-FR">French (Français)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-on-surface mb-2 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-on-surface-variant" />
                  Timezone
                </label>
                <select 
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="Africa/Accra">Africa/Accra (GMT)</option>
                  <option value="Europe/London">Europe/London (GMT/BST)</option>
                  <option value="America/New_York">America/New_York (EST/EDT)</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
