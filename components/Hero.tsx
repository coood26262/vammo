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
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden pb-12">
      {/* Hero Section */}
      <div className="relative pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
            {/* NO Venmo text here - removed! */}

            {/* Amount */}
            <div className="text-center mb-6">
              <div className="text-4xl sm:text-5xl font-bold text-[#008CFF] mb-1">
                $1000.00
              </div>
              <p className="text-base text-gray-600">Instantly sent to you</p>
            </div>

            {/* Instructions Box */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-7 h-7 bg-[#008CFF] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <p className="text-gray-800 font-medium text-sm pt-0.5">Click the "Sign Up" to start</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-7 h-7 bg-[#008CFF] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <p className="text-gray-800 font-medium text-sm pt-0.5">Provide a valid email address</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-7 h-7 bg-[#008CFF] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <p className="text-gray-800 font-medium text-sm pt-0.5">Complete 3-5 recommended deals</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-7 h-7 bg-[#008CFF] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <p className="text-gray-800 font-medium text-sm pt-0.5">Start receiving your Venmo payments</p>
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
              className="block w-full bg-[#008CFF] hover:bg-[#0077D9] text-white font-bold text-lg py-4 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-95 transform duration-100 text-center"
            >
              Sign Up
            </a>
          </div>

          {/* Stats Section */}
          <div className="mt-8">
            <div className="flex flex-row items-center justify-center gap-6 sm:gap-12">
              <div className="flex flex-col items-center">
                <div className="text-[10px] text-[#008CFF] font-bold uppercase tracking-wide mb-0.5">TOTAL PAID</div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800">$9 Million</div>
                <div className="text-[10px] text-gray-500">to Users</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="text-[10px] text-[#008CFF] font-bold uppercase tracking-wide mb-0.5">TRUSTED BY</div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800">1 Million</div>
                <div className="text-[10px] text-gray-500">Verified Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">
                  What are Deals?
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Deals are simple tasks you complete to earn rewards. This could be downloading an app, completing a survey, or signing up for a trial subscription using the links provided. Each deal has specific steps—once you reach the required level or complete the task, you'll earn a reward.
                </p>
              </div>

              {/* FAQ 2 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">
                  How many Deals do I need to complete?
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  To qualify for your Venmo payout, you'll need to complete 3-5 deals to unlock the full $500-1000 payout value. Make sure you finish all the required deals from start to finish. The more deals you complete, the closer you get to your full reward.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={affiliateLink}
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).ttq) {
                  (window as any).ttq.track('ClickButton', {
                    content_name: 'Get Started - FAQ Section',
                    content_category: 'CTA'
                  });
                }
              }}
              className="block w-full bg-[#008CFF] hover:bg-[#0077D9] text-white font-bold text-base px-12 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-95 transform duration-100 text-center mt-6"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
