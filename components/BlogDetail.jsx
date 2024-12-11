import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BlogDetail = ({ post }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div variants={itemVariants}>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center mb-6">
            <Image
              src="/author-avatar.jpg"
              alt="Author Avatar"
              width={32}
              height={32}
              className="rounded-full mr-2"
            />
            <span className="text-gray-600">{post.author}</span>
            <span className="text-gray-500 mx-2">|</span>
            <span className="text-gray-600">{post.date}</span>
          </div>
        </div>
        <div className="mb-8" variants={itemVariants}>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
        </div>
        <div variants={itemVariants}>
          <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>
          {/* Add more content sections or components as needed */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;