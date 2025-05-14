import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyOrderpage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const timer = setTimeout(() => {
      const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];

      const filteredOrders =
        user?.role === 'admin'
          ? savedOrders
          : savedOrders.filter((order) => order.shippingAddress?.email === user?.email);

      setOrders(filteredOrders.reverse());
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [user]);

  const handleClick = (order) => {
    navigate(`/order/${order._id}`, { state: { order } });
  };

  const totalRevenue = orders.reduce((sum, order) => sum + Number(order.totalPrice || 0), 0);
  const totalProducts = orders.reduce((sum, order) => {
    return sum + (order.items?.reduce((count, item) => count + item.quantity, 0) || 0);
  }, 0);

  return (
    <div className="w-full font-sans">
      <h2 className="text-2xl font-bold text-pink-500 mb-4">
        {user?.role === 'admin' ? ' ' : 'My Orders'}
      </h2>

      {loading ? (
        <p className="text-sm text-gray-500">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-sm text-gray-500">No orders found.</p>
      ) : (
        <>
          {user?.role === 'admin' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-pink-100 text-center">
                <p className="text-xs text-gray-500">Total Orders</p>
                <p className="text-lg font-bold text-pink-500">{orders.length}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-pink-100 text-center">
                <p className="text-xs text-gray-500">Total Revenue</p>
                <p className="text-lg font-bold text-pink-500">${totalRevenue.toFixed(2)}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-pink-100 text-center">
                <p className="text-xs text-gray-500">Total Products</p>
                <p className="text-lg font-bold text-pink-500">{totalProducts}</p>
              </div>
            </div>
          )}

          {/* Order Cards */}
          <div className="space-y-6">
            {orders.map((order, index) => (
              <div
                key={index}
                onClick={() => handleClick(order)}
                className="cursor-pointer bg-white rounded-2xl shadow-lg p-5 border border-pink-100 hover:shadow-pink-200 transition duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div>
                    <p><strong>Order ID:</strong> {order._id}</p>
                    <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                    {user?.role === 'admin' && (
                      <p><strong>User:</strong> {order.shippingAddress?.email}</p>
                    )}
                  </div>
                  <div>
                    <p><strong>Shipping:</strong> {order.shippingAddress?.city}, {order.shippingAddress?.country}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  {order.items?.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md shadow-sm">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover border" />
                      <div>
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                  {order.items.length > 2 && (
                    <p className="text-sm text-gray-400 mt-2">+ {order.items.length - 2} more</p>
                  )}
                </div>

                <div className="flex justify-between items-center text-sm text-gray-700 border-t pt-4">
                  <p><strong>Total:</strong> ${order.totalPrice.toFixed(2)}</p>
                  <p><strong>Payment:</strong> <span className="text-green-600 font-medium">{order.paymentMethod || 'N/A'}</span></p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyOrderpage;
