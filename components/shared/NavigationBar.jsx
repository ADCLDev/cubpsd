'use client';

import React from 'react';
import { IoBookOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { MdLogin } from "react-icons/md";
import { FaMoneyBillWave, FaMobileAlt, FaUniversity, FaCreditCard } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const NavigationBar = () => {
  const router = useRouter();
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  const paymentMethods = [
    { id: 'bkash', name: 'bKash', icon: <FaMobileAlt className="text-pink-600 text-2xl" /> },
    { id: 'nagad', name: 'Nagad', icon: <FaMobileAlt className="text-orange-600 text-2xl" /> },
    { id: 'upay', name: 'Upay', icon: <FaMobileAlt className="text-purple-600 text-2xl" /> },
    { id: 'card', name: 'Card Payment', icon: <FaCreditCard className="text-blue-600 text-2xl" /> },
    { id: 'bank', name: 'Bank Transfer', icon: <FaUniversity className="text-gray-600 text-2xl" /> },
  ];

  const handlePaymentSelect = (methodId) => {
    window.location.reload();
  };

  return (
    <>
      <div className="bg-[#a50d35] font-bold text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="w-full navbar px-0">
                {/* Left Logo */}
                <Link href='/'>
                  <div className="w-24 md:w-32">
                    <img src='/logo.svg' alt="Left Logo" className="w-full h-auto" />
                  </div>
                </Link>

                {/* Mobile Menu Button */}
                <div className="flex-1 justify-end md:hidden">
                  <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </label>
                </div>

                {/* Desktop Menu - Centered */}
                <div className="hidden md:flex flex-1 justify-center">
      <ul className="flex items-center gap-6 text-base">
        <li>
          <Link href="/" className="text-white hover:text-yellow-200 transition-colors">
            Home
          </Link>
        </li>
        
        {/* About Dropdown - Enhanced */}
        <li className="relative group">
          <span className="text-white hover:text-yellow-200 cursor-pointer transition-colors py-2 inline-block">
            About Us
          </span>
          <ul className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 left-0 top-full mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
            <li>
              <Link href="/about_us" className="block px-4 py-3 text-red-700 hover:bg-gray-50">
                Mission and Vision
              </Link>
            </li>
            <li>
              <Link href="/meet_our_team" className="block px-4 py-3 text-red-700 hover:bg-gray-50">
                Meet our Team
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/learning_path" className="text-white hover:text-yellow-200 transition-colors">
            Learning Paths
          </Link>
        </li>

        {/* Work Placement Dropdown - Enhanced */}
        <li className="relative group">
          <span className="text-white hover:text-yellow-200 cursor-pointer transition-colors py-2 inline-block">
            Work Placement
          </span>
          <ul className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 left-0 top-full mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
            <li>
              <Link href="/job_placement" className="block px-4 py-3 text-red-700 hover:bg-gray-50">
                Internship
              </Link>
            </li>
            <li>
              <Link href="/job_placement" className="block px-4 py-3 text-red-700 hover:bg-gray-50">
                Job Placement
              </Link>
            </li>
            <li>
              <Link href="/freelancing" className="block px-4 py-3 text-red-700 hover:bg-gray-50">
                Freelancing
              </Link>
            </li>
            <li>
              <Link href="/career_advice" className="block px-4 py-3 text-red-700 hover:bg-gray-50">
                Career Advice
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/contact_us" className="text-white hover:text-yellow-200 transition-colors">
            Contact Us
          </Link>
        </li>

        <li>
          <button 
            onClick={() => router.push("/category/all")}
            className="flex items-center gap-2 px-4 py-2 bg-white text-red-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            <IoBookOutline />
            Courses
          </button>
        </li>

        <li>
          <button 
            onClick={() => router.push("/pgd")}
            className="flex items-center gap-2 px-4 py-2 bg-white text-red-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            <IoBookOutline />
            PGD
          </button>
        </li>
      </ul>
    </div>

                {/* Right Logo */}
                <Link href="https://www.cub.edu.bd/">
                  <div className="w-24 md:w-32">
                    <img src='/cub-logo-w.svg' alt="Right Logo" className="w-full h-auto" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Mobile Sidebar - Keep existing code */}
            <div className="drawer-side">
              <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
              <div className="w-80 min-h-full bg-gradient-to-r from-red-500 via-red-600 to-red-800">
                <ul className="menu p-4 text-white">
                  <li><Link href="/" className="hover:text-yellow-200">Home</Link></li>
                  <li><Link href="/about_us" className="hover:text-yellow-200">Mission and Vision</Link></li>
                  <li><Link href="/meet_our_team" className="hover:text-yellow-200">Meet our Team</Link></li>
                  <li><Link href="/learning_path" className="hover:text-yellow-200">Learning Paths</Link></li>
                  <li><Link href="/job_placement" className="hover:text-yellow-200">Job Placement</Link></li>
                  <li><Link href="/freelancing" className="hover:text-yellow-200">Freelancing</Link></li>
                  <li><Link href="/career_advice" className="hover:text-yellow-200">Career Advice</Link></li>
                  <li><Link href="/contact_us" className="hover:text-yellow-200">Contact Us</Link></li>
                  
                  <div className="mt-4 space-y-2">
                    <li>
                      <button 
                        onClick={() => router.push("/category/all")} 
                        className="w-full bg-white text-red-600 rounded-lg flex items-center gap-2 hover:bg-gray-50"
                      >
                        <IoBookOutline className="text-xl" />
                        Browse SKill Courses
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => router.push("/category/all")} 
                        className="w-full bg-white text-red-600 rounded-lg flex items-center gap-2 hover:bg-gray-50"
                      >
                        <IoBookOutline className="text-xl" />
                        Browse PGD Courses
                      </button>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal - Keep existing code */}
      {openPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Select Payment Method</h3>
              <button 
                onClick={() => setOpenPaymentModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => handlePaymentSelect(method.id)}
                  className="p-4 border rounded-lg cursor-pointer flex items-center space-x-3 transition-colors hover:bg-gray-50 hover:border-blue-500"
                >
                  {method.icon}
                  <span className="font-medium">{method.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setOpenPaymentModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationBar;