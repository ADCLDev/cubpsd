'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FreelancingPage = () => {
  const courses = [
    {
      id: 1,
      title: 'Web & Sofware Development',
      description: 'Learn to build modern websites and softwares.',
      imageSrc: '/courses_image/web_development.jpg',
      imageAlt: 'Web Development Image',
      link: '/category/by_id/4',
    },
    {
      id: 2,
      title: 'Graphic Design & Media',
      description: 'Master the art of creating stunning visual designs, 3d Designs, UI and Workflows.',
      imageSrc: '/courses_image/graphics_design.jpg',
      imageAlt: 'Graphic Design Image',
      link: '/category/by_id/3',
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Develop your Digital Marketing skills and create a compelling market ready skill.',
      imageSrc: '/courses_image/digital_marketing.jpg',
      imageAlt: 'Digital Marketing',
      link: '/category/by_id/5',
    },
    // Add more courses as needed
  ];

  const freelancePositions = [
    {
      name: 'Web Developer',
      logo: '/logos/web-developer.png',
    },
    {
      name: 'Graphic Designer',
      logo: '/logos/graphic-designer.png',
    },
    {
      name: 'Video Editor/Creator',
      logo: '/logos/writer.png',
    },
    {
      name: 'Virtual Assistant',
      logo: '/logos/virtual-assistant.png',
    },
    {
      name: 'Social Media Manager',
      logo: '/logos/social-media-manager.png',
    },
    {
      name: 'Translator',
      logo: '/logos/translator.png',
    },
    {
      name: 'Data Entry Specialist',
      logo: '/logos/data-entry.png',
    },
    {
      name: 'Programmer',
      logo: '/logos/programmer.png',
    },
    // Add more positions as needed
  ];

  const marketplaces = [
    {
      // name: 'Upwork',
      logo: '/downloaded/upwork.png',
    },
    {
      name: 'Fiverr',
      logo: '/logos/fiverr.png',
    },
    {
      name: 'Freelancer.com',
      logo: '/logos/freelancer.png',
    },
    {
      name: 'Toptal',
      logo: '/logos/toptal.png',
    },
    {
      name: 'PeoplePerHour',
      logo: '/logos/peopleperhour.png',
    },
    {
      name: 'Guru',
      logo: '/logos/guru.png',
    },
    {
      name: 'Flexjobs',
      logo: '/logos/flexjobs.png',
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
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
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
              src="/freelancing.jpeg"
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
                <Image
                  src={position.logo}
                  alt={position.name}
                  width={48}
                  height={48}
                  className="mb-2"
                />
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
                className="bg-white rounded-lg shadow-lg p-1 text-center flex flex-col items-center"
              >
                <Image
                  src={marketplace.logo}
                  alt={marketplace.name}
                  width={100}
                  height={50}
                  // className="mb-2"
                />
                {/* <p className="text-gray-600">{marketplace.name}</p> */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FreelancingPage;