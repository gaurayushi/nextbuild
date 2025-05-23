import React from 'react';
import { FaBolt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <FaBolt className="text-indigo-600 text-2xl" />
          <span className="text-2xl font-bold text-gray-900 tracking-tight">Sniply</span>
        </div>

        {/* Middle: Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-indigo-600 transition">Product</a>
          <a href="#" className="hover:text-indigo-600 transition">Resources</a>
          <a href="#" className="hover:text-indigo-600 transition">Enterprise</a>
          <a href="#" className="hover:text-indigo-600 transition">Customers</a>
          <a href="#" className="hover:text-indigo-600 transition">Pricing</a>
        </nav>

        {/* Right: CTA buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 text-sm hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
