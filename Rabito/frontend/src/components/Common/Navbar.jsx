import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import rabbitLogo from '../../assets/rabbit.png';
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineBars3,
  HiOutlineCog6Tooth,
} from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';

const listVariants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const sidebarVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const linkItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Navbar = ({ toggleTopbar, isTopbarVisible }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);


  useState(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-[rgb(255,250,246)] text-[#3a2e2b] shadow-sm border-b border-[#e8ddd2] relative z-50 font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={rabbitLogo}
              alt="Rabbit Logo"
              className="h-12 w-12 rounded-full border border-gray-200 hover:scale-110 transition-transform duration-200 shadow-md"
            />
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            {["Men", "Women", "TopWear", "Bottom Wear"].map((label, index) => (
              <Link
                key={index}
                to={`/collection/${label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm uppercase font-medium border-b-2 border-transparent hover:border-[#c05038] transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5 relative">
            {/* Cart */}
            <button
              onClick={toggleCartDrawer}
              className="relative flex items-center gap-2 hover:text-[#c05038] transition-colors"
            >
              <HiOutlineShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-3 bg-[#d66a4e] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                4
              </span>
            </button>

            {/* Search */}
            <SearchBar />

            {/* ☰ Dropdown Icon */}
            <div className="relative">
              {/* Trigger Icon */}
              <div className="peer flex items-center cursor-pointer hover:text-[#c05038] transition">
                <HiOutlineBars3 className="h-6 w-6" />
              </div>

              {/* Dropdown Panel */}
              <div
                className="absolute right-0 mt-2 w-44 bg-white shadow-xl rounded-md border border-gray-100 
                invisible peer-hover:visible hover:visible opacity-0 peer-hover:opacity-100 hover:opacity-100 
                transition-all duration-200 z-50"
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <button
                      onClick={toggleTopbar}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition flex items-center gap-2"
                    >
                      {isTopbarVisible ? (
                        <>
                          <HiOutlineEyeSlash className="h-4 w-4" /> Hide Topbar
                        </>
                      ) : (
                        <>
                          <HiOutlineEye className="h-4 w-4" /> Show Topbar
                        </>
                      )}
                    </button>
                  </li>
                  <li>
                  <Link
    to="/profile"
    className="block px-4 py-2 hover:bg-gray-100 transition flex items-center gap-2"
  >
    <HiOutlineCog6Tooth className="h-4 w-4" />
    {user?.name || 'Admin Panel'}
  </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="block px-4 py-2 hover:bg-gray-100 transition flex items-center gap-2"
                    >
                      <HiOutlineUser className="h-4 w-4" /> Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {showDropdown && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={listVariants}
            className="md:hidden px-6 py-4 space-y-4 border-t border-[#e6d6c8] bg-[#fffaf6]"
          >
            {["Men", "Women", "TopWear", "Bottom Wear"].map((label, index) => (
              <motion.li key={index} variants={itemVariants}>
                <Link
                  to={`/${label.toLowerCase().replace(/\s+/g, "")}`}
                  className="block text-sm uppercase font-medium text-[#3a2e2b] hover:text-[#c05038] transition-colors"
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </nav>

      {/* Cart Drawer */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Sidebar (optional) */}
      <motion.div
        initial="hidden"
        animate={navDrawerOpen ? 'visible' : 'hidden'}
        variants={sidebarVariants}
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          navDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <motion.div className="px-6 space-y-4" variants={sidebarVariants}>
          <h2 className="text-lg font-semibold">Menu</h2>
          <nav className="space-y-2">
            {['Men', 'Women', 'Topwear', 'Bottomwear'].map((label, i) => (
              <motion.div key={i} variants={linkItem}>
                <Link
                  to={`/${label.toLowerCase()}`}
                  onClick={toggleNavDrawer}
                  className="block text-gray-600 hover:text-black text-sm"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
