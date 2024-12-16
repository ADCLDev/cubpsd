import React from 'react';
import Link from 'next/link';

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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 px-8 text-center text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Launch Your Career with Our Internship Program</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Gain valuable industry experience and kickstart your professional journey with our structured internship programs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Internship Programs Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Available Internship Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internshipPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{program.title}</h3>
                <div className="flex gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
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
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Internship Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application CTA */}
        <div className="bg-gray-100 py-16 px-8 text-center rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards your professional development. Apply now for our internship programs and gain valuable industry experience.
          </p>
          <Link href="/contact">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;