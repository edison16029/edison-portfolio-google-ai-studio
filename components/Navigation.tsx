
import React, { useState } from 'react';
import { theme } from '../theme';
import { View } from '../App';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { name: string; view: View }[] = [
    { name: 'Home', view: 'home' },
    { name: 'Projects', view: 'projects' },
    { name: 'Travel', view: 'travel' },
    { name: 'Blog', view: 'blog' },
    { name: 'Contact', view: 'contact' },
  ];

  const handleNavigate = (view: View) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className={theme.styles.container}>
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => handleNavigate('home')}
              className={`text-xl font-serif font-bold text-${theme.colors.primary}`}
            >
              EDISON MONI
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigate(item.view)}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-200 border-b-2 ${
                  currentView === item.view 
                    ? `text-${theme.colors.primary} border-${theme.colors.primary}` 
                    : `text-gray-700 border-transparent hover:text-${theme.colors.primary} hover:border-${theme.colors.primary}`
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigate(item.view)}
                className={`block w-full text-left px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                  currentView === item.view 
                    ? `bg-gray-50 text-${theme.colors.primary}` 
                    : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
