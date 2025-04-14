
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import CartContents from '../Cart/CartContents';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    toggleCartDrawer(); // close drawer first
    navigate('/checkout');
  };

  return (
    <div
      className={`
        fixed top-0 right-0 h-full w-3/4 sm:w-1/2 md:w-1/3 bg-white shadow-lg 
        transform transition-transform duration-300 z-50 flex flex-col 
        ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600 hover:text-black" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="px-6 py-4 overflow-y-auto flex-1">
        <CartContents hideCheckoutButton /> {/* 👈 prevent duplicate checkout buttons */}
      </div>

      {/* Footer */}
      <div className='p-4 border-t bg-white'>
        <button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition"
        >
          Proceed to Checkout
        </button>
        <p className='text-xs text-gray-500 mt-2 text-center'>
          Shipping, taxes & discounts calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
