'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const companies = [
  { name: 'Walton', logo: '/companies/walton.jpg', href:'https://waltonbd.com/' },
  { name: 'Brainstation', logo: '/companies/Brain Station 23.jpg', href:'https://brainstation-23.com/' },
  { name: 'Huawei', logo: '/companies/huawei.png', href:'https://www.huawei.com/' },
  { name: 'Grameenphone', logo: '/companies/grameen-phone.jpg', href:'https://www.grameenphone.com/' },
  { name: 'Banglalink', logo: '/companies/banglalink.png', href:'https://www.banglalink.net/' },
  { name: 'Airtel', logo: '/companies/airtel.png', href:'https://www.huawei.com/' },
  { name: 'Robi', logo: '/companies/robi.avif', href:'https://www.huawei.com/' },
  { name: 'Citi Bank', logo: '/companies/citi-bank.jpeg', href:'https://www.huawei.com/' },
  { name: 'City Bank', logo: '/companies/city bank.png', href:'https://www.huawei.com/' },
  { name: 'Eastern Bank', logo: '/companies/Eastern Bank.png', href:'https://www.huawei.com/' },
  { name: 'Bank Asia', logo: '/companies/bank-asia.jpg', href:'https://www.huawei.com/' },
  { name: 'HSBC Bank', logo: '/companies/hsbc.png', href:'https://www.huawei.com/' },
  { name: 'IFIC Bank', logo: '/companies/ific.png', href:'https://www.huawei.com/' },
  { name: 'Standard Bank', logo: '/companies/sb2.jpg', href:'https://www.huawei.com/' },
  { name: 'Mutual Trust Bank', logo: '/companies/mtb.png', href:'https://www.huawei.com/' },
  { name: 'Standard Chartard Bank', logo: '/companies/scb.webp', href:'https://www.huawei.com/' },
  { name: 'United Commercial Bank', logo: '/companies/ucb.png', href:'https://www.huawei.com/' },
  
  // Add more companies as needed
];

const internshipPrograms = [
  {
    title: "Data Science Internship",
    duration: "3 months",
    type: "Full-time",
    description: "Gain hands-on experience in data analysis, machine learning, and statistical modeling with industry experts.",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization"]
  },
  {
    title: "Digital Marketing Internship",
    duration: "3 months",
    type: "Full-time",
    description: "Learn and apply digital marketing strategies, social media management, and SEO optimization techniques.",
    skills: ["Social Media Marketing", "SEO", "Content Marketing", "Analytics"]
  },
  {
    title: "Graphic Design Internship",
    duration: "3 months",
    type: "Full-time",
    description: "Work on real projects designing visual content, branding materials, and digital assets.",
    skills: ["Adobe Creative Suite", "UI/UX Design", "Typography", "Brand Design"]
  },
  {
    title: "Supply Chain Management Internship",
    duration: "3 months",
    type: "Full-time",
    description: "Experience end-to-end supply chain operations, logistics management, and inventory control.",
    skills: ["Logistics", "Inventory Management", "Process Optimization", "ERP Systems"]
  }
];

const benefits = [
  {
    title: "Hands-on Experience",
    description: "Work on real projects with industry professionals"
  },
  {
    title: "Mentorship",
    description: "One-on-one guidance from experienced professionals"
  },
  {
    title: "Certification",
    description: "Receive a recognized internship completion certificate"
  },
  {
    title: "Job Placement Support",
    description: "Priority consideration for full-time positions"
  }
];

const InternshipPage = () => {
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
            Launch Your Career with Our Internship Program
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-gray-700"
          >
            Gain valuable industry experience and kickstart your professional journey with our structured internship programs.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Internship Programs Section */}
        <div className="mb-16">
          <motion.h2 initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-[#BE1E2D]">Available Internship Programs</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internshipPrograms.map((program, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#BE1E2D] mb-2">{program.title}</h3>
                <div className="flex gap-4 mb-4">
                  <span className="bg-[#BE1E2D]/10 text-[#BE1E2D] px-3 py-1 rounded-full text-sm">
                    {program.duration}
                  </span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    {program.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex flex-wrap gap-2">
                  {program.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#BE1E2D]">Why Choose Our Internship Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#BE1E2D] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Industry-Leading Partnerships</h2>
        <p className="text-lg mb-8">
          We have forged strong partnerships with top-tier companies, ensuring our students have access to exciting career opportunities upon graduation.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {companies.map((company, index) => (
            <Link href={company.href}>
                <div key={index} className="flex flex-col items-center">
                <img src={company.logo} alt={company.name} width={200}  />
                {/* <span className="text-center">{company.name}</span> */}
                </div>
            </Link>
          ))}
        </div>
      </div>

        {/* Application CTA */}
        <div className="bg-gray-100 py-16 px-8 text-center rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-[#BE1E2D]">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards your professional development. Apply now for our internship programs and gain valuable industry experience.
          </p>
          <Link href="/contact_us">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#BE1E2D] text-white py-3 px-8 rounded-md hover:bg-[#9e1825] transition-colors"
            >
              Apply Now
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;