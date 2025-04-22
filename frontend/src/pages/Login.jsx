  import React, { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import { FaUser, FaLock } from 'react-icons/fa';


  // ✅ Admin users list
const adminUsers = [
  { name: 'Ayushi Gaur', email: 'ayushi' , password: '123' },
  { name: 'John Admin', email: 'john@admin.com',password: 'admin123' },
  { name: 'Nihal', email: 'nihal@admin.com', password: 'nihal321' }
];


  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
    
      if (!email || !password) {
        alert('Please enter both email and password.');
        return;
      }
    
      //  Admin user

     
      const matchedAdmin = adminUsers.find(
        (user) => user.email === email && user.password === password
      );
  
      if (matchedAdmin) {
        const adminUser = {
          name: matchedAdmin.name,
          email: matchedAdmin.email,
          role: 'admin',
        };
        localStorage.setItem('user', JSON.stringify(adminUser));
        alert('Admin login successful!');
        navigate('/profile');
        return;
      }
  
      // Else, it's a normal customer
      const existingUser = JSON.parse(localStorage.getItem('user'));
    
      if (!existingUser || existingUser.email !== email) {
        alert("User not found. Please register first.");
        return;
      }
    
      localStorage.setItem('user', JSON.stringify({ ...existingUser, email, role: 'customer' }));
      alert('Login successful!');
      navigate('/profile');
    };
    
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-tr from-[#fff1f5] to-[#ffe6f0] font-sans">
        <div className="w-full max-w-3xl bg-white text-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row border border-pink-200 transition-all duration-500">
          <div className="w-full lg:w-1/2 p-8 md:p-10">
            <h2 className="text-3xl font-semibold text-pink-500 mb-2">Welcome Back!</h2>
            <p className="text-sm text-gray-500 mb-6">Access your wardrobe, track orders, and unlock exclusive drops just for you.</p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="relative">
                <FaUser className="absolute left-4 top-3.5 text-gray-400 text-sm" />
                <input type="text" placeholder="Email or Username" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="relative">
                <FaLock className="absolute left-4 top-3.5 text-gray-400 text-sm" />
                <input type="password" placeholder="Password" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 text-white font-semibold py-3 rounded-full shadow-md hover:scale-105 transition-all uppercase text-sm">Sign In</button>
            </form>

            <p className="text-xs mt-4 text-right text-gray-400 hover:underline cursor-pointer">Forgot your password?</p>
            <p className="text-sm text-center mt-6 text-gray-600">Don’t have an account?{' '}<Link to="/register" className="text-pink-500 font-semibold hover:underline">Register here</Link></p>
          </div>

          <div className="hidden lg:flex w-full lg:w-1/2 bg-pink-100 items-center justify-center">
            <img src="https://i.pinimg.com/736x/81/72/b8/8172b86baee412908110813cdec3f9b2.jpg" alt="Scenic" className="w-full h-full object-cover opacity-60" />
          </div>
        </div>
      </div>
    );
  };

  export default Login;
