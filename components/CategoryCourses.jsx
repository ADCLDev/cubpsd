'use client';
import { fetchAllCoursesByCategory } from '../utils/api';
import { useEffect, useState } from 'react';
import CourseCard from '@/components/shared/CourseCard';
import { usePathname } from 'next/navigation';

const CategoryCourses = (category) => {
  const [courses, setCourses] = useState([]);
  const path = usePathname().split('/');
  const categoryId = path[path.length - 1];

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllCoursesByCategory(categoryId);
      setCourses(data);
    };
    fetchData();
  }, [categoryId]);

  return (
    <div className="flex flex-col gap-5 mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl">
      {Array.isArray(courses) && courses.length > 0 ? (
        <>
          <h1 className="font-bold text-3xl">Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {courses.map((course, ind) => (
              <CourseCard key={ind} course={course} category={category} />
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CategoryCourses;