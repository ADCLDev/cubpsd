import React from 'react';
import Link from 'next/link';

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

const JobPlacements = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 px-8 text-center text-white mb-16">
        <h1 className="text-4xl font-bold mb-4">Unlock Your Career Potential</h1>
        <p className="text-xl">
          Embark on a rewarding journey with our comprehensive job placement services.
        </p>
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

      {/* Add other sections here */}

      <div className="bg-gray-100 py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Take the First Step Towards Your Dream Career</h2>
        <Link href={`/category/all`}>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
            Get Started
            </button>
        </Link>
      </div>
    </div>
  );
};

export default JobPlacements;