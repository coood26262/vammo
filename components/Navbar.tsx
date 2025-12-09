import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-blue-500" style={{ fontFamily: 'Arial, sans-serif' }}>
              venmo
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors text-sm font-medium"
            >
              How It Works
            </a>
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
