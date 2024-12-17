import React from 'react';
import { Users, Briefcase, GraduationCap, Trophy, Building2, HeartHandshake } from 'lucide-react';

const CountCard = ({ title, count, icon: Icon, gradient }) => {
  return (
    <div className={`
      relative overflow-hidden
      bg-white rounded-xl shadow-md
      px-6 py-8
      transition-all duration-300
      hover:shadow-lg hover:-translate-y-1
      group
      border border-gray-100
    `}>
      {/* Background Gradient */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300
        ${gradient}
      `} />

      {/* Content */}
      <div className="flex flex-col items-center gap-4 relative z-10">
        <div className={`
          p-3 rounded-full 
          bg-[#fdf1f3] group-hover:bg-[#fae6e8]
          transition-colors duration-300
        `}>
          <Icon className="w-8 h-8 text-[#BE1E2D]" />
        </div>
        
        <div className="text-center">
          {/* <h3 className="text-4xl font-bold text-[#BE1E2D] mb-2">
            {count}+
          </h3> */}
          <p className="font-medium text-gray-700">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

const Counts = () => {
  const stats = [
    {
      title: "Successful Students",
      count: "5000",
      icon: GraduationCap,
      gradient: "bg-gradient-to-br from-red-100 to-pink-100"
    },
    {
      title: "Expert Freelancers",
      count: "1200",
      icon: Users,
      gradient: "bg-gradient-to-br from-red-100 to-orange-100"
    },
    {
      title: "Skilled Job Holders",
      count: "3000",
      icon: Briefcase,
      gradient: "bg-gradient-to-br from-pink-100 to-red-100"
    },
    {
      title: "Industry Experts",
      count: "50",
      icon: Trophy,
      gradient: "bg-gradient-to-br from-orange-100 to-red-100"
    },
    {
      title: "Partner Companies",
      count: "100",
      icon: Building2,
      gradient: "bg-gradient-to-br from-red-100 to-rose-100"
    },
    {
      title: "Career Consultancy",
      count: "2000",
      icon: HeartHandshake,
      gradient: "bg-gradient-to-br from-rose-100 to-red-100"
    }
  ];

  return (
    <div className="mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Empowering careers and transforming lives through professional development and expert guidance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {stats.map((stat, index) => (
          <CountCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default Counts;