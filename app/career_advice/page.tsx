import React from 'react';
import Link from 'next/link';
import { BookOpen, Briefcase, TrendingUp, Target, Users, Award } from 'lucide-react';

const careerResources = [
  {
    title: "Resume Writing Guide",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Learn how to craft a compelling resume that stands out to employers. Get expert tips on formatting, content, and highlighting your skills effectively.",
    link: "/resources/resume-guide"
  },
  {
    title: "Interview Preparation",
    icon: <Briefcase className="w-6 h-6" />,
    description: "Master the art of interviewing with our comprehensive guide covering common questions, body language, and techniques to showcase your potential.",
    link: "/resources/interview-prep"
  },
  {
    title: "Industry Trends",
    icon: <TrendingUp className="w-6 h-6" />,
    description: "Stay updated with the latest industry trends, emerging technologies, and skills in demand across various sectors.",
    link: "/resources/trends"
  },
  {
    title: "Career Planning",
    icon: <Target className="w-6 h-6" />,
    description: "Develop a strategic career plan with our step-by-step guide to setting and achieving professional goals.",
    link: "/resources/planning"
  }
];

const upcomingWorkshops = [
  {
    title: "Personal Branding Workshop",
    date: "March 15, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Online",
    spots: "25 spots available"
  },
  {
    title: "Networking Skills Masterclass",
    date: "March 20, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "PSDC Campus",
    spots: "15 spots available"
  },
  {
    title: "LinkedIn Optimization Session",
    date: "March 25, 2024",
    time: "4:00 PM - 6:00 PM",
    location: "Online",
    spots: "30 spots available"
  }
];

const CareerAdvicePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 px-8 text-center text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Career Development Resources</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Access expert guidance, industry insights, and practical tools to advance your professional journey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Career Resources Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Career Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold">{resource.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Link href={resource.link}>
                  <button className="text-blue-600 font-semibold hover:text-blue-700">
                    Learn More →
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Workshops Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Upcoming Career Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-4">{workshop.title}</h3>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>📅 {workshop.date}</p>
                  <p>⏰ {workshop.time}</p>
                  <p>📍 {workshop.location}</p>
                  <p className="text-green-600">{workshop.spots}</p>
                </div>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors w-full">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/64/64" alt="Alumni" className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold">Sarah Ahmed</h3>
                  <p className="text-gray-600">Data Science Graduate</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The career guidance at PSDC was instrumental in helping me land my dream job at a leading tech company."
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/64/64" alt="Alumni" className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold">Rakib Hassan</h3>
                  <p className="text-gray-600">Digital Marketing Professional</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The workshops and career resources helped me transition into a new role with confidence and expertise."
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/64/64" alt="Alumni" className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold">Nadia Islam</h3>
                  <p className="text-gray-600">Supply Chain Specialist</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The career planning sessions helped me map out my professional growth and achieve my career goals."
              </p>
            </div>
          </div>
        </div>

        {/* Book Consultation CTA */}
        <div className="bg-gray-100 py-16 px-8 text-center rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Career Guidance?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a one-on-one consultation with our career advisors to discuss your professional goals and create a customized career development plan.
          </p>
          <Link href="/contact">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors">
              Book Consultation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvicePage;