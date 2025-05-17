import { motion } from "framer-motion";

export default function Hero() {
  return (
 <section className="py-20 px-6 ">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>

      <div className="z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 inline-block bg-green-500/10 text-green-300 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-medium">
            New Feature – License Buyback Upgrade
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-snug mb-6 text-white">
            Sell Your Unused <span className="text-green-400">Software Licenses</span>
          </h1>
       <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            We help businesses and individuals turn unused software into
            <strong className="text-white"> fast</strong>, <strong className="text-white">secure</strong>, and
            <strong className="text-white"> hassle-free</strong> cash.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition shadow-lg">
              Get a Quote
            </button>

            <button className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded-full transition shadow-lg flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.131v7.738a1 1 0 001.234.97l6.518-1.505a1 1 0 00.752-.97V12.14a1 1 0 00-.752-.972z"
                />
              </svg>
              Watch Tutorial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
