import React from 'react';

export const Hero: React.FC = () => {
  // Determine affiliate link based on URL path
  const getAffiliateLink = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/ca' || path === '/ca/') {
        return 'https://trkfy.org/aff_c?offer_id=2862&aff_id=2609';
      }
    }
    return 'https://trkfy.org/aff_c?offer_id=2862&aff_id=2609';
  };

  const affiliateLink = getAffiliateLink();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden pb-20">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            {/* Venmo Logo Style */}
            <div className="text-center mb-8">
              <h1 className="text-5xl sm:text-6xl font-bold text-blue-500 mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
                venmo
              </h1>
            </div>

            {/* Amount */}
            <div className="text-center mb-8">
              <div className="text-5xl sm:text-6xl font-bold text-blue-500 mb-2">
                $1000.00
              </div>
              <p className="text-xl text-gray-600">Instantly sent to you</p>
            </div>

            {/* Instructions Box */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <p className="text-gray-800 font-medium pt-1">Click the "Sign Up" to start</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <p className="text-gray-800 font-medium pt-1">Provide a valid email address</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <p className="text-gray-800 font-medium pt-1">Complete 3-5 recommended deals</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <p className="text-gray-800 font-medium pt-1">Start receiving your Venmo payments</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={affiliateLink}
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).ttq) {
                  (window as any).ttq.track('ClickButton', {
                    content_name: 'Sign Up - Main CTA',
                    content_category: 'CTA'
                  });
                }
              }}
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl py-5 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-95 transform duration-100 text-center"
            >
              Sign Up
            </a>
          </div>

          {/* Stats Section - Kept from original */}
          <div className="mt-12">
            <div className="flex flex-row items-center justify-center gap-8 sm:gap-16">
              <div className="flex flex-col items-center">
                <div className="text-xs text-blue-600 font-bold uppercase tracking-wide mb-1">TOTAL PAID</div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-800">$9 Million</div>
                <div className="text-xs text-gray-500">to Users</div>
              </div>
              <div className="w-px h-16 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="text-xs text-blue-600 font-bold uppercase tracking-wide mb-1">TRUSTED BY</div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-800">1 Million</div>
                <div className="text-xs text-gray-500">Verified Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Check Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Quick Eligibility Check
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Are you at least 18 years old?
            </p>
            <a
              href={affiliateLink}
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).ttq) {
                  (window as any).ttq.track('ClickButton', {
                    content_name: 'Yes Continue - Eligibility',
                    content_category: 'CTA'
                  });
                }
              }}
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg px-16 py-4 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-95 transform duration-100"
            >
              Yes, Continue →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
