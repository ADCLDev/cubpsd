'use client';

import React from 'react';
import { MdEmail, MdLogin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const SecondaryBar = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-6">
            <a
              href="tel:01886349919"
              className="flex items-center text-black hover:text-[#A93226] transition duration-300"
            >
              <FaPhoneAlt className="mr-2" />
              <span className="text-sm font-semibold hidden lg:flex">01974955226</span>
            </a>
            <a
              href="mailto:dilal328@gmail.com"
              className="flex items-center text-black hover:text-[#A93226] transition duration-300"
            >
              <MdEmail className="mr-2" />
              <span className="text-sm font-semibold hidden lg:flex">contact@cubspdc.com</span>
            </a>
          </div>
          <div className="flex items-center justify-end">
            {/* Mobile Login Icon */}
            <a
              href="/login"
              className="lg:hidden flex items-center text-black hover:text-[#A93226] transition duration-300"
            >
              <MdLogin className="text-2xl" />
            </a>
            
            {/* Desktop Login Button */}
            <a
              href="/login"
              className="bg-black text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-slate-700 transition duration-300 hidden lg:flex"
            >
              <button className="flex text-md font-semibold text-white">
                <span className="text-xl">
                  <MdLogin />
                </span>
                <span className="px-1">
                  Login
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryBar;