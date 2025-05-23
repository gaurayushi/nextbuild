import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  AiOutlineArrowLeft,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye
} from 'react-icons/ai';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

import api from '../api/axios';
import { setToken } from '../utils/auth';
import { notifySuccess } from '../utils/toastify';
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
      notifySuccess('Logged in successfully!');
      nav('/dashboard');
    } catch (err) {
      handleError(err);
    }
  }

  const leftForm = (
    <div className="relative w-full max-w-md mx-auto">
      {/* Back arrow */}
      <AiOutlineArrowLeft
        onClick={goBack}
        className="absolute top-4 left-4 text-gray-600 text-xl cursor-pointer"
      />

      <form onSubmit={submit} className="mt-8 bg-white/70 backdrop-blur-md rounded-tr-[4rem] rounded-br-[4rem] shadow-lg px-6 py-8 space-y-4">
        <h2 className="text-3xl font-bold text-center">Login</h2>
        <p className="text-gray-500 text-sm text-center">Securely access your account</p>

        {/* Email */}
        <div className="flex items-center border-b border-gray-300 py-2">
          <AiOutlineMail className="text-gray-500 mr-2" />
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-transparent focus:outline-none py-1"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="relative flex items-center border-b border-gray-300 py-2">
          <AiOutlineLock className="text-gray-500 mr-2" />
          <input
            type={show ? 'text' : 'password'}
            placeholder="Password"
            className="flex-1 bg-transparent focus:outline-none py-1"
            value={pwd}
            onChange={e => setPwd(e.target.value)}
            required
          />
          <AiOutlineEye
            onClick={() => setShow(s => !s)}
            className="text-gray-500 ml-2 cursor-pointer"
          />
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-full"
        >
          Log In
        </button>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        {/* Or separator */}
        <div className="flex items-center text-gray-400 space-x-2">
          <div className="h-px flex-grow bg-gray-300" />
          <span className="text-sm">Or login with</span>
          <div className="h-px flex-grow bg-gray-300" />
        </div>

        {/* Social login */}
        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="p-2 bg-white rounded-full shadow-md"
          >
            <FaFacebookF className="text-blue-600" />
          </button>
          <button
            type="button"
            className="p-2 bg-white rounded-full shadow-md"
          >
            <FaGoogle className="text-red-500" />
          </button>
        </div>
      </form>
    </div>
  );

  return <AuthLayout left={leftForm} right={<RightPanel />} />;
}
