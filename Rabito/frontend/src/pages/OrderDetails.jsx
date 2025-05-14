import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaArrowLeft } from 'react-icons/fa';

const OrderDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const order = state?.order;

  const [status, setStatus] = useState(order?.status || 'pending');

  if (!order) {
    return (
      <div className="p-6 text-gray-500">
        No order found.{' '}
        <button className="text-pink-500 underline" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this order?");
    if (!confirm) return;

    const prevOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = prevOrders.filter((o) => o._id !== order._id);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    alert("Order deleted successfully!");
    navigate("/profile");
  };

  const handleStatusUpdate = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);

    const prevOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = prevOrders.map((o) =>
      o._id === order._id ? { ...o, status: newStatus } : o
    );
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Header with Delete */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-pink-600">Order Details</h2>
        <button
          onClick={handleDelete}
          className="flex items-center gap-2 text-red-500 hover:text-red-600 border border-red-300 px-3 py-1.5 rounded-full text-sm shadow-sm transition"
        >
          <RiDeleteBin6Line className="text-lg" />
          Delete Order
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100 space-y-6">
        {/* Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Placed On:</strong> {new Date(order.createdAt).toLocaleString()}</p>
          <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
          <p><strong>Total:</strong> <span className="text-pink-600 font-medium">${order.totalPrice.toFixed(2)}</span></p>
          <div>
            <label className="font-semibold">Status:</label>
            <select
              value={status}
              onChange={handleStatusUpdate}
              className="ml-2 border border-gray-300 px-2 py-1 rounded text-sm"
            >
              <option value="pending">Pending</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Shipping */}
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Shipping Address</h3>
          <div className="text-sm text-gray-600 leading-5">
            <p>{order.shippingAddress?.firstName} {order.shippingAddress?.lastName}</p>
            <p>{order.shippingAddress?.address}</p>
            <p>{order.shippingAddress?.city}, {order.shippingAddress?.postalCode}, {order.shippingAddress?.country}</p>
          </div>
        </div>

        {/* Items */}
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-3">Products</h3>
          <div className="space-y-3">
            {order.items?.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center bg-gray-50 p-3 rounded-lg hover:shadow-sm transition">
                <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded border" />
                <div className="text-sm">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-500">Size: {item.size}, Color: {item.color}</p>
                  <p className="text-xs text-gray-500">
                    Qty: {item.quantity} × ${item.price} ={' '}
                    <span className="text-pink-600 font-medium">${item.price * item.quantity}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mt-6 flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-md transition"
      >
        <FaArrowLeft className="text-sm" />
        Back to Orders
      </button>
    </div>
  );
};

export default OrderDetails;
