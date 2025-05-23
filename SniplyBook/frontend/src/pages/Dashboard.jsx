import React, { useState, useEffect, useMemo } from 'react';
import api from '../api/axios';
import { logout } from '../utils/auth';
import {
  FaLink,
  FaStar,
  FaRegSadCry,
  FaSignOutAlt,
  FaClock,
  FaGlobe
} from 'react-icons/fa';
import { AiOutlineInfoCircle, AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function BookmarkCard({ b, onDelete }) {
  const [badFavicon, setBadFavicon] = useState(false);
  const [meta, setMeta] = useState(null);
  const [loadingMeta, setLoadingMeta] = useState(true);
  const fallback = 'Summary temporarily unavailable.';

  useEffect(() => {
    setLoadingMeta(true);
    api.get(`/metadata?url=${encodeURIComponent(b.url)}`)
      .then(r => setMeta(r.data))
      .catch(() => {})
      .finally(() => setLoadingMeta(false));
  }, [b.url]);

  const hostname = useMemo(() => {
    try {
      return new URL(b.url).hostname.replace(/^www\./, '');
    } catch {
      return null;
    }
  }, [b.url]);

  const isJson = typeof b.summary === 'string' && b.summary.trim().startsWith('{');
  let parsed = {};
  if (isJson) {
    try {
      parsed = JSON.parse(b.summary);
    } catch {
      parsed = null;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      className="relative w-full max-w-xs p-5 rounded-2xl bg-white/70 backdrop-blur-md text-gray-800 shadow-xl hover:shadow-2xl transition-transform duration-300 flex flex-col"
    >
      <button onClick={() => onDelete(b._id)} className="absolute top-3 right-3 text-gray-400 hover:text-red-500">
        <AiOutlineClose size={18} />
      </button>
      <div className="flex items-center mb-3">
        {badFavicon || !b.favicon ? (
          <div className="w-10 h-10 mr-3 bg-gray-200 rounded-full flex items-center justify-center animate-pulse">
            <FaLink className="text-gray-500" />
          </div>
        ) : (
          <img src={b.favicon} alt={`${b.title} favicon`} className="w-10 h-10 mr-3 rounded-full border" onError={() => setBadFavicon(true)} />
        )}
        <div className="flex-1">
          <a href={b.url} target="_blank" rel="noopener noreferrer" className="block text-base font-semibold hover:underline">
            {b.title || 'Untitled'}
          </a>
          {hostname && <div className="text-xs text-gray-500 flex items-center mt-1"><FaGlobe className="mr-1" size={12} /> {hostname}</div>}
          {b.createdAt && <div className="text-xs text-gray-400 mt-0.5">Added on {new Date(b.createdAt).toLocaleDateString()}</div>}
        </div>
      </div>
      {loadingMeta ? (
        <div className="h-4 bg-gray-300 rounded w-24 mt-2 animate-pulse" />
      ) : meta && (
        <>
          {meta.description && <p className="text-sm text-gray-700 mb-2 line-clamp-2">{meta.description}</p>}
          <div className="flex items-center text-xs text-gray-600 gap-4 mb-2">
            {meta.readTime && <div className="flex items-center gap-1"><FaClock size={12} /> {meta.readTime}</div>}
            {meta.wordCount && <div className="flex items-center gap-1"><AiOutlineInfoCircle size={12} /> {meta.wordCount} words</div>}
          </div>
        </>
      )}
      <div className="mt-auto flex items-center text-sm space-x-2 text-indigo-700 font-medium">
        {b.categories?.map(cat => <span key={cat} className="px-2 py-0.5 bg-indigo-100 rounded-full">{cat}</span>)}
        <FaStar className="text-yellow-500" size={14} />
      </div>
      {isJson && parsed ? (
        <div className="bg-gray-100 p-3 rounded mt-3 text-sm space-y-1 overflow-auto">
          {Object.entries(parsed).map(([key, val]) => (
            <div key={key} className="flex items-start">
              <AiOutlineInfoCircle className="mt-1 mr-1 text-gray-500" size={14} />
              <div><span className="font-semibold capitalize">{key}:</span> <span className="break-all text-gray-700">{JSON.stringify(val)}</span></div>
            </div>
          ))}
        </div>
      ) : b.summary === fallback ? (
        <div className="flex items-center text-sm italic text-gray-500 mt-3">
          <FaRegSadCry className="mr-1" /> {fallback}
        </div>
      ) : (
        <p className="text-sm text-gray-700 mt-3 line-clamp-3">{b.summary}</p>
      )}
    </motion.div>
  );
}

export default function Dashboard() {
  const [list, setList] = useState([]);
  const [url, setUrl] = useState('');
  const [busy, setBusy] = useState(false);
  const [user, setUser] = useState({ name: 'Guest' });

  useEffect(() => { api.get('/bookmarks').then(r => setList(r.data)) }, []);
  useEffect(() => { api.get('/user').then(r => setUser(r.data)).catch(() => {}) }, []);

  async function add(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const { data } = await api.post('/bookmarks', { url });
      setList(prev => [data, ...prev]);
      setUrl('');
    } catch (err) { console.error(err); }
    setBusy(false);
  }

  function remove(id) {
    api.delete(`/bookmarks/${id}`).then(() => setList(prev => prev.filter(x => x._id !== id))).catch(console.error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <Navbar />


        {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center my-16 px-4">
        <p className="inline-flex items-center text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full mb-4">
          🚀 2024 Year in Review <span className="ml-2 text-xs text-gray-500">Read More →</span>
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Unlock the full potential of <br />
          every click <span className="inline-block">🖱️</span> with <span className="text-gray-600">Sniply</span>
        </h1>

        <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8">
          Built for marketers, teams, and businesses, Sniply provides all the tools you need to share smarter and grow faster.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition">
            Start for free
          </button>
          <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition">
            Get a demo
          </button>
        </div>

      
      </div>

      <form onSubmit={add} className="mb-12">
  <div className="relative max-w-2xl mx-auto bg-[#fdf4ee] rounded-2xl p-6 shadow-sm border border-[#f4e8e2]">
    <div className="w-full bg-white rounded-xl p-3 shadow-sm border border-gray-200 flex items-center justify-between">
      <input
        type="url"
        placeholder="Enter a link..."
        className="flex-1 bg-transparent outline-none text-sm text-gray-700 px-3 placeholder-gray-400"
        value={url}
        onChange={e => setUrl(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={busy}
        className="ml-3 px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition"
      >
        {busy ? 'Saving…' : 'Submit ✨'}
      </button>
    </div>

    {url && (
      <div className="mt-4 bg-white rounded-lg p-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="bg-black text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold">⚡</div>
          <div className="text-sm font-semibold text-gray-700">s.ly/try</div>
          <div className="text-xs text-gray-400 truncate max-w-[180px]">→ {url}</div>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>📈 65.2K clicks</span>
        </div>
      </div>
    )}
  </div>
</form>


      {/* Bookmarks Grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-2 md:px-4">
  <AnimatePresence>
    {list.length === 0 ? (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="col-span-full text-center mt-12 text-gray-500"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/AnimaApp/launchpad-ui@main/public/images/empty-box.svg"
          alt="Empty"
          className="w-32 mx-auto mb-3"
        />
        <p className="text-base font-medium">No bookmarks yet</p>
        <p className="text-sm">Paste your first link above to begin!</p>
      </motion.div>
    ) : (
      list.map(b => (
        <motion.div
          key={b._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 180, damping: 20 }}
          className="rounded-xl p-4 max-w-sm w-full mx-auto"
        >
          <BookmarkCard b={b} onDelete={remove} />
        </motion.div>
      ))
    )}
  </AnimatePresence>
</div>

<Footer/>

    </div>
  );
}
