import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AiOutlineArrowLeft,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineCheck
} from 'react-icons/ai';
import { motion } from 'framer-motion';

import AuthLayout from './AuthLayout';
import RightPanel from './RightPanel';
import api from '../api/axios';
import { setToken } from '../utils/auth';
import { notifySuccess, notifyError } from '../utils/toastify';
import handleError from '../utils/handleError';

export default function Signup() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [pwd, setPwd]         = useState('');
  const [show, setShow]       = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const navigate = useNavigate();

  const checks = useMemo(() => ({
    length: pwd.length >= 8,
    uppercase: /[A-Z]/.test(pwd),
    lowercase: /[a-z]/.test(pwd),
    number: /[0-9!@#\$%\^&\*]/.test(pwd)
  }), [pwd]);

  async function submit(e) {
    e.preventDefault();
    if (!Object.values(checks).every(Boolean)) {
      return notifyError('⚠️ Please meet all password criteria');
    }

    try {
      const { data } = await api.post('/auth/signup', {
        name,
        email,
        password: pwd
      });
      setToken(data.token);
      notifySuccess('🎉 Account created successfully!');
      navigate('/login');
    } catch (err) {
      handleError(err);
      notifyError('Signup failed. Please try again.');
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
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-gray-600 text-xl cursor-pointer z-10"
      />

      {/* Glassy signup box */}
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-gradient-to-br from-white/30 to-blue-100/30 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl px-10 py-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Create Account</h2>
        <p className="text-center text-sm text-gray-600">Join us today — it's quick and easy</p>

        {/* Name input */}
        <div className="flex items-center border-b border-gray-300 py-2">
          <AiOutlineUser className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Name"
            className="flex-1 bg-transparent outline-none text-sm text-gray-800"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          {name && <AiOutlineCheck className="text-green-500 ml-2" />}
        </div>

        {/* Email input */}
        <div className="flex items-center border-b border-gray-300 py-2">
          <AiOutlineMail className="text-gray-500 mr-2" />
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-transparent outline-none text-sm text-gray-800"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          {email && <AiOutlineCheck className="text-green-500 ml-2" />}
        </div>

        {/* Password input */}
        <div className="relative">
          <div className="flex items-center border-b border-gray-300 py-2">
            <AiOutlineLock className="text-gray-500 mr-2" />
            <input
              type={show ? 'text' : 'password'}
              placeholder="Password"
              className="flex-1 bg-transparent outline-none text-sm text-gray-800"
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              onFocus={() => setPwFocus(true)}
              onBlur={() => setPwFocus(false)}
              required
            />
            <AiOutlineEye
              onClick={() => setShow(!show)}
              className="text-gray-500 ml-2 cursor-pointer"
            />
          </div>

          {/* Password rules */}
          {(pwFocus || pwd.length > 0) && (
            <ul className="mt-2 text-xs space-y-1 pl-6 text-gray-700">
              {[
                ['At least 8 characters',   checks.length],
                ['An uppercase letter',     checks.uppercase],
                ['A lowercase letter',      checks.lowercase],
                ['A number or symbol',      checks.number]
              ].map(([label, valid]) => (
                <li key={label} className="flex items-center">
                  <AiOutlineCheck
                    className={`mr-2 transition-opacity duration-200 ${
                      valid ? 'opacity-100 text-green-600' : 'opacity-30'
                    }`}
                  />
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 rounded-full shadow-md hover:scale-105 transition"
        >
          Sign Up
        </button>

        {/* Already registered */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </motion.form>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-purple-500">
      <AuthLayout left={leftForm} right={<RightPanel />} />
    </div>
  );
}
