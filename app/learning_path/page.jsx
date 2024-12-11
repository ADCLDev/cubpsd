'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LearningPath = () => {
  const pathCards = [
    {
      id: 1,
      title: 'Fundamentals',
      description: 'Learn the foundational concepts of programming and computer science.',
      imageSrc: 'http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/fundamentals.svg',
      imageAlt: 'Fundamentals Image',
    },
    {
      id: 2,
      title: 'Frontend Development',
      description: 'Dive into the world of web development and build stunning user interfaces.',
      imageSrc: 'http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/front-end.svg',
      imageAlt: 'Frontend Development Image',
    },
    {
      id: 3,
      title: 'Backend Development',
      description: 'Explore server-side technologies and build robust and scalable applications.',
      imageSrc: 'http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/back-end.svg',
      imageAlt: 'Backend Development Image',
    },
    {
      id: 4,
      title: 'Mobile Development',
      description: 'Learn to develop native and cross-platform mobile applications.',
      imageSrc: 'http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/mobile.svg',
      imageAlt: 'Mobile Development Image',
    },
    {
      id: 5,
      title: 'Game Development',
      description: 'Unleash your creativity and build immersive and engaging games.',
      imageSrc: 'http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/game.svg',
      imageAlt: 'Game Development Image',
    },
    {
      id: 6,
      title: 'A.I. Engineering',
      description: 'Unlock the power of data and artificial intelligence.',
      sections: [
        {
          id: 1,
          title: 'Data Engineering',
          description: 'Build robust data pipelines and infrastructure for data-driven applications.',
          imageSrc: '/courses_image/data-engineering.jpeg',
          imageAlt: 'Data Engineering Image',
          courses: [
            'Introduction to Data Engineering',
            'Data Warehousing and ETL',
            'Big Data Platforms (Hadoop, Spark)',
            'Data Lakes and Data Mesh',
            'Streaming Data and Real-Time Processing',
          ],
        },
        {
          id: 2,
          title: 'Artificial Intelligence',
          description: 'Explore the world of artificial intelligence and machine learning.',
          imageSrc: '/courses_image/artificial-intelligence.jpeg',
          imageAlt: 'Artificial Intelligence Image',
          courses: [
            'Introduction to Artificial Intelligence',
            'Machine Learning Algorithms',
            'Deep Learning and Neural Networks',
            'Natural Language Processing (NLP)',
            'Computer Vision and Image Recognition',
          ],
        },
      ],
    },
  
    {
      id: 7,
      title: 'Quality Assurance (QA) and Testing',
      description: 'Ensure your applications meet the highest quality standards.',
      sections: [
        {
          id: 1,
          title: 'Software Testing Fundamentals',
          description: 'Learn the basics of software testing and its importance.',
          imageSrc: '/courses_image/software-testing.jpeg',
          imageAlt: 'Software Testing Fundamentals Image',
          courses: [
            'Introduction to Software Testing',
            'Test Planning and Test Cases',
            'Manual Testing Techniques',
            'Defect Tracking and Reporting',
            'Testing Documentation',
          ],
        },
        {
          id: 2,
          title: 'Automation Testing',
          description: 'Streamline your testing processes with automation tools and frameworks.',
          imageSrc: '/courses_image/automation-testing.jpeg',
          imageAlt: 'Automation Testing Image',
          courses: [
            'Introduction to Automation Testing',
            'Unit Testing',
            'Integration Testing',
            'End-to-End Testing',
            'Test Automation Frameworks (Selenium, Appium, Cypress)',
          ],
        },
        {
          id: 3,
          title: 'Performance Testing',
          description: 'Ensure your applications can handle high loads and perform well.',
          imageSrc: '/courses_image/performance-testing.jpeg',
          imageAlt: 'Performance Testing Image',
          courses: [
            'Introduction to Performance Testing',
            'Load Testing',
            'Stress Testing',
            'Monitoring and Profiling',
            'Performance Optimization Techniques',
          ],
        },
      ],
    },
  
    {
      id: 8,
      title: 'Network Engineering',
      description: 'Gain the skills to provide technical support and manage networks.',
      sections: [
        {
          id: 1,
          title: 'IT Support Fundamentals',
          description: 'Learn the essentials of providing technical support and customer service.',
          imageSrc: '/courses_image/it-support.jpeg',
          imageAlt: 'IT Support Fundamentals Image',
          courses: [
            'Introduction to IT Support',
            'Customer Service and Communication',
            'Operating Systems and Software',
            'Hardware and Troubleshooting',
            'IT Security and Best Practices',
          ],
        },
        {
          id: 2,
          title: 'Networking',
          description: 'Understand the principles of computer networking and network administration.',
          imageSrc: '/courses_image/networking.jpeg',
          imageAlt: 'Networking Image',
          courses: [
            'Introduction to Networking',
            'Network Protocols and Architectures',
            'Routing and Switching',
            'Network Security',
            'Wireless Networks and Cloud Computing',
          ],
        },
      ],
    },
  
    {
      id: 9,
      title: 'Augmented Reality & Virtual Reality Development',
      description: 'Explore the cutting-edge technologies of AR and VR.',
      sections: [
        {
          id: 1,
          title: 'Augmented Reality (AR)',
          description: 'Learn to create immersive augmented reality experiences.',
          imageSrc: '/courses_image/augmented-reality.jpeg',
          imageAlt: 'Augmented Reality Image',
          courses: [
            'Introduction to Augmented Reality',
            'AR Development Frameworks (ARKit, ARCore)',
            'Computer Vision and Image Recognition',
            'AR User Experience and Design',
            'AR Applications and Use Cases',
          ],
        },
        {
          id: 2,
          title: 'Virtual Reality (VR)',
          description: 'Dive into the world of virtual reality and create immersive experiences.',
          imageSrc: '/courses_image/virtual-reality.jpeg',
          imageAlt: 'Virtual Reality Image',
          courses: [
            'Introduction to Virtual Reality',
            'VR Development Frameworks (Unity, Unreal Engine)',
            '3D Modeling and Animation',
            'VR User Experience and Design',
            'VR Applications and Use Cases',
          ],
        },
      ],
    },
  
    {
      id: 10,
      title: 'Blockchain Development',
      description: 'Explore the revolutionary technologies of blockchain and cryptocurrencies.',
      sections: [
        {
          id: 1,
          title: 'Blockchain Fundamentals',
          description: 'Understand the principles and architecture of blockchain technology.',
          imageSrc: '/courses_image/blockchain.jpeg',
          imageAlt: 'Blockchain Fundamentals Image',
          courses: [
            'Introduction to Blockchain',
            'Blockchain Architecture and Consensus Mechanisms',
            'Smart Contracts and Decentralized Applications (DApps)',
            'Blockchain Security and Cryptography',
            'Blockchain Use Cases and Industry Applications',
          ],
        },
        {
          id: 2,
          title: 'Cryptocurrency',
          description: 'Learn about cryptocurrencies and their underlying technologies.',
          imageSrc: '/courses_image/cryptocurrency.jpeg',
          imageAlt: 'Cryptocurrency Image',
          courses: [
            'Introduction to Cryptocurrencies',
            'Bitcoin and Blockchain',
            'Ethereum and Smart Contracts',
            'Cryptocurrency Trading and Investment',
            'Decentralized Finance (DeFi) and Web3',
          ],
        },
      ],
    },
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
          <h1 className="text-4xl font-bold mb-4">Learning Paths</h1>
          <p className="text-gray-600">
            Explore our comprehensive learning paths and kickstart your IT career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {pathCards.map((card) => (
            <Link key={card.id} href={`/learning_path/${card.id}/`}>
                <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: card.id * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                <div className="relative h-48">
                    <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                </div>
                </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPath;