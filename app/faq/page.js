'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    // Add your FAQ data here
    { question: 'What services do you offer?', answer: 'We offer a wide range of IT services, including web development, mobile app development, cloud computing, and cybersecurity solutions.' },
    { question: 'How do I get started with your services?', answer: 'Simply reach out to our sales team, and they will guide you through the process of choosing the right services for your needs.' },
    // ...
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <motion.div
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-3xl font-bold mb-6" variants={itemVariants}>
          Frequently Asked Questions
        </motion.h1>
        <motion.div className="space-y-4" variants={containerVariants}>
          {faqs.map((faq, index) => (
            <motion.div key={index} className="border rounded-lg overflow-hidden" variants={itemVariants}>
              <button
                className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-lg font-semibold">{faq.question}</h2>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    className="px-6 py-4 bg-gray-50"
                    key={faq.question}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FAQ;