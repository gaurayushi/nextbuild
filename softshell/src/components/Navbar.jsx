import { motion } from 'framer-motion';
import { FaRegStar } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="flex justify-center pt-6">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[95%] max-w-7xl bg-gradient-to-r from-[#0f172a] via-[#112f3a] to-[#0b3c2f] rounded-full px-8 py-4 flex items-center justify-between shadow-lg"
      >
        {/* Logo + Icon */}
        <motion.div
          whileHover={{ rotate: 10 }}
          className="flex items-center space-x-2 text-white font-bold text-xl"
        >
          <div className="bg-green-500 p-2 rounded-md">
            <FaRegStar className="text-white text-lg" />
          </div>
          <span>SoftSell</span>
        </motion.div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-white/90">
          <li><a href="#about" className="hover:text-white transition">About</a></li>
          <li><a href="#services" className="hover:text-white transition">Services</a></li>
          <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
          <li><a href="#company" className="hover:text-white transition">Company</a></li>
          <li><a href="#resources" className="hover:text-white transition">Resources</a></li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <button className="hidden md:inline-block border border-white text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-[#0f172a] transition">
            Sign In
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-5 py-2 rounded-full bg-green-500 text-white font-semibold text-sm shadow transition overflow-hidden"
          >
            <span className="relative z-10">Register</span>
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-neonPulse pointer-events-none"
              style={{
                border: '2px solid rgba(34, 255, 122, 0.5)',
                boxShadow: '0 0 12px rgba(34, 255, 122, 0.6)',
                transition: 'opacity 0.3s ease-in-out',
              }}
              aria-hidden="true"
            ></span>
          </motion.button>
        </div>
      </motion.nav>
    </header>
  );
}
