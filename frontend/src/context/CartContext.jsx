import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find(
        (p) =>
          p.productId === item.productId &&
          p.color === item.color &&
          p.size === item.size
      );
      if (exists) {
        return prev.map((p) =>
          p.productId === item.productId &&
          p.color === item.color &&
          p.size === item.size
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      } else {
        return [...prev, item];
      }
    });
  };

  const removeFromCart = (productId, color, size) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.color === color &&
            item.size === size
          )
      )
    );
  };

  const updateQuantity = (productId, color, size, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId &&
        item.color === color &&
        item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
