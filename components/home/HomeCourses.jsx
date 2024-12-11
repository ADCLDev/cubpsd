'use client';
import { fetchCategories, fetchAllCategoriesWithCourses } from '../../utils/api';
import { useEffect, useState } from 'react';
import CourseCard from '@/components/shared/CourseCard';
import { usePathname } from 'next/navigation';

const HomeCourses = () => {
  const [categories, setCategories] = useState([]);
  const path = usePathname().split('/').pop();

  useEffect(() => {
    const fetchData = async () => {
      if (path === 'all') {
        const data = await fetchAllCategoriesWithCourses();
        setCategories(data);
      } else {
        const data = await fetchCategories();
        console.log('data: ', data);
        setCategories(data);
      }
    };
    fetchData();
  }, [path]);

  return (
    <div className="flex flex-col gap-5 mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl">
      {Array.isArray(categories) && categories.length > 0 ? (
        path === 'all' ? (
          categories.map((category, index) =>
            category.courses.some((course) => course.category && course.category.id === category.id) && (
              <div key={index} className="flex flex-col gap-5">
                <h1 className="font-bold text-3xl">{category.name}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                  {category.courses.map((course, ind) =>
                    course.category && course.category.id === category.id && (
                      <CourseCard key={ind} course={course} category={category} />
                    )
                  )}
                </div>
              </div>
            )
          )
        ) : (
            categories.map((category, index) => (
                category.courses.some((course) => course.category && course.category.id === category.id) && (
                  <div key={index} className="flex flex-col gap-5">
                    <h1 className="font-bold text-3xl">{category.name}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                      {category.courses.map((course, ind) => (
                        course.category && course.category.id === category.id && (
                          <CourseCard key={ind} course={course} category={category} />
                        )
                      ))}
                    </div>
                  </div>
                )
              ))
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomeCourses;