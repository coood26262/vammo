import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

const AgeGate: React.FC<{ onVerify: (isOver21: boolean) => void }> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Age Verification</h2>
        <p className="text-gray-600 mb-6 text-lg">Are you over 18 years of age?</p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => onVerify(true)}
            className="w-full bg-[#008CFF] hover:bg-[#0077D9] text-white font-bold py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Yes, I am over 18
          </button>
          <button
            onClick={() => onVerify(false)}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-4 rounded-full transition-all"
          >
            No, I am under 18
          </button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = (isOver21: boolean) => {
    if (isOver21) {
      setIsVerified(true);
      window.scrollTo(0, 0);
    } else {
      window.location.href = 'https://www.google.com';
    }
  };

  if (!isVerified) {
    return <AgeGate onVerify={handleVerification} />;
  }

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-slate-50 to-blue-50 font-sans antialiased selection:bg-[#008CFF] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
