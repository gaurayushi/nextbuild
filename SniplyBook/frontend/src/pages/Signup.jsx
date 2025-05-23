
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
import AuthLayout from './AuthLayout';
import RightPanel from './RightPanel';
import api from '../api/axios';
import { setToken } from '../utils/auth';
import { notifySuccess } from '../utils/toastify';
import handleError from '../utils/handleError';

export default function Signup() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [pwd, setPwd]         = useState('');
  const [show, setShow]       = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const navigate = useNavigate();

  // Real-time strength checks
  const checks = useMemo(() => ({
    length:    pwd.length >= 8,
    uppercase: /[A-Z]/.test(pwd),
    lowercase: /[a-z]/.test(pwd),
    number:    /[0-9!@#\$%\^&\*]/.test(pwd)
  }), [pwd]);

  async function submit(e) {
    e.preventDefault();
    if (!Object.values(checks).every(Boolean)) {
      return notifySuccess('Please meet all password criteria');
    }
    try {
      const { data } = await api.post('/auth/signup', {
        email,
        password: pwd
      });
      setToken(data.token);
      notifySuccess('Account created!');
      navigate('/login');
    } catch (err) {
      handleError(err);
    }
  }

  const leftForm = (
    <div className="relative w-full max-w-md mx-auto">
      {/* Back arrow */}
      <AiOutlineArrowLeft
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-gray-600 text-xl cursor-pointer"
      />
      {/* Sign-in link */}
      <div className="absolute top-4 right-4 text-sm">
        Already a member?{' '}
        <Link to="/login" className="text-blue-600 hover:underline">
          Sign in
        </Link>
      </div>

      <form
        onSubmit={submit}
        className="mt-8 bg-white/70 backdrop-blur-md rounded-tr-[4rem] rounded-br-[4rem] shadow-lg px-6 py-8 space-y-4"
      >
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>

        {/* Name */}
        <div className="flex items-center border-b border-gray-300 py-2">
          <AiOutlineUser className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Name"
            className="flex-1 bg-transparent focus:outline-none py-1"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          {name && <AiOutlineCheck className="text-green-500 ml-2" />}
        </div>

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
          {email && <AiOutlineCheck className="text-green-500 ml-2" />}
        </div>

        {/* Password */}
        <div className="relative">
          <div className="flex items-center border-b border-gray-300 py-2">
            <AiOutlineLock className="text-gray-500 mr-2" />
            <input
              type={show ? 'text' : 'password'}
              placeholder="Password"
              className="flex-1 bg-transparent focus:outline-none py-1"
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              onFocus={() => setPwFocus(true)}
              onBlur={() => setPwFocus(false)}
              required
            />
            <AiOutlineEye
              onClick={() => setShow(s => !s)}
              className="text-gray-500 ml-2 cursor-pointer"
            />
          </div>

          {/* Password criteria */}
          {(pwFocus || pwd.length > 0) && (
            <ul className="mt-2 text-xs space-y-1 pl-6 text-gray-700">
              {[
                ['At least 8 characters',   checks.length],
                ['An uppercase letter',      checks.uppercase],
                ['A lowercase letter',       checks.lowercase],
                ['A number or symbol',       checks.number]
              ].map(([label, ok]) => (
                <li key={label} className="flex items-center">
                  <AiOutlineCheck
                    className={`mr-2 transition-opacity duration-200 ${
                      ok ? 'opacity-100 text-green-600' : 'opacity-20'
                    }`}
                  />
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>
 
          {/* Sign up link moved here */}
                 <p className="text-center text-sm text-gray-600">
                   Don’t have an account?{' '}
                   <Link to="/login" className="text-blue-600 hover:underline">
                     Sign in
                   </Link>
                 </p>
        {/* Sign Up button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  );

  return <AuthLayout left={leftForm} right={<RightPanel />} />;
}
