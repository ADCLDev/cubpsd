'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FreelancingPage = () => {
  const courses = [
    {
      id: 1,
      title: 'Web & Software Development',
      description: 'Learn to build modern websites and software.',
      imageSrc: 'https://img.freepik.com/free-vector/web-development-programming-languages-engineering-tools-interface-window-framing-layout-project-computer-technologies-markup-website-construction_335657-2323.jpg',
      imageAlt: 'Web Development Image',
      link: '/category/by_id/4',
    },
    {
      id: 2,
      title: 'Graphic Design & Media',
      description: 'Master the art of creating stunning visual designs, 3D designs, UI, and workflows.',
      imageSrc: 'https://img.freepik.com/free-vector/designer-girl-concept-illustration_114360-4455.jpg',
      imageAlt: 'Graphic Design Image',
      link: '/category/by_id/3',
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Develop your digital marketing skills and create compelling, market-ready skills.',
      imageSrc: 'https://img.freepik.com/free-vector/digital-marketing-concept-illustration_114360-1491.jpg',
      imageAlt: 'Digital Marketing',
      link: '/category/by_id/5',
    },
    // Add more courses as needed
  ];

  const freelancePositions = [
    {
      name: 'Web Developer',
      logo: 'https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg',
    },
    {
      name: 'Graphic Designer',
      logo: 'https://img.freepik.com/free-vector/designer-concepts-illustration_114360-1460.jpg',
    },
    {
      name: 'Video Editor/Creator',
      logo: 'https://img.freepik.com/free-vector/video-editor-concept-illustration_114360-1027.jpg',
    },
    {
      name: 'Virtual Assistant',
      logo: 'https://img.freepik.com/free-vector/virtual-assistant-concept-illustration_114360-2035.jpg',
    },
    {
      name: 'Social Media Manager',
      logo: 'https://img.freepik.com/free-vector/influencer-concept-illustration_114360-2034.jpg',
    },
    {
      name: 'Translator',
      logo: 'https://img.freepik.com/free-vector/translator-concept-illustration_114360-3820.jpg',
    },
    {
      name: 'Data Entry Specialist',
      logo: 'https://img.freepik.com/free-vector/data-entry-concept-illustration_114360-1030.jpg',
    },
    {
      name: 'Programmer',
      logo: 'https://img.freepik.com/free-vector/computer-programmers-concept-illustration_114360-2137.jpg',
    },
    // Add more positions as needed
  ];

  const marketplaces = [
    {
      name: 'Upwork',
      logo: 'https://img.freepik.com/free-vector/illustration-upwork-logo_23-2148789125.jpg',
    },
    {
      name: 'Fiverr', 
      logo: 'https://img.freepik.com/free-vector/fiverr-illustration-logo_23-2148789126.jpg',
    },
    {
      name: 'Freelancer.com',
      logo: 'https://img.freepik.com/free-icon/freelancer_318-877944.jpg',
    },
    {
      name: 'Toptal',
      logo: 'https://img.freepik.com/free-icon/toptal_318-877945.jpg',
    },
    {
      name: 'PeoplePerHour',
      logo: 'https://img.freepik.com/free-icon/peopleperhour_318-877946.jpg',
    },
    {
      name: 'Guru',
      logo: 'https://img.freepik.com/free-icon/guru_318-877947.jpg',  
    },
    {
      name: 'Flexjobs',
      logo: 'https://img.freepik.com/free-icon/flexjobs_318-877948.jpg',
    },
    // Add more marketplaces as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Freelancing</h1>
          <p className="text-gray-600">
            Explore the world of freelancing and unlock endless opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold mb-4">What is Freelancing?</h2>
            <p className="text-gray-600 mb-8">
              Freelancing is a flexible way of working where you offer your skills and services to clients on a project basis. It allows you to work remotely, set your own schedule, and choose the projects you want to work on.
            </p>
            <button className="bg-wine-800 hover:bg-wine-900 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-96"
          >
            <Image
              src="https://img.freepik.com/free-vector/flat-3d-isometric-design-man-sits-workplace-working-computer_1284-42638.jpg?ga=GA1.1.724683099.1731423728&semt=ais_hybrid"
              alt="Freelancing Video"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-8">Courses for Freelancing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Link key={`${course.id}`} href={`${course.link}`}>
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: course.id * 0.2 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={course.imageSrc}
                      alt={course.imageAlt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600">{course.description}</p>
                  </div>  
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"  
        >
          <h2 className="text-2xl font-bold mb-8">Freelance Positions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {freelancePositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center"
              >
                <div className="relative w-20 h-20 mb-2">
                  <Image 
                    src={position.logo}
                    alt={position.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <p className="text-gray-600">{position.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20" 
        >
          <h2 className="text-2xl font-bold mb-8">Freelancing Marketplaces</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {marketplaces.map((marketplace, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center"
              >
                <div className="relative w-32 h-16 mb-2">
                  <Image
                    src={marketplace.logo}
                    alt={marketplace.name}
                    layout="fill" 
                    objectFit="contain"
                  />
                </div>
                <p className="text-gray-600">{marketplace.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FreelancingPage;