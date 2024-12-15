'use client';

import React from 'react';
import { MdEmail, MdLogin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';

const SecondaryBar = () => {
  return (
    <div className="bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Left Side - Phone & Email */}
          <div className="flex items-center space-x-6">
            <a
              href="tel:01974955226"
              className="flex items-center text-black hover:text-[#A93226] transition duration-300"
            >
              <FaPhoneAlt className="mr-2" />
              <span className="text-sm font-semibold hidden lg:inline">01974955226</span>
            </a>
            <a
              href="mailto:contact@cubspdc.com"
              className="flex items-center text-black hover:text-[#A93226] transition duration-300"
            >
              <MdEmail className="mr-2" />
              <span className="text-sm font-semibold hidden lg:inline">contact@cubspdc.com</span>
            </a>
          </div>

          {/* Middle Ticker */}
          <Link href='/category/all'>
            <div className="flex-1 mx-6 overflow-hidden">
              <div className="ticker-wrapper">
                <div className="ticker">
                  <span>APPLY NOW • &nbsp;</span>
                  <span>APPLY NOW • &nbsp;</span>
                  <span>APPLY NOW • &nbsp;</span>
                  <span>APPLY NOW • &nbsp;</span>
                  <span>APPLY NOW • &nbsp;</span>
                </div>
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
              <MdLogin className="text-2xl" />
            </a>
            
            {/* Desktop Login Button */}
            <a
              href="/login"
              className="bg-black text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-slate-700 transition duration-300 hidden lg:flex items-center"
            >
              <MdLogin className="mr-1" />
              <span>Login</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .ticker-wrapper {
          width: 100%;
          height: 24px;
          overflow: hidden;
          position: relative;
        }

        .ticker {
          display: inline-flex;
          white-space: nowrap;
          font-weight: 600;
          color: #A93226;
          animation: ticker 15s linear infinite;
        }

        .ticker span {
          display: inline-block;
        }

        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Ticker needs enough copies of the text to ensure seamless looping */
        .ticker > span {
          animation: tickerItem 15s linear infinite;
        }

        @keyframes tickerItem {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SecondaryBar;