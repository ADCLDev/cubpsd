'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import CourseCard from '@/components/shared/CourseCard';
import { fetchCategories, fetchAllCategoriesWithCourses } from '../../utils/api';

const HomeCourses = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const path = usePathname().split('/').pop();
  const isAllCoursesView = path === 'all';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const data = isAllCoursesView
          ? await fetchAllCategoriesWithCourses()
          : await fetchCategories();
        
        setCategories(data);
      } catch (err) {
        setError('Failed to fetch courses. Please try again later.');
        console.error('Error fetching courses:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isAllCoursesView]);

  const renderCategoryContent = (category, index) => {
    const hasValidCourses = category.courses.some(
      (course) => course.category && course.category.id === category.id
    );

    if (!hasValidCourses) return null;

    return (
      <div key={category.id || index} className="flex flex-col gap-5">
        <h1 className="font-bold text-3xl">{category.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {category.courses
            .filter((course) => course.category && course.category.id === category.id)
            .map((course, ind) => (
              <CourseCard
                key={course.id || ind}
                course={course}
                category={category}
              />
            ))}
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-gray-600">Loading courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-wine-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl">
      {Array.isArray(categories) && categories.length > 0 ? (
        categories.map((category, index) => renderCategoryContent(category, index))
      ) : (
        <p className="text-gray-600">No courses available.</p>
      )}
    </div>
  );
};

export default HomeCourses;