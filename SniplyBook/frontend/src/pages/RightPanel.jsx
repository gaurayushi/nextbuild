import React from 'react';
import { SiTiktok } from 'react-icons/si';
import { FiKey } from 'react-icons/fi';
import instaLogo from '../assets/instra.webp';
import fbLogo from '../assets/facebook.png';

export default function RightPanel() {
  return (
    <div className="flex flex-col items-start space-y-8 w-full max-w-sm mx-auto px-4">
      {/* Facebook icon */}
      <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-full w-14 h-14 flex items-center justify-center shadow-md">
        <img src={fbLogo} alt="Facebook" className="w-7 h-7" />
      </div>

      {/* Inbox Card */}
      <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl p-5 shadow-lg w-full flex justify-between items-center">
        <div>
          <p className="text-gray-700 font-medium">Inbox</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">176,18</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-semibold">
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

      {/* Instagram icon */}
      <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-full w-14 h-14 flex items-center justify-center shadow-md">
        <img src={instaLogo} alt="Instagram" className="w-7 h-7" />
      </div>

      {/* Data card */}
      <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl p-6 shadow-xl w-full">
        <div className="flex items-start">
          <FiKey className="text-yellow-400 text-2xl mr-4 mt-1" />
          <div>
            <h3 className="text-gray-900 font-semibold text-lg">
              Your data, your rules
            </h3>
            <p className="text-gray-600 mt-2 text-sm leading-snug">
              Your data belongs to you, and our encryption ensures that
            </p>
          </div>
        </div>
      </div>

      {/* TikTok icon */}
      <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-full w-14 h-14 flex items-center justify-center shadow-md">
        <SiTiktok className="text-2xl text-gray-900" />
      </div>
    </div>
  );
}
