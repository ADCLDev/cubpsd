'use client';
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { MdEmail, MdLogin } from "react-icons/md";
import { motion } from "framer-motion";

const SecondaryBar = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="bg-white text-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <motion.div
            className="flex items-center space-x-6"
            variants={itemVariants}
          >
            <motion.a
              href="tel:01886349919"
              className="flex items-center text-black hover:text-[#A93226] transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt className="mr-2" />
              <span className="text-sm font-semibold hidden lg:flex">01974955226</span>
            </motion.a>
            <motion.a
              href="mailto:dilal328@gmail.com"
              className="flex items-center text-black hover:text-[#A93226] transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdEmail className="mr-2" />
              <span className="text-sm font-semibold hidden lg:flex">contact@cubspdc.com</span>
            </motion.a>
          </motion.div>
          <motion.div
            className="flex items-center justify-end"
            variants={itemVariants}
          >
            <motion.a
              href="/"
              className="flex items-center text-black hover:text-[#A93226] transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/rtz-new.png" alt="Logo" className="w-20 lg:hidden" />
            </motion.a>
            <motion.a
              href="/login"
              className="bg-black text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-slate-700 transition duration-300 hidden lg:flex"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="flex text-md font-semibold text-white">
                <span className="text-xl">
                  <MdLogin />
                </span>
                <span className="px-1">
                  Login{" "}
                </span>
              </button>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SecondaryBar;