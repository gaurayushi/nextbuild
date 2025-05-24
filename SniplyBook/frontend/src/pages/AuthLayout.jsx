import React from 'react';
import WaveBackground from './WaveBackground';

export default function AuthLayout({ left, right }) {
  return (
    <div className="relative min-h-screen flex bg-transparent overflow-hidden">
      {/* Background decorations */}
      <WaveBackground />

      {/* Left panel: form side */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center p-6">
        {left}
      </div>

      {/* Right panel: illustration or graphic */}
      <div className="relative z-10 hidden md:flex md:w-1/2 items-center justify-center p-6">
        {right}
      </div>
    </div>
  );
}
