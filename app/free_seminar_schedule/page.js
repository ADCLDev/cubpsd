import React from 'react';
import { motion } from 'framer-motion';

const FreeSeminarSchedules = () => {
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
        <h1 className="text-3xl font-bold mb-6" variants={itemVariants}>
          Free Seminar Schedules
        </h1>
        <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6"
          role="alert"
          variants={itemVariants}
        >
          <p className="font-bold">No Ongoing Seminars</p>
          <p>We currently do not have any free seminars scheduled.</p>
        </div>
        <p className="mb-4 text-gray-700 leading-relaxed" variants={itemVariants}>
          Please check back soon for updates on our upcoming free seminars and workshops. We regularly organize educational events covering various IT topics to help you stay up-to-date with the latest technologies and industry trends.
        </p>
        <p className="text-gray-700 leading-relaxed" variants={itemVariants}>
          In the meantime, you can explore our wide range of paid courses and training programs tailored to your learning needs. Our expert instructors are dedicated to providing high-quality education and hands-on experience to help you advance your career in the IT field.
        </p>
      </div>
    </div>
  );
};

export default FreeSeminarSchedules;