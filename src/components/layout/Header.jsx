import { Globe, Bell, Menu, User } from 'lucide-react';
import { useState } from 'react';

const Header = ({ userType = 'tourist' }) => {
  const [language, setLanguage] = useState('EN');

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl">🇻🇳</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Experience Vietnam</h1>
              <p className="text-xs text-gray-500">Your Digital Companion</p>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Globe className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium">{language}</span>
              </button>
            </div>

            {/* Notifications */}
            {userType === 'tourist' && (
              <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
              </button>
            )}

            {/* User Menu */}
            <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium hidden md:inline">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
