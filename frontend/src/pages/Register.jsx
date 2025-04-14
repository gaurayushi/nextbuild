import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaUser, FaLock } from 'react-icons/fa';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    const user = { name, email, createdAt: new Date().toISOString(), };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful!");
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 from-[#fff1f5] to-[#ffe6f0] font-sans">
      <div className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row transition-all duration-500 border border-pink-200">
        <div className="w-full lg:w-1/2 p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-pink-500 mb-2">Create Your Account</h2>
          <p className="text-sm text-gray-500 mb-6">Sign up to join Rabbit and enjoy exclusive fashion picks curated just for you.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <FaUser className="absolute left-4 top-3.5 text-gray-400 text-sm" />
              <input type="text" placeholder="Full Name" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-3.5 text-gray-400 text-sm" />
              <input type="email" placeholder="Email Address" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="relative">
              <FaLock className="absolute left-4 top-3.5 text-gray-400 text-sm" />
              <input type="password" placeholder="Password" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 text-white font-semibold py-3 rounded-full shadow-md hover:scale-105 transition-all uppercase text-sm">Sign Up</button>
          </form>

          <p className="text-sm text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-pink-500 font-semibold hover:underline transition">Login here</Link>
          </p>
        </div>

        <div className="w-full lg:w-1/2 bg-pink-100 relative hidden lg:flex items-center justify-center">
          <img src="https://i.pinimg.com/736x/e6/fa/d7/e6fad72c32bb51656ad24a44175799f2.jpg" alt="Scenic" className="w-full h-full object-cover opacity-60" />
        </div>
      </div>
    </div>
  );
};

export default Register;
