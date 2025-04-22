//it used for showing the cart items 


import React from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartContents = ({ hideCheckoutButton = false }) => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate(); 

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="space-y-4">
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product, index) => (
            <div
              key={index}
              className="flex items-start gap-4 py-4 border-b border-gray-200"
            >
              <div className="flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover rounded-md border"
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">{product.name}</h3>
                    <p className="text-sm text-gray-500">
                      Size: {product.size} | Color: {product.color}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.productId, product.color, product.size)}
                    className="text-black hover:opacity-60 transition"
                  >
                    <RiDeleteBin3Line className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <button
                      className="border rounded px-2 py-1 text-base font-medium"
                      onClick={() =>
                        updateQuantity(
                          product.productId,
                          product.color,
                          product.size,
                          Math.max(1, product.quantity - 1)
                        )
                      }
                    >
                      -
                    </button>
                    <span className="text-sm">{product.quantity}</span>
                    <button
                      className="border rounded px-2 py-1 text-base font-medium"
                      onClick={() =>
                        updateQuantity(
                          product.productId,
                          product.color,
                          product.size,
                          product.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-800 font-semibold text-sm">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* ✅ Show this only if not hidden */}
          {!hideCheckoutButton && (
            <div className="text-right mt-6">
              <p className="text-lg font-semibold mb-2">
                Total: ${totalPrice.toFixed(2)}
              </p>
              <button
                onClick={() => navigate('/checkout')}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Checkout
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CartContents;
