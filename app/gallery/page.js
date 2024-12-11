'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    // Replace with your actual image URLs and data
    { id: 1, src: 'https://d2z1l9uefzbzxd.cloudfront.net/wp-content/uploads/2021/02/MOR_0962-scaled-aspect-ratio-420-270.jpg', title: 'Work Station', description: 'A Project Team' },
    { id: 2, src: 'https://colorlib.com/wp/wp-content/uploads/sites/2/ruya-gallery-wordpress-theme.jpg', title: 'Beautiful Website Development', description: 'Clean & Powerful beautiful website' },
    { id: 3, src: 'https://www.riotgames.com/darkroom/1120/588c6ca6d7cc52871fdd0e521d440d6a:8349a1f47451b4a2c55a19a4992e0999/dsc00402-edited.jpg', title: 'Game Development Team', description: 'Expert Game Development Team working in Riot' },
    // Add more images here
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl font-bold text-center mb-8" variants={itemVariants}>
          Gallery
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={itemVariants}
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(image)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{image.title}</h2>
                <p className="text-gray-700">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={800}
              height={600}
              className="mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
            <p className="text-gray-700">{selectedImage.description}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;