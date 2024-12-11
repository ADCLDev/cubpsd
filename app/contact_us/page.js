'use client';
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mapContainerStyle = {
    height: '400px',
    width: '100%',
  };

  const center = {
    lat: 40.712776,
    lng: -74.005974,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold mb-8">Contact Us</h1>
      <div className="lg:flex">
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Address</h2>
          <p>House 18, Road 1/A</p>
          <p>Block J, Baridhara</p>
          <p>Dhaka, Bangladesh</p>
          <h2 className="text-2xl font-semibold mb-4">Phone</h2>
          <p>+880-1755557150</p>
          <h2 className="text-2xl font-semibold mb-4">Email</h2>
          <p>contact@revolutiontech.zone</p>
        </div>
        <div className="lg:w-2/3">
        <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4703659968923!2d90.4233264202831!3d23.796931647538397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c767f5f1e359%3A0xe2c21d160dda922f!2sMostafa%20Arcade!5e0!3m2!1sen!2sbd!4v1707638616526!5m2!1sen!2sbd" style={mapContainerStyle} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="sr-only">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Email" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" rows="4" placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 rounded-md text-white hover:bg-blue-700">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;