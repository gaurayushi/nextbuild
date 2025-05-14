import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCollection = () => {
  return (
    <section className='py-16 px-4 lg:px-0 '>
      <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl overflow-hidden'>
        
        {/* Text Content */}
        <div className='lg:w-1/2 p-8 text-center lg:text-left'>
          <h2 className='text-lg font-semibold text-gray-700 mb-2'>
            Elegance Meets Occasion
          </h2>
          <h1 className='text-4xl lg:text-5xl font-bold mb-6 leading-tight'>
            Apparel made for your perfect wedding moments
          </h1>
          <p className='text-lg text-gray-600 mb-6'>
            From pre-wedding festivities to your special day, explore our collection designed to make every moment picture-perfect. Where tradition meets trend — with comfort, grace, and timeless beauty.
          </p>
          <Link
            to="/collections/all"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
          >
            Shop Wedding Looks
          </Link>
        </div>

        {/* Wedding Image */}
        <div className='lg:w-1/2'>
          <img
            src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/001/022/281/new_large/67788885_194799201518273_3100426884006310591_n.jpg?1565248529"
            alt="Wedding Collection"
            className='w-full h-full object-cover rounded-t-3xl lg:rounded-none lg:rounded-r-3xl'
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
