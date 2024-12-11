import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>
        <div variants={itemVariants}>
          <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We may collect personal information such as your name, email address, phone number, and other relevant information when you enroll in our courses or use our services. We may also collect non-personal information such as your IP address and browser details for analytics and security purposes.
          </p>
        </div>
        <div variants={itemVariants}>
          <h2 className="text-xl font-bold mb-2">Use of Information</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We use the collected information to provide and improve our services, communicate with you, and personalize your learning experience. We may also use the information for marketing purposes, but you can opt-out of receiving promotional materials.
          </p>
        </div>
        <div variants={itemVariants}>
          <h2 className="text-xl font-bold mb-2">Data Security</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </div>
        <div variants={itemVariants}>
          <h2 className="text-xl font-bold mb-2">Third-Party Sharing</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We may share your personal information with trusted third-party service providers who assist us in operating our business or providing services to you. We require these parties to protect your information and use it only for the intended purposes.
          </p>
        </div>
        <div variants={itemVariants}>
          <h2 className="text-xl font-bold mb-2">Children's Privacy</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to remove it from our systems.
          </p>
        </div>
        <div variants={itemVariants}>
          <h2 className="text-xl font-bold mb-2">Changes to this Policy</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any significant changes and obtain your consent when required by applicable laws.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;