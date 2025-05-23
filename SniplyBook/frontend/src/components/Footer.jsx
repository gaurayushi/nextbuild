import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 px-6 py-12 text-center text-sm backdrop-blur-md bg-white border-t border-gray-100">
      {/* Trusted by section */}
      <div className="mb-10">
        <p className="text-xs font-medium text-gray-500 mb-6">Trusted by</p>
        <div className="flex justify-center items-center flex-wrap gap-10 px-4">
          {/* Framer Logo */}
          <img
            src="https://www.svgrepo.com/show/369311/framer.svg"
            alt="Framer"
            className="h-8 max-w-[80px] object-contain opacity-90"
          />
          {/* Amazon Logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
            alt="Amazon"
            className="h-6 opacity-90"
          />
        
          <img
            src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/databricks.svg"
            alt="Databricks"
            className="h-7 max-w-[100px] object-contain opacity-90"
          />
          {/* Notion Logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
            alt="Notion"
            className="h-6 opacity-90"
          />
          {/* Dropbox Logo */}
          <img
            src="https://cdn.worldvectorlogo.com/logos/dropbox.svg"
            alt="Dropbox"
            className="h-7 max-w-[100px] object-contain opacity-90"
          />
        </div>
      </div>

      {/* Footer note */}
      <p>
        © {new Date().getFullYear()}{' '}
        <span className="font-semibold text-indigo-700">MyBookmarks</span> — Crafted with care for modern readers.
      </p>
    </footer>
  );
}
