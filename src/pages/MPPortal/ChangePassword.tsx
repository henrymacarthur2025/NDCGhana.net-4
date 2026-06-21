import { useState, useMemo } from 'react';
import { Save, Lock, Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react';

import { SettingsNav } from '../../components/SettingsNav';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [isSaving, setIsSaving] = useState(false);

  // Requirements
  const requirements = [
    { id: 'length', text: 'At least 8 characters long', regex: /.{8,}/ },
    { id: 'uppercase', text: 'Contains at least one uppercase letter', regex: /[A-Z]/ },
    { id: 'lowercase', text: 'Contains at least one lowercase letter', regex: /[a-z]/ },
    { id: 'number', text: 'Contains at least one number', regex: /[0-9]/ },
    { id: 'special', text: 'Contains at least one special character (@$!%*?&)', regex: /[@$!%*?&]/ },
  ];

  const strength = useMemo(() => {
    if (!newPassword) return 0;
    
    let score = 0;
    requirements.forEach(req => {
      if (req.regex.test(newPassword)) score++;
    });
    
    return score;
  }, [newPassword]);

  const passwordsMatch = newPassword !== '' && newPassword === confirmPassword;
  const isFormValid = currentPassword !== '' && strength === requirements.length && passwordsMatch;

  const handleSave = () => {
    if (!isFormValid) return;
    
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      // In a real app, show a toast notification here
    }, 1000);
  };

  const getStrengthBarColor = (index: number) => {
    if (strength === 0) return 'bg-outline-variant';
    if (strength <= 2) return index < strength ? 'bg-danger' : 'bg-outline-variant';
    if (strength <= 4) return index < strength ? 'bg-warning' : 'bg-outline-variant';
    return 'bg-success';
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant pb-4">
        <div>
          <h2 className="text-2xl font-bold text-on-surface">Settings</h2>
          <p className="text-on-surface-variant text-sm mt-1">Manage your platform preferences and security.</p>
        </div>
      </div>

      <SettingsNav />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-on-surface">Change Password</h3>
          <p className="text-on-surface-variant text-sm mt-1">Ensure your account uses a long, random password to stay secure.</p>
        </div>
      </div>

      <section className="bg-surface-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
        <div className="border-b border-outline-variant bg-surface-dim px-6 py-4 flex items-center">
          <Lock className="h-5 w-5 text-on-surface-variant mr-3" />
          <h3 className="text-lg font-semibold text-on-surface">Update Password</h3>
        </div>
        
        <div className="p-6 md:p-8 space-y-8">
          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium text-on-surface mb-2">Current Password</label>
            <div className="relative">
              <input 
                type={showCurrent ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface"
              >
                {showCurrent ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="border-t border-outline-variant pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* New Password Fields */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-2">New Password</label>
                  <div className="relative">
                    <input 
                      type={showNew ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full pl-4 pr-10 py-2.5 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNew(!showNew)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface"
                    >
                      {showNew ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-on-surface mb-2">Confirm New Password</label>
                  <div className="relative">
                    <input 
                      type={showConfirm ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`w-full pl-4 pr-10 py-2.5 bg-surface border rounded-lg focus:outline-none focus:ring-1 ${confirmPassword && !passwordsMatch ? 'border-danger focus:border-danger focus:ring-danger' : 'border-outline-variant focus:border-primary focus:ring-primary'}`}
                      placeholder="Confirm new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface"
                    >
                      {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {confirmPassword && !passwordsMatch && (
                    <p className="mt-2 text-sm text-danger flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" /> Passwords do not match
                    </p>
                  )}
                </div>
              </div>

              {/* Password Requirements */}
              <div className="bg-surface-dim p-6 rounded-xl border border-outline-variant">
                <h4 className="text-sm font-semibold text-on-surface mb-4 flex items-center">
                  <ShieldCheck className="h-4 w-4 mr-2" />
                  Password Requirements
                </h4>
                
                {/* Strength Meter */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-on-surface-variant">Password Strength</span>
                    <span className="text-xs font-bold text-on-surface">
                      {strength === 0 && 'None'}
                      {strength > 0 && strength <= 2 && 'Weak'}
                      {strength > 2 && strength <= 4 && 'Fair'}
                      {strength === 5 && 'Strong'}
                    </span>
                  </div>
                  <div className="flex space-x-1 h-1.5">
                    {[0, 1, 2, 3, 4].map(i => (
                      <div key={i} className={`flex-1 rounded-full transition-colors duration-300 ${getStrengthBarColor(i)}`}></div>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2 mt-4">
                  {requirements.map((req, index) => {
                    const isMet = req.regex.test(newPassword);
                    return (
                      <li key={index} className="flex items-start">
                        <span className={`flex-shrink-0 h-4 w-4 rounded-full border flex items-center justify-center mr-2 mt-0.5 ${isMet ? 'bg-success text-white border-success' : 'border-outline text-transparent'}`}>
                           {isMet && <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>}
                        </span>
                        <span className={`text-sm ${isMet ? 'text-on-surface' : 'text-on-surface-variant'}`}>{req.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-6 mt-6 border-t border-outline-variant flex justify-end">
            <button 
              onClick={handleSave}
              disabled={!isFormValid || isSaving}
              className="inline-flex items-center justify-center px-6 py-2.5 bg-primary hover:bg-royal-blue text-white rounded-lg shadow-sm font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSaving ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              ) : (
                <Save className="h-5 w-5 mr-2" />
              )}
              {isSaving ? 'Updating...' : 'Update Password'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
