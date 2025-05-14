import React, { useState } from 'react';
import Topbar from '../Layout/Topbar';
import Navbar from './Navbar';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [showTopbar, setShowTopbar] = useState(true);

  return (
    <header className="border-b border-gray-200 w-full ">
      {/* Animate Topbar In/Out */}
      <AnimatePresence mode="wait">
        {showTopbar && (
          <motion.div
            key="topbar"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Topbar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar always visible */}
      <Navbar
        toggleTopbar={() => setShowTopbar((prev) => !prev)}
        isTopbarVisible={showTopbar}
      />
    </header>
  );
};

export default Header;
