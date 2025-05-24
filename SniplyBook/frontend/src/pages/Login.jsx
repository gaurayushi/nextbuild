import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  AiOutlineArrowLeft,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye
} from 'react-icons/ai';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';

import api from '../api/axios';
import { setToken } from '../utils/auth';
import { notifySuccess, notifyError } from '../utils/toastify';
import handleError from '../utils/handleError';
import AuthLayout from './AuthLayout';
import RightPanel from './RightPanel';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [show, setShow] = useState(false);
  const nav = useNavigate();

  const goBack = () => nav(-1);

  async function submit(e) {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/login', {
        email,
        password: pwd
      });
      setToken(data.token);
      notifySuccess('🎉 Logged in successfully!');
      nav('/dashboard');
    } catch (err) {
      handleError(err);
      notifyError('Login failed. Please check your credentials.');
    }
  }

  const leftForm = (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <AiOutlineArrowLeft
        onClick={goBack}
        className="absolute top-4 left-4 text-gray-600 text-xl cursor-pointer z-10"
      />

      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-gradient-to-br from-white/30 to-blue-100/30 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl px-10 py-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h2>
        <p className="text-sm text-center text-gray-500">Securely access your account</p>

        {/* Email */}
        <div className="flex items-center border-b border-gray-300 py-2">
          <AiOutlineMail className="text-gray-500 mr-2" />
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-transparent outline-none text-sm text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="relative flex items-center border-b border-gray-300 py-2">
          <AiOutlineLock className="text-gray-500 mr-2" />
          <input
            type={show ? 'text' : 'password'}
            placeholder="Password"
            className="flex-1 bg-transparent outline-none text-sm text-gray-800"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required
          />
          <AiOutlineEye
            onClick={() => setShow(!show)}
            className="text-gray-500 ml-2 cursor-pointer"
          />
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 rounded-full shadow-md hover:scale-105 transition"
        >
          Log In
        </button>

        {/* Sign up */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-indigo-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center text-gray-400 gap-3">
          <div className="h-px flex-grow bg-gray-300" />
          <span className="text-sm">Or login with</span>
          <div className="h-px flex-grow bg-gray-300" />
        </div>

        {/* Social login */}
        <div className="flex justify-center gap-4">
          <button type="button" className="p-2 bg-white rounded-full shadow-md hover:scale-105 transition">
            <FaFacebookF className="text-blue-600" />
          </button>
          <button type="button" className="p-2 bg-white rounded-full shadow-md hover:scale-105 transition">
            <FaGoogle className="text-red-500" />
          </button>
        </div>
      </motion.form>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-purple-500">
      <AuthLayout left={leftForm} right={<RightPanel />} />
    </div>
  );
}
