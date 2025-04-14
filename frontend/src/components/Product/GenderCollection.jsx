import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import men01 from '../../assets/men01.jpg';
import men02 from '../../assets/men02.jpg';
import men03 from '../../assets/men03.jpg';
import men04 from '../../assets/men04.jpg';

import women01 from '../../assets/women01.jpg';
import women02 from '../../assets/women02.jpg';
import women03 from '../../assets/women03.jpg';
import women04 from '../../assets/women04.jpg';

const cardVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.95, rotate: -2 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    rotate: 2,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};


const GenderCollection = () => {
  const menImages = [men01, men02, men03, men04];
  const womenImages = [women01, women02, women03, women04];

  const [menIndex, setMenIndex] = useState(0);
  const [womenIndex, setWomenIndex] = useState(0);

  useEffect(() => {
    const menInterval = setInterval(() => {
      setMenIndex((prev) => (prev + 1) % menImages.length);
    }, 3000);

    const womenInterval = setInterval(() => {
      setWomenIndex((prev) => (prev + 1) % womenImages.length);
    }, 3000);

    return () => {
      clearInterval(menInterval);
      clearInterval(womenInterval);
    };
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="max-w-screen-md mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Men Collection */}
        <motion.div
          className="relative flex-1 group overflow-hidden rounded-lg shadow-md h-[400px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={cardVariants}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={menIndex}
              src={menImages[menIndex]}
              alt="Men Collection"
              className="w-full h-full object-cover absolute inset-0"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
          <motion.h2
  className="text-white text-2xl font-semibold tracking-wide"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
  transition={{
    delay: 0.3,
    duration: 2,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'easeInOut'
  }}
  whileHover={{ scale: 1.1 }}
>
  Men Collection
</motion.h2>
          </div>
        </motion.div>

        {/* Women Collection */}
        <motion.div
          className="relative flex-1 group overflow-hidden rounded-lg shadow-md h-[400px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={cardVariants}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={womenIndex}
              src={womenImages[womenIndex]}
              alt="Women Collection"
              className="w-full h-full object-cover absolute inset-0"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
          <motion.h2
  className="text-white text-2xl font-semibold tracking-wide"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
  transition={{
    delay: 0.3,
    duration: 2,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'easeInOut'
  }}
  whileHover={{ scale: 1.1 }}
>
  Women Collection
</motion.h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GenderCollection;



//[{-