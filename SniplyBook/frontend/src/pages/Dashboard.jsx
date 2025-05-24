import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookmarkCard from '../components/BookmarkCard';
import { motion, AnimatePresence } from 'framer-motion';

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
    } catch (err) {
      console.error(err);
    }
    setBusy(false);
  }

  function remove(id) {
    api.delete(`/bookmarks/${id}`).then(() => setList(prev => prev.filter(x => x._id !== id))).catch(console.error);
  }

  return (
    <div className="min-h-screenbg-gradient-to-br from-[#f0f4ff] via-[#ffffff] to-[#ffe9f0]">
      <Navbar />

      <div className="max-w-4xl mx-auto text-center my-16 px-4">
        <p className="inline-flex items-center text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full mb-4">
          🚀 2024 Year in Review <span className="ml-2 text-xs text-gray-500">Read More →</span>
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Unlock the full potential of <br />
          every click <span className="inline-block">🖱️</span> with <span className="text-gray-800">Sniply</span>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-2 md:px-4">
        <AnimatePresence>
          {list.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center mt-12 text-gray-500"
            >
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

      <Footer />
    </div>
  );
}
