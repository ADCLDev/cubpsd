"use client";
import { useState, useEffect } from "react";
import { fetchPopularCategories, fetchPopularCourses } from "../../../utils/api";
import CourseCard from "../../../components//shared/CourseCard";

const PopularCourses = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await fetchPopularCategories();
        setCategories(data);
        setSelectedCategory(data[0]?.id);
      } catch (error) {
        console.error("Error fetching popular categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      if (selectedCategory) {
        try {
          const data = await fetchPopularCourses(selectedCategory);
          console.log('data new: ', data)
          setCourses(data);
        } catch (error) {
          console.error("Error fetching popular courses:", error);
        }
      }
    };

    fetchCourses();
  }, [selectedCategory]);

  return (
    <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="font-bold text-4xl">Popular Courses</h1>
        <p className="font-normal text-base">
          Our courses are meticulously crafted to meet the highest professional 
          standards, ensuring you acquire the most sought-after skills in today’s 
          competitive job market. The knowledge, experience, and expertise you will gain 
          through our programs will position you for success and help you secure your 
          desired job on a global scale. You can choose to enroll in any of our online 
          or offline courses from the list below at your convenience.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center py-5">
  <div>
    <button
      onClick={() => setSelectedCategory(null)}
      className={`${
        selectedCategory === null ? "bg-red-500 text-white" : "bg-slate-200 text-black"
      } font-bold py-2 px-4 rounded h-20 w-36`}
    >
      All
    </button>
  </div>
  {categories.map((category) => (
    <div key={category.id}>
      <button
        onClick={() => setSelectedCategory(category.id)}
        className={`${
          selectedCategory === category.id ? "bg-red-500 text-white" : "bg-slate-200 text-black"
        } font-bold py-2 px-4 rounded h-20 w-36`}
      >
        {category.name}
      </button>
    </div>
  ))}
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;