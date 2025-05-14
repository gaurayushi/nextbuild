import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from 'sonner';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Collectionpage from './pages/Collectionpage';
import ProductDetails from './components/Product/ProductDetails';
import Checkout from './components/Cart/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderDetails from './pages/OrderDetails'; // ✅ Import the page
import { CartProvider } from './context/CartContext'; // ✅


const App = () => {
  return (
    <CartProvider>    
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/order/:id" element={<OrderDetails />} /> 

        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collection/:collection" element={<Collectionpage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-success" element={<OrderConfirmationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
};

export default App;
