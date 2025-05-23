import React from 'react';
import WaveBackground from './WaveBackground';

export default function AuthLayout({ left, right }) {
  return (
    <div className="relative min-h-screen flex overflow-hidden bg-white">
    <WaveBackground />

      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="
            bg-white
            w-full max-w-md
            rounded-tr-[4rem] rounded-br-[4rem]
            shadow-lg
            p-8
          ">
          {left}
        </div>
      </div>

      <div className="relative z-10 hidden md:flex md:w-1/2 items-center justify-center p-8">
        {right}
      </div>
    </div>
  );
}
