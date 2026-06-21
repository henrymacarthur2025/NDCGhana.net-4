import { useState } from 'react';
import { Save, Bell, Mail, Smartphone, BellRing, Lightbulb, Target, Calendar } from 'lucide-react';
import { SettingsNav } from '../../components/SettingsNav';

export default function NotificationPreferences() {
  // Channel Toggles
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(true);

  // Specific Alert Preferences
  const [suggestionAlerts, setSuggestionAlerts] = useState(true);
  const [projectAlerts, setProjectAlerts] = useState(true);
  const [eventAlerts, setEventAlerts] = useState(true);
  const [newsletterAlerts, setNewsletterAlerts] = useState(false);

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 800);
  };

  const Toggle = ({ checked, onChange, disabled = false }: { checked: boolean, onChange: (c: boolean) => void, disabled?: boolean }) => (
    <label className={`relative inline-flex items-center ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
      <input 
        type="checkbox" 
        className="sr-only peer" 
        checked={checked}
        onChange={(e) => !disabled && onChange(e.target.checked)}
        disabled={disabled}
      />
      <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
    </label>
  );

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
          <h3 className="text-xl font-bold text-on-surface">Notification Preferences</h3>
          <p className="text-on-surface-variant text-sm mt-1">Control how and when you receive alerts and updates.</p>
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
          {isSaving ? 'Saving...' : 'Save Preferences'}
        </button>
      </div>

      <div className="space-y-6">
        {/* Delivery Channels */}
        <section className="bg-surface-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
          <div className="border-b border-outline-variant bg-surface-dim px-6 py-4 flex items-center">
            <Bell className="h-5 w-5 text-on-surface-variant mr-3" />
            <h3 className="text-lg font-semibold text-on-surface">Delivery Channels</h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-on-surface-variant mb-6">
              Choose where you want to receive notifications. Turning off a channel disables all alerts for that method.
            </p>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="p-2 bg-surface-dim rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-on-surface-variant" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-on-surface">Email Notifications</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Receive updates directly to your registered email address.</p>
                  </div>
                </div>
                <Toggle checked={emailEnabled} onChange={setEmailEnabled} />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="p-2 bg-surface-dim rounded-lg mr-4">
                    <Smartphone className="h-5 w-5 text-on-surface-variant" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-on-surface">SMS Notifications</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Get text messages for critical alerts on your mobile phone.</p>
                  </div>
                </div>
                <Toggle checked={smsEnabled} onChange={setSmsEnabled} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="p-2 bg-surface-dim rounded-lg mr-4">
                    <BellRing className="h-5 w-5 text-on-surface-variant" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-on-surface">Push Notifications</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Receive banner alerts while active on the portal.</p>
                  </div>
                </div>
                <Toggle checked={pushEnabled} onChange={setPushEnabled} />
              </div>
            </div>
          </div>
        </section>

        {/* Alert Types */}
        <section className="bg-surface-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
          <div className="border-b border-outline-variant bg-surface-dim px-6 py-4 flex items-center">
            <BellRing className="h-5 w-5 text-on-surface-variant mr-3" />
            <h3 className="text-lg font-semibold text-on-surface">Alert Types</h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-on-surface-variant mb-6">
              Select which types of activity should trigger a notification.
            </p>

            <div className="grid gap-6">
              <div className="flex items-center justify-between p-4 border border-outline-variant rounded-lg hover:bg-surface-variant/30 transition-colors">
                <div className="flex items-start">
                  <div className="p-2 bg-warning/10 rounded-lg mr-4">
                    <Lightbulb className="h-5 w-5 text-warning" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-on-surface">Suggestion Alerts</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Notify me when a new suggestion is submitted by constituents.</p>
                  </div>
                </div>
                <Toggle checked={suggestionAlerts} onChange={setSuggestionAlerts} />
              </div>

              <div className="flex items-center justify-between p-4 border border-outline-variant rounded-lg hover:bg-surface-variant/30 transition-colors">
                <div className="flex items-start">
                  <div className="p-2 bg-info/10 rounded-lg mr-4">
                    <Target className="h-5 w-5 text-info" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-on-surface">Project Alerts</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Notify me of timeline changes, milestone completions, or comments on projects.</p>
                  </div>
                </div>
                <Toggle checked={projectAlerts} onChange={setProjectAlerts} />
              </div>

              <div className="flex items-center justify-between p-4 border border-outline-variant rounded-lg hover:bg-surface-variant/30 transition-colors">
                <div className="flex items-start">
                  <div className="p-2 bg-success/10 rounded-lg mr-4">
                    <Calendar className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-on-surface">Event Alerts</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Reminders for upcoming constituency and parliamentary events on my calendar.</p>
                  </div>
                </div>
                <Toggle checked={eventAlerts} onChange={setEventAlerts} />
              </div>
              
              <div className="flex items-center justify-between p-4 border border-outline-variant rounded-lg hover:bg-surface-variant/30 transition-colors">
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-on-surface">Platform Newsletter</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Receive weekly summaries and platform update news.</p>
                  </div>
                </div>
                <Toggle checked={newsletterAlerts} onChange={setNewsletterAlerts} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
