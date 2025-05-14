import React, { useEffect, useState } from 'react';
import Hero from '../components/Layout/Hero';
import GenderCollection from '../components/Product/GenderCollection';
import NewArrivals from '../components/Product/NewArrivals';
import ProductDetails from '../components/Product/ProductDetails';
import ProductGrid from '../components/Product/ProductGrid';
import FeaturedCollection from '../components/Product/FeaturedCollection';
import FeaturesSection from '../components/Product/FeaturesSection';

const placeholderProducts = [
  {
    id: 1,
    name: 'Urban Explorer Jacket',
    price: 109,
    images: [
      { url: 'https://i.pinimg.com/736x/49/a9/a8/49a9a8b0253adccc1fb8d078b6244296.jpg' },
    ],
  },
  {
    id: 2,
    name: 'Retro Denim Jacket',
    price: 92,
    images: [
      { url: 'https://i.pinimg.com/736x/f6/0f/16/f60f16a9c8353d5ef7e1bbf9621cc1a0.jpg' },
    ],
  },
  {
    id: 3,
    name: 'Storm Shield Bomber',
    price: 115,
    images: [
      { url: 'https://i.pinimg.com/originals/df/f9/6c/dff96cd48c623a7516ff5f7e54c65d6a.jpg' },
    ],
  },
  {
    id: 4,
    name: 'Midnight Blazer',
    price: 102,
    images: [
      { url: 'https://i.pinimg.com/736x/fb/fa/38/fbfa38f3a7a103cd58f0035db9a6ac3d.jpg' },
    ],
  },
  {
    id: 5,
    name: 'Textured Wool Coat',
    price: 138,
    images: [
      { url: 'https://i.pinimg.com/736x/a6/7e/b4/a67eb4d66125ff4cd6d6ea6de7484278.jpg' },
    ],
  },
  {
    id: 6,
    name: 'Vintage Overshirt',
    price: 99,
    images: [
      { url: 'https://i.pinimg.com/originals/7b/79/ee/7b79eeeae23a33057de5eaefc0b8cc00.jpg' },
    ],
  },
  {
    id: 7,
    name: 'Linen Short Suit',
    price: 124,
    images: [
      { url: 'https://i.styleoholic.com/2021/04/a-grey-linen-shorts-suit-with-an-oversized-blazer-bermuda-shorts-a-white-crop-top-and-neutral-trainers.jpg' },
    ],
  },
  {
    id: 8,
    name: 'Chic Formal Blazer',
    price: 106,
    images: [
      { url: 'https://i.pinimg.com/originals/f2/08/ca/f208ca751f41f154b3e1bf4bb398ac99.jpg' },
    ],
  },
];

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('products')) || [];
    const formatted = stored.map((p, i) => ({
      id: 1000 + i,
      name: p.name,
      price: parseFloat(p.price),
      images: [{ url: p.image }],
    }));
    setAllProducts([...placeholderProducts, ...formatted]);
  }, []);

  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />

      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={allProducts} />
      </div>

      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
