'use client';
import React from 'react';
import { motion } from 'framer-motion';

const learningPaths = [
  {
    id: 1,
    title: 'Fundamentals',
    description: 'Learn the foundational concepts of programming and computer science.',
    sections: [
      {
        id: 1,
        title: 'Programming',
        description: 'Learn the fundamentals of programming languages and logic.',
        imageSrc: '/courses_image/prograaming-learning.jpeg',
        imageAlt: 'Programming Image',
        courses: ['Fundamentals', 'Object Oriented Programming', 'Advanced Topics',],
      },

      {
        id: 2,
        title: 'Data Structures & Algorithms',
        description: 'Studying this helps to improve programming and problem-solving skills.',
        imageSrc: '/courses_image/prograaming-learning.jpeg',
        imageAlt: 'Programming Image',
        courses: ['Fundamentals', 'Tree-Based Structures', ' Graphs and Related Structures', 'Sort & Search Algorithms', 'Advanced Algorithms'],
      },

      {
        id: 3,
        title: 'Design Patterns',
        description: 'Studying this helps to improve programming and problem-solving skills.',
        imageSrc: '/courses_image/prograaming-learning.jpeg',
        imageAlt: 'Programming Image',
        courses: ['Creational', 'Structural', ' Behavioral', 'Architectural', 'Concurrency'],
      },

      {
        id: 4,
        title: 'Version Control and Collaboration',
        description: 'Learn to track changes, fix bugs, and collaborate with others.',
        imageSrc: '/courses_image/prograaming-learning.jpeg',
        imageAlt: 'Programming Image',
        courses: ['Introduction', 'Distributed Version Control Systems (DVCS)', ' Collaborative Workflows', 'Advanced Topics', 'Collaboration Platforms and Tools'],
      },

      // ... (other sections for Fundamentals)
    ],
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'Dive into the world of web development and build stunning user interfaces.',
    sections: [
      {
        id: 1,
        title: 'HTML and CSS',
        description: 'Learn the building blocks of web development with HTML and CSS.',
        imageSrc: '/courses_image/html-css.jpeg',
        imageAlt: 'HTML and CSS Image',
        courses: ['Introduction to HTML', 'Advanced CSS', 'Responsive Web Design'],
      },
      {
        id: 2,
        title: 'JavaScript',
        description: 'Master the language that powers modern web applications.',
        imageSrc: '/courses_image/javascript.jpeg',
        imageAlt: 'JavaScript Image',
        courses: [
          'Fundamentals of JavaScript',
          'DOM Manipulation',
          'Asynchronous JavaScript',
          'ES6+ Features',
          'JavaScript Frameworks and Libraries',
        ],
      },
      {
        id: 3,
        title: 'React',
        description: 'Learn the popular JavaScript library for building user interfaces.',
        imageSrc: '/courses_image/react.jpeg',
        imageAlt: 'React Image',
        courses: [
          'Introduction to React',
          'React Components and Props',
          'React Hooks',
          'React Router',
          'Redux and State Management',
        ],
      },
      {
        id: 4,
        title: 'Web Performance and Optimization',
        description: 'Ensure your web applications load quickly and perform smoothly.',
        imageSrc: '/courses_image/web-performance.jpeg',
        imageAlt: 'Web Performance and Optimization Image',
        courses: [
          'Website Performance Basics',
          'Optimizing Images and Media',
          'Caching and Compression',
          'Code Splitting and Lazy Loading',
          'Performance Monitoring and Auditing',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Backend Development',
    description: 'Explore server-side technologies and build robust and scalable applications.',
    sections: [
      {
        id: 1,
        title: 'Node.js',
        description: 'Learn the popular JavaScript runtime for building server-side applications.',
        imageSrc: '/courses_image/nodejs.jpeg',
        imageAlt: 'Node.js Image',
        courses: [
          'Introduction to Node.js',
          'Node.js Modules and Packages',
          'Express.js',
          'Database Integration',
          'Real-Time Applications with Socket.IO',
        ],
      },
      {
        id: 2,
        title: 'Python',
        description: 'Explore the versatile and powerful Python programming language.',
        imageSrc: '/courses_image/python.jpeg',
        imageAlt: 'Python Image',
        courses: [
          'Python Fundamentals',
          'Object-Oriented Programming in Python',
          'Web Development with Django',
          'Data Analysis and Visualization',
          'Machine Learning and AI',
        ],
      },
      {
        id: 3,
        title: 'Databases',
        description: 'Learn to work with databases and store and manage data efficiently.',
        imageSrc: '/courses_image/databases.jpeg',
        imageAlt: 'Databases Image',
        courses: [
          'Introduction to Databases',
          'Relational Databases (SQL)',
          'NoSQL Databases (MongoDB, Cassandra, Redis)',
          'Database Design and Normalization',
          'Database Performance and Scalability',
        ],
      },
      {
        id: 4,
        title: 'APIs and Microservices',
        description: 'Build and consume APIs to create modular and scalable applications.',
        imageSrc: '/courses_image/apis-microservices.jpeg',
        imageAlt: 'APIs and Microservices Image',
        courses: [
          'Introduction to APIs',
          'REST API Design and Development',
          'GraphQL',
          'Microservices Architecture',
          'API Security and Authentication',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Mobile Development',
    description: 'Learn to develop native and cross-platform mobile applications.',
    sections: [
      {
        id: 1,
        title: 'Android Development',
        description: 'Build native Android applications using Java or Kotlin.',
        imageSrc: '/courses_image/android-development.jpeg',
        imageAlt: 'Android Development Image',
        courses: [
          'Android Studio and Fundamentals',
          'User Interface Design',
          'Android Architecture Components',
          'Data Storage and Persistence',
          'Publishing and Distribution',
        ],
      },
      {
        id: 2,
        title: 'iOS Development',
        description: 'Develop native iOS applications using Swift or Objective-C.',
        imageSrc: '/courses_image/ios-development.jpeg',
        imageAlt: 'iOS Development Image',
        courses: [
          'Xcode and Swift Fundamentals',
          'UIKit and User Interface Design',
          'Core Data and Persistence',
          'Networking and APIs',
          'App Store Deployment',
        ],
      },
      {
        id: 3,
        title: 'Cross-Platform Development',
        description: 'Build mobile applications that run on multiple platforms.',
        imageSrc: '/courses_image/cross-platform-development.jpeg',
        imageAlt: 'Cross-Platform Development Image',
        courses: [
          'Introduction to Cross-Platform Development',
          'React Native',
          'Flutter',
          'Ionic Framework',
          'Progressive Web Apps (PWAs)',
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Game Development',
    description: 'Unleash your creativity and build immersive and engaging games.',
    sections: [
      {
        id: 1,
        title: 'Game Engines',
        description: 'Learn to work with popular game engines for game development.',
        imageSrc: '/courses_image/game-engines.jpeg',
        imageAlt: 'Game Engines Image',
        courses: [
          'Introduction to Game Engines',
          'Unity Game Engine',
          'Unreal Engine',
          'Godot Engine',
          'Game Engine Scripting and Programming',
        ],
      },
      {
        id: 2,
        title: 'Game Design',
        description: 'Explore the principles and techniques of good game design.',
        imageSrc: '/courses_image/game-design.jpeg',
        imageAlt: 'Game Design Image',
        courses: [
          'Game Design Fundamentals',
          'Level Design',
          'Game Mechanics and Dynamics',
          'Storytelling and Narrative Design',
          'User Experience in Games',
        ],
      },
      {
        id: 3,
        title: '2D Game Development',
        description: 'Learn to create 2D games using various frameworks and tools.',
        imageSrc: '/courses_image/2d-game-development.jpeg',
        imageAlt: '2D Game Development Image',
        courses: [
          'Introduction to 2D Game Development',
          'Sprite Creation and Animation',
          'Physics and Collision Detection',
          'Tile Maps and Level Design',
          'Game State Management',
        ],
      },
      {
        id: 4,
        title: '3D Game Development',
        description: 'Dive into the world of 3D game development and create immersive experiences.',
        imageSrc: '/courses_image/3d-game-development.jpeg',
        imageAlt: '3D Game Development Image',
        courses: [
          'Introduction to 3D Game Development',
          '3D Modeling and Texturing',
          'Lighting and Shading',
          'Character Animation',
          'Virtual Reality (VR) and Augmented Reality (AR)',
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'A.I. Engineering',
    description: 'Unlock the power of data and artificial intelligence.',
    sections: [
      {
        id: 4,
        title: 'Data Analysis',
        description: 'Learn to analyze and interpret data to drive informed decision-making.',
        imageSrc: '/courses_image/data-analyst.jpeg',
        imageAlt: 'Data Analyst Image',
        courses: [
          'Introduction to Data Analysis',
          'SQL and Databases',
          'Data Cleaning and Wrangling',
          'Business Intelligence and Data Visualization',
          'Data Analysis Tools and Techniques',
        ],
      },
      {
        id: 3,
        title: 'Data Science',
        description: 'Become a data scientist and uncover valuable insights from data.',
        imageSrc: '/courses_image/data-scientist.jpeg',
        imageAlt: 'Data Scientist Image',
        courses: [
          'Introduction to Data Science',
          'Statistical Analysis and Hypothesis Testing',
          'Data Visualization and Storytelling',
          'Machine Learning for Data Science',
          'Exploratory Data Analysis and Feature Engineering',
        ],
      },

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
        id: 5,
        title: 'Machine Learning Engineer',
        description: 'Build and deploy machine learning models at scale.',
        imageSrc: '/courses_image/machine-learning-engineer.jpeg',
        imageAlt: 'Machine Learning Engineer Image',
        courses: [
          'Introduction to Machine Learning Engineering',
          'Model Development and Evaluation',
          'Machine Learning Pipelines and Deployment',
          'Scalable ML Systems and Infrastructure',
          'MLOps and Model Monitoring',
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
    title: 'IT Support and Networking',
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
    title: 'Augmented Reality (AR) and Virtual Reality (VR)',
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
    title: 'Blockchain and Cryptocurrency',
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
  // ... (other learning paths)
];

const LearningPathDetails = async ({ params }) => {
    const pathId = parseInt(params.id);
    const learningPath = learningPaths.find((path) => path.id === pathId);
  
    if (!learningPath) {
      return <div>Learning path not found</div>;
    }

  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">{learningPath.title}</h1>
          <p className="text-gray-600">{learningPath.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {learningPath.sections.map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: section.id * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={section.imageSrc}
                  alt={section.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <ul className="list-disc list-inside">
                  {section.courses.map((course, index) => (
                    <li key={index} className="text-gray-600">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPathDetails;