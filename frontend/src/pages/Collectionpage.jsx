import React, { useEffect, useRef, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../components/Product/FilterSidebar';
import ProductGrid from '../components/Product/ProductGrid';
import SortOptions from '../components/Product/SortOption';
import { useNavigate } from 'react-router-dom';

const Collectionpage = () => {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);  //autoamtically close the sidebar 
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchedProducts = [
      {
        id: 1,
        name: "Urban Explorer Jacket",
        price: 109,
        size: "M",
        color: "Black",
      
        quantity: 1,
        brand: "Explorer",
        material: "Polyester",
        description: "Durable jacket for all terrains.",
        variants: {
          Black: ["M", "L", "XL"]
        },
        images: [
          { url: "https://i.pinimg.com/736x/49/a9/a8/49a9a8b0253adccc1fb8d078b6244296.jpg" },
          { url: "https://i.pinimg.com/originals/53/24/35/532435aeeaa5c70da8b6fbb0dc23979d.jpg" }
        ]
      },
      {
        id: 2,
        name: "Retro Denim Jacket",
        price: 92,
        size: "L",
        color: "Blue",
        quantity: 1,
        brand: "DenimKing",
        material: "Denim",
        description: "Classic denim jacket in retro style.",
        variants: {
          Blue: ["S", "M", "L"]
        },
        images: [
          { url: "https://i.pinimg.com/736x/f6/0f/16/f60f16a9c8353d5ef7e1bbf9621cc1a0.jpg" },
          { url: "https://i.pinimg.com/originals/a5/ed/84/a5ed84321d1c1bd89d5cbb6f43409720.jpg" }
        ]
      },
      {
        id: 3,
        name: "Storm Shield Bomber",
        price: 115,
        size: "L",
        color: "Grey",
        quantity: 1,
        brand: "StormWear",
        material: "Nylon",
        description: "A sleek bomber for stormy weather.",
        variants: {
          Grey: ["M", "L", "XL"]
        },
        images: [
          { url: "https://i.pinimg.com/originals/df/f9/6c/dff96cd48c623a7516ff5f7e54c65d6a.jpg" },
          { url: "https://i.pinimg.com/736x/31/dd/e6/31dde62e74ec428a0172cc929775f670.jpg" }
        ]
      },
      {
        id: 4,
        name: "Midnight Blazer",
        price: 102,
        size: "M",
        color: "Navy",
        quantity: 1,
        brand: "FormalFit",
        material: "Wool Blend",
        description: "Perfect for evening events or office wear.",
        variants: {
          Navy: ["S", "M", "L"]
        },
        images: [
          { url: "https://i.pinimg.com/736x/fb/fa/38/fbfa38f3a7a103cd58f0035db9a6ac3d.jpg" },
          { url: "https://i.pinimg.com/originals/f2/08/ca/f208ca751f41f154b3e1bf4bb398ac99.jpg" }
        ]
      },
      {
        id: 5,
        name: "Textured Wool Coat",
        price: 138,
        size: "XL",
        color: "Beige",
        quantity: 1,
        brand: "CozyWear",
        material: "Wool",
        description: "Soft textured wool coat for chilly days.",
        variants: {
          Beige: ["M", "L", "XL"]
        },
        images: [
          { url: "https://i.pinimg.com/736x/a6/7e/b4/a67eb4d66125ff4cd6d6ea6de7484278.jpg" },
          { url: "https://i.pinimg.com/originals/7b/79/ee/7b79eeeae23a33057de5eaefc0b8cc00.jpg" }
        ]
      },
      {
        id: 6,
        name: "Vintage Overshirt",
        price: 99,
        size: "L",
        color: "Olive",
        quantity: 1,
        brand: "RetroRoots",
        material: "Cotton",
        description: "Vintage-style overshirt with utility pockets.",
        variants: {
          Olive: ["M", "L"]
        },
        images: [
          { url: "https://i.pinimg.com/originals/7b/79/ee/7b79eeeae23a33057de5eaefc0b8cc00.jpg" },
          { url: "https://i.pinimg.com/736x/f6/0f/16/f60f16a9c8353d5ef7e1bbf9621cc1a0.jpg" }
        ]
      },
      {
        id: 7,
        name: "Linen Short Suit",
        price: 124,
        size: "M",
        color: "Grey",
        quantity: 1,
        brand: "SummerForm",
        material: "Linen",
        description: "Breathable linen suit for casual days.",
        variants: {
          Grey: ["S", "M", "L"]
        },
        images: [
          { url: "https://i.styleoholic.com/2021/04/a-grey-linen-shorts-suit-with-an-oversized-blazer-bermuda-shorts-a-white-crop-top-and-neutral-trainers.jpg" },
          { url: "https://i.pinimg.com/originals/df/f9/6c/dff96cd48c623a7516ff5f7e54c65d6a.jpg" }
        ]
      },
      {
        id: 8,
        name: "Chic Formal Blazer",
        price: 106,
        size: "M",
        color: "Brown",
        quantity: 1,
        brand: "ElegantThreads",
        material: "Wool Blend",
        description: "Formal brown blazer for sleek appearances.",
        variants: {
          Brown: ["M", "L", "XL"]
        },
        images: [
          { url: "https://i.pinimg.com/originals/f2/08/ca/f208ca751f41f154b3e1bf4bb398ac99.jpg" },
          { url: "https://i.pinimg.com/736x/49/a9/a8/49a9a8b0253adccc1fb8d078b6244296.jpg" }
        ]
      }
    ];
    
    setProducts(fetchedProducts);
    localStorage.setItem("allProducts", JSON.stringify(fetchedProducts));
  }, []);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <button onClick={toggleSidebar} className="lg:hidden border p-2 flex justify-center items-center">
        <FaFilter className='mr-2' /> Filters
      </button>

      <div
        ref={sidebarRef}
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>

      <div className='flex-grow p-4'>
        <h2 className='text-2xl uppercase mb-4'>All Collection</h2>
        <SortOptions />
        <ProductGrid products={products} onProductClick={handleProductClick} />
      </div>
    </div>
  );
};

export default Collectionpage;
