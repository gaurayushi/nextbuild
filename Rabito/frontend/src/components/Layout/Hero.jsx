import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/pack02.mp4';

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* 🎥 Animated Background Video */}
      <motion.video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full object-cover"
      />

      {/* 🧃 Animated Overlay Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Step Into Style with Rabbit
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl mb-6"
        >
          Discover the latest trends in fashion, crafted for comfort & confidence.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-[#c05038] hover:bg-[#a8432e] transition px-6 py-3 rounded-lg font-medium text-sm"
        >
          Shop Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
