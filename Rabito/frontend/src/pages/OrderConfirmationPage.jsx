import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const checkout = location.state?.checkout;

  if (!checkout) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">No Order Found</h2>
        <p className="text-gray-500 mb-6">Please place an order to view the confirmation page.</p>
        <Link
          to="/"
          className="text-pink-600 hover:text-pink-700 inline-flex items-center gap-2 font-medium"
        >
          <Home className="w-5 h-5" /> Go to Home
        </Link>
      </div>
    );
  }

  const deliveryEstimate = new Date();
  deliveryEstimate.setDate(deliveryEstimate.getDate() + 5);

  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        {/* Header */}
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">Thank You for Your Order!</h1>

        {/* Order Overview */}
        <div className="flex justify-between mb-6 text-sm text-gray-600">
          <div>
            <p><strong>Order ID:</strong> {checkout._id}</p>
            <p><strong>Order Date:</strong> {new Date(checkout.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="text-right">
            <p><strong>Estimated Delivery:</strong></p>
            <p>{deliveryEstimate.toLocaleDateString()}</p>
          </div>
        </div>

        {/* Items */}
        <div className="border rounded-lg mb-6">
          {checkout.items?.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border-b last:border-b-0">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded border"
                />
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-700">${item.price * item.quantity}</div>
            </div>
          ))}
        </div>

        {/* Payment & Delivery Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-md border">
            <h4 className="text-gray-800 font-semibold mb-2">Payment</h4>
            <p className="text-gray-600">PayPal</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md border">
            <h4 className="text-gray-800 font-semibold mb-2">Delivery</h4>
            <p className="text-gray-600">
              {checkout?.shippingAddress?.address}<br />
              {checkout?.shippingAddress?.city}, {checkout?.shippingAddress?.country}
            </p>
          </div>
        </div>

        {/* Total */}
        <div className="text-right text-xl font-bold text-pink-600 mb-10">
          Total Paid: ${checkout.totalPrice}
        </div>

        {/* Go Back Button */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-md transition-all"
          >
            <Home className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
