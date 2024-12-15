'use client';
import React, { useState } from 'react';
import { FaBook, FaLanguage, FaGraduationCap, FaFacebookMessenger, FaWhatsapp, FaFacebook } from "react-icons/fa6";
import Link from "next/link";
import Modal from '../Modal';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFindOutMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="font-normal text-base">Our Mission is to provide an all Inclusive Platform in Education</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-5">
        <Link href={`/category/all`}>
          <div className="flex flex-col max-w-md h-[440px] md:h-[400px] mx-auto p-8 bg-wine-700 text-white rounded-3xl shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="flex items-center text-3xl font-bold">
                <FaBook className="mr-2 text-3xl text-yellow-300" />
                <span className='text-yellow-300'>Training</span>
              </div>
            </div>
            <p className="mb-6 text-lg">
              PSDC emphasizes on acquiring knowledge and sharing real-life experiences.
            </p>
            <ul className="list-disc list-inside mb-6">
              <li>Latest Training Modules and Technology</li>
              <li>Technologically Advanced Lab Facility</li>
              <li>Well-Qualified and Experienced Instructors</li>
            </ul>
            <button className="btn bg-black text-white hover:bg-slate-700 mt-9">Find Out More</button>
          </div>
        </Link>

        <div className="flex flex-col max-w-md mx-auto h-[400px] md:h-[400px] p-8 bg-wine-700 text-white rounded-3xl shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="flex items-center text-3xl font-bold">
              <FaLanguage className="mr-2 text-3xl text-yellow-300" />
              <span className='text-yellow-300'>Language</span>
            </div>
          </div>
          <p className="mb-6 text-lg">
            Master languages with our expert instructors and comprehensive preparation programs.
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>French Language Courses (All Levels)</li>
            <li>IELTS Preparation Program</li>
            <li>Native Speaking Instructors</li>
            <li>Practice Tests & Study Materials</li>
          </ul>
          <button onClick={handleFindOutMore} className="btn bg-black text-white hover:bg-slate-700">
            Find Out More
          </button>
        </div>

        <div className="flex flex-col max-w-md mx-auto h-[400px] md:h-[400px] p-8 bg-wine-700 text-white rounded-3xl shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="flex items-center text-3xl font-bold">
              <FaGraduationCap className="mr-2 text-3xl text-yellow-300" />
              <span className='text-yellow-300'>Exams</span>
            </div>
          </div>
          <p className="mb-6 text-lg">
            Authorized testing center for international certifications and examinations.
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Pearson VUE Testing Center</li>
            <li>GED (General Educational Development)</li>
            <li>Professional Certification Exams</li>
            <li>Exam Preparation Support</li>
          </ul>
          <button onClick={handleFindOutMore} className="btn bg-black text-white hover:bg-slate-700">
            Find Out More
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="mb-6">This feature is currently under development.</p>
          <button
            className="btn bg-black text-white hover:bg-slate-700"
            onClick={handleCloseModal}
          >
            OK
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Services;