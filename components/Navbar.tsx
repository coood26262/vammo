import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/zelle-logo.png" 
              alt="Zelle" 
              className="h-7 w-auto"
            />
          </div>
          {/* No button */}
        </div>
      </div>
    </nav>
  );
};
