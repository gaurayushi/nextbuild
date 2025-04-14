import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import PaypalButton from './PaypalButton';

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [email, setEmail] = useState('');

  const { cart, updateQuantity, removeFromCart, clearCart } = useCart(); // ✅ from CartContext

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const [shippingAddress, setShippingAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(Date.now());
  };

  const handlePaymentSuccess = () => {
    const checkout = {
      _id: `ORDER-${Date.now()}`,
      createdAt: new Date().toISOString(),
      totalPrice,
      items: cart,
      shippingAddress,
      paymentMethod: 'PayPal',
    };

    const previousOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const updatedOrders = [...previousOrders, checkout];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    clearCart(); // ✅ Clear cart after order success
    navigate('/order-success', { state: { checkout } });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto py-10 px-6">
      {/* Shipping Form */}
      <motion.div
        className="bg-white rounded-2xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleCreateCheckout}>
          <input
            type="email"
            name="email"
            placeholder="user@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            required
          />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={shippingAddress.firstName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={shippingAddress.lastName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={shippingAddress.address}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            required
          />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingAddress.city}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={shippingAddress.postalCode}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={shippingAddress.country}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mb-6"
            required
          />

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md w-full font-medium tracking-wide"
          >
            Place Order
          </button>
        </form>
      </motion.div>

      {/* Cart Summary */}
      <motion.div
        className="bg-white rounded-2xl p-8 shadow-lg h-fit"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h3>

        {cart.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-start mb-5 p-3 rounded-lg hover:bg-pink-50 transition"
            whileHover={{ scale: 1.015 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded border mr-4"
            />
            <div className="flex-1">
              <h4 className="text-base font-semibold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-600">Color: {item.color}</p>
              <p className="text-sm text-gray-600">Size: {item.size}</p>
              <p className="text-sm text-gray-500">${item.price}</p>

              {/* Quantity controls */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  className="px-2 border rounded"
                  onClick={() =>
                    updateQuantity(item.productId, item.color, item.size, Math.max(1, item.quantity - 1))
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-2 border rounded"
                  onClick={() =>
                    updateQuantity(item.productId, item.color, item.size, item.quantity + 1)
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    removeFromCart(item.productId, item.color, item.size)
                  }
                  className="ml-2 text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>

            <p className="text-sm font-semibold text-gray-700">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </motion.div>
        ))}

        <div className="border-t mt-6 pt-4 text-right text-xl font-bold text-pink-600">
          Total: ${totalPrice.toFixed(2)}
        </div>

        <div className="mt-6">
          {checkoutId && (
            <PaypalButton
              amount={totalPrice}
              onSuccess={handlePaymentSuccess}
              onError={() => alert('Payment failed')}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Checkout;
