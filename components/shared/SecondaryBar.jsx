'use client';

import React from 'react';
import { MdEmail, MdLogin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';

const SecondaryBar = () => {
  return (
    <div className="bg-white text-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Left Side - Phone & Email */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a
              href="tel:01974955226"
              className="flex items-center text-black hover:text-[#A93226] transition duration-300"
            >
              <FaPhoneAlt className="text-sm" />
              <span className="ml-2 text-sm font-semibold hidden lg:inline">01974955226</span>
            </a>
            <a
              href="mailto:contact@cubspdc.com"
              className="flex items-center text-black hover:text-[#A93226] transition duration-300"
            >
              <MdEmail className="text-sm" />
              <span className="ml-2 text-sm font-semibold hidden lg:inline">contact@cubspdc.com</span>
            </a>
          </div>

          {/* Middle Ticker */}
          <Link 
            href='/category/all' 
            className="flex-1 mx-2 sm:mx-4 overflow-hidden"
          >
            <div className="ticker-wrapper">
              <div className="ticker">
                <span className="text-xs sm:text-sm">APPLY NOW •</span>
                <span className="text-xs sm:text-sm">APPLY NOW •</span>
                <span className="text-xs sm:text-sm">APPLY NOW •</span>
              </div>
            </div>
          </Link>

          {/* Right Side - Login */}
          <div className="flex items-center">
            {/* Mobile Login Icon */}
            <a
              href="/login"
              className="lg:hidden flex items-center text-black hover:text-[#A93226] transition duration-300"
            >
              <MdLogin className="text-xl" />
            </a>

            {/* Desktop Login Button */}
            <a
              href="/login"
              className="bg-black text-yellow-300 text-sm font-semibold py-2 px-4 rounded-full shadow-md hover:bg-slate-700 transition duration-300 hidden lg:flex items-center"
            >
              <MdLogin className="mr-1" />
              <span>Login</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-wrapper {
          height: 24px;
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .ticker {
          display: inline-flex;
          white-space: nowrap;
          font-weight: 600;
          color: #A93226;
          animation: ticker 10s linear infinite;
        }

        .ticker span {
          display: inline-block;
          padding: 0 0.5rem;
        }

        @keyframes ticker {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default SecondaryBar;