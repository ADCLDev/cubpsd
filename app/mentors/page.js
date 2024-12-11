import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Mentors = () => {
  const mentors = [
    // Add your mentor data here
    { name: 'Md Hasanuzzaman', role: 'Senior Lecturer of Canadian University of Bangladesh', image: 'https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg' },
    { name: 'Abdullah Al Rajin', role: 'Software Engineer', image: 'https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg' },
    // ...
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
        >
          Our Mentors
        </h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
        >
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"

            >
              <Image
                src={mentor.image}
                alt={mentor.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{mentor.name}</h2>
                <p className="text-gray-700">{mentor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentors;