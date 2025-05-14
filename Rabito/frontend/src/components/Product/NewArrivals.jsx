import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const NewArrivals = () => {
  const newArrivals = [
    {
      id: '1',
      name: 'Lehanga',
      price: 123,
      images: [
        {
          url: 'https://i.pinimg.com/736x/b6/f8/2f/b6f82ffc70d08adb1c502751d4e60daa.jpg',
          altText: 'Lehanga',
        },
      ],
    },
    {
      id: '2',
      name: 'Casual Hoodie',
      price: 89,
      images: [
        {
          url: 'https://i.pinimg.com/originals/46/eb/b2/46ebb27a07cc96f317cc58fa2bc4c468.jpg',
          altText: 'Casual Hoodie',
        },
      ],
    },
    {
      id: '3',
      name: 'Denim Jeans',
      price: 110,
      images: [
        {
          url: 'https://www.gulfshorebusiness.com/wp-content/uploads/2022/05/Citizens_Rocket-Crop-Mid-size-Skinny.jpeg',
          altText: 'Denim Jeans',
        },
      ],
    },
    {
      id: '4',
      name: 'Sport Sneakers',
      price: 150,
      images: [
        {
          url: 'https://i.pinimg.com/originals/a3/79/c5/a379c5a839b680f9625db84a16509621.jpg',
          altText: 'Sport Sneakers',
        },
      ],
    },
    {
        id: '5',
        name: 'Men kurta',
        price: 150,
        images: [
          {
            url: 'https://i.pinimg.com/736x/a6/81/a7/a681a7b3fc1093333060ad0b9857b1d8.jpg',
            altText: 'Sport Sneakers',
          },
        ],
      },
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
      },
    });
  }, [controls]);

  const renderCards = [...newArrivals, ...newArrivals]; // 🔁 Duplicate for infinite scroll illusion

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-[#3a2e2b] mb-4">Explore New Arrivals</h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of the latest styles, designed to keep you stylish and confident.
        </p>
      </div>

      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-8 w-max"
          animate={controls}
        >
          {renderCards.map((product, index) => (
            <div key={`${product.id}-${index}`} className="min-w-[220px] flex-shrink-0">
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                className="rounded-lg shadow-md w-full h-[300px] object-cover"
              />
              <div className='absolute bottom-0'></div>
              <h3 className="mt-2 font-medium text-[#3a2e2b] text-lg">{product.name}</h3>
              <p className="text-sm text-gray-600">₹{product.price}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivals;
