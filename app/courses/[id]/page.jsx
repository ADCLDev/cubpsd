'use client';
import CategoryCourses from "@/components/CategoryCourses";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchCategoryById } from "@/utils/api";

const Courses = () => {
  const [category, setCategory] = useState(null);
  const category_id = usePathname().split('/').pop();

  useEffect(() => {
      const fetchData = async () => {
          const categoryData = await fetchCategoryById(category_id);
          setCategory(categoryData);
      };
      fetchData();
  }, [category_id]);

    return (
        <div className="mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl py-10">

        <div className="flex flex-col gap-5">
        <h1 className="text-red-700 font-extrabold text-3xl">{category ? (`Courses on ${category.name}`) : 'Courses'}</h1>
            <p className="text-base font-normal lg:w-3/4">We offer all the trendy courses that are in demand in the global market. In addition, you are getting lab facilities where high-end computers with the required configuration are ready to facilitate your learning. After class, you can practice the topic in our labs to grow your skills. The courses are designed to make you confident throughout the learning journey with Revolution Tech Zone.</p>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-10 py-10">

        <div className="flex justify-center items-center text-center">
  <Link href='/courses/1'>
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/gd.png" alt="" />
    </div>
    <div>
      <h3>Graphic &amp; Multimedia</h3>
    </div>
  </div>
</Link>
</div>
      <Link href='/courses/2'>
      <div className="flex justify-center items-center text-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/wd.png" alt="" />
    </div>
    <div>
    <h3>Web &amp; Software</h3>
    </div>
  </div>
</div>
</Link>



      
        </div>

        <div className="text-center flex flex-col gap-5">
            <h1 className="text-3xl font-bold">Admission Is Going On</h1>
            <p className="w-3/4 mx-auto">We have designed our course list with the demanding skills in the local and global market. From the list, you can pick any online or offline course according to your preference.</p>
        </div>
        
        <div className="py-10"><CategoryCourses category={category}></CategoryCourses></div>
        
            
        </div>
    );
};

export default Courses;