// 'use client';
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { useEffect, useState } from "react";
// import { fetchPopularCategories } from "@/utils/api";

import categoryList from "../StaticData/CourseList";

const Footer = () => {
  // Get popular courses
  // const [popularCourses, setPopularCourses] = useState([]);
  
  // useEffect(() => {
    
  //   setPopularCourses(courseList);
  // }, []);

  return (
    // bg-gradient-to-r from-blue-900 to-purple-900
    <footer className="bg-red-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h6 className="text-xl font-bold mb-4">Contact</h6>
            <p className="flex items-start gap-4 mb-2">
              <span className="mt-1">
                <FaMapMarkerAlt />
              </span>
              <span>
                Head Office:
                <br />
                Mustafa Arcade (Flat A3)
                <br />
                House # 08 , Road # 1/A
                <br />
                Block J, Baridhara
                <br />
                Dhaka, Bangladesh
              </span>
            </p>
            <p className="flex items-center gap-4 mb-2">
              <span>
                <FaPhone />
              </span>
              <span>
                +8801755557150
                <br />
                +8801926712302
              </span>
            </p>
            <p className="flex items-center gap-4">
              <span>
                <MdEmail />
              </span>
              <span>contact@revolutiontech.zone</span>
            </p>
          </div>
          <div>
            <h6 className="text-xl font-bold mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <a href="/free_seminar_schedule" className="hover:text-[#A93226] transition duration-300">
                  Free Seminar Schedule
                </a>
              </li>
              <li>
                <a href="/mentors" className="hover:text-[#A93226] transition duration-300">
                  Mentors
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#A93226] transition duration-300">
                  Success Story
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-[#A93226] transition duration-300">
                  Our Gallery
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-[#A93226] transition duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#A93226] transition duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="/privacy_policy" className="hover:text-[#A93226] transition duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            {categoryList.length > 0 && (
              <>
                <h6 className="text-xl font-bold mb-4">Popular Courses</h6>
                <ul className="space-y-2">
                  {categoryList.map((course) => (
                    <li key={course.id}>
                      <a href={`/category/by_id/${course.id}`} className="hover:text-[#A93226] transition duration-300">
                        {course.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div>
            <h6 className="text-xl font-bold mb-4">Others</h6>
            <ul className="space-y-2">
              <li>
                <a href="/about_us" className="hover:text-[#A93226] transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/our_facility" className="hover:text-[#A93226] transition duration-300">
                  Our Facility
                </a>
              </li>
              <li>
                <a href="/our_achievement" className="hover:text-[#A93226] transition duration-300">
                  Our Achievement
                </a>
              </li>
              <li>
                <a href="/career_placement" className="hover:text-[#A93226] transition duration-300">
                  Career Placement
                </a>
              </li>
              <li>
                <a href="/freelancing" className="hover:text-[#A93226] transition duration-300">
                  Freelancing
                </a>
              </li>
              <li>
                <a href="/student_feedback" className="hover:text-[#A93226] transition duration-300">
                  Students Feedback
                </a>
              </li>
              <li>
                <a href="/contact_us" className="hover:text-[#A93226] transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


{/* <ul className="space-y-2">
              <li>
                <a href="/courses/web_development" className="hover:text-[#A93226] transition duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/courses/graphic_design" className="hover:text-[#A93226] transition duration-300">
                  Professional Graphic Design
                </a>
              </li>
              <li>
                <a href="/courses/digital_marketing" className="hover:text-[#A93226] transition duration-300">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="/courses/mern_development" className="hover:text-[#A93226] transition duration-300">
                  Mern Stack Development
                </a>
              </li>
              <li>
                <a href="/courses/motion_graphics" className="hover:text-[#A93226] transition duration-300">
                  Motion Graphics
                </a>
              </li>
              <li>
                <a href="/courses/3d_animation" className="hover:text-[#A93226] transition duration-300">
                  Professional 3D Animation
                </a>
              </li>
              <li>
                <a href="/courses/content_writing" className="hover:text-[#A93226] transition duration-300">
                  Content Writing
                </a>
              </li>
            </ul> */}