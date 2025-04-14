import React, { useState } from 'react';
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch=(e)=>{
    e.preventDefault();
    console.log("Search Term",searchTerm);
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      {/* Toggle Open Button */}
      {!isOpen && (
        <button
          onClick={handleSearchToggle}
          className="flex items-center justify-center z-50 relative"
        >
          <HiMagnifyingGlass className="h-5 w-5 text-[#3a2e2b]" />
        </button>
      )}

      {/* Overlay with Search Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex items-center justify-center transition-all duration-300">
          
          {/* Close Button - positioned in the far corner of the screen */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute top-6 right-6 text-gray-600 hover:text-gray-800 z-50"
          >
            <HiXMark className="h-7 w-7" />
          </button>

          <div className="w-full max-w-xl px-4 relative">
            <form onSubmit={handleSearch}className="flex items-center gap-2 bg-gray-100 rounded-lg shadow-md p-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="bg-transparent px-4 py-2 w-full focus:outline-none placeholder:text-gray-700"
              />
              <button
                type="submit"
                className="text-[#3a2e2b] p-2 rounded-lg hover:bg-gray-200 transition"
              >
                <HiMagnifyingGlass className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
