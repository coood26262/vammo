import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/venmo-logo.png" 
              alt="Venmo" 
              className="h-6 w-auto"
            />
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-[#008CFF] transition-colors text-sm font-medium hidden sm:block"
            >
              How It Works
            </a>
            <a
              href="#"
              className="bg-[#008CFF] hover:bg-[#0077D9] text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
