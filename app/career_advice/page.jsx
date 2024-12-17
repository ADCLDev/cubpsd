'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Briefcase, TrendingUp, Target, Users, Award, Calendar, Clock, MapPin, UsersIcon } from 'lucide-react'

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
]

const upcomingWorkshops = [
  {
    title: "Personal Branding Workshop",
    date: "July 15, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Online",
    spots: "25 spots available"
  },
  {
    title: "Networking Skills Masterclass",
    date: "August 20, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "PSDC Campus",
    spots: "15 spots available"
  },
  {
    title: "LinkedIn Optimization Session",
    date: "September 25, 2024",
    time: "4:00 PM - 6:00 PM",
    location: "Online",
    spots: "30 spots available"
  }
]

const successStories = [
  {
    name: "Sarah Johnson",
    role: "Data Science Graduate",
    image: "https://img.freepik.com/premium-photo/beautiful-young-african-woman-pointing-up-smiling_33839-8951.jpg?ga=GA1.1.724683099.1731423728&semt=ais_hybrid",
    quote: "The career guidance was instrumental in helping me land my dream job at a leading tech company."
  },
  {
    name: "Michael Lee",
    role: "Digital Marketing Professional",
    image: "https://img.freepik.com/free-photo/confident-sassy-young-bearded-gay-man-pink-t-shirt-shirt-hold-hand-waist-pointing-upper-left-corner-smiling-suggest-friends-visit-party-nearby_176420-37053.jpg?ga=GA1.1.724683099.1731423728&semt=ais_hybrid",
    quote: "The workshops and career resources helped me transition into a new role with confidence and expertise."
  },
  {
    name: "Emma Rodriguez",
    role: "Supply Chain Specialist",
    image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?ga=GA1.1.724683099.1731423728&semt=ais_hybrid",
    quote: "The career planning sessions helped me map out my professional growth and achieve my career goals."
  }
]

function FadeInSection({ children }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export default function CareerAdvicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-[#8B1538] to-[#A91B45] py-20 px-8 text-center text-white relative overflow-hidden"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.02, 1],
            translateY: [0, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <h1 className="text-5xl font-bold mb-6">Career Development Resources</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-100">
            Access expert guidance, industry insights, and practical tools to advance your professional journey.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10"></div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Career Resources Section */}
        <FadeInSection>
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Career Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {careerResources.map((resource, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-[#8B1538] mr-4">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-bold">{resource.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link 
                    href={resource.link}
                    className="text-[#8B1538] font-semibold hover:text-[#A91B45] inline-flex items-center"
                  >
                    Learn More 
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Upcoming Workshops Section */}
        <FadeInSection>
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Career Workshops</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingWorkshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h3 className="text-xl font-bold text-[#8B1538] mb-4">{workshop.title}</h3>
                  <div className="space-y-3 text-gray-600 mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-[#8B1538]" />
                      <p>{workshop.date}</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-[#8B1538]" />
                      <p>{workshop.time}</p>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-[#8B1538]" />
                      <p>{workshop.location}</p>
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="w-5 h-5 mr-2 text-green-600" />
                      <p className="text-green-600">{workshop.spots}</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#8B1538] text-white py-2 px-4 rounded-lg hover:bg-[#A91B45] transition-colors duration-300 w-full"
                  >
                    Register Now
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Success Stories Section */}
        <FadeInSection>
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center mb-6">
                    <Image
                      src={story.image}
                      alt={story.name}
                      width={64}
                      height={64}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{story.name}</h3>
                      <p className="text-[#8B1538]">{story.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "{story.quote}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Book Consultation CTA */}
        <FadeInSection>
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-8 text-center rounded-2xl shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-6">Need Personalized Career Guidance?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Book a one-on-one consultation with our career advisors to discuss your professional goals 
              and create a customized career development plan.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#8B1538] text-white py-4 px-8 rounded-lg hover:bg-[#A91B45] transition-colors duration-300 text-lg font-semibold"
            >
              Book Consultation
            </motion.button>
          </motion.div>
        </FadeInSection>
      </div>
    </div>
  )
}
