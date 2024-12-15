"use client";
import { useState } from "react";
import CourseCardStatic from "../../../components/shared/CourseCardStatic";
import categoryList from "../../../components/StaticData/CourseList";
import Image from "next/image";


const PopularCoursesStatic = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="font-bold text-4xl">Courses</h1>
        <p className="font-normal text-base">
          We have designed our courses with the most demanding professional skills. The knowledge,
          experience, and expertise gained through the program will ensure your desired job in the
          global market. From the list below you can enroll to any online or offline courses at any
          time.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center py-5">
        <div>
          <button
            onClick={() => setSelectedCategory(null)}
            className={`${
              selectedCategory === null ? "bg-wine-700 text-white" : "bg-[#F5B800] text-black"
            } font-bold py-2 px-4 shadow-md rounded-xl h-20 w-36`}
          >
            All
          </button>
        </div>
        {categoryList.map((category) => (
          // <div key={category.id}>
          //   <button
          //     onClick={() => setSelectedCategory(category.id)}
          //     className={`${
          //       selectedCategory === category.id ? "bg-[#F5B800] text-white" : "bg-slate-200 text-black"
          //     } font-bold py-2 px-4 rounded h-20 w-36`}
          //   >
          //     {category.name}
          //   </button>
          // </div>
          <button key={category.id} className={`${
                  selectedCategory === category.id ? "bg-wine-700 text-white" : "bg-[#F5B800] text-black"
                } rounded-xl shadow-md`} onClick={() => setSelectedCategory(category.id)}>
            <div className="card w-[200px] p-1">
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center">
                  <div className="mb-1">
                    <Image
                      width={40}
                      height={40}
                      src={category.image}
                      alt={category.name}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-md pb-1">{category.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
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