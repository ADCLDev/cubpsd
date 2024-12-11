'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { login } from '@/utils/api';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await login(email, password);
    // Handle successful login response
    console.log('response', response);
    // Store the token in localStorage or a cookie
    localStorage.setItem('token', response.token);
    // Redirect to the dashboard or desired page
    router.push(`/dashboard/${response.user_id}`);
  } catch (error) {
    // Handle login error
    console.error('Login failed:', error);
  }
};


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500"
    >
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-indigo-600"
        >
          Login
        </motion.h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
              Email
            </label>
            <motion.input
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              type="email"
              id="email"
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-bold text-gray-700">
              Password
            </label>
            <motion.input
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              type="password"
              id="password"
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
            <motion.button
              onSubmit={handleSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-3 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Login
            </motion.button>
          
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link href="/signup">
            <button className="text-indigo-500 hover:text-indigo-600">Sign up</button>
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;