'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mapContainerStyle = {
    height: '400px',
    width: '100%',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#BE1E2D]/5 to-[#fdf1f3]/50 py-16 px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mb-4 text-wine-800"
          >
            Get In Touch With Us
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-gray-700"
          >
            Have a question or need assistance? We're here to help. Reach out to us using the contact information below or send us a message.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="lg:flex">
          {/* Contact Info */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#BE1E2D]">Address</h2>
              <p>RANGS RL SQUARE, PRAGATI SHARANI,</p>
              <p>Bir Uttam Rafiqul Islam Ave,</p>
              <p>Dhaka 1212, Bangladesh</p>
              <h2 className="text-2xl font-semibold mb-4 mt-6 text-[#BE1E2D]">Phone</h2>
              <p>+880-1974955226</p>
              <h2 className="text-2xl font-semibold mb-4 mt-6 text-[#BE1E2D]">Email</h2>
              <p>contact@cubpsdc.com</p>
            </motion.div>
          </div>

          {/* Map */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4703659968923!2d90.425216!3d23.788157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c767f5f1e359%3A0xe2c21d160dda922f!2sMostafa%20Arcade!5e0!3m2!1sen!2sbd!4v1707638616526!5m2!1sen!2sbd" 
  style={mapContainerStyle} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-lg shadow-md"
/>

            </motion.div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl font-semibold mb-4 text-[#BE1E2D]"
          >
            Send us a message
          </motion.h2>
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-[#BE1E2D] focus:border-[#BE1E2D]"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-[#BE1E2D] focus:border-[#BE1E2D]"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-[#BE1E2D] focus:border-[#BE1E2D]"
                rows="4"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine-800 text-white py-3 px-8 rounded-md hover:bg-[#9e1825] transition-colors w-full md:w-auto"
            >
              Send message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;