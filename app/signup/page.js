'use client';
import { useState } from 'react';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { signup } from '@/utils/api';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(name, email, password);
      // Handle successful signup response
      setIsSuccess(true);
      setMessage('User created successfully!');
      // router.push('/'); // Uncomment this line if you want to redirect after successful signup
    } catch (error) {
      // Handle signup error
      console.log('error: ', error)
      setErrors(error)
      setIsSuccess(false);
      setMessage('Failed to create user');
    }
  };
//   const router = useRouter();


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500"
    >
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
      {message && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`mb-4 p-4 rounded-md ${
              isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {message}
          </motion.div>
        )}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-indigo-600"
        >
          Sign up
        </motion.h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
              Name
            </label>
            <motion.input
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              type="text"
              id="name"
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-indigo-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name[0]}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
              Email
            </label>
            <motion.input
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              type="email"
              id="email"
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email[0]}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-bold text-gray-700">
              Password
            </label>
            <motion.input
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              type="password"
              id="password"
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className="text-red-500 mt-1">{errors.password[0]}</p>}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-3 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Sign up
          </motion.button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link href="/login">
            <button className="text-indigo-500 hover:text-indigo-600">Login</button>
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Signup;