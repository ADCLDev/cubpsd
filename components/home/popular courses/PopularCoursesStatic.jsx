'use client';

import { useState } from "react";
import CourseCardStatic from "../../../components/shared/CourseCardStatic";
import categoryList from "../../../components/StaticData/CourseList";
import Image from "next/image";

const PopularCoursesStatic = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
      {/* Header Section */}
      <div className="flex flex-col gap-5 text-center max-w-3xl mx-auto mb-8">
        <h1 className="font-bold text-4xl text-gray-800">Courses</h1>
        <p className="font-normal text-base text-gray-600 leading-relaxed">
          We have designed our courses with the most demanding professional skills. The knowledge,
          experience, and expertise gained through the program will ensure your desired job in the
          global market. From the list below you can enroll to any online or offline courses at any
          time.
        </p>
      </div>

      {/* Mobile Dropdown */}
      <div className="block md:hidden py-5">
        <select
          className="w-full p-3 rounded-lg border border-gray-200 bg-white text-gray-800 font-medium shadow-sm focus:ring-2 focus:ring-[#BE1E2D] focus:border-[#BE1E2D] outline-none transition-all duration-200"
          value={selectedCategory || ""}
          onChange={(e) => setSelectedCategory(e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">All Categories</option>
          {categoryList.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop/Tablet Category Cards */}
      <div className="hidden md:flex flex-wrap gap-4 justify-center py-8">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`
            transition-all duration-300 ease-in-out
            ${selectedCategory === null 
              ? "bg-[#BE1E2D] text-white shadow-lg" 
              : "bg-wine-300 text-gray-800 hover:bg-[#fdf1f3]"
            }
            font-bold py-3 px-6 rounded-lg border border-gray-100
            hover:shadow-md
          `}
        >
          All Categories
        </button>

        {categoryList.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`
              group transition-all duration-300 ease-in-out
              ${selectedCategory === category.id 
                ? "bg-[#BE1E2D] text-white" 
                : "bg-[#fdf1f3] text-gray-800 hover:bg-[#fdf1f3]"
              }
              rounded-lg border border-gray-100 hover:shadow-md
            `}
          >
            <div className="w-[200px] p-4">
              <div className="flex flex-col items-center gap-3">
                <div className={`
                  p-3 rounded-full transition-colors duration-300
                  ${selectedCategory === category.id 
                    ? "bg-white/10" 
                    : "bg-white group-hover:bg-[#fae6e8]"
                  }
                `}>
                  <Image
                    width={40}
                    height={40}
                    src={category.image}
                    alt={category.name}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-md">{category.name}</h3>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {(selectedCategory === null
          ? categoryList.flatMap((category) =>
              category.courses.map((course) => ({ ...course, category }))
            )
          : categoryList.find((category) => category.id === selectedCategory)?.courses.map((course) => ({
              ...course,
              category: categoryList.find((category) => category.id === selectedCategory),
            })) || []
        ).map((courseWithCategory) => (
          <CourseCardStatic
            key={courseWithCategory.course_id}
            course={courseWithCategory}
            category={courseWithCategory.category}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCoursesStatic;