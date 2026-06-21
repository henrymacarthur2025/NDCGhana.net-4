import { Link, useLocation } from 'react-router-dom';

export function SettingsNav() {
  const location = useLocation();

  const links = [
    { name: 'General Settings', path: '/mp-portal/settings' },
    { name: 'Password & Security', path: '/mp-portal/settings/password' },
    { name: 'Notifications', path: '/mp-portal/settings/notifications' },
    { name: 'Privacy & Visibility', path: '/mp-portal/settings/privacy' },
  ];

  return (
    <div className="flex overflow-x-auto space-x-4 border-b border-outline-variant mb-6 pb-2">
      {links.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            className={`whitespace-nowrap px-4 py-2 rounded-t-lg transition-colors font-medium text-sm ${
              isActive 
                ? 'bg-primary/10 text-primary border-b-2 border-primary -mb-[9px]' 
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-variant'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
