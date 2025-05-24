import React from 'react';
import {
  FaLink,
  FaStar,
  FaRegSadCry,
  FaClock,
  FaGlobe
} from 'react-icons/fa';
import { AiOutlineInfoCircle, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function BookmarkCard({ b, onDelete }) {
  const isJson = typeof b.summary === 'string' && b.summary.trim().startsWith('{');
  let parsed = {};

  if (isJson) {
    try {
      parsed = JSON.parse(b.summary);
    } catch {
      parsed = null;
    }
  }

  const renderSummary = () => {
    if (isJson && parsed) {
      return (
        <div className="bg-gray-100 p-2 rounded mt-2 text-xs space-y-1 overflow-hidden">
          {Object.entries(parsed).map(([key, val]) => (
            <div key={key} className="flex items-start">
              <AiOutlineInfoCircle className="mt-0.5 mr-1 text-gray-500" size={12} />
              <div>
                <span className="font-semibold capitalize">{key}:</span>{' '}
                <span className="break-words text-gray-700">{JSON.stringify(val)}</span>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (b.summary === 'Summary temporarily unavailable.') {
      return (
        <div className="flex items-center text-xs italic text-gray-500 mt-2">
          <FaRegSadCry className="mr-1" /> {b.summary}
        </div>
      );
    } else {
      return (
        <p className="text-xs text-gray-700 mt-2 whitespace-pre-wrap line-clamp-4">
          {b.summary}
        </p>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="relative w-full max-w-sm p-4 rounded-xl bg-white/70 backdrop-blur-md text-gray-800 shadow-md hover:shadow-lg transition-transform duration-300 flex flex-col"
    >
      <button
        onClick={() => onDelete(b._id)}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
      >
        <AiOutlineClose size={16} />
      </button>

      {/* Favicon & Title */}
      <div className="flex items-start mb-2">
        {!b.favicon ? (
          <div className="w-9 h-9 mr-2 bg-gray-200 rounded-full flex items-center justify-center">
            <FaLink className="text-gray-500" size={14} />
          </div>
        ) : (
          <img
            src={b.favicon}
            alt="favicon"
            onError={(e) => (e.target.style.display = 'none')}
            className="w-9 h-9 mr-2 rounded-full border"
          />
        )}

        <div className="flex-1">
          <a
            href={b.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-semibold text-blue-700 hover:underline"
          >
            {b.title || 'Untitled'}
          </a>
          <div className="text-[11px] text-gray-500 flex items-center mt-1">
            <FaGlobe className="mr-1" size={10} />
            {new URL(b.url).hostname.replace(/^www\./, '')}
          </div>
        </div>
      </div>

      {/* Created Date */}
      <div className="text-[11px] text-gray-400 mb-2">
        <FaClock size={10} className="inline-block mr-1" />
        {new Date(b.createdAt).toLocaleDateString()}
      </div>

      {/* Summary or Structured Data */}
      {renderSummary()}

      {/* Tags */}
      {b.categories?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-indigo-700 font-medium">
          {b.categories.map((cat) => (
            <span key={cat} className="px-2 py-0.5 bg-indigo-100 rounded-full">
              {cat}
            </span>
          ))}
          <FaStar className="text-yellow-500" size={12} />
        </div>
      )}
    </motion.div>
  );
}
