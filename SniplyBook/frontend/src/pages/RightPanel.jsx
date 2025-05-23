
import React from 'react';
import { SiTiktok } from 'react-icons/si';
import { FiKey }    from 'react-icons/fi';
import instaLogo    from '../assets/instra.webp';
import fbLogo       from '../assets/facebook.png';

export default function RightPanel() {
  return (
    <div className="flex flex-col items-start space-y-8">
      {/* Top: Facebook oval */}
      <div className="bg-white rounded-full px-4 py-4 shadow-md ml-10 flex items-center justify-center">
        <img src={fbLogo} alt="Facebook" className="w-8 h-8" />
      </div>

      {/* Inbox Pill */}
      <div className="bg-white rounded-full px-8 py-4 shadow-lg w-full max-w-md flex items-center justify-between">
        <div className="flex flex-col items-start">
          <span className="text-gray-800 font-medium">Inbox</span>
          <span className="text-2xl font-bold mt-1">176,18</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center">
            45
          </div>
          <svg className="h-6 w-20" viewBox="0 0 50 20" fill="none">
            <path
              d="M0,10 C10,0 20,20 30,10 40,0 50,10"
              stroke="#FBBF24"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      {/* Middle: Instagram oval */}
      <div className="bg-white rounded-full px-4 py-4 shadow-md flex items-center justify-center ml-10">
        <img src={instaLogo} alt="Instagram" className="w-8 h-8" />
      </div>

      {/* Your Data Rules Card */}
      <div className="bg-white rounded-2xl p-6 w-80 shadow-lg">
        <div className="flex items-start">
          <FiKey className="text-yellow-400 text-3xl mr-4" />
          <div>
            <h3 className="text-gray-800 font-semibold text-lg">Your data, your rules</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Your data belongs to you, and our encryption ensures that
            </p>
          </div>
        </div>
      </div>

      {/* Bottom: TikTok diamond turned oval */}
      <div className="bg-white rounded-full px-6 py-3 shadow-md flex items-center justify-center">
        <SiTiktok className="text-2xl text-gray-900" />
      </div>
    </div>
  );
}
