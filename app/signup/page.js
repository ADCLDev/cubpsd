'use client';
import { useState } from 'react'; 
import Link from 'next/link';
import { motion } from 'framer-motion';
import { signup } from '../../utils/api';
import { useRouter } from 'next/navigation';
import { User, Lock, ArrowRight, Loader2, Mail } from 'lucide-react';

const Signup = () => {
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await signup(studentId, email, password);
      router.push('/login');
    } catch (error) {
      setError('Error signing up. Please try again.');
      console.error('Signup failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-[#BE1E2D]/5 to-[#fdf1f3]/50 z-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -20 }}
        className="max-w-md w-full mx-4 relative z-10"
      >
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          {/* Logo or Brand */}  
          <div className="text-center mb-8">
            <motion.h2
              initial={{ y: -20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}  
              className="text-2xl md:text-3xl font-bold text-gray-800"
            >
              Create an Account  
            </motion.h2>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 p-3 rounded-lg bg-red-100 text-red-600 text-sm"  
            >
              {error}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Student ID
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />  
                <motion.input
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#BE1E2D] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your student ID"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  required
                />
              </div>  
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <motion.input
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#BE1E2D] focus:border-transparent outline-none transition-all"  
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>  
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password  
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <motion.input
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ delay: 0.4 }}
                  type="password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#BE1E2D] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your password"  
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required  
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              disabled={isLoading}
              className={`
                w-full py-3 px-4 rounded-lg  
                flex items-center justify-center gap-2
                bg-[#BE1E2D] hover:bg-[#9e1825]  
                text-white font-medium
                transition-all duration-200
                ${isLoading ? 'opacity-90 cursor-not-allowed' : ''}  
              `}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />  
              ) : (
                <>
                  Sign Up
                  <ArrowRight className="w-5 h-5" />
                </> 
              )}
            </motion.button>
          </form>

          {/* Login Link */}
          <p className="mt-8 text-center text-gray-600">  
            Already have an account?{' '} 
            <Link
              href="/login"
              className="text-[#BE1E2D] hover:text-[#9e1825] font-medium transition-colors"
            >
              Sign in  
            </Link>
          </p>
        </div>
      </motion.div> 
    </div>
  );
};

export default Signup;